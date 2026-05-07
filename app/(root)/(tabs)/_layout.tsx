import { NativeTabs, Icon, Label, VectorIcon } from "expo-router/unstable-native-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" androidSrc={<VectorIcon family={Ionicons} name="home" />} />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass" androidSrc={<VectorIcon family={Ionicons} name="search" />} />
        <Label>Search</Label>
      </NativeTabs.Trigger>

        <NativeTabs.Trigger name="create">
          <Icon sf="plus.circle.fill" androidSrc={<VectorIcon family={Ionicons} name="add-circle" />} />
          <Label>Add Property</Label>
        </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <Icon sf="heart.fill" androidSrc={<VectorIcon family={Ionicons} name="heart" />} />
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill" androidSrc={<VectorIcon family={Ionicons} name="person" />} />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}