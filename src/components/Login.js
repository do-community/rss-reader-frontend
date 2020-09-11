import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-gray-700">
      <input
        ref={register}
        type="text"
        name="username"
        placeholder="Username"
        className="block w-full border border-b-0 border-gray-300 p-3 rounded-t outline-none"
      />
      <input
        ref={register}
        type="password"
        name="password"
        placeholder="Password"
        className="block w-full border border-b-0 border-gray-300 p-3 outline-none"
      />
      <button className="block w-full rounded-b p-2 bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-blue-100 uppercase text-xs tracking-wider">
        Login
      </button>
    </form>
  );
}
