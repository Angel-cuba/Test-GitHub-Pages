import React from 'react';
import Me from './components/me';
//import User from './components/users';

function App1() { 
          return(
                    <div className="bg-dark p-3 container">
                              <h1 className="bg-light text-center">Test</h1>
                              <Me ej="Hola desde el PROPS"/>
                    </div>
          )
 }

 export default App1;