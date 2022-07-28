import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { getFavourites } from "../../utils/helpers";
import { List } from "../List/List";
import { PageTitle } from "../PageTitle/PageTitle";

const tabKeys = {
  list: "list",
  favourites: "favourites",
};

export function Tabs({ adList }) {
  const [favouriteList, setFavouriteList] = useState([])
  const { list, favourites } = tabKeys;

  useEffect(() => {
    console.log('asd')
  })

  const getFavouriteList = () => {
    const fav = getFavourites();
    setFavouriteList(adList.filter(el => fav.indexOf(el.adId) > -1))
  }


  return (
      <Tab.Container id="left-tabs-example" defaultActiveKey={list}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="navtabs flex-column">
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
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey={list}>
                <PageTitle title="Lista" number={adList.length}/>
                <List adList={adList} />
              </Tab.Pane>
              <Tab.Pane eventKey={favourites}>
                <PageTitle title="Kedvencek" number={adList.length}/>
                <List adList={favouriteList} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}
