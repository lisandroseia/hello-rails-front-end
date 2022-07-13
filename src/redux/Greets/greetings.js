import axios from "axios";
const GET_GREETINGS = 'greetings/GET_GREETINGS';
const initialState = 'default greeting'

export const getGreetings = (payload) => ({
    type: GET_GREETINGS,
    payload
});


export const getGreetingsFromApi = () => async (dispatch) => {
    await axios.get('http://127.0.0.1:3000/greetings')
    .then((data) => {
        dispatch(getGreetings(data.data.greeting))
    })
    .catch(error => console.log(error))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GREETINGS: {
            return action.payload
        }
        default: 
        return state
    }
}

export default reducer