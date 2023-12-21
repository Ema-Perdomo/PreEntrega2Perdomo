import React from "react"
import { Link } from 'react-router-dom'

//Card Producto
const Item = ({item}) => {
    return (
        
        <Link to={'/item/' + item.id} className='' > 
            <div className='container'>
                <img src={item.imagen} className='card-img-top' alt={item.nombre} />
                <div className='card-body text-center'>
                    <p children='card-text'>{item.nombre}</p>
                </div>
            </div>
        </Link>
)
};

function ProductCard({ img, title, price, children, description }) {
    return (
        <div className="ItemCard">
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p>{price}</p>
            <p>{description}</p>
            <div>{children}</div> 
        </div>
    )
}

export default ProductCard
