const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // School Validators
  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  // Company Validators
  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  // Field of study Validators
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study is required';
  }

  // From Validators
  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
