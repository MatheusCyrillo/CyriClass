import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
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
            semper neque. Duis condimentum consequat arcu quis pulvinar. Aenean
            lobortis elit ipsum, vel fermentum magna vulputate in. Suspendisse
            arcu velit, lobortis at venenatis vitae, tempor vitae est. Nullam
            fermentum nulla odio, id tincidunt sapien suscipit ac. Praesent
            volutpat neque ac dolor aliquam interdum. Ut congue dui et accumsan
            consequat.
          </p>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
