const themeMap = {
  dark: "light",
  light: "earthy",
  earthy: "dark",
};

const theme =
  sessionStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), sessionStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = sessionStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  sessionStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
