import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ children, outline, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={outline ? styles.btn_outline_primary : styles.btn_primary}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
