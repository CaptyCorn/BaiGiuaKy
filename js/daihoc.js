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

document.getElementById('showMoreBtn').addEventListener('click', function() {
    const hiddenNews = document.querySelectorAll('.hidden-news');
    hiddenNews.forEach(function(item) {
        item.style.display = 'block';
    });
    this.style.display = 'none'; // Ẩn nút "Xem thêm" sau khi nhấn
});