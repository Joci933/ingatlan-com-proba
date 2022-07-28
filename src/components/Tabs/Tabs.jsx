import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useRecoilState } from "recoil";
import { tabBarVisible, textState } from "../../recoil/state";
import { AttentionBlock } from "../AttentionBlock/AttentionBlock";
import { List } from "../List/List";
import { PageTitle } from "../PageTitle/PageTitle";

const tabKeys = {
  list: "list",
  favourites: "favourites",
};

export function Tabs({ adList }) {
  const [favourite, setFavourite] = useRecoilState(textState);
  const [tabBar, setTabBar] = useRecoilState(tabBarVisible);
  const [favouriteList, setFavouriteList] = useState([])
  const { list, favourites } = tabKeys;

  useEffect(() => {
    setFavouriteList(adList.filter(el => favourite.indexOf(el.adId) > -1))
  }, [favourite])

  return (
      <Tab.Container id="left-tabs-example" defaultActiveKey={list}>
        <Row>
          <Col md={3}>
            <Nav variant="pills" className={`
            navtabs flex-column
            ${tabBar ? 'navtabs-show': ''}
            `}>
              <Nav.Item>
                <Nav.Link eventKey={list} className="list" href="#">
                  Lista
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={favourites} className="favourites" href="#">
                  Kedvencek
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey={list}>
                <PageTitle title="Lista" number={adList.length}/>
                <List adList={adList} />
              </Tab.Pane>
              <Tab.Pane eventKey={favourites}>
                <PageTitle title="Kedvencek" number={favouriteList.length}/>
                {   favouriteList.length > 0 ?
                  <List adList={favouriteList} /> :
                  <AttentionBlock text="Még nem adott hozzá kedvenceket"/>
                  }
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}
