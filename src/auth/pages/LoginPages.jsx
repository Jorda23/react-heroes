import { useNavigate } from "react-router-dom"

export const LoginPages = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
   <div className="container mt-5">
      <h1>login</h1>

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}