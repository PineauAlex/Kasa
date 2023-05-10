import TopPicture from '../components/TopPicture';
import AboutBody from '../components/AboutBody';

import aboutPicture from '../assets/aboutPicture.jpg';

function About() {
  return (<>
    <TopPicture text="" image={aboutPicture} />
    <AboutBody />
  </>);
}

export default About;