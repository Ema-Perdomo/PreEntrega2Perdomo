import React from "react";
import item from "../Item/Item"

const ItemList = ({item}) => {
    return (
        <div className="row">
            {item.map(item =>
                <div className="col-md-3" key={item.id}>
                    <item item = {item}/>
                </div>
                )}
        </div>
    )
}
export default ItemList