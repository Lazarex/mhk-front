import React from 'react';
import Nav from '../Nav/Nav';
import TaskBar from '../TaskBar/TaskBar';
import Form from './Form';
import './Stats.scss';
// import '../Account/Auth.scss'; // todo rename class
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import { Modal, Button } from 'antd';



class Stats extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.popup = this.popup.bind(this);

    this.state = {
      popup: false,
    }
  }

  popup() {
    this.setState({
      popup: !this.state.popup,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Nav stats />
        <TaskBar />
        <main role="main">
          <div className="stats-bar">

          </div>
          <div className="container w-600">
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
              <div style={{textAlign: 'center'}}>
                {/*<Button*/}
                  {/*className="btn"*/}
                  {/*backgroundColor="#fbb03b"*/}
                  {/*// fullWidth={true}*/}
                  {/*label="Присоедилиться к чату Москва и область"*/}
                  {/*style={{height: '46px'}}*/}
                  {/*onClick={this.popup}*/}
                {/*/>*/}
                <Button
                  type="primary"
                  onClick={this.popup}
                >
                  Присоедилиться к чату Москва и область
                </Button>
              </div>
              {/*<Dialog*/}
                {/*className="popup"*/}
                {/*modal={false}*/}
                {/*open={this.state.popup}*/}
                {/*onRequestClose={this.popup}*/}
              {/*>*/}
                {/*<div // @todo component & rename auth class*/}
                  {/*className="popup-close"*/}
                  {/*onClick={this.popup}*/}
                {/*/>*/}
                {/*<h3>Введите ваше имя <br/>пользователя в Телеграм</h3>*/}
                {/*<div className="auth">*/}
                  {/*<div className="form">*/}
                    {/*<div className="form_group" style={{paddingBottom: 25}}>*/}
                      {/*<div className="form_item">*/}
                        {/*<TextField*/}
                          {/*floatingLabelText="Введите логин в формате @user"*/}
                          {/*hintText="Логин"*/}
                          {/*// errorText={emailError && 'Проверьте правильность заполнения'}*/}
                          {/*className="input"*/}
                          {/*// value={firstName} // '@' + value?*/}
                          {/*// onChange={this.setFirstName}*/}
                          {/*// onBlur={this.blurEmail}*/}
                          {/*autoComplete="off"*/}
                        {/*/>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="form_group">*/}
                      {/*<div className="form_item">*/}
                        {/*<RaisedButton*/}
                          {/*className="btn"*/}
                          {/*// onClick={this.submit}*/}
                          {/*backgroundColor="#fbb03b"*/}
                          {/*fullWidth={true}*/}
                          {/*label="Получить ссылку"*/}
                          {/*style={{height: '46px'}}*/}
                        {/*/>*/}
                        {/*<div style={{color: '#fbb03b', fontSize: 12, textAlign: 'center', padding: '15px 0 0'}}>Ссылка придет на ваш e-mail</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div style={{*/}
                  {/*color: '#000',*/}
                  {/*maxWidth: 460,*/}
                  {/*margin: 'auto'*/}
                {/*}}>*/}
                  {/*Чат работатет через мессенджер Telegram, который работатет на любом компьютере, планшете или смартфоне.*/}
                  {/*<br/>*/}
                  {/*<br/>*/}
                  {/*Установить приложение можно по этой ссылке.*/}
                  {/*<br/>*/}
                  {/*<br/>*/}
                  {/*Чтобы узнать имя пользователя – зайдите в настройки – Имя пользователя. Установите ваше имя пользователя.*/}
                  {/*<br/>*/}
                  {/*<br/>*/}
                {/*</div>*/}
              {/*</Dialog>*/}

              <Modal
                title="Basic Modal"
                visible={this.state.popup}
                onOk={this.popup}
                onCancel={this.popup}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Stats;
