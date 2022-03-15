import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch } from '../Redux/hooks';
import { remove } from '../Redux/todo/todoSlice';
import { TodoObject } from '../types/TodoObject';
import styles from './styles';

type TodoItemProps = {
  todo: TodoObject;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.todoItem}>
      <View style={styles.todoNumberContainer}>
        <Text style={styles.todoNumber}>Task {todo.id}</Text>
      </View>
      <View>
        <Text style={styles.title}>{todo.title}</Text>
        <Text>{todo.body}</Text>
      </View>
      <View style={styles.close}>
        <FontAwesome.Button
          name="close"
          color="black"
          backgroundColor="transparent"
          onPress={() => dispatch(remove(todo))}
        />
      </View>
    </View>
  );
};
