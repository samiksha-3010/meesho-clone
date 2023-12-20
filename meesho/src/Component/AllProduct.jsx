import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AllProduct.css";
import toast from "react-hot-toast";
import axios from "axios";

const AllProduct = () => {
  const [IsProductExist, setIsProductExist] = useState(false);
  const [products, setProducts] = useState();
  console.log(products, "products");
  const router = useNavigate();

  useEffect(() => {
    async function getproduct() {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get("http://localhost:8000/all-products", {
        token,
      });
      if (response.data.success) {
        setProducts(response.data.products);
        setIsProductExist(true);
      }
    }
    getproduct();
  }, []);
  const redirect = (id) => {
    console.log(id, "-id")
    router(`/singleproduct/${id}`);
  };
  return (
    // csss styling
    <div>
      <h2>all product</h2>

      <div id="winterwear">
        <h2>Men's winter wear</h2>
        <p>110455 Products</p>
      </div>
      <div id="sort">
        <div id="popular">
          <p>Short By :Popularty</p>
          <i class="fa-solid fa-arrow-down-short-wide"></i>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          border: "1px solid black ",
          display: "flex ",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "100%", border: "2px solid black" }}>
          filter
          {/* //////************ */}
          <div id="containertxt">
            <div id="firstdiv">
              <div> Filters</div>
              <div> Clear All</div>
            </div>
            <div className="seconddiv">
              <p>Departement</p>
              <div className="mens">Mens Clothing</div>
            </div>
            <div className="seconddiv">
              <p>Departement</p>
              <div className="mens">Casual,Wear</div>
            </div>
            <div className="thirddiv">
              <h4>Product Type</h4>
              <div>
                <span></span>
                <p>Tshirt </p>
                <p>4020</p>
              </div>
              <div>
                <span></span>
                <p>Tshirt</p>
                <p>4009</p>
              </div>
              <div>
                <span></span>
                <p>SweatShirt</p>
                <p>7200</p>
              </div>
              <div>
                <span></span>
                <p>Jacket</p>
                <p>4070</p>
              </div>
              <div>
                <span></span>
                <p>Jeans</p>
                <p>7200</p>
              </div>
              <div>
                <span></span>
                <p>Tshirt</p>
                <p>4072</p>
              </div>
              <div>
                <span></span>
                <p>scirt</p>
                <p>2012</p>
              </div>
              <div>
                <span></span>
                <p>Blazers</p>
                <p>2023</p>
              </div>
              <div>
                <span></span>
                <p>shorts</p>
                <p>2023</p>
              </div>
              <div>
                <span></span>
                <p>Others</p>
                <p>2023</p>
              </div>
            </div>
            <div id="fourdiv">
              <div>
                <p>Brand</p>
                <p>+</p>
              </div>
              <div>
                <p>Size</p>
                <p>+</p>
              </div>
              <div>
                <p>Type</p>
                <p>+</p>
              </div>
              <div>
                <p>Price</p>
                <p>+</p>
              </div>
              <div>
                <p>Discount</p>
                <p>+</p>
              </div>
              <div>
                <p>Pattren</p>
                <p>+</p>
              </div>
              <div>
                <p>Sleev</p>
                <p>+</p>
              </div>
              <div>
                <p>Fit</p>
                <p>+</p>
              </div>
              <div>
                <p>Fabric</p>
                <p>+</p>
              </div>
              <div>
                <p>All Discount</p>
                <p>+</p>
              </div>
              <div>
                <p>Collar</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {!IsProductExist ? (
            <div>No Product</div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid gray",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {products &&
                products.map((pro) => (
                  <div
                    onClick={() => redirect(pro._id)}
                    style={{
                      width: "20%",
                      border: "2px solid gray",
                      height: "400px",
                    }}
                    key={pro.id}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "300px",
                        border: "1px solid red",
                      }}
                      src={pro.image}
                    />

                    <h3>Name:{pro.name} </h3>
                    <h3>Cetegory:{pro.cetegory}</h3>
                    <h4>Price: {pro.price}</h4>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AllProduct;
