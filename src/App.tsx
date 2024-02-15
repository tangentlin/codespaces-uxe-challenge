import { createAppStyle } from './App.style';
import { BreedListLoader } from './components/breedList/BreedListLoader';
import { Navigation } from './components/navigation/Navigation';
import { useTheme } from './styled';

function App() {
  const { theme } = useTheme();
  const { MainLayout, ContentZone, MenuContainer, NavigationZone } = createAppStyle(theme);
  return (
    <MainLayout>
      <NavigationZone>
        <Navigation>
          <MenuContainer>
            <BreedListLoader />
          </MenuContainer>
        </Navigation>
      </NavigationZone>
    </MainLayout>
  );
}

export default App;
