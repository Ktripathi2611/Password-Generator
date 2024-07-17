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
  const length = document.getElementById('length').value;
  let characters = '';

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

  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(characters);
  }

  document.getElementById('password').value = password;
}

// Event listener for the generate button
const generateEl = document.getElementById('generate');
generateEl.addEventListener('click', generatePassword);

// Optional: Event listener for the reset button (assuming a button with ID "reset" exists)
const resetEl = document.getElementById('reset');
if (resetEl) {
  resetEl.addEventListener('click', function() {
    document.getElementById('password').value = '';
    document.getElementById('length').value = 10; // Reset length to default
    lowercaseEl.checked = true; // Reset checkboxes (optional)
    uppercaseEl.checked = true;
    numbersEl.checked = true;
    symbolsEl.checked = false; // Optional default for symbols
  });
}

// Optional: Event listener for the copy button (assuming a button with ID "copy" exists)
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
    }, (err) => {
      alert("Failed to copy password: " + err);
    });
  });
}
