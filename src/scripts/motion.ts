// Site-wide motion, rebuilt from the X-axis Framer bundles (values are Framer's, not guesses).
// Hooks are data attributes so pages stay plain Astro markup:
//   data-appear            page-load entrance, spring k300 d60. CSS vars --ay (y), --as (scale), --ad (delay s)
//   data-appear="tween"    nav-link drop: tween 0.5s ease [.44,0,.34,.98], delay .4
//   data-rise              scroll-linked y 170→0 (100 tablet, 60 phone) as the element enters, spring k500 d60
//   data-reveal            once on entering view: from --rx --ry --rs --ro, delay --rd, threshold --rt,
//                          spring k300 d(--rdamp, 60) or data-reveal="tween" (--rdur, default 1.3s). data-reveal-replay resets on exit.
//                          data-reveal-root on an ancestor makes that ancestor the in-view trigger.
//   data-scrub='[...]'     scroll-linked keyframes (see Key), data-scrub-min="1200" desktop only,
//                          data-scrub-spring="none" for Framer's raw onScroll (no smoothing)
//   data-count="a,b"       number counter (data-prefix / data-suffix), once in view, spring 2s bounce 0
//   data-flip              company Text Flip, once 5% in view, desktop >= 1024
//   data-inview-play       video plays only while on screen
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { animate } from 'motion';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const riseDist = () => (innerWidth >= 1200 ? 170 : innerWidth >= 768 ? 100 : 60);
const cssNum = (cs: CSSStyleDeclaration, name: string, d: number) => {
  const s = cs.getPropertyValue(name).trim();
  return s === '' ? d : parseFloat(s);
};

// Framer's Lenis component passes no lerp/duration, so this is Lenis defaults.
function smoothScroll() {
  (window as any).lenis = new Lenis({ autoRaf: true, anchors: true, allowNestedScroll: true, stopInertiaOnNavigate: true });
}

function appear() {
  for (const el of document.querySelectorAll<HTMLElement>('[data-appear]')) {
    const cs = getComputedStyle(el);
    if (el.dataset.appear === 'tween') {
      animate(el, { opacity: [0.001, 1], y: [-10, 0] }, { duration: 0.5, ease: [0.44, 0, 0.34, 0.98], delay: 0.4 });
      continue;
    }
    animate(
      el,
      { opacity: [0.001, 1], y: [cssNum(cs, '--ay', 0), 0], scale: [cssNum(cs, '--as', 1), 1] },
      { type: 'spring', stiffness: 300, damping: 60, mass: 1, delay: cssNum(cs, '--ad', 0) },
    );
  }
}

// ---- one-shot in-view triggers, using Framer's own test (runtime ks()):
// visible height / min(element height, viewport) >= threshold; threshold 0 = any pixel.
type Watch = { el: HTMLElement; th: number; on: () => void; off?: () => void; shown?: boolean };
const watches: Watch[] = [];
function checkWatches() {
  for (const w of watches) {
    const r = w.el.getBoundingClientRect();
    const vis = Math.min(r.bottom, innerHeight) - Math.max(r.top, 0);
    const inView = vis > 0 && (w.th === 0 || vis / Math.min(r.height, innerHeight) >= w.th);
    if (inView && !w.shown) (w.shown = true), w.on();
    else if (!inView && vis <= 0 && w.shown && w.off) (w.shown = false), w.off();
  }
  for (let i = watches.length - 1; i >= 0; i--) if (watches[i].shown && !watches[i].off) watches.splice(i, 1);
}
const watch = (el: HTMLElement, th: number, on: () => void, off?: () => void) => watches.push({ el, th, on, off });

function reveal() {
  for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
    const cs = getComputedStyle(el);
    const from = { x: cssNum(cs, '--rx', 0), y: cssNum(cs, '--ry', 0), scale: cssNum(cs, '--rs', 1), opacity: cssNum(cs, '--ro', 0) };
    const delay = cssNum(cs, '--rd', 0);
    const opts =
      el.dataset.reveal === 'tween'
        ? { duration: cssNum(cs, '--rdur', 1.3), ease: [0.44, 0, 0.56, 1] as const, delay }
        : { type: 'spring' as const, stiffness: 300, damping: cssNum(cs, '--rdamp', 60), mass: 1, delay };
    animate(el, from, { duration: 0 });
    const trigger = el.closest<HTMLElement>('[data-reveal-root]') ?? el;
    watch(
      trigger,
      cssNum(cs, '--rt', 0),
      () => animate(el, { x: 0, y: 0, scale: 1, opacity: 1 }, opts),
      el.hasAttribute('data-reveal-replay') ? () => animate(el, from, { duration: 0 }) : undefined,
    );
  }
}

function count() {
  for (const el of document.querySelectorAll<HTMLElement>('[data-count]')) {
    const [from, to] = el.dataset.count!.split(',').map(Number);
    const fmt = (n: number) => `${el.dataset.prefix ?? ''}${Math.round(n)}${el.dataset.suffix ?? ''}`;
    el.textContent = fmt(from);
    watch(el, 0, () => animate(from, to, { type: 'spring', duration: 2, bounce: 0, onUpdate: (n) => (el.textContent = fmt(n)) }));
  }
}

