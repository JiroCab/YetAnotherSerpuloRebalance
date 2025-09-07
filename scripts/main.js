//Speed is x * 7.5 to get whatever is displayed in the core database
//to pick which weapons are, replace the numer in `get(x)`, order of weapons can be checked in the core database
// ^ pair of weapons are counted as one and affect both, and it starts from 0
 //compensating for hit rate 
let lightningBul = new BulletType(0.0001, 0);
lightningBul.lifetime = Fx.lightning.lifetime;
lightningBul.hitEffect = Fx.hitLancer;
lightningBul.despawnEffect = Fx.none;
lightningBul.status = StatusEffects.shocked;
lightningBul.statusDuration = 10;
lightningBul.hittable = false;
lightningBul.lightColor = Color.white;
lightningBul.collidesGround = false;
lightningBul.collidesAir = true;

UnitTypes.mace.speed = 0.7; 
UnitTypes.mace.health = 700; 
UnitTypes.mace.targetAir = false;
UnitTypes.mace.weapons.get(0).bullet.collidesAir = false;
UnitTypes.mace.weapons.get(0).bullet.damage = 20;

let fortressAAWeapon = new Weapon("missiles-mount");
fortressAAWeapon.bullet = new BasicBulletType(5, 150); // syntax speed: (speed, dmg)
fortressAAWeapon.shootSound = Sounds.dullExplosion;
fortressAAWeapon.mirror = false;
fortressAAWeapon.rotate = true;
fortressAAWeapon.top = true;
fortressAAWeapon.x = 0;
fortressAAWeapon.y = -4;
fortressAAWeapon.shootY = 2;
fortressAAWeapon.reload = 240;
fortressAAWeapon.rotateSpeed = 5;
fortressAAWeapon.bullet.width = 10;
fortressAAWeapon.bullet.height = 13;
fortressAAWeapon.bullet.weaveMag = 3.5;
fortressAAWeapon.bullet.weaveScale = 4;
fortressAAWeapon.bullet.trailWidth = 3;
fortressAAWeapon.bullet.trailLength = 4;
fortressAAWeapon.bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
fortressAAWeapon.bullet.lifetime = (32 * 8) / 5;
fortressAAWeapon.bullet.collidesGround = false;
fortressAAWeapon.bullet.absorbable = false;

UnitTypes.fortress.weapons.add(fortressAAWeapon);
UnitTypes.fortress.health = 500;
UnitTypes.fortress.range = (32*8);
UnitTypes.fortress.weapons.get(0).bullet.splashDamageRadius = 24;

UnitTypes.scepter.health = 2000;
UnitTypes.scepter.speed = (3.22 / 7.5);
UnitTypes.scepter.weapons.get(0).bullet.collidesAir = false;
UnitTypes.scepter.weapons.get(0).bullet.damage = 100;
UnitTypes.scepter.weapons.get(0).bullet.lightningDamage = 5;
UnitTypes.scepter.weapons.get(0).bullet.lifetime = (32 * 8) / 8;
UnitTypes.scepter.weapons.get(0).shootCone = 6.9; //incrased the shoot cone to reduce ai dumbness
UnitTypes.scepter.weapons.get(1).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(1).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(1).bullet.damage = 15;
UnitTypes.scepter.weapons.get(1).bullet.weaveMag = 3.5;
UnitTypes.scepter.weapons.get(1).bullet.weaveScale = 4;
UnitTypes.scepter.weapons.get(1).bullet.trailWidth = 2;
UnitTypes.scepter.weapons.get(1).bullet.trailLength = 3;
UnitTypes.scepter.weapons.get(1).bullet.speed = 5;
UnitTypes.scepter.weapons.get(1).bullet.lifetime = (32 * 8) / 5;
UnitTypes.scepter.weapons.get(1).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
UnitTypes.scepter.weapons.get(2).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(2).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(2).bullet.damage = 15;
UnitTypes.scepter.weapons.get(2).bullet.weaveMag = 3.5;
UnitTypes.scepter.weapons.get(2).bullet.weaveScale = 4;
UnitTypes.scepter.weapons.get(2).bullet.trailWidth = 2;
UnitTypes.scepter.weapons.get(2).bullet.trailLength = 3;
UnitTypes.scepter.weapons.get(2).bullet.speed = 5;
UnitTypes.scepter.weapons.get(2).bullet.lifetime = (32 * 8) / 5;
UnitTypes.scepter.weapons.get(2).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave

UnitTypes.reign.health =75000;
UnitTypes.reign.weapons.get(0).bullet.collidesAir = false;
UnitTypes.reign.weapons.get(0).bullet.lifetime = (32 * 8) / 13;
UnitTypes.reign.weapons.get(0).shootCone = 6.9; //incrased the shoot cone to reduce ai dumbness
UnitTypes.reign.targetAir = false;

//Rushie is a dumb, forgot to say fixed point healing points are not supported
let novaHeal = new RepairBeamWeapon("");
novaHeal.top = false;
novaHeal.mirror = true;
novaHeal.rotate = true;
novaHeal.pulseRadius = 3;
novaHeal.pulseStroke = 1;
novaHeal.x = 3;
novaHeal.y = -4;
novaHeal.rotate = false;
novaHeal.ignoreRotation = false;
novaHeal.beamWidth = 0.3;
novaHeal.layerOffset = -0.01;
novaHeal.repairSpeed = 0.2;
novaHeal.bullet = new BulletType();
novaHeal.bullet.maxRange = 80;
novaHeal.shootCone = 30;

UnitTypes.nova.weapons.add(novaHeal);
UnitTypes.nova.abilities.remove(0);

UnitTypes.pulsar.mineTier = -1;
UnitTypes.pulsar.mineSpeed = 1;
UnitTypes.pulsar.health = 640;

UnitTypes.quasar.weapons.get(0).bullet.collidesAir = false;
UnitTypes.quasar.targetAir = false;
UnitTypes.quasar.abilities.get(0).radius = 80; 
UnitTypes.quasar.mineTier = -1;
UnitTypes.quasar.mineSpeed = 1;

//laser bullets are pain to wrap your mind around
UnitTypes.vela.targetAir = false;
UnitTypes.vela.weapons.get(0).bullet.collidesAir = false;
UnitTypes.vela.health = 3000;

UnitTypes.corvus.targetAir = false;
UnitTypes.corvus.weapons.get(0).bullet.collidesAir = false;
UnitTypes.corvus.weapons.get(0).bullet.damage = 2000;
UnitTypes.corvus.weapons.get(0).bullet.length = (62 * 8);
UnitTypes.corvus.health = 10000;

UnitTypes.crawler.targetAir = false;
UnitTypes.crawler.weapons.get(0).bullet.collidesAir = false;
UnitTypes.crawler.weapons.get(0).bullet.splashDamage = 200;
UnitTypes.crawler.weapons.get(0).bullet.splashDamageRadius = 32;
UnitTypes.crawler.range = (1);

let atraxAAWeapon = new Weapon();
let atraxAAPart = new RegionPart("quell-missile")
atraxAAPart.rotation = 180;
atraxAAPart.xScl = 0.5;
atraxAAPart.yScl = 0.5;

atraxAAWeapon.region = UnitTypes.crawler.weapons.get(0).region;
atraxAAWeapon.parts.add(atraxAAPart);
atraxAAWeapon.bullet = new FlakBulletType(5, 0);
atraxAAWeapon.bullet.sprite = "large-orb";
atraxAAWeapon.bullet.frontColor = Pal.sapBullet;
atraxAAWeapon.bullet.backColor = Pal.sapBulletBack;
atraxAAWeapon.mirror = false;
atraxAAWeapon.rotate = true;
atraxAAWeapon.x = 0;
atraxAAWeapon.y = 2;
atraxAAWeapon.shootY = 2;
atraxAAWeapon.reload = 300;
atraxAAWeapon.shootSound = Sounds.shootSnap;
atraxAAWeapon.bullet.lifetime = 40;
atraxAAWeapon.bullet.splashDamage = 55;
atraxAAWeapon.bullet.splashDamageRadius = 25;
atraxAAWeapon.bullet.absorbable = false;

UnitTypes.atrax.hitSize = 11;
UnitTypes.atrax.range = 110;
UnitTypes.atrax.maxRange = 110; //manual ovrride so it doesnt attack at full range of the mini scatter (18)
UnitTypes.atrax.weapons.add(atraxAAWeapon);
UnitTypes.atrax.health = 400;
UnitTypes.atrax.hovering = true;
UnitTypes.atrax.drownTimeMultiplier = 99999;

let spiroctTorpedo = new Weapon();
spiroctTorpedo.shootSound = Sounds.mineDeploy;
spiroctTorpedo.layerOffset = -1;
spiroctTorpedo.top = false;
spiroctTorpedo.mirror = false;
spiroctTorpedo.x = 0;
spiroctTorpedo.y = 0;
spiroctTorpedo.shootX = 0;
spiroctTorpedo.shootY = 0;
spiroctTorpedo.reload = 240;
spiroctTorpedo.bullet = BasicBulletType(2,500);
spiroctTorpedo.bullet.sprite = "mine-bullet";
spiroctTorpedo.bullet.width = 8;
spiroctTorpedo.bullet.height = 8;
spiroctTorpedo.bullet.layer = Layer.scorch;
spiroctTorpedo.bullet.shootEffect = Fx.none;
spiroctTorpedo.bullet.smokeEffect = Fx.none;
spiroctTorpedo.bullet.maxRange = 100;
spiroctTorpedo.ignoreRotation = true;
spiroctTorpedo.bullet.backColor = Pal.sapBulletBack;
spiroctTorpedo.bullet.frontColor = Pal.sapBullet;
spiroctTorpedo.bullet.mixColorTo = Color.white;
spiroctTorpedo.bullet.hitSound = Sounds.plasmaboom;
spiroctTorpedo.bullet.underwater = true;
spiroctTorpedo.bullet.ejectEffect = Fx.none;
spiroctTorpedo.bullet.hitSize = 22;
spiroctTorpedo.bullet.collidesAir = false;
spiroctTorpedo.bullet.lifetime = 87;
spiroctTorpedo.bullet.hitEffect = Fx.sapExplosion;
spiroctTorpedo.bullet.keepVelocity = false;
spiroctTorpedo.bullet.shrinkX = shrinkY = 0;
spiroctTorpedo.inaccuracy = 2;
spiroctTorpedo.bullet.weaveMag = 5;
spiroctTorpedo.bullet.weaveScale = 4;
spiroctTorpedo.bullet.speed = 2;
spiroctTorpedo.bullet.drag = -0.017;
spiroctTorpedo.bullet.homingPower = 0.05;
spiroctTorpedo.bullet.collideFloor = true;
spiroctTorpedo.bullet.trailColor = Pal.sapBullet;
spiroctTorpedo.bullet.trailWidth = 3;
spiroctTorpedo.bullet.trailLength = 8;
spiroctTorpedo.bullet.splashDamage = 40;
spiroctTorpedo.bullet.splashDamageRadius = 32;
spiroctTorpedo.bullet.status = StatusEffects.sapped;
spiroctTorpedo.bullet.statusDuration = 60 * 10;

//Unrelated, Rushie cannot spell spriroct
UnitTypes.spiroct.speed = (5 / 7.5);
UnitTypes.spiroct.targetAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(0).shootStatus = StatusEffects.slow;
UnitTypes.spiroct.weapons.get(0).shootStatusDuration = 20;
UnitTypes.spiroct.weapons.get(0).bullet.sapStrength = 0;
UnitTypes.spiroct.weapons.get(0).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.spiroct.weapons.get(1).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(1).shootStatus = StatusEffects.slow;
UnitTypes.spiroct.weapons.get(1).shootStatusDuration = 20;
UnitTypes.spiroct.weapons.get(1).bullet.sapStrength = 0;
UnitTypes.spiroct.weapons.get(1).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.spiroct.health = 2000;
UnitTypes.spiroct.hovering = true;
UnitTypes.spiroct.drownTimeMultiplier = 99999;
UnitTypes.spiroct.weapons.add(spiroctTorpedo);

