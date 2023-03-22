import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    // {
    //   id: "u1",
    //   name: "Diante Dowdell",
    //   image:
    //     "https://goodsmileshop.com/medias/sys_master/images/images/h38/hd0/9373578788894.jpg",
    //   places: 3,
    // },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
