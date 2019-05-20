// Write your code here



let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine,
	options: {
		wireframes: false
	}
	
});
Engine.run(engine);
Render.run(render);



let ball=Bodies.circle(200, 10, 40);
let floor=Bodies.rectangle(340,580,700, 30, {isStatic: true});
let wall=Bodies.rectangle(0,580, 30, 1000, {isStatic: true});
let wall2=Bodies.rectangle(675,580, 30, 1000, {isStatic: true});
let pentagon = Bodies.polygon(450, 200, 6, 6,);
let soft = Composites.softBody(200, 200, 20, 1, 1, 1, false, 5, null, null);

let stuff = Composites.stack(20, 100, 17, 10, 1, 1, function(x, y){
	return Bodies.rectangle(x, y, 36, 36);
});
							 
//let myCar=Composites.car(390, 0, 100, 30, 40);
let myCradle = Composites.newtonsCradle(600, 100, 30, 5, 160);

World.add(engine.world, [floor, wall, wall2, stuff]);
 
let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;