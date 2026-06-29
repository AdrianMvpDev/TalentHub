import { EmptyState, Header, Screen, Text } from '@shared/components';

import { JobDescription } from '../components';
import { JobActions } from '@features/jobs/components/JobActions';

import { useJobDetail } from '../hooks';
import { ScrollView } from 'react-native-gesture-handler';
import { JobHeader } from '@features/jobs/components/JobHeader';

/**
 * Job details screen.
 */
export function JobDetailScreen() {
  const { job } = useJobDetail();

  if (!job) {
    return (
      <Screen>
        <Header title="Job Detail" backButton />

        <EmptyState
          title="Job not found"
          description="The selected job is no longer available."
        />
      </Screen>
    );
  }

  return (
    <Screen scrollable={false}>
      <Header title="Job Detail" backButton />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 65,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
      >
        <JobHeader job={job} showSalary showBadges />

        <Text variant="subtitle">Job Description</Text>

        <JobDescription html={job.description} />
      </ScrollView>

      <JobActions job={job} />
    </Screen>
  );
}
