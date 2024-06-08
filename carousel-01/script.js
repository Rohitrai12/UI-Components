
const container = document.querySelector(".container");
const containerCarousel = container.querySelector(".container-carousel");
const carousel = container.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");

let isMouseDown = false;
let currentMousePos = 0;
let lastMousePos = 0;
let lastMoveTo = 0;
let moveTo = 0;

const createCarousel = () => {
  const carouselProps = onResize();
  const length = carouselItems.length;
  const degrees = 360 / length; 
  const gap = 20; 
  const tz = distanceZ(carouselProps.w, length, gap);
  const height = calculateHeight(tz);

  container.style.width = tz * 2 + gap * length + "px";
  container.style.height = height + "px";

  carouselItems.forEach((item, i) => {
    const degreesByItem = degrees * i + "deg";
    item.style.setProperty("--rotatey", degreesByItem);
    item.style.setProperty("--tz", tz + "px");
  });
};

const lerp = (a, b, n) => {
  return n * (a - b) + b;
};

const distanceZ = (widthElement, length, gap) => {
  return widthElement / 2 / Math.tan(Math.PI / length) + gap; 
};

const calculateHeight = (z) => {
  const t = Math.atan((90 * Math.PI) / 180 / 2);
  const height = t * 2 * z;
  return height;
};

const calculateFov = (carouselProps) => {
  const perspective = window
    .getComputedStyle(containerCarousel)
    .perspective.split("px")[0];

  const length =
    Math.sqrt(carouselProps.w * carouselProps.w) +
    Math.sqrt(carouselProps.h * carouselProps.h);
  const fov = 2 * Math.atan(length / 
    (2 * perspective)) * (180 / Math.PI);
  return fov;
};

const getPosX = (x) => {
  currentMousePos = x;

  moveTo = currentMousePos < lastMousePos ? 
   moveTo - 2 : moveTo + 2;

  lastMousePos = currentMousePos;
};

const update = () => {
  lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
  carousel.style.setProperty("--rotatey", lastMoveTo + "deg");

  requestAnimationFrame(update);
};

const onResize = () => {
  const carouselDimensions = containerCarousel.getBoundingClientRect();
  const carouselProps = {
    w: carouselDimensions.width,
    h: carouselDimensions.height,
  };
  return carouselProps;
};

const initEvents = () => {
  carousel.addEventListener("mousedown", () => {
    isMouseDown = true; carousel.style.cursor = "grabbing";
  });
  carousel.addEventListener("mouseup", () => {
    isMouseDown = false; carousel.style.cursor = "grab";
  });
  carousel.addEventListener("mouseleave", () => {
    isMouseDown = false
  });
  carousel.addEventListener(
    "mousemove", (e) => isMouseDown && getPosX(e.clientX)
  );
  carousel.addEventListener("touchstart", () => {
    isMouseDown = true; carousel.style.cursor = "grabbing";
  });
  carousel.addEventListener("touchend", () => {
    isMouseDown = false; carousel.style.cursor = "grab";
  });
  carousel.addEventListener(
    "touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX)
  );

  window.addEventListener("resize", createCarousel);

  update();
  createCarousel();
};

initEvents();
// inspired by programador.cs


