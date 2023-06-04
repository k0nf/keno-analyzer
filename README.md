# 🎲 Stake Keno Game Number Analyzer

This script allows you to analyze the numbers drawn in the Stake Keno game by running multiple bet loops. It retrieves the numbers from the game interface and calculates the top 10 most frequent numbers.

Please note that this script is specifically designed for the Stake Keno game available at [https://stake.com/casino/games/keno](https://stake.com/casino/games/keno). It may not work on other Keno game websites. Additionally, it is provided as-is and should be used responsibly. Gambling involves risk, and the outcome of the game is random. By using this script, you acknowledge that you understand and accept the risks involved.

## ✅ Prerequisites

To use this script, you need the following:

- A web browser with JavaScript support (e.g., Google Chrome)
- Access to the Stake Keno game website at [https://stake.com/casino/games/keno](https://stake.com/casino/games/keno)

## 🚀 Usage

1. Open the Stake Keno game website at [https://stake.com/casino/games/keno](https://stake.com/casino/games/keno) in your web browser.
2. Before starting the script, ensure that you have either manually selected 10 random tiles or clicked the "Auto Pick" option to let the game choose the tiles for you.
3. Open the developer console by right-clicking on the page and selecting "Inspect" or pressing `Ctrl + Shift + J` (or `Cmd + Option + J` on macOS).
4. In the developer console, navigate to the "Console" tab.
5. Copy the entire code from the `keno-analyzer.js` file in this repository.
6. Paste the code into the developer console and press Enter to run it.

The script will start running the bet loops automatically. It will click the "Bet" button, wait for it to become enabled again, retrieve the drawn numbers, and accumulate them for analysis. After completing the specified number of bet loops, the script will display the top 10 most frequent numbers and a frequency table in the console.

**NOTE:** Before using real bets, it is recommended to test the script with a 0 bet to ensure it functions correctly for the Stake Keno game.

## ⚠️ Disclaimer

This script is provided for educational and entertainment purposes only. The author takes no responsibility for any losses or damages incurred as a result of using this script. Gambling involves risk, and the outcome of the game is random. By using this script, you acknowledge that you understand and accept the risks involved. Use this script responsibly and at your own risk.
