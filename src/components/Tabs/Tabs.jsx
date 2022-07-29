import React, {useEffect, useState} from "react";
import _ from "lodash";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useRecoilValue } from "recoil";
import { orderBy, tabBarVisible, textState } from "../../recoil/state";
import { AttentionBlock } from "../AttentionBlock/AttentionBlock";
import { List } from "../List/List";
import { PageTitle } from "../PageTitle/PageTitle";
import Select from "../Select/Select";

const tabKeys = {
  list: "list",
  favourites: "favourites",
};

const selectOptions = [
  {
    value:'address',
    label:'Cím'
  },
  {
    value:'addedDate',
    label:'Dátum'
  },
]

export function Tabs({ adList }) {
  const favourite = useRecoilValue(textState);
  const tabBar = useRecoilValue(tabBarVisible);
  const order = useRecoilValue(orderBy);

  const [favouriteList, setFavouriteList] = useState([])
  
  const { list, favourites } = tabKeys;

  useEffect(() => {
    const result = adList.map((e) => {
      for(let element of favourite){
          if(e.adId === element.adId) Object.assign(e, element);
      }
      return e;
  });

    const orderList = _.orderBy(result, order, 'asc');

    setFavouriteList(orderList.filter(el => favourite.some(favouriteElement => favouriteElement.adId === el.adId)))
  }, [favourite, order])

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
                <Select options={selectOptions} label="Rendezés" />
                {   favouriteList.length > 0 ?
                  <List showDate adList={favouriteList} /> :
                  <AttentionBlock text="Még nem adott hozzá kedvenceket"/>
                  }
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}
