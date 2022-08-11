/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import InviteFriendsComponent from "./InviteFriendsSection/InviteFriends.component";
import {
  LeaderboardPageContainer,
  TopPlayersContainer,
  LeaderboardContainer,
  ListContainer,
} from "./Leaderboard.styling";
import LeaderboardBarComponent from "./LeaderboardBar/LeaderboardBar.component";
import Player from "./Player/Player";
import TopPlayerCard from "./TopPlayerCard/TopPlayerCard";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function LeaderboardPage({ navigation }) {
  const [users, setUsers] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const getAllFriends = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/leaderboard/get/${user}`);
      const listOfFriends = res.data;
      const topThreeFriends = listOfFriends.slice(0, 3);
      const firstItem = topThreeFriends[0];
      // eslint-disable-next-line prefer-destructuring
      topThreeFriends[0] = topThreeFriends[1];
      topThreeFriends[1] = firstItem;
      setTopThree(topThreeFriends);
      setUsers(listOfFriends.slice(3));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <LeaderboardPageContainer>
      <TopPlayersContainer>
        {topThree.map((thisUser, index) => (
          <TopPlayerCard
            rank={index === 0 ? 2 : index === 1 ? 1 : 3}
            user={thisUser}
            key={thisUser}
          />
        ))}
      </TopPlayersContainer>
      <LeaderboardContainer>
        <LeaderboardBarComponent />
        <ListContainer>
          <FlatList
            data={users}
            renderItem={({ item, index }) => <Player user={item} rank={index + 4} />}
            key={(item) => item}
          />
        </ListContainer>
      </LeaderboardContainer>
      <InviteFriendsComponent navigation={navigation} />
    </LeaderboardPageContainer>
  );
}

export default LeaderboardPage;
