import { ThemeProvider } from '@app/providers';
import { RootNavigator } from '@app/navigation';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs([
  'Support for defaultProps',
]);

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
