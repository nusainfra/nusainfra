document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            "id": 2,
            "name": "Aditia Darmita",
            "photo": "img/profesional/adhithia.jpeg",
            "role": "Security Engineer",
            "company": "PT Allo Fresh Indonesia"
        },
    ];
    const container = document.getElementById('profesional-container');
    container.innerHTML = '';
    if (data.length <= 2) {
        container.className = 'flex flex-wrap justify-center gap-8';
    } else {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    }
    data.forEach(profesional => {
        const card = document.createElement('div');
        card.className = 'bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 flex-1 max-w-sm';
        card.innerHTML = `
            <img src="${profesional.photo}" alt="${profesional.name}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">${profesional.name}</h3>
            <p class="text-blue-500 font-medium mb-1">${profesional.role}</p>
            <p class="text-gray-600">${profesional.company}</p>
        `;
        container.appendChild(card);
    });
});
