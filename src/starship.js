import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const StarshipList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="model" />
      <TextField source="manufacturer" />
      <TextField source="cost_in_credits" />
    </Datagrid>
  </List>
);
