import AsyncStorage from "@react-native-async-storage/async-storage";

export const loggedUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    return (value === undefined || value === 'null') ? null : value;
  } catch (e) {
    console.log("error reading value");
    return null;
  }
};

export const loginLocalUser = async (value) => {
  try {
    await AsyncStorage.setItem("user", value);
  } catch (e) {
    console.log("Error saving login");
  }
};

export const logoutLocalUser = async () => {
  try {
    await AsyncStorage.setItem("user", null);
  } catch (e) {
    console.log("Error saving logout");
  }
};
