import React, { createContext, useEffect, useState, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { loginRequest, signupRequest } from "./authentication.service";

export const AuthenticationContext = createContext(null);

export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user.uid);
        saveAuthState(u.user.uid);
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const onRegister = (name, email, password) => {
    signupRequest(email, password)
      .then((u) => {
        createNewUser(name, email, u.user.uid); // Creates user in our database
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const saveAuthState = async (id) => {
    if (id) {
      try {
        const jsonValue = JSON.stringify(id);
        await AsyncStorage.setItem("@clima-user-id-unique", jsonValue);
        setUser(id);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setUser(id);
      }
    }
  };

  const createNewUser = async (name, email, id) => {
    try {
      const res = await axios.post("http://localhost:5000/user/createUser", {
        name,
        email,
        id,
      });
      console.log(res.status);
      if (res.status === 201) {
        saveAuthState(id);
      } else {
        throw "Create user failed";
      }
    } catch (err) {
      console.log("Create user failed");
      console.log(err);
    }
  };

  const getData = useMemo(
    () => async () => {
      try {
        const value = await AsyncStorage.getItem("@clima-user-id-unique");
        if (value !== null) {
          setUser(JSON.parse(value).replaceAll('"', ""));
        }
        setIsLoading(false);
      } catch (err) {
        // error reading value
        setIsLoading(false);
      }
    },
    []
  );
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
