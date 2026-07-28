# @izgas/backlog-api 🚀

`@izgas/backlog-api` es una biblioteca de TypeScript para una integración fluida con la API de Nulab Backlog. Diseñada para Google Apps Script, permite una interacción eficiente con los recursos de Backlog, incluyendo proyectos, incidencias y gestión de usuarios. 💻

## Características ✨

- Integración completa con la API de Nulab Backlog. 🌐
- Optimizado para Google Apps Script. ⚙️
- Soporte de TypeScript para una comprobación de tipos robusta. ✅
- Acceso a los endpoints de la API de Backlog: proyectos, incidencias y usuarios. 📊

## Tabla de Contenidos 📚

- [Características](#features)
- [Instalación](#installation)
  - [Con Biblioteca de Tipos Globales](#with-global-type-library)
- [Uso](#usage)
- [Documentación de la API](#api-documentation)
- [Desarrollo](#development)
  - [Prerrequisitos](#prerequisites)
  - [Configuración](#setup)
  - [Ejecución de Pruebas](#running-tests)
- [Contribución](#contributing)
- [Licencia](#license)
- [Agradecimientos](#acknowledgments)

## Instalación 📦

Instala el paquete con `pnpm` o `npm`:

```bash
pnpm install @izgas/backlog-api
```

### Con Biblioteca de Tipos Globales 🌍

Para las definiciones de tipos globales, instala:

```bash
pnpm install -D @iztypes/backlog-api
```

Actualiza `tsconfig.json` para incluir las definiciones de tipos:

```json
{
  "compilerOptions": {
    "types": ["@iztypes/backlog-api"]
  }
}
```

## Uso 🛠️

*El contenido de esta sección se está actualizando actualmente. Por favor, vuelve más tarde para obtener instrucciones detalladas de uso.*

## Documentación de la API 📖

*El contenido de esta sección se está actualizando actualmente. Por favor, vuelve más tarde para obtener la documentación detallada de la API.*

## Desarrollo 🛠️

### Prerrequisitos 📋

- Node.js (última versión LTS). 🖥️
- pnpm (gestor de paquetes preferido). 📦

### Configuración ⚙️

1. Clona el repositorio:

   ```bash
   git git@github.com:2zcory/backlog-api.git
   cd izgas-backlog-api
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Compila el proyecto:

   ```bash
   pnpm build
   ```

### Ejecución de Pruebas ✅

Ejecuta la suite de pruebas:

```bash
pnpm test
```

## Contribución 🤝

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del repositorio. 🍴
2. Crea una rama para tu funcionalidad o corrección. 🌿
3. Realiza el commit y push de tus cambios. 📤
4. Envía un pull request con una descripción detallada. 📋

## Licencia 📜

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para más detalles. ⚖️

## Agradecimientos 🙌

- [Nulab Backlog API Documentation](https://developer.nulab.com/docs/backlog/) 📘
- A los colaboradores de la comunidad por sus comentarios y aportaciones. 🌟
