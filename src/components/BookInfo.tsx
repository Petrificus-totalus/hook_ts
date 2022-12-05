import React, { FC } from "react";
import { Card, Col, Space } from "antd";

const { Meta } = Card;

interface BookType {
  id: number;
  name: string;
  price: number;
  pic: string;
  desc: string;
}
const BookInfo: FC<BookType> = ({ id, name, price, pic, desc }) => {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={pic} />}
      >
        <Meta
          title={
            <div>
              <Space>
                <span>{name}</span>
                <span>¥{price}</span>
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
