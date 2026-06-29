import { Linking, Share, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@shared/components';
import { useTheme } from '@shared/hooks';

import { JobActionsProps } from './JobActions.types';

/**
 * JobActions
 *
 * Floating action bar for job detail screen.
 *
 * UX Design:
 * - Primary action: "Apply now" (full width, high priority)
 * - Secondary action: Share (icon only, minimal visual weight)
 *
 * Behavior:
 * - Fixed at bottom of screen
 * - Always accessible for conversion optimization
 * - Minimal cognitive load
 */
export function JobActions({ job }: JobActionsProps) {
  const { theme } = useTheme();

  /**
   * Opens the external job application URL.
   *
   * This uses Linking API to redirect user outside the app.
   */
  const handleApply = () => {
    Linking.openURL(job.url);
  };

  /**
   * Shares job via native share dialog.
   *
   * Includes title + URL for better context sharing.
   */
  const handleShare = async () => {
    await Share.share({
      title: job.title,
      message: `${job.title}\n${job.url}`,
    });
  };

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,

        backgroundColor: theme.colors.background,

        borderTopWidth: 1,
        borderTopColor: theme.colors.border,

        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
      }}
    >
      {/* =========================
          SHARE ACTION (SECONDARY)
          =========================
          Minimal icon button to reduce visual weight.
          Only communicates "share intent".
      */}
      <Pressable
        onPress={handleShare}
        hitSlop={10}
        style={{
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons name="share-outline" size={22} color={theme.colors.textSecondary} />
      </Pressable>

      {/* =========================
          APPLY BUTTON (PRIMARY CTA)
          =========================
          Full width button that drives conversion.
          Takes most of the available space.
      */}
      <View style={{ flex: 1 }}>
        <Button title="Apply now" onPress={handleApply} />
      </View>
    </View>
  );
}
