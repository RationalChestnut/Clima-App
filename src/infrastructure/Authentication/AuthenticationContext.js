/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { loginRequest, signupRequest, auth, logout } from "./authentication.service";

export const AuthenticationContext = createContext(null);

export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = async (email, password) => {
    try {
      const u = await loginRequest(email, password);
      setUser(u.user.uid);

      return { type: "Success", message: "User successfully registered" };
    } catch (err) {
      setError(err.toString());
      return { type: "Error", message: err.toString() };
    }
  };

  const onRegister = async (name, email, password) => {
    try {
      const u = await signupRequest(email, password);
      await createNewUser(name, email, u.user.uid); // Creates user in our database

      return { type: "Success", message: "User successfully registered" };
    } catch (err) {
      setError(err.toString());
      return { type: "Error", message: err.toString() };
    }
  };

  const createNewUser = async (name, email, id) => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://clima-backend.herokuapp.com/user/createUser", {
        name,
        email,
        id,
      });
      if (res.status === 201) {
        setUser(id);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = useMemo(
    () => async () => {
      setIsLoading(true);
      try {
        auth.onAuthStateChanged((userValue) => {
          if (userValue) {
            setUser(userValue.uid);
            setIsLoading(false);
          } else {
            setUser(null);
            setIsLoading(false);
          }
        });
      } catch (err) {
        // error reading value
        setUser(null);
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
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
