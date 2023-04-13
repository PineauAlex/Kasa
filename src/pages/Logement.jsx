import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import HousingPictures from '../components/HousingPictures';
import HousingInfo from '../components/HousingInfo';

const logementsList = require('../datas/logements.json');

function Logement() {
  const [selectedLoge, setSelectedLoge] = useState(0);

  let { logementId } = useParams();
  useEffect(() => {
    const logement = logementsList.find(loge => loge.id === logementId);
    setSelectedLoge(logement);
  });

  return (<>
    <div className='body-content'>
      <Header />
      <HousingPictures pictures={selectedLoge.pictures} />
      <HousingInfo />
    </div>
    <Footer />
  </>);
}

export default Logement;