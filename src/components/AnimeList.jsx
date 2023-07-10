import React, { useState, useEffect } from 'react';
import './AnimeList.css'
import { Icon } from '@iconify/react';
/* import PopupAnime from './atomos/PopupAnime.jsx'; */

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
    <div>
    <section className='section-anime'>
        <h2>Sección Anime</h2>
        <div className='anime-list'>
            
            {animeList.map(anime => (
                <div key={anime.id} className='card'>
                    <button onClick={() => openPopup(anime)}>
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                    </button>
                    <h2>{anime.attributes.canonicalTitle}</h2>
                    <p>Puntuación: {anime.attributes.averageRating} <Icon icon="material-symbols:star" color="#ffaf69" width="25" height="25" /></p>
                </div>
            ))}
            {showPopup && selectedAnime && (
               /*  {<PopupAnime anime={selectedAnime} onClose={closePopup} /> } */
            < div className = 'popup'>    
                {selectedAnime.attributes.coverImage && (
                    <img src={selectedAnime.attributes.coverImage.small} alt={selectedAnime.attributes.canonicalTitle} />
                )}
                <h2>{selectedAnime.attributes.titles.en}</h2>
                <h3>{selectedAnime.attributes.titles.ja_jp}</h3>
                <p className='synopsis'>{selectedAnime.attributes.synopsis}</p>
                <button onClick={closePopup} className='close-button'>Cerrar</button>
            </div>)}
        </div >
    </section>
    </div>
    );
}
export default AnimeList;