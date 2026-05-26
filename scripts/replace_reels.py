import re

with open('src/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Find the reels block: from "/* ─── Reels Section" to before "/* ─── Signature Section"
start = css.find('/* ─── Reels Section')
if start == -1:
    start = css.find('/* -- Reels Section')
end = css.find('/* ─── Signature Section', start)
if end == -1:
    end = css.find('/* ─── Signature', start)

print(f'Reels block: {start} -> {end}')
print(repr(css[start:start+50]))

new_reels = '''/* ─── Reels Section ─────────────────────── */
.reels-section {
  padding: 120px 0 80px;
  background: var(--warm-white);
  overflow: hidden;
  position: relative;
}
.reels-header {
  padding: 0 80px;
  margin-bottom: 56px;
}
.reels-heading {
  font-family: 'Fraunces', serif;
  font-size: clamp(36px, 4vw, 60px);
  font-weight: 700;
  color: var(--maroon-deep);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 12px 0 0;
}
.reels-heading em {
  font-style: italic;
  color: var(--saffron);
}

/* Full-width 4-col strip */
.reels-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  width: 100%;
}
.reel-tile {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 9 / 16;
  background: var(--parchment);
}
.reel-tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.25,0.1,0.25,1);
}
.reel-tile:hover .reel-tile-img { transform: scale(1.06); }

/* Gradient overlay */
.reel-tile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(85,13,28,0.90) 0%,
    rgba(85,13,28,0.35) 35%,
    transparent 65%,
    rgba(0,0,0,0.18) 100%
  );
  transition: opacity 0.4s ease;
}
.reel-tile:hover .reel-tile-overlay { opacity: 1.15; }

/* Play button */
.reel-tile-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 54px; height: 54px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.55);
  backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease;
}
.reel-tile:hover .reel-tile-play { opacity: 1; transform: translate(-50%, -50%) scale(1); }

/* Top number */
.reel-tile-num {
  position: absolute;
  top: 18px; left: 20px;
  font-family: 'Fraunces', serif;
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.14em;
}

/* Bottom info */
.reel-tile-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 22px 22px 20px;
}
.reel-tile-sub {
  font-family: 'Fraunces', serif;
  font-size: 12px;
  font-style: italic;
  color: rgba(255,255,255,0.62);
  margin-bottom: 5px;
  letter-spacing: 0.02em;
}
.reel-tile-label {
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.reel-tile-views {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: var(--gold-pale);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-top: 6px;
}

/* CTA row below strip */
.reels-cta {
  display: flex;
  justify-content: center;
  padding: 52px 0 0;
}

@media (max-width: 768px) {
  .reels-header { padding: 0 24px; }
  .reels-strip { grid-template-columns: repeat(2, 1fr); gap: 2px; }
  .reel-tile { aspect-ratio: 3 / 4; }
  .reel-tile-label { font-size: 16px; }
}
@media (max-width: 480px) {
  .reels-strip { grid-template-columns: repeat(2, 1fr); }
  .reel-tile { aspect-ratio: 2 / 3; }
}

'''

if start != -1 and end != -1:
    css = css[:start] + new_reels + css[end:]
    with open('src/styles.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print('SUCCESS: reels CSS replaced')
else:
    print('ERROR: Could not find block boundaries')
    print('start:', start, 'end:', end)
