import React from 'react';
import Nav from '../Nav/Nav';
import Form from './Form';
import './Stats.scss';

class Stats extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Nav stats />
        <main role="main">
          <div className="stats-bar">

          </div>
          <div className="container">
            <h1>Статистика</h1>
            <div className="stats">
              <Form />
                <div className="stats_text">
                200 часов киртана и 48 часов медитации с 17 ноября по 18 декабря
                </div>
                <div className="stats-graph">
                  <img src={require('./stats.jpg')} />
                </div>
            </div>
          </div>
          <div className="warm-section">
            <div className="container">
              <h2 className="pb30">Чат участников в вашем городе</h2>
              <div className="sub-title">
                Чтобы поддерживать поток вдохновения, делиться опытом,
                организовывать совместные коллективные медитации и&nbsp;другие
                мероприятия&nbsp;&mdash; общайтесь с&nbsp;единомышленниками
                из&nbsp;вашего региона.
              </div>
              <button className="btn _w-auto">
                Присоедилиться к чату Москва и область
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Stats;
