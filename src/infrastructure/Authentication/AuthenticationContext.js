import React, { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { loginRequest, signupRequest, auth } from "./authentication.service";

export const AuthenticationContext = createContext(null);

export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user.uid);
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

  const createNewUser = async (name, email, id) => {
    try {
      const res = await axios.post("http://localhost:5000/user/createUser", {
        name,
        email,
        id,
      });
      if (res.status === 201) {
        setUser(id);
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
        console.log("Run");
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
