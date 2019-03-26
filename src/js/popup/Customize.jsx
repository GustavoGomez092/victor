import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Button
} from 'reactstrap';
import { db } from '../utils/firebaseInit'

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      data: null,
      variables: null
    }
  }

  async getDoc() {
    var docRef = db.collection("fl_content").doc(this.state.id);

    await docRef.get().then((doc) => {
      if (doc.exists) {
        let variables = this.getVariables(doc.data().componentCode)
        variables = variables.reduce((x, u) => {
          x[u] = ''
          return x
        }, {})
        this.setState({ data: doc.data(), variables });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.componentId !== prevProps.componentId) {
      await this.setState({ id: this.props.componentId })
      this.getDoc()
    }
  }

  getVariables(data) {
    let regex = /\${(.*?)}/g
    let names = []
    let current;
    while (current = regex.exec(data)) {
      names.push(current[1])
    }
    return names
  }



  sender() {
    let { data, variables } = this.state
    let regex = /\${(.*?)}/g
    let component = data.componentCode
    for (let variable of Object.keys(variables)) {
      component = component.replace(`\${${variable}}`, variables[variable])
    }
    this.props.customized(data.id, component, data.previewPicture[0].id)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" color='warning'>
          <NavbarBrand className='text-white'>Customize</NavbarBrand>
        </Navbar>
        {
          this.state.data
            ?
            <Card className=' overflow-auto vh-90'>
              <CardBody>
                <Row>
                  <Col>
                    <h2 className='text-center'>{this.state.data.componentName}</h2>
                    {
                      Object.entries(this.state.variables).map((u, i) => {
                        return (
                          <React.Fragment key={`${u[0]}${i}`}>
                            <h4>{u[0]}</h4>
                            <Input
                              type='textarea'
                              onChange={(e) => this.setState({
                                variables: { ...this.state.variables, [u[0]]: e.target.value }
                              })}
                            />
                          </React.Fragment>
                        )
                      })
                    }
                  </Col>
                </Row>
                <Row className='mt-4'>
                  <Col>
                    <Button color='success' block onClick={() => this.sender()}>Add</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            :
            null
        }
      </React.Fragment>
    );
  }
}