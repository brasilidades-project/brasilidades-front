import React from 'react';
import styled from 'styled-components';
import { Grow } from '@material-ui/core';
import { IoIosStar, IoMdSearch } from 'react-icons/io';

export default function Place({ toggleGrow, name, timeout, image, description, place, setPlaceSelected, setIsPlaceDisplay, setSliderPlaceData }) {
  return (
    <Grow in={toggleGrow} timeout={{ enter: timeout, exit: 300 }} mountOnEnter unmountOnExit>
      <MarginDiv>
        <img src={image} alt='Foto do ponto turístico' onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); }}/>
        <PlaceData>
          <Title onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); }}>{name}</Title>
          <Description>{description}</Description>
          <Icons>
            <IconL onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); }}><div><IoMdSearch/></div><p>saber mais</p></IconL>
            <IconR><div><IoIosStar/></div><p>favoritar</p></IconR>
          </Icons>
        </PlaceData>
      </MarginDiv>
    </Grow>
  );
}

const Title = styled.div`
  width: fit-content;
  font-size: 20px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  padding-bottom: 3px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  margin-top: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 5px;
  p{
    font-size: 12px;
    margin-left: 4px;
  }
`;

const IconL = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-right: .5px solid lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  div{
    margin-top: 2.5px;
  }
  :hover{
    cursor: pointer;
    background-color: gray;
    color: white;
    div {
      animation: wiggle 1s linear infinite;
    }
  }
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-25deg);
    }
    20% {
      transform: rotateZ(20deg);
    }
    25% {
      transform: rotateZ(-20deg);
    }
    30% {
      transform: rotateZ(12deg);
    }
    35% {
      transform: rotateZ(-8deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const IconR = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: .5px solid lightgray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  div{
    margin-top: 1.5px;
  }
  :hover{
    cursor: pointer;
    background-color: #EEBC1D;
    color: white;
    div {
      animation: wiggle 1s linear infinite;
    }
  }
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const Description = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: default;
  }
`;

const PlaceData = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MarginDiv = styled.div`
  border: 1px solid gray;
  height: 102px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  img{
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
    :hover{
      cursor: pointer;
    }
  }
`;
