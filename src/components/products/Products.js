import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([{ id: 1, title: 'samsung', price: 40000 }, { id: 1, title: 'iphone', price: 90000 }])
    return (
        <div>Products
            <ul>
                {
                    data.map((pro,i)=>{
                        return <li key={i}><Link to={`/products/${pro.title}/${pro.price}`}>{pro.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Products