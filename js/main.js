const colorCodes = [
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

let mobileDevice = $(window).width() < 991;
let ipad = ($(window).width() < 800 && $(window).width() > 400);
let desktopDevice = $(window).width() > 992;
let ipad1 = ($(window).width() == 1024);
let ipad2 = ($(window).width() == 768);
let mac = ($(window).width() > 1600);
let url = "";
$(function () {
    mainApp = {
        _isMobile: "",
        init: function () {
            this.test();
        },
        test: function () {
            console.log(colorCodes);
        }




    };
    mainApp.init()
});

