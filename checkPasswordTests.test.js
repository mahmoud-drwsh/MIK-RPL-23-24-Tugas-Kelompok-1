const { checkPassword } = require('./PasswordUtils');

describe('Password Strength - Minimum Character Requirements', () => {
  const minLowercase = 2;
  const minUppercase = 2;
  const minDigits = 2;
  const minOtherChars = 2;

  it('should be STRONG with all requirements met', () => {
    const password = 'abcDEF123!@#';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('STRONG');
  });

  it('should be STRONG with missing minimum lowercase', () => {
    const password = 'AA11!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('STRONG');
  });

  it('should be STRONG with missing minimum uppercase', () => {
    const password = 'aa11!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('STRONG');
  });

  it('should be STRONG with missing minimum digits', () => {
    const password = 'aaAA!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('STRONG');
  });

  it('should be STRONG with missing minimum other characters', () => {
    const password = 'aaAA11';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('STRONG');
  });

  it('should be MEDIUM with missing minimum lowercase and uppercase', () => {
    const password = '11!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });

  it('should be MEDIUM with missing minimum lowercase and digits', () => {
    const password = 'AA!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });

  it('should be MEDIUM with missing minimum lowercase and other characters', () => {
    const password = 'AA11';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });

  it('should be MEDIUM with missing minimum uppercase and digits', () => {
    const password = 'aa!!';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });

  it('should be MEDIUM with missing minimum uppercase and other characters', () => {
    const password = 'aa11';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });

  it('should be MEDIUM with missing minimum digits and other characters', () => {
    const password = 'aaAA';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('MEDIUM');
  });
  
  it('should be WEAK with missing minimum lowercase, uppercase, and digits', () => {
    const password = '!@';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('WEAK');
  });

  it('should be WEAK with missing minimum lowercase, uppercase, and other characters', () => {
    const password = '11';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('WEAK');
  });

  it('should be WEAK with missing minimum lowercase, digits, and other characters', () => {
    const password = 'AA';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('WEAK');
  });

  it('should be WEAK with missing minimum uppercase, digits, and other characters', () => {
    const password = 'aa';
    const strength = checkPassword(password, minLowercase, minUppercase, minDigits, minOtherChars);
    expect(strength).toBe('WEAK');
  });
});
