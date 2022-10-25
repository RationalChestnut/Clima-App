import React from "react";

import { ActivityContainer, ArticlesContainer, Separator } from "./Learn.styled";
import Article from "../../components/Article/Article";

function Learn({ articlesList }) {
  const article = ({ item }) => (
    <Article title={item.title} image={item.image} link={item.link} type={item.type} />
  );
  return (
    <ActivityContainer>
      <ArticlesContainer
        data={articlesList}
        renderItem={article}
        keyExtractor={(item) => item.link}
        ItemSeparatorComponent={Separator}
      />
    </ActivityContainer>
  );
}

export default Learn;
