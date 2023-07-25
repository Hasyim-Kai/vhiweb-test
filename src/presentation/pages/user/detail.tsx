import { Link, useParams } from 'react-router-dom'
import DefaultLayout from '../../layout/default'


export default function UserDetail() {
  const {id} = useParams();
  
  return <DefaultLayout>
    <div>detail {id}</div>
    <Link to={-1}>Go back</Link>
  </DefaultLayout>
}