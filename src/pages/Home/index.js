import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';


const Home = () => {
  return ( 
      <div>
        <br></br>
        <br></br>
      <MDBCard background-color='Grey' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader ><font color='black' >Header</font></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Primary card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='secondary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Secondary card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    <div>
    <MDBCard background='success' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Success card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='danger' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Danger card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </div>
      
      <MDBCard background='warning' className='mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Warning card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='info' className='text-body mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Info card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='light' className='mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Light card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='dark' className='text-white' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Dark card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </div>
  )
}

export default Home