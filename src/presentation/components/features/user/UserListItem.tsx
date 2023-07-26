import { Link } from 'react-router-dom'
import { User } from '../../../../infrastructure/model/user'
import s from "./user.module.scss";

interface Props {
    user: User
}

export default function UserListItem({ user }: Props) {
    return <Link to={`${user.id}`}><div className={s.user_item_container}>
        <div className={s.profile_photo}>
            <img src={user.avatar} alt="Profile Photo" />
        </div>
        <div className="biodata">
            <h2>{user.first_name}</h2>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
        </div>
    </div></Link>
}