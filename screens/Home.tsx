import { Header, TodoList } from '../components';
import { NavigationProps } from '../types/RootStackParams';

export const Home = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Header />
      <TodoList navigation={navigation} />
    </>
  );
};
