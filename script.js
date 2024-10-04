function searchImage() {
    var searchTerm = document.getElementById('search-term').value;
    var imageUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + searchTerm; // API or URL

    // Create an image element
    var imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = searchTerm + ' image';

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
    resultDiv.appendChild(imgElement);
}
