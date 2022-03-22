import Header from './Header/Header.jsx';
import PreHeader from './PreHeader/PreHeader';
import OfferList from './OfferLIst/OfferList.jsx';
import Recomended from './Recomended/Recomended';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import Form from './Form/Form.jsx';
export const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1439px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 1439px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <>
      {matches && <PreHeader></PreHeader>}

      <Header></Header>
      {!matches && <Form></Form>}
      <OfferList></OfferList>
      <Recomended matches={matches}></Recomended>
      <Footer matches={matches}></Footer>
    </>
  );
};
