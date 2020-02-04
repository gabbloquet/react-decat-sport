function sportMapper(data) {
  if(data.length > 0) {
    return data
      .map((line) => (
          {
            id: line.id,
            name: line.attributes.name,
            description: line.attributes.description,
            icon: line.attributes.icon,
            children: line.relationships.children,
            related: line.relationships.related
          }
        )
      );
  }
}

export default sportMapper;
