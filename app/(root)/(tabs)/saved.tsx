import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 py-6">
        <Text className="text-3xl font-bold text-slate-950">Saved</Text>
        <Text className="mt-3 text-base leading-7 text-slate-600">
          Your favorite properties will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
