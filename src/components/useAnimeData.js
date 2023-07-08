import { useState, useEffect } from 'react';

function useAnimeData(link) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(data => setAnimeList(data.data))
      .catch(error => console.log(error));
  }, [link]);

  return animeList;
}

export default useAnimeData;