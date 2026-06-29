import { View } from 'react-native';
import { Image } from 'expo-image';

import { Text, Badge } from '@shared/components';
import { useTheme } from '@shared/hooks';

import { formatDate, formatJobType } from '@shared/utils';
import { Job } from '@shared/types';
import { FavoriteButton } from '@features/favorites/components/FavoriteButton/FavoriteButton';

/**
 * JobHeader
 *
 * Reusable presentation component that displays the core job information.
 *
 * This component is used by:
 * - JobCard (list view)
 * - JobInfo (detail view)
 *
 * It avoids duplication of UI logic and keeps UI consistent across the app.
 */
type Props = {
  job: Job;

  /**
   * Optional config to control what is shown depending on context.
   */
  showSalary?: boolean;
  showBadges?: boolean;
};

export function JobHeader({ job, showSalary = true, showBadges = true }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: theme.spacing.md,
      }}
    >
      {/* Logo */}
      <Image
        source={job.company_logo || undefined}
        contentFit="contain"
        transition={200}
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
        }}
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: theme.spacing.sm,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text variant="subtitle" numberOfLines={2} ellipsizeMode="tail">
              {job.title}
            </Text>
          </View>

          <FavoriteButton jobId={job.id} />
        </View>

        <Text variant="body" color={theme.colors.textSecondary}>
          {job.company_name}
        </Text>

        <Text variant="caption" color={theme.colors.textSecondary}>
          {job.candidate_required_location}
        </Text>

        <Text variant="caption" color={theme.colors.textSecondary}>
          {formatDate(job.publication_date)}
        </Text>

        {/* Salary (optional) */}
        {showSalary && job.salary && (
          <Text variant="caption" color={theme.colors.textSecondary}>
            Salary: {job.salary}
          </Text>
        )}

        {/* Badges */}
        {showBadges && (
          <View
            style={{
              flexDirection: 'row',
              gap: theme.spacing.sm,
              marginTop: theme.spacing.sm,
            }}
          >
            <Badge label={formatJobType(job.job_type)} />
            <Badge label={job.category} />
          </View>
        )}
      </View>
    </View>
  );
}
