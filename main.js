const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]:;<>?';

// Function to generate a random character from the chosen character set
function getRandomCharacter(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// Function to generate a password based on user selections
function generatePassword() {
  const length = document.getElementById('length').value;
  let characters = '';

  // Check which character types are included
  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }
  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
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

// Event listener for the reset button (optional)
// You can add similar logic to clear the password field and reset checkboxes

// Bonus: Event listener for the copy button (optional)
// You can implement functionality to copy the generated password to clipboard
