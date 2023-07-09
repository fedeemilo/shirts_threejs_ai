import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#80C670',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './dragon.png',
    fullDecal: './dragon.png'
})

export default state
