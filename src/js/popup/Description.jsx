import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import { fb } from '../utils/firebaseInit'

export default class Description extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" color='warning'>
          <NavbarBrand className='text-white'>Description</NavbarBrand>
        </Navbar>
      </React.Fragment>
    );
  }
}