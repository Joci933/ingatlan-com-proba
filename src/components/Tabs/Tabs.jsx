import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { List } from '../List/List';

const tabKeys = {
    list: 'list',
    favourites: 'favourites'
}

export function Tabs({adList}) {
    
    const { list, favourites } = tabKeys;

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={list}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey={list} href="#">
                    Lista
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={favourites} href="#">
                    Kedvencek
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey={list}>
                    <List adList={adList}/>
                </Tab.Pane>
                <Tab.Pane eventKey={favourites}>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
  }