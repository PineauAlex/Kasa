import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import HomePicture from '../components/HomePicture';
import HomeBody from '../components/HomeBody';

function Home() {
  return (<>
    <BodyContent>
      <Header />
      <HomePicture />
      <HomeBody />
    </BodyContent>
    <Footer />
  </>);
}

export default Home;