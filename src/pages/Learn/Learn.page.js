import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import FullWidthCard from "../../components/FullWidthCard/FullWidthCard";
import { ActivityContainer, ArticlesContainer, Separator } from "./Learn.styled";
import Article from "../../components/Article/Article";

const articles = [
  {
    id: 1,
    title: "Climate Change: Why it's happening",
    image:
      "https://api.time.com/wp-content/uploads/2015/06/climate-change-singapore.jpeg?quality=85&w=4171",
    link: "https://www.usgs.gov/faqs/why-climate-change-happening-and-what-are-causes",
  },
  {
    id: 2,
    title: "Climate Change: Why it's happening II",
    image:
      "https://api.time.com/wp-content/uploads/2015/06/climate-change-singapore.jpeg?quality=85&w=4171",
    link: "https://www.usgs.gov/faqs/why-climate-change-happening-and-what-are-causes",
  },
  {
    id: 3,
    title: "Climate Change: Why it's happening III",
    image:
      "https://api.time.com/wp-content/uploads/2015/06/climate-change-singapore.jpeg?quality=85&w=4171",
    link: "https://www.usgs.gov/faqs/why-climate-change-happening-and-what-are-causes",
  },
  {
    id: 4,
    title: "Climate Change: Why it's happening III",
    image:
      "https://api.time.com/wp-content/uploads/2015/06/climate-change-singapore.jpeg?quality=85&w=4171",
    link: "https://www.usgs.gov/faqs/why-climate-change-happening-and-what-are-causes",
  },
];

function Learn() {
  const theme = useContext(ThemeContext);

  const article = ({ item }) => <Article title={item.title} image={item.image} link={item.link} />;

  return (
    <ActivityContainer>
      <FullWidthCard
        title="Learn More"
        content="Learning more about climate change is the first step in making a difference!"
        bgColor={theme.colors.defaultGreen}
      />
      <ArticlesContainer
        data={articles}
        renderItem={article}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </ActivityContainer>
  );
}

export default Learn;
