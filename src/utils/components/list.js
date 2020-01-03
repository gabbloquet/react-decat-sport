import React from "react";

const List = ({elements, key, field}) => {
  return (
    <ul>
      {
        elements.map(child => (
            <li key={child[key]}>{child[field]}</li>
          )
        )
      }
    </ul>
  )
};

export default List;
