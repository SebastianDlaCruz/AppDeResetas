import { Box, Button, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LayoutForm, useLogin } from "..";
const Login = () => {

  const { errorForm, errors, handleSubmit, message, onSubmit, register } = useLogin();

  return (
    <LayoutForm title="Login" isInvalid={errorForm} onSubmit={handleSubmit(onSubmit)} messageError={message}>
      <FormLabel>Ingrese email:</FormLabel>
      <Input type="email" {...register("email")} />
      {errors.email && <Text color={"red.400"}>{errors.email.message}</Text>}
      <FormLabel>Ingrese password:</FormLabel>
      <Input type="password" {...register("password")} />
      {errors.password && <Text color={"red.400"}>{errors.password.message}</Text>}
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginBlockStart={"12px"}>
        <Button type="submit" bgColor={"whiteAlpha.900"}>Iniciar Session</Button>
        <Text color={"orange.200"}>¿No tienes una cuenta? <Link as={RouterLink} to={'/register'} textDecoration={"underline"}>Regístrate</Link></Text>
      </Box>
    </LayoutForm>
  )
}

export default Login