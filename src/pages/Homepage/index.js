import { Logo, Map, Slogan, Slogan1, Slogan2, Slogan3, Places, PlaceSuggestion, DistrictName, Line, ToClickDiv, ToClickDivText, TopBar, DistrictColumn, MenuIcon, ScrollAd } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { MapBrazil } from 'react-brazil-map';
import { useContext, useEffect, useState } from 'react';
import Place from '../../components/Homepage/Place';
import { districtsImages, districtsNames } from '../../components/Homepage/districtsData';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import PlaceData from '../../components/Homepage/PlaceData';
import { Grow } from '@material-ui/core';
import UserContext from '../../contexts/UserContext';
export default function Homepage() {
  const [placesMg, setPlacesMg] = useState([
    {
      name: 'Cristo Redentor',
      image: 'https://prefeitura.rio/wp-content/uploads/2021/10/Cristo-DePaua-2.jpg',
      image2: 'https://prefeitura.rio/wp-content/uploads/2021/10/Cristo-DePaula-2.jpg',
      image3: 'https://prefeitura.rio/wp-content/uploads/2021/10/Cristo-DePala-2.jpg',
      image4: 'https://prefeitura.rio/wp-content/uploads/2021/10/Cristo-DePaula-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      city: 'Rio de Janeiro, Rio de Janeiro',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542746056463!2d-43.21267588488418!3d-22.95191104525333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1675495024540!5m2!1spt-BR!2sbr',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false,
      updatedAt: '03/01/2023'
    },
    {
      name: 'Praça do Papa',
      image: 'http://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2021-11/praca-do-papa_qu4rto-studio-0030_0.jpg',
      image2: 'http://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2021-11/praca-do-papa_qu4rto-studio-0030_0.jpg',
      image3: 'http://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2021-11/praca-do-papa_qu4rto-studio-0030_0.jpg',
      image4: 'http://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2021-11/praca-do-papa_qu4rto-studio-0030_0.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      city: 'Belo Horizonte, Minas Gerais',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15000.901469699731!2d-43.9148135!3d-19.9570223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacdb6ef0826ed46!2sPra%C3%A7a%20Governador%20Israel%20Pinheiro%20(Pra%C3%A7a%20do%20Papa)!5e0!3m2!1spt-BR!2sbr!4v1675486611716!5m2!1spt-BR!2sbr',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: false,
      hasGuidance: false,
      isTrekking: false,
      needId: false,
      car: true,
      airplane: true,
      boat: false,
      updatedAt: '02/01/2023'
    },
    {
      name: 'Museu de Arte de São Paulo Assis Chateaubriand',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image2: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image3: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image4: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      city: 'São Paulo, São Paulo',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.782787138132!2d-46.6558819!3d-23.561414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1spt-BR!2sbr!4v1675495269985!5m2!1spt-BR!2sbr',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false,
      updatedAt: '04/01/2023'
    },
    {
      name: 'Museu de Arte de São Paulo Assis Chateaubriand',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image2: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image3: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      image4: 'https://lh3.googleusercontent.com/p/AF1QipMGIvyxHIHM6WzEEpOvqyVXatJC6W7QklJ5smMm=s1360-w1360-h1020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      city: 'São Paulo, São Paulo',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.782787138132!2d-46.6558819!3d-23.561414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1spt-BR!2sbr!4v1675495269985!5m2!1spt-BR!2sbr',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false,
      updatedAt: '04/01/2023'
    }
  ]);
  const [placeSelected, setPlaceSelected] = useState({});
  const [district, setDistrict] = useState('');
  const [isSelectDisplay, setIsSelectDisplay] = useState(true);
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [isPlaceDisplay, setIsPlaceDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [sliderPlaceData, setSliderPlaceData] = useState(false);
  const [toggleGrow, setToggleGrow] = useState(false);
  const [districtName, setDistrictName] = useState('');
  const [districtImage, setDistrictImage] = useState(districtsImages.BR);
  const [appEmail, setAppEmail] = useState('leonardosouzaf@icloud.com');
  const { setUserData, userData } = useContext(UserContext);

  useEffect(() => {
    if(district !== '') {
      setIsSelectDisplay(false);
    }
    for(let i=0; i<28; i++) {
      if(Object.keys(districtsImages)[i] === district) {
        setToggleGrow(false);
        setDistrictImage(districtsImages[district]);
        setDistrictName(districtsNames[district]);
        setTimeout(() => {
          setToggleGrow(true);
        }, 500);
      }
    }
  }, [district]);
  return (
    <HomepageLayout>
      { isMenuDisplay ? (
        <Menu setIsMenuDisplay={setIsMenuDisplay} sliderMenu={sliderMenu} setSliderMenu={setSliderMenu}/>
      ):(
        <></>
      )}
      { isPlaceDisplay ? (
        <PlaceData setIsPlaceDisplay={setIsPlaceDisplay} placeSelected={placeSelected} sliderPlaceData={sliderPlaceData} setSliderPlaceData={setSliderPlaceData}/>
      ):(
        <></>
      )}
      <TopBar>
        <Logo><p>brasilidades</p></Logo>
        <Slogan><Slogan1>pesquise,</Slogan1><Slogan2>favorite</Slogan2><Slogan3>e visite</Slogan3></Slogan>
        { isSelectDisplay ? (
          <></>
        ):(
          <MenuIcon onClick={() => {setIsMenuDisplay(true); setSliderMenu(true);}}><IoMdMenu/></MenuIcon>
        )}
      </TopBar>
      <Grow in={true} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <Map>
          <MapBrazil onChange={setDistrict} bg='white' fill='black' colorStroke='lightgray' colorLabel='white' width={500} height={500} />
          { isSelectDisplay ? (
            <></>
          ) : (
            <>
              <DistrictColumn>
                <DistrictName><img src={districtImage} alt='Bandeira do Estado'/>{districtName}</DistrictName>
                <Line></Line>
                <Places>
                  {placesMg.map((place, index) => <Place key={index} toggleGrow={toggleGrow} timeout={200*(index+1)} name={place.name} image={place.image} description={place.description} setPlaceSelected={setPlaceSelected} place={place} setIsPlaceDisplay={setIsPlaceDisplay} setSliderPlaceData={setSliderPlaceData} userId={userData.user.id}/>)}
                  <Grow in={toggleGrow} timeout={{ enter: 200, exit: 300 }} mountOnEnter unmountOnExit>
                    <PlaceSuggestion onClick={() => { window.open(`mailto:${appEmail}?Subject=Sugest%E3o%20de%20lugar%20para%20o%20brasilidades&Body=O%20lugar%20que%20eu%20gostaria%20de%20sugerir%20%E9%3A%20...`); }}><IoIosAdd/><p>possui uma sugestão? envie um e-mail para nós!</p></PlaceSuggestion>
                  </Grow>
                </Places>
              </DistrictColumn>
              <ScrollAd><p>deslize para ver mais {'>'}{'>'}{'>'}</p></ScrollAd>
            </>
          )}
        </Map>
      </Grow>
      { !isSelectDisplay ? (
        <></>
      ) : (
        <ToClickDiv><ToClickDivText><p>clique no mapa para começar</p></ToClickDivText></ToClickDiv>
      )}
    </HomepageLayout>
  );
}
