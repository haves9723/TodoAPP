import { Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import TaskItem from './components/TaskItem';
import SubTaskItem from './components/SubTaskItem';

export default function App() {

  const [inputVisible, setInputVisible] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [taskItem, setTaskItem] = useState([]);
  const [selectedTask, setSelectedTask] = useState();
  

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  }

  const handleSelectedTask = (task) => {
    if (!inputVisible) {
      selectedTask === task ? setSelectedTask() : setSelectedTask(task);
    } else {
      handleAddTask();
    }
  }

  const handleAddTask = () => {
    if (inputVisible) {
      if (taskText !== null) {
        const newTask = {
          id: Math.random(),
          text: taskText,
          completed: false,
          subTaskList: [{id: 1, text: 'hello'}, {id: 2, text: 'new'}]
        }
        setTaskItem([newTask, ...taskItem]);
        setTaskText(null);
      }
      Keyboard.dismiss();
      toggleInput();
    }
  }

  const updateTaskDone = (taskIndex, done) => {
    setTaskItem(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].completed = done;
      return newTasks;
    })
  }

  return (
    <TouchableWithoutFeedback onPress={handleAddTask}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>
            Tasked
          </Text>
          {
            inputVisible ?
              <View style={styles.newTaskContainer}>
                <FontAwesome name="square" size={24} color="#555555" />
                <TextInput onChangeText={text => setTaskText(text)} autoFocus={true} placeholderTextColor={'white'} style={styles.input} placeholder='add Task'></TextInput>
              </View>
              : <></>
          }
          {
            taskItem.map((item, index) => (
                <View>
                  <TaskItem
                    key={index}
                    task={item}
                    onUpdateTask={done => updateTaskDone(index, done)}
                    handleSelectedTask={handleSelectedTask}
                    isSelected={selectedTask === item}>
                  </TaskItem> 
                </View>
            ))}
        </View>
        
        <Pressable
          onPress={toggleInput}
          style={styles.addContainer}
        >
          <Text style={{ textAlign: 'center', fontSize: 30, }}>+</Text>
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    backgroundColor: '#111111',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginLeft: 20
  },
  newTaskContainer: {
    marginVertical: 18,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 250,
    marginLeft: 15,
    color: 'white',
    fontSize: 20
  },
  addContainer: {
    position: 'absolute',
    backgroundColor: '#FF5A60',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,
    bottom: 45,
    right: 35,
  },
});
