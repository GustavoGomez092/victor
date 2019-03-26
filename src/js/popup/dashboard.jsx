import React from "react"
import {  Container, Row, Col, Navbar, NavbarBrand, } from 'reactstrap';
import { hot } from "react-hot-loader"
import TopBar from './TopBar'
import Components from './Components'
import Customize from './Customize'
import Preview from './Preview'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentId: null,
      customizedComponent: null
    }
  }

 async getId(data){
    await this.setState({currentId: data})
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12" className='px-0'>
            <TopBar />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className='px-0'>
            <Navbar color="light" light expand="md" color='warning'>
              <NavbarBrand className='text-white'>Components</NavbarBrand>
            </Navbar>
            <Components getComponentId={(data)=>this.getId(data)}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className='px-0'>
            <Customize componentId={this.state.currentId} customized={(id, content, image)=>this.setState({ customizedComponent: {id, content, image} })}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className='px-0'>
            <Preview customizedInput={this.state.customizedComponent}/>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default hot(module)(Dashboard)
