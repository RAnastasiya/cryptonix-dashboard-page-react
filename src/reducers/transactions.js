var uniqid = require("uniqid");

function rand() {
    return uniqid() + uniqid() + uniqid() + uniqid();
}

export default function () {

    return[
        {
            id: 1,
            time: "16:23. 12 dec 2018",
            value: "0.009 BTC",
            key: rand(),
        },{
            id: 2,
            time: "16:23. 12 dec 2018",
            value: "0.009 BTC",
            key: rand(),
        },{
            id: 3,
            time: "16:23. 12 dec 2018",
            value: "0.009 BTC",
            key: rand(),
        },{
            id: 4,
            time: "16:23. 12 dec 2018",
            value: "0.009 BTC",
            key: rand(),
        },{
            id: 5,
            time: "16:23. 12 dec 2018",
            value: "0.009 BTC",
            key: rand(),
        },
    ];
}