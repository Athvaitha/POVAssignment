import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'user_logged_in';
const USER_EMAIL_KEY = 'user_email';

export const setLoginState = async (isLoggedIn, email = null) => {
  try {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(isLoggedIn));
    if (email) await AsyncStorage.setItem(USER_EMAIL_KEY, email);
  } catch (error) {
    console.error('Error saving login state:', error);
  }
};

export const getLoginState = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_KEY);
    return value ? JSON.parse(value) : false;
  } catch (error) {
    console.error('Error getting login state:', error);
    return false;
  }
};

export const getUserEmail = async () => {
  try {
    return await AsyncStorage.getItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error('Error getting user email:', error);
    return null;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_KEY);
    await AsyncStorage.removeItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error('Error during logout:', error);
  }
};