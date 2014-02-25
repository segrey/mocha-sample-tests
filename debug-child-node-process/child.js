var id = 1;

var endTime = new Date().getTime() + 1000;
while (new Date().getTime() < endTime) {
  id++;
}

setInterval(function () {
  console.log(id++);
}, 1000);
