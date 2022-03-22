import Header from './Header/Header.jsx';
import PreHeader from './PreHeader/PreHeader';
import OfferList from './OfferLIst/OfferList.jsx';
import Recomended from './Recomended/Recomended';
export const App = () => {
  return (
    <>
      <PreHeader></PreHeader>
      <Header></Header>
      <OfferList></OfferList>
      <Recomended></Recomended>
    </>
  );
};
