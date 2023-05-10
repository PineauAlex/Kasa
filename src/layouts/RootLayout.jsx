import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (<>
    <BodyContent>
      <Header />
      <Outlet />
    </BodyContent>
    <Footer />
  </>);
}

export default RootLayout;