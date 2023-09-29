import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import localeEs from "./int/es.json";
import localeEn from "./int/en.json";
import Login from "./paginas/Login";
import Home from "./paginas/HomePage";
function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [localeMsgs, setLocaleMsgs] = useState({});

  useEffect(() => {
    if (locale === "en") setLocaleMsgs(localeEn);
    else setLocaleMsgs(localeEs);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={localeMsgs}>
      <Router>
        <Routes>
          <Route exact index element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
