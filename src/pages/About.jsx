import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import TopPicture from '../components/TopPicture';
import AboutBody from '../components/AboutBody';

import aboutPicture from '../assets/aboutPicture.jpg';

function About() {
  return (<>
    <BodyContent>
      <Header />
      <TopPicture text="" image={aboutPicture} />
      <AboutBody />
    </BodyContent>
    <Footer />
  </>);
}

export default About;