import React from "react"
import { Container, Row, Col } from 'reactstrap';
import { hot } from "react-hot-loader"
import TopBar from './TopBar'
import Components from './Components'
import Description from './Description'
import Preview from './Preview'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
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
            <Components />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className='px-0'>
            <Description />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className='px-0'>
            <Preview />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default hot(module)(Dashboard)
