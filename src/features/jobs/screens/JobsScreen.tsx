import { Header, Screen, SearchInput } from '@shared/components';

/**
 * Jobs listing screen.
 */
export function JobsScreen() {
  return (
    <Screen>
      <Header title="Empleos" subtitle="Encuentra tu próxima oportunidad" />

      <SearchInput />
    </Screen>
  );
}
