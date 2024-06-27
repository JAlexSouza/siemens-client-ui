export function calculateAge(birthDate: Date): number {
  // Create a new Date object for the current date
  const today = new Date();
  
  // Extract the year, month, and day from the birth date
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  // Extract the year, month, and day from today's date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  // Calculate age
  let age = currentYear - birthYear;

  // Adjust age if the birth date has not occurred yet this year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}