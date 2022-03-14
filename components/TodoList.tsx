import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To Do List</Text>
      <View style={styles.colourKeyContainer}>
        <View style={styles.colourKey} />
        <Text style={styles.urgent}>Urgent</Text>
      </View>
      <TodoItem />
    </SafeAreaView>
  );
};
