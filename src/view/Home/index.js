import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

import Logo from "../../../assets/logo.png";
import Button from "../../components/Button";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Button outline onPress={() => navigation.navigate("Login")}>
        <Text>ENTRAR</Text>
      </Button>
      <Button onPress={() => navigation.navigate("Signup")}>
        <Text>CRIAR CONTA</Text>
      </Button>
    </View>
  );
};

export default Home;
