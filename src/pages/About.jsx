import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutPicture from '../components/AboutPicture';
import Dropdown from '../components/Dropdown';

const aboutList = require('../datas/about.json');

function About() {
  return (<>
    <div className='body-content'>
      <Header />
      <AboutPicture />
      {aboutList.map((aboutCat) => (
        <Dropdown key={aboutCat.id} title={aboutCat.title} text={aboutCat.text} />
      ))}
    </div>
    <Footer />
  </>);
}

export default About;