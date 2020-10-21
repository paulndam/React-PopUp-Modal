import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import {MdClose} from "react-icons/md";



const Background = styled.div`
    width:100%;
    height:100%;
    background: rgb(0,0,0,0,0,0);
    position: fixed;
    display: flex;
    justify-content:center;
    align-items:center;


`

const ModalWrapper = styled.div`
    width:800px;
    height:500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background:#fff;
    color:#000;
    display:grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index:10;
    border-radius:10px;


`

const ModalImg = styled.img`
    width:100%;
    height:100%;
    border-radius:14px 0 0 10px;
    background:#000;

`

const ModalIContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:1.0;
    color:#141414;


    p{
    margin-bottom: 1rem;
}

button{
    padding: 10px 24px;
    background:#141414;
    color:#fff;
}


`


const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;


`



export const Modal = ({ showmodal, setshowmodal }) =>{

    const modalRef = useRef()

    const animation = useSpring({
        config: {
             duration:300
        },

        opacity: showmodal ? 1 : 0,
        transform: showmodal ? `translateY(0%) `: `translateY(-100%)  `
    })

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setshowmodal(false)
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showmodal) {
            setshowmodal(false)
        }
    }, [setshowmodal, showmodal])
    

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },[keyPress])







    return (
        <>
            {showmodal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <ModalWrapper showmodal={showmodal}>
                        <ModalImg src={require('./messi.jpg')} alt='picture'></ModalImg>
                        <ModalIContent>
                            <h1>The Messiah of Soccer</h1>
                            <p>Come and recieve your deliverance and blessings</p>
                            <button> follow now</button>
                        
                        </ModalIContent>
                        <CloseModalButton aria-label="exit" onClick={()=> setshowmodal(prev => !prev )}>
                            
                        
                        
                        </CloseModalButton>
                    
                    
                        </ModalWrapper>
                    </animated.div>
                
                </Background>
            ) : null}
            
            </>
    )
}

export default Modal
