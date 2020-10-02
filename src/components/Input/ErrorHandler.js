export const handleError = (state) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(state.email)) {
    errors.email = 'Email address is invalid!';
  }
  if (!state.email) {
    errors.email = 'Email address is required!';
  }
  if (state.firstName.trim().length < 2) {
    errors.firstName = 'First Name length must be 3 or higher!';
  }
  if (state.firstName.trim().length === 0) {
    errors.firstName = 'First name is required!';
  }
  if (state.lastName.trim().length < 2) {
    errors.lastName = 'Last Name length must be 3 or higher!';
  }
  if (state.lastName.trim().length === 0) {
    errors.lastName = 'Last name is required!';
  }
  if (state.password.trim().length < 5) {
    errors.password = 'Password must be at least 6 character!';
  }
  if (state.password.trim().length === 0) {
    errors.password = 'Password is required!';
  }
  if (state.password !== state.confirmPassword) {
    errors.confirmPassword = 'Confirm Password not match!';
  }
  if (state.confirmPassword.trim().length === 0) {
    errors.confirmPassword = 'Confirm Password is required!';
  }

  return errors;
}

export default handleError;