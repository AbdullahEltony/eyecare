/* eslint-disable react/no-unescaped-entities */
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { LoginSchema } from "../../validation/loginSchema";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../store/slices/auth'
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";


const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin123@Password",
    },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data) => {
    try {
      const URL = "https://medical-system.runasp.net/api/auth/login";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json();
       if(Array.isArray(error.errors)){
        throw new Error(error.errors[1]);
       }else {
        throw new Error(error.errors.Password);
       }

      }
      const result = await response.json();
      console.log(result)
      Swal.fire({
        title: "Login Success",
        icon: "success",
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(login(data))
          navigate('/dashboard')
        }
      })
    } catch (error) {
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message || error,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div spacing={3}>
        {!!errors.afterSubmit && (
          <p className="text-red-500 me-auto text-start">{errors.afterSubmit.message}</p>
        )}
      </div>
      <div className="flex-colo gap-4 w-full">
        <RHFTextField name="email" label="Email" type="email" />
        <RHFTextField name="password" label="Password" type="password" />
        <Link to='/auth/forgot-password' className="text-start me-auto text-blue-800 text-sm">Forgot Password?</Link>
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1.2]">
          Login <BiLogInCircle size={20} className="text-xl text-white" />
        </button>
        <p className="text-start text-sm me-auto">Don't have an account? <Link className="text-blue-800" to="/auth/register">Sign Up</Link></p>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
