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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register}
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        ref={register}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
}
