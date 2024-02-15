import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { ThemeProvider } from './styled';

function App() {
  return (
    <ThemeProvider mode="light">
      {/* <div className="App">
        <header className="App-header">
          <img src="woofer.svg" className="App-logo" alt="logo" />
          <p>Woofer</p>
          <p className="small">An Innovation & Technology team challenge</p>
        </header>
      </div> */}
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
