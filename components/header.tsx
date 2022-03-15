import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo.png';
import styles from './styles';

export const Header = () => {
  return (
    <SafeAreaView style={styles.mainHeader}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};
