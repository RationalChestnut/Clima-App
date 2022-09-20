import React from "react";
import {
  InviteFriendBoxContainer,
  InviteFriendsText,
  InviteNowButton,
  InviteText,
  SubTitle,
} from "./InviteFriendBox.styles";

function InviteFriendBox({ navigation }) {
  return (
    <InviteFriendBoxContainer>
      <InviteFriendsText>Make every day Earth Day.</InviteFriendsText>
      <SubTitle>Scale your impact by inviting a friend</SubTitle>
      <InviteNowButton onPress={() => navigation.navigate("AddFriend")}>
        <InviteText>Invite a friend</InviteText>
      </InviteNowButton>
    </InviteFriendBoxContainer>
  );
}

export default InviteFriendBox;
