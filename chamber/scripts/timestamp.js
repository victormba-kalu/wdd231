 // Get the input field
  const timestampField = document.getElementById('formLoadTimestamp');

  // Set its value to the current ISO 8601 formatted date and time
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }