import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[] | null
}

export default function DefaultLayout({ children }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate(`/`) }
  }, [])

  return <main className={``}>
    {children}
  </main>
}