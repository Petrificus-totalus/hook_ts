import React, { FC, useState, useRef } from "react";
import { Card, Row, Col } from "antd";
import useMouse from "../hooks/useMouse";
import { useLocation } from "react-router-dom";

const IndexPage: FC = () => {
  const [like, setLike] = useState(0);
  const points = useMouse();

  const name = useRef<any>();
  const password = useRef<any>();
  const [rnd, setRnd] = useState(0);
  const t = useRef<any>(); // 暂时保存一个值

  const loc = useLocation();
  // console.log(loc);

  const start = () => {
    t.current = setInterval(() => {
      setRnd(Math.floor(Math.random() * 100));
    }, 50);
  };
  const stop = () => {
    clearInterval(t.current);
  };

  return (
    <Row>
      <Col span={20} offset={2}>
        <Card title="useState" extra={<span>{loc.state.username}</span>}>
          <div>
            <button onClick={() => setLike(like + 1)}>like:{like}</button>
          </div>
        </Card>
        <Card title="useEffect">
          <div>
            <h3>
              x:{points.x},y:{points.y}
            </h3>
          </div>
        </Card>
        <Card title="useRef的随机">
          <div>
            <input type="text" ref={name} />
            <input type="text" ref={password} />
            <input
              type="button"
              onClick={() => {
                console.log(name.current.value, password.current.value);
              }}
              value="login"
            />
            <br />
            {rnd}
            <input type="button" onClick={start} value="start" />
            <input type="button" onClick={stop} value="stop" />
          </div>
        </Card>
      </Col>
    </Row>
  );
};
export default IndexPage;
