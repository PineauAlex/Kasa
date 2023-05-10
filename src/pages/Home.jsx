import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import TopPicture from '../components/TopPicture';
import HomeBody from '../components/HomeBody';

import homePicture from '../assets/homePicture.jpg';

function Home() {
  return (<>
    <BodyContent>
      <Header />
      <TopPicture text="Chez vous, partout et ailleurs" image={homePicture} />
      <HomeBody />
    </BodyContent>
    <Footer />
  </>);
}

export default Home;