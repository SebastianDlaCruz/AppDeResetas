import { Home, Login, Register } from "@pages/index";
import AdvancedSearch from "@pages/view/advancedSearch/AdvancedSearch";
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
      }, {
        path: '/busqueda_avanzada',
        element: <AdvancedSearch />
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
