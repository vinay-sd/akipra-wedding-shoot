with open('src/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# ─── 1. Fix process-title: white text on ivory bg → dark text ────────────────
css = css.replace(
    '.process-title { font-family: \'Fraunces\', serif; font-size: 24px; font-weight: 300; color: rgba(255,255,255,0.7); margin-bottom: 18px; }',
    '.process-title { font-family: \'Fraunces\', serif; font-size: 24px; font-weight: 300; color: var(--text); margin-bottom: 18px; }'
)
print('process-title fix, count:', css.count('color: var(--text); margin-bottom: 18px'))

# ─── 2. Fix final-cta-location: opacity 0.45 → 0.72 ─────────────────────────
css = css.replace(
    'color: rgba(201,169,110,0.45);',
    'color: rgba(201,169,110,0.72);'
)

# ─── 3. Remove duplicate Process Section block (lines ~523-542) ──────────────
DUPE_PROCESS = '''
/* ─── Process Section ───────────────────── */
.process-section { padding: 180px 80px; background: var(--ivory); }
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 90px; position: relative; }
.process-grid::before {
  content: ''; position: absolute; top: 31px; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, var(--border-gold) 20%, var(--saffron) 50%, var(--border-gold) 80%, transparent);
  opacity: 0.45;
}
.process-step { padding: 0 36px; text-align: center; position: relative; }
.process-dot {
  width: 12px; height: 12px; border-radius: 50%;
  background: linear-gradient(135deg, var(--maroon), var(--saffron));
  margin: 25px auto 44px; position: relative; z-index: 1;
  box-shadow: 0 0 0 4px rgba(139,26,46,0.08), 0 0 18px rgba(139,26,46,0.2);
}
.process-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; letter-spacing: 0.35em; color: var(--saffron); margin-bottom: 18px; text-transform: uppercase; }
.process-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 300; color: var(--text); margin-bottom: 18px; }
.process-desc { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; line-height: 1.8; color: var(--text-muted); }

/* ─── Testimonials Section ──────────────── */'''

SINGLE_PROCESS_END = '''

/* ─── Testimonials Section ──────────────── */'''

count_process = css.count('/* ─── Process Section ───────────────────── */')
print('Process section count:', count_process)

if count_process == 2:
    # Remove the second occurrence by finding it
    first = css.find('/* ─── Process Section ───────────────────── */')
    second = css.find('/* ─── Process Section ───────────────────── */', first + 1)
    testi = css.find('/* ─── Testimonials Section ──────────────── */', second)
    css = css[:second] + css[testi:]
    print('Removed duplicate process section')
else:
    print('Process count != 2, count is:', count_process)

# ─── 4. Remove duplicate FAQ Section block ────────────────────────────────────
count_faq = css.count('/* ─── FAQ Section ───────────────────────── */')
print('FAQ section count:', count_faq)

if count_faq == 2:
    first = css.find('/* ─── FAQ Section ───────────────────────── */')
    second = css.find('/* ─── FAQ Section ───────────────────────── */', first + 1)
    scarcity = css.find('/* ─── Scarcity Section ──────────────────── */', second)
    css = css[:second] + css[scarcity:]
    print('Removed duplicate FAQ section')
else:
    print('FAQ count != 2, count is:', count_faq)

# ─── 5. Scarcity section: gold-pale em on dark video is fine, but ensure
#    scarcity-subtitle has better opacity ──────────────────────────────────────
css = css.replace(
    'color: rgba(251,247,241,0.65); margin-bottom: 56px;',
    'color: rgba(251,247,241,0.78); margin-bottom: 56px;'
)

# ─── 6. faq-section: add the ghost watermark that the faq redesign tried ─────
#    (already in faq-section: position:relative, overflow:hidden from redesign.py)
#    The ::before ghost text may have been lost in duplicate removal — re-add it
faq_target = '.faq-section {\n  padding: 140px 80px;\n  background: var(--ivory);\n  position: relative; overflow: hidden;\n}\n.faq-section::before {'
if faq_target not in css:
    # Simple version — just ensure position:relative is set
    css = css.replace(
        '.faq-section { padding: 180px 80px; background: var(--ivory); }',
        '.faq-section { padding: 180px 80px; background: var(--ivory); position: relative; overflow: hidden; }'
    )
    print('faq-section: set position:relative')

# ─── 7. Process section on ivory: process-num uses saffron color
#    saffron (#E8750A) on ivory (#FBF7F1) = contrast ratio ~3.1:1 — OK for small caps
#    service-tagline uses var(--maroon) on cream (#F5EDE0) = fine
#    testimonial-author: var(--maroon) on cream = fine

# ─── 8. Stats section: section-title em was rgba(255,255,255,0.75) — fine on saffron bg
#    But section-title itself is #fff — fully opaque, great

# ─── 9. Reels section: reel-tile-label is #fff over dark overlay = fine
#    reel-tile-views is var(--gold-pale) = #F0D98A over rgba(85,13,28,0.90) = fine

# ─── 10. Hero eyebrow: gold-pale on dark video = fine

with open('src/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('\nALL DONE')
