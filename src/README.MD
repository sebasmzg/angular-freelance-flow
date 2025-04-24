# Freelance Flow

Freelance Flow es una aplicación web desarrollada en Angular para la gestión de proyectos freelance. Permite a los usuarios crear, listar y administrar proyectos con funcionalidades como autenticación y autorización.

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Scripts Disponibles](#scripts-disponibles)
7. [Configuración](#configuración)
8. [Tecnologías Usadas](#tecnologías-usadas)
9. [Contribución](#contribución)
10. [Licencia](#licencia)
11. [Contacto](#contacto)

## Descripción
Freelance Flow es una herramienta diseñada para facilitar la gestión de proyectos freelance. Los usuarios pueden:
- Autenticarse para acceder a las funcionalidades.
- Crear proyectos con información como título, descripción, fechas y estado.
- Listar y administrar proyectos existentes.

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 16 o superior)
- **Angular CLI** (versión 15 o superior)
- **npm** (versión 8 o superior)

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto:

```bash
# Clona el repositorio
git clone <url-del-repositorio>

# Navega al directorio del proyecto
cd freelance-flow

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
ng serve
```

## Uso
1. Accede a `http://localhost:4200` en tu navegador.
2. Regístrate o inicia sesión para acceder a las funcionalidades.
3. Navega a la sección de proyectos para crear o listar proyectos.

## Estructura del Proyecto
```plaintext
src/
  app/
    core/                # Servicios y guardas
    features/            # Módulos principales (auth, projects, home)
    layout/              # Layout principal de la aplicación
    shared/              # Componentes y modelos compartidos
  assets/                # Recursos estáticos
  environments/          # Configuración de entornos
```

## Scripts Disponibles
- `ng serve`: Inicia el servidor de desarrollo.
- `ng build`: Construye la aplicación para producción.
- `ng test`: Ejecuta las pruebas unitarias.
- `ng lint`: Analiza el código en busca de errores de estilo.

## Configuración
- **Temas de Angular Material**: El proyecto utiliza el tema predefinido `magenta-violet` de Angular Material.
- **Variables de entorno**: Configura los archivos en la carpeta `environments` para entornos de desarrollo y producción.

## Tecnologías Usadas
- **Angular**: Framework principal.
- **Angular Material**: Componentes de UI.
- **TypeScript**: Lenguaje principal.
- **SCSS**: Preprocesador CSS para estilos.

## Contribución
¡Contribuciones son bienvenidas! Sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza un commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4. Envía un pull request.

## Licencia
Este proyecto está licenciado bajo la licencia MIT.

## Contacto
Para dudas o soporte, contacta a: [sebasmzg](https://github.com/sebasmzg)
