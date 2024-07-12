function foo(a, b) {
  A`1`;
  arguments[1] = 2;
  B`2`;
  console.log(b);
  C`undefined`;
}
D`Error`;
foo(1, 1);
