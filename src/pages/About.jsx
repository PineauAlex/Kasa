import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import AboutPicture from '../components/AboutPicture';
import AboutBody from '../components/AboutBody';

function About() {
  return (<>
    <BodyContent>
      <Header />
      <AboutPicture />
      <AboutBody />
    </BodyContent>
    <Footer />
  </>);
}

export default About;