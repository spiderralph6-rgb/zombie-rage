// Zombie Rage visual polish layer — loaded after the core v3 game.
// Kept dependency-free so the mobile build remains lightweight.
export function addPolish(THREE, scene, hero) {
  const metal = new THREE.MeshStandardMaterial({color:0x293440,metalness:.72,roughness:.3});
  const dark = new THREE.MeshStandardMaterial({color:0x121820,metalness:.45,roughness:.45});
  const red = new THREE.MeshStandardMaterial({color:0x9b2118,metalness:.5,roughness:.4,emissive:0x310400,emissiveIntensity:.7});
  const add=(geo,mat,pos,scale=[1,1,1],parent=hero)=>{const m=new THREE.Mesh(geo,mat);m.position.set(...pos);m.scale.set(...scale);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m};
  // Original layered armor silhouette.
  add(new THREE.BoxGeometry(1.15,.8,.42),metal,[0,2.35,.05],[1.05,1,1]);
  add(new THREE.BoxGeometry(.72,.35,.5),red,[0,2.72,-.02]);
  add(new THREE.BoxGeometry(.42,.25,.58),metal,[-.72,2.65,0],[1.25,1,1]);
  add(new THREE.BoxGeometry(.42,.25,.58),metal,[.72,2.65,0],[1.25,1,1]);
  add(new THREE.BoxGeometry(.34,.55,.38),dark,[-.7,1.85,0]);
  add(new THREE.BoxGeometry(.34,.55,.38),dark,[.7,1.85,0]);
  add(new THREE.BoxGeometry(.48,.34,.58),metal,[-.34,.48,0]);
  add(new THREE.BoxGeometry(.48,.34,.58),metal,[.34,.48,0]);
  add(new THREE.BoxGeometry(.75,.62,.6),dark,[0,3.42,.02]);
  add(new THREE.BoxGeometry(.9,.9,.34),dark,[0,2.15,.48]);
  // Street barricades and wreckage.
  const propMat=new THREE.MeshStandardMaterial({color:0x4b4138,roughness:.92});
  for(let z=-8;z>-90;z-=16){for(const x of[-5.7,5.7]){const p=new THREE.Group();p.position.set(x,0,z+(Math.random()-.5)*4);const bar=add(new THREE.BoxGeometry(2.5,.25,.25),propMat,[0,1,0],[1,1,1],p);bar.rotation.z=(Math.random()-.5)*.25;add(new THREE.BoxGeometry(.18,1.6,.18),propMat,[-.85,.45,0],[1,1,1],p);add(new THREE.BoxGeometry(.18,1.6,.18),propMat,[.85,.45,0],[1,1,1],p);scene.add(p)}}
  const emberMat=new THREE.MeshStandardMaterial({color:0xff5a20,emissive:0xff2a08,emissiveIntensity:5});
  for(const [x,z] of [[5,-15],[-6,-37],[6,-62]]){const e=add(new THREE.SphereGeometry(.18,8,6),emberMat,[x,.22,z],[1,1,1],scene);const l=new THREE.PointLight(0xff4b18,18,13,2);l.position.set(x,1.3,z);scene.add(l)}
}