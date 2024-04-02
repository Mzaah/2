function calculateRoutine() {
  const wakeUpTimeInput = document.getElementById("wakeUpTime");
  const wakeUpTime = wakeUpTimeInput.value;

  // Clear previous routine
  const routineList = document.getElementById("routineList");
  routineList.innerHTML = "";

  // Calculate routine based on wake-up time
  const activities = [
    { time: "0:00", name: "Wake up" },
    { time: "0:00", name: "Morning Hydration" },
    { time: "0:00", name: "Yoga Nidra" },
    { time: "0:45", name: "Sun Exposure" },
    { time: "1:00", name: "Cold Exposure" },
    { time: "1:30", name: "Training" },
    { time: "4:00", name: "Morning Caffeine" },
    { time: "7:00", name: "First Meal" },
    { time: "9:00", name: "Yoga Nidra" },
    { time: "10:30", name: "Evening Cardio" },
    { time: "12:00", name: "Evening Meal" },
    { time: "13:00", name: "Dims Lighting" },
    { time: "13:30", name: "Reads" },
    { time: "14:00", name: "Sleep" }
  ];

  const wakeUp = convertTimeToMinutes(wakeUpTime);

  activities.forEach(activity => {
    const activityTime = addMinutes(wakeUp, convertTimeToMinutes(activity.time));
    const formattedTime = convertMinutesToTime(activityTime);

    const listItem = document.createElement("li");
    listItem.textContent = `${formattedTime} - ${activity.name}`;
    routineList.appendChild(listItem);
  });
}

// Function to convert time in HH:MM format to minutes
function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// Function to add minutes to a given time in minutes
function addMinutes(baseTime, minutes) {
  return (baseTime + minutes) % (24 * 60);
}

// Function to convert minutes to time in HH:MM format
function convertMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

// Function to handle keydown event and trigger routine calculation on Enter key press
function handleKeyDown(event) {
  if (event.keyCode === 13) {
    calculateRoutine();
  }
}

// Attach the handleKeyDown function to the keydown event of the wakeUpTime input
const wakeUpTimeInput = document.getElementById("wakeUpTime");
wakeUpTimeInput.addEventListener("keydown", handleKeyDown);
