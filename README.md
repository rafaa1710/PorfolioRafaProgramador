# 🚀 Portfolio de Rafa — PorfolioRafaProgramador

Bienvenido al portfolio personal de Rafael. Aquí encontrarás proyectos, experiencia y enlaces de contacto. Este proyecto está construido con Astro + TailwindCSS y está listo para publicarse en GitHub Pages.

---

## ✨ Lo más importante (en un vistazo)

- Framework: Astro
- Estilos: Tailwind CSS (via Vite)
- Entrada principal: `src/pages/index.astro`
- Activos públicos: `public/` (imágenes, vídeos, favicon)

---

## ▶️ Demo local — rápido

Requisitos: Node.js 14+ y npm.

Instala dependencias y levanta el servidor de desarrollo:

```powershell
npm install
npm run dev
```

Abre http://localhost:3000 (o la URL que muestre la consola).

Generar build de producción y previsualizarla:

```powershell
npm run build
npm run preview
```

---

## 🗂 Estructura útil del repo

- `public/` — archivos estáticos que se sirven tal cual (ej.: `imagenYo.jpg`).
- `src/pages/` — páginas (routing basado en archivos).
- `src/components/` — componentes reutilizables.
- `src/layouts/` — layouts globales.
- `astro.config.mjs` — configuración (site, base path, plugins).

---

## 📸 Sobre la imagen del autor

La imagen de Rafa está en `public/imagenYo.jpg` y en `index.astro` se referencia usando `import.meta.env.BASE_URL` para respetar `base` cuando se publica en GitHub Pages:

```astro
src={`${import.meta.env.BASE_URL}/imagenYo.jpg`}
```

Es importante mantener la barra `/` entre `BASE_URL` y el nombre del archivo para que la ruta sea correcta.

---

## ⚠️ Nota importante: archivo grande y solución aplicada

Al intentar hacer `git push` apareció un error: GitHub no acepta archivos mayores de 100 MB. El archivo problemático fue:

- `public/TrasteRushDemo.mp4` (~120 MB)

Para no perder trabajo, realicé lo siguiente:

1. Guardé el commit original en una rama de respaldo local llamada `backup-local-main`.
2. Rehice el commit en `main` quitando el MP4 del índice (seguía en tu disco local) y volví a pushear. Resultado: push aceptado.

Comandos utilizados (resumen):

```powershell
git branch -f backup-local-main HEAD
git fetch origin
git reset --soft origin/main
git rm --cached public/TrasteRushDemo.mp4
git commit -m "Rehacer commit sin el video pesado"
git push origin main
```

Si quieres recuperar el MP4 desde la rama de backup:

```powershell
git checkout backup-local-main -- public/TrasteRushDemo.mp4
```

---

## 💡 Opciones para manejar archivos grandes

1) Git LFS — si quieres guardar vídeos en el repo (recomendado para binarios grandes)

```powershell
choco install git-lfs   # Windows: o descarga desde git-lfs.github.com
git lfs install
git lfs track "public/*.mp4"
git add .gitattributes
```

Si el archivo ya está en commits, se requiere migración (reescritura de historial):

```powershell
git lfs migrate import --include="public/TrasteRushDemo.mp4"
```

2) No subir el archivo: moverlo fuera del repo o añadirlo a `.gitignore`:

```powershell
Move-Item .\public\TrasteRushDemo.mp4 ..\  # PowerShell: mueve fuera del proyecto
# y en .gitignore añade:
/public/TrasteRushDemo.mp4
```

---

## 🔧 Recuperación / restauración

- Para ver el commit original en la rama de backup:

```powershell
git log backup-local-main --oneline --name-only
```

- Para traer solo el MP4 al working tree:

```powershell
git checkout backup-local-main -- public/TrasteRushDemo.mp4
```

---

## 📬 Contacto y siguientes pasos

Si quieres que haga alguna de estas acciones, dime cuál prefieres y lo hago:

- Mover el MP4 fuera del repo y añadir la entrada a `.gitignore` (rápido y seguro).
- Configurar Git LFS y migrar el MP4 (más intrusivo, reescribe historial).
- Subir el README bonito al remoto (si quieres que haga `git add/commit/push`).

Si quieres, también puedo mejorar el contenido con una sección de "Deploy a GitHub Pages" o añadir un pequeño checklist para publicar la web.

¡Dime y lo dejo perfecto! 🎨

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
# Portfolio Rafa (PorfolioRafaProgramador)

