"use strict";

// NullDev 4 RundesBalli <3

let changeBg = (r, g, b, hex, tiles, tileSize, borderWidth, mode, multi, steps) => {
    fetch(`https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&hex=${hex}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&multi=${multi}&steps=${steps}&json&base64`, { mode: "cors" })
        .then(res => res.json())
        .then(data => {
            document.body.style.background = `url("${data.uri}") repeat center center`;
            document.getElementById("download").style.display = "block";
            document.getElementById("downloadLink").setAttribute("href", data.uri);
            document.getElementById("downloadLinkImage").setAttribute("href", data.uri);
            document.getElementById("downloadImage").setAttribute("src", data.uri);
            document.getElementById("base64").style.display = "block";
            document.getElementById("base64String").textContent = data.base64;
        });
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        changeBg(
            document.getElementById("r").value,
            document.getElementById("g").value,
            document.getElementById("b").value,
            document.getElementById("hex").value,
            document.getElementById("tiles").value,
            document.getElementById("tileSize").value,
            document.getElementById("borderWidth").value,
            document.querySelector('input[name="mode"]:checked').value,
            document.getElementById("multi").value,
            document.getElementById("steps").value
        );
    });
});
