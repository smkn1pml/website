const bdayBallons = (function () {
    const total = 8;

    const container = document.createElement("div");
    container.classList.add("bday-container");
    document.body.append(container);

    let bodyWidth = document.body.clientWidth;
    for (let i = 0; i < total; i++) {
        let randPosX = Math.floor(Math.random() * ((bodyWidth - 45) - 1)) + 1;

        const element = document.createElement("div");
        element.classList.add("balloon");
        element.setAttribute('style', 'left: ' + randPosX + 'px');
        container.append(element);
    }
});