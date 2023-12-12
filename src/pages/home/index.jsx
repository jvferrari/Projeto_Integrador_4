import React from 'react';
import '../../assets/global.css'; 
import '../../components/LayoutComponents/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-sidebar">
    
        <h1>Universidade Católica de Pernambuco</h1>
        <h2>Laboratório 208 - Bloco B</h2>
          <p>Bem-vindos à plataforma de agendamento do Laboratório 208.<br/>

          <br />Por favor, confirme a data e hora desejadas. Após escolher a data, é só confirmar seu agendamento.<br />

          <br />Caso não seja possível agendar em uma data específica, significa que o laboratório estará reservado para eventos, manutenção ou outras atividades informadas pela gestão.<br />

          <br />Temos 40 computadores disponíveis.<br />

          <br />O agendamento padrão é de 50 minutos. Para agendar por mais tempo, faça múltiplos agendamentos, de acordo com a disponibilidade.<br />

          <br />Softwares disponíveis: XAMPP; SQLite; SQLite Studio; br Modelo; DWSIM; CISCO PACKET </p><br />
        
      </div>
      <div className="home-main">
        <h2>Calendário de Agendamento</h2>
        
        <div className="home-calendar">
         
        </div>
        <div className="home-scheduling">
          
          <p>Escolha uma data e horário</p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
