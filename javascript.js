var container = document.getElementById('cursor-effect-container');
var cursor = document.querySelector('.cursor');
var right = document.getElementById('right');
var erro = document.getElementById('erro');
document.addEventListener('mousemove', function(e) {
  //cursor.style.left = e.pageX = 'px';
  //cursor.style.top = e.pageY = 'px';
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
container.addEventListener('mouseenter', function(){
  document.getElementById('right').style.display = "none";
  document.getElementById('cursor').style.height = "40px";
  document.getElementById('cursor').style.width = "40px";
  document.getElementById('cursor').style.left = "0%";
  document.getElementById('cursor').style.top = "0%";
  document.getElementById('cursor').style.transition = "0.1s ease";
  // document.getElementById('right').style.transform = 'translate(-50% , -50%)';
});

container.addEventListener('mouseleave', function(){
  document.getElementById('right').style.display = "none";
  document.getElementById('right').style.fontSize = "0px";
  // document.getElementById('right').style.width = "0px";
  document.getElementById('right').style.left = "-50%";
  document.getElementById('right').style.top = "-50%";
  document.getElementById('right').style.transition = "0.1s ease";
});
container.addEventListener('mouseenter', function(){
  document.getElementById('erro').style.display = "none";
  document.getElementById('cursor').style.height = "40px";
  document.getElementById('cursor').style.width = "40px";
  document.getElementById('cursor').style.left = "-50%";
  document.getElementById('cursor').style.top = "-50%";
  document.getElementById('cursor').style.transition = "0.1s ease";
});
container.addEventListener('mouseleave', function(){
  document.getElementById('erro').style.display = "block";
  document.getElementById('cursor').style.fontSize = "0px";
  // document.getElementById('cursor').style.width = "0px";
  document.getElementById('cursor').style.left = "-50%";
  document.getElementById('cursor').style.top = "-50%";
  document.getElementById('cursor').style.transition = "0.1s ease";
});


container.addEventListener('mouseleave', function(){
  document.getElementById('right').style.display = "block";
});
container.addEventListener('mouseenter', function(){
  document.getElementById('right').style.display = "block";
  document.getElementById('right').style.fontSize = "30px";
});
// const mediaQuery = window.matchMedia('(max-width: 768px)')

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     container.addEventListener('mouseenter', function(){
//       document.getElementById('right').style.display = "none";
//       document.getElementById('cursor').style.height = "50px";
//       document.getElementById('cursor').style.width = "50px";
//       document.getElementById('cursor').style.left = "-50%";
//       document.getElementById('cursor').style.top = "-50%";
//       document.getElementById('cursor').style.transition = "0.1s ease";
//     });
//     container.addEventListener('mouseenter', function(){
//       document.getElementById('right').style.display = "block";
//       // document.getElementById('right').style.height = "80px";
//       // document.getElementById('right').style.width = "80px";
//       document.getElementById('right').style.fontSize = "20px";
//       document.getElementById('right').style.left = "-50%";
//       document.getElementById('right').style.top = "-50%";
//       document.getElementById('right').style.transition = "0.1s ease";
//     });
//   }
// }
// // Register event listener
// mediaQuery.addListener(handleTabletChange)

// // Initial check
// handleTabletChange(mediaQuery)