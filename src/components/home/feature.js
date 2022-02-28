import React from "react";
import { Row, Col, Card } from "antd";

import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

const { Meta } = Card;

const items = [
  {
    key: "1",
    image: image1,
    title: "Modern Design",
  },
  {
    key: "2",
    image: image2,
    title: "Clean and Elegant",
  },
  {
    key: "3",
    image: image3,
    title: "Great Support",
  },
  {
    key: "4",
    image: image4,
    title: "Easy to customise",
  },
  {
    key: "5",
    image: image5,
    title: "Unlimited Features",
  },
  {
    key: "6",
    image: image6,
    title: "Advanced Options",
  },
];

function AppFeature() {
  return (
    <div id="features" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={item.key}>
                <Card
                  hoverable
                  cover={<img alt={item.title} src={item.image} />}
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
