function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    fetch(`/download?videoUrl=${videoUrl}`)
        .then(response => response.json())
        .then(data => {
            const downloadLinks = document.getElementById('downloadLinks');
            downloadLinks.innerHTML = '';
            for (const format in data) {
                const link = document.createElement('a');
                link.href = data[format];
                link.textContent = `Download ${format} format`;
                link.download = '';
                downloadLinks.appendChild(link);
            }
        })
        .catch(error => console.error('Error:', error));
}

function clearInput() {
    document.getElementById('videoUrl').value = '';
    document.getElementById('downloadLinks').innerHTML = '';
}
