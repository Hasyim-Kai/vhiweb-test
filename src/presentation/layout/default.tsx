import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./layout.module.scss";
import Navbar from "../components/global/Navbar";


interface Props {
  children: JSX.Element | JSX.Element[] | null
  isBack?: boolean
}

export default function DefaultLayout({ children, isBack = false }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate(`/`) }
  }, [])

  return <main>
    <Navbar isBack={isBack} />
    <div className={s.default}>{children}</div>
  </main>
}