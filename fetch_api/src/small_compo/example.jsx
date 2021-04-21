import React, { Fragment } from 'react'

const Example = (props) => {
          console.log(props);
          return ( 
                    <Fragment>
                              <div className="container bg-light text-center">
                                        <h1>Desde es el Example</h1>
                                        <h2 className="bg-dark p-2 text-white">{props.saludo}</h2>
                                        <p>{props.hola}</p>
                              </div>
                    </Fragment>
           );
}
 
export default Example;