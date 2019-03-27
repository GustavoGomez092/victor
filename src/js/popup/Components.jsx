import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  UncontrolledCollapse,
  Button
} from 'reactstrap'
import { db, fs } from '../utils/firebaseInit'

const components = []

export default class Components extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compo: null,
      update: false
    }
  }

  sendToParent(data) {
      this.props.getComponentId(data);

  }

  async componentDidMount() {
    await db.collection("fl_content")
      .get()
      .then( (querySnapshot) => {
        querySnapshot.forEach(async (doc) =>{
          // query images
          let data = await db.doc(`fl_files/${doc.data().previewPicture[0].id}`).get()
          data = data.data()
          let file = await fs.ref('flamelink/media').child(data.file).getDownloadURL()
          await components.push({ id: doc.id, info: doc.data(), img: file })
          this.setState({ compo: components })
        })
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error)
      })
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
                  this.state.compo.map((x, i) => (
                    x.info.home == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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
                  this.state.compo.map((x, i) => (
                    x.info.about == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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
                  this.state.compo.map((x, i) => (
                    x.info.service == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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
                  this.state.compo.map((x, i) => (
                    x.info.contact == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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
                  this.state.compo.map((x, i) => (
                    x.info.gallery == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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
                  this.state.compo.map((x, i) => (
                    x.info.reviews == 1
                      ?
                      <Card key={x.id}>
                        <CardBody>
                          <Card>
                            <CardHeader><h6 className='d-inline-block'>{x.info.componentName}</h6><span className='float-right'><Button color='success' onClick={() => this.sendToParent(x.id)}>customize</Button></span></CardHeader>
                          </Card>
                          <img src={`${x.img}`} key={`${x.img}${i}`} style={{ maxWidth: '100%' }} />
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