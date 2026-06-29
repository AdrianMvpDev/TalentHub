import { Pressable } from 'react-native';
import { memo } from 'react';

import { Card } from '@shared/components';
import { JobHeader } from '../JobHeader';

import { JobCardProps } from './JobCard.types';

/**
 * JobCard
 *
 * Now acts as a wrapper for JobHeader inside a Card.
 * Focused only on interaction (onPress), not UI duplication.
 */
function JobCardComponent({ job, onPress }: JobCardProps) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <JobHeader job={job} />
      </Card>
    </Pressable>
  );
}

export const JobCard = memo(JobCardComponent);