UnitTypes.arkyid.speed = (5 / 7.5);
UnitTypes.arkyid.targetAir = false;
UnitTypes.arkyid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(0).shootStatus = StatusEffects.slow;
UnitTypes.arkyid.weapons.get(0).shootStatusDuration = 20;
UnitTypes.arkyid.weapons.get(0).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.arkyid.weapons.get(0).bullet.sapStrength = 0;
UnitTypes.arkyid.weapons.get(1).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(1).shootStatus = StatusEffects.slow;
UnitTypes.arkyid.weapons.get(1).shootStatusDuration = 20;
UnitTypes.arkyid.weapons.get(1).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.arkyid.weapons.get(1).bullet.sapStrength = 0;
UnitTypes.arkyid.weapons.get(2).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(2).shootStatus = StatusEffects.slow;
UnitTypes.arkyid.weapons.get(2).shootStatusDuration = 20;
UnitTypes.arkyid.weapons.get(2).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.arkyid.weapons.get(2).bullet.sapStrength = 0;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamage = 5;
UnitTypes.arkyid.weapons.get(3).bullet.lifetime = 100;
UnitTypes.arkyid.maxRange = 55;
UnitTypes.arkyid.health = 8000;
UnitTypes.arkyid.hovering = true;
UnitTypes.arkyid.drownTimeMultiplier = 99999;

UnitTypes.toxopid.speed = (5 / 7.5);
UnitTypes.toxopid.targetAir = false;
UnitTypes.toxopid.weapons.get(0).bullet.damage = 500;
UnitTypes.toxopid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.toxopid.hovering = true;
UnitTypes.toxopid.drownTimeMultiplier = 99999;

let monoAblity = new RegenAbility();
monoAblity.percentAmount = 1 / (300 * 60) * 100; //full hp in 5mins, this is 0.005555557~ and why it doesnt add % in the databse bc of the > 0.01 check lul

UnitTypes.mono.abilities.add(monoAblity);
UnitTypes.mono.health = 200;

let polyHeal = new RepairBeamWeapon("repair-beam-weapon-center");
polyHeal.bullet = new BulletType(); //idk this is the convetion and prob to not edit Bullets.placeholder
polyHeal.targetBuildings = true; 
polyHeal.targetUnits = false; 
polyHeal.top = false;
polyHeal.mirror = false;
polyHeal.x = 0;
polyHeal.beamWidth = 0.8;
polyHeal.layerOffset = -1;
polyHeal.repairSpeed = 3;
polyHeal.bullet.maxRange = 120;
polyHeal.bullet.healPercent = 5.5;

UnitTypes.poly.weapons.add(polyHeal);
UnitTypes.poly.weapons.get(0).velocityRnd = 0;
UnitTypes.poly.weapons.get(0).bullet.damage = 40;
UnitTypes.poly.weapons.get(0).bullet.speed = 4 * 1.5;
UnitTypes.poly.weapons.get(0).bullet.lifetime = 50 / 1.5;
UnitTypes.poly.weapons.get(0).bullet.collidesGround = false;
UnitTypes.poly.weapons.get(0).bullet.absorbable = false;
UnitTypes.poly.weapons.get(0).bullet.healPercent = 0.01;
UnitTypes.poly.payloadCapacity = (1.5 * 1.5) * 64;
UnitTypes.poly.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload
UnitTypes.poly.canHeal = true;

UnitTypes.mega.health = 1200;
UnitTypes.mega.armor = 0;
UnitTypes.mega.itemCapacity = 90;
UnitTypes.mega.speed = (16 / 7.5);
UnitTypes.mega.weapons.get(0).bullet.healPercent = 1;
UnitTypes.mega.weapons.get(1).bullet.healPercent = 0.8;

