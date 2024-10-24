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
UnitTypes.mace.targetAir = false;
UnitTypes.mace.weapons.get(0).bullet.collidesAir = false;
UnitTypes.mace.weapons.get(0).bullet.pierceBuilding = false;
UnitTypes.mace.weapons.get(0).bullet.buildingDamageMultiplier = 0.75;

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

UnitTypes.fortress.weapons.add(fortressAAWeapon);
UnitTypes.fortress.health = 500;
UnitTypes.fortress.range = (32*8);
UnitTypes.fortress.weapons.get(0).bullet.splashDamageRadius = 24

UnitTypes.scepter.health = 4000;
UnitTypes.scepter.speed = (3.22 / 7.5);
UnitTypes.scepter.weapons.get(0).bullet.collidesAir = false;
UnitTypes.scepter.weapons.get(0).shoot.shots = 2
UnitTypes.scepter.weapons.get(0).bullet.damage = 100;
UnitTypes.scepter.weapons.get(0).bullet.lightningDamage = 5;
UnitTypes.scepter.weapons.get(0).bullet.lifetime = (32 * 8) / 8;
UnitTypes.scepter.weapons.get(0).shootCone = 6.9; //incrased the shoot cone to reduce ai dumbness
UnitTypes.scepter.weapons.get(1).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(1).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(1).bullet.damage = 25;
UnitTypes.scepter.weapons.get(1).bullet.weaveMag = 3.5;
UnitTypes.scepter.weapons.get(1).bullet.weaveScale = 4;
UnitTypes.scepter.weapons.get(1).bullet.trailWidth = 2;
UnitTypes.scepter.weapons.get(1).bullet.trailLength = 3;
UnitTypes.scepter.weapons.get(1).bullet.speed = 5;
UnitTypes.scepter.weapons.get(1).bullet.lifetime = (32 * 8) / 5;
UnitTypes.scepter.weapons.get(1).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
UnitTypes.scepter.weapons.get(2).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(2).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(2).bullet.damage = 25;
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

UnitTypes.pulsar.mineTier = -1;
UnitTypes.pulsar.mineSpeed = 1;

UnitTypes.quasar.weapons.get(0).bullet.collidesAir = false;
UnitTypes.quasar.targetAir = false;
UnitTypes.quasar.abilities.get(0).radius = 80; 
UnitTypes.quasar.mineTier = -1;
UnitTypes.quasar.mineSpeed = 1;

//laser bullets are pain to wrap your mind around
UnitTypes.vela.targetAir = false;
UnitTypes.vela.weapons.get(0).bullet.collidesAir = false;
UnitTypes.vela.weapons.get(0).bullet.damage = (200 / 12);
UnitTypes.vela.weapons.get(0).bullet.buildingDamageMultiplier = 1.25;
UnitTypes.vela.health = 3000;

UnitTypes.corvus.targetAir = false;
UnitTypes.corvus.weapons.get(0).bullet.collidesAir = false;
UnitTypes.corvus.weapons.get(0).bullet.damage = 2000;
UnitTypes.corvus.weapons.get(0).bullet.length = (62 * 8);
UnitTypes.corvus.health = 10000;

UnitTypes.crawler.targetAir = false;
UnitTypes.crawler.weapons.get(0).bullet.collidesAir = false;
UnitTypes.crawler.weapons.get(0).bullet.splashDamage = 200;
UnitTypes.crawler.range = (16);

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
atraxAAWeapon.reload = 180;
atraxAAWeapon.shootSound = Sounds.shootSnap;
atraxAAWeapon.bullet.lifetime = 40;
atraxAAWeapon.bullet.splashDamage = 40;
atraxAAWeapon.bullet.splashDamageRadius = 25;

UnitTypes.atrax.hitSize = 11;
UnitTypes.atrax.range = 110;
UnitTypes.atrax.maxRange = 110; //manual ovrride so it doesnt attack at full range of the mini scatter (18)
UnitTypes.atrax.weapons.add(atraxAAWeapon);


//Unrelated, Rushie cannot spell spriroct
UnitTypes.spiroct.speed = (7 / 7.5);
UnitTypes.spiroct.targetAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(1).bullet.collidesAir = false;

UnitTypes.arkyid.targetAir = false;
UnitTypes.arkyid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(1).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(2).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamageRadius = 28
UnitTypes.arkyid.health = 3000;

