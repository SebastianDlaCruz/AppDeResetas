import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister, schemaUserType, singUser } from "@pages/auth";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<schemaUserType>({
    resolver: zodResolver(schemaRegister)
  });

  const [message, setMessage] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const onSubmit = (data: schemaUserType) => {
    const { email, password } = data;

    if (email !== undefined && password !== undefined) {
      singUser(email, password)
        .then((res) => {
          if (res.status) {
            navigate('/');
          } else {
            setMessage(res.message);
          }
        })
        .catch(() => {
          setErrorForm(true);
        });
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

export default useLogin;