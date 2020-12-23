// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4/3*PI*Math.pow(radius,3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI*Math.pow(radius, 2)*height/3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return width*height*depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let ans = 0;
  for(let solid of solids){
    switch(solid.type){
      case 'sphere':
        ans += sphereVolume(solid.radius);
        break;
      case 'cone':
        ans += coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        ans += prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
  }
  return ans;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);