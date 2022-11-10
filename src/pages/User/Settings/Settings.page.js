import React, { useState, useContext, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { ThemeContext } from "styled-components/native";
import { Linking } from "react-native";
import Dialog from "react-native-dialog";
import Toast from "react-native-toast-message";
import { storage } from "../../../infrastructure/Storage/storage.service";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import Loading from "../../../components/Loading/Loading";
import { resetEmail } from "../../../infrastructure/Authentication/authentication.service";

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
  Email,
  ButtonText,
  EmailContainer,
  DeleteButtonContainer,
  DeleteButtonText,
  ErrorText,
  Underline,
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
  const [isLoginAgainVisible, setIsLoginAgainVisible] = useState(false);
  const [accountDeleteEmail, setAccountDeleteEmail] = useState("");
  const [accountDeletePassword, setAccountDeletePassword] = useState("");
  const [accountDeleteError, setAccountDeleteError] = useState(false);

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
      setPhotoUpdated(true);
      setPhoto(result.uri);
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`users/${user.user}`);

      const img = await fetch(result.uri);
      const bytes = await img.blob();

      await imageRef.put(bytes);
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

      if (name && name.trim() !== "") {
        if (name !== route.params.name) {
          await axios.patch("https://clima-backend.herokuapp.com/user/updateUser", {
            userId: user.user,
            name: name.trim(),
          });
        }
      }
      await firebaseUser.reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(firebaseUser.email, currentPassword)
      );

      if (email && email.trim() !== "") {
        if (email !== firebaseUser.email) {
          await firebaseUser.updateEmail(email.trim());
        }
      }
      if (currentPassword && currentPassword.trim() !== "") {
        if (passwordUpdated) {
          await firebaseUser.updatePassword(newPassword);
        }
      }

      setDisplayWarning(false);
      setDisplayWrongPassWarning(false);

      if (name !== route.params.name) {
        await axios.patch("https://clima-backend.herokuapp.com/user/updateUser", {
          userId: user.user,
          name: name.trim(),
        });
      }

      setNewPassTooShortWarning(false);
      setSaveButtonDisabled(true);
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

  const handleLogout = () => {
    user.logout();
  };

  const deleteAccount = async () => {
    const res = await axios.delete(
      `https://clima-backend.herokuapp.com/user/deleteUser/${user.user}`
    );
    if (res.status === 200) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`users/${user.user}`);
      imageRef.delete();
      firebaseUser.delete(); // Deletes user from authentication
      user.logout();
    }
  };

  const tryDeleteAccount = () => {
    if (accountDeleteEmail.toLowerCase() === firebaseUser.email.toLowerCase()) {
      firebaseUser
        .reauthenticateWithCredential(
          firebase.auth.EmailAuthProvider.credential(accountDeleteEmail, accountDeletePassword)
        )
        .then(() => {
          deleteAccount();
        })
        .catch(() => {
          setAccountDeleteError(true);
        });
    } else {
      setAccountDeleteEmail("");
      setAccountDeletePassword("");
      setAccountDeleteError(true);
    }
  };

  const handleDelete = () => {
    setIsLoginAgainVisible(true);
    // Create alert to ask user to login again:
  };

  const resetPassword = () => {
    resetEmail(firebaseUser.email.trim())
      .then(() => {
        Toast.show({
          type: "success",
          text1: "We sent you an email to reset your password",
          text2: "Be sure to check your spam",
          position: "top",
          onPress: () => Toast.hide(),
        });
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: "Howdy👋 Eco-Activist",
          text2: "Something went wrong, please try again later",
          position: "top",
          onPress: () => Toast.hide(),
        });
      });
  };

  return (
    <SettingsPageContainer>
      {!loading ? (
        <>
          <Dialog.Container visible={isLoginAgainVisible}>
            <Dialog.Title>Account Deletion</Dialog.Title>
            <Dialog.Description>
              Please reenter credentials to confirm deleting your account
            </Dialog.Description>
            {accountDeleteError && <ErrorText>Account credentials incorrect</ErrorText>}
            <Dialog.Input placeholder="Email" onChangeText={setAccountDeleteEmail} />
            <Dialog.Input
              placeholder="Password"
              onChangeText={setAccountDeletePassword}
              secureTextEntry
            />
            <Dialog.Button
              label="Cancel"
              onPress={() => {
                setIsLoginAgainVisible(false);
                setAccountDeleteError(false);
              }}
            />
            <Dialog.Button label="Submit" onPress={tryDeleteAccount} />
          </Dialog.Container>
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
          <SaveButton disabled={saveButtonDisabled} onPress={handleSave}>
            <ButtonText>Save</ButtonText>
          </SaveButton>
          <SaveButton onPress={resetPassword}>
            <ButtonText>Reset Password</ButtonText>
          </SaveButton>
          <SaveButton onPress={handleLogout}>
            <ButtonText>Logout</ButtonText>
          </SaveButton>
          <DeleteButtonContainer onPress={handleDelete}>
            <DeleteButtonText>Delete Account</DeleteButtonText>
          </DeleteButtonContainer>
          <EmailContainer
            onPress={() =>
              Linking.openURL("mailto:climamobileapp@gmail.com?subject=Clima Feedback")
            }
          >
            <Email>
              Any questions or suggestions? Email <Underline>climamobileapp@gmail.com</Underline>
            </Email>
          </EmailContainer>
        </>
      ) : (
        <Loading color={theme.colors.lightGreen} />
      )}
    </SettingsPageContainer>
  );
}

export default Settings;
