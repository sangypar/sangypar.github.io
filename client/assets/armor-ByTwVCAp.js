import{r as e,j as p}from"./jsx-runtime-DexIYAB0.js";import{u as Y,c as q,b as K,m as U,L as Z,a as $,t as J,n as O}from"./heading-CouUZFhx.js";import{u as Q}from"./image-CnOYxsno.js";import{W as ee,h as te,o as re,e as se,S as ne,p as oe,G as ae,q as ce,D as x,r as ie,c as ue,a as le,m as de,n as me}from"./three-BzMM05cl.js";import{t as pe}from"./throttle-BgiUmwhn.js";import{u as C}from"./use-spring-BHYKZlEo.js";import"./components-BkhkCc1U.js";import"./index-CmuGOpbo.js";const fe="/assets/volkihar-cube-nx-B7Zjde9E.jpg",ve="/assets/volkihar-cube-ny-K8Ej-0KC.jpg",he="/assets/volkihar-cube-nz-CwSlGC5m.jpg",ge="/assets/volkihar-cube-px-B6VuHL6s.jpg",be="/assets/volkihar-cube-py-nbSfCjcD.jpg",we="/assets/volkihar-cube-pz-Bzqv8d-T.jpg",xe="/assets/volkihar-knight-BtFNLzdG.glb",Le="_armor_1taf3_1",ye="_loader_1taf3_13",ke="_canvas_1taf3_31",L={armor:Le,loader:ye,canvas:ke},z={stiffness:40,damping:20,mass:1.5},Ge=({showDelay:T=0,cameraPosition:f={x:0,y:0,z:6},className:M,alt:G,..._})=>{const[y,P]=e.useState(!1),[V,B]=e.useState(!1),[N,W]=e.useState(!1),u=e.useRef(),k=e.useRef(),l=e.useRef(),c=e.useRef(),n=e.useRef(),t=e.useRef(),v=e.useRef(),h=Q(u,!1,{threshold:.4}),j=Y(),g=C(0,z),b=C(0,z);e.useEffect(()=>{const{clientWidth:r,clientHeight:s}=u.current;t.current=new ee({canvas:k.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(r,s),t.current.outputColorSpace=te,t.current.toneMapping=re,l.current=new se(36,r/s,.1,100),l.current.position.set(f.x,f.y,f.z),n.current=new ne;const o=new oe;c.current=new ae,n.current.add(c.current);const i=new ce(t.current);i.compileCubemapShader();const m=new x(16777215,2.6),S=new x(16777215,1),R=new x(16777215,1.3);m.position.set(1,.1,2),S.position.set(-1,.1,8),R.position.set(-2,2,-3),v.current=[R,m,S],v.current.forEach(a=>n.current.add(a));const A=async()=>{const a=de.loadAsync(xe),F=o.loadAsync([fe,ve,he,ge,be,we]),[w,I]=await Promise.all([a,F]);c.current.add(w.scene),w.scene.rotation.y=me.degToRad(180),w.scene.position.y=-1.6;const{texture:X}=i.fromCubemap(I);n.current.environment=X,i.dispose(),await t.current.initTexture(n.current.environment),c.current.traverse(async E=>{E.material&&await t.current.initTexture(E.material)}),P(!0),d()};e.startTransition(()=>{A(),setTimeout(()=>{W(!0)},1e3)});const H=g.on("change",a=>{c.current.rotation.x=a,d()}),D=b.on("change",a=>{c.current.rotation.y=a,d()});return()=>{ie(v.current),ue(n.current),le(t.current),H(),D()}},[]);const d=e.useCallback(()=>{t.current.render(n.current,l.current)},[]);return e.useEffect(()=>{const r=pe(s=>{const{innerWidth:o,innerHeight:i}=window,m={x:(s.clientX-o/2)/o,y:(s.clientY-i/2)/i};g.set(m.y/2),b.set(m.x/2)},100);return h&&B(!0),h&&!j&&window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[h,j,g,b]),e.useEffect(()=>{const r=()=>{if(!u.current)return;const{clientWidth:s,clientHeight:o}=u.current;t.current.setSize(s,o),l.current.aspect=s/o,l.current.updateProjectionMatrix(),d()};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[d]),p.jsxs("div",{className:q(L.armor,M),ref:u,role:"img","aria-label":G,..._,children:[p.jsx(K,{unmount:!0,in:!y&&N,timeout:U(J.base.durationL),children:({visible:r})=>p.jsx(Z,{className:L.loader,"data-visible":r})}),p.jsx("canvas",{className:L.canvas,ref:k,"data-loaded":y&&V,style:$({delay:O(T)})})]})};export{Ge as Armor};
