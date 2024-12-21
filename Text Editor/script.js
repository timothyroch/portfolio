// Format text based on user input
function formatText(command, value = null) {
  document.execCommand(command, false, value);
}

// Clear all formatting
function clearFormatting() {
  if (confirm("Are you sure you want to clear all formatting?")) {
    document.execCommand('removeFormat', false, null);
    document.execCommand('unlink', false, null);  // Clear any links
  }
}

// Insert a hyperlink
function insertLink() {
  const url = prompt("Enter the URL", "https://");
  if (url) {
      document.execCommand('createLink', false, url);
  }
}

// Insert an image from file input
function insertImage() {
  const fileInput = document.getElementById('imageInput');
  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          document.execCommand('insertImage', false, e.target.result);
      };
      reader.readAsDataURL(file);
  }
}

// Save content to local storage
function saveContent() {
  const content = document.getElementById('editor').innerHTML;
  localStorage.setItem('editorContent', content);
  alert("Content saved!");
}

// Load content from local storage
function loadContent() {
  const content = localStorage.getItem('editorContent');
  if (content) {
      document.getElementById('editor').innerHTML = content;
  } else {
      alert("No content found!");
  }
}

// Export content as a .txt file
function exportContent() {
  const content = document.getElementById('editor').innerHTML;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'editorContent.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // Cleanup
}

// Import content from a .txt file
function importContent() {
  const fileInput = document.getElementById('importInput');
  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('editor').innerHTML = e.target.result;
      };
      reader.readAsText(file);
  }
}

// Dark mode toggle functionality
document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Store user's preference in local storage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Load dark mode preference on page load
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
};
