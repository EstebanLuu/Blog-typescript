import React from "react";
import { Header } from "../../components/header";
import { Layout } from "./layout";
import { Footer } from "../../components/footer";

const index = () => {
  return (
    <div className="home">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default index;
