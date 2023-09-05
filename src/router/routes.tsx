import { Home, Login, Register } from "@pages/index";
import Favorites from "@pages/view/favorites/Favorites";
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
      }, {
        path: '/favoritos',
        element: <Favorites />
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
