import Axios from 'axios';
// const apiUrl = "https://127.0.0.1:3000/api/v1/messages";

const Greet_all = "Greet_all";

 const greetall = message => ({
  type: Greet_all,
  payload: message
});

export const fetchGreeting = () => async dispatch => {
  try {
    const greets = await Axios.get('/api/v1/greetings');
    dispatch(greetall(greets.data));
  } catch (err) {
      console.log(err);
  }
    // fetch(`${apiUrl}`)
    //   .then((response) => response.json())
    //   .then((json) => dispatch(greetall(json)));
};

const initialState = [];

function greetingReducer(state = [], action) {
  switch (action.type) {
    case Greet_all:
      return [...state,...action.payload]
    default:
      return state;
  }
}

export default greetingReducer;
