
function ThemeSelector(theme) {
  let newTheme = theme.dark;
  switch (theme.currentThemeId) {
    case 1:
      newTheme = theme.light;
      break;
    case 2:
      newTheme = theme.dark;
      break;
    case 3:
      newTheme = theme.red;
      break;
    case 4:
      newTheme = theme.blue;
      break;
    default:
      newTheme = theme.dark;
      break;
  }

  return (
    newTheme
  );
}

export default ThemeSelector;
