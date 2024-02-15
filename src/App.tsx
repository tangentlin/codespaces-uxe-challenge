import { useCallback, useState } from 'react';
import { createAppStyle } from './App.style';
import { BreedMenuLoader } from './components/feature/breedMenu/BreedMenuLoader';
import { Navigation } from './components/feature/navigation/Navigation';
import { useTheme } from './styled';
import { DogBreedTreeItem } from './utils/dogApiUtil';

function App() {
  const { theme } = useTheme();
  const { MainLayout, ContentZone, MenuContainer, NavigationZone, StyledBreedGallery } = createAppStyle(theme);
  const [selectedBreed, setSelectedBreed] = useState<DogBreedTreeItem | undefined>(undefined);

  const menu_onSelect = useCallback((data: DogBreedTreeItem) => {
    setSelectedBreed(data);
  }, []);

  const gallery_onSelect = useCallback((data: DogBreedTreeItem) => {
    setSelectedBreed(data);
  }, []);

  return (
    <MainLayout>
      <NavigationZone>
        <Navigation>
          <MenuContainer>
            <BreedMenuLoader selectedId={selectedBreed?.id} onSelect={menu_onSelect} />
          </MenuContainer>
        </Navigation>
      </NavigationZone>
      <ContentZone>
        <StyledBreedGallery breed={selectedBreed} onSelect={gallery_onSelect} />
      </ContentZone>
    </MainLayout>
  );
}

export default App;
