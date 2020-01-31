import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import PostFilter from "./PostFilter";

export const PeopleList = props => (
  <List filters={<PostFilter />} exporter={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mass" />
      <TextField source="skin_color" />
      <TextField source="eye_color" />
      <TextField source="birth_year" />
      <TextField source="gender" />
    </Datagrid>
  </List>
);