// Transform order matters here (rotate, then translate along the tilted axis), so use strings.
function flip() {
  if (innerWidth < 1024) return;
  for (const el of document.querySelectorAll<HTMLElement>('[data-flip]')) {
    el.style.opacity = '0';
    watch(el, 0.05, () =>
      el.animate(
        [
          { opacity: 0, transform: 'rotateX(-60deg) translateY(60px)' },
          { opacity: 1, transform: 'rotateX(0deg) translateY(0px)' },
        ],
        { duration: 800, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' },
      ),
    );
  }
}

function inViewPlay() {
  const io = new IntersectionObserver((es) =>
    es.forEach((e) => {
      const v = e.target as HTMLVideoElement;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }),
  );
  document.querySelectorAll('video[data-inview-play]').forEach((v) => io.observe(v));
}

// ---- scroll-linked values: marker keyframes (data-scrub) and entry rises (data-rise).
// Framer onScrollTarget: a keyframe fires when a marker edge crosses the line at th * viewport
// height (th 1 = bottom of the screen). Refs use the marker's bottom edge; the implicit first
// keyframe uses the first marker's top edge ("edge":"top"). "at" can also be px or "end".
type Key = { at: number | string; th?: number; edge?: 'top'; v: Record<string, number> };
type Item = {
  el: HTMLElement;
  rise: boolean;
  keys: Key[];
  min: number;
  spring: [number, number, number] | null; // stiffness, damping, mass
  pos: number[];
  top: number;
  h: number;
  x: Record<string, number> | null;
  v: Record<string, number>;
};
const ZERO: Record<string, number> = { x: 0, y: 0, scale: 1, opacity: 1 };

function layoutTop(el: HTMLElement) {
  let y = 0;
  for (let e: HTMLElement | null = el; e; e = e.offsetParent as HTMLElement | null) y += e.offsetTop;
  return y;
}

function scrollFx() {
  const items: Item[] = [];
  const base = { pos: [], top: 0, h: 0, x: null, v: {} };
  for (const el of document.querySelectorAll<HTMLElement>('[data-scrub]')) {
    const sp = el.dataset.scrubSpring;
    items.push({
      el,
      rise: false,
      keys: JSON.parse(el.dataset.scrub!),
      min: parseFloat(el.dataset.scrubMin || '0'),
      // Framer scroll transforms: spring k400 d60 m0.1 unless the effect is raw onScroll.
      spring: sp === 'none' ? null : [400, 60, 0.1],
      ...base,
      v: {},
    });
  }
  for (const el of document.querySelectorAll<HTMLElement>('[data-rise]'))
    // Framer onInView transform: useScroll(['start end','end end']) smoothed by spring k500 d60 m1.
    items.push({ el, rise: true, keys: [], min: 0, spring: [500, 60, 1], ...base, v: {} });
  if (!items.length) return;

  const measure = () => {
    const vh = innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    for (const it of items) {
      if (it.rise) {
        it.top = layoutTop(it.el);
        it.h = it.el.offsetHeight || 1;
        continue;
      }
      it.pos = it.keys.map((k) => {
        if (typeof k.at === 'number') return k.at;
        if (k.at === 'end') return max;
        const m = document.querySelector(k.at)!.getBoundingClientRect();
        return m.top + scrollY + (k.edge === 'top' ? 0 : m.height) - vh * (k.th ?? 1);
      });
    }
  };

  const target = (it: Item): Record<string, number> => {
    const y = scrollY;
    if (it.rise) {
      const p = Math.min(1, Math.max(0, (y + innerHeight - it.top) / it.h));
      return { y: riseDist() * (1 - p) };
    }
    const { pos, keys } = it;
    let i = 0;
    while (i < pos.length - 1 && y > pos[i + 1]) i++;
    const a = keys[i].v;
    const b = keys[Math.min(i + 1, keys.length - 1)].v;
    const t = y <= pos[0] ? 0 : i >= pos.length - 1 ? 1 : (y - pos[i]) / (pos[i + 1] - pos[i] || 1);
    const out: Record<string, number> = {};
    for (const p in ZERO) out[p] = (a[p] ?? ZERO[p]) + ((b[p] ?? ZERO[p]) - (a[p] ?? ZERO[p])) * t;
    return out;
  };

  let last = 0;
  let running = false;
  const tick = (now: number) => {
    const dt = Math.min(now - last, 64) / 1000;
    last = now;
    let moving = false;
    for (const it of items) {
      if (innerWidth < it.min) {
        if (it.x) (it.el.style.transform = ''), (it.el.style.opacity = ''), (it.x = null);
        continue;
      }
      const t = target(it);
      if (!it.x || !it.spring) it.x = { ...t };
      else {
        const [k, c, m] = it.spring;
        const n = Math.max(1, Math.ceil(dt / 0.004));
        const h = dt / n;
        for (const p in t) {
          let x = it.x[p];
          let v = it.v[p] ?? 0;
          for (let s = 0; s < n; s++) {
            v += ((-k * (x - t[p]) - c * v) / m) * h;
            x += v * h;
          }
          it.x[p] = x;
          it.v[p] = v;
          if (Math.abs(x - t[p]) > 0.01 || Math.abs(v) > 0.01) moving = true;
        }
      }
      const c = it.x;
      if (it.rise) it.el.style.transform = `translate3d(0, ${c.y}px, 0)`;
      else {
        it.el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) scale(${c.scale})`;
        it.el.style.opacity = String(c.opacity);
      }
    }
    running = moving;
    if (moving) requestAnimationFrame(tick);
  };
  const kick = () => {
    checkWatches();
    if (running) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(tick);
  };

  measure();
  kick();
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', () => (measure(), kick()));
  // Lazy images and fonts shift layout after load; re-measure whenever the page resizes.
  new ResizeObserver(() => (measure(), kick())).observe(document.body);
}

if (!reduced) {
  smoothScroll();
  appear();
  reveal();
  count();
  flip();
  inViewPlay();
  scrollFx();
  addEventListener('scroll', checkWatches, { passive: true });
  checkWatches();
}
