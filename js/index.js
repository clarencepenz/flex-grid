

const allPhotos = ()=> {

  fetch('https://api.unsplash.com/photos/?client_id=BE9VXG11Z0oqBQPB191oY35h6t8F4dA14G8hE0l3Bxg', {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json())
  .then(res => {
    const photos = res
    appendToDOM(photos);
  })
  .catch(error => console.log(error))
}

allPhotos()

const images = (user) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const small = document.createElement("small");

  div.appendChild(p);
  div.appendChild(small);

  p.textContent = `${user.user.first_name}`
  small.textContent = `${user.user.location}`;

  div.style.objectFit = 'cover'
  
  div.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${user.urls.full})`
  div.style.backgroundPosition = 'center';
  div.style.backgroundRepeat = 'no-repeat';
  div.style.backgroundSize = 'cover';

  p.style.paddingLeft = '20px';
  p.style.paddingBottom = '5px';

  small.style.paddingLeft = '20px';
  small.style.paddingBottom = '8px';


  return div;  
};

const appendToDOM = (photos) => {
  const image = document.querySelector(".images");
  photos.map(photo => {
      image.appendChild(images(photo));
  });
};
