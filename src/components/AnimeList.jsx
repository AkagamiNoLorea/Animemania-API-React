import React, { useState, useEffect } from 'react';
import './AnimeList.css'

function AnimeList() {
    const [animeList, setAnimeList] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0ttps://kitsu.io/api/edge/anime')
            .then(response => response.json())
            .then(data => setAnimeList(data.data))
            .catch(error => console.log(error));
    }, []);

    const openPopup = (anime) => {
        setSelectedAnime(anime);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedAnime(null);
        setShowPopup(false);
    };

    return (
        <div className='anime-list'>
            {animeList.map(anime => (
                <div key={anime.id} className='card'>
                    <button onClick={() => openPopup(anime)} className='wrapper'>
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                    </button>
                    <h2>{anime.attributes.titles.en}</h2>
                    <p>{anime.attributes.averageRating}/100</p>

                </div>
            ))}

            {showPopup && selectedAnime && (
                <div className="popup">
                    {selectedAnime.attributes.coverImage && (
                        <img src={selectedAnime.attributes.coverImage.small} alt={selectedAnime.attributes.canonicalTitle} />
                    )}
                    <h2>{selectedAnime.attributes.titles.en}</h2>
                    <h3>{selectedAnime.attributes.titles.ja_jp}</h3>
                    <p>{selectedAnime.attributes.synopsis}</p>
                    <button onClick={closePopup} className='close-button'>Cerrar</button>
                </div>
            )}
        </div>
    );
}

export default AnimeList;