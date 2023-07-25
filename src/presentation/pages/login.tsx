import DefaultLayout from '../layout/default'
import { Link } from "react-router-dom";

export default function Login() {
  return <DefaultLayout>
    <div>login</div>
    <Link to='user'>User</Link>
  </DefaultLayout>
}