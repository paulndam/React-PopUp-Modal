import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from "./components/Modal";
import Globalstyle from "./style.js"

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height:100vh;

`

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius:4px;
    background: #141414;
    color:#fff;
    font-size:24px;
    font-weight:500;
    cursor:pointer;

  `

function App() {

  const [showmodal, setshowmodal] = useState(false);


  // function to opem modal

  const openModal = () => {
    setshowmodal(prev => !prev);

    
  }


  return (
    <div className="App">
      <>
        <Container>
          <Button onClick={openModal}> Check Me Out  !!</Button>
          <Modal showmodal={showmodal} setshowmodal={setshowmodal} />
          <Globalstyle />
        
        
        
        
        
        </Container>
        
        </>
    </div>
  );
}

export default App;
