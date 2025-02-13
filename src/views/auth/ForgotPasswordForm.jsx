import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { BiLogInCircle } from "react-icons/bi";
import * as yup from "yup";
import Swal from "sweetalert2";

const ForgotPasswordForm = () => {

    const methods = useForm({
        resolver: yupResolver(yup.object().shape({
            email: yup.string().required("Email is required").email("Email must be a valid email address"),
        })),
        defaultValues: {
            email: "",
        },
    });

    const {
        // reset,
        // setError,
        handleSubmit,
        formState: { errors },
    } = methods;
    const onSubmit = async (data) => {
        const URL = "https://medical-system.runasp.net/api/Auth/forget-password";
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error);
            }
            Swal.fire({
                title: "email sent successfully",
                text: "check your gmail to reset your password",
                icon: "success"
            })
            
        } catch (error) {
            console.log(error)
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
                <RHFTextField name="email" label="Email" type="email" placeholder="Enter your email" />
                <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1.2]">
                    Reset My Password  <BiLogInCircle size={20} className="text-xl text-white" />
                </button>
            </div>
        </FormProvider>
    );
};

export default ForgotPasswordForm;
