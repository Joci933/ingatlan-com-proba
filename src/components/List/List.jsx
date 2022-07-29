import React from 'react';
import { ListItem } from '../ListItem/ListItem';

export function List({adList, showDate}) {
    return (
        <>
        {
         adList.map((adData) => <ListItem showDate={showDate} key={adData.adId} {...adData}  />)
        }
        </>
    )
  }