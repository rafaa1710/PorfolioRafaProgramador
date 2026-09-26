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
- Enlaces directos a LinkedIn, GitHub, Instagram y correo.
- Asistente virtual AskRafaelAI para consultar información sobre experiencia, habilidades y proyectos.
- Diseno responsive para escritorio, tablet y movil.

## Proyectos destacados

### CINELOG

Aplicación web Full Stack para descubrir y gestionar películas y series. Integra la API de TMDB para consultar el catálogo y permite a los usuarios buscar contenido, consultar información detallada y gestionar sus listas personales de favoritos y títulos vistos.

La plataforma incorpora autenticación mediante JWT, protección de rutas, persistencia de datos y un sistema de usuarios y roles con funcionalidades de administración.

**Tecnologías:** Angular, TypeScript, Angular Material, PHP, MySQL, REST API, JWT, TMDB API.

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
|   |-- fotoProg.jpg
|   |-- result.mp4
|   |-- bdi-company-2.mp4
|   |-- cinelog.mp4
|   `-- ...
|-- src/
|   |-- ai/
|   |   `-- systemPrompt.ts
|   |-- data/
|   |   |-- about.md
|   |   |-- skills.md
|   |   `-- projects/
|   |       |-- trasterush.md
|   |       |-- bdi-company.md
|   |       `-- cinelog.md
|   |-- components/
|   |-- icons/
|   |-- layouts/
|   `-- pages/
|       |-- api/
|       |   `-- chat.ts
|       |-- index.astro
|       `-- en/
|           `-- index.astro
```

## AskRafaelAI

El portfolio incorpora un asistente virtual basado en inteligencia artificial que permite a los visitantes consultar información sobre mi perfil profesional, experiencia, habilidades y proyectos.

El asistente utiliza contenido estructurado del propio portfolio como contexto para generar respuestas relacionadas con mi trayectoria y trabajos realizados.

**Tecnologías:** Google Gemini API, @google/genai, Astro API Routes y Markdown.

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
- **Instagram:** [@rafappcrea](https://www.instagram.com/rafappcrea/)
- **Portfolio:** [rafappcrea.es](https://rafappcrea.es/)

## Licencia

Proyecto personal creado para presentar experiencia, proyectos y trayectoria profesional.
