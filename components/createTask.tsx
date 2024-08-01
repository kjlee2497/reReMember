import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ITask } from "../types";

type CreateTaskProp = {
    toDo: ITask,
}

const CreateTask = ({toDo}:CreateTaskProp) => {
  return (
    <View>
      <TextInput style={styles.input} value={toDo.name}></TextInput>
      <TextInput style={styles.input} value={toDo.description}></TextInput>
      <TextInput style={styles.input} value={toDo.date}></TextInput>
      <TextInput style={styles.input} value={toDo.time}></TextInput>
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
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderRadius: 10,
    },
})