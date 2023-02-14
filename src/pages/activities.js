import React from 'react';
import { listPage } from '../components/layout/ImageData';
import ActivityList from '../components/layout/ActivityList';

export const Activities = () => (
  //<div style={{backgroundColor: "#e8cfa2"}}>
    <div style={{margin: "5% 7%"}}>
      <ActivityList data={listPage}/>
    </div>
  //</div>
)