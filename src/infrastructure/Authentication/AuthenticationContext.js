import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, signupRequest } from "./authentication.service";

export const AuthenticationContext = createContext(null);

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
        saveAuthState(email);
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
        saveAuthState(email);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const saveAuthState = async (email) => {
    if (email) {
      try {
        const jsonValue = JSON.stringify(email);
        await AsyncStorage.setItem("@clima-user-email", jsonValue);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@clima-user-email");
      if (value !== null) {
        setUser(value);
      }
      setIsLoading(false);
    } catch (err) {
      // error reading value
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
