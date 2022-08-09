import React, { useContext, useState } from "react";
import * as Clipboard from "expo-clipboard";
import axios from "axios";
import {
  AddFriendScreenContainer,
  CodeText,
  CodeContainer,
  ProfileText,
  CodeInput,
  SendButton,
  SendText,
  ProfileComponent,
  Username,
  ProfileCode,
  ShareCodeButton,
  StyledText,
  CopyStyledText,
  Copy,
  Border,
  Row,
  Instruction,
  CodeInputWrapper,
} from "./AddFriend.styles";
import BackArrow from "../../components/BackArrow.component";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";

function AddFriendScreen({ navigation }) {
  const [code, setCode] = useState("");
  const { user } = useContext(AuthenticationContext);
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(user);
  };

  const addFriend = async () => {
    try {
      const res = await axios.patch(`http://localhost:5000/friends/addFriend`, {
        userId: user,
        friendId: code,
      });
      setCode("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddFriendScreenContainer>
      <BackArrow
        navigation={navigation}
        color="white"
        marginLeft={20}
        style={{ marginRight: "auto", paddingLeft: 20, paddingTop: 20 }}
      />
      <ProfileComponent>
        <Username>RationalChestnut</Username>
        <ProfileText>Your Friend Code:</ProfileText>
        <ProfileCode>{user}</ProfileCode>
        <ShareCodeButton>
          <StyledText>Share your friend code</StyledText>
        </ShareCodeButton>
        <Copy onPress={copyToClipboard}>
          <CopyStyledText>Copy my friend code</CopyStyledText>
        </Copy>
      </ProfileComponent>
      <Row>
        <Border />
        <CodeText>Add Friend</CodeText>
        <Border />
      </Row>

      <CodeContainer>
        <Instruction>To add someone to your friends list, enter their friend code</Instruction>
        <CodeInputWrapper>
          <CodeInput value={code} onChangeText={(text) => setCode(text)} />
        </CodeInputWrapper>
        <SendButton onPress={addFriend}>
          <SendText>Send</SendText>
        </SendButton>
      </CodeContainer>
    </AddFriendScreenContainer>
  );
}

export default AddFriendScreen;
