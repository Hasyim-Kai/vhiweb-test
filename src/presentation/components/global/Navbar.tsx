import { useState } from "react";

type Props = {
    isBack?: boolean
}

function logout() { localStorage.removeItem("token"); navigate(`/`) }

export default function Navbar({ isBack = false }: Props) {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    const backBtn = <></>

    return <nav className="">
        <h1>logo</h1>
        <button onClick={logout}>Logout</button>
    </nav>
}