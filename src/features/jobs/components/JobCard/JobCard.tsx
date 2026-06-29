import { Pressable, View } from 'react-native';
import { Image } from 'expo-image';

import { Card, Text, Badge } from '@shared/components';

import { useTheme } from '@shared/hooks';

import { JobCardProps } from './JobCard.types';
import { memo } from 'react';
import { formatDate, formatJobType } from '@shared/utils';

/**
 * Displays a job card.
 */
function JobCardComponent({ job, onPress }: JobCardProps) {
  const { theme } = useTheme();

  return (
    <Pressable onPress={onPress}>
      <Card>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
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

          <View
            style={{
              flex: 1,
              marginLeft: theme.spacing.md,
            }}
          >
            <Text variant="subtitle">{job.title}</Text>

            <Text variant="body" color={theme.colors.textSecondary}>
              {job.company_name}
            </Text>

            <Text variant="caption" color={theme.colors.textSecondary}>
              {job.candidate_required_location}
            </Text>

            <Text variant="caption" color={theme.colors.textSecondary}>
              {formatDate(job.publication_date)}
            </Text>

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
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

export const JobCard = memo(JobCardComponent);
