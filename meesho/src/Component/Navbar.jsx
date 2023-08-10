import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const router = useNavigate();

  return (
    <div>
                <div id="navbar">
            <div>
                <img    onClick={() => router('/')} src="https://tse2.mm.bing.net/th?id=OIP.th1ysM5zvhU5bq8N8Bo_0QHaBw&pid=Api&P=0&h=180"/>

            </div>
            
            <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search by product more and brand more "/>
               
            </div>
            <div>
                <i class="fa-solid fa-mobile-screen-button"></i>
                Download App
            </div>
            <div  onClick={() => router('/add-product')}>Add Product </div>
           
            <div>
                <i class="fa-regular fa-user fa-xl"  onClick={() => router('/profile')}></i>
                {/* <p> peofile</p> */}
                    <i class="fa-solid fa-cart-shopping fa-xl "  onClick={() => router('/cart')}></i>
                        {/* <p>cart</p> */}
                        <i class="fa-solid fa-heart fa-xl"></i>
                        {/* <p>Wishlist</p> */}
                        {/* <p onClick={() => router('/login')} >Sign/up</p> */}

            </div>
        </div>
     





    </div>
  )
}

export default Navbar