UnitTypes.quad.health = 1000;
UnitTypes.quad.payloadCapacity = 0;
UnitTypes.quad.speed = (20 / 7.5);
UnitTypes.quad.constructor = UnitTypes.flare.constructor;
UnitTypes.quad.weapons.get(0).bullet.damage = 400;												 
UnitTypes.quad.weapons.get(0).bullet.splashDamage = 1000;
UnitTypes.quad.weapons.get(0).bullet.homingPower = 100
UnitTypes.quad.weapons.get(0).bullet.homingRange = 100
UnitTypes.quad.weapons.get(0).bullet.speed = 0.5
UnitTypes.quad.weapons.get(0).reload = 300;
UnitTypes.quad.trailLength = 7;

UnitTypes.oct.health = 12000;
UnitTypes.oct.buildSpeed = 20;
UnitTypes.oct.itemCapacity = 1000;
UnitTypes.oct.trailLength = 7;
UnitTypes.oct.payloadCapacity = (100 * 100) * 64;
UnitTypes.oct.abilities.get(0).max = 40000;
UnitTypes.oct.abilities.get(0).regen = (500/60);
//when I loaded up the mod the shield regen was 30,000 lol

UnitTypes.flare.weapons.get(0).bullet.homingPower = 0.04;
UnitTypes.flare.weapons.get(0).shootCone = 30;
UnitTypes.flare.rotateSpeed = 100;

UnitTypes.horizon.health = 100;
UnitTypes.horizon.speed = (20 / 7.5);
UnitTypes.horizon.weapons.get(0).shoot.shots = 8;
UnitTypes.horizon.weapons.get(0).shoot.shotDelay = 2;
UnitTypes.horizon.weapons.get(0).reload = (60 * 5);
UnitTypes.horizon.weapons.get(0).velocityRnd = 3.5;
UnitTypes.horizon.weapons.get(0).bullet.damage = 3;
UnitTypes.horizon.weapons.get(0).bullet.splashDamageRadius = 32;	

let zenithEyeCandy = new Effect(25, e => {
	Draw.color(e.color, 0.5);
	Fill.circle(e.x, e.y, e.rotation * e.fout());
});
zenithEyeCandy.layer = Layer.flyingUnitLow - 0.001; //dont render over the zeniths since its too similar to the overdirve effects :p
	
let zenithSmoke = new MoveEffectAbility(0, -1, Pal.sapBulletBack, zenithEyeCandy, 6);
zenithSmoke.teamColor = true;
zenithSmoke.minVelocity = 1.5; 

UnitTypes.zenith.abilities.add(zenithSmoke);
UnitTypes.zenith.health = 400;
UnitTypes.zenith.speed = (26 / 7.5);
UnitTypes.zenith.range = 240;
UnitTypes.zenith.weapons.get(0).bullet.collidesGround = false;
UnitTypes.zenith.weapons.get(0).bullet.absorbable = false;
UnitTypes.zenith.weapons.get(0).bullet.keepVelocity = true;
UnitTypes.zenith.weapons.get(0).bullet.speed = (3 * 2);
UnitTypes.zenith.weapons.get(0).bullet.damage = 45;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = 38;

UnitTypes.antumbra.health = 5000;
UnitTypes.antumbra.payloadCapacity = (3 * 3) * 64;
UnitTypes.antumbra.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload
UnitTypes.antumbra.weapons.add(fortressAAWeapon);

UnitTypes.eclipse.health = 66000;

UnitTypes.sei.health = 3000;
UnitTypes.sei.weapons.get(0).bullet.maxRange = 30;

UnitTypes.omura.health = 15000;
UnitTypes.omura.speed = (2.25/7.5);
UnitTypes.omura.weapons.get(0).bullet.damage =1250;
UnitTypes.omura.abilities.get(0).unit = UnitTypes.horizon;
UnitTypes.omura.abilities.get(0).spawnTime = 2400;
UnitTypes.omura.abilities.get(1).unit = UnitTypes.horizon;
UnitTypes.omura.abilities.get(1).spawnTime = 2400;

