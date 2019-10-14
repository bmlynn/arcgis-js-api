// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/mat3f64","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../core/libs/gl-matrix-2/vec4","../../../../core/libs/gl-matrix-2/vec4f64","./Camera","./glUtil3D","./Util","../../../webgl/FramebufferObject","../../../webgl/Texture","../../../webgl/Util"],function(e,t,a,r,c,i,s,o,n,v,f,h,d,u,l,p,m,x){function b(e,t,a,r,c,i,o,n){s.vec2.set(H,0,0);for(var v=0;v<4;++v)s.vec2.add(H,H,e[v]);s.vec2.scale(H,H,.25),s.vec2.set(V,0,0);for(var v=4;v<8;++v)s.vec2.add(V,V,e[v]);s.vec2.scale(V,V,.25),s.vec2.lerp(I[0],e[4],e[5],.5),s.vec2.lerp(I[1],e[5],e[6],.5),s.vec2.lerp(I[2],e[6],e[7],.5),s.vec2.lerp(I[3],e[7],e[4],.5);for(var f=0,h=s.vec2.squaredDistance(I[0],H),v=1;v<4;++v){var d=s.vec2.squaredDistance(I[v],H);d<h&&(h=d,f=v)}s.vec2.subtract(J,I[f],e[f+4]);var u=J[0];J[0]=-J[1],J[1]=u,s.vec2.subtract(K,V,H),s.vec2.lerp(J,J,K,a),s.vec2.normalize(J,J);var p,m;p=m=s.vec2.dot(s.vec2.subtract(L,e[0],H),J);for(var v=1;v<8;++v){var x=s.vec2.dot(s.vec2.subtract(L,e[v],H),J);x<p?p=x:x>m&&(m=x)}s.vec2.copy(r,H),s.vec2.scale(L,J,p-t),s.vec2.add(r,r,L);for(var b=-1,y=1,g=0,M=0,v=0;v<8;++v){s.vec2.subtract(Q,e[v],r),s.vec2.normalize(Q,Q);var w=J[0]*Q[1]-J[1]*Q[0];w>0?w>b&&(b=w,g=v):w<y&&(y=w,M=v)}l.verify(b>0,"leftArea"),l.verify(y<0,"rightArea"),s.vec2.scale(X,J,p),s.vec2.add(X,X,H),s.vec2.scale(Y,J,m),s.vec2.add(Y,Y,H),Z[0]=-J[1],Z[1]=J[0];var C=l.rayRay2D(r,e[M],Y,s.vec2.add(L,Y,Z),1,c),T=l.rayRay2D(r,e[g],Y,L,1,i),D=l.rayRay2D(r,e[g],X,s.vec2.add(L,X,Z),1,o),R=l.rayRay2D(r,e[M],X,L,1,n);l.verify(C,"rayRay"),l.verify(T,"rayRay"),l.verify(D,"rayRay"),l.verify(R,"rayRay")}function y(e,t){return 3*t+e}function g(e,t){return s.vec2.set($,e[t],e[t+3]),$}function M(e,t,a,r,c){s.vec2.subtract(_,a,r),s.vec2.scale(_,_,.5),ee[0]=_[0],ee[1]=_[1],ee[2]=0,ee[3]=_[1],ee[4]=-_[0],ee[5]=0,ee[6]=_[0]*_[0]+_[1]*_[1],ee[7]=_[0]*_[1]-_[1]*_[0],ee[8]=1,ee[y(0,2)]=-s.vec2.dot(g(ee,0),e),ee[y(1,2)]=-s.vec2.dot(g(ee,1),e);var i=s.vec2.dot(g(ee,0),a)+ee[y(0,2)],o=s.vec2.dot(g(ee,1),a)+ee[y(1,2)],n=s.vec2.dot(g(ee,0),r)+ee[y(0,2)],v=s.vec2.dot(g(ee,1),r)+ee[y(1,2)];i=-(i+n)/(o+v),ee[y(0,0)]+=ee[y(1,0)]*i,ee[y(0,1)]+=ee[y(1,1)]*i,ee[y(0,2)]+=ee[y(1,2)]*i,i=1/(s.vec2.dot(g(ee,0),a)+ee[y(0,2)]),o=1/(s.vec2.dot(g(ee,1),a)+ee[y(1,2)]),ee[y(0,0)]*=i,ee[y(0,1)]*=i,ee[y(0,2)]*=i,ee[y(1,0)]*=o,ee[y(1,1)]*=o,ee[y(1,2)]*=o,ee[y(2,0)]=ee[y(1,0)],ee[y(2,1)]=ee[y(1,1)],ee[y(2,2)]=ee[y(1,2)],ee[y(1,2)]+=1,i=s.vec2.dot(g(ee,1),t)+ee[y(1,2)],o=s.vec2.dot(g(ee,2),t)+ee[y(2,2)],n=s.vec2.dot(g(ee,1),a)+ee[y(1,2)],v=s.vec2.dot(g(ee,2),a)+ee[y(2,2)],i=-.5*(i/o+n/v),ee[y(1,0)]+=ee[y(2,0)]*i,ee[y(1,1)]+=ee[y(2,1)]*i,ee[y(1,2)]+=ee[y(2,2)]*i,i=s.vec2.dot(g(ee,1),t)+ee[y(1,2)],o=s.vec2.dot(g(ee,2),t)+ee[y(2,2)],n=-o/i,ee[y(1,0)]*=n,ee[y(1,1)]*=n,ee[y(1,2)]*=n,c[0]=ee[0],c[1]=ee[1],c[2]=0,c[3]=ee[2],c[4]=ee[3],c[5]=ee[4],c[6]=0,c[7]=ee[5],c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=ee[6],c[13]=ee[7],c[14]=0,c[15]=ee[8]}for(var w=function(){function e(){this.camera=new d.default,this.lightMat=i.mat4f64.create()}return e}(),C=function(){function e(e){this.doShadowMapMipmapsWork=!1,this.textureRes=4096,this.numCascades=1,this.maxNumCascades=2,this.cascadeDistances=[0,0,0,0,0],this.cascades=[],this.rctx=e,this.emptyTexture=u.createEmptyTexture(e);for(var t=0;t<4;++t)this.cascades.push(new w)}return e.prototype.dispose=function(){this.emptyTexture.dispose(),this.emptyTexture=null},Object.defineProperty(e.prototype,"textureResolution",{get:function(){return this.textureRes},set:function(e){this.textureRes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxCascades",{get:function(){return this.maxNumCascades},set:function(e){this.maxNumCascades=a.clamp(Math.floor(e),1,4)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"enabled",{get:function(){return!!this.depthTexture},set:function(e){e?this.enable():this.disable()},enumerable:!0,configurable:!0}),e.prototype.getDepthTexture=function(){return this.depthTexture},e.prototype.getCascades=function(){for(var e=0;e<this.numCascades;++e)G[e]=this.cascades[e];return G.length=this.numCascades,G},e.prototype.prepare=function(e,t,r){l.assert(this.enabled),c.mat4.multiply(D,e.projectionMatrix,e.viewMatrix);var i=r.near,s=r.far;i<2&&(i=2),s<2&&(s=2),i>=s&&(i=2,s=4),this.numCascades=Math.min(1+Math.floor(l.logWithBase(s/i,4)),this.maxNumCascades);for(var o=Math.pow(s/i,1/this.numCascades),v=0;v<this.numCascades+1;++v)this.cascadeDistances[v]=i*Math.pow(o,v);c.mat4.invert(R,D),c.mat4.lookAt(k,[0,0,0],[-t[0],-t[1],-t[2]],[0,1,0]);for(var h=e.viewMatrix,d=e.projectionMatrix,v=0;v<this.numCascades;++v){var u=this.cascades[v],p=-this.cascadeDistances[v],m=-this.cascadeDistances[v+1],x=(d[10]*p+d[14])/Math.abs(d[11]*p+d[15]),y=(d[10]*m+d[14])/Math.abs(d[11]*m+d[15]);l.assert(x<y);for(var g=0;g<8;++g){var w=g%4==0||g%4==3?-1:1,C=g%4==0||g%4==1?-1:1,O=g<4?x:y;f.vec4.set(U,w,C,O,1),f.vec4.transformMat4(j[g],U,R);for(var G=0;G<3;++G)j[g][G]/=j[g][3]}n.vec3.negate(z,j[0]),c.mat4.translate(T,k,z),u.camera.viewMatrix=T;for(var g=0;g<8;++g)n.vec3.transformMat4(j[g],j[g],u.camera.viewMatrix);n.vec3.copy(A,j[0]),n.vec3.copy(P,j[0]);for(var g=1;g<8;++g)for(var G=0;G<3;++G)A[G]=Math.min(A[G],j[g][G]),P[G]=Math.max(P[G],j[g][G]);A[2]-=200,P[2]+=200,u.camera.near=-P[2],u.camera.far=-A[2];i=1/j[0][3],s=1/j[4][3],l.assert(i<s);var B=i+Math.sqrt(i*s),E=Math.sin(a.acosClamped(h[2]*t[0]+h[6]*t[1]+h[10]*t[2]));B/=E,b(j,B,E,F,N,S,q,W),M(F,N,q,W,u.camera.projectionMatrix),u.camera.projectionMatrix[10]=2/(A[2]-P[2]),u.camera.projectionMatrix[14]=-(A[2]+P[2])/(A[2]-P[2]),c.mat4.multiply(u.lightMat,u.camera.projectionMatrix,u.camera.viewMatrix);var H=this.textureRes/2;u.camera.viewport[0]=v%2==0?0:H,u.camera.viewport[1]=0===Math.floor(v/2)?0:H,u.camera.viewport[2]=H,u.camera.viewport[3]=H}this.lastOrigin=null,this.cascadeDistances[this.numCascades]=100*s;var V=this.rctx;V.bindFramebuffer(this.fbo),V.bindTexture(null,7),V.setClearColor(1,1,1,1),V.clearSafe(16640)},e.prototype.finish=function(e){l.assert(this.enabled),this.rctx.bindFramebuffer(e),this.doShadowMapMipmapsWork&&this.depthTexture.generateMipmap()},e.prototype.bind=function(e){var t=this.rctx,a=this.enabled;t.bindTexture(a?this.depthTexture:this.emptyTexture,7),t.bindProgram(e),e.setUniform1i("depthTex",7),e.setUniform1f("depthHalfPixelSz",a?.5/this.textureRes:-1),e.setUniform1i("shadowMapNum",this.numCascades),e.setUniform4f("shadowMapDistance",this.cascadeDistances[0],this.cascadeDistances[1],this.cascadeDistances[2],this.cascadeDistances[3])},e.prototype.bindAll=function(e){for(var t=e.getProgramsUsingUniform("shadowMapDistance"),a=0;a<t.length;a++)this.bind(t[a])},e.prototype.bindView=function(e,t){if(this.enabled){var a=this.lastOrigin;if(!(a&&a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2])){this.lastOrigin=this.lastOrigin||v.vec3f64.create(),n.vec3.copy(this.lastOrigin,t);for(var r=0;r<this.numCascades;++r){c.mat4.translate(B,this.cascades[r].lightMat,t);for(var i=0;i<16;++i)E[16*r+i]=B[i]}}e.setUniformMatrix4fv("shadowMapMatrix",E)}},e.prototype.enable=function(){if(!this.enabled){var e={target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,width:this.textureRes,height:this.textureRes};this.depthTexture=new m(this.rctx,e),this.fbo=p.createWithAttachments(this.rctx,this.depthTexture,{colorTarget:0,depthStencilTarget:1,width:this.textureRes,height:this.textureRes})}},e.prototype.disable=function(){this.enabled&&this.fbo&&(this.fbo.dispose(),this.fbo=null,this.depthTexture=null)},e.prototype.getGpuMemoryUsage=function(){return x.getGpuMemoryUsage(this.fbo)},e}(),T=i.mat4f64.create(),D=i.mat4f64.create(),R=i.mat4f64.create(),U=h.vec4f64.create(),j=[],O=0;O<8;++O)j.push(h.vec4f64.create());var A=v.vec3f64.create(),P=v.vec3f64.create(),F=o.vec2f64.create(),N=o.vec2f64.create(),S=o.vec2f64.create(),q=o.vec2f64.create(),W=o.vec2f64.create(),k=i.mat4f64.create(),z=v.vec3f64.create(),G=[],B=i.mat4f64.create(),E=new Float32Array(64),H=o.vec2f64.create(),V=o.vec2f64.create(),I=[o.vec2f64.create(),o.vec2f64.create(),o.vec2f64.create(),o.vec2f64.create()],J=o.vec2f64.create(),K=o.vec2f64.create(),L=o.vec2f64.create(),Q=o.vec2f64.create(),X=o.vec2f64.create(),Y=o.vec2f64.create(),Z=o.vec2f64.create(),$=o.vec2f64.create(),_=o.vec2f64.create(),ee=r.mat3f64.create();return C});