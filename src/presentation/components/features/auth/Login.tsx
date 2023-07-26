import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import s from "./login.module.scss";
import { loginInput, fetchLogin } from "../../../../infrastructure/user";
import Loading from "../../global/Loading";

export default function Login() {
  const navigate = useNavigate();
  const { isLoading, data, isSuccess, error, mutate } = useMutation((data: loginInput) => fetchLogin(data));
  const [input, setInput] = useState<loginInput>({
    email: ``,
    password: ``
  })
  function handleInput(e: any) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e: any) {
    e.preventDefault()
    mutate(input)
  }
  if (isSuccess) {
    localStorage.setItem("token", data.token);
    navigate(`/users`);
  }

  return <main className={s.container}>
    <form onSubmit={handleSubmit} className={s.form}>
      {isLoading ? <Loading />
        : error ? <div>Error</div>
          : <>
            <h1>Login</h1>
            <input name="email" type="email" placeholder="Enter your Email" onChange={handleInput} required />
            <input name="password" type="password" placeholder="Enter your Password" onChange={handleInput} required />
            <button type="submit">Login</button>
          </>}
    </form>
    <div className={s.banner}>
      <img src="/img/auth-counselor-bg.png" alt="login bg" />
    </div>
  </main>
}