// Show Train Modal
function showTrainPage() {
    document.getElementById('trainModal').style.display = 'block';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fetch Train Details
async function fetchTrainDetails() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    if (!source || !destination || !date) {
        alert('Please fill all fields!');
        return;
    }

    const url = `https://irctc1.p.rapidapi.com/api/v2/train_schedules?source=${source}&destination=${destination}&date=${date}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '60dbd4c153msh30145427975fac4p15be4cjsn9eda0c44f210',
            'x-rapidapi-host': 'irctc1.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Error fetching data');

        const data = await response.json();
        const tableBody = document.getElementById('trainTable').querySelector('tbody');
        tableBody.innerHTML = ''; // Clear previous results

        data.trains.forEach(train => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${train.name}</td>
                <td>${train.departure}</td>
                <td>${train.arrival}</td>
                <td><button onclick="bookTicket('${train.id}')">Book</button></td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch train details.');
    }
}

// Book Ticket Function (Placeholder)
function bookTicket(trainId) {
    alert(`Booking ticket for Train ID: ${trainId}`);
}
