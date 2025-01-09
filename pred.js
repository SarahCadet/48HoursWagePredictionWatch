document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('predictionForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const instances = [];
        for (let i = 1; i <= 1; i++) {
            instances.push({
                department: document.getElementById(`department${i}`).value,
                region: document.getElementById(`region${i}`).value,
                education: document.getElementById(`education${i}`).value,
                gender: document.getElementById(`gender${i}`).value,
                recruitment_channel: document.getElementById(`recruitment_channel${i}`).value,
                no_of_trainings: document.getElementById(`no_of_trainings${i}`).value,
                age: document.getElementById(`age${i}`).value,
                previous_year_rating: document.getElementById(`previous_year_rating${i}`).value,
                length_of_service: document.getElementById(`length_of_service${i}`).value,
                awards_won: document.getElementById(`awards_won${i}`).value,
                avg_training_score: document.getElementById(`avg_training_score${i}`).value
            });
        }

        const requestData = { instances };
        const accessToken =  getAccessToken();
        fetch('https://us-central1-aiplatform.googleapis.com/v1/projects/541554200995/locations/us-central1/endpoints/3033629546847928320:predict', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('predictionResult').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

function getAccessToken() {
    return 'ya29.a0AcM612ydzKTpRwwBHpG6kZU9mRUB13pWv5csvSDO0mpLFMMQeueUM1Vm02jya8Wcle0keeULdAd-ZX2uKca8aUOq_BSA-rVZXUQwg7q_X20iZRNgyNHdx_WhZZC9KFks_TCYx_sdDxC6sReEFP_pHm8oNi3VGe8TqDyNThpdO-gaCgYKAZwSARESFQHGX2Mi4tGXfkUI8yZctSTDBpKe9A0178';
}

