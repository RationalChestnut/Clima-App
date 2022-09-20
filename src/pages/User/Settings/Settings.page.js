import React, { useState, useContext, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import "firebase/storage";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { ThemeContext } from "styled-components/native";
import { storage } from "../../../infrastructure/Storage/storage.service";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import Loading from "../../../components/Loading/Loading";

import {
  SettingsPageContainer,
  NavBar,
  NavText,
  ProfilePictureButton,
  ProfilePicture,
  SaveButton,
  BackArrowComponent,
  BackArrowButton,
  UploadText,
  NameEditTextBox,
  NameEditContainer,
  NameEditLabel,
  NameEmptyWarning,
} from "./Settings.styled";
import anonymousimage from "../../../../assets/images/anonymousimage.jpeg";

// eslint-disable-next-line react/prop-types
function Settings({ navigation, route }) {
  const user = useContext(AuthenticationContext);
  const theme = useContext(ThemeContext);
  const [photoUpdated, setPhotoUpdated] = useState(false);
  const [photo, setPhoto] = useState(route.params.profilePicture);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [name, setName] = useState(route.params.name);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

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
      setPhotoUpdated(true);
    }
  };

  const handleNameEdit = (text) => {
    setName(text);

    if (saveButtonDisabled) {
      setSaveButtonDisabled(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setSaveButtonDisabled(true);

      if (!name || name.trim() === "") {
        return setDisplayWarning(true);
      }

      setDisplayWarning(false);

      if (name !== route.params.name) {
        await axios.patch("http://localhost:5000/user/updateUser", {
          userId: user.user,
          name: name.trim(),
        });
      }

      if (photoUpdated) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`users/${user.user}`);

        const img = await fetch(photo);
        const bytes = await img.blob();

        await imageRef.put(bytes);
      }

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
                navigation.navigate("Profile", { updated: true });
              }}
              style={{ position: "absolute", left: 15 }}
            >
              <BackArrowComponent color="black" />
            </BackArrowButton>
            <NavText>Settings</NavText>
          </NavBar>
          <ProfilePictureButton onPress={pickImage}>
            {photo ? (
              <ProfilePicture
                source={{ uri: photo }}
                imageStyle={{ borderRadius: 100, backgroundColor: "#D5DCDC" }}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.7)"]}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 100,
                  }}
                >
                  <UploadText>
                    <AntDesign name="upload" size={16} /> Upload
                  </UploadText>
                </LinearGradient>
              </ProfilePicture>
            ) : (
              <ProfilePicture
                source={anonymousimage}
                imageStyle={{ borderRadius: 100, backgroundColor: "#D5DCDC" }}
              >
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.7)"]}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 100,
                  }}
                >
                  <UploadText>
                    <AntDesign name="upload" size={16} /> Upload
                  </UploadText>
                </LinearGradient>
              </ProfilePicture>
            )}
          </ProfilePictureButton>
          <NameEditContainer>
            <NameEditLabel>Name: </NameEditLabel>
            <NameEditTextBox value={name} onChangeText={handleNameEdit} />
          </NameEditContainer>
          {displayWarning ? <NameEmptyWarning>Name field cannot be empty!</NameEmptyWarning> : null}
          <SaveButton title="Save" disabled={saveButtonDisabled} onPress={handleSave} />
        </>
      ) : (
        <Loading color={theme.colors.lightGreen} />
      )}
    </SettingsPageContainer>
  );
}

export default Settings;
