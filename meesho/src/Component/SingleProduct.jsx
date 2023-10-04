
import React, { useContext, useEffect, useState } from "react";
import { router, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import './SingleProduct.css'


const SingleProduct= () => {
  const [isUserLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const router = useNavigate();
  const [products, setProducts] = useState ([])  ;
  const [single, setSingle] = useState({});
  const { id } = useParams();
  // const
  const { state } = useContext(AuthContext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductsData] = useState({
    name: "",
    price: "",
    image: "",
    cetegory: "other",
  });
  const [allowUpdate, setAllowupdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);
  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);
  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
        console.log(single,"-setsingle")
      }
    }
  }, [id, products]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Currrent-user"));
    // console.log
    if (user) {
      setIsLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addcart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === currentUserEmail) {
          users[i].cart.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("product succesfull add to cart");
      router("/cart");
    }
    //  else {
    //   alert("you cant add product before login");
    // }
  }
  function Update() {
    setAllowupdate(true);
  }
  // function closeUpdate(){
  //   setAllowupdate(false)
  // }
  function handlechange(event) {
    setProductsData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  }
  function slectRole(event) {
    setProductsData({ ...productData, ["cetegory"]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (var i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].cetegory = productData.cetegory;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.cetegory = productData.cetegory;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProducts({ name: "", price: "", image: "", cetegory: "other" });
        alert("product update ...");
      }
    }
  }
  return (
    <div  style={{width: "100%" ,height : "1000px", marginTop: "80px" }}>
      {/* <h2  style={{color: "red"}}>Single Product</h2> */}
      {allowUpdate ? (
        <form onSubmit={handleSubmit}>
          <lable>Product Name:</lable>
          <br />
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handlechange}
          />
          <br />
          <lable>Product Price:</lable>
          <br />
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handlechange}
          />
          <br />
          <lable>Product Cetegory:</lable>
          <br />
          <input
            type="text"
            name="price"
            value={productData.cetegory}
            onChange={slectRole}
          />
          <br />
          <select onChange={slectRole}>
            <option value="other">other</option>
            <option value="mens">mens</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
            <option value="electronic">electronic</option>
          </select>
          <br />
          <lable>Product image :</lable>
          <br />
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handlechange}
          />
          <br />
          <input type="submit" value="update profile" />
          {/* <p onClick={closeUpdate}> x</p> */}
        </form>
      ) : (
        []
      )}

      {/* ******************* */}

      <div  style={{width: "100%", display:"flex" , justifyContent: "space-around" , flexWrap: "wrap"}}>
    
        <img  style={{border: "5px solid red"}}  src={single.image}/>
        <div style={{border: "5px solid red", width: "50%" , }}>
        <h2>Name:{single.name}</h2>
        <h2>Price:{single.price} </h2>
        <p>Cetegory:{single.Cetegory}</p>
        <button  style={{ width:"30%", height: "40px" ,backgroundColor: "black", color: "white" ,borderRadius:"50px",marginLeft: "30px"}}  onClick={addcart}>add to cart</button>
        
        <button   style={{ width:"30%", height: "40px" ,backgroundColor: "black", color: "white" ,borderRadius:"50px",marginLeft: "30px"}} onClick={Update}>Update Product</button>
        <div id='slectsize'>
                        <p>Select Size</p>
                        <p>Select Giude</p>  
                    </div>
                     <div id='sizings'>
                        <div><p>XL</p></div>
                         <div><p>X</p></div> 
                         <div><p>L</p></div>
                         <div><p>XL</p></div> 
                         <div><p>M</p></div>
                         <div><p>S</p></div>
                          </div>


                          <div id='viewsmaller'>
                     <span>Size out of stock!<b> View Similar</b></span><br/>
                      <p> Model is 6'0"/185 cms and is wearing an M size
                     100% Cotton, Machine wash</p>
                     </div>
                        <div id='avalible-offer'>
                            <h4>Available Offers</h4>
                            <div id='offersimage'>
                                <div id='offersimage2'>
                                    <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png'/>
                                    </div>
                                     
                                     <div id='offfersimage2-text'>
                                     <p>10% Instant Discount on Kotak Bank Credit Cards only.</p>
                                     <span>Min Purchase: ₹2500Max Discount: ₹1000<b>more</b></span>
                                     </div>
                                   </div>
      
        
        </div>
        {/* ************************************* */}
       





      </div>
      {userData?.role === "seller" ? (
        <div>
          {/* <button onClick={Update}>Update</button> */}
        </div>
      ) : (
        <div>
               <div className="more-puma">
                                    <h2>More From Puma</h2>
                                    <div className="fallow"> + Fallow Brand</div>


                                  </div>
                                  <div className="imagediv">
                                    <div>
                                  <img src='https://img.tatacliq.com/images/i7/97Wx144H/MP000000009494526_97Wx144H_202105042219391.jpeg'/>
                                  <p  className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000013765836_97Wx144H_202207130826031.jpeg'/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000012047259_97Wx144H_202202070409221.jpeg'/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000014807504_97Wx144H_202210092344481.jpeg'/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000014807582_97Wx144H_202210092346511.jpeg'/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    
                                    <div>
                                    <img  src="https://images.meesho.com/images/products/287562063/uhrry_400.webp"/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img  src="https://images.meesho.com/images/products/284621073/dbnyy_400.webp"/>

                                    <p className="style">Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                  </div>
        </div>
      )}
    </div>
</div>

  );
};

export default SingleProduct;