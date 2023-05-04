import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import AboutPicture from '../components/AboutPicture';
import Dropdown from '../components/Dropdown';

const aboutList = require('../datas/about.json');

function About() {
  return (<>
    <BodyContent>
      <Header />
      <AboutPicture />
      {aboutList.map((aboutCat) => (
        <Dropdown key={aboutCat.id} title={aboutCat.title} text={aboutCat.text} />
      ))}
    </BodyContent>
    <Footer />
  </>);
}

export default About;