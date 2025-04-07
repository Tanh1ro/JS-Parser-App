// Asynchronous JavaScript Sample

// Simple Promise
function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Promise chaining
const promiseChain = delayedMessage("First", 1000)
  .then(result => {
    console.log(result);
    return delayedMessage("Second", 500);
  })
  .then(result => {
    console.log(result);
    return "Done with promises";
  });

// Async/await
async function processSteps() {
  try {
    const step1 = await delayedMessage("Step 1 complete", 800);
    console.log(step1);
    
    const step2 = await delayedMessage("Step 2 complete", 600);
    console.log(step2);
    
    return "All steps completed";
  } catch (error) {
    console.error("Error:", error);
    return "Process failed";
  }
}

// Promise.all
const concurrentPromises = Promise.all([
  delayedMessage("Task A", 1200),
  delayedMessage("Task B", 800),
  delayedMessage("Task C", 1500)
]);

// Promise.race
const racePromises = Promise.race([
  delayedMessage("Fast task", 500),
  delayedMessage("Medium task", 1000),
  delayedMessage("Slow task", 1500)
]);

// Fetch API simulation (won't actually run in the parser)
function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Jane Smith",
        email: "jane@example.com"
      });
    }, 1000);
  });
}

async function getUserDetails(userId) {
  const userData = await fetchUserData(userId);
  return `User: ${userData.name} (${userData.email})`;
}

// Note: The output of these async functions won't be immediately visible
// in the parser's output since they complete after the initial evaluation.
// You would typically see the pending Promise objects.

// For testing purposes
"Async code sample loaded"; 