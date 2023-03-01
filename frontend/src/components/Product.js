import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
import styled from "styled-components";

 



const Product = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: { cartItems } } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((pdt) => pdt._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Item is out of stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };


  return (
    <div>
      <Card variant="flush" style={{ width: "16rem", height: '100%', margin: "8px", border: 'transparent' }}>
        <Card.Body className="align-center">
          <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                style={{ width: "150px" }}
                className="card-img-top"
                alt={product.name}
              />
          </Link>

          <Link to={`/product/${product.slug}`}>
            <Card.Title >{product.name}</Card.Title>
          </Link>
          {/* <Card.Text>${product.price}</Card.Text> 
          {/* {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of Stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add to cart
            </Button>
          )} */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;


