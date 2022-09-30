import React, { useState, useContext, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase/app";
import "firebase/auth";
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
  InputContainer,
  TextboxLabel,
  Textbox,
  Warning,
} from "./Settings.styled";
import anonymousimage from "../../../../assets/images/anonymousimage.jpeg";

// eslint-disable-next-line react/prop-types
function Settings({ navigation, route }) {
  const user = useContext(AuthenticationContext);
  const firebaseUser = firebase.auth().currentUser;
  const theme = useContext(ThemeContext);
  const [photoUpdated, setPhotoUpdated] = useState(false);
  const [photo, setPhoto] = useState(route.params.profilePicture);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayWrongPassWarning, setDisplayWrongPassWarning] = useState(false);
  const [newPassTooShortWarning, setNewPassTooShortWarning] = useState(false);
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(firebaseUser.email);
  const [newPassword, setNewPassword] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("We need camera roll permissions to make this work!");
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

  const handleEmailEdit = (text) => {
    setEmail(text);

    if (saveButtonDisabled) {
      setSaveButtonDisabled(false);
    }
  };

  const handleCurrentPasswordEdit = (text) => {
    setCurrentPassword(text);
  };

  const handleNewPasswordEdit = (text) => {
    setNewPassword(text);

    if (!passwordUpdated) {
      setPasswordUpdated(true);
    }

    if (saveButtonDisabled) {
      setSaveButtonDisabled(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setSaveButtonDisabled(true);

      if (
        !name ||
        name.trim() === "" ||
        !email ||
        email.trim() === "" ||
        !currentPassword ||
        currentPassword.trim() === ""
      ) {
        return setDisplayWarning(true);
      }

      setDisplayWarning(false);

      await firebaseUser.reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(firebaseUser.email, currentPassword)
      );

      setDisplayWrongPassWarning(false);

      if (name !== route.params.name) {
        await axios.patch("http://localhost:5000/user/updateUser", {
          userId: user.user,
          name: name.trim(),
        });
      }

      if (email !== firebaseUser.email) {
        await firebaseUser.updateEmail(email.trim());
      }

      if (passwordUpdated) {
        await firebaseUser.updatePassword(newPassword);
      }

      setNewPassTooShortWarning(false);

      if (photoUpdated) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`users/${user.user}`);

        const img = await fetch(photo);
        const bytes = await img.blob();

        await imageRef.put(bytes);
      }

      setCurrentPassword(null);
      setNewPassword(null);
      setLoading(false);
    } catch (err) {
      console.log(err.code);
      console.log(err);

      if (err.code === "auth/wrong-password") {
        setDisplayWrongPassWarning(true);
      }

      if (err.code === "auth/weak-password") {
        setNewPassTooShortWarning(true);
      }

      setEmail(firebaseUser.email);
      setNewPassword(null);
      setName(route.params.name);
      setCurrentPassword(null);
      setLoading(false);
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
          <InputContainer>
            <TextboxLabel>Username</TextboxLabel>
            <Textbox value={name} onChangeText={handleNameEdit} />
          </InputContainer>
          <InputContainer>
            <TextboxLabel>Email</TextboxLabel>
            <Textbox value={email} onChangeText={handleEmailEdit} />
          </InputContainer>
          <InputContainer>
            <TextboxLabel>New Password</TextboxLabel>
            <Textbox value={newPassword} onChangeText={handleNewPasswordEdit} secureTextEntry />
          </InputContainer>
          <InputContainer>
            <TextboxLabel>Current Password</TextboxLabel>
            <Textbox
              value={currentPassword}
              onChangeText={handleCurrentPasswordEdit}
              secureTextEntry
            />
          </InputContainer>
          {displayWarning ? (
            <Warning>Name, email, and current password cannot be empty!</Warning>
          ) : null}
          {displayWrongPassWarning ? <Warning>Incorrect password!</Warning> : null}
          {newPassTooShortWarning ? (
            <Warning>New password should be at least 6 characters!</Warning>
          ) : null}
          <SaveButton title="Save" disabled={saveButtonDisabled} onPress={handleSave} />
        </>
      ) : (
        <Loading color={theme.colors.lightGreen} />
      )}
    </SettingsPageContainer>
  );
}

export default Settings;
