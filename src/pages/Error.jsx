import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';

import ErrorMessage from '../components/ErrorMessage';

function Error() {
  return (<>
    <BodyContent>
      <Header />
      <ErrorMessage />
    </BodyContent>
    <Footer />
  </>);
}

export default Error;