import React from 'react';
import styled from 'styled-components';
import { Slide } from '@material-ui/core';
import { IoIosClose } from 'react-icons/io';

export default function Menu({ setIsMenuDisplay, sliderMenu, setSliderMenu }) {
  return (
    <>
      <Slide in={sliderMenu} direction="left" timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>  
        <MenuBlur></MenuBlur>
      </Slide>
      <Slide in={sliderMenu} direction="left" timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
        <MenuDiv>
          <CloseIcon onClick={() => {
            setSliderMenu(false);
            setTimeout(() => {
              setIsMenuDisplay(false);
            }, 600);
          }}><IoIosClose/></CloseIcon>
        </MenuDiv>
      </Slide>
    </>
  );
}

const CloseIcon = styled.div`
  font-size: 30px;
  position: fixed;
  right: 80px;
  top: 55px;
  color: lightgray;
  :hover{
    cursor: pointer;
    color: #CF0E0E;
  }
`;

const MenuDiv = styled.div`
  width: 600px;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: black;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  z-index: 5;
`;

const MenuBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 0.8;
  z-index: 4;
  display: flex;
  justify-content: flex-end;
  /* animation: fadeIn 300ms;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 0.8; }
  } */
`;
