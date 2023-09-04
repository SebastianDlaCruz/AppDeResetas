import { z } from "zod";

export const schemaUser = z.object({
  email: z.string().nonempty("El email es requerido").email('formato de email no valido'),
  password: z.string().min(9, { message: "La contraseña debe tener al menos 9 caracteres" }).nonempty('el password es requerido')
}).partial();

export type schemaUserType = z.infer<typeof schemaUser>;
