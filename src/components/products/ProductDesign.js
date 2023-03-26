import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDesign = () => {
    const {name,p} =useParams()
    // const param =useParams()
    // console.log(param)
  return (
    // <div>ProductDesign - {param.name} - {param.p}</div>
    <div>ProductDesign - {name} - {p}</div>
  )
}

export default ProductDesign