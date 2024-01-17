import  {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (

        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Enter your goal' 
            onChangeText={(e) => goalInputHandler(e)}
            value={enteredGoalText}
             />
            <Button onPress={addGoalHandler} title='Add'/>
        </View>
    )
};

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
    textInput : {
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 8,
        padding: 8,
      },
});