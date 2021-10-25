// Crear escena, crear objetos, camaras y luces.
var scene = new THREE.Scene();
var dim =  x,y,z;
var dim = new dim (10,10,10);
var angulo = Math.PI/2;
var pos = 0.5;
var lado = 1;

function cubo(dim, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(dim);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // Añadir cubo en la escena
    scene.add(cube);
    return(cube);
}
function init() {
    // Crear escena, crear objetos, camaras y luces.

    // Crear camara
    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Posicion de la camara
    camera.position.set(-10, 8, 20);
    camera.lookAt(scene.position);

    // Crear render
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xFFFFFFF));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
    
    // SE AGREGA LA POSICION DE LA CAMARA 
    camera.position.set(15, 20, 30);
    camera.lookAt(scene.position);

    // Crear lineas de x,y,z
    var axes = new THREE.AxesHelper(5);
    scene.add(axes);

    Cubo = [];   // Definir un array unidimensional
    Cubo.push(cubo(dim, 0xE59866, 'Basic', false)); //Naranja
    Cubo.push(cubo(dim, 0x1CFF00, 'Basic', false)); //Verde
    Cubo.push(cubo(dim, 0x0070B8, 'Basic', false)); //Azul

    //Cubo Naranja
    Cubo[0].position.set(0, 0, 0);//posicion inicial origen
    scene.add(Cubo[0]);
    Cubo[0].position.set(0.5, 0.5, 0.5); // movimiento  posicion y = 0.5
    scene.add(Cubo[0]);

    //Cubo verde
    Cubo[1].position.set(0, 0, 0);//posicion inicial origen
    scene.add(Cubo[1]);
     Cubo[1].translateX ( 0.5 ); // movimiento  en el eje X
     Cubo[1].translateY ( 1.4 ); // movimiento e en el eje Y = 1.5
     Cubo[1].translateZ ( 0.5 ); // movimiento  en el eje Z
     Cubo[1].scale.set(0.75,0.75,0.75);
    scene.add(Cubo[1]);

    //Cubo Azul
    Cubo[2].position.set(0, 0, 0);//posicion inicial origen
    scene.add(Cubo[2]);
    Cubo[2].position.set(0.5, 2.0, 0.5); // movimiento  posicion y = 2.5
    Cubo[2].scale.set(0.5,0.5,0.5);
    scene.add(Cubo[2]);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}