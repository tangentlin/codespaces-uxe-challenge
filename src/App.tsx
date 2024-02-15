import './App.css';
import { Tree } from './components/tree/Tree';
import { ThemeProvider } from './styled';

function App() {
  return (
    <ThemeProvider mode="dark">
      <Tree items={[]} isLoading={true} />;
    </ThemeProvider>
  );
}

export default App;
