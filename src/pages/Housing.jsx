import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import HousingPictures from '../components/HousingPictures';
import HousingBody from '../components/HousingBody';
import Dropdown from '../components/Dropdown';

const logementsList = require('../datas/logements.json');

function Housing() {
  const [selectedLoge, setSelectedLoge] = useState({equipments:[],pictures:[]});

  let { logementId } = useParams();
  useEffect(() => {
    const logement = logementsList.find(loge => loge.id === logementId);
    setSelectedLoge(logement);
  });

  return (<>
    <BodyContent>
      <Header />
      <HousingPictures pictures={selectedLoge.pictures} />
      <HousingBody />
      <Dropdown title="Description" text={selectedLoge.description} />
      <Dropdown title="Équipements" text={selectedLoge.equipments} />
    </BodyContent>
    <Footer />
  </>);
}

export default Housing;