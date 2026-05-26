with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old = """.emotional-section {
  padding: 220px 80px;
  background: var(--maroon-deep);
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
  margin: -4px 0;
}
.emotional-section::before {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 60% at 20% 50%, rgba(232,117,10,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 70% at 80% 50%, rgba(139,26,46,0.5) 0%, transparent 60%);
}
.emotional-section::after {
  content: 'FEEL';
  position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
  font-family: 'Fraunces', serif;
  font-size: clamp(120px, 20vw, 320px);
  font-weight: 900; letter-spacing: -0.06em;
  color: rgba(255,255,255,0.04);
  pointer-events: none; line-height: 0.9;
  white-space: nowrap; user-select: none;
}
/* Override text elements inside emotional section (dark bg) */
.emotional-section .section-label { color: var(--saffron-mid); }
.emotional-section .section-label::before { background: linear-gradient(to right, var(--saffron), var(--gold-pale)); }
.word-reveal-line { overflow: hidden; margin-bottom: 2px; position: relative; z-index: 2; }
.word-reveal-word {
  display: inline-block; margin-right: 0.26em;
  transform: translateY(110%); opacity: 0;
  transition: transform 0.7s cubic-bezier(0.25,0.1,0.25,1), opacity 0.7s ease;
  will-change: transform, opacity;
}
.word-reveal-word.visible { transform: translateY(0); opacity: 1; }
.emotional-line {
  font-family: 'Fraunces', serif;
  font-size: clamp(30px, 5vw, 72px);
  font-weight: 300; letter-spacing: -0.02em;
  text-align: center; line-height: 1.45; padding: 10px 0;
  color: rgba(251,247,241,0.92);
  position: relative; z-index: 1;
}
.emotional-line.highlight .word-reveal-word { color: var(--saffron-mid); font-style: italic; font-weight: 400; }"""

new = """.emotional-section {
  padding: 0;
  background: var(--maroon-deep);
  min-height: 100vh;
  overflow: hidden; position: relative;
}
.emotional-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.emotional-photo-col { position: relative; overflow: hidden; }
.emotional-photo-wrap {
  position: relative; width: 100%; height: 100%;
  overflow: hidden; min-height: 100vh;
}
.emotional-photo {
  width: 100%; height: 116%; object-fit: cover;
  object-position: center top; display: block;
  margin-top: -8%; will-change: transform;
  filter: grayscale(14%) contrast(1.06) brightness(0.7);
}
.emotional-photo-wrap::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(85,13,28,0.08) 40%, var(--maroon-deep) 95%);
  pointer-events: none;
}
.emotional-photo-wrap::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 38%;
  background: linear-gradient(to top, var(--maroon-deep), transparent);
  pointer-events: none; z-index: 1;
}
.emotional-badge {
  position: absolute; bottom: 40px; left: 40px; z-index: 2;
  background: rgba(232,117,10,0.12); border: 1px solid rgba(232,117,10,0.28);
  backdrop-filter: blur(10px);
  color: var(--ivory); padding: 14px 20px; border-radius: 2px;
  display: flex; align-items: center; gap: 12px;
}
.emotional-badge-num {
  font-family: 'Fraunces', serif; font-size: 44px;
  font-weight: 200; line-height: 1; color: var(--saffron-mid);
}
.emotional-badge-label {
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px;
  line-height: 1.5; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.12em;
}
.emotional-content {
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 80px 80px 60px; position: relative; z-index: 2;
}
/* Override text elements inside emotional section (dark bg) */
.emotional-section .section-label { color: var(--saffron-mid); }
.emotional-section .section-label::before { background: linear-gradient(to right, var(--saffron), var(--gold-pale)); }
.emotional-lines { margin-top: 52px; display: flex; flex-direction: column; gap: 20px; }
.emotional-line {
  font-family: 'Fraunces', serif;
  font-size: clamp(26px, 3vw, 52px);
  font-weight: 200; font-style: italic;
  color: var(--ivory); line-height: 1.35; margin: 0;
  position: relative; z-index: 1;
}
.emotional-line-final {
  font-size: clamp(13px, 1.3vw, 20px);
  font-style: normal; font-weight: 400; letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(232,117,10,0.82); margin-top: 20px; padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
}"""

css = css.replace(old, new)

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Done. emotional-layout:', '.emotional-layout' in css)
