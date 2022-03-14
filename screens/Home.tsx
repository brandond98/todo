import { TodoList } from '../components';
import { NavigationProps } from '../types/RootStackParams';

export const Home = ({ navigation }: NavigationProps) => {
  return <TodoList navigation={navigation} />;
};
