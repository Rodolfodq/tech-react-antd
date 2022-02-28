import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

const item = [
  {
    key: "1",
    link: "#home",
    title: "Home",
  },
  {
    key: "2",
    link: "#about",
    title: "About",
  },
  {
    key: "3",
    link: "#features",
    title: "Features",
  },
  {
    key: "4",
    link: "#works",
    title: "How it works",
  },
  {
    key: "5",
    link: "#faq",
    title: "FAQ",
  },
  {
    key: "6",
    link: "#pricing",
    title: "Pricing",
  },
  {
    key: "7",
    link: "#contact",
    title: "Contact",
  },
];

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="www.google.com">Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            {item.map((item) => {
              return (
                <Link key={item.key} href={item.link} title={item.title} />
              );
            })}
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Anchor targetOffset="65">
              {item.map((item) => {
                return (
                  <Link key={item.key} href={item.link} title={item.title} />
                );
              })}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
