import React, { useState, useEffect } from 'react';
import './AnimeList.css'
import { Icon } from '@iconify/react';

function MangaList() {
    const [mangaList, setMangaList] = useState([]);
    const [selectedManga, setSelectedManga] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        fetch('https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0ttps://kitsu.io/api/edge/manga')
            .then(response2 => response2.json())
            .then(data => setMangaList(data.data))
            .catch(error => console.log(error));
    }, []);

    const openPopup = (manga) => {
        setSelectedManga(manga);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedManga(null);
        setShowPopup(false);
    };

    return (
        <>
    <section className='section-manga'>
        <h2>Sección Manga</h2>
        <div className='manga-list'>
            {mangaList.map(manga => (
                <div key={manga.id} className='card'>
                    <button onClick={() => openPopup(manga)}>
                        <img src={manga.attributes.posterImage.small} alt={manga.attributes.canonicalTitle} />
                    </button>
                    <h2>{manga.attributes.canonicalTitle}</h2>
                    <p>Puntuación: {manga.attributes.averageRating}/100 <Icon icon="material-symbols:star" color="#ffaf69" width="25" height="25" /></p>
                </div>
            ))}
            {showPopup && selectedManga && (
                < div className = 'popup'>    
            {selectedManga.attributes.coverImage && (
                <img src={selectedManga.attributes.coverImage.small} alt={selectedManga.attributes.canonicalTitle} />
            )}
            <h2>{selectedManga.attributes.canonicalTitle}</h2>
            <h3>{selectedManga.attributes.titles.ja_jp}</h3>
            <p className='synopsis'>{selectedManga.attributes.synopsis}</p>
            <button onClick={closePopup} className='close-button'>Cerrar</button>
        </div>
    )
}
        </div >
        </section></>
    );
}

export default MangaList;