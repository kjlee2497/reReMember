import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ITask } from "./types";
import Task from "./components/task";
import CreateTask from "./components/createTask";
import ReactNativeModal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*  TODO:
    -Finish createTask.  Look into Modal(react-native component) and link below
            https://blog.logrocket.com/building-react-native-forms-with-ui-components/
    -Look into how to switch screens/components
    -Local Date and Time formats and form inputs
    -Look into:  IOS alerts, IOS notifications, IOS local storage(SecureStore/Expo FileSystem)
*/

export default function App() {
  const dummyTask: ITask = {
    name: "Work Out",
    description: `Let's get that summer bod fam'`,
    date: "8/1/2024", // find better units later
    time: "10:00AM",
    repeat: true,
    frequency: ["Tuesday", "Thursday", "Saturday"],
    sound: false,
  };

  const dummyTask2: ITask = {
    name: "Clean House",
    description: "You really gotta get this place together",
    date: "7/31/24", // find better units later
    time: "4:00PM",
    repeat: false,
    frequency: ["Monday"],
    sound: true,
  };

  const blankTask: ITask = {
    name: "",
    description: "",
    date: "",
    time: "",
    repeat: false,
    frequency: [],
    sound: false,
  };

  const [toDo, setToDo] = useState<ITask>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskList, setTaskList] = useState<ITask[]>([dummyTask, dummyTask2]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  /*
  const storeData = async (value: ITask) => {
    try {
      await AsyncStorage.setItem('my-key', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@MyApp_key')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  */

  const getMyObject = async (key:string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }

    console.log('Done.')
  }

  const submitTask = () => {
    setIsModalVisible(!isModalVisible);
    getMyObject("task1");
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.container}>
        <Text style={styles.title}>Re:reMember</Text>

        <View>
          {taskList.map((task) => (
            <Task toDo={task} />
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.form}
      >
        <ReactNativeModal
          animationOutTiming={1000}
          animationOut={"slideOutUp"}
          isVisible={isModalVisible}
          backdropOpacity={0.85}
        >
          <CreateTask toDo={blankTask} />
          <Button title="Add Task" onPress={toggleModal} />
        </ReactNativeModal>

        <Button title="+" onPress={toggleModal} />
      </KeyboardAvoidingView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
})