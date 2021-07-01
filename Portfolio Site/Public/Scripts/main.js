

const fireworks = new Fireworks({
    target: document.querySelector('.fireworks'),
    hue: 120,
    startDelay: 1,
    minDelay: 20,
    maxDelay: 30,
    speed: 5,
    acceleration: 1.15,
    friction: 0.88,
    gravity: 1,
    particles: 65,
    trace: 3,
    explosion: 6,
    boundaries: {
      top: 70,
      bottom: container.clientHeight,
      left: 70,
      right: container.clientWidth
    },
})




function main() {
    console.log("Ready");
    let pictureEffect = document.querySelector()
    fireworks.start();
}
main();