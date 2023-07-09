import React from 'react';
import AnimeList from '../components/AnimeList.jsx'
import MangaList from '../components/MangaList.jsx';
import Navbar from '../components/atomos/navbar.jsx';
import Footer from '../components/atomos/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <AnimeList />
      <hr></hr>
      <MangaList />
      <Footer />
    </>
  );
}

export default App;