with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('RASA FILMS', 'AKIPRA FILMS')
css = css.replace("content: 'RASA';", "content: 'AKIPRA';")

nav_old = ".nav-logo {\n  font-family: 'Fraunces', serif;"
nav_new = ".nav-logo {\n  font-family: 'Playfair Display', serif;"
css = css.replace(nav_old, nav_new)

foot_old = ".footer-logo { font-family: 'Fraunces', serif; font-size: 34px; font-weight: 300;"
foot_new = ".footer-logo { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700;"
css = css.replace(foot_old, foot_new)

with open(r'c:\Users\vinay\OneDrive\Desktop\SD\landingpages\src\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('nav Playfair:', "'Playfair Display'" in css, '| AKIPRA:', "'AKIPRA'" in css)
