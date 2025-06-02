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


## App Funcionality


App completada con unit tests
![Screenshot_1](https://github.com/user-attachments/assets/5e287574-4cf3-4e4a-982f-f96efc7b9909)
![Screenshot_2](https://github.com/user-attachments/assets/9e2d45be-e34f-4958-b789-70994ed2325c)

Page.js es el componente principal de esta aplicacion de Next.js que muestra el clima en tiempo real gracias al uso de el API OpenWeatherMap. 

Imports: 

-React
-useState hook
-UI componentes (BsSearch, Image, Head), 
-Componentes propios de la aplicacion (Spinner, Clima).

Estados:

- city: almacena el texto ingresado por el usuario.
- weather: almacena los datos del clima obtenidos de la API.
- loading: indica si la app está esperando la respuesta de la API.
- error: almacena mensajes de error para mostrar al usuario.

