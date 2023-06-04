// Function to click the Bet button
function clickBetButton() {
    const betButton = document.querySelector('[data-test="bet-button"]');
    betButton.click();
  }
  
  // Function to wait for the Bet button to become enabled again
  function waitForBetButton() {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutationsList) => {
        const betButton = document.querySelector('[data-test="bet-button"]');
        if (!betButton.disabled) {
          observer.disconnect();
          resolve();
        }
      });
  
      const betButton = document.querySelector('[data-test="bet-button"]');
      observer.observe(betButton, { attributes: true });
    });
  }
  
  // Function to calculate the top frequent elements from an array
  function getTopFrequentElements(arr, numElements) {
    const frequencyMap = new Map();
  
    arr.forEach((item) => {
      const count = frequencyMap.get(item) || 0;
      frequencyMap.set(item, count + 1);
    });
  
    const sortedFrequencies = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
  
    return sortedFrequencies.slice(0, numElements).map((entry) => ({ number: entry[0], frequency: entry[1] }));
  }
  
  // Number of bet loops to run
  const numBetLoops = 100;
  
  // Array to store the numbers from each loop
  const numbersArray = [];
  
  // Main game loop
  (async function loop() {
    for (let i = 1; i <= numBetLoops; i++) {
      console.log(`Starting Bet Loop ${i}`);
  
      clickBetButton();
      await waitForBetButton();
  
      // Find the container div using the data-test attribute
      const container = document.querySelector('[data-test="keno-tiles"]');
  
      // Find all the buttons within the container
      const buttons = container.querySelectorAll('button.tile:not(.selected):not(.hidden)');
  
      // Retrieve the data-index property from each button, add 1, and store it in the numbersArray
      buttons.forEach((button) => {
        const dataIndex = parseInt(button.getAttribute('data-index'), 10);
        numbersArray.push(dataIndex + 1);
      });
  
      console.log(`Ending Bet Loop ${i}`);
    }
  
    // Calculate the top 10 most frequent numbers from the accumulated numbersArray
    const topFrequentNumbers = getTopFrequentElements(numbersArray, 10);
  
    // Create a frequency table as a JSON object
    const frequencyTable = {};
    topFrequentNumbers.forEach((entry) => {
      frequencyTable[entry.number] = entry.frequency;
    });
  
    // Display the top 10 most frequent numbers in descending order
    console.log('Top 10 most frequent numbers (Descending order):');
    console.log(frequencyTable);
  
    // Sort the frequency table by frequency in descending order
    const sortedFrequencyTable = Object.entries(frequencyTable).sort((a, b) => b[1] - a[1]);
  
    // Display the frequency table in descending order
    console.log('Frequency table (Descending order):');
    sortedFrequencyTable.forEach(([number, frequency]) => {
      console.log(`${number} | ${frequency} times`);
    });
  })();
  