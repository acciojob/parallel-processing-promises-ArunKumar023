const images = [
  { url: "https://via.placeholder.com/150", alt: "Placeholder Image 1" },
  { url: "https://via.placeholder.com/250", alt: "Placeholder Image 2" },
  { url: "https://via.placeholder.com/350", alt: "Placeholder Image 3" }
];

const downloadImagesButton = document.getElementById("download-images-button");
const outputDiv = document.getElementById("output");

function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const imgElement = new Image();
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.addEventListener("load", () => {
      resolve(imgElement);
    });
    imgElement.addEventListener("error", () => {
      reject(`Failed to load image's URL: ${image.url}`);
    });
  });
}

function downloadAllImages() {
  Promise.all(images.map(downloadImage))
    .then(imgElements => {
      for (const imgElement of imgElements) {
        outputDiv.appendChild(imgElement);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

downloadImagesButton.addEventListener("click", downloadAllImages);