let retusaBolt = new LaserBoltBulletType(5.2, 10);
retusaBolt.lifetime = 35;
retusaBolt.healPercent = 5.5;
retusaBolt.collidesTeam = true;
retusaBolt.backColor = Pal.heal;
retusaBolt.frontColor = Color.white;

let retusaMount = new Weapon("heal-weapon-mount");
retusaMount.shootSound = Sounds.lasershoot;
retusaMount.reload = 22;
retusaMount.x = 4.5;
retusaMount.y = -3.5;
retusaMount.rotateSpeed = 5;
retusaMount.mirror = true;
retusaMount.rotate = true;
retusaMount.bullet = retusaBolt;
UnitTypes.retusa.weapons.add(retusaMount);

UnitTypes.aegires.health = 1200;

//hmm navaSnack.....
let navaSnackSheild = new ShieldArcAbility();
navaSnackSheild.radius = 42;
navaSnackSheild.angle = 120;
navaSnackSheild.regen = 1.2;
navaSnackSheild.cooldown = 60 * 8;
navaSnackSheild.max = 2000;
navaSnackSheild.width = 10;
navaSnackSheild.whenShooting = false;

UnitTypes.navanax.abilities.add(navaSnackSheild)
UnitTypes.navanax.health = 60000;
UnitTypes.navanax.weapons.get(0).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(1).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(2).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(3).bullet.collidesAir = false;

UnitTypes.beta.weapons.get(0).bullet.homingPower = 0.04;

Blocks.phaseWall.chanceDeflect = 60;
Blocks.phaseWallLarge.chanceDeflect = 60;

Blocks.surgeWall.armor = 20;
Blocks.surgeWallLarge.armor = 20;

Blocks.duo.targetAir = false;
Blocks.duo.ammoTypes.get(Items.copper).collidesAir = false;
Blocks.duo.ammoTypes.get(Items.graphite).collidesAir = false;
Blocks.duo.ammoTypes.get(Items.silicon).collidesAir = false;
Blocks.duo.health = 269;
Blocks.duo.shoot.shots = 2;
Blocks.duo.shoot.shotDelay = 3;
Blocks.duo.reload = 60;
Blocks.duo.range = 190;
Blocks.duo.limitRange();

Blocks.scorch.armor = 5

Blocks.swarmer.targetGround = false;
Blocks.swarmer.inaccuracy = 4;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).damage = 70;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamage = 0;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = -1;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.hitLancer);
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).despawnEffect = new MultiEffect(Fx.hitBulletSmall, Fx.hitLancer);
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).lightningType = lightningBul;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).frontColor = Items.surgeAlloy.color;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).trailColor = Items.surgeAlloy.color;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).backColor = Pal.lightishOrange;
Blocks.swarmer.ammoTypes.get(Items.pyratite).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.pyratite).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.pyratite).damage = 90;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamage = 0;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamageRadius = -1;
Blocks.swarmer.ammoTypes.get(Items.pyratite).hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.pyratite).despawnEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).damage = 90;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamage = 10;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamageRadius = 28;
Blocks.swarmer.range = 400;
Blocks.swarmer.limitRange();
Blocks.swarmer.requirements = ItemStack.with(Items.graphite, 210, Items.titanium, 210, Items.silicon, 180, Items.plastanium, 270);

