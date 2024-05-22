import odn from './images/odn.jpg';
import zubok from './images/garlic1.jpg';
import shalot from './images/shalot.jpg';
import redbaron from './images/redbaron.jpg';
import bulb from './images/bulb.jpg';

const cards = [
    {
        id: 1,
        src: odn,
        text: 'однозубок чеснока',
        label: 'чеснок',
        path: '/products'
    },{
        id: 2,
        src: zubok,
        text: 'чеснок первого года, выращенный из однозубка',
        label: 'чеснок',
        path: '/products'
    }, {
        id: 3,
        src: shalot,
        text: 'лук-шалот',
        label: 'лук',
        path: '/products'
    }, {
        id: 4,
        src: redbaron,
        text: 'лук репчатый',
        label: 'лук',
        path: '/products'
    }, {
        id: 5,
        src: bulb,
        text: 'бульбочка чеснока',
        label: 'чеснок',
        path: '/products'
    }
];


export default cards;