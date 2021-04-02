import Home from './pages/Home';

import stylesGlobal from './styles/global';

function App(): JSX.Element {
  stylesGlobal();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
