// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
//       </ul>
//     </div>
//   )
// }

// export default Cart


export default function Cart({ cart }) {
  return (
    <div>
      <h2>Cart ({cart.length})</h2>

      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}