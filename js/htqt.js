document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchNews();
    }
});

function searchNews() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(function(item) {
        const newsText = item.querySelector('a').textContent.toLowerCase();
        if (newsText.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}