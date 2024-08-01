import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITask } from "./types";
import Task from "./components/task";
import CreateTask from "./components/createTask";

/*  TODO:
    -Finish createTask.  Look into Modal(react-native component).
            https://blog.logrocket.com/building-react-native-forms-with-ui-components/
    -Look into how to switch screens/components
    -Local Date and Time formats and form inputs
    -Look into:  IOS alerts, IOS notifications, IOS local storage(SecureStore/Expo FileSystem)
*/

export default function App() {

  const dummyTask:ITask = {
    name: 'Work Out',
    description: `Let's get that summer bod fam'`,
    date: '8/1/2024', // find better units later
    time: '10:00AM',
    repeat: true,
    frequency: ['Tuesday', 'Thursday', 'Saturday'],
    sound: false,
  }
  
  const dummyTask2:ITask = {
    name: 'Clean House',
    description: 'You really gotta get this place together',
    date: '7/31/24', // find better units later
    time: '4:00PM',
    repeat: false,
    frequency: ['Monday'],
    sound: true,
  }

  const blankTask:ITask = {
    name: '',
    description: '',
    date: '',
    time: '',
    repeat: false,
    frequency: [],
    sound: false,
  }

  const [toDo, setToDo] = useState<ITask>();
  const [creatingTask, setCreatingTask] = useState(false);
  const [taskList, setTaskList] = useState<ITask[]>([dummyTask, dummyTask2,]);
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Re:reMember</Text>
        
        <View>
          {
            taskList.map((task) => (
              <Task toDo={task} />
            ))
          }
        </View>

        <CreateTask toDo={blankTask}/>
      </View>
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

    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
