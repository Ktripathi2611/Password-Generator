// Character sets for password generation
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]:;<>?';

// Function to generate a random character from a character set
function getRandomCharacter(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// Function to generate a password based on user selections
function generatePassword() {
  const length = parseInt(document.getElementById('length').value, 10);
  let characters = '';

  // Get checkbox elements
  const lowercaseEl = document.getElementById('lowercase');
  const uppercaseEl = document.getElementById('uppercase');
  const numbersEl = document.getElementById('numbers');
  const symbolsEl = document.getElementById('symbols');

  // Check which character types are included
  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
  }
  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }
  if (numbersEl.checked) {
    characters += numbers;
  }
  if (symbolsEl.checked) {
    characters += symbols;
  }

  // Ensure at least one character type is selected
  if (characters === '') {
    alert("Please select at least one character type!");
    return; // Exit function if no types are chosen
  }

  // Ensure length is a valid number
  if (isNaN(length) || length < 8 || length > 32) {
    alert("Please enter a valid length between 8 and 32.");
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(characters);
  }

  document.getElementById('password').value = password;
}

// Event listener for the generate button
const generateEl = document.getElementById('generate');
generateEl.addEventListener('click', generatePassword);

// Event listener for the reset button
const resetEl = document.getElementById('reset');
if (resetEl) {
  resetEl.addEventListener('click', function() {
    document.getElementById('password').value = '';
    document.getElementById('length').value = 10; // Reset length to default
    document.getElementById('lowercase').checked = true; // Reset checkboxes
    document.getElementById('uppercase').checked = true;
    document.getElementById('numbers').checked = true;
    document.getElementById('symbols').checked = false; // Optional default for symbols
  });
}

// Event listener for the copy button
const copyEl = document.getElementById('copy');
if (copyEl) {
  copyEl.addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (!navigator.clipboard) {
      alert("Copying to clipboard is not supported in your browser.");
      return;
    }
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch((err) => {
      alert("Failed to copy password: " + err);
    });
  });
}
