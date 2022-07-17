import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Post from "./Post/Post";
import { PostsContainer } from "./Posts.style";

function PostsPage() {
  return (
    <PostsContainer>
      <ScrollView>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </PostsContainer>
  );
}

export default PostsPage;
