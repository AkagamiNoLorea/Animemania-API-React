import React from 'react';
import AnimeList from '../components/AnimeList.jsx'
import MangaList from '../components/MangaList.jsx';
import Navbar from '../components/atomos/navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <AnimeList />
      <MangaList />
    </>
  );
}

export default App;