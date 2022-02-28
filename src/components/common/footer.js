import React from "react";

import { BackTop } from 'antd';

const items = [
  {
    key: "1",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    key: "2",
    link: "https://www.twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    key: "3",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
  },
  {
    key: "4",
    link: "https://www.pinterest.com/",
    icon: "fab fa-pinterest-p",
  },
  {
    key: "5",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
];

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="https://www.google.com.br">Tech</a>
        </div>
        <ul className="socials">
          {items.map((item) => {
            return (
              <li key={item.key}>
                <a href={item.link}>
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="copyrigth">Copyright © 2020 Tech</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
