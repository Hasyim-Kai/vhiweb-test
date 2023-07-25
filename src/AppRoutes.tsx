import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './presentation/pages/login'
import UserList from './presentation/pages/user/list'
import UserDetail from './presentation/pages/user/detail'
import NoPage from './presentation/pages/user/404'


export default function AppRoutes() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="user" element={<UserList />} />
      <Route path="user/:id" element={<UserDetail />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
}
