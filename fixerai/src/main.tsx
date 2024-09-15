import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Cadastro from "./routes/Cadastro/Cadastro.tsx";
import Chatbot from "./routes/Chatbot/Chatbot.tsx";
import Error from "./routes/Error/Error.tsx";
import Home from "./routes/Home/Home.tsx";
import Integrantes from "./routes/Integrantes/Integrantes.tsx";
import Login from "./routes/Login/Login.tsx";
import Usuario from "./routes/Usuario/Usuario.tsx";
import GlobalStyle from "./style/globalStyle.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/integrantes",
        element: <Integrantes />,
      },
      {
        path: "/chatbot",
        element: <Chatbot />,
      },
      {
        path: "/usuario",
        element: <Usuario />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>
);
