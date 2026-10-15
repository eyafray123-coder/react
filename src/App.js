import { Container, Card, Button } from "react-bootstrap";

import Name from "./name";
import Price from "./price";
import Description from "./description";
import ProductImage from "./image";

import "./App.css";

// Write your first name between the quotes
const firstName = "";

function App() {
  return (
    <>
      <div className="App">
        <Container className="page-container">
          <header className="intro">
            <p className="eyebrow">OUR SELECTION</p>
            <h1>Sound meets style.</h1>
            <p>Discover a better listening experience.</p>
          </header>

          {/* Product Card */}
          <Card className="product-card">
            <ProductImage />

            <Card.Body className="product-body">
              <span className="product-tag">FEATURED PRODUCT</span>

              <Name />
              <Price />
              <Description />

              <Button variant="dark" className="shop-button">
                Discover more
              </Button>
            </Card.Body>
          </Card>

          {/* Greeting */}
          <div className="greeting">
            {firstName.trim() ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Profile"
                  className="avatar"
                />
                <h2>Hello, {firstName}!</h2>
                <p>Welcome to my React-Bootstrap page.</p>
              </>
            ) : (
              <>
                <h2>Hello, there!</h2>
                <p>Welcome to my React-Bootstrap page.</p>
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
