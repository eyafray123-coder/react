import Card from "react-bootstrap/Card";
import product from "./product";

function Description() {
  return (
    <Card.Text className="product-description">{product.description}</Card.Text>
  );
}

export default Description;
