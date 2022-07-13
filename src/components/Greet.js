import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingsFromApi } from "../redux/Greets/greetings";

const Greet = () => {
    const random = useSelector((state) => state.greetings)
    const dispatch = useDispatch()
  
    const handleClick = () => {
      dispatch(getGreetingsFromApi());
    };
  
    return (
      <React.Fragment>
        Greeting: {random}
        <button id="getMessages" onClick={handleClick}>
          Get a Greeting
        </button>
      </React.Fragment>
    );
  };
  
  export default Greet