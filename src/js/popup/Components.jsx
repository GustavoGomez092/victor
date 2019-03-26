import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  UncontrolledCollapse,
  Button
} from 'reactstrap'
import { db } from '../utils/firebaseInit'

const components = []

export default class Components extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compo: null
    }
  }

  sendToParent(data) {
      this.props.getComponentId(data);

  }

  async componentWillMount() {
    await db.collection("fl_content")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          components.push({ id: doc.id, info: doc.data() })
        })
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error)
      })
    await this.setState({ compo: components })
  }

  render() {
    return (
      <div className=' overflow-auto vh-90'>
        <Card className=''>
          <CardHeader id='home' className='d-flex'><h4>Home</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#home">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.home == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  :
                  null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
        <Card className=''>
          <CardHeader id='about' className='d-flex'><h4>About</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#about">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.about == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  :
                  null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
        <Card className=''>
          <CardHeader id='services' className='d-flex'><h4>Services</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#services">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.service == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  : null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
        <Card className=''>
          <CardHeader id='Contact' className='d-flex'><h4>Contact</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#Contact">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.contact == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  : null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
        <Card className=''>
          <CardHeader id='Gallery' className='d-flex'><h4>Gallery</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#Gallery">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.gallery == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  : null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
        <Card className=''>
          <CardHeader id='Reviews' className='d-flex'><h4>Reviews</h4></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#Reviews">
              {
                this.state.compo
                  ?
                  this.state.compo.map(x => (
                    x.info.reviews == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                        </CardBody>
                      </Card>
                      :
                      null
                  ))
                  : null
              }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
      </div>
    )
  }
}