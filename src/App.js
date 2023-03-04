import PageWrapper from './PageWrapper';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


function App() {
  
  const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?sort=popularity&limit=20`)
        .then(res => res.json());

    SetTopAnime(temp.data);
}
  
  const HandleSearch = e => {
		e.preventDefault();
    FetchAnime(search);

	}
  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());
  
    const animeList = temp.results.map(anime => ({
      ...anime,
      image_url: anime.image_url.replace(/^(https?:)?\/\/(.+)$/, 'https://$2')
    }));
  
    SetAnimeList(animeList);
  }
  

  
  useEffect(() => {
		GetTopAnime();
	}, []);
 
  return(
  <PageWrapper>
         <div className='content-wrap'>
          <Sidebar 
          topAnime={topAnime}/>
          <MainContent
          HandleSearch={HandleSearch}
          search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
            
            </div>
         

  </PageWrapper>
  );
    
  }
  
 

export default App;
