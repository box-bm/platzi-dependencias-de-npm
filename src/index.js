const messajes = [
  "Brandon",
  "Juan",
  "Pedro",
  "Carlos",
  "Diego",
  "Laura",
  "Darlin",
];

const randomMsg = () => {
  const message = messajes[Math.floor(Math.random() * messajes.length)];
  console.log(message);
  return message;
};

module.exports = { randomMsg };