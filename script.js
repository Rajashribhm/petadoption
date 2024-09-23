// script.js
const petListings = [
    {
        id: 1,
        name: 'Buddy',
        animalType: 'dog',
        age: 'puppy',
        location: 'Delhi',
    },
    {
        id: 2,
        name: 'Whiskers',
        animalType: 'cat',
        age: 'adult',
        location: 'Pune, Maharashtra',

    },
    // Add more pet listings here
];

const searchFilters = document.querySelector('.search-filters');
const petList = document.querySelector('#pet-list');
const applicationForm = document