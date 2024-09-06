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

UnitTypes.fortress.health = 500;

UnitTypes.scepter.health = 4000;
UnitTypes.scepter.speed = (3.22 / 7.5);

UnitTypes.reign.health =75000;

UnitTypes.quasar.weapons.get(0).bullet.collidesAir = false;
UnitTypes.quasar.targetAir = false;

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
UnitTypes.crawler.weapons.get(0).bullet.splashDamage = 300;

UnitTypes.atrax.speed = (1.37 / 7.5);

//Unrelated, Rushie cannot spell spriroct
UnitTypes.spiroct.speed = (5 / 7.5);
UnitTypes.spiroct.targetAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(1).bullet.collidesAir = false;

UnitTypes.arkyid.targetAir = false;
UnitTypes.arkyid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(1).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(2).bullet.collidesAir = false;
UnitTypes.arkyid.health = 4000;

UnitTypes.toxopid.speed = (5 / 7.5);
UnitTypes.arkyid.weapons.get(0).bullet.damage = 500;

UnitTypes.poly.health = 200;
UnitTypes.poly.payloadCapacity = (1.5 * 1.5) * 64;
UnitTypes.poly.targetGround = false;
UnitTypes.poly.weapons.get(0).bullet.collidesGround = true;
UnitTypes.poly.weapons.get(0).bullet.damage = 20;
UnitTypes.poly.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload

UnitTypes.quad.health = 1000;
UnitTypes.quad.payloadCapacity = 0;
UnitTypes.quad.speed = (20 / 7.5);
UnitTypes.quad.constructor = UnitTypes.flare.constructor;
UnitTypes.quad.weapons.get(0).bullet.damage = 1000;
UnitTypes.quad.weapons.get(0).reload = 300;

UnitTypes.oct.health = 12000;
UnitTypes.oct.buildSpeed = 20;
UnitTypes.oct.itemCapacity = 1000;
UnitTypes.oct.abilities.get(0).max = 40000;
UnitTypes.oct.abilities.get(0).regen = (500);

UnitTypes.flare.weapons.get(0).bullet.homingPower = 0.04;

UnitTypes.horizon.health = 100;
UnitTypes.horizon.speed = (20 / 7.5);
UnitTypes.horizon.weapons.get(0).shoot.shots = 10;
UnitTypes.horizon.weapons.get(0).shoot.shotDelay = 2;
UnitTypes.horizon.weapons.get(0).reload = (60 * 5);
UnitTypes.horizon.weapons.get(0).velocityRnd = 3.5;

UnitTypes.zenith.health = 400;
UnitTypes.zenith.speed = (26 / 7.5);
UnitTypes.zenith.weapons.get(0).bullet.collidesGround = false;
UnitTypes.zenith.weapons.get(0).bullet.speed = (3 * 3);
UnitTypes.zenith.weapons.get(0).bullet.damage = 50;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = (18 / 9) * 7.5;

UnitTypes.antumbra.health = 3000;
UnitTypes.antumbra.payloadCapacity = (3 * 3) * 64;
UnitTypes.antumbra.constructor = UnitTypes.mega.constructor; //hack to make thier entity have payload

UnitTypes.eclipse.health = 66000;

UnitTypes.sei.health = 3000;
UnitTypes.sei.weapons.get(0).bullet.maxRange = 30;

UnitTypes.omura.health = 15000;

UnitTypes.aegires.health = 4000;

UnitTypes.navanax.health = 60000;

Blocks.duo.ammoTypes.get(Items.copper).ammoMultiplier = 4;
Blocks.duo.ammoTypes.get(Items.graphite).ammoMultiplier = 8;
Blocks.duo.ammoTypes.get(Items.silicon).ammoMultiplier = 10;

Blocks.swarmer.targetGround = false;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).lightning = 1;
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
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamage = 0;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamageRadius = -1;
Blocks.swarmer.ammoTypes.get(Items.pyratite).hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.pyratite).despawnEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
Blocks.swarmer.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamage = 20;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamageRadius = 8;
Blocks.swarmer.range = 400;
Blocks.swarmer.limitRange();

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
Blocks.cyclone.targetAir = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).collidesAir = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.collidesAir = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).collidesAir = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.collidesAir = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).collidesAir = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).lightningType = lightningBul;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).collidesAir = false;
Blocks.cyclone.limitRange();

Blocks.meltdown.targetAir = false;
Blocks.meltdown.shootType.collidesAir = false;

Blocks.exponentialReconstructor.constructTime = 60 * 60 * (1.5 / 2);
let expoCons = new ConsumeItems(ItemStack.with(Items.silicon, (850 / 2), Items.titanium, (750 / 2), Items.plastanium, (650/ 2)));
Blocks.exponentialReconstructor.requirements = ItemStack.with(Items.lead, 2000, Items.silicon, 1000, Items.titanium, 2000, Items.plastanium, 450);

Blocks.tetrativeReconstructor.constructTime = 60 * 60 * (4 * 2);
let tetrCons = new ConsumeItems(ItemStack.with(Items.silicon, (1000 * 2), Items.plastanium, (600 * 2), Items.surgeAlloy, (500 * 2), Items.phaseFabric, (350 * 2)));

//Work around since no easier way to do this that i know off -Rushie
Events.on(ClientLoadEvent, () => {
	Blocks.exponentialReconstructor.consumers[1] = expoCons;	
	Blocks.tetrativeReconstructor.consumers[1] = tetrCons;	
});