import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useAppDispatch } from '../Redux/hooks';
import { add } from '../Redux/todo/todoSlice';
import styles from './styles';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [urgent, setUrgent] = useState(false);
  const dispatch = useAppDispatch();

  const addTask = () => {
    const todoItem = { id: 1, title, body, urgent };
    dispatch(add(todoItem));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.add}>Add a task</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.title} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Body</Text>
      <TextInput
        style={styles.body}
        value={body}
        onChangeText={setBody}
        multiline
      />
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          style={styles.checkbox}
          isChecked={urgent}
          iconStyle={{ borderRadius: 0, borderColor: 'black' }}
          onPress={() => setUrgent(!urgent)}
        />
        <Text style={styles.urgentText}>Urgent</Text>
      </View>
      <View style={styles.submit}>
        <Button title="Submit" color="white" onPress={() => addTask()} />
      </View>
    </View>
  );
};
