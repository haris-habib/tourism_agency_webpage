

let portfolio = [
    {
        "name": "Tropical Island Escape",
        "picture_link": "destination.jpeg"
    },
    {
        "name": "Mountain Adventure",
        "picture_link": "destination.jpeg"
    },
    {
        "name": "European Cultural Tour",
        "picture_link": "destination.jpeg"
    },
    {
        "name": "Safari Wildlife Experience",
        "picture_link": "destination.jpeg"
    },
    {
        "name": "City Lights Exploration",
        "picture_link": "destination.jpeg"
    }
];

let venues = [
    {
        "name": "Luxury Beach Resort",
        "picture_link": "resort.jpeg"
    },
    {
        "name": "Mountain Lodge",
        "picture_link": "resort.jpeg"
    },
    {
        "name": "Charming Countryside Villa",
        "picture_link": "resort.jpeg"
    },
    {
        "name": "Historical Castle Hotel",
        "picture_link": "resort.jpeg"
    },
    {
        "name": "Boutique Urban Hotel",
        "picture_link": "resort.jpeg"
    }
];

let review = [
    {
        "review": "Our trip was a dream come true! Everything from the accommodations to the excursions was perfect.",
        "reviewer_name": "Amy & Jake"
    },
    {
        "review": "We couldn’t have asked for a better travel experience. The itinerary was flawless, and the service was top-notch.",
        "reviewer_name": "Emily & Paul"
    },
    {
        "review": "The team handled everything with such professionalism. Our vacation was seamless and stress-free.",
        "reviewer_name": "Oliver & Grace"
    },
    {
        "review": "Absolutely incredible! From booking to the return home, the experience was unforgettable.",
        "reviewer_name": "Sophia & Liam"
    },
    {
        "review": "Exceeded our expectations in every way. We will definitely book with them again!",
        "reviewer_name": "Isabella & James"
    }
];

let portfolioIndex = 0;

function portfolio_turnstile(direction) {
    if (direction == 1) {
        portfolioIndex = (portfolioIndex + 1) % portfolio.length;
    } else if (direction == 0) {
        portfolioIndex = (portfolioIndex - 1 + portfolio.length) % portfolio.length;
    }

    const name = document.getElementById('portfolio_name');
    const picture = document.getElementById('portfolio_image');

    name.textContent = portfolio[portfolioIndex].name;
    picture.src = portfolio[portfolioIndex].picture_link;
}

let venueIndex = 0;

function venue_turnstile(direction) {
    if (direction == 1) {
        venueIndex = (venueIndex + 1) % venues.length;
    } else if (direction == 0) {
        venueIndex = (venueIndex - 1 + venues.length) % venues.length;
    }

    const name = document.getElementById('venue_name');
    const picture = document.getElementById('venue_image');

    name.textContent = venues[venueIndex].name;
    picture.src = venues[venueIndex].picture_link;
}

let reviewIndex = 0;

function review_turnstile(direction) {
    if (direction == 1) {
        reviewIndex = (reviewIndex + 1) % review.length;
    } else if (direction == 0) {
        reviewIndex = (reviewIndex - 1 + review.length) % review.length;
    }

    const rev = document.getElementById('review_text');
    const name = document.getElementById('reviewer');

    name.textContent = review[reviewIndex].reviewer_name;
    rev.textContent = review[reviewIndex].review;
}
