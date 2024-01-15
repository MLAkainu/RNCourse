
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'/>
        <Button title='ADD Goal'/>
      </View>
      <View>
        <Text>List of goal</Text>
      </View>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput : {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  }
  
});
