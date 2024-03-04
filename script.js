(function () {
    "use strict";
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const d = parseFloat(document.getElementById('distance').value);
        const n = document.getElementById('answer');
        if (d) {
            const convert = (d * 1.609344).toFixed(2);
            n.innerHTML = `<h2>${d} miles converts to ${convert}</h2>`;
        }
        else {
            n.innerHTML = "<h2>please provide a number!</h2>";
        }
    });
})();