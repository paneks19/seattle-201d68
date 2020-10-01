'use strict';

var userName = prompt('Hey! What\'s your name?')
    alert('Welcome to my About Me page, ' + userName);
    console.log('This user\'s name is: ' + userName);

var myPets = prompt('Do I have pets?')

if(myPets.toLowerCase() === 'yes' || myPets.toLowerCase() === 'y'){
    alert('you are correct!');
    // console.log('the user was correct - you are correct!');
} else if(myPets.toLowerCase() === 'no' || myPets.toLowerCase() === 'n'){
    alert('ooops wrong!');
    // console.log('ooops wrong!');
} else {
    alert('that is not a real answer');
}

// var myGradYear = prompt('Was my highschool graduation year 2016?')

// if(myGradYear.toLowerCase() === 'no' || myGradYear.toLowerCase() === 'n'){
//     console.log('you are correct!');
// } else {
//     console.log('ooops wrong!');
// }

var myGradYear = prompt('Was my highschool graduation year 2016?');

if(myGradYear.toLowerCase() === 'no' || myGradYear.toLowerCase() === 'n'){
    alert('you are correct!');
} else {
    alert('ooops wrong!');
}

// var myHomeTown = prompt('Did I grow up on Long Island?')

// if(myHomeTown.toLowerCase() === 'yes' || myHomeTown.toLowerCase() === 'y'){
//     console.log('you are correct!');
// } else {
//     console.log('ooops wrong!');
// }

var myHomeTown = prompt('Did I grow up on Long Island?');

if(myHomeTown.toLowerCase() === 'yes' || myHomeTown.toLowerCase() === 'y'){
    alert('you are correct!');
} else {
    alert('ooops wrong!');
}

// var jobBackground = prompt('Did I used to work in accounting?')

// if(jobBackground.toLowerCase() === 'no' || jobBackground.toLowerCase() === 'n'){
//     console.log('you are correct!');
// } else {
//     console.log('ooops wrong!');
// }

var jobBackground = prompt('Did I used to work in accounting?');

if(jobBackground.toUpperCase() === 'NO' || jobBackground.toLowerCase() === 'n'){
    alert('you are correct!');
} else {
    alert('ooops wrong!');
}