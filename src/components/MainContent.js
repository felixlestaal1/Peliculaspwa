import React from 'react';
import AnimeCard from './AnimeCard';

function MainContent(props) {
  const AnimeList = ({ animelist, setAnimeInfo, animeComponent, handleList }) => {
    const AddToList = animeComponent;
    return (
      <>
        {animelist ? (
          animelist.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={() => setAnimeInfo(anime)}>
                <img src={anime.coverImage.extraLarge} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title.romaji}</h4>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    <h4>{anime.title.native}</h4>
                    <h3>SYNOPSIS</h3>
                    <div className="synopsis">
                      <p>{anime.description}</p>
                    </div>
                    <AddToList />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Not Found</div>
        )}
      </>
    );
  };

  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        <AnimeList
          animelist={props.animeList}
          setAnimeInfo={props.setAnimeInfo}
          animeComponent={AnimeCard}
          handleList={props.handleList}
        />
      </div>
    </main>
  );
}

export default MainContent;
