import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 py-6">
        <Text className="text-sm font-semibold uppercase text-amber-500">
          Welcome back
        </Text>
        <Text className="mt-2 text-3xl font-bold text-slate-950">
          Find your next property
        </Text>
        <Text className="mt-3 text-base leading-7 text-slate-600">
          Browse listings, save favorites, and manage your profile from one
          clean Expo Router tab setup.
        </Text>
      </View>
    </SafeAreaView>
  );
}
