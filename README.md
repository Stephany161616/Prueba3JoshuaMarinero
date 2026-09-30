# Perfil3_JoshuaMarinero

Aplicación móvil desarrollada con React Native y Expo (SDK 57) que muestra la información del estudiante y consume la API de [TVMaze](https://api.tvmaze.com/shows) para listar series de televisión.

## Datos del estudiante

- **Nombre:** Joshua Marinero
- **Carnet:** 20230102
- **Sección y grupo:** 2A

## Enlaces

- **Video demostrativo:** [Ver video](https://drive.google.com/drive/folders/1cFI8eQGPLan-styvnfgAZoLT5z_-8Fm4?usp=sharing)
- **Descargar APK:** [Descargar APK](https://expo.dev/accounts/j0zhuas/projects/Perfil3_JoshuaMarinero/builds/25945f1a-53df-4789-af1f-2bb61569010b)

## Tecnologías

- React Native + Expo SDK 57
- React Navigation (Native Stack)
- Custom hooks (`useFetchData`, `useShows`, `useStudentInfo`)
- EAS Build para la generación del APK

## Estructura

```
src/
├── components/   Card, Loader, ErrorMessage, InfoRow, PrimaryButton
├── constants/    theme, student
├── hooks/        useFetchData, useShows, useStudentInfo
├── navigation/   AppNavigator
└── screens/      StudentScreen, ShowsScreen
```

## Ejecutar el proyecto

```bash
npm install
npx expo start
```
