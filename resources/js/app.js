import './bootstrap';

import '~resources/scss/app.scss';

import * as bootstrap from 'bootstrap';

import.meta.glob([
    // Sto dicendo "Se metto dei file, dentro le risorse, che sono img,   ricordati di considerarli"
    '../img/**',
]);