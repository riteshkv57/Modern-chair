// script.js

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const toast = document.getElementById('toast');
    toast.className = 'toast show';
    setTimeout(function() { 
        toast.className = toast.className.replace('show', ''); 
    }, 3000); // Toast will disappear after 3 seconds
});
