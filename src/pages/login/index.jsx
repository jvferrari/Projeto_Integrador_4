import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../assets/global.css"; 
import "../../components/LayoutComponents/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    navigate('/home'); 
  };
  
  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form" onSubmit={handleLogin}> 
          <span className="login-form-title"> Login </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuario"
            />
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </div>

          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">Acessar</button> 
          </div>

          <div className="text-center">
            <Link className="txt1" to="/recovery">
              Esqueceu a senha?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 
