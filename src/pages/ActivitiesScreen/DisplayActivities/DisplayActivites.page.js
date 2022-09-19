import React, { useEffect, useState } from "react";
import axios from "axios";
import { DisplayActivityInfoPageContainer } from "../DisplayActivityInfo/DisplayActivityInfo.styles";
import { ActivitiesList, FilterIcon, Title, TopBar } from "./DisplayActivities.styles";
import BackArrow from "../../../components/BackArrow.component";
import DisplayActivityDescription from "./DisplayActivityDescription/DisplayActivityDescription.component";

function DisplayActivitiesPage({ navigation, route }) {
  const { type } = route.params;
  const [data, setData] = useState([]);

  const getAllTasks = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/tasks/getAllTasks`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSpecificType = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/tasks/getAllTasks/${type}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = ({ item }) => (
    <DisplayActivityDescription item={item} navigation={navigation} />
  );

  useEffect(() => {
    if (type === "All Actions") {
      getAllTasks();
    } else {
      getSpecificType();
    }
  }, []);

  return (
    <DisplayActivityInfoPageContainer>
      <TopBar>
        <BackArrow navigation={navigation} style={{ marginLeft: 12 }} />
        <Title>{type}</Title>
      </TopBar>
      <ActivitiesList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivitiesPage;
