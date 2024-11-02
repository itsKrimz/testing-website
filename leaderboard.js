// New JavaScript code to implement a functional leaderboard

document.addEventListener("DOMContentLoaded", () => {
  let leaderboard = [];

  // Function to add a new score to the leaderboard
  function addToLeaderboard(player, score) {
    leaderboard.push({ player, score });
    leaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard by score in descending order
    updateLeaderboardDisplay();
  }

  // Function to update the leaderboard display
  function updateLeaderboardDisplay() {
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = leaderboard
      .slice(0, 10) // Display top 10 players
      .map((entry, index) => `<li>${index + 1}. ${entry.player}: $${entry.score.toFixed(2)}</li>`) // Format leaderboard entries
      .join("");
  }

  // Mock data to demonstrate functionality
  addToLeaderboard("Player1", 15000);
  addToLeaderboard("Player2", 12000);
  addToLeaderboard("Player3", 18000);
  addToLeaderboard("Player4", 8000);
  addToLeaderboard("Player5", 21000);

  // Example function to add a random player (for demonstration purposes)
  document.getElementById("add-random-player").addEventListener("click", () => {
    const randomScore = Math.floor(Math.random() * 20000) + 5000;
    addToLeaderboard(`Player${leaderboard.length + 1}`, randomScore);
  });

  // Initialize leaderboard display
  updateLeaderboardDisplay();

  // Mock implementation for updating leaderboard based on player's balance (replace with actual logic as needed)
  function updatePlayerLeaderboard() {
    const playerName = "CurrentPlayer";
    const playerScore = balance; // Replace with the actual player's balance
    const existingEntry = leaderboard.find((entry) => entry.player === playerName);
    if (existingEntry) {
      existingEntry.score = playerScore;
    } else {
      addToLeaderboard(playerName, playerScore);
    }
    updateLeaderboardDisplay();
  }

  // Call this function whenever the balance changes (e.g., after buying/selling coins)
  updatePlayerLeaderboard();
});

// HTML code to integrate the leaderboard
const leaderboardHtml = `
  <div id="leaderboard">
    <h2>Leaderboard</h2>
    <ul id="leaderboard-list">
      <!-- Leaderboard players will populate here -->
    </ul>
    <button id="add-random-player">Add Random Player</button>
  </div>
`;

document.querySelector("body").insertAdjacentHTML("beforeend", leaderboardHtml);
