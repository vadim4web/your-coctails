const capitalizeWords = (wordsString) => {
  return wordsString.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export default capitalizeWords;
