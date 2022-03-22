import {
  SeectionRecomended,
  RecomendedContainer,
  RecomendedTitle,
  RecomendedList,
} from './RecomendedStyledComponents';
import RecomendedMarkupDesktope from './RecomendedMarkupDesktope';
import RecomendedMarkupMobile from './RecomendedMarkupMobile';
const Recomended = ({ matches }) => {
  return (
    <SeectionRecomended>
      <RecomendedContainer>
        <RecomendedTitle>Рекомендации для вас</RecomendedTitle>
        <RecomendedList>
          {matches && <RecomendedMarkupMobile></RecomendedMarkupMobile>}
          {!matches && <RecomendedMarkupDesktope></RecomendedMarkupDesktope>}
        </RecomendedList>
      </RecomendedContainer>
    </SeectionRecomended>
  );
};

export default Recomended;
