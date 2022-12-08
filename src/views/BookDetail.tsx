import React, { FC, useState, useEffect } from "react";
import { Card, Col, Row, Space } from "antd";
import { useParams } from "react-router-dom";

import { BookType } from "../components/BookInfo";
import { bookList } from "./BookPage";
const BookDetail: FC = () => {
  const { id } = useParams();
  const [oneBook, setOneBook] = useState({
    id: 0,
    name: "",
    price: 0,
    pic: "",
    desc: "",
  });
  useEffect(() => {
    const one: BookType = bookList.filter(
      (item: any) => item.id === Number(id)
    )[0];
    setOneBook(one);
  }, [id]);
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card title="图书详情">
          <Row>
            <Col span={8}>
              <div>图片预览:</div>
              <div>
                <img src={oneBook.pic} alt="" />
              </div>
            </Col>
            <Col span={16}>
              <div>图片详情:</div>
              <div>
                <Space>
                  <span>图书编号:</span>
                  <span>{oneBook.id}</span>
                </Space>
              </div>
              <div>
                <Space>
                  <span>图书名称:</span>
                  <span>{oneBook.name}</span>
                </Space>
              </div>
              <div>
                <Space>
                  <span>图书价格:</span>
                  <span>{oneBook.price}</span>
                </Space>
              </div>
              <div>
                <Space>
                  <span>图书介绍:</span>
                  <span>{oneBook.desc}</span>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default BookDetail;
