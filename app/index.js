import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { getLoginState } from "../utils/auth";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    const loggedIn = await getLoginState();
    setIsLoggedIn(loggedIn);
  };

  if (isLoggedIn === null) return null;
  
  return <Redirect href={isLoggedIn ? "/(tabs)/" : "/login"} />;
}
