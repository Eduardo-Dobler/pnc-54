"""Gera sw.js com versão baseada no conteúdo. Execute após alterar o site."""
from pathlib import Path
import hashlib
import json

root = Path(__file__).resolve().parent.parent
files = ['index.html', 'styles.css', 'pwa.css', 'app.js', 'data.js', 'pwa.js', 'manifest.webmanifest']
files += sorted(str(p.relative_to(root)) for p in (root / 'assets').rglob('*') if p.is_file())
digest = hashlib.sha256()
for name in files:
    digest.update(name.encode())
    digest.update((root / name).read_bytes())
template = (root / 'scripts/sw-template.js').read_text()
(root / 'sw.js').write_text(template.replace('__VERSION__', digest.hexdigest()[:16]).replace('__FILES__', json.dumps(files, ensure_ascii=False, indent=2)))
print(f'sw.js: {len(files)} arquivos, versão {digest.hexdigest()[:16]}')
