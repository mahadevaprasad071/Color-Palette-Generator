function randomColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {

    for (let i = 1; i <= 5; i++) {

        const color = randomColor();

        document.getElementById("color" + i).style.backgroundColor = color;

        document.getElementById("code" + i).textContent = color;
    }
}

function copyColor(id) {

    const color = document.getElementById(id).textContent;

    navigator.clipboard.writeText(color);

    alert(color + " copied! 📋");
}

generatePalette();
