import React, { useEffect, useState  } from 'react';
import { Tabs } from "../../components/Tabs/Tabs";

export function Home() {
  
  const [adList, setAdList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const fetchListingData = async () => {
      let listingData = await fetch(process.env.REACT_APP_LISTING_API);
      listingData = await listingData.json()
      setAdList(listingData)
      setIsLoaded(true)
    }

   fetchListingData()
  }, []);

    return (
      <>
        { isLoaded ?
          <Tabs adList={adList.ads}/>
         : null
        }
      </>
      );
  }