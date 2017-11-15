function addTogether() {
  let args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ?
    undefined:
    args.length > 1 ?
      args.reduce((x,y) => x += y):
      n => typeof n === 'number' ?
        n += args[0]:
        undefined;
}