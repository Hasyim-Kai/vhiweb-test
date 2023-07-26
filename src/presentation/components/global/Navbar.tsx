import s from "./global-features.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    isBack: boolean
}

export default function Navbar({ isBack }: Props) {
    const navigate = useNavigate();
    function back() { navigate(-1) }
    function logout() { localStorage.removeItem("token"); navigate(`/`) }

    return <nav className={s.nav_container}>
        {isBack ? <div>
            <button type="button" onClick={back}><img src="/icons/arrow-left.svg" alt="back" /></button>
            <h3>logo</h3>
        </div>
            : <h3>logo</h3>}
        <button onClick={logout} className={s.logout}>Logout</button>
    </nav>
}