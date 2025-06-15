import React, { createContext, useState, useContext } from 'react';

// ১. Context তৈরি করো
const ThemeContext = createContext();

// ২. Provider component বানাও
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ৩. যেকোনো component এ useContext দিয়ে data নাও
const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};

// ৪. App এ Provider wrap করো
const App = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};

export default App;
