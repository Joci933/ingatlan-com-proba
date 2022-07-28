import React from 'react';
import Container from 'react-bootstrap/Container';
import { useRecoilState } from 'recoil';
import { tabBarVisible } from "../../recoil/state";


export function Header() {
  const [tabBar, setTabBar] = useRecoilState(tabBarVisible);

    const handleClick = () => {
      setTabBar(prevstate => !prevstate)
    }

    return  (
    <header>
      <Container>
      <button className="toggleTabbar" onClick={handleClick}>
      </button>
      </Container>
    </header>
    )
  }