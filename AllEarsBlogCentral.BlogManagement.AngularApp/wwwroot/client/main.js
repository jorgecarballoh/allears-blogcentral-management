"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{628:()=>{function J(t){return"function"==typeof t}function Ps(t){const n=t(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Rs=Ps(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function mo(t,e){if(t){const n=t.indexOf(e);0<=n&&t.splice(n,1)}}class lt{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const s of n)s.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(J(r))try{r()}catch(s){e=s instanceof Rs?s.errors:[s]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const s of o)try{Gc(s)}catch(i){e=e??[],i instanceof Rs?e=[...e,...i.errors]:e.push(i)}}if(e)throw new Rs(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Gc(e);else{if(e instanceof lt){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}}_hasParent(e){const{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){const{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&mo(n,e)}remove(e){const{_finalizers:n}=this;n&&mo(n,e),e instanceof lt&&e._removeParent(this)}}lt.EMPTY=(()=>{const t=new lt;return t.closed=!0,t})();const $c=lt.EMPTY;function Uc(t){return t instanceof lt||t&&"closed"in t&&J(t.remove)&&J(t.add)&&J(t.unsubscribe)}function Gc(t){J(t)?t():t.unsubscribe()}const yn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Os={setTimeout(t,e,...n){const{delegate:r}=Os;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){const{delegate:e}=Os;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function zc(t){Os.setTimeout(()=>{const{onUnhandledError:e}=yn;if(!e)throw t;e(t)})}function la(){}const uD=ca("C",void 0,void 0);function ca(t,e,n){return{kind:t,value:e,error:n}}let Dn=null;function Ls(t){if(yn.useDeprecatedSynchronousErrorHandling){const e=!Dn;if(e&&(Dn={errorThrown:!1,error:null}),t(),e){const{errorThrown:n,error:r}=Dn;if(Dn=null,n)throw r}}else t()}class da extends lt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Uc(e)&&e.add(this)):this.destination=gD}static create(e,n,r){return new ks(e,n,r)}next(e){this.isStopped?pa(function cD(t){return ca("N",t,void 0)}(e),this):this._next(e)}error(e){this.isStopped?pa(function lD(t){return ca("E",void 0,t)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?pa(uD,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const fD=Function.prototype.bind;function fa(t,e){return fD.call(t,e)}class pD{constructor(e){this.partialObserver=e}next(e){const{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Vs(r)}}error(e){const{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Vs(r)}else Vs(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Vs(n)}}}class ks extends da{constructor(e,n,r){let o;if(super(),J(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let s;this&&yn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&fa(e.next,s),error:e.error&&fa(e.error,s),complete:e.complete&&fa(e.complete,s)}):o=e}this.destination=new pD(o)}}function Vs(t){yn.useDeprecatedSynchronousErrorHandling?function dD(t){yn.useDeprecatedSynchronousErrorHandling&&Dn&&(Dn.errorThrown=!0,Dn.error=t)}(t):zc(t)}function pa(t,e){const{onStoppedNotification:n}=yn;n&&Os.setTimeout(()=>n(t,e))}const gD={closed:!0,next:la,error:function hD(t){throw t},complete:la},ha="function"==typeof Symbol&&Symbol.observable||"@@observable";function qc(t){return t}function Wc(t){return 0===t.length?qc:1===t.length?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}class oe{constructor(e){e&&(this._subscribe=e)}lift(e){const n=new oe;return n.source=this,n.operator=e,n}subscribe(e,n,r){const o=function yD(t){return t&&t instanceof da||function mD(t){return t&&J(t.next)&&J(t.error)&&J(t.complete)}(t)&&Uc(t)}(e)?e:new ks(e,n,r);return Ls(()=>{const{operator:s,source:i}=this;o.add(s?s.call(o,i):i?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return new(n=Qc(n))((r,o)=>{const s=new ks({next:i=>{try{e(i)}catch(a){o(a),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(e)}[ha](){return this}pipe(...e){return Wc(e)(this)}toPromise(e){return new(e=Qc(e))((n,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>n(o))})}}function Qc(t){var e;return null!==(e=t??yn.Promise)&&void 0!==e?e:Promise}oe.create=t=>new oe(t);const DD=Ps(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});class yo extends oe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const n=new Kc(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new DD}next(e){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const n of this.currentObservers)n.next(e)}})}error(e){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){Ls(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:n,isStopped:r,observers:o}=this;return n||r?$c:(this.currentObservers=null,o.push(e),new lt(()=>{this.currentObservers=null,mo(o,e)}))}_checkFinalizedStatuses(e){const{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){const e=new oe;return e.source=this,e}}yo.create=(t,e)=>new Kc(t,e);class Kc extends yo{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,e)}error(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,e)}complete(){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===n||n.call(e)}_subscribe(e){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(e))&&void 0!==r?r:$c}}function zt(t){return e=>{if(function vD(t){return J(t?.lift)}(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function vn(t,e,n,r,o){return new _D(t,e,n,r,o)}class _D extends da{constructor(e,n,r,o,s,i){super(e),this.onFinalize=s,this.shouldUnsubscribe=i,this._next=n?function(a){try{n(a)}catch(u){e.error(u)}}:super._next,this._error=o?function(a){try{o(a)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}function Do(t,e){return zt((n,r)=>{let o=0;n.subscribe(vn(r,s=>{r.next(t.call(e,s,o++))}))})}function wD(t,e,n,r){return new(n||(n=Promise))(function(s,i){function a(c){try{l(r.next(c))}catch(d){i(d)}}function u(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?s(c.value):function o(s){return s instanceof n?s:new n(function(i){i(s)})}(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}Object.create;function Jc(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _n(t){return this instanceof _n?(this.v=t,this):new _n(t)}function CD(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(t,e||[]),s=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(f){r[f]&&(o[f]=function(p){return new Promise(function(h,g){s.push([f,p,h,g])>1||a(f,p)})})}function a(f,p){try{!function u(f){f.value instanceof _n?Promise.resolve(f.value.v).then(l,c):d(s[0][2],f)}(r[f](p))}catch(h){d(s[0][3],h)}}function l(f){a("next",f)}function c(f){a("throw",f)}function d(f,p){f(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function MD(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=Jc(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(i){return new Promise(function(a,u){(function o(s,i,a,u){Promise.resolve(u).then(function(l){s({value:l,done:a})},i)})(a,u,(i=t[s](i)).done,i.value)})}}}Object.create;const Xc=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function ed(t){return J(t?.then)}function td(t){return J(t[ha])}function nd(t){return Symbol.asyncIterator&&J(t?.[Symbol.asyncIterator])}function rd(t){return new TypeError(`You provided ${null!==t&&"object"==typeof t?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const od=function bD(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function sd(t){return J(t?.[od])}function id(t){return CD(this,arguments,function*(){const n=t.getReader();try{for(;;){const{value:r,done:o}=yield _n(n.read());if(o)return yield _n(void 0);yield yield _n(r)}}finally{n.releaseLock()}})}function ad(t){return J(t?.getReader)}function wn(t){if(t instanceof oe)return t;if(null!=t){if(td(t))return function TD(t){return new oe(e=>{const n=t[ha]();if(J(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(t);if(Xc(t))return function AD(t){return new oe(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}(t);if(ed(t))return function SD(t){return new oe(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,zc)})}(t);if(nd(t))return ud(t);if(sd(t))return function xD(t){return new oe(e=>{for(const n of t)if(e.next(n),e.closed)return;e.complete()})}(t);if(ad(t))return function ND(t){return ud(id(t))}(t)}throw rd(t)}function ud(t){return new oe(e=>{(function FD(t,e){var n,r,o,s;return wD(this,void 0,void 0,function*(){try{for(n=MD(t);!(r=yield n.next()).done;){const i=r.value;if(e.next(i),e.closed)return}}catch(i){o={error:i}}finally{try{r&&!r.done&&(s=n.return)&&(yield s.call(n))}finally{if(o)throw o.error}}e.complete()})})(t,e).catch(n=>e.error(n))})}function qt(t,e,n,r=0,o=!1){const s=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!o)return s}function js(t,e,n=1/0){return J(e)?js((r,o)=>Do((s,i)=>e(r,s,o,i))(wn(t(r,o))),n):("number"==typeof e&&(n=e),zt((r,o)=>function PD(t,e,n,r,o,s,i,a){const u=[];let l=0,c=0,d=!1;const f=()=>{d&&!u.length&&!l&&e.complete()},p=g=>l<r?h(g):u.push(g),h=g=>{s&&e.next(g),l++;let y=!1;wn(n(g,c++)).subscribe(vn(e,v=>{o?.(v),s?p(v):e.next(v)},()=>{y=!0},void 0,()=>{if(y)try{for(l--;u.length&&l<r;){const v=u.shift();i?qt(e,i,()=>h(v)):h(v)}f()}catch(v){e.error(v)}}))};return t.subscribe(vn(e,p,()=>{d=!0,f()})),()=>{a?.()}}(r,o,t,n)))}const ma=new oe(t=>t.complete());function ya(t){return t[t.length-1]}function ld(t){return function LD(t){return t&&J(t.schedule)}(ya(t))?t.pop():void 0}function cd(t,e=0){return zt((n,r)=>{n.subscribe(vn(r,o=>qt(r,t,()=>r.next(o),e),()=>qt(r,t,()=>r.complete(),e),o=>qt(r,t,()=>r.error(o),e)))})}function dd(t,e=0){return zt((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function fd(t,e){if(!t)throw new Error("Iterable cannot be null");return new oe(n=>{qt(n,e,()=>{const r=t[Symbol.asyncIterator]();qt(n,e,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function UD(t,e){if(null!=t){if(td(t))return function VD(t,e){return wn(t).pipe(dd(e),cd(e))}(t,e);if(Xc(t))return function BD(t,e){return new oe(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}(t,e);if(ed(t))return function jD(t,e){return wn(t).pipe(dd(e),cd(e))}(t,e);if(nd(t))return fd(t,e);if(sd(t))return function HD(t,e){return new oe(n=>{let r;return qt(n,e,()=>{r=t[od](),qt(n,e,()=>{let o,s;try{({value:o,done:s}=r.next())}catch(i){return void n.error(i)}s?n.complete():n.next(o)},0,!0)}),()=>J(r?.return)&&r.return()})}(t,e);if(ad(t))return function $D(t,e){return fd(id(t),e)}(t,e)}throw rd(t)}function Da(t,e){return e?UD(t,e):wn(t)}function GD(...t){const e=ld(t),n=function kD(t,e){return"number"==typeof ya(t)?t.pop():e}(t,1/0),r=t;return r.length?1===r.length?wn(r[0]):function RD(t=1/0){return js(qc,t)}(n)(Da(r,e)):ma}function va(t,e,...n){return!0===e?(t(),null):!1===e?null:e(...n).pipe(function zD(t){return t<=0?()=>ma:zt((e,n)=>{let r=0;e.subscribe(vn(n,o=>{++r<=t&&(n.next(o),t<=r&&n.complete())}))})}(1)).subscribe(()=>t())}
/**
       * @license Angular v14.0.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function G(t){for(let e in t)if(t[e]===G)return e;throw Error("Could not find renamed property on target object.")}function _a(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function z(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(z).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function wa(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const WD=G({__forward_ref__:G});function Ea(t){return t.__forward_ref__=Ea,t.toString=function(){return z(this())},t}function M(t){return Ca(t)?t():t}function Ca(t){return"function"==typeof t&&t.hasOwnProperty(WD)&&t.__forward_ref__===Ea}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class F extends Error{constructor(e,n){super(Bs(e,n)),this.code=e}}function Bs(t,e){return`NG0${Math.abs(t)}${e?": "+e.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function T(t){return"string"==typeof t?t:null==t?"":String(t)}function j(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():T(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hs(t,e){throw new F(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tt(t,e,n){t!=e&&H(n,t,e,"==")}function Fe(t,e){null==t&&H(e,t,null,"!=")}function H(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function I(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Ye(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ma(t){return pd(t,$s)||pd(t,gd)}function pd(t,e){return t.hasOwnProperty(e)?t[e]:null}function hd(t){return t&&(t.hasOwnProperty(Ia)||t.hasOwnProperty(tv))?t[Ia]:null}const $s=G({\u0275prov:G}),Ia=G({\u0275inj:G}),gd=G({ngInjectableDef:G}),tv=G({ngInjectorDef:G});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var O,t;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ba;function ct(t){const e=ba;return ba=t,e}function md(t,e,n){const r=Ma(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&O.Optional?null:void 0!==e?e:void Hs(z(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wt(t){return{toString:t}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var En,yd,At;(t=O||(O={}))[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",function(t){t[t.OnPush=0]="OnPush",t[t.Default=1]="Default"}(En||(En={})),function(t){t[t.CheckOnce=0]="CheckOnce",t[t.Checked=1]="Checked",t[t.CheckAlways=2]="CheckAlways",t[t.Detached=3]="Detached",t[t.Errored=4]="Errored",t[t.Destroyed=5]="Destroyed"}(yd||(yd={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(At||(At={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ir={},B=[],Us=G({\u0275cmp:G}),Ta=G({\u0275dir:G}),Aa=G({\u0275pipe:G}),Dd=G({\u0275mod:G}),St=G({\u0275fac:G}),vo=G({__NG_ELEMENT_ID__:G});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let rv=0;function Gs(t){return Wt(()=>{const e=t.type,n=!0===t.standalone,r={},o={type:e,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===En.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&t.dependencies||null,getStandaloneInjector:null,selectors:t.selectors||B,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||At.Emulated,id:"c"+rv++,styles:t.styles||B,_:null,setInput:null,schemas:t.schemas||null,tView:null},s=t.dependencies,i=t.features;return o.inputs=wd(t.inputs,r),o.outputs=wd(t.outputs),i&&i.forEach(a=>a(o)),o.directiveDefs=s?()=>("function"==typeof s?s():s).map(vd).filter(_d):null,o.pipeDefs=s?()=>("function"==typeof s?s():s).map(we).filter(_d):null,o})}function ov(t,e,n){const r=t.\u0275cmp;r.directiveDefs=()=>("function"==typeof e?e():e).map(vd),r.pipeDefs=()=>("function"==typeof n?n():n).map(we)}function vd(t){return q(t)||_e(t)}function _d(t){return null!==t}const sv={};function dt(t){return Wt(()=>{const e={type:t.type,bootstrap:t.bootstrap||B,declarations:t.declarations||B,imports:t.imports||B,exports:t.exports||B,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(sv[t.id]=t.type),e})}function iv(t,e){return Wt(()=>{const n=Pe(t,!0);n.declarations=e.declarations||B,n.imports=e.imports||B,n.exports=e.exports||B})}function wd(t,e){if(null==t)return ir;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],s=o;Array.isArray(o)&&(s=o[1],o=o[0]),n[o]=r,e&&(e[o]=s)}return n}const He=Gs;function Ae(t){return{type:t.type,name:t.name,factory:null,pure:!1!==t.pure,standalone:!0===t.standalone,onDestroy:t.type.prototype.ngOnDestroy||null}}function q(t){return t[Us]||null}function _e(t){return t[Ta]||null}function we(t){return t[Aa]||null}function Pe(t,e){const n=t[Dd]||null;if(!n&&!0===e)throw new Error(`Type ${z(t)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const x=11,Q=22;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Se(t){return Array.isArray(t)&&"object"==typeof t[1]}function Je(t){return Array.isArray(t)&&!0===t[1]}function Na(t){return 0!=(8&t.flags)}function Qs(t){return 2==(2&t.flags)}function Ks(t){return 1==(1&t.flags)}function Xe(t){return null!==t.template}function cv(t){return 0!=(256&t[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Tn(t,e){return t.hasOwnProperty(St)?t[St]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pv{constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ys(){return Md}function Md(t){return t.type.prototype.ngOnChanges&&(t.setInput=gv),hv}function hv(){const t=bd(this),e=t?.current;if(e){const n=t.previous;if(n===ir)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function gv(t,e,n,r){const o=bd(t)||function mv(t,e){return t[Id]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,{previous:ir,current:null}),s=o.current||(o.current={}),i=o.previous,a=this.declaredInputs[n],u=i[a];s[a]=new pv(u&&u.currentValue,e,i===ir),t[r]=e}Ys.ngInherit=!0;const Id="__ngSimpleChanges__";function bd(t){return t[Id]||null}let Pa=null;const Ue=function(t,e,n){Pa?.(t,e,n)},Oa="math";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let La;function ka(){return void 0!==La?La:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Td;function te(t){return!!t.listen}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(Td||(Td={}));const Ad={createRenderer:(t,e)=>ka()};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function se(t){for(;Array.isArray(t);)t=t[0];return t}function Zs(t,e){return se(e[t])}function Ge(t,e){return se(e[t.index])}function Va(t,e){return t.data[e]}function dr(t,e){return t[e]}function Oe(t,e){const n=e[t];return Se(n)?n:n[0]}function Sd(t){return 4==(4&t[2])}function ja(t){return 64==(64&t[2])}function Qt(t,e){return null==e?null:t[e]}function xd(t){t[18]=0}function Ba(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const b={lFrame:jd(null),bindingsEnabled:!0};function Fd(){return b.bindingsEnabled}function Sv(){b.bindingsEnabled=!0}function xv(){b.bindingsEnabled=!1}function D(){return b.lFrame.lView}function L(){return b.lFrame.tView}function Nv(t){return b.lFrame.contextLView=t,t[8]}function Fv(t){return b.lFrame.contextLView=null,t}function ae(){let t=Pd();for(;null!==t&&64===t.type;)t=t.parent;return t}function Pd(){return b.lFrame.currentTNode}function Co(){const t=b.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function ft(t,e){const n=b.lFrame;n.currentTNode=t,n.isParent=e}function Ha(){return b.lFrame.isParent}function $a(){b.lFrame.isParent=!1}function Ee(){const t=b.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function xt(){return b.lFrame.bindingIndex}function Rd(t){return b.lFrame.bindingIndex=t}function fr(){return b.lFrame.bindingIndex++}function Nt(t){const e=b.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function Od(t){b.lFrame.inI18n=t}function Ov(t,e){const n=b.lFrame;n.bindingIndex=n.bindingRootIndex=t,Ua(e)}function Ua(t){b.lFrame.currentDirectiveIndex=t}function Ga(t){const e=b.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}function Ld(){return b.lFrame.currentQueryIndex}function za(t){b.lFrame.currentQueryIndex=t}function kv(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function kd(t,e,n){if(n&O.SkipSelf){let o=e,s=t;for(;(o=o.parent,null===o&&!(n&O.Host))&&(o=kv(s),!(null===o||(s=s[15],10&o.type))););if(null===o)return!1;e=o,t=s}const r=b.lFrame=Vd();return r.currentTNode=e,r.lView=t,!0}function Xs(t){const e=Vd(),n=t[1];b.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Vd(){const t=b.lFrame,e=null===t?null:t.child;return null===e?jd(t):e}function jd(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Bd(){const t=b.lFrame;return b.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Hd=Bd;function ei(){const t=Bd();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Vv(t){return(b.lFrame.contextLView=function jv(t,e){for(;t>0;)e=e[15],t--;return e}(t,b.lFrame.contextLView))[8]}function Ce(){return b.lFrame.selectedIndex}function Kt(t){b.lFrame.selectedIndex=t}function ne(){const t=b.lFrame;return Va(t.tView,t.selectedIndex)}function Bv(){b.lFrame.currentNamespace="svg"}function Hv(){b.lFrame.currentNamespace=Oa}function $v(){!function Uv(){b.lFrame.currentNamespace=null}()}function ti(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const s=t.data[n].type.prototype,{ngAfterContentInit:i,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=s;i&&(t.contentHooks||(t.contentHooks=[])).push(-n,i),a&&((t.contentHooks||(t.contentHooks=[])).push(n,a),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,a)),u&&(t.viewHooks||(t.viewHooks=[])).push(-n,u),l&&((t.viewHooks||(t.viewHooks=[])).push(n,l),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,l)),null!=c&&(t.destroyHooks||(t.destroyHooks=[])).push(n,c)}}function ni(t,e,n){$d(t,e,3,n)}function ri(t,e,n,r){(3&t[2])===n&&$d(t,e,n,r)}function qa(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function $d(t,e,n,r){const o=void 0!==r?65535&t[18]:0,s=r??-1,i=e.length-1;let a=0;for(let u=o;u<i;u++)if("number"==typeof e[u+1]){if(a=e[u],null!=r&&a>=r)break}else e[u]<0&&(t[18]+=65536),(a<s||-1==s)&&(qv(t,n,e,u),t[18]=(4294901760&t[18])+u+2),u++}function qv(t,e,n,r){const o=n[r]<0,s=n[r+1],a=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048,Ue(4,a,s);try{s.call(a)}finally{Ue(5,a,s)}}}else{Ue(4,a,s);try{s.call(a)}finally{Ue(5,a,s)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mo{constructor(e,n,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function oi(t,e,n){const r=te(t);let o=0;for(;o<n.length;){const s=n[o];if("number"==typeof s){if(0!==s)break;o++;const i=n[o++],a=n[o++],u=n[o++];r?t.setAttribute(e,a,u,i):e.setAttributeNS(i,a,u)}else{const i=s,a=n[++o];Qa(i)?r&&t.setProperty(e,i,a):r?t.setAttribute(e,i,a):e.setAttribute(i,a),o++}}return o}function Ud(t){return 3===t||4===t||6===t}function Qa(t){return 64===t.charCodeAt(0)}function si(t,e){if(null!==e&&0!==e.length)if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||Gd(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function Gd(t,e,n,r,o){let s=0,i=t.length;if(-1===e)i=-1;else for(;s<t.length;){const a=t[s++];if("number"==typeof a){if(a===e){i=-1;break}if(a>e){i=s-1;break}}}for(;s<t.length;){const a=t[s];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(t[s+1]=o));if(r===t[s+1])return void(t[s+2]=o)}s++,null!==r&&s++,null!==o&&s++}-1!==i&&(t.splice(i,0,e),s=i+1),t.splice(s++,0,n),null!==r&&t.splice(s++,0,r),null!==o&&t.splice(s++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zd(t){return-1!==t}function pr(t){return 32767&t}function hr(t,e){let n=function Zv(t){return t>>16}(t),r=e;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ka=!0;function ii(t){const e=Ka;return Ka=t,e}let Jv=0;const pt={};function bo(t,e){const n=Za(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,Ya(r.data,t),Ya(e,null),Ya(r.blueprint,null));const o=ai(t,e),s=t.injectorIndex;if(zd(o)){const i=pr(o),a=hr(o,e),u=a[1].data;for(let l=0;l<8;l++)e[s+l]=a[i+l]|u[i+l]}return e[s+8]=o,s}function Ya(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Za(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function ai(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){if(r=ef(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ui(t,e,n){!function Xv(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(vo)&&(r=n[vo]),null==r&&(r=n[vo]=Jv++);const o=255&r,s=1<<o;e.data[t+(o>>5)]|=s}(t,e,n)}function Qd(t,e,n){if(n&O.Optional)return t;Hs()}function Kd(t,e,n,r){if(n&O.Optional&&void 0===r&&(r=null),0==(n&(O.Self|O.Host))){const o=t[9],s=ct(void 0);try{return o?o.get(e,r,n&O.Optional):md(e,r,n&O.Optional)}finally{ct(s)}}return Qd(r,0,n)}function Yd(t,e,n,r=O.Default,o){if(null!==t){if(1024&e[2]){const i=function s_(t,e,n,r,o){let s=t,i=e;for(;null!==s&&null!==i&&1024&i[2]&&!(256&i[2]);){const a=Zd(s,i,n,r|O.Self,pt);if(a!==pt)return a;let u=s.parent;if(!u){const l=i[21];if(l){const c=l.get(n,pt,r);if(c!==pt)return c}u=ef(i),i=i[15]}s=u}return o}(t,e,n,r,pt);if(i!==pt)return i}const s=Zd(t,e,n,r,pt);if(s!==pt)return s}return Kd(e,n,r,o)}function Zd(t,e,n,r,o){const s=function n_(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(vo)?t[vo]:void 0;return"number"==typeof e?e>=0?255&e:r_:e}(n);if("function"==typeof s){if(!kd(e,t,r))return r&O.Host?Qd(o,0,r):Kd(e,n,r,o);try{const i=s(r);if(null!=i||r&O.Optional)return i;Hs()}finally{Hd()}}else if("number"==typeof s){let i=null,a=Za(t,e),u=-1,l=r&O.Host?e[16][6]:null;for((-1===a||r&O.SkipSelf)&&(u=-1===a?ai(t,e):e[a+8],-1!==u&&Xd(r,!1)?(i=e[1],a=pr(u),e=hr(u,e)):a=-1);-1!==a;){const c=e[1];if(Jd(s,a,c.data)){const d=t_(a,e,n,i,r,l);if(d!==pt)return d}u=e[a+8],-1!==u&&Xd(r,e[1].data[a+8]===l)&&Jd(s,a,e)?(i=c,a=pr(u),e=hr(u,e)):a=-1}}return o}function t_(t,e,n,r,o,s){const i=e[1],a=i.data[t+8],c=li(a,i,n,null==r?Qs(a)&&Ka:r!=i&&0!=(3&a.type),o&O.Host&&s===a);return null!==c?To(e,i,c,a):pt}function li(t,e,n,r,o){const s=t.providerIndexes,i=e.data,a=1048575&s,u=t.directiveStart,l=t.directiveEnd,c=s>>20,f=o?a+c:l;for(let p=r?a:a+c;p<f;p++){const h=i[p];if(p<u&&n===h||p>=u&&h.type===n)return p}if(o){const p=i[u];if(p&&Xe(p)&&p.type===n)return u}return null}function To(t,e,n,r){let o=t[n];const s=e.data;if(function Wv(t){return t instanceof Mo}(o)){const i=o;i.resolving&&function QD(t,e){const n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new F(-200,`Circular dependency in DI detected for ${t}${n}`)}(j(s[n]));const a=ii(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?ct(i.injectImpl):null;kd(t,r,O.Default);try{o=t[n]=i.factory(void 0,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zv(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:s}=e.type.prototype;if(r){const i=Md(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,s))}(n,s[n],e)}finally{null!==u&&ct(u),ii(a),i.resolving=!1,Hd()}}return o}function Jd(t,e,n){const r=1<<t;return!!(n[e+(t>>5)]&r)}function Xd(t,e){return!(t&O.Self||t&O.Host&&e)}class gr{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return Yd(this._tNode,this._lView,e,r,n)}}function r_(){return new gr(ae(),D())}function o_(t){return Wt(()=>{const e=t.prototype.constructor,n=e[St]||Ja(e),r=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){const s=o[St]||Ja(o);if(s&&s!==n)return s;o=Object.getPrototypeOf(o)}return s=>new s})}function Ja(t){return Ca(t)?()=>{const e=Ja(M(t));return e&&e()}:Tn(t)}function ef(t){const e=t[1],n=e.type;return 2===n?e.declTNode:1===n?t[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xa(t){return function e_(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const s=n[o];if(Ud(s))break;if(0===s)o+=2;else if("number"==typeof s)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(s===e)return n[o+1];o+=2}}}return null}(ae(),t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mr="__annotations__",yr="__parameters__",Dr="__prop__metadata__";function Ao(t,e,n,r,o){return Wt(()=>{const s=eu(e);function i(...a){if(this instanceof i)return s.call(this,...a),this;const u=new i(...a);return function(c){return o&&o(c,...a),(c.hasOwnProperty(mr)?c[mr]:Object.defineProperty(c,mr,{value:[]})[mr]).push(u),r&&r(c),c}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i})}function eu(t){return function(...n){if(t){const r=t(...n);for(const o in r)this[o]=r[o]}}}function vr(t,e,n){return Wt(()=>{const r=eu(e);function o(...s){if(this instanceof o)return r.apply(this,s),this;const i=new o(...s);return a.annotation=i,a;function a(u,l,c){const d=u.hasOwnProperty(yr)?u[yr]:Object.defineProperty(u,yr,{value:[]})[yr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(i),u}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}function Zt(t,e,n,r){return Wt(()=>{const o=eu(e);function s(...i){if(this instanceof s)return o.apply(this,i),this;const a=new s(...i);return function u(l,c){const d=l.constructor,f=d.hasOwnProperty(Dr)?d[Dr]:Object.defineProperty(d,Dr,{value:{}})[Dr];f[c]=f.hasOwnProperty(c)&&f[c]||[],f[c].unshift(a),r&&r(l,c,...i)}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const i_=vr("Attribute",t=>({attributeName:t,__NG_ELEMENT_ID__:()=>Xa(t)}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class P{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=I({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new P("AnalyzeForEntryComponents");class ci{}Zt("ContentChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e}),ci),Zt("ContentChild",(t,e={})=>({selector:t,first:!0,isViewQuery:!1,descendants:!0,...e}),ci),Zt("ViewChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e}),ci),Zt("ViewChild",(t,e)=>({selector:t,first:!0,isViewQuery:!0,descendants:!0,...e}),ci)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;var An,nf,rf;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ue(t){const e=$.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.Directive=0]="Directive",t[t.Component=1]="Component",t[t.Injectable=2]="Injectable",t[t.Pipe=3]="Pipe",t[t.NgModule=4]="NgModule"}(An||(An={})),function(t){t[t.Directive=0]="Directive",t[t.Pipe=1]="Pipe",t[t.NgModule=2]="NgModule"}(nf||(nf={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(rf||(rf={}));const tu=Function;function So(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Le(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),Le(r,e)):e!==t&&e.push(r)}return e}function Ft(t,e){t.forEach(n=>Array.isArray(n)?Ft(n,e):e(n))}function of(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function di(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function xo(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}function ke(t,e,n){let r=_r(t,e);return r>=0?t[1|r]=n:(r=~r,function l_(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){const s=o-2;t[o]=t[s],o--}t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function nu(t,e){const n=_r(t,e);if(n>=0)return t[1|n]}function _r(t,e){return uf(t,e,1)}function uf(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const s=r+(o-r>>1),i=t[s<<n];if(e===i)return s<<n;i>e?o=s:r=s+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const c_=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,d_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,f_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,p_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;class g_{constructor(e){this._reflect=e||$.Reflect}factory(e){return(...n)=>new e(...n)}_zipTypesAndAnnotations(e,n){let r;r=xo(typeof e>"u"?n.length:e.length);for(let o=0;o<r.length;o++)typeof e>"u"?r[o]=[]:e[o]&&e[o]!=Object?r[o]=[e[o]]:r[o]=[],n&&null!=n[o]&&(r[o]=r[o].concat(n[o]));return r}_ownParameters(e,n){if(function h_(t){return c_.test(t)||p_.test(t)||d_.test(t)&&!f_.test(t)}(e.toString()))return null;if(e.parameters&&e.parameters!==n.parameters)return e.parameters;const o=e.ctorParameters;if(o&&o!==n.ctorParameters){const a="function"==typeof o?o():o,u=a.map(c=>c&&c.type),l=a.map(c=>c&&ru(c.decorators));return this._zipTypesAndAnnotations(u,l)}const s=e.hasOwnProperty(yr)&&e[yr],i=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return i||s?this._zipTypesAndAnnotations(i,s):xo(e.length)}parameters(e){if(!So(e))return[];const n=fi(e);let r=this._ownParameters(e,n);return!r&&n!==Object&&(r=this.parameters(n)),r||[]}_ownAnnotations(e,n){if(e.annotations&&e.annotations!==n.annotations){let r=e.annotations;return"function"==typeof r&&r.annotations&&(r=r.annotations),r}return e.decorators&&e.decorators!==n.decorators?ru(e.decorators):e.hasOwnProperty(mr)?e[mr]:null}annotations(e){if(!So(e))return[];const n=fi(e),r=this._ownAnnotations(e,n)||[];return(n!==Object?this.annotations(n):[]).concat(r)}_ownPropMetadata(e,n){if(e.propMetadata&&e.propMetadata!==n.propMetadata){let r=e.propMetadata;return"function"==typeof r&&r.propMetadata&&(r=r.propMetadata),r}if(e.propDecorators&&e.propDecorators!==n.propDecorators){const r=e.propDecorators,o={};return Object.keys(r).forEach(s=>{o[s]=ru(r[s])}),o}return e.hasOwnProperty(Dr)?e[Dr]:null}propMetadata(e){if(!So(e))return{};const n=fi(e),r={};if(n!==Object){const s=this.propMetadata(n);Object.keys(s).forEach(i=>{r[i]=s[i]})}const o=this._ownPropMetadata(e,n);return o&&Object.keys(o).forEach(s=>{const i=[];r.hasOwnProperty(s)&&i.push(...r[s]),i.push(...o[s]),r[s]=i}),r}ownPropMetadata(e){return So(e)&&this._ownPropMetadata(e,fi(e))||{}}hasLifecycleHook(e,n){return e instanceof tu&&n in e.prototype}}function ru(t){return t?t.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function fi(t){const e=t.prototype?Object.getPrototypeOf(t.prototype):null;return(e?e.constructor:null)||Object}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Jt={},ou="__NG_DI_FLAG__",pi="ngTempTokenPath",y_=/\n/gm,lf="__source";let No;function hi(t){const e=No;return No=t,e}function v_(t,e=O.Default){if(void 0===No){throw new F(-203,"")}return null===No?md(t,void 0,e):No.get(t,e&O.Optional?null:void 0,e)}function w(t,e=O.Default){return(function nv(){return ba}()||v_)(M(t),e)}function cf(t){throw new Error("invalid")}function su(t){const e=[];for(let n=0;n<t.length;n++){const r=M(t[n]);if(Array.isArray(r)){if(0===r.length){throw new F(900,"")}let o,s=O.Default;for(let i=0;i<r.length;i++){const a=r[i],u=w_(a);"number"==typeof u?-1===u?o=a.token:s|=u:o=a}e.push(w(o,s))}else e.push(w(r))}return e}function Fo(t,e){return t[ou]=e,t.prototype[ou]=e,t}function w_(t){return t[ou]}function E_(t,e,n,r){const o=t[pi];throw e[lf]&&o.unshift(e[lf]),t.message=function C_(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.slice(2):t;let o=z(e);if(Array.isArray(e))o=e.map(z).join(" -> ");else if("object"==typeof e){let s=[];for(let i in e)if(e.hasOwnProperty(i)){let a=e[i];s.push(i+":"+("string"==typeof a?JSON.stringify(a):z(a)))}o=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(y_,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+t.message,o,n,r),t.ngTokenPath=o,t[pi]=null,t}const iu=Fo(vr("Inject",t=>({token:t})),-1),Po=Fo(vr("Optional"),8),au=Fo(vr("Self"),2),Ro=Fo(vr("SkipSelf"),4),M_=Fo(vr("Host"),1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let df=null;function Oo(){return df=df||new g_}function gi(t){return ff(Oo().parameters(t))}function ff(t){return t.map(e=>function I_(t){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){const r=t[n];if(void 0===r)continue;const o=Object.getPrototypeOf(r);if(r instanceof Po||"Optional"===o.ngMetadataName)e.optional=!0;else if(r instanceof Ro||"SkipSelf"===o.ngMetadataName)e.skipSelf=!0;else if(r instanceof au||"Self"===o.ngMetadataName)e.self=!0;else if(r instanceof M_||"Host"===o.ngMetadataName)e.host=!0;else if(r instanceof iu)e.token=r.token;else if(r instanceof i_){if(void 0===r.attributeName)throw new Error("Attribute name must be defined.");e.attribute=r.attributeName}else e.token=r}else void 0===t||Array.isArray(t)&&0===t.length?e.token=null:e.token=t;return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e))}let wr=new Map;const Lo=new Set;function pf(t){return!!(t.templateUrl&&!t.hasOwnProperty("template")||t.styleUrls&&t.styleUrls.length)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mi=new Map;let yi,Di,hf=!0;function gf(t,e){(function F_(t,e,n){if(e&&e!==n&&hf)throw new Error(`Duplicate module registered for ${t} - ${z(e)} vs ${z(e.name)}`)})(e,mi.get(e)||null,t),mi.set(e,t)}function uu(){if(void 0===yi&&(yi=null,$.trustedTypes))try{yi=$.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return yi}function Er(t){return uu()?.createHTML(t)||t}function lu(){if(void 0===Di&&(Di=null,$.trustedTypes))try{Di=$.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Di}function yf(t){return lu()?.createHTML(t)||t}function Df(t){return lu()?.createScript(t)||t}function vf(t){return lu()?.createScriptURL(t)||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Sn{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class O_ extends Sn{getTypeName(){return"HTML"}}class L_ extends Sn{getTypeName(){return"Style"}}class k_ extends Sn{getTypeName(){return"Script"}}class V_ extends Sn{getTypeName(){return"URL"}}class j_ extends Sn{getTypeName(){return"ResourceURL"}}function Ve(t){return t instanceof Sn?t.changingThisBreaksApplicationSecurity:t}function ht(t,e){const n=_f(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}function _f(t){return t instanceof Sn&&t.getTypeName()||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wf(t){const e=new q_(t);return function W_(){try{return!!(new window.DOMParser).parseFromString(Er(""),"text/html")}catch{return!1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()?new z_(e):e}class z_{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{const n=(new window.DOMParser).parseFromString(Er(e),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(e):(n.removeChild(n.firstChild),n)}catch{return null}}}class q_{constructor(e){if(this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(e){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=Er(e),n;const r=this.inertDocument.createElement("body");return r.innerHTML=Er(e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(e){const n=e.attributes;for(let o=n.length-1;0<o;o--){const i=n.item(o).name;("xmlns:ns1"===i||0===i.indexOf("ns1:"))&&e.removeAttribute(i)}let r=e.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}const Q_=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,K_=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function ko(t){return(t=String(t)).match(Q_)||t.match(K_)?t:"unsafe:"+t}function Ef(t){return(t=String(t)).split(",").map(e=>ko(e.trim())).join(", ")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gt(t){const e={};for(const n of t.split(","))e[n]=!0;return e}function Vo(...t){const e={};for(const n of t)for(const r in n)n.hasOwnProperty(r)&&(e[r]=!0);return e}const Cf=gt("area,br,col,hr,img,wbr"),Mf=gt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),If=gt("rp,rt"),Y_=Vo(If,Mf),Z_=Vo(Mf,gt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),J_=Vo(If,gt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),cu=Vo(Cf,Z_,J_,Y_),du=gt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),fu=gt("srcset"),X_=gt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),ew=gt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),bf=Vo(du,fu,X_,ew),tw=gt("script,style,template");class nw{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let n=e.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let o=this.checkClobberedElement(n,n.nextSibling);if(o){n=o;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(e){const n=e.nodeName.toLowerCase();if(!cu.hasOwnProperty(n))return this.sanitizedSomething=!0,!tw.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=e.attributes;for(let o=0;o<r.length;o++){const s=r.item(o),i=s.name,a=i.toLowerCase();if(!bf.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let u=s.value;du[a]&&(u=ko(u)),fu[a]&&(u=Ef(u)),this.buf.push(" ",i,'="',Tf(u),'"')}return this.buf.push(">"),!0}endElement(e){const n=e.nodeName.toLowerCase();cu.hasOwnProperty(n)&&!Cf.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(e){this.buf.push(Tf(e))}checkClobberedElement(e,n){if(n&&(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return n}}const rw=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ow=/([^\#-~ |!])/g;function Tf(t){return t.replace(/&/g,"&amp;").replace(rw,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(ow,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let vi;function Af(t,e){let n=null;try{vi=vi||wf(t);let r=e?String(e):"";n=vi.getInertBodyElement(r);let o=5,s=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=s,s=n.innerHTML,n=vi.getInertBodyElement(r)}while(r!==s);return Er((new nw).sanitizeChildren(pu(n)||n))}finally{if(n){const r=pu(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function pu(t){return"content"in t&&function sw(t){return t.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===t.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)?t.content:null}var je;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iw(t){const e=jo();return e?yf(e.sanitize(je.HTML,t)||""):ht(t,"HTML")?yf(Ve(t)):Af(ka(),T(t))}function aw(t){const e=jo();return e?e.sanitize(je.STYLE,t)||"":ht(t,"Style")?Ve(t):T(t)}function Sf(t){const e=jo();return e?e.sanitize(je.URL,t)||"":ht(t,"URL")?Ve(t):ko(T(t))}function xf(t){const e=jo();if(e)return vf(e.sanitize(je.RESOURCE_URL,t)||"");if(ht(t,"ResourceURL"))return vf(Ve(t));throw new F(904,"")}function uw(t){const e=jo();if(e)return Df(e.sanitize(je.SCRIPT,t)||"");if(ht(t,"Script"))return Df(Ve(t));throw new F(905,"")}function lw(t){return Er(t[0])}function cw(t){return function R_(t){return uu()?.createScriptURL(t)||t}(t[0])}function fw(t,e,n){return function dw(t,e){return"src"===e&&("embed"===t||"frame"===t||"iframe"===t||"media"===t||"script"===t)||"href"===e&&("base"===t||"link"===t)?xf:Sf}(e,n)(t)}function jo(){const t=D();return t&&t[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL"}(je||(je={}));const hu="ngOriginalError";function gu(t){return t[hu]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cr{constructor(){this._console=console}handleError(e){const n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&gu(e);for(;n&&gu(n);)n=gu(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hw=/^>|^->|<!--|-->|--!>|<!-$/g,gw=/(<|>)/;function Nf(t){return t.replace(hw,e=>e.replace(gw,"\u200b$1\u200b"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mu=new Map;let ww=0;function Ff(t){return mu.get(t)||null}const Du="__ngContext__";function ge(t,e){Se(e)?(t[Du]=e[20],function Cw(t){mu.set(t[20],t)}(e)):t[Du]=e}function Bo(t){const e=t[Du];return"number"==typeof e?Ff(e):e||null}function vu(t){const e=Bo(t);return e?Se(e)?e:e.lView:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fw=(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind($);function Pw(t){return t.ownerDocument.defaultView}function Rw(t){return t.ownerDocument}function Ow(t){return t.ownerDocument.body}function Pt(t){return t instanceof Function?t():t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Xt;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let _u;function wu(t,e){return _u(t,e)}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(Xt||(Xt={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ho(t){const e=t[3];return Je(e)?e[3]:e}function Eu(t){return Hf(t[13])}function Cu(t){return Hf(t[4])}function Hf(t){for(;null!==t&&!Je(t);)t=t[4];return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ir(t,e,n,r,o){if(null!=r){let s,i=!1;Je(r)?s=r:Se(r)&&(i=!0,r=r[0]);const a=se(r);0===t&&null!==n?null==o?Wf(e,n,a):xn(e,n,a,o||null,!0):1===t&&null!==n?xn(e,n,a,o||null,!0):2===t?tp(e,a,i):3===t&&e.destroyNode(a),null!=s&&function Yw(t,e,n,r,o){const s=n[7],i=se(n);s!==i&&Ir(e,t,r,s,o);for(let a=10;a<n.length;a++){const u=n[a];$o(u[1],u,t,e,r,s)}}(e,t,s,n,o)}}function Mu(t,e){return te(t)?t.createText(e):t.createTextNode(e)}function $f(t,e,n){te(t)?t.setValue(e,n):e.textContent=n}function Vw(t,e){return t.createComment(Nf(e))}function Iu(t,e,n){if(te(t))return t.createElement(e,n);{const r=null!==n?function _v(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":e===Oa?"http://www.w3.org/1998/MathML/":null}(n):null;return null===r?t.createElement(e):t.createElementNS(r,e)}}function Uw(t,e,n,r){const o=10+r,s=n.length;r>0&&(n[o-1][4]=e),r<s-10?(e[4]=n[o],of(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const i=e[17];null!==i&&n!==i&&function Gw(t,e){const n=t[9],o=e[3][3][16];e[16]!==o&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(i,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=64}function Uf(t,e){const n=t[9],r=n.indexOf(e),o=e[3];512&e[2]&&(e[2]&=-513,Ba(o,-1)),n.splice(r,1)}function bu(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&Uf(o,r),e>0&&(t[n-1][4]=r[4]);const s=di(t,10+e);!function jw(t,e){$o(t,e,e[x],2,null,null),e[0]=null,e[6]=null}(r[1],r);const i=s[19];null!==i&&i.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Gf(t,e){if(!(128&e[2])){const n=e[x];te(n)&&n.destroyNode&&$o(t,e,n,3,null,null),function $w(t){let e=t[13];if(!e)return Tu(t[1],t);for(;e;){let n=null;if(Se(e))n=e[13];else{const r=e[10];r&&(n=r)}if(!n){for(;e&&!e[4]&&e!==t;)Se(e)&&Tu(e[1],e),e=e[3];null===e&&(e=t),Se(e)&&Tu(e[1],e),n=e&&e[4]}e=n}}(e)}}function Tu(t,e){if(!(128&e[2])){e[2]&=-65,e[2]|=128,function qw(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const o=e[n[r]];if(!(o instanceof Mo)){const s=n[r+1];if(Array.isArray(s))for(let i=0;i<s.length;i+=2){const a=o[s[i]],u=s[i+1];Ue(4,a,u);try{u.call(a)}finally{Ue(5,a,u)}}else{Ue(4,o,s);try{s.call(o)}finally{Ue(5,o,s)}}}}}(t,e),function zw(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let s=0;s<n.length-1;s+=2)if("string"==typeof n[s]){const i=n[s+1],a="function"==typeof i?i(e):se(e[i]),u=r[o=n[s+2]],l=n[s+3];"boolean"==typeof l?a.removeEventListener(n[s],u,l):l>=0?r[o=l]():r[o=-l].unsubscribe(),s+=2}else{const i=r[o=n[s+1]];n[s].call(i)}if(null!==r){for(let s=o+1;s<r.length;s++)r[s]();e[7]=null}}(t,e),1===e[1].type&&te(e[x])&&e[x].destroy();const n=e[17];if(null!==n&&Je(e[3])){n!==e[3]&&Uf(n,e);const r=e[19];null!==r&&r.detachView(t)}!function Mw(t){mu.delete(t[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}}function zf(t,e,n){return qf(t,e.parent,n)}function qf(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const o=t.data[r.directiveStart].encapsulation;if(o===At.None||o===At.Emulated)return null}return Ge(r,n)}function xn(t,e,n,r,o){te(t)?t.insertBefore(e,n,r,o):(Kf(e)?e.content:e).insertBefore(n,r,o)}function Wf(t,e,n){te(t)?t.appendChild(e,n):(Kf(e)?e.content:e).appendChild(n)}function Qf(t,e,n,r,o){null!==r?xn(t,e,n,r,o):Wf(t,e,n)}function Kf(t){return"TEMPLATE"===t.tagName&&void 0!==t.content}function _i(t,e){return te(t)?t.parentNode(e):e.parentNode}function Yf(t,e,n){return Jf(t,e,n)}function Zf(t,e,n){return 40&t.type?Ge(t,n):null}let Au,Jf=Zf;function Xf(t,e){Jf=t,Au=e}function wi(t,e,n,r){const o=zf(t,r,e),s=e[x],a=Yf(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let u=0;u<n.length;u++)Qf(s,o,n[u],a,!1);else Qf(s,o,n,a,!1);void 0!==Au&&Au(s,r,e,n,o)}function Ei(t,e){if(null!==e){const n=e.type;if(3&n)return Ge(e,t);if(4&n)return Su(-1,t[e.index]);if(8&n){const r=e.child;if(null!==r)return Ei(t,r);{const o=t[e.index];return Je(o)?Su(-1,o):se(o)}}if(32&n)return wu(e,t)()||se(t[e.index]);{const r=ep(t,e);if(null!==r){if(Array.isArray(r))return r[0];return Ei(Ho(t[16]),r)}return Ei(t,e.next)}}return null}function ep(t,e){if(null!==e){const r=t[16][6],o=e.projection;return r.projection[o]}return null}function Su(t,e){const n=10+t+1;if(n<e.length){const r=e[n],o=r[1].firstChild;if(null!==o)return Ei(r,o)}return e[7]}function tp(t,e,n){const r=_i(t,e);r&&function Ww(t,e,n,r){te(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}function xu(t,e,n,r,o,s,i){for(;null!=n;){const a=r[n.index],u=n.type;if(i&&0===e&&(a&&ge(se(a),r),n.flags|=4),64!=(64&n.flags))if(8&u)xu(t,e,n.child,r,o,s,!1),Ir(e,t,o,a,s);else if(32&u){const l=wu(n,r);let c;for(;c=l();)Ir(e,t,o,c,s);Ir(e,t,o,a,s)}else 16&u?np(t,e,r,n,o,s):Ir(e,t,o,a,s);n=i?n.projectionNext:n.next}}function $o(t,e,n,r,o,s){xu(n,r,t.firstChild,e,o,s,!1)}function np(t,e,n,r,o,s){const i=n[16],u=i[6].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++){Ir(e,t,o,u[l],s)}else{xu(t,e,u,i[3],o,s,!0)}}function rp(t,e,n){te(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function Nu(t,e,n){te(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function op(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const s=e.length;if(o+s===r||t.charCodeAt(o+s)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sp="ng-template";function Jw(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==op(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function ip(t){return 4===t.type&&t.value!==sp}function Xw(t,e,n){return e===(4!==t.type||n?t.value:sp)}function eE(t,e,n){let r=4;const o=t.attrs||[],s=function rE(t){for(let e=0;e<t.length;e++){if(Ud(t[e]))return e}return t.length}(o);let i=!1;for(let a=0;a<e.length;a++){const u=e[a];if("number"!=typeof u){if(!i)if(4&r){if(r=2|1&r,""!==u&&!Xw(t,u,n)||""===u&&1===e.length){if(et(r))return!1;i=!0}}else{const l=8&r?u:e[++a];if(8&r&&null!==t.attrs){if(!Jw(t.attrs,l,n)){if(et(r))return!1;i=!0}continue}const d=tE(8&r?"class":u,o,ip(t),n);if(-1===d){if(et(r))return!1;i=!0;continue}if(""!==l){let f;f=d>s?"":o[d+1].toLowerCase();const p=8&r?f:null;if(p&&-1!==op(p,l,0)||2&r&&l!==f){if(et(r))return!1;i=!0}}}}else{if(!i&&!et(r)&&!et(u))return!1;if(i&&et(u))continue;i=!1,r=u|1&r}}return et(r)||i}function et(t){return 0==(1&t)}function tE(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let s=!1;for(;o<e.length;){const i=e[o];if(i===t)return o;if(3===i||6===i)s=!0;else{if(1===i||2===i){let a=e[++o];for(;"string"==typeof a;)a=e[++o];continue}if(4===i)break;if(0===i){o+=4;continue}}o+=s?1:2}return-1}return function oE(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function ap(t,e,n=!1){for(let r=0;r<e.length;r++)if(eE(t,e[r],n))return!0;return!1}function sE(t,e){e:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let o=0;o<t.length;o++)if(t[o]!==r[o])continue e;return!0}}return!1}function up(t,e){return t?":not("+e.trim()+")":e}function iE(t){let e=t[0],n=1,r=2,o="",s=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const a=t[++n];o+="["+i+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+i:4&r&&(o+=" "+i);else""!==o&&!et(i)&&(e+=up(s,o),o=""),r=i,s=s||!et(r);n++}return""!==o&&(e+=up(s,o)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const A={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function en(t){lp(L(),D(),Ce()+t,!1)}function lp(t,e,n,r){if(!r)if(3==(3&e[2])){const s=t.preOrderCheckHooks;null!==s&&ni(e,s,n)}else{const s=t.preOrderHooks;null!==s&&ri(e,s,0,n)}Kt(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cp={\u0275\u0275defineInjectable:I,\u0275\u0275defineInjector:Ye,\u0275\u0275inject:w,\u0275\u0275invalidFactoryDep:cf,resolveForwardRef:M};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lE(t,e){let n=null,r=null;t.hasOwnProperty($s)||Object.defineProperty(t,$s,{get:()=>(null===n&&(n=ue().compileInjectable(cp,`ng:///${t.name}/\u0275prov.js`,function pE(t,e){const n=e||{providedIn:null},r={name:t.name,type:t,typeArgumentCount:0,providedIn:n.providedIn};return(dp(n)||fp(n))&&void 0!==n.deps&&(r.deps=ff(n.deps)),dp(n)?r.useClass=n.useClass:function dE(t){return cE in t}(n)?r.useValue=n.useValue:fp(n)?r.useFactory=n.useFactory:function fE(t){return void 0!==t.useExisting}(n)&&(r.useExisting=n.useExisting),r
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(t,e))),n)}),t.hasOwnProperty(St)||Object.defineProperty(t,St,{get:()=>{if(null===r){const o=ue();r=o.compileFactory(cp,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,typeArgumentCount:0,deps:gi(t),target:o.FactoryTarget.Injectable})}return r},configurable:!0})}const cE=G({provide:String,useValue:G});function dp(t){return void 0!==t.useClass}function fp(t){return void 0!==t.useFactory}Ao("Injectable",void 0,void 0,void 0,(t,e)=>lE(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pp=new P("ENVIRONMENT_INITIALIZER"),hp=new P("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function hE(...t){return{\u0275providers:gp(!0,t)}}function gp(t,...e){const n=[],r=new Set;let o;return Ft(e,s=>{const i=s;Fu(i,n,[],r)&&(o||(o=[]),o.push(i))}),void 0!==o&&mp(o,n),n}function mp(t,e){for(let n=0;n<t.length;n++){const{ngModule:r,providers:o}=t[n];Ft(o,s=>{e.push(s)})}}function Fu(t,e,n,r){if(!(t=M(t)))return!1;let o=null,s=hd(t);const i=!s&&q(t);if(s||i){if(i&&!i.standalone)return!1;o=t}else{const u=t.ngModule;if(s=hd(u),!s)return!1;o=u}const a=r.has(o);if(i){if(a)return!1;if(r.add(o),i.dependencies){const u="function"==typeof i.dependencies?i.dependencies():i.dependencies;for(const l of u)Fu(l,e,n,r)}}else{if(!s)return!1;{if(null!=s.imports&&!a){let l;r.add(o);try{Ft(s.imports,c=>{Fu(c,e,n,r)&&(l||(l=[]),l.push(c))})}finally{}void 0!==l&&mp(l,e)}if(!a){const l=Tn(o)||(()=>new o);e.push({provide:o,useFactory:l,deps:B},{provide:hp,useValue:o,multi:!0},{provide:pp,useValue:()=>w(o),multi:!0})}const u=s.providers;if(null!=u&&!a){Ft(u,c=>{e.push(c)})}}}return o!==t&&void 0!==t.providers}const gE=G({provide:String,useValue:G});function Pu(t){return null!==t&&"object"==typeof t&&gE in t}function yp(t){return!(!t||!t.useExisting)}function Dp(t){return!(!t||!t.useFactory)}function Nn(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ru=new P("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vp{get(e,n=Jt){if(n===Jt){const r=new Error(`NullInjectorError: No provider for ${z(e)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ou=new P("Set Injector scope."),Ci={},yE={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Lu;function ku(){return void 0===Lu&&(Lu=new vp),Lu}class Uo{}class _p extends Uo{constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,ju(e,i=>this.processProvider(i)),this.records.set(Ru,br(void 0,this)),o.has("environment")&&this.records.set(Uo,br(void 0,this));const s=this.records.get(Ou);null!=s&&"string"==typeof s.value&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(hp.multi,B,O.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const e of this._ngOnDestroyHooks)e.ngOnDestroy();for(const e of this._onDestroyHooks)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(e){this._onDestroyHooks.push(e)}get(e,n=Jt,r=O.Default){this.assertNotDestroyed();const o=hi(this),s=ct(void 0);try{if(!(r&O.SkipSelf)){let a=this.records.get(e);if(void 0===a){const u=function EE(t){return"function"==typeof t||"object"==typeof t&&t instanceof P}(e)&&Ma(e);a=u&&this.injectableDefInScope(u)?br(Vu(e),Ci):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}const i=r&O.Self?ku():this.parent;return n=r&O.Optional&&n===Jt?null:n,i.get(e,n)}catch(i){if("NullInjectorError"===i.name){if((i[pi]=i[pi]||[]).unshift(z(e)),o)throw i;return E_(i,e,"R3InjectorError",this.source)}throw i}finally{ct(s),hi(o)}}resolveInjectorInitializers(){const e=hi(this),n=ct(void 0);try{const r=this.get(pp.multi,B,O.Self);for(const o of r)o()}finally{hi(e),ct(n)}}toString(){const e=[],n=this.records;for(const r of n.keys())e.push(z(r));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new F(205,!1)}processProvider(e){let n=Nn(e=M(e))?e:M(e&&e.provide);const r=function vE(t){if(Pu(t))return br(void 0,t.useValue);return br(wp(t),Ci)}(e);if(Nn(e)||!0!==e.multi){this.records.get(n)}else{let o=this.records.get(n);o||(o=br(void 0,Ci,!0),o.factory=()=>su(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n){return n.value===Ci&&(n.value=yE,n.value=n.factory()),"object"==typeof n.value&&n.value&&function wE(t){return null!==t&&"object"==typeof t&&"function"==typeof t.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;const n=M(e.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Vu(t){const e=Ma(t),n=null!==e?e.factory:Tn(t);if(null!==n)return n;if(t instanceof P)throw new F(204,!1);if(t instanceof Function)return function DE(t){const e=t.length;if(e>0){xo(e,"?");throw new F(204,!1)}const n=function XD(t){const e=t&&(t[$s]||t[gd]);if(e){const n=function ev(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new F(204,!1)}function wp(t,e,n){let r;if(Nn(t)){const o=M(t);return Tn(o)||Vu(o)}if(Pu(t))r=()=>M(t.useValue);else if(Dp(t))r=()=>t.useFactory(...su(t.deps||[]));else if(yp(t))r=()=>w(M(t.useExisting));else{const o=M(t&&(t.useClass||t.provide));if(!function _E(t){return!!t.deps}(t))return Tn(o)||Vu(o);r=()=>new o(...su(t.deps))}return r}function br(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function CE(t){return!!t.\u0275providers}function ju(t,e){for(const n of t)Array.isArray(n)?ju(n,e):CE(n)?ju(n.\u0275providers,e):e(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ep(t,e=null,n=null,r){const o=Cp(t,e,n,r);return o.resolveInjectorInitializers(),o}function Cp(t,e=null,n=null,r,o=new Set){const s=[n||B,hE(t)];return r=r||("object"==typeof t?void 0:z(t)),new _p(s,e||ku(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class de{static create(e,n){if(Array.isArray(e))return Ep({name:""},n,e,"");{const r=e.name??"";return Ep({name:r},e.parent,e.providers,r)}}}function Bu(t){if(t.length>1){return" ("+
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ME(t){const e=[];for(let n=0;n<t.length;++n){if(e.indexOf(t[n])>-1)return e.push(t[n]),e;e.push(t[n])}return e}(t.slice().reverse()).map(r=>z(r.token)).join(" -> ")+")"}return""}function Hu(t,e,n,r){const o=[e],s=n(o),i=r?function pw(t,e){const n=`${t} caused by: ${e instanceof Error?e.message:e}`,r=Error(n);return r[hu]=e,r}(s,r):Error(s);return i.addKey=IE,i.keys=o,i.injectors=[t],i.constructResolvingMessage=n,i[hu]=r,i}function IE(t,e){this.injectors.push(t),this.keys.push(e),this.message=this.constructResolvingMessage(this.keys)}function Mp(t,e){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];s&&0!=s.length?n.push(s.map(z).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+z(t)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+z(t)+"' is decorated with Injectable.")}function NE(t,e){return Error(`Cannot mix multi providers and regular providers, got: ${t} ${e}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */de.THROW_IF_NOT_FOUND=Jt,de.NULL=new vp,de.\u0275prov=I({token:de,providedIn:"any",factory:()=>w(Ru)}),de.__NG_ELEMENT_ID__=-1;class tn{constructor(e,n){if(this.token=e,this.id=n,!e)throw new Error("Token must be defined!");this.displayName=z(this.token)}static get(e){return Ip.get(M(e))}static get numberOfKeys(){return Ip.numberOfKeys}}const Ip=new class FE{constructor(){this._allKeys=new Map}get(e){if(e instanceof tn)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const n=new tn(e,tn.numberOfKeys);return this._allKeys.set(e,n),n}get numberOfKeys(){return this._allKeys.size}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mi{constructor(e,n,r){this.key=e,this.optional=n,this.visibility=r}static fromKey(e){return new Mi(e,!1,null)}}const PE=[];class bp{constructor(e,n,r){this.key=e,this.resolvedFactories=n,this.multiProvider=r,this.resolvedFactory=this.resolvedFactories[0]}}class RE{constructor(e,n){this.factory=e,this.dependencies=n}}function OE(t){let e,n;if(t.useClass){const r=M(t.useClass);e=Oo().factory(r),n=Ap(r)}else t.useExisting?(e=r=>r,n=[Mi.fromKey(tn.get(t.useExisting))]):t.useFactory?(e=t.useFactory,n=function jE(t,e){if(e){const n=e.map(r=>[r]);return e.map(r=>Sp(t,r,n))}return Ap(t)}(t.useFactory,t.deps)):(e=()=>t.useValue,n=PE);return new RE(e,n)}function LE(t){return new bp(tn.get(t.provide),[OE(t)],t.multi||!1)}function kE(t){const r=function VE(t,e){for(let n=0;n<t.length;n++){const r=t[n],o=e.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw NE(o,r);if(r.multiProvider)for(let s=0;s<r.resolvedFactories.length;s++)o.resolvedFactories.push(r.resolvedFactories[s]);else e.set(r.key.id,r)}else{let s;s=r.multiProvider?new bp(r.key,r.resolvedFactories.slice(),r.multiProvider):r,e.set(r.key.id,s)}}return e}(Tp(t,[]).map(LE),new Map);return Array.from(r.values())}function Tp(t,e){return t.forEach(n=>{if(n instanceof tu)e.push({provide:n,useClass:n});else if(n&&"object"==typeof n&&void 0!==n.provide)e.push(n);else{if(!Array.isArray(n))throw function SE(t){return Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`)}(n);Tp(n,e)}}),e}function Ap(t){const e=Oo().parameters(t);if(!e)return[];if(e.some(n=>null==n))throw Mp(t,e);return e.map(n=>Sp(t,n,e))}function Sp(t,e,n){let r=null,o=!1;if(!Array.isArray(e))return $u(e instanceof iu?e.token:e,o,null);let s=null;for(let i=0;i<e.length;++i){const a=e[i];a instanceof tu?r=a:a instanceof iu?r=a.token:a instanceof Po?o=!0:a instanceof au||a instanceof Ro?s=a:a instanceof P&&(r=a)}if(r=M(r),null!=r)return $u(r,o,s);throw Mp(t,n)}function $u(t,e,n){return new Mi(tn.get(t),e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Go={};class zo{static resolve(e){return kE(e)}static resolveAndCreate(e,n){const r=zo.resolve(e);return zo.fromResolvedProviders(r,n)}static fromResolvedProviders(e,n){return new Tr(e,n)}}class Tr{constructor(e,n){this._constructionCounter=0,this._providers=e,this.parent=n||null;const r=e.length;this.keyIds=[],this.objs=[];for(let o=0;o<r;o++)this.keyIds[o]=e[o].key.id,this.objs[o]=Go}get(e,n=Jt){return this._getByKey(tn.get(e),null,n)}resolveAndCreateChild(e){const n=zo.resolve(e);return this.createChildFromResolved(n)}createChildFromResolved(e){const n=new Tr(e);return n.parent=this,n}resolveAndInstantiate(e){return this.instantiateResolved(zo.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function xE(t){return Error(`Index ${t} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw function TE(t,e){return Hu(t,e,function(n){return`Cannot instantiate cyclic dependency!${Bu(n)}`})}(this,e.key);return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const n=[];for(let r=0;r<e.resolvedFactories.length;++r)n[r]=this._instantiate(e,e.resolvedFactories[r]);return n}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,n){const r=n.factory;let o,s;try{o=n.dependencies.map(i=>this._getByReflectiveDependency(i))}catch(i){throw i.addKey&&i.addKey(this,e.key),i}try{s=r(...o)}catch(i){throw function AE(t,e,n,r){return Hu(t,r,function(o){const s=z(o[0].token);return`${e.message}: Error during instantiation of ${s}!${Bu(o)}.`},e)}(this,i,i.stack,e.key)}return s}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:Jt)}_getByKey(e,n,r){return e===Tr.INJECTOR_KEY?this:n instanceof au?this._getByKeySelf(e,r):this._getByKeyDefault(e,r,n)}_getObjByKeyId(e){for(let n=0;n<this.keyIds.length;n++)if(this.keyIds[n]===e)return this.objs[n]===Go&&(this.objs[n]=this._new(this._providers[n])),this.objs[n];return Go}_throwOrNull(e,n){if(n!==Jt)return n;throw function bE(t,e){return Hu(t,e,function(n){return`No provider for ${z(n[0].token)}!${Bu(n)}`})}(this,e)}_getByKeySelf(e,n){const r=this._getObjByKeyId(e.id);return r!==Go?r:this._throwOrNull(e,n)}_getByKeyDefault(e,n,r){let o;for(o=r instanceof Ro?this.parent:this;o instanceof Tr;){const s=o,i=s._getObjByKeyId(e.id);if(i!==Go)return i;o=s.parent}return null!==o?o.get(e.token,n):this._throwOrNull(e,n)}get displayName(){return`ReflectiveInjector(providers: [${function BE(t,e){const n=[];for(let r=0;r<t._providers.length;++r)n[r]=e(t.getProviderAtIndex(r));return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this,n=>' "'+n.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}function N(t,e=O.Default){const n=D();if(null===n)return w(t,e);return Yd(ae(),n,M(t),e)}function HE(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Tr.INJECTOR_KEY=tn.get(de);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ii(t,e){return t<<17|e<<2}function tt(t){return t>>17&32767}function Rp(t){return 2==(2&t)}function qu(t){return 2|t}function Rt(t){return(131068&t)>>2}function Wu(t,e){return-131069&t|e<<2}function Op(t){return 1==(1&t)}function Qu(t){return 1|t}const nl=Promise.resolve(null);function Up(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],s=n[r+1];if(-1!==s){const i=t.data[s];za(o),i.contentQueries(2,e[s],s)}}}function qo(t,e,n,r,o,s,i,a,u,l,c){const d=e.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||t&&1024&t[2])&&(d[2]|=1024),xd(d),d[3]=d[15]=t,d[8]=n,d[10]=i||t&&t[10],d[x]=a||t&&t[x],d[12]=u||t&&t[12]||null,d[9]=l||t&&t[9]||null,d[6]=s,d[20]=function Ew(){return ww++}(),d[21]=c,d[16]=2==e.type?t[16]:d,d}function Ar(t,e,n,r,o){let s=t.data[e];if(null===s)s=rl(t,e,n,r,o),function Rv(){return b.lFrame.inI18n}()&&(s.flags|=64);else if(64&s.type){s.type=n,s.value=r,s.attrs=o;const i=Co();s.injectorIndex=null===i?-1:i.injectorIndex}return ft(s,!0),s}function rl(t,e,n,r,o){const s=Pd(),i=Ha(),a=i?s:s&&s.parent,u=t.data[e]=function iC(t,e,n,r,o,s){let i=e?e.injectorIndex:-1;return{type:n,index:r,insertBeforeIndex:null,injectorIndex:i,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,a,n,e,r,o);return null===t.firstChild&&(t.firstChild=u),null!==s&&(i?null==s.child&&null!==u.parent&&(s.child=u):null===s.next&&(s.next=u)),u}function Sr(t,e,n,r){if(0===n)return-1;const o=e.length;for(let s=0;s<n;s++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Wo(t,e,n){Xs(e);try{const r=t.viewQuery;null!==r&&fl(1,r,n);const o=t.template;null!==o&&Gp(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Up(t,e),t.staticViewQueries&&fl(2,t.viewQuery,n);const s=t.components;null!==s&&function rC(t,e){for(let n=0;n<e.length;n++)MC(t,e[n])}(e,s)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[2]&=-5,ei()}}function xr(t,e,n,r){const o=e[2];if(128==(128&o))return;Xs(e);try{xd(e),Rd(t.bindingStartIndex),null!==n&&Gp(t,e,n,2,r);const i=3==(3&o);if(i){const l=t.preOrderCheckHooks;null!==l&&ni(e,l,null)}else{const l=t.preOrderHooks;null!==l&&ri(e,l,0,null),qa(e,0)}if(function EC(t){for(let e=Eu(t);null!==e;e=Cu(e)){if(!e[2])continue;const n=e[9];for(let r=0;r<n.length;r++){const o=n[r],s=o[3];0==(512&o[2])&&Ba(s,1),o[2]|=512}}}(e),function wC(t){for(let e=Eu(t);null!==e;e=Cu(e))for(let n=10;n<e.length;n++){const r=e[n],o=r[1];ja(r)&&xr(o,r,o.template,r[8])}}(e),null!==t.contentQueries&&Up(t,e),i){const l=t.contentCheckHooks;null!==l&&ni(e,l)}else{const l=t.contentHooks;null!==l&&ri(e,l,1),qa(e,1)}!function tC(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Kt(~o);else{const s=o,i=n[++r],a=n[++r];Ov(i,s),a(2,e[s])}}}finally{Kt(-1)}}(t,e);const a=t.components;null!==a&&function nC(t,e){for(let n=0;n<e.length;n++)CC(t,e[n])}(e,a);const u=t.viewQuery;if(null!==u&&fl(2,u,r),i){const l=t.viewCheckHooks;null!==l&&ni(e,l)}else{const l=t.viewHooks;null!==l&&ri(e,l,2),qa(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),e[2]&=-41,512&e[2]&&(e[2]&=-513,Ba(e[3],-1))}finally{ei()}}function oC(t,e,n,r){const o=e[10],i=Sd(e);try{!i&&o.begin&&o.begin(),i&&Wo(t,e,r),xr(t,e,n,r)}finally{!i&&o.end&&o.end()}}function Gp(t,e,n,r,o){const s=Ce(),i=2&r;try{Kt(-1),i&&e.length>Q&&lp(t,e,Q,!1),Ue(i?2:0,o),n(r,o)}finally{Kt(s),Ue(i?3:1,o)}}function zp(t,e,n){if(Na(e)){const r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){const i=t.data[s];i.contentQueries&&i.contentQueries(1,n[s],s)}}}function ol(t,e,n){!Fd()||(function pC(t,e,n,r){const o=n.directiveStart,s=n.directiveEnd;t.firstCreatePass||bo(n,e),ge(r,e);const i=n.initialInputs;for(let a=o;a<s;a++){const u=t.data[a],l=Xe(u);l&&DC(e,n,u);const c=To(e,t,a,n);if(ge(c,e),null!==i&&vC(e,a-o,c,u,n,i),l){Oe(n.index,e)[8]=c}}}(t,e,n,Ge(n,e)),128==(128&n.flags)&&function hC(t,e,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,i=function Lv(){return b.lFrame.currentDirectiveIndex}();try{Kt(s);for(let a=r;a<o;a++){const u=t.data[a],l=e[a];Ua(a),(null!==u.hostBindings||0!==u.hostVars||null!==u.hostAttrs)&&Jp(u,l)}}finally{Kt(-1),Ua(i)}}(t,e,n))}function sl(t,e,n=Ge){const r=e.localNames;if(null!==r){let o=e.index+1;for(let s=0;s<r.length;s+=2){const i=r[s+1],a=-1===i?n(e,t):t[i];t[o++]=a}}}function qp(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=Ai(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function Ai(t,e,n,r,o,s,i,a,u,l){const c=Q+r,d=c+o,f=function sC(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:A);return n}(c,d),p="function"==typeof l?l():l;return f[1]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:p,incompleteFirstPass:!1}}function Qp(t,e,n){if(te(t)){const o=n===At.ShadowDom;return t.selectRootElement(e,o)}let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}function Kp(t,e,n,r){const o=oh(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&sh(t).push(r,o.length-1))}function Yp(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){n=null===n?{}:n;const o=t[r];n.hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function Be(t,e,n,r,o,s,i,a){const u=Ge(e,n);let c,l=e.inputs;!a&&null!=l&&(c=l[r])?(uh(t,n,c,r,o),Qs(e)&&function lC(t,e){const n=Oe(e,t);16&n[2]||(n[2]|=32)}(n,e.index)):3&e.type?(r=function uC(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(r),o=null!=i?i(o,e.value||"",r):o,te(s)?s.setProperty(u,r,o):Qa(r)||(u.setProperty?u.setProperty(r,o):u[r]=o)):e.type}function il(t,e,n,r){let o=!1;if(Fd()){const s=function gC(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let s=0;s<r.length;s++){const i=r[s];ap(n,i.selectors,!1)&&(o||(o=[]),ui(bo(n,e),t,i.type),Xe(i)?(Xp(t,n),o.unshift(i)):o.push(i))}return o}(t,e,n),i=null===r?null:{"":-1};if(null!==s){o=!0,eh(n,t.data.length,s.length);for(let c=0;c<s.length;c++){const d=s[c];d.providersResolver&&d.providersResolver(d)}let a=!1,u=!1,l=Sr(t,e,s.length,null);for(let c=0;c<s.length;c++){const d=s[c];n.mergedAttrs=si(n.mergedAttrs,d.hostAttrs),th(t,n,e,l,d),yC(l,d,i),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),a=!0),!u&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),u=!0),l++}!function aC(t,e){const n=e.directiveStart,r=e.directiveEnd,o=t.data,s=e.attrs,i=[];let a=null,u=null;for(let l=n;l<r;l++){const c=o[l],d=c.inputs,f=null===s||ip(e)?null:_C(d,s);i.push(f),a=Yp(d,l,a),u=Yp(c.outputs,l,u)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=i,e.inputs=a,e.outputs=u}(t,n)}i&&function mC(t,e,n){if(e){const r=t.localNames=[];for(let o=0;o<e.length;o+=2){const s=n[e[o+1]];if(null==s)throw new F(-301,!1);r.push(e[o],s)}}}(n,r,i)}return n.mergedAttrs=si(n.mergedAttrs,n.attrs),o}function Zp(t,e,n,r,o,s){const i=s.hostBindings;if(i){let a=t.hostBindingOpCodes;null===a&&(a=t.hostBindingOpCodes=[]);const u=~e.index;(function fC(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(a)!=u&&a.push(u),a.push(r,o,i)}}function Jp(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Xp(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function yC(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Xe(e)&&(n[""]=t)}}function eh(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function th(t,e,n,r,o){t.data[r]=o;const s=o.factory||(o.factory=Tn(o.type)),i=new Mo(s,Xe(o),N);t.blueprint[r]=i,n[r]=i,Zp(t,e,0,r,Sr(t,n,o.hostVars,A),o)}function DC(t,e,n){const r=Ge(e,t),o=qp(n),s=t[10],i=Si(t,qo(t,o,null,n.onPush?32:16,r,e,s,s.createRenderer(r,n),null,null,null));t[e.index]=i}function mt(t,e,n,r,o,s){const i=Ge(t,e);al(e[x],i,s,t.value,n,r,o)}function al(t,e,n,r,o,s,i){if(null==s)te(t)?t.removeAttribute(e,o,n):e.removeAttribute(o);else{const a=null==i?T(s):i(s,r||"",o);te(t)?t.setAttribute(e,o,a,n):n?e.setAttributeNS(n,o,a):e.setAttribute(o,a)}}function vC(t,e,n,r,o,s){const i=s[e];if(null!==i){const a=r.setInput;for(let u=0;u<i.length;){const l=i[u++],c=i[u++],d=i[u++];null!==a?r.setInput(n,d,l,c):n[c]=d}}}function _C(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function nh(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function CC(t,e){const n=Oe(e,t);if(ja(n)){const r=n[1];48&n[2]?xr(r,n,r.template,n[8]):n[5]>0&&ul(n)}}function ul(t){for(let r=Eu(t);null!==r;r=Cu(r))for(let o=10;o<r.length;o++){const s=r[o];if(512&s[2]){const i=s[1];xr(i,s,i.template,s[8])}else s[5]>0&&ul(s)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Oe(n[r],t);ja(o)&&o[5]>0&&ul(o)}}function MC(t,e){const n=Oe(e,t),r=n[1];(function IC(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])})(r,n),Wo(r,n,n[8])}function Si(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function ll(t){for(;t;){t[2]|=32;const e=Ho(t);if(cv(t)&&!e)return t;t=e}return null}function cl(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=vu(n);if(null!==r){const o=r[1];oC(o,r,o.template,n)}}}function dl(t,e,n){const r=e[10];r.begin&&r.begin();try{xr(t,e,t.template,n)}catch(o){throw ah(e,o),o}finally{r.end&&r.end()}}function rh(t){cl(t[8])}function fl(t,e,n){za(0),e(t,n)}const TC=nl;function oh(t){return t[7]||(t[7]=[])}function sh(t){return t.cleanup||(t.cleanup=[])}function ih(t,e,n){return(null===t||Xe(t))&&(n=function Cv(t){for(;Array.isArray(t);){if("object"==typeof t[1])return t;t=t[0]}return null}(n[e.index])),n[x]}function ah(t,e){const n=t[9],r=n?n.get(Cr,null):null;r&&r.handleError(e)}function uh(t,e,n,r,o){for(let s=0;s<n.length;){const i=n[s++],a=n[s++],u=e[i],l=t.data[i];null!==l.setInput?l.setInput(u,o,r,a):u[a]=o}}function Ot(t,e,n){const r=Zs(e,t);$f(t[x],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xi(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,s=0;if(null!==e)for(let i=0;i<e.length;i++){const a=e[i];if("number"==typeof a)s=a;else if(1==s)o=wa(o,a);else if(2==s){r=wa(r,a+": "+e[++i]+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yh(t,e,n,r,o,s){const i=n[1];n[22]=t;const u=Ar(i,22,2,"#host",null),l=u.mergedAttrs=e.hostAttrs;null!==l&&(xi(u,l,!0),null!==t&&(oi(o,t,l),null!==u.classes&&Nu(o,t,u.classes),null!==u.styles&&rp(o,t,u.styles)));const c=r.createRenderer(t,e),d=qo(n,qp(e),null,e.onPush?32:16,n[22],u,r,c,s||null,null,null);return i.firstCreatePass&&(ui(bo(u,n),i,e.type),Xp(i,u),eh(u,n.length,1)),Si(n,d),n[22]=d}function Dh(t,e,n,r,o){const s=n[1],i=function dC(t,e,n){const r=ae();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),th(t,r,e,Sr(t,e,1,null),n));const o=To(e,t,r.directiveStart,r);ge(o,e);const s=Ge(r,e);return s&&ge(s,e),o}(s,n,e);if(r.components.push(i),t[8]=i,null!==o)for(const u of o)u(i,e);if(e.contentQueries){const u=ae();e.contentQueries(1,i,u.directiveStart)}const a=ae();if(s.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){Kt(a.index);Zp(n[1],a,0,a.directiveStart,a.directiveEnd,e),Jp(e,i)}return i}function vh(t,e){return{components:[],scheduler:t||Fw,clean:TC,playerHandler:e||null,flags:0}}function VC(){const t=ae();ti(D()[1],t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _h(t){return Object.getPrototypeOf(t.prototype).constructor}function wh(t){let e=_h(t.type),n=!0;const r=[t];for(;e;){let o;if(Xe(t))o=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp){throw new F(903,"")}o=e.\u0275dir}if(o){if(n){r.push(o);const i=t;i.inputs=hl(t.inputs),i.declaredInputs=hl(t.declaredInputs),i.outputs=hl(t.outputs);const a=o.hostBindings;a&&$C(t,a);const u=o.viewQuery,l=o.contentQueries;if(u&&BC(t,u),l&&HC(t,l),_a(t.inputs,o.inputs),_a(t.declaredInputs,o.declaredInputs),_a(t.outputs,o.outputs),Xe(o)&&o.data.animation){const c=t.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const s=o.features;if(s)for(let i=0;i<s.length;i++){const a=s[i];a&&a.ngInherit&&a(t),a===wh&&(n=!1)}}e=Object.getPrototypeOf(e)}!function jC(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=si(o.hostAttrs,n=si(n,o.hostAttrs))}}(r)}function hl(t){return t===ir?{}:t===B?[]:t}function BC(t,e){const n=t.viewQuery;t.viewQuery=n?(r,o)=>{e(r,o),n(r,o)}:e}function HC(t,e){const n=t.contentQueries;t.contentQueries=n?(r,o,s)=>{e(r,o,s),n(r,o,s)}:e}function $C(t,e){const n=t.hostBindings;t.hostBindings=n?(r,o)=>{e(r,o),n(r,o)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const UC=["providersResolver"],GC=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function zC(t){let n,e=_h(t.type);n=Xe(t)?e.\u0275cmp:e.\u0275dir;const r=t;for(const o of UC)r[o]=n[o];if(Xe(n))for(const o of GC)r[o]=n[o]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ni=null;function Fn(){if(!Ni){const t=$.Symbol;if(t&&t.iterator)Ni=t.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<e.length;++n){const r=e[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ni=r)}}}return Ni}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qo(t){return!!gl(t)&&(Array.isArray(t)||!(t instanceof Map)&&Fn()in t)}function gl(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yt(t,e,n){return t[e]=n}function Ko(t,e){return t[e]}function me(t,e,n){const r=t[e];return!Object.is(r,n)&&(t[e]=n,!0)}function Pn(t,e,n,r){const o=me(t,e,n);return me(t,e+1,r)||o}function Fi(t,e,n,r,o){const s=Pn(t,e,n,r);return me(t,e+2,o)||s}function ze(t,e,n,r,o,s){const i=Pn(t,e,n,r);return Pn(t,e+2,o,s)||i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Eh(t,e,n,r){const o=D();if(me(o,fr(),e)){L();mt(ne(),o,t,e,n,r)}return Eh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nr(t,e){let n=!1,r=xt();for(let s=1;s<e.length;s+=2)n=me(t,r++,e[s])||n;if(Rd(r),!n)return A;let o=e[0];for(let s=1;s<e.length;s+=2)o+=T(e[s])+e[s+1];return o}function Fr(t,e,n,r){return me(t,fr(),n)?e+T(n)+r:A}function Pr(t,e,n,r,o,s){const a=Pn(t,xt(),n,o);return Nt(2),a?e+T(n)+r+T(o)+s:A}function Rr(t,e,n,r,o,s,i,a){const l=Fi(t,xt(),n,o,i);return Nt(3),l?e+T(n)+r+T(o)+s+T(i)+a:A}function Or(t,e,n,r,o,s,i,a,u,l){const d=ze(t,xt(),n,o,i,u);return Nt(4),d?e+T(n)+r+T(o)+s+T(i)+a+T(u)+l:A}function Lr(t,e,n,r,o,s,i,a,u,l,c,d){const f=xt();let p=ze(t,f,n,o,i,u);return p=me(t,f+4,c)||p,Nt(5),p?e+T(n)+r+T(o)+s+T(i)+a+T(u)+l+T(c)+d:A}function kr(t,e,n,r,o,s,i,a,u,l,c,d,f,p){const h=xt();let g=ze(t,h,n,o,i,u);return g=Pn(t,h+4,c,f)||g,Nt(6),g?e+T(n)+r+T(o)+s+T(i)+a+T(u)+l+T(c)+d+T(f)+p:A}function Vr(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g){const y=xt();let v=ze(t,y,n,o,i,u);return v=Fi(t,y+4,c,f,h)||v,Nt(7),v?e+T(n)+r+T(o)+s+T(i)+a+T(u)+l+T(c)+d+T(f)+p+T(h)+g:A}function jr(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v){const E=xt();let m=ze(t,E,n,o,i,u);return m=ze(t,E+4,c,f,h,y)||m,Nt(8),m?e+T(n)+r+T(o)+s+T(i)+a+T(u)+l+T(c)+d+T(f)+p+T(h)+g+T(y)+v:A}function Ch(t,e,n,r,o,s){const i=D(),a=Fr(i,e,n,r);if(a!==A){mt(ne(),i,t,a,o,s)}return Ch}function Mh(t,e,n,r,o,s,i,a){const u=D(),l=Pr(u,e,n,r,o,s);if(l!==A){mt(ne(),u,t,l,i,a)}return Mh}function Ih(t,e,n,r,o,s,i,a,u,l){const c=D(),d=Rr(c,e,n,r,o,s,i,a);if(d!==A){mt(ne(),c,t,d,u,l)}return Ih}function bh(t,e,n,r,o,s,i,a,u,l,c,d){const f=D(),p=Or(f,e,n,r,o,s,i,a,u,l);if(p!==A){mt(ne(),f,t,p,c,d)}return bh}function Th(t,e,n,r,o,s,i,a,u,l,c,d,f,p){const h=D(),g=Lr(h,e,n,r,o,s,i,a,u,l,c,d);if(g!==A){mt(ne(),h,t,g,f,p)}return Th}function Ah(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g){const y=D(),v=kr(y,e,n,r,o,s,i,a,u,l,c,d,f,p);if(v!==A){mt(ne(),y,t,v,h,g)}return Ah}function Sh(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v){const E=D(),m=Vr(E,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g);if(m!==A){mt(ne(),E,t,m,y,v)}return Sh}function xh(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v,E,m){const C=D(),R=jr(C,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v);if(R!==A){mt(ne(),C,t,R,E,m)}return xh}function Nh(t,e,n,r){const o=D(),s=Nr(o,e);if(s!==A){mt(ne(),o,t,s,n,r)}return Nh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pi(t,e,n,r,o,s,i,a){const u=D(),l=L(),c=t+Q,d=l.firstCreatePass?function KC(t,e,n,r,o,s,i,a,u){const l=e.consts,c=Ar(e,t,4,i||null,Qt(l,a));il(e,n,c,Qt(l,u)),ti(e,c);const d=c.tViews=Ai(2,c,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l);return null!==e.queries&&(e.queries.template(e,c),d.queries=e.queries.embeddedTView(c)),c}(c,l,u,e,n,r,o,s,i):l.data[c];ft(d,!1);const f=u[x].createComment("");wi(l,u,f,d),ge(f,u),Si(u,u[c]=nh(f,u,f,d)),Ks(d)&&ol(l,u,d),null!=i&&sl(u,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ZC(t){return dr(function Pv(){return b.lFrame.contextLView}(),Q+t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yo(t,e,n){const r=D();if(me(r,fr(),e)){Be(L(),ne(),r,t,e,r[x],n,!1)}return Yo}function ml(t,e,n,r,o){const i=o?"class":"style";uh(t,n,e.inputs[i],i,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ye(t,e,n,r){const o=D(),s=L(),i=Q+t,a=o[x],u=o[i]=Iu(a,e,function Gv(){return b.lFrame.currentNamespace}()),l=s.firstCreatePass?function JC(t,e,n,r,o,s,i){const a=e.consts,l=Ar(e,t,2,o,Qt(a,s));return il(e,n,l,Qt(a,i)),null!==l.attrs&&xi(l,l.attrs,!1),null!==l.mergedAttrs&&xi(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(i,s,o,0,e,n,r):s.data[i];ft(l,!0);const c=l.mergedAttrs;null!==c&&oi(a,u,c);const d=l.classes;null!==d&&Nu(a,u,d);const f=l.styles;return null!==f&&rp(a,u,f),64!=(64&l.flags)&&wi(s,o,u,l),0===function bv(){return b.lFrame.elementDepthCount}()&&ge(u,o),function Tv(){b.lFrame.elementDepthCount++}(),Ks(l)&&(ol(s,o,l),zp(s,l,o)),null!==r&&sl(o,l),ye}function De(){let t=ae();Ha()?$a():(t=t.parent,ft(t,!1));const e=t;!function Av(){b.lFrame.elementDepthCount--}();const n=L();return n.firstCreatePass&&(ti(n,t),Na(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function Kv(t){return 0!=(16&t.flags)}(e)&&ml(n,e,D(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function Yv(t){return 0!=(32&t.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&ml(n,e,D(),e.stylesWithoutHost,!1),De}function Ri(t,e,n,r){return ye(t,e,n,r),De(),Ri
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function yl(t,e,n){const r=D(),o=L(),s=t+Q,i=o.firstCreatePass?function XC(t,e,n,r,o){const s=e.consts,i=Qt(s,r),a=Ar(e,t,8,"ng-container",i);return null!==i&&xi(a,i,!0),il(e,n,a,Qt(s,o)),null!==e.queries&&e.queries.elementStart(e,a),a}(s,o,r,e,n):o.data[s];ft(i,!0);const a=r[s]=r[x].createComment("");return wi(o,r,a,i),ge(a,r),Ks(i)&&(ol(o,r,i),zp(o,i,r)),null!=n&&sl(r,i),yl}function Dl(){let t=ae();const e=L();return Ha()?$a():(t=t.parent,ft(t,!1)),e.firstCreatePass&&(ti(e,t),Na(t)&&e.queries.elementEnd(t)),Dl}function Fh(t,e,n){return yl(t,e,n),Dl(),Fh}function eM(){return D()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vl(t){return!!t&&"function"==typeof t.then}function Ph(t){return!!t&&"function"==typeof t.subscribe}const tM=Ph;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rh(t,e,n,r){const o=D(),s=L(),i=ae();return Lh(s,o,o[x],i,t,e,!!n,r),Rh}function Oh(t,e){const n=ae(),r=D(),o=L();return Lh(o,r,ih(Ga(o.data),n,r),n,t,e,!1),Oh}function Lh(t,e,n,r,o,s,i,a){const u=Ks(r),c=t.firstCreatePass&&sh(t),d=e[8],f=oh(e);let p=!0;if(3&r.type||a){const y=Ge(r,e),v=a?a(y):y,E=f.length,m=a?C=>a(se(C[r.index])):r.index;if(te(n)){let C=null;if(!a&&u&&(C=function nM(t,e,n,r){const o=t.cleanup;if(null!=o)for(let s=0;s<o.length-1;s+=2){const i=o[s];if(i===n&&o[s+1]===r){const a=e[7],u=o[s+2];return a.length>u?a[u]:null}"string"==typeof i&&(s+=2)}return null}(t,e,o,r.index)),null!==C){(C.__ngLastListenerFn__||C).__ngNextListenerFn__=s,C.__ngLastListenerFn__=s,p=!1}else{s=_l(r,e,d,s,!1);const R=n.listen(v,o,s);f.push(s,R),c&&c.push(o,m,E,E+1)}}else s=_l(r,e,d,s,!0),v.addEventListener(o,s,i),f.push(s),c&&c.push(o,m,E,i)}else s=_l(r,e,d,s,!1);const h=r.outputs;let g;if(p&&null!==h&&(g=h[o])){const y=g.length;if(y)for(let v=0;v<y;v+=2){const E=g[v],m=g[v+1],Y=e[E][m].subscribe(s),sr=f.length;f.push(s,Y),c&&c.push(o,r.index,sr,-(sr+1))}}}function kh(t,e,n,r){try{return Ue(6,e,n),!1!==n(r)}catch(o){return ah(t,o),!1}finally{Ue(7,e,n)}}function _l(t,e,n,r,o){return function s(i){if(i===Function)return r;ll(2&t.flags?Oe(t.index,e):e);let u=kh(e,n,r,i),l=s.__ngNextListenerFn__;for(;l;)u=kh(e,n,l,i)&&u,l=l.__ngNextListenerFn__;return o&&!1===u&&(i.preventDefault(),i.returnValue=!1),u}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vh(t=1){return Vv(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rM(t,e){let n=null;const r=function nE(t){const e=t.attrs;if(null!=e){const n=e.indexOf(5);if(0==(1&n))return e[n+1]}return null}(t);for(let o=0;o<e.length;o++){const s=e[o];if("*"!==s){if(null===r?ap(t,s,!0):sE(r,s))return o}else n=o}return n}function oM(t){const e=D()[16][6];if(!e.projection){const n=t?t.length:1,r=e.projection=xo(n,null),o=r.slice();let s=e.child;for(;null!==s;){const i=t?rM(s,t):0;null!==i&&(o[i]?o[i].projectionNext=s:r[i]=s,o[i]=s),s=s.next}}}function sM(t,e=0,n){const r=D(),o=L(),s=Ar(o,Q+t,16,null,n||null);null===s.projection&&(s.projection=e),$a(),64!=(64&s.flags)&&function Kw(t,e,n){np(e[x],0,e,n,zf(t,n,e),Yf(n.parent||e[6],n,e))}(o,r,s)}function jh(t,e,n){return wl(t,"",e,"",n),jh}function wl(t,e,n,r,o){const s=D(),i=Fr(s,e,n,r);if(i!==A){Be(L(),ne(),s,t,i,s[x],o,!1)}return wl}function Bh(t,e,n,r,o,s,i){const a=D(),u=Pr(a,e,n,r,o,s);if(u!==A){Be(L(),ne(),a,t,u,a[x],i,!1)}return Bh}function Hh(t,e,n,r,o,s,i,a,u){const l=D(),c=Rr(l,e,n,r,o,s,i,a);if(c!==A){Be(L(),ne(),l,t,c,l[x],u,!1)}return Hh}function $h(t,e,n,r,o,s,i,a,u,l,c){const d=D(),f=Or(d,e,n,r,o,s,i,a,u,l);if(f!==A){Be(L(),ne(),d,t,f,d[x],c,!1)}return $h}function Uh(t,e,n,r,o,s,i,a,u,l,c,d,f){const p=D(),h=Lr(p,e,n,r,o,s,i,a,u,l,c,d);if(h!==A){Be(L(),ne(),p,t,h,p[x],f,!1)}return Uh}function Gh(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h){const g=D(),y=kr(g,e,n,r,o,s,i,a,u,l,c,d,f,p);if(y!==A){Be(L(),ne(),g,t,y,g[x],h,!1)}return Gh}function zh(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y){const v=D(),E=Vr(v,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g);if(E!==A){Be(L(),ne(),v,t,E,v[x],y,!1)}return zh}function qh(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v,E){const m=D(),C=jr(m,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v);if(C!==A){Be(L(),ne(),m,t,C,m[x],E,!1)}return qh}function Wh(t,e,n){const r=D(),o=Nr(r,e);if(o!==A){Be(L(),ne(),r,t,o,r[x],n,!1)}return Wh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iM(t,e,n,r,o,s){let i=s?e.classBindings:e.styleBindings,a=tt(i),u=Rt(i);t[r]=n;let c,l=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||_r(d,c)>0)&&(l=!0)}else c=n;if(o)if(0!==u){const f=tt(t[a+1]);t[r+1]=Ii(f,a),0!==f&&(t[f+1]=Wu(t[f+1],r)),t[a+1]=function zE(t,e){return 131071&t|e<<17}(t[a+1],r)}else t[r+1]=Ii(a,0),0!==a&&(t[a+1]=Wu(t[a+1],r)),a=r;else t[r+1]=Ii(u,0),0===a?a=r:t[u+1]=Wu(t[u+1],r),u=r;l&&(t[r+1]=qu(t[r+1])),Qh(t,c,r,!0,s),Qh(t,c,r,!1,s),function aM(t,e,n,r,o){const s=o?t.residualClasses:t.residualStyles;null!=s&&"string"==typeof e&&_r(s,e)>=0&&(n[r+1]=Qu(n[r+1]))}(e,c,t,r,s),i=Ii(a,u),s?e.classBindings=i:e.styleBindings=i}function Qh(t,e,n,r,o){const s=t[n+1],i=null===e;let a=r?tt(s):Rt(s),u=!1;for(;0!==a&&(!1===u||i);){const l=t[a],c=t[a+1];uM(l,e)&&(u=!0,t[a+1]=r?Qu(c):qu(c)),a=r?tt(c):Rt(c)}u&&(t[n+1]=r?qu(s):Qu(s))}function uM(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&_r(t,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const le={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Kh(t){return t.substring(le.key,le.keyEnd)}function lM(t){return t.substring(le.value,le.valueEnd)}function Yh(t,e){const n=le.textEnd;return n===e?-1:(e=le.keyEnd=function fM(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}(t,le.key=e,n),Br(t,e,n))}function Zh(t,e){const n=le.textEnd;let r=le.key=Br(t,e,n);return n===r?-1:(r=le.keyEnd=function pM(t,e,n){let r;for(;e<n&&(45===(r=t.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(t,r,n),r=Xh(t,r,n,58),r=le.value=Br(t,r,n),r=le.valueEnd=function hM(t,e,n){let r=-1,o=-1,s=-1,i=e,a=i;for(;i<n;){const u=t.charCodeAt(i++);if(59===u)return a;34===u||39===u?a=i=eg(t,u,i,n):e===i-4&&85===s&&82===o&&76===r&&40===u?a=i=eg(t,41,i,n):u>32&&(a=i),s=o,o=r,r=-33&u}return a}(t,r,n),Xh(t,r,n,59))}function Jh(t){le.key=0,le.keyEnd=0,le.value=0,le.valueEnd=0,le.textEnd=t.length}function Br(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function Xh(t,e,n,r){return(e=Br(t,e,n))<n&&e++,e}function eg(t,e,n,r){let o=-1,s=n;for(;s<r;){const i=t.charCodeAt(s++);if(i==e&&92!==o)return s;o=92==i&&92===o?0:i}throw new Error}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tg(t,e,n){return rt(t,e,n,!1),tg}function ng(t,e){return rt(t,e,null,!0),ng}function Dt(t){ot(sg,gM,t,!1)}function gM(t,e){for(let n=function dM(t){return Jh(t),Zh(t,Br(t,0,le.textEnd))}(e);n>=0;n=Zh(e,n))sg(t,Kh(e),lM(e))}function mM(t){ot(ke,vt,t,!0)}function vt(t,e){for(let n=function cM(t){return Jh(t),Yh(t,Br(t,0,le.textEnd))}(e);n>=0;n=Yh(e,n))ke(t,Kh(e),!0)}function rt(t,e,n,r){const o=D(),s=L(),i=Nt(2);if(s.firstUpdatePass&&og(s,t,i,r),e!==A&&me(o,i,e)){ig(s,s.data[Ce()],o,o[x],t,o[i+1]=function CM(t,e){return null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=z(Ve(t)))),t}(e,n),r,i)}}function ot(t,e,n,r){const o=L(),s=Nt(2);o.firstUpdatePass&&og(o,null,s,r);const i=D();if(n!==A&&me(i,s,n)){const a=o.data[Ce()];if(ug(a,r)&&!rg(o,s)){let u=r?a.classesWithoutHost:a.stylesWithoutHost;null!==u&&(n=wa(u,n||"")),ml(o,a,i,n,r)}else!function EM(t,e,n,r,o,s,i,a){o===A&&(o=B);let u=0,l=0,c=0<o.length?o[0]:null,d=0<s.length?s[0]:null;for(;null!==c||null!==d;){const f=u<o.length?o[u+1]:void 0,p=l<s.length?s[l+1]:void 0;let g,h=null;c===d?(u+=2,l+=2,f!==p&&(h=d,g=p)):null===d||null!==c&&c<d?(u+=2,h=c):(l+=2,h=d,g=p),null!==h&&ig(t,e,n,r,h,g,i,a),c=u<o.length?o[u]:null,d=l<s.length?s[l]:null}}(o,a,i,i[x],i[s+1],i[s+1]=function wM(t,e,n){if(null==n||""===n)return B;const r=[],o=Ve(n);if(Array.isArray(o))for(let s=0;s<o.length;s++)t(r,o[s],!0);else if("object"==typeof o)for(const s in o)o.hasOwnProperty(s)&&t(r,s,o[s]);else"string"==typeof o&&e(r,o);return r}(t,e,n),r,s)}}function rg(t,e){return e>=t.expandoStartIndex}function og(t,e,n,r){const o=t.data;if(null===o[n+1]){const s=o[Ce()],i=rg(t,n);ug(s,r)&&null===e&&!i&&(e=!1),e=function yM(t,e,n,r){const o=Ga(t);let s=r?e.residualClasses:e.residualStyles;if(null===o)0===(r?e.classBindings:e.styleBindings)&&(n=Zo(n=El(null,t,e,n,r),e.attrs,r),s=null);else{const i=e.directiveStylingLast;if(-1===i||t[i]!==o)if(n=El(o,t,e,n,r),null===s){let u=function DM(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0!==Rt(r))return t[tt(r)]}(t,e,r);void 0!==u&&Array.isArray(u)&&(u=El(null,t,e,u[1],r),u=Zo(u,e.attrs,r),function vM(t,e,n,r){const o=n?e.classBindings:e.styleBindings;t[tt(o)]=r}(t,e,r,u))}else s=function _M(t,e,n){let r;const o=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<o;s++){r=Zo(r,t[s].hostAttrs,n)}return Zo(r,e.attrs,n)}(t,e,r)}return void 0!==s&&(r?e.residualClasses=s:e.residualStyles=s),n}(o,s,e,r),iM(o,s,e,n,i,r)}}function El(t,e,n,r,o){let s=null;const i=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<i&&(s=e[a],r=Zo(r,s.hostAttrs,o),s!==t);)a++;return null!==t&&(n.directiveStylingLast=a),r}function Zo(t,e,n){const r=n?1:2;let o=-1;if(null!==e)for(let s=0;s<e.length;s++){const i=e[s];"number"==typeof i?o=i:o===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),ke(t,i,!!n||e[++s]))}return void 0===t?null:t}function sg(t,e,n){ke(t,e,Ve(n))}function ig(t,e,n,r,o,s,i,a){if(!(3&e.type))return;const u=t.data,l=u[a+1];if(!Oi(Op(l)?ag(u,e,n,o,Rt(l),i):void 0)){Oi(s)||Rp(l)&&(s=ag(u,null,n,o,a,i));!function Zw(t,e,n,r,o){const s=te(t);if(e)o?s?t.addClass(n,r):n.classList.add(r):s?t.removeClass(n,r):n.classList.remove(r);else{let i=-1===r.indexOf("-")?void 0:Xt.DashCase;if(null==o)s?t.removeStyle(n,r,i):n.style.removeProperty(r);else{const a="string"==typeof o&&o.endsWith("!important");a&&(o=o.slice(0,-10),i|=Xt.Important),s?t.setStyle(n,r,o,i):n.style.setProperty(r,o,a?"important":"")}}}(r,i,Zs(Ce(),n),o,s)}}function ag(t,e,n,r,o,s){const i=null===e;let a;for(;o>0;){const u=t[o],l=Array.isArray(u),c=l?u[1]:u,d=null===c;let f=n[o+1];f===A&&(f=d?B:void 0);let p=d?nu(f,r):c===r?f:void 0;if(l&&!Oi(p)&&(p=nu(u,r)),Oi(p)&&(a=p,i))return a;const h=t[o+1];o=i?tt(h):Rt(h)}if(null!==e){let u=s?e.residualClasses:e.residualStyles;null!=u&&(a=nu(u,r))}return a}function Oi(t){return void 0!==t}function ug(t,e){return 0!=(t.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _t(t,e=""){const n=D(),r=L(),o=t+Q,s=r.firstCreatePass?Ar(r,o,1,e,null):r.data[o],i=n[o]=Mu(n[x],e);wi(r,n,i,s),ft(s,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hr(t){return Cl("",t,""),Hr}function Cl(t,e,n){const r=D(),o=Fr(r,t,e,n);return o!==A&&Ot(r,Ce(),o),Cl}function lg(t,e,n,r,o){const s=D(),i=Pr(s,t,e,n,r,o);return i!==A&&Ot(s,Ce(),i),lg}function cg(t,e,n,r,o,s,i){const a=D(),u=Rr(a,t,e,n,r,o,s,i);return u!==A&&Ot(a,Ce(),u),cg}function dg(t,e,n,r,o,s,i,a,u){const l=D(),c=Or(l,t,e,n,r,o,s,i,a,u);return c!==A&&Ot(l,Ce(),c),dg}function fg(t,e,n,r,o,s,i,a,u,l,c){const d=D(),f=Lr(d,t,e,n,r,o,s,i,a,u,l,c);return f!==A&&Ot(d,Ce(),f),fg}function pg(t,e,n,r,o,s,i,a,u,l,c,d,f){const p=D(),h=kr(p,t,e,n,r,o,s,i,a,u,l,c,d,f);return h!==A&&Ot(p,Ce(),h),pg}function hg(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h){const g=D(),y=Vr(g,t,e,n,r,o,s,i,a,u,l,c,d,f,p,h);return y!==A&&Ot(g,Ce(),y),hg}function gg(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y){const v=D(),E=jr(v,t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y);return E!==A&&Ot(v,Ce(),E),gg}function mg(t){const e=D(),n=Nr(e,t);return n!==A&&Ot(e,Ce(),n),mg
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function MM(t,e,n){ot(ke,vt,Fr(D(),t,e,n),!0)}function IM(t,e,n,r,o){ot(ke,vt,Pr(D(),t,e,n,r,o),!0)}function bM(t,e,n,r,o,s,i){ot(ke,vt,Rr(D(),t,e,n,r,o,s,i),!0)}function TM(t,e,n,r,o,s,i,a,u){ot(ke,vt,Or(D(),t,e,n,r,o,s,i,a,u),!0)}function AM(t,e,n,r,o,s,i,a,u,l,c){ot(ke,vt,Lr(D(),t,e,n,r,o,s,i,a,u,l,c),!0)}function SM(t,e,n,r,o,s,i,a,u,l,c,d,f){ot(ke,vt,kr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f),!0)}function xM(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h){ot(ke,vt,Vr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f,p,h),!0)}function NM(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y){ot(ke,vt,jr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y),!0)}function FM(t){ot(ke,vt,Nr(D(),t),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function PM(t,e,n){Dt(Fr(D(),t,e,n))}function RM(t,e,n,r,o){Dt(Pr(D(),t,e,n,r,o))}function OM(t,e,n,r,o,s,i){Dt(Rr(D(),t,e,n,r,o,s,i))}function LM(t,e,n,r,o,s,i,a,u){Dt(Or(D(),t,e,n,r,o,s,i,a,u))}function kM(t,e,n,r,o,s,i,a,u,l,c){Dt(Lr(D(),t,e,n,r,o,s,i,a,u,l,c))}function VM(t,e,n,r,o,s,i,a,u,l,c,d,f){Dt(kr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f))}function jM(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h){Dt(Vr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f,p,h))}function BM(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y){Dt(jr(D(),t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y))}function HM(t){Dt(Nr(D(),t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yg(t,e,n,r,o){return rt(t,Fr(D(),e,n,r),o,!1),yg}function Dg(t,e,n,r,o,s,i){return rt(t,Pr(D(),e,n,r,o,s),i,!1),Dg}function vg(t,e,n,r,o,s,i,a,u){return rt(t,Rr(D(),e,n,r,o,s,i,a),u,!1),vg}function _g(t,e,n,r,o,s,i,a,u,l,c){return rt(t,Or(D(),e,n,r,o,s,i,a,u,l),c,!1),_g}function wg(t,e,n,r,o,s,i,a,u,l,c,d,f){return rt(t,Lr(D(),e,n,r,o,s,i,a,u,l,c,d),f,!1),wg}function Eg(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h){return rt(t,kr(D(),e,n,r,o,s,i,a,u,l,c,d,f,p),h,!1),Eg}function Cg(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y){return rt(t,Vr(D(),e,n,r,o,s,i,a,u,l,c,d,f,p,h,g),y,!1),Cg}function Mg(t,e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v,E){return rt(t,jr(D(),e,n,r,o,s,i,a,u,l,c,d,f,p,h,g,y,v),E,!1),Mg}function Ig(t,e,n){return rt(t,Nr(D(),e),n,!1),Ig
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function bg(t,e,n){const r=D();if(me(r,fr(),e)){Be(L(),ne(),r,t,e,r[x],n,!0)}return bg}function Tg(t,e,n){const r=D();if(me(r,fr(),e)){const s=L(),i=ne();Be(s,i,r,t,e,ih(Ga(s.data),i,r),n,!0)}return Tg}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rn=void 0;var UM=["en",[["a","p"],["AM","PM"],Rn],[["AM","PM"],Rn,Rn],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Rn,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Rn,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Rn,"{1} 'at' {0}",Rn],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function $M(t){const n=Math.floor(Math.abs(t)),r=t.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let $r={};function Ie(t){const e=function GM(t){return t.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let n=Sg(e);if(n)return n;const r=e.split("-")[0];if(n=Sg(r),n)return n;if("en"===r)return UM;throw new Error(`Missing locale data for the locale "${t}".`)}function Ag(t){return Ie(t)[W.PluralCase]}function Sg(t){return t in $r||($r[t]=$.ng&&$.ng.common&&$.ng.common.locales&&$.ng.common.locales[t]),$r[t]}var W;!function(t){t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData"}(W||(W={}));const zM=["zero","one","two","few","many"];const Ur="en-US",Li={marker:"element"},ki={marker:"ICU"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var be;!function(t){t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT"}(be||(be={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let xg=Ur;function Ng(t){Fe(t,"Expected localeId to be defined"),"string"==typeof t&&(xg=t.toLowerCase().replace(/_/g,"-"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Fg(t,e,n){const r=e.insertBeforeIndex,o=Array.isArray(r)?r[0]:r;return null===o?Zf(t,0,n):se(n[o])}function Pg(t,e,n,r,o){const s=e.insertBeforeIndex;if(Array.isArray(s)){let i=r,a=null;if(3&e.type||(a=i,i=o),null!==i&&0==(2&e.flags))for(let u=1;u<s.length;u++){xn(t,i,n[s[u]],a,!1)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rg(t,e){if(t.push(e),t.length>1)for(let n=t.length-2;n>=0;n--){const r=t[n];Og(r)||KM(r,e)&&null===YM(r)&&ZM(r,e.index)}}function Og(t){return!(64&t.type)}function KM(t,e){return Og(e)||t.index>e.index}function YM(t){const e=t.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function ZM(t,e){const n=t.insertBeforeIndex;Array.isArray(n)?n[0]=e:(Xf(Fg,Pg),t.insertBeforeIndex=e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jo(t,e){const n=t.data[e];return null===n||"string"==typeof n?null:n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function eI(t,e,n){const r=rl(t,n,64,null,null);return Rg(e,r),r}function Vi(t,e){const n=e[t.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function Lg(t){return t>>>17}function kg(t){return(131070&t)>>>1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Xo=0,es=0;function jg(t,e,n,r){const o=n[x];let i,s=null;for(let a=0;a<e.length;a++){const u=e[a];if("string"==typeof u){const l=e[++a];null===n[l]&&(n[l]=Mu(o,u))}else if("number"==typeof u)switch(1&u){case 0:const l=Lg(u);let c,d;if(null===s&&(s=l,i=_i(o,r)),l===s?(c=r,d=i):(c=null,d=se(n[l])),null!==d){const g=kg(u);xn(o,d,n[g],c,!1);const v=Jo(t,g);if(null!==v&&"object"==typeof v){const E=Vi(v,n);null!==E&&jg(t,v.create[E],n,n[v.anchorIdx])}}break;case 1:const f=u>>>1,p=e[++a],h=e[++a];al(o,Zs(f,n),null,null,p,h,null)}else switch(u){case ki:const l=e[++a],c=e[++a];if(null===n[c]){ge(n[c]=Vw(o,l),n)}break;case Li:const d=e[++a],f=e[++a];if(null===n[f]){ge(n[f]=Iu(o,d,null),n)}}}}function Bg(t,e,n,r,o){for(let s=0;s<n.length;s++){const i=n[s],a=n[++s];if(i&o){let u="";for(let l=s+1;l<=s+a;l++){const c=n[l];if("string"==typeof c)u+=c;else if("number"==typeof c)if(c<0)u+=T(e[r-c]);else{const d=c>>>2;switch(3&c){case 1:const f=n[++l],p=n[++l],h=t.data[d];"string"==typeof h?al(e[x],e[d],null,h,f,u,p):Be(t,h,e,f,u,e[x],p,!1);break;case 0:const g=e[d];null!==g&&$f(e[x],g,u);break;case 2:sI(t,Jo(t,d),e,u);break;case 3:Hg(t,Jo(t,d),r,e)}}}}else{const u=n[s+1];if(u>0&&3==(3&u)){const c=Jo(t,u>>>2);e[c.currentCaseLViewIndex]<0&&Hg(t,c,r,e)}}s+=a}}function Hg(t,e,n,r){let o=r[e.currentCaseLViewIndex];if(null!==o){let s=Xo;o<0&&(o=r[e.currentCaseLViewIndex]=~o,s=-1),Bg(t,r,e.update[o],n,s)}}function sI(t,e,n,r){const o=function iI(t,e){let n=t.cases.indexOf(e);if(-1===n)switch(t.type){case 1:{const r=function qM(t,e){const n=Ag(e)(parseInt(t,10)),r=zM[n];return void 0!==r?r:"other"}(e,function QM(){return xg}());n=t.cases.indexOf(r),-1===n&&"other"!==r&&(n=t.cases.indexOf("other"));break}case 0:n=t.cases.indexOf("other")}return-1===n?null:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,r);if(Vi(e,n)!==o&&($g(t,e,n),n[e.currentCaseLViewIndex]=null===o?null:~o,null!==o)){const i=n[e.anchorIdx];i&&jg(t,e.create[o],n,i)}}function $g(t,e,n){let r=Vi(e,n);if(null!==r){const o=e.remove[r];for(let s=0;s<o.length;s++){const i=o[s];if(i>0){const a=Zs(i,n);null!==a&&tp(n[x],a)}else $g(t,Jo(t,~i),n)}}}function aI(){const t=[];let n,r,e=-1;function s(a,u){e=0;const l=Vi(a,u);r=null!==l?a.remove[l]:B}function i(){if(e<r.length){const a=r[e++];if(a>0)return n[a];{t.push(e,r);const u=~a;return s(n[1].data[u],n),i()}}return 0===t.length?null:(r=t.pop(),e=t.pop(),i())}return function o(a,u){for(n=u;t.length;)t.pop();return s(a.value,u),i}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ji=/\ufffd(\d+):?\d*\ufffd/gi,uI=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,lI=/\ufffd(\d+)\ufffd/,Gg=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,cI=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,dI=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,fI=/\uE500/g;function hI(t,e,n,r,o,s){const i=Co(),a=[],u=[],l=[[]];o=function vI(t,e){if(function DI(t){return-1===t}(e))return Wg(t);{const n=t.indexOf(`:${e}\ufffd`)+2+e.toString().length,r=t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));return Wg(t.substring(n,r))}}(o,s);const c=function pI(t){return t.replace(fI," ")}(o).split(dI);for(let d=0;d<c.length;d++){let f=c[d];if(0==(1&d)){const p=Ml(f);for(let h=0;h<p.length;h++){let g=p[h];if(0==(1&h)){const y=g;""!==y&&gI(t,i,l[0],a,u,n,y)}else{const y=g;if("object"!=typeof y)throw new Error(`Unable to parse ICU expression in "${o}" message.`);Qg(t,n,u,e,y,zg(t,i,l[0],n,a,"",!0).index)}}}else{const p=47===f.charCodeAt(0),g=(f.charCodeAt(p?1:0),Q+Number.parseInt(f.substring(p?2:1)));if(p)l.shift(),ft(Co(),!1);else{const y=eI(t,l[0],g);l.unshift([]),ft(y,!0)}}}t.data[r]={create:a,update:u}}function zg(t,e,n,r,o,s,i){const a=Sr(t,r,1,null);let u=a<<be.SHIFT,l=Co();e===l&&(l=null),null===l&&(u|=be.APPEND_EAGERLY),i&&(u|=be.COMMENT,function kw(t){void 0===_u&&(_u=t())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(aI)),o.push(u,null===s?"":s);const c=rl(t,a,i?32:1,null===s?"":s,null);Rg(n,c);const d=c.index;return ft(c,!1),null!==l&&e!==l&&function XM(t,e){let n=t.insertBeforeIndex;null===n?(Xf(Fg,Pg),n=t.insertBeforeIndex=[null,e]):(Tt(Array.isArray(n),!0,"Expecting array here"),n.push(e))}(l,d),c}function gI(t,e,n,r,o,s,i){const a=i.match(ji),u=zg(t,e,n,s,r,a?null:i,!1);a&&Gr(o,i,u.index,null,0,null)}function Gr(t,e,n,r,o,s){const i=t.length,a=i+1;t.push(null,null);const u=i+2,l=e.split(ji);let c=0;for(let d=0;d<l.length;d++){const f=l[d];if(1&d){const p=o+parseInt(f,10);t.push(-1-p),c|=qg(p)}else""!==f&&t.push(f)}return t.push(n<<2|(r?1:0)),r&&t.push(r,s),t[i]=c,t[a]=t.length-u,c}function yI(t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];"number"==typeof r&&r<0&&e++}return e}function qg(t){return 1<<Math.min(t,31)}function Wg(t){let e,s,n="",r=0,o=!1;for(;null!==(e=cI.exec(t));)o?e[0]===`\ufffd/*${s}\ufffd`&&(r=e.index,o=!1):(n+=t.substring(r,e.index+e[0].length),s=e[1],o=!0);return n+=t.slice(r),n}function Qg(t,e,n,r,o,s){let i=0;const a={type:o.type,currentCaseLViewIndex:Sr(t,e,1,null),anchorIdx:s,cases:[],create:[],remove:[],update:[]};(function CI(t,e,n){t.push(qg(e.mainBinding),2,-1-e.mainBinding,n<<2|2)})(n,o,s),function JM(t,e,n){const r=t.data[e];null===r?t.data[e]=n:r.value=n}(t,s,a);const u=o.values;for(let l=0;l<u.length;l++){const c=u[l],d=[];for(let f=0;f<c.length;f++){const p=c[f];if("string"!=typeof p){const h=d.push(p)-1;c[f]=`\x3c!--\ufffd${h}\ufffd--\x3e`}}i=wI(t,a,e,n,r,o.cases[l],c.join(""),d)|i}i&&function MI(t,e,n){t.push(e,1,n<<2|3)}(n,i,s)}function _I(t){const e=[],n=[];let r=1,o=0;const s=Ml(t=t.replace(Gg,function(i,a,u){return r="select"===u?0:1,o=parseInt(a.slice(1),10),""}));for(let i=0;i<s.length;){let a=s[i++].trim();1===r&&(a=a.replace(/\s*(?:=)?(\w+)\s*/,"$1")),a.length&&e.push(a);const u=Ml(s[i++]);e.length>n.length&&n.push(u)}return{type:r,mainBinding:o,cases:e,values:n}}function Ml(t){if(!t)return[];let e=0;const n=[],r=[],o=/[{}]/g;let s;for(o.lastIndex=0;s=o.exec(t);){const a=s.index;if("}"==s[0]){if(n.pop(),0==n.length){const u=t.substring(e,a);Gg.test(u)?r.push(_I(u)):r.push(u),e=a+1}}else{if(0==n.length){const u=t.substring(e,a);r.push(u),e=a+1}n.push("{")}}const i=t.substring(e);return r.push(i),r}function wI(t,e,n,r,o,s,i,a){const u=[],l=[],c=[];e.cases.push(s),e.create.push(u),e.remove.push(l),e.update.push(c);const f=wf(ka()).getInertBodyElement(i),p=pu(f)||f;return p?Kg(t,e,n,r,u,l,c,p,o,a,0):0}function Kg(t,e,n,r,o,s,i,a,u,l,c){let d=0,f=a.firstChild;for(;f;){const p=Sr(t,n,1,null);switch(f.nodeType){case Node.ELEMENT_NODE:const h=f,g=h.tagName.toLowerCase();if(cu.hasOwnProperty(g)){Il(o,Li,g,u,p),t.data[p]=g;const m=h.attributes;for(let C=0;C<m.length;C++){const R=m.item(C),Y=R.name.toLowerCase();R.value.match(ji)?bf.hasOwnProperty(Y)&&(du[Y]?Gr(i,R.value,p,R.name,0,ko):fu[Y]?Gr(i,R.value,p,R.name,0,Ef):Gr(i,R.value,p,R.name,0,null)):II(o,p,R)}d=Kg(t,e,n,r,o,s,i,f,p,l,c+1)|d,Yg(s,p,c)}break;case Node.TEXT_NODE:const y=f.textContent||"",v=y.match(ji);Il(o,null,v?"":y,u,p),Yg(s,p,c),v&&(d=Gr(i,y,p,null,0,null)|d);break;case Node.COMMENT_NODE:const E=lI.exec(f.textContent||"");if(E){const C=l[parseInt(E[1],10)];Il(o,ki,"",u,p),Qg(t,n,r,u,C,p),EI(s,p,c)}}f=f.nextSibling}return d}function Yg(t,e,n){0===n&&t.push(e)}function EI(t,e,n){0===n&&(t.push(~e),t.push(e))}function Il(t,e,n,r,o){null!==e&&t.push(e),t.push(n,o,function tI(t,e,n){return t|e<<17|n<<1}(0,r,o))}function II(t,e,n){t.push(e<<1|1,n.name,n.value)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bI=/\[(\ufffd.+?\ufffd?)\]/,TI=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,AI=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,SI=/{([A-Z0-9_]+)}/g,xI=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,NI=/\/\*/,FI=/\d+\:(\d+)/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Jg(t,e,n=-1){const r=L(),o=D(),s=Q+t,i=Qt(r.consts,e),a=Co();r.firstCreatePass&&hI(r,null===a?0:a.index,o,s,i,n);const u=r.data[s],c=qf(r,a===o[6]?null:a,o),d=a&&8&a.type?o[a.index]:null;(function oI(t,e,n,r){const o=t[x];for(let s=0;s<e.length;s++){const i=e[s++],a=e[s],u=(i&be.COMMENT)===be.COMMENT,l=(i&be.APPEND_EAGERLY)===be.APPEND_EAGERLY,c=i>>>be.SHIFT;let d=t[c];null===d&&(d=t[c]=u?o.createComment(a):Mu(o,a)),l&&null!==n&&xn(o,n,d,r,!1)}})(o,u.create,c,d),Od(!0)}function Xg(){Od(!1)}function RI(t,e,n){Jg(t,e,n),Xg()}function OI(t,e){const n=L(),r=Qt(n.consts,e);!function mI(t,e,n){const o=ae().index,s=[];if(t.firstCreatePass&&null===t.data[e]){for(let i=0;i<n.length;i+=2){const a=n[i],u=n[i+1];if(""!==u){if(uI.test(u))throw new Error(`ICU expressions are not supported in attributes. Message: "${u}".`);Gr(s,u,o,a,yI(s),null)}}t.data[e]=s}}(n,t+Q,r)}function em(t){return function nI(t){t&&(Xo|=1<<Math.min(es,31)),es++}(me(D(),fr(),t)),em}function LI(t){!function rI(t,e,n){if(es>0){const r=t.data[n];Bg(t,e,Array.isArray(r)?r:r.update,xt()-es-1,Xo)}Xo=0,es=0}(L(),D(),t+Q)}function kI(t,e={}){return function PI(t,e={}){let n=t;if(bI.test(t)){const r={},o=[0];n=n.replace(TI,(s,i,a)=>{const u=i||a,l=r[u]||[];if(l.length||(u.split("|").forEach(g=>{const y=g.match(FI),v=y?parseInt(y[1],10):0,E=NI.test(g);l.push([v,E,g])}),r[u]=l),!l.length)throw new Error(`i18n postprocess: unmatched placeholder - ${u}`);const c=o[o.length-1];let d=0;for(let g=0;g<l.length;g++)if(l[g][0]===c){d=g;break}const[f,p,h]=l[d];return p?o.pop():c!==f&&o.push(f),l.splice(d,1),h})}return Object.keys(e).length&&(n=n.replace(AI,(r,o,s,i,a,u)=>e.hasOwnProperty(s)?`${o}${e[s]}${u}`:r),n=n.replace(SI,(r,o)=>e.hasOwnProperty(o)?e[o]:r),n=n.replace(xI,(r,o)=>{if(e.hasOwnProperty(o)){const s=e[o];if(!s.length)throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${o}`);return s.shift()}return r})),n}(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bl(t,e,n,r,o){if(t=M(t),Array.isArray(t))for(let s=0;s<t.length;s++)bl(t[s],e,n,r,o);else{const s=L(),i=D();let a=Nn(t)?t:M(t.provide),u=wp(t);const l=ae(),c=1048575&l.providerIndexes,d=l.directiveStart,f=l.providerIndexes>>20;if(Nn(t)||!t.multi){const p=new Mo(u,o,N),h=Al(a,e,o?c:c+f,d);-1===h?(ui(bo(l,i),s,a),Tl(s,t,e.length),e.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),n.push(p),i.push(p)):(n[h]=p,i[h]=p)}else{const p=Al(a,e,c+f,d),h=Al(a,e,c,c+f),g=p>=0&&n[p],y=h>=0&&n[h];if(o&&!y||!o&&!g){ui(bo(l,i),s,a);const v=function HI(t,e,n,r,o){const s=new Mo(t,n,N);return s.multi=[],s.index=e,s.componentProviders=0,tm(s,o,r&&!n),s}(o?BI:jI,n.length,o,r,u);!o&&y&&(n[h].providerFactory=v),Tl(s,t,e.length,0),e.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),n.push(v),i.push(v)}else{Tl(s,t,p>-1?p:h,tm(n[o?h:p],u,!o&&r))}!o&&r&&y&&n[h].componentProviders++}}}function Tl(t,e,n,r){const o=Nn(e),s=function mE(t){return!!t.useClass}(e);if(o||s){const u=(s?M(e.useClass):e).prototype.ngOnDestroy;if(u){const l=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){const c=l.indexOf(n);-1===c?l.push(n,[r,u]):l[c+1].push(r,u)}else l.push(n,u)}}}function tm(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function Al(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function jI(t,e,n,r){return Sl(this.multi,[])}function BI(t,e,n,r){const o=this.multi;let s;if(this.providerFactory){const i=this.providerFactory.componentProviders,a=To(n,n[1],this.providerFactory.index,r);s=a.slice(0,i),Sl(o,s);for(let u=i;u<a.length;u++)s.push(a[u])}else s=[],Sl(o,s);return s}function Sl(t,e){for(let n=0;n<t.length;n++){const r=t[n];e.push(r())}return e}function $I(t,e=[]){return n=>{n.providersResolver=(r,o)=>function VI(t,e,n){const r=L();if(r.firstCreatePass){const o=Xe(t);bl(n,r.data,r.blueprint,o,!0),bl(e,r.data,r.blueprint,o,!1)}}(r,o?o(t):t,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nm="ngComponent";class GI{resolveComponentFactory(e){throw function UI(t){const e=Error(`No component factory found for ${z(t)}. Did you add it to @NgModule.entryComponents?`);return e[nm]=t,e}(e)}}class ns{}ns.NULL=new GI;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class On{}class rm{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zr(t,e){return new Ln(Ge(t,e))}class Ln{constructor(e){this.nativeElement=e}}function QI(t){return t instanceof Ln?t.nativeElement:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ln.__NG_ELEMENT_ID__=function WI(){return zr(ae(),D())};new P("Renderer2Interceptor");class om{}class xl{}xl.__NG_ELEMENT_ID__=()=>function YI(){const t=D(),n=Oe(ae().index,t);return function KI(t){return t[x]}(Se(n)?n:t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();class Nl{}Nl.\u0275prov=I({token:Nl,providedIn:"root",factory:()=>null});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fl{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const ZI=new Fl("14.0.2"),Pl={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bi(t,e,n,r,o=!1){for(;null!==n;){const s=e[n.index];if(null!==s&&r.push(se(s)),Je(s))for(let a=10;a<s.length;a++){const u=s[a],l=u[1].firstChild;null!==l&&Bi(u[1],u,l,r)}const i=n.type;if(8&i)Bi(t,e,n.child,r);else if(32&i){const a=wu(n,e);let u;for(;u=a();)r.push(u)}else if(16&i){const a=ep(e,n);if(Array.isArray(a))r.push(...a);else{const u=Ho(e[16]);Bi(u[1],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rs{constructor(e,n){this._lView=e,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,n=e[1];return Bi(n,e,n.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Je(e)){const n=e[8],r=n?n.indexOf(this):-1;r>-1&&(bu(e,r),di(n,r))}this._attachedToViewContainer=!1}Gf(this._lView[1],this._lView)}onDestroy(e){Kp(this._lView[1],this._lView,null,e)}markForCheck(){ll(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){dl(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef){throw new F(902,"")}this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Hw(t,e){$o(t,e,e[x],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer){throw new F(902,"")}this._appRef=e}}class JI extends rs{constructor(e){super(e),this._view=e}detectChanges(){rh(this._view)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rl extends ns{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const n=q(e);return new Ol(n,this.ngModule)}}function sm(t){const e=[];for(let n in t)if(t.hasOwnProperty(n)){const r=t[n];e.push({propName:r,templateName:n})}return e}class e0{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){const o=this.injector.get(e,Pl,r);return o!==Pl||n===Pl?o:this.parentInjector.get(e,n,r)}}class Ol extends rm{constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=function aE(t){return t.map(iE).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return sm(this.componentDef.inputs)}get outputs(){return sm(this.componentDef.outputs)}create(e,n,r,o){let s=(o=o||this.ngModule)instanceof Uo?o:o?.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const i=s?new e0(e,s):e,a=i.get(om,Ad),u=i.get(Nl,null),l=a.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",d=r?Qp(l,r,this.componentDef.encapsulation):Iu(a.createRenderer(null,this.componentDef),c,function XI(t){const e=t.toLowerCase();return"svg"===e?"svg":"math"===e?Oa:null}(c)),f=this.componentDef.onPush?288:272,p=vh(),h=Ai(0,null,null,1,0,null,null,null,null,null),g=qo(null,h,p,f,null,null,a,l,u,i,null);let y,v;Xs(g);try{const E=yh(d,this.componentDef,g,a,l);if(d)if(r)oi(l,d,["ng-version",ZI.full]);else{const{attrs:m,classes:C}=function uE(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let s=t[r];if("string"==typeof s)2===o?""!==s&&e.push(s,t[++r]):8===o&&n.push(s);else{if(!et(o))break;o=s}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);m&&oi(l,d,m),C&&C.length>0&&Nu(l,d,C.join(" "))}if(v=Va(h,Q),void 0!==n){const m=v.projection=[];for(let C=0;C<this.ngContentSelectors.length;C++){const R=n[C];m.push(null!=R?Array.from(R):null)}}y=Dh(E,this.componentDef,g,p,[VC]),Wo(h,g,null)}finally{ei()}return new n0(this.componentType,y,zr(v,g),g,v)}}new Rl;class n0 extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class qI{}{constructor(e,n,r,o,s){super(),this.location=r,this._rootLView=o,this._tNode=s,this.instance=n,this.hostView=this.changeDetectorRef=new JI(o),this.componentType=e}get injector(){return new gr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class im extends On{constructor(e,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Rl(this);const r=Pe(e);this._bootstrapComponents=Pt(r.bootstrap),this._r3Injector=Cp(e,n,[{provide:On,useValue:this},{provide:ns,useValue:this.componentFactoryResolver}],z(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this.get(e)}get(e,n=de.THROW_IF_NOT_FOUND,r=O.Default){return e===de||e===On||e===Ru?this:this._r3Injector.get(e,n,r)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Ll extends class zI{}{constructor(e){super(),this.moduleType=e}create(e){return new im(this.moduleType,e)}}class o0 extends On{constructor(e,n,r){super(),this.componentFactoryResolver=new Rl(this),this.instance=null;const o=new _p([...e,{provide:On,useValue:this},{provide:ns,useValue:this.componentFactoryResolver}],n||ku(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}}function am(t,e=null,n=null){return new o0(t,e,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hi{constructor(e){this._injector=e,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e.id)){const n=gp(0,e.type),r=n.length>0?am([n],this._injector,`Standalone[${e.type.name}]`):null;this.cachedInjectors.set(e.id,r)}return this.cachedInjectors.get(e.id)}ngOnDestroy(){try{for(const e of this.cachedInjectors.values())null!==e&&e.destroy()}finally{this.cachedInjectors.clear()}}}function s0(t){t.getStandaloneInjector=e=>e.get(Hi).getOrCreateStandaloneInjector(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function a0(t,e,n){const r=Ee()+t,o=D();return o[r]===A?yt(o,r,n?e.call(n):e()):Ko(o,r)}function u0(t,e,n,r){return um(D(),Ee(),t,e,n,r)}function l0(t,e,n,r,o){return lm(D(),Ee(),t,e,n,r,o)}function c0(t,e,n,r,o,s){return cm(D(),Ee(),t,e,n,r,o,s)}function d0(t,e,n,r,o,s,i){return dm(D(),Ee(),t,e,n,r,o,s,i)}function f0(t,e,n,r,o,s,i,a){const u=Ee()+t,l=D(),c=ze(l,u,n,r,o,s);return me(l,u+4,i)||c?yt(l,u+5,a?e.call(a,n,r,o,s,i):e(n,r,o,s,i)):Ko(l,u+5)}function p0(t,e,n,r,o,s,i,a,u){const l=Ee()+t,c=D(),d=ze(c,l,n,r,o,s);return Pn(c,l+4,i,a)||d?yt(c,l+6,u?e.call(u,n,r,o,s,i,a):e(n,r,o,s,i,a)):Ko(c,l+6)}function h0(t,e,n,r,o,s,i,a,u,l){const c=Ee()+t,d=D();let f=ze(d,c,n,r,o,s);return Fi(d,c+4,i,a,u)||f?yt(d,c+7,l?e.call(l,n,r,o,s,i,a,u):e(n,r,o,s,i,a,u)):Ko(d,c+7)}function g0(t,e,n,r,o,s,i,a,u,l,c){const d=Ee()+t,f=D(),p=ze(f,d,n,r,o,s);return ze(f,d+4,i,a,u,l)||p?yt(f,d+8,c?e.call(c,n,r,o,s,i,a,u,l):e(n,r,o,s,i,a,u,l)):Ko(f,d+8)}function m0(t,e,n,r){return fm(D(),Ee(),t,e,n,r)}function os(t,e){const n=t[e];return n===A?void 0:n}function um(t,e,n,r,o,s){const i=e+n;return me(t,i,o)?yt(t,i+1,s?r.call(s,o):r(o)):os(t,i+1)}function lm(t,e,n,r,o,s,i){const a=e+n;return Pn(t,a,o,s)?yt(t,a+2,i?r.call(i,o,s):r(o,s)):os(t,a+2)}function cm(t,e,n,r,o,s,i,a){const u=e+n;return Fi(t,u,o,s,i)?yt(t,u+3,a?r.call(a,o,s,i):r(o,s,i)):os(t,u+3)}function dm(t,e,n,r,o,s,i,a,u){const l=e+n;return ze(t,l,o,s,i,a)?yt(t,l+4,u?r.call(u,o,s,i,a):r(o,s,i,a)):os(t,l+4)}function fm(t,e,n,r,o,s){let i=e+n,a=!1;for(let u=0;u<o.length;u++)me(t,i++,o[u])&&(a=!0);return a?yt(t,i,r.apply(s,o)):os(t,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function y0(t,e){const n=L();let r;const o=t+Q;n.firstCreatePass?(r=function D0(t,e){if(e)for(let n=e.length-1;n>=0;n--){const r=e[n];if(t===r.name)return r}}(e,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const s=r.factory||(r.factory=Tn(r.type)),i=ct(N);try{const a=ii(!1),u=s();return ii(a),function YC(t,e,n,r){n>=t.data.length&&(t.data[n]=null,t.blueprint[n]=null),e[n]=r}(n,D(),o,u),u}finally{ct(i)}}function v0(t,e,n){const r=t+Q,o=D(),s=dr(o,r);return ss(o,r)?um(o,Ee(),e,s.transform,n,s):s.transform(n)}function _0(t,e,n,r){const o=t+Q,s=D(),i=dr(s,o);return ss(s,o)?lm(s,Ee(),e,i.transform,n,r,i):i.transform(n,r)}function w0(t,e,n,r,o){const s=t+Q,i=D(),a=dr(i,s);return ss(i,s)?cm(i,Ee(),e,a.transform,n,r,o,a):a.transform(n,r,o)}function E0(t,e,n,r,o,s){const i=t+Q,a=D(),u=dr(a,i);return ss(a,i)?dm(a,Ee(),e,u.transform,n,r,o,s,u):u.transform(n,r,o,s)}function C0(t,e,n){const r=t+Q,o=D(),s=dr(o,r);return ss(o,r)?fm(o,Ee(),e,s.transform,n,s):s.transform.apply(s,n)}function ss(t,e){return t[1].data[e].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Hi.\u0275prov=I({token:Hi,providedIn:"environment",factory:()=>new Hi(w(Uo))});function kl(t){return e=>{setTimeout(t,void 0,e)}}const wt=class M0 extends yo{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,r){let o=e,s=n||(()=>null),i=r;if(e&&"object"==typeof e){const u=e;o=u.next?.bind(u),s=u.error?.bind(u),i=u.complete?.bind(u)}this.__isAsync&&(s=kl(s),o&&(o=kl(o)),i&&(i=kl(i)));const a=super.subscribe({next:o,error:s,complete:i});return e instanceof lt&&e.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function I0(){return this._results[Fn()]()}class Vl{constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Fn(),r=Vl.prototype;r[n]||(r[n]=I0)}get changes(){return this._changes||(this._changes=new wt)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){const r=this;r.dirty=!1;const o=Le(e);(this._changesDetected=!function a_(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let o=t[r],s=e[r];if(n&&(o=n(o),s=n(s)),s!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Et{}Et.__NG_ELEMENT_ID__=function A0(){return $i(ae(),D())};const b0=Et,T0=class extends b0{constructor(e,n,r){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(e,n){const r=this._declarationTContainer.tViews,o=qo(this._declarationLView,r,e,16,null,r.declTNode,null,null,null,null,n||null),s=this._declarationLView[this._declarationTContainer.index];o[17]=s;const i=this._declarationLView[19];return null!==i&&(o[19]=i.createEmbeddedView(r)),Wo(r,o,e),new rs(o)}};function $i(t,e){return 4&t.type?new T0(e,t,zr(t,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class st{}st.__NG_ELEMENT_ID__=function S0(){return gm(ae(),D())};const x0=st,pm=class extends x0{constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return zr(this._hostTNode,this._hostLView)}get injector(){return new gr(this._hostTNode,this._hostLView)}get parentInjector(){const e=ai(this._hostTNode,this._hostLView);if(zd(e)){const n=hr(e,this._hostLView),r=pr(e),o=n[1].data[r+8];return new gr(o,n)}return new gr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const n=hm(this._lContainer);return null!==n&&n[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,n,r){let o,s;"number"==typeof r?o=r:null!=r&&(o=r.index,s=r.injector);const i=e.createEmbeddedView(n||{},s);return this.insert(i,o),i}createComponent(e,n,r,o,s){const i=e&&!So(e);let a;if(i)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,s=d.environmentInjector||d.ngModuleRef}const u=i?e:new Ol(q(e)),l=r||this.parentInjector;if(!s&&null==u.ngModule){const f=(i?l:this.parentInjector).get(Uo,null);f&&(s=f)}const c=u.create(l,o,void 0,s);return this.insert(c.hostView,a),c}insert(e,n){const r=e._lView,o=r[1];if(function Iv(t){return Je(t[3])}(r)){const c=this.indexOf(e);if(-1!==c)this.detach(c);else{const d=r[3],f=new pm(d,d[6],d[3]);f.detach(f.indexOf(e))}}const s=this._adjustIndex(n),i=this._lContainer;Uw(o,r,i,s);const a=Su(s,i),u=r[x],l=_i(u,i[7]);return null!==l&&function Bw(t,e,n,r,o,s){r[0]=o,r[6]=e,$o(t,r,n,1,o,s)}(o,i[6],u,r,l,a),e.attachToViewContainerRef(),of(jl(i),s,e),e}move(e,n){return this.insert(e,n)}indexOf(e){const n=hm(this._lContainer);return null!==n?n.indexOf(e):-1}remove(e){const n=this._adjustIndex(e,-1),r=bu(this._lContainer,n);r&&(di(jl(this._lContainer),n),Gf(r[1],r))}detach(e){const n=this._adjustIndex(e,-1),r=bu(this._lContainer,n);return r&&null!=di(jl(this._lContainer),n)?new rs(r):null}_adjustIndex(e,n=0){return e??this.length+n}};function hm(t){return t[8]}function jl(t){return t[8]||(t[8]=[])}function gm(t,e){let n;const r=e[t.index];if(Je(r))n=r;else{let o;if(8&t.type)o=se(r);else{const s=e[x];o=s.createComment("");const i=Ge(t,e);xn(s,_i(s,i),o,function Qw(t,e){return te(t)?t.nextSibling(e):e.nextSibling}(s,i),!1)}e[t.index]=n=nh(r,e,o,t),Si(e,n)}return new pm(n,t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bl{constructor(e){this.queryList=e,this.matches=null}clone(){return new Bl(this.queryList)}setDirty(){this.queryList.setDirty()}}class Hl{constructor(e=[]){this.queries=e}createEmbeddedView(e){const n=e.queries;if(null!==n){const r=null!==e.contentQueries?e.contentQueries[0]:n.length,o=[];for(let s=0;s<r;s++){const i=n.getByIndex(s),a=this.queries[i.indexInDeclarationView];o.push(a.clone())}return new Hl(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)null!==_m(e,n).matches&&this.queries[n].setDirty()}}class mm{constructor(e,n,r=null){this.predicate=e,this.flags=n,this.read=r}}class $l{constructor(e=[]){this.queries=e}elementStart(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,s=this.getByIndex(r).embeddedTView(e,o);s&&(s.indexInDeclarationView=r,null!==n?n.push(s):n=[s])}return null!==n?new $l(n):null}template(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Ul{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new Ul(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=e.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(e,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const s=r[o];this.matchTNodeWithReadOption(e,n,P0(n,s)),this.matchTNodeWithReadOption(e,n,li(n,e,s,!1,!1))}else r===Et?4&n.type&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,li(n,e,r,!1,!1))}matchTNodeWithReadOption(e,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Ln||o===st||o===Et&&4&n.type)this.addMatch(n.index,-2);else{const s=li(n,e,o,!1,!1);null!==s&&this.addMatch(n.index,s)}else this.addMatch(n.index,r)}}addMatch(e,n){null===this.matches?this.matches=[e,n]:this.matches.push(e,n)}}function P0(t,e){const n=t.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1];return null}function O0(t,e,n,r){return-1===n?function R0(t,e){return 11&t.type?zr(t,e):4&t.type?$i(t,e):null}(e,t):-2===n?function L0(t,e,n){if(n===Ln)return zr(e,t);if(n===Et)return $i(e,t);if(n===st)return gm(e,t)}(t,e,r):To(t,t[1],n,e)}function ym(t,e,n,r){const o=e[19].queries[r];if(null===o.matches){const s=t.data,i=n.matches,a=[];for(let u=0;u<i.length;u+=2){const l=i[u];if(l<0)a.push(null);else{const c=s[l];a.push(O0(e,c,i[u+1],n.metadata.read))}}o.matches=a}return o.matches}function Gl(t,e,n,r){const o=t.queries.getByIndex(n),s=o.matches;if(null!==s){const i=ym(t,e,o,n);for(let a=0;a<s.length;a+=2){const u=s[a];if(u>0)r.push(i[a/2]);else{const l=s[a+1],c=e[-u];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Gl(f[1],f,l,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const p=d[f];Gl(p[1],p,l,r)}}}}}return r}function k0(t){const e=D(),n=L(),r=Ld();za(r+1);const o=_m(n,r);if(t.dirty&&Sd(e)===(2==(2&o.metadata.flags))){if(null===o.matches)t.reset([]);else{const s=o.crossesNgTemplate?Gl(n,e,r,[]):ym(n,e,o,r);t.reset(s,QI),t.notifyOnChanges()}return!0}return!1}function V0(t,e,n){const r=L();r.firstCreatePass&&(vm(r,new mm(t,e,n),-1),2==(2&e)&&(r.staticViewQueries=!0)),Dm(r,D(),e)}function j0(t,e,n,r){const o=L();if(o.firstCreatePass){const s=ae();vm(o,new mm(e,n,r),s.index),function $0(t,e){const n=t.contentQueries||(t.contentQueries=[]),r=n.length?n[n.length-1]:-1;e!==r&&n.push(t.queries.length-1,e)}(o,t),2==(2&n)&&(o.staticContentQueries=!0)}Dm(o,D(),n)}function B0(){return function H0(t,e){return t[19].queries[e].queryList}(D(),Ld())}function Dm(t,e,n){const r=new Vl(4==(4&n));Kp(t,e,r,r.destroy),null===e[19]&&(e[19]=new Hl),e[19].queries.push(new Bl(r))}function vm(t,e,n){null===t.queries&&(t.queries=new $l),t.queries.track(new Ul(e,n))}function _m(t,e){return t.queries.getByIndex(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U0(t,e){return $i(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Te={\u0275\u0275attribute:Eh,\u0275\u0275attributeInterpolate1:Ch,\u0275\u0275attributeInterpolate2:Mh,\u0275\u0275attributeInterpolate3:Ih,\u0275\u0275attributeInterpolate4:bh,\u0275\u0275attributeInterpolate5:Th,\u0275\u0275attributeInterpolate6:Ah,\u0275\u0275attributeInterpolate7:Sh,\u0275\u0275attributeInterpolate8:xh,\u0275\u0275attributeInterpolateV:Nh,\u0275\u0275defineComponent:Gs,\u0275\u0275defineDirective:He,\u0275\u0275defineInjectable:I,\u0275\u0275defineInjector:Ye,\u0275\u0275defineNgModule:dt,\u0275\u0275definePipe:Ae,\u0275\u0275directiveInject:N,\u0275\u0275getInheritedFactory:o_,\u0275\u0275inject:w,\u0275\u0275injectAttribute:Xa,\u0275\u0275invalidFactory:HE,\u0275\u0275invalidFactoryDep:cf,\u0275\u0275templateRefExtractor:U0,\u0275\u0275resetView:Fv,\u0275\u0275NgOnChangesFeature:Ys,\u0275\u0275ProvidersFeature:$I,\u0275\u0275CopyDefinitionFeature:zC,\u0275\u0275InheritDefinitionFeature:wh,\u0275\u0275StandaloneFeature:s0,\u0275\u0275nextContext:Vh,\u0275\u0275namespaceHTML:$v,\u0275\u0275namespaceMathML:Hv,\u0275\u0275namespaceSVG:Bv,\u0275\u0275enableBindings:Sv,\u0275\u0275disableBindings:xv,\u0275\u0275elementStart:ye,\u0275\u0275elementEnd:De,\u0275\u0275element:Ri,\u0275\u0275elementContainerStart:yl,\u0275\u0275elementContainerEnd:Dl,\u0275\u0275elementContainer:Fh,\u0275\u0275pureFunction0:a0,\u0275\u0275pureFunction1:u0,\u0275\u0275pureFunction2:l0,\u0275\u0275pureFunction3:c0,\u0275\u0275pureFunction4:d0,\u0275\u0275pureFunction5:f0,\u0275\u0275pureFunction6:p0,\u0275\u0275pureFunction7:h0,\u0275\u0275pureFunction8:g0,\u0275\u0275pureFunctionV:m0,\u0275\u0275getCurrentView:eM,\u0275\u0275restoreView:Nv,\u0275\u0275listener:Rh,\u0275\u0275projection:sM,\u0275\u0275syntheticHostProperty:Tg,\u0275\u0275syntheticHostListener:Oh,\u0275\u0275pipeBind1:v0,\u0275\u0275pipeBind2:_0,\u0275\u0275pipeBind3:w0,\u0275\u0275pipeBind4:E0,\u0275\u0275pipeBindV:C0,\u0275\u0275projectionDef:oM,\u0275\u0275hostProperty:bg,\u0275\u0275property:Yo,\u0275\u0275propertyInterpolate:jh,\u0275\u0275propertyInterpolate1:wl,\u0275\u0275propertyInterpolate2:Bh,\u0275\u0275propertyInterpolate3:Hh,\u0275\u0275propertyInterpolate4:$h,\u0275\u0275propertyInterpolate5:Uh,\u0275\u0275propertyInterpolate6:Gh,\u0275\u0275propertyInterpolate7:zh,\u0275\u0275propertyInterpolate8:qh,\u0275\u0275propertyInterpolateV:Wh,\u0275\u0275pipe:y0,\u0275\u0275queryRefresh:k0,\u0275\u0275viewQuery:V0,\u0275\u0275loadQuery:B0,\u0275\u0275contentQuery:j0,\u0275\u0275reference:ZC,\u0275\u0275classMap:mM,\u0275\u0275classMapInterpolate1:MM,\u0275\u0275classMapInterpolate2:IM,\u0275\u0275classMapInterpolate3:bM,\u0275\u0275classMapInterpolate4:TM,\u0275\u0275classMapInterpolate5:AM,\u0275\u0275classMapInterpolate6:SM,\u0275\u0275classMapInterpolate7:xM,\u0275\u0275classMapInterpolate8:NM,\u0275\u0275classMapInterpolateV:FM,\u0275\u0275styleMap:Dt,\u0275\u0275styleMapInterpolate1:PM,\u0275\u0275styleMapInterpolate2:RM,\u0275\u0275styleMapInterpolate3:OM,\u0275\u0275styleMapInterpolate4:LM,\u0275\u0275styleMapInterpolate5:kM,\u0275\u0275styleMapInterpolate6:VM,\u0275\u0275styleMapInterpolate7:jM,\u0275\u0275styleMapInterpolate8:BM,\u0275\u0275styleMapInterpolateV:HM,\u0275\u0275styleProp:tg,\u0275\u0275stylePropInterpolate1:yg,\u0275\u0275stylePropInterpolate2:Dg,\u0275\u0275stylePropInterpolate3:vg,\u0275\u0275stylePropInterpolate4:_g,\u0275\u0275stylePropInterpolate5:wg,\u0275\u0275stylePropInterpolate6:Eg,\u0275\u0275stylePropInterpolate7:Cg,\u0275\u0275stylePropInterpolate8:Mg,\u0275\u0275stylePropInterpolateV:Ig,\u0275\u0275classProp:ng,\u0275\u0275advance:en,\u0275\u0275template:Pi,\u0275\u0275text:_t,\u0275\u0275textInterpolate:Hr,\u0275\u0275textInterpolate1:Cl,\u0275\u0275textInterpolate2:lg,\u0275\u0275textInterpolate3:cg,\u0275\u0275textInterpolate4:dg,\u0275\u0275textInterpolate5:fg,\u0275\u0275textInterpolate6:pg,\u0275\u0275textInterpolate7:hg,\u0275\u0275textInterpolate8:gg,\u0275\u0275textInterpolateV:mg,\u0275\u0275i18n:RI,\u0275\u0275i18nAttributes:OI,\u0275\u0275i18nExp:em,\u0275\u0275i18nStart:Jg,\u0275\u0275i18nEnd:Xg,\u0275\u0275i18nApply:LI,\u0275\u0275i18nPostprocess:kI,\u0275\u0275resolveWindow:Pw,\u0275\u0275resolveDocument:Rw,\u0275\u0275resolveBody:Ow,\u0275\u0275setComponentScope:ov,\u0275\u0275setNgModuleScope:iv,\u0275\u0275registerNgModuleType:gf,\u0275\u0275sanitizeHtml:iw,\u0275\u0275sanitizeStyle:aw,\u0275\u0275sanitizeResourceUrl:xf,\u0275\u0275sanitizeScript:uw,\u0275\u0275sanitizeUrl:Sf,\u0275\u0275sanitizeUrlOrResourceUrl:fw,\u0275\u0275trustConstantHtml:lw,\u0275\u0275trustConstantResourceUrl:cw,forwardRef:Ea,resolveForwardRef:M};let qr=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wm(t){return void 0!==t.ngModule}function Em(t){return!!Pe(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const is=[];let zl=!1;function Cm(t){return Array.isArray(t)?t.every(Cm):!!M(t)}function Q0(t,e={}){(function K0(t,e,n=!1){const r=Le(e.declarations||B);let o=null;Object.defineProperty(t,Dd,{configurable:!0,get:()=>(null===o&&(o=ue().compileNgModule(Te,`ng:///${t.name}/\u0275mod.js`,{type:t,bootstrap:Le(e.bootstrap||B).map(M),declarations:r.map(M),imports:Le(e.imports||B).map(M).map(Am),exports:Le(e.exports||B).map(M).map(Am),schemas:e.schemas?Le(e.schemas):null,id:e.id||null}),o.schemas||(o.schemas=[])),o)});let s=null;Object.defineProperty(t,St,{get:()=>{if(null===s){const a=ue();s=a.compileFactory(Te,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,deps:gi(t),target:a.FactoryTarget.NgModule,typeArgumentCount:0})}return s},configurable:!1});let i=null;Object.defineProperty(t,Ia,{get:()=>{if(null===i){const a={name:t.name,type:t,providers:e.providers||B,imports:[(e.imports||B).map(M),(e.exports||B).map(M)]};i=ue().compileInjector(Te,`ng:///${t.name}/\u0275inj.js`,a)}return i},configurable:!1})})(t,e),void 0!==e.id&&gf(t,e.id),function q0(t,e){is.push({moduleType:t,ngModule:e})}(t,e)}function as(t){const e=q(t)||_e(t)||we(t);return null!==e&&e.standalone}function Z0(t,e){const n=Le(e.declarations||B),r=Wr(t);n.forEach(o=>{if((o=M(o)).hasOwnProperty(Us)){Tm(q(o),r)}else!o.hasOwnProperty(Ta)&&!o.hasOwnProperty(Aa)&&(o.ngSelectorScope=t)})}function Tm(t,e){t.directiveDefs=()=>Array.from(e.compilation.directives).map(n=>n.hasOwnProperty(Us)?q(n):_e(n)).filter(n=>!!n),t.pipeDefs=()=>Array.from(e.compilation.pipes).map(n=>we(n)),t.schemas=e.schemas,t.tView=null}function Wr(t){if(Em(t))return function J0(t){const e=Pe(t,!0);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const n={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Pt(e.imports).forEach(r=>{const o=Wr(r);o.exported.directives.forEach(s=>n.compilation.directives.add(s)),o.exported.pipes.forEach(s=>n.compilation.pipes.add(s))}),Pt(e.declarations).forEach(r=>{we(r)?n.compilation.pipes.add(r):n.compilation.directives.add(r)}),Pt(e.exports).forEach(r=>{const o=r;if(Em(o)){const s=Wr(o);s.exported.directives.forEach(i=>{n.compilation.directives.add(i),n.exported.directives.add(i)}),s.exported.pipes.forEach(i=>{n.compilation.pipes.add(i),n.exported.pipes.add(i)})}else we(o)?n.exported.pipes.add(o):n.exported.directives.add(o)}),e.transitiveCompileScopes=n,n}(t);if(as(t)){if(null!==(q(t)||_e(t)))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set([t]),pipes:new Set}};if(null!==we(t))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set([t])}}}throw new Error(`${t.name} does not have a module def (\u0275mod property)`)}function Am(t){return wm(t)?t.ngModule:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ql=0;function X0(t,e){let n=null;(function T_(t,e){pf(e)&&(wr.set(t,e),Lo.add(t))})(t,e),Nm(t,e),Object.defineProperty(t,Us,{get:()=>{if(null===n){const r=ue();if(pf(e)){const l=[`Component '${t.name}' is not resolved:`];throw e.templateUrl&&l.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&l.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),l.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(l.join("\n"))}const o=function z0(){return qr}();let s=e.preserveWhitespaces;void 0===s&&(s=null!==o&&void 0!==o.preserveWhitespaces&&o.preserveWhitespaces);let i=e.encapsulation;void 0===i&&(i=null!==o&&void 0!==o.defaultEncapsulation?o.defaultEncapsulation:At.Emulated);const a=e.templateUrl||`ng:///${t.name}/template.html`,u={...Fm(t,e),typeSourceSpan:r.createParseSourceSpan("Component",t.name,a),template:e.template||"",preserveWhitespaces:s,styles:e.styles||B,animations:e.animations,declarations:[],changeDetection:e.changeDetection,encapsulation:i,interpolation:e.interpolation,viewProviders:e.viewProviders||null,isStandalone:!!e.standalone};Ql++;try{if(u.usesInheritance&&Pm(t),n=r.compileComponent(Te,a,u),e.standalone){const l=Le(e.imports||B),{directiveDefs:c,pipeDefs:d}=function tb(t,e){let n=null,r=null;return{directiveDefs:()=>{if(null===n){n=[q(t)];for(const i of e){const a=M(i);if(Pe(a)){const u=Wr(a);for(const l of u.exported.directives){const c=q(l)||_e(l);c&&n.push(c)}}else{const u=q(a)||_e(a);u&&n.push(u)}}}return n},pipeDefs:()=>{if(null===r){r=[];for(const i of e){const a=M(i);if(Pe(a)){const u=Wr(a);r.push(...Array.from(u.exported.pipes).map(l=>we(l)))}else{const u=we(a);u&&r.push(u)}}}return r}}}(t,l);n.directiveDefs=c,n.pipeDefs=d,n.dependencies=()=>l.map(M)}}finally{Ql--}if(0===Ql&&function W0(){if(!zl){zl=!0;try{for(let t=is.length-1;t>=0;t--){const{moduleType:e,ngModule:n}=is[t];n.declarations&&n.declarations.every(Cm)&&(is.splice(t,1),Z0(e,n))}}finally{zl=!1}}}(),function nb(t){return void 0!==t.ngSelectorScope}(t)){const l=Wr(t.ngSelectorScope);Tm(n,l)}if(e.schemas){if(!e.standalone)throw new Error(`The 'schemas' was specified for the ${j(t)} but is only valid on a component that is standalone.`);n.schemas=e.schemas}else e.standalone&&(n.schemas=[])}return n},configurable:!1})}function Sm(t,e){let n=null;Nm(t,e||{}),Object.defineProperty(t,Ta,{get:()=>{if(null===n){const r=xm(t,e||{});n=ue().compileDirective(Te,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function xm(t,e){const n=t&&t.name,r=`ng:///${n}/\u0275dir.js`,o=ue(),s=Fm(t,e);return s.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),s.usesInheritance&&Pm(t),{metadata:s,sourceMapUrl:r}}function Nm(t,e){let n=null;Object.defineProperty(t,St,{get:()=>{if(null===n){const r=xm(t,e),o=ue();n=o.compileFactory(Te,`ng:///${t.name}/\u0275fac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:gi(t),target:o.FactoryTarget.Directive})}return n},configurable:!1})}function rb(t){return Object.getPrototypeOf(t.prototype)===Object.prototype}function Fm(t,e){const n=Oo(),r=n.ownPropMetadata(t);return{name:t.name,type:t,selector:void 0!==e.selector?e.selector:null,host:e.host||ir,propMetadata:r,inputs:e.inputs||B,outputs:e.outputs||B,queries:Rm(t,r,Om),lifecycle:{usesOnChanges:n.hasLifecycleHook(t,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!rb(t),exportAs:ib(e.exportAs),providers:e.providers||null,viewQueries:Rm(t,r,Lm),isStandalone:!!e.standalone}}function Pm(t){const e=Object.prototype;let n=Object.getPrototypeOf(t.prototype).constructor;for(;n&&n!==e;)!_e(n)&&!q(n)&&ub(n)&&Sm(n,null),n=Object.getPrototypeOf(n)}function ob(t){return"string"==typeof t?Vm(t):M(t)}function sb(t,e){return{propertyName:t,predicate:ob(e.selector),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly}}function Rm(t,e,n){const r=[];for(const o in e)if(e.hasOwnProperty(o)){const s=e[o];s.forEach(i=>{if(n(i)){if(!i.selector)throw new Error(`Can't construct a query for the property "${o}" of "${j(t)}" since the query selector wasn't defined.`);if(s.some(km))throw new Error("Cannot combine @Input decorators with query decorators");r.push(sb(o,i))}})}return r}function ib(t){return void 0===t?null:Vm(t)}function Om(t){const e=t.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function Lm(t){const e=t.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function km(t){return"Input"===t.ngMetadataName}function Vm(t){return t.split(",").map(e=>e.trim())}const ab=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function ub(t){const e=Oo();if(ab.some(r=>e.hasLifecycleHook(t,r)))return!0;const n=e.propMetadata(t);for(const r in n){const o=n[r];for(let s=0;s<o.length;s++){const i=o[s],a=i.ngMetadataName;if(km(i)||Om(i)||Lm(i)||"Output"===a||"HostBinding"===a||"HostListener"===a)return!0}}return!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jm(t,e){return{type:t,name:t.name,pipeName:e.name,pure:void 0===e.pure||e.pure,isStandalone:!!e.standalone}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cb=Ao("Directive",(t={})=>t,void 0,void 0,(t,e)=>Sm(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ao("Component",(t={})=>({changeDetection:En.Default,...t}),cb,void 0,(t,e)=>X0(t,e)),Ao("Pipe",t=>({pure:!0,...t}),void 0,void 0,(t,e)=>function lb(t,e){let n=null,r=null;Object.defineProperty(t,St,{get:()=>{if(null===r){const o=jm(t,e),s=ue(o.type);r=s.compileFactory(Te,`ng:///${o.name}/\u0275fac.js`,{name:o.name,type:o.type,typeArgumentCount:0,deps:gi(t),target:s.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(t,Aa,{get:()=>{if(null===n){const o=jm(t,e);n=ue(o.type).compilePipe(Te,`ng:///${o.name}/\u0275pipe.js`,o)}return n},configurable:!1})}(t,e)),Zt("Input",t=>({bindingPropertyName:t})),Zt("Output",t=>({bindingPropertyName:t})),Zt("HostBinding",t=>({hostPropertyName:t})),Zt("HostListener",(t,e)=>({eventName:t,args:e})),Ao("NgModule",t=>t,void 0,void 0,(t,e)=>Q0(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gi(...t){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bm=new P("Application Initializer");class Lt{constructor(e){this.appInits=e,this.resolve=Gi,this.reject=Gi,this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}runInitializers(){if(this.initialized)return;const e=[],n=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const o=this.appInits[r]();if(vl(o))e.push(o);else if(tM(o)){const s=new Promise((i,a)=>{o.subscribe({complete:i,error:a})});e.push(s)}}Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),0===e.length&&n(),this.initialized=!0}}Lt.\u0275fac=function(e){return new(e||Lt)(w(Bm,8))},Lt.\u0275prov=I({token:Lt,factory:Lt.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qr=new P("AppId",{providedIn:"root",factory:Hm});function Hm(){return`${Kl()}${Kl()}${Kl()}`}function Kl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const $m=new P("Platform Initializer"),Yl=new P("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),db=new P("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new P("Application Packages Root URL"),new P("AnimationModuleType");class kn{log(e){console.log(e)}warn(e){console.warn(e)}}kn.\u0275fac=function(e){return new(e||kn)},kn.\u0275prov=I({token:kn,factory:kn.\u0275fac,providedIn:"platform"});const kt=new P("LocaleId",{providedIn:"root",factory:()=>function __(t,e=O.Default){return w(t,e)}(kt,O.Optional|O.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fb(){return typeof $localize<"u"&&$localize.locale||Ur}()}),pb=new P("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});new P("Translations"),new P("TranslationsFormat");var Um;!function(t){t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore"}(Um||(Um={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hb{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}}class us{compileModuleSync(e){return new Ll(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){const n=this.compileModuleSync(e),o=Pt(Pe(e).declarations).reduce((s,i)=>{const a=q(i);return a&&s.push(new Ol(a)),s},[]);return new hb(n,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}}us.\u0275fac=function(e){return new(e||us)},us.\u0275prov=I({token:us,factory:us.\u0275fac,providedIn:"root"});new P("compilerOptions");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mb=Promise.resolve(0);function Zl(t){typeof Zone>"u"?mb.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fe{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new wt(!1),this.onMicrotaskEmpty=new wt(!1),this.onStable=new wt(!1),this.onError=new wt(!1),typeof Zone>"u")throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function yb(){let t=$.requestAnimationFrame,e=$.cancelAnimationFrame;if(typeof Zone<"u"&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function _b(t){const e=()=>{!function vb(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call($,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Xl(t),t.isCheckStableRunning=!0,Jl(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Xl(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,s,i,a)=>{try{return Gm(t),n.invokeTask(o,s,i,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||t.shouldCoalesceRunChangeDetection)&&e(),zm(t)}},onInvoke:(n,r,o,s,i,a,u)=>{try{return Gm(t),n.invoke(o,s,i,a,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),zm(t)}},onHasTask:(n,r,o,s)=>{n.hasTask(o,s),r===o&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Xl(t),Jl(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,r,o,s)=>(n.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!fe.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(fe.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){const s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+o,e,Db,Gi,Gi);try{return s.runTask(i,n,r)}finally{s.cancelTask(i)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}}const Db={};function Jl(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Xl(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Gm(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function zm(t){t._nesting--,Jl(t)}class wb{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new wt,this.onMicrotaskEmpty=new wt,this.onStable=new wt,this.onError=new wt}run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qm=new P(""),zi=new P("");class on{constructor(e,n,r){this._ngZone=e,this.registry=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,ec||(function Eb(t){ec=t}(r),r.addToWindow(n)),this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{fe.assertNotInAngularZone(),Zl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Zl(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(n=>!n.updateCb||!n.updateCb(e)||(clearTimeout(n.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,n,r){let o=-1;n&&n>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e(this._didWork,this.getPendingTasks())},n)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,n,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,n,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,n,r){return[]}}on.\u0275fac=function(e){return new(e||on)(w(fe),w(sn),w(zi))},on.\u0275prov=I({token:on,factory:on.\u0275fac});class sn{constructor(){this._applications=new Map}registerApplication(e,n){this._applications.set(e,n)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,n=!0){return ec?.findTestabilityInTree(this,e,n)??null}}let ec;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */sn.\u0275fac=function(e){return new(e||sn)},sn.\u0275prov=I({token:sn,factory:sn.\u0275fac,providedIn:"platform"});let an=null;const Wm=new P("AllowMultipleToken"),Qm=new P("PlatformOnDestroy"),Ct=!1;function Km(t){const e=t.get($m,null);e&&e.forEach(n=>n())}function Ym(t,e,n=[]){const r=`Platform: ${e}`,o=new P(r);return(s=[])=>{let i=tc();if(!i||i.injector.get(Wm,!1)){const a=[...n,...s,{provide:o,useValue:!0}];t?t(a):function Ib(t){if(an&&!an.get(Wm,!1))throw new F(400,"");an=t;const e=t.get(Vn);return Km(t),e}(Zm(a,r))}return function Tb(t){const e=tc();if(!e){throw new F(401,"")}return e}()}}function Zm(t=[],e){return de.create({name:e,providers:[{provide:Ou,useValue:"platform"},{provide:Qm,useValue:()=>an=null},...t]})}function tc(){return an?.get(Vn)??null}class Vn{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,n){const r=function Ab(t,e){let n;return n="noop"===t?new wb:("zone.js"===t?void 0:t)||new fe(e),n}(n?.ngZone,Jm(n)),o=[{provide:fe,useValue:r}];return r.run(()=>{const s=de.create({providers:o,parent:this.injector,name:e.moduleType.name}),i=e.create(s),a=i.injector.get(Cr,null);if(!a){throw new F(402,"")}return r.runOutsideAngular(()=>{const u=r.onError.subscribe({next:l=>{a.handleError(l)}});i.onDestroy(()=>{qi(this._modules,i),u.unsubscribe()})}),Xm(a,r,()=>{const u=i.injector.get(Lt);return u.runInitializers(),u.donePromise.then(()=>(Ng(i.injector.get(kt,Ur)||Ur),this._moduleDoBootstrap(i),i))})})}bootstrapModule(e,n=[]){const r=ey({},n);return function Cb(t,e,n){const r=new Ll(n);return Promise.resolve(r)}(this.injector,0,e).then(o=>this.bootstrapModuleFactory(o,r))}_moduleDoBootstrap(e){const n=e.injector.get(un);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else{if(!e.instance.ngDoBootstrap){throw new F(403,"")}e.instance.ngDoBootstrap(n)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed){throw new F(404,"")}this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._injector.get(Qm,null)?.(),this._destroyed=!0}get destroyed(){return this._destroyed}}function Jm(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!t||!t.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!t||!t.ngZoneRunCoalescing)||!1}}function Xm(t,e,n){try{const r=n();return vl(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t.handleError(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}function ey(t,e){return t=Array.isArray(e)?e.reduce(ey,t):{...t,...e}}Vn.\u0275fac=function(e){return new(e||Vn)(w(de))},Vn.\u0275prov=I({token:Vn,factory:Vn.\u0275fac,providedIn:"platform"});class un{constructor(e,n,r,o){this._zone=e,this._injector=n,this._exceptionHandler=r,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const s=new oe(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),i=new oe(a=>{let u;this._zone.runOutsideAngular(()=>{u=this._zone.onStable.subscribe(()=>{fe.assertNotInAngularZone(),Zl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const l=this._zone.onUnstable.subscribe(()=>{fe.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{u.unsubscribe(),l.unsubscribe()}});this.isStable=GD(s,i.pipe(function qD(t={}){const{connector:e=(()=>new yo),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=t;return s=>{let i=null,a=null,u=null,l=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=null},p=()=>{f(),i=u=null,c=d=!1},h=()=>{const g=i;p(),g?.unsubscribe()};return zt((g,y)=>{l++,!d&&!c&&f();const v=u=u??e();y.add(()=>{l--,0===l&&!d&&!c&&(a=va(h,o))}),v.subscribe(y),i||(i=new ks({next:E=>v.next(E),error:E=>{d=!0,f(),a=va(p,n,E),v.error(E)},complete:()=>{c=!0,f(),a=va(p,r),v.complete()}}),Da(g).subscribe(i))})(s)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(e,n){const r=e instanceof rm;if(!this._initStatus.done){!r&&as(e);throw new F(405,Ct)}let o;o=r?e:this._injector.get(ns).resolveComponentFactory(e),this.componentTypes.push(o.componentType);const s=function Mb(t){return t.isBoundToModule}(o)?void 0:this._injector.get(On),i=n||o.selector,a=o.create(de.NULL,[],i,s),u=a.location.nativeElement,l=a.injector.get(qm,null);return l?.registerApplication(u),a.onDestroy(()=>{this.detachView(a.hostView),qi(this.components,a),l?.unregisterApplication(u)}),this._loadComponent(a),a}tick(){if(this._runningTick){throw new F(101,"")}try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){const n=e;qi(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(db,[]).concat(this._bootstrapListeners).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>qi(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new F(406,Ct);const e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}function qi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}un.\u0275fac=function(e){return new(e||un)(w(fe),w(de),w(Cr),w(Lt))},un.\u0275prov=I({token:un,factory:un.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ny=!0,ry=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class sy{}sy.__NG_ELEMENT_ID__=function Nb(t){return function Fb(t,e,n){if(Qs(t)&&!n){const r=Oe(t.index,e);return new rs(r,r)}if(47&t.type){const r=e[16];return new rs(r,e)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(ae(),D(),16==(16&t))};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class uy{constructor(){}supports(e){return Qo(e)}create(e){return new Vb(e)}}const kb=(t,e)=>e;class Vb{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||kb}forEachItem(e){let n;for(n=this._itHead;null!==n;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,r=this._removalsHead,o=0,s=null;for(;n||r;){const i=!r||n&&n.currentIndex<cy(r,o,s)?n:r,a=cy(i,o,s),u=i.currentIndex;if(i===r)o--,r=r._nextRemoved;else if(n=n._next,null==i.previousIndex)o++;else{s||(s=[]);const l=a-o,c=u-o;if(l!=c){for(let f=0;f<l;f++){const p=f<s.length?s[f]:s[f]=0,h=p+f;c<=h&&h<l&&(s[f]=p+1)}s[i.previousIndex]=c-l}}a!==u&&e(i,a,u)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)e(n)}diff(e){if(null==e&&(e=[]),!Qo(e)){throw new F(900,"")}return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let o,s,i,n=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],i=this._trackByFn(a,s),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,s,i,a)),Object.is(n.item,s)||this._addIdentityChange(n,s)):(n=this._mismatch(n,s,i,a),r=!0),n=n._next}else o=0,function WC(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Fn()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(e,a=>{i=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,a,i,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,i,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,r,o){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,s,o)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,s,o)):e=this._addAfter(new jb(n,r),s,o),e}_verifyReinsertion(e,n,r,o){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?e=this._reinsertAfter(s,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const n=e._next;this._addToRemovals(this._unlink(e)),e=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,s=e._nextRemoved;return null===o?this._removalsHead=s:o._nextRemoved=s,null===s?this._removalsTail=o:s._prevRemoved=o,this._insertAfter(e,n,r),this._addToMoves(e,r),e}_moveAfter(e,n,r){return this._unlink(e),this._insertAfter(e,n,r),this._addToMoves(e,r),e}_addAfter(e,n,r){return this._insertAfter(e,n,r),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,n,r){const o=null===n?this._itHead:n._next;return e._next=o,e._prev=n,null===o?this._itTail=e:o._prev=e,null===n?this._itHead=e:n._next=e,null===this._linkedRecords&&(this._linkedRecords=new ly),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const n=e._prev,r=e._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ly),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class jb{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Bb{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const n=e._prevDup,r=e._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class ly{constructor(){this.map=new Map}put(e){const n=e.trackById;let r=this.map.get(n);r||(r=new Bb,this.map.set(n,r)),r.add(e)}get(e,n){const r=e,o=this.map.get(r);return o?o.get(e,n):null}remove(e){const n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function cy(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class dy{constructor(){}supports(e){return e instanceof Map||gl(e)}create(){return new Hb}}class Hb{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let n;for(n=this._mapHead;null!==n;n=n._next)e(n)}forEachPreviousItem(e){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)e(n)}forEachChangedItem(e){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}diff(e){if(e){if(!(e instanceof Map||gl(e))){throw new F(900,"")}}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const s=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,s)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,n){if(e){const r=e._prev;return n._next=e,n._prev=r,e._prev=n,r&&(r._next=n),e===this._mapHead&&(this._mapHead=n),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(e,n){if(this._records.has(e)){const o=this._records.get(e);this._maybeAddToChanges(o,n);const s=o._prev,i=o._next;return s&&(s._next=i),i&&(i._prev=s),o._next=null,o._prev=null,o}const r=new $b(e);return this._records.set(e,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,n){Object.is(n,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=n,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,n){e instanceof Map?e.forEach(n):Object.keys(e).forEach(r=>n(e[r],r))}}class $b{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fy(){return new it([new uy])}class it{constructor(e){this.factories=e}static create(e,n){if(null!=n){const r=n.factories.slice();e=e.concat(r)}return new it(e)}static extend(e){return{provide:it,useFactory:n=>it.create(e,n||fy()),deps:[[it,new Ro,new Po]]}}find(e){const n=this.factories.find(r=>r.supports(e));if(null!=n)return n;throw new F(901,"")}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function py(){return new qe([new dy])}it.\u0275prov=I({token:it,providedIn:"root",factory:fy});class qe{constructor(e){this.factories=e}static create(e,n){if(n){const r=n.factories.slice();e=e.concat(r)}return new qe(e)}static extend(e){return{provide:qe,useFactory:n=>qe.create(e,n||py()),deps:[[qe,new Ro,new Po]]}}find(e){const n=this.factories.find(o=>o.supports(e));if(n)return n;throw new F(901,"")}}qe.\u0275prov=I({token:qe,providedIn:"root",factory:py});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ub=[new dy],Gb=[new uy],zb=(new it(Gb),new qe(Ub),Ym(null,"core",[]));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Kr{constructor(e){}}Kr.\u0275fac=function(e){return new(e||Kr)(w(un))},Kr.\u0275mod=dt({type:Kr}),Kr.\u0275inj=Ye({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.0.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ki=null;function Vt(){return Ki}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ee=new P("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ln{historyGo(e){throw new Error("Not implemented")}}ln.\u0275fac=function(e){return new(e||ln)},ln.\u0275prov=I({token:ln,factory:function(){return function Kb(){return w(Yr)}()},providedIn:"platform"});new P("Location Initialized");class Yr extends ln{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Vt().getBaseHref(this._doc)}onPopState(e){const n=Vt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){const n=Vt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,n,r){hy()?this._history.pushState(e,n,r):this.location.hash=r}replaceState(e,n,r){hy()?this._history.replaceState(e,n,r):this.location.hash=r}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}function hy(){return!!window.history.pushState}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ic(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function gy(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length,r=n-("/"===t[n-1]?1:0);return t.slice(0,r)+t.slice(n)}function jt(t){return t&&"?"!==t[0]?"?"+t:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Yr.\u0275fac=function(e){return new(e||Yr)(w(ee))},Yr.\u0275prov=I({token:Yr,factory:function(){return function Yb(){return new Yr(w(ee))}()},providedIn:"platform"});class cn{historyGo(e){throw new Error("Not implemented")}}cn.\u0275fac=function(e){return new(e||cn)},cn.\u0275prov=I({token:cn,factory:function(){return function Zb(){const t=w(ee).location;return new Zr(w(ln),t&&t.origin||"")}()},providedIn:"root"});const my=new P("appBaseHref");class Zr extends cn{constructor(e,n){if(super(),this._platformLocation=e,this._removeListenerFns=[],null==n&&(n=this._platformLocation.getBaseHrefFromDOM()),null==n)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=n}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ic(this._baseHref,e)}path(e=!1){const n=this._platformLocation.pathname+jt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){const s=this.prepareExternalUrl(r+jt(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){const s=this.prepareExternalUrl(r+jt(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}Zr.\u0275fac=function(e){return new(e||Zr)(w(ln),w(my,8))},Zr.\u0275prov=I({token:Zr,factory:Zr.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ls extends cn{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=n&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return null==n&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){const n=ic(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+jt(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+jt(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}ls.\u0275fac=function(e){return new(e||ls)(w(ln),w(my,8))},ls.\u0275prov=I({token:ls,factory:ls.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Mt{constructor(e){this._subject=new wt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const n=this._locationStrategy.getBaseHref();this._baseHref=gy(yy(n)),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+jt(n))}normalize(e){return Mt.stripTrailingSlash(function Xb(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,yy(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+jt(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+jt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{const n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}}function yy(t){return t.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Mt.normalizeQueryParams=jt,Mt.joinWithSlash=ic,Mt.stripTrailingSlash=gy,Mt.\u0275fac=function(e){return new(e||Mt)(w(cn))},Mt.\u0275prov=I({token:Mt,factory:function(){return function Jb(){return new Mt(w(cn))}()},providedIn:"root"});const Dy={ADP:[void 0,void 0,0],AFN:[void 0,"\u060b",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058f",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20bc"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GHS:[void 0,"GH\u20b5"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202fCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var cs,Bn,ve,U,xe,re,vy;function Yi(t,e){return Qe(Ie(t)[W.DateFormat],e)}function Zi(t,e){return Qe(Ie(t)[W.TimeFormat],e)}function Ji(t,e){return Qe(Ie(t)[W.DateTimeFormat],e)}function We(t,e){const n=Ie(t),r=n[W.NumberSymbols][e];if(typeof r>"u"){if(e===re.CurrencyDecimal)return n[W.NumberSymbols][re.Decimal];if(e===re.CurrencyGroup)return n[W.NumberSymbols][re.Group]}return r}function ac(t,e){return Ie(t)[W.NumberFormats][e]}!function(t){t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific"}(cs||(cs={})),function(t){t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other"}(Bn||(Bn={})),function(t){t[t.Format=0]="Format",t[t.Standalone=1]="Standalone"}(ve||(ve={})),function(t){t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short"}(U||(U={})),function(t){t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full"}(xe||(xe={})),function(t){t[t.Decimal=0]="Decimal",t[t.Group=1]="Group",t[t.List=2]="List",t[t.PercentSign=3]="PercentSign",t[t.PlusSign=4]="PlusSign",t[t.MinusSign=5]="MinusSign",t[t.Exponential=6]="Exponential",t[t.SuperscriptingExponent=7]="SuperscriptingExponent",t[t.PerMille=8]="PerMille",t[t.Infinity=9]="Infinity",t[t.NaN=10]="NaN",t[t.TimeSeparator=11]="TimeSeparator",t[t.CurrencyDecimal=12]="CurrencyDecimal",t[t.CurrencyGroup=13]="CurrencyGroup"}(re||(re={})),function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(vy||(vy={}));const iT=Ag;function _y(t){if(!t[W.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[W.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Qe(t,e){for(let n=e;n>-1;n--)if(typeof t[n]<"u")return t[n];throw new Error("Locale data API: locale data undefined")}function uc(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}function lT(t,e,n="en"){const r=function sT(t){return Ie(t)[W.Currencies]}(n)[t]||Dy[t]||[],o=r[1];return"narrow"===e&&"string"==typeof o?o:r[0]||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fT=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ds={},pT=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var It,k,V;function hT(t,e,n,r){let o=function CT(t){if(Cy(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){const[o,s=1,i=1]=t.split("-").map(a=>+a);return Xi(o,s-1,i)}const n=parseFloat(t);if(!isNaN(t-n))return new Date(n);let r;if(r=t.match(fT))return function MT(t){const e=new Date(0);let n=0,r=0;const o=t[8]?e.setUTCFullYear:e.setFullYear,s=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11])),o.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const i=Number(t[4]||0)-n,a=Number(t[5]||0)-r,u=Number(t[6]||0),l=Math.floor(1e3*parseFloat("0."+(t[7]||0)));return s.call(e,i,a,u,l),e}(r)}const e=new Date(t);if(!Cy(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=Bt(n,e)||e;let a,i=[];for(;e;){if(a=pT.exec(e),!a){i.push(e);break}{i=i.concat(a.slice(1));const c=i.pop();if(!c)break;e=c}}let u=o.getTimezoneOffset();r&&(u=Ey(r,u),o=function ET(t,e,n){const r=n?-1:1,o=t.getTimezoneOffset(),s=Ey(e,o);return function wT(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,r*(s-o))}(o,r,!0));let l="";return i.forEach(c=>{const d=function _T(t){if(cc[t])return cc[t];let e;switch(t){case"G":case"GG":case"GGG":e=K(V.Eras,U.Abbreviated);break;case"GGGG":e=K(V.Eras,U.Wide);break;case"GGGGG":e=K(V.Eras,U.Narrow);break;case"y":e=ie(k.FullYear,1,0,!1,!0);break;case"yy":e=ie(k.FullYear,2,0,!0,!0);break;case"yyy":e=ie(k.FullYear,3,0,!1,!0);break;case"yyyy":e=ie(k.FullYear,4,0,!1,!0);break;case"Y":e=ra(1);break;case"YY":e=ra(2,!0);break;case"YYY":e=ra(3);break;case"YYYY":e=ra(4);break;case"M":case"L":e=ie(k.Month,1,1);break;case"MM":case"LL":e=ie(k.Month,2,1);break;case"MMM":e=K(V.Months,U.Abbreviated);break;case"MMMM":e=K(V.Months,U.Wide);break;case"MMMMM":e=K(V.Months,U.Narrow);break;case"LLL":e=K(V.Months,U.Abbreviated,ve.Standalone);break;case"LLLL":e=K(V.Months,U.Wide,ve.Standalone);break;case"LLLLL":e=K(V.Months,U.Narrow,ve.Standalone);break;case"w":e=lc(1);break;case"ww":e=lc(2);break;case"W":e=lc(1,!0);break;case"d":e=ie(k.Date,1);break;case"dd":e=ie(k.Date,2);break;case"c":case"cc":e=ie(k.Day,1);break;case"ccc":e=K(V.Days,U.Abbreviated,ve.Standalone);break;case"cccc":e=K(V.Days,U.Wide,ve.Standalone);break;case"ccccc":e=K(V.Days,U.Narrow,ve.Standalone);break;case"cccccc":e=K(V.Days,U.Short,ve.Standalone);break;case"E":case"EE":case"EEE":e=K(V.Days,U.Abbreviated);break;case"EEEE":e=K(V.Days,U.Wide);break;case"EEEEE":e=K(V.Days,U.Narrow);break;case"EEEEEE":e=K(V.Days,U.Short);break;case"a":case"aa":case"aaa":e=K(V.DayPeriods,U.Abbreviated);break;case"aaaa":e=K(V.DayPeriods,U.Wide);break;case"aaaaa":e=K(V.DayPeriods,U.Narrow);break;case"b":case"bb":case"bbb":e=K(V.DayPeriods,U.Abbreviated,ve.Standalone,!0);break;case"bbbb":e=K(V.DayPeriods,U.Wide,ve.Standalone,!0);break;case"bbbbb":e=K(V.DayPeriods,U.Narrow,ve.Standalone,!0);break;case"B":case"BB":case"BBB":e=K(V.DayPeriods,U.Abbreviated,ve.Format,!0);break;case"BBBB":e=K(V.DayPeriods,U.Wide,ve.Format,!0);break;case"BBBBB":e=K(V.DayPeriods,U.Narrow,ve.Format,!0);break;case"h":e=ie(k.Hours,1,-12);break;case"hh":e=ie(k.Hours,2,-12);break;case"H":e=ie(k.Hours,1);break;case"HH":e=ie(k.Hours,2);break;case"m":e=ie(k.Minutes,1);break;case"mm":e=ie(k.Minutes,2);break;case"s":e=ie(k.Seconds,1);break;case"ss":e=ie(k.Seconds,2);break;case"S":e=ie(k.FractionalSeconds,1);break;case"SS":e=ie(k.FractionalSeconds,2);break;case"SSS":e=ie(k.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=ta(It.Short);break;case"ZZZZZ":e=ta(It.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=ta(It.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=ta(It.Long);break;default:return null}return cc[t]=e,e}(c);l+=d?d(o,n,u):"''"===c?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function Xi(t,e,n){const r=new Date(0);return r.setFullYear(t,e,n),r.setHours(0,0,0),r}function Bt(t,e){const n=function eT(t){return Ie(t)[W.LocaleId]}(t);if(ds[n]=ds[n]||{},ds[n][e])return ds[n][e];let r="";switch(e){case"shortDate":r=Yi(t,xe.Short);break;case"mediumDate":r=Yi(t,xe.Medium);break;case"longDate":r=Yi(t,xe.Long);break;case"fullDate":r=Yi(t,xe.Full);break;case"shortTime":r=Zi(t,xe.Short);break;case"mediumTime":r=Zi(t,xe.Medium);break;case"longTime":r=Zi(t,xe.Long);break;case"fullTime":r=Zi(t,xe.Full);break;case"short":const o=Bt(t,"shortTime"),s=Bt(t,"shortDate");r=ea(Ji(t,xe.Short),[o,s]);break;case"medium":const i=Bt(t,"mediumTime"),a=Bt(t,"mediumDate");r=ea(Ji(t,xe.Medium),[i,a]);break;case"long":const u=Bt(t,"longTime"),l=Bt(t,"longDate");r=ea(Ji(t,xe.Long),[u,l]);break;case"full":const c=Bt(t,"fullTime"),d=Bt(t,"fullDate");r=ea(Ji(t,xe.Full),[c,d])}return r&&(ds[n][e]=r),r}function ea(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(n,r){return null!=e&&r in e?e[r]:n})),t}function at(t,e,n="-",r,o){let s="";(t<0||o&&t<=0)&&(o?t=1-t:(t=-t,s=n));let i=String(t);for(;i.length<e;)i="0"+i;return r&&(i=i.slice(i.length-e)),s+i}function ie(t,e,n=0,r=!1,o=!1){return function(s,i){let a=function mT(t,e){switch(t){case k.FullYear:return e.getFullYear();case k.Month:return e.getMonth();case k.Date:return e.getDate();case k.Hours:return e.getHours();case k.Minutes:return e.getMinutes();case k.Seconds:return e.getSeconds();case k.FractionalSeconds:return e.getMilliseconds();case k.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,s);if((n>0||a>-n)&&(a+=n),t===k.Hours)0===a&&-12===n&&(a=12);else if(t===k.FractionalSeconds)return function gT(t,e){return at(t,3).substring(0,e)}(a,e);const u=We(i,re.MinusSign);return at(a,e,u,r,o)}}function K(t,e,n=ve.Format,r=!1){return function(o,s){return function yT(t,e,n,r,o,s){switch(n){case V.Months:return function rT(t,e,n){const r=Ie(t),s=Qe([r[W.MonthsFormat],r[W.MonthsStandalone]],e);return Qe(s,n)}(e,o,r)[t.getMonth()];case V.Days:return function nT(t,e,n){const r=Ie(t),s=Qe([r[W.DaysFormat],r[W.DaysStandalone]],e);return Qe(s,n)}(e,o,r)[t.getDay()];case V.DayPeriods:const i=t.getHours(),a=t.getMinutes();if(s){const l=function aT(t){const e=Ie(t);return _y(e),(e[W.ExtraData][2]||[]).map(r=>"string"==typeof r?uc(r):[uc(r[0]),uc(r[1])])}(e),c=function uT(t,e,n){const r=Ie(t);_y(r);const s=Qe([r[W.ExtraData][0],r[W.ExtraData][1]],e)||[];return Qe(s,n)||[]}(e,o,r),d=l.findIndex(f=>{if(Array.isArray(f)){const[p,h]=f,g=i>=p.hours&&a>=p.minutes,y=i<h.hours||i===h.hours&&a<h.minutes;if(p.hours<h.hours){if(g&&y)return!0}else if(g||y)return!0}else if(f.hours===i&&f.minutes===a)return!0;return!1});if(-1!==d)return c[d]}return function tT(t,e,n){const r=Ie(t),s=Qe([r[W.DayPeriodsFormat],r[W.DayPeriodsStandalone]],e);return Qe(s,n)}(e,o,r)[i<12?0:1];case V.Eras:return function oT(t,e){return Qe(Ie(t)[W.Eras],e)}(e,r)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,s,t,e,n,r)}}function ta(t){return function(e,n,r){const o=-1*r,s=We(n,re.MinusSign),i=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case It.Short:return(o>=0?"+":"")+at(i,2,s)+at(Math.abs(o%60),2,s);case It.ShortGMT:return"GMT"+(o>=0?"+":"")+at(i,1,s);case It.Long:return"GMT"+(o>=0?"+":"")+at(i,2,s)+":"+at(Math.abs(o%60),2,s);case It.Extended:return 0===r?"Z":(o>=0?"+":"")+at(i,2,s)+":"+at(Math.abs(o%60),2,s);default:throw new Error(`Unknown zone width "${t}"`)}}}!function(t){t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended"}(It||(It={})),function(t){t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day"}(k||(k={})),function(t){t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras"}(V||(V={}));function wy(t){return Xi(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function lc(t,e=!1){return function(n,r){let o;if(e){const s=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,i=n.getDate();o=1+Math.floor((i+s)/7)}else{const s=wy(n),i=function vT(t){const e=Xi(t,0,1).getDay();return Xi(t,0,1+(e<=4?4:11)-e)}(s.getFullYear()),a=s.getTime()-i.getTime();o=1+Math.round(a/6048e5)}return at(o,t,We(r,re.MinusSign))}}function ra(t,e=!1){return function(n,r){return at(wy(n).getFullYear(),t,We(r,re.MinusSign),e)}}const cc={};function Ey(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function Cy(t){return t instanceof Date&&!isNaN(t.valueOf())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const IT=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function fc(t,e,n,r,o,s,i=!1){let a="",u=!1;if(isFinite(t)){let l=function PT(t){let r,o,s,i,a,e=Math.abs(t)+"",n=0;for((o=e.indexOf("."))>-1&&(e=e.replace(".","")),(s=e.search(/e/i))>0?(o<0&&(o=s),o+=+e.slice(s+1),e=e.substring(0,s)):o<0&&(o=e.length),s=0;"0"===e.charAt(s);s++);if(s===(a=e.length))r=[0],o=1;else{for(a--;"0"===e.charAt(a);)a--;for(o-=s,r=[],i=0;s<=a;s++,i++)r[i]=Number(e.charAt(s))}return o>22&&(r=r.splice(0,21),n=o-1,o=1),{digits:r,exponent:n,integerLen:o}}(t);i&&(l=function FT(t){if(0===t.digits[0])return t;const e=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(0===e?t.digits.push(0,0):1===e&&t.digits.push(0),t.integerLen+=2),t}(l));let c=e.minInt,d=e.minFrac,f=e.maxFrac;if(s){const E=s.match(IT);if(null===E)throw new Error(`${s} is not a valid digit info`);const m=E[1],C=E[3],R=E[5];null!=m&&(c=hc(m)),null!=C&&(d=hc(C)),null!=R?f=hc(R):null!=C&&d>f&&(f=d)}!function RT(t,e,n){if(e>n)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);let r=t.digits,o=r.length-t.integerLen;const s=Math.min(Math.max(e,o),n);let i=s+t.integerLen,a=r[i];if(i>0){r.splice(Math.max(t.integerLen,i));for(let d=i;d<r.length;d++)r[d]=0}else{o=Math.max(0,o),t.integerLen=1,r.length=Math.max(1,i=s+1),r[0]=0;for(let d=1;d<i;d++)r[d]=0}if(a>=5)if(i-1<0){for(let d=0;d>i;d--)r.unshift(0),t.integerLen++;r.unshift(1),t.integerLen++}else r[i-1]++;for(;o<Math.max(0,s);o++)r.push(0);let u=0!==s;const l=e+t.integerLen,c=r.reduceRight(function(d,f,p,h){return f+=d,h[p]=f<10?f:f-10,u&&(0===h[p]&&p>=l?h.pop():u=!1),f>=10?1:0},0);c&&(r.unshift(c),t.integerLen++)}(l,d,f);let p=l.digits,h=l.integerLen;const g=l.exponent;let y=[];for(u=p.every(E=>!E);h<c;h++)p.unshift(0);for(;h<0;h++)p.unshift(0);h>0?y=p.splice(h,p.length):(y=p,p=[0]);const v=[];for(p.length>=e.lgSize&&v.unshift(p.splice(-e.lgSize,p.length).join(""));p.length>e.gSize;)v.unshift(p.splice(-e.gSize,p.length).join(""));p.length&&v.unshift(p.join("")),a=v.join(We(n,r)),y.length&&(a+=We(n,o)+y.join("")),g&&(a+=We(n,re.Exponential)+"+"+g)}else a=We(n,re.Infinity);return a=t<0&&!u?e.negPre+a+e.negSuf:e.posPre+a+e.posSuf,a}function ST(t,e,n,r,o){const i=pc(ac(e,cs.Currency),We(e,re.MinusSign));return i.minFrac=function dT(t){let e;const n=Dy[t];return n&&(e=n[2]),"number"==typeof e?e:2}(r),i.maxFrac=i.minFrac,fc(t,i,e,re.CurrencyGroup,re.CurrencyDecimal,o).replace("\xa4",n).replace("\xa4","").trim()}function pc(t,e="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=t.split(";"),o=r[0],s=r[1],i=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],a=i[0],u=i[1]||"";n.posPre=a.substring(0,a.indexOf("#"));for(let c=0;c<u.length;c++){const d=u.charAt(c);"0"===d?n.minFrac=n.maxFrac=c+1:"#"===d?n.maxFrac=c+1:n.posSuf+=d}const l=a.split(",");if(n.gSize=l[1]?l[1].length:0,n.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){const c=o.length-n.posPre.length-n.posSuf.length,d=s.indexOf("#");n.negPre=s.substring(0,d).replace(/'/g,""),n.negSuf=s.slice(d+c).replace(/'/g,"")}else n.negPre=e+n.posPre,n.negSuf=n.posSuf;return n}function hc(t){const e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hn{}function by(t,e,n,r){let o=`=${t}`;if(e.indexOf(o)>-1||(o=n.getPluralCategory(t,r),e.indexOf(o)>-1))return o;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${t}"`)}Hn.\u0275fac=function(e){return new(e||Hn)},Hn.\u0275prov=I({token:Hn,factory:function(e){let n=null;return e?n=new e:(r=w(kt),n=new Jr(r)),n;var r},providedIn:"root"});class Jr extends Hn{constructor(e){super(),this.locale=e}getPluralCategory(e,n){switch(iT(n||this.locale)(e)){case Bn.Zero:return"zero";case Bn.One:return"one";case Bn.Two:return"two";case Bn.Few:return"few";case Bn.Many:return"many";default:return"other"}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ty(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const r=n.indexOf("="),[o,s]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(s)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Jr.\u0275fac=function(e){return new(e||Jr)(w(kt))},Jr.\u0275prov=I({token:Jr,factory:Jr.\u0275fac});class ps{constructor(e,n,r,o){this._iterableDiffers=e,this._keyValueDiffers=n,this._ngEl=r,this._renderer=o,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Qo(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachChangedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachRemovedItem(n=>{n.previousValue&&this._toggleClass(n.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(n=>{if("string"!=typeof n.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${z(n.item)}`);this._toggleClass(n.item,!0)}),e.forEachRemovedItem(n=>this._toggleClass(n.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!0)):Object.keys(e).forEach(n=>this._toggleClass(n,!!e[n])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!1)):Object.keys(e).forEach(n=>this._toggleClass(n,!1)))}_toggleClass(e,n){(e=e.trim())&&e.split(/\s+/g).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}}ps.\u0275fac=function(e){return new(e||ps)(N(it),N(qe),N(Ln),N(xl))},ps.\u0275dir=He({type:ps,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hs{constructor(e){this._viewContainerRef=e,this.ngComponentOutlet=null}ngOnChanges(e){const{_viewContainerRef:n,ngComponentOutletNgModule:r,ngComponentOutletNgModuleFactory:o}=this;if(n.clear(),this._componentRef=void 0,this.ngComponentOutlet){const s=this.ngComponentOutletInjector||n.parentInjector;(e.ngComponentOutletNgModule||e.ngComponentOutletNgModuleFactory)&&(this._moduleRef&&this._moduleRef.destroy(),this._moduleRef=r?function r0(t,e){return new im(t,e??null)}(r,Ay(s)):o?o.create(Ay(s)):void 0),this._componentRef=n.createComponent(this.ngComponentOutlet,{index:n.length,injector:s,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}function Ay(t){return t.get(On).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */hs.\u0275fac=function(e){return new(e||hs)(N(st))},hs.\u0275dir=He({type:hs,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},features:[Ys]});class OT{constructor(e,n,r,o){this.$implicit=e,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class Xr{constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const n=this._viewContainer;e.forEachOperation((r,o,s)=>{if(null==r.previousIndex)n.createEmbeddedView(this._template,new OT(r.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)n.remove(null===o?void 0:o);else if(null!==o){const i=n.get(o);n.move(i,s),Sy(i,r)}});for(let r=0,o=n.length;r<o;r++){const i=n.get(r).context;i.index=r,i.count=o,i.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{Sy(n.get(r.currentIndex),r)})}static ngTemplateContextGuard(e,n){return!0}}function Sy(t,e){t.context.$implicit=e.item}Xr.\u0275fac=function(e){return new(e||Xr)(N(st),N(Et),N(it))},Xr.\u0275dir=He({type:Xr,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class eo{constructor(e,n){this._viewContainer=e,this._context=new LT,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){xy("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){xy("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}}eo.\u0275fac=function(e){return new(e||eo)(N(st),N(Et))},eo.\u0275dir=He({type:eo,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}});class LT{constructor(){this.$implicit=null,this.ngIf=null}}function xy(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${z(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gc{constructor(e,n){this._viewContainerRef=e,this._templateRef=n,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}class $n{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const n=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let n=0;n<this._defaultViews.length;n++)this._defaultViews[n].enforceState(e)}}}$n.\u0275fac=function(e){return new(e||$n)},$n.\u0275dir=He({type:$n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}});class gs{constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new gc(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}gs.\u0275fac=function(e){return new(e||gs)(N(st),N(Et),N($n,9))},gs.\u0275dir=He({type:gs,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}});class ms{constructor(e,n,r){r._addDefault(new gc(e,n))}}ms.\u0275fac=function(e){return new(e||ms)(N(st),N(Et),N($n,9))},ms.\u0275dir=He({type:ms,selectors:[["","ngSwitchDefault",""]]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class to{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,n){this._caseViews[e]=n}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),n=by(this._switchValue,e,this._localization);this._activateView(this._caseViews[n])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}to.\u0275fac=function(e){return new(e||to)(N(Hn))},to.\u0275dir=He({type:to,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}});class ys{constructor(e,n,r,o){this.value=e;const s=!isNaN(Number(e));o.addCase(s?`=${e}`:e,new gc(r,n))}}ys.\u0275fac=function(e){return new(e||ys)(Xa("ngPluralCase"),N(Et),N(st),N(to,1))},ys.\u0275dir=He({type:ys,selectors:[["","ngPluralCase",""]]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ds{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){const[r,o]=e.split(".");null!=(n=null!=n&&o?`${n}${o}`:n)?this._renderer.setStyle(this._ngEl.nativeElement,r,n):this._renderer.removeStyle(this._ngEl.nativeElement,r)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}}Ds.\u0275fac=function(e){return new(e||Ds)(N(Ln),N(qe),N(xl))},Ds.\u0275dir=He({type:Ds,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vs{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(e.ngTemplateOutlet||e.ngTemplateOutletInjector){const n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:r,ngTemplateOutletContext:o,ngTemplateOutletInjector:s}=this;this._viewRef=n.createEmbeddedView(r,o,s?{injector:s}:void 0)}else this._viewRef=null}else this._viewRef&&e.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}vs.\u0275fac=function(e){return new(e||vs)(N(st))},vs.\u0275dir=He({type:vs,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ys]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ut(t,e){return new F(2100,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const jT=new class VT{createSubscription(e,n){return e.then(n,r=>{throw r})}dispose(e){}},BT=new class kT{createSubscription(e,n){return e.subscribe({next:n,error:r=>{throw r}})}dispose(e){e.unsubscribe()}};class Un{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(vl(e))return jT;if(Ph(e))return BT;throw ut()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}}Un.\u0275fac=function(e){return new(e||Un)(N(sy,16))},Un.\u0275pipe=Ae({name:"async",type:Un,pure:!1});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Gn{transform(e){if(null==e)return null;if("string"!=typeof e)throw ut();return e.toLowerCase()}}Gn.\u0275fac=function(e){return new(e||Gn)},Gn.\u0275pipe=Ae({name:"lowercase",type:Gn,pure:!0});const HT=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class zn{transform(e){if(null==e)return null;if("string"!=typeof e)throw ut();return e.replace(HT,n=>n[0].toUpperCase()+n.slice(1).toLowerCase())}}zn.\u0275fac=function(e){return new(e||zn)},zn.\u0275pipe=Ae({name:"titlecase",type:zn,pure:!0});class qn{transform(e){if(null==e)return null;if("string"!=typeof e)throw ut();return e.toUpperCase()}}qn.\u0275fac=function(e){return new(e||qn)},qn.\u0275pipe=Ae({name:"uppercase",type:qn,pure:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $T=new P("DATE_PIPE_DEFAULT_TIMEZONE");class Wn{constructor(e,n){this.locale=e,this.defaultTimezone=n}transform(e,n="mediumDate",r,o){if(null==e||""===e||e!=e)return null;try{return hT(e,n,o||this.locale,r??this.defaultTimezone??void 0)}catch(s){throw ut(0,s.message)}}}Wn.\u0275fac=function(e){return new(e||Wn)(N(kt,16),N($T,24))},Wn.\u0275pipe=Ae({name:"date",type:Wn,pure:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const UT=/#/g;class Qn{constructor(e){this._localization=e}transform(e,n,r){if(null==e)return"";if("object"!=typeof n||null===n)throw ut();return n[by(e,Object.keys(n),this._localization,r)].replace(UT,e.toString())}}Qn.\u0275fac=function(e){return new(e||Qn)(N(Hn,16))},Qn.\u0275pipe=Ae({name:"i18nPlural",type:Qn,pure:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Kn{transform(e,n){if(null==e)return"";if("object"!=typeof n||"string"!=typeof e)throw ut();return n.hasOwnProperty(e)?n[e]:n.hasOwnProperty("other")?n.other:""}}Kn.\u0275fac=function(e){return new(e||Kn)},Kn.\u0275pipe=Ae({name:"i18nSelect",type:Kn,pure:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _s{transform(e){return JSON.stringify(e,null,2)}}_s.\u0275fac=function(e){return new(e||_s)},_s.\u0275pipe=Ae({name:"json",type:_s,pure:!1});class ws{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=Ny}transform(e,n=Ny){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const r=this.differ.diff(e),o=n!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(s=>{this.keyValues.push(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function GT(t,e){return{key:t,value:e}}(s.key,s.currentValue))})),(r||o)&&(this.keyValues.sort(n),this.compareFn=n),this.keyValues}}function Ny(t,e){const n=t.key,r=e.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),s=String(r);return o==s?0:o<s?-1:1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ws.\u0275fac=function(e){return new(e||ws)(N(qe,16))},ws.\u0275pipe=Ae({name:"keyvalue",type:ws,pure:!1});class Yn{constructor(e){this._locale=e}transform(e,n,r){if(!mc(e))return null;r=r||this._locale;try{return function NT(t,e,n){return fc(t,pc(ac(e,cs.Decimal),We(e,re.MinusSign)),e,re.Group,re.Decimal,n)}(yc(e),r,n)}catch(o){throw ut(0,o.message)}}}Yn.\u0275fac=function(e){return new(e||Yn)(N(kt,16))},Yn.\u0275pipe=Ae({name:"number",type:Yn,pure:!0});class Zn{constructor(e){this._locale=e}transform(e,n,r){if(!mc(e))return null;r=r||this._locale;try{return function xT(t,e,n){return fc(t,pc(ac(e,cs.Percent),We(e,re.MinusSign)),e,re.Group,re.Decimal,n,!0).replace(new RegExp("%","g"),We(e,re.PercentSign))}(yc(e),r,n)}catch(o){throw ut(0,o.message)}}}Zn.\u0275fac=function(e){return new(e||Zn)(N(kt,16))},Zn.\u0275pipe=Ae({name:"percent",type:Zn,pure:!0});class Jn{constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,r="symbol",o,s){if(!mc(e))return null;s=s||this._locale,"boolean"==typeof r&&(r=r?"symbol":"code");let i=n||this._defaultCurrencyCode;"code"!==r&&(i="symbol"===r||"symbol-narrow"===r?lT(i,"symbol"===r?"wide":"narrow",s):r);try{return ST(yc(e),s,i,n,o)}catch(a){throw ut(0,a.message)}}}function mc(t){return!(null==t||""===t||t!=t)}function yc(t){if("string"==typeof t&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if("number"!=typeof t)throw new Error(`${t} is not a number`);return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Jn.\u0275fac=function(e){return new(e||Jn)(N(kt,16),N(pb,16))},Jn.\u0275pipe=Ae({name:"currency",type:Jn,pure:!0});class Xn{transform(e,n,r){if(null==e)return null;if(!this.supports(e))throw ut();return e.slice(n,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}Xn.\u0275fac=function(e){return new(e||Xn)},Xn.\u0275pipe=Ae({name:"slice",type:Xn,pure:!1});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class no{}no.\u0275fac=function(e){return new(e||no)},no.\u0275mod=dt({type:no}),no.\u0275inj=Ye({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fy="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Fl("14.0.2");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Py{}Py.\u0275prov=I({token:Py,providedIn:"root",factory:()=>new QT(w(ee),window)});class QT{constructor(e,n){this.document=e,this.window=n,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;const n=function KT(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const r=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const s=o.shadowRoot;if(s){const i=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(i)return i}o=r.nextNode()}}return null}(this.document,e);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=e)}}scrollToElement(e){const n=e.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(r-s[0],o-s[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const e=Ry(this.window.history)||Ry(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Ry(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Oy{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.0.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Dc extends class YT extends class Qb{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Wb(t){Ki||(Ki=t)}(new Dc)}onAndCancel(e,n,r){return e.addEventListener(n,r,!1),()=>{e.removeEventListener(n,r,!1)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return(n=n||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return"window"===n?window:"document"===n?e:"body"===n?e.body:null}getBaseHref(e){const n=function ZT(){return Es=Es||document.querySelector("base"),Es?Es.getAttribute("href"):null}();return null==n?null:function JT(t){sa=sa||document.createElement("a"),sa.setAttribute("href",t);const e=sa.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Es=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ty(document.cookie,e)}}let sa,Es=null;const Ly=new P("TRANSITION_ID");const eA=[{provide:Bm,useFactory:function XT(t,e,n){return()=>{n.get(Lt).donePromise.then(()=>{const r=Vt(),o=e.querySelectorAll(`style[ng-transition="${t}"]`);for(let s=0;s<o.length;s++)r.remove(o[s])})}},deps:[Ly,ee,de],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ro{build(){return new XMLHttpRequest}}ro.\u0275fac=function(e){return new(e||ro)},ro.\u0275prov=I({token:ro,factory:ro.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Cs=new P("EventManagerPlugins");class Ht{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>r.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}addGlobalEventListener(e,n,r){return this._findPluginFor(n).addGlobalEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){const n=this._eventNameToPlugin.get(e);if(n)return n;const r=this._plugins;for(let o=0;o<r.length;o++){const s=r[o];if(s.supports(e))return this._eventNameToPlugin.set(e,s),s}throw new Error(`No event manager plugin found for event ${e}`)}}Ht.\u0275fac=function(e){return new(e||Ht)(w(Cs),w(fe))},Ht.\u0275prov=I({token:Ht,factory:Ht.\u0275fac});class vc{constructor(e){this._doc=e}addGlobalEventListener(e,n,r){const o=Vt().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class er{constructor(){this._stylesSet=new Set}addStyles(e){const n=new Set;e.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),n.add(r))}),this.onStylesAdded(n)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}er.\u0275fac=function(e){return new(e||er)},er.\u0275prov=I({token:er,factory:er.\u0275fac});class bt extends er{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,n,r){e.forEach(o=>{const s=this._doc.createElement("style");s.textContent=o,r.push(n.appendChild(s))})}addHost(e){const n=[];this._addStylesToHost(this._stylesSet,e,n),this._hostNodes.set(e,n)}removeHost(e){const n=this._hostNodes.get(e);n&&n.forEach(ky),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((n,r)=>{this._addStylesToHost(e,r,n)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(ky))}}function ky(t){Vt().remove(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */bt.\u0275fac=function(e){return new(e||bt)(w(ee))},bt.\u0275prov=I({token:bt,factory:bt.\u0275fac});const _c={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},wc=/%COMP%/g,nA="_nghost-%COMP%",rA="_ngcontent-%COMP%";function ia(t,e,n){for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)?ia(t,o,n):(o=o.replace(wc,t),n.push(o))}return n}function By(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}class dn{constructor(e,n,r){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new Ec(e)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;switch(n.encapsulation){case At.Emulated:{let r=this.rendererByCompId.get(n.id);return r||(r=new aA(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,r)),r.applyToHost(e),r}case 1:case At.ShadowDom:return new uA(this.eventManager,this.sharedStylesHost,e,n);default:if(!this.rendererByCompId.has(n.id)){const r=ia(n.id,n.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}dn.\u0275fac=function(e){return new(e||dn)(w(Ht),w(bt),w(Qr))},dn.\u0275prov=I({token:dn,factory:dn.\u0275fac});class Ec{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,n){return n?document.createElementNS(_c[n]||n,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,n){($y(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&($y(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;const s=_c[o];s?e.setAttributeNS(s,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){const o=_c[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(Xt.DashCase|Xt.Important)?e.style.setProperty(n,r,o&Xt.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&Xt.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e[n]=r}setValue(e,n){e.nodeValue=n}listen(e,n,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,n,By(r)):this.eventManager.addEventListener(e,n,By(r))}}"@".charCodeAt(0);function $y(t){return"TEMPLATE"===t.tagName&&void 0!==t.content}class aA extends Ec{constructor(e,n,r,o){super(e),this.component=r;const s=ia(o+"-"+r.id,r.styles,[]);n.addStyles(s),this.contentAttr=function oA(t){return rA.replace(wc,t)}(o+"-"+r.id),this.hostAttr=function sA(t){return nA.replace(wc,t)}(o+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,n){const r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}class uA extends Ec{constructor(e,n,r,o){super(e),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=ia(o.id,o.styles,[]);for(let i=0;i<s.length;i++){const a=document.createElement("style");a.textContent=s[i],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oo extends vc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}}oo.\u0275fac=function(e){return new(e||oo)(w(ee))},oo.\u0275prov=I({token:oo,factory:oo.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Uy=["alt","control","meta","shift"],cA={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Gy={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},dA={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};class Ke extends vc{constructor(e){super(e)}supports(e){return null!=Ke.parseEventName(e)}addEventListener(e,n,r){const o=Ke.parseEventName(n),s=Ke.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Vt().onAndCancel(e,o.domEventName,s))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=Ke._normalizeKey(n.pop());let s="";if(Uy.forEach(a=>{const u=n.indexOf(a);u>-1&&(n.splice(u,1),s+=a+".")}),s+=o,0!=n.length||0===o.length)return null;const i={};return i.domEventName=r,i.fullKey=s,i}static getEventFullKey(e){let n="",r=function fA(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&Gy.hasOwnProperty(e)&&(e=Gy[e]))}return cA[e]||e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);return r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),Uy.forEach(o=>{o!=r&&dA[o](e)&&(n+=o+".")}),n+=r,n}static eventCallback(e,n,r){return o=>{Ke.getEventFullKey(o)===e&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return"esc"===e?"escape":e}}Ke.\u0275fac=function(e){return new(e||Ke)(w(ee))},Ke.\u0275prov=I({token:Ke,factory:Ke.\u0275fac});const zy=[{provide:Yl,useValue:Fy},{provide:$m,useValue:function pA(){Dc.makeCurrent()},multi:!0},{provide:ee,useFactory:function gA(){return function wv(t){La=t}(document),document},deps:[]}],mA=Ym(zb,"browser",zy),qy=new P(""),Wy=[{provide:zi,useClass:class tA{addToWindow(e){$.getAngularTestability=(r,o=!0)=>{const s=e.findTestabilityInTree(r,o);if(null==s)throw new Error("Could not find testability for element.");return s},$.getAllAngularTestabilities=()=>e.getAllTestabilities(),$.getAllAngularRootElements=()=>e.getAllRootElements();$.frameworkStabilizers||($.frameworkStabilizers=[]),$.frameworkStabilizers.push(r=>{const o=$.getAllAngularTestabilities();let s=o.length,i=!1;const a=function(u){i=i||u,s--,0==s&&r(i)};o.forEach(function(u){u.whenStable(a)})})}findTestabilityInTree(e,n,r){if(null==n)return null;return e.getTestability(n)??(r?Vt().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null)}},deps:[]},{provide:qm,useClass:on,deps:[fe,sn,zi]},{provide:on,useClass:on,deps:[fe,sn,zi]}],Qy=[{provide:Ou,useValue:"root"},{provide:Cr,useFactory:function hA(){return new Cr},deps:[]},{provide:Cs,useClass:oo,multi:!0,deps:[ee,fe,Yl]},{provide:Cs,useClass:Ke,multi:!0,deps:[ee]},{provide:dn,useClass:dn,deps:[Ht,bt,Qr]},{provide:om,useExisting:dn},{provide:er,useExisting:bt},{provide:bt,useClass:bt,deps:[ee]},{provide:Ht,useClass:Ht,deps:[Cs,fe]},{provide:Oy,useClass:ro,deps:[]},[]];class fn{constructor(e){false}static withServerTransition(e){return{ngModule:fn,providers:[{provide:Qr,useValue:e.appId},{provide:Ly,useExisting:Qr},eA]}}}fn.\u0275fac=function(e){return new(e||fn)(w(qy,12))},fn.\u0275mod=dt({type:fn}),fn.\u0275inj=Ye({providers:[...Qy,...Wy],imports:[no,Kr]});class Ms{constructor(e){this._doc=e,this._dom=Vt()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((r,o)=>(o&&r.push(this._getOrCreateElement(o,n)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);const r=this.getTag(n);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){const s=this._parseSelector(e),i=this.getTags(s).filter(a=>this._containsAttributes(e,a))[0];if(void 0!==i)return i}const r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(r=>n.setAttribute(this._getMetaKeyMap(r),e[r])),n}_parseSelector(e){const n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(r=>n.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return DA[e]||e}}Ms.\u0275fac=function(e){return new(e||Ms)(w(ee))},Ms.\u0275prov=I({token:Ms,factory:function(e){let n=null;return n=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yA(){return new Ms(w(ee))}(),n},providedIn:"root"});const DA={httpEquiv:"http-equiv"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Is{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}Is.\u0275fac=function(e){return new(e||Is)(w(ee))},Is.\u0275prov=I({token:Is,factory:function(e){let n=null;return n=e?new e:function vA(){return new Is(w(ee))}(),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
typeof window<"u"&&window;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $t{constructor(){this.store={},this.onSerializeCallbacks={}}static init(e){const n=new $t;return n.store=e,n}get(e,n){return void 0!==this.store[e]?this.store[e]:n}set(e,n){this.store[e]=n}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}onSerialize(e,n){this.onSerializeCallbacks[e]=n}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(n){console.warn("Exception in onSerialize callback: ",n)}return JSON.stringify(this.store)}}$t.\u0275fac=function(e){return new(e||$t)},$t.\u0275prov=I({token:$t,factory:$t.\u0275fac});class bs{}bs.\u0275fac=function(e){return new(e||bs)},bs.\u0275mod=dt({type:bs}),bs.\u0275inj=Ye({providers:[{provide:$t,useFactory:function IA(t,e){const n=t.getElementById(e+"-state");let r={};if(n&&n.textContent)try{r=JSON.parse(function MA(t){const e={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return t.replace(/&[^;]+;/g,n=>e[n])}(n.textContent))}catch(o){console.warn("Exception while restoring TransferState for app "+e,o)}return $t.init(r)},deps:[ee,Qr]}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const TA={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Ic=new P("HammerGestureConfig"),Zy=new P("HammerLoader");class so{constructor(){this.events=[],this.overrides={}}buildHammer(e){const n=new Hammer(e,this.options);n.get("pinch").set({enable:!0}),n.get("rotate").set({enable:!0});for(const r in this.overrides)n.get(r).set(this.overrides[r]);return n}}so.\u0275fac=function(e){return new(e||so)},so.\u0275prov=I({token:so,factory:so.\u0275fac});class io extends vc{constructor(e,n,r,o){super(e),this._config=n,this.console=r,this.loader=o,this._loaderPromise=null}supports(e){return!(!TA.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,n,r){const o=this.manager.getZone();if(n=n.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||o.runOutsideAngular(()=>this.loader());let s=!1,i=()=>{s=!0};return o.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?s||(i=this.addEventListener(e,n,r)):i=()=>{}}).catch(()=>{i=()=>{}})),()=>{i()}}return o.runOutsideAngular(()=>{const s=this._config.buildHammer(e),i=function(a){o.runGuarded(function(){r(a)})};return s.on(n,i),()=>{s.off(n,i),"function"==typeof s.destroy&&s.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}io.\u0275fac=function(e){return new(e||io)(w(ee),w(Ic),w(kn),w(Zy,8))},io.\u0275prov=I({token:io,factory:io.\u0275fac});class Ts{}Ts.\u0275fac=function(e){return new(e||Ts)},Ts.\u0275mod=dt({type:Ts}),Ts.\u0275inj=Ye({providers:[{provide:Cs,useClass:io,multi:!0,deps:[ee,Ic,kn,[new Po,Zy]]},{provide:Ic,useClass:so,deps:[]}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ao{}ao.\u0275fac=function(e){return new(e||ao)},ao.\u0275prov=I({token:ao,factory:function(e){let n=null;return n=e?new(e||ao):w(uo),n},providedIn:"root"});class uo extends ao{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case je.NONE:return n;case je.HTML:return ht(n,"HTML")?Ve(n):Af(this._doc,String(n)).toString();case je.STYLE:return ht(n,"Style")?Ve(n):n;case je.SCRIPT:if(ht(n,"Script"))return Ve(n);throw new Error("unsafe value used in a script context");case je.URL:_f(n);return ht(n,"URL")?Ve(n):ko(String(n));case je.RESOURCE_URL:if(ht(n,"ResourceURL"))return Ve(n);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return function B_(t){return new O_(t)}(e)}bypassSecurityTrustStyle(e){return function H_(t){return new L_(t)}(e)}bypassSecurityTrustScript(e){return function $_(t){return new k_(t)}(e)}bypassSecurityTrustUrl(e){return function U_(t){return new V_(t)}(e)}bypassSecurityTrustResourceUrl(e){return function G_(t){return new j_(t)}(e)}}uo.\u0275fac=function(e){return new(e||uo)(w(ee))},uo.\u0275prov=I({token:uo,factory:function(e){let n=null;return n=e?new e:function AA(t){return new uo(t.get(ee))}(w(de)),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Fl("14.0.2");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.0.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Jy{}class Xy{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ut{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),s=o.toLowerCase(),i=n.slice(r+1).trim();this.maybeSetNormalizedName(o,s),this.headers.has(s)?this.headers.get(s).push(i):this.headers.set(s,[i])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(n=>{let r=e[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof Ut?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){const n=new Ut;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Ut?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){const n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,n);const o=("a"===e.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const s=e.value;if(s){let i=this.headers.get(n);if(!i)return;i=i.filter(a=>-1===s.indexOf(a)),0===i.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,i)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class FA{encodeKey(e){return eD(e)}encodeValue(e){return eD(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const RA=/%(\d[a-f0-9])/gi,OA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function eD(t){return encodeURIComponent(t).replace(RA,(e,n)=>OA[n]??e)}function aa(t){return`${t}`}class hn{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new FA,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function PA(t,e){const n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{const s=o.indexOf("="),[i,a]=-1==s?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,s)),e.decodeValue(o.slice(s+1))],u=n.get(i)||[];u.push(a),n.set(i,u)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{const r=e.fromObject[n],o=Array.isArray(r)?r.map(aa):[aa(r)];this.map.set(n,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){const n=[];return Object.keys(e).forEach(r=>{const o=e[r];Array.isArray(o)?o.forEach(s=>{n.push({param:r,value:s,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const n=new hn({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const n=("a"===e.op?this.map.get(e.param):void 0)||[];n.push(aa(e.value)),this.map.set(e.param,n);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const o=r.indexOf(aa(e.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class LA{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function nD(t){return typeof Blob<"u"&&t instanceof Blob}function rD(t){return typeof FormData<"u"&&t instanceof FormData}class As{constructor(e,n,r,o){let s;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function kA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,s=o):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new Ut),this.context||(this.context=new LA),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=n;else{const a=n.indexOf("?"),u=-1===a?"?":a<n.length-1?"&":"";this.urlWithParams=n+u+i}}else this.params=new hn,this.urlWithParams=n}serializeBody(){return null===this.body?null:tD(this.body)||nD(this.body)||rD(this.body)||function VA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof hn?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||rD(this.body)?null:nD(this.body)?this.body.type||null:tD(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof hn?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const n=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,s=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let u=e.headers||this.headers,l=e.params||this.params;const c=e.context??this.context;return void 0!==e.setHeaders&&(u=Object.keys(e.setHeaders).reduce((d,f)=>d.set(f,e.setHeaders[f]),u)),e.setParams&&(l=Object.keys(e.setParams).reduce((d,f)=>d.set(f,e.setParams[f]),l)),new As(n,r,s,{params:l,headers:u,context:c,reportProgress:a,responseType:o,withCredentials:i})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var gn;!function(t){t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User"}(gn||(gn={}));class bc{constructor(e,n=200,r="OK"){this.headers=e.headers||new Ut,this.status=void 0!==e.status?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Tc extends bc{constructor(e={}){super(e),this.type=gn.ResponseHeader}clone(e={}){return new Tc({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class Ss extends bc{constructor(e={}){super(e),this.type=gn.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new Ss({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class ua extends bc{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ac(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}class tr{constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof As)o=e;else{let a,u;a=r.headers instanceof Ut?r.headers:new Ut(r.headers),r.params&&(u=r.params instanceof hn?r.params:new hn({fromObject:r.params})),o=new As(e,n,void 0!==r.body?r.body:null,{headers:a,context:r.context,params:u,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const s=function SA(...t){return Da(t,ld(t))}(o).pipe(function xA(t,e){return J(e)?js(t,e,1):js(t,1)}(a=>this.handler.handle(a)));if(e instanceof As||"events"===r.observe)return s;const i=s.pipe(function NA(t,e){return zt((n,r)=>{let o=0;n.subscribe(vn(r,s=>t.call(e,s,o++)&&r.next(s)))})}(a=>a instanceof Ss));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return i.pipe(Do(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return i.pipe(Do(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return i.pipe(Do(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return i.pipe(Do(a=>a.body))}case"response":return i;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:(new hn).append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Ac(r,n))}post(e,n,r={}){return this.request("POST",e,Ac(r,n))}put(e,n,r={}){return this.request("PUT",e,Ac(r,n))}}tr.\u0275fac=function(e){return new(e||tr)(w(Jy))},tr.\u0275prov=I({token:tr,factory:tr.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class oD{constructor(e,n){this.next=e,this.interceptor=n}handle(e){return this.interceptor.intercept(e,this.next)}}const Sc=new P("HTTP_INTERCEPTORS");class lo{intercept(e,n){return n.handle(e)}}lo.\u0275fac=function(e){return new(e||lo)},lo.\u0275prov=I({token:lo,factory:lo.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let xc,jA=0;class sD{}class nr{constructor(e,n){this.callbackMap=e,this.document=n,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+jA++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new oe(n=>{const r=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),s=this.document.createElement("script");s.src=o;let i=null,a=!1;this.callbackMap[r]=d=>{delete this.callbackMap[r],i=d,a=!0};const u=()=>{s.parentNode&&s.parentNode.removeChild(s),delete this.callbackMap[r]};return s.addEventListener("load",d=>{this.resolvedPromise.then(()=>{u(),a?(n.next(new Ss({body:i,status:200,statusText:"OK",url:o})),n.complete()):n.error(new ua({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),s.addEventListener("error",d=>{u(),n.error(new ua({error:d,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(s),n.next({type:gn.Sent}),()=>{a||this.removeListeners(s),u()}})}removeListeners(e){xc||(xc=this.document.implementation.createHTMLDocument()),xc.adoptNode(e)}}nr.\u0275fac=function(e){return new(e||nr)(w(sD),w(ee))},nr.\u0275prov=I({token:nr,factory:nr.\u0275fac});class co{constructor(e){this.jsonp=e}intercept(e,n){return"JSONP"===e.method?this.jsonp.handle(e):n.handle(e)}}co.\u0275fac=function(e){return new(e||co)(w(nr))},co.\u0275prov=I({token:co,factory:co.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const GA=/^\)\]\}',?\n/;class rr{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new oe(n=>{const r=this.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((f,p)=>r.setRequestHeader(f,p.join(","))),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const f=e.detectContentTypeHeader();null!==f&&r.setRequestHeader("Content-Type",f)}if(e.responseType){const f=e.responseType.toLowerCase();r.responseType="json"!==f?f:"text"}const o=e.serializeBody();let s=null;const i=()=>{if(null!==s)return s;const f=r.statusText||"OK",p=new Ut(r.getAllResponseHeaders()),h=function zA(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(r)||e.url;return s=new Tc({headers:p,status:r.status,statusText:f,url:h}),s},a=()=>{let{headers:f,status:p,statusText:h,url:g}=i(),y=null;204!==p&&(y=typeof r.response>"u"?r.responseText:r.response),0===p&&(p=y?200:0);let v=p>=200&&p<300;if("json"===e.responseType&&"string"==typeof y){const E=y;y=y.replace(GA,"");try{y=""!==y?JSON.parse(y):null}catch(m){y=E,v&&(v=!1,y={error:m,text:y})}}v?(n.next(new Ss({body:y,headers:f,status:p,statusText:h,url:g||void 0})),n.complete()):n.error(new ua({error:y,headers:f,status:p,statusText:h,url:g||void 0}))},u=f=>{const{url:p}=i(),h=new ua({error:f,status:r.status||0,statusText:r.statusText||"Unknown Error",url:p||void 0});n.error(h)};let l=!1;const c=f=>{l||(n.next(i()),l=!0);let p={type:gn.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),"text"===e.responseType&&!!r.responseText&&(p.partialText=r.responseText),n.next(p)},d=f=>{let p={type:gn.UploadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),n.next(p)};return r.addEventListener("load",a),r.addEventListener("error",u),r.addEventListener("timeout",u),r.addEventListener("abort",u),e.reportProgress&&(r.addEventListener("progress",c),null!==o&&r.upload&&r.upload.addEventListener("progress",d)),r.send(o),n.next({type:gn.Sent}),()=>{r.removeEventListener("error",u),r.removeEventListener("abort",u),r.removeEventListener("load",a),r.removeEventListener("timeout",u),e.reportProgress&&(r.removeEventListener("progress",c),null!==o&&r.upload&&r.upload.removeEventListener("progress",d)),r.readyState!==r.DONE&&r.abort()}})}}rr.\u0275fac=function(e){return new(e||rr)(w(Oy))},rr.\u0275prov=I({token:rr,factory:rr.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Nc=new P("XSRF_COOKIE_NAME"),Fc=new P("XSRF_HEADER_NAME");class iD{}class fo{constructor(e,n,r){this.doc=e,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ty(e,this.cookieName),this.lastCookieString=e),this.lastToken}}fo.\u0275fac=function(e){return new(e||fo)(w(ee),w(Yl),w(Nc))},fo.\u0275prov=I({token:fo,factory:fo.\u0275fac});class mn{constructor(e,n){this.tokenService=e,this.headerName=n}intercept(e,n){const r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return n.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),n.handle(e)}}mn.\u0275fac=function(e){return new(e||mn)(w(iD),w(Fc))},mn.\u0275prov=I({token:mn,factory:mn.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class po{constructor(e,n){this.backend=e,this.injector=n,this.chain=null}handle(e){if(null===this.chain){const n=this.injector.get(Sc,[]);this.chain=n.reduceRight((r,o)=>new oD(r,o),this.backend)}return this.chain.handle(e)}}po.\u0275fac=function(e){return new(e||po)(w(Xy),w(de))},po.\u0275prov=I({token:po,factory:po.\u0275fac});class Gt{static disable(){return{ngModule:Gt,providers:[{provide:mn,useClass:lo}]}}static withOptions(e={}){return{ngModule:Gt,providers:[e.cookieName?{provide:Nc,useValue:e.cookieName}:[],e.headerName?{provide:Fc,useValue:e.headerName}:[]]}}}Gt.\u0275fac=function(e){return new(e||Gt)},Gt.\u0275mod=dt({type:Gt}),Gt.\u0275inj=Ye({providers:[mn,{provide:Sc,useExisting:mn,multi:!0},{provide:iD,useClass:fo},{provide:Nc,useValue:"XSRF-TOKEN"},{provide:Fc,useValue:"X-XSRF-TOKEN"}]});class ho{}ho.\u0275fac=function(e){return new(e||ho)},ho.\u0275mod=dt({type:ho}),ho.\u0275inj=Ye({providers:[tr,{provide:Jy,useClass:po},rr,{provide:Xy,useExisting:rr}],imports:[Gt.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]});class xs{}xs.\u0275fac=function(e){return new(e||xs)},xs.\u0275mod=dt({type:xs}),xs.\u0275inj=Ye({providers:[nr,{provide:sD,useFactory:function qA(){return"object"==typeof window?window:{}}},{provide:Sc,useClass:co,multi:!0}]});const aD_production=!1,aD_endpointUri="https://localhost:44323/";class or{constructor(e){this.http=e}getUsers(){return this.http.get(`${aD_endpointUri}api/user/all`)}}function QA(t,e){1&t&&(ye(0,"div",7),Ri(1,"div",8),De())}function KA(t,e){if(1&t&&(ye(0,"tr")(1,"th",12),_t(2),De(),ye(3,"td"),_t(4),De(),ye(5,"td"),_t(6),De(),ye(7,"td"),_t(8),De()()),2&t){const n=e.$implicit;en(2),Hr(n.id),en(2),Hr(n.username),en(2),Hr(n.email),en(2),Hr(n.phone)}}function YA(t,e){if(1&t&&(ye(0,"table",9)(1,"thead")(2,"tr")(3,"th",10),_t(4,"#"),De(),ye(5,"th",10),_t(6,"User"),De(),ye(7,"th",10),_t(8,"Email"),De(),ye(9,"th",10),_t(10,"Phone"),De()()(),ye(11,"tbody"),Pi(12,KA,9,4,"tr",11),De()()),2&t){const n=Vh();en(12),Yo("ngForOf",n.usersList)}}or.\u0275fac=function(e){return new(e||or)(w(tr))},or.\u0275prov=I({token:or,factory:or.\u0275fac});class Ns{constructor(e){this.user=e,this.usersList=[],this.destroy$=new yo}ngOnInit(){this.user.getUsers().pipe(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WA(t){return zt((e,n)=>{wn(t).subscribe(vn(n,()=>n.complete(),la)),!n.closed&&e.subscribe(n)})}(this.destroy$)).subscribe(e=>{this.usersList=e,console.log(e)})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}Ns.\u0275fac=function(e){return new(e||Ns)(N(or))},Ns.\u0275cmp=Gs({type:Ns,selectors:[["user-list"]],decls:8,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","progress",4,"ngIf"],["class","table table-bordered table-dark",4,"ngIf"],[1,"progress"],["role","progressbar","aria-valuenow","90","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","bg-success","progress-bar-animated",2,"width","90%"],[1,"table","table-bordered","table-dark"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(e,n){1&e&&(ye(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_t(4," Lista de usuarios "),De(),ye(5,"div",4),Pi(6,QA,2,0,"div",5),Pi(7,YA,13,1,"table",6),De()()()()),2&e&&(en(6),Yo("ngIf",0===n.usersList.length),en(1),Yo("ngIf",n.usersList.length>0))},dependencies:[Xr,eo],encapsulation:2});class Fs{constructor(){this.title="Bienvenido a usuarios"}}Fs.\u0275fac=function(e){return new(e||Fs)},Fs.\u0275cmp=Gs({type:Fs,selectors:[["the-shop"]],decls:3,vars:0,consts:[[1,"row"],[1,"col-12"]],template:function(e,n){1&e&&(ye(0,"div",0)(1,"div",1),Ri(2,"user-list"),De()())},dependencies:[Ns],encapsulation:2});class go{}go.\u0275fac=function(e){return new(e||go)},go.\u0275mod=dt({type:go,bootstrap:[Fs]}),go.\u0275inj=Ye({providers:[or],imports:[fn,ho]}),aD_production&&function xb(){if(ry)throw new Error("Cannot enable prod mode after platform setup.");ny=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),mA().bootstrapModule(go).catch(t=>console.error(t))}},J=>{var mo;mo=628,J(J.s=mo)}]);