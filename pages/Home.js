import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from 'react-native';
import Task from './../components/Task';

 export default function App() {
 
     
   

  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <View style={styles.appIcon}>
      <Image 
      style={styles.appLogo}
      source={require("../assets/logo.png")}
      />
      </View>
      <View style={styles.appTitle}>
      <Text style={styles.appText}> TASKER </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Record your tasks easily</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor={'green'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    overflowX: 'hidden'
  },
  appText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 39,
    marginTop: 60,
    color: 'green',
    marginBottom: -70,
    fontFamily: 'teko'
  },
  appTitle: {
    alignItems: 'center'
  },

  appIcon: {
    alignItems: 'center',
    marginBottom: -350
  },

  appLogo: {
    alignItems: 'center',
    marginTop: -200
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',

  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'mediumpurple',
    fontFamily: 'teko'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    fontFamily: 'teko'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize:30,
    fontFamily: 'times',
    alignItems: 'center',
    paddingTop: 5
  },
});