import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutPicture from '../components/AboutPicture';
import Dropdown from '../components/Dropdown';

function About() {
  return (<>
    <div className='body-content'>
      <Header />
      <AboutPicture />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
    <Footer />
  </>);
}

export default About;