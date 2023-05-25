import About from './About/About';
import './App.css';
import PreviewRecipes from './PreviewRecipes/PreviewRecipes';
import Navigation from './header/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <About />
      <PreviewRecipes />
    </>
  );
}

export default App;
