import React, { FC } from "react";

import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import BookInfo from "../components/BookInfo";

export const bookList = [
  {
    id: 1,
    name: "book1",
    price: 200,
    pic: require("../assets/shops/book1.png"),
    desc: "book1",
  },
  {
    id: 2,
    name: "book2",
    price: 2200,
    pic: require("../assets/shops/book1.png"),
    desc: "book2",
  },
  {
    id: 3,
    name: "book3",
    price: 100,
    pic: require("../assets/shops/book1.png"),
    desc: "book3",
  },
  {
    id: 4,
    name: "book4",
    price: 230,
    pic: require("../assets/shops/book1.png"),
    desc: "book4",
  },
  {
    id: 5,
    name: "book5",
    price: 70,
    pic: require("../assets/shops/book1.png"),
    desc: "book5",
  },
];
const BookPage: FC = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card title="图书列表" extra={<Link to="/">首页</Link>}>
          <Row>
            {bookList.map((item) => (
              <BookInfo {...item} key={item.id} />
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default BookPage;
