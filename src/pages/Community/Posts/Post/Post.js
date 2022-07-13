import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import background from "../../../../../assets/images/background.jpeg";
import building from "../../../../../assets/images/building.jpeg";
import lightswitch from "../../../../../assets/images/lightswitch.jpeg";
import anonymousimage from "../../../../../assets/images/anonymousimage.jpeg";
// import Carousel from "react-native-reanimated-carousel";
import {
  PostContainer,
  UpperBar,
  UserNameText,
  ProfilePicture,
  ImageComponent,
  BotttomBar,
  TitleText,
  CommentsContainer,
  ViewCommentText,
  Comment,
} from "./Post.style";

const windowWidth = Dimensions.get("window").width;

function Post() {
  return (
    <PostContainer>
      <UpperBar>
        <ProfilePicture source={anonymousimage} />
        <UserNameText>Dave Pacticia</UserNameText>
      </UpperBar>
      <Carousel
        width={windowWidth}
        height={350}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={[{ image: background }, { image: building }, { image: lightswitch }]}
        renderItem={({ item }) => <ImageComponent source={item.image} />}
        style={{ height: 250 }}
      />
      <BotttomBar>
        <TitleText>Another hard working day planting trees with the fam!</TitleText>
      </BotttomBar>
      <CommentsContainer>
        <ViewCommentText>View all comments</ViewCommentText>
        <Comment>Sammy Hills Billy: Great work!!!</Comment>
      </CommentsContainer>
    </PostContainer>
  );
}

export default Post;
