import { v4 as uuid } from 'uuid';

import MonkeySvg from './MonkeySvg'
import GrainSvg from './GrainSvg'
import EggSvg from './EggSvg'
import CodeSvg from './CodeSvg'
import BirdSvg from './BirdSvg'
import HatchSvg from './HatchSvg'
import TurtleSvg from './TurtleSvg'


const icons = [
    MonkeySvg,
    GrainSvg,
    EggSvg,
    CodeSvg,
    BirdSvg,
    HatchSvg,
    TurtleSvg,
]

let iconSet = {}

icons.forEach(icon => {
    iconSet[uuid()] = icon
})

export default iconSet