with open('src/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Keep only first occurrence of Process Section, remove 2nd and 3rd
PROCESS_HEADER = '/* ─── Process Section ───────────────────── */'
TESTI_HEADER   = '/* ─── Testimonials Section ──────────────── */'
FAQ_HEADER     = '/* ─── FAQ Section ───────────────────────── */'
SCARCITY_HEADER = '/* ─── Scarcity Section ──────────────────── */'

def remove_duplicates_keep_first(css, section_header, next_section_header):
    first = css.find(section_header)
    if first == -1:
        return css, 0
    removed = 0
    while True:
        second = css.find(section_header, first + len(section_header))
        if second == -1:
            break
        # Find next section after second occurrence
        next_sec = css.find(next_section_header, second)
        if next_sec == -1:
            break
        css = css[:second] + css[next_sec:]
        removed += 1
    return css, removed

css, r = remove_duplicates_keep_first(css, PROCESS_HEADER, TESTI_HEADER)
print(f'Removed {r} duplicate Process sections')

css, r = remove_duplicates_keep_first(css, FAQ_HEADER, SCARCITY_HEADER)
print(f'Removed {r} duplicate FAQ sections')

# Verify
print('Process count after:', css.count(PROCESS_HEADER))
print('FAQ count after:', css.count(FAQ_HEADER))

with open('src/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print('Done')
