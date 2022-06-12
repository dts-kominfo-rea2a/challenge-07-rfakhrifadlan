const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (esmosi) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let allMovie = [...ixx, ...vgc];

  let totalEmosi = 0;
  allMovie.map((e) => (e.hasil == esmosi ? (totalEmosi += 1) : null));

  return totalEmosi;
};

module.exports = {
  promiseOutput,
};
