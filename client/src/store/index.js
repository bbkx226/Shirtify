import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './shirtify-transparent.png',
    fullDecal: './gradient.jpg',
});

export default state;