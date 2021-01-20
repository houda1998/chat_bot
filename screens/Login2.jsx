import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";

import { Button } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "react-native";
import { Icon, Input } from "@ui-kitten/components";
import Axios from "axios";
const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const baseURL = "https://ai-chatbot-server.herokuapp.com/";

function LogIn2({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const login = () => {
    console.log("try to login..");
    Axios.post(baseURL + "login", {
      user_email: email,
      user_password: password,
    })
      .then((resp) => {
        console.log(resp.data);
        navigation.navigate("Statistiques");
      })
      .catch((err) => console.log(err));
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View
        style={{
          backgroundColor: "#353d2f",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./assets/Mycovid.png")} />
        <Input
          label="Email"
          placeholder="Pseudo/email"
          value={email}
          style={{
            backgroundColor: "#034C2F",
            color: "#0DA166",
            width: "400px",
          }}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
        <Input
          value={password}
          style={{ backgroundColor: "#034C2F" }}
          label="Mot de passe"
          placeholder="Mot de passe"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
        <Button
          appearance="outline"
          style={styles.Button}
          onPress={login}
          title="Se connecter"
          status="success"
        >
          {" "}
          Se connecter
        </Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Button: {
    margin: 5,
    width: 150,
  },
});
export default LogIn2;
