"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { loginUser, registerUser } from "@/fetcher/auth";

const AuthPage = ({ authType }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const userData =
        authType === "register"
          ? await registerUser(data)
          : await loginUser(data);

      if (authType === "register") {
        router.push("/auth/login");
      }
      router.push("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  };
  return (
    <article>
      <h1 className="text-lg leading-6 font-medium text-gray-900">
        {authType === "register" ? "Register" : "Login"}
      </h1>
      <form
        className="flex flex-col p-8 backdrop-filter backdrop-blur-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username" className="text-white">
          Username
        </label>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          name="username"
          className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
        />
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
        />

        <div className="flex flex-col items-center gap-2">
          <button
            type="submit"
            className="w-1/4 rounded-md px-4 py-2 bg-gray-50 bg-opacity-20 text-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
          >
            Submit
          </button>
          {authType === "register" ? (
            <Link href={"/auth/login"} className="underline text-white">
              login
            </Link>
          ) : (
            <Link href={"/auth/register"} className="underline text-white">
              Register
            </Link>
          )}
        </div>
      </form>
    </article>
  );
};

export default AuthPage;
