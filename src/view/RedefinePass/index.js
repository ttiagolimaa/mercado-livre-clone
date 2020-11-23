import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

import Logo from "../../../assets/logo.png";
import Button from "../../components/Button";

const RedefinePass = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <View style={styles.containerInput}>
        <TextInput
          name="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.input}
        />
      </View>
      <Button outline>
        <Text style={styles.text_primary}>ENTRAR</Text>
      </Button>
    </View>
  );
};

export default RedefinePass;
