import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Card,
  Button
} from 'reactstrap';
import { db, fs } from '../utils/firebaseInit'

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReceived: [],
      templates: null
    }
  }

  async componentDidUpdate (prevProps, prevState) {
    if (this.props.customizedInput !== prevProps.customizedInput) {
      let templates = [...this.state.dataReceived, this.props.customizedInput]
      for (let template of templates) {
        let data = await db.doc(`fl_files/${template.image}`).get();
        data = data.data()
        let file = await fs.ref('flamelink/media').child(data.file).getDownloadURL()
        template.imageUrl = file
      }
      await this.setState({ dataReceived: templates, templates })
    }
  }

  async removeComponent () {
    let data = this.state.dataReceived
    data.pop()
    await this.setState({ dataReceived: data })
  }

  sendTemplate() {
    chrome.runtime.sendMessage({ msg: this.state.templates });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className='d-block' light expand="md" color='warning'>
          <NavbarBrand className='text-white'>Preview</NavbarBrand>
          <Button color='success' className='float-right' onClick={() => this.sendTemplate()}>Add To Page</Button>
        </Navbar>
        <Row>
          <Col>
            <Card>
              {
                this.state.templates
                  ? this.state.templates.map(u => (
                    <img src={`${u.imageUrl}`} key={u.id} style={{ maxWidth: '100%' }} />
                  ))
                  : null
              }
              <Button onClick={() => this.removeComponent()}>Remove last</Button>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}