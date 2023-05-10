import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HousingPictures from '../components/HousingPictures';
import HousingBody from '../components/HousingBody';
import HousingDescription from '../components/HousingDescription';

const logementsList = require('../datas/logements.json');

function Housing() {
  const [selectedLoge, setSelectedLoge] = useState({pictures:[]});

  let { logementId } = useParams();
  useEffect(() => {
    const logement = logementsList.find(loge => loge.id === logementId);
    setSelectedLoge(logement);
  });

  return (<>
    <HousingPictures pictures={selectedLoge.pictures} />
    <HousingBody />
    <HousingDescription />
  </>);
}

export default Housing;