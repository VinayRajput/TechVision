import React from 'react';
import useHistory from 'react-dom';

function Login () {
   let history = useHistory()

   function handleClick () {
      history.push("/dashboard")
   }

   return (
      <button type="button" onClick={handleClick}>
         Go home
     </button>
   )
}

export default Login;
