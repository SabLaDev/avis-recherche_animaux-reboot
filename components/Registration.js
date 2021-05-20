import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { Card, SocialIcon } from "react-native-elements";


const Registration = () => {

  return (
    <View style={styles.page}>
      <Card>
        <Card.Title style={{ color: "#272343", fontSize: 20 }}>S'inscrire</Card.Title>
        <Card.Divider />
        {
          <View>
            <View>
              <Text style={styles.paragraph}>
                Déja un utilisateur? Se connecter
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Prénom"
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Nom de famille"
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
              ></TextInput>
              <TextInput
                style={styles.input}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Mot de passe"
              ></TextInput>
              <Button
                title="S'inscrire"
                color="#272343"
                onPress={() => alert("Connexion")}
              ></Button>
            </View>
            <Text style={styles.reseauSociaux}>Ou s'inscrire avec : </Text>
            <Card.Divider />
            <View style={styles.section}>
              <SocialIcon light onPress={() => alert("connexion twitter")} type="twitter" />
              <SocialIcon light onPress={() => alert("connexion instagram")} type="instagram" />
              <SocialIcon light onPress={() => alert("connexion facebook")} type="facebook" />
              <SocialIcon light onPress={() => alert("connexion google")} type="google" />
            </View>
          </View>
        }
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
    margin: 3,
  },
  input: {
    backgroundColor: "#e3f6f5",
    padding: 2,
    margin: 4,
  },
  title: {
    fontSize: 40,
    margin: 5,
  },
  page: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#e3f6f5",
  },
  reseauSociaux: {
    textAlign: "center",
    padding: "4%",
    marginTop: "5%",
  },
 
});

export default Registration;
