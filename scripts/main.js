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

let fortressAAWeapon = new Weapon("missiles-mount");
fortressAAWeapon.bullet = new BasicBulletType(5, 18); // syntax speed: (speed, dmg)
fortressAAWeapon.shootSound = Sounds.shootSnap;
fortressAAWeapon.mirror = false;
fortressAAWeapon.rotate = true;
fortressAAWeapon.top = true;
fortressAAWeapon.x = 0;
fortressAAWeapon.y = -4;
fortressAAWeapon.shootY = 2;
fortressAAWeapon.reload = 60;
fortressAAWeapon.rotateSpeed = 5;
fortressAAWeapon.bullet.width = 8;
fortressAAWeapon.bullet.height = 10;
fortressAAWeapon.bullet.weaveMag = 3.5;
fortressAAWeapon.bullet.weaveScale = 4;
fortressAAWeapon.bullet.trailWidth = 2;
fortressAAWeapon.bullet.trailLength = 3;
fortressAAWeapon.bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
fortressAAWeapon.bullet.lifetime = (32 * 7.5) / 5;

UnitTypes.fortress.weapons.add(fortressAAWeapon);
UnitTypes.fortress.health = 500;
UnitTypes.fortress.range = (32*8);
UnitTypes.fortress.weapons.get(0).bullet.splashDamageRadius = 24

UnitTypes.scepter.health = 4000;
UnitTypes.scepter.speed = (3.22 / 7.5);
UnitTypes.scepter.weapons.get(0).bullet.collidesAir = false;
UnitTypes.scepter.weapons.get(0).bullet.damage = 100;
UnitTypes.scepter.weapons.get(0).bullet.lightningDamage = 5;
UnitTypes.scepter.weapons.get(1).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(1).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(1).bullet.damage = 15;
UnitTypes.scepter.weapons.get(1).bullet.weaveMag = 3.5;
UnitTypes.scepter.weapons.get(1).bullet.weaveScale = 4;
UnitTypes.scepter.weapons.get(1).bullet.trailWidth = 2;
UnitTypes.scepter.weapons.get(1).bullet.trailLength = 3;
UnitTypes.scepter.weapons.get(1).bullet.speed = 5;
UnitTypes.scepter.weapons.get(1).bullet.lifetime = (24 * 7.5) / 5;
UnitTypes.scepter.weapons.get(1).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
UnitTypes.scepter.weapons.get(2).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(2).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(2).bullet.damage = 15;
UnitTypes.scepter.weapons.get(2).bullet.weaveMag = 3.5;
UnitTypes.scepter.weapons.get(2).bullet.weaveScale = 4;
UnitTypes.scepter.weapons.get(2).bullet.trailWidth = 2;
UnitTypes.scepter.weapons.get(2).bullet.trailLength = 3;
UnitTypes.scepter.weapons.get(2).bullet.speed = 5;
UnitTypes.scepter.weapons.get(2).bullet.lifetime = (24 * 7.5) / 5;
UnitTypes.scepter.weapons.get(2).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave

UnitTypes.reign.health =75000;
UnitTypes.reign.weapons.get(0).bullet.collidesAir = false;
UnitTypes.reign.targetAir = false;

UnitTypes.quasar.weapons.get(0).bullet.collidesAir = false;
UnitTypes.quasar.targetAir = false;
UnitTypes.quasar.abilities.get(0).radius = 80

//laser bullets are pain to wrap your mind around
UnitTypes.vela.targetAir = false;
UnitTypes.vela.weapons.get(0).bullet.collidesAir = false;
UnitTypes.vela.weapons.get(0).bullet.damage = (200 / 12);
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
atraxAAWeapon.bullet = new FlakBulletType(5, 1);
atraxAAWeapon.bullet.sprite = "large-orb";
atraxAAWeapon.bullet.frontColor = Pal.sapBullet;
atraxAAWeapon.bullet.backColor = Pal.sapBulletBack;
atraxAAWeapon.mirror = false;
atraxAAWeapon.rotate = true;
atraxAAWeapon.x = 0;
atraxAAWeapon.y = 2;
atraxAAWeapon.shootY = 2;
atraxAAWeapon.reload = 18;
atraxAAWeapon.shootSound = Sounds.shootSnap;
atraxAAWeapon.bullet.lifetime = 30;
atraxAAWeapon.bullet.splashDamage = 10 * 1.5;
atraxAAWeapon.bullet.splashDamageRadius = 10;

UnitTypes.atrax.hitSize = 11;
UnitTypes.atrax.range = 110;
UnitTypes.atrax.maxRange = 110; //manual ovrride so it doesnt attack at full range of the mini scatter (18)
UnitTypes.atrax.weapons.add(atraxAAWeapon);


//Unrelated, Rushie cannot spell spriroct
UnitTypes.spiroct.speed = (5 / 7.5);
UnitTypes.spiroct.targetAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(1).bullet.collidesAir = false;

