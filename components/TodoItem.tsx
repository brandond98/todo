import { View, Text, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export const TodoItem = () => {
  return (
    <View style={styles.todoItem}>
      <View style={styles.todoNumberContainer}>
        <Text style={styles.todoNumber}>Task 1</Text>
      </View>
      <View>
        <Text style={styles.title}>Title 1</Text>
        <Text>Lorem ispum Loremipsum</Text>
        <Text>Lorem ispum Loremipsum</Text>
      </View>
      <View style={styles.close}>
        <FontAwesome.Button
          name="close"
          color="black"
          backgroundColor="transparent"
        />
      </View>
    </View>
  );
};
