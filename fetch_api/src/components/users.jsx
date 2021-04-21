import React from 'react'
import useState from 'react'
import {useParams} from 'react-router-dom'
import '../index.css'


const User= () =>{
// console.log(useParams())
    const {id} = useParams();
    const [usuario, setUsuario] = React.useState({})

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {       
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await data.json()
        console.log(user)
        console.log(user.address.geo.lat);
        console.log(user.address.suite);
        setUsuario(user)
    }
    return (
        <div className="container text-center">
            <h3>{usuario.name}</h3>
            <ul>
                <li><span>Username: </span>{usuario.username}</li>
                <li><span>Email: </span>{usuario.email}</li>
                <li><span>Phone: </span> {usuario.phone}</li>
                <li><span>Website: </span> {usuario.website}</li>
            </ul>
        </div>
    )


}


export default User