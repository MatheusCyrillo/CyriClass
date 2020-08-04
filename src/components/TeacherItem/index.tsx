import React from 'react';

import "./styles.css";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img
        src="https://avatars2.githubusercontent.com/u/24721584?s=460&v=4"
        alt="Matheus Cyrillo"
      />
      <div>
        <strong>Matheus Cyrillo</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      placerat leo lectus, vel egestas lorem mattis sit amet. Praesent ut
      semper neque. Duis condimentum consequat arcu quis pulvinar. 
      <br/><br/>
      Aenean lobortis elit ipsum, vel fermentum magna vulputate in. Suspendisse
      arcu velit, lobortis at venenatis vitae, tempor vitae est. Nullam
      fermentum nulla odio, id tincidunt sapien suscipit ac. Praesent
      volutpat neque ac dolor aliquam interdum. Ut congue dui et accumsan
      consequat.
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
    </footer>
  </article>
  );
}

export default TeacherItem;