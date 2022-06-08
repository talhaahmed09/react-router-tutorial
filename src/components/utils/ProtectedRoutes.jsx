import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = window.localStorage.getItem('auth');
  return (
    auth ? <Outlet /> :  <Navigate to='/login'/>
  )
}

export default ProtectedRoutes;
