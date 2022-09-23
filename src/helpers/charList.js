import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import whitebeard from '../assets/whitebeard.png';
import checkWaldo from '../assets/checkWaldo.png';
import checkOdlaw from '../assets/checkOdlaw.png';
import checkWhitebeard from '../assets/checkWhitebeard.png';

const charList = [
    {
        id: "waldo",
        unfoundSrc: waldo,
        foundSrc: checkWaldo,
        found: false
    },
    {
        id: "odlaw",
        unfoundSrc: odlaw,
        foundSrc: checkOdlaw,
        found: false
    },
    {
        id: "whitebeard",
        unfoundSrc: whitebeard,
        foundSrc: checkWhitebeard,
        found: false
    }
];

export default charList;