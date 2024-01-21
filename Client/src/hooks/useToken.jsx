import { useState, useEffect } from "react";

function useToken() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    // const decodedToken = jwtDecode(storedToken);
    // console.log(decodedToken);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (userToken, callback) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    console.log("Token sauvegardé :", localStorage.getItem("token"));
    setToken(userToken);
    if (callback) {
      callback();
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, saveToken, deleteToken };
}

export default useToken;
