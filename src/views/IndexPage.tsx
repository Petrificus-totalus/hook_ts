import React, { FC, useState } from "react";
import { Card, Row, Col } from "antd";
import useMouse from "../hooks/useMouse";

const IndexPage: FC = () => {
  const [like, setLike] = useState(0);
  const points = useMouse();

  return (
    <Row>
      <Col span={20} offset={2}>
        <Card title="useState">
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
      </Col>
    </Row>
  );
};
export default IndexPage;
