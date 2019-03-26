import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import { fb } from '../utils/firebaseInit'

export default class Preview extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" color='warning'>
          <NavbarBrand className='text-white'>Preview</NavbarBrand>
        </Navbar>
      </React.Fragment>
    );
  }
}