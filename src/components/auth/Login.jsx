import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    debugger;
    window.localStorage.setItem('auth', true);
    navigate('/invoices')
  }
  return (
    <div>
      <h1>Hello</h1>
    <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login;
