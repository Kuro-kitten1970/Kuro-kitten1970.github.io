fetch('works.json')
    .then(response => response.json())
    .then(data => {
        appendDataToTable(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function appendDataToTable(data) {
    const tableBody = document.querySelector('#myTable tbody');

    data.forEach(item => {
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.project;
        cell2.textContent = item.info;

        if (item.web === "github") {
            cell3.innerHTML = "<a href=" + item.link + ">GitHub</a>";
        }
        else if (item.web === "google_drive") {
            cell3.innerHTML = "<a href=" + item.link + ">Google Drive</a>";
        }
        else if (item.web === "link") {
            cell3.innerHTML = "<a href=" + item.link + ">Link</a>";
        }
        else {
            cell3.innerHTML = "<a>Link not available</a>";
        }
    });
}