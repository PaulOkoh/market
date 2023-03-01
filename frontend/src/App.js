import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge"
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { Store } from "./Store";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {  cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT"})
    localStorage.removeItem("userInfo")
  }
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>devThriftMarket</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="success">
                      {cart.cartItems.reduce(
                        (acc, curr) => acc + curr.quantity,
                        0
                      )}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown>User Profile</NavDropdown>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onclick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link>Sign In</Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            
          </Container>
        </main>
        <footer>
          <div className="text-center">&copy;2023</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
