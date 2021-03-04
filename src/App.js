import Button from '@material-ui/core/Button';
import './App.css';
import React, { useEffect, useState } from 'react';
import Newscard from './component/Newscard/Newscard';
import axios from 'axios';


function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eaf2e9bffb1f444eaf9fbc80c2febea3'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))

  // }, [])

  //for axios
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eaf2e9bffb1f444eaf9fbc80c2febea3'
    axios(url)
    .then(data=> setArticles(data.data.articles))

  }, [])

  return (
    <div className="App">


      <h2>headlines : {articles.length}</h2>
      {
        articles.map(article => <Newscard article ={article}></Newscard>)

      }






    </div>
  );
}


export default App;
