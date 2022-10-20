import React, { useEffect, useState } from "react";
import { DisplayActivityInfoPageContainer } from "../DisplayActivityInfo/DisplayActivityInfo.styles";
import { ActivitiesList, Title, TopBar } from "./DisplayActivities.styles";
import BackArrow from "../../../components/BackArrow.component";
import DisplayActivityDescription from "./DisplayActivityDescription/DisplayActivityDescription.component";
import { tasks } from "../../../data/tasks.data";

function DisplayActivitiesPage({ navigation, route }) {
  const { type } = route.params;
  const [data, setData] = useState(null);

  const renderItem = ({ item }) => (
    <DisplayActivityDescription item={item} navigation={navigation} key={item.id} />
  );

  useEffect(() => {
    if (type === "All Actions") {
      setData(tasks);
    } else {
      setData(tasks.filter((task) => task.type === type));
    }
  }, []);

  return (
    <DisplayActivityInfoPageContainer>
      <TopBar>
        <BackArrow navigation={navigation} style={{ marginLeft: 12 }} />
        <Title>{type}</Title>
      </TopBar>
      {data ? (
        <ActivitiesList
          data={data}
          renderItem={renderItem}
          initialNumToRender={data.length}
          maxToRenderPerBatch={10}
          windowSize={200}
        />
      ) : null}
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivitiesPage;
