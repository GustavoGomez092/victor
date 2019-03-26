import React from 'react'
import {
  Navbar,
  NavbarBrand,
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
      compo: [{id: 'test', info:{componentName:'test'}}]
    }
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
      await this.setState({compo: components})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" color='warning'>
          <NavbarBrand className='text-white'>Components</NavbarBrand>
        </Navbar>
        <Card className='overflow-auto vh-90'>
          <CardHeader id='toggler' className='d-flex'><h2>Home</h2></CardHeader>
          <CardBody className='p-0'>
            <UncontrolledCollapse toggler="#toggler">
              {
                this.state.compo.map( x => (
                  <Card key={x.id}>
                  <CardBody>
                    <Card>
                      <CardHeader><h5 className='d-inline-block'>{x.info.componentName}</h5><span className='float-right'><Button color='primary' className='mr-3'>Description</Button><Button color='success'>Add</Button></span></CardHeader>
                    </Card>
                  </CardBody>
                </Card>
                ))
                }
            </UncontrolledCollapse>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}