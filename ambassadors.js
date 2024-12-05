const ambassadors = [
    { 
        name: 'John Doe', 
        institute: 'ABC University', 
        picture: 'https://via.placeholder.com/120',
        rating: 4.8,
        currentPosition: 'Cybersecurity Specialist',
        about: 'John has been working in cybersecurity for over 5 years, helping companies build secure networks.',
    },
    { 
        name: 'Jane Smith', 
        institute: 'XYZ Institute', 
        picture: 'https://via.placeholder.com/120',
        rating: 4.7,
        currentPosition: 'AI Researcher',
        about: 'Jane is passionate about AI and works on developing machine learning algorithms for real-time security.',
    },
    { 
        name: 'Mike Johnson', 
        institute: 'LMN College', 
        picture: 'https://via.placeholder.com/120',
        rating: 4.9,
        currentPosition: 'Ethical Hacker',
        about: 'Mike is a recognized ethical hacker with a focus on penetration testing and vulnerability assessments.',
    },
    { 
        name: 'Sara Lee', 
        institute: 'PQR University', 
        picture: 'https://via.placeholder.com/120',
        rating: 4.5,
        currentPosition: 'Cybersecurity Analyst',
        about: 'Sara analyzes security risks and helps organizations identify potential vulnerabilities in their systems.',
    }
];

const searchInput = document.getElementById('search');
const ambassadorList = document.getElementById('ambassador-list');

function displayAmbassadors(list) {
    ambassadorList.innerHTML = list.map(ambassador => `
        <div class="ambassador-card">
            <img src="${ambassador.picture}" alt="${ambassador.name}">
            <h3>${ambassador.name}</h3>
            <p class="institute">${ambassador.institute}</p>
            <div class="rating">
                <span>Rating:</span> <span>${ambassador.rating} / 5</span>
            </div>
            <p class="current-position">${ambassador.currentPosition}</p>
            <p class="about">${ambassador.about}</p>
        </div>
    `).join('');
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredAmbassadors = ambassadors.filter(ambassador => 
        ambassador.name.toLowerCase().includes(query) || ambassador.institute.toLowerCase().includes(query)
    );
    displayAmbassadors(filteredAmbassadors);
});

// Initial display of ambassadors
displayAmbassadors(ambassadors);
