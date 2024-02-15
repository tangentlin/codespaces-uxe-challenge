import memoize from 'micro-memoize';
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

  return {
    MainLayout,
    NavigationZone,
    ContentZone,
    MenuContainer
  };
});
