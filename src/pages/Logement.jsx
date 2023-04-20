import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import HousingPictures from '../components/HousingPictures';
import HousingInfo from '../components/HousingInfo';
import TagContent from '../components/TagContent';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';

const logementsList = require('../datas/logements.json');

function Logement() {
  const [selectedLoge, setSelectedLoge] = useState({tags:[],equipments:[]});

  let { logementId } = useParams();
  useEffect(() => {
    const logement = logementsList.find(loge => loge.id === logementId);
    setSelectedLoge(logement);
  });

  return (<>
    <div className='body-content'>
      <Header />
      <HousingPictures pictures={selectedLoge.pictures} />
      <HousingInfo title={selectedLoge.title} location={selectedLoge.location} />
      <TagContent tags={selectedLoge.tags} />
      <Rating stars={selectedLoge.rating} />
      <Dropdown title="Description" text={selectedLoge.description} />
      <Dropdown title="Équipements" text={selectedLoge.equipments} />
    </div>
    <Footer />
  </>);
}

export default Logement;