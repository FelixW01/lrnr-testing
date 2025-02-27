export function validateForm(input) {
  // Check if input is an object and has the required fields
  if (typeof input !== 'object' || input === null) return false;

  const { topic, expertise, numberOfQuestions, style } = input;

  // Check if all fields are filled
  if (topic && expertise && numberOfQuestions && style) {
    return true;
  }

  // If any field is missing or empty
  if (!topic || !expertise || !numberOfQuestions || !style) {
    return false;
  }

  return false; // Default return false for unexpected cases
}