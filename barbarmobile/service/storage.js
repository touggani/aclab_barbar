import * as SecureStore from "expo-secure-store";

export const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
};

export const remove = async (key) => {
    await SecureStore.deleteItemAsync(key);
}

export const getStorageData = async (key) => {
    await SecureStore.getItemAsync(key)
}