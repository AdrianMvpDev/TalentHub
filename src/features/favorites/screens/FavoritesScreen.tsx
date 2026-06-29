import { EmptyState, Header, Screen } from '@shared/components';

import { JobsList } from '@features/jobs/components';
import { useFavorites } from '../hooks';

import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@app/navigation';

/**
 * Favorites screen.
 *
 * Displays all jobs marked as favorite by the user.
 */
export function FavoritesScreen() {
  const navigation = useNavigation<RootNavigationProp>();

  const { favoriteJobs, hasFavorites } = useFavorites();

  if (!hasFavorites) {
    return (
      <Screen>
        <Header title="Favorites" />

        <EmptyState
          title="No favorite jobs"
          description="Jobs marked as favorite will appear here."
        />
      </Screen>
    );
  }

  return (
    <Screen padding={false}>
      <JobsList
        jobs={favoriteJobs}
        title="Favorites"
        subtitle="Your saved jobs"
        emptyTitle="No favorite jobs"
        emptyDescription="Jobs marked as favorite will appear here."
        onJobPress={(job) =>
          navigation.navigate('JobDetail', {
            jobId: job.id,
          })
        }
      />
    </Screen>
  );
}
