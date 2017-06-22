import axios from 'axios';

export var setAnimal = (animal) => {
  return (
    type: 'SET_ANIMAL',
    animal
  );
};

export var startSignup = (user) => {
  return (dispatch, getState) => {
    return axios.post('/url', {
      email: user.email,
      password: user.password
    })
    .then((res) => {
      console.log(res.headers);
    })
    .catch((e) => {
      console.log(e);
    });
  }
}
