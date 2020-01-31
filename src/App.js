import React from "react";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Layout from "./Layout";
import SimpleList from "./SimpleList";

import { PostList, PostEdit, PostCreate, PostShow } from "./posts";
import { PeopleList } from "./people";
import { StarshipList } from "./starship";
import Dashboard from "./Dashboard";

const rootAPI = "https://swapi.co/api/";
const jsonProvider = jsonServerProvider(rootAPI);
const dataProvider = {
  ...jsonProvider,
  getList: resource => {
    return fetch(`${rootAPI}${resource}`)
      .then(res => res.json())
      .then(res => {
        return {
          data: res.results.map(result => ({
            ...result,
            id: result.name
          })),
          total: res.count
        };
      });
  }
};

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} layout={Layout}>
    {/* <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    /> */}
    <Resource name="people" icon={UserIcon} list={PeopleList} />
    <Resource name="starships" icon={UserIcon} list={StarshipList} />
    {/* <Resource name="comments" list={ListGuesser} /> */}
  </Admin>
);
export default App;
