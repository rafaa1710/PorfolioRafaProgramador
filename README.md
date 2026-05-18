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
