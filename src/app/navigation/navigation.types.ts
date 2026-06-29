import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainTabParamList = {
  Jobs: undefined;
  Favorites: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;

  JobDetail: {
    jobId: number;
  };
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
