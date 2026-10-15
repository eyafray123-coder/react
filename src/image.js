import Card from "react-bootstrap/Card";
import product from "./product";

function ProductImage() {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      className="product-image"
    />
  );
}

export default ProductImage;
