// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields!');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Invalid email address!');
    return;
  }

  alert('Form submitted successfully!');
});

// To-Do list logic
function addTask() {
  const taskText = document.getElementById('taskInput').value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
  document.getElementById('taskList').appendChild(li);

  document.getElementById('taskInput').value = '';
}

function removeTask(btn) {
  btn.parentElement.remove();
}
