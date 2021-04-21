import React, { Fragment } from 'react'
import Props from './props'


const Me = (props) => {
  console.log(props);

  const element = (
  <div className="bg-info text-white">
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
    <p>Esta es una variable hecha con div</p>
    <h1 className="bg-danger text-white">{props.ej}</h1>
  </div>
);


          return ( 
            <Fragment>
            <div className="container text-center mt-3">
                     <h1>La parte de meeeeeeeeeeeeeee </h1>
                       
    <button className="btn btn-danger">Solo un button</button>
    <Props/>
    <h1>{element}</h1>
            </div>
 
            </Fragment>
           );
}
 
export default Me;