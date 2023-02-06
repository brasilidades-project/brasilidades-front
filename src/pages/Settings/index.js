import { Logo, Slogan, Slogan1, Slogan2, Slogan3, TopBar, MenuIcon } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import { Fade, Grow, TextField } from '@material-ui/core';
import { CancelButton, ChangeButton, ConfirmButton, ConfirmDeleteButton, ConfirmDeleteFlexing, DeleteButton, Flexing, SettingsContent, SettingsInput, SettingsPasswordSubtitle, SettingsSubtitle, SettingsTitle, Spacing } from '../../components/Settings';
import { WhiteBorderTextField } from '../../components/Settings/Input';
import { useNavigate } from 'react-router-dom';
export default function Settings() {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [isEmailDisplay, setIsEmailDisplay] = useState(false);
  const [isPasswordDisplay, setIsPasswordDisplay] = useState(false);
  const [isDeleteFavListDisplay, setIsDeleteFavListDisplay] = useState(false);
  const [isDeleteAccountDisplay, setIsDeleteAccountDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  return (
    <HomepageLayout>
      { isMenuDisplay ? (
        <Menu setIsMenuDisplay={setIsMenuDisplay} sliderMenu={sliderMenu} setSliderMenu={setSliderMenu}/>
      ):(
        <></>
      )}
      <TopBar>
        <Logo onClick={() => navigate('/homepage')}><p>brasilidades</p></Logo>
        <Slogan><Slogan1>pesquise,</Slogan1><Slogan2>favorite</Slogan2><Slogan3>e visite</Slogan3></Slogan>
        <MenuIcon onClick={() => {setIsMenuDisplay(true); setSliderMenu(true);}}><IoMdMenu/></MenuIcon>
      </TopBar>
      <Grow in={true} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <SettingsContent>
          <SettingsTitle>configurações da conta</SettingsTitle>
          <Flexing>
            <SettingsSubtitle>trocar e-mail</SettingsSubtitle>
            { isEmailDisplay ? (
              <>
                <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <CancelButton onClick={() => setIsEmailDisplay(false)}>cancelar</CancelButton>
                </Fade>
                <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <SettingsInput>
                    <WhiteBorderTextField id="outlined-basic" variant="outlined" label="e-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
                  </SettingsInput>
                </Fade>
                <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <ConfirmButton>confirmar</ConfirmButton>
                </Fade>
              </>
            ):(
              <Fade in={!isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                <ChangeButton onClick={() => setIsEmailDisplay(true)}>trocar</ChangeButton>
              </Fade>
            ) }
          </Flexing>
          <Flexing>
            <SettingsPasswordSubtitle>trocar senha</SettingsPasswordSubtitle>
            { isPasswordDisplay ? (
              <>
                <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <CancelButton onClick={() => setIsPasswordDisplay(false)}>cancelar</CancelButton>
                </Fade>
                <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <SettingsInput>
                    <WhiteBorderTextField id="outlined-basic" variant="outlined" label="senha antiga" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
                  </SettingsInput>
                </Fade>
                <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <SettingsInput>
                    <WhiteBorderTextField id="outlined-basic" variant="outlined" label="senha nova" type="password" fullWidth value={newPassword} onChange={e => setNewPassword(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
                  </SettingsInput>
                </Fade>
                <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <ConfirmButton>confirmar</ConfirmButton>
                </Fade>
              </>
            ):(
              <Fade in={!isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                <ChangeButton onClick={() => setIsPasswordDisplay(true)}>trocar</ChangeButton>
              </Fade>
            ) }
          </Flexing>
          <Spacing></Spacing>
          { isDeleteFavListDisplay ? (
            <ConfirmDeleteFlexing><ConfirmDeleteButton>limpar toda minha lista de favoritos</ConfirmDeleteButton><ConfirmDeleteButton onClick={() => setIsDeleteFavListDisplay(false)}>cancelar</ConfirmDeleteButton></ConfirmDeleteFlexing>
          ):(
            <DeleteButton onClick={() => setIsDeleteFavListDisplay(true)}>limpar toda minha lista de favoritos permanentemente</DeleteButton>
          ) }
          { isDeleteAccountDisplay ? (
            <ConfirmDeleteFlexing><ConfirmDeleteButton>apagar a minha conta e todas as informações</ConfirmDeleteButton><ConfirmDeleteButton onClick={() => setIsDeleteAccountDisplay(false)}>cancelar</ConfirmDeleteButton></ConfirmDeleteFlexing>
          ):(
            <DeleteButton onClick={() => setIsDeleteAccountDisplay(true)}>apagar minha conta e todas as informações permanentemente</DeleteButton>
          ) }
        </SettingsContent>
      </Grow>
    </HomepageLayout>
  );
}
