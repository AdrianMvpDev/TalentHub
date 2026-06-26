import { ThemeProvider } from '@app/providers';
import { RootNavigator } from '@app/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
