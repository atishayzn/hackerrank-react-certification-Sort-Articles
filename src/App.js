import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";


function App({articles}) {
    articles.sort((a,b)=>b.upvotes-a.upvotes)
    const [articlesList, setArticlesList] = useState(articles);
    

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => setArticlesList(articles.slice().sort((a,b)=>b.upvotes-a.upvotes))}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => setArticlesList(articles.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)))}>Most Recent</button>
            </div>
            <Articles articles={articlesList}/>
        </div>
    );

}

export default App;
