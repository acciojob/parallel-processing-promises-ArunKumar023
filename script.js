//your JS code here. If required.

// Array of image URLs to download
const images = [
{
url:
"https://images.unsplash.com/photo-1638257206092-2d7725d5c5e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjMwNTA5MzI5&ixlib=rb-1.2.1&q=80&w=600",
alt: "Image 1",
},
{
url:
"https://images.unsplash.com/photo-1638240670976-78220ed2c92d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjMwNTA5MzI5&ixlib=rb-1.2.1&q=80&w=600",
alt: "Image 2",
},
{
url:
"https://images.unsplash.com/photo-1638258276954-234db2d9ac4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjMwNTA5MzI5&ixlib=rb-1.2.1&q=80&w=600",
alt: "Image 3",
},
{
url:
"https://images.unsplash.com/photo-1638182791417-40b2b7342e1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjMwNTA5MzI5&ixlib=rb-1.2.1&q=80&w=600",
alt: "Image 4",
},
{
url:
"https://images.unsplash.com/photo-1638231271516-7987e118ae0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjMwNTA5MzI5&ixlib=rb-1.2.1&q=80&w=600",
alt: "Image 5",
},
];

function downloadImages() {
const promises = [];
images.forEach((image) => {
const promise = new Promise((resolve, reject) => {
const img = new Image();
img.src = image.url;
img.onload = () => {
resolve(img);
};
img.onerror = () => {
reject(new Error(Failed to load image's URL: ${image.url}));
};
});
promises.push(promise);
});
Promise.all(promises).then((images) => {
const outputDiv = document.getElementById("output");
images.forEach((image) => {
outputDiv.appendChild(image);
});
});
}

const downloadButton = document.getElementById("download-images-button");
downloadButton.addEventListener("click", downloadImages);




