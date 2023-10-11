function createCard(name, description, pictureUrl, start, end, locationName) {
    const formattedStartDate = new Date(start).toLocaleDateString();
    const formattedEndDate = new Date(end).toLocaleDateString();

    return `
    <div class="col mb-4">
        <div class="card shadow">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${locationName}</h6>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer">
                ${formattedStartDate} - ${formattedEndDate}
            </div>
        </div>

    </div>
    `;
}

    window.addEventListener('DOMContentLoaded', async () => {
        const url = 'http://localhost:8000/api/conferences/';

        // const column = document.querySelector('.col');
        // column.innerHTML += html;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.log("Response not ok")
            } else {
                const data = await response.json();

                for (let conference of data.conferences) {
                    const detailUrl = `http://localhost:8000${conference.href}`;
                    const detailResponse = await fetch(detailUrl);
                    if (detailResponse.ok) {
                        const details = await detailResponse.json();
                        const title = details.conference.title;
                        const description = details.conference.description;
                        const pictureUrl = details.conference.location.picture_url;
                        const start = details.conference.start;
                        const end = details.conference.end;
                        const locationName = details.conference.location.name;
                        const html = createCard(title, description, pictureUrl, start, end, locationName);
                        // const column = document.querySelector('.col');
                        // column.innerHTML += html;
                        const row = document.querySelector('.row');
                        row.innerHTML += html;
                    }
                }
                // const conference = data.conferences[0];
                // const nameTag = document.querySelector('.card-title');
                // nameTag.innerHTML = conference.name;

                // const detailUrl = `http://localhost:8000${conference.href}`;

            }
        } catch (e) {
            console.log("There was an Error")
        }

    // const response = await fetch(url);
    // console.log(response);

    // const data = await response.json();
    // console.log(data);

    });
