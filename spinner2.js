const times = [1, 3, 5, 7, 9, 11,13, 15, 17];
const char = ['|','/','-','\\','|','/','-','\\','|'];
for (let i = 0; i < times.length; i++) {
  if (i === times.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${char[i]}   \n`);
    }, times[i] * 100);
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${char[i]}   `);
    }, times[i] * 100);
  }
}