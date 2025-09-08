import { useState } from 'react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import "./styles/main.scss"

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {showHome ? <Home /> : <Landing onFinish={() => setShowHome(true)} />}
    </>
  );
}

export default App;
