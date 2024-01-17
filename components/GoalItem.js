import {StyleSheet, View, Text, Pressable} from 'react-native';


function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
        
    );
};

export default GoalItem;

const styles =  StyleSheet.create({
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