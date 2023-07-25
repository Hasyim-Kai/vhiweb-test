import { Link } from 'react-router-dom'
import DefaultLayout from '../../layout/default'


export default function UserList() {
  return <DefaultLayout>
  <div>List</div>  
    <Link to={`1`}>Detail</Link>
</DefaultLayout>
}