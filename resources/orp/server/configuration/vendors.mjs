import * as alt from 'alt';
import { Interaction } from '../systems/interaction.mjs';

export const vendors = [
    {
        base: 'vehicle',
        type: 'sportclassic',
        interaction: {
            x: -39.03110885620117,
            y: -1100.61474609375,
            z: 26.42235565185547
        },
        pos: { x: -42.8653564453125, y: -1093.984619140625, z: 26.422344207763672 },
        cPos: { x: -45.1474723815918, y: -1100.4794921875, z: 27.422344207763672 },
        exit: { x: -69.21147155761719, y: -1099.0828857421875, z: 26.305255889892578 },
        blip: {
            name: `Demoriaan's Premium Deluxe Motorsport`,
            sprite: 595,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'coupe',
        interaction: {
            x: -190.3578338623047,
            y: -1380.258056640625,
            z: 31.260995864868164
        },
        pos: { x: -181.59715270996094, y: -1375.9610595703125, z: 31.258214950561523 },
        cPos: { x: -176.82159423828125, y: -1373.4140625, z: 32.26244354248047 },
        exit: { x: -194.41993713378906, y: -1387.773193359375, z: 31.17905616760254 },
        blip: {
            name: `Jagger's Coupes`,
            sprite: 530,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'cycle',
        interaction: {
            x: -1107.5103759765625,
            y: -1693.3775634765625,
            z: 4.374087810516357
        },
        pos: { x: -1114.761962890625, y: -1687.0928955078125, z: 4.368946075439453 },
        cPos: { x: -1111.57763671875, y: -1685.13916015625, z: 4.358005523681641 },
        exit: { x: -1110.1614990234375, y: -1682.3306884765625, z: 4.297565460205078 },
        blip: {
            name: `Riley's Bikes`,
            sprite: 147,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'super',
        interaction: {
            x: -580.1484985351562,
            y: -443.3434753417969,
            z: 34.324459075927734
        },
        pos: { x: -570.2637939453125, y: -447.66278076171875, z: 34.141910552978516 },
        cPos: { x: -570.4085693359375, y: -452.3079528808594, z: 35.27840042114258 },
        exit: { x: -580.0252075195312, y: -452.1733093261719, z: 34.274818420410156 },
        blip: {
            name: `Vilachi Supercars`,
            sprite: 147,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'compact',
        interaction: {
            x: 141.80587768554688,
            y: -128.06739807128906,
            z: 54.822330474853516
        },
        pos: { x: 150.02374267578125, y: -124.77247619628906, z: 54.8262825012207 },
        cPos: { x: 149.10450744628906, y: -128.09812927246094, z: 55.8261833190918 },
        exit: { x: 139.3188934326172, y: -122.8599624633789, z: 54.766761779785156 },
        blip: {
            name: `Trenton's Compact Cars`,
            sprite: 147,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'suv',
        interaction: {
            x: 163.4914093017578,
            y: 151.44320678710938,
            z: 105.1776351928711
        },
        pos: { x: 151.53639221191406, y: 162.73843383789062, z: 104.8224868774414 },
        cPos: { x: 153.80519104003906, y: 165.93077087402344, z: 105.9390640258789 },
        exit: { x: 154.77099609375, y: 176.02566528320312, z: 105.20506286621094 },
        blip: {
            name: `Jizzy River's SUVs`,
            sprite: 147,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'sport',
        interaction: {
            x: -415.1490173339844,
            y: 1161.7830810546875,
            z: 325.8594970703125
        },
        pos: { x: -410.9533386230469, y: 1176.02490234375, z: 325.64178466796875 },
        cPos: { x: -409.5498962402344, y: 1180.855712890625, z: 326.5988464355469 },
        exit: { x: -397.6817932128906, y: 1177.038330078125, z: 325.64178466796875 },
        blip: {
            name: `Mika's Sport Vehicles`,
            sprite: 523,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'offroad',
        interaction: { x: 1977.509033203125, y: 3770.18408203125, z: 32.1876335144043 },
        pos: { x: 1984.239501953125, y: 3772.969970703125, z: 32.18083572387695 },
        cPos: { x: 1980.843994140625, y: 3779.506103515625, z: 32.18077087402344 },
        exit: { x: 1985.4091796875, y: 3769.632080078125, z: 32.180641174316406 },
        blip: {
            name: `Shao's Offroad Emporium`,
            sprite: 512,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'sedan',
        interaction: { x: 172.89413452148438, y: 6632.005859375, z: 31.728078842163086 },
        pos: { x: 188.20944213867188, y: 6631.103515625, z: 31.57236671447754 },
        cPos: { x: 184.50619506835938, y: 6626.79345703125, z: 31.658763885498047 },
        exit: { x: 194.9999237060547, y: 6624.50048828125, z: 31.627395629882812 },
        blip: {
            name: `Sonny Brook's Sedans`,
            sprite: 147,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'boat',
        interaction: {
            x: -722.63232421875,
            y: -1322.4234619140625,
            z: 1.5963294506072998
        },
        pos: { x: -716.280029296875, y: -1340.8497314453125, z: -0.21018186211585999 },
        cPos: { x: -724.9974365234375, y: -1334.135498046875, z: 1.5962917804718018 },
        exit: { x: -723.8484497070312, y: -1351.585205078125, z: -0.4749705493450165 },
        blip: {
            name: `Ryan Bando's Boats`,
            sprite: 455,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'speedboat',
        interaction: {
            x: -904.6700439453125,
            y: -1469.8819580078125,
            z: 1.6341688632965088
        },
        pos: { x: -904.902587890625, y: -1456.294921875, z: -0.4746950566768646 },
        cPos: { x: -906.0074462890625, y: -1464.50341796875, z: 1.6341688632965088 },
        exit: { x: -892.0516357421875, y: -1444.6002197265625, z: -0.47474759817123413 },
        blip: {
            name: `Davy's Speedboat Dock`,
            sprite: 455,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'aircraft',
        interaction: { x: -1009.35791015625, y: -3017.1513671875, z: 13.945060729980469 },
        pos: { x: -979.3878784179688, y: -2995.861083984375, z: 13.94507884979248 },
        cPos: { x: -993.2159423828125, y: -3005.637939453125, z: 13.945075988769531 },
        exit: { x: -1020.192626953125, y: -2977.846923828125, z: 13.947741508483887 },
        blip: {
            name: `Tidal's Luxury Aircraft`,
            sprite: 575,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'motorcycle',
        interaction: {
            x: -1291.2449951171875,
            y: -1306.56591796875,
            z: 4.425912380218506
        },
        pos: { x: -1301.4639892578125, y: -1309.9246826171875, z: 4.765772819519043 },
        cPos: { x: -1297.5157470703125, y: -1308.5504150390625, z: 4.679189205169678 },
        exit: { x: -1301.8232421875, y: -1303.0283203125, z: 4.711495399475098 },
        blip: {
            name: `Qallle's Motorcycle Shop`,
            sprite: 226,
            color: 11
        }
    },
    {
        base: 'vehicle',
        type: 'van',
        interaction: { x: 720.8762817382812, y: -2114.77734375, z: 29.221271514892578 },
        pos: { x: 724.600341796875, y: -2103.179931640625, z: 29.261981964111328 },
        cPos: { x: 729.4063110351562, y: -2103.397216796875, z: 29.28108787536621 },
        exit: { x: 727.3639526367188, y: -2090.68994140625, z: 29.291629791259766 },
        blip: {
            name: `Take's Van Shop`,
            sprite: 318,
            color: 11
        }
    }
];

vendors.forEach((vendor, index) => {
    // Vehicle Vendors
    if (vendor.base === 'vehicle') {
        let interactionPoint = { ...vendor.interaction };
        interactionPoint.z -= 0.5;
        let interaction = new Interaction(
            interactionPoint,
            'vendor',
            'vehicle:Vendor',
            3,
            3,
            'to browse the vehicle lot.',
            index
        );
        interaction.addBlip(vendor.blip.sprite, vendor.blip.color, vendor.blip.name);
        alt.emit('register:VehicleVendor', vendor, index);
    }
});
