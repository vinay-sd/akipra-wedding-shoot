"""
Redesign: abstract, vibrant, cinematic.
- Diagonal clip-path section dividers
- Bold maroon bg for EmotionalSection
- Saffron-orange bg for StatsSection
- Large ghost-text watermarks
- High-contrast type, more color variety
- Geometric radial/linear decorative overlays
"""

with open('src/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# ─── 1. Films Section header: add big ghost number ───────────────────────────
old = '''.films-section { padding: 140px 0; background: var(--ivory); }
.films-header { padding: 0 80px; margin-bottom: 72px; }'''

new = '''.films-section { padding: 140px 0; background: var(--ivory); position: relative; overflow: hidden; }
.films-section::before {
  content: 'FILMS';
  position: absolute; top: 60px; right: 64px;
  font-family: 'Fraunces', serif;
  font-size: clamp(80px, 14vw, 200px);
  font-weight: 800; letter-spacing: -0.04em;
  color: rgba(139,26,46,0.04);
  pointer-events: none; line-height: 1; z-index: 0;
  user-select: none;
}
.films-header { padding: 0 80px; margin-bottom: 72px; position: relative; z-index: 1; }'''
css = css.replace(old, new)

# ─── 2. Emotional Section: deep maroon bg, ivory text, diagonal clip ─────────
old = '''/* ─── Emotional Section ─────────────────── */
.emotional-section {
  padding: 200px 80px; background: var(--warm-white); min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: relative;
}
.emotional-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 10% 20%, rgba(232,117,10,0.06) 0%, transparent 65%),
    radial-gradient(ellipse 40% 50% at 90% 80%, rgba(139,26,46,0.06) 0%, transparent 65%);
}'''
new = '''/* ─── Emotional Section ─────────────────── */
.emotional-section {
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
  content: '\\'\\'' ;
  position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
  font-family: 'Fraunces', serif;
  font-size: clamp(120px, 20vw, 320px);
  font-weight: 900; letter-spacing: -0.06em;
  color: rgba(255,255,255,0.03);
  pointer-events: none; line-height: 0.9;
  white-space: nowrap; user-select: none;
}'''
css = css.replace(old, new)

# ─── 3. Emotional line text: ivory on dark bg ────────────────────────────────
old = '''.emotional-line {
  font-family: 'Fraunces', serif;
  font-size: clamp(28px, 4.5vw, 64px);
  font-weight: 200; letter-spacing: -0.01em;
  text-align: center; line-height: 1.5; padding: 8px 0;
  color: var(--text);
}
.emotional-line.highlight .word-reveal-word { color: var(--maroon); font-style: italic; }'''
new = '''.emotional-line {
  font-family: 'Fraunces', serif;
  font-size: clamp(30px, 5vw, 72px);
  font-weight: 300; letter-spacing: -0.02em;
  text-align: center; line-height: 1.45; padding: 10px 0;
  color: rgba(251,247,241,0.92);
  position: relative; z-index: 1;
}
.emotional-line.highlight .word-reveal-word { color: var(--saffron-mid); font-style: italic; font-weight: 400; }'''
css = css.replace(old, new)

# ─── 4. Stats Section: bold saffron background + diagonal ───────────────────
old_stats_start = '/* ─── Stats Section'
old_stats_end = '/* ─── Testimonials Section'
stats_start_idx = css.find(old_stats_start)
stats_end_idx = css.find(old_stats_end)

if stats_start_idx != -1 and stats_end_idx != -1:
    old_stats_block = css[stats_start_idx:stats_end_idx]
    
    # Inject new stats section styles, keep the rest
    new_stats_prefix = '''/* ─── Stats Section ────────────────────── */
.stats-section {
  background: linear-gradient(135deg, #E8750A 0%, #C4561A 50%, #A83008 100%);
  position: relative; overflow: hidden;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
  margin: -4px 0;
}
.stats-section::before {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 65%);
}
.stats-section::after {
  content: 'RASA';
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-family: 'Fraunces', serif;
  font-size: clamp(120px, 22vw, 360px);
  font-weight: 900; letter-spacing: -0.06em;
  color: rgba(255,255,255,0.07);
  pointer-events: none; line-height: 1;
  white-space: nowrap; user-select: none;
}
'''
    # Find where old stats section CSS properties end (look for padding line)
    rest = old_stats_block
    # Replace padding/background lines at start
    rest_lines = rest.split('\n')
    # Keep everything from line 2 onwards but replace background and add positioning
    in_brace = False
    new_stats = new_stats_prefix
    
    # Just append the existing stat-number/stat-label styles from old block
    stat_number_idx = rest.find('.stat-number')
    if stat_number_idx != -1:
        old_stat_section_line = rest.find('\n', rest.find('.stats-section'))
        stats_inner = rest[stat_number_idx:]
        
        # Update stat colors for the new saffron bg
        stats_inner = stats_inner.replace('color: var(--maroon);', 'color: rgba(255,255,255,0.95);')
        stats_inner = stats_inner.replace('color: var(--gold);', 'color: rgba(255,255,255,0.95);')
        stats_inner = stats_inner.replace('color: var(--text);', 'color: rgba(255,255,255,0.7);')
        stats_inner = stats_inner.replace('color: var(--text-mid);', 'color: rgba(255,255,255,0.7);')
        stats_inner = stats_inner.replace('color: var(--gold-pale);', 'color: rgba(255,255,255,0.55);')
        stats_inner = stats_inner.replace('border-color: var(--border-gold)', 'border-color: rgba(255,255,255,0.15)')
        stats_inner = stats_inner.replace('border: 1px solid var(--border)', 'border: 1px solid rgba(255,255,255,0.12)')
        new_stats += stats_inner
    else:
        new_stats = old_stats_block  # fallback
    
    css = css[:stats_start_idx] + new_stats + css[stats_end_idx:]
    print('Stats section updated')
else:
    print('WARNING: Stats section not found, start:', stats_start_idx, 'end:', stats_end_idx)

# ─── 5. Services section: add diagonal clip + abstract overlay ───────────────
old_svc = '''.services-section { background: var(--ivory); }'''
new_svc = '''.services-section {
  background: var(--ivory);
  position: relative;
  overflow: hidden;
}'''
css = css.replace(old_svc, new_svc)

# ─── 6. Signature section: dark maroon + diagonal ────────────────────────────
old_sig_start = '/* ─── Signature Section'
old_sig_end = '/* ─── Process Section'
sig_start = css.find(old_sig_start)
sig_end = css.find(old_sig_end)
if sig_start != -1 and sig_end != -1:
    sig_block = css[sig_start:sig_end]
    sig_block_new = sig_block.replace(
        'background: var(--ivory)',
        'background: linear-gradient(160deg, var(--maroon-deep) 0%, #3A0810 100%)'
    ).replace(
        '.signature-section { padding: 180px 80px; background: linear-gradient(160deg, var(--maroon-deep) 0%, #3A0810 100%)',
        '.signature-section { padding: 180px 80px; background: linear-gradient(160deg, var(--maroon-deep) 0%, #3A0810 100%); clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%); margin: -4px 0; position: relative; overflow: hidden'
    )
    # Fix colors for dark bg
    sig_block_new = sig_block_new.replace('color: var(--text)', 'color: rgba(251,247,241,0.9)')
    sig_block_new = sig_block_new.replace('color: var(--text-mid)', 'color: rgba(251,247,241,0.6)')
    sig_block_new = sig_block_new.replace('color: var(--maroon)', 'color: var(--saffron-mid)')
    sig_block_new = sig_block_new.replace('border-color: var(--border)', 'border-color: rgba(251,247,241,0.1)')
    css = css[:sig_start] + sig_block_new + css[sig_end:]
    print('Signature section updated')

# ─── 7. Reels section: update heading and section-label on warm-white bg ─────
# Already done — keep as is

# ─── 8. Testimonials section: subtle texture bg ──────────────────────────────
old_testi_start = '/* ─── Testimonials Section'
old_testi_end = '/* ─── Process Section'
testi_start = css.find(old_testi_start)
testi_end = css.find(old_testi_end)
if testi_start != -1 and testi_end != -1:
    testi_block = css[testi_start:testi_end]
    testi_block_new = testi_block.replace(
        'background: var(--cream)',
        'background: var(--ivory)'
    ).replace(
        'background: var(--ivory)',
        'background: var(--ivory)'
    )
    css = css[:testi_start] + testi_block_new + css[testi_end:]

# ─── 9. Section titles and global typography: bolder, more contrast ──────────
old_st = '''.section-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(36px, 4.5vw, 68px);
  font-weight: 300; letter-spacing: -0.02em;
  color: var(--text); line-height: 1.1; margin-bottom: 20px;
}'''
if old_st in css:
    new_st = '''.section-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(38px, 5vw, 76px);
  font-weight: 300; letter-spacing: -0.03em;
  color: var(--text); line-height: 1.05; margin-bottom: 20px;
}'''
    css = css.replace(old_st, new_st)

# ─── 10. Hero title: even bolder contrast ────────────────────────────────────
old_ht = '''.hero-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(56px, 8vw, 118px);
  font-weight: 200; line-height: 1.02; letter-spacing: -0.02em;
  color: #FBF7F1; margin-bottom: 40px;
}
.hero-title em { font-style: italic; color: var(--gold-pale); font-weight: 300; }'''
new_ht = '''.hero-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(60px, 9vw, 128px);
  font-weight: 200; line-height: 1.0; letter-spacing: -0.03em;
  color: #FBF7F1; margin-bottom: 40px;
}
.hero-title em { font-style: italic; color: var(--saffron-mid); font-weight: 300; }'''
css = css.replace(old_ht, new_ht)

# ─── 11. Scarcity section: high-contrast black/maroon block ──────────────────
old_scar_start = '/* ─── Scarcity Section'
old_scar_end = '/* ─── FAQ Section'
scar_start = css.find(old_scar_start)
scar_end = css.find(old_scar_end)
if scar_start != -1 and scar_end != -1:
    scar_block = css[scar_start:scar_end]
    if 'background: var(--maroon-deep)' not in scar_block:
        scar_block = scar_block.replace(
            'background: var(--cream)',
            'background: var(--maroon-deep)'
        ).replace(
            'background: var(--ivory)',
            'background: var(--maroon-deep)'
        ).replace(
            'background: var(--warm-white)',
            'background: var(--maroon-deep)'
        )
    css = css[:scar_start] + scar_block + css[scar_end:]

# ─── 12. FilmSection grid: slightly more gap for editorial feel ──────────────

# ─── 13. FAQ section: bolder styling ─────────────────────────────────────────
old_faq = '.faq-section { padding: 140px 80px; background: var(--ivory); }'
new_faq = '''.faq-section {
  padding: 140px 80px;
  background: var(--ivory);
  position: relative; overflow: hidden;
}
.faq-section::before {
  content: 'FAQ';
  position: absolute; bottom: 40px; right: 64px;
  font-family: 'Fraunces', serif;
  font-size: clamp(80px, 16vw, 240px);
  font-weight: 900; letter-spacing: -0.05em;
  color: rgba(139,26,46,0.04);
  pointer-events: none; line-height: 1;
  user-select: none;
}'''
css = css.replace(old_faq, new_faq)

# ─── 14. Final CTA: bold contrast ─────────────────────────────────────────────
old_final = '.final-cta-section { padding: 110px 32px;'
if old_final in css:
    css = css.replace(old_final, '.final-cta-section { padding: 130px 32px; position: relative; overflow: hidden;')

with open('src/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('ALL DONE — styles.css updated')
