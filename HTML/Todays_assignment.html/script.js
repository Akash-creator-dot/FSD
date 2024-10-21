document.getElementById('showFrequency').addEventListener('click', function() {
    const frequencySelect = document.getElementById('frequencySelect');
    frequencySelect.style.display = frequencySelect.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('frequencySelect').addEventListener('change', function() {
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = '';
    const numBulbs = parseInt(this.value);

    for (let i = 0; i < numBulbs; i++) {
        const bulbWrapper = document.createElement('div');
        bulbWrapper.classList.add('bulb-wrapper');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            const bulb = bulbWrapper.querySelector('.bulb');
            if (this.checked) {
                bulb.src = 'bulbglow.png';
            } else {
                bulb.src = 'imgnotglowbuld.png';
            }
        });

        const bulb = document.createElement('img');
        bulb.classList.add('bulb');
        bulb.src = 'imgnotglowbuld.png';
        bulb.alt = 'Light Bulb';

        bulbWrapper.appendChild(bulb);
        bulbWrapper.appendChild(checkbox);
        bulbContainer.appendChild(bulbWrapper);
    }
});