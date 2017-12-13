import emailValidator from 'email-validator';

export const checkEmail = value => value !== '' && emailValidator.validate(value);
export const checkPassword = value => value !== '' && value.length > 1;
