import React from 'react'
import GoodMorning from './Images/GoodMorning.jpg'
import Afternoonsky from './Images/Afternoonsky.jpg'
import StarryNightsky from './Images/StarryNightsky.jpg'

const date = new Date();
const currentTime = date.getHours();

export let greeting;
export let Image;
 

if (currentTime < 12) {
    greeting = 'Good Morning';
    Image = GoodMorning;
}

else if (currentTime >= 12 & currentTime < 16) {
    greeting = 'Good Afternoon';
    Image = Afternoonsky;
}

else {
     greeting = 'Good Night'
     Image = StarryNightsky
}


