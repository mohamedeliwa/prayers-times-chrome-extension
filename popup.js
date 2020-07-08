window.addEventListener("load", () => {
    const time_imsak = document.querySelector("#time-imsak");
    const time_fajr = document.querySelector("#time-fajr");
    const time_sunrise = document.querySelector("#time-sunrise");
    const time_duhr = document.querySelector("#time-duhr");
    const time_asr = document.querySelector("#time-asr");
    const time_sunset = document.querySelector("#time-sunset");
    const time_maghrib = document.querySelector("#time-maghrib");
    const time_isha = document.querySelector("#time-isha");

    const convertTimeFormat = (time) => {
        const hoursArr = time.split(":");
        let hours = hoursArr[0];
        if (hours > 12) {
            hours -= 12;
            hoursArr[0] = hours;
            return hoursArr.join(":");
        }

        return time;

    }

    const url = " http://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8"
    fetch(url)
        .then(function (res) { return res.json() })
        .then(function (data) {

            const timings = data.data.timings;
            time_imsak.innerText = convertTimeFormat(timings.Imsak);
            time_fajr.innerText = convertTimeFormat(timings.Fajr);
            time_sunrise.innerText = convertTimeFormat(timings.Sunrise);
            time_duhr.innerText = convertTimeFormat(timings.Dhuhr);
            time_asr.innerText = convertTimeFormat(timings.Asr);
            time_sunset.innerText = convertTimeFormat(timings.Sunset);
            time_maghrib.innerText = convertTimeFormat(timings.Maghrib);
            time_isha.innerText = convertTimeFormat(timings.Isha);

        })

})