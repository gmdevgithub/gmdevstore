import React, { useState } from 'react';
import { Drawer, Button, Card, Switch, Space } from 'antd';
import {store, useGlobalState} from 'state-pool';
import 'antd/dist/antd.css';
import '../../choice.css';



const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [lightTheme, setLightTheme] = useState("false");

  function onChange(checked) {
    setLightTheme(true);
  }
    
  return (
    <>
      <Button type="primary" onClick={showDrawer} size="small" >
        Options 👈
      </Button>
      <Drawer title="Options" placement="left" onClose={onClose} visible={visible} >
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <div className="site-card-border-less-wrapper">
          <Card size="small" hoverable title="Back to regular/vanilla version!" bordered={true} style={{ width: 300 }}>
            <a href="/">
              <Button type="primary">
                Go 
              </Button> 
            </a>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card size="small" hoverable title="Light Theme " bordered={true} style={{ width: 200 }}>
            <Switch defaultChecked onChange={onChange} />
          </Card>
        </div>
        </Space>
      </Drawer>
    </>
  );
};
export default DrawerMenu;

