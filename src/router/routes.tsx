import { Home, Login, Register } from "@pages/index";
import Profile from "@pages/view/profile/Profile";
import {
  createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/perfil',
        element: <Profile />
      }
    ]

  },

  {
    path: "/logIn",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

]);
