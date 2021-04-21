import React, { Fragment } from 'react'
//import { firebase } from './firebase'
import {  NavLink } from 'react-router-dom'
import useState from 'react-router-dom'


const Info = () => {

const [users, setUsers] = React.useState([])

React.useEffect(() => {

    const obtenerDatos = async () => {
        //const db = firebase.firestore()
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const arrayData = await data.json()
            console.log(arrayData) 
            setUsers(arrayData)     
        } catch (error) {
            console.log(error)
        }
    }
    obtenerDatos()

}, [])



          return ( 
                    <Fragment>
                    <div className="container text-center mt-5">
                               <h1>
                                        La parte de la INFO
                              </h1>
                    </div>
                    <div className="container mb-2">
    <div className="row">
        <div className="col-md-12 p-5">
            
            <ul className="list-group container">
            {
             users.map(item => (
                <li className="list-group-item" key={item.id}>
                <NavLink to={`/users/${item.id}`}>
                  {item.name}

                </NavLink>
                    <button 
                        className="btn btn-danger btn-sm float-right"
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-warning btn-sm float-right mr-2"
                    >
                        Editar
                    </button>
                </li>
                ))
            }
            </ul>
        </div>
    </div>
</div>
                             
                    </Fragment>
           );
}
 
export default Info;