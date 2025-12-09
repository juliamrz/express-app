const getRandomItems = (array, count) => {
  return array
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default getRandomItems;
