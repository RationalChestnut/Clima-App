import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

export const PostContainer = styled(View)`
  flex-direction: column;
  align-self: flex-start;
  padding-bottom: 2%;
  background-color: white;
`;

export const UpperBar = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const BotttomBar = styled(View)``;

export const CommentComponent = styled(View);

export const UserNameText = styled(Text)``;

export const ProfilePicture = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 1000px;
  margin-right: 10px;
`;

export const ImageComponent = styled(Image).attrs((props) => ({
  source: props.source,
}))`
  width: 100%;
  height: 75%;
  margin-top: -6%;
`;

export const TitleText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: 4%;
`;

export const CommentsContainer = styled(View)`
  padding-left: 4%;
`;

export const ViewCommentText = styled(Text)`
  color: #aeaeae;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Comment = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;
