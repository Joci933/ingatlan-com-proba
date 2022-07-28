import React from 'react';
import { ListItem } from '../ListItem/ListItem';

export function List({adList}) {
    return (
        <>
        {
         adList.map((adData) => <ListItem key={adData.adId} {...adData}  />)
        }
        </>
    )
  }