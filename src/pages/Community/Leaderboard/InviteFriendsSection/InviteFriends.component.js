import React from "react";
import {
  Circle,
  InviteFriendsContainer,
  InviteFriendsText,
  ButtonView,
  ShareText,
} from "./InviteFriends.styles";

function InviteFriendsComponent({ navigation }) {
  const handleFriendRequest = () => {
    navigation.navigate("AddFriend");
  };
  return (
    <>
      <Circle />
      <InviteFriendsContainer>
        <InviteFriendsText>Add More Friends!</InviteFriendsText>
        <ButtonView onPress={handleFriendRequest}>
          <ShareText>Share!</ShareText>
        </ButtonView>
      </InviteFriendsContainer>
    </>
  );
}

export default InviteFriendsComponent;