UnitTypes.arkyid.targetAir = false;
UnitTypes.arkyid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(1).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(2).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamageRadius = 28
UnitTypes.arkyid.health = 4000;

UnitTypes.toxopid.speed = (5 / 7.5);
UnitTypes.toxopid.weapons.get(0).bullet.damage = 500;
UnitTypes.toxopid.weapons.get(0).bullet.collidesAir = false;

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
UnitTypes.poly.weapons.get(0).bullet.damage = 25;
UnitTypes.poly.weapons.get(0).bullet.speed = 4 * 1.5;
UnitTypes.poly.weapons.get(0).bullet.lifetime = 50 / 1.5;
UnitTypes.poly.weapons.get(0).bullet.collidesGround = false;
UnitTypes.poly.weapons.get(0).bullet.healPercent = 0.01;
UnitTypes.poly.health = 200;
UnitTypes.poly.payloadCapacity = (1.5 * 1.5) * 64;
UnitTypes.poly.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload
UnitTypes.poly.canHeal = true;
UnitTypes.poly.weapons.get(0).bullet.absorbable = false;

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
UnitTypes.horizon.weapons.get(0).shoot.shots = 10;
UnitTypes.horizon.weapons.get(0).shoot.shotDelay = 2;
UnitTypes.horizon.weapons.get(0).reload = (60 * 5);
UnitTypes.horizon.weapons.get(0).velocityRnd = 3.5;
UnitTypes.horizon.weapons.get(0).bullet.damage = 5;
UnitTypes.horizon.weapons.get(0).bullet.splashDamageRadius = 32;	

UnitTypes.zenith.health = 400;
UnitTypes.zenith.speed = (26 / 7.5);
UnitTypes.zenith.range = 280;
UnitTypes.zenith.weapons.get(0).inaccuracy = 0;
UnitTypes.zenith.weapons.get(0).bullet = new SapBulletType();
UnitTypes.zenith.weapons.get(0).bullet.collidesGround = false;
UnitTypes.zenith.weapons.get(0).bullet.damage = 65;
UnitTypes.zenith.weapons.get(0).bullet.length = 240;
UnitTypes.zenith.weapons.get(0).bullet.pierceCap = -1;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = 10;
UnitTypes.zenith.weapons.get(0).bullet.sapStrength = 0;
UnitTypes.zenith.weapons.get(0).bullet.width = 0.55;
UnitTypes.zenith.weapons.get(0).bullet.hitColor = Pal.bulletYellowBack;
UnitTypes.zenith.weapons.get(0).bullet.color = Pal.bulletYellowBack;

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

Blocks.duo.ammoTypes.get(Items.copper).ammoMultiplier = 4;
Blocks.duo.ammoTypes.get(Items.graphite).ammoMultiplier = 8;
Blocks.duo.ammoTypes.get(Items.silicon).ammoMultiplier = 10;

Blocks.swarmer.targetGround = false;
Blocks.swarmer.inaccuracy = 2;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).damage = 40;
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
Blocks.swarmer.ammoTypes.get(Items.pyratite).damage = 55;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamage = 0;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamageRadius = -1;
Blocks.swarmer.ammoTypes.get(Items.pyratite).hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.pyratite).despawnEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).damage = 45;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamage = 10;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamageRadius = 28;
Blocks.swarmer.range = 360;
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

Blocks.cyclone.range = 224;
Blocks.cyclone.targetGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.damage = 50;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullets = 6;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.damage = 100;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullets = 6;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningDamage = 50;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningType = lightningBul;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).splashDamage = 100;
Blocks.cyclone.limitRange();
Blocks.cyclone.requirements = ItemStack.with(Items.copper, 1000, Items.titanium, 500,  Items.plastanium, 240);																											  

Blocks.meltdown.targetAir = false;
Blocks.meltdown.shootType.collidesAir = false;

Blocks.exponentialReconstructor.constructTime = 60 * 60 * (1.5 / 2);
let expoCons = new ConsumeItems(ItemStack.with(Items.silicon, (850 / 2), Items.titanium, (750 / 2), Items.plastanium, (650/ 2)));
Blocks.exponentialReconstructor.requirements = ItemStack.with(Items.lead, 1200, Items.titanium, 1000, Items.thorium, 650, Items.silicon, 700,  Items.plastanium, 250);

Blocks.tetrativeReconstructor.constructTime = 60 * 60 * (4 * 2);
let tetrCons = new ConsumeItems(ItemStack.with(Items.silicon, (1000 * 2), Items.plastanium, (600 * 2), Items.surgeAlloy, (500 * 2), Items.phaseFabric, (350 * 2)));

function postLoadContent(){
	//Work around since no easier way to do this that i know off -Rushie
	Blocks.exponentialReconstructor.consumers[1] = expoCons;	
	Blocks.tetrativeReconstructor.consumers[1] = tetrCons;	
}

//haha forgot to make some changes load also on dedicated servers
Events.on(ClientLoadEvent, () => {
	postLoadContent();
});

Events.on(ServerLoadEvent, () => {
	postLoadContent();
});
