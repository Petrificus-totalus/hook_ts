import React, { FC, useContext } from "react";
import { Card, Col, Space } from "antd";
import { appContext } from "../index";
import { Link } from "react-router-dom";
const { Meta } = Card;

export interface BookType {
  id: number;
  name: string;
  price: number;
  pic: string;
  desc: string;
}
const BookInfo: FC<BookType> = ({ id, name, price, pic, desc }) => {
  const value = useContext(appContext);
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240, textAlign: "center" }}
        cover={
          <Link to={`/bookdetail/${id}`}>
            <img
              alt="example"
              src={pic}
              style={{ width: "75%", margin: "auto", paddingTop: "20px" }}
            />
          </Link>
        }
      >
        <Meta
          title={
            <div>
              <Space>
                <span>{name}</span>
                <span>¥{price}</span>
                <span>{value.username}</span>
              </Space>
            </div>
          }
          description={desc}
        />
      </Card>
    </Col>
  );
};
export default BookInfo;
