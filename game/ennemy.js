var Ennemy = function () {
    var posx = Math.floor(Math.random() * WIDTH - WIDTH / 2);
    var posy = Math.floor(Math.random() * HEIGHT - HEIGHT / 2);
    this.position = new THREE.Vector2(posx, 0);
    this.life = 1;
    this.direction = 1;
    this.speed = 0;
    var colors = Array(0xff00ff, 0x5364a9, 0xf500ff, 0x0564ff);
    this.material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * 4)],
    });

    vehiculeMesh = new THREE.DodecahedronGeometry(20, 0);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;
    this.graphic.position.x = posx;
    this.graphic.position.y = posy;

    this.graphic.rotateOnAxis(
        new THREE.Vector3(0, 0, 1),
        this.direction + (3 * Math.PI) / 2
    );
};

Ennemy.prototype.dead = function () {
    var posx = Math.floor(Math.random() * WIDTH - WIDTH / 2);
    var posy = Math.floor(Math.random() * HEIGHT - HEIGHT / 2);
    ennemy.graphic.position.x = posx;
    ennemy.graphic.position.y = posy;
};
