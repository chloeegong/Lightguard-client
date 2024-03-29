import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";

//This is our EmergencyContactPage
export default function EmergencyContact({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const handleEmergContact = async () => {
    try {
      navigation.navigate("Map");
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          top: "13%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        Emergency Contact
      </Text>
      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />
      {/** Input element for SignUp first and last name*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", top: "15%" }}
        placeholder="First Name"
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
        onChangeText={setFirstName}
      />
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%" }}
        placeholder="Last Name"
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
        onChangeText={setLastName}
      />

      {/** Input element for signup phone number*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "15%" }}
        placeholder="Phone Number"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "phone",
        }}
        onChangeText={setPhoneNumber}
      />
      {/** Button element for completing the sign up*/}
      <Button
        title="Next step"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "15%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          handleEmergContact();
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
    </View>
  );
}

//Styling used for the view everything is incapsulated in
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    changeDirection: "inherit",
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
//Styling used for the all of the inputs
const inputStyles = {
  inputStyle: {
    color: "white",
    paddingLeft: "3%",
    fontFamily: "Menlo",
    fontSize: 13,
    paddingTop: "7%",
  },
  leftIconContainerStyle: {
    paddingTop: "7%",
    paddingLeft: "5%",
  },
};
const secureStyles = {
  secureTextEntry: true,
};
