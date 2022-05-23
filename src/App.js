import React from 'react';
import { AddForm, Header } from './components';
import { Main } from './pages';

const App = () => {
  return (
    <div>
      <Header />
      <AddForm />
      <Main />
    </div>
  );
};

export default App;