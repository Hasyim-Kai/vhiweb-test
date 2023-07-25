import { useMutation } from "react-query";
import { fetchLogin, loginInput } from "../../infrastructure/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    navigate(`/user`);
  }

  return <main>
    <img src="/img/auth-counselor-bg.png" alt="login bg" />
    <form onSubmit={handleSubmit}>
      {isLoading ? <div>Loading</div>
        : error ? <div>Error</div>
          : <>
            <input name="email" type="email" onChange={handleInput} />
            <input name="password" type="password" onChange={handleInput} />
            <button type="submit">Login</button>
          </>}
    </form>
  </main>
}