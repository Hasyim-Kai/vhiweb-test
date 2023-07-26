import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './presentation/pages/user/404'
import UserDetail from './presentation/components/features/user/UserDetail'
import UserList from './presentation/components/features/user/UserList'
import Login from './presentation/pages/Login'

export default function AppRoutes() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="users" element={<UserList />} />
      <Route path="users/:id" element={<UserDetail />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
}
