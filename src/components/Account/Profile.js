/* global google, document, $ */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import { editProfile } from '../../api';
import { Input, Button } from 'antd';
import './Account.scss';
import UploadFile from './UploadFile';

class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setPlace = this.setPlace.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setProfession = this.setProfession.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      city: '',
      firstName: '',
      lastName: '',
      profession: '',
    }
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('search'),
      { types: ['(cities)'], language: 'ru' },
    );

    this.autocomplete.addListener('place_changed', this.setPlace);
  }

  setPlace() {
    const place = this.autocomplete.getPlace();

    console.log(place)

    this.setState({ place: {
      address: place.formatted_address,
      geo: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    }});
  }

  setFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  setLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  setProfession(e) {
    this.setState({
      profession: e.target.value,
    });
  }

  onFileChange(e) {
    const input = e.target.files;

    if (input.length > 0) {
      const limit = 1024 * 1024 * 2;

      const file = input[0];

      if (file.size <= limit && file.type.indexOf('image') !== -1) {
        this.setState({
          file
        });
      }
    }
  }

  submit() {
    const { place, firstName, lastName, profession, file } = this.state;

    editProfile(this.props.dispatch, {
      coord: {
        lat: place.geo.lat,
        lng: place.geo.lng,
      },
      name: firstName,
      surname: lastName,
      occupation: profession,
      avatar: file,
    })
  }

  render() {
    const { firstName, lastName, profession, file } = this.state;

    return (
      <div className="wrapper account">
        <Nav auth/>
        <h3 className="account_title">Настройки профиля</h3>
        <div className="size-limit _630">
          <div className="form">
            <div className="form_group">
              <div className="form_item">
                <Input
                  placeholder="Выберите ваш город"
                  size={'large'}
                  name="search"
                  id="search"
                />
              </div>
            </div>
            <div className="form_group">
              <div className="form_item _50">
                <Input
                  placeholder="Введите имя"
                  size={'large'}
                  value={firstName}
                  onChange={this.setFirstName}
                />
              </div>
              <div className="form_item _50">
                <Input
                  placeholder="Введите фамилию"
                  size={'large'}
                  className="input"
                  value={lastName}
                  onChange={this.setLastName}
                />
              </div>
            </div>
            <h3>Дополнительная информация</h3>
            <div className="form_group">
              <div className="form_item">
                <Input
                  placeholder="Ваша профессия"
                  size={'large'}
                  className="input"
                  value={profession}
                  onChange={this.setProfession}
                />
              </div>
            </div>
            <div className="form_group">
              <UploadFile />
            </div>
            <div className="form_group">
              <div className="form_item">
                <Button
                  type="primary"
                  size={'large'}
                  onClick={this.submit}
                >
                  Готово
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Profile.propTypes = {
//   onRequestClose: PropTypes.func
// };

export default connect(store => ({
  // signInError: store.auth.signInError,
  // signInSuccess: store.auth.signInSuccess,
}))(Profile);
