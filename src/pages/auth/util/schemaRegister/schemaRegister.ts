import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().regex(/^[a-zA-Z0-9_]+$/, { message: 'este campo no acepta caracteres raros' }).nonempty('el nombre es requerido'),
  email: z.string().nonempty("El email es requerido").email('formato de email no valido'),
  password: z.string().min(9, { message: "La contraseña debe tener al menos 9 caracteres" })
}).partial();


export type schemaRegisterType = z.infer<typeof schemaRegister>;
