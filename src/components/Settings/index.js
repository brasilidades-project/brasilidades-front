import styled from 'styled-components';

export const SettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 40px 60px;
`;

export const SettingsTitle = styled.div`
  width: fit-content;
  font-size: 35px;
  border-bottom: 2px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 4px;
  margin-bottom: 25px;
  margin-top: 50px;
  :hover{
    cursor: default;
  }
`;

export const SettingsSubtitle = styled.div`
  width: fit-content;
  font-size: 25px;
  border-bottom: 1px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 3px;
  margin: 25px 0px;
  :hover{
    cursor: default;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  width: 406px;
  justify-content: space-between;
`;

export const Spacing = styled.div`
  height: 200px;
`;

export const ChangeButton = styled.div`
  background-color: black;
  color: lightgray;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 225px;
  :hover{
    background-color: white;
    border: 1px solid white;
    color: black;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.div`
  background-color: black;
  color: darkred;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 10px;
  :hover{
    background-color: red;
    color: white;
    border: 1px solid red;
    cursor: pointer;
  }
`;
