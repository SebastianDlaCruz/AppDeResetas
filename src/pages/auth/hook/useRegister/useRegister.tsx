import { zodResolver } from "@hookform/resolvers/zod";
import { createUser, schemaRegister, schemaRegisterType } from "@pages/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const useRegister = () => {

  const [message, setMessage] = useState('');
  const [errorForm, setErrorForm] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<schemaRegisterType>({
    resolver: zodResolver(schemaRegister)
  });

  const onSubmit = (data: schemaRegisterType) => {
    const { email, name, password } = data;
    if (name !== undefined && email !== undefined && password !== undefined) {
      createUser(name, email, password).then(res => {
        if (res.status) {
          navigate('/');
        } else {
          setMessage(res.message);
        }
      }).catch(() => {
        setErrorForm(true)
      })
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    message,
    errorForm,
    onSubmit
  }
}

export default useRegister;
