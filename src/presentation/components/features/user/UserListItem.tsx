import { Link } from 'react-router-dom'
import { User } from '../../../../infrastructure/model/user'

interface Props {
    user: User
}

export default function UserListItem({ user }: Props) {
    return <Link to={`${user.id}`}><div>
        <img src={user.avatar} alt="Profile Photo" />
        <h1>{user.first_name}</h1>
        <p>{user.last_name}</p>
        <p>{user.email}</p>
    </div></Link>
}