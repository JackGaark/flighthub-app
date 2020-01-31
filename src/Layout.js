import React from "react";
import { Layout } from "react-admin";
import AppBar from "./AppBar";

export default function MyLayout(props) {
  return <Layout {...props} appBar={AppBar} />;
}
