import { Box } from "@chakra-ui/react";
import NavBar from "@components/NavBar/NavBar";
import { Header, LoadingPages } from "@components/index";
import { useAuth } from "@pages/auth";
import { Outlet, useLocation } from "react-router-dom";
import { Post, Publications } from ".";
const Home = () => {

  const { isLoading } = useAuth();
  const { pathname } = useLocation();

  if (!isLoading) return (<LoadingPages />);

  if (pathname !== '/') return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>)

  return (
    <>
      <Header />
      <NavBar />
      <Box as="main" >
        <Post />
        <Publications />
      </Box>

    </>
  )
}

export default Home
