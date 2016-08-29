var result = 0;
for (var i = 2; i < process.argv.length; i+=1) {
  result += Number(process.argv[i]);
}

console.log(result);