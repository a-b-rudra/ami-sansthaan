import React from 'react';
import {articlePage} from '../components/layout/ImageData.js';
import FadeCarousel from "../components/layout/FadeCarousel";


function Articles() {
  return(
    <div style={{padding: "3%"}}>
          <FadeCarousel data={articlePage}/>
    </div>
  );
}

export default Articles;