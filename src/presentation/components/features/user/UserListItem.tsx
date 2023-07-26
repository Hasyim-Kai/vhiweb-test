import { Link } from 'react-router-dom'
import { User } from '../../../../infrastructure/model/user'
import s from "./user.module.scss";
import { useState } from 'react';

interface Props {
    user: User
}

export default function UserListItem({ user }: Props) {
    const [imgLoaded, setImgLoaded] = useState<boolean>(false)
    function handleImgLoaded() { setImgLoaded(true) }

    return <Link to={`${user.id}`}><div className={s.user_item_container}>
        <div className={s.profile_photo}>
            {!imgLoaded && <img src="/img/img-placeholder.png" alt="Placeholder" />}
            <img src={user.avatar} alt="Profile Photo"
                onLoad={handleImgLoaded}
                style={!imgLoaded ? { visibility: 'hidden' } : {}}
            />
        </div>
        <div className="biodata">
            <h2>{user.first_name}</h2>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
        </div>
    </div></Link>
}