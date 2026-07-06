# Portfolio personal - Rafael Garcia

Portfolio profesional desarrollado con **Astro** y **Tailwind CSS**, enfocado en presentar experiencia, proyectos reales, formacion y canales de contacto de forma rapida, clara y responsive.

El sitio esta preparado en dos idiomas, incluye contenido multimedia para mostrar proyectos en funcionamiento y mantiene una estructura sencilla para facilitar su mantenimiento y evolucion.

![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## Vista general

Este portfolio muestra el perfil de Rafael como **desarrollador Full Stack**, con una interfaz moderna, secciones bien diferenciadas y proyectos orientados a resolver necesidades reales de negocio.

Incluye:

- Pagina principal en espanol.
- Version en ingles disponible en `/en`.
- Seccion de experiencia profesional.
- Proyectos destacados con video, galerias e informacion tecnica.
- Formacion y certificaciones.
- Enlaces directos a LinkedIn, GitHub y correo.
- Diseno responsive para escritorio, tablet y movil.

## Proyectos destacados

### BDI Company

Sitio web corporativo para una empresa de remodelacion y construccion en Estados Unidos. Incluye presentacion de servicios, galerias multimedia, formulario de contacto, optimizacion SEO, Google Analytics y dominio personalizado.

**Tecnologias:** Astro, CSS.

### Plataforma de alquiler de trasteros

Aplicacion full stack para gestionar alquileres de trasteros, pagos, firma digital, usuarios y accesos fisicos mediante integracion con ESP32.

**Tecnologias:** Angular, TypeScript, Spring Boot, MariaDB, ESP32.

### Sistema modular ERP y CRM

Sistema de gestion institucional con modulos conectados para alumnos, formacion, usuarios y procesos administrativos.

**Tecnologias:** Angular, TypeScript, PHP, MySQL.

## Stack tecnico

- **Astro** como framework principal.
- **Tailwind CSS** para estilos y composicion visual.
- **TypeScript** preparado en la configuracion del proyecto.
- **Componentes Astro** reutilizables para secciones, iconos, proyectos y layout.
- **Assets multimedia** en `public/` para imagenes, videos, avatar y favicon.

## Estructura del proyecto

```text
.
|-- public/
|   |-- avatar.png
|   |-- fotoProg.jpg
|   |-- result.mp4
|   `-- ...
|-- src/
|   |-- components/
|   |   |-- Home.astro
|   |   |-- Project.astro
|   |   |-- Experience.astro
|   |   |-- Formacion.astro
|   |   `-- Contacto.astro
|   |-- icons/
|   |-- layouts/
|   |   `-- Layout.astro
|   |-- pages/
|   |   |-- index.astro
|   |   `-- en/
|   |       `-- index.astro
|   `-- styles/
|       `-- global.css
|-- astro.config.mjs
|-- package.json
`-- tailwind.config.cjs
```

## Instalacion y uso

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

Genera la version de produccion:

```bash
npm run build
```

Previsualiza la build local:

```bash
npm run preview
```

## Scripts disponibles

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run build` | Compila el proyecto para produccion. |
| `npm run preview` | Previsualiza la build generada. |
| `npm run astro` | Ejecuta comandos de Astro CLI. |

## Contacto

- **Email:** rafaprogramador17@gmail.com
- **LinkedIn:** [rafael-g-677988153](https://www.linkedin.com/in/rafael-g-677988153/)
- **GitHub:** [rafaa1710](https://github.com/rafaa1710)

## Licencia

Proyecto personal creado para presentar experiencia, proyectos y trayectoria profesional.
