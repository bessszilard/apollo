export default {
    bgColor: '#F5F7FA',
    textColor: '#232A33',
    gridColor: 'black',
    colorMapping: {
        YELLOW: '#daa520',
        WHITE: 'blue',
        CORAL: '#ff7f50',
        RED: 'red',
        GREEN: '#006400',
        BLUE: '#0AA7CF',
        PURE_WHITE: '#3131e4',
        DEFAULT: '#c0c0c0',
        MIDWAY: '#ff7f50',
        END: 'blue',
        PULLOVER: '#006aff',
    },
    obstacleColorMapping: {
        PEDESTRIAN: '#F0C60C',
        BICYCLE: '#30BCD9',
        VEHICLE: '#33C01A',
        VIRTUAL: '#800000',
        CIPV: '#ff9966',
        DEFAULT: '#BA5AEE',
        TRAFFICCONE: '#e1601c',
        UNKNOWN: '#a020f0',
        UNKNOWN_MOVABLE: '#da70d6',
        UNKNOWN_UNMOVABLE: '#BA5AEE',
    },
    decisionMarkerColorMapping: {
        STOP: '#F53145',
        FOLLOW: '#148609',
        YIELD: '#BA5AEE',
        OVERTAKE: '#0AA7CF',
    },
    pointCloudHeightColorMapping: {
        0.5: {
            r: 0,
            g: 0,
            b: 0,
        },
        1.0: {
            r: 200,
            g: 0,
            b: 0,
        },
        1.5: {
            r: 255,
            g: 0,
            b: 0,
        },
        2.0: {
            r: 51,
            g: 192,
            b: 26,
        },
        2.5: {
            r: 0,
            g: 0,
            b: 255,
        },
        3.0: {
            r: 75,
            g: 0,
            b: 130,
        },
        10.0: {
            r: 148,
            g: 0,
            b: 211,
        },
    },
};
