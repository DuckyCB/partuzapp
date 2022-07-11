import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Text,
  Subheading,
  Button,
  TextInput,
  Dialog,
  RadioButton,
  TouchableRipple,
} from "react-native-paper";
import axiosInstance from "../../utils/networking";
import API from "../../constants/API";
import { LoginContext } from "../../navigation/StackNavigation";

const CategoryDialog = ({ visible, close, handleCategorySelect }) => {
  const [selection, setSelection] = useState("");

  const categories = [
    { name: "Previa", value: "previa" },
    { name: "Fútbol", value: "futbol" },
    { name: "Volleyball", value: "volleyball" },
    { name: "Fiesta", value: "fiesta" },
    { name: "Estudio", value: "estudio" },
  ];

  const handleOk = () => {
    handleCategorySelect(selection);
    close();
  };

  return (
    <Dialog onDismiss={close} visible={visible}>
      <Dialog.Title>Choose a category</Dialog.Title>
      <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
        <ScrollView>
          <View>
            {categories.map((category) => {
              return (
                <TouchableRipple
                  key={category.value}
                  onPress={() => setSelection(category)}
                >
                  <View style={styles.row}>
                    <View pointerEvents="none">
                      <RadioButton
                        value={category.value}
                        status={
                          selection.value === `${category.value}`
                            ? "checked"
                            : "unchecked"
                        }
                      />
                    </View>
                    <Subheading style={styles.text}>{category.name}</Subheading>
                  </View>
                </TouchableRipple>
              );
            })}
          </View>
        </ScrollView>
      </Dialog.ScrollArea>
      <Dialog.Actions>
        <Button onPress={close}>Cancel</Button>
        <Button onPress={handleOk}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

const EventForm = ({ closeForm, title, create }) => {
  // const { user } = useContext(LoginContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categorySelectVisible, setCategorySelectVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState("");

  const closeCategorySelect = () => {
    setCategorySelectVisible(false);
  };

  const handleCategorySelect = (selection) => {
    setCategory(selection);
  };

  useEffect(() => {
    setError("");
  }, [name, category, description, date]);

  const handleSave = () => {
    if (name.length === 0) {
      setError("Name cannot be empty");
    } else if (category.length === 0) {
      setError("Category cannot be empty");
    } else if (description.length === 0) {
      setError("Description cannot be empty");
    } else if (date.length === 0) {
      setError("Date cannot be empty");
    } else {
      if (create) {
        axiosInstance
          .post(API.EVENT.POST_CREATE, {
            name,
            creator: user,
            participants,
            description,
            date,
            location,
            categoria: category,
            picture,
          })
          .then(() => {
            closeForm();
          })
          .catch(() => {
            setError("Error saving info");
          });
      } else {
      }
      closeForm();
    }
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(newName) => setName(newName)}
          style={styles.input}
        />
        <View style={styles.picker}>
          <View style={styles.selection}>
            <Text style={styles.categoryText}>{category?.name}</Text>
          </View>
          <Button onPress={() => setCategorySelectVisible(true)}>
            Select Category
          </Button>
        </View>
        <TextInput
          label="Description"
          value={description}
          onChangeText={(newDescription) => setDescription(newDescription)}
          style={styles.input}
        />
        <TextInput
          label="Date"
          value={date}
          onChangeText={(newDate) => setDate(newDate)}
          style={styles.input}
        />
        <TextInput
          label="Location"
          value={location}
          onChangeText={(newLocation) => setLocation(newLocation)}
          style={styles.input}
        />
        <TextInput
          label="Picture"
          value={picture}
          onChangeText={(newPicture) => setPicture(newPicture)}
          style={styles.input}
        />
      </ScrollView>
      <Button mode="contained" onPress={handleSave}>
        Save
      </Button>
      <Text style={styles.error}>{error}</Text>
      <CategoryDialog
        visible={categorySelectVisible}
        close={closeCategorySelect}
        handleCategorySelect={handleCategorySelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: "100%",
  },
  picker: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selection: {
    borderColor: "#FFF",
  },
  categoryText: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
  error: {
    fontSize: 20,
    color: "#F00",
  },
});

export default EventForm;
