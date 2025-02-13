import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";

const ChangePasswordSchema = yup.object().shape({
  password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const ChangePassword = () => {

  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    // reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data) => {
    try {
      console.log(data)
      const URL = "https://medical-system.runasp.net/api/Auth/reset-password";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        console.log(response)
        // // const error = await response.json();
        // throw new Error('faild to fetch');
      }
      Swal.fire({
        title: "Password changed successfully",
        icon: "success",
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/auth/login')
        }
      })
    } catch (error) {
      setError("afterSubmit", {
        ...error,
        message: error.message || error,
      })
    }
  }


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div spacing={3}>
        {!!errors.afterSubmit && (
          <p className="text-red-500 my-4">{errors.afterSubmit.message}</p>
        )}
      </div>
      <div className="flex-colo gap-4">
        <RHFTextField name="password" label="Password" type="password" placeholder="*******" />
        <RHFTextField name="confirmPassword" label="Confirm Password" type="password" placeholder="*******" />
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1.2]">
          Change Password <BiLogInCircle size={20} className="text-xl text-white" />
        </button>
      </div>
    </FormProvider>
  );
};

export default ChangePassword;
