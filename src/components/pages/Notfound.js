import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='App'>
        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"/>
        <p>Unfortunately the page you are looking for has been moved or deleted
</p>
<Link to="/"><button className='btn btn-primary'>GO TO HOME PAGE</button></Link>

    </div>
  )
}

export default Notfound