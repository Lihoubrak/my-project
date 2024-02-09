import { useState, useEffect } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "kh" : "en"));
    window.location.reload();
  };

  useEffect(() => {
    // Update language in local storage
    localStorage.setItem("language", language);
  }, [language]);

  return { language, toggleLanguage };
};

export default useLanguage;
