import React from 'react';
import { BrowserRouter as Route, Router, Link, Redirect } from 'react-router-dom';


const utils = {
    checkSession : (sessonID) => {
      fetch('/checkSession',{
         method:'post',
      })
         .then(res => res.json)
         .then(out => {
            if (out.status === "valid") {
               //history.pushState('/login')
                 /*                
                 return (<Redirect
                     to={{
                        pathname: "/login",
                        //state: { from: props.location }
                     }}
                 />) 
                 */
            }
         })
   }
}

export default utils ;