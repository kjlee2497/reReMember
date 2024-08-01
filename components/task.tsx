import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITask } from "../types";

type TaskProps = {
  toDo: ITask;
};

const Task = ({ toDo }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.banner}>
        <Text style={styles.title}>{toDo.name}</Text>
        <Text>{toDo.time}</Text>
      </View>

      <Text>{toDo.date}</Text>
      <Text style={styles.description}>{toDo.description}</Text>

      <View style={styles.frequency}>
        {toDo.frequency.map((day) => (
          <Text style={styles.repeatDays}>{day}</Text>
        ))}
      </View>

      <View style={styles.bannerBottom}>
        <Text style={styles.repeat}>
          {toDo.repeat ? "Repeating" : "One-Time"}
        </Text>
        <Text style={styles.sound}>
          {toDo.sound ? "Sound on" : "Sound off"}
        </Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
  },
  banner: {
    fontSize: 14,
    fontWeight: 700,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  repeat: {
    fontSize: 12,
  },
  frequency: {
    flexDirection: "row",
  },
  repeatDays: {
    fontSize: 12,
    marginRight: 4,
  },
  sound: {
    fontSize: 12,
  },
  bannerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
