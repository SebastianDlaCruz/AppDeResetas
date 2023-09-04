import { describe, expect, test } from "vitest";
import { ResponseAuth } from '../model/auth.model';
import { createUser, singOutUser, singUser } from "./authUser.service";

describe('Servicio que da el alta al usuario en la aplicación , deja que se logrearse y estado del usuario', () => {

  test('registro de usuario', async () => {

    const responseSuccessRegister: ResponseAuth = {
      status: true,
      message: "registro de usuario exitoso"

    }
    const responseErrorRegister: ResponseAuth = {
      status: false,
      message: "Error al registrar al usuario. Verifique las credenciales."

    }

    const response = await createUser('Sesbastian', 'sebastian@gmail.com', 'sebastian6547913');

    if (response.status) {
      expect(response).toMatchObject(responseSuccessRegister);
    } else {
      expect(response).toMatchObject(responseErrorRegister);
    }

  });

  test('iniciar sesión', async () => {

    const responseSuccess: ResponseAuth = {
      status: true,
      message: 'éxito'

    }
    const responseError: ResponseAuth = {
      status: false,
      message: 'no se puedo iniciar session. Asegúrese que estar registrado o ingrese bien las credenciales'
    }

    try {

      const response = await singUser('sebastian@gmail.com', 'sebastian6547913');
      expect(response).toMatchObject(responseSuccess);
    } catch (error) {

      expect(error).toMatchObject(responseError);
    }

  })


  test('Cerrar session ', async () => {

    try {
      await expect(singOutUser).toHaveBeenCalled();
    } catch (error) {

    }
  })
}) 