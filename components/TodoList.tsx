import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProps } from '../types/RootStackParams';
import styles from './styles';
import { TodoItem } from './TodoItem';

export const TodoList = ({ navigation }: NavigationProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To Do List</Text>
      <View style={styles.colourKeyContainer}>
        <View style={styles.colourKey} />
        <Text style={styles.urgent}>Urgent</Text>
      </View>
      <TodoItem />
      <View style={styles.button}>
        <Button
          title="New Task"
          color="white"
          onPress={() => navigation.navigate('form')}
        />
      </View>
    </SafeAreaView>
  );
};
