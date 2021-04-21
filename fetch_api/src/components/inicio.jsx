import React, { Fragment } from 'react'
import Example from '../small_compo/example'



const Inicio = () => {
          return ( 
                    <Fragment>
                              <div className="container">
                                        <h1>Todo el inicio y más...</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium quibusdam quisquam, quia totam laudantium animi, a molestiae doloremque accusamus facilis vero id labore? Modi quisquam earum autem minus labore!</p>
                              </div>
                              <Example saludo="Variable props desde el Inicio.jsx" hola="Por siempre"/>
                    </Fragment>
           );
}
 
export default Inicio;