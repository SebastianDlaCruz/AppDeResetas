import { Box, Button, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LayoutForm, useRegister } from "..";
const Register = () => {

  const { errorForm, errors, handleSubmit, message, onSubmit, register } = useRegister();
  return (
    <LayoutForm title="Registrarte" onSubmit={handleSubmit(onSubmit)} isInvalid={errorForm}
      messageError={message}>
      <FormLabel>Ingrese nombre:</FormLabel>
      <Input type="text" {...register("name")} />
      {errors.name && <Text color={"red.400"}>{errors.name.message}</Text>}
      <FormLabel>Ingrese email:</FormLabel>
      <Input type="email" {...register("email")} />
      {errors.email && <Text color={"red.400"}>{errors.email.message}</Text>}
      <FormLabel>Ingrese password:</FormLabel>
      <Input type="password" {...register("password")} />
      {errors.password && <Text color={"red.400"}>{errors.password.message}</Text>}
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginBlockStart={"12px"}>
        <Button type="submit" bgColor={"whiteAlpha.900"}>Registrarse</Button>
        <Text color={"orange.200"}>¿Ya tienes una cuenta? <Link as={RouterLink} to={'/logIn'} textDecoration={"underline"}>Iniciar session</Link></Text>
      </Box>
    </LayoutForm>
  )
}

export default Register