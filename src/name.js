import Card from "react-bootstrap/Card";
import product from "./product";

function Name() {
  return <Card.Title>{product.name}</Card.Title>;
}

export default Name;
