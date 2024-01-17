import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    const newCourseGoals = [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}];
    setCourseGoals(newCourseGoals);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' onChangeText={(e) => goalInputHandler(e)} />
        <Button onPress={addGoalHandler} title='Add'/>
      </View>

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={ (item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}/>
            
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput : {
    borderWidth: 1,
    borderColor: '#ccc',
    
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    
  },
  goalItem: {
    margin: 6,
    padding: 8,
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'purple'
  },
  goalText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }

  
});
