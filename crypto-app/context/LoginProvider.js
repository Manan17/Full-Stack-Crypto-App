import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLogin = () => useContext(LoginContext);

const styles = StyleSheet.create({});
