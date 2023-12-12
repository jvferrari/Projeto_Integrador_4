import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import "../../components/LayoutComponents/recovery.css";

export const Recovery = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // sera adicionada a lógica para lidar com a recuperação de senha
    // enviar um email de recuperação ou chamar uma API
    console.log('Solicitação de recuperação de senha para:', email);
    // será mostrada uma tela de sucesso
    };

  return (
    <div className="recovery-container">
      <div className="recovery-wrap">
        <form className="recovery-form">
          <span className="recovery-form-title">Recuperação de Senha</span>

          <div className="wrap-input">
            <input
              className="recovery-input"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="container-login-form-btn">
            <button type="submit" className="recovery-form-btn">ACESSAR</button>
          </div>

          <div className="recovery-text-center">
            <span className="recovery-txt1">Lembrou a senha?</span>
            <Link className="recovery-txt2" to="/login">Entrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recovery;
