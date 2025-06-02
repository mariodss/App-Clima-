This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Como funciona la App

![Screenshot_1](https://github.com/user-attachments/assets/5e287574-4cf3-4e4a-982f-f96efc7b9909)
![Screenshot_2](https://github.com/user-attachments/assets/9e2d45be-e34f-4958-b789-70994ed2325c)

### Page.js es el componente principal de esta aplicacion de Next.js que muestra el clima en tiempo real gracias al uso de el API OpenWeatherMap.

### 1. **Importaciones**
- Importa React, hooks (`useState`), componentes de UI (`BsSearch`, `Image`, `Head`), y componentes propios (`Spinner`, `Clima`).

### 2. **Estados**
- `city`: almacena el texto ingresado por el usuario.
- `weather`: almacena los datos del clima obtenidos de la API.
- `loading`: indica si la app está esperando la respuesta de la API.
- `error`: almacena mensajes de error para mostrar al usuario.

### 3. **URL de la API**
- Construye la URL para consultar el clima de la ciudad ingresada usando la API de OpenWeatherMap.

### 4. **Función `fetchWeather`**
- Se ejecuta al enviar el formulario.
- Si el campo está vacío, muestra un mensaje de error.
- Si hay texto, pone el estado en loading y limpia errores previos.
- Llama a la API con axios:
  - Si la respuesta es exitosa, guarda los datos del clima, limpia errores, limpia el input y desactiva loading.
  - Si hay error:
    - Si es 404, muestra "Ciudad no encontrada".
    - Si es otro error, muestra "Ocurrió un error. Intenta de nuevo."
    - Limpia los datos de clima y desactiva loading.

### 5. **Renderizado**
- Si está cargando, muestra el componente `Spinner`.
- Si no, muestra:
  - El título y meta con `Head`.
  - Una imagen de fondo.
  - El formulario de búsqueda con input y botón.
  - Si hay error, muestra el mensaje en rojo.
  - Si hay datos de clima, muestra el componente `Clima` con esos datos.
 


### Clima.js es un componente de React que recibe los datos del clima (vía la prop data) y muestra la información meteorológica de la ciudad buscada.
![Screenshot3](https://github.com/user-attachments/assets/77a0cc44-1bef-4473-8455-fe77bc502b60)

### El archivo Spinner.js define un **componente React** llamado `Spinner` que muestra un GIF animado de carga (loader) en pantalla.  
Se utiliza para indicar al usuario que la aplicación está esperando una respuesta, por ejemplo, mientras se consulta la API del clima.

![image](https://github.com/user-attachments/assets/e70ef0ca-ecb2-4176-b1a2-0b2edda4c506)


### Unit Tests 

1.0 Test: Prueba que verifica que la aplicación muestra la información del clima 
correctamente después de una búsqueda exitosa..

![image](https://github.com/user-attachments/assets/a29d8c50-35ae-426f-bbef-d9cc8c96846a)

2.0 Test: Prueba que verifica que se maneja correctamente un error cuando se ingresa un 
nombre de ciudad inválido.  

![image](https://github.com/user-attachments/assets/7bbc3454-220a-4822-9a42-1774ebebe26f)


3.0 Test: Prueba que verifica que el campo de entrada y el botón de búsqueda funcionan 
correctamente. 

![image](https://github.com/user-attachments/assets/9b42ec08-1d02-467a-877c-d6af535d2db1)




