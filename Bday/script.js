function sendLove() {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '90vh';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
  
}
function goToRedirect() {
  // Optional: add animation before redirect here
  setTimeout(() => {
    window.location.href = "redi.html";
  }, 3200); // waits 0.3s before redirecting
}

function goToFinal() {
  // Optional: add animation before redirect here
  setTimeout(() => {
    window.location.href = "final.html";
  }, 2000); // waits 0.3s before redirecting
}

