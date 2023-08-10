import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <BrowserRouter basename='/poc-react'>
      <Routes>
        <Route path='/' element={ <NxWelcome title="react" /> } />
        <Route path='/child' element={ <NxWelcome title="child" /> } />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
