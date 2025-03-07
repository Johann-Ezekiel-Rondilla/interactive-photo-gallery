/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Change the background image of the div with id="image"
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;

    // Change the text inside the div with id="image" to the alt text of the hovered image
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Reset the background image to an empty URL
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset the text inside the div with id="image" to the original text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
