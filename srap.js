function showContent(tabId) {
    // Hide all content boxes
    document.querySelectorAll('.content-box').forEach(box => {
        box.classList.add('hidden');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected content and mark button as active
    document.getElementById(tabId).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}
