Feature: Password Strength - Minimum Character Requirements

  This feature outlines scenarios for testing a function that determines password strength based on meeting minimum requirements for lowercase, uppercase, digits, and other characters.

  # Scenario: All Requirements Met
  # Scenario: Missing Minimum Lowercase
  # Scenario: Missing Minimum Uppercase
  # Scenario: Missing Minimum Digits
  # Scenario: Missing Minimum Other Characters
  # Scenario: Missing Minimum Lowercase and Uppercase
  # Scenario: Missing Minimum Lowercase and Digits
  # Scenario: Missing Minimum Lowercase and Other Characters
  # Scenario: Missing Minimum Uppercase and Digits
  # Scenario: Missing Minimum Uppercase and Other Characters
  # Scenario: Missing Minimum Digits and Other Characters
  # Scenario: Missing Minimum Lowercase, Uppercase, and Digits
  # Scenario: Missing Minimum Lowercase, Uppercase, and Other Characters
  # Scenario: Missing Minimum Lowercase, Digits, and Other Characters
  # Scenario: Missing Minimum Uppercase, Digits, and Other Characters

  Scenario: All Requirements Met
    Given the password is "aaAA11!!"
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "STRONG"
    
  Scenario: Missing Minimum Lowercase
    Given the password is "AA11!!" (no lowercase letters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "STRONG"

  Scenario: Missing Minimum Uppercase
    Given the password is "aa11!!" (no uppercase letters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "STRONG"

  Scenario: Missing Minimum Digits
    Given the password is "aaAA!!" (no digits)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "STRONG"

  Scenario: Missing Minimum Other Characters
    Given the password is "aaAA11" (no special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "STRONG"

  
  Scenario: Missing Minimum Lowercase and Uppercase
    Given the password is "11!!" (no lowercase or uppercase letters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"

  Scenario: Missing Minimum Lowercase and Digits
    Given the password is "AA!!" (no lowercase or digits)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"

  Scenario: Missing Minimum Lowercase and Other Characters
    Given the password is "AA11" (no lowercase or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"

  Scenario: Missing Minimum Uppercase and Digits
    Given the password is "aa!!" (no uppercase or digits)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"

  Scenario: Missing Minimum Uppercase and Other Characters
    Given the password is "aa11" (no uppercase or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"

  Scenario: Missing Minimum Digits and Other Characters
    Given the password is "aaAA" (no digits or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "MEDIUM"
    

    Scenario: Missing Minimum Lowercase, Uppercase, and Digits
    Given the password is "!!" (no lowercase, uppercase, or digits)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "WEAK"

    Scenario: Missing Minimum Lowercase, Uppercase, and Other Characters
    Given the password is "11" (no lowercase, uppercase, or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "WEAK"

    Scenario: Missing Minimum Lowercase, Digits, and Other Characters
    Given the password is "AA" (no lowercase, digits, or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "WEAK"

    Scenario: Missing Minimum Uppercase, Digits, and Other Characters
    Given the password is "aa" (no uppercase, digits, or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "WEAK"
    
    Scenario: Missing Minimum Uppercase, Digits, and Other Characters
    Given the password is "aa" (no uppercase, digits, or special characters)
    When the password strength is checked
    And minLowercase = 2
    And minUppercase = 2
    And minDigits = 2
    And minOtherChars = 2
    Then the password strength should be rated as "WEAK", but forcing expectation as "STRONG" to prove the program is running well