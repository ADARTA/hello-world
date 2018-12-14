module.exports = function hello(string) {
  if (typeof string !== "string") return "Hello World!";
  return string.concat("Hello World!");
};