/* global google, document, $ */

import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import './Auth.scss';
import { editProfile } from '../../api';
// import { setSignInError } from '../../actions/authActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



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
      <div className="w-600" style={{width: 600}}>
        <div
          className="popup-close"
          onClick={this.props.onRequestClose}
        />
        <h3>Профиль</h3>
        <div className="form">
          <div className="form_group">
            <div className="form_item">
              <TextField
                floatingLabelText="Выберите ваш город"
                hintText="Начните вводить название населенного пункта"
                className="input"
                autoComplete="off"
                name="search"
                id="search"
                placeholder=""
              />
            </div>
          </div>
          <div className="form_group">
            <div className="form_item _50">
              <TextField
                floatingLabelText="Введите имя"
                hintText="Имя"
                // errorText={emailError && 'Проверьте правильность заполнения'}
                className="input"
                value={firstName}
                onChange={this.setFirstName}
                // onBlur={this.blurEmail}
                autoComplete="off"
              />
            </div>
            <div className="form_item _50">
              <TextField
                floatingLabelText="Введите фамилию"
                hintText="Фамилия"
                // errorText={emailError && 'Проверьте правильность заполнения'}
                className="input"
                value={lastName}
                onChange={this.setLastName}
                // onBlur={this.blurEmail}
                autoComplete="off"
              />
            </div>
          </div>
          <h3>Дополнительная информация</h3>
          <div className="form_group">
            <div className="form_item">
              <TextField
                floatingLabelText="Ваша профессия"
                hintText="Профессия"
                // errorText={emailError && 'Проверьте правильность заполнения'}
                className="input"
                value={profession}
                onChange={this.setProfession}
                // onBlur={this.blurEmail}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form_group">
            <label
              htmlFor="files"
            >
              + фото профиля
            </label>
            <input
              id="files"
              onChange={this.onFileChange}
              className="file__input"
              type="file"
              placeholder=""
              hidden
            />
            {file && file.name}
          </div>
          <div className="form_group">
            <div className="form_item">
              <RaisedButton
                className="btn"
                onClick={this.submit}
                backgroundColor="#fbb03b"
                fullWidth={true}
                label="Готово"
                style={{height: '46px'}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  onRequestClose: PropTypes.func
};

export default connect(store => ({
  // signInError: store.auth.signInError,
  // signInSuccess: store.auth.signInSuccess,
}))(Profile);
