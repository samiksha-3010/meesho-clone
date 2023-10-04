import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [userCart, setUserCart] = useState([]);
    const router = useNavigate()

    // console.log(userCart, "- userCart")
    useEffect(() => {
        if (userCart.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += userCart[i].price
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])

    // useEffect(() =>{
    //     const user = JSON.parse(localStorage.getItem("Currrent-user"))
    //     if (user?.role  == "seller"){
    //         alert("Access only to buyer")
    //         router("/")
    //     }
        
    //     else{
    //         alert("you are not a logged user")
    //         router('/login')
    //     }
    // },[])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Currrent-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please login  and watch all cart products.");
         
        }
    }, [])

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Currrent-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0)
        setUserCart([]);
        alert("Product will deliver soon, Thank you for shopping.")
        router('/')
    }
    return (
        <div  style={{marginTop: "100px"}}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>Cart</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: "65%", border: "2px solid black" }}>
                    {userCart && userCart.map((pro) => (
                        <div style={{ width: "20%", height: "500px", border: "2px solid black", padding: "30px" }}>
                            <img style={{ width: "100%", height: "300px" }} src={pro.image} />
                            <h3>Title : {pro.title}</h3>
                            <h4>Price : {pro.price}$ </h4>
                        </div>
                    ))}
                </div>
                <div style={{ width: "25%", border: "2px solid black" }}>
                    <h1>Total </h1>
                    <p  style={{color: "red"}}>Total MRP : {finalPrice + finalPrice} $ </p>
                    <p style={{color: "red"}}>Price after 50% Discount : {finalPrice} $ </p>
                    <button onClick={buyProducts} style={{ width: "150px", height: "40px", backgroundColor: "red", color: "white" ,borderRadius: "40px", marginLeft: "70px", marginBottom:"30px"}}>Buy Products</button>
                </div>
            </div>
        </div >
    )
}

export default Cart;


// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// // import '../Components/CSS Files/Cart.css'
// import {AuthContext} from "./Context/AuthContext"
// import api from "./ApiConfig/Index"

// const Cart = () => {
//   const [finalprice, setFinalPrice] = useState(0);
//   const [cartProducts, setCartProducts] = useState([]);
//   const { state } = useContext(AuthContext);

//   console.log(state, "state here");

//   useEffect(() => {
//     async function getCartProduct() {
//       try {
//         const response = await api.post("/all-cart-products", {
//           userId: state?.user?._id,
//         });
//         if (response.data.success) {
//           setCartProducts(response.data.cartProducts);
//         }
//       } catch (error) {
//         console.log(error, "error in cart");
//       }
//     }
//     if (state?.user?._id) {
//       getCartProduct();
//     }
//   }, [state]);

//   console.log(cartProducts, "cartProducts here");

//   const checkOut = async () => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     console.log(token,"token here")
//       if (token) {
//         console.log(token,"token here")
//       try {
//         const response = await api.post("/checkOut", {token});
//         // console.log(response.data.success,"response here");
//         if (response.data.success) {
//           toast.success(response.data.message);
//           setCartProducts([]);
//           setFinalPrice([])
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         toast.error(error.message);
//       }
//     }
//   };
//   // }

//   useEffect(() => {
//     if (cartProducts.length) {
//       var totalprice = 0;
//       for (var i = 0; i < cartProducts.length; i++) {
//         totalprice += cartProducts[i].price;
//       }
//       setFinalPrice(totalprice);
//     }
//   }, [cartProducts]);
  
//   return (
//     <div id='cascreen'>
//         <div id="cabody">
//         <div id="caleft">
//           <div>
//             <span>Cart</span>
//             <span></span>
//           </div>
          
//           <div>
//           {cartProducts &&
//           cartProducts.map((pro) => (
//           <div>
//             <div>
//               <div>
//                <img src={pro.image}/>
//               </div>
//               <div>
//                 <p style={{fontWeight: "600"}}>{pro.name}</p>
//                 <p>Size: L   Qty: 1</p>
//                 <p>₹{pro.price}</p>
//                 <p style={{fontWeight: "600", marginTop: "10px"}}>X REMOVE</p>
//               </div>
//               <div>
//                 <p>EDIT</p>
//               </div>
//             </div>
//             <div>
//                <p>Sold By: D.I</p>
//                <p>Free Delivery</p>
//             </div>
//           </div>
//           ))}
//           </div>


//         </div>
//         <div id="caright">
//             <div>
//                 <p>Price Details</p>
//                 <span>Total Product Price</span>
//                 <span>₹{finalprice + finalprice}</span>
//             </div>
//             <div>
//                 <span>Order Total</span>
//                 <span>₹{finalprice}</span>
//                 <p>Clicking on Continue will not deduct any money</p>
//             </div>
//             <div>
//                 <button onClick={checkOut}>Continue</button>
//             </div>
//             <div>
//                 <img src="https://images.meesho.com/images/marketing/1588578650850.png"/>
//             </div>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default Cart
