const STORAGE_KEY = "minimal-habit-tracker";
const TOTAL_DAYS = 7;

const habitNameInput = document.querySelector("#habitName");
const todayToggle = document.querySelector("#todayToggle");
const streakLabel = document.querySelector("#streak");
const daysContainer = document.querySelector("#days");

const getToday = () => new Date();

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDateLabel = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

const loadState = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { habitName: "", days: {} };
    return JSON.parse(raw);
  } catch {
    return { habitName: "", days: {} };
  }
};

const saveState = (state) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const getLastDays = (count) => {
  const today = getToday();
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    return date;
  });
};

const calculateStreak = (state) => {
  const days = getLastDays(TOTAL_DAYS);
  let streak = 0;
  for (const date of days) {
    const key = formatDateKey(date);
    if (state.days[key]) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
};

const renderDays = (state) => {
  daysContainer.innerHTML = "";
  const days = getLastDays(TOTAL_DAYS);

  days.forEach((date) => {
    const key = formatDateKey(date);
    const row = document.createElement("div");
    row.className = "day";

    const label = document.createElement("div");
    label.className = "day__date";
    label.textContent = formatDateLabel(date);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.days[key]);
    checkbox.addEventListener("change", () => {
      state.days[key] = checkbox.checked;
      saveState(state);
      syncUI(state);
    });

    row.appendChild(label);
    row.appendChild(checkbox);
    daysContainer.appendChild(row);
  });
};

const syncUI = (state) => {
  habitNameInput.value = state.habitName || "";
  const todayKey = formatDateKey(getToday());
  todayToggle.checked = Boolean(state.days[todayKey]);

  const streak = calculateStreak(state);
  streakLabel.textContent = `${streak} day${streak === 1 ? "" : "s"}`;
  renderDays(state);
};

const init = () => {
  const state = loadState();
  syncUI(state);

  habitNameInput.addEventListener("input", (event) => {
    state.habitName = event.target.value.trim();
    saveState(state);
  });

  todayToggle.addEventListener("change", () => {
    const todayKey = formatDateKey(getToday());
    state.days[todayKey] = todayToggle.checked;
    saveState(state);
    syncUI(state);
  });
};

init();
