with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Simplify testimonials section to centred layout (remove testi-layout/testi-left/right etc)
old_testi = """.testimonials-section {
  padding: 100px 80px; background: var(--cream);
  position: relative; overflow: hidden;
}
.testi-layout {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 80px; align-items: center; min-height: 70vh;
}
.testi-left { display: flex; flex-direction: column; gap: 36px; }
.testi-photo-wrap { position: relative; flex-shrink: 0; }
.testi-photo {
  width: 100%; max-height: 400px; object-fit: cover;
  object-position: center top;
  border-radius: 4px; display: block;
  filter: grayscale(12%) contrast(1.04);
}
.testi-photo-badge {
  position: absolute; bottom: 20px; left: 20px;
  background: var(--maroon); color: var(--ivory);
  padding: 10px 16px; border-radius: 4px;
  display: flex; align-items: center; gap: 10px;
}
.testi-photo-badge-num {
  font-family: 'Fraunces', serif; font-size: 36px; font-weight: 200; line-height: 1;
}
.testi-photo-badge-label {
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px;
  line-height: 1.4; opacity: 0.75;
}
.testi-reasons { display: flex; flex-direction: column; gap: 0; }
.testi-reason {
  display: flex; align-items: flex-start; gap: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13.5px;
  line-height: 1.6; color: var(--text-mid);
  padding: 12px 0; border-bottom: 1px solid var(--border-gold);
}
.testi-reason:first-of-type { border-top: 1px solid var(--border-gold); }
.testi-reason-dot {
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  background: var(--saffron); margin-top: 6px;
}
.testi-right { display: flex; flex-direction: column; justify-content: center; }
.testimonial-quote {
  font-family: 'Fraunces', serif;
  font-size: clamp(20px, 2.4vw, 36px);
  font-weight: 200; font-style: italic; color: var(--text);
  line-height: 1.65; position: relative;
}
.testimonial-quote::before { content: '\\201C'; color: var(--saffron); margin-right: 2px; font-size: 1.2em; }
.testimonial-quote::after  { content: '\\201D'; color: var(--saffron); margin-left: 2px; font-size: 1.2em; }
.testimonial-author { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--maroon); }
.testimonial-couple { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; color: var(--text-muted); margin-top: 4px; }"""

new_testi = """.testimonials-section {
  padding: 120px 80px; background: var(--cream);
  position: relative; text-align: center;
}
.testimonial-quote {
  font-family: 'Fraunces', serif;
  font-size: clamp(22px, 3vw, 42px);
  font-weight: 200; font-style: italic; color: var(--text);
  line-height: 1.65; position: relative; margin: 0;
}
.testimonial-quote::before { content: '\\201C'; color: var(--saffron); margin-right: 2px; font-size: 1.2em; }
.testimonial-quote::after  { content: '\\201D'; color: var(--saffron); margin-left: 2px; font-size: 1.2em; }
.testimonial-author { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--maroon); }
.testimonial-couple { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; color: var(--text-muted); margin-top: 4px; }

/* ─── Why Choose Me Section ─────────────── */
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

css = css.replace(old_testi, new_testi)

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Done. why-section:', '.why-section' in css, '| testi centred:', 'text-align: center' in css)
