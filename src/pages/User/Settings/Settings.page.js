import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../../infrastructure/Storage/storage.service";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import { View } from "react-native";

import {
  SettingsPageContainer,
  NavBar,
  NavText,
  ProfilePictureButton,
  ProfilePicture,
  SaveButton,
  BackArrowComponent,
  BackArrowButton,
} from "./Settings.styled";
import anonymousimage from "../../../../assets/images/anonymousimage.jpeg";

// eslint-disable-next-line react/prop-types
function Settings({ navigation, route }) {
  const user = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(route.params.profilePicture);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSaveButtonDisabled(false);
      setPhoto(result.uri);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const imageRef = ref(storage, `users/${user.user}`);

      const img = await fetch(photo);
      const bytes = await img.blob();

      await uploadBytes(imageRef, bytes);

      setSaveButtonDisabled(true);

      // await getDownloadURL(imageRef);
      setProfileUpdated(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsPageContainer>
      {!loading ? (
        <>
          <NavBar>
            <BackArrowButton
              onPress={() => {
                navigation.navigate("Profile", {
                  updated: profileUpdated,
                });
              }}
              style={{ position: "absolute", left: 15 }}
            >
              <BackArrowComponent color="black" />
            </BackArrowButton>
            <NavText>Settings</NavText>
          </NavBar>
          <ProfilePictureButton onPress={pickImage}>
            {photo ? (
              <ProfilePicture source={{ uri: photo }} />
            ) : (
              <ProfilePicture source={anonymousimage} />
            )}
          </ProfilePictureButton>
          <SaveButton title="Save" disabled={saveButtonDisabled} onPress={handleSave} />
        </>
      ) : (
        <></>
      )}
    </SettingsPageContainer>
  );
}

export default Settings;
