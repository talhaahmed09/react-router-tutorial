import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = window.localStorage.getItem('auth');
    console.log(auth);
  return (
    auth ? <Outlet /> :  <Navigate to='/login'/>
  )
}

export default ProtectedRoutes;
