import React from "react";

const List = ({elements, key, field}) => {
  return (
    <ul>
      {
        elements.map(child => (
            <li key={child.slug}>{child.name}</li>
          )
        )
      }
    </ul>
  )
};

export default List;
