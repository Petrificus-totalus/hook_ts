import React, { FC } from "react";
import { Layout } from "antd";

import "antd/dist/reset.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import IndexPage from "./views/IndexPage";
import BookPage from "./views/BookPage";
import UserPage from "./views/UserPage";
import Login from "./views/Login";
import BookDetail from "./views/BookDetail";
import GoodsPage from "./views/GoodsPage";
import GoodsList from "./views/GoodsList";
import GoodsSale from "./views/GoodsSale";
const { Footer, Content } = Layout;
const App: FC = () => (
  <div className="App">
    <Layout>
      <PageHeader />
      <Content style={{ height: "80vh" }}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/bookdetail/:id" element={<BookDetail />}></Route>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/book" element={<BookPage />}></Route>
          <Route path="/goods" element={<GoodsPage />}>
            <Route path="" element={<GoodsList />} />
            <Route path="/goods/sale" element={<GoodsSale />} />
          </Route>

          <Route path="/user" element={<UserPage />}></Route>
          <Route
            path="/"
            element={<Navigate to="/index" replace={true} />}
          ></Route>
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
