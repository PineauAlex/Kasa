import TopPicture from '../components/TopPicture';
import HomeBody from '../components/HomeBody';

import homePicture from '../assets/homePicture.jpg';

function Home() {
  return (<>
    <TopPicture text="Chez vous, partout et ailleurs" image={homePicture} />
    <HomeBody />
  </>);
}

export default Home;