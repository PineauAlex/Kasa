import Header from '../components/Header';
import Footer from '../components/Footer';

import ErrorMessage from '../components/ErrorMessage';

function Error() {
  return (<>
    <div className='body-content'>
      <Header />
      <ErrorMessage />
    </div>
    <Footer />
  </>);
}

export default Error;