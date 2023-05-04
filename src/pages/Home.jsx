import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import HomePicture from '../components/HomePicture';
import Card from '../components/Card';

const logementsList = require('../datas/logements.json');

function Home() {
  return (<>
    <BodyContent>
      <Header />
      <HomePicture />
      {logementsList.map((logement) => (
        <Card key={logement.id} title={logement.title} image={logement.cover} />
      ))}
    </BodyContent>
    <Footer />
  </>);
}

export default Home;