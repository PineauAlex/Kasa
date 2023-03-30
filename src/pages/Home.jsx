import Header from '../components/Header';
import Footer from '../components/Footer';

import HomePicture from '../components/HomePicture';
import Card from '../components/Card';

function Home() {
  return (<>
    <div className='body-content'>
      <Header />
      <HomePicture />
      <Card />
    </div>
    <Footer />
  </>);
}

export default Home;