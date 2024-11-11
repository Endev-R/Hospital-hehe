import re

# add "I_" at the beginning of classes and ids in html css js file

def update_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Update class names
        content = re.sub(r'\bclass="([^"]+)"', lambda m: 'class="' + ' '.join(['I_' + cls for cls in m.group(1).split()]) + '"', content)
        # Update id names
        content = re.sub(r'\bid="([^"]+)"', lambda m: 'id="I_' + m.group(1) + '"', content)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
    except Exception as e:
        print(f"Error updating file {file_path}: {e}")

def update_css_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Update class selectors
        content = re.sub(r'\.([a-zA-Z0-9_-]+)', r'.I_\1', content)
        # Update id selectors
        content = re.sub(r'#([a-zA-Z0-9_-]+)', r'#I_\1', content)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
    except Exception as e:
        print(f"Error updating CSS file {file_path}: {e}")

def update_js_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Update class references
        content = re.sub(r'\.([a-zA-Z0-9_-]+)', r'.I_\1', content)
        # Update id references
        content = re.sub(r'#([a-zA-Z0-9_-]+)', r'#I_\1', content)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
    except Exception as e:
        print(f"Error updating JavaScript file {file_path}: {e}")

# Update specific HTML file
html_file = 'zbi_header.html'
update_file(html_file)

# Update specific CSS file
css_file = 'zbi_css.css'
update_css_file(css_file)

# Update specific JavaScript file
js_file = 'zbi_header.js'
update_js_file(js_file)