import React from 'react'

function Sidebar({ topAnime }) {
	const firstFiveAnime = topAnime.slice(0, 5);
	const secondFiveAnime = topAnime.slice(5, 10);
  
	return (
	  <aside>
		<nav>
		  <h3>Top Anime</h3>
		  <div className="table-wrapper">
			<table>
			  <thead>
				<tr>
				  <th>Title</th>
				  <th>Score</th>
				</tr>
			  </thead>
			  <tbody>
				{firstFiveAnime.map((anime) => (
				  <tr key={anime.mal_id}>
					<td>
					  <a href={anime.url} target="_blank" rel="noreferrer">
						{anime.title}
					  </a>
					</td>
					<td>{anime.score}</td>
				  </tr>
				))}
			  </tbody>
			</table>
			<table>
			  <thead>
				<tr>
				  <th>Title</th>
				  <th>Score</th>
				</tr>
			  </thead>
			  <tbody>
				{secondFiveAnime.map((anime) => (
				  <tr key={anime.mal_id}>
					<td>
					  <a href={anime.url} target="_blank" rel="noreferrer">
						{anime.title}
					  </a>
					</td>
					<td>{anime.score}</td>
				  </tr>
				))}
			  </tbody>
			</table>
		  </div>
		</nav>
	  </aside>
	);
  }
  
  
  
  
export default Sidebar