Blocks.salvo.targetAir = false;
Blocks.salvo.ammoTypes.get(Items.copper).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.copper).ammoMultiplier = 1;
Blocks.salvo.ammoTypes.get(Items.copper).damage = 20;
Blocks.salvo.ammoTypes.get(Items.graphite).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.graphite).ammoMultiplier = 2;
Blocks.salvo.ammoTypes.get(Items.graphite).damage = 50;
Blocks.salvo.ammoTypes.get(Items.graphite).reloadMultiplier = 0.7;
Blocks.salvo.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.thorium).ammoMultiplier = 1;
Blocks.salvo.ammoTypes.get(Items.thorium).damage = 40;
Blocks.salvo.ammoTypes.get(Items.silicon).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.silicon).ammoMultiplier = 2;
Blocks.salvo.ammoTypes.get(Items.silicon).damage = 28;
Blocks.salvo.ammoTypes.get(Items.silicon).reloadMultiplier = 1.3;
Blocks.salvo.ammoTypes.get(Items.pyratite).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.pyratite).ammoMultiplier = 3;
Blocks.salvo.ammoTypes.get(Items.pyratite).damage = 35;
Blocks.salvo.ammoTypes.get(Items.pyratite).splashDamage = 20;
Blocks.salvo.scaledHealth = 500;
Blocks.salvo.inaccuracy = 1.5;
Blocks.salvo.range = 240;
Blocks.salvo.limitRange();
Blocks.salvo.reload = 240;
Blocks.salvo.shoot.shots = 25;
Blocks.salvo.ammoPerShot = 6;
Blocks.salvo.shoot.shotDelay = 1.2;
Blocks.salvo.consumeAmmoOnce = true;
Blocks.salvo.requirements = ItemStack.with(Items.copper, 450, Items.graphite, 360, Items.titanium, 225);

Blocks.parallax.range = 280;
Blocks.parallax.status = StatusEffects.unmoving;
Blocks.parallax.requirements = ItemStack.with(Items.silicon, 360, Items.titanium, 270, Items.graphite, 90);

Blocks.segment.range = 300;

Blocks.tsunami.inaccuracy = 30;
Blocks.tsunami.shoot.shots = 3;
Blocks.tsunami.reload = 1;
	
Blocks.fuse.targetAir = false;
Blocks.fuse.reload = 70;
Blocks.fuse.range = 112;
Blocks.fuse.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.fuse.ammoTypes.get(Items.thorium).status = StatusEffects.unmoving;
Blocks.fuse.ammoTypes.get(Items.thorium).statusDuration = 60;
Blocks.fuse.ammoTypes.get(Items.titanium).collidesAir = false;
Blocks.fuse.ammoTypes.get(Items.titanium).status = StatusEffects.unmoving;
Blocks.fuse.ammoTypes.get(Items.titanium).statusDuration = 60;

Blocks.cyclone.range = 240;
Blocks.cyclone.targetGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).splashDamageRadius = 20;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.damage = 110;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullets = 2;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.lifetime = 30;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).splashDamageRadius = 20;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.damage = 110;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullets = 4;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.width = 5;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.lifetime = 30;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = 20;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningDamage = 55;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningType = lightningBul;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).splashDamage = 55;
Blocks.cyclone.limitRange();
Blocks.cyclone.requirements = ItemStack.with(Items.copper, 1000, Items.titanium, 500,  Items.plastanium, 240);																											  

Blocks.ripple.ammoTypes.get(Items.graphite).splashDamageRadius = 32;
Blocks.ripple.ammoTypes.get(Items.graphite).ammoMultiplier = 1;
Blocks.ripple.ammoTypes.get(Items.silicon).splashDamageRadius = 32;
Blocks.ripple.ammoTypes.get(Items.silicon).ammoMultiplier = 1;
Blocks.ripple.ammoTypes.get(Items.plastanium).splashDamageRadius = 24;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.width = 5;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.lifetime = 30;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.damage = 100;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullets = 2;
Blocks.ripple.ammoTypes.get(Items.plastanium).ammoMultiplier = 2;
Blocks.ripple.ammoTypes.get(Items.blastCompound).splashDamageRadius = 48;
Blocks.ripple.ammoTypes.get(Items.blastCompound).ammoMultiplier = 3;
Blocks.ripple.ammoTypes.get(Items.pyratite).splashDamageRadius = 32;
Blocks.ripple.ammoTypes.get(Items.pyratite).ammoMultiplier = 2;
Blocks.ripple.shoot.shots = 20;
Blocks.ripple.reload = 240;
Blocks.ripple.ammoPerShot = 6;
Blocks.ripple.scaledHealth = 300;
Blocks.ripple.minRange = 100;
Blocks.ripple.requirements = ItemStack.with(Items.copper, 900, Items.graphite, 810, Items.titanium, 720);	
Blocks.ripple.velocityRnd = -0.3;