Bienvenido al repositorio del portfolio de Rafael (Rafa). Aquí encontrarás el código fuente de una web estática hecha con Astro y TailwindCSS que muestra proyectos, experiencia y formas de contacto.

---

## Qué hay en este repo

- `public/` — activos estáticos: imágenes, videos, favicon, etc.
- `src/` — código fuente de la web (páginas, componentes, layouts y estilos).
- `astro.config.mjs` — configuración principal de Astro (site, base, plugins).
- `package.json` — scripts y dependencias.

---

## Ejecutar localmente

Requisitos mínimos:
- Node.js 14+ (se recomienda la LTS más reciente)
- npm (viene con Node) o pnpm/yarn

Instalar dependencias:

```powershell
npm install
```

Levantar servidor de desarrollo:

```powershell
npm run dev
```

Generar build de producción y previsualizarla:

```powershell
npm run build
npm run preview
```

---

## Notas técnicas y estructura clave

- La página principal está en `src/pages/index.astro`.
- Componentes reutilizables están en `src/components/`.
- Los estilos globales están en `src/styles/global.css` y se usa Tailwind via Vite.
- En `astro.config.mjs` se configura `base: "/PorfolioRafaProgramador"`; por eso las rutas a assets públicos usan `import.meta.env.BASE_URL` para funcionar bien en GitHub Pages.

Ejemplo de referencia a la imagen del autor en `index.astro`:

```astro
src={`${import.meta.env.BASE_URL}/imagenYo.jpg`}
```

---

## Problema con el push a GitHub (archivo grande) — qué pasó y cómo se resolvió

Al intentar hacer `git push` se rechazó el envío porque uno de los archivos en `public/` superaba el límite de GitHub (100 MB). En concreto:

- `public/TrasteRushDemo.mp4` tenía ~120 MB y GitHub devuelve un error de pre-receive hook cuando hay archivos > 100 MB.

Acción realizada (para no perder trabajo y poder subir los cambios):

1. Creé una rama de respaldo local que conserva el commit original que contenía el MP4:

```powershell
git branch -f backup-local-main HEAD
```

2. Rehice el commit en `main` eliminando el MP4 del índice (no borré el archivo del disco) y volví a pushear. Resumen de los comandos utilizados:

```powershell
git fetch origin
git reset --soft origin/main
git rm --cached public/TrasteRushDemo.mp4
git commit -m "Rehacer commit sin el video pesado"
git push origin main
```

Resultado: el push se aceptó. El archivo grande permanece en tu disco local, pero ya no está en el historial del branch `main` en remoto. Si necesitas recuperar el commit original, está en `backup-local-main`.

---

## Opciones para manejar archivos grandes

1. Git LFS (recomendado si quieres almacenar vídeos o binarios grandes en el repo)

	- Instala Git LFS: https://git-lfs.github.com/
	- Inicializa y trackea los mp4:

```powershell
git lfs install
git lfs track "public/*.mp4"
git add .gitattributes
```

	- Si el archivo ya fue commiteado, necesitas migrarlo a LFS (esto reescribe historial):

```powershell
git lfs migrate import --include="public/TrasteRushDemo.mp4"
```

	- Después push (revisa la necesidad de `--force` y coordina si trabajas con colaboradores).

2. No subir el archivo: moverlo fuera del repo o añadirlo a `.gitignore`.

```powershell
Move-Item .\public\TrasteRushDemo.mp4 ..\  # mover fuera del proyecto (PowerShell)
```

Y añade a `.gitignore` si no quieres volver a commitearlo:

```
/public/TrasteRushDemo.mp4
```

---

## Restaurar o recuperar cosas desde la rama de respaldo

- Ver commits en la rama:

```powershell
git log backup-local-main --oneline --name-only
```

- Recuperar solo el MP4 al working tree desde la rama de backup:

```powershell
git checkout backup-local-main -- public/TrasteRushDemo.mp4
```

---

## Qué más puedo hacer por ti

- Puedo mover el MP4 fuera del repositorio y añadirlo a `.gitignore` por ti.
- Puedo configurar Git LFS e iniciar la migración del archivo (te explicaré los riesgos y los pasos antes de ejecutarlo).
- Puedo mejorar este README con secciones extras (licencia, checklist de deploy a GitHub Pages, automatización de builds, etc.).

Dime la opción que prefieres y la ejecuto.
