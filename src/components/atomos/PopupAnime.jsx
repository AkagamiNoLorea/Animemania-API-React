
function PopupAnime({ anime, onClose }) {
    
  return (
    <div className="popup">
      {selectedAnime.attributes.coverImage && (
                    <img src={selectedAnime.attributes.coverImage.small} alt={selectedAnime.attributes.canonicalTitle} />
                )}
                <h2>{selectedAnime.attributes.titles.en}</h2>
                <h3>{selectedAnime.attributes.titles.ja_jp}</h3>
                <p className='synopsis'>{selectedAnime.attributes.synopsis}</p>
                <button onClick={onClose} className='close-button'>Cerrar</button>
    </div>
  );
}
export default PopupAnime;
