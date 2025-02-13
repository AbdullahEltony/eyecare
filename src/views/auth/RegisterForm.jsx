import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { BiLogInCircle } from "react-icons/bi";
import { RegisterSchema } from "../../validation/RegisterSchema";
import { Link, useNavigate } from "react-router-dom";
import { register } from '../../store/slices/auth'
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const RegisterForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data) => {
    const URL = "https://medical-system.runasp.net/api/Auth/register";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }
      Swal.fire({
        title: "Register Success",
        icon: "success",
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(register(data))
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
          <p className="text-red-500 my-4">{errors.afterSubmit.message}</p>
        )}
      </div>
      <div className="flex-colo gap-4">
        <RHFTextField name="fullName" label="Full Name" type="text" placeholder="john doe" />
        <RHFTextField name="email" label="Email" type="email" placeholder="yZl9N@example.com" />
        <RHFTextField name="password" label="Password" type="password" placeholder="*******" />
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1.2]">
          Register <BiLogInCircle size={20} className="text-xl text-white" />
        </button>
        <p className="text-sm me-auto">Already have an account? <Link to="/auth/login" className="text-blue-800">Login</Link></p>
      </div>
    </FormProvider>
  );
};

export default RegisterForm;
