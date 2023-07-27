const filterNullish = (objArr) => objArr.map((drink) => {
  return Object.fromEntries(
    Object.entries(drink).filter(([_, value]) => value !== null)
  );
});

export default filterNullish;
