import React from 'react'

function Products() {
  const Product =  [
    {id:1, Pname: "Lenovo", price:50000},
    {id:2, Pname: "Hp", price:75000},
    {id:3, Pname: "Dell", price:35000},
    {id:4, Pname: "Avita", price:25000}
  ]
    return (
    <div>
        {Product.map((P)=>(
            <div className="product" key={P.id}>
                <h3>{P.Pname}</h3>
                <p>Price : $ {P.price}</p>
            </div>
        ))}

        {Product.length === 0 && <p>No have Stock Currently</p>}
    </div>
  )
}

export default Products