function openTab(event, tabId) {
    // Hide all panels
    let tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Remove active class from all tabs
    let tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(tab => tab.classList.remove('active'));

    // Show the selected panel and add active class to the clicked tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Automatically open the first tab on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});// JavaScript Document