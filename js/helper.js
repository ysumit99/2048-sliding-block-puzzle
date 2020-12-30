let deviceType = () => {

    let viewportWidth = window.innerWidth;
    let device = "";

    if (viewportWidth < 768)
        device = "mobile";
    else if (viewportWidth == 768)
        device = "ipad";
    else if (viewportWidth >= 992)
        device = "desktop";
    else if (viewportWidth > 1600)
        device = "largeDesktop";

    return device;

};

const colorCodes = [
    {
        value: 0,
        color: "",
        backgroundColor: "rgba(238, 228, 218, 0.35)"
    },
    {
        value: 2,
        color: "#bcac9f",
        backgroundColor: "#eee4da"

    },
    {
        value: 4,
        color: "#bcac9f",
        backgroundColor: "#efe1c9"

    },
    {
        value: 8,
        color: "#f8f6f1",
        backgroundColor: "#f3b379"

    },
    {
        value: 16,
        color: "#f8f6f1",
        backgroundColor: "#f69663"

    },
    {
        value: 32,
        color: "#f8f6f1",
        backgroundColor: "#f67d5f"

    },
    {
        value: 64,
        color: "#f8f6f1",
        backgroundColor: "#f75f3b"

    },
    {
        value: 128,
        color: "#f8f6f1",
        backgroundColor: "#eccf72"

    },
    {
        value: 256,
        color: "blue",
        backgroundColor: "red"

    },
    {
        value: 512,
        color: "blue",
        backgroundColor: "red"

    },
    {
        value: 1024,
        color: "blue",
        backgroundColor: "red"

    },
    {
        value: 2048,
        color: "blue",
        backgroundColor: "red"

    }

];

let randomCellGenerator = (min = 1, max = 16) => {
    return Math.floor(Math.random() * max) + min;
}


export { colorCodes, deviceType, randomCellGenerator };