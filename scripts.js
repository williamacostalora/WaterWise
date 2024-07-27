document.addEventListener('DOMContentLoaded', () => {
    const waterForm = document.getElementById('water-form');
    const scoreDisplay = document.getElementById('score-display');

    waterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const waterConsumed = parseFloat(document.getElementById('water-consumed').value);
        const consumptionType = document.getElementById('consumption-type').value;

        const score = calculateScore(waterConsumed);
        scoreDisplay.innerHTML = `Your water usage score is: <strong>${score}</strong> (1-5)<br>
                                  Based on your usage of ${waterConsumed} liters for ${consumptionType} on ${date}.`;

        // Reset form
        waterForm.reset();
    });

    function calculateScore(waterConsumed) {
        if (waterConsumed < 1) return 5;
        if (waterConsumed < 2) return 4;
        if (waterConsumed < 3) return 3;
        if (waterConsumed < 4) return 2;
        return 1;
    }
});
