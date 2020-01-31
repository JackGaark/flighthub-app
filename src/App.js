import React from "react";
import UserIcon from "@material-ui/icons/Group";
import { Admin, Resource } from "react-admin";
import Layout from "./Layout";
import { stringify } from "query-string";

import { PeopleList } from "./people";
import { StarshipList } from "./starship";

const rootAPI = "https://swapi.co/api/";
const dataProvider = {
  getList: (resource, params) => {
    let url = `${rootAPI}${resource}?`;

    if (params.pagination) {
      url += stringify({ page: params.pagination.page });
    }

    if (params.filter) {
      url += `&` + stringify({ search: params.filter.q });
    }

    return fetch(url)
      .then(res => res.json())
      .then(res => {
        return {
          data: res.results
            ? res.results.map(result => ({
                ...result,
                id: result.name
              }))
            : [],
          total: res.count ? res.count : 0
        };
      });
  }
};

const App = () => (
  <Admin title="My data" dataProvider={dataProvider} layout={Layout}>
    <Resource name="people" icon={UserIcon} list={PeopleList} />
    <Resource name="starships" icon={UserIcon} list={StarshipList} />
  </Admin>
);
export default App;
