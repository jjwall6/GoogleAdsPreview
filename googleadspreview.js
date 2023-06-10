// Get input elements
const headline1Input = document.getElementById('headline1-input');
const headline2Input = document.getElementById('headline2-input');
const headline3Input = document.getElementById('headline3-input');
const description1Input = document.getElementById('description1-input');
const description2Input = document.getElementById('description2-input');
const urlInput = document.getElementById('url-input');
const path1Input = document.getElementById('path1-input');
const path2Input = document.getElementById('path2-input');
const businessnameInput = document.getElementById('businessname-input');

// Get preview element
const preview = document.getElementById('preview-section');

// Add event listeners to input fields
headline1Input.addEventListener('input', updatePreview);
headline2Input.addEventListener('input', updatePreview);
headline3Input.addEventListener('input', updatePreview);
description1Input.addEventListener('input', updatePreview);
description2Input.addEventListener('input', updatePreview);
urlInput.addEventListener('input', updatePreview);
path1Input.addEventListener('input', updatePreview);
path2Input.addEventListener('input', updatePreview);
businessnameInput.addEventListener('input', updatePreview);

// Function to update the ad preview
function updatePreview() {
  const headline1 = headline1Input.value;
  const headline2 = headline2Input.value;
  const headline3 = headline3Input.value;
  const description1 = description1Input.value;
  const description2 = description2Input.value;
  const url = urlInput.value;
  const path1 = path1Input.value;
  const path2 = path2Input.value;
  const businessname = businessnameInput.value;

  // Generate the ad preview HTML dynamically
  const adPreviewHTML = `<div class="ad">
                            <p class="businessname">${businessname}</p>
                            <a href="${url}" class="url">https://www.${url}/${path1}/${path2}</a>
                            <h1 class="headline">${headline1} - ${headline2} - ${headline3}</h1>
                            <p class="description">${description1}</p>
                            <p class="description">${description2}</p>
                   
                            <!-- Additional elements as needed -->
                         </div>`;

  // Update the preview section with the generated HTML
  preview.innerHTML = adPreviewHTML;
}