UnitTypes.toxopid.speed = (5 / 7.5);
UnitTypes.toxopid.weapons.get(0).bullet.damage = 500;
UnitTypes.toxopid.weapons.get(0).bullet.collidesAir = false;

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
polyHeal.repairSpeed = 0.84;
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

UnitTypes.oct.health = 12000;
UnitTypes.oct.buildSpeed = 20;
UnitTypes.oct.itemCapacity = 1000;
UnitTypes.oct.abilities.get(0).max = 40000;
UnitTypes.oct.abilities.get(0).regen = (500/60);
//when I loaded up the mod the shield regen was 30,000 lol

UnitTypes.flare.weapons.get(0).bullet.homingPower = 0.04;

UnitTypes.horizon.health = 100;
UnitTypes.horizon.speed = (20 / 7.5);
UnitTypes.horizon.weapons.get(0).shoot.shots = 8;
UnitTypes.horizon.weapons.get(0).shoot.shotDelay = 2;
UnitTypes.horizon.weapons.get(0).reload = (60 * 5);
UnitTypes.horizon.weapons.get(0).velocityRnd = 3.5;
UnitTypes.horizon.weapons.get(0).bullet.damage = 3;
UnitTypes.horizon.weapons.get(0).bullet.splashDamageRadius = 32;	

UnitTypes.zenith.health = 400;
UnitTypes.zenith.speed = (26 / 7.5);
UnitTypes.zenith.range = 280;
UnitTypes.zenith.weapons.get(0).bullet.collidesGround = false;
UnitTypes.zenith.weapons.get(0).bullet.absorbable = false;
UnitTypes.zenith.weapons.get(0).bullet.keepVelocity = true;
UnitTypes.zenith.weapons.get(0).bullet.speed = (3 * 2);
UnitTypes.zenith.weapons.get(0).bullet.damage = 45;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = (18 / 6) * 2 * 8;

UnitTypes.antumbra.health = 5000;
UnitTypes.antumbra.payloadCapacity = (3 * 3) * 64;
UnitTypes.antumbra.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload

UnitTypes.eclipse.health = 66000;

UnitTypes.sei.health = 3000;
UnitTypes.sei.weapons.get(0).bullet.maxRange = 30;

UnitTypes.omura.health = 15000;
UnitTypes.omura.weapons.get(0).bullet.damage = 2500;

UnitTypes.aegires.health = 1200;

UnitTypes.navanax.health = 60000;
UnitTypes.navanax.weapons.get(0).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(1).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(2).bullet.collidesAir = false;
UnitTypes.navanax.weapons.get(3).bullet.collidesAir = false;

UnitTypes.beta.weapons.get(0).bullet.homingPower = 0.04;

Blocks.duo.ammoTypes.get(Items.copper).ammoMultiplier = 4;
Blocks.duo.ammoTypes.get(Items.graphite).ammoMultiplier = 8;
Blocks.duo.ammoTypes.get(Items.silicon).ammoMultiplier = 10;
Blocks.duo.health = 269; //funny

Blocks.swarmer.targetGround = false;
Blocks.swarmer.inaccuracy = 2;
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

Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).damage = 500;

Blocks.salvo.targetAir = false;
Blocks.salvo.ammoTypes.get(Items.copper).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.graphite).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.silicon).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.pyratite).collidesAir = false;

Blocks.fuse.targetAir = false;
Blocks.fuse.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.fuse.ammoTypes.get(Items.titanium).collidesAir = false;

Blocks.cyclone.range = 240;
Blocks.cyclone.targetGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.damage = 110;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullets = 4;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.damage = 110;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullets = 8;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningDamage = 55;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningType = lightningBul;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).splashDamage = 110;
Blocks.cyclone.limitRange();
Blocks.cyclone.requirements = ItemStack.with(Items.copper, 1000, Items.titanium, 500,  Items.plastanium, 240);																											  

Blocks.meltdown.targetAir = false;
Blocks.meltdown.shootType.collidesAir = false;

Blocks.exponentialReconstructor.constructTime = 60 * 60 * (1);
Blocks.exponentialReconstructor.requirements = ItemStack.with(Items.lead, 1200, Items.titanium, 1000, Items.thorium, 650, Items.silicon, 700,  Items.plastanium, 250);

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
