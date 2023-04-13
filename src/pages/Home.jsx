import Header from '../components/Header';
import Footer from '../components/Footer';

import HomePicture from '../components/HomePicture';
import Card from '../components/Card';

const logementsList = require('../datas/logements.json');

function Home() {
  return (<>
    <div className='body-content'>
      <Header />
      <HomePicture />
      {logementsList.map((logement) => (
        <Card key={logement.id} title={logement.title} image={logement.cover} />
      ))}
    </div>
    <Footer />
  </>);
}

export default Home;