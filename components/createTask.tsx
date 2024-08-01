import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ITask } from "../types";

type CreateTaskProp = {
  toDo: ITask;
};

const CreateTask = ({ toDo }: CreateTaskProp) => {
  const [newToDo, setNewToDo] = useState<ITask>(toDo);

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
