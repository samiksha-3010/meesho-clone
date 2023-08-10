import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const router= useNavigate();
  return (
    <div>

<div id="navbar2">
            <p   onClick={() => router('/all-product')}>All product</p> 
            <p>Women Western</p>
            <p>Men</p>
            <p>Kids </p>
            <p>Home & Kitchen</p>
            <p> Beauty & Health</p>
            <p> Beauty & Health</p>
            <p>Jewellery & Accessories</p>
            <p> Bags & Footwear</p>
            <p>Electronics</p>
        </div>
        <div id="homepage">
             <div id="left">
                <div id="left1">
                  <h2>Lowest Prices
                    Best Quality Shopping</h2>
                    <div id="left2">
                        <i class="fa-light fa-truck"></i>
                        <p>Free Delivary</p>
                        <i class="fa-regular fa-money-bill-wave"></i>
                        <p>Cash on Delivary</p>
                        <i class="fa-sharp fa-light fa-bag-shopping"></i>
                        <p>Easy Return</p>

                    </div>
                    <div id="button">
                    <button>Download the Meesho App</button>
                </div>
                </div>
             </div>
              <div id="right">
                <img src="https://images.meesho.com/images/marketing/1686234459500_512.webp"/>
              </div>              
        </div>
        <div id="body">
            <p>Top Categories to choose from</p>
            <div id="Cetoriges">
               
                
            <div id="Left">
                {/* <p>Fashion Farword</p>  */}
                <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp"/>
            </div>
            <div id="Right">
            <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp"/>

            <img src=" https://images.meesho.com/images/marketing/1678691712594_300.webp"/>
        </div>
    </div>
    </div>
    <div id="brand">
        <p></p>

    </div>




    {/* ********************************* */}



    <div id="body">
           
           <div id="topcetegory">
               <div id="left">
                   <h2>All product</h2>
                   <p>Showing 81-100 out of 10000 products</p> 
           <div id="ceteegory">
               <div>
                   <span>FILTERS  <br/>1000+ Products
                       </span>
               </div>
               <div>
                   <h4>Category</h4>
                   <input type="checkbox"/>
                   <span>Meesho Mall  <select style= {{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                    <h4>gender</h4>
                  <div>Women</div>
               
                  <div>Girl</div>
                
               </div>
               <div>
               <span>Colour
                   <select style={{border: "none",color: "gray"}}>
                   <option style={{border:"none"}}></option></select></span>

           </div>
              
               <div>
                   
                   <span>Fabric
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
              
                   
               <div>
                   <span>Size
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Discount
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Range
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Price
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Combo
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Print Or Pattern Type
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Ornamentation
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>

               </div>
               <div>
                   <span>Bottom Pattern Type
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span>Surface Styling
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span>Fit/ Shape
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span>Top Type
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span>Waist Rise
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span>Bottom Type
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
               <div>
                   <span> Type
                       <select style={{border: "none",color: "gray"}}>
                       <option style={{border:"none"}}></option></select></span>
               </div>
              
       </div>
   </div>




    {/* <div id="productMore">
        <div id="productinfo">
            <span>Sort by :<b>Relevance</b> </span>
              <p>Products For You</p>
             
              <span>Sort by :<b>Relevance</b> </span>


            <div id="Cetegory">
                <div >
                    <h2>Category</h2>
                    <select></select>
                </div>
                

            </div>
           

        </div> */}
        <div id="images">
            <div>
                <img src="https://images.meesho.com/images/products/22486015/1a522_400.webp"/>
             <p>   Boys Multicolor Cotton Shorts & Capris Pack Of 5</p>
              <b>    ₹322</b>
               <span>10% off</span>
           
  
     </div>
            <div>
                <img src="https://images.meesho.com/images/products/212257521/iq5rb_400.webp"/>
                <p>Baby Diaper Pants with Double Leakage Protectio</p> 
              <b>  ₹584</b>
              <span>  4% off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/103713364/0ioi6_400.webp"/>
               <p> Urbane Latest Women Dresses</p>
             <b>   ₹199</b>
               <span> 10% off</span>
                
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/31536766/ltqhe_400.webp"/>
                <p>Red Edition Red Maroon Matte Longlasting  (Set of 4)</p>
                 <b> ₹110</b>
              <span>  23% off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/59578636/7to43_400.webp"/>
               <p> M19 wireless bluetooth and heaphones V5.1 Bluetooth eName: </p>
               <b> ₹299</b>
               <span> 10% off</span>
            </div>
            <div>
                  <img src="https://images.meesho.com/images/products/21005838/yd1tm_400.webp"/>
                <p>  Super Saver Dhamakaa Offer- Saree Cover </p>
                 <b> ₹153</b>
                <span>  43% off</span>
                  
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/258551943/bdhjy_400.webp"/>
               <p> STYLISH WOMEN WATCH</p>
              <b>  ₹137</b>
               <span>  50%  off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/199365015/j0hr7_400.webp"/>
              <p>  Unique Trendy Women Flipflops & Slippers</p>
               <b> ₹213 onwards</b>
             <span> 30%  off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/140598388/ailwc_400.webp"/>
               <p> sporty tshirt for men</p>
             <b>   ₹191</b>
             <span> 50% off</span>
                
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/132732628/3pbtc_400.webp"/>
                     <p> Key Holder</p>
                     <b> ₹191</b>
                   <span>   60% off</span>

            </div>
            <div>
                <img src="https://images.meesho.com/images/products/42182017/gtwro_400.webp"/>
              <p>  Stylish Designer Women Shirts</p>
                   <b> ₹277</b>
                  <span>  60% off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/119140062/1yz6y_400.webp"/>
               <p> Trendy Modern Women Tshirts</p>
              <b>  ₹159</b>
               <span>35% off</span>
                
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/147541464/xdiot_400.webp"/>
                  <p>     Shivam Creation's fridge cover</p>
               <b> ₹129</b>
               <span> 50% off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/42958844/zzzh2_400.webp"/>
               <p>shivam creation</p>
               <b> ₹219</b>
              <span>  40% off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/296573191/1tjwx_400.webp"/>
               <p> Lightweight Casual Waterproof </p>
               <b> ₹379</b>
              <span>  50%  off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/214201616/dl9ym_400.webp"/>
              <p> Stylesh Key Holder</p>
            <b>   ₹379</b>
            <span>  50%  off</span>
             
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/99771667/i46dp_400.webp"/>
              <p>  HNB23 Makeup Beauty Kajal & 3in1 Eyeliner</p>
                 <b>  ₹152</b>
                 <span>  50%  off</span>
  
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/287562063/uhrry_400.webp"/>
                    <p> Fancy Tshirt</p>
                   <b>  ₹152</b>
                <span>   50%  off</span>
            </div>
            <div>
                <img src="https://images.meesho.com/images/products/98667462/i0q8q_400.webp"/>
                <p>Waall hook</p>
               <b> ₹152</b>
               <span> 50%  off</span>

            </div>
            <div>
                <img src="https://images.meesho.com/images/products/284621073/dbnyy_400.webp"/>
                <p>Diva Fusion Mangalsutras</p>
                   <b>₹55</b>
                   <span>70% off</span>

            </div>
        </div>
      
    </div>
        
        
        
         </div>
         </div>
  )
}

export default Home;