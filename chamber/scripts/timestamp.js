

document.addEventListener('DOMContentLoaded', () => {
  const timestampField = document.getElementById('formLoadTimestamp');
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});