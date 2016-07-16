#pragma strict

var pos0: Vector3;
var speed: float = 5f;

function Start () {
	pos0 = transform.position;
}

function Update () {
	transform.Translate(Vector3(-1, 0, 0) * speed * Time.deltaTime);
	if(transform.position.x < -pos0.x){
		transform.position = pos0;
	}
}