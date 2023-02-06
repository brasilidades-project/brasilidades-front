import { Logo, Slogan, Slogan1, Slogan2, Slogan3, TopBar, MenuIcon } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import { Grow } from '@material-ui/core';
import { ChangeButton, DeleteButton, Flexing, SettingsContent, SettingsPassword, SettingsSubtitle, SettingsTitle, Spacing } from '../../components/Settings';
import { useNavigate } from 'react-router-dom';
export default function Settings() {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [appEmail, setAppEmail] = useState('leonardosouzaf@icloud.com');
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
          <Flexing><SettingsSubtitle>trocar e-mail </SettingsSubtitle><ChangeButton>trocar</ChangeButton></Flexing>
          <Flexing><SettingsSubtitle>trocar senha </SettingsSubtitle><ChangeButton>trocar</ChangeButton></Flexing>
          <Spacing></Spacing>
          <DeleteButton>limpar toda minha lista de favoritos permanentemente</DeleteButton>
          <DeleteButton>apagar minha conta e todas as informações permanentemente</DeleteButton>
        </SettingsContent>
      </Grow>
    </HomepageLayout>
  );
}
