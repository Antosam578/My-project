const input = "JavaScript";
const frequency = {};

// Count frequencies (case-insensitive)
for (const char of input.toLowerCase()) {
  frequency[char] = (frequency[char] || 0) + 1;
}

// Print character frequencies
for (const [char, count] of Object.entries(frequency)) {
  console.log(`${char} - ${count}`);
}