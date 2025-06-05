import React, { useEffect, useState } from 'react';

const Customization = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('ems_theme') || 'light';
    const savedFont = localStorage.getItem('ems_font') || 'medium';
    const savedLang = localStorage.getItem('ems_lang') || 'en';

    setTheme(savedTheme);
    setFontSize(savedFont);
    setLanguage(savedLang);
    applyCustomization(savedTheme, savedFont);
  }, []);

  const applyCustomization = (themeValue, fontValue) => {
    document.body.style.backgroundColor = themeValue === 'dark' ? '#1f2937' : '#ffffff';
    document.body.style.color = themeValue === 'dark' ? '#ffffff' : '#000000';

    if (fontValue === 'small') document.body.style.fontSize = '14px';
    else if (fontValue === 'large') document.body.style.fontSize = '18px';
    else document.body.style.fontSize = '16px';
  };

  const handleThemeChange = (e) => {
    const value = e.target.value;
    setTheme(value);
    localStorage.setItem('ems_theme', value);
    applyCustomization(value, fontSize);
  };

  const handleFontChange = (e) => {
    const value = e.target.value;
    setFontSize(value);
    localStorage.setItem('ems_font', value);
    applyCustomization(theme, value);
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage(value);
    localStorage.setItem('ems_lang', value);
  };

  return (
    <div style={container}>
      <h2>🎨 Customize Your Experience</h2>

      <div style={section}>
        <label>Theme:</label>
        <select value={theme} onChange={handleThemeChange} style={selectStyle}>
          <option value="light">🌞 Light</option>
          <option value="dark">🌚 Dark</option>
        </select>
      </div>

      <div style={section}>
        <label>Font Size:</label>
        <select value={fontSize} onChange={handleFontChange} style={selectStyle}>
          <option value="small">Small</option>
          <option value="medium">Medium (default)</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div style={section}>
        <label>Language:</label>
        <select value={language} onChange={handleLanguageChange} style={selectStyle}>
          <option value="en">English</option>
          <option value="bs">Bosanski</option>
        </select>
      </div>
    </div>
  );
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#f3f4f6',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
};

const section = {
  marginBottom: '1.5rem'
};

const selectStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  fontSize: '1rem',
  marginTop: '0.5rem'
};

export default Customization;
