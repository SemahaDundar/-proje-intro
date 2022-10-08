
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
        <NavLink>
        <Link to="/form1">Form Demo 1</Link>
        </NavLink>
         <NavLink>
         <Link to="/form2">Form Demo 2</Link>
         </NavLink>
        
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
         <CartSummary removeFromCart={this.removeFromCart} cart={this.props.cart}/>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Navi;