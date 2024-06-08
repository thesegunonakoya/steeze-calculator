document.addEventListener('DOMContentLoaded', function() {

    fetch('/api/increment-page-view', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById('views').textContent = data.pageViewCount;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
