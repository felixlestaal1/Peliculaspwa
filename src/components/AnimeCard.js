import React from 'react';

function AnimeCard({ anime }) {
  const imageUrl = anime.coverImage?.extraLarge || anime.coverImage?.large || anime.coverImage?.medium || '';
  return (
    <article className="anime-card">
      <a href={anime.siteUrl} target="_blank" rel="noreferrer">
        <figure>
          <img src={imageUrl} alt={anime.title.romaji} />
        </figure>
        <h3>{anime.title.romaji}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;

