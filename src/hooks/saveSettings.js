const saveSettings = (data) => {
  const settings = JSON.stringify(data);
  localStorage.setItem('focus_settings', settings);
};

export default saveSettings;
