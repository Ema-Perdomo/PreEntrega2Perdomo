import { TbGardenCart } from "react-icons/tb";

const CartWidget = () => {
  return (
    <div>
      <i><TbGardenCart /></i>
      <div className="qty-display">0</div>
    </div>
  )
}

export default CartWidget

//Otra opcion de cart
// import { FaOpencart } from "react-icons/fa";
// <FaOpencart />