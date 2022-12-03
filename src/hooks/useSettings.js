const initialSettings = {
  theme: 'default',
  timers: {
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 15,
  },
};

const useSettings = () => {
  const savedData = localStorage.getItem('focus_settings');

  if (!savedData) {
    localStorage.setItem('focus_settings', JSON.stringify(initialSettings));
    return initialSettings;
  }

  const data = JSON.parse(savedData);
  return data;
};

export default useSettings;
