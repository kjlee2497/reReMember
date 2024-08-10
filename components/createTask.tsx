import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ITask } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CreateTaskProp = {
  toDo: ITask;
};

const CreateTask = ({ toDo }: CreateTaskProp) => {

  const [newToDo, setNewToDo] = useState<ITask>(toDo);

  const storeData = async (value: ITask, key:string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key:string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const createTask = () => {
    /* 
    1.  set newToDo state
    2.  store newToDo to local storage
    3.  close createTask
    4.  New task created notification
    */
    setNewToDo(newToDo);
    storeData(newToDo, "task1");  // need to find way to automate key generation
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={newToDo.name}
        placeholder={"Name"}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={newToDo.description}
        placeholder={"Description"}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={newToDo.date}
        placeholder={"Date"}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={newToDo.time}
        placeholder={"Time"}
      ></TextInput>
      <Text style={styles.input}>{`Repeat`}</Text>
      <Text style={styles.input}>{`Frequency (Checkboxes for each date)`}</Text>
      <Text style={styles.input}>{`Sound`}</Text>
      <Button title="create task" onPress={createTask}/>
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: "#FFF",
  },
});
