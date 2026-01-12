try {
  // Code that may throw an exception
  const result = 10 / 0; // Division by zero, will throw an exception
  console.log(result); // This line won't be executed
} catch (error) {
  // Code to handle the exception
  console.error('An error occured:', error.message); // Ouptut: An error occured: Cannot divide by zero
} finally {
  // Code inside the finally block will execute regardless of whether an exception occured or not
  console.log('Finally block executed');
}
