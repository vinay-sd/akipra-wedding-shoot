with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old = """/* ─── Why Choose Me Section ─────────────── */
.why-section { padding: 120px 80px; background: var(--ivory); }
.why-layout {
  display: grid; grid-template-columns: 1fr 1.3fr;
  gap: 88px; align-items: center; min-height: 72vh;
}
.why-photo-col {}
.why-photo-wrap { position: relative; }
.why-photo {
  width: 100%; height: 560px; object-fit: cover;
  object-position: center top; display: block;
  border-radius: 2px;
  filter: grayscale(10%) contrast(1.05) brightness(0.97);
}
.why-badge {
  position: absolute; bottom: 24px; right: -20px;
  background: var(--maroon); color: var(--ivory);
  padding: 14px 20px; border-radius: 2px;
  display: flex; align-items: center; gap: 12px;
  box-shadow: 0 12px 40px rgba(85,13,28,0.35);
}
.why-badge-num {
  font-family: 'Fraunces', serif; font-size: 44px;
  font-weight: 200; line-height: 1; color: var(--ivory);
}
.why-badge-label {
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px;
  line-height: 1.5; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.08em;
}
.why-photo-accent {
  position: absolute; top: 24px; left: -12px;
  width: 3px; height: 120px;
  background: linear-gradient(to bottom, var(--saffron), transparent);
}
.why-content { display: flex; flex-direction: column; }
.why-reasons { display: flex; flex-direction: column; }
.why-reason {
  display: grid; grid-template-columns: 48px 1fr;
  gap: 16px; align-items: flex-start;
  padding: 22px 0; border-bottom: 1px solid var(--border-gold);
}
.why-reason:first-child { border-top: 1px solid var(--border-gold); }
.why-reason-num {
  font-family: 'Fraunces', serif; font-size: 28px; font-weight: 200;
  color: var(--maroon); opacity: 0.4; line-height: 1; padding-top: 3px;
}
.why-reason-body {}
.why-reason-title {
  font-family: 'Fraunces', serif; font-size: 18px; font-weight: 300;
  color: var(--text); margin-bottom: 4px;
}
.why-reason-desc {
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px;
  line-height: 1.8; color: var(--text-muted);
}"""

new = """/* ─── Why Choose Me Section ─────────────── */
.why-section {
  padding: 0; background: var(--maroon-deep);
  min-height: 100vh; overflow: hidden; position: relative;
}
.why-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.why-photo-col { position: relative; overflow: hidden; }
.why-photo-wrap {
  position: relative; width: 100%; height: 100%;
  overflow: hidden; min-height: 100vh;
}
.why-photo {
  width: 100%; height: 116%; object-fit: cover;
  object-position: center; display: block;
  margin-top: -8%; will-change: transform;
  filter: grayscale(18%) contrast(1.06) brightness(0.72);
}
.why-photo-wrap::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(85,13,28,0.1) 40%, var(--maroon-deep) 92%);
  pointer-events: none;
}
.why-photo-wrap::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
  background: linear-gradient(to top, var(--maroon-deep), transparent);
  pointer-events: none; z-index: 1;
}
.why-badge {
  position: absolute; bottom: 40px; left: 40px; z-index: 2;
  background: rgba(232,117,10,0.15); border: 1px solid rgba(232,117,10,0.3);
  backdrop-filter: blur(8px);
  color: var(--ivory);
  padding: 14px 20px; border-radius: 2px;
  display: flex; align-items: center; gap: 12px;
}
.why-badge-num {
  font-family: 'Fraunces', serif; font-size: 44px;
  font-weight: 200; line-height: 1; color: var(--saffron-mid);
}
.why-badge-label {
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px;
  line-height: 1.5; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.12em;
}
.why-content {
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 80px 80px 56px; position: relative; z-index: 2;
}
.why-section .section-label { color: var(--saffron-mid); }
.why-section .section-label::before { background: linear-gradient(to right, var(--saffron), var(--gold-pale)); }
.why-lines { margin-top: 52px; display: flex; flex-direction: column; gap: 20px; }
.why-line {
  font-family: 'Fraunces', serif;
  font-size: clamp(26px, 3vw, 50px);
  font-weight: 200; font-style: italic;
  color: var(--ivory); line-height: 1.35; margin: 0;
}
.why-line-final {
  font-size: clamp(15px, 1.4vw, 22px);
  font-style: normal; font-weight: 400; letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(232,117,10,0.8); margin-top: 20px; padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
}"""

css = css.replace(old, new)

# Also ensure film-card has overflow hidden for parallax
css = css.replace(
    '.film-card { position: relative;',
    '.film-card { position: relative; overflow: hidden;'
)

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('why-section new:', '.why-lines' in css, '| film-card overflow:', 'overflow: hidden' in css)
