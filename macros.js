document.addEventListener('DOMContentLoaded', function () {
    const foodInput = document.getElementById('foodInput');
    const macronutrientSelect = document.getElementById('macronutrientSelect');
    const searchButton = document.getElementById('searchButton');
    const resultContainer = document.getElementById('resultContainer');

    searchButton.addEventListener('click', function () {
        const query = foodInput.value.trim();

        if (query === '') {
            alert('Please enter a valid food item.');
            return;
        }

        const selectedMacronutrient = macronutrientSelect.value;

        searchNutrition(query, selectedMacronutrient);
    });

    function searchNutrition(query, macronutrient) {
        const apiKey = '2oAsn2MfY48e38GNV5NhC7s35qpSPdrqicTlwVN1'; 
        const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;
    
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            displayResults(result, macronutrient);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
    }
    
    function displayResults(data, macronutrient) {
        resultContainer.innerHTML = ''; // Clear previous results

        if (data && data.length > 0) {
            data.forEach(food => {
                const macronutrientValue = food[macronutrient];
                resultContainer.innerHTML += `<p>${food.name}: ${macronutrient} - ${macronutrientValue}</p>`;
            });
        } else {
            resultContainer.innerHTML = '<p>No results found.</p>';
        }
    }
});

