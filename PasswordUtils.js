function checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars) {
  const charTypes = [
    { regex: /[a-z]/g, minCount: minLowercase },
    { regex: /[A-Z]/g, minCount: minUppercase },
    { regex: /[0-9]/g, minCount: minDigits },
    { regex: /[^a-zA-Z0-9]/g, minCount: minOtherChars }
  ];

  const counts = charTypes.map(charType => {
    const matches = password.match(charType.regex) || [];
    return matches.length >= charType.minCount ? 1 : 0;
  });

  const metConditions = counts.reduce((sum, minCount) => sum + minCount, 0);

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
