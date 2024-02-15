import memoize from 'micro-memoize';
import { BreedGallery } from './components/feature/breedGallery/BreedGallery';
import { Theme, styled } from './styled';

export const createAppStyle = memoize((theme: Theme) => {
  const MainLayout = styled('div')`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: stretch;
  `;

  const NavigationZone = styled('div')`
    box-sizing: border-box;
    width: 290px;
    height: 100%;
    border-right: 1px solid ${theme.palette.divider};
    flex-grow: 0;
    flex-shrink: 0;
  `;

  const MenuContainer = styled('div')`
    width: 245px;
    height: 100%;
    margin-left: 23px;
  `;

  const ContentZone = styled('div')`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-x: hidden;
    overflow-y: auto;
  `;

  // TODO: The layout is not pixel-perfect with Figma, which has vertical of 27px and horizontal of 48px margin
  const StyledBreedGallery = styled(BreedGallery)`
    margin: ${theme.spacing.custom(2.5)} ${theme.spacing.custom(4.5)};
  `;

  return {
    MainLayout,
    NavigationZone,
    ContentZone,
    MenuContainer,
    StyledBreedGallery
  };
});
