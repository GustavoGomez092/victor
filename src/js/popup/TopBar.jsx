import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { fb } from '../utils/firebaseInit'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

  }
  async logOut() {
    try {
      await fb.auth().signOut();

    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" color='success'>
          <NavbarBrand className='text-white'><h1>VICTOR</h1></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <React.Fragment>
                <Button color="danger" onClick={() => this.logOut()}> Log Out</Button>
              </React.Fragment>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}