import React from "react"
import { Row, Col, Card, CardBody, Form, Input, Button, Spinner } from 'reactstrap';
import icon from "../../img/icon-128.png"
import { hot } from "react-hot-loader"
import { fb } from '../utils/firebaseInit'
import Dashboard from './dashboard'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      loading: false
    }
  }


  async changeLogIn() {
    try {
      var user = await fb.auth().currentUser;
      if (user) {
        await this.setState({ loggedIn: true })
      } else {
        await this.setState({ loggedIn: false })
      }
    } catch (e) {
      console.log(e)
    }
   }

   loggedInChecker() {
     fb.auth().onAuthStateChanged(async (user) => {
       if (user) {
         await this.setState({ loggedIn: true })
       } else {
         await this.setState({ loggedIn: false })
       }
     });
   }

  async logInUser() {
    await this.setState({loading:true})
    try {
      let user = await fb.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      this.changeLogIn()
      await this.setState({ loading: false })
    } catch (e) {
      console.log(e)
      this.changeLogIn()
      await this.setState({ loading: false })
    }
  }
  async componentDidMount() {
    this.changeLogIn()
    this.loggedInChecker()
  }

  

  render() {
    return (
      <React.Fragment>
        {
          !this.state.loggedIn
            ?
            <Row className='h-75 justify-content-center align-items-center'>
              <Col sm="12" md='3' lg='3' xl='3'>
                <Card className='py-3'>
                  <CardBody>
                    <h3 className='text-center mb-4'>Welcome to VICTOR</h3>
                    <Form>
                      <Input type='text' placeholder='User name' onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} className='mb-2' />
                      <Input type='password' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} className='mb-2' />
                    </Form>
                    <Button color="success" onClick={() => this.logInUser()} block>{this.state.loading ? <Spinner color="light" />:<span>LOG IN</span>}</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            :
            <Dashboard fluid claassName='py-0'/>
        }
      </React.Fragment>
    )
  }
};

export default hot(module)(Login)
