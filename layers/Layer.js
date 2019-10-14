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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../config","../geometry","../request","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","@dojo/framework/shim/Promise"],function(e,t,r,o,i,n,a,l,p,s,u,y,c,d,f,v,h,b){function w(e){return"importLayerViewModule"in e}var m=0,g=f.getLogger("esri.layers.Layer");return function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.attributionDataUrl=null,e.fullExtent=new p.Extent(-180,-90,180,90,p.SpatialReference.WGS84),e.legendEnabled=!0,e.listMode="show",e.opacity=1,e.parent=null,e.popupEnabled=!0,e.attributionVisible=!0,e.spatialReference=p.SpatialReference.WGS84,e.title=null,e.type=null,e.url=null,e.visible=!0,e}return o(r,t),r.fromArcGISServerUrl=function(t){return a(this,void 0,void 0,function(){var r,o,i;return n(this,function(n){switch(n.label){case 0:return r="string"==typeof t?{url:t}:t,[4,new Promise(function(t,r){e(["./support/arcgisLayers"],t,r)})];case 1:o=n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,o.fromUrl(r)];case 3:return[2,n.sent()];case 4:throw i=n.sent(),g.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",i),i;case 5:return[2]}})})},r.fromPortalItem=function(t){return a(this,void 0,void 0,function(){var r,o,i,a,p,s;return n(this,function(n){switch(n.label){case 0:return r="portalItem"in t?t:{portalItem:t},[4,new Promise(function(t,r){e(["../portal/support/portalLayers"],t,r)})];case 1:o=n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,o.fromItem(r)];case 3:return[2,n.sent()];case 4:throw i=n.sent(),a=r&&r.portalItem,p=a&&a.id||"unset",s=a&&a.portal&&a.portal.url||l.portalUrl,g.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+p+"')",i),i;case 5:return[2]}})})},r.prototype.initialize=function(){var e=this;this.when().catch(function(t){f.getLogger(e.declaredClass).error("#load()","Failed to load layer (title: '"+e.title+"', id: '"+e.id+"')",t)})},Object.defineProperty(r.prototype,"hasAttributionData",{get:function(){return null!=this.attributionDataUrl},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"id",{get:function(){return Date.now().toString(16)+"-layer-"+m++},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");return e?h.urlToObject(e):null},enumerable:!0,configurable:!0}),r.prototype.createLayerView=function(e,t){return a(this,void 0,void 0,function(){var r;return n(this,function(o){switch(o.label){case 0:if(!e)throw new u("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:e,layer:this});if(!w(this))throw new u("layerview:override-method","Must provide implementation in '${layer.declaredClass}'",{view:e,layer:this});return[4,this.importLayerViewModule(e)];case 1:return r=o.sent(),v.throwIfAborted(t),"default"in r?[2,new r.default({layer:this,view:e})]:[2,new r({layer:this,view:e})]}})})},r.prototype.destroyLayerView=function(e){"destroy"in e&&e.destroy()},r.prototype.fetchAttributionData=function(){return a(this,void 0,void 0,function(){var e,t;return n(this,function(r){switch(r.label){case 0:return e=this.attributionDataUrl,this.hasAttributionData&&e?[4,s(e,{query:{f:"json"},responseType:"json"})]:[3,2];case 1:return t=r.sent(),[2,t.data];case 2:throw new u("layer:no-attribution-data","Layer does not have attribution data")}})})},i([b.property({type:String})],r.prototype,"attributionDataUrl",void 0),i([b.property({type:p.Extent})],r.prototype,"fullExtent",void 0),i([b.property({readOnly:!0,dependsOn:["attributionDataUrl"]})],r.prototype,"hasAttributionData",null),i([b.property({type:String})],r.prototype,"id",null),i([b.property({type:Boolean})],r.prototype,"legendEnabled",void 0),i([b.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),i([b.property({type:Number,range:{min:0,max:1},nonNullable:!0})],r.prototype,"opacity",void 0),i([b.property()],r.prototype,"parent",void 0),i([b.property({readOnly:!0,dependsOn:["url"]})],r.prototype,"parsedUrl",null),i([b.property({type:Boolean})],r.prototype,"popupEnabled",void 0),i([b.property({type:Boolean})],r.prototype,"attributionVisible",void 0),i([b.property({type:p.SpatialReference})],r.prototype,"spatialReference",void 0),i([b.property({type:String})],r.prototype,"title",void 0),i([b.property({type:String,readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([b.property()],r.prototype,"url",void 0),i([b.property({type:Boolean,nonNullable:!0})],r.prototype,"visible",void 0),r=i([b.subclass("esri.layers.Layer")],r)}(b.declared(y.EventedMixin(c.IdentifiableMixin(d))))});