import './App.css';
import { ThemeProvider } from './styled';

function App() {
  return (
    <ThemeProvider mode="dark">
      <div className="App">
        <header className="App-header">
          <img src="woofer.svg" className="App-logo" alt="logo" />
          <p>Woofer</p>
          <p className="small">An Innovation & Technology team challenge</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
