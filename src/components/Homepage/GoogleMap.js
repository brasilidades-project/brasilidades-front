import React from 'react';
import styled from 'styled-components';

export default function GoogleMap({ src }) {
  return (
    <iframe src={src} width="840" height="350" style={{ borderRadius: '5px' }} allowFullScreen="" loading="" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
