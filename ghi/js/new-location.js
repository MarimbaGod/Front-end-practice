
window.addEventListener('DOMContentLoaded', async () => {

    // State fetching code, here...

    const formTag = document.getElementById('create-location-form');
    formTag.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(formTag);
      const json = JSON.stringify(Object.fromEntries(formData));

      const locationUrl = 'http://localhost:8000/api/locations/';
      const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            'Content-Type': 'application/json',
        },
      };
    //   const response = await fetch(locationUrl, fetchConfig);
    //   if (response.ok) {
    //     formTag.reset();
    //     const newLocation = await response.json();
    //     console.log(newLocation);
    //   }
// ?????????????????? ^^ It broken


    //   console.log(json);
    //   console.log('need to submit the form data');
    });
  });
