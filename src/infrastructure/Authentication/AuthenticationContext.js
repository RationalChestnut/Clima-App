import React, { createContext, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { loginRequest, signupRequest, auth } from "./authentication.service";

export const AuthenticationContext = createContext(null);

// GoogleSignin.configure({
//   webClientId: "",
// });

// eslint-disable-next-line react/prop-types
export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password) => {
    setIsLoading(true);
    signupRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };
  const googleSignIn = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredential);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <AuthenticationContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        googleSignIn,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
