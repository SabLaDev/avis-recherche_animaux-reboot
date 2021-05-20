import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  ScrollView
} from "react-native";

import { Card } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import ParcourirImage from "./ParcourirImage";


const FormLostFound = () => {

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView style={styles.scrollView}>
      <Card>
        <Card.Title style={{ color: "#272343", fontSize: 20 }}>
          Vous avez Perdu ou trouver un animal?
        </Card.Title>
        <Card.Divider />
        <View>
         
          <View>

          </View>
          <Text> à </Text>
          <View>
          </View>

          <Text>Il est parti en direction de : </Text>
          <Card.Divider />
          <Text>Description </Text>
          <Card.Divider />
          <View style={styles.section}>
            <Text>Nom : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View >
            <Text>Type : </Text>

            <Picker
              dropdownIconColor="#272343"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Chat" value="Chat" />
              <Picker.Item label="Chien" value="Chien" />
              <Picker.Item label="Lapin" value="Lapin" />
              <Picker.Item label="Autres" value="Autres" />
            </Picker>

          </View>
          <View>
            <Text>Genre : </Text>
          </View>
          <Picker
            dropdownIconColor="#272343"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Mâle" value="M" />
            <Picker.Item label="Femelle" value="F" />
          </Picker>
          <View style={styles.section}>
            <Text>Age : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View>
            <Text>Pelage : </Text>
          </View>
          <Picker
            dropdownIconColor="#272343"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Court" value="Court" />
            <Picker.Item label="Long" value="Long" />
          </Picker>
          <View style={styles.section}>
            <Text>Couleur : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.section}>
            <Text>Yeux : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.section}>
            <Text>Race : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.section}>
            <Text>Identifié : </Text>
          </View>
          <Picker
            dropdownIconColor="#272343"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Tatoué(e)" value="Tatoué(e)" />
            <Picker.Item label="Pucé(e)" value="Pucé(e)" />
            <Picker.Item label="Non" value="Non" />
          </Picker>
          <View>
            <Text>Commentaire : </Text>
            <Card.Divider />
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={4}
            ></TextInput>
          </View>
          <View>
            <Text>Importer des photos : </Text>
            <Card.Divider />
            <ParcourirImage></ParcourirImage>
          </View>
          <View style={styles.section}>
            <Text>Pour vous contacter : </Text>
          </View>
          <Card.Divider />
          <View style={styles.section}>
            <Text>Telephone </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.section}>
            <Text>E-mail </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={{ padding: 16 }}>
            <Button
              title="Poster"
              color="#272343"
              borderRadius="50"
              onPress={() => alert("Poster l'avis")}
            ></Button>
          </View>
        </View>

      </Card>
    </ScrollView>
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
  checkbox: {
    margin: 8,
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
    justifyContent: "center",
    backgroundColor: "#e3f6f5",
  },
  reseauSociaux: {
    textAlign: "center",
    padding: "4%",
    marginTop: "5%",
  },
  scrollView: {
    backgroundColor: "#e3f6f5",
  },
  piker: {
    backgroundColor: "#272343",
    color: "#F0F8FF",
    borderRadius: 30
  }
});

export default FormLostFound;
