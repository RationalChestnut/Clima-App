import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Components/Item/Item.component";
import {
  CourseDescription,
  PathContainer,
  SectionContainer,
  TitleText,
} from "./Path.screen.styles";

function PathScreen({ navigation }) {
  const [pathData, setPathsData] = useState([]);

  const getPaths = async () => {
    try {
      const res = await axios.get("http://localhost:5000/path/all");
      setPathsData(res.data.paths);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPaths();
  }, []);

  return (
    <PathContainer>
      <TitleText>Your sustainability plan</TitleText>
      <CourseDescription>
        This plan will help you get started on your carbon-zero journey!
      </CourseDescription>
      {pathData.map((section, index) => (
        <SectionContainer key={index}>
          {section.listOfSection.map((course, i) => (
            <Item course={course} navigation={navigation} key={course.title} />
          ))}
        </SectionContainer>
      ))}
    </PathContainer>
  );
}

export default PathScreen;