Blocks.spectre.ammoTypes.get(Items.graphite).knockback = 10;
Blocks.spectre.ammoTypes.get(Items.thorium).knockback = 10;
Blocks.spectre.ammoTypes.get(Items.pyratite).knockback = 10;
Blocks.spectre.scaledHealth = 200;

Blocks.foreshadow.reload = 540;

Blocks.meltdown.targetAir = false;
Blocks.meltdown.shootType.collidesAir = false;



Blocks.coreFoundation.health = 9600;

Blocks.coreNucleus.health = 22500;

Blocks.groundFactory.plans.get(1).time = 60 * 15;

Blocks.airFactory.scaledHealth = 105;
Blocks.airFactory.requirements = ItemStack.with(Items.copper, 60, Items.lead, 69, Items.silicon, 90);

Blocks.groundFactory.scaledHealth = 115;

Blocks.navalFactory.scaledHealth = 120;
Blocks.navalFactory.requirements = ItemStack.with(Items.copper, 300, Items.lead, 260, Items.silicon, 180, Items.metaglass, 240);

Blocks.additiveReconstructor.scaledHealth = 125;
Blocks.additiveReconstructor.requirements = ItemStack.with(Items.copper, 400, Items.lead, 240, Items.titanium, 200, Items.silicon, 270);

Blocks.multiplicativeReconstructor.scaledHealth = 125;

Blocks.exponentialReconstructor.scaledHealth = 125;
Blocks.exponentialReconstructor.constructTime = 60 * 60 * (1);
Blocks.exponentialReconstructor.requirements = ItemStack.with(Items.lead, 1200, Items.titanium, 1000, Items.thorium, 650, Items.silicon, 700,  Items.plastanium, 250);

Blocks.tetrativeReconstructor.scaledHealth = 200;
Blocks.tetrativeReconstructor.constructTime = 60 * 60 * (4 * 2);

function postLoadContent(){
	//Work around since no easier way to do this that i know off -Rushie
	let expoCons = Blocks.exponentialReconstructor.findConsumer(c => c instanceof  ConsumeItems);
	expoCons.items[0] = new ItemStack(Items.silicon, (850*2/3));
	expoCons.items[1] = new ItemStack(Items.titanium, (750*2/3));
	expoCons.items[2] = new ItemStack(Items.plastanium, (650*2/3));
	Blocks.exponentialReconstructor.capacities[10] = (650*4/3);
	Blocks.exponentialReconstructor.capacities[9] = (850*4/3);
	Blocks.exponentialReconstructor.capacities[6] = (750*4/3);
	
	let tetrCons = Blocks.tetrativeReconstructor.findConsumer(c => c instanceof  ConsumeItems);
	tetrCons.items[0] = new ItemStack(Items.silicon, (1000 * 2));
	tetrCons.items[1] = new ItemStack(Items.plastanium, (600 * 2));
	tetrCons.items[2] = new ItemStack(Items.surgeAlloy, (500 * 2));
	tetrCons.items[3] = new ItemStack(Items.phaseFabric, (350 * 2));
	Blocks.tetrativeReconstructor.capacities[12] = 2000;
	Blocks.tetrativeReconstructor.capacities[11] = 1400;
	Blocks.tetrativeReconstructor.capacities[10] = 2400;
	Blocks.tetrativeReconstructor.capacities[9] = 4000;
}

//haha forgot to make some changes load also on dedicated servers
Events.on(ClientLoadEvent, () => {
	postLoadContent();
});

Events.on(ServerLoadEvent, () => {
	postLoadContent();
});
