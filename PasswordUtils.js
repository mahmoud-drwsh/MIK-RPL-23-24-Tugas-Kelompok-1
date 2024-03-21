function checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars) {
  // Count by removing unwanted characters
  const lowercaseCount = password.replace(/[^a-z]/g, '').length;
  const uppercaseCount = password.replace(/[^A-Z]/g, '').length;
  const digitCount = password.replace(/[^0-9]/g, '').length;
  const otherCharsCount = password.length - lowercaseCount - uppercaseCount - digitCount;

  // Check if minimum requirements are met
  const metLowercase = lowercaseCount >= minLowercase;
  const metUppercase = uppercaseCount >= minUppercase;
  const metDigits = digitCount >= minDigits;
  const metOtherChars = otherCharsCount >= minOtherChars;

  // Calculate the number of met conditions
  const metConditions = (metLowercase ? 1 : 0) + (metUppercase ? 1 : 0) + (metDigits ? 1 : 0) + (metOtherChars ? 1 : 0);

  // Determine password strength based on met conditions
  let strength;
  if (metConditions > 2) {
    strength = 'STRONG';
  } else if (metConditions == 2) {
    strength = 'MEDIUM';
  } else {
    strength = 'WEAK';
  }

  return strength;
}

module.exports = { checkPassword };