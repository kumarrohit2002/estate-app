import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const highlights = [
  {
    title: "Expo Router ready",
    body: "File-based routing is already wired for fast screen creation.",
  },
  {
    title: "Tailwind styling",
    body: "NativeWind lets you write clean utility classes in React Native.",
  },
  {
    title: "TypeScript first",
    body: "Strict typing is enabled so the template scales with confidence.",
  },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <StatusBar style="dark" />

      <View className="flex-1 px-6 py-5">
        <View className="mb-7 flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-semibold uppercase tracking-wide text-[#F59E0B]">
              Starter Template
            </Text>
            <Text className="mt-1 text-2xl font-bold text-slate-950">
              Expo + Tailwind
            </Text>
          </View>

          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#0E4D92]">
            <Text className="text-lg font-bold text-white">RN</Text>
          </View>
        </View>

        <View className="rounded-[28px] bg-slate-950 px-6 py-7">
          <Text className="text-4xl font-bold leading-tight text-white">
            Build clean mobile apps faster.
          </Text>
          <Text className="mt-4 text-base leading-7 text-slate-300">
            A polished React Native Expo setup with NativeWind, routing, safe
            areas, and TypeScript ready from the first screen.
          </Text>

          <View className="mt-6 flex-row gap-3">
            <Pressable className="rounded-full bg-[#F59E0B] px-5 py-3">
              <Text className="font-bold text-slate-950">Start building</Text>
            </Pressable>
            <Pressable className="rounded-full border border-slate-700 px-5 py-3">
              <Text className="font-semibold text-white">View docs</Text>
            </Pressable>
          </View>
        </View>

        <View className="mt-7 gap-4">
          {highlights.map((item, index) => (
            <View
              className="rounded-2xl border border-slate-200 bg-white p-5"
              key={item.title}
            >
              <View className="mb-3 h-9 w-9 items-center justify-center rounded-full bg-[#E0F2FE]">
                <Text className="font-bold text-[#0E4D92]">0{index + 1}</Text>
              </View>
              <Text className="text-lg font-bold text-slate-950">
                {item.title}
              </Text>
              <Text className="mt-2 text-sm leading-6 text-slate-600">
                {item.body}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-auto pt-6">
          <Text className="text-center text-sm font-medium text-slate-500">
            Edit app/index.tsx and make it yours.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
