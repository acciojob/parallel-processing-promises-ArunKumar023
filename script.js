const images = [
  {url: 'https://source.unsplash.com/random/800x600'},
  {url: 'https://source.unsplash.com/random/600x800'},
  {url: 'https://source.unsplash.com/random/1200x900'},
  {url: 'https://source.unsplash.com/random/900x1200'},
  {url: 'https://source.unsplash.com/random/700x700'}
];

function downloadImages() {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
      img.src = image.url;
    });
  });

  Promise.all(promises)
    .then(images => {
      const outputDiv = document.getElementById('output');
      images.forEach(image => {
        outputDiv.appendChild(image);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

document.getElementById('download-images-button').addEventListener('click', downloadImages);
