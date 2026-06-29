import { Pressable, View } from 'react-native';
import { Image } from 'expo-image';

import { Card, Text, Badge } from '@shared/components';

import { useTheme } from '@shared/hooks';

import { JobCardProps } from './JobCard.types';

/**
 * Displays a job card.
 */
export function JobCard({ job, onPress }: JobCardProps) {
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

            <View
              style={{
                marginTop: theme.spacing.sm,
              }}
            >
              <Badge label={job.job_type} />
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}
