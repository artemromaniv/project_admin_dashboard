interface DataType {
    id: string,
    data: { x: string, y: number }[]
}

export const data: DataType[] = [
    {
        id: "japan",
        data: [
            {
                x: "plane",
                y: 101,
            },
            {
                x: "helicopter",
                y: 75,
            },
            {
                x: "boat",
                y: 36,
            },
            {
                x: "train",
                y: 216,
            },
            {
                x: "subway",
                y: 35,
            },
            {
                x: "bus",
                y: 236,
            },
        ],
    },
    {
        id: "france",
        data: [
            {
                x: "plane",
                y: 212,
            },
            {
                x: "helicopter",
                y: 190,
            },
            {
                x: "boat",
                y: 270,
            },
            {
                x: "train",
                y: 9,
            },
            {
                x: "subway",
                y: 75,
            },
            {
                x: "bus",
                y: 175,
            },
        ],
    },
    {
        id: "us",
        data: [
            {
                x: "plane",
                y: 191,
            },
            {
                x: "helicopter",
                y: 136,
            },
            {
                x: "boat",
                y: 91,
            },
            {
                x: "train",
                y: 190,
            },
            {
                x: "subway",
                y: 211,
            },
            {
                x: "bus",
                y: 152,
            },
        ],
    },
];

