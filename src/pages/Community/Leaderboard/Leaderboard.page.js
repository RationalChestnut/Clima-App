/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
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
import Loading from "../../../components/Loading/Loading";
import InviteFriendBox from "./InviteFriendBox/InviteFriendBox.component";

function LeaderboardPage({ navigation }) {
  const theme = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topThree, setTopThree] = useState([]);
  const [numFriends, setNumFriends] = useState(0);
  const { user } = useContext(AuthenticationContext);

  const getAllFriends = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://clima-backend.herokuapp.com/leaderboard/get/${user}`);
      const listOfFriends = res.data;
      const topThreeFriends = listOfFriends.slice(0, 3);
      const firstItem = topThreeFriends[0];
      // eslint-disable-next-line prefer-destructuring
      if (topThreeFriends.length !== 1) {
        topThreeFriends[0] = topThreeFriends[1];
        topThreeFriends[1] = firstItem;
      }

      setTopThree(topThreeFriends);
      setUsers(listOfFriends.slice(3));
      setNumFriends(listOfFriends.length);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllFriends();
    }, [])
  );
  return !loading ? (
    <LeaderboardPageContainer>
      <TopPlayersContainer>
        {topThree.map((thisUser, index) => (
          <TopPlayerCard
            rank={topThree.length === 1 ? 1 : index === 0 ? 2 : index === 1 ? 1 : 3}
            user={thisUser}
            key={thisUser}
          />
        ))}
      </TopPlayersContainer>
      <LeaderboardContainer>
        <LeaderboardBarComponent />
        {numFriends < 4 ? (
          <InviteFriendBox navigation={navigation} />
        ) : (
          <ListContainer>
            <FlatList
              data={users}
              renderItem={({ item, index }) => <Player user={item} rank={index + 4} />}
              key={(item) => item}
            />
          </ListContainer>
        )}
      </LeaderboardContainer>
      <InviteFriendsComponent navigation={navigation} />
    </LeaderboardPageContainer>
  ) : (
    <Loading color={theme.colors.lightGreen} />
  );
}

export default LeaderboardPage;
