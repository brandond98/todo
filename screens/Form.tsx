import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { add } from '../Redux/todo/todoSlice';
import styles from './styles';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [urgent, setUrgent] = useState(false);
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoList);

  const addTask = async () => {
    // Create todo obj
    const { length } = todoList;
    const id = length ? todoList[length - 1].id + 1 : 1;
    const todoItem = { id, title, body, urgent };
    // Update state
    dispatch(add(todoItem));
    // Check if todos in storage
    const previous = await AsyncStorage.getItem('todoList');
    const updated = previous
      ? JSON.stringify([...JSON.parse(previous), todoItem])
      : JSON.stringify([todoItem]);
    // Update storage
    await AsyncStorage.setItem('todoList', updated);
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
