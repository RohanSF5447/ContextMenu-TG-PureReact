import{j as o}from"./index-CTAXdLKx.js";import{r as y}from"./index-D5jfS-9e.js";import{t as wn,G as Ja,b2 as xn,b3 as vn,b4 as Zl,b5 as tr,b6 as $l,V as Ko,ad as jo,b7 as Xl,b8 as Yl,b9 as Ql,ba as Jl,bb as qo,i as es,bc as as,bd as ts,be as ns,N as Zo,R as rs,bf as is,f as os,l as Ve,aX as ls,bg as $o,bh as Xo,E as ze,bi as Yo,bj as Qo,aM as Ze,bk as Ie,bl as ke,D as Oe,bm as ss,v as ue,a as ds,Q as Wa,bn as Ka,r as nr,bo as us,z as Jt,bp as va,p as it,q as ot,bq as rr,br as dn,S as Aa,u as nn,aN as x,ab as ir,bs as or,bt as lt,bu as aa,bv as ms,O as En,C as et,b as W,W as he,bw as ca,bx as An,by as cs,bz as hs,H as Dn,M as cn}from"./useGridTheme-DwtHDbpG.js";import{c as ps}from"./client-Spw3EFno.js";import{b as Ce,c as me,d as te,u as Se,C as fa,h as ys,s as gs,i as Jo,j as fs,k as Ms}from"./data-D3ZXNbC9.js";import{u as $}from"./useFilter-DOHa2Ant.js";import{u as bs}from"./useFind-D6cIvzy4.js";import{b as oe,a as fe,u as Me}from"./useContextMenu-CkEikGvQ.js";import{u as Tn}from"./useColumnReorder-CGLclVMJ.js";import{a as ne,u as pe}from"./useClipboard-a4M0YUfD.js";import{u as le}from"./useToolbar-CwbE5079.js";import{u as q}from"./usePager-bZJQUBqI.js";import{P as rn,u as ce}from"./usePinning-C731cHou.js";import{u as Cs}from"./useDetailGrid-C47s256p.js";import{A as el,a as hn,b as pn,c as yn,d as gn,e as fn,P as Ss}from"./usePivotModule-B2Wp7mXr.js";import"./iframe-B99DDmYD.js";import"../sb-preview/runtime.js";const al="root",tl="rtl",nl="ltr",Mn="sf-print-grid",Ns="sf-grid-content",ws="Root element not found in print window.",xs="Print window blocked or failed to open. Please check browser popup settings.",vs=500,Es=100;function As(){let r="";const e=[].slice.call(document.getElementsByTagName("head")[0].querySelectorAll("base, link, style")),a=[].slice.call(document.getElementsByTagName("body")[0].querySelectorAll("link, style"));return[...e,...a].forEach(n=>{r+=n.outerHTML}),r}function Ds(r,e,a){const t=e.split("-")[0],n=a?tl:nl,i=As();return`
<!DOCTYPE html>
<html lang="${t}" dir="${n}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r}</title>
  ${i}
  <style>
    .${Mn} .${Ns} {
        overflow-x: hidden;
    }
    .${Mn} .sf-grid-content-row {
        page-break-inside: avoid;
    }
  </style>
</head>
<body>
  <div id="${al}"></div>
</body>
</html>
  `}async function Ts(r,e,a,t,n){var i,l;try{const d=(i=n.current)==null?void 0:i.locale,u=(l=n.current)==null?void 0:l.enableRtl;return r.document.write(Ds(t.title,d,u)),r.document.close(),new Promise(m=>{r.addEventListener("load",()=>{try{const c=r.document.getElementById(al);if(!c)throw new Error(ws);const g=ps.createRoot(c),{scrollModule:b,...S}=n.current,_=y.createElement(wn,{locale:d,dir:u?tl:nl,children:y.createElement(Ja,{...S,dataSource:e,columns:a,className:`${S.className} ${Mn}`,height:"auto",width:"auto",toolbar:null,filterSettings:{enabled:!1},sortSettings:{enabled:!1},pageSettings:{enabled:!1},virtualizationSettings:{enabled:!1,preventMaxRenderedRows:!0},onDataLoad:()=>{setTimeout(()=>{r.print(),setTimeout(()=>{r.close()},Es),m({success:!0})},vs)}})});g.render(_)}catch(c){m({success:!1,...c&&{error:c}})}})})}catch(d){return{success:!1,...d&&{error:d}}}}async function Rs(r,e,a,t){try{const n=window.open("","PRINT_GRID",`height=${a.windowHeight},width=${a.windowWidth}`);if(!n)throw new Error(xs);return await Ts(n,r,e,a,t)}catch(n){return{success:!1,...n&&{error:n}}}}const Gs="All",ks="CurrentPage",Fs="Custom",_s="Print",Ps=1200,Bs=800,Is="Print operation cancelled by onBeforePrint hook.";function zs(r,e){if(r.maxRowsWarningThreshold&&e>r.maxRowsWarningThreshold)throw new Error(`Print service: Data size (${e} rows) exceeds warning threshold (${r.maxRowsWarningThreshold} rows).`)}async function Ls(r,e){var d;const a=r.gridRef.current,t=a.getDataModule(),n=await((d=r.getAllData)==null?void 0:d.call(r,t.getStateEventArgument(t.generateQuery()))),i=await Promise.resolve(a.getData(e.range!==ks,!1,n));let l=Array.isArray(i)?i:i.result;return e.range===Fs&&e.customRange&&(l=l.slice(e.customRange.startRow,e.customRange.endRow+1)),l}async function Hs(r,e={}){var n,i,l,d;const t={...{range:Gs,title:_s,windowWidth:Ps,windowHeight:Bs},...e};try{const u=await Ls(r,t),c={columns:[...((n=r.getColumns)==null?void 0:n.call(r))||r.gridRef.current.columns],dataSource:u,config:t,cancel:!1};if((i=t.onBeforePrint)==null||i.call(t,c),c.cancel)throw new Error(Is);zs(t,c.dataSource.length);const g=await Rs(c.dataSource,c.columns,t,r.gridRef);return(l=t.onAfterPrint)==null||l.call(t,{config:t,success:g.success,...g.error&&{error:g.error}}),g}catch(u){return(d=t.onAfterPrint)==null||d.call(t,{config:t,success:!1,...u&&{error:u}}),{success:!1,...u&&{error:u}}}}function Vs(r){const[e,a]=y.useState(!1),t=y.useCallback(async n=>{a(!0);const i=await Hs(r,n);return a(!1),i},[r]);return y.useEffect(()=>{xn(vn.Print,"DataGrid")},[]),{print:t,isPrinting:e}}class Q{static bitReverse(e){return Q.reverseBits[e&15]<<12|Q.reverseBits[e>>4&15]<<8|Q.reverseBits[e>>8&15]<<4|Q.reverseBits[e>>12]}static bitConverterToInt32(e,a){return e[a]|e[a+1]<<8|e[a+2]<<16|e[a+3]<<24}static bitConverterToInt16(e,a){return e[a]|e[a+1]<<8}static bitConverterToUInt32(e){let a=new Uint32Array(1);return a[0]=e,a[0]}static bitConverterToUInt16(e,a){let t=new Uint16Array(1);return t[0]=e[a]|e[a+1]<<8,t[0]}static bitConverterUintToInt32(e){let a=new Int32Array(1);return a[0]=e,a[0]}static bitConverterInt32ToUint(e){let a=new Uint32Array(1);return a[0]=e,a[0]}static bitConverterInt32ToInt16(e){let a=new Int16Array(1);return a[0]=e,a[0]}static byteToString(e){let a="";for(let t=0;t<e.length;t++)a+=String.fromCharCode(e[t]);return a}static byteIntToString(e){let a="";for(let t=0;t<e.length;t++)a+=String.fromCharCode(e[t]);return a}static arrayCopy(e,a,t,n,i){let d=new Uint8Array(e.buffer,a).subarray(0,i);t.set(d,n)}static mergeArray(e,a){let t=new Uint8Array(e.length+a.length);return t.set(e),t.set(a,e.length),t}static encodedString(e){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t,n,i,l,d,u,m,c=0,g=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");let b=e.length*3/4;if(e.charAt(e.length-1)===a.charAt(64)&&b--,e.charAt(e.length-2)===a.charAt(64)&&b--,b%1!==0)throw new Error("Invalid base64 input, bad content length.");let S=new Uint8Array(b|0);for(;c<e.length;)l=a.indexOf(e.charAt(c++)),d=a.indexOf(e.charAt(c++)),u=a.indexOf(e.charAt(c++)),m=a.indexOf(e.charAt(c++)),t=l<<2|d>>4,n=(d&15)<<4|u>>2,i=(u&3)<<6|m,S[g++]=t,u!==64&&(S[g++]=n),m!==64&&(S[g++]=i);return S}}Q.reverseBits=[0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15];Q.huffCodeLengthOrders=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const st=[],ja=4,Ba=2,Os=101010256,Us=12,Ws=33639248,dt=4096;class ge{get items(){return this.files}get compressionLevel(){return this.level}set compressionLevel(e){this.level=e}get length(){return this.files===void 0?0:this.files.length}constructor(){st.length===0&&ge.initCrc32Table(),this.files=[],this.level="Normal",tr.isMicrosoftBrowser=!!navigator.msSaveBlob}addItem(e){if(e==null)throw new Error("ArgumentException: item cannot be null or undefined");for(let a=0;a<this.files.length;a++){let t=this.files[a];if(t instanceof za&&t.name===e.name)throw new Error("item with same name already exist")}this.files.push(e)}addDirectory(e){if(e==null)throw new Error("ArgumentException: string cannot be null or undefined");if(e.length===0)throw new Error("ArgumentException: string cannot be empty");if(e.slice(-1)!=="/"&&(e+="/"),this.files.indexOf(e)!==-1)throw new Error("item with same name already exist");this.files.push(e)}getItem(e){if(e>=0&&e<this.files.length)return this.files[e]}contains(e){return this.files.indexOf(e)!==-1}open(e){let a=Q.encodedString(e);if(a.length==0)throw new DOMException("stream");let t=new tn(a),n=ge.findValueFromEnd(t,Os,65557);if(n<0)throw new DOMException("Can't locate end of central directory record. Possible wrong file format or archive is corrupt.");t.position=n+Us;let i=ge.ReadInt32(t),l=n-i;t.position=l,this.readCentralDirectoryDataAndExtractItems(t)}readCentralDirectoryDataAndExtractItems(e){if(e==null)throw new DOMException("stream");let a;for(;ge.ReadInt32(e)==Ws;)a=new Ks,a.readCentralDirectoryData(e);a.readData(e,a.checkCrc),a.decompressData(),this.files.push(new za(a.unCompressedStream.buffer,a.name))}save(e){if(e==null||e.length===0)throw new Error("ArgumentException: fileName cannot be null or undefined");if(this.files.length===0)throw new Error("InvalidOperation");let a=this;return new Promise((t,n)=>{a.saveInternal(e,!1).then(()=>{t(a)})})}saveAsBlob(){let e=this;return new Promise((a,t)=>{e.saveInternal("",!0).then(n=>{a(n)})})}saveInternal(e,a){let t=this;return new Promise((n,i)=>{let l=[],d=0;for(let u=0;u<t.files.length;u++)this.getCompressedData(this.files[u]).then(c=>{if(d=t.constructZippedObject(l,c,d,c.isDirectory),l.length===t.files.length){let g=t.writeZippedContent(e,l,d,a);n(g)}})})}destroy(){if(this.files!==void 0&&this.files.length>0){for(let e=0;e<this.files.length;e++){let a=this.files[e];a instanceof za&&a.destroy(),a=void 0}this.files=[]}this.files=void 0,this.level=void 0}getCompressedData(e){let a=this;return new Promise((n,i)=>{if(e instanceof za){let l=new FileReader;l.onload=()=>{let d=new Uint8Array(l.result),u={fileName:e.name,crc32Value:0,compressedData:[],compressedSize:void 0,uncompressedDataSize:d.length,compressionType:void 0,isDirectory:!1};if(a.level==="Normal"){a.compressData(d,u,st);let m=0;for(let c=0;c<u.compressedData.length;c++)m+=u.compressedData[c].length;u.compressedSize=m,u.compressionType="\b\0"}else u.compressedSize=d.length,u.crc32Value=a.calculateCrc32Value(0,d,st),u.compressionType="\0\0",u.compressedData.push(d);n(u)},l.readAsArrayBuffer(e.data)}else n({fileName:e,crc32Value:0,compressedData:"",compressedSize:0,uncompressedDataSize:0,compressionType:"\0\0",isDirectory:!0})})}compressData(e,a,t){let n=new Zl(!0),i=0,l=0;do{if(i>=e.length){n.close();break}l=Math.min(e.length,i+16384);let d=e.subarray(i,l);a.crc32Value=this.calculateCrc32Value(a.crc32Value,d,t),n.write(d,0,l-i),i=l}while(i<=e.length);a.compressedData=n.compressedData,n.destroy()}constructZippedObject(e,a,t,n){let i=0,l=new Date;n&&(i=i|16),i=i|0;let d=this.writeHeader(a,l),u="PK"+d+a.fileName,m=this.writeCentralDirectory(a,d,t,i);return e.push({localHeader:u,centralDir:m,compressedData:a}),t+u.length+a.compressedSize}writeHeader(e,a){let t="";return t+=`
\0\0\0`,t+=e.compressionType,t+=this.getBytes(this.getModifiedTime(a),2),t+=this.getBytes(this.getModifiedDate(a),2),t+=this.getBytes(e.crc32Value,4),t+=this.getBytes(e.compressedSize,4),t+=this.getBytes(e.uncompressedDataSize,4),t+=this.getBytes(e.fileName.length,2),t+=this.getBytes(0,2),t}writeZippedContent(e,a,t,n){let i=0,l=[];for(let u=0;u<a.length;u++){let m=a[u];for(i+=m.centralDir.length,l.push(this.getArrayBuffer(m.localHeader));m.compressedData.compressedData.length;)l.push(m.compressedData.compressedData.shift().buffer)}for(let u=0;u<a.length;u++)l.push(this.getArrayBuffer(a[u].centralDir));l.push(this.getArrayBuffer(this.writeFooter(a,i,t)));let d=new Blob(l,{type:"application/zip"});return n||tr.save(e,d),d}writeCentralDirectory(e,a,t,n){return"PK"+this.getBytes(20,2)+a+this.getBytes(0,2)+"\0\0\0\0"+this.getBytes(n,4)+this.getBytes(t,4)+e.fileName}writeFooter(e,a,t){return"PK\0\0\0\0"+this.getBytes(e.length,2)+this.getBytes(e.length,2)+this.getBytes(a,4)+this.getBytes(t,4)+this.getBytes(0,2)}getArrayBuffer(e){let a=new Uint8Array(e.length);for(let t=0;t<e.length;++t)a[t]=e.charCodeAt(t)&255;return a.buffer}getBytes(e,a){let t="";for(let n=0;n<a;n++)t+=String.fromCharCode(e&255),e=e>>>8;return t}getModifiedTime(e){let a=e.getHours();return a=a<<6,a=a|e.getMinutes(),a=a<<5,a=a|e.getSeconds()/2}getModifiedDate(e){let a=e.getFullYear()-1980;return a=a<<4,a=a|e.getMonth()+1,a=a<<5,a=a|e.getDate()}calculateCrc32Value(e,a,t){e^=-1;for(let n=0;n<a.length;n++)e=e>>>8^t[(e^a[n])&255];return e^-1}static initCrc32Table(){let e;for(let a=0;a<256;a++){e=a;for(let t=0;t<8;t++)e=e&1?3988292384^e>>>1:e>>>1;st[a]=e}}static findValueFromEnd(e,a,t){if(e==null)throw new DOMException("stream");let n=e.inputStream.buffer.byteLength;if(n<4)return-1;let i=new Uint8Array(4),l=Math.max(0,n-t),d=n-1-ja;e.position=d,e.read(i,0,ja);let u=i[0],m=u==a;if(!m){for(;d>l;)if(u<<=8,d--,e.position=d,u+=e.readByte(),u==a){m=!0;break}}return m?d:-1}static ReadInt32(e){let a=new Uint8Array(ja);if(e.read(a,0,ja)!=ja)throw new DOMException("Unable to read value at the specified position - end of stream was reached.");return Q.bitConverterToInt32(a,0)}static ReadInt16(e){let a=new Uint8Array(Ba);if(e.read(a,0,Ba)!=Ba)throw new DOMException("Unable to read value at the specified position - end of stream was reached.");return Q.bitConverterToInt16(a,0)}static ReadUInt16(e){{let a=new Uint8Array(Ba);if(e.read(a,0,Ba)!=Ba)throw new DOMException("Unable to read value at the specified position - end of stream was reached.");return Q.bitConverterToInt16(a,0)}}}class Ks{constructor(){this.headerSignature=67324752,this.checkCrc=!0,this.crc32=0}readCentralDirectoryData(e){e.position+=4,this.options=ge.ReadInt16(e),this.compressionMethod=ge.ReadInt16(e),this.checkCrc=this.compressionMethod!=99,ge.ReadInt32(e),this.crc32=Q.bitConverterToUInt32(ge.ReadInt32(e)),this.compressedSize=ge.ReadInt32(e),this.originalSize=ge.ReadInt32(e);let a=ge.ReadInt16(e),t=ge.ReadInt16(e),n=ge.ReadInt16(e);e.position+=4,this.externalAttributes=ge.ReadInt32(e),this.localHeaderOffset=ge.ReadInt32(e);let i=new Uint8Array(a);e.read(i,0,a);let l=Q.byteToString(i);l=l.replace("\\","/"),this.name=l,e.position+=t+n,this.options!=0&&(this.options=0)}readData(e,a){if(e.length==0)throw new DOMException("stream");e.position=this.localHeaderOffset,this.checkCrc=a,this.readLocalHeader(e),this.readCompressedData(e)}decompressData(){this.compressionMethod==8&&this.originalSize>0&&this.decompressDataOld()}decompressDataOld(){let e=new Te(this.compressedStream,!0),a;this.originalSize>0&&(a=new tn(new Uint8Array(this.originalSize)));let t=new Uint8Array(dt),n;for(;(n=e.read(t,0,dt))>0;)a.write(t.subarray(0,n),0,n);this.unCompressedStream=a.toByteArray(),this.checkCrc}readLocalHeader(e){if(e.length==0)throw new DOMException("stream");if(ge.ReadInt32(e)!=this.headerSignature)throw new DOMException("Can't find local header signature - wrong file format or file is corrupt.");e.position+=22;let a=ge.ReadInt16(e),t=ge.ReadUInt16(e);if(this.compressionMethod!=99)if(t>2){if(e.position+=a,ge.ReadInt16(e)==23)throw new DOMException("UnSupported");e.position+=t-2}else e.position+=a+t}readCompressedData(e){let a;if(this.compressedSize>0){let t=this.compressedSize;a=new tn(new Uint8Array(t));let n=new Uint8Array(dt);for(;t>0;){let i=Math.min(t,dt);if(e.read(n,0,i)!=i)throw new DOMException("End of file reached - wrong file format or file is corrupt.");a.write(n.subarray(0,i),0,i),t-=i}this.compressedStream=new Uint8Array(a.inputStream)}else this.compressedSize<0||this.compressedSize==0}}class za{get dataStream(){return this.decompressedStream}get name(){return this.fileName}set name(e){this.fileName=e}constructor(e,a){if(e==null)throw new Error("ArgumentException: data cannot be null or undefined");if(a==null)throw new Error("ArgumentException: string cannot be null or undefined");if(a.length===0)throw new Error("string cannot be empty");this.data=e,this.name=a}destroy(){this.fileName=void 0,this.data=void 0}}class Pe{constructor(e){this.buildTree(e)}static init(){let e,a;for(e=new Uint8Array(288),a=0;a<144;)e[a++]=8;for(;a<256;)e[a++]=9;for(;a<280;)e[a++]=7;for(;a<288;)e[a++]=8;for(Pe.m_LengthTree=new Pe(e),e=new Uint8Array(32),a=0;a<32;)e[a++]=5;Pe.m_DistanceTree=new Pe(e)}prepareData(e,a,t){let n=0,i=512;for(let l=0;l<t.length;l++){let d=t[l];d>0&&e[d]++}for(let l=1;l<=Pe.MAX_BITLEN;l++)if(a[l]=n,n+=e[l]<<16-l,l>=10){let d=a[l]&130944,u=n&130944;i+=u-d>>16-l}return{code:n,treeSize:i}}treeFromData(e,a,t,n,i){let l=new Int16Array(i),d=512,u=128;for(let m=Pe.MAX_BITLEN;m>=10;m--){let c=n&130944;n-=e[m]<<16-m;let g=n&130944;for(let b=g;b<c;b+=u)l[Q.bitReverse(b)]=Q.bitConverterInt32ToInt16(-d<<4|m),d+=1<<m-9}for(let m=0;m<t.length;m++){let c=t[m];if(c==0)continue;n=a[c];let g=Q.bitReverse(n);if(c<=9)do l[g]=Q.bitConverterInt32ToInt16(m<<4|c),g+=1<<c;while(g<512);else{let b=l[g&511],S=1<<(b&15);b=-(b>>4);do l[b|g>>9]=Q.bitConverterInt32ToInt16(m<<4|c),g+=1<<c;while(g<S)}a[c]=n+(1<<16-c)}return l}buildTree(e){let a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=this.prepareData(a,t,e);this.m_Tree=this.treeFromData(a,t,e,n.code,n.treeSize)}unpackSymbol(e){let a,t;if((a=e.peekBits(9))>=0){if((t=this.m_Tree[a])>=0)return e.skipBits(t&15),t>>4;let n=-(t>>4),i=t&15;if((a=e.peekBits(i))>=0)return t=this.m_Tree[n|a>>9],e.skipBits(t&15),t>>4;{let l=e.availableBits;return a=e.peekBits(l),t=this.m_Tree[n|a>>9],(t&15)<=l?(e.skipBits(t&15),t>>4):-1}}else{let n=e.availableBits;return a=e.peekBits(n),t=this.m_Tree[a],t>=0&&(t&15)<=n?(e.skipBits(t&15),t>>4):-1}}static get lengthTree(){return this.m_LengthTree}static get distanceTree(){return this.m_DistanceTree}}Pe.MAX_BITLEN=15;class Ha{static ChecksumUpdate(e,a,t,n){let i=e,l=i&65535,d=i>>this.DEF_CHECKSUM_BIT_OFFSET;for(;n>0;){let u=Math.min(n,this.DEF_CHECKSUM_ITERATIONSCOUNT);for(n-=u;--u>=0;)l=l+(a[t++]&255),d=d+l;l%=this.DEF_CHECKSUM_BASE,d%=this.DEF_CHECKSUM_BASE}i=d<<this.DEF_CHECKSUM_BIT_OFFSET|l,e=i}static ChecksumGenerate(e,a,t){return Ha.ChecksumUpdate(1,e,a,t),1}}Ha.DEF_CHECKSUM_BIT_OFFSET=16;Ha.DEF_CHECKSUM_BASE=65521;Ha.DEF_CHECKSUM_ITERATIONSCOUNT=3800;class Te{get mBuffer(){return this.tBuffer}set mBuffer(e){this.tBuffer=e}peekBits(e){if(e<0)throw new DOMException("count","Bits count can not be less than zero.");if(e>32)throw new DOMException("count","Count of bits is too large.");if(this.mBufferedBits<e&&this.fillBuffer(),this.mBufferedBits<e)return-1;const a=~(4294967295<<e);return Q.bitConverterUintToInt32(this.mBuffer&a)}fillBuffer(){const e=4-(this.mBufferedBits>>3)-((this.mBufferedBits&7)!==0?1:0);if(e===0)return;const a=this.mInputStream.read(this.mTempBuffer,0,e);for(let t=0;t<a;t++)this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer|Q.bitConverterInt32ToUint(this.mTempBuffer[t]<<this.mBufferedBits)),this.mBufferedBits+=8}skipBits(e){if(e<0)throw new DOMException("count","Bits count can not be less than zero.");e!==0&&(e>=this.mBufferedBits?(e-=this.mBufferedBits,this.mBufferedBits=0,this.mBuffer=0,e>0&&(this.mInputStream.position+=e>>3,e&=7,e>0&&(this.fillBuffer(),this.mBufferedBits-=e,this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer>>>e)))):(this.mBufferedBits-=e,this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer>>>e)))}get availableBits(){return this.mBufferedBits}constructor(e,a){if(this.defaultHuffmanDynamicTree=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],this.DEF_HEADER_METHOD_MASK=3840,this.DEF_HEADER_INFO_MASK=61440,this.DEF_HEADER_FLAGS_FCHECK=31,this.DEF_HEADER_FLAGS_FDICT=32,this.DEF_HEADER_FLAGS_FLEVEL=192,this.DEF_MAX_WINDOW_SIZE=65535,this.DEF_HUFFMAN_REPEATE_MAX=258,this.DEF_HUFFMAN_END_BLOCK=256,this.DEF_HUFFMAN_LENGTH_MINIMUMCODE=257,this.DEF_HUFFMAN_LENGTH_MAXIMUMCODE=285,this.DEF_HUFFMAN_DISTANCE_MAXIMUMCODE=29,this.mCheckSum=1,this.tBuffer=0,this.mBufferedBits=0,this.mTempBuffer=new Uint8Array(4),this.mBlockBuffer=new Uint8Array(this.DEF_MAX_WINDOW_SIZE),this.mbNoWrap=!1,this.mWindowSize=0,this.mCurrentPosition=0,this.mDataLength=0,this.mbCanReadNextBlock=!0,this.mbCanReadMoreData=!0,this.mbCheckSumRead=!1,e==null)throw new DOMException("stream");if(e.length===0)throw new DOMException("stream - string can not be empty");Pe.init(),this.mInputStream=new tn(e),this.mbNoWrap=a,this.mbNoWrap||this.readZLibHeader(),this.decodeBlockHeader()}readZLibHeader(){const e=this.readInt16();if(e===-1)throw new DOMException("Header of the stream can not be read.");if(e%31!==0)throw new DOMException("Header checksum illegal");if((e&this.DEF_HEADER_METHOD_MASK)!==2048)throw new DOMException("Unsupported compression method.");if(this.mWindowSize=Math.pow(2,((e&this.DEF_HEADER_INFO_MASK)>>12)+8),this.mWindowSize>65535)throw new DOMException("Unsupported window size for deflate compression method.");if((e&this.DEF_HEADER_FLAGS_FDICT)>>5===1)throw new DOMException("Custom dictionary is not supported at the moment.")}readInt16(){let e=this.readBits(8)<<8;return e|=this.readBits(8),e}readBits(e){const a=this.peekBits(e);return a===-1?-1:(this.mBufferedBits-=e,this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer>>>e),a)}decodeBlockHeader(){if(!this.mbCanReadNextBlock)return!1;const e=this.readBits(1);if(e===-1)return!1;const a=this.readBits(2);if(a===-1)return!1;switch(this.mbCanReadNextBlock=e===0,a){case 0:this.mbReadingUncompressed=!0,this.skipToBoundary();const t=this.readInt16Inverted(),n=this.readInt16Inverted();if(t!==(n^65535))throw new DOMException("Wrong block length.");if(t>65535)throw new DOMException("Uncompressed block length can not be more than 65535.");this.mUncompressedDataLength=t,this.mCurrentLengthTree=null,this.mCurrentDistanceTree=null;break;case 1:this.mbReadingUncompressed=!1,this.mUncompressedDataLength=-1,this.mCurrentLengthTree=Pe.lengthTree,this.mCurrentDistanceTree=Pe.distanceTree;break;case 2:this.mbReadingUncompressed=!1,this.mUncompressedDataLength=-1;const i=this.decodeDynamicHeader(this.mCurrentLengthTree,this.mCurrentDistanceTree);this.mCurrentLengthTree=i.lengthTree,this.mCurrentDistanceTree=i.distanceTree;break;default:throw new DOMException("Wrong block type.")}return!0}skipToBoundary(){this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer>>>(this.mBufferedBits&7)),this.mBufferedBits&=-8}readInt16Inverted(){let e=this.readBits(8);return e|=this.readBits(8)<<8,e}decodeDynamicHeader(e,a){let t=0,n=this.readBits(5),i=this.readBits(5),l=this.readBits(4);if(n<0||i<0||l<0)throw new DOMException("Wrong dynamic huffman codes.");n+=257,i+=1;const d=n+i,u=new Uint8Array(d),m=new Uint8Array(19);l+=4;let c=0;for(;c<l;){const S=this.readBits(3);if(S<0)throw new DOMException("Wrong dynamic huffman codes.");m[this.defaultHuffmanDynamicTree[c++]]=S}const g=new Pe(m);for(c=0;;){let S,_=!1;for(S=g.unpackSymbol(this);(S&-16)===0;){if(u[c++]=t=S,c===d){_=!0;break}S=g.unpackSymbol(this)}if(_)break;if(S<0)throw new DOMException("Wrong dynamic huffman codes.");if(S>=17)t=0;else if(c===0)throw new DOMException("Wrong dynamic huffman codes.");const Z=S-16,C=Te.DEF_HUFFMAN_DYNTREE_REPEAT_BITS[Z];let w=this.readBits(C);if(w<0)throw new DOMException("Wrong dynamic huffman codes.");if(w+=Te.DEF_HUFFMAN_DYNTREE_REPEAT_MINIMUMS[Z],c+w>d)throw new DOMException("Wrong dynamic huffman codes.");for(;w-- >0;)u[c++]=t;if(c===d)break}let b=new Uint8Array(n);return b.set(u.subarray(0,n),0),e=new Pe(b),b=u.slice(n,n+i),a=new Pe(b),{lengthTree:e,distanceTree:a}}readHuffman(){let e=this.DEF_MAX_WINDOW_SIZE-(this.mDataLength-this.mCurrentPosition),a=!1;const t={};for(;e>=this.DEF_HUFFMAN_REPEATE_MAX;){let n;for(n=this.mCurrentLengthTree.unpackSymbol(this);(n&-256)===0;){if(t[(this.mDataLength+1)%this.DEF_MAX_WINDOW_SIZE]=n,this.mBlockBuffer[this.mDataLength++%this.DEF_MAX_WINDOW_SIZE]=n,a=!0,--e<this.DEF_HUFFMAN_REPEATE_MAX)return!0;n=this.mCurrentLengthTree.unpackSymbol(this)}if(n<this.DEF_HUFFMAN_LENGTH_MINIMUMCODE){if(n<this.DEF_HUFFMAN_END_BLOCK)throw new DOMException("Illegal code.");const u=a?1:0;this.mbCanReadMoreData=this.decodeBlockHeader();const m=this.mbCanReadMoreData?1:0;return!!(u|m)}if(n>this.DEF_HUFFMAN_LENGTH_MAXIMUMCODE)throw new DOMException("Illegal repeat code length.");let i=Te.DEF_HUFFMAN_REPEAT_LENGTH_BASE[n-this.DEF_HUFFMAN_LENGTH_MINIMUMCODE],l=Te.DEF_HUFFMAN_REPEAT_LENGTH_EXTENSION[n-this.DEF_HUFFMAN_LENGTH_MINIMUMCODE];if(l>0){const u=this.readBits(l);if(u<0)throw new DOMException("Wrong data.");i+=u}if(n=this.mCurrentDistanceTree.unpackSymbol(this),n<0||n>Te.DEF_HUFFMAN_REPEAT_DISTANCE_BASE.length)throw new DOMException("Wrong distance code.");let d=Te.DEF_HUFFMAN_REPEAT_DISTANCE_BASE[n];if(l=Te.DEF_HUFFMAN_REPEAT_DISTANCE_EXTENSION[n],l>0){const u=this.readBits(l);if(u<0)throw new DOMException("Wrong data.");d+=u}for(let u=0;u<i;u++)this.mBlockBuffer[this.mDataLength%this.DEF_MAX_WINDOW_SIZE]=this.mBlockBuffer[(this.mDataLength-d)%this.DEF_MAX_WINDOW_SIZE],this.mDataLength++,e--;a=!0}return a}read(e,a,t){if(e==null)throw new DOMException("buffer");if(a<0||a>e.length-1)throw new DOMException("offset","Offset does not belong to specified buffer.");if(t<0||t>e.length-a)throw new DOMException("length","Length is illegal.");const n=t;for(;t>0;)if(this.mCurrentPosition<this.mDataLength){const i=this.mCurrentPosition%this.DEF_MAX_WINDOW_SIZE;let l=Math.min(this.DEF_MAX_WINDOW_SIZE-i,this.mDataLength-this.mCurrentPosition);l=Math.min(l,t),Q.arrayCopy(this.mBlockBuffer,i,e,a,l),this.mCurrentPosition+=l,a+=l,t-=l}else{if(!this.mbCanReadMoreData)break;const i=this.mDataLength;if(this.mbReadingUncompressed)if(this.mUncompressedDataLength===0){if(this.mbCanReadMoreData=this.decodeBlockHeader(),!this.mbCanReadMoreData)break}else{const l=this.mDataLength%this.DEF_MAX_WINDOW_SIZE,d=Math.min(this.mUncompressedDataLength,this.DEF_MAX_WINDOW_SIZE-l),u=this.readPackedBytes(this.mBlockBuffer,l,d);if(d!==u)throw new DOMException("Not enough data in stream.");this.mUncompressedDataLength-=u,this.mDataLength+=u}else if(!this.readHuffman())break;if(i<this.mDataLength){const l=i%this.DEF_MAX_WINDOW_SIZE,d=this.mDataLength%this.DEF_MAX_WINDOW_SIZE;l<d?this.checksumUpdate(this.mBlockBuffer,l,d-l):(this.checksumUpdate(this.mBlockBuffer,l,this.DEF_MAX_WINDOW_SIZE-l),d>0&&this.checksumUpdate(this.mBlockBuffer,0,d))}}if(!this.mbCanReadMoreData&&!this.mbCheckSumRead&&!this.mbNoWrap){if(this.skipToBoundary(),this.readInt32()!==this.mCheckSum)throw new DOMException("Checksum check failed.");this.mbCheckSumRead=!0}return n-t}readPackedBytes(e,a,t){if(e==null)throw new DOMException("buffer");if(a<0||a>e.length-1)throw new DOMException('offset", "Offset can not be less than zero or greater than buffer length - 1.');if(t<0)throw new DOMException('length", "Length can not be less than zero.');if(t>e.length-a)throw new DOMException('length", "Length is too large.');if((this.mBufferedBits&7)!==0)throw new DOMException("Reading of unalligned data is not supported.");if(t===0)return 0;let n=0;for(;this.mBufferedBits>0&&t>0;)e[a++]=this.mBuffer,this.mBufferedBits-=8,this.mBuffer=Q.bitConverterInt32ToUint(this.mBuffer>>>8),t--,n++;return t>0&&(n+=this.mInputStream.read(e,a,t)),n}readInt32(){let e=this.readBits(8)<<24;return e|=this.readBits(8)<<16,e|=this.readBits(8)<<8,e|=this.readBits(8),e}checksumUpdate(e,a,t){Ha.ChecksumUpdate(this.mCheckSum,e,a,t)}}Te.DEF_REVERSE_BITS=new Uint8Array([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]);Te.DEF_HUFFMAN_DYNTREE_REPEAT_MINIMUMS=[3,3,11];Te.DEF_HUFFMAN_DYNTREE_REPEAT_BITS=[2,3,7];Te.DEF_HUFFMAN_REPEAT_LENGTH_BASE=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];Te.DEF_HUFFMAN_REPEAT_LENGTH_EXTENSION=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Te.DEF_HUFFMAN_REPEAT_DISTANCE_BASE=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];Te.DEF_HUFFMAN_REPEAT_DISTANCE_EXTENSION=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];class tn{get length(){return this.inputStream.buffer.byteLength}constructor(e){this.position=0,this.inputStream=new Uint8Array(e.buffer)}read(e,a,t){let i=new Uint8Array(this.inputStream.buffer,this.position+a).subarray(0,t);return e.set(i,0),this.position+=i.byteLength,i.byteLength}readByte(){return this.inputStream[this.position++]}write(e,a,t){Q.arrayCopy(e,0,this.inputStream,this.position+a,t),this.position+=t}toByteArray(){return new Uint8Array(this.inputStream.buffer)}}const js="All",qs="CurrentPage",Zs="Custom",$s="Grid.pdf",Xs="Portrait",Ys="A4",Qs="Material",Js=$l;function ed(r,e,a){if(r.maxRowsWarningThreshold&&e>r.maxRowsWarningThreshold&&a){console.warn(Ql(e,r.maxRowsWarningThreshold));return}}async function ad(r,e){var d;const a=r.gridRef.current,t=a.getDataModule(),n=await((d=r.getAllData)==null?void 0:d.call(r,t.getStateEventArgument(t.generateQuery()))),i=await Promise.resolve(a.getData(e.range!==qs,!1,n));let l=Array.isArray(i)?i:i.result;return e.range===Zs&&e.customRange&&(l=l.slice(e.customRange.startRow,e.customRange.endRow+1)),l}function td(r,e){if(!e)return r;const a=new Map;return e.forEach(t=>{t.field&&a.set(t.field,t)}),r.map(t=>{const n=a.get(t.field||"");return n?{...t,...n}:t})}async function nd(r,e={}){var i,l,d,u,m,c,g,b,S,_,Z,C,w,R,k,z,E,X,Ne,K,O,xe,J,Re,Le;const t={...{range:js,fileName:$s,pageOrientation:Xs,pageSize:Ys,theme:Qs},...e},n=((l=(i=r.gridRef)==null?void 0:i.current)==null?void 0:l.enableDevMode)??!0;try{let se=await ad(r,t);const De=((u=(d=r.gridRef.current).getVisibleColumns)==null?void 0:u.call(d))||((m=r.getColumns)==null?void 0:m.call(r))||r.gridRef.current.columns;let Fe=td(De,t.columns);const He={columns:Fe,dataSource:se,config:t,cancel:!1};if((c=t.onBeforePdfExport)==null||c.call(t,He),He.cancel){const M=new Error(Js);return n&&console.warn(M.message),(g=t.onAfterPdfExport)==null||g.call(t,{config:t,success:!1,error:M}),{success:!1,error:M}}se=He.dataSource??se,Fe=He.columns??Fe;const na=((S=(b=r.gridRef.current)==null?void 0:b.groupSettings)==null?void 0:S.enabled)&&((C=(Z=(_=r.gridRef.current)==null?void 0:_.groupSettings)==null?void 0:Z.columns)==null?void 0:C.length)>0?{enabled:!0,columns:(R=(w=r.gridRef.current)==null?void 0:w.groupSettings)!=null&&R.columns?[...r.gridRef.current.groupSettings.columns]:[],captionFormat:((z=(k=r.gridRef.current)==null?void 0:k.groupSettings)==null?void 0:z.captionFormat)||"compact"}:void 0;let Be=se;na&&Array.isArray(se)&&se.some(M=>Ko(M))&&(Be=jo(se,()=>!0,(Ne=(X=(E=r==null?void 0:r.gridRef)==null?void 0:E.current)==null?void 0:X.groupSettings)==null?void 0:Ne.groupSummaryPosition,(xe=(O=(K=r==null?void 0:r.gridRef)==null?void 0:K.current)==null?void 0:O.getGroupCaptionAggregateType)==null?void 0:xe.call(O),((J=r.gridRef.current)==null?void 0:J.groupSettings)||{},new Set,"").currentViewData),ed(t,Be.length,n);const $e=await Xl(Be,Fe,t,na);return $e.success&&((Re=t.onAfterPdfExport)==null||Re.call(t,{config:t,success:!0,promise:$e.promise})),$e}catch(se){const De=se instanceof Error?se:new Error(String(se));return n&&console.warn(Yl,De),(Le=t.onAfterPdfExport)==null||Le.call(t,{config:t,success:!1,error:De}),{success:!1,error:De}}}function rd(r){const[e,a]=y.useState(!1),t=y.useCallback(async n=>{a(!0);try{return await nd(r,n)}finally{a(!1)}},[r]);return y.useEffect(()=>{xn(vn.PDFExport,"DataGrid")},[]),{pdfExport:t,isExporting:e}}class Ee{constructor(){this.numFmtId=0,this.backColor="none",this.fontName="Calibri",this.fontSize=10.5,this.fontColor="#000000",this.italic=!1,this.bold=!1,this.underline=!1,this.strikeThrough=!1,this.wrapText=!1,this.hAlign="general",this.vAlign="bottom",this.indent=0,this.rotation=0,this.numberFormat="GENERAL",this.type="datetime",this.borders=new rl,this.isGlobalStyle=!1}}class lr{constructor(){this.sz=10.5,this.name="Calibri",this.u=!1,this.b=!1,this.i=!1,this.color="FF000000",this.strike=!1}}class id{}class od{}class ld{}class sr{constructor(){this.name="Normal",this.xfId=0}}class dr{constructor(e,a){this.numFmtId=e,this.formatCode=a}}class qa{constructor(e,a){this.lineStyle=e,this.color=a}}class rl{constructor(){this.left=new qa("none","#FFFFFF"),this.right=new qa("none","#FFFFFF"),this.top=new qa("none","#FFFFFF"),this.bottom=new qa("none","#FFFFFF"),this.all=new qa("none","#FFFFFF")}}class ur{}class Ma extends Array{constructor(){super(...arguments),this.add=e=>{let a=!1,t=0;for(let n of this)n.index===e.index&&(this[t]=e,a=!0),t++;a||this.push(e)}}}class sd{}class ba{}class dd extends Array{constructor(){super(...arguments),this.add=e=>{this.push(e)}}}class ud extends Array{}class md{constructor(){this.isSummaryRowBelow=!0,this.showGridLines=!0,this.enableRtl=!1}}class mr{}let cd=class{};class hd{}class il{}class Rn extends Array{constructor(){super(...arguments),this.add=e=>{let a=!1,t=0;for(let n of this){if(Rn.isIntersecting(n,e)){let i=new il;i.x=Math.min(n.x,e.x),i.y=Math.min(n.Y,e.y),i.width=Math.max(n.Width+n.X,e.width+e.x),i.height=Math.max(n.Height+n.Y,e.height+e.y),i.ref=this[t].ref.split(":")[0]+":"+e.ref.split(":")[1],this[t]=i,e=i,a=!0}t++}return a||this.push(e),e}}static isIntersecting(e,a){return e.x<=a.x+a.width&&a.x<=e.x+e.width&&e.y<=a.y+a.height&&a.y<=e.y+e.height}}class pd{}function La(r){return r==null}let en="en-US";function yd(r){en=r}let gd="USD";const fd={c:{style:"currency",currency:"USD",minimumFractionDigits:2},c0:{style:"currency",currency:"USD",minimumFractionDigits:0},c1:{style:"currency",currency:"USD",minimumFractionDigits:1},c2:{style:"currency",currency:"USD",minimumFractionDigits:2},c3:{style:"currency",currency:"USD",minimumFractionDigits:3},c4:{style:"currency",currency:"USD",minimumFractionDigits:4},c5:{style:"currency",currency:"USD",minimumFractionDigits:5},p:{style:"percent",minimumFractionDigits:2},p0:{style:"percent",minimumFractionDigits:0},p1:{style:"percent",minimumFractionDigits:1},p2:{style:"percent",minimumFractionDigits:2},p3:{style:"percent",minimumFractionDigits:3},n:{minimumFractionDigits:2,useGrouping:!0},n0:{minimumFractionDigits:0,useGrouping:!0},n1:{minimumFractionDigits:1,useGrouping:!0},n2:{minimumFractionDigits:2,useGrouping:!0},n3:{minimumFractionDigits:3,useGrouping:!0},f:{minimumFractionDigits:2,useGrouping:!1},f0:{minimumFractionDigits:0,useGrouping:!1},f1:{minimumFractionDigits:1,useGrouping:!1},f2:{minimumFractionDigits:2,useGrouping:!1},g:{maximumFractionDigits:-1}},Md={short:{month:"2-digit",day:"2-digit",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"},d:{day:"numeric"},dd:{day:"2-digit"},E:{weekday:"short"},EE:{weekday:"short"},EEE:{weekday:"short"},EEEE:{weekday:"long"},EEEEE:{weekday:"narrow"},EEEEEE:{weekday:"short"},M:{month:"numeric"},MM:{month:"2-digit"},MMM:{month:"short"},MMMM:{month:"long"},yy:{year:"2-digit"},yyyy:{year:"numeric"}},bd={short:{hour:"2-digit",minute:"2-digit",hour12:!0},medium:{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0},long:{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0,timeZoneName:"short"},h:{hour:"numeric",hour12:!0},hh:{hour:"2-digit",hour12:!0},H:{hour:"numeric",hour12:!1},HH:{hour:"2-digit",hour12:!1},m:{minute:"numeric"},mm:{minute:"2-digit"},s:{second:"numeric"},ss:{second:"2-digit"}};class ol{constructor(e){e?this.culture=e:this.culture=en}getDateFormat(e){const a=this.culture||en,t=e||{type:"date",skeleton:"short"};return n=>{try{const i=this.getDateIntlOptions(t);return new Intl.DateTimeFormat(a,i).format(n)}catch{return n.toString()}}}getNumberFormat(e){const a=this.culture||en,t=e||{};return n=>{try{const i=this.getNumberIntlOptions(t);return new Intl.NumberFormat(a,i).format(n)}catch{return n.toString()}}}getDateParser(e){return a=>{try{return new Date(a)}catch{return new Date}}}getNumberParser(e){return a=>{try{return parseFloat(a)}catch{return 0}}}formatNumber(e,a){return this.getNumberFormat(a)(e)}formatDate(e,a){return this.getDateFormat(a)(e)}parseDate(e,a){return this.getDateParser(a)(e)}parseNumber(e,a){return this.getNumberParser(a)(e)}getDatePattern(e,a){const t=e.skeleton||e.format||"short",n={short:"mm/dd/yyyy",medium:"mmm d, yyyy",long:"mmmm d, yyyy",full:"dddd, mmmm d, yyyy",shortTime:"h:mm am/pm",mediumTime:"h:mm:ss am/pm",shortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",date:"mm/dd/yyyy",time:"h:mm:ss am/pm",dateTime:"mm/dd/yyyy h:mm:ss am/pm"};return a&&n[t]?n[t]:t}getNumberPattern(e,a){const t=e.format||e.skeleton||"N",n=t.toLowerCase();if(a){const i={c:'"$"#,##0.00;[Red]"-$"#,##0.00',c0:'"$"#,##0;[Red]"-$"#,##0',c1:'"$"#,##0.0;[Red]"-$"#,##0.0',c2:'"$"#,##0.00;[Red]"-$"#,##0.00',c3:'"$"#,##0.000;[Red]"-$"#,##0.000',c4:'"$"#,##0.0000;[Red]"-$"#,##0.0000',c5:'"$"#,##0.00000;[Red]"-$"#,##0.00000',p:"0.00%",p0:"0%",p1:"0.0%",p2:"0.00%",p3:"0.000%",n:"#,##0.00",n0:"#,##0",n1:"#,##0.0",n2:"#,##0.00",n3:"#,##0.000",f:"0.00",f0:"0",f1:"0.0",f2:"0.00",g:"General"};if(i[n])return i[n]}return t}getDateIntlOptions(e){const a=e.type||"date",t=e.skeleton||"short";let n={};if(a==="date"||a==="dateTime"){const i=Md[t];i?n={...n,...i}:n={year:"numeric",month:"2-digit",day:"2-digit"}}if(a==="time"||a==="dateTime"){const i=bd[t];i?n={...n,...i}:n={...n,hour:"2-digit",minute:"2-digit",second:"2-digit"}}return n}getNumberIntlOptions(e){let a={};if(e.format||e.skeleton){const t=(e.format||e.skeleton||"").toLowerCase(),n=fd[t];n&&(a={...n})}return e.minimumFractionDigits!==void 0&&(a.minimumFractionDigits=e.minimumFractionDigits),e.maximumFractionDigits!==void 0&&e.maximumFractionDigits>=0&&(a.maximumFractionDigits=e.maximumFractionDigits),e.minimumIntegerDigits!==void 0&&(a.minimumIntegerDigits=e.minimumIntegerDigits),e.minimumSignificantDigits!==void 0&&(a.minimumSignificantDigits=e.minimumSignificantDigits),e.maximumSignificantDigits!==void 0&&(a.maximumSignificantDigits=e.maximumSignificantDigits),e.useGrouping!==void 0&&(a.useGrouping=e.useGrouping),e.currency?(a.style="currency",a.currency=e.currency):a.style==="currency"&&(a.currency=gd),a}}class Cd{constructor(e){this.intl=new ol}getFormatFunction(e,a){return e.type?(a&&(e.isServerRendered=!0),this.intl.getDateFormat(e)):this.intl.getNumberFormat(e)}toView(e,a){let t=e;return!La(a)&&!La(e)&&(t=a(e)),t}setCulture(e){La(e)||yd(e)}displayText(e,a,t){return this.toView(e,this.getFormatFunction(a,t))}}class Sd{constructor(e,a,t,n){if(this.lineSeparator=`\r
`,this.csvStr="",a==null?this.separator=",":this.separator=a,this.qualifier=t===void 0?'"':t,this.lineSeparator=this.GetLineSeparator(n),this.formatter=new Cd,this.isMicrosoftBrowser=!!navigator.msSaveBlob,e.isServerRendered!==null&&e.isServerRendered!==void 0&&(this.isServerRendered=e.isServerRendered),e.styles!==null&&e.styles!==void 0){this.globalStyles=new Map;for(let i=0;i<e.styles.length;i++)e.styles[i].name!==void 0&&e.styles[i].numberFormat!==void 0&&this.globalStyles.set(e.styles[i].name,e.styles[i].numberFormat)}e.worksheets!==null&&e.worksheets!==void 0&&this.parseWorksheet(e.worksheets[0])}GetLineSeparator(e){if(!e)return`\r
`;const a={CRLF:`\r
`,LF:`
`,CR:"\r"};return e in a?a[e]:String(e)}parseWorksheet(e){e.rows!==null&&e.rows!==void 0&&this.parseRows(e.rows)}parseRows(e){let a=1;for(let t of e)if(t.index!==null&&t.index!==void 0){for(;a<t.index;)this.csvStr+=this.lineSeparator,a++;this.parseRow(t)}else throw Error("Row index is missing.");this.csvStr+=this.lineSeparator}parseRow(e){if(e.cells!==null&&e.cells!==void 0){let a=1;for(let t of e.cells)if(t.index!==null&&t.index!==void 0){for(;a<t.index;)this.csvStr+=this.separator,a++;this.parseCell(t)}else throw Error("Cell index is missing.")}}parseCell(e){let a=this.csvStr;if(e.value!==void 0)if(e.value instanceof Date)if(e.style!==void 0&&e.style.numberFormat!==void 0)try{a+=this.parseCellValue(this.formatter.displayText(e.value,{type:"dateTime",skeleton:e.style.numberFormat},this.isServerRendered))}catch{a+=this.parseCellValue(this.formatter.displayText(e.value,{type:"dateTime",format:e.style.numberFormat},this.isServerRendered))}else if(e.style!==void 0&&e.style.name!==void 0&&this.globalStyles.has(e.style.name))try{a+=this.parseCellValue(this.formatter.displayText(e.value,{type:"dateTime",skeleton:this.globalStyles.get(e.style.name)},this.isServerRendered))}catch{a+=this.parseCellValue(this.formatter.displayText(e.value,{type:"dateTime",format:this.globalStyles.get(e.style.name)},this.isServerRendered))}else a+=e.value;else typeof e.value=="boolean"?a+=e.value?"TRUE":"FALSE":typeof e.value=="number"?e.style!==void 0&&e.style.numberFormat!==void 0?a+=this.parseCellValue(this.formatter.displayText(e.value,{format:e.style.numberFormat,ignoreCurrency:!0},this.isServerRendered)):e.style!==void 0&&e.style.name!==void 0&&this.globalStyles.has(e.style.name)?a+=this.parseCellValue(this.formatter.displayText(e.value,{format:this.globalStyles.get(e.style.name),ignoreCurrency:!0},this.isServerRendered)):a+=e.value:a+=this.parseCellValue(e.value);this.csvStr=a}parseCellValue(e){const a=this.separator!==void 0&&this.separator!==null?this.separator:",",t=this.qualifier&&this.qualifier.length>0?this.qualifier:'"',n=this.lineSeparator||`\r
`;if(e==null)return"";const i=String(e).replace(/\r\n|\n|\r/g,n),l=i.startsWith(t)&&i.endsWith(t);let d="";for(let m=0;m<i.length;m++){const c=i[m];if(l&&(m===0||m===i.length-1)){d+=c;continue}d+=c===t?t+t:c}const u=d.includes(a)||d.includes(t)||d.includes(n)||/^\s/.test(d)||/\s$/.test(d);return l?d:u?t+d+t:d}save(e){if(this.buffer=new Blob(["\uFEFF"+this.csvStr],{type:"text/csv;charset=UTF-8"}),this.isMicrosoftBrowser)navigator.msSaveBlob(this.buffer,e);else{let a=window.URL.createObjectURL(this.buffer),t=document.createElementNS("http://www.w3.org/1999/xhtml","a");t.download=e,t.href=a;let n=document.createEvent("MouseEvent");n.initEvent("click",!0,!0),t.dispatchEvent(n),setTimeout(()=>{window.URL.revokeObjectURL(a)})}}saveAsBlob(e){if(e!=null){let a=new Jl,t="UTF-8";e.toUpperCase()=="ANSI"?(a.type="Ansi",t="ANSI"):e.toUpperCase()=="UNICODE"?(a.type="Unicode",t="UNICODE"):(a.type="Utf8",t="UTF-8");let n=a.getBytes(this.csvStr,0,this.csvStr.length);return new Blob([n],{type:"text/csv;charset="+t})}else return new Blob(["\uFEFF"+this.csvStr],{type:"text/csv;charset=UTF-8"})}}class cr{constructor(){this.parts=[]}append(e){this.parts.push(e)}getBlob(){return new Blob(this.parts,{type:"text/plain"})}}class Nd{}class Gn{constructor(e,a,t,n,i){if(this.sharedStringCount=0,this.csvLineSeparator="CRLF",this.csvQualifier='"',this.unitsProportions=[96/75,96/300,96,96/25.4,96/2.54,1,96/72,96/72/12700],this.hyperlinkStyle={fontColor:"#0000FF",underline:!0},t!==void 0?this.culture=t:this.culture="en-US",n!==void 0?this.currency=n:this.currency="USD",this.intl=new ol(this.culture),this.mSaveType=a,a==="xlsx"){if(this.mArchive=new ge,this.sharedString=[],this.mFonts=[],this.mBorders=[],this.mStyles=[],this.printTitles=new Map,this.cellStyles=new Map,this.mNumFmt=new Map,this.mFills=new Map,this.mStyles.push(new Ee),this.mFonts.push(new lr),this.cellStyles.set("Normal",new sr),this.mCellXfs=[],this.mCellStyleXfs=[],this.drawingCount=0,this.imageCount=0,e.styles!==null&&e.styles!==void 0){this.globalStyles=new Map;for(let l=0;l<e.styles.length;l++)if(e.styles[l].name!==void 0){if(this.cellStyles.has(e.styles[l].name))throw Error("Style name "+e.styles[l].name+" is already existed");{let d=new Ee;d.isGlobalStyle=!0,this.parserCellStyle(e.styles[l],d,"none");let u=new sr;u.name=d.name,u.xfId=d.index-1,this.cellStyles.set(u.name,u);let m={};e.styles[l].numberFormat!==void 0&&(m.format=e.styles[l].numberFormat),e.styles[l].type!==void 0?m.type=e.styles[l].type:m.type="datetime",m.format!==void 0&&this.globalStyles.set(e.styles[l].name,m)}}}if(e.worksheets!==null&&e.worksheets!==void 0)this.parserWorksheets(e.worksheets);else throw Error("Worksheet is expected.");e.builtInProperties!==null&&e.builtInProperties!==void 0&&(this.builtInProperties=new wd,this.parserBuiltInProperties(e.builtInProperties,this.builtInProperties))}else e&&e.csvQualifier!=null&&(this.csvQualifier=String(e.csvQualifier)),e&&e.csvLineSeparator!==null&&(this.csvLineSeparator=e.csvLineSeparator),this.csvHelper=new Sd(e,i,this.csvQualifier,this.csvLineSeparator)}parserBuiltInProperties(e,a){e.author!==null&&e.author!==void 0&&(a.author=e.author),e.comments!==null&&e.comments!==void 0&&(a.comments=e.comments),e.category!==null&&e.category!==void 0&&(a.category=e.category),e.company!==null&&e.company!==void 0&&(a.company=e.company),e.manager!==null&&e.manager!==void 0&&(a.manager=e.manager),e.subject!==null&&e.subject!==void 0&&(a.subject=e.subject),e.title!==null&&e.title!==void 0&&(a.title=e.title),e.createdDate!==null&&e.createdDate!==void 0&&(a.createdDate=e.createdDate),e.modifiedDate!==null&&e.modifiedDate!==void 0&&(a.modifiedDate=e.modifiedDate),e.tags!==null&&e.tags!==void 0&&(a.tags=e.tags),e.status!==null&&e.status!==void 0&&(a.status=e.status)}parserWorksheets(e){this.worksheets=new ud;let a=e.length;for(let t=0;t<a;t++){let n=e[t],i=new md;this.mergeCells=new Rn,this.mergedCellsStyle=new Map,this.mHyperLinks=[],n.name!==null&&n.name!==void 0?i.name=n.name:i.name="Sheet"+(t+1).toString(),n.enableRtl!==null&&n.enableRtl!==void 0&&(i.enableRtl=n.enableRtl),i.index=t+1,n.columns!==null&&n.columns!==void 0&&this.parserColumns(n.columns,i),n.rows!==null&&n.rows!==void 0&&this.parserRows(n.rows,i),n.showGridLines!==null&&n.showGridLines!==void 0&&(i.showGridLines=n.showGridLines),n.freeze!==null&&n.freeze!==void 0&&this.parserFreezePanes(n.freeze,i),n.printTitle!==null&&n.printTitle!==void 0&&this.parserPrintTitle(n.printTitle,i),n.pageSetup!==void 0&&n.pageSetup.isSummaryRowBelow!==void 0&&(i.isSummaryRowBelow=n.pageSetup.isSummaryRowBelow),n.images!==void 0&&this.parserImages(n.images,i),n.autoFilters!==null&&n.autoFilters!==void 0&&this.parseFilters(n.autoFilters,i),i.index=t+1,i.mergeCells=this.mergeCells,i.hyperLinks=this.mHyperLinks,this.worksheets.push(i)}}mergeOptions(e,a){let t={};return this.applyProperties(e,t),this.applyProperties(a,t),t}applyProperties(e,a){let t=Object.keys(e);for(let n=0;n<t.length;n++)t[n]!=="name"&&(a[t[n]]=e[t[n]])}getCellName(e,a){return this.getColumnName(a)+e.toString()}getColumnName(e){e--;let a="";do{let t=e%26;e=e/26-1,a=String.fromCharCode(65+t)+a}while(e>=0);return a}parserPrintTitle(e,a){let t="",n;if(e.fromRow!==null&&e.fromRow!==void 0){let l=e.fromRow,d;e.toRow!==null&&e.toRow!==void 0?d=e.toRow:d=e.fromRow,n="$"+l+":$"+d}let i;if(e.fromColumn!==null&&e.fromColumn!==void 0){let l=e.fromColumn,d;e.toColumn!==null&&e.toColumn!==void 0?d=e.toColumn:d=e.fromColumn,i="$"+this.getColumnName(l)+":$"+this.getColumnName(d)}n!==void 0&&(t+=a.name+"!"+n),i!==void 0&&n!==void 0?t+=","+(a.name+"!"+i):i!==void 0&&(t+=a.name+"!"+i),t!==""&&this.printTitles.set(a.index-1,t)}parserFreezePanes(e,a){a.freezePanes=new hd,e.row!==null&&e.row!==void 0?a.freezePanes.row=e.row:a.freezePanes.row=0,e.column!==null&&e.column!==void 0?a.freezePanes.column=e.column:a.freezePanes.column=0,a.freezePanes.leftCell=this.getCellName(a.freezePanes.row+1,a.freezePanes.column+1)}parserColumns(e,a){let t=e.length;a.columns=[];for(let n=0;n<t;n++){let i=new sd;if(e[n].index!==null&&e[n].index!==void 0)i.index=e[n].index;else throw Error("Column index is missing.");e[n].width!==null&&e[n].width!==void 0&&(i.width=e[n].width),a.columns.push(i)}}parserRows(e,a){let t=e.length;a.rows=new dd;let n=0;for(let i=0;i<t;i++){let l=this.parserRow(e[i],n);n=l.index,a.rows.add(l)}this.insertMergedCellsStyle(a)}insertMergedCellsStyle(e){this.mergeCells.length>0&&this.mergedCellsStyle.forEach((a,t)=>{let n=e.rows.filter(i=>i.index===a.y)[0];if(La(n)){let i=e.rows.filter(u=>u.index<=a.y),l=new ba;l.index=a.y,l.cells=new Ma,l.cells.add(this.createCell(a,t));let d=0;i.length>0&&(d=e.rows.indexOf(i[i.length-1])+1),e.rows.splice(d,0,l)}else{let i=n.cells.filter(l=>l.index===a.x)[0];if(!La(i))i.styleIndex=a.styleIndex;else{let l=n.cells.filter(u=>u.index<=a.x),d=0;l.length>0&&(d=n.cells.indexOf(l[l.length-1])+1),n.cells.splice(d,0,this.createCell(a,t))}}})}createCell(e,a){let t=new ur;return t.refName=a,t.index=e.x,t.cellStyle=new Ee,t.styleIndex=e.styleIndex,t}parserRow(e,a){let t=new ba;if(e.height!==null&&e.height!==void 0&&(t.height=e.height),e.index!==null&&e.index!==void 0)t.index=e.index;else throw Error("Row index is missing.");return e.grouping!==null&&e.grouping!==void 0&&this.parseGrouping(e.grouping,t),this.parseCells(e.cells,t),t}parseGrouping(e,a){a.grouping=new cd,e.outlineLevel!==void 0&&(a.grouping.outlineLevel=e.outlineLevel),e.isCollapsed!==void 0&&(a.grouping.isCollapsed=e.isCollapsed),e.isHidden!==void 0&&(a.grouping.isHidden=e.isHidden)}parseCells(e,a){a.cells=new Ma;let t=e!==void 0?e.length:0,n=1,i=1;for(let l=0;l<t;l++){let d=e[l],u=new ur;if(d.index!==null&&d.index!==void 0)u.index=d.index;else throw Error("Cell index is missing.");if(u.index<n?n=u.index:u.index>i&&(i=u.index),u.refName=this.getCellName(a.index,u.index),d.rowSpan!==null&&d.rowSpan!==void 0?u.rowSpan=d.rowSpan-1:u.rowSpan=0,d.colSpan!==null&&d.colSpan!==void 0?u.colSpan=d.colSpan-1:u.colSpan=0,d.hyperlink!==null&&d.hyperlink!==void 0){let m=new mr;d.hyperlink.target!==void 0&&(m.target=d.hyperlink.target,d.hyperlink.displayText!==void 0?u.value=d.hyperlink.displayText:u.value=d.hyperlink.target,u.type=this.getCellValueType(u.value),m.ref=u.refName,m.rId=this.mHyperLinks.length+1,this.mHyperLinks.push(m),u.cellStyle=new Ee,this.parserCellStyle(d.style!==void 0?this.mergeOptions(d.style,this.hyperlinkStyle):this.hyperlinkStyle,u.cellStyle,"string"),u.styleIndex=u.cellStyle.index)}d.formula!==null&&d.formula!==void 0&&(u.formula=d.formula,u.type="formula"),d.value!==null&&d.value!==void 0&&(u.formula!==void 0?u.value=0:(u.value=d.value,u.type=this.getCellValueType(u.value))),d.style!==null&&d.style!==void 0&&u.styleIndex===void 0?(u.cellStyle=new Ee,u.value instanceof Date?this.parserCellStyle(d.style,u.cellStyle,u.type,14):this.parserCellStyle(d.style,u.cellStyle,u.type),u.styleIndex=u.cellStyle.index):u.value instanceof Date&&(u.cellStyle=new Ee,this.parserCellStyle({},u.cellStyle,u.type,14),u.styleIndex=u.cellStyle.index),this.parseCellType(u),this.mergeCells=this.processMergeCells(u,a.index,this.mergeCells),a.cells.add(u)}a.spans=n+":"+i}GetColors(){let e;return e=new Map,e.set("WHITE","FFFFFFFF"),e.set("SILVER","FFC0C0C0"),e.set("GRAY","FF808080"),e.set("BLACK","FF000000"),e.set("RED","FFFF0000"),e.set("MAROON","FF800000"),e.set("YELLOW","FFFFFF00"),e.set("OLIVE","FF808000"),e.set("LIME","FF00FF00"),e.set("GREEN","FF008000"),e.set("AQUA","FF00FFFF"),e.set("TEAL","FF008080"),e.set("BLUE","FF0000FF"),e.set("NAVY","FF000080"),e.set("FUCHSIA","FFFF00FF"),e.set("PURPLE","FF800080"),e}processColor(e){return e.indexOf("#")===0?e.replace("#","FF"):(e=e.toUpperCase(),this.rgbColors=this.GetColors(),this.rgbColors.has(e)?e=this.rgbColors.get(e):e="FF000000",e)}processCellValue(e,a){let t=e;if(e.indexOf("<font")!==-1||e.indexOf("<a")!==-1||e.indexOf("<b>")!==-1||e.indexOf("<i>")!==-1||e.indexOf("<u>")!==-1){let n="",i=e.indexOf("<",0),l=e.indexOf(">",i+1);if(i>=0&&l>=0){for(i!==0&&(n+='<r><t xml:space="preserve">'+this.processString(e.substring(0,i))+"</t></r>");i>=0&&l>=0;)if(l=e.indexOf(">",i+1),l>=0){let d=e.substring(i+1,l);i=e.indexOf("<",l+1),i<0&&(i=t.length);let u=t.substring(l+1,i);if(u.length!==0){let m=d.split(" ");if(m.length>0&&(n+="<r><rPr>"),m.length>1)for(let c of m)switch(c.trim().substring(0,5)){case"size=":n+='<sz val="'+c.substring(6,c.length-1)+'"/>';break;case"face=":n+='<rFont val="'+c.substring(6,c.length-1)+'"/>';break;case"color":n+='<color rgb="'+this.processColor(c.substring(7,c.length-1))+'"/>';break;case"href=":let b=new mr;b.target=c.substring(6,c.length-1).trim(),b.ref=a.refName,b.rId=this.mHyperLinks.length+1,this.mHyperLinks.push(b),n+='<color rgb="FF0000FF"/><u/><b/>';break}else if(m.length===1)switch(m[0].trim()){case"b":n+="<b/>";break;case"i":n+="<i/>";break;case"u":n+="<u/>";break}n+='</rPr><t xml:space="preserve">'+this.processString(u)+"</t></r>"}}return n===""?t:n}else return t}else return t}applyGlobalStyle(e,a){this.cellStyles.has(e.name)&&(a.index=this.mStyles.filter(t=>t.name===e.name)[0].index,a.name=e.name)}parserCellStyle(e,a,t,n){if(e.name!==null&&e.name!==void 0)if(a.isGlobalStyle)a.name=e.name;else{this.applyGlobalStyle(e,a);return}e.backColor!==null&&e.backColor!==void 0&&(a.backColor=e.backColor),a.borders=new rl,e.borders!==null&&e.borders!==void 0&&this.parserBorder(e.borders,a.borders.all),e.leftBorder!==null&&e.leftBorder!==void 0&&this.parserBorder(e.leftBorder,a.borders.left),e.rightBorder!==null&&e.rightBorder!==void 0&&this.parserBorder(e.rightBorder,a.borders.right),e.topBorder!==null&&e.topBorder!==void 0&&this.parserBorder(e.topBorder,a.borders.top),e.bottomBorder!==null&&e.bottomBorder!==void 0&&this.parserBorder(e.bottomBorder,a.borders.bottom),e.fontName!==null&&e.fontName!==void 0&&(a.fontName=e.fontName),e.fontSize!==null&&e.fontSize!==void 0&&(a.fontSize=e.fontSize),e.fontColor!==null&&e.fontColor!==void 0&&(a.fontColor=e.fontColor),e.italic!==null&&e.italic!==void 0&&(a.italic=e.italic),e.bold!==null&&e.bold!==void 0&&(a.bold=e.bold),e.hAlign!==null&&e.hAlign!==void 0&&(a.hAlign=e.hAlign.toLowerCase()),e.indent!==null&&e.indent!==void 0&&(a.indent=e.indent,a.hAlign==="left"||a.hAlign==="right"||(a.hAlign="left")),e.rotation!==null&&e.rotation!==void 0&&(a.rotation=e.rotation),e.vAlign!==null&&e.vAlign!==void 0&&(a.vAlign=e.vAlign.toLowerCase()),e.underline!==null&&e.underline!==void 0&&(a.underline=e.underline),e.strikeThrough!==null&&e.strikeThrough!==void 0&&(a.strikeThrough=e.strikeThrough),e.wrapText!==null&&e.wrapText!==void 0&&(a.wrapText=e.wrapText),e.numberFormat!==null&&e.numberFormat!==void 0?e.type!==null&&e.type!==void 0?a.numberFormat=this.getNumberFormat(e.numberFormat,e.type):a.numberFormat=this.getNumberFormat(e.numberFormat,t):(n!==void 0&&(a.numFmtId=14),a.numberFormat="GENERAL"),a.index=this.processCellStyle(a)}switchNumberFormat(e,a){let t=this.getNumberFormat(e,a);if(t!==e){let n=this.mNumFmt.get(e);if(n!==void 0&&(n.formatCode=t,this.mNumFmt.has(t))){for(let i of this.mCellStyleXfs)i.numFmtId===n.numFmtId&&(i.numFmtId=this.mNumFmt.get(t).numFmtId);for(let i of this.mCellXfs)i.numFmtId===n.numFmtId&&(i.numFmtId=this.mNumFmt.get(t).numFmtId)}}}changeNumberFormats(e){if(typeof e=="string"){const t=new RegExp(this.currency,"g");e=e.replace(t,"[$"+this.currency+"]")}else if(typeof e=="object")for(var a=0;a<e.length;a++)e[a]=e[a].replace(this.currency,"[$"+this.currency+"]");return e}getNumberFormat(e,a){let t;switch(a){case"number":try{t=this.intl.getNumberPattern({format:e,currency:this.currency,useGrouping:!0},!0),this.currency.length>1&&(t=this.changeNumberFormats(t))}catch{t=e}break;case"datetime":try{t=this.intl.getDatePattern({skeleton:e,type:"dateTime"},!0)}catch{try{t=this.intl.getDatePattern({format:e,type:"dateTime"},!0)}catch{t=e}}break;case"date":try{t=this.intl.getDatePattern({skeleton:e,type:"date"},!0)}catch{try{t=this.intl.getDatePattern({format:e,type:"date"},!0)}catch{t=e}}break;case"time":try{t=this.intl.getDatePattern({skeleton:e,type:"time"},!0)}catch{try{t=this.intl.getDatePattern({format:e,type:"time"},!0)}catch{t=e}}break;default:t=e;break}return t}parserBorder(e,a){e.color!==null&&e.color!==void 0?a.color=e.color:a.color="#000000",e.lineStyle!==null&&e.lineStyle!==void 0?a.lineStyle=e.lineStyle:a.lineStyle="thin"}processCellStyle(e){if(e.isGlobalStyle)return this.processNumFormatId(e),this.mStyles.push(e),this.mStyles.length;{let a=this.compareStyle(e);return a.result?a.index:(this.processNumFormatId(e),this.mStyles.push(e),this.mStyles.length)}}processNumFormatId(e){if(e.numberFormat!=="GENERAL"&&!this.mNumFmt.has(e.numberFormat)){let a=this.mNumFmt.size+164;this.mNumFmt.set(e.numberFormat,new dr(a,e.numberFormat))}}isNewFont(e){let a=!1,t=0;for(let n of this.mFonts){t++;let i;if(e.fontColor!==void 0&&(i="FF"+e.fontColor.replace("#","")),a=n.color===i&&n.b===e.bold&&n.i===e.italic&&n.u===e.underline&&n.strike===e.strikeThrough&&n.name===e.fontName&&n.sz===e.fontSize,a)break}return t=t-1,{index:t,result:a}}isNewBorder(e){let a=new Ee;return this.isAllBorder(e.borders)?a.borders.all.color===e.borders.all.color&&a.borders.all.lineStyle===e.borders.all.lineStyle:a.borders.left.color===e.borders.left.color&&a.borders.left.lineStyle===e.borders.left.lineStyle&&a.borders.right.color===e.borders.right.color&&a.borders.right.lineStyle===e.borders.right.lineStyle&&a.borders.top.color===e.borders.top.color&&a.borders.top.lineStyle===e.borders.top.lineStyle&&a.borders.bottom.color===e.borders.bottom.color&&a.borders.bottom.lineStyle===e.borders.bottom.lineStyle}isAllBorder(e){let a=new Ee;return a.borders.all.color!==e.all.color&&a.borders.all.lineStyle!==e.all.lineStyle}compareStyle(e){let a=!0,t=0;for(let n of this.mStyles)if(a=n.isGlobalStyle?!1:n.backColor===e.backColor&&n.bold===e.bold&&n.numFmtId===e.numFmtId&&n.numberFormat===e.numberFormat&&n.type===e.type&&n.fontColor===e.fontColor&&n.fontName===e.fontName&&n.fontSize===e.fontSize&&n.hAlign===e.hAlign&&n.italic===e.italic&&n.underline===e.underline&&n.strikeThrough===e.strikeThrough&&n.vAlign===e.vAlign&&n.indent===e.indent&&n.rotation===e.rotation&&n.wrapText===e.wrapText&&n.borders.all.color===e.borders.all.color&&n.borders.all.lineStyle===e.borders.all.lineStyle&&n.borders.left.color===e.borders.left.color&&n.borders.left.lineStyle===e.borders.left.lineStyle&&n.borders.right.color===e.borders.right.color&&n.borders.right.lineStyle===e.borders.right.lineStyle&&n.borders.top.color===e.borders.top.color&&n.borders.top.lineStyle===e.borders.top.lineStyle&&n.borders.bottom.color===e.borders.bottom.color&&n.borders.bottom.lineStyle===e.borders.bottom.lineStyle,a){t=n.index;break}return{index:t,result:a}}contains(e,a){let t=e.indexOf(a);return t>-1&&t<e.length}getCellValueType(e){return e instanceof Date?"datetime":typeof e=="boolean"?"boolean":typeof e=="number"?"number":"string"}parseCellType(e){let a=e.type,t,n=e.value;switch(a){case"datetime":if(n=this.toOADate(n),e.cellStyle!==void 0&&e.cellStyle.name!==void 0&&this.globalStyles.has(e.cellStyle.name)){let l=this.globalStyles.get(e.cellStyle.name);this.switchNumberFormat(l.format,l.type)}t="n";break;case"boolean":n=n?1:0,t="b";break;case"number":t="n",e.cellStyle!==void 0&&e.cellStyle.name!==void 0&&this.globalStyles.has(e.cellStyle.name)&&this.switchNumberFormat(this.globalStyles.get(e.cellStyle.name).format,"number");break;case"string":this.sharedStringCount++,t="s";let i=this.processCellValue(n,e);this.contains(this.sharedString,i)||this.sharedString.push(i),n=this.sharedString.indexOf(i);break}e.saveType=t,e.value=n}parserImages(e,a){let t=e.length;a.images=[];for(let n=0;n<t;n++){let i=this.parserImage(e[n]);a.images.push(i)}}parseFilters(e,a){if(a.autoFilters=new Nd,e.row!==null&&e.row!==void 0)a.autoFilters.row=e.row;else throw new Error("Argument Null Exception: row null or empty");if(e.lastRow!==null&&e.lastRow!==void 0)a.autoFilters.lastRow=e.lastRow;else throw new Error("Argument Null Exception: lastRow cannot be null or empty");if(e.column!==null&&e.column!==void 0)a.autoFilters.column=e.column;else throw new Error("Argument Null Exception: column cannot be null or empty");if(e.lastColumn!==null&&e.row!==void 0)a.autoFilters.lastColumn=e.lastColumn;else throw new Error("Argument Null Exception: lastColumn cannot be null or empty")}parserImage(e){let a=new pd;return e.image!==null&&e.image!==void 0&&(a.image=e.image),e.row!==null&&e.row!==void 0&&(a.row=e.row),e.column!==null&&e.column!==void 0&&(a.column=e.column),e.lastRow!==null&&e.lastRow!==void 0&&(a.lastRow=e.lastRow),e.lastColumn!==null&&e.lastColumn!==void 0&&(a.lastColumn=e.lastColumn),e.width!==null&&e.width!==void 0&&(a.width=e.width),e.height!==null&&e.height!==void 0&&(a.height=e.height),e.horizontalFlip!==null&&e.horizontalFlip!==void 0&&(a.horizontalFlip=e.horizontalFlip),e.verticalFlip!==null&&e.verticalFlip!==void 0&&(a.verticalFlip=e.verticalFlip),e.rotation!==null&&e.rotation!==void 0&&(a.rotation=e.rotation),e.firstRowOffset!==null&&e.firstRowOffset!==void 0&&(a.firstRowOffset=e.firstRowOffset),e.firstColumnOffset!==null&&e.firstColumnOffset!==void 0&&(a.firstColumnOffset=e.firstColumnOffset),a}saveAsBlob(e,a){switch(e){case"text/csv":return new Promise((t,n)=>{let i={};i.blobData=this.csvHelper.saveAsBlob(a),t(i)});default:return new Promise((t,n)=>{this.saveInternal(),this.mArchive.saveAsBlob().then(i=>{let l={};l.blobData=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),t(l)})})}}save(e,a){if(e==null||e==="")throw new Error("Argument Null Exception: fileName cannot be null or empty");let t=e.match(".xlsx$"),n=e.match(".csv$");if(t!==null&&t[0]==="."+this.mSaveType)this.saveInternal(),this.mArchive.save(e).then(()=>{this.mArchive.destroy()});else if(n!==null&&n[0]==="."+this.mSaveType)this.csvHelper.save(e);else throw Error("Save type and file extension is different.")}saveInternal(){this.saveWorkbook(),this.saveWorksheets(),this.saveSharedString(),this.saveStyles(),this.saveApp(this.builtInProperties),this.saveCore(this.builtInProperties),this.saveContentType(),this.saveTopLevelRelation(),this.saveWorkbookRelation()}saveWorkbook(){let e='<?xml version="1.0" encoding="utf-8"?><workbook xmlns:r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns= "http://schemas.openxmlformats.org/spreadsheetml/2006/main"><workbookPr codeName="ThisWorkbook" defaultThemeVersion= "153222"/><bookViews><workbookView activeTab="0"/></bookViews>',a="<sheets>",t=this.worksheets.length;for(let n=0;n<t;n++){let i=this.worksheets[n].name;i=i.replace("&","&amp;"),i=i.replace("<","&lt;"),i=i.replace(">","&gt;"),i=i.replace('"',"&quot;"),a+='<sheet name="'+i+'" sheetId="'+(n+1).toString()+'" r:id ="rId'+(n+1).toString()+'" />'}if(a+="</sheets>",e+=a,this.printTitles.size>0){let n="<definedNames>";this.printTitles.forEach((i,l)=>{n+='<definedName name="_xlnm.Print_Titles" localSheetId="'+l+'">'+i+"</definedName>"}),n+="</definedNames>",e+=n}this.addToArchive(e+"</workbook>","xl/workbook.xml")}saveWorksheets(){let e=this.worksheets.length;for(let a=0;a<e;a++)this.saveWorksheet(this.worksheets[a],a)}saveWorksheet(e,a){let t=new cr,n='<?xml version="1.0" encoding="utf-8" standalone="yes"?><worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';if(e.isSummaryRowBelow?n+="<sheetPr />":n+='<sheetPr><outlinePr summaryBelow="0" ></outlinePr></sheetPr>',n+=this.saveSheetView(e),e.columns!==void 0){let i="<cols>";for(let l of e.columns)l.width!==void 0?i+='<col min="'+l.index+'" max="'+l.index+'" width="'+this.pixelsToColumnWidth(l.width)+'" customWidth="1" />':i+='<col min="'+l.index+'" max="'+l.index+'" width="8.43" customWidth="1" />';n+=i+"</cols>"}if(n+="<sheetData>",t.append(n),n="",e.rows!==void 0)for(let i of e.rows){let l='<row r="'+i.index+'" ';La(i.spans)||(l+='spans="'+i.spans+'" '),i.height!==void 0&&(l+='ht="'+this.pixelsToRowHeight(i.height)+'" customHeight="1" '),i.grouping!==void 0&&(i.grouping.isHidden&&(l+='hidden="1" '),i.grouping.outlineLevel!==void 0&&(l+='outlineLevel="'+i.grouping.outlineLevel+'" '),i.grouping.isCollapsed&&(l+='collapsed="1" ')),l+=">";for(let d of i.cells)d!==void 0&&(d.value!==void 0||d.cellStyle!==void 0)&&(l+='<c r="'+d.refName+'" ',d.saveType!==void 0&&(l+='t="'+d.saveType+'" '),d.styleIndex!==void 0&&(l+='s="'+d.styleIndex+'" '),l+=" >",d.formula!==void 0&&(l+="<f>"+d.formula+"</f>"),d.value!==void 0?l+="<v>"+d.value+"</v></c>":l+="</c>");l+="</row>",t.append(l)}if(n+="</sheetData>",e.autoFilters!==null&&e.autoFilters!==void 0&&(n+='<autoFilter ref="'+this.getCellName(e.autoFilters.row,e.autoFilters.column)+":"+this.getCellName(e.autoFilters.lastRow,e.autoFilters.lastColumn)+'"/>'),e.mergeCells.length>0){n+='<mergeCells count="'+e.mergeCells.length+'">';for(let i of e.mergeCells)n+='<mergeCell ref="'+i.ref+'" />';n+="</mergeCells>"}if(e.hyperLinks.length>0){n+="<hyperlinks>";for(let i of e.hyperLinks)n+='<hyperlink ref="'+i.ref+'" r:id="rId'+i.rId+'" />';n+="</hyperlinks>"}n+='<pageMargins left="0.75" right="0.75" top="1" bottom="1" header="0.5" footer="0.5" /><headerFooter scaleWithDoc="1" alignWithMargins="0" differentFirst="0" differentOddEven="0" />',e.images!=null&&e.images.length>0&&(this.drawingCount++,this.saveDrawings(e,e.index),n+='<drawing r:id="rId'+(e.hyperLinks.length+1)+'"/>'),this.addToArchive(this.saveSheetRelations(e),"xl/worksheets/_rels/sheet"+e.index+".xml.rels"),t.append(n+"</worksheet>"),this.addToArchive(t.getBlob(),"xl/worksheets/sheet"+(a+1)+".xml")}saveDrawings(e,a){let t=new cr,n='<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">';if(e.images!==void 0){let i=0;for(let l of e.images){l.height!==void 0&&l.width!==void 0?(this.updatelastRowOffset(e,l),this.updatelastColumnOffSet(e,l),l.lastRow-=1,l.lastColumn-=1):l.lastRow!==void 0&&l.lastColumn!==void 0&&(l.lastRowOffset=0,l.lastColOffset=0),i++,n+='<xdr:twoCellAnchor editAs="oneCell">',n+="<xdr:from><xdr:col>",n+=l.column-1,n+="</xdr:col><xdr:colOff>";const d=l.firstColumnOffset!==void 0?Math.round(l.firstColumnOffset/this.unitsProportions[7]):0;n+=d,n+="</xdr:colOff><xdr:row>",n+=l.row-1,n+="</xdr:row><xdr:rowOff>";const u=l.firstRowOffset!==void 0?Math.round(l.firstRowOffset/this.unitsProportions[7]):0;n+=u,n+="</xdr:rowOff></xdr:from>",n+="<xdr:to><xdr:col>",n+=l.lastColumn,n+="</xdr:col><xdr:colOff>",n+=l.lastColOffset,n+="</xdr:colOff><xdr:row>",n+=l.lastRow,n+="</xdr:row><xdr:rowOff>",n+=l.lastRowOffset,n+="</xdr:rowOff></xdr:to>",n+="<xdr:pic>",n+="<xdr:nvPicPr>",n+='<xdr:cNvPr id="'+i+'" name="Picture '+i+'"> </xdr:cNvPr>',n+='<xdr:cNvPicPr><a:picLocks noChangeAspect="1"/></xdr:cNvPicPr> </xdr:nvPicPr>',n+="<xdr:blipFill>",n+='<a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId'+i+'" cstate="print">',n+="</a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill>",n+="<xdr:spPr>",n+="<a:xfrm",l.rotation!=null&&l.rotation<=3600&&l.rotation>=-3600&&(n+=' rot="'+l.rotation*6e4+'"'),l.verticalFlip!=null&&l.verticalFlip!=!1&&(n+=' flipV="1"'),l.horizontalFlip!=null&&l.horizontalFlip!=!1&&(n+=' flipH="1"'),n+="/>",n+='<a:prstGeom prst="rect"><a:avLst /></a:prstGeom></xdr:spPr>',n+="</xdr:pic><xdr:clientData /></xdr:twoCellAnchor>";let m=this.convertBase64toImage(l.image);this.imageCount+=1,this.addToArchive(m,"xl/media/image"+this.imageCount+".png")}t.append(n),t.append("</xdr:wsDr>"),this.saveDrawingRelations(e),this.addToArchive(t.getBlob(),"xl/drawings/drawing"+this.drawingCount+".xml")}}getRowHeightPx(e,a){const t=e.rows;if(t!=null)for(let n=0;n<t.length;n++){const i=t[n];if(i&&i.index===a){if(i.height!==void 0&&i.height!==null)return i.height;break}}return this.convertToPixels(15)}getColWidthPx(e,a){const t=e.columns;if(t!=null)for(let n=0;n<t.length;n++){const i=t[n];if(i&&i.index===a){if(i.width!==void 0&&i.width!==null)return i.width;break}}return this.ColumnWidthToPixels(8.43)}updatelastRowOffset(e,a){let t=a.height,n=a.row,i=0;{let l=0;l=this.getRowHeightPx(e,n),a.firstRowOffset!==void 0&&a.firstRowOffset>0&&(i=Math.round(a.firstRowOffset*256/l))}for(;t>=0;){let l=0;l=this.getRowHeightPx(e,n);let d=l-i*l/256;if(d>t){a.lastRow=n,a.lastRowOffset=i+t*256/l;let u=0;u=this.getRowHeightPx(e,n),a.lastRowOffset=u*a.lastRowOffset/256,a.lastRowOffset=Math.round(a.lastRowOffset/this.unitsProportions[7]);break}else t-=d,n++,i=0}}updatelastColumnOffSet(e,a){let t=a.width,n=a.column,i=0;{let l=0;l=this.getColWidthPx(e,n),a.firstColumnOffset!==void 0&&a.firstColumnOffset>0&&(i=Math.round(a.firstColumnOffset*1024/l))}for(;t>=0;){let l=0;l=this.getColWidthPx(e,n);let d=l-i*l/1024;if(d>t){a.lastColumn=n,a.lastColOffset=i+t*1024/l;let u=0;u=this.getColWidthPx(e,n),a.lastColOffset=u*a.lastColOffset/1024,a.lastColOffset=Math.round(a.lastColOffset/this.unitsProportions[7]);break}else t-=d,n++,i=0}}convertToPixels(e){return e*this.unitsProportions[6]}convertBase64toImage(e){const a=window.atob(e),t=new ArrayBuffer(a.length),n=new Uint8Array(t);for(let l=0;l<a.length;l++)n[l]=a.charCodeAt(l);return new Blob([n],{type:"image/png"})}saveDrawingRelations(e){let a='<?xml version="1.0" encoding="utf-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">',t=e.images.length,n=this.imageCount-e.images.length;for(let i=1;i<=t;i++)n++,a+='<Relationship Id="rId'+i+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image'+n+'.png" />';this.addToArchive(a+"</Relationships>","xl/drawings/_rels/drawing"+this.drawingCount+".xml.rels")}pixelsToColumnWidth(e){let a=7,t=e>a+5?this.trunc((e-5)/a*100+.5)/100:e/(a+5);return t>1?(t*a+5)/a*256/256:t*(a+5)/a*256/256}ColumnWidthToPixels(e){let a=7,t=e>1?(e*a+5)/a*256/256:e*(a+5)/a*256/256;return this.trunc((256*t+this.trunc(128/a))/256*a)}trunc(e){let a=e-e%1;return a===0&&(e<0||e===0&&1/e!==1/0)?-0:a}pixelsToRowHeight(e){return e*this.unitsProportions[5]/this.unitsProportions[6]}saveSheetRelations(e){let a='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';for(let t of e.hyperLinks)a+='<Relationship Id="rId'+t.rId+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="'+this.processString(t.target)+'" TargetMode="External" />';return e.images!=null&&e.images.length>0&&(a+='<Relationship Id="rId'+(e.hyperLinks.length+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing'+this.drawingCount+'.xml" />'),a+="</Relationships>",a}saveSheetView(e){let a='<sheetViews><sheetView workbookViewId="0" ';return e.enableRtl===!0&&(a+='rightToLeft="1"'),e.showGridLines===!1?a+='showGridLines="0" >':a+=">",e.freezePanes!==void 0&&(a+='<pane state="frozen" topLeftCell="'+e.freezePanes.leftCell+'" ',e.freezePanes.row!==0&&(a+='ySplit="'+e.freezePanes.row+'" '),e.freezePanes.column!==0&&(a+='xSplit="'+e.freezePanes.column+'" '),a+="/>"),a+="</sheetView></sheetViews > ",a}saveSharedString(){let e=this.sharedString.length;if(e>0){let a='<?xml version="1.0" encoding="utf-8"?><sst uniqueCount="'+e+'" count="'+this.sharedStringCount+'" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',t="";for(let n=0;n<e;n++)this.sharedString[n].indexOf("<r>")!==0?(t+="<si><t>",t+=this.processString(this.sharedString[n]),t+="</t></si>"):(t+="<si>",t+=this.sharedString[n],t+="</si>");t+="</sst>",this.addToArchive(a+t,"xl/sharedStrings.xml")}}processString(e){if(typeof e=="string")e.indexOf("&")!==-1&&(e=e.replace(/&/g,"&amp;")),e.indexOf("<")!==-1&&(e=e.replace(/</g,"&lt;")),e.indexOf(">")!==-1&&(e=e.replace(/>/g,"&gt;")),e.indexOf("\v")!==-1&&(e=e.replace(/\v/g,"_x000B_"));else if(typeof e=="object")for(var a=0;a<e.length;a++)e[a].indexOf("&")!==-1&&(e[a]=e[a].replace(/&/g,"&amp;")),e[a].indexOf("<")!==-1&&(e[a]=e[a].replace(/</g,"&lt;")),e[a].indexOf(">")!==-1&&(e[a]=e[a].replace(/>/g,"&gt;")),e[a].indexOf("\v")!==-1&&(e[a]=e[a].replace(/\v/g,"_x000B_"));return e}saveStyles(){this.updateCellXfsStyleXfs();let e='<?xml version="1.0" encoding="utf-8"?><styleSheet xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';e+=this.saveNumberFormats(),e+=this.saveFonts(),e+=this.saveFills(),e+=this.saveBorders(),e+=this.saveCellStyleXfs(),e+=this.saveCellXfs(),e+=this.saveCellStyles(),this.addToArchive(e+"</styleSheet>","xl/styles.xml")}updateCellXfsStyleXfs(){for(let e of this.mStyles){let a;e.isGlobalStyle?(a=new ld,a.xfId=e.index-1):(a=new id,a.xfId=0);let t=this.isNewFont(e);if(t.result)a.fontId=t.index;else{let n=new lr;n.b=e.bold,n.i=e.italic,n.name=e.fontName,n.sz=e.fontSize,n.u=e.underline,n.strike=e.strikeThrough,n.color="FF"+e.fontColor.replace("#",""),this.mFonts.push(n),a.fontId=this.mFonts.length-1}if(e.backColor!=="none"){let n="FF"+e.backColor.replace("#","");if(this.mFills.has(n)){let i=this.mFills.get(n);a.fillId=i}else{let i=this.mFills.size+2;this.mFills.set(n,i),a.fillId=i}}else a.fillId=0;if(this.isNewBorder(e)?a.borderId=0:(this.mBorders.push(e.borders),a.borderId=this.mBorders.length),e.numberFormat!=="GENERAL")if(this.mNumFmt.has(e.numberFormat)){let n=this.mNumFmt.get(e.numberFormat);a.numFmtId=n.numFmtId}else{let n=this.mNumFmt.size+164;this.mNumFmt.set(e.numberFormat,new dr(n,e.numberFormat)),a.numFmtId=n}else e.numberFormat==="GENERAL"&&e.numFmtId===14?a.numFmtId=14:a.numFmtId=0;e.isGlobalStyle||(a.applyAlignment=1),a.alignment=new od,a.alignment.indent=e.indent,a.alignment.horizontal=e.hAlign,a.alignment.vertical=e.vAlign,a.alignment.wrapText=e.wrapText?1:0,a.alignment.rotation=e.rotation,e.isGlobalStyle?(this.mCellStyleXfs.push(a),this.mCellXfs.push(a)):this.mCellXfs.push(a)}}saveNumberFormats(){if(this.mNumFmt.size>=1){let e='<numFmts count="'+this.mNumFmt.size+'">';return this.mNumFmt.forEach((a,t)=>{e+='<numFmt numFmtId="'+a.numFmtId+'" formatCode="'+a.formatCode.replace(/"/g,"&quot;")+'" />'}),e+="</numFmts>"}else return""}saveFonts(){let e='<fonts count="'+this.mFonts.length+'">';if(this.mFonts.length>=1)for(let a of this.mFonts)e+="<font>",a.b&&(e+="<b />"),a.i&&(e+="<i />"),a.u&&(e+="<u />"),a.strike&&(e+="<strike />"),e+='<sz val="'+a.sz+'" />',e+='<color rgb="'+a.color+'" />',e+='<name val="'+a.name+'" /></font>';return e+"</fonts>"}saveFills(){let e='<fills count="'+(this.mFills.size+2)+'"><fill><patternFill patternType="none"></patternFill></fill><fill><patternFill patternType="gray125"></patternFill></fill>';return this.mFills.size>=1&&this.mFills.forEach((a,t)=>{e+='<fill><patternFill patternType="solid"><fgColor rgb="'+t+'" /><bgColor rgb="FFFFFFFF" /></patternFill></fill>'}),e+"</fills>"}saveBorders(){let e='<borders count="'+(this.mBorders.length+1)+'"><border><left /><right /><top /><bottom /><diagonal /></border>';if(this.mBorders.length>=1)for(let a of this.mBorders)if(this.isAllBorder(a)){let t=a.all.color.replace("#",""),n=a.all.lineStyle;e+='<border><left style="'+n+'"><color rgb="FF'+t+'" /></left><right style="'+n+'"><color rgb="FF'+t+'" /></right><top style="'+n+'"><color rgb="FF'+t+'" /></top><bottom style="'+n+'"><color rgb="FF'+t+'" /></bottom></border>'}else e+='<border><left style="'+a.left.lineStyle+'"><color rgb="FF'+a.left.color.replace("#","")+'" /></left><right style="'+a.right.lineStyle+'"><color rgb="FF'+a.right.color.replace("#","")+'" /></right><top style="'+a.top.lineStyle+'"><color rgb="FF'+a.top.color.replace("#","")+'" /></top><bottom style="'+a.bottom.lineStyle+'"><color rgb="FF'+a.bottom.color.replace("#","")+'" /></bottom></border>';return e+"</borders>"}saveCellStyles(){let e='<cellStyles  count="'+this.cellStyles.size+'">';return this.cellStyles.forEach((a,t)=>{e+='<cellStyle name="'+t+'" xfId="'+this.cellStyles.get(t).xfId+'"',t==="Normal"&&(e+=' builtinId="0"'),e+=" />"}),e+="</cellStyles>"}saveCellStyleXfs(){let e='<cellStyleXfs count="'+(this.mCellStyleXfs.length+1)+'"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" />';if(this.mCellStyleXfs.length>=1)for(let a of this.mCellStyleXfs)e+='<xf numFmtId="'+a.numFmtId+'" fontId="'+a.fontId+'" fillId="'+a.fillId+'" borderId="'+a.borderId+'" ',a.alignment!==void 0?e+=">"+this.saveAlignment(a)+"</xf>":e+=" />";return e+"</cellStyleXfs>"}saveCellXfs(){let e='<cellXfs count="'+(this.mCellXfs.length+1)+'"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" />';if(this.mCellXfs.length>=1)for(let a of this.mCellXfs)e+='<xf numFmtId="'+a.numFmtId+'" fontId="'+a.fontId+'" fillId="'+a.fillId+'" borderId="'+a.borderId+'" xfId="'+a.xfId+'" ',a.applyAlignment===1&&(e+='applyAlignment="1"'),e+=">"+this.saveAlignment(a)+"</xf>";return e+"</cellXfs>"}saveAlignment(e){let a="<alignment ";return e.alignment.horizontal!==void 0&&(a+='horizontal="'+e.alignment.horizontal+'" '),e.alignment.indent!==void 0&&e.alignment.indent!==0?a+='indent="'+e.alignment.indent+'" ':e.alignment.rotation!==void 0&&e.alignment.rotation!==0&&(a+='textRotation="'+e.alignment.rotation+'" '),e.alignment.vertical!==void 0&&(a+='vertical="'+e.alignment.vertical+'" '),a+='wrapText="'+e.alignment.wrapText+'" />',a}saveApp(e){let a='<?xml version="1.0" encoding="utf-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Essential XlsIO</Application>';e!==void 0&&(e.manager!==void 0&&(a+="<Manager>"+e.manager+"</Manager>"),e.company!==void 0&&(a+="<Company>"+e.company+"</Company>")),this.addToArchive(a+"</Properties>","docProps/app.xml")}saveCore(e){let a=new Date,t='<?xml version="1.0" encoding="utf-8" standalone="yes"?><cp:coreProperties xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties">';this.builtInProperties!==void 0?(e.author!==void 0&&(t+="<dc:creator>"+e.author+"</dc:creator>"),e.subject!==void 0&&(t+="<dc:subject>"+e.subject+"</dc:subject>"),e.category!==void 0&&(t+="<cp:category>"+e.category+"</cp:category>"),e.comments!==void 0&&(t+="<dc:description>"+e.comments+"</dc:description>"),e.title!==void 0&&(t+="<dc:title>"+e.title+"</dc:title>"),e.tags!==void 0&&(t+="<cp:keywords>"+e.tags+"</cp:keywords>"),e.status!==void 0&&(t+="<cp:contentStatus>"+e.status+"</cp:contentStatus>"),e.createdDate!==void 0?t+='<dcterms:created xsi:type="dcterms:W3CDTF">'+e.createdDate.toISOString()+"</dcterms:created>":t+='<dcterms:created xsi:type="dcterms:W3CDTF">'+a.toISOString()+"</dcterms:created>",e.modifiedDate!==void 0?t+='<dcterms:modified xsi:type="dcterms:W3CDTF">'+e.modifiedDate.toISOString()+"</dcterms:modified>":t+='<dcterms:modified xsi:type="dcterms:W3CDTF">'+a.toISOString()+"</dcterms:modified>"):(t+='<dcterms:created xsi:type="dcterms:W3CDTF">'+a.toISOString()+"</dcterms:created>",t+='<dcterms:modified xsi:type="dcterms:W3CDTF">'+a.toISOString()+"</dcterms:modified>"),t+="</cp:coreProperties>",this.addToArchive(t,"docProps/core.xml")}saveTopLevelRelation(){this.addToArchive('<?xml version="1.0" encoding="utf-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml" /><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml" /><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml" /></Relationships>',"_rels/.rels")}saveWorkbookRelation(){let e='<?xml version="1.0" encoding="utf-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">',a=this.worksheets.length,t=0;for(let n=0;n<a;n++,t++)e+='<Relationship Id="rId'+(n+1).toString()+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+(n+1).toString()+'.xml" />';e+='<Relationship Id="rId'+(++t).toString()+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" />',this.sharedStringCount>0&&(e+='<Relationship Id="rId'+(++t).toString()+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" />'),this.addToArchive(e+"</Relationships>","xl/_rels/workbook.xml.rels")}saveContentType(){let e='<?xml version="1.0" encoding="utf-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml" />',a="",t=this.worksheets.length,n=0;for(let i=0;i<t;i++)a+='<Override PartName="/xl/worksheets/sheet'+(i+1).toString()+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" />',this.worksheets[i].images!=null&&this.worksheets[i].images.length>0&&(n++,a+='<Override PartName="/xl/drawings/drawing'+n.toString()+'.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />');this.imageCount>0&&(a+='<Default Extension="png" ContentType="image/png" />'),this.sharedStringCount>0&&(e+='<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" />'),this.addToArchive(e+a+"</Types>","[Content_Types].xml")}addToArchive(e,a){if(typeof e=="string"){let t=new Blob([e],{type:"text/plain"}),n=new za(t,a);this.mArchive.addItem(n)}else{let t=new za(e,a);this.mArchive.addItem(t)}}processMergeCells(e,a,t){if(e.rowSpan!==0||e.colSpan!==0){let n=new il;n.x=e.index,n.width=e.colSpan,n.y=a,n.height=e.rowSpan;let i=this.getCellName(n.y,n.x),l=this.getCellName(a+n.height,e.index+n.width);n.ref=i+":"+l,t.add(n);let d={x:n.x,y:n.y},u={x:e.index+n.width,y:a+n.height};this.updatedMergedCellStyles(d,u,e)}return t}updatedMergedCellStyles(e,a,t){for(let n=e.x;n<=a.x;n++)for(let i=e.y;i<=a.y;i++)this.mergedCellsStyle.set(this.getCellName(i,n),{x:n,y:i,styleIndex:t.styleIndex})}dateToTicks(e,a,t){let n=864e9,i=[0,31,59,90,120,151,181,212,243,273,304,334,365],l=[0,31,60,91,121,152,182,213,244,274,305,335,366];if(e>=1&&e<=9999&&a>=1&&a<=12){let d=this.isLeapYear(e)?l:i,u=e-1;return(u*365+(u/4|0)-(u/100|0)+(u/400|0)+d[a-1]+t-1)*n}throw new Error("Not a valid date")}timeToTicks(e,a,t){if(e>=0&&e<24&&a>=0&&a<60&&t>=0&&t<60)return(e*3600+a*60+t)*1e4*1e3;throw new Error("Not valid time")}isLeapYear(e){return e%4===0&&(e%100!==0||e%400===0)}toOADate(e){let a=0;if(a=this.dateToTicks(e.getFullYear(),e.getMonth()+1,e.getDate())+this.timeToTicks(e.getHours(),e.getMinutes(),e.getSeconds()),a===0)return 0;let t=1e4*1e3*60*60*24,i=((((365*4+1)*25-1)*4+1)*4+((365*4+1)*25-1)*3-367)*t,l=((365*4+1)*25-1-365)*t;if(a<l)throw new Error("Arg_OleAutDateInvalid");let d=1e3*60*60*24;return(a-i)/1e4/d}}class wd{}function xd(r,e,a){if(!r.image)return null;const{base64:t,height:n,width:i}=r.image;if(!n||!i||n<10||i<10||!t)return null;let l=t;if(t.startsWith("data:image/")){const u=t.split(",");u.length===2&&(l=u[1])}return/^[A-Za-z0-9+/=]+$/.test(l)?{image:l,row:e,column:a,lastRow:e,lastColumn:a,height:n,width:i}:null}function Ya(r){var a;switch((a=String(r))==null?void 0:a.trim().toLowerCase()){case"center":case"centre":return"Center";case"left":return"Left";case"right":return"Right";case"justify":return"Justify";case"general":return"General";default:return}}function vd(r){var a;switch((a=String(r))==null?void 0:a.trim().toLowerCase()){case"top":return"top";case"center":return"center";case"bottom":return"bottom";default:return}}function Za(r){if(r.hAlign){const e=Ya(String(r.hAlign));e&&(r.hAlign=e)}if(r.vAlign){const e=vd(String(r.vAlign));e&&(r.vAlign=e)}return r}function Ed(r,e,a){if(r.maxRowsWarningThreshold&&e>r.maxRowsWarningThreshold&&a){console.warn(ts(e,r.maxRowsWarningThreshold));return}}function Ad(r,e){var t;const a=(t=String(r==null?void 0:r.type))==null?void 0:t.toLowerCase();if(a==="date"||a==="datetime"||a==="dateonly"||e instanceof Date)return"date"}function Dd(r){const e=r.hyperLink;if(!e||!e.target)return null;const a=e.target,t=e.displayText,i={target:a.includes(" ")?a.replace(/ /g,"%20"):a,type:"url"};return t&&(i.display=t),i}function Td(r,e){const a={},{rowIndex:t,colIndex:n,colSpan:i=1,rowSpan:l=1}=r;if(i<1||l<1)return a;for(let d=t;d<t+l;d++)for(let u=n;u<n+i;u++){const m=`${d}_${u}`;if(e.has(m))return a}for(let d=t;d<t+l;d++)for(let u=n;u<n+i;u++)e.add(`${d}_${u}`);return i>1&&(a.colSpan=i),l>1&&(a.rowSpan=l),a}function Rd(r){if(r.numberFormat)return r.numberFormat;const{column:e}=r;if(!(e!=null&&e.format))return null;if(typeof e.format=="object"&&e.format!==null){const a=e.format,t=a.format;if(t){const n=t.toUpperCase();if(n.startsWith("C")){const i=parseInt(n.slice(1),10)||2;return`$#,##0.${"0".repeat(i)}`}if(n.startsWith("P")){const i=parseInt(n.slice(1),10)||0;return i>0?`0.${"0".repeat(i)}%`:"0%"}return t}return a.skeleton??null}if(typeof e.format=="string"){const a=e.format.toUpperCase();if(a.startsWith("C")){const t=parseInt(a.slice(1),10)||2;return`$#,##0.${"0".repeat(t)}`}if(a.startsWith("P")){const t=parseInt(a.slice(1),10)||0;return t>0?`0.${"0".repeat(t)}%`:"0%"}return e.format}return null}function hr(r){const e=r==null?void 0:r.borders;e&&(delete e.left,delete e.right)}function Gd(r,e){if(!e||!r.column)return"";const a=r.aggregateColumn;if(a!=null&&a.columnName&&typeof e=="object"&&e!==null){const n=e[a.columnName];if(n&&typeof n=="object"){const i=Array.isArray(a.type)?a.type:[a.type];for(let d=0;d<i.length;d++){const u=i[d];if(u&&Object.prototype.hasOwnProperty.call(n,u))return n[u]}const l=Object.keys(n);if(l.length>0)return n[l[0]]}}const t=e[r.column.field];return t!==void 0?t:""}function kd(r,e){const a={};if(!e||!e.enabled)return a;const{isGroupHeader:t=!1,groupLevel:n=0}=r;if(!t)return a;const i=new Ee;return i.backColor=e.headerBackgroundColor??"#E8E8E8",i.bold=e.boldHeaders!==!1,n>0&&(i.indent=n),a.style=i,a.isGroupHeader=!0,a.groupLevel=n,a}function ll(r){if(Array.isArray(r))return r;if(r&&typeof r=="object"){const a=r.result;if(Array.isArray(a))return a}return[]}function sl(r,e){return e.range==="Custom"&&e.customRange?r.slice(e.customRange.startRow,e.customRange.endRow+1):r}async function pr(r,e){const a=r.gridRef.current,t=a.getDataModule(),i=(e.range??"All")!=="CurrentPage";let l;r.getAllData&&(l=await r.getAllData(t.getStateEventArgument(t.generateQuery())));const d=await Promise.resolve(a.getData(i,!1,l));let u=ll(d);return u=sl(u,e),u}function Fd(r,e){if(!e)return r;const a=new Map;return e.forEach(t=>{t.field&&a.set(t.field,t)}),r.map(t=>{const n=a.get(t.field);return n?{...t,...n}:t})}function ut(r){if(!r)return"Left";const e=String(r).toLowerCase();return{left:"Left",right:"Right",center:"Center",justify:"Justify"}[e]||"Left"}function yr(r){if(!r)return 100;if(typeof r=="number")return r;const e=parseInt(String(r).replace(/[^\d.-]/g,""),10);return isNaN(e)?100:e}function kn(r){return r.map(e=>({image:e.image??e.base64??"",row:e.row??0,column:e.column??0,lastRow:e.lastRow??e.row??0,lastColumn:e.lastColumn??e.column??0,width:e.width??0,height:e.height??0,horizontalFlip:!1,verticalFlip:!1,rotation:0,lastRowOffset:0,lastColOffset:0,firstRowOffset:0,firstColumnOffset:0}))}async function _d(r,e){var t,n;if(r.isMultipleExport&&r.exportGrids&&r.exportGrids.length>0)return Pd(r,e);const a=((n=(t=e==null?void 0:e.gridRef)==null?void 0:t.current)==null?void 0:n.enableDevMode)??!0;try{const i=await Fn(r,e,a,1),l={worksheets:[{columns:i.columns,rows:i.rows}],styles:[]},d=new Gn(l,"xlsx");if(i.images.length>0){const g=d.worksheets;if(g&&g[0]){g[0].images||(g[0].images=[]);const b=kn(i.images);g[0].images.push(...b)}}let u,m;if(r.isBlob===!0)m=d.saveAsBlob("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),u=(await m).blobData;else{const c=r.fileName||"export";d.save(`${c}.xlsx`),u=new Blob([],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})}if(r.onAfterExcelExport){const c={config:r,success:!0,error:null,...m&&{promise:m}};r.onAfterExcelExport(c)}return u}catch(i){if(r.onAfterExcelExport){const l={config:r,success:!1,error:i instanceof Error?i:new Error(String(i))};r.onAfterExcelExport(l)}if(a){const l=i instanceof Error?i:new Error(String(i));console.warn(qo,l)}throw new Error(`Excel export failed: ${i instanceof Error?i.message:String(i)}`)}}async function Fn(r,e,a,t=1){var X,Ne,K,O,xe,J,Re,Le,se,De,Fe,He,ha,na,Be,$e,M,f,pa,Da,ra,Ta,Ra,Ga,Na,ka,Ge,Fa,ia;const{onExcelCellCustomize:n}=r,i=((K=(Ne=(X=e==null?void 0:e.gridRef)==null?void 0:X.current)==null?void 0:Ne.groupSettings)==null?void 0:K.enabled)&&((Re=(J=(xe=(O=e==null?void 0:e.gridRef)==null?void 0:O.current)==null?void 0:xe.groupSettings)==null?void 0:J.columns)==null?void 0:Re.length)>0;let l;i&&(l={enabled:!0,groupByColumns:(se=(Le=e.gridRef.current)==null?void 0:Le.groupSettings)!=null&&se.columns?[...e.gridRef.current.groupSettings.columns]:[],boldHeaders:!0,headerBackgroundColor:"#E8E8E8"});let d=[];i&&((De=e==null?void 0:e.gridRef)!=null&&De.current)?d=await pr(e,r):!es(r.data)&&r.data.length>0?(d=ll(r.data),d=sl(d,r)):(Fe=e==null?void 0:e.gridRef)!=null&&Fe.current?d=await pr(e,r):d=[];let u=[],m={},c=[];if((He=e==null?void 0:e.gridRef)!=null&&He.current){let T=e.gridRef.current.getVisibleColumns();const v=r.columns&&r.columns.length>0?r.columns:void 0;T=Fd(T,v),c=[...T],u=T.filter(A=>A.visible!==!1&&A.field).map(A=>A.field),T.forEach(A=>{A.field&&(m[A.field]={width:yr(A.width),textAlign:ut(A.textAlign),headerTextAlign:ut(A.headerTextAlign||A.textAlign),headerText:A.headerText,type:A.type,format:A.format})})}else u=r.columns&&r.columns.length>0?r.columns.map(T=>typeof T=="string"?T:T.field):d.length>0?Object.keys(d[0]):[];if(r.onBeforeExcelExport){const T={columns:c.length>0?c:u.map(v=>({field:v})),dataSource:d,config:r,cancel:!1};if(r.onBeforeExcelExport(T),T.cancel){const v=new Error(as);return a&&console.warn(v.message),r.onAfterExcelExport&&r.onAfterExcelExport({config:r,success:!1,error:v}),Promise.reject(v)}d=T.dataSource??d,T.columns&&T.columns.length>0&&(c=T.columns,u=T.columns.filter(v=>v.visible!==!1&&v.field).map(v=>v.field),m={},T.columns.forEach(v=>{v.field&&(m[v.field]={width:yr(v.width),textAlign:ut(v.textAlign),headerTextAlign:ut(v.headerTextAlign||v.textAlign),headerText:v.headerText,type:v.type,format:v.format})}))}if(d.length===0)return r.onAfterExcelExport&&r.onAfterExcelExport({config:r,success:!1,error:new Error("No data to export. Ensure data is non-empty or range resolves to rows.")}),Promise.reject("No data to export. Ensure data is non-empty or range resolves to rows.");if(u.length===0)return r.onAfterExcelExport&&r.onAfterExcelExport({config:r,success:!1,error:new Error("No columns available for export. Provide columns or non-empty data.")}),Promise.reject("No columns available for export. Provide columns or non-empty data.");let g;l?g=jo(d,()=>!0,(Be=(na=(ha=e==null?void 0:e.gridRef)==null?void 0:ha.current)==null?void 0:na.groupSettings)==null?void 0:Be.groupSummaryPosition,(f=(M=($e=e==null?void 0:e.gridRef)==null?void 0:$e.current)==null?void 0:M.getGroupCaptionAggregateType)==null?void 0:f.call(M),((Da=(pa=e==null?void 0:e.gridRef)==null?void 0:pa.current)==null?void 0:Da.groupSettings)||{},new Set,"").currentViewData:g=d,Ed(r,g.length,a);const b=[],S=[],_=[],Z=new Set;u.forEach((T,v)=>{const A=m[T],j={index:v+1,width:(A==null?void 0:A.width)||100};S.push(j)});let C=t;(ra=r.header)!=null&&ra.rows&&r.header.rows.length>0&&r.header.rows.forEach(T=>{const v=T.cells.map((P,N)=>{const ee=Za(P.style?Object.assign(new Ee,P.style):new Ee);return{index:N+1,value:P.value||"",colSpan:P.colSpan||1,rowSpan:1,style:ee,hyperlink:P.hyperlink?{target:P.hyperlink.target,display:P.hyperlink.displayText,type:"url"}:void 0}}),A=Math.max(20,...v.map(P=>{var N;return(N=P.style)!=null&&N.fontSize?Number(P.style.fontSize)*1.5+6:0})),j=new ba,re=new Ma;v.forEach(P=>re.push(P)),j.index=C,j.cells=re,j.height=A,b.push(j),C++});const w=u.map((T,v)=>{const A=m[T],j=((A==null?void 0:A.headerTextAlign)||(A==null?void 0:A.textAlign)||"Left").toLowerCase(),re=Za(Object.assign(new Ee,{bold:!0,hAlign:Ya(j)}));return{index:v+1,value:(A==null?void 0:A.headerText)||T,colSpan:1,rowSpan:1,style:re}}),R=Math.max(20,...w.map(T=>{var v;return(v=T.style)!=null&&v.fontSize?Number(T.style.fontSize)*1.5+6:0})),k=new ba,z=new Ma;w.forEach(T=>z.push(T)),k.index=C,k.cells=z,k.height=R,b.push(k),C++;let E=0;for(let T=0;T<g.length;T++){const v=g[T],A=C+T,j=[];let re=20;const P=Ko(v),N=P?u.length:1;let ee=0;P&&(l!=null&&l.enabled)?(ee=v.flattedLevel??1,E=ee):!P&&(l!=null&&l.enabled)&&E>0&&(ee=E);for(let ie=0;ie<u.length;ie++){if(P&&ie>0)continue;const Xe=u[ie],Ye=ie+1,ve=m[Xe];let oa;if(P){const we=v,la=((Ga=(Ra=(Ta=e==null?void 0:e.gridRef)==null?void 0:Ta.current)==null?void 0:Ra.groupSettings)==null?void 0:Ga.captionFormat)||"compact",ya=(Na=l==null?void 0:l.groupByColumns)==null?void 0:Na[we.flattedLevel?we.flattedLevel-1:0];la==="verbose"?oa=`${ya}: ${we.key} - ${we.count} items`:oa=`${we.key} (${we.count})`}else oa=v[Xe];const _e={data:v,value:oa,column:{field:Xe,type:ve==null?void 0:ve.type,format:ve==null?void 0:ve.format},rowIndex:T,colIndex:P?0:ie,isGroupHeader:P,groupLevel:P?(v.flattedLevel??1)-1:0,colSpan:N};if(n){const we=n(_e);we instanceof Promise&&await we}const Ke=new Ee;!P&&(ve!=null&&ve.textAlign)&&(Ke.hAlign=Ya(ve.textAlign.toLowerCase())),_e.style&&Object.assign(Ke,_e.style),P&&(Ke.hAlign=Ya("left")),Za(Ke);const wa={value:_e.value,index:Ye,colSpan:P?N:1,rowSpan:1,style:Ke};if(!P){const we=xd(_e,A,Ye);we&&(_.push(we),wa.value="",re=Math.max(re,we.height+6),S[ie].width=Math.max(S[ie].width,we.width+6));const la=Dd(_e);la&&(wa.hyperlink=la);const ya=Td(_e,Z);ya.colSpan&&ya.colSpan>1&&(wa.colSpan=ya.colSpan);const sa=Rd(_e);if(sa){Ke.numberFormat=sa;const da=Ad(_e.column,_e.value);da&&(Ke.type=da)}}const Oa=kd(_e,l);Oa.style&&Object.assign(Ke,Oa.style),j.push(wa)}const be=new ba,Y=new Ma;j.forEach(ie=>Y.push(ie)),be.index=A,be.cells=Y,be.height=re,ee>0&&(l!=null&&l.enabled)&&!P&&(be.grouping={outlineLevel:ee,isCollapsed:!0,isHidden:!1}),b.push(be)}if((Ge=(ka=e==null?void 0:e.gridRef)==null?void 0:ka.current)!=null&&Ge.getFooterRowsObject){const v=e.gridRef.current.getFooterRowsObject().filter(A=>{var j;return A.isAggregateRow&&((j=A.cells)==null?void 0:j.length)});for(let A=0;A<v.length;A++){const j=v[A],re=(Fa=j.cells)==null?void 0:Fa.slice().sort((Y,ie)=>{const Xe=typeof Y.colIndex=="number"?Y.colIndex:typeof Y.index=="number"?Y.index:0,Ye=typeof ie.colIndex=="number"?ie.colIndex:typeof ie.index=="number"?ie.index:0;return Xe-Ye}),P=[];let N=20;if(re==null||re.forEach(Y=>{var Ye;if(Y.isSpanned)return;const ie=Za(Object.assign(new Ee,{hAlign:Ya((((Ye=Y.column)==null?void 0:Ye.textAlign)||"Left").toLowerCase())}));ie.backColor="#F6F6F6",hr(ie);const Xe=Gd(Y,j.data);P.push({index:(typeof Y.colIndex=="number"?Y.colIndex:typeof Y.index=="number"?Y.index:0)+1,value:Xe,colSpan:Y.colSpan&&Y.colSpan>0?Y.colSpan:1,rowSpan:Y.rowSpan&&Y.rowSpan>0?Y.rowSpan:1,style:ie}),ie.fontSize&&(N=Math.max(N,Number(ie.fontSize)*1.5+6))}),!P.length)continue;const ee=new ba,be=new Ma;P.forEach(Y=>be.push(Y)),ee.index=b.length+1,ee.cells=be,ee.height=N,b.push(ee)}}if((ia=r.footer)!=null&&ia.rows&&r.footer.rows.length>0){let T=b.length+1;r.footer.rows.forEach(v=>{const A=v.cells.map((N,ee)=>{const be=Za(N.style?Object.assign(new Ee,N.style):new Ee);return be.backColor="#F6F6F6",hr(be),{index:ee+1,value:N.value||"",colSpan:N.colSpan||1,rowSpan:1,style:be,hyperlink:N.hyperlink?{target:N.hyperlink.target,display:N.hyperlink.displayText,type:"url"}:void 0}}),j=Math.max(20,...A.map(N=>{var ee;return(ee=N.style)!=null&&ee.fontSize?Number(N.style.fontSize)*1.5+6:0})),re=new ba,P=new Ma;A.forEach(N=>P.push(N)),re.index=T,re.cells=P,re.height=j,b.push(re),T++})}return{columns:S,rows:b,images:_}}async function Pd(r,e){var t,n;const a=((n=(t=e==null?void 0:e.gridRef)==null?void 0:t.current)==null?void 0:n.enableDevMode)??!0;try{if(!r.exportGrids||r.exportGrids.length===0)throw new Error("No grids provided for export. Provide at least one grid reference.");const i=r.multipleExport||{},l=i.type??"AppendToPage",d=i.blankRows??5;return l==="NewPage"?await Id(r,e,a):await Bd(r,e,d,a)}catch(i){if(r.onAfterExcelExport){const l={config:r,success:!1,error:i instanceof Error?i:new Error(String(i))};r.onAfterExcelExport(l)}if(a){const l=i instanceof Error?i:new Error(String(i));console.warn(qo,l)}throw new Error(`Multiple grid Excel export failed: ${i instanceof Error?i.message:String(i)}`)}}async function Bd(r,e,a,t){var g,b;const n={worksheets:[{columns:[],rows:[]}],styles:[]};let i=1;const l=[],d={};for(let S=0;S<(((g=r.exportGrids)==null?void 0:g.length)??0);S++){const _=(b=r.exportGrids)==null?void 0:b[S],Z={...r,range:r.range??"All"},C=await Fn(Z,{...e,gridRef:_},t,i);if(S===0?(n.worksheets[0].columns=C.columns,C.columns.forEach(w=>{d[`col_${w.index}`]=w})):C.columns.forEach(w=>{const R=`col_${w.index}`,k=d[parseInt(R.toString(),10)];k?k.width=Math.max(k.width,w.width):d[parseInt(R.toString(),10)]=w}),n.worksheets[0].rows.push(...C.rows),S<r.exportGrids.length-1){const w=i+C.rows.length;for(let R=0;R<a;R++){const k=new ba;k.index=w+R,k.cells=new Ma,n.worksheets[0].rows.push(k)}i=w+a}else i+=C.rows.length;C.images.length>0&&l.push(...C.images)}const u=new Gn(n,"xlsx");if(l.length>0){const _=u.worksheets;if(_&&_[0]){_[0].images||(_[0].images=[]);const Z=kn(l);_[0].images.push(...Z)}}let m,c;if(r.isBlob===!0)c=u.saveAsBlob("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),m=(await c).blobData;else{const S=r.fileName||"export";u.save(`${S}.xlsx`),m=new Blob([],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})}if(r.onAfterExcelExport){const S={config:r,success:!0,error:null,...c&&{promise:c}};r.onAfterExcelExport(S)}return m}async function Id(r,e,a){const t={worksheets:[],styles:[]},n=[];for(let u=0;u<r.exportGrids.length;u++){const m=r.exportGrids[u],c={...r,range:r.range??"All"},g=await Fn(c,{...e,gridRef:m},a,1);t.worksheets.push({columns:g.columns,rows:g.rows}),g.images.length>0&&n.push({sheetIndex:u,images:g.images})}const i=new Gn(t,"xlsx");if(n.length>0){const m=i.worksheets;m&&n.forEach(c=>{const g=m[c.sheetIndex];if(g){g.images||(g.images=[]);const b=kn(c.images);g.images.push(...b)}})}let l,d;if(r.isBlob===!0)d=i.saveAsBlob("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),l=(await d).blobData;else{const u=r.fileName||"export";i.save(`${u}.xlsx`),l=new Blob([],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})}if(r.onAfterExcelExport){const u={config:r,success:!0,error:null,...d&&{promise:d}};r.onAfterExcelExport(u)}return l}function zd(r){const[e,a]=y.useState(0),[t,n]=y.useState(!1),[i,l]=y.useState(null),d=y.useCallback(async u=>{n(!0),l(null),a(0);try{a(10);const m=await _d(u,r);return a(100),setTimeout(()=>{n(!1),a(0)},500),m}catch(m){const c=m instanceof Error?m.message:String(m);throw l(c),n(!1),a(0),new Error(`Excel export failed: ${c}`)}},[r]);return y.useEffect(()=>{xn(vn.ExcelExport,"DataGrid")},[]),{excelExport:d,progress:e,isExporting:t,error:i}}const qe="#INVALID_REFERENCE",Ia="#CIRCREF!",Ae="#PARSE!",dl="#NAME?",ul="#VALUE!",ml="#DIV/0!",Ld="#ERROR!",Hd=new Set(["SUM","AVERAGE","COUNT","MIN","MAX","IF","ABS","ROUND","PRODUCT","CONCAT","CONCATENATE","COUNTA","COUNTBLANK","COUNTIF","MEDIAN","SUMIF","RAN","RAND","RANDOM","TODAY","NOW","MOD","POWER","SQRT"]),de=r=>{if(typeof r=="number")return r;if(typeof r=="boolean")return r?1:0;if(r==null||r==="")return 0;if(typeof r=="string"){const e=Number(r);if(!Number.isNaN(e))return e}throw new Error(ul)},Qa=r=>{if(r<0)return"";let e=r+1,a="";for(;e>0;)e-=1,a=String.fromCharCode(65+e%26)+a,e=Math.floor(e/26);return a},bn=r=>{let e=0;for(const a of r.toUpperCase())e=e*26+a.charCodeAt(0)-64;return e-1},cl=r=>{const e=[];let a=r.startsWith("=")?1:0;for(;a<r.length;){const t=r[a];if(/\s/.test(t))a+=1;else if(/\d|\./.test(t)){const n=a;for(a+=1;a<r.length&&/[\d.]/.test(r[a]);)a+=1;e.push({type:"number",value:r.slice(n,a)})}else if(t==='"'){const n=a+1;for(a+=1;a<r.length&&r[a]!=='"';)a+=1;if(a>=r.length)throw new Error(Ae);e.push({type:"string",value:r.slice(n,a)}),a+=1}else if(/[A-Za-z_$]/.test(t)){const n=a;for(a+=1;a<r.length&&/[A-Za-z\d_$]/.test(r[a]);)a+=1;e.push({type:"identifier",value:r.slice(n,a)})}else if("+-*/".includes(t))e.push({type:"operator",value:t}),a+=1;else if("<>=!".includes(t)){const n=r.slice(a,a+2);if(n==="<="||n===">="||n==="<>")e.push({type:"comparison",value:n}),a+=2;else if(t==="<"||t===">"||t==="=")e.push({type:"comparison",value:t}),a+=1;else throw new Error(Ae)}else if(t==="(")e.push({type:"leftParen",value:t}),a+=1;else if(t===")")e.push({type:"rightParen",value:t}),a+=1;else if(t===",")e.push({type:"comma",value:t}),a+=1;else if(t===":")e.push({type:"colon",value:t}),a+=1;else throw new Error(Ae)}return e};class gr{constructor(e,a,t){Object.defineProperty(this,"tokens",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"context",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"references",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.tokens=cl(e),this.context=a,this.references=t}parse(){const e=this.parseComparison();if(this.position!==this.tokens.length)throw new Error(Ae);return e}parseComparison(){var l;const e=this.parseAdditive();if(((l=this.peek())==null?void 0:l.type)!=="comparison")return e;const a=this.consume().value,t=this.parseAdditive();if(a==="=")return e===t;if(a==="<>")return e!==t;const n=de(e),i=de(t);return a==="<"?n<i:a==="<="?n<=i:a===">"?n>i:n>=i}parseAdditive(){let e=this.parseMultiplicative();for(;this.matchOperator("+","-");){const a=this.previous().value,t=this.parseMultiplicative();e=a==="+"?de(e)+de(t):de(e)-de(t)}return e}parseMultiplicative(){let e=this.parseUnary();for(;this.matchOperator("*","/");){const a=this.previous().value,t=this.parseUnary();if(a==="/"&&de(t)===0)throw new Error(ml);e=a==="*"?de(e)*de(t):de(e)/de(t)}return e}parseUnary(){if(this.matchOperator("+","-")){const e=this.previous().value,a=this.parseUnary();return e==="-"?-de(a):de(a)}return this.parsePrimary()}parsePrimary(){const e=this.peek();if(!e)throw new Error(Ae);if(e.type==="number"){this.position+=1;const a=Number(e.value);if(Number.isNaN(a))throw new Error(Ae);return a}if(e.type==="string")return this.position+=1,e.value;if(e.type==="leftParen"){this.position+=1;const a=this.parseComparison();if(!this.matchType("rightParen"))throw new Error(Ae);return a}if(e.type==="identifier")return this.position+=1,this.matchType("leftParen")?this.parseFunction(e.value):this.parseReference(e.value);throw new Error(Ae)}parseFunction(e){const a=e.toUpperCase();if(a==="REF"){const n=this.parseFunctionArgument();if(!this.matchType("comma"))throw new Error(Ae);const i=this.parseFunctionArgument();if(!this.matchType("rightParen")||typeof n!="string")throw new Error(Ae);return this.resolveReference(i,n)}if(a==="COLUMN"||a==="ROW"){const n=this.parseFunctionArgument();if(!this.matchType("rightParen"))throw new Error(Ae);return n}if(Hd.has(a))return this.evaluateBuiltInFunction(a,this.parseValueArguments());const t=this.context.customFunctions[a];if(!t)throw new Error(dl);return t({values:this.flattenArguments(this.parseValueArguments())})}evaluateBuiltInFunction(e,a){var d,u;const t=this.flattenArguments(a),n=(m,c=Number.POSITIVE_INFINITY)=>{if(a.length<m||a.length>c)throw new Error(Ae)},i=()=>t.map(m=>de(m));if(e==="SUM")return i().reduce((m,c)=>m+c,0);if(e==="CONCAT"||e==="CONCATENATE")return n(1),t.map(m=>String(m)).join("");if(e==="COUNT")return n(1),t.filter(m=>typeof m=="number"&&Number.isFinite(m)).length;if(e==="COUNTA")return n(1),t.filter(m=>m!==""&&m!==null&&m!==void 0).length;if(e==="COUNTBLANK")return n(1),t.filter(m=>m===""||m===null||m===void 0).length;if(e==="IF"){n(2,3);const m=a[0].value;return((d=(typeof m=="boolean"?m:de(m)!==0)?a[1]:a[2])==null?void 0:d.value)??!1}if(e==="ABS")return n(1,1),Math.abs(de(t[0]));if(e==="ROUND"){n(1,2);const m=a.length===2?de(a[1].value):0,c=Math.pow(10,m);return Math.round(de(a[0].value)*c)/c}if(e==="PRODUCT")return n(1),i().reduce((m,c)=>m*c,1);if(e==="MEDIAN"){n(1);const m=i().sort((g,b)=>g-b),c=Math.floor(m.length/2);return m.length%2===0?(m[c-1]+m[c])/2:m[c]}if(e==="COUNTIF"||e==="SUMIF"){n(2,3);const m=a[0].rangeValues??[];if(!a[0].rangeValues)throw new Error(Ae);const c=m.map((b,S)=>this.matchesCriteria(b,a[1].value)?S:-1).filter(b=>b>=0);if(e==="COUNTIF")return c.length;const g=((u=a[2])==null?void 0:u.rangeValues)??m;if(g.length!==m.length)throw new Error(qe);return c.reduce((b,S)=>b+de(g[S]),0)}if(e==="RAND"||e==="RANDOM"||e==="RAN")return n(0,0),Math.random();if(e==="TODAY"||e==="NOW")return n(0,0),new Date;if(e==="MOD")return n(2,2),de(t[0])%de(t[1]);if(e==="POWER")return n(2,2),Math.pow(de(t[0]),de(t[1]));if(e==="SQRT")return n(1,1),Math.sqrt(de(t[0]));const l=i();return e==="AVERAGE"?(n(1),l.reduce((m,c)=>m+c,0)/l.length):e==="MIN"?(n(1),Math.min(...l)):(n(1),Math.max(...l))}parseValueArguments(){const e=[];if(this.matchType("rightParen"))return e;do{const a=this.parseRangeArgument();a?e.push(a):e.push({value:this.parseFunctionArgument()})}while(this.matchType("comma"));if(!this.matchType("rightParen"))throw new Error(Ae);return e}parseRangeArgument(){var n,i,l;if(((n=this.peek())==null?void 0:n.type)!=="identifier"||((i=this.peek(1))==null?void 0:i.type)!=="colon"||((l=this.peek(2))==null?void 0:l.type)!=="identifier")return;const e=this.consume().value;this.consume();const a=this.consume().value,t=this.context.getRangeValues(e,a);return{value:t[0],rangeValues:t}}flattenArguments(e){return e.reduce((a,t)=>a.concat(t.rangeValues??[t.value]),[])}matchesCriteria(e,a){const t=String(a),n=t.match(/^(<=|>=|<>|=|<|>)(.*)$/);if(!n)return String(e)===t;const i=Number(e),l=Number(n[2]);return Number.isNaN(i)||Number.isNaN(l)?n[1]==="="?String(e)===n[2]:n[1]==="<>"&&String(e)!==n[2]:n[1]==="="?i===l:n[1]==="<>"?i!==l:n[1]==="<"?i<l:n[1]==="<="?i<=l:n[1]===">"?i>l:i>=l}parseFunctionArgument(){return this.parseComparison()}parseReference(e){const a=e.toUpperCase().match(/^\$?([A-Z]+)\$?(\d+)$/);if(!a)throw new Error(Ae);const t=bn(a[1]);return this.resolveReference(Number(a[2]),t)}resolveReference(e,a){var d,u,m;const t=this.context.resolveRowIndex(e),n=typeof a=="number"?(d=this.context.columns[a])==null?void 0:d.field:a;if(!n||t<0||t>=this.context.rows.length)throw new Error(qe);const i=this.context.columns.find(c=>c.field===n);if(!i||!i.allowFormula&&typeof((u=this.context.rows[t])==null?void 0:u[n])=="string"&&String((m=this.context.rows[t])==null?void 0:m[n]).startsWith("="))throw new Error(qe);const l=`${Qa(this.context.columns.indexOf(i))}${t+1}`;return this.references.includes(l)||this.references.push(l),this.context.evaluateCell(t,n)}matchOperator(...e){var a,t;return((a=this.peek())==null?void 0:a.type)==="operator"&&e.includes((t=this.peek())==null?void 0:t.value)?(this.position+=1,!0):!1}matchType(e){var a;return((a=this.peek())==null?void 0:a.type)===e?(this.position+=1,!0):!1}previous(){return this.tokens[this.position-1]}peek(e=0){return this.tokens[this.position+e]}consume(){const e=this.peek();if(!e)throw new Error(Ae);return this.position+=1,e}}class Vd{constructor(e,a,t,n,i){var d;Object.defineProperty(this,"originalColumns",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"columns",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"referenceColumns",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rows",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formulaSettings",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"projections",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"evaluating",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"evaluationStack",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"rowKeys",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"rowIndexesByKey",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"visibleRowKeys",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"visibleRowIndexesByKey",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"primaryKeyField",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"customFunctions",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.originalColumns=e,this.referenceColumns=e.filter(u=>!!u.field&&ns([u]).length),this.columns=this.referenceColumns.filter(u=>u.visible!==!1),this.primaryKeyField=(d=e.find(u=>u.isPrimaryKey))==null?void 0:d.field;const l=this.getSourceRows(a,i??n.dataSource);this.rows=l.filter(u=>!u.flattedKey),this.formulaSettings=t,Object.entries(t.customFunctions??{}).forEach(([u,m])=>{this.customFunctions.set(u.toUpperCase(),m)}),this.rows.forEach((u,m)=>{const c=this.primaryKeyField?u[this.primaryKeyField]:void 0;(typeof c=="string"||typeof c=="number")&&(this.rowKeys.set(m,c),this.rowIndexesByKey.set(String(c),m))}),a.forEach(u=>{if(u.flattedKey||!this.primaryKeyField)return;const m=u[this.primaryKeyField];(typeof m=="string"||typeof m=="number")&&(this.visibleRowIndexesByKey.set(String(m),this.visibleRowKeys.length),this.visibleRowKeys.push(m))}),this.recalculate("initial")}getProjection(e,a){return this.projections.get(this.getCacheKey(e,a))??Array.from(this.projections.values()).find(t=>String(t.identity.rowKey)===String(e)&&t.identity.field===a)}getRawFormula(e,a){var t;return(t=this.getProjection(e,a))==null?void 0:t.formula}recalculate(e){this.projections.clear(),!(!this.formulaSettings.enabled||!this.primaryKeyField)&&this.rows.forEach((a,t)=>{this.columns.filter(n=>n.allowFormula&&n.field).forEach(n=>{const i=a[n.field];typeof i=="string"&&i.trim().startsWith("=")&&this.evaluateFormula(t,n.field,i)})})}setFormula(e,a,t){const n=this.findRowIndex(e),i=this.rows[n];if(i&&a){const l=i;l[a]=t,this.recalculate("edit")}}clearFormula(e,a){this.projections.delete(this.getCacheKey(e,a))}getDisplayReference(e,a){const t=this.referenceColumns.findIndex(n=>n.field===e.field);return`${Qa(t)}${a+1}`}getRowIndex(e){return this.rowIndexesByKey.has(String(e))?this.visibleRowIndexesByKey.get(String(e)):void 0}toDisplayFormula(e,a){return e.replace(/REF\(COLUMN\(["']([^"']+)["']\),ROW\((\d+)\)\)/gi,(n,i,l)=>{const d=this.referenceColumns.find(u=>u.field===i);return d?`${Qa(this.referenceColumns.indexOf(d))}${l}`:n}).replace(/(\$?)([A-Z]+)(\$?)(\d+)/gi,(n,i,l,d,u)=>{const m=this.getRowIndex(Number(u));return m===void 0?n:`${i}${l}${d}${m+1}`})}toInternalFormula(e,a){return e.replace(/\$?([A-Z]+)\$?(\d+)(\s*:\s*\$?[A-Z]+\$?\d+)?/gi,(t,n,i,l)=>{if(l)return t;const d=this.referenceColumns[bn(n)];return d!=null&&d.field?`REF(COLUMN("${d.field}"),ROW(${i}))`:t})}parseReference(e){const a=e.trim().toUpperCase().match(/^(\$?)([A-Z]+)(\$?)(\d+)$/);if(!a||Number(a[4])<1)throw new Error(qe);return{col:bn(a[2]),row:Number(a[4])-1,isAbsolute:{col:a[1]==="$",row:a[3]==="$"}}}getActualColIndex(e){const a=this.referenceColumns[e];return this.originalColumns.findIndex(t=>t.uid===a.uid)}convertIndexToReference(e,a){if(e<0||a<0)throw new Error(qe);return`${Qa(e)}${a+1}`}adjustReferences(e,a,t){return e.replace(/(\$?)([A-Z]+)(\$?)(\d+)/gi,(n,i,l,d,u)=>{const m=this.parseReference(`${i}${l}${d}${u}`),c=m.isAbsolute.col?m.col:m.col+t,g=m.isAbsolute.row?m.row:m.row+a;return c<0||g<0?n:`${m.isAbsolute.col?"$":""}${Qa(c)}${m.isAbsolute.row?"$":""}${g+1}`})}tokenizeFormula(e){return cl(e).map((a,t)=>({type:a.type==="leftParen"||a.type==="rightParen"||a.type==="comma"||a.type==="colon"?"delimiter":a.type==="identifier"?/^\$?[A-Z]+\$?\d+$/i.test(a.value)?"reference":"function":a.type,value:a.type==="number"?Number(a.value):a.value,position:t}))}extractReferences(e){const a=[],t=/\$?[A-Z]+\$?\d+(?::\$?[A-Z]+\$?\d+)?/gi;let n=t.exec(e);const i=new Map;for(;n;){const l=n[0].toUpperCase();i.has(l)||i.set(l,i.size%7+1),a.push({reference:n[0],start:n.index,end:n.index+n[0].length,colorIndex:i.get(l)}),n=t.exec(e)}return a}insertReference(e,a,t){const n=Math.max(0,Math.min(t,e.length)),i=/\$?[A-Z]+\$?\d+/gi;let l=i.exec(e);for(;l;){const u=l.index,m=u+l[0].length;if(n>=u&&n<=m)return{formula:e.slice(0,u)+a+e.slice(m),caretPosition:u+a.length};l=i.exec(e)}return{formula:e.slice(0,n)+a+e.slice(n),caretPosition:n+a.length}}getFormulas(){return Array.from(this.projections.values()).map(e=>({identity:e.identity,formula:e.formula,value:e.value}))}hasFormula(e,a){return this.projections.has(this.getCacheKey(e,a))}addFormula(e,a){this.customFunctions.set(e.toUpperCase(),a)}removeFormula(e){this.customFunctions.delete(e.toUpperCase())}getModuleName(){return"formula"}registerCustomFunction(e,a){this.customFunctions.set(e.toUpperCase(),a)}getCustomFunction(e){return this.customFunctions.get(e.toUpperCase())}isCustomFunction(e){return this.customFunctions.has(e.toUpperCase())}destroy(){this.projections.clear(),this.evaluating.clear(),this.customFunctions.clear()}addEventListener(){}removeEventListener(){}setCellFormula(e,a,t){if(t===void 0||t.trim()===""){this.clearFormula(e,a);return}this.setFormula(e,a,t)}getCellFormula(e,a){return this.getRawFormula(e,a)}getFormulaValue(e,a){var t;return(t=this.getProjection(e,a))==null?void 0:t.value}previewFormula(e,a,t){if(!this.formulaSettings.enabled||t.trim()==="")return;if(e===void 0||!this.columns.some(l=>l.field===a&&l.allowFormula))return qe;const n=this.findRowIndex(e);if(n<0)return qe;const i=`${String(e)}:${a}`;if(this.evaluationStack.has(i))return Ia;this.evaluationStack.add(i);try{new gr(t,this.createFormulaContext(n,e,!0),[]).parse();return}catch(l){return this.getFormulaError(l)}finally{this.evaluationStack.delete(i)}}getCellValue(e){var d;const a=this.parseReference(e),t=this.columns[a.col],n=this.resolveRowIndex(a.row+1),i=this.rowKeys.get(n);return!t||i===void 0?void 0:this.getFormulaValue(i,t.field)??((d=this.rows[n])==null?void 0:d[t.field])}getRangeValues(e,a){const t=this.parseReference(e),n=this.parseReference(a),i=[];for(let l=Math.min(t.row,n.row);l<=Math.max(t.row,n.row);l++)for(let d=Math.min(t.col,n.col);d<=Math.max(t.col,n.col);d++)i.push(this.getCellValue(this.convertIndexToReference(d,l))??qe);return i}evaluateFormula(e,a,t,n=!1){const l={rowKey:this.rowKeys.get(e)??e,field:a},d=this.getCacheKey(l.rowKey,a),u=`${String(l.rowKey)}:${a}`,m=[];let c,g;if(this.evaluationStack.has(u)){const S={identity:l,formula:t,value:Ia,references:m,error:Ia};return n||this.projections.set(d,S),S}if(this.evaluating.has(d)){const S={identity:l,formula:t,value:Ia,references:m,error:Ia};return n||this.projections.set(d,S),S}this.evaluating.add(d),this.evaluationStack.add(u);try{const S=this.createFormulaContext(e,l.rowKey,n);c=new gr(t,S,m).parse()}catch(S){g=this.getFormulaError(S),c=g}finally{this.evaluating.delete(d),this.evaluationStack.delete(u)}const b={identity:l,formula:t,value:c,references:m,...g?{error:g}:{}};return n||this.projections.set(d,b),b}createFormulaContext(e,a,t=!1){return{rowKey:a,currentRowIndex:e,columns:this.columns,rows:this.rows,rowKeys:this.rowKeys,resolveRowIndex:n=>this.resolveRowIndex(n),evaluateCell:(n,i)=>{var d;const l=(d=this.rows[n])==null?void 0:d[i];if(typeof l=="string"&&l.trim().startsWith("=")){const u=this.evaluateFormula(n,i,l,t);if(u.error)throw new Error(u.error);return u.value}return l},getRangeValues:(n,i)=>this.getRangeValuesForEvaluation(n,i,t),customFunctions:Object.fromEntries(this.customFunctions.entries())}}getRangeValuesForEvaluation(e,a,t){var d;const n=this.parseReference(e),i=this.parseReference(a),l=[];for(let u=Math.min(n.row,i.row);u<=Math.max(n.row,i.row);u++)for(let m=Math.min(n.col,i.col);m<=Math.max(n.col,i.col);m++){const c=this.columns[m],g=this.rowKeys.get(u);if(!(c!=null&&c.field)||g===void 0)throw new Error(qe);const b=(d=this.rows[u])==null?void 0:d[c.field];if(typeof b=="string"&&b.trim().startsWith("=")){const S=this.evaluateFormula(u,c.field,b,t);if(S.error)throw new Error(S.error);l.push(S.value)}else l.push(b)}return l}getFormulaError(e){const a=e instanceof Error?e.message:String(e);return a===qe||a===Ia||a===dl||a===ul||a===ml||a===Ae?a:Ld}findRowIndex(e){return this.rowIndexesByKey.get(String(e))??-1}resolveRowIndex(e){const a=typeof e=="string"||typeof e=="number"?this.rowIndexesByKey.get(String(e)):void 0;if(a!==void 0)return a;if(typeof e=="number"&&Number.isInteger(e)&&e>0)return e-1;throw new Error(qe)}getSourceRows(e,a){var l;const t=e.filter(d=>!d.flattedKey),n=a&&typeof a=="object"&&"dataSource"in a?(l=a.dataSource)==null?void 0:l.json:void 0;if(!Array.isArray(n))return t;const i=new Set(t.map(d=>this.primaryKeyField?d[this.primaryKeyField]:d));return t.concat(n.filter(d=>!i.has(this.primaryKeyField?d[this.primaryKeyField]:d)))}getCacheKey(e,a){return`${String(e)}:${a}`}}const _n=(r,e,a,t,n,i,l,d,u)=>{const m=y.useMemo(()=>new Vd(a,t,i,u,n.dataManager),[a,t,i,u,n.dataManager]);return y.useEffect(()=>{m.recalculate("data-change")},[m,t,a,i,u.editSettings]),m},Od=()=>({render:({panelId:r})=>y.createElement("div",{"data-panel-id":r},"Columns tool panel")}),fr="sf-header-filter-open",Cn=r=>r.field||r.uid,Ud=r=>r.headerText||r.field||r.uid||"",Wd=r=>r.allowFilter!==!1&&!!Cn(r),Kd=()=>{var m;const r=Zo(),{filterModule:e,currentViewData:a}=rs(),[t,n]=y.useState([]),i=y.useMemo(()=>{var c;return((c=r.getColumns)==null?void 0:c.call(r)).filter(Wd)},[r.getColumns]),l=(m=e==null?void 0:e.filterSettings)==null?void 0:m.columns,d=c=>{var Z,C,w,R,k,z,E,X,Ne,K,O,xe,J;const g=((Z=c.filter)==null?void 0:Z.type)==="FilterBar"?"Menu":(C=c.filter)==null?void 0:C.type,b=c.type??"string",S=r.dataSource instanceof Ve?r.dataSource:new Ve(r.dataSource),_=r.element instanceof HTMLElement?r.element.querySelector(`th[data-mappinguid="${c.uid}"], th:has([data-mappinguid="${c.uid}"])`):null;return{filterType:g,type:c.type,field:c.field,column:c,columns:i,dataSource:r.dataSource,dataManager:S,filteredColumns:l,parentCurrentViewDataCount:a==null?void 0:a.length,parentElement:r.element,target:_??r.element,query:(R=(w=r.query)==null?void 0:w.clone)==null?void 0:R.call(w),cssClass:r.cssClass,handler:e==null?void 0:e.filterHandler,serviceLocator:r.serviceLocator,id:`${r.id}_${Cn(c)}`,loadingIndicator:(k=r.filterSettings)==null?void 0:k.loadingIndicator,operators:((z=e==null?void 0:e.customOperators)==null?void 0:z[`${b}Operator`])??((E=e==null?void 0:e.customOperators)==null?void 0:E.stringOperator),ignoreAccent:(X=r.filterSettings)==null?void 0:X.ignoreAccent,caseSensitive:(Ne=r.filterSettings)==null?void 0:Ne.caseSensitive,enableSort:(K=r.sortSettings)==null?void 0:K.enabled,disableSearchOption:(O=c.filter)==null?void 0:O.hideSearchbox,disableSortOption:!1,enableHtmlSanitizer:r.enableHtmlSanitizer,mode:(xe=r.filterSettings)==null?void 0:xe.mode,immediateModeDelay:(J=r.filterSettings)==null?void 0:J.immediateModeDelay,height:360,isRemote:!1}},u=c=>{n(c.value.map(g=>String(g)))};return y.useEffect(()=>{const c=r.element instanceof HTMLElement?r.element:null;if(!c)return;const g=b=>{const S=b.detail,_=S==null?void 0:S.columnKey;_&&n(Z=>Z.includes(_)?Z.filter(C=>C!==_):Z)};return c.addEventListener(fr,g),()=>{c.removeEventListener(fr,g)}},[r.element]),o.jsx("div",{className:"sf-grid-filter-tool-panel","data-panel-id":"filters",children:o.jsx("div",{className:"sf-grid-filter-tool-panel-list",children:o.jsx(el,{multiple:!0,value:t,renderMode:"All",onChange:u,children:i.map(c=>{const g=Cn(c),b=Ud(c),S=l.some(_=>_.field===c.field||!c.field&&_.uid===c.uid);return o.jsxs(hn,{value:g,children:[o.jsx(pn,{children:o.jsx(yn,{children:o.jsxs("div",{className:"sf-grid-filter-tool-panel-header",children:[o.jsx(gn,{}),b,S&&o.jsx("span",{className:"sf-grid-filter-tool-panel-filtered-icon","aria-label":"Filtered",children:o.jsx(is,{color:"#4285F4"})})]})})}),o.jsx(fn,{children:t.includes(g)&&o.jsx(os,{isOpen:!0,embedded:!0,options:d(c),onCancel:()=>n(_=>_.filter(Z=>Z!==g))})})]},g)})})})})},jd=()=>({render:()=>y.createElement(Kd)}),an=Symbol("mixed-value"),qd=(r,e)=>{if(!r.length)return null;const a=r.map(t=>Reflect.get(t,e.field));return a.every(t=>Zd(t,a[0]))?a[0]:an},Zd=(r,e)=>r instanceof Date&&e instanceof Date?r.getTime()===e.getTime():r===e||String(r)===String(e),$d=r=>{var e;return(e=r.edit)!=null&&e.type?r.edit.type:r.type==="number"?ze.NumericTextBox:r.type==="date"||r.type==="dateTime"?ze.DatePicker:r.type==="boolean"?ze.CheckBox:ze.TextBox},Xd=r=>{var e;if(r instanceof Ve){const a=(e=r.dataSource)==null?void 0:e.json;return Array.isArray(a)?a:[]}return Array.isArray(r)?r:r&&typeof r=="object"&&Array.isArray(r.result)?r.result:[]},Yd=(r,e)=>{var t;const a=(t=r.edit)==null?void 0:t.params;return Array.isArray(a==null?void 0:a.dataSource)&&a.dataSource.length?a.dataSource:e.length?Oe.distinct(e.map(n=>Reflect.get(n,r.field)).filter(n=>n!=null),r.field):[]},Qd=r=>r==null?null:r instanceof Date||typeof r=="string"||typeof r=="number"||typeof r=="boolean"?r:String(r),Jd=()=>{const r=Zo(),[e,a]=y.useState([]),t=()=>{var w;const C=(w=r.getSelectedRecords)==null?void 0:w.call(r);return Array.isArray(C)?C:[]};y.useEffect(()=>{const C=r.element;if(!C)return;const w=()=>a(t());return w(),C.addEventListener("selectionChanged",w),()=>C.removeEventListener("selectionChanged",w)},[r.element,r.getSelectedRecords]);const n=y.useMemo(()=>{var w;return(r.isStackedHeader?r.stackedFlattedColumnProps:(w=r.getColumns)==null?void 0:w.call(r)).filter(R=>!!R.field&&!R.isPrimaryKey&&R.allowEdit!==!1)},[r.getColumns,r.isStackedHeader,r.stackedFlattedColumnProps]),i=(C,w)=>{var R;return((R=r.localeObj)==null?void 0:R.getConstant(C))||w},l=y.useMemo(()=>{const C=r.stackedHeaderColumns,R=C.filter(E=>{var X;return(X=E.childDetails)==null?void 0:X.length}).filter(E=>E.depth===0),k=new Set(C.filter(E=>{var X;return!!E.ParentHeaderText&&!!((X=E.columnProps)!=null&&X.field)}).map(E=>{var X;return(X=E.columnProps)==null?void 0:X.field})),z=n.filter(E=>!k.has(E.field));return{topLevelParents:R,topLevelLeaves:z}},[n,r.stackedHeaderColumns]),d=C=>qd(e,C),u=(C,w)=>{var k;const R=(k=r.getPrimaryKeyFieldNames)==null?void 0:k.call(r)[0];!R||!r.setCellValue||(e.forEach(z=>{const E=Reflect.get(z,R);(typeof E=="string"||typeof E=="number")&&r.setCellValue(E,C.field,w,!0)}),a(z=>z.map(E=>({...E,[C.field]:w}))))},m=(C,w)=>{const R=w===an?null:w,k=w===an?"":C.headerText??C.field,z=$d(C);return z===ze.NumericTextBox?o.jsx(Yo,{value:R??null,placeholder:k,onChange:E=>u(C,E.value)}):z===ze.DatePicker?o.jsx(Qo,{value:R?new Date(R):null,placeholder:k,onChange:E=>u(C,E.value)}):z===ze.DropDownList?o.jsx(Ze,{dataSource:Yd(C,Xd(r.dataSource)),value:R,placeholder:k,onChange:E=>u(C,Qd(E.value))}):z===ze.CheckBox?o.jsx(Ie,{checked:!!R,onChange:E=>u(C,E.value)}):o.jsx(ke,{value:(R==null?void 0:R.toString())??"",placeholder:k,onChange:E=>u(C,E.value)})},c=(C,w)=>`edit-section-${w}-${C.uid}`.replace(/[^a-zA-Z0-9_-]/g,"-"),g=(C,w)=>[c(C,w),...(C.childDetails??[]).filter(k=>{var z;return(z=k.childDetails)==null?void 0:z.length}).flatMap((k,z)=>g(k,`${w}-${z}`))],b=[...l.topLevelLeaves.length?["edit-section-general"]:[],...l.topLevelParents.flatMap((C,w)=>g(C,String(w)))],S=C=>o.jsx(Xo,{name:C.field,children:o.jsxs("div",{className:"sf-grid-edit-tool-panel-field",children:[o.jsx("label",{htmlFor:`sf-grid-edit-tool-panel-${C.field}`,children:C.headerText??C.field}),o.jsx("div",{id:`sf-grid-edit-tool-panel-${C.field}`,children:m(C,d(C))})]})},C.field),_=(C,w)=>{var X,Ne;const R=c(C,w),k=(C.childDetails??[]).filter(K=>{var O,xe;return((O=K.childDetails)==null?void 0:O.length)||!!((xe=K.columnProps)!=null&&xe.field)&&n.some(J=>{var Re;return J.field===((Re=K.columnProps)==null?void 0:Re.field)})}),z=k.filter(K=>{var O;return(O=K.childDetails)==null?void 0:O.length}),E=k.filter(K=>{var O;return!((O=K.childDetails)!=null&&O.length)}).map(K=>K.columnProps);return o.jsxs(hn,{value:R,children:[o.jsx(pn,{children:o.jsx(yn,{children:o.jsxs("div",{className:"sf-grid-edit-tool-panel-header",children:[o.jsx(gn,{}),((X=C.columnProps)==null?void 0:X.headerText)??((Ne=C.columnProps)==null?void 0:Ne.field)]})})}),o.jsx(fn,{children:o.jsxs("div",{className:"sf-grid-edit-tool-panel-fields",children:[E.map(S),z.map((K,O)=>_(K,`${w}-${O}`))]})})]},R)};if(!e.length)return o.jsxs("div",{className:"sf-grid-edit-tool-panel sf-grid-edit-tool-panel-empty","data-panel-id":"editing",children:[o.jsx("div",{className:"sf-grid-edit-tool-panel-empty-icon","aria-hidden":"true",children:o.jsx(ls,{})}),o.jsx("div",{className:"sf-grid-edit-tool-panel-empty-title",children:i("selectRowsToEdit","Select rows to edit")})]});const Z={};return n.forEach(C=>{const w=d(C);w!==an&&(Z[C.field]=w)}),o.jsxs("div",{className:"sf-grid-edit-tool-panel","data-panel-id":"editing",children:[o.jsxs("div",{className:"sf-grid-edit-tool-panel-count",style:{display:"none"},children:[e.length," selected record(s)"]}),o.jsx($o,{rules:{},initialValues:Z,validateOnChange:!1,className:"sf-grid-edit-tool-panel-form","aria-label":"Selected records editing form",role:"form",children:o.jsxs(el,{borderless:!0,openOnFocus:!0,multiple:!0,defaultValue:b,renderMode:"All",children:[l.topLevelLeaves.length>0&&o.jsxs(hn,{value:"edit-section-general",children:[o.jsx(pn,{children:o.jsx(yn,{children:o.jsxs("div",{className:"sf-grid-edit-tool-panel-header",children:[o.jsx(gn,{}),i("editRecordDetails","Edit Record Details")]})})}),o.jsx(fn,{children:o.jsx("div",{className:"sf-grid-edit-tool-panel-fields",children:l.topLevelLeaves.map(S)})})]}),l.topLevelParents.map((C,w)=>_(C,String(w)))]})})]})},eu=()=>({render:()=>y.createElement(Jd)}),Sa={ColumnToolPanelModule:Od,FilterToolPanelModule:jd,EditToolPanelModule:eu,ClipboardModule:pe,ResizeModule:Me,AutoFitModule:fe,AutoFillModule:Se,DetailGridModule:Cs,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,TreeDataModule:ds,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,ReorderModule:Tn,PinningModule:rn,PivotModule:Ss,FormulaModule:_n,StatusBarModule:ss},hl=JSON.parse('{"message":{"close":"Cerrar"},"grid":{"noRecordsMessage":"No hay registros para mostrar","filterBarTooltip":"celda de barra de filtro","invalidFilterMessage":"Datos de filtro no válidos","booleanTrueLabel":"cierto","booleanFalseLabel":"falso","addButtonLabel":"Añadir","editButtonLabel":"Editar","cancelButtonLabel":"Cancelar","updateButtonLabel":"Actualizar","deleteButtonLabel":"Eliminar","searchButtonLabel":"Buscar","pdfButtonLabel":"Exportación de PDF","excelButtonLabel":"Exportación de Excel","unsavedChangesConfirmation":"Los cambios no guardados se perderán. ¿Estás seguro de que quieres continuar?","noRecordsEditMessage":"No hay registros seleccionados para la operación de edición","noRecordsDeleteMessage":"No se han seleccionado registros para la operación de eliminación","okButtonLabel":"bien","confirmDeleteMessage":"¿Está seguro de que desea eliminar el registro?","chooseRecordsToDelete":"Elija registros para eliminar","deleteSelectedRecordsOnPage":"Eliminar {0} registro seleccionado{1} en esta página","deleteSelectedRecordsOnPageDescription":"Solo elimina los elementos actualmente visibles en la vista de cuadrícula.","deleteAllSelectedRecordsAcrossPages":"Eliminar todos los {0} registros seleccionados en todas las páginas","deleteAllSelectedRecordsAcrossPagesDescription":"Elimina registros de la página actual junto con {0} selecciones adicionales de otras páginas","deleteAllSelectedRecordsAcrossPagesDescriptionNoCurrentPage":"Elimina {0} registro{1} seleccionado en otras páginas","deleteAllSelectedRecordsFromLoadedPages":"Eliminar todos los {0} registros seleccionados de las páginas cargadas","deleteAllSelectedRecordsFromLoadedPagesDescription":"Elimina registros de la página actual junto con {0} selecciones adicionales de las páginas cargadas","deleteAllSelectedRecordsFromLoadedPagesDescriptionNoCurrentPage":"Elimina {0} registro{1} de las páginas cargadas","selectAllRows":"Seleccionar todas las filas","selectRow":"Seleccionar fila","startsWith":"comienza con","doesNotStartWith":"No comienza con","like":"Me gusta","endsWith":"termina con","doesNotEndWith":"no termina con","contains":"Contiene","doesNotContain":"No contiene","isNull":"nulo","isNotNull":"No nulo","isEmpty":"vacio","isNotEmpty":"No vacío","equal":"igual","notEqual":"No iguales","lessThan":"menos que","lessThanOrEqual":"menor o igual","greaterThan":"mayor que","greaterThanOrEqual":"Mayor o igual que","in":"en","notIn":"no en","saveButtonLabel":"Guardar","addNewRecordLabel":"Agregar nuevo registro","detailsOfLabel":"Detalles de","recordFormLabel":"Formulario de registro","columnHeaderLabel":"Encabezado de columna","selectAll":"Seleccionar todo","noMatches":"No se encontraron coincidencias","chooseColumns":"Elija columna","noResult":"No se encontraron coincidencias","clearFilter":"Borrar filtro","clear":"Borrar","sortAtoZ":"Ordenar de la A a la Z","sortZtoA":"Ordenar Z a A","sortByOldest":"Ordenar por más antiguo","sortByNewest":"Ordenar por más reciente","sortSmallestToLargest":"Ordenar de menor a mayor","sortLargestToSmallest":"Ordenar de mayor a menor","addCurrentSelection":"Agregar selección actual para filtrar","blanks":"espacios en blanco","oKButton":"bien","cancelButton":"Cancelar","primary":"Predeterminado","advanced":"Avanzado","enterValue":"Introducir valor","and":"Y","or":"O","filterTrue":"Verdadero","filterFalse":"Falso","editRecordLabel":"Editar registro","deleteRecordLabel":"Eliminar registro","firstPageLabel":"Primera página","prevPageLabel":"Página anterior","lastPageLabel":"Última página","nextPageLabel":"Página siguiente","sortAscendingLabel":"Orden ascendente","sortDescendingLabel":"Orden descendente","clearSortLabel":"Borrar clasificación","clearSelectionLabel":"Borrar selección","selectRowLabel":"Seleccionar fila","clearRowSelectionLabel":"Borrar selección de fila","selectLabel":"Seleccionar","sumLabel":"suma","averageLabel":"Promedio","minLabel":"mín.","maxLabel":"máx.","countLabel":"contar","trueCountLabel":"Conteo verdadero","falseCountLabel":"Conteo falso","customLabel":"personalizado","pinColumnLabel":"Columna de pines","pinToLeftLabel":"Fijar a la izquierda","pinToRightLabel":"Fijar a la derecha","unpinColumnLabel":"Desanclar columna","pinRowLabel":"Fila de pines","unpinRowLabel":"Desanclar fila","pinToTopLabel":"Fijar arriba","pinToBottomLabel":"Fijar hacia abajo","checkBox":"Casilla de verificación","expanded":"Ampliado","collapsed":"Colapsado","singleColumnGroupLabel":"grupo","groupDropAreaLabel":"Área de entrega grupal","groupDropAreaHintText":"Arrastre el encabezado de una columna aquí para agrupar su columna.","groupDropAreaTitle":"Grupos de filas","aggregateDropAreaLabel":"Área de caída agregada","aggregateDropAreaTitle":"Valores","columnChooserGroupDropAreaHintText":"Arrastra aquí para agrupar su columna.","columnChooserAggregateDropAreaHintText":"Arrastre aquí para agregar","statusBarTotalRowCountLabel":"Total de filas:","statusBarFilteredRowCountLabel":"Filas filtradas:","statusBarSelectedRowCountLabel":"Filas seleccionadas:","statusBarSelectedCellsCountLabel":"Celdas seleccionadas:","statusBarSelectionSumLabel":"Suma:","statusBarSelectionAverageLabel":"Promedio:","statusBarSelectionCountLabel":"Contar:","statusBarSelectionMinLabel":"Mínimo:","statusBarSelectionMaxLabel":"Máximo:"},"pager":{"currentPageLabel":"{0} de {1} páginas","totalItemsLabel":"({0} elementos)","totalItemLabel":"({0} elemento)","firstPageTooltip":"Ir a la primera página","lastPageTooltip":"Ir a la última página","nextPageTooltip":"Ir a la página siguiente","previousPageTooltip":"Ir a la página anterior","nextPageGroupTooltip":"Ir al grupo de página siguiente","previousPageGroupTooltip":"Ir al grupo de páginas anterior","pagerStatusMessage":"Mensaje externo del buscapersonas","pageLabel":"Página ","pagerOfLabel":" de ","pagesLabel":" paginas"},"chart":{"zoom":"Ampliar","zoomIn":"Acercar","zoomOut":"Alejar","reset":"Reiniciar","pan":"sartén","resetZoom":"Restablecer zoom"},"dialog":{"close":"Cerrar"},"calendar":{"today":"hoy","nextMonth":"El próximo mes","previousMonth":"Mes anterior","nextYear":"el año que viene","previousYear":"año anterior","nextDecade":"La próxima década","previousDecade":"Década anterior"},"datepicker":{"today":"hoy","placeholder":"Elige una fecha","day":"dia","month":"mes","year":"año","hour":"hora","minute":"minuto","second":"segundo","meridiem":"soy"},"formValidator":{"required":"Este campo es obligatorio.","email":"Por favor ingrese una dirección de correo electrónico válida.","url":"Por favor ingrese una URL válida.","date":"Por favor ingrese una fecha válida.","dateIso":"Por favor ingrese una fecha válida (ISO).","creditCard":"Por favor ingrese un número de tarjeta válido.","number":"Por favor ingrese un número válido.","digits":"Por favor ingrese solo dígitos.","maxLength":"No introduzca más de {0} caracteres.","minLength":"Introduzca al menos {0} caracteres.","rangeLength":"Introduzca un valor de entre {0} y {1} caracteres.","range":"Introduzca un valor entre {0} y {1}.","max":"Introduzca un valor menor o igual a {0}.","min":"Introduzca un valor mayor o igual a {0}.","regex":"Por favor ingrese un valor correcto.","tel":"Por favor ingrese un número de teléfono válido.","equalTo":"Por favor ingrese el mismo valor nuevamente."},"numericTextbox":{"increment":"Valor de incremento","decrement":"Valor de disminución","clear":"Borrar"},"textarea":{"clear":"Borrar"},"textbox":{"clear":"Borrar"},"timepicker":{"placeholder":"Elige una hora","day":"dia","month":"mes","year":"año","hour":"hora","minute":"minuto","second":"segundo","meridiem":"soy"},"scheduler":{"addTitle":"Agregar título","save":"Guardar","edit":"Editar","delete":"Eliminar","moreDetails":"Más detalles","close":"Cerrar","newEvent":"Nuevo evento","today":"hoy","allDay":"todo el dia","to":"a","recurringEvent":"evento recurrente","day":"dia","week":"Semana","workweek":"Semana laboral","month":"Mes","agenda":"Agenda","timelineday":"Día de la línea de tiempo","timelineweek":"Semana de la línea de tiempo","timelineworkweek":"Cronograma Semana laboral","timelinemonth":"Mes de la línea de tiempo","more":"más","expandAllDaySection":"Ampliar la sección de todo el día","collapseAllDaySection":"Contraer sección de todo el día","allDayEventsScrollable":"Eventos durante todo el día, desplazables","deleteEvent":"Eliminar evento","confirmDeleteMessage":"¿Estás seguro de que deseas eliminar este evento?","cancel":"Cancelar","title":"Título","location":"Ubicación","description":"Descripción","startDate":"Fecha de inicio","endDate":"Fecha de finalización","startTime":"Hora de inicio","endTime":"Hora de finalización","eventOverlap":"Superposición de eventos","overlapAlert":"Los eventos no se pueden programar durante el horario elegido ya que se superpone con otro evento.","blockAlert":"Los eventos no se pueden programar dentro del rango de tiempo bloqueado.","ok":"bien","alert":"Alerta","invalidDateValue":"El valor de fecha ingresado no es válido.","invalidTimeValue":"El valor de tiempo ingresado no es válido.","invalidDateRange":"La fecha de finalización seleccionada es anterior a la fecha de inicio.","repeat":"repetir","never":"nunca","daily":"Diariamente","weekly":"Semanal","monthly":"Mensual","yearly":"Anual","custom":"personalizado","timezone":"Zona horaria","startTimezone":"Iniciar zona horaria","endTimezone":"Finalizar zona horaria","searchTimezone":"Buscar zona horaria","customRecurrence":"Recurrencia personalizada","seriesChangeAlert":"¿Quiere cancelar los cambios realizados en instancias específicas de esta serie y volver a hacer coincidirlos con toda la serie?","createError":"La duración del evento debe ser menor que la frecuencia con la que ocurre. Acorte la duración o cambie el patrón de recurrencia en el editor de eventos de recurrencia.","sameDayAlert":"No pueden ocurrir dos ocurrencias del mismo evento en el mismo día.","occurenceAlert":"No se puede reprogramar una ocurrencia de la cita recurrente si se salta una ocurrencia posterior de la misma cita.","editEventContent":"¿Cómo te gustaría cambiar la cita en la serie?","editEvent":"Editar evento","editThisEvent":"Editar evento","editEntireSeries":"Serie completa","yes":"si","no":"No","followingEvents":"Siguientes eventos","eventsFor":"Eventos para","noEvents":"Sin eventos","openResourceList":"Abrir lista de recursos","closeResourceList":"Cerrar lista de recursos","resources":"Recursos"},"dropdownList":{"noRecordsMessage":"No se encontraron registros","errorMessage":"Solicitud fallida"},"comboBox":{"noRecordsMessage":"No se encontraron registros","errorMessage":"Solicitud fallida"},"autoComplete":{"noRecordsMessage":"No se encontraron registros","errorMessage":"Solicitud fallida"},"recurrenceEditor":{"day":"dia","week":"Semana","month":"Mes","year":"Año","repeat":"repetir","repeatEvery":"Repetir cada","repeatedMode":"Modo","end":"Fin","repeatOn":"repetir en","repeatMode":"Modo de repetición","first":"primero","second":"segundo","third":"tercero","fourth":"cuarto","last":"último","never":"nunca","until":"hasta","count":"contar","every":"cada","days":"dias","weeks":"Semanas","months":"Meses","years":"Años","summaryDay":"día(s)","summaryWeek":"semana(s)","summaryMonth":"mes(es)","summaryYear":"año(s)","summaryOn":"en","summaryUntil":"hasta","summaryTimes":"tiempo(s)","intervalAriaLabel":"Número de repeticiones","frequencyAriaLabel":"Seleccione la frecuencia de repetición","byMonthAriaLabel":"Selecciona el mes del año","byMonthDayAriaLabel":"Repetir el día del mes.","byDayAriaLabel":"Repetir en un día laborable específico del mes.","bySetPositionAriaLabel":"Seleccione la posición de la semana en el mes","endTypeAriaLabel":"Seleccione el tipo de fin de recurrencia","countAriaLabel":"Número de ocurrencias","untilAriaLabel":"Elija recurrencia hasta la fecha"},"datetimepicker":{"date":"Fecha","time":"tiempo","cancel":"Cancelar","set":"conjunto","now":"ahora","today":"hoy","toggleDateTime":"Alternar selector de fecha y hora","clearValue":"Borrar valor","previous":"Anterior","next":"Siguiente","day":"dia","month":"mes","year":"año","hour":"hora","minute":"minuto","second":"segundo","meridiem":"soy"},"multiSelect":{"noRecordsMessage":"No se encontraron registros","errorMessage":"Solicitud fallida"},"daterangepicker":{"startDate":"Fecha de inicio","endDate":"Fecha de finalización","selectedDays":"Días Seleccionados","customRange":"Rango personalizado","apply":"Aplicar","cancel":"Cancelar","day":"dia","month":"mes","year":"año","hour":"hora","minute":"minuto","second":"segundo","meridiem":"soy"},"toast":{"close":"Cerrar"},"uploader":{"browse":"Navegar","dragDropText":"O arrastre y suelte archivos aquí","upload":"Subir","clear":"Borrar","invalidFileType":"El tipo de archivo \\"{0}\\" no está permitido","fileSizeExceeded":"El tamaño del archivo {0} supera el máximo {1}","minFileSizeNotMet":"El tamaño del archivo {0} está por debajo del mínimo {1}","duplicateFile":"El archivo \\"{0}\\" ya existe","maxFilesExceeded":"No se pueden agregar {0} archivos. Máximo de {1} archivos permitidos.","maxTotalSizeExceeded":"Agregar este archivo excedería el límite de tamaño total de {0}","uploadSuccess":"Archivo cargado exitosamente","uploadFailed":"Error al subir","uploading":"Subiendo...","paused":"En pausa","canceled":"Cancelado","readyToUpload":"Listo para cargar","networkError":"Se produjo un error de red","uploadTimeout":"Se agotó el tiempo de carga","uploadAborted":"La carga fue cancelada"},"fileUpload":{"browse":"Navegar","dragDropText":"O arrastre y suelte archivos aquí","upload":"Subir","clear":"Borrar","invalidFileType":"El tipo de archivo \\"{0}\\" no está permitido","fileSizeExceeded":"El tamaño del archivo {0} supera el máximo {1}","minFileSizeNotMet":"El tamaño del archivo {0} está por debajo del mínimo {1}","duplicateFile":"El archivo \\"{0}\\" ya existe","maxFilesExceeded":"No se pueden agregar {0} archivos. Máximo de {1} archivos permitidos.","maxTotalSizeExceeded":"Agregar este archivo excedería el límite de tamaño total de {0}","uploadSuccess":"Archivo cargado exitosamente","uploadFailed":"Error al subir","uploading":"Subiendo...","paused":"En pausa","canceled":"Cancelado","readyToUpload":"Listo para cargar","networkError":"Se produjo un error de red","uploadTimeout":"Se agotó el tiempo de carga","uploadAborted":"La carga fue cancelada","abort":"Abortar","pause":"Pausa","resume":"Currículum","retry":"Reintentar","remove":"Eliminar archivo","delete":"Eliminar archivo"},"gridChart":{},"queryBuilder":{"selectField":"Seleccionar campo…","selectOperator":"Seleccione operador…","selectValue":"Seleccione valor…","selectMultipleValues":"Seleccionar valores…","enterValue":"Introducir valor","enterNumber":"Introduzca el número","selectDate":"Selecciona una fecha","datetimeFormat":"AAAA-MM-DDTHH:mm:ss","start":"Empezar","end":"Fin","betweenStartValue":"Entre el valor inicial","betweenEndValue":"Entre el valor final","betweenStartDate":"Entre la fecha de inicio","betweenEndDate":"Entre la fecha de finalización","booleanValue":"valor booleano","numericValue":"Valor numérico","dateValue":"Valor de fecha","datetimeValue":"Valor de fecha y hora","value":"Valor","addCondition":"Agregar condición","addGroup":"Agregar grupo","ruleGroup":"Grupo de reglas en profundidad","groupCondition":"Condición de grupo","enableNot":"Habilitar NO","disableNot":"Desactivar NO","matchAll":"Coincidir con todo (Y)","matchAny":"Coincide con cualquiera (O)","cloneRule":"regla de clonación","lockRule":"regla de bloqueo","unlockRule":"regla de desbloqueo","deleteRule":"Eliminar regla","cloneGroup":"grupo clon","lockGroup":"grupo de bloqueo","unlockGroup":"Desbloquear grupo","deleteGroup":"Eliminar grupo","dragHandle":"Arrastra para reordenar","unselectedField":"campo no seleccionado","ruleFor":"Regla para"}}'),au={es:hl},tu=Object.freeze(Object.defineProperty({__proto__:null,default:au,es:hl},Symbol.toStringTag,{value:"Module"})),pl=JSON.parse('{"message":{"close":"Schließen"},"grid":{"noRecordsMessage":"Keine Datensätze zum Anzeigen vorhanden","filterBarTooltip":"\\"s Filterleistenzelle","invalidFilterMessage":"Ungültige Filterdaten","booleanTrueLabel":"wahr","booleanFalseLabel":"falsch","addButtonLabel":"Hinzufügen","editButtonLabel":"Bearbeiten","cancelButtonLabel":"Abbrechen","updateButtonLabel":"Aktualisieren","deleteButtonLabel":"Löschen","searchButtonLabel":"Suchen","pdfButtonLabel":"PDF-Export","excelButtonLabel":"Excel-Export","unsavedChangesConfirmation":"Nicht gespeicherte Änderungen gehen verloren. Sind Sie sicher, dass Sie fortfahren möchten?","noRecordsEditMessage":"Es sind keine Datensätze für den Bearbeitungsvorgang ausgewählt","noRecordsDeleteMessage":"Es wurden keine Datensätze für den Löschvorgang ausgewählt","okButtonLabel":"Okay","confirmDeleteMessage":"Sind Sie sicher, dass Sie den Datensatz löschen möchten?","chooseRecordsToDelete":"Wählen Sie Datensätze zum Löschen aus","deleteSelectedRecordsOnPage":"Löschen Sie {0}ausgewählten Datensatz{1} auf dieser Seite","deleteSelectedRecordsOnPageDescription":"Entfernt nur Elemente, die derzeit in der Rasteransicht sichtbar sind","deleteAllSelectedRecordsAcrossPages":"Alle {0} ausgewählten Datensätze seitenübergreifend löschen","deleteAllSelectedRecordsAcrossPagesDescription":"Entfernt Datensätze von der aktuellen Seite zusammen mit {0} zusätzlichen Auswahlen von anderen Seiten","deleteAllSelectedRecordsAcrossPagesDescriptionNoCurrentPage":"Entfernt {0}Datensatz{1}, der auf anderen Seiten ausgewählt wurde","deleteAllSelectedRecordsFromLoadedPages":"Alle {0} ausgewählten Datensätze von geladenen Seiten löschen","deleteAllSelectedRecordsFromLoadedPagesDescription":"Entfernt Datensätze von der aktuellen Seite zusammen mit {0} zusätzlichen Auswahlen von geladenen Seiten","deleteAllSelectedRecordsFromLoadedPagesDescriptionNoCurrentPage":"Entfernt {0}Datensatz{1} von geladenen Seiten","selectAllRows":"Wählen Sie alle Zeilen aus","selectRow":"Zeile auswählen","startsWith":"Beginnt mit","doesNotStartWith":"Beginnt nicht mit","like":"Wie","endsWith":"Endet mit","doesNotEndWith":"Endet nicht mit","contains":"Enthält","doesNotContain":"Enthält nicht","isNull":"Null","isNotNull":"Nicht Null","isEmpty":"Leer","isNotEmpty":"Nicht leer","equal":"Gleich","notEqual":"Nicht gleich","lessThan":"Weniger als","lessThanOrEqual":"Kleiner oder gleich","greaterThan":"Größer als","greaterThanOrEqual":"Größer als oder gleich","in":"In","notIn":"Nicht drin","saveButtonLabel":"Speichern","addNewRecordLabel":"Neuen Datensatz hinzufügen","detailsOfLabel":"Einzelheiten zu","recordFormLabel":"Aufnahmeformular","columnHeaderLabel":"Spaltenüberschrift","selectAll":"Wählen Sie „Alle“ aus","noMatches":"Keine Übereinstimmungen gefunden","chooseColumns":"Wählen Sie Spalte","noResult":"Keine Übereinstimmungen gefunden","clearFilter":"Filter löschen","clear":"Klar","sortAtoZ":"Sortieren Sie von A bis Z","sortZtoA":"Sortieren Sie Z nach A","sortByOldest":"Sortieren nach „Älteste“.","sortByNewest":"Sortieren nach „Neueste“.","sortSmallestToLargest":"Sortieren Sie vom Kleinsten zum Größten","sortLargestToSmallest":"Sortieren Sie vom Größten zum Kleinsten","addCurrentSelection":"Aktuelle Auswahl zum Filter hinzufügen","blanks":"Leerzeichen","oKButton":"Okay","cancelButton":"Abbrechen","primary":"Standard","advanced":"Fortgeschritten","enterValue":"Wert eingeben","and":"UND","or":"ODER","filterTrue":"Stimmt","filterFalse":"Falsch","editRecordLabel":"Datensatz bearbeiten","deleteRecordLabel":"Datensatz löschen","firstPageLabel":"Erste Seite","prevPageLabel":"Vorherige Seite","lastPageLabel":"Letzte Seite","nextPageLabel":"Nächste Seite","sortAscendingLabel":"Aufsteigend sortieren","sortDescendingLabel":"Absteigend sortieren","clearSortLabel":"Klare Sortierung","clearSelectionLabel":"Klare Auswahl","selectRowLabel":"Zeile auswählen","clearRowSelectionLabel":"Zeilenauswahl löschen","selectLabel":"Auswählen","sumLabel":"Summe","averageLabel":"Durchschnittlich","minLabel":"Min","maxLabel":"Max","countLabel":"Zählen","trueCountLabel":"Wahre Zählung","falseCountLabel":"Falsche Zählung","customLabel":"Benutzerdefiniert","pinColumnLabel":"Pin-Spalte","pinToLeftLabel":"Nach links heften","pinToRightLabel":"Nach rechts pinnen","unpinColumnLabel":"Spalte lösen","pinRowLabel":"Pin-Reihe","unpinRowLabel":"Zeile lösen","pinToTopLabel":"Oben anheften","pinToBottomLabel":"Nach unten stecken","checkBox":"Kontrollkästchen","expanded":"Erweitert","collapsed":"Zusammengebrochen","singleColumnGroupLabel":"Gruppe","groupDropAreaLabel":"Gruppenablagebereich","groupDropAreaHintText":"Ziehen Sie eine Spaltenüberschrift hierher, um ihre Spalte zu gruppieren","groupDropAreaTitle":"Zeilengruppen","aggregateDropAreaLabel":"Aggregierter Drop-Bereich","aggregateDropAreaTitle":"Werte","columnChooserGroupDropAreaHintText":"Ziehen Sie hierher, um die Spalte zu gruppieren","columnChooserAggregateDropAreaHintText":"Zum Aggregieren hierher ziehen","statusBarTotalRowCountLabel":"Gesamtzahl der Zeilen:","statusBarFilteredRowCountLabel":"Gefilterte Zeilen:","statusBarSelectedRowCountLabel":"Ausgewählte Zeilen:","statusBarSelectedCellsCountLabel":"Ausgewählte Zellen:","statusBarSelectionSumLabel":"Summe:","statusBarSelectionAverageLabel":"Durchschnitt:","statusBarSelectionCountLabel":"Anzahl:","statusBarSelectionMinLabel":"Min.:","statusBarSelectionMaxLabel":"Maximal:"},"pager":{"currentPageLabel":"{0} von {1} Seiten","totalItemsLabel":"({0} Artikel)","totalItemLabel":"({0} Artikel)","firstPageTooltip":"Gehen Sie zur ersten Seite","lastPageTooltip":"Gehe zur letzten Seite","nextPageTooltip":"Gehen Sie zur nächsten Seite","previousPageTooltip":"Gehen Sie zur vorherigen Seite","nextPageGroupTooltip":"Gehen Sie zur nächsten Seitengruppe","previousPageGroupTooltip":"Zur vorherigen Seitengruppe wechseln","pagerStatusMessage":"Externe Pager-Nachricht","pageLabel":"Seite ","pagerOfLabel":" von ","pagesLabel":" Seiten"},"chart":{"zoom":"Zoomen","zoomIn":"Vergrößern","zoomOut":"ZoomOut","reset":"Zurücksetzen","pan":"Pfanne","resetZoom":"Zoom zurücksetzen"},"dialog":{"close":"Schließen"},"calendar":{"today":"Heute","nextMonth":"Nächsten Monat","previousMonth":"Vorheriger Monat","nextYear":"Nächstes Jahr","previousYear":"Vorheriges Jahr","nextDecade":"Nächstes Jahrzehnt","previousDecade":"Vorheriges Jahrzehnt"},"datepicker":{"today":"Heute","placeholder":"Wählen Sie ein Datum","day":"Tag","month":"Monat","year":"Jahr","hour":"Stunde","minute":"Minute","second":"zweitens","meridiem":"BIN"},"formValidator":{"required":"Dieses Feld ist erforderlich.","email":"Bitte geben Sie eine gültige E-Mail-Adresse ein.","url":"Bitte geben Sie eine gültige URL ein.","date":"Bitte geben Sie ein gültiges Datum ein.","dateIso":"Bitte geben Sie ein gültiges Datum (ISO) ein.","creditCard":"Bitte geben Sie eine gültige Kartennummer ein.","number":"Bitte geben Sie eine gültige Nummer ein.","digits":"Bitte geben Sie nur Ziffern ein.","maxLength":"Bitte geben Sie nicht mehr als {0} Zeichen ein.","minLength":"Bitte geben Sie mindestens {0} Zeichen ein.","rangeLength":"Bitte geben Sie einen Wert zwischen {0} und {1} Zeichen ein.","range":"Bitte geben Sie einen Wert zwischen {0} und {1} ein.","max":"Bitte geben Sie einen Wert kleiner oder gleich {0} ein.","min":"Bitte geben Sie einen Wert größer oder gleich {0} ein.","regex":"Bitte geben Sie einen korrekten Wert ein.","tel":"Bitte geben Sie eine gültige Telefonnummer ein.","equalTo":"Bitte geben Sie den gleichen Wert noch einmal ein."},"numericTextbox":{"increment":"Wert erhöhen","decrement":"Wert verringern","clear":"Klar"},"textarea":{"clear":"Klar"},"textbox":{"clear":"Klar"},"timepicker":{"placeholder":"Wählen Sie eine Zeit","day":"Tag","month":"Monat","year":"Jahr","hour":"Stunde","minute":"Minute","second":"zweitens","meridiem":"BIN"},"scheduler":{"addTitle":"Titel hinzufügen","save":"Speichern","edit":"Bearbeiten","delete":"Löschen","moreDetails":"Weitere Details","close":"Schließen","newEvent":"Neue Veranstaltung","today":"Heute","allDay":"Den ganzen Tag","to":"zu","recurringEvent":"Wiederkehrendes Ereignis","day":"Tag","week":"Woche","workweek":"Arbeitswoche","month":"Monat","agenda":"Tagesordnung","timelineday":"Timeline-Tag","timelineweek":"Timeline-Woche","timelineworkweek":"Zeitleiste Arbeitswoche","timelinemonth":"Timeline-Monat","more":"mehr","expandAllDaySection":"Erweitern Sie den Abschnitt „Ganztägig“.","collapseAllDaySection":"Ganztägigen Abschnitt einklappen","allDayEventsScrollable":"Ganztägige Ereignisse, scrollbar","deleteEvent":"Ereignis löschen","confirmDeleteMessage":"Sind Sie sicher, dass Sie dieses Ereignis löschen möchten?","cancel":"Abbrechen","title":"Titel","location":"Standort","description":"Beschreibung","startDate":"Startdatum","endDate":"Enddatum","startTime":"Startzeit","endTime":"Endzeit","eventOverlap":"Ereignisüberschneidung","overlapAlert":"Für die gewählte Zeit können keine Veranstaltungen geplant werden, da diese sich mit einer anderen Veranstaltung überschneiden.","blockAlert":"Innerhalb des blockierten Zeitraums können keine Veranstaltungen geplant werden.","ok":"Okay","alert":"Alarm","invalidDateValue":"Der eingegebene Datumswert ist ungültig.","invalidTimeValue":"Der eingegebene Zeitwert ist ungültig.","invalidDateRange":"Das ausgewählte Enddatum liegt vor dem Startdatum.","repeat":"Wiederholen","never":"Niemals","daily":"Täglich","weekly":"Wöchentlich","monthly":"Monatlich","yearly":"Jährlich","custom":"Benutzerdefiniert","timezone":"Zeitzone","startTimezone":"Zeitzone starten","endTimezone":"Zeitzone beenden","searchTimezone":"Zeitzone suchen","customRecurrence":"Benutzerdefinierte Wiederholung","seriesChangeAlert":"Möchten Sie die an bestimmten Instanzen dieser Serie vorgenommenen Änderungen rückgängig machen und sie erneut der gesamten Serie zuordnen?","createError":"Die Dauer des Ereignisses muss kürzer sein als seine Häufigkeit. Verkürzen Sie die Dauer oder ändern Sie das Wiederholungsmuster im Editor für Wiederholungsereignisse.","sameDayAlert":"Das gleiche Ereignis kann nicht zweimal am selben Tag auftreten.","occurenceAlert":"Eine Neuplanung eines wiederkehrenden Termins ist nicht möglich, wenn dadurch ein späterer Termin desselben Termins übersprungen wird.","editEventContent":"Wie möchten Sie den Termin in der Serie ändern?","editEvent":"Veranstaltung bearbeiten","editThisEvent":"Ereignis bearbeiten","editEntireSeries":"Gesamte Serie","yes":"Ja","no":"Nein","followingEvents":"Verfolgen von Ereignissen","eventsFor":"Veranstaltungen für","noEvents":"Keine Veranstaltungen","openResourceList":"Ressourcenliste öffnen","closeResourceList":"Ressourcenliste schließen","resources":"Ressourcen"},"dropdownList":{"noRecordsMessage":"Keine Datensätze gefunden","errorMessage":"Anfrage fehlgeschlagen"},"comboBox":{"noRecordsMessage":"Keine Datensätze gefunden","errorMessage":"Anfrage fehlgeschlagen"},"autoComplete":{"noRecordsMessage":"Keine Datensätze gefunden","errorMessage":"Anfrage fehlgeschlagen"},"recurrenceEditor":{"day":"Tag","week":"Woche","month":"Monat","year":"Jahr","repeat":"Wiederholen","repeatEvery":"Wiederholen Sie alle","repeatedMode":"Modus","end":"Ende","repeatOn":"Wiederholen Sie den Vorgang","repeatMode":"Wiederholungsmodus","first":"Erstens","second":"Zweitens","third":"Drittens","fourth":"Viertens","last":"Zuletzt","never":"Niemals","until":"Bis","count":"Zählen","every":"Jeder","days":"Tage","weeks":"Wochen","months":"Monate","years":"Jahre","summaryDay":"Tag(e)","summaryWeek":"Woche(n)","summaryMonth":"Monat(e)","summaryYear":"Jahr(e)","summaryOn":"auf","summaryUntil":"bis","summaryTimes":"Zeit(en)","intervalAriaLabel":"Anzahl der Wiederholungen","frequencyAriaLabel":"Wählen Sie die Wiederholungsfrequenz","byMonthAriaLabel":"Wählen Sie den Monat des Jahres aus","byMonthDayAriaLabel":"Wiederholen Sie dies am Tag des Monats","byDayAriaLabel":"Wiederholen Sie dies an einem bestimmten Wochentag im Monat","bySetPositionAriaLabel":"Wählen Sie die Wochenposition im Monat","endTypeAriaLabel":"Wählen Sie den Endtyp der Wiederholung aus","countAriaLabel":"Anzahl der Vorkommen","untilAriaLabel":"Wählen Sie Wiederholung bis Datum"},"datetimepicker":{"date":"Datum","time":"Zeit","cancel":"Abbrechen","set":"Set","now":"Jetzt","today":"Heute","toggleDateTime":"Datum-Uhrzeit-Auswahl umschalten","clearValue":"Klarer Wert","previous":"Zurück","next":"Als nächstes","day":"Tag","month":"Monat","year":"Jahr","hour":"Stunde","minute":"Minute","second":"zweitens","meridiem":"BIN"},"multiSelect":{"noRecordsMessage":"Keine Datensätze gefunden","errorMessage":"Anfrage fehlgeschlagen"},"daterangepicker":{"startDate":"Startdatum","endDate":"Enddatum","selectedDays":"Ausgewählte Tage","customRange":"Benutzerdefinierter Bereich","apply":"Bewerben","cancel":"Abbrechen","day":"Tag","month":"Monat","year":"Jahr","hour":"Stunde","minute":"Minute","second":"zweitens","meridiem":"BIN"},"toast":{"close":"Schließen"},"uploader":{"browse":"Durchsuchen","dragDropText":"Oder ziehen Sie Dateien hierher und legen Sie sie dort ab","upload":"Hochladen","clear":"Klar","invalidFileType":"Der Dateityp „{0}“ ist nicht zulässig","fileSizeExceeded":"Dateigröße {0} überschreitet das Maximum {1}","minFileSizeNotMet":"Die Dateigröße {0} liegt unter der Mindestgröße {1}","duplicateFile":"Datei „{0}“ existiert bereits","maxFilesExceeded":"{0} Dateien können nicht hinzugefügt werden. Maximal {1} Dateien zulässig.","maxTotalSizeExceeded":"Das Hinzufügen dieser Datei würde die Gesamtgrößenbeschränkung von {0} überschreiten.","uploadSuccess":"Datei erfolgreich hochgeladen","uploadFailed":"Der Upload ist fehlgeschlagen","uploading":"Hochladen...","paused":"Angehalten","canceled":"Abgesagt","readyToUpload":"Bereit zum Hochladen","networkError":"Ein Netzwerkfehler ist aufgetreten","uploadTimeout":"Zeitüberschreitung beim Hochladen","uploadAborted":"Der Upload wurde abgebrochen"},"fileUpload":{"browse":"Durchsuchen","dragDropText":"Oder ziehen Sie Dateien hierher und legen Sie sie dort ab","upload":"Hochladen","clear":"Klar","invalidFileType":"Der Dateityp „{0}“ ist nicht zulässig","fileSizeExceeded":"Dateigröße {0} überschreitet das Maximum {1}","minFileSizeNotMet":"Die Dateigröße {0} liegt unter der Mindestgröße {1}","duplicateFile":"Datei „{0}“ existiert bereits","maxFilesExceeded":"{0} Dateien können nicht hinzugefügt werden. Maximal {1} Dateien zulässig.","maxTotalSizeExceeded":"Das Hinzufügen dieser Datei würde die Gesamtgrößenbeschränkung von {0} überschreiten.","uploadSuccess":"Datei erfolgreich hochgeladen","uploadFailed":"Der Upload ist fehlgeschlagen","uploading":"Hochladen...","paused":"Angehalten","canceled":"Abgesagt","readyToUpload":"Bereit zum Hochladen","networkError":"Ein Netzwerkfehler ist aufgetreten","uploadTimeout":"Zeitüberschreitung beim Hochladen","uploadAborted":"Der Upload wurde abgebrochen","abort":"Abbruch","pause":"Pause","resume":"Lebenslauf","retry":"Versuchen Sie es noch einmal","remove":"Datei entfernen","delete":"Datei löschen"},"gridChart":{},"queryBuilder":{"selectField":"Feld auswählen…","selectOperator":"Betreiber auswählen…","selectValue":"Wert auswählen…","selectMultipleValues":"Werte auswählen…","enterValue":"Wert eingeben","enterNumber":"Nummer eingeben","selectDate":"Wählen Sie ein Datum aus","datetimeFormat":"JJJJ-MM-TTTHH:mm:ss","start":"Starten","end":"Ende","betweenStartValue":"Zwischen Startwert","betweenEndValue":"Zwischen Endwert","betweenStartDate":"Zwischen Startdatum","betweenEndDate":"Zwischen Enddatum","booleanValue":"Boolescher Wert","numericValue":"Numerischer Wert","dateValue":"Datumswert","datetimeValue":"Datetime-Wert","value":"Wert","addCondition":"Bedingung hinzufügen","addGroup":"Gruppe hinzufügen","ruleGroup":"Regelgruppe im Detail","groupCondition":"Gruppenbedingung","enableNot":"NICHT aktivieren","disableNot":"Deaktivieren Sie NICHT","matchAll":"Alles abgleichen (UND)","matchAny":"Entspricht einer beliebigen (ODER)","cloneRule":"Klonregel","lockRule":"Sperrregel","unlockRule":"Regel entsperren","deleteRule":"Regel löschen","cloneGroup":"Klongruppe","lockGroup":"Gruppe sperren","unlockGroup":"Gruppe entsperren","deleteGroup":"Gruppe löschen","dragHandle":"Zum Neuanordnen ziehen","unselectedField":"nicht ausgewähltes Feld","ruleFor":"Regel für"}}'),nu={de:pl},ru=Object.freeze(Object.defineProperty({__proto__:null,de:pl,default:nu},Symbol.toStringTag,{value:"Module"})),yl=JSON.parse(`{"message":{"close":"Fermer"},"grid":{"noRecordsMessage":"Aucun enregistrement à afficher","filterBarTooltip":"Cellule de barre de filtre","invalidFilterMessage":"Données de filtre invalides","booleanTrueLabel":"vrai","booleanFalseLabel":"faux","addButtonLabel":"Ajouter","editButtonLabel":"Modifier","cancelButtonLabel":"Annuler","updateButtonLabel":"Mise à jour","deleteButtonLabel":"Supprimer","searchButtonLabel":"Rechercher","pdfButtonLabel":"Exportation PDF","excelButtonLabel":"Exportation Excel","unsavedChangesConfirmation":"Les modifications non enregistrées seront perdues. Êtes-vous sûr de vouloir continuer ?","noRecordsEditMessage":"Aucun enregistrement sélectionné pour l'opération de modification","noRecordsDeleteMessage":"Aucun enregistrement sélectionné pour l'opération de suppression","okButtonLabel":"D'accord","confirmDeleteMessage":"Etes-vous sûr de vouloir supprimer l'enregistrement ?","chooseRecordsToDelete":"Choisissez les enregistrements à supprimer","deleteSelectedRecordsOnPage":"Supprimer {0}enregistrement sélectionné{1} sur cette page","deleteSelectedRecordsOnPageDescription":"Supprime uniquement les éléments actuellement visibles dans la vue grille","deleteAllSelectedRecordsAcrossPages":"Supprimer tous les {0} enregistrements sélectionnés sur plusieurs pages","deleteAllSelectedRecordsAcrossPagesDescription":"Supprime les enregistrements de la page actuelle ainsi que {0} sélections supplémentaires d'autres pages","deleteAllSelectedRecordsAcrossPagesDescriptionNoCurrentPage":"Supprime {0}enregistrement{1} sélectionné sur d'autres pages","deleteAllSelectedRecordsFromLoadedPages":"Supprimer tous les {0} enregistrements sélectionnés des pages chargées","deleteAllSelectedRecordsFromLoadedPagesDescription":"Supprime les enregistrements de la page actuelle ainsi que {0} sélections supplémentaires des pages chargées","deleteAllSelectedRecordsFromLoadedPagesDescriptionNoCurrentPage":"Supprime {0}enregistrement{1} des pages chargées","selectAllRows":"Sélectionner toutes les lignes","selectRow":"Sélectionner une ligne","startsWith":"Commence par","doesNotStartWith":"Ne commence pas par","like":"Comme","endsWith":"Se termine par","doesNotEndWith":"Ne se termine pas par","contains":"Contient","doesNotContain":"Ne contient pas","isNull":"Nul","isNotNull":"Pas nul","isEmpty":"Vide","isNotEmpty":"Pas vide","equal":"Égal","notEqual":"Pas égal","lessThan":"Moins de","lessThanOrEqual":"Inférieur ou égal","greaterThan":"Supérieur à","greaterThanOrEqual":"Supérieur ou égal","in":"Dans","notIn":"Pas dans","saveButtonLabel":"Enregistrer","addNewRecordLabel":"Ajouter un nouvel enregistrement","detailsOfLabel":"Détails de","recordFormLabel":"Formulaire d'enregistrement","columnHeaderLabel":"En-tête de colonne","selectAll":"Sélectionner tout","noMatches":"Aucune correspondance trouvée","chooseColumns":"Choisir une colonne","noResult":"Aucune correspondance trouvée","clearFilter":"Effacer le filtre","clear":"Effacer","sortAtoZ":"Trier de A à Z","sortZtoA":"Trier Z à A","sortByOldest":"Trier par le plus ancien","sortByNewest":"Trier par plus récent","sortSmallestToLargest":"Trier du plus petit au plus grand","sortLargestToSmallest":"Trier du plus grand au plus petit","addCurrentSelection":"Ajouter la sélection actuelle au filtre","blanks":"Blancs","oKButton":"D'accord","cancelButton":"Annuler","primary":"Par défaut","advanced":"Avancé","enterValue":"Entrez la valeur","and":"ET","or":"OU","filterTrue":"Vrai","filterFalse":"Faux","editRecordLabel":"Modifier l'enregistrement","deleteRecordLabel":"Supprimer l'enregistrement","firstPageLabel":"Première page","prevPageLabel":"Page précédente","lastPageLabel":"Dernière page","nextPageLabel":"Page suivante","sortAscendingLabel":"Trier par ordre croissant","sortDescendingLabel":"Trier par ordre décroissant","clearSortLabel":"Effacer le tri","clearSelectionLabel":"Effacer la sélection","selectRowLabel":"Sélectionner une ligne","clearRowSelectionLabel":"Effacer la sélection de ligne","selectLabel":"Sélectionnez","sumLabel":"Somme","averageLabel":"Moyenne","minLabel":"Min.","maxLabel":"Max.","countLabel":"Compter","trueCountLabel":"Vrai décompte","falseCountLabel":"Faux décompte","customLabel":"Personnalisé","pinColumnLabel":"Colonne de broches","pinToLeftLabel":"Épingler à gauche","pinToRightLabel":"Épingler à droite","unpinColumnLabel":"Désépingler la colonne","pinRowLabel":"Rangée de broches","unpinRowLabel":"Désépingler la ligne","pinToTopLabel":"Épingler en haut","pinToBottomLabel":"Épingler en bas","checkBox":"Case à cocher","expanded":"Élargi","collapsed":"Effondré","singleColumnGroupLabel":"Groupe","groupDropAreaLabel":"Zone de dépôt de groupe","groupDropAreaHintText":"Faites glisser un en-tête de colonne ici pour regrouper sa colonne","groupDropAreaTitle":"Groupes de lignes","aggregateDropAreaLabel":"Zone de dépôt globale","aggregateDropAreaTitle":"Valeurs","columnChooserGroupDropAreaHintText":"Faites glisser ici pour regrouper sa colonne","columnChooserAggregateDropAreaHintText":"Faites glisser ici pour agréger","statusBarTotalRowCountLabel":"Nombre total de lignes :","statusBarFilteredRowCountLabel":"Lignes filtrées :","statusBarSelectedRowCountLabel":"Lignes sélectionnées :","statusBarSelectedCellsCountLabel":"Cellules sélectionnées :","statusBarSelectionSumLabel":"Somme :","statusBarSelectionAverageLabel":"Moyenne :","statusBarSelectionCountLabel":"Compter :","statusBarSelectionMinLabel":"Min :","statusBarSelectionMaxLabel":"Maximale :"},"pager":{"currentPageLabel":"{0} sur {1} pages","totalItemsLabel":"({0} éléments)","totalItemLabel":"({0} élément)","firstPageTooltip":"Aller à la première page","lastPageTooltip":"Aller à la dernière page","nextPageTooltip":"Aller à la page suivante","previousPageTooltip":"Aller à la page précédente","nextPageGroupTooltip":"Aller au groupe de pages suivant","previousPageGroupTooltip":"Aller au groupe de pages précédent","pagerStatusMessage":"Message externe du téléavertisseur","pageLabel":"Pages ","pagerOfLabel":" de ","pagesLabel":" Pages"},"chart":{"zoom":"Zoomer","zoomIn":"Zoom avant","zoomOut":"Zoom arrière","reset":"Réinitialiser","pan":"Poêle","resetZoom":"Réinitialiser le zoom"},"dialog":{"close":"Fermer"},"calendar":{"today":"Aujourd'hui","nextMonth":"Le mois prochain","previousMonth":"Mois précédent","nextYear":"L'année prochaine","previousYear":"Année précédente","nextDecade":"La prochaine décennie","previousDecade":"Décennie précédente"},"datepicker":{"today":"Aujourd'hui","placeholder":"Choisissez une date","day":"jour","month":"mois","year":"année","hour":"heure","minute":"minute","second":"deuxième","meridiem":"SUIS"},"formValidator":{"required":"Ce champ est obligatoire.","email":"Veuillez saisir une adresse e-mail valide.","url":"Veuillez saisir une URL valide.","date":"Veuillez entrer une date valide.","dateIso":"Veuillez saisir une date valide (ISO).","creditCard":"Veuillez saisir un numéro de carte valide.","number":"Veuillez entrer un numéro valide.","digits":"Veuillez saisir uniquement des chiffres.","maxLength":"Veuillez ne pas saisir plus de {0} caractères.","minLength":"Veuillez saisir au moins {0} caractères.","rangeLength":"Veuillez saisir une valeur comprise entre {0} et {1} caractères.","range":"Veuillez saisir une valeur comprise entre {0} et {1}.","max":"Veuillez saisir une valeur inférieure ou égale à {0}.","min":"Veuillez saisir une valeur supérieure ou égale à {0}.","regex":"Veuillez saisir une valeur correcte.","tel":"Veuillez entrer un numéro de téléphone valide.","equalTo":"Veuillez saisir à nouveau la même valeur."},"numericTextbox":{"increment":"Valeur d'incrément","decrement":"Décrémenter la valeur","clear":"Effacer"},"textarea":{"clear":"Effacer"},"textbox":{"clear":"Effacer"},"timepicker":{"placeholder":"Choisissez une heure","day":"jour","month":"mois","year":"année","hour":"heure","minute":"minute","second":"deuxième","meridiem":"SUIS"},"scheduler":{"addTitle":"Ajouter un titre","save":"Enregistrer","edit":"Modifier","delete":"Supprimer","moreDetails":"Plus de détails","close":"Fermer","newEvent":"Nouvel événement","today":"Aujourd'hui","allDay":"Toute la journée","to":"à","recurringEvent":"Événement récurrent","day":"Jour","week":"Semaine","workweek":"Semaine de travail","month":"Mois","agenda":"Ordre du jour","timelineday":"Jour de la chronologie","timelineweek":"Semaine chronologique","timelineworkweek":"Calendrier Semaine de travail","timelinemonth":"Mois de la chronologie","more":"plus","expandAllDaySection":"Développer la section toute la journée","collapseAllDaySection":"Réduire la section Journée entière","allDayEventsScrollable":"Événements toute la journée, déroulants","deleteEvent":"Supprimer l'événement","confirmDeleteMessage":"Êtes-vous sûr de vouloir supprimer cet événement ?","cancel":"Annuler","title":"Titre","location":"Emplacement","description":"Descriptif","startDate":"Date de début","endDate":"Date de fin","startTime":"Heure de début","endTime":"Heure de fin","eventOverlap":"Chevauchement d'événements","overlapAlert":"Les événements ne peuvent pas être programmés pendant l'heure choisie car elle chevauche un autre événement.","blockAlert":"Les événements ne peuvent pas être programmés dans la plage horaire bloquée.","ok":"D'accord","alert":"Alerte","invalidDateValue":"La valeur de date saisie n'est pas valide.","invalidTimeValue":"La valeur de temps saisie n'est pas valide.","invalidDateRange":"La date de fin sélectionnée est antérieure à la date de début.","repeat":"Répéter","never":"Jamais","daily":"Quotidiennement","weekly":"Hebdomadaire","monthly":"Mensuel","yearly":"Annuel","custom":"Personnalisé","timezone":"Fuseau horaire","startTimezone":"Fuseau horaire de début","endTimezone":"Fin du fuseau horaire","searchTimezone":"Rechercher le fuseau horaire","customRecurrence":"Récurrence personnalisée","seriesChangeAlert":"Souhaitez-vous annuler les modifications apportées à des instances spécifiques de cette série et les faire correspondre à nouveau à l'ensemble de la série ?","createError":"La durée de l'événement doit être inférieure à la fréquence à laquelle il se produit. Raccourcissez la durée ou modifiez le modèle de récurrence dans l'éditeur d'événements de récurrence.","sameDayAlert":"Deux occurrences du même événement ne peuvent pas se produire le même jour.","occurenceAlert":"Impossible de replanifier une occurrence du rendez-vous récurrent si elle ignore une occurrence ultérieure du même rendez-vous.","editEventContent":"Comment souhaiteriez-vous modifier le rendez-vous dans la série ?","editEvent":"Modifier l'événement","editThisEvent":"Modifier l'événement","editEntireSeries":"Série entière","yes":"Oui","no":"Non","followingEvents":"Événements suivants","eventsFor":"Événements pour","noEvents":"Aucun événement","openResourceList":"Ouvrir la liste des ressources","closeResourceList":"Fermer la liste des ressources","resources":"Ressources"},"dropdownList":{"noRecordsMessage":"Aucun enregistrement trouvé","errorMessage":"La demande a échoué"},"comboBox":{"noRecordsMessage":"Aucun enregistrement trouvé","errorMessage":"La demande a échoué"},"autoComplete":{"noRecordsMessage":"Aucun enregistrement trouvé","errorMessage":"La demande a échoué"},"recurrenceEditor":{"day":"Jour","week":"Semaine","month":"Mois","year":"Année","repeat":"Répéter","repeatEvery":"Répétez tous les","repeatedMode":"Mode","end":"Fin","repeatOn":"Répétez sur","repeatMode":"Mode répétition","first":"D'abord","second":"Deuxième","third":"Troisième","fourth":"Quatrième","last":"Dernier","never":"Jamais","until":"Jusqu'à","count":"Compter","every":"Chaque","days":"Jours","weeks":"Semaines","months":"Mois","years":"Années","summaryDay":"jour(s)","summaryWeek":"semaine(s)","summaryMonth":"mois","summaryYear":"année(s)","summaryOn":"sur","summaryUntil":"jusqu'à","summaryTimes":"heure(s)","intervalAriaLabel":"Nombre de répétitions","frequencyAriaLabel":"Sélectionnez la fréquence de répétition","byMonthAriaLabel":"Sélectionnez le mois de l'année","byMonthDayAriaLabel":"Répéter le jour du mois","byDayAriaLabel":"Répéter un jour de semaine spécifique du mois","bySetPositionAriaLabel":"Sélectionnez la position de la semaine dans le mois","endTypeAriaLabel":"Sélectionnez le type de fin de récurrence","countAriaLabel":"Nombre d'occurrences","untilAriaLabel":"Choisissez la récurrence jusqu'à la date"},"datetimepicker":{"date":"Date","time":"Temps","cancel":"Annuler","set":"Ensemble","now":"Maintenant","today":"Aujourd'hui","toggleDateTime":"Basculer le sélecteur de date et d'heure","clearValue":"Effacer la valeur","previous":"Précédent","next":"Suivant","day":"jour","month":"mois","year":"année","hour":"heure","minute":"minute","second":"deuxième","meridiem":"SUIS"},"multiSelect":{"noRecordsMessage":"Aucun enregistrement trouvé","errorMessage":"La demande a échoué"},"daterangepicker":{"startDate":"Date de début","endDate":"Date de fin","selectedDays":"Jours sélectionnés","customRange":"Gamme personnalisée","apply":"Postuler","cancel":"Annuler","day":"jour","month":"mois","year":"année","hour":"heure","minute":"minute","second":"deuxième","meridiem":"SUIS"},"toast":{"close":"Fermer"},"uploader":{"browse":"Parcourir","dragDropText":"Ou faites glisser et déposez les fichiers ici","upload":"Télécharger","clear":"Effacer","invalidFileType":"Le type de fichier \\"{0}\\" n'est pas autorisé","fileSizeExceeded":"La taille du fichier {0} dépasse le maximum {1}","minFileSizeNotMet":"La taille du fichier {0} est inférieure au minimum {1}","duplicateFile":"Le fichier \\"{0}\\" existe déjà","maxFilesExceeded":"Impossible d'ajouter {0} fichiers. Maximum de {1} fichiers autorisés.","maxTotalSizeExceeded":"L'ajout de ce fichier dépasserait la limite de taille totale de {0}","uploadSuccess":"Fichier téléchargé avec succès","uploadFailed":"Échec du téléchargement","uploading":"Téléchargement...","paused":"En pause","canceled":"Annulé","readyToUpload":"Prêt à télécharger","networkError":"Une erreur réseau s'est produite","uploadTimeout":"Le délai de téléchargement a expiré","uploadAborted":"Le téléchargement a été interrompu"},"fileUpload":{"browse":"Parcourir","dragDropText":"Ou faites glisser et déposez les fichiers ici","upload":"Télécharger","clear":"Effacer","invalidFileType":"Le type de fichier \\"{0}\\" n'est pas autorisé","fileSizeExceeded":"La taille du fichier {0} dépasse le maximum {1}","minFileSizeNotMet":"La taille du fichier {0} est inférieure au minimum {1}","duplicateFile":"Le fichier \\"{0}\\" existe déjà","maxFilesExceeded":"Impossible d'ajouter {0} fichiers. Maximum de {1} fichiers autorisés.","maxTotalSizeExceeded":"L'ajout de ce fichier dépasserait la limite de taille totale de {0}","uploadSuccess":"Fichier téléchargé avec succès","uploadFailed":"Échec du téléchargement","uploading":"Téléchargement...","paused":"En pause","canceled":"Annulé","readyToUpload":"Prêt à télécharger","networkError":"Une erreur réseau s'est produite","uploadTimeout":"Le délai de téléchargement a expiré","uploadAborted":"Le téléchargement a été interrompu","abort":"Abandonner","pause":"Pause","resume":"CV","retry":"Réessayer","remove":"Supprimer le fichier","delete":"Supprimer le fichier"},"gridChart":{},"queryBuilder":{"selectField":"Sélectionnez le champ…","selectOperator":"Sélectionnez l'opérateur…","selectValue":"Sélectionnez une valeur…","selectMultipleValues":"Sélectionnez des valeurs…","enterValue":"Entrez la valeur","enterNumber":"Entrez le numéro","selectDate":"Sélectionnez une date","datetimeFormat":"AAAA-MM-JJTHH : mm : ss","start":"Commencer","end":"Fin","betweenStartValue":"Entre la valeur de départ","betweenEndValue":"Entre la valeur finale","betweenStartDate":"Entre la date de début","betweenEndDate":"Entre la date de fin","booleanValue":"Valeur booléenne","numericValue":"Valeur numérique","dateValue":"Valeur de la date","datetimeValue":"Valeur date/heure","value":"Valeur","addCondition":"Ajouter une condition","addGroup":"Ajouter un groupe","ruleGroup":"Groupe de règles en profondeur","groupCondition":"Condition de groupe","enableNot":"Activer NON","disableNot":"Désactiver NON","matchAll":"Faire correspondre tout (ET)","matchAny":"Correspond à n'importe quel (OU)","cloneRule":"Règle de clonage","lockRule":"Règle de verrouillage","unlockRule":"Règle de déverrouillage","deleteRule":"Supprimer la règle","cloneGroup":"Groupe de clones","lockGroup":"Groupe de verrouillage","unlockGroup":"Déverrouiller le groupe","deleteGroup":"Supprimer le groupe","dragHandle":"Faites glisser pour réorganiser","unselectedField":"champ non sélectionné","ruleFor":"Règle pour"}}`),iu={fr:yl},ou=Object.freeze(Object.defineProperty({__proto__:null,default:iu,fr:yl},Symbol.toStringTag,{value:"Module"})),gl=JSON.parse('{"message":{"close":"إغلاق"},"grid":{"noRecordsMessage":"لا توجد سجلات لعرضها","filterBarTooltip":"خلية شريط التصفية","invalidFilterMessage":"بيانات التصفية غير صالحة","booleanTrueLabel":"صحيح","booleanFalseLabel":"كاذبة","addButtonLabel":"أضف","editButtonLabel":"تحرير","cancelButtonLabel":"إلغاء","updateButtonLabel":"تحديث","deleteButtonLabel":"حذف","searchButtonLabel":"بحث","pdfButtonLabel":"تصدير قوات الدفاع الشعبي","excelButtonLabel":"تصدير اكسل","unsavedChangesConfirmation":"سيتم فقدان التغييرات غير المحفوظة. هل أنت متأكد أنك تريد الاستمرار؟","noRecordsEditMessage":"لم يتم تحديد أي سجلات لعملية التحرير","noRecordsDeleteMessage":"لم يتم تحديد أي سجلات لعملية الحذف","okButtonLabel":"حسنًا","confirmDeleteMessage":"هل أنت متأكد أنك تريد حذف السجل؟","chooseRecordsToDelete":"اختر السجلات المراد حذفها","deleteSelectedRecordsOnPage":"احذف {0} السجل المحدد{1} في هذه الصفحة","deleteSelectedRecordsOnPageDescription":"يزيل فقط العناصر المرئية حاليًا في عرض الشبكة","deleteAllSelectedRecordsAcrossPages":"احذف جميع السجلات المحددة البالغ عددها {0} عبر الصفحات","deleteAllSelectedRecordsAcrossPagesDescription":"إزالة السجلات من الصفحة الحالية بالإضافة إلى {0} تحديدات إضافية من الصفحات الأخرى","deleteAllSelectedRecordsAcrossPagesDescriptionNoCurrentPage":"إزالة {0} السجل{1} المحدد في الصفحات الأخرى","deleteAllSelectedRecordsFromLoadedPages":"احذف جميع السجلات المحددة البالغ عددها {0} من الصفحات المحملة","deleteAllSelectedRecordsFromLoadedPagesDescription":"إزالة السجلات من الصفحة الحالية مع {0} تحديدات إضافية من الصفحات المحملة","deleteAllSelectedRecordsFromLoadedPagesDescriptionNoCurrentPage":"إزالة {0} سجل{1} من الصفحات المحملة","selectAllRows":"حدد كافة الصفوف","selectRow":"حدد الصف","startsWith":"يبدأ ب","doesNotStartWith":"لا يبدأ بـ","like":"مثل","endsWith":"ينتهي ب","doesNotEndWith":"لا ينتهي ب","contains":"يحتوي على","doesNotContain":"لا يحتوي","isNull":"لاغية","isNotNull":"ليست فارغة","isEmpty":"فارغ","isNotEmpty":"ليس فارغا","equal":"متساوي","notEqual":"ليس متساويا","lessThan":"أقل من","lessThanOrEqual":"أقل من أو يساوي","greaterThan":"أعظم من","greaterThanOrEqual":"أكبر من أو يساوي","in":"في","notIn":"ليس في","saveButtonLabel":"حفظ","addNewRecordLabel":"إضافة سجل جديد","detailsOfLabel":"تفاصيل","recordFormLabel":"نموذج السجل","columnHeaderLabel":"رأس العمود","selectAll":"حدد الكل","noMatches":"لم يتم العثور على أي تطابقات","chooseColumns":"اختر العمود","noResult":"لم يتم العثور على أي تطابقات","clearFilter":"مسح التصفية","clear":"واضح","sortAtoZ":"فرز من أ إلى ي","sortZtoA":"فرز من Z إلى A","sortByOldest":"الترتيب حسب الأقدم","sortByNewest":"الترتيب حسب الأحدث","sortSmallestToLargest":"فرز من الأصغر إلى الأكبر","sortLargestToSmallest":"فرز من الأكبر إلى الأصغر","addCurrentSelection":"أضف التحديد الحالي للتصفية","blanks":"الفراغات","oKButton":"حسنًا","cancelButton":"إلغاء","primary":"الافتراضي","advanced":"متقدم","enterValue":"أدخل القيمة","and":"و","or":"أو","filterTrue":"صحيح","filterFalse":"خطأ","editRecordLabel":"تحرير السجل","deleteRecordLabel":"حذف السجل","firstPageLabel":"الصفحة الأولى","prevPageLabel":"الصفحة السابقة","lastPageLabel":"الصفحة الأخيرة","nextPageLabel":"الصفحة التالية","sortAscendingLabel":"فرز تصاعدي","sortDescendingLabel":"فرز تنازلي","clearSortLabel":"فرز واضح","clearSelectionLabel":"مسح التحديد","selectRowLabel":"حدد الصف","clearRowSelectionLabel":"مسح تحديد الصف","selectLabel":"اختر","sumLabel":"مجموع","averageLabel":"متوسط","minLabel":"دقيقة","maxLabel":"ماكس","countLabel":"عد","trueCountLabel":"العدد الحقيقي","falseCountLabel":"العد الخاطئ","customLabel":"مخصص","pinColumnLabel":"عمود الدبوس","pinToLeftLabel":"دبوس إلى اليسار","pinToRightLabel":"تثبيت على اليمين","unpinColumnLabel":"إزالة تثبيت العمود","pinRowLabel":"صف الدبوس","unpinRowLabel":"إلغاء تثبيت الصف","pinToTopLabel":"دبوس إلى الأعلى","pinToBottomLabel":"دبوس إلى الأسفل","checkBox":"خانة الاختيار","expanded":"موسعة","collapsed":"انهار","singleColumnGroupLabel":"المجموعة","groupDropAreaLabel":"منطقة إسقاط المجموعة","groupDropAreaHintText":"اسحب رأس العمود هنا لتجميع العمود الخاص به","groupDropAreaTitle":"مجموعات الصفوف","aggregateDropAreaLabel":"منطقة الهبوط الإجمالية","aggregateDropAreaTitle":"القيم","columnChooserGroupDropAreaHintText":"اسحب هنا لتجميع العمود الخاص به","columnChooserAggregateDropAreaHintText":"اسحب هنا للتجميع","statusBarTotalRowCountLabel":"إجمالي الصفوف:","statusBarFilteredRowCountLabel":"الصفوف التي تمت تصفيتها:","statusBarSelectedRowCountLabel":"الصفوف المحددة:","statusBarSelectedCellsCountLabel":"الخلايا المحددة:","statusBarSelectionSumLabel":"المجموع:","statusBarSelectionAverageLabel":"المتوسط:","statusBarSelectionCountLabel":"العدد:","statusBarSelectionMinLabel":"الحد الأدنى:","statusBarSelectionMaxLabel":"الحد الأقصى:"},"pager":{"currentPageLabel":"{0} من {1} صفحة","totalItemsLabel":"({0} عنصر)","totalItemLabel":"({0} عنصر)","firstPageTooltip":"انتقل إلى الصفحة الأولى","lastPageTooltip":"انتقل إلى الصفحة الأخيرة","nextPageTooltip":"انتقل إلى الصفحة التالية","previousPageTooltip":"انتقل إلى الصفحة السابقة","nextPageGroupTooltip":"انتقل إلى مجموعة الصفحات التالية","previousPageGroupTooltip":"انتقل إلى مجموعة الصفحات السابقة","pagerStatusMessage":"بيجر رسالة خارجية","pageLabel":"الصفحة ","pagerOfLabel":" من ","pagesLabel":" الصفحات"},"chart":{"zoom":"تكبير","zoomIn":"تكبير","zoomOut":"تصغير","reset":"إعادة تعيين","pan":"عموم","resetZoom":"إعادة ضبط التكبير"},"dialog":{"close":"إغلاق"},"calendar":{"today":"اليوم","nextMonth":"الشهر القادم","previousMonth":"الشهر السابق","nextYear":"العام القادم","previousYear":"العام السابق","nextDecade":"العقد القادم","previousDecade":"العقد السابق"},"datepicker":{"today":"اليوم","placeholder":"اختر تاريخًا","day":"يوم","month":"شهر","year":"سنة","hour":"ساعة","minute":"دقيقة","second":"ثانيا","meridiem":"صباحا"},"formValidator":{"required":"هذا الحقل مطلوب.","email":"الرجاء إدخال عنوان بريد إلكتروني صالح.","url":"الرجاء إدخال عنوان URL صالح.","date":"الرجاء إدخال تاريخ صالح.","dateIso":"الرجاء إدخال تاريخ صالح (ISO).","creditCard":"الرجاء إدخال رقم بطاقة صالح.","number":"الرجاء إدخال رقم صالح.","digits":"الرجاء إدخال أرقام فقط.","maxLength":"الرجاء إدخال ما لا يزيد عن {0} حرفًا.","minLength":"الرجاء إدخال {0} حرفًا على الأقل.","rangeLength":"الرجاء إدخال قيمة يتراوح طولها بين {0} و{1} حرفًا.","range":"الرجاء إدخال قيمة بين {0} و{1}.","max":"الرجاء إدخال قيمة أقل من أو تساوي {0}.","min":"الرجاء إدخال قيمة أكبر من أو تساوي {0}.","regex":"الرجاء إدخال قيمة صحيحة.","tel":"الرجاء إدخال رقم هاتف صالح.","equalTo":"الرجاء إدخال نفس القيمة مرة أخرى."},"numericTextbox":{"increment":"زيادة القيمة","decrement":"إنقاص القيمة","clear":"واضح"},"textarea":{"clear":"واضح"},"textbox":{"clear":"واضح"},"timepicker":{"placeholder":"اختر وقتًا","day":"يوم","month":"شهر","year":"سنة","hour":"ساعة","minute":"دقيقة","second":"ثانيا","meridiem":"صباحا"},"scheduler":{"addTitle":"أضف عنوانًا","save":"حفظ","edit":"تحرير","delete":"حذف","moreDetails":"مزيد من التفاصيل","close":"إغلاق","newEvent":"حدث جديد","today":"اليوم","allDay":"طوال اليوم","to":"ل","recurringEvent":"حدث متكرر","day":"يوم","week":"الأسبوع","workweek":"أسبوع العمل","month":"شهر","agenda":"جدول الأعمال","timelineday":"يوم الجدول الزمني","timelineweek":"أسبوع الجدول الزمني","timelineworkweek":"أسبوع العمل الجدول الزمني","timelinemonth":"شهر الجدول الزمني","more":"المزيد","expandAllDaySection":"قم بتوسيع قسم اليوم كله","collapseAllDaySection":"طي قسم اليوم كله","allDayEventsScrollable":"أحداث طوال اليوم، قابلة للتمرير","deleteEvent":"حذف الحدث","confirmDeleteMessage":"هل أنت متأكد أنك تريد حذف هذا الحدث؟","cancel":"إلغاء","title":"العنوان","location":"الموقع","description":"الوصف","startDate":"تاريخ البدء","endDate":"تاريخ الانتهاء","startTime":"وقت البدء","endTime":"وقت الانتهاء","eventOverlap":"تداخل الأحداث","overlapAlert":"لا يمكن جدولة الأحداث خلال الوقت المختار لأنه يتداخل مع حدث آخر.","blockAlert":"لا يمكن جدولة الأحداث ضمن النطاق الزمني المحظور.","ok":"حسنًا","alert":"تنبيه","invalidDateValue":"قيمة التاريخ المدخلة غير صالحة.","invalidTimeValue":"قيمة الوقت المدخلة غير صالحة.","invalidDateRange":"يقع تاريخ الانتهاء المحدد قبل تاريخ البدء.","repeat":"كرر","never":"أبدا","daily":"يوميا","weekly":"أسبوعيا","monthly":"شهريا","yearly":"سنويا","custom":"مخصص","timezone":"المنطقة الزمنية","startTimezone":"بدء المنطقة الزمنية","endTimezone":"نهاية المنطقة الزمنية","searchTimezone":"البحث في المنطقة الزمنية","customRecurrence":"التكرار المخصص","seriesChangeAlert":"هل تريد إلغاء التغييرات التي تم إجراؤها على مثيلات معينة من هذه السلسلة ومطابقتها مع السلسلة بأكملها مرة أخرى؟","createError":"يجب أن تكون مدة الحدث أقل من عدد مرات حدوثه. قم بتقصير المدة، أو قم بتغيير نمط التكرار في محرر حدث التكرار.","sameDayAlert":"لا يمكن أن يحدث حدثان لنفس الحدث في نفس اليوم.","occurenceAlert":"لا يمكن إعادة جدولة تكرار للموعد المتكرر إذا تم تخطي تكرار لاحق لنفس الموعد.","editEventContent":"كيف تريد تغيير الموعد في السلسلة؟","editEvent":"تحرير الحدث","editThisEvent":"تحرير الحدث","editEntireSeries":"السلسلة بأكملها","yes":"نعم","no":"لا","followingEvents":"متابعة الأحداث","eventsFor":"أحداث ل","noEvents":"لا توجد أحداث","openResourceList":"فتح قائمة الموارد","closeResourceList":"إغلاق قائمة الموارد","resources":"الموارد"},"dropdownList":{"noRecordsMessage":"لم يتم العثور على سجلات","errorMessage":"فشل الطلب"},"comboBox":{"noRecordsMessage":"لم يتم العثور على سجلات","errorMessage":"فشل الطلب"},"autoComplete":{"noRecordsMessage":"لم يتم العثور على سجلات","errorMessage":"فشل الطلب"},"recurrenceEditor":{"day":"يوم","week":"الأسبوع","month":"شهر","year":"سنة","repeat":"كرر","repeatEvery":"كرر كل","repeatedMode":"الوضع","end":"نهاية","repeatOn":"كرر","repeatMode":"وضع التكرار","first":"أولا","second":"ثانيا","third":"ثالثا","fourth":"الرابع","last":"الاخير","never":"أبدا","until":"حتى","count":"عد","every":"كل","days":"أيام","weeks":"أسابيع","months":"أشهر","years":"سنوات","summaryDay":"يوم (أيام)","summaryWeek":"الأسبوع (الأسابيع)","summaryMonth":"شهر (أشهر)","summaryYear":"سنة (سنوات)","summaryOn":"على","summaryUntil":"حتى","summaryTimes":"الوقت (الأوقات)","intervalAriaLabel":"عدد التكرارات","frequencyAriaLabel":"حدد تردد التكرار","byMonthAriaLabel":"اختر شهرًا من السنة","byMonthDayAriaLabel":"كرر في يوم من الشهر","byDayAriaLabel":"كرر ذلك في يوم محدد من أيام الأسبوع من الشهر","bySetPositionAriaLabel":"حدد موضع الأسبوع في الشهر","endTypeAriaLabel":"حدد نوع نهاية التكرار","countAriaLabel":"عدد مرات الظهور","untilAriaLabel":"اختر التكرار حتى التاريخ"},"datetimepicker":{"date":"التاريخ","time":"الوقت","cancel":"إلغاء","set":"تعيين","now":"الآن","today":"اليوم","toggleDateTime":"تبديل محدد التاريخ والوقت","clearValue":"مسح القيمة","previous":"السابق","next":"التالي","day":"يوم","month":"شهر","year":"سنة","hour":"ساعة","minute":"دقيقة","second":"ثانيا","meridiem":"صباحا"},"multiSelect":{"noRecordsMessage":"لم يتم العثور على سجلات","errorMessage":"فشل الطلب"},"daterangepicker":{"startDate":"تاريخ البدء","endDate":"تاريخ الانتهاء","selectedDays":"أيام مختارة","customRange":"نطاق مخصص","apply":"تطبيق","cancel":"إلغاء","day":"يوم","month":"شهر","year":"سنة","hour":"ساعة","minute":"دقيقة","second":"ثانيا","meridiem":"صباحا"},"toast":{"close":"إغلاق"},"uploader":{"browse":"تصفح","dragDropText":"أو قم بسحب وإسقاط الملفات هنا","upload":"تحميل","clear":"واضح","invalidFileType":"نوع الملف \\"{0}\\" غير مسموح به","fileSizeExceeded":"حجم الملف {0} يتجاوز الحد الأقصى {1}","minFileSizeNotMet":"حجم الملف {0} أقل من الحد الأدنى {1}","duplicateFile":"الملف \\"{0}\\" موجود بالفعل","maxFilesExceeded":"لا يمكن إضافة {0} من الملفات. الحد الأقصى المسموح به هو {1} من الملفات.","maxTotalSizeExceeded":"ستؤدي إضافة هذا الملف إلى تجاوز الحد الأقصى للحجم الإجمالي وهو {0}","uploadSuccess":"تم تحميل الملف بنجاح","uploadFailed":"فشل التحميل","uploading":"جارٍ التحميل...","paused":"متوقف مؤقتًا","canceled":"تم الإلغاء","readyToUpload":"جاهز للتحميل","networkError":"حدث خطأ في الشبكة","uploadTimeout":"انتهت مهلة التحميل","uploadAborted":"تم إحباط التحميل"},"fileUpload":{"browse":"تصفح","dragDropText":"أو قم بسحب وإسقاط الملفات هنا","upload":"تحميل","clear":"واضح","invalidFileType":"نوع الملف \\"{0}\\" غير مسموح به","fileSizeExceeded":"حجم الملف {0} يتجاوز الحد الأقصى {1}","minFileSizeNotMet":"حجم الملف {0} أقل من الحد الأدنى {1}","duplicateFile":"الملف \\"{0}\\" موجود بالفعل","maxFilesExceeded":"لا يمكن إضافة {0} من الملفات. الحد الأقصى المسموح به هو {1} من الملفات.","maxTotalSizeExceeded":"ستؤدي إضافة هذا الملف إلى تجاوز الحد الأقصى للحجم الإجمالي وهو {0}","uploadSuccess":"تم تحميل الملف بنجاح","uploadFailed":"فشل التحميل","uploading":"جارٍ التحميل...","paused":"متوقف مؤقتًا","canceled":"تم الإلغاء","readyToUpload":"جاهز للتحميل","networkError":"حدث خطأ في الشبكة","uploadTimeout":"انتهت مهلة التحميل","uploadAborted":"تم إحباط التحميل","abort":"إحباط","pause":"وقفة","resume":"استئناف","retry":"أعد المحاولة","remove":"إزالة الملف","delete":"حذف الملف"},"gridChart":{},"queryBuilder":{"selectField":"اختر الحقل...","selectOperator":"حدد المشغل...","selectValue":"حدد القيمة...","selectMultipleValues":"حدد القيم...","enterValue":"أدخل القيمة","enterNumber":"أدخل الرقم","selectDate":"حدد تاريخا","datetimeFormat":"YYYY-MM-DDTHH:mm:ss","start":"ابدأ","end":"نهاية","betweenStartValue":"بين قيمة البداية","betweenEndValue":"بين القيمة النهائية","betweenStartDate":"بين تاريخ البدء","betweenEndDate":"بين تاريخ الانتهاء","booleanValue":"قيمة منطقية","numericValue":"القيمة الرقمية","dateValue":"قيمة التاريخ","datetimeValue":"قيمة التاريخ والوقت","value":"القيمة","addCondition":"إضافة شرط","addGroup":"أضف مجموعة","ruleGroup":"مجموعة القاعدة في العمق","groupCondition":"حالة المجموعة","enableNot":"تمكين لا","disableNot":"تعطيل لا","matchAll":"مطابقة الكل (و)","matchAny":"تطابق أي (أو)","cloneRule":"حكم الاستنساخ","lockRule":"قاعدة القفل","unlockRule":"فتح القاعدة","deleteRule":"حذف القاعدة","cloneGroup":"مجموعة استنساخ","lockGroup":"قفل المجموعة","unlockGroup":"فتح المجموعة","deleteGroup":"حذف المجموعة","dragHandle":"اسحب لإعادة الترتيب","unselectedField":"حقل غير محدد","ruleFor":"القاعدة ل"}}'),lu={ar:gl},su=Object.freeze(Object.defineProperty({__proto__:null,ar:gl,default:lu},Symbol.toStringTag,{value:"Module"})),fl={message:{close:"关闭"},grid:{noRecordsMessage:"没有记录可显示",filterBarTooltip:"'s 过滤棒单元",invalidFilterMessage:"过滤数据无效",booleanTrueLabel:"真实",booleanFalseLabel:"假的",addButtonLabel:"添加",editButtonLabel:"编辑",cancelButtonLabel:"取消",updateButtonLabel:"更新",deleteButtonLabel:"删除",searchButtonLabel:"搜索",pdfButtonLabel:"PDF导出",excelButtonLabel:"Excel导出",unsavedChangesConfirmation:"未保存的更改将会丢失。您确定要继续吗？",noRecordsEditMessage:"未选择任何记录进行编辑操作",noRecordsDeleteMessage:"没有选择要删除操作的记录",okButtonLabel:"好的",confirmDeleteMessage:"您确定要删除该记录吗？",chooseRecordsToDelete:"选择要删除的记录",deleteSelectedRecordsOnPage:"删除本页上的{0}条所选记录{1}",deleteSelectedRecordsOnPageDescription:"仅删除网格视图中当前可见的项目",deleteAllSelectedRecordsAcrossPages:"跨页删除所有选定的 {0} 条记录",deleteAllSelectedRecordsAcrossPagesDescription:"从当前页面中删除记录以及其他页面中的 {0} 个附加选择",deleteAllSelectedRecordsAcrossPagesDescriptionNoCurrentPage:"删除在其他页面上选择的 {0} 条记录{1}",deleteAllSelectedRecordsFromLoadedPages:"从加载的页面中删除所有 {0} 个选定的记录",deleteAllSelectedRecordsFromLoadedPagesDescription:"从当前页面中删除记录以及加载页面中的 {0} 个附加选择",deleteAllSelectedRecordsFromLoadedPagesDescriptionNoCurrentPage:"从加载的页面中删除 {0} 条记录{1}",selectAllRows:"选择所有行",selectRow:"选择行",startsWith:"开始于",doesNotStartWith:"不开始于",like:"喜欢",endsWith:"结束于",doesNotEndWith:"不结束于",contains:"包含",doesNotContain:"不包含",isNull:"空",isNotNull:"不为空",isEmpty:"空",isNotEmpty:"不为空",equal:"平等",notEqual:"不等于",lessThan:"小于",lessThanOrEqual:"小于或等于",greaterThan:"大于",greaterThanOrEqual:"大于或等于",in:"在",notIn:"不在",saveButtonLabel:"保存",addNewRecordLabel:"添加新记录",detailsOfLabel:"详情",recordFormLabel:"记录表",columnHeaderLabel:"列标题",selectAll:"选择全部",noMatches:"未找到匹配项",chooseColumns:"选择列",noResult:"未找到匹配项",clearFilter:"清除过滤器",clear:"清除",sortAtoZ:"从 A 到 Z 排序",sortZtoA:"从 Z 到 A 排序",sortByOldest:"按最旧排序",sortByNewest:"按最新排序",sortSmallestToLargest:"从小到大排序",sortLargestToSmallest:"从大到小排序",addCurrentSelection:"将当前选择添加到过滤器",blanks:"毛坯",oKButton:"好的",cancelButton:"取消",primary:"默认",advanced:"高级",enterValue:"输入值",and:"和",or:"或",filterTrue:"真实",filterFalse:"错误",editRecordLabel:"编辑记录",deleteRecordLabel:"删除记录",firstPageLabel:"第一页",prevPageLabel:"上一页",lastPageLabel:"最后一页",nextPageLabel:"下一页",sortAscendingLabel:"升序排序",sortDescendingLabel:"降序排序",clearSortLabel:"清晰排序",clearSelectionLabel:"清除选择",selectRowLabel:"选择行",clearRowSelectionLabel:"清除行选择",selectLabel:"选择",sumLabel:"总和",averageLabel:"平均",minLabel:"最小",maxLabel:"最大",countLabel:"计数",trueCountLabel:"真实计数",falseCountLabel:"错误计数",customLabel:"定制",pinColumnLabel:"销柱",pinToLeftLabel:"固定到左侧",pinToRightLabel:"固定到右侧",unpinColumnLabel:"取消固定列",pinRowLabel:"针排",unpinRowLabel:"取消固定行",pinToTopLabel:"固定到顶部",pinToBottomLabel:"固定到底部",checkBox:"复选框",expanded:"扩展",collapsed:"倒塌",singleColumnGroupLabel:"集团",groupDropAreaLabel:"团体降落区",groupDropAreaHintText:"将列标题拖动到此处以对其列进行分组",groupDropAreaTitle:"行组",aggregateDropAreaLabel:"骨料掉落面积",aggregateDropAreaTitle:"价值观",columnChooserGroupDropAreaHintText:"拖动此处对其列进行分组",columnChooserAggregateDropAreaHintText:"拖至此处进行聚合",statusBarTotalRowCountLabel:"总行数：",statusBarFilteredRowCountLabel:"过滤的行：",statusBarSelectedRowCountLabel:"选定的行：",statusBarSelectedCellsCountLabel:"选定的单元格：",statusBarSelectionSumLabel:"总和：",statusBarSelectionAverageLabel:"平均：",statusBarSelectionCountLabel:"计数：",statusBarSelectionMinLabel:"分钟：",statusBarSelectionMaxLabel:"最大："},pager:{currentPageLabel:"第 {0} 页（共 {1} 页）",totalItemsLabel:"（{0} 项）",totalItemLabel:"（{0} 项）",firstPageTooltip:"转到第一页",lastPageTooltip:"转到最后一页",nextPageTooltip:"转到下一页",previousPageTooltip:"转到上一页",nextPageGroupTooltip:"转到下一个页面组",previousPageGroupTooltip:"转到上一页组",pagerStatusMessage:"寻呼机外部消息",pageLabel:"页面 ",pagerOfLabel:" 的 ",pagesLabel:" 页数"},chart:{zoom:"变焦",zoomIn:"放大",zoomOut:"缩小",reset:"重置",pan:"潘",resetZoom:"重置缩放"},dialog:{close:"关闭"},calendar:{today:"今天",nextMonth:"下个月",previousMonth:"上个月",nextYear:"明年",previousYear:"上一年",nextDecade:"下一个十年",previousDecade:"前十年"},datepicker:{today:"今天",placeholder:"选择日期",day:"日",month:"月",year:"年",hour:"小时",minute:"分钟",second:"第二",meridiem:"调幅"},formValidator:{required:"此字段为必填字段。",email:"请输入有效的电子邮件地址。",url:"请输入有效的网址。",date:"请输入有效日期。",dateIso:"请输入有效日期 (ISO)。",creditCard:"请输入有效的卡号。",number:"请输入有效的号码。",digits:"请仅输入数字。",maxLength:"请输入不超过 {0} 个字符。",minLength:"请输入至少 {0} 个字符。",rangeLength:"请输入长度介于 {0} 到 {1} 个字符之间的值。",range:"请输入一个介于 {0} 和 {1} 之间的值。",max:"请输入一个小于或等于 {0} 的值。",min:"请输入一个大于或等于 {0} 的值。",regex:"请输入正确的值。",tel:"请输入有效的电话号码。",equalTo:"请再次输入相同的值。"},numericTextbox:{increment:"增量值",decrement:"递减值",clear:"清除"},textarea:{clear:"清除"},textbox:{clear:"清除"},timepicker:{placeholder:"选择时间",day:"日",month:"月",year:"年",hour:"小时",minute:"分钟",second:"第二",meridiem:"调幅"},scheduler:{addTitle:"添加标题",save:"保存",edit:"编辑",delete:"删除",moreDetails:"更多详情",close:"关闭",newEvent:"新活动",today:"今天",allDay:"全天",to:"到",recurringEvent:"重复事件",day:"日",week:"周",workweek:"工作周",month:"月份",agenda:"议程",timelineday:"时间表日",timelineweek:"时间表周",timelineworkweek:"时间表 工作周",timelinemonth:"时间表月",more:"更多",expandAllDaySection:"展开全天部分",collapseAllDaySection:"折叠全天部分",allDayEventsScrollable:"全天活动，可滚动",deleteEvent:"删除事件",confirmDeleteMessage:"您确定要删除此活动吗？",cancel:"取消",title:"标题",location:"地点",description:"描述",startDate:"开始日期",endDate:"结束日期",startTime:"开始时间",endTime:"结束时间",eventOverlap:"事件重叠",overlapAlert:"无法在所选时间安排活动，因为它与其他活动重叠。",blockAlert:"无法在封锁的时间范围内安排活动。",ok:"好的",alert:"警报",invalidDateValue:"输入的日期值无效。",invalidTimeValue:"输入的时间值无效。",invalidDateRange:"选定的结束日期早于开始日期。",repeat:"重复",never:"从来没有",daily:"每日",weekly:"每周",monthly:"每月",yearly:"每年",custom:"定制",timezone:"时区",startTimezone:"开始时区",endTimezone:"结束时区",searchTimezone:"搜索时区",customRecurrence:"自定义重复",seriesChangeAlert:"您想取消对该系列的特定实例所做的更改并再次将其与整个系列匹配吗？",createError:"事件的持续时间必须短于其发生的频率。缩短持续时间，或在重复事件编辑器中更改重复模式。",sameDayAlert:"同一事件不能在同一天发生两次。",occurenceAlert:"如果重复约会跳过了稍后发生的同一约会，则无法重新安排该重复约会的发生。",editEventContent:"您想如何更改该系列中的约会？",editEvent:"编辑活动",editThisEvent:"编辑事件",editEntireSeries:"全系列",yes:"是的",no:"否",followingEvents:"后续活动",eventsFor:"活动为",noEvents:"没有活动",openResourceList:"打开资源列表",closeResourceList:"关闭资源列表",resources:"资源"},dropdownList:{noRecordsMessage:"没有找到记录",errorMessage:"请求失败"},comboBox:{noRecordsMessage:"没有找到记录",errorMessage:"请求失败"},autoComplete:{noRecordsMessage:"没有找到记录",errorMessage:"请求失败"},recurrenceEditor:{day:"日",week:"周",month:"月份",year:"年份",repeat:"重复",repeatEvery:"重复每个",repeatedMode:"模式",end:"结束",repeatOn:"重复",repeatMode:"重复模式",first:"第一",second:"第二",third:"第三",fourth:"第四",last:"最后",never:"从来没有",until:"直到",count:"计数",every:"每个",days:"天数",weeks:"周数",months:"几个月",years:"年",summaryDay:"天",summaryWeek:"周",summaryMonth:"月",summaryYear:"年",summaryOn:"上",summaryUntil:"直到",summaryTimes:"时间",intervalAriaLabel:"重复次数",frequencyAriaLabel:"选择重复频率",byMonthAriaLabel:"选择一年中的月份",byMonthDayAriaLabel:"在每月的某一天重复",byDayAriaLabel:"在该月的特定工作日重复",bySetPositionAriaLabel:"选择月份中的周位置",endTypeAriaLabel:"选择重复结束类型",countAriaLabel:"出现次数",untilAriaLabel:"选择重复截止日期"},datetimepicker:{date:"日期",time:"时间",cancel:"取消",set:"套装",now:"现在",today:"今天",toggleDateTime:"切换日期时间选择器",clearValue:"清晰的价值",previous:"上一页",next:"下一步",day:"日",month:"月",year:"年",hour:"小时",minute:"分钟",second:"第二",meridiem:"调幅"},multiSelect:{noRecordsMessage:"没有找到记录",errorMessage:"请求失败"},daterangepicker:{startDate:"开始日期",endDate:"结束日期",selectedDays:"选定日期",customRange:"定制范围",apply:"申请",cancel:"取消",day:"日",month:"月",year:"年",hour:"小时",minute:"分钟",second:"第二",meridiem:"调幅"},toast:{close:"关闭"},uploader:{browse:"浏览",dragDropText:"或者将文件拖放到此处",upload:"上传",clear:"清除",invalidFileType:"不允许使用文件类型“{0}”",fileSizeExceeded:"文件大小 {0} 超过最大值 {1}",minFileSizeNotMet:"文件大小 {0} 低于最小值 {1}",duplicateFile:"文件“{0}”已存在",maxFilesExceeded:"无法添加 {0} 个文件。最多允许 {1} 个文件。",maxTotalSizeExceeded:"添加此文件将超出 {0} 的总大小限制",uploadSuccess:"文件上传成功",uploadFailed:"上传失败",uploading:"正在上传...",paused:"已暂停",canceled:"取消",readyToUpload:"准备上传",networkError:"发生网络错误",uploadTimeout:"上传超时",uploadAborted:"上传被中止"},fileUpload:{browse:"浏览",dragDropText:"或者将文件拖放到此处",upload:"上传",clear:"清除",invalidFileType:"不允许使用文件类型“{0}”",fileSizeExceeded:"文件大小 {0} 超过最大值 {1}",minFileSizeNotMet:"文件大小 {0} 低于最小值 {1}",duplicateFile:"文件“{0}”已存在",maxFilesExceeded:"无法添加 {0} 个文件。最多允许 {1} 个文件。",maxTotalSizeExceeded:"添加此文件将超出 {0} 的总大小限制",uploadSuccess:"文件上传成功",uploadFailed:"上传失败",uploading:"正在上传...",paused:"已暂停",canceled:"取消",readyToUpload:"准备上传",networkError:"发生网络错误",uploadTimeout:"上传超时",uploadAborted:"上传被中止",abort:"中止",pause:"暂停",resume:"简历",retry:"重试",remove:"删除文件",delete:"删除文件"},gridChart:{},queryBuilder:{selectField:"选择字段...",selectOperator:"选择运营商...",selectValue:"选择值...",selectMultipleValues:"选择值...",enterValue:"输入值",enterNumber:"输入号码",selectDate:"选择日期",datetimeFormat:"YYYY-MM-DDTHH:mm:ss",start:"开始",end:"结束",betweenStartValue:"起始值之间",betweenEndValue:"终值之间",betweenStartDate:"开始日期之间",betweenEndDate:"结束日期之间",booleanValue:"布尔值",numericValue:"数值",dateValue:"日期值",datetimeValue:"日期时间值",value:"价值",addCondition:"添加条件",addGroup:"添加组",ruleGroup:"深度规则组",groupCondition:"团体条件",enableNot:"启用非",disableNot:"禁用非",matchAll:"全部匹配 (AND)",matchAny:"匹配任何（或）",cloneRule:"克隆规则",lockRule:"锁定规则",unlockRule:"解锁规则",deleteRule:"删除规则",cloneGroup:"克隆组",lockGroup:"锁组",unlockGroup:"解锁群组",deleteGroup:"删除组",dragHandle:"拖动以重新排序",unselectedField:"未选择的字段",ruleFor:"规则为"}},du={zh:fl},uu=Object.freeze(Object.defineProperty({__proto__:null,default:du,zh:fl},Symbol.toStringTag,{value:"Module"})),Ml=JSON.parse(`{"en":{"numbers":{"defaultNumberingSystem":"latn","otherNumberingSystems":{"native":"latn"},"minimumGroupingDigits":"1","symbols-numberSystem-latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-one":"0 thousand","1000-count-other":"0 thousand","10000-count-one":"00 thousand","10000-count-other":"00 thousand","100000-count-one":"000 thousand","100000-count-other":"000 thousand","1000000-count-one":"0 million","1000000-count-other":"0 million","10000000-count-one":"00 million","10000000-count-other":"00 million","100000000-count-one":"000 million","100000000-count-other":"000 million","1000000000-count-one":"0 billion","1000000000-count-other":"0 billion","10000000000-count-one":"00 billion","10000000000-count-other":"00 billion","100000000000-count-one":"000 billion","100000000000-count-other":"000 billion","1000000000000-count-one":"0 trillion","1000000000000-count-other":"0 trillion","10000000000000-count-one":"00 trillion","10000000000000-count-other":"00 trillion","100000000000000-count-one":"000 trillion","100000000000000-count-other":"000 trillion"}},"short":{"decimalFormat":{"1000-count-one":"0K","1000-count-other":"0K","10000-count-one":"00K","10000-count-other":"00K","100000-count-one":"000K","100000-count-other":"000K","1000000-count-one":"0M","1000000-count-other":"0M","10000000-count-one":"00M","10000000-count-other":"00M","100000000-count-one":"000M","100000000-count-other":"000M","1000000000-count-one":"0B","1000000000-count-other":"0B","10000000000-count-one":"00B","10000000000-count-other":"00B","100000000000-count-one":"000B","100000000000-count-other":"000B","1000000000000-count-one":"0T","1000000000000-count-other":"0T","10000000000000-count-one":"00T","10000000000000-count-other":"00T","100000000000000-count-one":"000T","100000000000000-count-other":"000T"}}},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-latn":{"standard":"#,##0%"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"¤#,##0.00","standard-alphaNextToNumber":"¤ #,##0.00","standard-noCurrency":"#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","accounting-alphaNextToNumber":"¤ #,##0.00;(¤ #,##0.00)","accounting-noCurrency":"#,##0.00;(#,##0.00)","short":{"standard":{"1000-count-one":"¤0K","1000-count-one-alt-alphaNextToNumber":"¤ 0K","1000-count-other":"¤0K","1000-count-other-alt-alphaNextToNumber":"¤ 0K","10000-count-one":"¤00K","10000-count-one-alt-alphaNextToNumber":"¤ 00K","10000-count-other":"¤00K","10000-count-other-alt-alphaNextToNumber":"¤ 00K","100000-count-one":"¤000K","100000-count-one-alt-alphaNextToNumber":"¤ 000K","100000-count-other":"¤000K","100000-count-other-alt-alphaNextToNumber":"¤ 000K","1000000-count-one":"¤0M","1000000-count-one-alt-alphaNextToNumber":"¤ 0M","1000000-count-other":"¤0M","1000000-count-other-alt-alphaNextToNumber":"¤ 0M","10000000-count-one":"¤00M","10000000-count-one-alt-alphaNextToNumber":"¤ 00M","10000000-count-other":"¤00M","10000000-count-other-alt-alphaNextToNumber":"¤ 00M","100000000-count-one":"¤000M","100000000-count-one-alt-alphaNextToNumber":"¤ 000M","100000000-count-other":"¤000M","100000000-count-other-alt-alphaNextToNumber":"¤ 000M","1000000000-count-one":"¤0B","1000000000-count-one-alt-alphaNextToNumber":"¤ 0B","1000000000-count-other":"¤0B","1000000000-count-other-alt-alphaNextToNumber":"¤ 0B","10000000000-count-one":"¤00B","10000000000-count-one-alt-alphaNextToNumber":"¤ 00B","10000000000-count-other":"¤00B","10000000000-count-other-alt-alphaNextToNumber":"¤ 00B","100000000000-count-one":"¤000B","100000000000-count-one-alt-alphaNextToNumber":"¤ 000B","100000000000-count-other":"¤000B","100000000000-count-other-alt-alphaNextToNumber":"¤ 000B","1000000000000-count-one":"¤0T","1000000000000-count-one-alt-alphaNextToNumber":"¤ 0T","1000000000000-count-other":"¤0T","1000000000000-count-other-alt-alphaNextToNumber":"¤ 0T","10000000000000-count-one":"¤00T","10000000000000-count-one-alt-alphaNextToNumber":"¤ 00T","10000000000000-count-other":"¤00T","10000000000000-count-other-alt-alphaNextToNumber":"¤ 00T","100000000000000-count-one":"¤000T","100000000000000-count-one-alt-alphaNextToNumber":"¤ 000T","100000000000000-count-other":"¤000T","100000000000000-count-other-alt-alphaNextToNumber":"¤ 000T"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"miscPatterns-numberSystem-latn":{"approximately":"~{0}","atLeast":"{0}+","atMost":"≤{0}","range":"{0}–{1}"},"minimalPairs":{"pluralMinimalPairs-count-one":"{0} day","pluralMinimalPairs-count-other":"{0} days","few":"Take the {0}rd right.","one":"Take the {0}st right.","other":"Take the {0}th right.","two":"Take the {0}nd right."},"currencies":{"ADP":{"displayName":"Andorran Peseta","displayName-count-one":"Andorran peseta","displayName-count-other":"Andorran pesetas"},"AED":{"displayName":"United Arab Emirates Dirham","displayName-count-one":"UAE dirham","displayName-count-other":"UAE dirhams"},"AFA":{"displayName":"Afghan Afghani (1927–2002)","displayName-count-one":"Afghan afghani (1927–2002)","displayName-count-other":"Afghan afghanis (1927–2002)"},"AFN":{"displayName":"Afghan Afghani","displayName-count-one":"Afghan Afghani","displayName-count-other":"Afghan Afghanis","symbol-alt-narrow":"؋"},"ALK":{"displayName":"Albanian Lek (1946–1965)","displayName-count-one":"Albanian lek (1946–1965)","displayName-count-other":"Albanian lekë (1946–1965)"},"ALL":{"displayName":"Albanian Lek","displayName-count-one":"Albanian lek","displayName-count-other":"Albanian lekë"},"AMD":{"displayName":"Armenian Dram","displayName-count-one":"Armenian dram","displayName-count-other":"Armenian drams","symbol-alt-narrow":"֏"},"ANG":{"displayName":"Netherlands Antillean Guilder","displayName-count-one":"Netherlands Antillean guilder","displayName-count-other":"Netherlands Antillean guilders"},"AOA":{"displayName":"Angolan Kwanza","displayName-count-one":"Angolan kwanza","displayName-count-other":"Angolan kwanzas","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"Angolan Kwanza (1977–1991)","displayName-count-one":"Angolan kwanza (1977–1991)","displayName-count-other":"Angolan kwanzas (1977–1991)"},"AON":{"displayName":"Angolan New Kwanza (1990–2000)","displayName-count-one":"Angolan new kwanza (1990–2000)","displayName-count-other":"Angolan new kwanzas (1990–2000)"},"AOR":{"displayName":"Angolan Readjusted Kwanza (1995–1999)","displayName-count-one":"Angolan readjusted kwanza (1995–1999)","displayName-count-other":"Angolan readjusted kwanzas (1995–1999)"},"ARA":{"displayName":"Argentine Austral","displayName-count-one":"Argentine austral","displayName-count-other":"Argentine australs"},"ARL":{"displayName":"Argentine Peso Ley (1970–1983)","displayName-count-one":"Argentine peso ley (1970–1983)","displayName-count-other":"Argentine pesos ley (1970–1983)"},"ARM":{"displayName":"Argentine Peso (1881–1970)","displayName-count-one":"Argentine peso (1881–1970)","displayName-count-other":"Argentine pesos (1881–1970)"},"ARP":{"displayName":"Argentine Peso (1983–1985)","displayName-count-one":"Argentine peso (1983–1985)","displayName-count-other":"Argentine pesos (1983–1985)"},"ARS":{"displayName":"Argentine Peso","displayName-count-one":"Argentine peso","displayName-count-other":"Argentine pesos","symbol-alt-narrow":"$"},"ATS":{"displayName":"Austrian Schilling","displayName-count-one":"Austrian schilling","displayName-count-other":"Austrian schillings"},"AUD":{"displayName":"Australian Dollar","displayName-count-one":"Australian dollar","displayName-count-other":"Australian dollars","symbol":"A$","symbol-alt-narrow":"$"},"AWG":{"displayName":"Aruban Florin","displayName-count-one":"Aruban florin","displayName-count-other":"Aruban florin"},"AZM":{"displayName":"Azerbaijani Manat (1993–2006)","displayName-count-one":"Azerbaijani manat (1993–2006)","displayName-count-other":"Azerbaijani manats (1993–2006)"},"AZN":{"displayName":"Azerbaijani Manat","displayName-count-one":"Azerbaijani manat","displayName-count-other":"Azerbaijani manats","symbol-alt-narrow":"₼"},"BAD":{"displayName":"Bosnia-Herzegovina Dinar (1992–1994)","displayName-count-one":"Bosnia-Herzegovina dinar (1992–1994)","displayName-count-other":"Bosnia-Herzegovina dinars (1992–1994)"},"BAM":{"displayName":"Bosnia-Herzegovina Convertible Mark","displayName-count-one":"Bosnia-Herzegovina convertible mark","displayName-count-other":"Bosnia-Herzegovina convertible marks","symbol-alt-narrow":"KM"},"BAN":{"displayName":"Bosnia-Herzegovina New Dinar (1994–1997)","displayName-count-one":"Bosnia-Herzegovina new dinar (1994–1997)","displayName-count-other":"Bosnia-Herzegovina new dinars (1994–1997)"},"BBD":{"displayName":"Barbadian Dollar","displayName-count-one":"Barbadian dollar","displayName-count-other":"Barbadian dollars","symbol-alt-narrow":"$"},"BDT":{"displayName":"Bangladeshi Taka","displayName-count-one":"Bangladeshi taka","displayName-count-other":"Bangladeshi takas","symbol-alt-narrow":"৳"},"BEC":{"displayName":"Belgian Franc (convertible)","displayName-count-one":"Belgian franc (convertible)","displayName-count-other":"Belgian francs (convertible)"},"BEF":{"displayName":"Belgian Franc","displayName-count-one":"Belgian franc","displayName-count-other":"Belgian francs"},"BEL":{"displayName":"Belgian Franc (financial)","displayName-count-one":"Belgian franc (financial)","displayName-count-other":"Belgian francs (financial)"},"BGL":{"displayName":"Bulgarian Hard Lev","displayName-count-one":"Bulgarian hard lev","displayName-count-other":"Bulgarian hard leva"},"BGM":{"displayName":"Bulgarian Socialist Lev","displayName-count-one":"Bulgarian socialist lev","displayName-count-other":"Bulgarian socialist leva"},"BGN":{"displayName":"Bulgarian Lev","displayName-count-one":"Bulgarian lev","displayName-count-other":"Bulgarian leva"},"BGO":{"displayName":"Bulgarian Lev (1879–1952)","displayName-count-one":"Bulgarian lev (1879–1952)","displayName-count-other":"Bulgarian leva (1879–1952)"},"BHD":{"displayName":"Bahraini Dinar","displayName-count-one":"Bahraini dinar","displayName-count-other":"Bahraini dinars"},"BIF":{"displayName":"Burundian Franc","displayName-count-one":"Burundian franc","displayName-count-other":"Burundian francs"},"BMD":{"displayName":"Bermudan Dollar","displayName-count-one":"Bermudan dollar","displayName-count-other":"Bermudan dollars","symbol-alt-narrow":"$"},"BND":{"displayName":"Brunei Dollar","displayName-count-one":"Brunei dollar","displayName-count-other":"Brunei dollars","symbol-alt-narrow":"$"},"BOB":{"displayName":"Bolivian Boliviano","displayName-count-one":"Bolivian boliviano","displayName-count-other":"Bolivian bolivianos","symbol-alt-narrow":"Bs"},"BOL":{"displayName":"Bolivian Boliviano (1863–1963)","displayName-count-one":"Bolivian boliviano (1863–1963)","displayName-count-other":"Bolivian bolivianos (1863–1963)"},"BOP":{"displayName":"Bolivian Peso","displayName-count-one":"Bolivian peso","displayName-count-other":"Bolivian pesos"},"BOV":{"displayName":"Bolivian Mvdol","displayName-count-one":"Bolivian mvdol","displayName-count-other":"Bolivian mvdols"},"BRB":{"displayName":"Brazilian New Cruzeiro (1967–1986)","displayName-count-one":"Brazilian new cruzeiro (1967–1986)","displayName-count-other":"Brazilian new cruzeiros (1967–1986)"},"BRC":{"displayName":"Brazilian Cruzado (1986–1989)","displayName-count-one":"Brazilian cruzado (1986–1989)","displayName-count-other":"Brazilian cruzados (1986–1989)"},"BRE":{"displayName":"Brazilian Cruzeiro (1990–1993)","displayName-count-one":"Brazilian cruzeiro (1990–1993)","displayName-count-other":"Brazilian cruzeiros (1990–1993)"},"BRL":{"displayName":"Brazilian Real","displayName-count-one":"Brazilian real","displayName-count-other":"Brazilian reals","symbol":"R$","symbol-alt-narrow":"R$"},"BRN":{"displayName":"Brazilian New Cruzado (1989–1990)","displayName-count-one":"Brazilian new cruzado (1989–1990)","displayName-count-other":"Brazilian new cruzados (1989–1990)"},"BRR":{"displayName":"Brazilian Cruzeiro (1993–1994)","displayName-count-one":"Brazilian cruzeiro (1993–1994)","displayName-count-other":"Brazilian cruzeiros (1993–1994)"},"BRZ":{"displayName":"Brazilian Cruzeiro (1942–1967)","displayName-count-one":"Brazilian cruzeiro (1942–1967)","displayName-count-other":"Brazilian cruzeiros (1942–1967)"},"BSD":{"displayName":"Bahamian Dollar","displayName-count-one":"Bahamian dollar","displayName-count-other":"Bahamian dollars","symbol-alt-narrow":"$"},"BTN":{"displayName":"Bhutanese Ngultrum","displayName-count-one":"Bhutanese ngultrum","displayName-count-other":"Bhutanese ngultrums"},"BUK":{"displayName":"Burmese Kyat","displayName-count-one":"Burmese kyat","displayName-count-other":"Burmese kyats"},"BWP":{"displayName":"Botswanan Pula","displayName-count-one":"Botswanan pula","displayName-count-other":"Botswanan pulas","symbol-alt-narrow":"P"},"BYB":{"displayName":"Belarusian Ruble (1994–1999)","displayName-count-one":"Belarusian ruble (1994–1999)","displayName-count-other":"Belarusian rubles (1994–1999)"},"BYN":{"displayName":"Belarusian Ruble","displayName-count-one":"Belarusian ruble","displayName-count-other":"Belarusian rubles"},"BYR":{"displayName":"Belarusian Ruble (2000–2016)","displayName-count-one":"Belarusian ruble (2000–2016)","displayName-count-other":"Belarusian rubles (2000–2016)"},"BZD":{"displayName":"Belize Dollar","displayName-count-one":"Belize dollar","displayName-count-other":"Belize dollars","symbol-alt-narrow":"$"},"CAD":{"displayName":"Canadian Dollar","displayName-count-one":"Canadian dollar","displayName-count-other":"Canadian dollars","symbol":"CA$","symbol-alt-narrow":"$"},"CDF":{"displayName":"Congolese Franc","displayName-count-one":"Congolese franc","displayName-count-other":"Congolese francs"},"CHE":{"displayName":"WIR Euro","displayName-count-one":"WIR euro","displayName-count-other":"WIR euros"},"CHF":{"displayName":"Swiss Franc","displayName-count-one":"Swiss franc","displayName-count-other":"Swiss francs"},"CHW":{"displayName":"WIR Franc","displayName-count-one":"WIR franc","displayName-count-other":"WIR francs"},"CLE":{"displayName":"Chilean Escudo","displayName-count-one":"Chilean escudo","displayName-count-other":"Chilean escudos"},"CLF":{"displayName":"Chilean Unit of Account (UF)","displayName-count-one":"Chilean unit of account (UF)","displayName-count-other":"Chilean units of account (UF)"},"CLP":{"displayName":"Chilean Peso","displayName-count-one":"Chilean peso","displayName-count-other":"Chilean pesos","symbol-alt-narrow":"$"},"CNH":{"displayName":"Chinese Yuan (offshore)","displayName-count-one":"Chinese yuan (offshore)","displayName-count-other":"Chinese yuan (offshore)"},"CNX":{"displayName":"Chinese People’s Bank Dollar","displayName-count-one":"Chinese People’s Bank dollar","displayName-count-other":"Chinese People’s Bank dollars"},"CNY":{"displayName":"Chinese Yuan","displayName-count-one":"Chinese yuan","displayName-count-other":"Chinese yuan","symbol":"CN¥","symbol-alt-narrow":"¥"},"COP":{"displayName":"Colombian Peso","displayName-count-one":"Colombian peso","displayName-count-other":"Colombian pesos","symbol-alt-narrow":"$"},"COU":{"displayName":"Colombian Real Value Unit","displayName-count-one":"Colombian real value unit","displayName-count-other":"Colombian real value units"},"CRC":{"displayName":"Costa Rican Colón","displayName-count-one":"Costa Rican colón","displayName-count-other":"Costa Rican colóns","symbol-alt-narrow":"₡"},"CSD":{"displayName":"Serbian Dinar (2002–2006)","displayName-count-one":"Serbian dinar (2002–2006)","displayName-count-other":"Serbian dinars (2002–2006)"},"CSK":{"displayName":"Czechoslovak Hard Koruna","displayName-count-one":"Czechoslovak hard koruna","displayName-count-other":"Czechoslovak hard korunas"},"CUC":{"displayName":"Cuban Convertible Peso","displayName-count-one":"Cuban convertible peso","displayName-count-other":"Cuban convertible pesos","symbol-alt-narrow":"$"},"CUP":{"displayName":"Cuban Peso","displayName-count-one":"Cuban peso","displayName-count-other":"Cuban pesos","symbol-alt-narrow":"$"},"CVE":{"displayName":"Cape Verdean Escudo","displayName-count-one":"Cape Verdean escudo","displayName-count-other":"Cape Verdean escudos"},"CYP":{"displayName":"Cypriot Pound","displayName-count-one":"Cypriot pound","displayName-count-other":"Cypriot pounds"},"CZK":{"displayName":"Czech Koruna","displayName-count-one":"Czech koruna","displayName-count-other":"Czech korunas","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"East German Mark","displayName-count-one":"East German mark","displayName-count-other":"East German marks"},"DEM":{"displayName":"German Mark","displayName-count-one":"German mark","displayName-count-other":"German marks"},"DJF":{"displayName":"Djiboutian Franc","displayName-count-one":"Djiboutian franc","displayName-count-other":"Djiboutian francs"},"DKK":{"displayName":"Danish Krone","displayName-count-one":"Danish krone","displayName-count-other":"Danish kroner","symbol-alt-narrow":"kr"},"DOP":{"displayName":"Dominican Peso","displayName-count-one":"Dominican peso","displayName-count-other":"Dominican pesos","symbol-alt-narrow":"$"},"DZD":{"displayName":"Algerian Dinar","displayName-count-one":"Algerian dinar","displayName-count-other":"Algerian dinars"},"ECS":{"displayName":"Ecuadorian Sucre","displayName-count-one":"Ecuadorian sucre","displayName-count-other":"Ecuadorian sucres"},"ECV":{"displayName":"Ecuadorian Unit of Constant Value","displayName-count-one":"Ecuadorian unit of constant value","displayName-count-other":"Ecuadorian units of constant value"},"EEK":{"displayName":"Estonian Kroon","displayName-count-one":"Estonian kroon","displayName-count-other":"Estonian kroons"},"EGP":{"displayName":"Egyptian Pound","displayName-count-one":"Egyptian pound","displayName-count-other":"Egyptian pounds","symbol-alt-narrow":"E£"},"ERN":{"displayName":"Eritrean Nakfa","displayName-count-one":"Eritrean nakfa","displayName-count-other":"Eritrean nakfas"},"ESA":{"displayName":"Spanish Peseta (A account)","displayName-count-one":"Spanish peseta (A account)","displayName-count-other":"Spanish pesetas (A account)"},"ESB":{"displayName":"Spanish Peseta (convertible account)","displayName-count-one":"Spanish peseta (convertible account)","displayName-count-other":"Spanish pesetas (convertible account)"},"ESP":{"displayName":"Spanish Peseta","displayName-count-one":"Spanish peseta","displayName-count-other":"Spanish pesetas","symbol-alt-narrow":"₧"},"ETB":{"displayName":"Ethiopian Birr","displayName-count-one":"Ethiopian birr","displayName-count-other":"Ethiopian birrs"},"EUR":{"displayName":"Euro","displayName-count-one":"euro","displayName-count-other":"euros","symbol":"€","symbol-alt-narrow":"€"},"FIM":{"displayName":"Finnish Markka","displayName-count-one":"Finnish markka","displayName-count-other":"Finnish markkas"},"FJD":{"displayName":"Fijian Dollar","displayName-count-one":"Fijian dollar","displayName-count-other":"Fijian dollars","symbol-alt-narrow":"$"},"FKP":{"displayName":"Falkland Islands Pound","displayName-count-one":"Falkland Islands pound","displayName-count-other":"Falkland Islands pounds","symbol-alt-narrow":"£"},"FRF":{"displayName":"French Franc","displayName-count-one":"French franc","displayName-count-other":"French francs"},"GBP":{"displayName":"British Pound","displayName-count-one":"British pound","displayName-count-other":"British pounds","symbol":"£","symbol-alt-narrow":"£"},"GEK":{"displayName":"Georgian Kupon Larit","displayName-count-one":"Georgian kupon larit","displayName-count-other":"Georgian kupon larits"},"GEL":{"displayName":"Georgian Lari","displayName-count-one":"Georgian lari","displayName-count-other":"Georgian laris","symbol-alt-narrow":"₾"},"GHC":{"displayName":"Ghanaian Cedi (1979–2007)","displayName-count-one":"Ghanaian cedi (1979–2007)","displayName-count-other":"Ghanaian cedis (1979–2007)"},"GHS":{"displayName":"Ghanaian Cedi","displayName-count-one":"Ghanaian cedi","displayName-count-other":"Ghanaian cedis","symbol-alt-narrow":"GH₵"},"GIP":{"displayName":"Gibraltar Pound","displayName-count-one":"Gibraltar pound","displayName-count-other":"Gibraltar pounds","symbol-alt-narrow":"£"},"GMD":{"displayName":"Gambian Dalasi","displayName-count-one":"Gambian dalasi","displayName-count-other":"Gambian dalasis"},"GNF":{"displayName":"Guinean Franc","displayName-count-one":"Guinean franc","displayName-count-other":"Guinean francs","symbol-alt-narrow":"FG"},"GNS":{"displayName":"Guinean Syli","displayName-count-one":"Guinean syli","displayName-count-other":"Guinean sylis"},"GQE":{"displayName":"Equatorial Guinean Ekwele","displayName-count-one":"Equatorial Guinean ekwele","displayName-count-other":"Equatorial Guinean ekwele"},"GRD":{"displayName":"Greek Drachma","displayName-count-one":"Greek drachma","displayName-count-other":"Greek drachmas"},"GTQ":{"displayName":"Guatemalan Quetzal","displayName-count-one":"Guatemalan quetzal","displayName-count-other":"Guatemalan quetzals","symbol-alt-narrow":"Q"},"GWE":{"displayName":"Portuguese Guinea Escudo","displayName-count-one":"Portuguese Guinea escudo","displayName-count-other":"Portuguese Guinea escudos"},"GWP":{"displayName":"Guinea-Bissau Peso","displayName-count-one":"Guinea-Bissau peso","displayName-count-other":"Guinea-Bissau pesos"},"GYD":{"displayName":"Guyanaese Dollar","displayName-count-one":"Guyanaese dollar","displayName-count-other":"Guyanaese dollars","symbol-alt-narrow":"$"},"HKD":{"displayName":"Hong Kong Dollar","displayName-count-one":"Hong Kong dollar","displayName-count-other":"Hong Kong dollars","symbol":"HK$","symbol-alt-narrow":"$"},"HNL":{"displayName":"Honduran Lempira","displayName-count-one":"Honduran lempira","displayName-count-other":"Honduran lempiras","symbol-alt-narrow":"L"},"HRD":{"displayName":"Croatian Dinar","displayName-count-one":"Croatian dinar","displayName-count-other":"Croatian dinars"},"HRK":{"displayName":"Croatian Kuna","displayName-count-one":"Croatian kuna","displayName-count-other":"Croatian kunas","symbol-alt-narrow":"kn"},"HTG":{"displayName":"Haitian Gourde","displayName-count-one":"Haitian gourde","displayName-count-other":"Haitian gourdes"},"HUF":{"displayName":"Hungarian Forint","displayName-count-one":"Hungarian forint","displayName-count-other":"Hungarian forints","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"Indonesian Rupiah","displayName-count-one":"Indonesian rupiah","displayName-count-other":"Indonesian rupiahs","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"Irish Pound","displayName-count-one":"Irish pound","displayName-count-other":"Irish pounds"},"ILP":{"displayName":"Israeli Pound","displayName-count-one":"Israeli pound","displayName-count-other":"Israeli pounds"},"ILR":{"displayName":"Israeli Shekel (1980–1985)","displayName-count-one":"Israeli shekel (1980–1985)","displayName-count-other":"Israeli shekels (1980–1985)"},"ILS":{"displayName":"Israeli New Shekel","displayName-count-one":"Israeli new shekel","displayName-count-other":"Israeli new shekels","symbol":"₪","symbol-alt-narrow":"₪"},"INR":{"displayName":"Indian Rupee","displayName-count-one":"Indian rupee","displayName-count-other":"Indian rupees","symbol":"₹","symbol-alt-narrow":"₹"},"IQD":{"displayName":"Iraqi Dinar","displayName-count-one":"Iraqi dinar","displayName-count-other":"Iraqi dinars"},"IRR":{"displayName":"Iranian Rial","displayName-count-one":"Iranian rial","displayName-count-other":"Iranian rials"},"ISJ":{"displayName":"Icelandic Króna (1918–1981)","displayName-count-one":"Icelandic króna (1918–1981)","displayName-count-other":"Icelandic krónur (1918–1981)"},"ISK":{"displayName":"Icelandic Króna","displayName-count-one":"Icelandic króna","displayName-count-other":"Icelandic krónur","symbol-alt-narrow":"kr"},"ITL":{"displayName":"Italian Lira","displayName-count-one":"Italian lira","displayName-count-other":"Italian liras"},"JMD":{"displayName":"Jamaican Dollar","displayName-count-one":"Jamaican dollar","displayName-count-other":"Jamaican dollars","symbol-alt-narrow":"$"},"JOD":{"displayName":"Jordanian Dinar","displayName-count-one":"Jordanian dinar","displayName-count-other":"Jordanian dinars"},"JPY":{"displayName":"Japanese Yen","displayName-count-one":"Japanese yen","displayName-count-other":"Japanese yen","symbol":"¥","symbol-alt-narrow":"¥"},"KES":{"displayName":"Kenyan Shilling","displayName-count-one":"Kenyan shilling","displayName-count-other":"Kenyan shillings"},"KGS":{"displayName":"Kyrgystani Som","displayName-count-one":"Kyrgystani som","displayName-count-other":"Kyrgystani soms","symbol-alt-narrow":"⃀"},"KHR":{"displayName":"Cambodian Riel","displayName-count-one":"Cambodian riel","displayName-count-other":"Cambodian riels","symbol-alt-narrow":"៛"},"KMF":{"displayName":"Comorian Franc","displayName-count-one":"Comorian franc","displayName-count-other":"Comorian francs","symbol-alt-narrow":"CF"},"KPW":{"displayName":"North Korean Won","displayName-count-one":"North Korean won","displayName-count-other":"North Korean won","symbol-alt-narrow":"₩"},"KRH":{"displayName":"South Korean Hwan (1953–1962)","displayName-count-one":"South Korean hwan (1953–1962)","displayName-count-other":"South Korean hwan (1953–1962)"},"KRO":{"displayName":"South Korean Won (1945–1953)","displayName-count-one":"South Korean won (1945–1953)","displayName-count-other":"South Korean won (1945–1953)"},"KRW":{"displayName":"South Korean Won","displayName-count-one":"South Korean won","displayName-count-other":"South Korean won","symbol":"₩","symbol-alt-narrow":"₩"},"KWD":{"displayName":"Kuwaiti Dinar","displayName-count-one":"Kuwaiti dinar","displayName-count-other":"Kuwaiti dinars"},"KYD":{"displayName":"Cayman Islands Dollar","displayName-count-one":"Cayman Islands dollar","displayName-count-other":"Cayman Islands dollars","symbol-alt-narrow":"$"},"KZT":{"displayName":"Kazakhstani Tenge","displayName-count-one":"Kazakhstani tenge","displayName-count-other":"Kazakhstani tenges","symbol-alt-narrow":"₸"},"LAK":{"displayName":"Laotian Kip","displayName-count-one":"Laotian kip","displayName-count-other":"Laotian kips","symbol-alt-narrow":"₭"},"LBP":{"displayName":"Lebanese Pound","displayName-count-one":"Lebanese pound","displayName-count-other":"Lebanese pounds","symbol-alt-narrow":"L£"},"LKR":{"displayName":"Sri Lankan Rupee","displayName-count-one":"Sri Lankan rupee","displayName-count-other":"Sri Lankan rupees","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"Liberian Dollar","displayName-count-one":"Liberian dollar","displayName-count-other":"Liberian dollars","symbol-alt-narrow":"$"},"LSL":{"displayName":"Lesotho Loti","displayName-count-one":"Lesotho loti","displayName-count-other":"Lesotho lotis"},"LTL":{"displayName":"Lithuanian Litas","displayName-count-one":"Lithuanian litas","displayName-count-other":"Lithuanian litai","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"Lithuanian Talonas","displayName-count-one":"Lithuanian talonas","displayName-count-other":"Lithuanian talonases"},"LUC":{"displayName":"Luxembourgian Convertible Franc","displayName-count-one":"Luxembourgian convertible franc","displayName-count-other":"Luxembourgian convertible francs"},"LUF":{"displayName":"Luxembourgian Franc","displayName-count-one":"Luxembourgian franc","displayName-count-other":"Luxembourgian francs"},"LUL":{"displayName":"Luxembourg Financial Franc","displayName-count-one":"Luxembourg financial franc","displayName-count-other":"Luxembourg financial francs"},"LVL":{"displayName":"Latvian Lats","displayName-count-one":"Latvian lats","displayName-count-other":"Latvian lati","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"Latvian Ruble","displayName-count-one":"Latvian ruble","displayName-count-other":"Latvian rubles"},"LYD":{"displayName":"Libyan Dinar","displayName-count-one":"Libyan dinar","displayName-count-other":"Libyan dinars"},"MAD":{"displayName":"Moroccan Dirham","displayName-count-one":"Moroccan dirham","displayName-count-other":"Moroccan dirhams"},"MAF":{"displayName":"Moroccan Franc","displayName-count-one":"Moroccan franc","displayName-count-other":"Moroccan francs"},"MCF":{"displayName":"Monegasque Franc","displayName-count-one":"Monegasque franc","displayName-count-other":"Monegasque francs"},"MDC":{"displayName":"Moldovan Cupon","displayName-count-one":"Moldovan cupon","displayName-count-other":"Moldovan cupon"},"MDL":{"displayName":"Moldovan Leu","displayName-count-one":"Moldovan leu","displayName-count-other":"Moldovan lei"},"MGA":{"displayName":"Malagasy Ariary","displayName-count-one":"Malagasy ariary","displayName-count-other":"Malagasy ariaries","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"Malagasy Franc","displayName-count-one":"Malagasy franc","displayName-count-other":"Malagasy francs"},"MKD":{"displayName":"Macedonian Denar","displayName-count-one":"Macedonian denar","displayName-count-other":"Macedonian denari"},"MKN":{"displayName":"Macedonian Denar (1992–1993)","displayName-count-one":"Macedonian denar (1992–1993)","displayName-count-other":"Macedonian denari (1992–1993)"},"MLF":{"displayName":"Malian Franc","displayName-count-one":"Malian franc","displayName-count-other":"Malian francs"},"MMK":{"displayName":"Myanmar Kyat","displayName-count-one":"Myanmar kyat","displayName-count-other":"Myanmar kyats","symbol-alt-narrow":"K"},"MNT":{"displayName":"Mongolian Tugrik","displayName-count-one":"Mongolian tugrik","displayName-count-other":"Mongolian tugriks","symbol-alt-narrow":"₮"},"MOP":{"displayName":"Macanese Pataca","displayName-count-one":"Macanese pataca","displayName-count-other":"Macanese patacas"},"MRO":{"displayName":"Mauritanian Ouguiya (1973–2017)","displayName-count-one":"Mauritanian ouguiya (1973–2017)","displayName-count-other":"Mauritanian ouguiyas (1973–2017)"},"MRU":{"displayName":"Mauritanian Ouguiya","displayName-count-one":"Mauritanian ouguiya","displayName-count-other":"Mauritanian ouguiyas"},"MTL":{"displayName":"Maltese Lira","displayName-count-one":"Maltese lira","displayName-count-other":"Maltese lira"},"MTP":{"displayName":"Maltese Pound","displayName-count-one":"Maltese pound","displayName-count-other":"Maltese pounds"},"MUR":{"displayName":"Mauritian Rupee","displayName-count-one":"Mauritian rupee","displayName-count-other":"Mauritian rupees","symbol-alt-narrow":"Rs"},"MVP":{"displayName":"Maldivian Rupee (1947–1981)","displayName-count-one":"Maldivian rupee (1947–1981)","displayName-count-other":"Maldivian rupees (1947–1981)"},"MVR":{"displayName":"Maldivian Rufiyaa","displayName-count-one":"Maldivian rufiyaa","displayName-count-other":"Maldivian rufiyaas"},"MWK":{"displayName":"Malawian Kwacha","displayName-count-one":"Malawian kwacha","displayName-count-other":"Malawian kwachas"},"MXN":{"displayName":"Mexican Peso","displayName-count-one":"Mexican peso","displayName-count-other":"Mexican pesos","symbol":"MX$","symbol-alt-narrow":"$"},"MXP":{"displayName":"Mexican Silver Peso (1861–1992)","displayName-count-one":"Mexican silver peso (1861–1992)","displayName-count-other":"Mexican silver pesos (1861–1992)"},"MXV":{"displayName":"Mexican Investment Unit","displayName-count-one":"Mexican investment unit","displayName-count-other":"Mexican investment units"},"MYR":{"displayName":"Malaysian Ringgit","displayName-count-one":"Malaysian ringgit","displayName-count-other":"Malaysian ringgits","symbol-alt-narrow":"RM"},"MZE":{"displayName":"Mozambican Escudo","displayName-count-one":"Mozambican escudo","displayName-count-other":"Mozambican escudos"},"MZM":{"displayName":"Mozambican Metical (1980–2006)","displayName-count-one":"Mozambican metical (1980–2006)","displayName-count-other":"Mozambican meticals (1980–2006)"},"MZN":{"displayName":"Mozambican Metical","displayName-count-one":"Mozambican metical","displayName-count-other":"Mozambican meticals"},"NAD":{"displayName":"Namibian Dollar","displayName-count-one":"Namibian dollar","displayName-count-other":"Namibian dollars","symbol-alt-narrow":"$"},"NGN":{"displayName":"Nigerian Naira","displayName-count-one":"Nigerian naira","displayName-count-other":"Nigerian nairas","symbol-alt-narrow":"₦"},"NIC":{"displayName":"Nicaraguan Córdoba (1988–1991)","displayName-count-one":"Nicaraguan córdoba (1988–1991)","displayName-count-other":"Nicaraguan córdobas (1988–1991)"},"NIO":{"displayName":"Nicaraguan Córdoba","displayName-count-one":"Nicaraguan córdoba","displayName-count-other":"Nicaraguan córdobas","symbol-alt-narrow":"C$"},"NLG":{"displayName":"Dutch Guilder","displayName-count-one":"Dutch guilder","displayName-count-other":"Dutch guilders"},"NOK":{"displayName":"Norwegian Krone","displayName-count-one":"Norwegian krone","displayName-count-other":"Norwegian kroner","symbol-alt-narrow":"kr"},"NPR":{"displayName":"Nepalese Rupee","displayName-count-one":"Nepalese rupee","displayName-count-other":"Nepalese rupees","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"New Zealand Dollar","displayName-count-one":"New Zealand dollar","displayName-count-other":"New Zealand dollars","symbol":"NZ$","symbol-alt-narrow":"$"},"OMR":{"displayName":"Omani Rial","displayName-count-one":"Omani rial","displayName-count-other":"Omani rials"},"PAB":{"displayName":"Panamanian Balboa","displayName-count-one":"Panamanian balboa","displayName-count-other":"Panamanian balboas"},"PEI":{"displayName":"Peruvian Inti","displayName-count-one":"Peruvian inti","displayName-count-other":"Peruvian intis"},"PEN":{"displayName":"Peruvian Sol","displayName-count-one":"Peruvian sol","displayName-count-other":"Peruvian soles"},"PES":{"displayName":"Peruvian Sol (1863–1965)","displayName-count-one":"Peruvian sol (1863–1965)","displayName-count-other":"Peruvian soles (1863–1965)"},"PGK":{"displayName":"Papua New Guinean Kina","displayName-count-one":"Papua New Guinean kina","displayName-count-other":"Papua New Guinean kina"},"PHP":{"displayName":"Philippine Peso","displayName-count-one":"Philippine peso","displayName-count-other":"Philippine pesos","symbol":"₱","symbol-alt-narrow":"₱"},"PKR":{"displayName":"Pakistani Rupee","displayName-count-one":"Pakistani rupee","displayName-count-other":"Pakistani rupees","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"Polish Zloty","displayName-count-one":"Polish zloty","displayName-count-other":"Polish zlotys","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"Polish Zloty (1950–1995)","displayName-count-one":"Polish zloty (PLZ)","displayName-count-other":"Polish zlotys (PLZ)"},"PTE":{"displayName":"Portuguese Escudo","displayName-count-one":"Portuguese escudo","displayName-count-other":"Portuguese escudos"},"PYG":{"displayName":"Paraguayan Guarani","displayName-count-one":"Paraguayan guarani","displayName-count-other":"Paraguayan guaranis","symbol-alt-narrow":"₲"},"QAR":{"displayName":"Qatari Riyal","displayName-count-one":"Qatari riyal","displayName-count-other":"Qatari riyals"},"RHD":{"displayName":"Rhodesian Dollar","displayName-count-one":"Rhodesian dollar","displayName-count-other":"Rhodesian dollars"},"ROL":{"displayName":"Romanian Leu (1952–2006)","displayName-count-one":"Romanian leu (1952–2006)","displayName-count-other":"Romanian Lei (1952–2006)"},"RON":{"displayName":"Romanian Leu","displayName-count-one":"Romanian leu","displayName-count-other":"Romanian lei","symbol-alt-narrow":"lei"},"RSD":{"displayName":"Serbian Dinar","displayName-count-one":"Serbian dinar","displayName-count-other":"Serbian dinars"},"RUB":{"displayName":"Russian Ruble","displayName-count-one":"Russian ruble","displayName-count-other":"Russian rubles","symbol-alt-narrow":"₽"},"RUR":{"displayName":"Russian Ruble (1991–1998)","displayName-count-one":"Russian ruble (1991–1998)","displayName-count-other":"Russian rubles (1991–1998)"},"RWF":{"displayName":"Rwandan Franc","displayName-count-one":"Rwandan franc","displayName-count-other":"Rwandan francs","symbol-alt-narrow":"RF"},"SAR":{"displayName":"Saudi Riyal","displayName-count-one":"Saudi riyal","displayName-count-other":"Saudi riyals"},"SBD":{"displayName":"Solomon Islands Dollar","displayName-count-one":"Solomon Islands dollar","displayName-count-other":"Solomon Islands dollars","symbol-alt-narrow":"$"},"SCR":{"displayName":"Seychellois Rupee","displayName-count-one":"Seychellois rupee","displayName-count-other":"Seychellois rupees"},"SDD":{"displayName":"Sudanese Dinar (1992–2007)","displayName-count-one":"Sudanese dinar (1992–2007)","displayName-count-other":"Sudanese dinars (1992–2007)"},"SDG":{"displayName":"Sudanese Pound","displayName-count-one":"Sudanese pound","displayName-count-other":"Sudanese pounds"},"SDP":{"displayName":"Sudanese Pound (1957–1998)","displayName-count-one":"Sudanese pound (1957–1998)","displayName-count-other":"Sudanese pounds (1957–1998)"},"SEK":{"displayName":"Swedish Krona","displayName-count-one":"Swedish krona","displayName-count-other":"Swedish kronor","symbol-alt-narrow":"kr"},"SGD":{"displayName":"Singapore Dollar","displayName-count-one":"Singapore dollar","displayName-count-other":"Singapore dollars","symbol-alt-narrow":"$"},"SHP":{"displayName":"St. Helena Pound","displayName-count-one":"St. Helena pound","displayName-count-other":"St. Helena pounds","symbol-alt-narrow":"£"},"SIT":{"displayName":"Slovenian Tolar","displayName-count-one":"Slovenian tolar","displayName-count-other":"Slovenian tolars"},"SKK":{"displayName":"Slovak Koruna","displayName-count-one":"Slovak koruna","displayName-count-other":"Slovak korunas"},"SLE":{"displayName":"Sierra Leonean Leone","displayName-count-one":"Sierra Leonean leone","displayName-count-other":"Sierra Leonean leones"},"SLL":{"displayName":"Sierra Leonean Leone (1964—2022)","displayName-count-one":"Sierra Leonean leone (1964—2022)","displayName-count-other":"Sierra Leonean leones (1964—2022)"},"SOS":{"displayName":"Somali Shilling","displayName-count-one":"Somali shilling","displayName-count-other":"Somali shillings"},"SRD":{"displayName":"Surinamese Dollar","displayName-count-one":"Surinamese dollar","displayName-count-other":"Surinamese dollars","symbol-alt-narrow":"$"},"SRG":{"displayName":"Surinamese Guilder","displayName-count-one":"Surinamese guilder","displayName-count-other":"Surinamese guilders"},"SSP":{"displayName":"South Sudanese Pound","displayName-count-one":"South Sudanese pound","displayName-count-other":"South Sudanese pounds","symbol-alt-narrow":"£"},"STD":{"displayName":"São Tomé & Príncipe Dobra (1977–2017)","displayName-count-one":"São Tomé & Príncipe dobra (1977–2017)","displayName-count-other":"São Tomé & Príncipe dobras (1977–2017)"},"STN":{"displayName":"São Tomé & Príncipe Dobra","displayName-count-one":"São Tomé & Príncipe dobra","displayName-count-other":"São Tomé & Príncipe dobras","symbol-alt-narrow":"Db"},"SUR":{"displayName":"Soviet Rouble","displayName-count-one":"Soviet rouble","displayName-count-other":"Soviet roubles"},"SVC":{"displayName":"Salvadoran Colón","displayName-count-one":"Salvadoran colón","displayName-count-other":"Salvadoran colones"},"SYP":{"displayName":"Syrian Pound","displayName-count-one":"Syrian pound","displayName-count-other":"Syrian pounds","symbol-alt-narrow":"£"},"SZL":{"displayName":"Swazi Lilangeni","displayName-count-one":"Swazi lilangeni","displayName-count-other":"Swazi emalangeni"},"THB":{"displayName":"Thai Baht","displayName-count-one":"Thai baht","displayName-count-other":"Thai baht","symbol-alt-narrow":"฿"},"TJR":{"displayName":"Tajikistani Ruble","displayName-count-one":"Tajikistani ruble","displayName-count-other":"Tajikistani rubles"},"TJS":{"displayName":"Tajikistani Somoni","displayName-count-one":"Tajikistani somoni","displayName-count-other":"Tajikistani somonis"},"TMM":{"displayName":"Turkmenistani Manat (1993–2009)","displayName-count-one":"Turkmenistani manat (1993–2009)","displayName-count-other":"Turkmenistani manat (1993–2009)"},"TMT":{"displayName":"Turkmenistani Manat","displayName-count-one":"Turkmenistani manat","displayName-count-other":"Turkmenistani manat"},"TND":{"displayName":"Tunisian Dinar","displayName-count-one":"Tunisian dinar","displayName-count-other":"Tunisian dinars"},"TOP":{"displayName":"Tongan Paʻanga","displayName-count-one":"Tongan paʻanga","displayName-count-other":"Tongan paʻanga","symbol-alt-narrow":"T$"},"TPE":{"displayName":"Timorese Escudo","displayName-count-one":"Timorese escudo","displayName-count-other":"Timorese escudos"},"TRL":{"displayName":"Turkish Lira (1922–2005)","displayName-count-one":"Turkish lira (1922–2005)","displayName-count-other":"Turkish Lira (1922–2005)"},"TRY":{"displayName":"Turkish Lira","displayName-count-one":"Turkish lira","displayName-count-other":"Turkish Lira","symbol-alt-narrow":"₺","symbol-alt-variant":"TL"},"TTD":{"displayName":"Trinidad & Tobago Dollar","displayName-count-one":"Trinidad & Tobago dollar","displayName-count-other":"Trinidad & Tobago dollars","symbol-alt-narrow":"$"},"TWD":{"displayName":"New Taiwan Dollar","displayName-count-one":"New Taiwan dollar","displayName-count-other":"New Taiwan dollars","symbol":"NT$","symbol-alt-narrow":"$"},"TZS":{"displayName":"Tanzanian Shilling","displayName-count-one":"Tanzanian shilling","displayName-count-other":"Tanzanian shillings"},"UAH":{"displayName":"Ukrainian Hryvnia","displayName-count-one":"Ukrainian hryvnia","displayName-count-other":"Ukrainian hryvnias","symbol-alt-narrow":"₴"},"UAK":{"displayName":"Ukrainian Karbovanets","displayName-count-one":"Ukrainian karbovanets","displayName-count-other":"Ukrainian karbovantsiv"},"UGS":{"displayName":"Ugandan Shilling (1966–1987)","displayName-count-one":"Ugandan shilling (1966–1987)","displayName-count-other":"Ugandan shillings (1966–1987)"},"UGX":{"displayName":"Ugandan Shilling","displayName-count-one":"Ugandan shilling","displayName-count-other":"Ugandan shillings"},"USD":{"displayName":"US Dollar","displayName-count-one":"US dollar","displayName-count-other":"US dollars","symbol":"$","symbol-alt-narrow":"$"},"USN":{"displayName":"US Dollar (Next day)","displayName-count-one":"US dollar (next day)","displayName-count-other":"US dollars (next day)"},"USS":{"displayName":"US Dollar (Same day)","displayName-count-one":"US dollar (same day)","displayName-count-other":"US dollars (same day)"},"UYI":{"displayName":"Uruguayan Peso (Indexed Units)","displayName-count-one":"Uruguayan peso (indexed units)","displayName-count-other":"Uruguayan pesos (indexed units)"},"UYP":{"displayName":"Uruguayan Peso (1975–1993)","displayName-count-one":"Uruguayan peso (1975–1993)","displayName-count-other":"Uruguayan pesos (1975–1993)"},"UYU":{"displayName":"Uruguayan Peso","displayName-count-one":"Uruguayan peso","displayName-count-other":"Uruguayan pesos","symbol-alt-narrow":"$"},"UYW":{"displayName":"Uruguayan Nominal Wage Index Unit","displayName-count-one":"Uruguayan nominal wage index unit","displayName-count-other":"Uruguayan nominal wage index units"},"UZS":{"displayName":"Uzbekistani Som","displayName-count-one":"Uzbekistani som","displayName-count-other":"Uzbekistani som"},"VEB":{"displayName":"Venezuelan Bolívar (1871–2008)","displayName-count-one":"Venezuelan bolívar (1871–2008)","displayName-count-other":"Venezuelan bolívars (1871–2008)"},"VED":{"displayName":"Bolívar Soberano","displayName-count-one":"Bolívar Soberano","displayName-count-other":"Bolívar Soberanos"},"VEF":{"displayName":"Venezuelan Bolívar (2008–2018)","displayName-count-one":"Venezuelan bolívar (2008–2018)","displayName-count-other":"Venezuelan bolívars (2008–2018)","symbol-alt-narrow":"Bs"},"VES":{"displayName":"Venezuelan Bolívar","displayName-count-one":"Venezuelan bolívar","displayName-count-other":"Venezuelan bolívars"},"VND":{"displayName":"Vietnamese Dong","displayName-count-one":"Vietnamese dong","displayName-count-other":"Vietnamese dong","symbol":"₫","symbol-alt-narrow":"₫"},"VNN":{"displayName":"Vietnamese Dong (1978–1985)","displayName-count-one":"Vietnamese dong (1978–1985)","displayName-count-other":"Vietnamese dong (1978–1985)"},"VUV":{"displayName":"Vanuatu Vatu","displayName-count-one":"Vanuatu vatu","displayName-count-other":"Vanuatu vatus"},"WST":{"displayName":"Samoan Tala","displayName-count-one":"Samoan tala","displayName-count-other":"Samoan tala"},"XAF":{"displayName":"Central African CFA Franc","displayName-count-one":"Central African CFA franc","displayName-count-other":"Central African CFA francs","symbol":"FCFA"},"XAG":{"displayName":"Silver","displayName-count-one":"troy ounce of silver","displayName-count-other":"troy ounces of silver"},"XAU":{"displayName":"Gold","displayName-count-one":"troy ounce of gold","displayName-count-other":"troy ounces of gold"},"XBA":{"displayName":"European Composite Unit","displayName-count-one":"European composite unit","displayName-count-other":"European composite units"},"XBB":{"displayName":"European Monetary Unit","displayName-count-one":"European monetary unit","displayName-count-other":"European monetary units"},"XBC":{"displayName":"European Unit of Account (XBC)","displayName-count-one":"European unit of account (XBC)","displayName-count-other":"European units of account (XBC)"},"XBD":{"displayName":"European Unit of Account (XBD)","displayName-count-one":"European unit of account (XBD)","displayName-count-other":"European units of account (XBD)"},"XCD":{"displayName":"East Caribbean Dollar","displayName-count-one":"East Caribbean dollar","displayName-count-other":"East Caribbean dollars","symbol":"EC$","symbol-alt-narrow":"$"},"XCG":{"displayName":"Caribbean guilder","displayName-count-one":"Caribbean guilder","displayName-count-other":"Caribbean guilders","symbol":"Cg."},"XDR":{"displayName":"Special Drawing Rights","displayName-count-one":"special drawing rights","displayName-count-other":"special drawing rights"},"XEU":{"displayName":"European Currency Unit","displayName-count-one":"European currency unit","displayName-count-other":"European currency units"},"XFO":{"displayName":"French Gold Franc","displayName-count-one":"French gold franc","displayName-count-other":"French gold francs"},"XFU":{"displayName":"French UIC-Franc","displayName-count-one":"French UIC-franc","displayName-count-other":"French UIC-francs"},"XOF":{"displayName":"West African CFA Franc","displayName-count-one":"West African CFA franc","displayName-count-other":"West African CFA francs","symbol":"F CFA"},"XPD":{"displayName":"Palladium","displayName-count-one":"troy ounce of palladium","displayName-count-other":"troy ounces of palladium"},"XPF":{"displayName":"CFP Franc","displayName-count-one":"CFP franc","displayName-count-other":"CFP francs","symbol":"CFPF"},"XPT":{"displayName":"Platinum","displayName-count-one":"troy ounce of platinum","displayName-count-other":"troy ounces of platinum"},"XRE":{"displayName":"RINET Funds","displayName-count-one":"RINET Funds unit","displayName-count-other":"RINET Funds units"},"XSU":{"displayName":"Sucre","displayName-count-one":"Sucre","displayName-count-other":"Sucres"},"XTS":{"displayName":"Testing Currency Code","displayName-count-one":"Testing Currency unit","displayName-count-other":"Testing Currency units"},"XUA":{"displayName":"ADB Unit of Account","displayName-count-one":"ADB unit of account","displayName-count-other":"ADB units of account"},"XXX":{"displayName":"Unknown Currency","displayName-count-one":"(unknown unit of currency)","displayName-count-other":"(unknown currency)","symbol":"¤"},"YDD":{"displayName":"Yemeni Dinar","displayName-count-one":"Yemeni dinar","displayName-count-other":"Yemeni dinars"},"YER":{"displayName":"Yemeni Rial","displayName-count-one":"Yemeni rial","displayName-count-other":"Yemeni rials"},"YUD":{"displayName":"Yugoslavian Hard Dinar (1966–1990)","displayName-count-one":"Yugoslavian hard dinar (1966–1990)","displayName-count-other":"Yugoslavian hard dinars (1966–1990)"},"YUM":{"displayName":"Yugoslavian New Dinar (1994–2002)","displayName-count-one":"Yugoslavian new dinar (1994–2002)","displayName-count-other":"Yugoslavian new dinars (1994–2002)"},"YUN":{"displayName":"Yugoslavian Convertible Dinar (1990–1992)","displayName-count-one":"Yugoslavian convertible dinar (1990–1992)","displayName-count-other":"Yugoslavian convertible dinars (1990–1992)"},"YUR":{"displayName":"Yugoslavian Reformed Dinar (1992–1993)","displayName-count-one":"Yugoslavian reformed dinar (1992–1993)","displayName-count-other":"Yugoslavian reformed dinars (1992–1993)"},"ZAL":{"displayName":"South African Rand (financial)","displayName-count-one":"South African rand (financial)","displayName-count-other":"South African rands (financial)"},"ZAR":{"displayName":"South African Rand","displayName-count-one":"South African rand","displayName-count-other":"South African rand","symbol-alt-narrow":"R"},"ZMK":{"displayName":"Zambian Kwacha (1968–2012)","displayName-count-one":"Zambian kwacha (1968–2012)","displayName-count-other":"Zambian kwachas (1968–2012)"},"ZMW":{"displayName":"Zambian Kwacha","displayName-count-one":"Zambian kwacha","displayName-count-other":"Zambian kwachas","symbol-alt-narrow":"ZK"},"ZRN":{"displayName":"Zairean New Zaire (1993–1998)","displayName-count-one":"Zairean new zaire (1993–1998)","displayName-count-other":"Zairean new zaires (1993–1998)"},"ZRZ":{"displayName":"Zairean Zaire (1971–1993)","displayName-count-one":"Zairean zaire (1971–1993)","displayName-count-other":"Zairean zaires (1971–1993)"},"ZWD":{"displayName":"Zimbabwean Dollar (1980–2008)","displayName-count-one":"Zimbabwean dollar (1980–2008)","displayName-count-other":"Zimbabwean dollars (1980–2008)"},"ZWL":{"displayName":"Zimbabwean Dollar (2009)","displayName-count-one":"Zimbabwean dollar (2009)","displayName-count-other":"Zimbabwean dollars (2009)"},"ZWR":{"displayName":"Zimbabwean Dollar (2008)","displayName-count-one":"Zimbabwean dollar (2008)","displayName-count-other":"Zimbabwean dollars (2008)"}}},"dates":{"calendars":{"islamic":{"months":{"format":{"abbreviated":{"1":"Muh.","2":"Saf.","3":"Rab. I","4":"Rab. II","5":"Jum. I","6":"Jum. II","7":"Raj.","8":"Sha.","9":"Ram.","10":"Shaw.","11":"Dhuʻl-Q.","12":"Dhuʻl-H."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"Muharram","2":"Safar","3":"Rabiʻ I","4":"Rabiʻ II","5":"Jumada I","6":"Jumada II","7":"Rajab","8":"Shaʻban","9":"Ramadan","10":"Shawwal","11":"Dhuʻl-Qiʻdah","12":"Dhuʻl-Hijjah"}},"stand-alone":{"abbreviated":{"1":"Muh.","2":"Saf.","3":"Rab. I","4":"Rab. II","5":"Jum. I","6":"Jum. II","7":"Raj.","8":"Sha.","9":"Ram.","10":"Shaw.","11":"Dhuʻl-Q.","12":"Dhuʻl-H."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"Muharram","2":"Safar","3":"Rabiʻ I","4":"Rabiʻ II","5":"Jumada I","6":"Jumada II","7":"Rajab","8":"Shaʻban","9":"Ramadan","10":"Shawwal","11":"Dhuʻl-Qiʻdah","12":"Dhuʻl-Hijjah"}}},"days":{"format":{"abbreviated":{"sun":"Sun","mon":"Mon","tue":"Tue","wed":"Wed","thu":"Thu","fri":"Fri","sat":"Sat"},"narrow":{"sun":"S","mon":"M","tue":"T","wed":"W","thu":"T","fri":"F","sat":"S"},"short":{"sun":"Su","mon":"Mo","tue":"Tu","wed":"We","thu":"Th","fri":"Fr","sat":"Sa"},"wide":{"sun":"Sunday","mon":"Monday","tue":"Tuesday","wed":"Wednesday","thu":"Thursday","fri":"Friday","sat":"Saturday"}},"stand-alone":{"abbreviated":{"sun":"Sun","mon":"Mon","tue":"Tue","wed":"Wed","thu":"Thu","fri":"Fri","sat":"Sat"},"narrow":{"sun":"S","mon":"M","tue":"T","wed":"W","thu":"T","fri":"F","sat":"S"},"short":{"sun":"Su","mon":"Mo","tue":"Tu","wed":"We","thu":"Th","fri":"Fr","sat":"Sa"},"wide":{"sun":"Sunday","mon":"Monday","tue":"Tuesday","wed":"Wednesday","thu":"Thursday","fri":"Friday","sat":"Saturday"}}},"quarters":{"format":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1st quarter","2":"2nd quarter","3":"3rd quarter","4":"4th quarter"}},"stand-alone":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1st quarter","2":"2nd quarter","3":"3rd quarter","4":"4th quarter"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"},"narrow":{"midnight":"mi","am":"a","am-alt-variant":"am","noon":"n","pm":"p","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"},"wide":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"}},"stand-alone":{"abbreviated":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"},"narrow":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"},"wide":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"}}},"eras":{"eraNames":{"0":"AH"},"eraAbbr":{"0":"AH"},"eraNarrow":{"0":"AH"}},"dateFormats":{"full":"EEEE, MMMM d, y G","long":"MMMM d, y G","medium":"MMM d, y G","short":"M/d/y GGGGG"},"dateSkeletons":{"full":"GyMMMMEEEEd","long":"GyMMMMd","medium":"GyMMMd","short":"GGGGGyMd"},"timeFormats":{"full":"h:mm:ss a zzzz","full-alt-ascii":"h:mm:ss a zzzz","long":"h:mm:ss a z","long-alt-ascii":"h:mm:ss a z","medium":"h:mm:ss a","medium-alt-ascii":"h:mm:ss a","short":"h:mm a","short-alt-ascii":"h:mm a"},"timeSkeletons":{"full":"ahmmsszzzz","long":"ahmmssz","medium":"ahmmss","short":"ahmm"},"dateTimeFormats":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1}, {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","Ehm-alt-ascii":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","Ehms-alt-ascii":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"M/d/y GGGGG","GyMMM":"MMM y G","GyMMMd":"MMM d, y G","GyMMMEd":"E, MMM d, y G","h":"h a","h-alt-ascii":"h a","H":"HH","hm":"h:mm a","hm-alt-ascii":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","hms-alt-ascii":"h:mm:ss a","Hms":"HH:mm:ss","M":"L","Md":"M/d","MEd":"E, M/d","MMM":"LLL","MMMd":"MMM d","MMMEd":"E, MMM d","MMMMd":"MMMM d","ms":"mm:ss","y":"y G","yyyy":"y G","yyyyM":"M/y GGGGG","yyyyMd":"M/d/y GGGGG","yyyyMEd":"E, M/d/y GGGGG","yyyyMMM":"MMM y G","yyyyMMMd":"MMM d, y G","yyyyMMMEd":"E, MMM d, y G","yyyyMMMM":"MMMM y G","yyyyQQQ":"QQQ y G","yyyyQQQQ":"QQQQ y G"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{0} {1}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{0} {1}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h – h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm – h:mm B","m":"h:mm – h:mm B"},"d":{"d":"d – d"},"Gy":{"G":"y G – y G","y":"y – y G"},"GyM":{"G":"M/y GGGGG – M/y GGGGG","M":"M/y – M/y GGGGG","y":"M/y – M/y GGGGG"},"GyMd":{"d":"M/d/y – M/d/y GGGGG","G":"M/d/y GGGGG – M/d/y GGGGG","M":"M/d/y – M/d/y GGGGG","y":"M/d/y – M/d/y GGGGG"},"GyMEd":{"d":"E, M/d/y – E, M/d/y GGGGG","G":"E, M/d/y GGGGG – E, M/d/y GGGGG","M":"E, M/d/y – E, M/d/y GGGGG","y":"E, M/d/y – E, M/d/y GGGGG"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"MMM d – d, y G","G":"MMM d, y G – MMM d, y G","M":"MMM d – MMM d, y G","y":"MMM d, y – MMM d, y G"},"GyMMMEd":{"d":"E, MMM d – E, MMM d, y G","G":"E, MMM d, y G – E, MMM d, y G","M":"E, MMM d – E, MMM d, y G","y":"E, MMM d, y – E, MMM d, y G"},"h":{"a":"h a – h a","h":"h – h a"},"H":{"H":"HH – HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"HH:mm – HH:mm","m":"HH:mm – HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm – h:mm a v","m":"h:mm – h:mm a v"},"Hmv":{"H":"HH:mm – HH:mm v","m":"HH:mm – HH:mm v"},"hv":{"a":"h a – h a v","h":"h – h a v"},"Hv":{"H":"HH – HH v"},"M":{"M":"M – M"},"Md":{"d":"M/d – M/d","M":"M/d – M/d"},"MEd":{"d":"E, M/d – E, M/d","M":"E, M/d – E, M/d"},"MMM":{"M":"MMM – MMM"},"MMMd":{"d":"MMM d – d","M":"MMM d – MMM d"},"MMMEd":{"d":"E, MMM d – E, MMM d","M":"E, MMM d – E, MMM d"},"y":{"y":"y – y G"},"yM":{"M":"M/y – M/y GGGGG","y":"M/y – M/y GGGGG"},"yMd":{"d":"M/d/y – M/d/y GGGGG","M":"M/d/y – M/d/y GGGGG","y":"M/d/y – M/d/y GGGGG"},"yMEd":{"d":"E, M/d/y – E, M/d/y GGGGG","M":"E, M/d/y – E, M/d/y GGGGG","y":"E, M/d/y – E, M/d/y GGGGG"},"yMMM":{"M":"MMM – MMM y G","y":"MMM y – MMM y G"},"yMMMd":{"d":"MMM d – d, y G","M":"MMM d – MMM d, y G","y":"MMM d, y – MMM d, y G"},"yMMMEd":{"d":"E, MMM d – E, MMM d, y G","M":"E, MMM d – E, MMM d, y G","y":"E, MMM d, y – E, MMM d, y G"},"yMMMM":{"M":"MMMM – MMMM y G","y":"MMMM y – MMMM y G"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'at' {0}","long":"{1} 'at' {0}","medium":"{1}, {0}","short":"{1}, {0}"}}},"gregorian":{"months":{"format":{"abbreviated":{"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"January","2":"February","3":"March","4":"April","5":"May","6":"June","7":"July","8":"August","9":"September","10":"October","11":"November","12":"December"}},"stand-alone":{"abbreviated":{"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"January","2":"February","3":"March","4":"April","5":"May","6":"June","7":"July","8":"August","9":"September","10":"October","11":"November","12":"December"}}},"days":{"format":{"abbreviated":{"sun":"Sun","mon":"Mon","tue":"Tue","wed":"Wed","thu":"Thu","fri":"Fri","sat":"Sat"},"narrow":{"sun":"S","mon":"M","tue":"T","wed":"W","thu":"T","fri":"F","sat":"S"},"short":{"sun":"Su","mon":"Mo","tue":"Tu","wed":"We","thu":"Th","fri":"Fr","sat":"Sa"},"wide":{"sun":"Sunday","mon":"Monday","tue":"Tuesday","wed":"Wednesday","thu":"Thursday","fri":"Friday","sat":"Saturday"}},"stand-alone":{"abbreviated":{"sun":"Sun","mon":"Mon","tue":"Tue","wed":"Wed","thu":"Thu","fri":"Fri","sat":"Sat"},"narrow":{"sun":"S","mon":"M","tue":"T","wed":"W","thu":"T","fri":"F","sat":"S"},"short":{"sun":"Su","mon":"Mo","tue":"Tu","wed":"We","thu":"Th","fri":"Fr","sat":"Sa"},"wide":{"sun":"Sunday","mon":"Monday","tue":"Tuesday","wed":"Wednesday","thu":"Thursday","fri":"Friday","sat":"Saturday"}}},"quarters":{"format":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1st quarter","2":"2nd quarter","3":"3rd quarter","4":"4th quarter"}},"stand-alone":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1st quarter","2":"2nd quarter","3":"3rd quarter","4":"4th quarter"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"},"narrow":{"midnight":"mi","am":"a","am-alt-variant":"am","noon":"n","pm":"p","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"},"wide":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"}},"stand-alone":{"abbreviated":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"},"narrow":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"},"wide":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"morning","afternoon1":"afternoon","evening1":"evening","night1":"night"}}},"eras":{"eraNames":{"0":"Before Christ","1":"Anno Domini","0-alt-variant":"Before Common Era","1-alt-variant":"Common Era"},"eraAbbr":{"0":"BC","1":"AD","0-alt-variant":"BCE","1-alt-variant":"CE"},"eraNarrow":{"0":"B","1":"A","0-alt-variant":"BCE","1-alt-variant":"CE"}},"dateFormats":{"full":"EEEE, MMMM d, y","long":"MMMM d, y","medium":"MMM d, y","short":"M/d/yy"},"dateSkeletons":{"full":"yMMMMEEEEd","long":"yMMMMd","medium":"yMMMd","short":"yyMd"},"timeFormats":{"full":"h:mm:ss a zzzz","full-alt-ascii":"h:mm:ss a zzzz","long":"h:mm:ss a z","long-alt-ascii":"h:mm:ss a z","medium":"h:mm:ss a","medium-alt-ascii":"h:mm:ss a","short":"h:mm a","short-alt-ascii":"h:mm a"},"timeSkeletons":{"full":"ahmmsszzzz","long":"ahmmssz","medium":"ahmmss","short":"ahmm"},"dateTimeFormats":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1}, {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","Ehm-alt-ascii":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","Ehms-alt-ascii":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"M/d/y G","GyMMM":"MMM y G","GyMMMd":"MMM d, y G","GyMMMEd":"E, MMM d, y G","h":"h a","h-alt-ascii":"h a","H":"HH","hm":"h:mm a","hm-alt-ascii":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","hms-alt-ascii":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","hmsv-alt-ascii":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","hmv-alt-ascii":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"M/d","MEd":"E, M/d","MMM":"LLL","MMMd":"MMM d","MMMEd":"E, MMM d","MMMMd":"MMMM d","MMMMW-count-one":"'week' W 'of' MMMM","MMMMW-count-other":"'week' W 'of' MMMM","ms":"mm:ss","y":"y","yM":"M/y","yMd":"M/d/y","yMEd":"E, M/d/y","yMMM":"MMM y","yMMMd":"MMM d, y","yMMMEd":"E, MMM d, y","yMMMM":"MMMM y","yQQQ":"QQQ y","yQQQQ":"QQQQ y","yw-count-one":"'week' w 'of' Y","yw-count-other":"'week' w 'of' Y"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{0} {1}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{0} {1}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h – h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm – h:mm B","m":"h:mm – h:mm B"},"d":{"d":"d – d"},"Gy":{"G":"y G – y G","y":"y – y G"},"GyM":{"G":"M/y G – M/y G","M":"M/y – M/y G","y":"M/y – M/y G"},"GyMd":{"d":"M/d/y – M/d/y G","G":"M/d/y G – M/d/y G","M":"M/d/y – M/d/y G","y":"M/d/y – M/d/y G"},"GyMEd":{"d":"E, M/d/y – E, M/d/y G","G":"E, M/d/y G – E, M/d/y G","M":"E, M/d/y – E, M/d/y G","y":"E, M/d/y – E, M/d/y G"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"MMM d – d, y G","G":"MMM d, y G – MMM d, y G","M":"MMM d – MMM d, y G","y":"MMM d, y – MMM d, y G"},"GyMMMEd":{"d":"E, MMM d – E, MMM d, y G","G":"E, MMM d, y G – E, MMM d, y G","M":"E, MMM d – E, MMM d, y G","y":"E, MMM d, y – E, MMM d, y G"},"h":{"a":"h a – h a","h":"h – h a"},"H":{"H":"HH – HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"HH:mm – HH:mm","m":"HH:mm – HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm – h:mm a v","m":"h:mm – h:mm a v"},"Hmv":{"H":"HH:mm – HH:mm v","m":"HH:mm – HH:mm v"},"hv":{"a":"h a – h a v","h":"h – h a v"},"Hv":{"H":"HH – HH v"},"M":{"M":"M – M"},"Md":{"d":"M/d – M/d","M":"M/d – M/d"},"MEd":{"d":"E, M/d – E, M/d","M":"E, M/d – E, M/d"},"MMM":{"M":"MMM – MMM"},"MMMd":{"d":"MMM d – d","M":"MMM d – MMM d"},"MMMEd":{"d":"E, MMM d – E, MMM d","M":"E, MMM d – E, MMM d"},"y":{"y":"y – y"},"yM":{"M":"M/y – M/y","y":"M/y – M/y"},"yMd":{"d":"M/d/y – M/d/y","M":"M/d/y – M/d/y","y":"M/d/y – M/d/y"},"yMEd":{"d":"E, M/d/y – E, M/d/y","M":"E, M/d/y – E, M/d/y","y":"E, M/d/y – E, M/d/y"},"yMMM":{"M":"MMM – MMM y","y":"MMM y – MMM y"},"yMMMd":{"d":"MMM d – d, y","M":"MMM d – MMM d, y","y":"MMM d, y – MMM d, y"},"yMMMEd":{"d":"E, MMM d – E, MMM d, y","M":"E, MMM d – E, MMM d, y","y":"E, MMM d, y – E, MMM d, y"},"yMMMM":{"M":"MMMM – MMMM y","y":"MMMM y – MMMM y"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'at' {0}","long":"{1} 'at' {0}","medium":"{1}, {0}","short":"{1}, {0}"}}}},"timeZoneNames":{"hourFormat":"+HH:mm;-HH:mm","gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","regionFormat":"{0} Time","regionFormat-type-daylight":"{0} Daylight Time","regionFormat-type-standard":"{0} Standard Time","fallbackFormat":"{1} ({0})","zone":{"America":{"Asuncion":{"exemplarCity":"Asunción"},"Bahia_Banderas":{"exemplarCity":"Bahía de Banderas"},"Cancun":{"exemplarCity":"Cancún"},"Ciudad_Juarez":{"exemplarCity":"Ciudad Juárez"},"Coral_Harbour":{"exemplarCity":"Atikokan"},"Curacao":{"exemplarCity":"Curaçao"},"Godthab":{"exemplarCity":"Nuuk"},"Indiana":{"Vincennes":{"exemplarCity":"Vincennes, Indiana"},"Petersburg":{"exemplarCity":"Petersburg, Indiana"},"Tell_City":{"exemplarCity":"Tell City, Indiana"},"Knox":{"exemplarCity":"Knox, Indiana"},"Winamac":{"exemplarCity":"Winamac, Indiana"},"Marengo":{"exemplarCity":"Marengo, Indiana"},"Vevay":{"exemplarCity":"Vevay, Indiana"}},"Kentucky":{"Monticello":{"exemplarCity":"Monticello, Kentucky"}},"Lower_Princes":{"exemplarCity":"Lower Prince’s Quarter"},"Merida":{"exemplarCity":"Mérida"},"North_Dakota":{"Beulah":{"exemplarCity":"Beulah, North Dakota"},"New_Salem":{"exemplarCity":"New Salem, North Dakota"},"Center":{"exemplarCity":"Center, North Dakota"}},"Scoresbysund":{"exemplarCity":"Ittoqqortoormiit"},"St_Barthelemy":{"exemplarCity":"St. Barthélemy"},"St_Johns":{"exemplarCity":"St. John’s"},"St_Kitts":{"exemplarCity":"St. Kitts"},"St_Lucia":{"exemplarCity":"St. Lucia"},"St_Thomas":{"exemplarCity":"St. Thomas"},"St_Vincent":{"exemplarCity":"St. Vincent"}},"Atlantic":{"Faeroe":{"exemplarCity":"Faroe"},"St_Helena":{"exemplarCity":"St. Helena"}},"Europe":{"Dublin":{"long":{"daylight":"Irish Standard Time"}},"Kiev":{"exemplarCity":"Kyiv"},"London":{"long":{"daylight":"British Summer Time"}}},"Africa":{"Asmera":{"exemplarCity":"Asmara"},"Sao_Tome":{"exemplarCity":"São Tomé"}},"Asia":{"Calcutta":{"exemplarCity":"Kolkata"},"Katmandu":{"exemplarCity":"Kathmandu"},"Macau":{"exemplarCity":"Macao"},"Qostanay":{"exemplarCity":"Kostanay"},"Rangoon":{"exemplarCity":"Yangon"},"Saigon":{"exemplarCity":"Ho Chi Minh City"}},"Indian":{"Reunion":{"exemplarCity":"Réunion"}},"Pacific":{"Honolulu":{"short":{"generic":"HST","standard":"HST","daylight":"HDT"}},"Ponape":{"exemplarCity":"Pohnpei"},"Truk":{"exemplarCity":"Chuuk"}},"Antarctica":{"DumontDUrville":{"exemplarCity":"Dumont d’Urville"}},"Etc":{"UTC":{"long":{"standard":"Coordinated Universal Time"},"short":{"standard":"UTC"}},"Unknown":{"exemplarCity":"Unknown City"}}},"metazone":{"Acre":{"long":{"generic":"Acre Time","standard":"Acre Standard Time","daylight":"Acre Summer Time"}},"Afghanistan":{"long":{"standard":"Afghanistan Time"}},"Africa_Central":{"long":{"standard":"Central Africa Time"}},"Africa_Eastern":{"long":{"standard":"East Africa Time"}},"Africa_Southern":{"long":{"standard":"South Africa Standard Time"}},"Africa_Western":{"long":{"generic":"West Africa Time","standard":"West Africa Standard Time","daylight":"West Africa Summer Time"}},"Alaska":{"long":{"generic":"Alaska Time","standard":"Alaska Standard Time","daylight":"Alaska Daylight Time"},"short":{"generic":"AKT","standard":"AKST","daylight":"AKDT"}},"Almaty":{"long":{"generic":"Almaty Time","standard":"Almaty Standard Time","daylight":"Almaty Summer Time"}},"Amazon":{"long":{"generic":"Amazon Time","standard":"Amazon Standard Time","daylight":"Amazon Summer Time"}},"America_Central":{"long":{"generic":"Central Time","standard":"Central Standard Time","daylight":"Central Daylight Time"},"short":{"generic":"CT","standard":"CST","daylight":"CDT"}},"America_Eastern":{"long":{"generic":"Eastern Time","standard":"Eastern Standard Time","daylight":"Eastern Daylight Time"},"short":{"generic":"ET","standard":"EST","daylight":"EDT"}},"America_Mountain":{"long":{"generic":"Mountain Time","standard":"Mountain Standard Time","daylight":"Mountain Daylight Time"},"short":{"generic":"MT","standard":"MST","daylight":"MDT"}},"America_Pacific":{"long":{"generic":"Pacific Time","standard":"Pacific Standard Time","daylight":"Pacific Daylight Time"},"short":{"generic":"PT","standard":"PST","daylight":"PDT"}},"Anadyr":{"long":{"generic":"Anadyr Time","standard":"Anadyr Standard Time","daylight":"Anadyr Summer Time"}},"Apia":{"long":{"generic":"Apia Time","standard":"Apia Standard Time","daylight":"Apia Daylight Time"}},"Aqtau":{"long":{"generic":"Aqtau Time","standard":"Aqtau Standard Time","daylight":"Aqtau Summer Time"}},"Aqtobe":{"long":{"generic":"Aqtobe Time","standard":"Aqtobe Standard Time","daylight":"Aqtobe Summer Time"}},"Arabian":{"long":{"generic":"Arabian Time","standard":"Arabian Standard Time","daylight":"Arabian Daylight Time"}},"Argentina":{"long":{"generic":"Argentina Time","standard":"Argentina Standard Time","daylight":"Argentina Summer Time"}},"Argentina_Western":{"long":{"generic":"Western Argentina Time","standard":"Western Argentina Standard Time","daylight":"Western Argentina Summer Time"}},"Armenia":{"long":{"generic":"Armenia Time","standard":"Armenia Standard Time","daylight":"Armenia Summer Time"}},"Atlantic":{"long":{"generic":"Atlantic Time","standard":"Atlantic Standard Time","daylight":"Atlantic Daylight Time"},"short":{"generic":"AT","standard":"AST","daylight":"ADT"}},"Australia_Central":{"long":{"generic":"Central Australia Time","standard":"Australian Central Standard Time","daylight":"Australian Central Daylight Time"}},"Australia_CentralWestern":{"long":{"generic":"Australian Central Western Time","standard":"Australian Central Western Standard Time","daylight":"Australian Central Western Daylight Time"}},"Australia_Eastern":{"long":{"generic":"Eastern Australia Time","standard":"Australian Eastern Standard Time","daylight":"Australian Eastern Daylight Time"}},"Australia_Western":{"long":{"generic":"Western Australia Time","standard":"Australian Western Standard Time","daylight":"Australian Western Daylight Time"}},"Azerbaijan":{"long":{"generic":"Azerbaijan Time","standard":"Azerbaijan Standard Time","daylight":"Azerbaijan Summer Time"}},"Azores":{"long":{"generic":"Azores Time","standard":"Azores Standard Time","daylight":"Azores Summer Time"}},"Bangladesh":{"long":{"generic":"Bangladesh Time","standard":"Bangladesh Standard Time","daylight":"Bangladesh Summer Time"}},"Bhutan":{"long":{"standard":"Bhutan Time"}},"Bolivia":{"long":{"standard":"Bolivia Time"}},"Brasilia":{"long":{"generic":"Brasilia Time","standard":"Brasilia Standard Time","daylight":"Brasilia Summer Time"}},"Brunei":{"long":{"standard":"Brunei Darussalam Time"}},"Cape_Verde":{"long":{"generic":"Cape Verde Time","standard":"Cape Verde Standard Time","daylight":"Cape Verde Summer Time"}},"Casey":{"long":{"standard":"Casey Time"}},"Chamorro":{"long":{"standard":"Chamorro Standard Time"}},"Chatham":{"long":{"generic":"Chatham Time","standard":"Chatham Standard Time","daylight":"Chatham Daylight Time"}},"Chile":{"long":{"generic":"Chile Time","standard":"Chile Standard Time","daylight":"Chile Summer Time"}},"China":{"long":{"generic":"China Time","standard":"China Standard Time","daylight":"China Daylight Time"}},"Choibalsan":{"long":{"generic":"Choibalsan Time","standard":"Choibalsan Standard Time","daylight":"Choibalsan Summer Time"}},"Christmas":{"long":{"standard":"Christmas Island Time"}},"Cocos":{"long":{"standard":"Cocos Islands Time"}},"Colombia":{"long":{"generic":"Colombia Time","standard":"Colombia Standard Time","daylight":"Colombia Summer Time"}},"Cook":{"long":{"generic":"Cook Islands Time","standard":"Cook Islands Standard Time","daylight":"Cook Islands Half Summer Time"}},"Cuba":{"long":{"generic":"Cuba Time","standard":"Cuba Standard Time","daylight":"Cuba Daylight Time"}},"Davis":{"long":{"standard":"Davis Time"}},"DumontDUrville":{"long":{"standard":"Dumont-d’Urville Time"}},"East_Timor":{"long":{"standard":"East Timor Time"}},"Easter":{"long":{"generic":"Easter Island Time","standard":"Easter Island Standard Time","daylight":"Easter Island Summer Time"}},"Ecuador":{"long":{"standard":"Ecuador Time"}},"Europe_Central":{"long":{"generic":"Central European Time","standard":"Central European Standard Time","daylight":"Central European Summer Time"}},"Europe_Eastern":{"long":{"generic":"Eastern European Time","standard":"Eastern European Standard Time","daylight":"Eastern European Summer Time"}},"Europe_Further_Eastern":{"long":{"standard":"Further-eastern European Time"}},"Europe_Western":{"long":{"generic":"Western European Time","standard":"Western European Standard Time","daylight":"Western European Summer Time"}},"Falkland":{"long":{"generic":"Falkland Islands Time","standard":"Falkland Islands Standard Time","daylight":"Falkland Islands Summer Time"}},"Fiji":{"long":{"generic":"Fiji Time","standard":"Fiji Standard Time","daylight":"Fiji Summer Time"}},"French_Guiana":{"long":{"standard":"French Guiana Time"}},"French_Southern":{"long":{"standard":"French Southern & Antarctic Time"}},"Galapagos":{"long":{"standard":"Galapagos Time"}},"Gambier":{"long":{"standard":"Gambier Time"}},"Georgia":{"long":{"generic":"Georgia Time","standard":"Georgia Standard Time","daylight":"Georgia Summer Time"}},"Gilbert_Islands":{"long":{"standard":"Gilbert Islands Time"}},"GMT":{"long":{"standard":"Greenwich Mean Time"},"short":{"standard":"GMT"}},"Greenland":{"long":{"generic":"Greenland Time","standard":"Greenland Standard Time","daylight":"Greenland Summer Time"}},"Greenland_Eastern":{"long":{"generic":"East Greenland Time","standard":"East Greenland Standard Time","daylight":"East Greenland Summer Time"}},"Greenland_Western":{"long":{"generic":"West Greenland Time","standard":"West Greenland Standard Time","daylight":"West Greenland Summer Time"}},"Guam":{"long":{"standard":"Guam Standard Time"}},"Gulf":{"long":{"standard":"Gulf Standard Time"}},"Guyana":{"long":{"standard":"Guyana Time"}},"Hawaii_Aleutian":{"long":{"generic":"Hawaii-Aleutian Time","standard":"Hawaii-Aleutian Standard Time","daylight":"Hawaii-Aleutian Daylight Time"},"short":{"generic":"HAT","standard":"HAST","daylight":"HADT"}},"Hong_Kong":{"long":{"generic":"Hong Kong Time","standard":"Hong Kong Standard Time","daylight":"Hong Kong Summer Time"}},"Hovd":{"long":{"generic":"Hovd Time","standard":"Hovd Standard Time","daylight":"Hovd Summer Time"}},"India":{"long":{"standard":"India Standard Time"}},"Indian_Ocean":{"long":{"standard":"Indian Ocean Time"}},"Indochina":{"long":{"standard":"Indochina Time"}},"Indonesia_Central":{"long":{"standard":"Central Indonesia Time"}},"Indonesia_Eastern":{"long":{"standard":"Eastern Indonesia Time"}},"Indonesia_Western":{"long":{"standard":"Western Indonesia Time"}},"Iran":{"long":{"generic":"Iran Time","standard":"Iran Standard Time","daylight":"Iran Daylight Time"}},"Irkutsk":{"long":{"generic":"Irkutsk Time","standard":"Irkutsk Standard Time","daylight":"Irkutsk Summer Time"}},"Israel":{"long":{"generic":"Israel Time","standard":"Israel Standard Time","daylight":"Israel Daylight Time"}},"Japan":{"long":{"generic":"Japan Time","standard":"Japan Standard Time","daylight":"Japan Daylight Time"}},"Kamchatka":{"long":{"generic":"Petropavlovsk-Kamchatski Time","standard":"Petropavlovsk-Kamchatski Standard Time","daylight":"Petropavlovsk-Kamchatski Summer Time"}},"Kazakhstan_Eastern":{"long":{"standard":"East Kazakhstan Time"}},"Kazakhstan_Western":{"long":{"standard":"West Kazakhstan Time"}},"Korea":{"long":{"generic":"Korean Time","standard":"Korean Standard Time","daylight":"Korean Daylight Time"}},"Kosrae":{"long":{"standard":"Kosrae Time"}},"Krasnoyarsk":{"long":{"generic":"Krasnoyarsk Time","standard":"Krasnoyarsk Standard Time","daylight":"Krasnoyarsk Summer Time"}},"Kyrgystan":{"long":{"standard":"Kyrgyzstan Time"}},"Lanka":{"long":{"standard":"Lanka Time"}},"Line_Islands":{"long":{"standard":"Line Islands Time"}},"Lord_Howe":{"long":{"generic":"Lord Howe Time","standard":"Lord Howe Standard Time","daylight":"Lord Howe Daylight Time"}},"Macau":{"long":{"generic":"Macao Time","standard":"Macao Standard Time","daylight":"Macao Summer Time"}},"Magadan":{"long":{"generic":"Magadan Time","standard":"Magadan Standard Time","daylight":"Magadan Summer Time"}},"Malaysia":{"long":{"standard":"Malaysia Time"}},"Maldives":{"long":{"standard":"Maldives Time"}},"Marquesas":{"long":{"standard":"Marquesas Time"}},"Marshall_Islands":{"long":{"standard":"Marshall Islands Time"}},"Mauritius":{"long":{"generic":"Mauritius Time","standard":"Mauritius Standard Time","daylight":"Mauritius Summer Time"}},"Mawson":{"long":{"standard":"Mawson Time"}},"Mexico_Pacific":{"long":{"generic":"Mexican Pacific Time","standard":"Mexican Pacific Standard Time","daylight":"Mexican Pacific Daylight Time"}},"Mongolia":{"long":{"generic":"Ulaanbaatar Time","standard":"Ulaanbaatar Standard Time","daylight":"Ulaanbaatar Summer Time"}},"Moscow":{"long":{"generic":"Moscow Time","standard":"Moscow Standard Time","daylight":"Moscow Summer Time"}},"Myanmar":{"long":{"standard":"Myanmar Time"}},"Nauru":{"long":{"standard":"Nauru Time"}},"Nepal":{"long":{"standard":"Nepal Time"}},"New_Caledonia":{"long":{"generic":"New Caledonia Time","standard":"New Caledonia Standard Time","daylight":"New Caledonia Summer Time"}},"New_Zealand":{"long":{"generic":"New Zealand Time","standard":"New Zealand Standard Time","daylight":"New Zealand Daylight Time"}},"Newfoundland":{"long":{"generic":"Newfoundland Time","standard":"Newfoundland Standard Time","daylight":"Newfoundland Daylight Time"}},"Niue":{"long":{"standard":"Niue Time"}},"Norfolk":{"long":{"generic":"Norfolk Island Time","standard":"Norfolk Island Standard Time","daylight":"Norfolk Island Daylight Time"}},"Noronha":{"long":{"generic":"Fernando de Noronha Time","standard":"Fernando de Noronha Standard Time","daylight":"Fernando de Noronha Summer Time"}},"North_Mariana":{"long":{"standard":"North Mariana Islands Time"}},"Novosibirsk":{"long":{"generic":"Novosibirsk Time","standard":"Novosibirsk Standard Time","daylight":"Novosibirsk Summer Time"}},"Omsk":{"long":{"generic":"Omsk Time","standard":"Omsk Standard Time","daylight":"Omsk Summer Time"}},"Pakistan":{"long":{"generic":"Pakistan Time","standard":"Pakistan Standard Time","daylight":"Pakistan Summer Time"}},"Palau":{"long":{"standard":"Palau Time"}},"Papua_New_Guinea":{"long":{"standard":"Papua New Guinea Time"}},"Paraguay":{"long":{"generic":"Paraguay Time","standard":"Paraguay Standard Time","daylight":"Paraguay Summer Time"}},"Peru":{"long":{"generic":"Peru Time","standard":"Peru Standard Time","daylight":"Peru Summer Time"}},"Philippines":{"long":{"generic":"Philippine Time","standard":"Philippine Standard Time","daylight":"Philippine Summer Time"}},"Phoenix_Islands":{"long":{"standard":"Phoenix Islands Time"}},"Pierre_Miquelon":{"long":{"generic":"St. Pierre & Miquelon Time","standard":"St. Pierre & Miquelon Standard Time","daylight":"St. Pierre & Miquelon Daylight Time"}},"Pitcairn":{"long":{"standard":"Pitcairn Time"}},"Ponape":{"long":{"standard":"Ponape Time"}},"Pyongyang":{"long":{"standard":"Pyongyang Time"}},"Qyzylorda":{"long":{"generic":"Qyzylorda Time","standard":"Qyzylorda Standard Time","daylight":"Qyzylorda Summer Time"}},"Reunion":{"long":{"standard":"Réunion Time"}},"Rothera":{"long":{"standard":"Rothera Time"}},"Sakhalin":{"long":{"generic":"Sakhalin Time","standard":"Sakhalin Standard Time","daylight":"Sakhalin Summer Time"}},"Samara":{"long":{"generic":"Samara Time","standard":"Samara Standard Time","daylight":"Samara Summer Time"}},"Samoa":{"long":{"generic":"Samoa Time","standard":"Samoa Standard Time","daylight":"Samoa Daylight Time"}},"Seychelles":{"long":{"standard":"Seychelles Time"}},"Singapore":{"long":{"standard":"Singapore Standard Time"}},"Solomon":{"long":{"standard":"Solomon Islands Time"}},"South_Georgia":{"long":{"standard":"South Georgia Time"}},"Suriname":{"long":{"standard":"Suriname Time"}},"Syowa":{"long":{"standard":"Syowa Time"}},"Tahiti":{"long":{"standard":"Tahiti Time"}},"Taipei":{"long":{"generic":"Taipei Time","standard":"Taipei Standard Time","daylight":"Taipei Daylight Time"}},"Tajikistan":{"long":{"standard":"Tajikistan Time"}},"Tokelau":{"long":{"standard":"Tokelau Time"}},"Tonga":{"long":{"generic":"Tonga Time","standard":"Tonga Standard Time","daylight":"Tonga Summer Time"}},"Truk":{"long":{"standard":"Chuuk Time"}},"Turkmenistan":{"long":{"generic":"Turkmenistan Time","standard":"Turkmenistan Standard Time","daylight":"Turkmenistan Summer Time"}},"Tuvalu":{"long":{"standard":"Tuvalu Time"}},"Uruguay":{"long":{"generic":"Uruguay Time","standard":"Uruguay Standard Time","daylight":"Uruguay Summer Time"}},"Uzbekistan":{"long":{"generic":"Uzbekistan Time","standard":"Uzbekistan Standard Time","daylight":"Uzbekistan Summer Time"}},"Vanuatu":{"long":{"generic":"Vanuatu Time","standard":"Vanuatu Standard Time","daylight":"Vanuatu Summer Time"}},"Venezuela":{"long":{"standard":"Venezuela Time"}},"Vladivostok":{"long":{"generic":"Vladivostok Time","standard":"Vladivostok Standard Time","daylight":"Vladivostok Summer Time"}},"Volgograd":{"long":{"generic":"Volgograd Time","standard":"Volgograd Standard Time","daylight":"Volgograd Summer Time"}},"Vostok":{"long":{"standard":"Vostok Time"}},"Wake":{"long":{"standard":"Wake Island Time"}},"Wallis":{"long":{"standard":"Wallis & Futuna Time"}},"Yakutsk":{"long":{"generic":"Yakutsk Time","standard":"Yakutsk Standard Time","daylight":"Yakutsk Summer Time"}},"Yekaterinburg":{"long":{"generic":"Yekaterinburg Time","standard":"Yekaterinburg Standard Time","daylight":"Yekaterinburg Summer Time"}},"Yukon":{"long":{"standard":"Yukon Time"}}}}}}}`),mu={main:Ml},cu=Object.freeze(Object.defineProperty({__proto__:null,default:mu,main:Ml},Symbol.toStringTag,{value:"Module"})),bl=JSON.parse(`{"de":{"numbers":{"defaultNumberingSystem":"latn","otherNumberingSystems":{"native":"latn"},"minimumGroupingDigits":"1","symbols-numberSystem-latn":{"decimal":",","group":".","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"≈","exponential":"E","superscriptingExponent":"·","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-one":"0 Tausend","1000-count-other":"0 Tausend","10000-count-one":"00 Tausend","10000-count-other":"00 Tausend","100000-count-one":"000 Tausend","100000-count-other":"000 Tausend","1000000-count-one":"0 Million","1000000-count-other":"0 Millionen","10000000-count-one":"00 Millionen","10000000-count-other":"00 Millionen","100000000-count-one":"000 Millionen","100000000-count-other":"000 Millionen","1000000000-count-one":"0 Milliarde","1000000000-count-other":"0 Milliarden","10000000000-count-one":"00 Milliarden","10000000000-count-other":"00 Milliarden","100000000000-count-one":"000 Milliarden","100000000000-count-other":"000 Milliarden","1000000000000-count-one":"0 Billion","1000000000000-count-other":"0 Billionen","10000000000000-count-one":"00 Billionen","10000000000000-count-other":"00 Billionen","100000000000000-count-one":"000 Billionen","100000000000000-count-other":"000 Billionen"}},"short":{"decimalFormat":{"1000-count-one":"0","1000-count-other":"0","10000-count-one":"0","10000-count-other":"0","100000-count-one":"0","100000-count-other":"0","1000000-count-one":"0 Mio'.'","1000000-count-other":"0 Mio'.'","10000000-count-one":"00 Mio'.'","10000000-count-other":"00 Mio'.'","100000000-count-one":"000 Mio'.'","100000000-count-other":"000 Mio'.'","1000000000-count-one":"0 Mrd'.'","1000000000-count-other":"0 Mrd'.'","10000000000-count-one":"00 Mrd'.'","10000000000-count-other":"00 Mrd'.'","100000000000-count-one":"000 Mrd'.'","100000000000-count-other":"000 Mrd'.'","1000000000000-count-one":"0 Bio'.'","1000000000000-count-other":"0 Bio'.'","10000000000000-count-one":"00 Bio'.'","10000000000000-count-other":"00 Bio'.'","100000000000000-count-one":"000 Bio'.'","100000000000000-count-other":"000 Bio'.'"}}},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-latn":{"standard":"#,##0 %"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"#,##0.00 ¤","standard-noCurrency":"#,##0.00","accounting":"#,##0.00 ¤","accounting-noCurrency":"#,##0.00","short":{"standard":{"1000-count-one":"0","1000-count-other":"0","10000-count-one":"0","10000-count-other":"0","100000-count-one":"0","100000-count-other":"0","1000000-count-one":"0 Mio'.' ¤","1000000-count-other":"0 Mio'.' ¤","10000000-count-one":"00 Mio'.' ¤","10000000-count-other":"00 Mio'.' ¤","100000000-count-one":"000 Mio'.' ¤","100000000-count-other":"000 Mio'.' ¤","1000000000-count-one":"0 Mrd'.' ¤","1000000000-count-other":"0 Mrd'.' ¤","10000000000-count-one":"00 Mrd'.' ¤","10000000000-count-other":"00 Mrd'.' ¤","100000000000-count-one":"000 Mrd'.' ¤","100000000000-count-other":"000 Mrd'.' ¤","1000000000000-count-one":"0 Bio'.' ¤","1000000000000-count-other":"0 Bio'.' ¤","10000000000000-count-one":"00 Bio'.' ¤","10000000000000-count-other":"00 Bio'.' ¤","100000000000000-count-one":"000 Bio'.' ¤","100000000000000-count-other":"000 Bio'.' ¤"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"miscPatterns-numberSystem-latn":{"approximately":"≈{0}","atLeast":"{0}+","atMost":"≤{0}","range":"{0}–{1}"},"minimalPairs":{"pluralMinimalPairs-count-one":"{0} Tag","pluralMinimalPairs-count-other":"{0} Tage","other":"{0}. Abzweigung nach rechts nehmen","accusative":"… für {0} …","dative":"… mit {0} …","genitive":"Anstatt {0} …","nominative":"{0} kostet (kosten) € 3,50.","feminine":"Die {0} ist …","masculine":"Der {0} ist …","neuter":"Das {0} ist …"},"currencies":{"ADP":{"displayName":"Andorranische Pesete","displayName-count-one":"Andorranische Pesete","displayName-count-other":"Andorranische Peseten"},"AED":{"displayName":"VAE-Dirham"},"AFA":{"displayName":"Afghanische Afghani (1927–2002)"},"AFN":{"displayName":"Afghanischer Afghani","displayName-count-one":"Afghanischer Afghani","displayName-count-other":"Afghanische Afghani","symbol-alt-narrow":"؋"},"ALK":{"displayName":"Albanischer Lek (1946–1965)","displayName-count-one":"Albanischer Lek (1946–1965)","displayName-count-other":"Albanische Lek (1946–1965)"},"ALL":{"displayName":"Albanischer Lek","displayName-count-one":"Albanischer Lek","displayName-count-other":"Albanische Lek"},"AMD":{"displayName":"Armenischer Dram","displayName-count-one":"Armenischer Dram","displayName-count-other":"Armenische Dram","symbol-alt-narrow":"֏"},"ANG":{"displayName":"Niederländische-Antillen-Gulden"},"AOA":{"displayName":"Angolanischer Kwanza","displayName-count-one":"Angolanischer Kwanza","displayName-count-other":"Angolanische Kwanza","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"Angolanischer Kwanza (1977–1990)","displayName-count-one":"Angolanischer Kwanza (1977–1990)","displayName-count-other":"Angolanische Kwanza (1977–1990)"},"AON":{"displayName":"Angolanischer Neuer Kwanza (1990–2000)","displayName-count-one":"Angolanischer Neuer Kwanza (1990–2000)","displayName-count-other":"Angolanische Neue Kwanza (1990–2000)"},"AOR":{"displayName":"Angolanischer Kwanza Reajustado (1995–1999)","displayName-count-one":"Angolanischer Kwanza Reajustado (1995–1999)","displayName-count-other":"Angolanische Kwanza Reajustado (1995–1999)"},"ARA":{"displayName":"Argentinischer Austral","displayName-count-one":"Argentinischer Austral","displayName-count-other":"Argentinische Austral"},"ARL":{"displayName":"Argentinischer Peso Ley (1970–1983)","displayName-count-one":"Argentinischer Peso Ley (1970–1983)","displayName-count-other":"Argentinische Pesos Ley (1970–1983)"},"ARM":{"displayName":"Argentinischer Peso (1881–1970)","displayName-count-one":"Argentinischer Peso (1881–1970)","displayName-count-other":"Argentinische Pesos (1881–1970)"},"ARP":{"displayName":"Argentinischer Peso (1983–1985)","displayName-count-one":"Argentinischer Peso (1983–1985)","displayName-count-other":"Argentinische Peso (1983–1985)"},"ARS":{"displayName":"Argentinischer Peso","displayName-count-one":"Argentinischer Peso","displayName-count-other":"Argentinische Pesos","symbol-alt-narrow":"$"},"ATS":{"displayName":"Österreichischer Schilling","displayName-count-one":"Österreichischer Schilling","displayName-count-other":"Österreichische Schilling","symbol":"öS"},"AUD":{"displayName":"Australischer Dollar","displayName-count-one":"Australischer Dollar","displayName-count-other":"Australische Dollar","symbol":"AU$","symbol-alt-narrow":"$"},"AWG":{"displayName":"Aruba-Florin"},"AZM":{"displayName":"Aserbaidschan-Manat (1993–2006)"},"AZN":{"displayName":"Aserbaidschan-Manat","symbol-alt-narrow":"₼"},"BAD":{"displayName":"Bosnien und Herzegowina Dinar (1992–1994)"},"BAM":{"displayName":"Konvertible Mark Bosnien und Herzegowina","symbol-alt-narrow":"KM"},"BAN":{"displayName":"Bosnien und Herzegowina Neuer Dinar (1994–1997)","displayName-count-one":"Bosnien und Herzegowina Neuer Dinar (1994–1997)","displayName-count-other":"Bosnien und Herzegowina Neue Dinar (1994–1997)"},"BBD":{"displayName":"Barbados-Dollar","symbol-alt-narrow":"$"},"BDT":{"displayName":"Bangladesch-Taka","symbol-alt-narrow":"৳"},"BEC":{"displayName":"Belgischer Franc (konvertibel)","displayName-count-one":"Belgischer Franc (konvertibel)","displayName-count-other":"Belgische Franc (konvertibel)"},"BEF":{"displayName":"Belgischer Franc","displayName-count-one":"Belgischer Franc","displayName-count-other":"Belgische Franc"},"BEL":{"displayName":"Belgischer Finanz-Franc","displayName-count-one":"Belgischer Finanz-Franc","displayName-count-other":"Belgische Finanz-Franc"},"BGL":{"displayName":"Bulgarische Lew (1962–1999)"},"BGM":{"displayName":"Bulgarischer Lew (1952–1962)","displayName-count-one":"Bulgarischer Lew (1952–1962)","displayName-count-other":"Bulgarische Lew (1952–1962)","symbol":"BGK"},"BGN":{"displayName":"Bulgarischer Lew","displayName-count-one":"Bulgarischer Lew","displayName-count-other":"Bulgarische Lew"},"BGO":{"displayName":"Bulgarischer Lew (1879–1952)","displayName-count-one":"Bulgarischer Lew (1879–1952)","displayName-count-other":"Bulgarische Lew (1879–1952)","symbol":"BGJ"},"BHD":{"displayName":"Bahrain-Dinar"},"BIF":{"displayName":"Burundi-Franc","displayName-count-one":"Burundi-Franc","displayName-count-other":"Burundi-Francs"},"BMD":{"displayName":"Bermuda-Dollar","symbol-alt-narrow":"$"},"BND":{"displayName":"Brunei-Dollar","symbol-alt-narrow":"$"},"BOB":{"displayName":"Bolivianischer Boliviano","displayName-count-one":"Bolivianischer Boliviano","displayName-count-other":"Bolivianische Bolivianos","symbol-alt-narrow":"Bs"},"BOL":{"displayName":"Bolivianischer Boliviano (1863–1963)","displayName-count-one":"Bolivianischer Boliviano (1863–1963)","displayName-count-other":"Bolivianische Bolivianos (1863–1963)"},"BOP":{"displayName":"Bolivianischer Peso","displayName-count-one":"Bolivianischer Peso","displayName-count-other":"Bolivianische Peso"},"BOV":{"displayName":"Boliviansiche Mvdol","displayName-count-one":"Boliviansiche Mvdol","displayName-count-other":"Bolivianische Mvdol"},"BRB":{"displayName":"Brasilianischer Cruzeiro Novo (1967–1986)","displayName-count-one":"Brasilianischer Cruzeiro Novo (1967–1986)","displayName-count-other":"Brasilianische Cruzeiro Novo (1967–1986)"},"BRC":{"displayName":"Brasilianischer Cruzado (1986–1989)","displayName-count-one":"Brasilianischer Cruzado (1986–1989)","displayName-count-other":"Brasilianische Cruzado (1986–1989)"},"BRE":{"displayName":"Brasilianischer Cruzeiro (1990–1993)","displayName-count-one":"Brasilianischer Cruzeiro (1990–1993)","displayName-count-other":"Brasilianische Cruzeiro (1990–1993)"},"BRL":{"displayName":"Brasilianischer Real","displayName-count-one":"Brasilianischer Real","displayName-count-other":"Brasilianische Real","symbol":"R$","symbol-alt-narrow":"R$"},"BRN":{"displayName":"Brasilianischer Cruzado Novo (1989–1990)","displayName-count-one":"Brasilianischer Cruzado Novo (1989–1990)","displayName-count-other":"Brasilianische Cruzado Novo (1989–1990)"},"BRR":{"displayName":"Brasilianischer Cruzeiro (1993–1994)","displayName-count-one":"Brasilianischer Cruzeiro (1993–1994)","displayName-count-other":"Brasilianische Cruzeiro (1993–1994)"},"BRZ":{"displayName":"Brasilianischer Cruzeiro (1942–1967)"},"BSD":{"displayName":"Bahamas-Dollar","symbol-alt-narrow":"$"},"BTN":{"displayName":"Bhutan-Ngultrum"},"BUK":{"displayName":"Birmanischer Kyat","displayName-count-one":"Birmanischer Kyat","displayName-count-other":"Birmanische Kyat"},"BWP":{"displayName":"Botswanischer Pula","displayName-count-one":"Botswanischer Pula","displayName-count-other":"Botswanische Pula","symbol-alt-narrow":"P"},"BYB":{"displayName":"Belarus-Rubel (1994–1999)"},"BYN":{"displayName":"Weißrussischer Rubel","displayName-count-one":"Weißrussischer Rubel","displayName-count-other":"Weißrussische Rubel","symbol-alt-narrow":"р."},"BYR":{"displayName":"Weißrussischer Rubel (2000–2016)","displayName-count-one":"Weißrussischer Rubel (2000–2016)","displayName-count-other":"Weißrussische Rubel (2000–2016)"},"BZD":{"displayName":"Belize-Dollar","symbol-alt-narrow":"$"},"CAD":{"displayName":"Kanadischer Dollar","displayName-count-one":"Kanadischer Dollar","displayName-count-other":"Kanadische Dollar","symbol":"CA$","symbol-alt-narrow":"$"},"CDF":{"displayName":"Kongo-Franc","displayName-count-one":"Kongo-Franc","displayName-count-other":"Kongo-Francs"},"CHE":{"displayName":"WIR-Euro"},"CHF":{"displayName":"Schweizer Franken"},"CHW":{"displayName":"WIR Franken"},"CLE":{"displayName":"Chilenischer Escudo","displayName-count-one":"Chilenischer Escudo","displayName-count-other":"Chilenische Escudo"},"CLF":{"displayName":"Chilenische Unidades de Fomento"},"CLP":{"displayName":"Chilenischer Peso","displayName-count-one":"Chilenischer Peso","displayName-count-other":"Chilenische Pesos","symbol-alt-narrow":"$"},"CNH":{"displayName":"Renminbi-Yuan (Offshore)"},"CNX":{"displayName":"Dollar der Chinesischen Volksbank"},"CNY":{"displayName":"Renminbi Yuan","displayName-count-one":"Chinesischer Yuan","displayName-count-other":"Renminbi Yuan","symbol":"CN¥","symbol-alt-narrow":"¥"},"COP":{"displayName":"Kolumbianischer Peso","displayName-count-one":"Kolumbianischer Peso","displayName-count-other":"Kolumbianische Pesos","symbol-alt-narrow":"$"},"COU":{"displayName":"Kolumbianische Unidades de valor real","displayName-count-one":"Kolumbianische Unidad de valor real","displayName-count-other":"Kolumbianische Unidades de valor real"},"CRC":{"displayName":"Costa-Rica-Colón","symbol-alt-narrow":"₡"},"CSD":{"displayName":"Serbischer Dinar (2002–2006)","displayName-count-one":"Serbischer Dinar (2002–2006)","displayName-count-other":"Serbische Dinar (2002–2006)"},"CSK":{"displayName":"Tschechoslowakische Krone","displayName-count-one":"Tschechoslowakische Kronen","displayName-count-other":"Tschechoslowakische Kronen"},"CUC":{"displayName":"Kubanischer Peso (konvertibel)","displayName-count-one":"Kubanischer Peso (konvertibel)","displayName-count-other":"Kubanische Pesos (konvertibel)","symbol-alt-narrow":"Cub$"},"CUP":{"displayName":"Kubanischer Peso","displayName-count-one":"Kubanischer Peso","displayName-count-other":"Kubanische Pesos","symbol-alt-narrow":"$"},"CVE":{"displayName":"Cabo-Verde-Escudo","displayName-count-one":"Cabo-Verde-Escudo","displayName-count-other":"Cabo-Verde-Escudos"},"CYP":{"displayName":"Zypern-Pfund","displayName-count-one":"Zypern Pfund","displayName-count-other":"Zypern Pfund"},"CZK":{"displayName":"Tschechische Krone","displayName-count-one":"Tschechische Krone","displayName-count-other":"Tschechische Kronen","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"Mark der DDR"},"DEM":{"displayName":"Deutsche Mark","symbol":"DM"},"DJF":{"displayName":"Dschibuti-Franc"},"DKK":{"displayName":"Dänische Krone","displayName-count-one":"Dänische Krone","displayName-count-other":"Dänische Kronen","symbol-alt-narrow":"kr"},"DOP":{"displayName":"Dominikanischer Peso","displayName-count-one":"Dominikanischer Peso","displayName-count-other":"Dominikanische Pesos","symbol-alt-narrow":"$"},"DZD":{"displayName":"Algerischer Dinar","displayName-count-one":"Algerischer Dinar","displayName-count-other":"Algerische Dinar"},"ECS":{"displayName":"Ecuadorianischer Sucre","displayName-count-one":"Ecuadorianischer Sucre","displayName-count-other":"Ecuadorianische Sucre"},"ECV":{"displayName":"Verrechnungseinheit für Ecuador","displayName-count-one":"Verrechnungseinheiten für Ecuador","displayName-count-other":"Verrechnungseinheiten für Ecuador"},"EEK":{"displayName":"Estnische Krone","displayName-count-one":"Estnische Krone","displayName-count-other":"Estnische Kronen"},"EGP":{"displayName":"Ägyptisches Pfund","displayName-count-one":"Ägyptisches Pfund","displayName-count-other":"Ägyptische Pfund","symbol-alt-narrow":"E£"},"ERN":{"displayName":"Eritreischer Nakfa","displayName-count-one":"Eritreischer Nakfa","displayName-count-other":"Eritreische Nakfa"},"ESA":{"displayName":"Spanische Peseta (A–Konten)","displayName-count-one":"Spanische Peseta (A–Konten)","displayName-count-other":"Spanische Peseten (A–Konten)"},"ESB":{"displayName":"Spanische Peseta (konvertibel)","displayName-count-one":"Spanische Peseta (konvertibel)","displayName-count-other":"Spanische Peseten (konvertibel)"},"ESP":{"displayName":"Spanische Peseta","displayName-count-one":"Spanische Peseta","displayName-count-other":"Spanische Peseten","symbol-alt-narrow":"₧"},"ETB":{"displayName":"Äthiopischer Birr","displayName-count-one":"Äthiopischer Birr","displayName-count-other":"Äthiopische Birr"},"EUR":{"displayName":"Euro","symbol":"€","symbol-alt-narrow":"€"},"FIM":{"displayName":"Finnische Mark"},"FJD":{"displayName":"Fidschi-Dollar","symbol-alt-narrow":"$"},"FKP":{"displayName":"Falkland-Pfund","symbol-alt-narrow":"Fl£"},"FRF":{"displayName":"Französischer Franc","displayName-count-one":"Französischer Franc","displayName-count-other":"Französische Franc"},"GBP":{"displayName":"Britisches Pfund","displayName-count-one":"Britisches Pfund","displayName-count-other":"Britische Pfund","symbol":"£","symbol-alt-narrow":"£"},"GEK":{"displayName":"Georgischer Kupon Larit","displayName-count-one":"Georgischer Kupon Larit","displayName-count-other":"Georgische Kupon Larit"},"GEL":{"displayName":"Georgischer Lari","displayName-count-one":"Georgischer Lari","displayName-count-other":"Georgische Lari","symbol-alt-narrow":"₾"},"GHC":{"displayName":"Ghanaischer Cedi (1979–2007)","displayName-count-one":"Ghanaischer Cedi (1979–2007)","displayName-count-other":"Ghanaische Cedi (1979–2007)"},"GHS":{"displayName":"Ghanaischer Cedi","displayName-count-one":"Ghanaischer Cedi","displayName-count-other":"Ghanaische Cedi","symbol-alt-narrow":"₵"},"GIP":{"displayName":"Gibraltar-Pfund","symbol-alt-narrow":"£"},"GMD":{"displayName":"Gambia-Dalasi"},"GNF":{"displayName":"Guinea-Franc","symbol-alt-narrow":"F.G."},"GNS":{"displayName":"Guineischer Syli","displayName-count-one":"Guineischer Syli","displayName-count-other":"Guineische Syli"},"GQE":{"displayName":"Äquatorialguinea-Ekwele"},"GRD":{"displayName":"Griechische Drachme","displayName-count-one":"Griechische Drachme","displayName-count-other":"Griechische Drachmen"},"GTQ":{"displayName":"Guatemaltekischer Quetzal","displayName-count-one":"Guatemaltekischer Quetzal","displayName-count-other":"Guatemaltekische Quetzales","symbol-alt-narrow":"Q"},"GWE":{"displayName":"Portugiesisch Guinea Escudo"},"GWP":{"displayName":"Guinea-Bissau Peso","displayName-count-one":"Guinea-Bissau Peso","displayName-count-other":"Guinea-Bissau Pesos"},"GYD":{"displayName":"Guyana-Dollar","symbol-alt-narrow":"$"},"HKD":{"displayName":"Hongkong-Dollar","symbol":"HK$","symbol-alt-narrow":"$"},"HNL":{"displayName":"Honduras-Lempira","symbol-alt-narrow":"L"},"HRD":{"displayName":"Kroatischer Dinar","displayName-count-one":"Kroatischer Dinar","displayName-count-other":"Kroatische Dinar"},"HRK":{"displayName":"Kroatischer Kuna","displayName-count-one":"Kroatischer Kuna","displayName-count-other":"Kroatische Kuna","symbol-alt-narrow":"kn"},"HTG":{"displayName":"Haitianische Gourde","displayName-count-one":"Haitianische Gourde","displayName-count-other":"Haitianische Gourdes"},"HUF":{"displayName":"Ungarischer Forint","displayName-count-one":"Ungarischer Forint","displayName-count-other":"Ungarische Forint","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"Indonesische Rupiah","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"Irisches Pfund","displayName-count-one":"Irisches Pfund","displayName-count-other":"Irische Pfund"},"ILP":{"displayName":"Israelisches Pfund","displayName-count-one":"Israelisches Pfund","displayName-count-other":"Israelische Pfund"},"ILR":{"displayName":"Israelischer Schekel (1980–1985)","displayName-count-one":"Israelischer Schekel (1980–1985)","displayName-count-other":"Israelische Schekel (1980–1985)"},"ILS":{"displayName":"Israelischer Neuer Schekel","displayName-count-one":"Israelischer Neuer Schekel","displayName-count-other":"Israelische Neue Schekel","symbol":"₪","symbol-alt-narrow":"₪"},"INR":{"displayName":"Indische Rupie","displayName-count-one":"Indische Rupie","displayName-count-other":"Indische Rupien","symbol":"₹","symbol-alt-narrow":"₹"},"IQD":{"displayName":"Irakischer Dinar","displayName-count-one":"Irakischer Dinar","displayName-count-other":"Irakische Dinar"},"IRR":{"displayName":"Iranischer Rial","displayName-count-one":"Iranischer Rial","displayName-count-other":"Iranische Rial"},"ISJ":{"displayName":"Isländische Krone (1918–1981)","displayName-count-one":"Isländische Krone (1918–1981)","displayName-count-other":"Isländische Kronen (1918–1981)"},"ISK":{"displayName":"Isländische Krone","displayName-count-one":"Isländische Krone","displayName-count-other":"Isländische Kronen","symbol-alt-narrow":"kr"},"ITL":{"displayName":"Italienische Lira","displayName-count-one":"Italienische Lira","displayName-count-other":"Italienische Lire"},"JMD":{"displayName":"Jamaika-Dollar","symbol-alt-narrow":"$"},"JOD":{"displayName":"Jordanischer Dinar","displayName-count-one":"Jordanischer Dinar","displayName-count-other":"Jordanische Dinar"},"JPY":{"displayName":"Japanischer Yen","displayName-count-one":"Japanischer Yen","displayName-count-other":"Japanische Yen","symbol":"¥","symbol-alt-narrow":"¥"},"KES":{"displayName":"Kenia-Schilling"},"KGS":{"displayName":"Kirgisischer Som","displayName-count-one":"Kirgisischer Som","displayName-count-other":"Kirgisische Som","symbol-alt-narrow":"⃀"},"KHR":{"displayName":"Kambodschanischer Riel","displayName-count-one":"Kambodschanischer Riel","displayName-count-other":"Kambodschanische Riel","symbol-alt-narrow":"៛"},"KMF":{"displayName":"Komoren-Franc","displayName-count-one":"Komoren-Franc","displayName-count-other":"Komoren-Francs","symbol-alt-narrow":"FC"},"KPW":{"displayName":"Nordkoreanischer Won","displayName-count-one":"Nordkoreanischer Won","displayName-count-other":"Nordkoreanische Won","symbol-alt-narrow":"₩"},"KRH":{"displayName":"Südkoreanischer Hwan (1953–1962)"},"KRO":{"displayName":"Südkoreanischer Won (1945–1953)"},"KRW":{"displayName":"Südkoreanischer Won","displayName-count-one":"Südkoreanischer Won","displayName-count-other":"Südkoreanische Won","symbol":"₩","symbol-alt-narrow":"₩"},"KWD":{"displayName":"Kuwait-Dinar"},"KYD":{"displayName":"Kaiman-Dollar","symbol-alt-narrow":"$"},"KZT":{"displayName":"Kasachischer Tenge","displayName-count-one":"Kasachischer Tenge","displayName-count-other":"Kasachische Tenge","symbol-alt-narrow":"₸"},"LAK":{"displayName":"Laotischer Kip","displayName-count-one":"Laotischer Kip","displayName-count-other":"Laotische Kip","symbol-alt-narrow":"₭"},"LBP":{"displayName":"Libanesisches Pfund","displayName-count-one":"Libanesisches Pfund","displayName-count-other":"Libanesische Pfund","symbol-alt-narrow":"L£"},"LKR":{"displayName":"Sri-Lanka-Rupie","displayName-count-one":"Sri-Lanka-Rupie","displayName-count-other":"Sri-Lanka-Rupien","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"Liberianischer Dollar","displayName-count-one":"Liberianischer Dollar","displayName-count-other":"Liberianische Dollar","symbol-alt-narrow":"$"},"LSL":{"displayName":"Loti"},"LTL":{"displayName":"Litauischer Litas","displayName-count-one":"Litauischer Litas","displayName-count-other":"Litauische Litas","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"Litauischer Talonas","displayName-count-one":"Litauische Talonas","displayName-count-other":"Litauische Talonas"},"LUC":{"displayName":"Luxemburgischer Franc (konvertibel)","displayName-count-one":"Luxemburgische Franc (konvertibel)","displayName-count-other":"Luxemburgische Franc (konvertibel)"},"LUF":{"displayName":"Luxemburgischer Franc","displayName-count-one":"Luxemburgische Franc","displayName-count-other":"Luxemburgische Franc"},"LUL":{"displayName":"Luxemburgischer Finanz-Franc","displayName-count-one":"Luxemburgische Finanz-Franc","displayName-count-other":"Luxemburgische Finanz-Franc"},"LVL":{"displayName":"Lettischer Lats","displayName-count-one":"Lettischer Lats","displayName-count-other":"Lettische Lats","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"Lettischer Rubel","displayName-count-one":"Lettische Rubel","displayName-count-other":"Lettische Rubel"},"LYD":{"displayName":"Libyscher Dinar","displayName-count-one":"Libyscher Dinar","displayName-count-other":"Libysche Dinar"},"MAD":{"displayName":"Marokkanischer Dirham","displayName-count-one":"Marokkanischer Dirham","displayName-count-other":"Marokkanische Dirham"},"MAF":{"displayName":"Marokkanischer Franc","displayName-count-one":"Marokkanische Franc","displayName-count-other":"Marokkanische Franc"},"MCF":{"displayName":"Monegassischer Franc","displayName-count-one":"Monegassischer Franc","displayName-count-other":"Monegassische Franc"},"MDC":{"displayName":"Moldau-Cupon"},"MDL":{"displayName":"Moldau-Leu"},"MGA":{"displayName":"Madagaskar-Ariary","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"Madagaskar-Franc"},"MKD":{"displayName":"Mazedonischer Denar","displayName-count-one":"Mazedonischer Denar","displayName-count-other":"Mazedonische Denari"},"MKN":{"displayName":"Mazedonischer Denar (1992–1993)","displayName-count-one":"Mazedonischer Denar (1992–1993)","displayName-count-other":"Mazedonische Denar (1992–1993)"},"MLF":{"displayName":"Malischer Franc","displayName-count-one":"Malische Franc","displayName-count-other":"Malische Franc"},"MMK":{"displayName":"Myanmarischer Kyat","displayName-count-one":"Myanmarischer Kyat","displayName-count-other":"Myanmarische Kyat","symbol-alt-narrow":"K"},"MNT":{"displayName":"Mongolischer Tögrög","displayName-count-one":"Mongolischer Tögrög","displayName-count-other":"Mongolische Tögrög","symbol-alt-narrow":"₮"},"MOP":{"displayName":"Macao-Pataca"},"MRO":{"displayName":"Mauretanischer Ouguiya (1973–2017)","displayName-count-one":"Mauretanischer Ouguiya (1973–2017)","displayName-count-other":"Mauretanische Ouguiya (1973–2017)"},"MRU":{"displayName":"Mauretanischer Ouguiya","displayName-count-one":"Mauretanischer Ouguiya","displayName-count-other":"Mauretanische Ouguiya"},"MTL":{"displayName":"Maltesische Lira"},"MTP":{"displayName":"Maltesisches Pfund","displayName-count-one":"Maltesische Pfund","displayName-count-other":"Maltesische Pfund"},"MUR":{"displayName":"Mauritius-Rupie","displayName-count-one":"Mauritius-Rupie","displayName-count-other":"Mauritius-Rupien","symbol-alt-narrow":"Rs"},"MVP":{"displayName":"Malediven-Rupie (alt)","displayName-count-one":"Malediven-Rupie (alt)","displayName-count-other":"Malediven-Rupien (alt)"},"MVR":{"displayName":"Malediven-Rufiyaa","displayName-count-one":"Malediven-Rufiyaa","displayName-count-other":"Malediven-Rupien"},"MWK":{"displayName":"Malawi-Kwacha"},"MXN":{"displayName":"Mexikanischer Peso","displayName-count-one":"Mexikanischer Peso","displayName-count-other":"Mexikanische Pesos","symbol":"MX$","symbol-alt-narrow":"$"},"MXP":{"displayName":"Mexikanischer Silber-Peso (1861–1992)","displayName-count-one":"Mexikanische Silber-Peso (1861–1992)","displayName-count-other":"Mexikanische Silber-Pesos (1861–1992)"},"MXV":{"displayName":"Mexicanischer Unidad de Inversion (UDI)","displayName-count-one":"Mexicanischer Unidad de Inversion (UDI)","displayName-count-other":"Mexikanische Unidad de Inversion (UDI)"},"MYR":{"displayName":"Malaysischer Ringgit","displayName-count-one":"Malaysischer Ringgit","displayName-count-other":"Malaysische Ringgit","symbol-alt-narrow":"RM"},"MZE":{"displayName":"Mosambikanischer Escudo","displayName-count-one":"Mozambikanische Escudo","displayName-count-other":"Mozambikanische Escudo"},"MZM":{"displayName":"Mosambikanischer Metical (1980–2006)","displayName-count-one":"Mosambikanischer Metical (1980–2006)","displayName-count-other":"Mosambikanische Meticais (1980–2006)"},"MZN":{"displayName":"Mosambikanischer Metical","displayName-count-one":"Mosambikanischer Metical","displayName-count-other":"Mosambikanische Meticais"},"NAD":{"displayName":"Namibia-Dollar","symbol-alt-narrow":"$"},"NGN":{"displayName":"Nigerianischer Naira","displayName-count-one":"Nigerianischer Naira","displayName-count-other":"Nigerianische Naira","symbol-alt-narrow":"₦"},"NIC":{"displayName":"Nicaraguanischer Córdoba (1988–1991)","displayName-count-one":"Nicaraguanischer Córdoba (1988–1991)","displayName-count-other":"Nicaraguanische Córdoba (1988–1991)"},"NIO":{"displayName":"Nicaragua-Córdoba","displayName-count-one":"Nicaragua-Córdoba","displayName-count-other":"Nicaragua-Córdobas","symbol-alt-narrow":"C$"},"NLG":{"displayName":"Niederländischer Gulden","displayName-count-one":"Niederländischer Gulden","displayName-count-other":"Niederländische Gulden"},"NOK":{"displayName":"Norwegische Krone","displayName-count-one":"Norwegische Krone","displayName-count-other":"Norwegische Kronen","symbol-alt-narrow":"kr"},"NPR":{"displayName":"Nepalesische Rupie","displayName-count-one":"Nepalesische Rupie","displayName-count-other":"Nepalesische Rupien","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"Neuseeland-Dollar","symbol":"NZ$","symbol-alt-narrow":"$"},"OMR":{"displayName":"Omanischer Rial","displayName-count-one":"Omanischer Rial","displayName-count-other":"Omanische Rials"},"PAB":{"displayName":"Panamaischer Balboa","displayName-count-one":"Panamaischer Balboa","displayName-count-other":"Panamaische Balboas"},"PEI":{"displayName":"Peruanischer Inti","displayName-count-one":"Peruanische Inti","displayName-count-other":"Peruanische Inti"},"PEN":{"displayName":"Peruanischer Sol","displayName-count-one":"Peruanischer Sol","displayName-count-other":"Peruanische Sol"},"PES":{"displayName":"Peruanischer Sol (1863–1965)","displayName-count-one":"Peruanischer Sol (1863–1965)","displayName-count-other":"Peruanische Sol (1863–1965)"},"PGK":{"displayName":"Papua-neuguineischer Kina"},"PHP":{"displayName":"Philippinischer Peso","displayName-count-one":"Philippinischer Peso","displayName-count-other":"Philippinische Pesos","symbol":"PHP","symbol-alt-narrow":"₱"},"PKR":{"displayName":"Pakistanische Rupie","displayName-count-one":"Pakistanische Rupie","displayName-count-other":"Pakistanische Rupien","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"Polnischer Złoty","displayName-count-one":"Polnischer Złoty","displayName-count-other":"Polnische Złoty","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"Polnischer Zloty (1950–1995)","displayName-count-one":"Polnischer Zloty (1950–1995)","displayName-count-other":"Polnische Zloty (1950–1995)"},"PTE":{"displayName":"Portugiesischer Escudo","displayName-count-one":"Portugiesische Escudo","displayName-count-other":"Portugiesische Escudo"},"PYG":{"displayName":"Paraguayischer Guaraní","displayName-count-one":"Paraguayischer Guaraní","displayName-count-other":"Paraguayische Guaraníes","symbol-alt-narrow":"₲"},"QAR":{"displayName":"Katar-Riyal"},"RHD":{"displayName":"Rhodesischer Dollar","displayName-count-one":"Rhodesische Dollar","displayName-count-other":"Rhodesische Dollar"},"ROL":{"displayName":"Rumänischer Leu (1952–2006)","displayName-count-one":"Rumänischer Leu (1952–2006)","displayName-count-other":"Rumänische Leu (1952–2006)"},"RON":{"displayName":"Rumänischer Leu","displayName-count-one":"Rumänischer Leu","displayName-count-other":"Rumänische Leu","symbol-alt-narrow":"L"},"RSD":{"displayName":"Serbischer Dinar","displayName-count-one":"Serbischer Dinar","displayName-count-other":"Serbische Dinaren"},"RUB":{"displayName":"Russischer Rubel","displayName-count-one":"Russischer Rubel","displayName-count-other":"Russische Rubel","symbol-alt-narrow":"₽"},"RUR":{"displayName":"Russischer Rubel (1991–1998)","displayName-count-one":"Russischer Rubel (1991–1998)","displayName-count-other":"Russische Rubel (1991–1998)","symbol-alt-narrow":"р."},"RWF":{"displayName":"Ruanda-Franc","displayName-count-one":"Ruanda-Franc","displayName-count-other":"Ruanda-Francs","symbol-alt-narrow":"F.Rw"},"SAR":{"displayName":"Saudi-Rial"},"SBD":{"displayName":"Salomonen-Dollar","symbol-alt-narrow":"$"},"SCR":{"displayName":"Seychellen-Rupie","displayName-count-one":"Seychellen-Rupie","displayName-count-other":"Seychellen-Rupien"},"SDD":{"displayName":"Sudanesischer Dinar (1992–2007)","displayName-count-one":"Sudanesischer Dinar (1992–2007)","displayName-count-other":"Sudanesische Dinar (1992–2007)"},"SDG":{"displayName":"Sudanesisches Pfund","displayName-count-one":"Sudanesisches Pfund","displayName-count-other":"Sudanesische Pfund"},"SDP":{"displayName":"Sudanesisches Pfund (1957–1998)","displayName-count-one":"Sudanesisches Pfund (1957–1998)","displayName-count-other":"Sudanesische Pfund (1957–1998)"},"SEK":{"displayName":"Schwedische Krone","displayName-count-one":"Schwedische Krone","displayName-count-other":"Schwedische Kronen","symbol-alt-narrow":"kr"},"SGD":{"displayName":"Singapur-Dollar","symbol-alt-narrow":"$"},"SHP":{"displayName":"St.-Helena-Pfund","symbol-alt-narrow":"£"},"SIT":{"displayName":"Slowenischer Tolar","displayName-count-one":"Slowenischer Tolar","displayName-count-other":"Slowenische Tolar"},"SKK":{"displayName":"Slowakische Krone","displayName-count-one":"Slowakische Kronen","displayName-count-other":"Slowakische Kronen"},"SLE":{"displayName":"Sierra-leonischer Leone","displayName-count-one":"Sierra-leonischer Leone","displayName-count-other":"Sierra-leonische Leones"},"SLL":{"displayName":"Sierra-leonischer Leone (1964—2022)","displayName-count-one":"Sierra-leonischer Leone (1964—2022)","displayName-count-other":"Sierra-leonische Leones (1964—2022)"},"SOS":{"displayName":"Somalia-Schilling"},"SRD":{"displayName":"Suriname-Dollar","symbol-alt-narrow":"$"},"SRG":{"displayName":"Suriname Gulden","displayName-count-one":"Suriname-Gulden","displayName-count-other":"Suriname-Gulden"},"SSP":{"displayName":"Südsudanesisches Pfund","displayName-count-one":"Südsudanesisches Pfund","displayName-count-other":"Südsudanesische Pfund","symbol-alt-narrow":"£"},"STD":{"displayName":"São-toméischer Dobra (1977–2017)","displayName-count-one":"São-toméischer Dobra (1977–2017)","displayName-count-other":"São-toméische Dobra (1977–2017)"},"STN":{"displayName":"São-toméischer Dobra","displayName-count-one":"São-toméischer Dobra","displayName-count-other":"São-toméische Dobras","symbol-alt-narrow":"Db"},"SUR":{"displayName":"Sowjetischer Rubel","displayName-count-one":"Sowjetische Rubel","displayName-count-other":"Sowjetische Rubel"},"SVC":{"displayName":"El Salvador Colon","displayName-count-one":"El Salvador-Colon","displayName-count-other":"El Salvador-Colon"},"SYP":{"displayName":"Syrisches Pfund","displayName-count-one":"Syrisches Pfund","displayName-count-other":"Syrische Pfund","symbol-alt-narrow":"SYP"},"SZL":{"displayName":"Swasiländischer Lilangeni","displayName-count-one":"Swasiländischer Lilangeni","displayName-count-other":"Swasiländische Emalangeni"},"THB":{"displayName":"Thailändischer Baht","displayName-count-one":"Thailändischer Baht","displayName-count-other":"Thailändische Baht","symbol":"฿","symbol-alt-narrow":"฿"},"TJR":{"displayName":"Tadschikistan Rubel","displayName-count-one":"Tadschikistan-Rubel","displayName-count-other":"Tadschikistan-Rubel"},"TJS":{"displayName":"Tadschikistan-Somoni"},"TMM":{"displayName":"Turkmenistan-Manat (1993–2009)"},"TMT":{"displayName":"Turkmenistan-Manat"},"TND":{"displayName":"Tunesischer Dinar","displayName-count-one":"Tunesischer Dinar","displayName-count-other":"Tunesische Dinar"},"TOP":{"displayName":"Tongaischer Paʻanga","displayName-count-one":"Tongaischer Paʻanga","displayName-count-other":"Tongaische Paʻanga","symbol-alt-narrow":"T$"},"TPE":{"displayName":"Timor-Escudo"},"TRL":{"displayName":"Türkische Lira (1922–2005)"},"TRY":{"displayName":"Türkische Lira","symbol-alt-narrow":"₺","symbol-alt-variant":"TL"},"TTD":{"displayName":"Trinidad-und-Tobago-Dollar","symbol-alt-narrow":"$"},"TWD":{"displayName":"Neuer Taiwan-Dollar","displayName-count-one":"Neuer Taiwan-Dollar","displayName-count-other":"Neue Taiwan-Dollar","symbol":"NT$","symbol-alt-narrow":"NT$"},"TZS":{"displayName":"Tansania-Schilling"},"UAH":{"displayName":"Ukrainische Hrywnja","displayName-count-one":"Ukrainische Hrywnja","displayName-count-other":"Ukrainische Hrywen","symbol-alt-narrow":"₴"},"UAK":{"displayName":"Ukrainischer Karbovanetz","displayName-count-one":"Ukrainische Karbovanetz","displayName-count-other":"Ukrainische Karbovanetz"},"UGS":{"displayName":"Uganda-Schilling (1966–1987)"},"UGX":{"displayName":"Uganda-Schilling"},"USD":{"displayName":"US-Dollar","symbol":"$","symbol-alt-narrow":"$"},"USN":{"displayName":"US Dollar (Nächster Tag)","displayName-count-one":"US-Dollar (Nächster Tag)","displayName-count-other":"US-Dollar (Nächster Tag)"},"USS":{"displayName":"US Dollar (Gleicher Tag)","displayName-count-one":"US-Dollar (Gleicher Tag)","displayName-count-other":"US-Dollar (Gleicher Tag)"},"UYI":{"displayName":"Uruguayischer Peso (Indexierte Rechnungseinheiten)","displayName-count-one":"Uruguayischer Peso (Indexierte Rechnungseinheiten)","displayName-count-other":"Uruguayische Pesos (Indexierte Rechnungseinheiten)"},"UYP":{"displayName":"Uruguayischer Peso (1975–1993)","displayName-count-one":"Uruguayischer Peso (1975–1993)","displayName-count-other":"Uruguayische Pesos (1975–1993)"},"UYU":{"displayName":"Uruguayischer Peso","displayName-count-one":"Uruguayischer Peso","displayName-count-other":"Uruguayische Pesos","symbol-alt-narrow":"$"},"UZS":{"displayName":"Usbekistan-Sum"},"VEB":{"displayName":"Venezolanischer Bolívar (1871–2008)","displayName-count-one":"Venezolanischer Bolívar (1871–2008)","displayName-count-other":"Venezolanische Bolívares (1871–2008)"},"VEF":{"displayName":"Venezolanischer Bolívar (2008–2018)","displayName-count-one":"Venezolanischer Bolívar (2008–2018)","displayName-count-other":"Venezolanische Bolívares (2008–2018)","symbol-alt-narrow":"Bs"},"VES":{"displayName":"Venezolanischer Bolívar","displayName-count-one":"Venezolanischer Bolívar","displayName-count-other":"Venezolanische Bolívares"},"VND":{"displayName":"Vietnamesischer Dong","displayName-count-one":"Vietnamesischer Dong","displayName-count-other":"Vietnamesische Dong","symbol":"₫","symbol-alt-narrow":"₫"},"VNN":{"displayName":"Vietnamesischer Dong(1978–1985)","displayName-count-one":"Vietnamesischer Dong(1978–1985)","displayName-count-other":"Vietnamesische Dong(1978–1985)"},"VUV":{"displayName":"Vanuatu-Vatu"},"WST":{"displayName":"Samoanischer Tala","displayName-count-one":"Samoanischer Tala","displayName-count-other":"Samoanische Tala"},"XAF":{"displayName":"CFA-Franc (BEAC)","symbol":"FCFA"},"XAG":{"displayName":"Unze Silber","displayName-count-one":"Unze Silber","displayName-count-other":"Unzen Silber"},"XAU":{"displayName":"Unze Gold","displayName-count-one":"Unze Gold","displayName-count-other":"Unzen Gold"},"XBA":{"displayName":"Europäische Rechnungseinheit","displayName-count-one":"Europäische Rechnungseinheiten","displayName-count-other":"Europäische Rechnungseinheiten"},"XBB":{"displayName":"Europäische Währungseinheit (XBB)","displayName-count-one":"Europäische Währungseinheiten (XBB)","displayName-count-other":"Europäische Währungseinheiten (XBB)"},"XBC":{"displayName":"Europäische Rechnungseinheit (XBC)","displayName-count-one":"Europäische Rechnungseinheiten (XBC)","displayName-count-other":"Europäische Rechnungseinheiten (XBC)"},"XBD":{"displayName":"Europäische Rechnungseinheit (XBD)","displayName-count-one":"Europäische Rechnungseinheiten (XBD)","displayName-count-other":"Europäische Rechnungseinheiten (XBD)"},"XCD":{"displayName":"Ostkaribischer Dollar","displayName-count-one":"Ostkaribischer Dollar","displayName-count-other":"Ostkaribische Dollar","symbol":"EC$","symbol-alt-narrow":"$"},"XCG":{"symbol":"Cg."},"XDR":{"displayName":"Sonderziehungsrechte"},"XEU":{"displayName":"Europäische Währungseinheit (XEU)","displayName-count-one":"Europäische Währungseinheiten (XEU)","displayName-count-other":"Europäische Währungseinheiten (XEU)"},"XFO":{"displayName":"Französischer Gold-Franc","displayName-count-one":"Französische Gold-Franc","displayName-count-other":"Französische Gold-Franc"},"XFU":{"displayName":"Französischer UIC-Franc","displayName-count-one":"Französische UIC-Franc","displayName-count-other":"Französische UIC-Franc"},"XOF":{"displayName":"CFA-Franc (BCEAO)","displayName-count-one":"CFA-Franc (BCEAO)","displayName-count-other":"CFA-Francs (BCEAO)","symbol":"F CFA"},"XPD":{"displayName":"Unze Palladium","displayName-count-one":"Unze Palladium","displayName-count-other":"Unzen Palladium"},"XPF":{"displayName":"CFP-Franc","symbol":"CFPF"},"XPT":{"displayName":"Unze Platin","displayName-count-one":"Unze Platin","displayName-count-other":"Unzen Platin"},"XRE":{"displayName":"RINET Funds"},"XSU":{"displayName":"SUCRE"},"XTS":{"displayName":"Testwährung"},"XUA":{"displayName":"Rechnungseinheit der AfEB","displayName-count-one":"Rechnungseinheit der AfEB","displayName-count-other":"Rechnungseinheiten der AfEB"},"XXX":{"displayName":"Unbekannte Währung","displayName-count-one":"(unbekannte Währung)","displayName-count-other":"(unbekannte Währung)","symbol":"XXX"},"YDD":{"displayName":"Jemen-Dinar"},"YER":{"displayName":"Jemen-Rial"},"YUD":{"displayName":"Jugoslawischer Dinar (1966–1990)","displayName-count-one":"Jugoslawischer Dinar (1966–1990)","displayName-count-other":"Jugoslawische Dinar (1966–1990)"},"YUM":{"displayName":"Jugoslawischer Neuer Dinar (1994–2002)","displayName-count-one":"Jugoslawischer Neuer Dinar (1994–2002)","displayName-count-other":"Jugoslawische Neue Dinar (1994–2002)"},"YUN":{"displayName":"Jugoslawischer Dinar (konvertibel)","displayName-count-one":"Jugoslawische Dinar (konvertibel)","displayName-count-other":"Jugoslawische Dinar (konvertibel)"},"YUR":{"displayName":"Jugoslawischer reformierter Dinar (1992–1993)","displayName-count-one":"Jugoslawischer reformierter Dinar (1992–1993)","displayName-count-other":"Jugoslawische reformierte Dinar (1992–1993)"},"ZAL":{"displayName":"Südafrikanischer Rand (Finanz)"},"ZAR":{"displayName":"Südafrikanischer Rand","displayName-count-one":"Südafrikanischer Rand","displayName-count-other":"Südafrikanische Rand","symbol-alt-narrow":"R"},"ZMK":{"displayName":"Kwacha (1968–2012)"},"ZMW":{"displayName":"Kwacha","symbol-alt-narrow":"K"},"ZRN":{"displayName":"Zaire-Neuer Zaïre (1993–1998)","displayName-count-one":"Zaire-Neuer Zaïre (1993–1998)","displayName-count-other":"Zaire-Neue Zaïre (1993–1998)"},"ZRZ":{"displayName":"Zaire-Zaïre (1971–1993)"},"ZWD":{"displayName":"Simbabwe-Dollar (1980–2008)"},"ZWL":{"displayName":"Simbabwe-Dollar (2009)"},"ZWR":{"displayName":"Simbabwe-Dollar (2008)"}}},"dates":{"calendars":{"islamic":{"months":{"format":{"abbreviated":{"1":"Muh.","2":"Saf.","3":"Rab. I","4":"Rab. II","5":"Jum. I","6":"Jum. II","7":"Raj.","8":"Sha.","9":"Ram.","10":"Shaw.","11":"Dhuʻl-Q.","12":"Dhuʻl-H."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"Muharram","2":"Safar","3":"Rabiʻ I","4":"Rabiʻ II","5":"Dschumada I","6":"Dschumada II","7":"Radschab","8":"Shaʻban","9":"Ramadan","10":"Shawwal","11":"Dhu l-qaʿda","12":"Dhu l-Hiddscha"}},"stand-alone":{"abbreviated":{"1":"Muh.","2":"Saf.","3":"Rab. I","4":"Rab. II","5":"Jum. I","6":"Jum. II","7":"Raj.","8":"Sha.","9":"Ram.","10":"Shaw.","11":"Dhuʻl-Q.","12":"Dhuʻl-H."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"Muharram","2":"Safar","3":"Rabiʻ I","4":"Rabiʻ II","5":"Dschumada I","6":"Dschumada II","7":"Radschab","8":"Shaʻban","9":"Ramadan","10":"Shawwal","11":"Dhu l-qaʿda","12":"Dhu l-Hiddscha"}}},"days":{"format":{"abbreviated":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"narrow":{"sun":"S","mon":"M","tue":"D","wed":"M","thu":"D","fri":"F","sat":"S"},"short":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"wide":{"sun":"Sonntag","mon":"Montag","tue":"Dienstag","wed":"Mittwoch","thu":"Donnerstag","fri":"Freitag","sat":"Samstag"}},"stand-alone":{"abbreviated":{"sun":"So","mon":"Mo","tue":"Di","wed":"Mi","thu":"Do","fri":"Fr","sat":"Sa"},"narrow":{"sun":"S","mon":"M","tue":"D","wed":"M","thu":"D","fri":"F","sat":"S"},"short":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"wide":{"sun":"Sonntag","mon":"Montag","tue":"Dienstag","wed":"Mittwoch","thu":"Donnerstag","fri":"Freitag","sat":"Samstag"}}},"quarters":{"format":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1. Quartal","2":"2. Quartal","3":"3. Quartal","4":"4. Quartal"}},"stand-alone":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1. Quartal","2":"2. Quartal","3":"3. Quartal","4":"4. Quartal"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vorm.","afternoon1":"mittags","afternoon2":"nachm.","evening1":"abends","night1":"nachts"},"narrow":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vorm.","afternoon1":"mittags","afternoon2":"nachm.","evening1":"abends","night1":"nachts"},"wide":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vormittags","afternoon1":"mittags","afternoon2":"nachmittags","evening1":"abends","night1":"nachts"}},"stand-alone":{"abbreviated":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vorm.","afternoon1":"Mittag","afternoon2":"Nachm.","evening1":"Abend","night1":"Nacht"},"narrow":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vorm.","afternoon1":"Mittag","afternoon2":"Nachm.","evening1":"Abend","night1":"Nacht"},"wide":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vormittag","afternoon1":"Mittag","afternoon2":"Nachmittag","evening1":"Abend","night1":"Nacht"}}},"eras":{"eraNames":{"0":"AH"},"eraAbbr":{"0":"AH"},"eraNarrow":{"0":"AH"}},"dateFormats":{"full":"EEEE, d. MMMM y G","long":"d. MMMM y G","medium":"dd.MM.y G","short":"dd.MM.yy GGGGG"},"dateSkeletons":{"full":"GyMMMMEEEEd","long":"GyMMMMd","medium":"GyMMdd","short":"GGGGGyyMMdd"},"timeFormats":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1}, {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E, d.","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"d.M.y GGGGG","GyMMM":"MMM y G","GyMMMd":"d. MMM y G","GyMMMEd":"E, d. MMM y G","h":"h a","H":"HH 'Uhr'","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","M":"L","Md":"d.M.","MEd":"E, d.M.","MMM":"LLL","MMMd":"d. MMM","MMMEd":"E, d. MMM","MMMMd":"d. MMMM","ms":"mm:ss","y":"y G","yyyy":"y G","yyyyM":"M/y GGGGG","yyyyMd":"d.M.y GGGGG","yyyyMEd":"E, d.M.y GGGGG","yyyyMMM":"MMM y G","yyyyMMMd":"d. MMM y G","yyyyMMMEd":"E, d. MMM y G","yyyyMMMM":"MMMM y G","yyyyQQQ":"QQQ y G","yyyyQQQQ":"QQQQ y G"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d.–d."},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH 'Uhr'"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH 'Uhr' v"},"M":{"M":"M.–M."},"Md":{"d":"dd.MM. – dd.MM.","M":"dd.MM. – dd.MM."},"MEd":{"d":"E, dd.MM. – E, dd.MM.","M":"E, dd.MM. – E, dd.MM."},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d.–d. MMM","M":"d. MMM – d. MMM"},"MMMEd":{"d":"E, d. – E, d. MMM","M":"E, d. MMM – E, d. MMM"},"MMMM":{"M":"LLLL–LLLL"},"y":{"y":"y–y G"},"yM":{"M":"M/y – M/y G","y":"M/y – M/y G"},"yMd":{"d":"dd.MM.y – dd.MM.y G","M":"dd.MM.y – dd.MM.y G","y":"dd.MM.y – dd.MM.y G"},"yMEd":{"d":"E, dd.MM.y – E, dd.MM.y G","M":"E, dd.MM.y – E, dd.MM.y G","y":"E, dd.MM.y – E, dd.MM.y G"},"yMMM":{"M":"MMM–MMM y G","y":"MMM y – MMM y G"},"yMMMd":{"d":"d.–d. MMM y G","M":"d. MMM – d. MMM y G","y":"d. MMM y – d. MMM y G"},"yMMMEd":{"d":"E, d. – E, d. MMM y G","M":"E, d. MMM – E, d. MMM y G","y":"E, d. MMM y – E, d. MMM y G"},"yMMMM":{"M":"MMMM–MMMM y G","y":"MMMM y – MMMM y G"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'um' {0}","long":"{1} 'um' {0}","medium":"{1}, {0}","short":"{1}, {0}"}}},"gregorian":{"months":{"format":{"abbreviated":{"1":"Jan.","2":"Feb.","3":"März","4":"Apr.","5":"Mai","6":"Juni","7":"Juli","8":"Aug.","9":"Sept.","10":"Okt.","11":"Nov.","12":"Dez."},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"Januar","2":"Februar","3":"März","4":"April","5":"Mai","6":"Juni","7":"Juli","8":"August","9":"September","10":"Oktober","11":"November","12":"Dezember"}},"stand-alone":{"abbreviated":{"1":"Jan","2":"Feb","3":"Mär","4":"Apr","5":"Mai","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Okt","11":"Nov","12":"Dez"},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"Januar","2":"Februar","3":"März","4":"April","5":"Mai","6":"Juni","7":"Juli","8":"August","9":"September","10":"Oktober","11":"November","12":"Dezember"}}},"days":{"format":{"abbreviated":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"narrow":{"sun":"S","mon":"M","tue":"D","wed":"M","thu":"D","fri":"F","sat":"S"},"short":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"wide":{"sun":"Sonntag","mon":"Montag","tue":"Dienstag","wed":"Mittwoch","thu":"Donnerstag","fri":"Freitag","sat":"Samstag"}},"stand-alone":{"abbreviated":{"sun":"So","mon":"Mo","tue":"Di","wed":"Mi","thu":"Do","fri":"Fr","sat":"Sa"},"narrow":{"sun":"S","mon":"M","tue":"D","wed":"M","thu":"D","fri":"F","sat":"S"},"short":{"sun":"So.","mon":"Mo.","tue":"Di.","wed":"Mi.","thu":"Do.","fri":"Fr.","sat":"Sa."},"wide":{"sun":"Sonntag","mon":"Montag","tue":"Dienstag","wed":"Mittwoch","thu":"Donnerstag","fri":"Freitag","sat":"Samstag"}}},"quarters":{"format":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1. Quartal","2":"2. Quartal","3":"3. Quartal","4":"4. Quartal"}},"stand-alone":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1. Quartal","2":"2. Quartal","3":"3. Quartal","4":"4. Quartal"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vorm.","afternoon1":"mittags","afternoon2":"nachm.","evening1":"abends","night1":"nachts"},"narrow":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vorm.","afternoon1":"mittags","afternoon2":"nachm.","evening1":"abends","night1":"nachts"},"wide":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"morgens","morning2":"vormittags","afternoon1":"mittags","afternoon2":"nachmittags","evening1":"abends","night1":"nachts"}},"stand-alone":{"abbreviated":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vorm.","afternoon1":"Mittag","afternoon2":"Nachm.","evening1":"Abend","night1":"Nacht"},"narrow":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vorm.","afternoon1":"Mittag","afternoon2":"Nachm.","evening1":"Abend","night1":"Nacht"},"wide":{"midnight":"Mitternacht","am":"AM","pm":"PM","morning1":"Morgen","morning2":"Vormittag","afternoon1":"Mittag","afternoon2":"Nachmittag","evening1":"Abend","night1":"Nacht"}}},"eras":{"eraNames":{"0":"v. Chr.","1":"n. Chr.","0-alt-variant":"vor unserer Zeitrechnung","1-alt-variant":"unserer Zeitrechnung"},"eraAbbr":{"0":"v. Chr.","1":"n. Chr.","0-alt-variant":"v. u. Z.","1-alt-variant":"u. Z."},"eraNarrow":{"0":"v. Chr.","1":"n. Chr.","0-alt-variant":"v. u. Z.","1-alt-variant":"u. Z."}},"dateFormats":{"full":"EEEE, d. MMMM y","long":"d. MMMM y","medium":"dd.MM.y","short":"dd.MM.yy"},"dateSkeletons":{"full":"yMMMMEEEEd","long":"yMMMMd","medium":"yMMdd","short":"yyMMdd"},"timeFormats":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1}, {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E, d.","Ehm":"E h:mm a","EHm":"E, HH:mm","Ehms":"E, h:mm:ss a","EHms":"E, HH:mm:ss","Gy":"y G","GyMd":"dd.MM.y G","GyMMM":"MMM y G","GyMMMd":"d. MMM y G","GyMMMEd":"E, d. MMM y G","h":"h 'Uhr' a","H":"HH 'Uhr'","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"d.M.","MEd":"E, d.M.","MMd":"d.MM.","MMdd":"dd.MM.","MMM":"LLL","MMMd":"d. MMM","MMMEd":"E, d. MMM","MMMMd":"d. MMMM","MMMMEd":"E, d. MMMM","MMMMW-count-one":"'Woche' W 'im' MMMM","MMMMW-count-other":"'Woche' W 'im' MMMM","ms":"mm:ss","y":"y","yM":"M/y","yMd":"d.M.y","yMEd":"E, d.M.y","yMM":"MM.y","yMMdd":"dd.MM.y","yMMM":"MMM y","yMMMd":"d. MMM y","yMMMEd":"E, d. MMM y","yMMMM":"MMMM y","yQQQ":"QQQ y","yQQQQ":"QQQQ y","yw-count-one":"'Woche' w 'des' 'Jahres' Y","yw-count-other":"'Woche' w 'des' 'Jahres' Y"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h 'Uhr' B – h 'Uhr' B","h":"h–h 'Uhr' B"},"Bhm":{"B":"h:mm 'Uhr' B – h:mm 'Uhr' B","h":"h:mm – h:mm 'Uhr' B","m":"h:mm – h:mm 'Uhr' B"},"d":{"d":"d.–d."},"Gy":{"G":"y G – y G","y":"y–y G"},"GyM":{"G":"MM/y G – MM/y G","M":"MM/y – MM/y G","y":"MM/y – MM/y G"},"GyMd":{"d":"dd.–dd.MM.y G","G":"dd.MM.y G – dd.MM.y G","M":"dd.MM. – dd.MM.y G","y":"dd.MM.y – dd.MM.y G"},"GyMEd":{"d":"E, dd.MM.y – E, dd.MM.y G","G":"E, dd.MM.y G – E, dd.MM.y G","M":"E, dd.MM. – E, dd.MM.y G","y":"E, dd.MM.y – E, dd.MM.y G"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM–MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"d.–d. MMM y G","G":"d. MMM y G – d. MMM y G","M":"d. MMM – d. MMM y G","y":"d. MMM y – d. MMM y G"},"GyMMMEd":{"d":"E, d. – E, d. MMM y G","G":"E, d. MMM y G – E E, d. MMM y G","M":"E, d. MMM – E, d. MMM y G","y":"E, d. MMM y – E, d. MMM y G"},"h":{"a":"h 'Uhr' a – h 'Uhr' a","h":"h – h 'Uhr' a"},"H":{"H":"HH–HH 'Uhr'"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm 'Uhr'","m":"HH:mm–HH:mm 'Uhr'"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm 'Uhr' v","m":"HH:mm–HH:mm 'Uhr' v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH 'Uhr' v"},"M":{"M":"MM–MM"},"Md":{"d":"dd.–dd.MM.","M":"dd.MM. – dd.MM."},"MEd":{"d":"E, dd. – E, dd.MM.","M":"E, dd.MM. – E, dd.MM."},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d.–d. MMM","M":"d. MMM – d. MMM"},"MMMEd":{"d":"E, d. – E, d. MMM","M":"E, d. MMM – E, d. MMM"},"MMMM":{"M":"LLLL–LLLL"},"y":{"y":"y–y"},"yM":{"M":"M/y – M/y","y":"M/y – M/y"},"yMd":{"d":"dd.–dd.MM.y","M":"dd.MM. – dd.MM.y","y":"dd.MM.y – dd.MM.y"},"yMEd":{"d":"E, dd. – E, dd.MM.y","M":"E, dd.MM. – E, dd.MM.y","y":"E, dd.MM.y – E, dd.MM.y"},"yMMM":{"M":"MMM–MMM y","y":"MMM y – MMM y"},"yMMMd":{"d":"d.–d. MMM y","M":"d. MMM – d. MMM y","y":"d. MMM y – d. MMM y"},"yMMMEd":{"d":"E, d. – E, d. MMM y","M":"E, d. MMM – E, d. MMM y","y":"E, d. MMM y – E, d. MMM y"},"yMMMM":{"M":"MMMM–MMMM y","y":"MMMM y – MMMM y"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'um' {0}","long":"{1} 'um' {0}","medium":"{1}, {0}","short":"{1}, {0}"}}}},"timeZoneNames":{"hourFormat":"+HH:mm;-HH:mm","gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","regionFormat":"{0} (Ortszeit)","regionFormat-type-daylight":"{0} (Sommerzeit)","regionFormat-type-standard":"{0} (Normalzeit)","fallbackFormat":"{1} ({0})","zone":{"America":{"Asuncion":{"exemplarCity":"Asunción"},"Bahia_Banderas":{"exemplarCity":"Bahia Banderas"},"Bogota":{"exemplarCity":"Bogotá"},"Cancun":{"exemplarCity":"Cancún"},"Cayman":{"exemplarCity":"Kaimaninseln"},"Ciudad_Juarez":{"exemplarCity":"Ciudad Juárez"},"Coral_Harbour":{"exemplarCity":"Atikokan"},"Cordoba":{"exemplarCity":"Córdoba"},"Curacao":{"exemplarCity":"Curaçao"},"Godthab":{"exemplarCity":"Nuuk"},"Havana":{"exemplarCity":"Havanna"},"Indiana":{"Vincennes":{"exemplarCity":"Vincennes, Indiana"},"Petersburg":{"exemplarCity":"Petersburg, Indiana"},"Tell_City":{"exemplarCity":"Tell City, Indiana"},"Knox":{"exemplarCity":"Knox, Indiana"},"Winamac":{"exemplarCity":"Winamac, Indiana"},"Marengo":{"exemplarCity":"Marengo, Indiana"},"Vevay":{"exemplarCity":"Vevay, Indiana"}},"Jamaica":{"exemplarCity":"Jamaika"},"Kentucky":{"Monticello":{"exemplarCity":"Monticello, Kentucky"}},"Lower_Princes":{"exemplarCity":"Lower Prince’s Quarter"},"Merida":{"exemplarCity":"Merida"},"Mexico_City":{"exemplarCity":"Mexiko-Stadt"},"North_Dakota":{"Beulah":{"exemplarCity":"Beulah, North Dakota"},"New_Salem":{"exemplarCity":"New Salem, North Dakota"},"Center":{"exemplarCity":"Center, North Dakota"}},"Sao_Paulo":{"exemplarCity":"São Paulo"},"Scoresbysund":{"exemplarCity":"Ittoqqortoormiit"},"St_Barthelemy":{"exemplarCity":"Saint-Barthélemy"},"St_Johns":{"exemplarCity":"St. John’s"},"St_Kitts":{"exemplarCity":"St. Kitts"},"St_Lucia":{"exemplarCity":"St. Lucia"},"St_Thomas":{"exemplarCity":"St. Thomas"},"St_Vincent":{"exemplarCity":"St. Vincent"}},"Atlantic":{"Azores":{"exemplarCity":"Azoren"},"Canary":{"exemplarCity":"Kanaren"},"Cape_Verde":{"exemplarCity":"Cabo Verde"},"Faeroe":{"exemplarCity":"Färöer"},"Reykjavik":{"exemplarCity":"Reyk­ja­vík"},"South_Georgia":{"exemplarCity":"Südgeorgien"},"St_Helena":{"exemplarCity":"St. Helena"}},"Europe":{"Astrakhan":{"exemplarCity":"Astrachan"},"Athens":{"exemplarCity":"Athen"},"Belgrade":{"exemplarCity":"Belgrad"},"Brussels":{"exemplarCity":"Brüssel"},"Bucharest":{"exemplarCity":"Bukarest"},"Busingen":{"exemplarCity":"Büsingen"},"Copenhagen":{"exemplarCity":"Kopenhagen"},"Dublin":{"long":{"daylight":"Irische Sommerzeit"}},"Kiev":{"exemplarCity":"Kiew"},"Kirov":{"exemplarCity":"Kirow"},"Lisbon":{"exemplarCity":"Lissabon"},"London":{"long":{"daylight":"Britische Sommerzeit"}},"Luxembourg":{"exemplarCity":"Luxemburg"},"Moscow":{"exemplarCity":"Moskau"},"Prague":{"exemplarCity":"Prag"},"Rome":{"exemplarCity":"Rom"},"Saratov":{"exemplarCity":"Saratow"},"Tirane":{"exemplarCity":"Tirana"},"Ulyanovsk":{"exemplarCity":"Uljanowsk"},"Vatican":{"exemplarCity":"Vatikan"},"Vienna":{"exemplarCity":"Wien"},"Volgograd":{"exemplarCity":"Wolgograd"},"Warsaw":{"exemplarCity":"Warschau"},"Zurich":{"exemplarCity":"Zürich"}},"Africa":{"Addis_Ababa":{"exemplarCity":"Addis Abeba"},"Algiers":{"exemplarCity":"Algier"},"Asmera":{"exemplarCity":"Asmara"},"Cairo":{"exemplarCity":"Kairo"},"Dar_es_Salaam":{"exemplarCity":"Daressalam"},"Djibouti":{"exemplarCity":"Dschibuti"},"El_Aaiun":{"exemplarCity":"El Aaiún"},"Khartoum":{"exemplarCity":"Khartum"},"Lome":{"exemplarCity":"Lomé"},"Mogadishu":{"exemplarCity":"Mogadischu"},"Ndjamena":{"exemplarCity":"N’Djamena"},"Porto-Novo":{"exemplarCity":"Porto Novo"},"Sao_Tome":{"exemplarCity":"São Tomé"},"Tripoli":{"exemplarCity":"Tripolis"}},"Asia":{"Aqtobe":{"exemplarCity":"Aktobe"},"Ashgabat":{"exemplarCity":"Aşgabat"},"Baghdad":{"exemplarCity":"Bagdad"},"Bishkek":{"exemplarCity":"Bischkek"},"Brunei":{"exemplarCity":"Brunei Darussalam"},"Calcutta":{"exemplarCity":"Kalkutta"},"Chita":{"exemplarCity":"Tschita"},"Choibalsan":{"exemplarCity":"Tschoibalsan"},"Damascus":{"exemplarCity":"Damaskus"},"Dushanbe":{"exemplarCity":"Duschanbe"},"Hong_Kong":{"exemplarCity":"Hongkong"},"Hovd":{"exemplarCity":"Chowd"},"Kamchatka":{"exemplarCity":"Kamtschatka"},"Karachi":{"exemplarCity":"Karatschi"},"Katmandu":{"exemplarCity":"Kathmandu"},"Khandyga":{"exemplarCity":"Chandyga"},"Krasnoyarsk":{"exemplarCity":"Krasnojarsk"},"Macau":{"exemplarCity":"Macau"},"Muscat":{"exemplarCity":"Maskat"},"Nicosia":{"exemplarCity":"Nikosia"},"Novokuznetsk":{"exemplarCity":"Nowokuznetsk"},"Novosibirsk":{"exemplarCity":"Nowosibirsk"},"Pyongyang":{"exemplarCity":"Pjöngjang"},"Qatar":{"exemplarCity":"Katar"},"Qostanay":{"exemplarCity":"Qostanai"},"Qyzylorda":{"exemplarCity":"Qysylorda"},"Rangoon":{"exemplarCity":"Rangun"},"Riyadh":{"exemplarCity":"Riad"},"Saigon":{"exemplarCity":"Ho-Chi-Minh-Stadt"},"Sakhalin":{"exemplarCity":"Sachalin"},"Singapore":{"exemplarCity":"Singapur"},"Taipei":{"exemplarCity":"Taipeh"},"Tashkent":{"exemplarCity":"Taschkent"},"Tbilisi":{"exemplarCity":"Tiflis"},"Tehran":{"exemplarCity":"Teheran"},"Tokyo":{"exemplarCity":"Tokio"},"Urumqi":{"exemplarCity":"Ürümqi"},"Vladivostok":{"exemplarCity":"Wladiwostok"},"Yakutsk":{"exemplarCity":"Jakutsk"},"Yekaterinburg":{"exemplarCity":"Jekaterinburg"},"Yerevan":{"exemplarCity":"Eriwan"}},"Indian":{"Christmas":{"exemplarCity":"Weihnachtsinsel"},"Comoro":{"exemplarCity":"Komoren"},"Maldives":{"exemplarCity":"Malediven"},"Reunion":{"exemplarCity":"Réunion"}},"Pacific":{"Easter":{"exemplarCity":"Osterinsel"},"Enderbury":{"exemplarCity":"Enderbury"},"Fiji":{"exemplarCity":"Fidschi"},"Honolulu":{"exemplarCity":"Honolulu"},"Ponape":{"exemplarCity":"Pohnpei"},"Truk":{"exemplarCity":"Chuuk"}},"Antarctica":{"DumontDUrville":{"exemplarCity":"Dumont d’Urville"},"Vostok":{"exemplarCity":"Wostok"}},"Etc":{"UTC":{"long":{"standard":"Koordinierte Weltzeit"},"short":{"standard":"UTC"}},"Unknown":{"exemplarCity":"Unbekannt"}}},"metazone":{"Acre":{"long":{"generic":"Acre-Zeit","standard":"Acre-Normalzeit","daylight":"Acre-Sommerzeit"}},"Afghanistan":{"long":{"standard":"Afghanistan-Zeit"}},"Africa_Central":{"long":{"standard":"Zentralafrikanische Zeit"}},"Africa_Eastern":{"long":{"standard":"Ostafrikanische Zeit"}},"Africa_Southern":{"long":{"standard":"Südafrikanische Zeit"}},"Africa_Western":{"long":{"generic":"Westafrikanische Zeit","standard":"Westafrikanische Normalzeit","daylight":"Westafrikanische Sommerzeit"}},"Alaska":{"long":{"generic":"Alaska-Zeit","standard":"Alaska-Normalzeit","daylight":"Alaska-Sommerzeit"}},"Almaty":{"long":{"generic":"Almaty-Zeit","standard":"Almaty-Normalzeit","daylight":"Almaty-Sommerzeit"}},"Amazon":{"long":{"generic":"Amazonas-Zeit","standard":"Amazonas-Normalzeit","daylight":"Amazonas-Sommerzeit"}},"America_Central":{"long":{"generic":"Nordamerikanische Zentralzeit","standard":"Nordamerikanische Zentral-Normalzeit","daylight":"Nordamerikanische Zentral-Sommerzeit"}},"America_Eastern":{"long":{"generic":"Nordamerikanische Ostküstenzeit","standard":"Nordamerikanische Ostküsten-Normalzeit","daylight":"Nordamerikanische Ostküsten-Sommerzeit"}},"America_Mountain":{"long":{"generic":"Rocky-Mountain-Zeit","standard":"Rocky-Mountain-Normalzeit","daylight":"Rocky-Mountain-Sommerzeit"}},"America_Pacific":{"long":{"generic":"Nordamerikanische Westküstenzeit","standard":"Nordamerikanische Westküsten-Normalzeit","daylight":"Nordamerikanische Westküsten-Sommerzeit"}},"Anadyr":{"long":{"generic":"Anadyr Zeit","standard":"Anadyr Normalzeit","daylight":"Anadyr Sommerzeit"}},"Apia":{"long":{"generic":"Apia-Zeit","standard":"Apia-Normalzeit","daylight":"Apia-Sommerzeit"}},"Aqtau":{"long":{"generic":"Aqtau-Zeit","standard":"Aqtau-Normalzeit","daylight":"Aqtau-Sommerzeit"}},"Aqtobe":{"long":{"generic":"Aqtöbe-Zeit","standard":"Aqtöbe-Normalzeit","daylight":"Aqtöbe-Sommerzeit"}},"Arabian":{"long":{"generic":"Arabische Zeit","standard":"Arabische Normalzeit","daylight":"Arabische Sommerzeit"}},"Argentina":{"long":{"generic":"Argentinische Zeit","standard":"Argentinische Normalzeit","daylight":"Argentinische Sommerzeit"}},"Argentina_Western":{"long":{"generic":"Westargentinische Zeit","standard":"Westargentinische Normalzeit","daylight":"Westargentinische Sommerzeit"}},"Armenia":{"long":{"generic":"Armenische Zeit","standard":"Armenische Normalzeit","daylight":"Armenische Sommerzeit"}},"Atlantic":{"long":{"generic":"Atlantik-Zeit","standard":"Atlantik-Normalzeit","daylight":"Atlantik-Sommerzeit"}},"Australia_Central":{"long":{"generic":"Zentralaustralische Zeit","standard":"Zentralaustralische Normalzeit","daylight":"Zentralaustralische Sommerzeit"}},"Australia_CentralWestern":{"long":{"generic":"Zentral-/Westaustralische Zeit","standard":"Zentral-/Westaustralische Normalzeit","daylight":"Zentral-/Westaustralische Sommerzeit"}},"Australia_Eastern":{"long":{"generic":"Ostaustralische Zeit","standard":"Ostaustralische Normalzeit","daylight":"Ostaustralische Sommerzeit"}},"Australia_Western":{"long":{"generic":"Westaustralische Zeit","standard":"Westaustralische Normalzeit","daylight":"Westaustralische Sommerzeit"}},"Azerbaijan":{"long":{"generic":"Aserbaidschanische Zeit","standard":"Aserbeidschanische Normalzeit","daylight":"Aserbaidschanische Sommerzeit"}},"Azores":{"long":{"generic":"Azoren-Zeit","standard":"Azoren-Normalzeit","daylight":"Azoren-Sommerzeit"}},"Bangladesh":{"long":{"generic":"Bangladesch-Zeit","standard":"Bangladesch-Normalzeit","daylight":"Bangladesch-Sommerzeit"}},"Bhutan":{"long":{"standard":"Bhutan-Zeit"}},"Bolivia":{"long":{"standard":"Bolivianische Zeit"}},"Brasilia":{"long":{"generic":"Brasília-Zeit","standard":"Brasília-Normalzeit","daylight":"Brasília-Sommerzeit"}},"Brunei":{"long":{"standard":"Brunei-Darussalam-Zeit"}},"Cape_Verde":{"long":{"generic":"Cabo-Verde-Zeit","standard":"Cabo-Verde-Normalzeit","daylight":"Cabo-Verde-Sommerzeit"}},"Casey":{"long":{"standard":"Casey-Zeit"}},"Chamorro":{"long":{"standard":"Chamorro-Zeit"}},"Chatham":{"long":{"generic":"Chatham-Zeit","standard":"Chatham-Normalzeit","daylight":"Chatham-Sommerzeit"}},"Chile":{"long":{"generic":"Chilenische Zeit","standard":"Chilenische Normalzeit","daylight":"Chilenische Sommerzeit"}},"China":{"long":{"generic":"Chinesische Zeit","standard":"Chinesische Normalzeit","daylight":"Chinesische Sommerzeit"}},"Choibalsan":{"long":{"generic":"Tschoibalsan-Zeit","standard":"Tschoibalsan-Normalzeit","daylight":"Tschoibalsan-Sommerzeit"}},"Christmas":{"long":{"standard":"Weihnachtsinsel-Zeit"}},"Cocos":{"long":{"standard":"Kokosinseln-Zeit"}},"Colombia":{"long":{"generic":"Kolumbianische Zeit","standard":"Kolumbianische Normalzeit","daylight":"Kolumbianische Sommerzeit"}},"Cook":{"long":{"generic":"Cookinseln-Zeit","standard":"Cookinseln-Normalzeit","daylight":"Cookinseln-Sommerzeit"}},"Cuba":{"long":{"generic":"Kubanische Zeit","standard":"Kubanische Normalzeit","daylight":"Kubanische Sommerzeit"}},"Davis":{"long":{"standard":"Davis-Zeit"}},"DumontDUrville":{"long":{"standard":"Dumont-d’Urville-Zeit"}},"East_Timor":{"long":{"standard":"Osttimor-Zeit"}},"Easter":{"long":{"generic":"Osterinsel-Zeit","standard":"Osterinsel-Normalzeit","daylight":"Osterinsel-Sommerzeit"}},"Ecuador":{"long":{"standard":"Ecuadorianische Zeit"}},"Europe_Central":{"long":{"generic":"Mitteleuropäische Zeit","standard":"Mitteleuropäische Normalzeit","daylight":"Mitteleuropäische Sommerzeit"},"short":{"generic":"MEZ","standard":"MEZ","daylight":"MESZ"}},"Europe_Eastern":{"long":{"generic":"Osteuropäische Zeit","standard":"Osteuropäische Normalzeit","daylight":"Osteuropäische Sommerzeit"},"short":{"generic":"OEZ","standard":"OEZ","daylight":"OESZ"}},"Europe_Further_Eastern":{"long":{"standard":"Kaliningrader Zeit"}},"Europe_Western":{"long":{"generic":"Westeuropäische Zeit","standard":"Westeuropäische Normalzeit","daylight":"Westeuropäische Sommerzeit"},"short":{"generic":"WEZ","standard":"WEZ","daylight":"WESZ"}},"Falkland":{"long":{"generic":"Falklandinseln-Zeit","standard":"Falklandinseln-Normalzeit","daylight":"Falklandinseln-Sommerzeit"}},"Fiji":{"long":{"generic":"Fidschi-Zeit","standard":"Fidschi-Normalzeit","daylight":"Fidschi-Sommerzeit"}},"French_Guiana":{"long":{"standard":"Französisch-Guayana-Zeit"}},"French_Southern":{"long":{"standard":"Französische-Süd-und-Antarktisgebiete-Zeit"}},"Galapagos":{"long":{"standard":"Galapagos-Zeit"}},"Gambier":{"long":{"standard":"Gambier-Zeit"}},"Georgia":{"long":{"generic":"Georgische Zeit","standard":"Georgische Normalzeit","daylight":"Georgische Sommerzeit"}},"Gilbert_Islands":{"long":{"standard":"Gilbert-Inseln-Zeit"}},"GMT":{"long":{"standard":"Mittlere Greenwich-Zeit"}},"Greenland_Eastern":{"long":{"generic":"Ostgrönland-Zeit","standard":"Ostgrönland-Normalzeit","daylight":"Ostgrönland-Sommerzeit"}},"Greenland_Western":{"long":{"generic":"Westgrönland-Zeit","standard":"Westgrönland-Normalzeit","daylight":"Westgrönland-Sommerzeit"}},"Guam":{"long":{"standard":"Guam-Zeit"}},"Gulf":{"long":{"standard":"Golf-Zeit"}},"Guyana":{"long":{"standard":"Guyana-Zeit"}},"Hawaii_Aleutian":{"long":{"generic":"Hawaii-Aleuten-Zeit","standard":"Hawaii-Aleuten-Normalzeit","daylight":"Hawaii-Aleuten-Sommerzeit"}},"Hong_Kong":{"long":{"generic":"Hongkong-Zeit","standard":"Hongkong-Normalzeit","daylight":"Hongkong-Sommerzeit"}},"Hovd":{"long":{"generic":"Chowd-Zeit","standard":"Chowd-Normalzeit","daylight":"Chowd-Sommerzeit"}},"India":{"long":{"standard":"Indische Normalzeit"}},"Indian_Ocean":{"long":{"standard":"Indischer-Ozean-Zeit"}},"Indochina":{"long":{"standard":"Indochina-Zeit"}},"Indonesia_Central":{"long":{"standard":"Zentralindonesische Zeit"}},"Indonesia_Eastern":{"long":{"standard":"Ostindonesische Zeit"}},"Indonesia_Western":{"long":{"standard":"Westindonesische Zeit"}},"Iran":{"long":{"generic":"Iranische Zeit","standard":"Iranische Normalzeit","daylight":"Iranische Sommerzeit"}},"Irkutsk":{"long":{"generic":"Irkutsker Zeit","standard":"Irkutsker Normalzeit","daylight":"Irkutsker Sommerzeit"}},"Israel":{"long":{"generic":"Israelische Zeit","standard":"Israelische Normalzeit","daylight":"Israelische Sommerzeit"}},"Japan":{"long":{"generic":"Japanische Zeit","standard":"Japanische Normalzeit","daylight":"Japanische Sommerzeit"}},"Kamchatka":{"long":{"generic":"Kamtschatka-Zeit","standard":"Kamtschatka-Normalzeit","daylight":"Kamtschatka-Sommerzeit"}},"Kazakhstan_Eastern":{"long":{"standard":"Ostkasachische Zeit"}},"Kazakhstan_Western":{"long":{"standard":"Westkasachische Zeit"}},"Korea":{"long":{"generic":"Koreanische Zeit","standard":"Koreanische Normalzeit","daylight":"Koreanische Sommerzeit"}},"Kosrae":{"long":{"standard":"Kosrae-Zeit"}},"Krasnoyarsk":{"long":{"generic":"Krasnojarsker Zeit","standard":"Krasnojarsker Normalzeit","daylight":"Krasnojarsker Sommerzeit"}},"Kyrgystan":{"long":{"standard":"Kirgisistan-Zeit"}},"Lanka":{"long":{"standard":"Sri-Lanka-Zeit"}},"Line_Islands":{"long":{"standard":"Linieninseln-Zeit"}},"Lord_Howe":{"long":{"generic":"Lord-Howe-Zeit","standard":"Lord-Howe-Normalzeit","daylight":"Lord-Howe-Sommerzeit"}},"Macau":{"long":{"generic":"Macau-Zeit","standard":"Macau-Normalzeit","daylight":"Macau-Sommerzeit"}},"Magadan":{"long":{"generic":"Magadan-Zeit","standard":"Magadan-Normalzeit","daylight":"Magadan-Sommerzeit"}},"Malaysia":{"long":{"standard":"Malaysische Zeit"}},"Maldives":{"long":{"standard":"Malediven-Zeit"}},"Marquesas":{"long":{"standard":"Marquesas-Zeit"}},"Marshall_Islands":{"long":{"standard":"Marshallinseln-Zeit"}},"Mauritius":{"long":{"generic":"Mauritius-Zeit","standard":"Mauritius-Normalzeit","daylight":"Mauritius-Sommerzeit"}},"Mawson":{"long":{"standard":"Mawson-Zeit"}},"Mexico_Pacific":{"long":{"generic":"Mexikanische Pazifikzeit","standard":"Mexikanische Pazifik-Normalzeit","daylight":"Mexikanische Pazifik-Sommerzeit"}},"Mongolia":{"long":{"generic":"Ulaanbaatar-Zeit","standard":"Ulaanbaatar-Normalzeit","daylight":"Ulaanbaatar-Sommerzeit"}},"Moscow":{"long":{"generic":"Moskauer Zeit","standard":"Moskauer Normalzeit","daylight":"Moskauer Sommerzeit"}},"Myanmar":{"long":{"standard":"Myanmar-Zeit"}},"Nauru":{"long":{"standard":"Nauru-Zeit"}},"Nepal":{"long":{"standard":"Nepalesische Zeit"}},"New_Caledonia":{"long":{"generic":"Neukaledonische Zeit","standard":"Neukaledonische Normalzeit","daylight":"Neukaledonische Sommerzeit"}},"New_Zealand":{"long":{"generic":"Neuseeland-Zeit","standard":"Neuseeland-Normalzeit","daylight":"Neuseeland-Sommerzeit"}},"Newfoundland":{"long":{"generic":"Neufundland-Zeit","standard":"Neufundland-Normalzeit","daylight":"Neufundland-Sommerzeit"}},"Niue":{"long":{"standard":"Niue-Zeit"}},"Norfolk":{"long":{"generic":"Norfolkinsel-Zeit","standard":"Norfolkinsel-Normalzeit","daylight":"Norfolkinsel-Sommerzeit"}},"Noronha":{"long":{"generic":"Fernando-de-Noronha-Zeit","standard":"Fernando-de-Noronha-Normalzeit","daylight":"Fernando-de-Noronha-Sommerzeit"}},"North_Mariana":{"long":{"standard":"Nördliche-Marianen-Zeit"}},"Novosibirsk":{"long":{"generic":"Nowosibirsker Zeit","standard":"Nowosibirsker Normalzeit","daylight":"Nowosibirsker Sommerzeit"}},"Omsk":{"long":{"generic":"Omsker Zeit","standard":"Omsker Normalzeit","daylight":"Omsker Sommerzeit"}},"Pakistan":{"long":{"generic":"Pakistanische Zeit","standard":"Pakistanische Normalzeit","daylight":"Pakistanische Sommerzeit"}},"Palau":{"long":{"standard":"Palau-Zeit"}},"Papua_New_Guinea":{"long":{"standard":"Papua-Neuguinea-Zeit"}},"Paraguay":{"long":{"generic":"Paraguayische Zeit","standard":"Paraguayische Normalzeit","daylight":"Paraguayische Sommerzeit"}},"Peru":{"long":{"generic":"Peruanische Zeit","standard":"Peruanische Normalzeit","daylight":"Peruanische Sommerzeit"}},"Philippines":{"long":{"generic":"Philippinische Zeit","standard":"Philippinische Normalzeit","daylight":"Philippinische Sommerzeit"}},"Phoenix_Islands":{"long":{"standard":"Phoenixinseln-Zeit"}},"Pierre_Miquelon":{"long":{"generic":"St.-Pierre-und-Miquelon-Zeit","standard":"St.-Pierre-und-Miquelon-Normalzeit","daylight":"St.-Pierre-und-Miquelon-Sommerzeit"}},"Pitcairn":{"long":{"standard":"Pitcairninseln-Zeit"}},"Ponape":{"long":{"standard":"Ponape-Zeit"}},"Pyongyang":{"long":{"standard":"Pjöngjang-Zeit"}},"Qyzylorda":{"long":{"generic":"Quysylorda-Zeit","standard":"Quysylorda-Normalzeit","daylight":"Qysylorda-Sommerzeit"}},"Reunion":{"long":{"standard":"Réunion-Zeit"}},"Rothera":{"long":{"standard":"Rothera-Zeit"}},"Sakhalin":{"long":{"generic":"Sachalin-Zeit","standard":"Sachalin-Normalzeit","daylight":"Sachalin-Sommerzeit"}},"Samara":{"long":{"generic":"Samara-Zeit","standard":"Samara-Normalzeit","daylight":"Samara-Sommerzeit"}},"Samoa":{"long":{"generic":"Samoa-Zeit","standard":"Samoa-Normalzeit","daylight":"Samoa-Sommerzeit"}},"Seychelles":{"long":{"standard":"Seychellen-Zeit"}},"Singapore":{"long":{"standard":"Singapurische Normalzeit"}},"Solomon":{"long":{"standard":"Salomonen-Zeit"}},"South_Georgia":{"long":{"standard":"Südgeorgische Zeit"}},"Suriname":{"long":{"standard":"Suriname-Zeit"}},"Syowa":{"long":{"standard":"Syowa-Zeit"}},"Tahiti":{"long":{"standard":"Tahiti-Zeit"}},"Taipei":{"long":{"generic":"Taipeh-Zeit","standard":"Taipeh-Normalzeit","daylight":"Taipeh-Sommerzeit"}},"Tajikistan":{"long":{"standard":"Tadschikistan-Zeit"}},"Tokelau":{"long":{"standard":"Tokelau-Zeit"}},"Tonga":{"long":{"generic":"Tongaische Zeit","standard":"Tongaische Normalzeit","daylight":"Tongaische Sommerzeit"}},"Truk":{"long":{"standard":"Chuuk-Zeit"}},"Turkmenistan":{"long":{"generic":"Turkmenistan-Zeit","standard":"Turkmenistan-Normalzeit","daylight":"Turkmenistan-Sommerzeit"}},"Tuvalu":{"long":{"standard":"Tuvalu-Zeit"}},"Uruguay":{"long":{"generic":"Uruguayische Zeit","standard":"Uruguayische Normalzeit","daylight":"Uruguayische Sommerzeit"}},"Uzbekistan":{"long":{"generic":"Usbekistan-Zeit","standard":"Usbekistan-Normalzeit","daylight":"Usbekistan-Sommerzeit"}},"Vanuatu":{"long":{"generic":"Vanuatu-Zeit","standard":"Vanuatu-Normalzeit","daylight":"Vanuatu-Sommerzeit"}},"Venezuela":{"long":{"standard":"Venezuela-Zeit"}},"Vladivostok":{"long":{"generic":"Wladiwostoker Zeit","standard":"Wladiwostoker Normalzeit","daylight":"Wladiwostoker Sommerzeit"}},"Volgograd":{"long":{"generic":"Wolgograder Zeit","standard":"Wolgograder Normalzeit","daylight":"Wolgograder Sommerzeit"}},"Vostok":{"long":{"standard":"Wostok-Zeit"}},"Wake":{"long":{"standard":"Wake-Insel-Zeit"}},"Wallis":{"long":{"standard":"Wallis-und-Futuna-Zeit"}},"Yakutsk":{"long":{"generic":"Jakutsker Zeit","standard":"Jakutsker Normalzeit","daylight":"Jakutsker Sommerzeit"}},"Yekaterinburg":{"long":{"generic":"Jekaterinburger Zeit","standard":"Jekaterinburger Normalzeit","daylight":"Jekaterinburger Sommerzeit"}},"Yukon":{"long":{"standard":"Yukon-Zeit"}}}}}}}`),hu={main:bl},pu=Object.freeze(Object.defineProperty({__proto__:null,default:hu,main:bl},Symbol.toStringTag,{value:"Module"})),Cl=JSON.parse(`{"fr-CH":{"numbers":{"defaultNumberingSystem":"latn","otherNumberingSystems":{"native":"latn"},"minimumGroupingDigits":"1","symbols-numberSystem-latn":{"decimal":",","group":" ","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"≃","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","currencyDecimal":".","timeSeparator":":"},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-1":"mille","1000-count-one":"0 millier","1000-count-other":"0 mille","10000-count-one":"00 mille","10000-count-other":"00 mille","100000-count-one":"000 mille","100000-count-other":"000 mille","1000000-count-one":"0 million","1000000-count-other":"0 millions","10000000-count-one":"00 million","10000000-count-other":"00 millions","100000000-count-one":"000 million","100000000-count-other":"000 millions","1000000000-count-one":"0 milliard","1000000000-count-other":"0 milliards","10000000000-count-one":"00 milliard","10000000000-count-other":"00 milliards","100000000000-count-one":"000 milliard","100000000000-count-other":"000 milliards","1000000000000-count-one":"0 billion","1000000000000-count-other":"0 billions","10000000000000-count-one":"00 billion","10000000000000-count-other":"00 billions","100000000000000-count-one":"000 billion","100000000000000-count-other":"000 billions"}},"short":{"decimalFormat":{"1000-count-one":"0 k","1000-count-other":"0 k","10000-count-one":"00 k","10000-count-other":"00 k","100000-count-one":"000 k","100000-count-other":"000 k","1000000-count-one":"0 M","1000000-count-other":"0 M","10000000-count-one":"00 M","10000000-count-other":"00 M","100000000-count-one":"000 M","100000000-count-other":"000 M","1000000000-count-one":"0 Md","1000000000-count-other":"0 Md","10000000000-count-one":"00 Md","10000000000-count-other":"00 Md","100000000000-count-one":"000 Md","100000000000-count-other":"000 Md","1000000000000-count-one":"0 Bn","1000000000000-count-other":"0 Bn","10000000000000-count-one":"00 Bn","10000000000000-count-other":"00 Bn","100000000000000-count-one":"000 Bn","100000000000000-count-other":"000 Bn"}}},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-latn":{"standard":"#,##0%"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"#,##0.00 ¤","standard-noCurrency":"#,##0.00","accounting":"#,##0.00 ¤;(#,##0.00 ¤)","accounting-noCurrency":"#,##0.00;(#,##0.00)","short":{"standard":{"1000-count-one":"0 k ¤","1000-count-other":"0 k ¤","10000-count-one":"00 k ¤","10000-count-other":"00 k ¤","100000-count-one":"000 k ¤","100000-count-other":"000 k ¤","1000000-count-one":"0 M ¤","1000000-count-other":"0 M ¤","10000000-count-one":"00 M ¤","10000000-count-other":"00 M ¤","100000000-count-one":"000 M ¤","100000000-count-other":"000 M ¤","1000000000-count-one":"0 Md ¤","1000000000-count-other":"0 Md ¤","10000000000-count-one":"00 Md ¤","10000000000-count-other":"00 Md ¤","100000000000-count-one":"000 Md ¤","100000000000-count-other":"000 Md ¤","1000000000000-count-one":"0 Bn ¤","1000000000000-count-other":"0 Bn ¤","10000000000000-count-one":"00 Bn ¤","10000000000000-count-other":"00 Bn ¤","100000000000000-count-one":"000 Bn ¤","100000000000000-count-other":"000 Bn ¤"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"miscPatterns-numberSystem-latn":{"approximately":"≈{0}","atLeast":"≥{0}","atMost":"≤{0}","range":"{0}–{1}"},"minimalPairs":{"pluralMinimalPairs-count-one":"{0} jour","pluralMinimalPairs-count-many":"{0} de jours","pluralMinimalPairs-count-other":"{0} jours","one":"Prenez la {0}re à droite.","other":"Prenez la {0}e à droite.","feminine":"La {0} est","masculine":"Le {0} est"},"currencies":{"ADP":{"displayName":"peseta andorrane","displayName-count-one":"peseta andorrane","displayName-count-other":"pesetas andorranes"},"AED":{"displayName":"dirham des Émirats arabes unis","displayName-count-one":"dirham des Émirats arabes unis","displayName-count-other":"dirhams des Émirats arabes unis"},"AFA":{"displayName":"afghani (1927–2002)","displayName-count-one":"afghani (1927–2002)","displayName-count-other":"afghanis (1927–2002)"},"AFN":{"displayName":"afghani afghan","displayName-count-one":"afghani afghan","displayName-count-other":"afghanis afghan","symbol-alt-narrow":"؋"},"ALK":{"displayName":"lek albanais (1947–1961)","displayName-count-one":"lek albanais (1947–1961)","displayName-count-other":"leks albanais (1947–1961)"},"ALL":{"displayName":"lek albanais","displayName-count-one":"lek albanais","displayName-count-other":"leks albanais"},"AMD":{"displayName":"dram arménien","displayName-count-one":"dram arménien","displayName-count-other":"drams arméniens","symbol-alt-narrow":"֏"},"ANG":{"displayName":"florin antillais","displayName-count-one":"florin antillais","displayName-count-other":"florins antillais"},"AOA":{"displayName":"kwanza angolais","displayName-count-one":"kwanza angolais","displayName-count-other":"kwanzas angolais","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"kwanza angolais (1977–1990)","displayName-count-one":"kwanza angolais (1977–1990)","displayName-count-other":"kwanzas angolais (1977–1990)"},"AON":{"displayName":"nouveau kwanza angolais (1990–2000)","displayName-count-one":"nouveau kwanza angolais (1990–2000)","displayName-count-other":"nouveaux kwanzas angolais (1990–2000)"},"AOR":{"displayName":"kwanza angolais réajusté (1995–1999)","displayName-count-one":"kwanza angolais réajusté (1995–1999)","displayName-count-other":"kwanzas angolais réajustés (1995–1999)"},"ARA":{"displayName":"austral argentin","displayName-count-one":"austral argentin","displayName-count-other":"australs argentins"},"ARP":{"displayName":"peso argentin (1983–1985)","displayName-count-one":"peso argentin (1983–1985)","displayName-count-other":"pesos argentins (1983–1985)"},"ARS":{"displayName":"peso argentin","displayName-count-one":"peso argentin","displayName-count-other":"pesos argentins","symbol":"$AR","symbol-alt-narrow":"$"},"ATS":{"displayName":"schilling autrichien","displayName-count-one":"schilling autrichien","displayName-count-other":"schillings autrichiens"},"AUD":{"displayName":"dollar australien","displayName-count-one":"dollar australien","displayName-count-other":"dollars australiens","symbol":"$AU","symbol-alt-narrow":"$"},"AWG":{"displayName":"florin arubais","displayName-count-one":"florin arubais","displayName-count-other":"florins arubais"},"AZM":{"displayName":"manat azéri (1993–2006)","displayName-count-one":"manat azéri (1993–2006)","displayName-count-other":"manats azéris (1993–2006)"},"AZN":{"displayName":"manat azéri","displayName-count-one":"manat azéri","displayName-count-other":"manats azéris","symbol-alt-narrow":"₼"},"BAD":{"displayName":"dinar bosniaque","displayName-count-one":"dinar bosniaque","displayName-count-other":"dinars bosniaques"},"BAM":{"displayName":"mark convertible bosniaque","displayName-count-one":"mark convertible bosniaque","displayName-count-other":"marks convertibles bosniaques","symbol-alt-narrow":"KM"},"BBD":{"displayName":"dollar barbadien","displayName-count-one":"dollar barbadien","displayName-count-other":"dollars barbadiens","symbol-alt-narrow":"$"},"BDT":{"displayName":"taka bangladeshi","displayName-count-one":"taka bangladeshi","displayName-count-other":"takas bangladeshis","symbol-alt-narrow":"৳"},"BEC":{"displayName":"franc belge (convertible)","displayName-count-one":"franc belge (convertible)","displayName-count-other":"francs belges (convertibles)"},"BEF":{"displayName":"franc belge","displayName-count-one":"franc belge","displayName-count-other":"francs belges","symbol":"FB"},"BEL":{"displayName":"franc belge (financier)","displayName-count-one":"franc belge (financier)","displayName-count-other":"francs belges (financiers)"},"BGL":{"displayName":"lev bulgare (1962–1999)","displayName-count-one":"lev bulgare (1962–1999)","displayName-count-other":"levs bulgares (1962–1999)"},"BGN":{"displayName":"lev bulgare","displayName-count-one":"lev bulgare","displayName-count-other":"levs bulgares"},"BHD":{"displayName":"dinar bahreïni","displayName-count-one":"dinar bahreïni","displayName-count-other":"dinars bahreïnis"},"BIF":{"displayName":"franc burundais","displayName-count-one":"franc burundais","displayName-count-other":"francs burundais"},"BMD":{"displayName":"dollar bermudien","displayName-count-one":"dollar bermudien","displayName-count-other":"dollars bermudiens","symbol":"$BM","symbol-alt-narrow":"$"},"BND":{"displayName":"dollar brunéien","displayName-count-one":"dollar brunéien","displayName-count-other":"dollars brunéiens","symbol":"$BN","symbol-alt-narrow":"$"},"BOB":{"displayName":"boliviano bolivien","displayName-count-one":"boliviano bolivien","displayName-count-other":"bolivianos boliviens","symbol-alt-narrow":"Bs"},"BOP":{"displayName":"peso bolivien","displayName-count-one":"peso bolivien","displayName-count-other":"pesos boliviens"},"BOV":{"displayName":"mvdol bolivien","displayName-count-one":"mvdol bolivien","displayName-count-other":"mvdols boliviens"},"BRB":{"displayName":"nouveau cruzeiro brésilien (1967–1986)","displayName-count-one":"nouveau cruzeiro brésilien (1967–1986)","displayName-count-other":"nouveaux cruzeiros brésiliens (1967–1986)"},"BRC":{"displayName":"cruzado brésilien (1986–1989)","displayName-count-one":"cruzado brésilien (1986–1989)","displayName-count-other":"cruzados brésiliens (1986–1989)"},"BRE":{"displayName":"cruzeiro brésilien (1990–1993)","displayName-count-one":"cruzeiro brésilien (1990–1993)","displayName-count-other":"cruzeiros brésiliens (1990–1993)"},"BRL":{"displayName":"réal brésilien","displayName-count-one":"réal brésilien","displayName-count-other":"réals brésiliens","symbol":"R$","symbol-alt-narrow":"R$"},"BRN":{"displayName":"nouveau cruzado","displayName-count-one":"nouveau cruzado brésilien (1989–1990)","displayName-count-other":"nouveaux cruzados brésiliens (1989–1990)"},"BRR":{"displayName":"cruzeiro","displayName-count-one":"cruzeiro réal brésilien (1993–1994)","displayName-count-other":"cruzeiros réals brésiliens (1993–1994)"},"BSD":{"displayName":"dollar bahaméen","displayName-count-one":"dollar bahaméen","displayName-count-other":"dollars bahaméens","symbol-alt-narrow":"$"},"BTN":{"displayName":"ngultrum bouthanais","displayName-count-one":"ngultrum bouthanais","displayName-count-other":"ngultrums bouthanais"},"BUK":{"displayName":"kyat birman","displayName-count-one":"kyat birman","displayName-count-other":"kyats birmans"},"BWP":{"displayName":"pula botswanais","displayName-count-one":"pula botswanais","displayName-count-other":"pulas botswanais","symbol-alt-narrow":"P"},"BYB":{"displayName":"nouveau rouble biélorusse (1994–1999)","displayName-count-one":"nouveau rouble biélorusse (1994–1999)","displayName-count-other":"nouveaux roubles biélorusses (1994–1999)"},"BYN":{"displayName":"rouble biélorusse","displayName-count-one":"rouble biélorusse","displayName-count-other":"roubles biélorusses","symbol-alt-narrow":"р."},"BYR":{"displayName":"rouble biélorusse (2000–2016)","displayName-count-one":"rouble biélorusse (2000–2016)","displayName-count-other":"roubles biélorusses (2000–2016)"},"BZD":{"displayName":"dollar bélizéen","displayName-count-one":"dollar bélizéen","displayName-count-other":"dollars bélizéens","symbol":"$BZ","symbol-alt-narrow":"$"},"CAD":{"displayName":"dollar canadien","displayName-count-one":"dollar canadien","displayName-count-other":"dollars canadiens","symbol":"$CA","symbol-alt-narrow":"$"},"CDF":{"displayName":"franc congolais","displayName-count-one":"franc congolais","displayName-count-other":"francs congolais"},"CHE":{"displayName":"euro WIR","displayName-count-one":"euro WIR","displayName-count-other":"euros WIR"},"CHF":{"displayName":"franc suisse","displayName-count-one":"franc suisse","displayName-count-other":"francs suisses"},"CHW":{"displayName":"franc WIR","displayName-count-one":"franc WIR","displayName-count-other":"francs WIR"},"CLF":{"displayName":"unité d’investissement chilienne","displayName-count-one":"unité d’investissement chilienne","displayName-count-other":"unités d’investissement chiliennes"},"CLP":{"displayName":"peso chilien","displayName-count-one":"peso chilien","displayName-count-other":"pesos chiliens","symbol":"$CL","symbol-alt-narrow":"$"},"CNH":{"displayName":"yuan chinois (zone extracôtière)","displayName-count-one":"yuan chinois (zone extracôtière)","displayName-count-other":"yuans chinois (zone extracôtière)"},"CNY":{"displayName":"yuan renminbi chinois","displayName-count-one":"yuan renminbi chinois","displayName-count-other":"yuans renminbi chinois","symbol":"CNY","symbol-alt-narrow":"¥"},"COP":{"displayName":"peso colombien","displayName-count-one":"peso colombien","displayName-count-other":"pesos colombiens","symbol":"$CO","symbol-alt-narrow":"$"},"COU":{"displayName":"unité de valeur réelle colombienne","displayName-count-one":"unité de valeur réelle colombienne","displayName-count-other":"unités de valeur réelle colombiennes"},"CRC":{"displayName":"colón costaricain","displayName-count-one":"colón costaricain","displayName-count-other":"colóns costaricains","symbol-alt-narrow":"₡"},"CSD":{"displayName":"dinar serbo-monténégrin","displayName-count-one":"dinar serbo-monténégrin","displayName-count-other":"dinars serbo-monténégrins"},"CSK":{"displayName":"couronne forte tchécoslovaque","displayName-count-one":"couronne forte tchécoslovaque","displayName-count-other":"couronnes fortes tchécoslovaques"},"CUC":{"displayName":"peso cubain convertible","displayName-count-one":"peso cubain convertible","displayName-count-other":"pesos cubains convertibles","symbol-alt-narrow":"$"},"CUP":{"displayName":"peso cubain","displayName-count-one":"peso cubain","displayName-count-other":"pesos cubains","symbol-alt-narrow":"$"},"CVE":{"displayName":"escudo capverdien","displayName-count-one":"escudo capverdien","displayName-count-other":"escudos capverdiens"},"CYP":{"displayName":"livre chypriote","displayName-count-one":"livre chypriote","displayName-count-other":"livres chypriotes","symbol":"£CY"},"CZK":{"displayName":"couronne tchèque","displayName-count-one":"couronne tchèque","displayName-count-other":"couronnes tchèques","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"mark est-allemand","displayName-count-one":"mark est-allemand","displayName-count-other":"marks est-allemands"},"DEM":{"displayName":"mark allemand","displayName-count-one":"mark allemand","displayName-count-other":"marks allemands"},"DJF":{"displayName":"franc djiboutien","displayName-count-one":"franc djiboutien","displayName-count-other":"francs djiboutiens"},"DKK":{"displayName":"couronne danoise","displayName-count-one":"couronne danoise","displayName-count-other":"couronnes danoises","symbol-alt-narrow":"kr"},"DOP":{"displayName":"peso dominicain","displayName-count-one":"peso dominicain","displayName-count-other":"pesos dominicains","symbol-alt-narrow":"$"},"DZD":{"displayName":"dinar algérien","displayName-count-one":"dinar algérien","displayName-count-other":"dinars algériens"},"ECS":{"displayName":"sucre équatorien","displayName-count-one":"sucre équatorien","displayName-count-other":"sucres équatoriens"},"ECV":{"displayName":"unité de valeur constante équatoriale (UVC)","displayName-count-one":"unité de valeur constante équatorienne (UVC)","displayName-count-other":"unités de valeur constante équatoriennes (UVC)"},"EEK":{"displayName":"couronne estonienne","displayName-count-one":"couronne estonienne","displayName-count-other":"couronnes estoniennes"},"EGP":{"displayName":"livre égyptienne","displayName-count-one":"livre égyptienne","displayName-count-other":"livres égyptiennes","symbol-alt-narrow":"£E"},"ERN":{"displayName":"nafka érythréen","displayName-count-one":"nafka érythréen","displayName-count-other":"nafkas érythréens"},"ESA":{"displayName":"peseta espagnole (compte A)","displayName-count-one":"peseta espagnole (compte A)","displayName-count-other":"pesetas espagnoles (compte A)"},"ESB":{"displayName":"peseta espagnole (compte convertible)","displayName-count-one":"peseta espagnole (compte convertible)","displayName-count-other":"pesetas espagnoles (compte convertible)"},"ESP":{"displayName":"peseta espagnole","displayName-count-one":"peseta espagnole","displayName-count-other":"pesetas espagnoles","symbol-alt-narrow":"₧"},"ETB":{"displayName":"birr éthiopien","displayName-count-one":"birr éthiopien","displayName-count-other":"birrs éthiopiens"},"EUR":{"displayName":"euro","displayName-count-one":"euro","displayName-count-other":"euros","symbol":"€","symbol-alt-narrow":"€"},"FIM":{"displayName":"mark finlandais","displayName-count-one":"mark finlandais","displayName-count-other":"marks finlandais"},"FJD":{"displayName":"dollar fidjien","displayName-count-one":"dollar fidjien","displayName-count-other":"dollars fidjiens","symbol":"$FJ","symbol-alt-narrow":"$"},"FKP":{"displayName":"livre des îles Malouines","displayName-count-one":"livre des îles Malouines","displayName-count-other":"livres des îles Malouines","symbol":"£FK","symbol-alt-narrow":"£"},"FRF":{"displayName":"franc français","displayName-count-one":"franc français","displayName-count-other":"francs français","symbol":"F"},"GBP":{"displayName":"livre sterling","displayName-count-one":"livre sterling","displayName-count-other":"livres sterling","symbol":"£GB","symbol-alt-narrow":"£"},"GEK":{"displayName":"coupon de lari géorgien","displayName-count-one":"coupon de lari géorgien","displayName-count-other":"coupons de lari géorgiens"},"GEL":{"displayName":"lari géorgien","displayName-count-one":"lari géorgien","displayName-count-other":"lari géorgiens","symbol-alt-narrow":"₾"},"GHC":{"displayName":"cédi","displayName-count-one":"cédi ghanéen (1967–2007)","displayName-count-other":"cédis ghanéens (1967–2007)"},"GHS":{"displayName":"cédi ghanéen","displayName-count-one":"cédi ghanéen","displayName-count-other":"cédis ghanéens","symbol-alt-narrow":"GH₵"},"GIP":{"displayName":"livre de Gibraltar","displayName-count-one":"livre de Gibraltar","displayName-count-other":"livres de Gibraltar","symbol":"£GI","symbol-alt-narrow":"£"},"GMD":{"displayName":"dalasi gambien","displayName-count-one":"dalasi gambien","displayName-count-other":"dalasis gambiens"},"GNF":{"displayName":"franc guinéen","displayName-count-one":"franc guinéen","displayName-count-other":"francs guinéens","symbol-alt-narrow":"FG"},"GNS":{"displayName":"syli guinéen","displayName-count-one":"syli guinéen","displayName-count-other":"sylis guinéens"},"GQE":{"displayName":"ekwélé équatoguinéen","displayName-count-one":"ekwélé équatoguinéen","displayName-count-other":"ekwélés équatoguinéens"},"GRD":{"displayName":"drachme grecque","displayName-count-one":"drachme grecque","displayName-count-other":"drachmes grecques"},"GTQ":{"displayName":"quetzal guatémaltèque","displayName-count-one":"quetzal guatémaltèque","displayName-count-other":"quetzals guatémaltèques","symbol-alt-narrow":"Q"},"GWE":{"displayName":"escudo de Guinée portugaise","displayName-count-one":"escudo de Guinée portugaise","displayName-count-other":"escudos de Guinée portugaise"},"GWP":{"displayName":"peso bissau-guinéen","displayName-count-one":"peso bissau-guinéen","displayName-count-other":"pesos bissau-guinéens"},"GYD":{"displayName":"dollar du Guyana","displayName-count-one":"dollar du Guyana","displayName-count-other":"dollars du Guyana","symbol-alt-narrow":"$"},"HKD":{"displayName":"dollar de Hong Kong","displayName-count-one":"dollar de Hong Kong","displayName-count-other":"dollars de Hong Kong","symbol":"HKD","symbol-alt-narrow":"$"},"HNL":{"displayName":"lempira hondurien","displayName-count-one":"lempira hondurien","displayName-count-other":"lempiras honduriens","symbol-alt-narrow":"L"},"HRD":{"displayName":"dinar croate","displayName-count-one":"dinar croate","displayName-count-other":"dinars croates"},"HRK":{"displayName":"kuna croate","displayName-count-one":"kuna croate","displayName-count-other":"kunas croates","symbol-alt-narrow":"kn"},"HTG":{"displayName":"gourde haïtienne","displayName-count-one":"gourde haïtienne","displayName-count-other":"gourdes haïtiennes"},"HUF":{"displayName":"forint hongrois","displayName-count-one":"forint hongrois","displayName-count-other":"forints hongrois","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"roupie indonésienne","displayName-count-one":"roupie indonésienne","displayName-count-other":"roupies indonésiennes","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"livre irlandaise","displayName-count-one":"livre irlandaise","displayName-count-other":"livres irlandaises","symbol":"£IE"},"ILP":{"displayName":"livre israélienne","displayName-count-one":"livre israélienne","displayName-count-other":"livres israéliennes","symbol":"£IL"},"ILS":{"displayName":"nouveau shekel israélien","displayName-count-one":"nouveau shekel israélien","displayName-count-other":"nouveaux shekels israéliens","symbol":"₪","symbol-alt-narrow":"₪"},"INR":{"displayName":"roupie indienne","displayName-count-one":"roupie indienne","displayName-count-other":"roupies indiennes","symbol":"₹","symbol-alt-narrow":"₹"},"IQD":{"displayName":"dinar irakien","displayName-count-one":"dinar irakien","displayName-count-other":"dinars irakiens"},"IRR":{"displayName":"riyal iranien","displayName-count-one":"riyal iranien","displayName-count-other":"riyals iraniens"},"ISK":{"displayName":"couronne islandaise","displayName-count-one":"couronne islandaise","displayName-count-other":"couronnes islandaises","symbol-alt-narrow":"kr"},"ITL":{"displayName":"lire italienne","displayName-count-one":"lire italienne","displayName-count-other":"lires italiennes","symbol":"₤IT"},"JMD":{"displayName":"dollar jamaïcain","displayName-count-one":"dollar jamaïcain","displayName-count-other":"dollars jamaïcains","symbol-alt-narrow":"$"},"JOD":{"displayName":"dinar jordanien","displayName-count-one":"dinar jordanien","displayName-count-other":"dinars jordaniens"},"JPY":{"displayName":"yen japonais","displayName-count-one":"yen japonais","displayName-count-other":"yens japonais","symbol":"JPY","symbol-alt-narrow":"¥"},"KES":{"displayName":"shilling kényan","displayName-count-one":"shilling kényan","displayName-count-other":"shillings kényans"},"KGS":{"displayName":"som kirghize","displayName-count-one":"som kirghize","displayName-count-other":"soms kirghizes","symbol-alt-narrow":"⃀"},"KHR":{"displayName":"riel cambodgien","displayName-count-one":"riel cambodgien","displayName-count-other":"riels cambodgiens","symbol-alt-narrow":"៛"},"KMF":{"displayName":"franc comorien","displayName-count-one":"franc comorien","displayName-count-other":"francs comoriens","symbol-alt-narrow":"FC"},"KPW":{"displayName":"won nord-coréen","displayName-count-one":"won nord-coréen","displayName-count-other":"wons nord-coréens","symbol-alt-narrow":"₩"},"KRW":{"displayName":"won sud-coréen","displayName-count-one":"won sud-coréen","displayName-count-other":"wons sud-coréens","symbol":"₩","symbol-alt-narrow":"₩"},"KWD":{"displayName":"dinar koweïtien","displayName-count-one":"dinar koweïtien","displayName-count-other":"dinar koweïtiens"},"KYD":{"displayName":"dollar des îles Caïmans","displayName-count-one":"dollar des îles Caïmans","displayName-count-other":"dollars des îles Caïmans","symbol-alt-narrow":"$"},"KZT":{"displayName":"tenge kazakh","displayName-count-one":"tenge kazakh","displayName-count-other":"tenges kazakhs","symbol-alt-narrow":"₸"},"LAK":{"displayName":"kip laotien","displayName-count-one":"kip laotien","displayName-count-other":"kips laotiens","symbol-alt-narrow":"₭"},"LBP":{"displayName":"livre libanaise","displayName-count-one":"livre libanaise","displayName-count-other":"livres libanaises","symbol":"£LB","symbol-alt-narrow":"£L"},"LKR":{"displayName":"roupie srilankaise","displayName-count-one":"roupie srilankaise","displayName-count-other":"roupies srilankaises","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"dollar libérien","displayName-count-one":"dollar libérien","displayName-count-other":"dollars libériens","symbol-alt-narrow":"$"},"LSL":{"displayName":"loti lesothan","displayName-count-one":"loti lesothan","displayName-count-other":"maloti lesothans"},"LTL":{"displayName":"litas lituanien","displayName-count-one":"litas lituanien","displayName-count-other":"litas lituaniens","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"talonas lituanien","displayName-count-one":"talonas lituanien","displayName-count-other":"talonas lituaniens"},"LUC":{"displayName":"franc convertible luxembourgeois","displayName-count-one":"franc convertible luxembourgeois","displayName-count-other":"francs convertibles luxembourgeois"},"LUF":{"displayName":"franc luxembourgeois","displayName-count-one":"franc luxembourgeois","displayName-count-other":"francs luxembourgeois"},"LUL":{"displayName":"franc financier luxembourgeois","displayName-count-one":"franc financier luxembourgeois","displayName-count-other":"francs financiers luxembourgeois"},"LVL":{"displayName":"lats letton","displayName-count-one":"lats letton","displayName-count-other":"lats lettons","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"rouble letton","displayName-count-one":"rouble letton","displayName-count-other":"roubles lettons"},"LYD":{"displayName":"dinar libyen","displayName-count-one":"dinar libyen","displayName-count-other":"dinars libyens"},"MAD":{"displayName":"dirham marocain","displayName-count-one":"dirham marocain","displayName-count-other":"dirhams marocains"},"MAF":{"displayName":"franc marocain","displayName-count-one":"franc marocain","displayName-count-other":"francs marocains"},"MDL":{"displayName":"leu moldave","displayName-count-one":"leu moldave","displayName-count-other":"leus moldaves"},"MGA":{"displayName":"ariary malgache","displayName-count-one":"ariary malgache","displayName-count-other":"ariarys malgaches","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"franc malgache","displayName-count-one":"franc malgache","displayName-count-other":"francs malgaches"},"MKD":{"displayName":"denar macédonien","displayName-count-one":"denar macédonien","displayName-count-other":"denars macédoniens"},"MLF":{"displayName":"franc malien","displayName-count-one":"franc malien","displayName-count-other":"francs maliens"},"MMK":{"displayName":"kyat myanmarais","displayName-count-one":"kyat myanmarais","displayName-count-other":"kyats myanmarais","symbol-alt-narrow":"K"},"MNT":{"displayName":"tugrik mongol","displayName-count-one":"tugrik mongol","displayName-count-other":"tugriks mongols","symbol-alt-narrow":"₮"},"MOP":{"displayName":"pataca macanaise","displayName-count-one":"pataca macanaise","displayName-count-other":"patacas macanaises"},"MRO":{"displayName":"ouguiya mauritanien (1973–2017)","displayName-count-one":"ouguiya mauritanien (1973–2017)","displayName-count-other":"ouguiyas mauritaniens (1973–2017)"},"MRU":{"displayName":"ouguiya mauritanien","displayName-count-one":"ouguiya mauritanien","displayName-count-other":"ouguiyas mauritaniens"},"MTL":{"displayName":"lire maltaise","displayName-count-one":"lire maltaise","displayName-count-other":"lires maltaises"},"MTP":{"displayName":"livre maltaise","displayName-count-one":"livre maltaise","displayName-count-other":"livres maltaises","symbol":"£MT"},"MUR":{"displayName":"roupie mauricienne","displayName-count-one":"roupie mauricienne","displayName-count-other":"roupies mauriciennes","symbol-alt-narrow":"Rs"},"MVR":{"displayName":"rufiyaa maldivienne","displayName-count-one":"rufiyaa maldivienne","displayName-count-other":"rufiyaas maldiviennes"},"MWK":{"displayName":"kwacha malawite","displayName-count-one":"kwacha malawite","displayName-count-other":"kwachas malawites"},"MXN":{"displayName":"peso mexicain","displayName-count-one":"peso mexicain","displayName-count-other":"pesos mexicains","symbol":"$MX","symbol-alt-narrow":"$"},"MXP":{"displayName":"peso d’argent mexicain (1861–1992)","displayName-count-one":"peso d’argent mexicain (1861–1992)","displayName-count-other":"pesos d’argent mexicains (1861–1992)"},"MXV":{"displayName":"unité de conversion mexicaine (UDI)","displayName-count-one":"unité de conversion mexicaine (UDI)","displayName-count-other":"unités de conversion mexicaines (UDI)"},"MYR":{"displayName":"ringgit malais","displayName-count-one":"ringgit malais","displayName-count-other":"ringgits malais","symbol-alt-narrow":"RM"},"MZE":{"displayName":"escudo mozambicain","displayName-count-one":"escudo mozambicain","displayName-count-other":"escudos mozambicains"},"MZM":{"displayName":"métical","displayName-count-one":"metical mozambicain (1980–2006)","displayName-count-other":"meticais mozambicains (1980–2006)"},"MZN":{"displayName":"metical mozambicain","displayName-count-one":"metical mozambicain","displayName-count-other":"meticais mozambicains"},"NAD":{"displayName":"dollar namibien","displayName-count-one":"dollar namibien","displayName-count-other":"dollars namibiens","symbol":"$NA","symbol-alt-narrow":"$"},"NGN":{"displayName":"naira nigérian","displayName-count-one":"naira nigérian","displayName-count-other":"nairas nigérians","symbol-alt-narrow":"₦"},"NIC":{"displayName":"cordoba","displayName-count-one":"córdoba nicaraguayen (1912–1988)","displayName-count-other":"córdobas nicaraguayens (1912–1988)"},"NIO":{"displayName":"córdoba oro nicaraguayen","displayName-count-one":"córdoba oro nicaraguayen","displayName-count-other":"córdobas oro nicaraguayens","symbol-alt-narrow":"$C"},"NLG":{"displayName":"florin néerlandais","displayName-count-one":"florin néerlandais","displayName-count-other":"florins néerlandais"},"NOK":{"displayName":"couronne norvégienne","displayName-count-one":"couronne norvégienne","displayName-count-other":"couronnes norvégiennes","symbol-alt-narrow":"kr"},"NPR":{"displayName":"roupie népalaise","displayName-count-one":"roupie népalaise","displayName-count-other":"roupies népalaises","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"dollar néo-zélandais","displayName-count-one":"dollar néo-zélandais","displayName-count-other":"dollars néo-zélandais","symbol":"$NZ","symbol-alt-narrow":"$"},"OMR":{"displayName":"riyal omanais","displayName-count-one":"riyal omanais","displayName-count-other":"riyals omanis"},"PAB":{"displayName":"balboa panaméen","displayName-count-one":"balboa panaméen","displayName-count-other":"balboas panaméens"},"PEI":{"displayName":"inti péruvien","displayName-count-one":"inti péruvien","displayName-count-other":"intis péruviens"},"PEN":{"displayName":"sol péruvien","displayName-count-one":"sol péruvien","displayName-count-other":"sols péruviens"},"PES":{"displayName":"sol péruvien (1863–1985)","displayName-count-one":"sol péruvien (1863–1985)","displayName-count-other":"sols péruviens (1863–1985)"},"PGK":{"displayName":"kina papouan-néo-guinéen","displayName-count-one":"kina papouan-néo-guinéen","displayName-count-other":"kinas papouan-néo-guinéens"},"PHP":{"displayName":"peso philippin","displayName-count-one":"peso philippin","displayName-count-other":"pesos philippins","symbol":"PHP","symbol-alt-narrow":"₱"},"PKR":{"displayName":"roupie pakistanaise","displayName-count-one":"roupie pakistanaise","displayName-count-other":"roupies pakistanaises","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"zloty polonais","displayName-count-one":"zloty polonais","displayName-count-other":"zlotys polonais","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"zloty (1950–1995)","displayName-count-one":"zloty polonais (1950–1995)","displayName-count-other":"zlotys polonais (1950–1995)"},"PTE":{"displayName":"escudo portugais","displayName-count-one":"escudo portugais","displayName-count-other":"escudos portugais"},"PYG":{"displayName":"guaraní paraguayen","displayName-count-one":"guaraní paraguayen","displayName-count-other":"guaranís paraguayens","symbol-alt-narrow":"₲"},"QAR":{"displayName":"riyal qatari","displayName-count-one":"riyal qatari","displayName-count-other":"riyals qataris"},"RHD":{"displayName":"dollar rhodésien","displayName-count-one":"dollar rhodésien","displayName-count-other":"dollars rhodésiens","symbol":"$RH"},"ROL":{"displayName":"ancien leu roumain","displayName-count-one":"leu roumain (1952–2005)","displayName-count-other":"lei roumains (1952–2005)"},"RON":{"displayName":"leu roumain","displayName-count-one":"leu roumain","displayName-count-other":"lei roumains","symbol-alt-narrow":"L"},"RSD":{"displayName":"dinar serbe","displayName-count-one":"dinar serbe","displayName-count-other":"dinars serbes"},"RUB":{"displayName":"rouble russe","displayName-count-one":"rouble russe","displayName-count-other":"roubles russes","symbol-alt-narrow":"₽"},"RUR":{"displayName":"rouble russe (1991–1998)","displayName-count-one":"rouble russe (1991–1998)","displayName-count-other":"roubles russes (1991–1998)"},"RWF":{"displayName":"franc rwandais","displayName-count-one":"franc rwandais","displayName-count-other":"francs rwandais","symbol-alt-narrow":"FR"},"SAR":{"displayName":"riyal saoudien","displayName-count-one":"riyal saoudien","displayName-count-other":"riyals saoudiens"},"SBD":{"displayName":"dollar des îles Salomon","displayName-count-one":"dollar des îles Salomon","displayName-count-other":"dollars des îles Salomon","symbol":"$SB","symbol-alt-narrow":"$"},"SCR":{"displayName":"roupie des Seychelles","displayName-count-one":"roupie des Seychelles","displayName-count-other":"roupies des Seychelles"},"SDD":{"displayName":"dinar soudanais","displayName-count-one":"dinar soudanais (1992–2007)","displayName-count-other":"dinars soudanais (1992–2007)"},"SDG":{"displayName":"livre soudanaise","displayName-count-one":"livre soudanaise","displayName-count-other":"livres soudanaises"},"SDP":{"displayName":"livre soudanaise (1956–2007)","displayName-count-one":"livre soudanaise (1956–2007)","displayName-count-other":"livres soudanaises (1956–2007)"},"SEK":{"displayName":"couronne suédoise","displayName-count-one":"couronne suédoise","displayName-count-other":"couronnes suédoises","symbol-alt-narrow":"kr"},"SGD":{"displayName":"dollar de Singapour","displayName-count-one":"dollar de Singapour","displayName-count-other":"dollars de Singapour","symbol":"$SG","symbol-alt-narrow":"$"},"SHP":{"displayName":"livre de Sainte-Hélène","displayName-count-one":"livre de Sainte-Hélène","displayName-count-other":"livres de Sainte-Hélène","symbol-alt-narrow":"£"},"SIT":{"displayName":"tolar slovène","displayName-count-one":"tolar slovène","displayName-count-other":"tolars slovènes"},"SKK":{"displayName":"couronne slovaque","displayName-count-one":"couronne slovaque","displayName-count-other":"couronnes slovaques"},"SLE":{"displayName":"leone sierra-léonais","displayName-count-one":"leone sierra-léonais","displayName-count-other":"leones sierra-léonais"},"SLL":{"displayName":"leone sierra-léonais (1964—2022)","displayName-count-one":"leone sierra-léonais (1964—2022)","displayName-count-other":"leones sierra-léonais (1964—2022)"},"SOS":{"displayName":"shilling somalien","displayName-count-one":"shilling somalien","displayName-count-other":"shillings somaliens"},"SRD":{"displayName":"dollar surinamais","displayName-count-one":"dollar surinamais","displayName-count-other":"dollars surinamais","symbol":"$SR","symbol-alt-narrow":"$"},"SRG":{"displayName":"florin surinamais","displayName-count-one":"florin surinamais","displayName-count-other":"florins surinamais"},"SSP":{"displayName":"livre sud-soudanaise","displayName-count-one":"livre sud-soudanaise","displayName-count-other":"livres sud-soudanaises","symbol-alt-narrow":"£"},"STD":{"displayName":"dobra santoméen (1977–2017)","displayName-count-one":"dobra santoméen (1977–2017)","displayName-count-other":"dobras santoméens (1977–2017)"},"STN":{"displayName":"dobra santoméen","displayName-count-one":"dobra santoméen","displayName-count-other":"dobras santoméens","symbol-alt-narrow":"Db"},"SUR":{"displayName":"rouble soviétique","displayName-count-one":"rouble soviétique","displayName-count-other":"roubles soviétiques"},"SVC":{"displayName":"colón salvadorien","displayName-count-one":"colón salvadorien","displayName-count-other":"colóns salvadoriens"},"SYP":{"displayName":"livre syrienne","displayName-count-one":"livre syrienne","displayName-count-other":"livres syriennes","symbol-alt-narrow":"£"},"SZL":{"displayName":"lilangeni swazi","displayName-count-one":"lilangeni swazi","displayName-count-other":"lilangenis swazis"},"THB":{"displayName":"baht thaïlandais","displayName-count-one":"baht thaïlandais","displayName-count-other":"bahts thaïlandais","symbol-alt-narrow":"฿"},"TJR":{"displayName":"rouble tadjik","displayName-count-one":"rouble tadjik","displayName-count-other":"roubles tadjiks"},"TJS":{"displayName":"somoni tadjik","displayName-count-one":"somoni tadjik","displayName-count-other":"somonis tadjiks"},"TMM":{"displayName":"manat turkmène","displayName-count-one":"manat turkmène","displayName-count-other":"manats turkmènes"},"TMT":{"displayName":"nouveau manat turkmène","displayName-count-one":"nouveau manat turkmène","displayName-count-other":"nouveaux manats turkmènes"},"TND":{"displayName":"dinar tunisien","displayName-count-one":"dinar tunisien","displayName-count-other":"dinars tunisiens"},"TOP":{"displayName":"pa’anga tongan","displayName-count-one":"pa’anga tongan","displayName-count-other":"pa’angas tongans","symbol-alt-narrow":"$T"},"TPE":{"displayName":"escudo timorais","displayName-count-one":"escudo timorais","displayName-count-other":"escudos timorais"},"TRL":{"displayName":"livre turque (1844–2005)","displayName-count-one":"livre turque (1844–2005)","displayName-count-other":"livres turques (1844–2005)"},"TRY":{"displayName":"livre turque","displayName-count-one":"livre turque","displayName-count-other":"livres turques","symbol-alt-narrow":"₺","symbol-alt-variant":"LT"},"TTD":{"displayName":"dollar de Trinité-et-Tobago","displayName-count-one":"dollar de Trinité-et-Tobago","displayName-count-other":"dollars de Trinité-et-Tobago","symbol":"$TT","symbol-alt-narrow":"$"},"TWD":{"displayName":"nouveau dollar taïwanais","displayName-count-one":"nouveau dollar taïwanais","displayName-count-other":"nouveaux dollars taïwanais","symbol":"TWD","symbol-alt-narrow":"NT$"},"TZS":{"displayName":"shilling tanzanien","displayName-count-one":"shilling tanzanien","displayName-count-other":"shillings tanzaniens"},"UAH":{"displayName":"hryvnia ukrainienne","displayName-count-one":"hryvnia ukrainienne","displayName-count-other":"hryvnias ukrainiennes","symbol-alt-narrow":"₴"},"UAK":{"displayName":"karbovanetz","displayName-count-one":"karbovanets ukrainien (1992–1996)","displayName-count-other":"karbovanets ukrainiens (1992–1996)"},"UGS":{"displayName":"shilling ougandais (1966–1987)","displayName-count-one":"shilling ougandais (1966–1987)","displayName-count-other":"shillings ougandais (1966–1987)"},"UGX":{"displayName":"shilling ougandais","displayName-count-one":"shilling ougandais","displayName-count-other":"shillings ougandais"},"USD":{"displayName":"dollar des États-Unis","displayName-count-one":"dollar des États-Unis","displayName-count-other":"dollars des États-Unis","symbol":"$US","symbol-alt-narrow":"$"},"USN":{"displayName":"dollar des Etats-Unis (jour suivant)","displayName-count-one":"dollar des États-Unis (jour suivant)","displayName-count-other":"dollars des États-Unis (jour suivant)"},"USS":{"displayName":"dollar des Etats-Unis (jour même)","displayName-count-one":"dollar des États-Unis (jour même)","displayName-count-other":"dollars des États-Unis (jour même)"},"UYI":{"displayName":"peso uruguayen (unités indexées)","displayName-count-one":"peso uruguayen (unités indexées)","displayName-count-other":"pesos uruguayen (unités indexées)"},"UYP":{"displayName":"peso uruguayen (1975–1993)","displayName-count-one":"peso uruguayen (1975–1993)","displayName-count-other":"pesos uruguayens (1975–1993)"},"UYU":{"displayName":"peso uruguayen","displayName-count-one":"peso uruguayen","displayName-count-other":"pesos uruguayens","symbol":"$UY","symbol-alt-narrow":"$"},"UZS":{"displayName":"sum ouzbek","displayName-count-one":"sum ouzbek","displayName-count-other":"sums ouzbeks"},"VEB":{"displayName":"bolivar vénézuélien (1871–2008)"},"VEF":{"displayName":"bolivar vénézuélien (2008–2018)","displayName-count-one":"bolivar vénézuélien (2008–2018)","displayName-count-other":"bolivars vénézuéliens (2008–2018)","symbol-alt-narrow":"Bs"},"VES":{"displayName":"bolivar vénézuélien","displayName-count-one":"bolivar vénézuélien","displayName-count-other":"bolivars vénézuéliens"},"VND":{"displayName":"dông vietnamien","displayName-count-one":"dông vietnamien","displayName-count-other":"dôngs vietnamiens","symbol":"₫","symbol-alt-narrow":"₫"},"VUV":{"displayName":"vatu vanuatuan","displayName-count-one":"vatu vanuatuan","displayName-count-other":"vatus vanuatuans"},"WST":{"displayName":"tala samoan","displayName-count-one":"tala samoan","displayName-count-other":"talas samoans","symbol":"$WS"},"XAF":{"displayName":"franc CFA (BEAC)","displayName-count-one":"franc CFA (BEAC)","displayName-count-other":"francs CFA (BEAC)","symbol":"FCFA"},"XAG":{"displayName":"argent","displayName-count-one":"once troy d’argent","displayName-count-other":"onces troy d’argent"},"XAU":{"displayName":"or","displayName-count-one":"once troy d’or","displayName-count-other":"onces troy d’or"},"XBA":{"displayName":"unité européenne composée","displayName-count-one":"unité composée européenne (EURCO)","displayName-count-other":"unités composées européennes (EURCO)"},"XBB":{"displayName":"unité monétaire européenne","displayName-count-one":"unité monétaire européenne (UME–6)","displayName-count-other":"unités monétaires européennes (UME–6)"},"XBC":{"displayName":"unité de compte européenne (XBC)","displayName-count-one":"unité de compte 9 européenne (UEC–9)","displayName-count-other":"unités de compte 9 européennes (UEC–9)"},"XBD":{"displayName":"unité de compte européenne (XBD)","displayName-count-one":"unité de compte 17 européenne (UEC–17)","displayName-count-other":"unités de compte 17 européennes (UEC–17)"},"XCD":{"displayName":"dollar des Caraïbes orientales","displayName-count-one":"dollar des Caraïbes orientales","displayName-count-other":"dollars des Caraïbes orientales","symbol":"XCD","symbol-alt-narrow":"$"},"XCG":{"displayName":"florin caribéen","displayName-count-one":"florin caribéen","displayName-count-other":"florins caribéens","symbol":"Cg."},"XDR":{"displayName":"droit de tirage spécial","displayName-count-one":"droit de tirage spécial","displayName-count-other":"droits de tirage spéciaux"},"XEU":{"displayName":"unité de compte européenne (ECU)"},"XFO":{"displayName":"franc or","displayName-count-one":"franc or","displayName-count-other":"francs or"},"XFU":{"displayName":"franc UIC","displayName-count-one":"franc UIC","displayName-count-other":"francs UIC"},"XOF":{"displayName":"franc CFA (BCEAO)","displayName-count-one":"franc CFA (BCEAO)","displayName-count-other":"francs CFA (BCEAO)","symbol":"F CFA"},"XPD":{"displayName":"palladium","displayName-count-one":"once troy de palladium","displayName-count-other":"onces troy de palladium"},"XPF":{"displayName":"franc CFP","displayName-count-one":"franc CFP","displayName-count-other":"francs CFP","symbol":"FCFP"},"XPT":{"displayName":"platine","displayName-count-one":"once troy de platine","displayName-count-other":"onces troy de platine"},"XRE":{"displayName":"type de fonds RINET","displayName-count-one":"unité de fonds RINET","displayName-count-other":"unités de fonds RINET"},"XTS":{"displayName":"(devise de test)","displayName-count-one":"(devise de test)","displayName-count-other":"(devises de test)"},"XXX":{"displayName":"devise inconnue ou non valide","displayName-count-one":"devise inconnue","displayName-count-other":"devises inconnues","symbol":"¤"},"YDD":{"displayName":"dinar du Yémen","displayName-count-one":"dinar nord-yéménite","displayName-count-other":"dinars nord-yéménites"},"YER":{"displayName":"riyal yéménite","displayName-count-one":"riyal yéménite","displayName-count-other":"riyals yéménites"},"YUD":{"displayName":"nouveau dinar yougoslave","displayName-count-one":"dinar fort yougoslave (1966–1989)","displayName-count-other":"dinars forts yougoslaves (1966–1989)"},"YUM":{"displayName":"dinar yougoslave Noviy","displayName-count-one":"nouveau dinar yougoslave (1994–2003)","displayName-count-other":"nouveaux dinars yougoslaves (1994–2003)"},"YUN":{"displayName":"dinar yougoslave convertible","displayName-count-one":"dinar convertible yougoslave (1990–1992)","displayName-count-other":"dinars convertibles yougoslaves (1990–1992)"},"ZAL":{"displayName":"rand sud-africain (financier)","displayName-count-one":"rand sud-africain (financier)","displayName-count-other":"rands sud-africains (financiers)"},"ZAR":{"displayName":"rand sud-africain","displayName-count-one":"rand sud-africain","displayName-count-other":"rands sud-africains","symbol-alt-narrow":"R"},"ZMK":{"displayName":"kwacha zambien (1968–2012)","displayName-count-one":"kwacha zambien (1968–2012)","displayName-count-other":"kwachas zambiens (1968–2012)"},"ZMW":{"displayName":"kwacha zambien","displayName-count-one":"kwacha zambien","displayName-count-other":"kwachas zambiens","symbol-alt-narrow":"Kw"},"ZRN":{"displayName":"nouveau zaïre zaïrien","displayName-count-one":"nouveau zaïre zaïrien","displayName-count-other":"nouveaux zaïres zaïriens"},"ZRZ":{"displayName":"zaïre zaïrois","displayName-count-one":"zaïre zaïrois","displayName-count-other":"zaïres zaïrois"},"ZWD":{"displayName":"dollar zimbabwéen","displayName-count-one":"dollar zimbabwéen","displayName-count-other":"dollars zimbabwéens"},"ZWL":{"displayName":"dollar zimbabwéen (2009)","displayName-count-one":"dollar zimbabwéen (2009)","displayName-count-other":"dollars zimbabwéens (2009)"},"ZWR":{"displayName":"dollar zimbabwéen (2008)","displayName-count-one":"dollar zimbabwéen (2008)","displayName-count-other":"dollars zimbabwéens (2008)"}}},"dates":{"calendars":{"islamic":{"months":{"format":{"abbreviated":{"1":"mouh.","2":"saf.","3":"rab. aw.","4":"rab. th.","5":"joum. oul.","6":"joum. tha.","7":"raj.","8":"chaa.","9":"ram.","10":"chaw.","11":"dhou. q.","12":"dhou. h."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"mouharram","2":"safar","3":"rabia al awal","4":"rabia ath-thani","5":"joumada al oula","6":"joumada ath-thania","7":"rajab","8":"chaabane","9":"ramadan","10":"chawwal","11":"dhou al qi\`da","12":"dhou al-hijja"}},"stand-alone":{"abbreviated":{"1":"mouh.","2":"saf.","3":"rab. aw.","4":"rab. th.","5":"joum. ou.","6":"joum. th.","7":"raj.","8":"chaa.","9":"ram.","10":"chaw.","11":"dhou. qi.","12":"dhou. hi."},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"mouharram","2":"safar","3":"rabia al awal","4":"rabia ath-thani","5":"joumada al oula","6":"joumada ath-thania","7":"rajab","8":"chaabane","9":"ramadan","10":"chawwal","11":"dhou al qi\`da","12":"dhou al-hijja"}}},"days":{"format":{"abbreviated":{"sun":"dim.","mon":"lun.","tue":"mar.","wed":"mer.","thu":"jeu.","fri":"ven.","sat":"sam."},"narrow":{"sun":"D","mon":"L","tue":"M","wed":"M","thu":"J","fri":"V","sat":"S"},"short":{"sun":"di","mon":"lu","tue":"ma","wed":"me","thu":"je","fri":"ve","sat":"sa"},"wide":{"sun":"dimanche","mon":"lundi","tue":"mardi","wed":"mercredi","thu":"jeudi","fri":"vendredi","sat":"samedi"}},"stand-alone":{"abbreviated":{"sun":"dim.","mon":"lun.","tue":"mar.","wed":"mer.","thu":"jeu.","fri":"ven.","sat":"sam."},"narrow":{"sun":"D","mon":"L","tue":"M","wed":"M","thu":"J","fri":"V","sat":"S"},"short":{"sun":"di","mon":"lu","tue":"ma","wed":"me","thu":"je","fri":"ve","sat":"sa"},"wide":{"sun":"dimanche","mon":"lundi","tue":"mardi","wed":"mercredi","thu":"jeudi","fri":"vendredi","sat":"samedi"}}},"quarters":{"format":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1er trimestre","2":"2e trimestre","3":"3e trimestre","4":"4e trimestre"}},"stand-alone":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1er trimestre","2":"2e trimestre","3":"3e trimestre","4":"4e trimestre"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"du mat.","afternoon1":"de l’ap.m.","evening1":"du soir","night1":"du mat."},"narrow":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"du mat.","afternoon1":"de l’ap.m.","evening1":"du soir","night1":"du mat."},"wide":{"midnight":"minuit","am":"AM","noon":"midi","pm":"PM","morning1":"du matin","afternoon1":"de l’après-midi","evening1":"du soir","night1":"du matin"}},"stand-alone":{"abbreviated":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"mat.","afternoon1":"ap.m.","evening1":"soir","night1":"matin"},"narrow":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"mat.","afternoon1":"ap.m.","evening1":"soir","night1":"matin"},"wide":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"matin","afternoon1":"après-midi","evening1":"soir","night1":"matin"}}},"eras":{"eraNames":{"0":"ère de l’Hégire"},"eraAbbr":{"0":"AH"},"eraNarrow":{"0":"H"}},"dateFormats":{"full":"EEEE, d MMMM y G","long":"d MMMM y G","medium":"d MMM y G","short":"dd.MM.y GGGGG"},"dateSkeletons":{"full":"GyMMMMEEEEd","long":"GyMMMMd","medium":"GyMMMd","short":"GGGGGyMMdd"},"timeFormats":{"full":"HH.mm:ss 'h' zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E d","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"dd/MM/y GGGGG","GyMMM":"MMM y G","GyMMMd":"d MMM y G","GyMMMEd":"E d MMM y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","M":"L","Md":"dd.MM.","MEd":"E, dd.MM.","MMdd":"dd.MM","MMM":"LLL","MMMd":"d MMM","MMMEd":"E d MMM","MMMMd":"d MMMM","ms":"mm:ss","y":"y G","yM":"MM.y GGGGG","yMd":"dd.MM.y GGGGG","yMEd":"E, dd.MM.y GGGGG","yyyy":"y G","yyyyM":"M/y GGGGG","yyyyMd":"d/M/y GGGGG","yyyyMEd":"E d/M/y GGGGG","yyyyMMM":"MMM y G","yyyyMMMd":"d MMM y G","yyyyMMMEd":"E d MMM y G","yyyyMMMM":"MMMM y G","yyyyQQQ":"QQQ y G","yyyyQQQQ":"QQQQ y G"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"du {0} au {1}","Bh":{"B":"h B – h B","h":"h – h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm – h:mm B","m":"h:mm – h:mm B"},"d":{"d":"d – d"},"Gy":{"G":"y G 'à' y G","y":"y–y G"},"GyM":{"G":"M/y G 'à' M/y G","M":"M–M/y G","y":"M/y 'à' M/y G"},"GyMd":{"d":"d–d/M/y G","G":"d/M/y G 'à' d/M/y G","M":"d/M 'à' d/M/y G","y":"d/M/y 'à' d/M/y G"},"GyMEd":{"d":"E d 'à' E d/M/y G","G":"E d/M/y G 'à' E d/M/y G","M":"E d/M 'à' E d/M/y G","y":"E d/M/y 'à' E d/M/y G"},"GyMMM":{"G":"MMM y G 'à' MMM y G","M":"MMM 'à' MMM y G","y":"MMM y 'à' MMM y G"},"GyMMMd":{"d":"d–d MMM y G","G":"d MMM y G 'à' d MMM y G","M":"d MMM 'à' d MMM y G","y":"d MMM y 'à' d MMM y G"},"GyMMMEd":{"d":"E d 'à' E d MMM y G","G":"E d MMM y G 'à' E d MMM y G","M":"E d MMM 'à' E d MMM y G","y":"E d MMM y 'à' E d MMM y G"},"h":{"a":"h a – h a","h":"h – h a"},"H":{"H":"HH – HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"HH:mm – HH:mm","m":"HH:mm – HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm – h:mm a v","m":"h:mm – h:mm a v"},"Hmv":{"H":"HH:mm – HH:mm v","m":"HH:mm – HH:mm v"},"hv":{"a":"h a – h a v","h":"h – h a v"},"Hv":{"H":"HH – HH v"},"M":{"M":"M–M"},"Md":{"d":"dd.MM – dd.MM","M":"dd.MM – dd.MM"},"MEd":{"d":"E, dd.MM – E, dd.MM","M":"E, dd.MM – E, dd.MM"},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d–d MMM","M":"d MMM 'au' d MMM"},"MMMEd":{"d":"E, d 'au' E, d MMM","M":"E, d MMM 'au' E, d MMM"},"y":{"y":"y – y G"},"yM":{"M":"MM.y – MM.y GGGGG","y":"MM.y – MM.y GGGGG"},"yMd":{"d":"dd.MM.y – dd.MM.y GGGGG","M":"dd.MM.y – dd.MM.y GGGGG","y":"dd.MM.y – dd.MM.y GGGGG"},"yMEd":{"d":"E, dd.MM.y – E, dd.MM.y GGGGG","M":"E, dd.MM.y – E, dd.MM.y GGGGG","y":"E, dd.MM.y – E, dd.MM.y GGGGG"},"yMMM":{"M":"MMM–MMM y G","y":"MMM y 'a'\` MMM y G"},"yMMMd":{"d":"d–d MMM y G","M":"d MMM 'au' d MMM y G","y":"d MMM y 'au' d MMM y G"},"yMMMEd":{"d":"E, d 'au' E, d MMM y G","M":"E, d MMM 'au' E, d MMM y G","y":"E, d MMM y 'au' E, d MMM y G"},"yMMMM":{"M":"MMMM – MMMM y G","y":"MMMM y – MMMM y G"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'à' {0}","long":"{1} 'à' {0}","medium":"{1} {0}","short":"{1} {0}"}}},"gregorian":{"months":{"format":{"abbreviated":{"1":"janv.","2":"févr.","3":"mars","4":"avr.","5":"mai","6":"juin","7":"juil.","8":"août","9":"sept.","10":"oct.","11":"nov.","12":"déc."},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"janvier","2":"février","3":"mars","4":"avril","5":"mai","6":"juin","7":"juillet","8":"août","9":"septembre","10":"octobre","11":"novembre","12":"décembre"}},"stand-alone":{"abbreviated":{"1":"janv.","2":"févr.","3":"mars","4":"avr.","5":"mai","6":"juin","7":"juil.","8":"août","9":"sept.","10":"oct.","11":"nov.","12":"déc."},"narrow":{"1":"J","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"janvier","2":"février","3":"mars","4":"avril","5":"mai","6":"juin","7":"juillet","8":"août","9":"septembre","10":"octobre","11":"novembre","12":"décembre"}}},"days":{"format":{"abbreviated":{"sun":"dim.","mon":"lun.","tue":"mar.","wed":"mer.","thu":"jeu.","fri":"ven.","sat":"sam."},"narrow":{"sun":"D","mon":"L","tue":"M","wed":"M","thu":"J","fri":"V","sat":"S"},"short":{"sun":"di","mon":"lu","tue":"ma","wed":"me","thu":"je","fri":"ve","sat":"sa"},"wide":{"sun":"dimanche","mon":"lundi","tue":"mardi","wed":"mercredi","thu":"jeudi","fri":"vendredi","sat":"samedi"}},"stand-alone":{"abbreviated":{"sun":"dim.","mon":"lun.","tue":"mar.","wed":"mer.","thu":"jeu.","fri":"ven.","sat":"sam."},"narrow":{"sun":"D","mon":"L","tue":"M","wed":"M","thu":"J","fri":"V","sat":"S"},"short":{"sun":"di","mon":"lu","tue":"ma","wed":"me","thu":"je","fri":"ve","sat":"sa"},"wide":{"sun":"dimanche","mon":"lundi","tue":"mardi","wed":"mercredi","thu":"jeudi","fri":"vendredi","sat":"samedi"}}},"quarters":{"format":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1er trimestre","2":"2e trimestre","3":"3e trimestre","4":"4e trimestre"}},"stand-alone":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1er trimestre","2":"2e trimestre","3":"3e trimestre","4":"4e trimestre"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"du mat.","afternoon1":"de l’ap.m.","evening1":"du soir","night1":"du mat."},"narrow":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"du mat.","afternoon1":"de l’ap.m.","evening1":"du soir","night1":"du mat."},"wide":{"midnight":"minuit","am":"AM","noon":"midi","pm":"PM","morning1":"du matin","afternoon1":"de l’après-midi","evening1":"du soir","night1":"du matin"}},"stand-alone":{"abbreviated":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"mat.","afternoon1":"ap.m.","evening1":"soir","night1":"matin"},"narrow":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"mat.","afternoon1":"ap.m.","evening1":"soir","night1":"matin"},"wide":{"midnight":"min.","am":"AM","noon":"midi","pm":"PM","morning1":"matin","afternoon1":"après-midi","evening1":"soir","night1":"matin"}}},"eras":{"eraNames":{"0":"avant Jésus-Christ","1":"après Jésus-Christ","0-alt-variant":"avant l’ère commune","1-alt-variant":"de l’ère commune"},"eraAbbr":{"0":"av. J.-C.","1":"ap. J.-C.","0-alt-variant":"AEC","1-alt-variant":"EC"},"eraNarrow":{"0":"av. J.-C.","1":"ap. J.-C.","0-alt-variant":"AEC","1-alt-variant":"EC"}},"dateFormats":{"full":"EEEE, d MMMM y","long":"d MMMM y","medium":"d MMM y","short":"dd.MM.yy"},"dateSkeletons":{"full":"yMMMMEEEEd","long":"yMMMMd","medium":"yMMMd","short":"yyMMdd"},"timeFormats":{"full":"HH.mm:ss 'h' zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1} {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"E","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E d","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"dd/MM/y GGGGG","GyMMM":"MMM y G","GyMMMd":"d MMM y G","GyMMMEd":"E d MMM y G","h":"h a","H":"HH 'h'","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"dd.MM.","MEd":"E, dd.MM.","MMdd":"dd.MM","MMM":"LLL","MMMd":"d MMM","MMMEd":"E d MMM","MMMMd":"d MMMM","MMMMW-count-one":"'semaine' W (MMMM)","MMMMW-count-other":"'semaine' W (MMMM)","ms":"mm:ss","y":"y","yM":"MM.y","yMd":"dd.MM.y","yMEd":"E, dd.MM.y","yMMM":"MMM y","yMMMd":"d MMM y","yMMMEd":"E d MMM y","yMMMM":"MMMM y","yQQQ":"QQQ y","yQQQQ":"QQQQ y","yw-count-one":"'semaine' w 'de' Y","yw-count-other":"'semaine' w 'de' Y"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h – h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm – h:mm B","m":"h:mm – h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"y G 'à' y G","y":"y–y G"},"GyM":{"G":"MM/y G – MM/y G","M":"MM–MM/y G","y":"MM/y – MM/y G"},"GyMd":{"d":"d–d/MM/y G","G":"d/MM/y G – d/MM/y G","M":"d/MM – d/MM/y G","y":"d/MM/y – d/MM/y G"},"GyMEd":{"d":"E d – E d/MM/y G","G":"E d/MM/y G – E d/MM/y G","M":"E d/MM – E d/MM/y G","y":"E d/MM/y – E d/MM/y G"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"d–d MMM y G","G":"d MMM y G – d MMM y G","M":"d MMM – d MMM y G","y":"d MMM y – d MMM y G"},"GyMMMEd":{"d":"E d – E d MMM y G","G":"E d MMM y G – E d MMM y G","M":"E d MMM – E d MMM y G","y":"E d MMM y – E d MMM y G"},"h":{"a":"h a – h a","h":"h – h a"},"H":{"H":"HH – HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"HH:mm – HH:mm","m":"HH:mm – HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm – h:mm a v","m":"h:mm – h:mm a v"},"Hmv":{"H":"HH:mm – HH:mm v","m":"HH:mm – HH:mm v"},"hv":{"a":"h a – h a v","h":"h – h a v"},"Hv":{"H":"HH – HH v"},"M":{"M":"M–M"},"Md":{"d":"dd.MM – dd.MM","M":"dd.MM – dd.MM"},"MEd":{"d":"E, dd.MM – E, dd.MM","M":"E, dd.MM – E, dd.MM"},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d–d MMM","M":"d MMM – d MMM"},"MMMEd":{"d":"E d – E d MMM","M":"E d MMM – E d MMM"},"y":{"y":"y–y"},"yM":{"M":"MM.y – MM.y","y":"MM.y – MM.y"},"yMd":{"d":"dd.MM.y – dd.MM.y","M":"dd.MM.y – dd.MM.y","y":"dd.MM.y – dd.MM.y"},"yMEd":{"d":"E, dd.MM.y – E, dd.MM.y","M":"E, dd.MM.y – E, dd.MM.y","y":"E, dd.MM.y – E, dd.MM.y"},"yMMM":{"M":"MMM–MMM y","y":"MMM y – MMM y"},"yMMMd":{"d":"d–d MMM y","M":"d MMM – d MMM y","y":"d MMM y – d MMM y"},"yMMMEd":{"d":"E d – E d MMM y","M":"E d MMM – E d MMM y","y":"E d MMM y – E d MMM y"},"yMMMM":{"M":"MMMM – MMMM y","y":"MMMM y – MMMM y"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} 'à' {0}","long":"{1} 'à' {0}","medium":"{1}, {0}","short":"{1} {0}"}}}},"timeZoneNames":{"hourFormat":"+HH:mm;−HH:mm","gmtFormat":"UTC{0}","gmtZeroFormat":"UTC","regionFormat":"heure : {0}","regionFormat-type-daylight":"{0} (heure d’été)","regionFormat-type-standard":"{0} (heure standard)","fallbackFormat":"{1} ({0})","zone":{"America":{"Araguaina":{"exemplarCity":"Araguaína"},"Argentina":{"Rio_Gallegos":{"exemplarCity":"Río Gallegos"},"Ushuaia":{"exemplarCity":"Ushuaïa"},"Tucuman":{"exemplarCity":"Tucumán"}},"Asuncion":{"exemplarCity":"Asunción"},"Bahia_Banderas":{"exemplarCity":"Bahia de Banderas"},"Barbados":{"exemplarCity":"La Barbade"},"Belem":{"exemplarCity":"Belém"},"Cancun":{"exemplarCity":"Cancún"},"Cayman":{"exemplarCity":"Caïmans"},"Ciudad_Juarez":{"exemplarCity":"Ciudad Juárez"},"Coral_Harbour":{"exemplarCity":"Atikokan"},"Cordoba":{"exemplarCity":"Córdoba"},"Cuiaba":{"exemplarCity":"Cuiabá"},"Curacao":{"exemplarCity":"Curaçao"},"Detroit":{"exemplarCity":"Détroit"},"Dominica":{"exemplarCity":"Dominique"},"Eirunepe":{"exemplarCity":"Eirunepé"},"Godthab":{"exemplarCity":"Nuuk"},"Grenada":{"exemplarCity":"Grenade"},"Havana":{"exemplarCity":"La Havane"},"Indiana":{"Vincennes":{"exemplarCity":"Vincennes [Indiana]"},"Petersburg":{"exemplarCity":"Petersburg [Indiana]"},"Tell_City":{"exemplarCity":"Tell City [Indiana]"},"Knox":{"exemplarCity":"Knox [Indiana]"},"Winamac":{"exemplarCity":"Winamac [Indiana]"},"Marengo":{"exemplarCity":"Marengo [Indiana]"},"Vevay":{"exemplarCity":"Vevay [Indiana]"}},"Jamaica":{"exemplarCity":"Jamaïque"},"Kentucky":{"Monticello":{"exemplarCity":"Monticello [Kentucky]"}},"Lower_Princes":{"exemplarCity":"Lower Prince’s Quarter"},"Maceio":{"exemplarCity":"Maceió"},"Manaus":{"exemplarCity":"Manaos"},"Mazatlan":{"exemplarCity":"Mazatlán"},"Merida":{"exemplarCity":"Mérida"},"Mexico_City":{"exemplarCity":"Mexico"},"North_Dakota":{"Beulah":{"exemplarCity":"Beulah (Dakota du Nord)"},"New_Salem":{"exemplarCity":"New Salem (Dakota du Nord)"},"Center":{"exemplarCity":"Center (Dakota du Nord)"}},"Port_of_Spain":{"exemplarCity":"Port-d’Espagne"},"Puerto_Rico":{"exemplarCity":"Porto Rico"},"Santarem":{"exemplarCity":"Santarém"},"Santo_Domingo":{"exemplarCity":"Saint-Domingue"},"Sao_Paulo":{"exemplarCity":"São Paulo"},"Scoresbysund":{"exemplarCity":"Ittoqqortoormiit"},"St_Barthelemy":{"exemplarCity":"Saint-Barthélemy"},"St_Johns":{"exemplarCity":"Saint-Jean de Terre-Neuve"},"St_Kitts":{"exemplarCity":"Saint-Christophe"},"St_Lucia":{"exemplarCity":"Sainte-Lucie"},"St_Thomas":{"exemplarCity":"Saint-Thomas"},"St_Vincent":{"exemplarCity":"Saint-Vincent"},"Thule":{"exemplarCity":"Thulé"}},"Atlantic":{"Azores":{"exemplarCity":"Açores"},"Bermuda":{"exemplarCity":"Bermudes"},"Canary":{"exemplarCity":"Îles Canaries"},"Cape_Verde":{"exemplarCity":"Cap-Vert"},"Faeroe":{"exemplarCity":"Îles Féroé"},"Madeira":{"exemplarCity":"Madère"},"South_Georgia":{"exemplarCity":"Géorgie du Sud"},"St_Helena":{"exemplarCity":"Sainte-Hélène"}},"Europe":{"Andorra":{"exemplarCity":"Andorre"},"Athens":{"exemplarCity":"Athènes"},"Brussels":{"exemplarCity":"Bruxelles"},"Bucharest":{"exemplarCity":"Bucarest"},"Busingen":{"exemplarCity":"Büsingen"},"Copenhagen":{"exemplarCity":"Copenhague"},"Dublin":{"long":{"daylight":"heure d’été irlandaise"}},"Guernsey":{"exemplarCity":"Guernesey"},"Isle_of_Man":{"exemplarCity":"Île de Man"},"Kiev":{"exemplarCity":"Kiev"},"Lisbon":{"exemplarCity":"Lisbonne"},"London":{"long":{"daylight":"heure d’été britannique"},"exemplarCity":"Londres"},"Malta":{"exemplarCity":"Malte"},"Moscow":{"exemplarCity":"Moscou"},"San_Marino":{"exemplarCity":"Saint-Marin"},"Tirane":{"exemplarCity":"Tirana"},"Ulyanovsk":{"exemplarCity":"Oulianovsk"},"Vatican":{"exemplarCity":"Le Vatican"},"Vienna":{"exemplarCity":"Vienne"},"Warsaw":{"exemplarCity":"Varsovie"}},"Africa":{"Addis_Ababa":{"exemplarCity":"Addis-Abeba"},"Algiers":{"exemplarCity":"Alger"},"Asmera":{"exemplarCity":"Asmara"},"Cairo":{"exemplarCity":"Le Caire"},"El_Aaiun":{"exemplarCity":"Laâyoune"},"Lome":{"exemplarCity":"Lomé"},"Mogadishu":{"exemplarCity":"Mogadiscio"},"Ndjamena":{"exemplarCity":"N’Djamena"},"Sao_Tome":{"exemplarCity":"São Tomé"},"Tripoli":{"exemplarCity":"Tripoli (Libye)"}},"Asia":{"Almaty":{"exemplarCity":"Alma Ata"},"Aqtau":{"exemplarCity":"Aktaou"},"Aqtobe":{"exemplarCity":"Aktioubinsk"},"Ashgabat":{"exemplarCity":"Achgabat"},"Atyrau":{"exemplarCity":"Atyraou"},"Baghdad":{"exemplarCity":"Bagdad"},"Bahrain":{"exemplarCity":"Bahreïn"},"Baku":{"exemplarCity":"Bakou"},"Beirut":{"exemplarCity":"Beyrouth"},"Bishkek":{"exemplarCity":"Bichkek"},"Calcutta":{"exemplarCity":"Calcutta"},"Chita":{"exemplarCity":"Tchita"},"Choibalsan":{"exemplarCity":"Tchoïbalsan"},"Damascus":{"exemplarCity":"Damas"},"Dubai":{"exemplarCity":"Dubaï"},"Dushanbe":{"exemplarCity":"Douchanbé"},"Famagusta":{"exemplarCity":"Famagouste"},"Hebron":{"exemplarCity":"Hébron"},"Irkutsk":{"exemplarCity":"Irkoutsk"},"Jerusalem":{"exemplarCity":"Jérusalem"},"Kabul":{"exemplarCity":"Kaboul"},"Kamchatka":{"exemplarCity":"Kamtchatka"},"Katmandu":{"exemplarCity":"Katmandou"},"Krasnoyarsk":{"exemplarCity":"Krasnoïarsk"},"Kuwait":{"exemplarCity":"Koweït"},"Macau":{"exemplarCity":"Macao"},"Makassar":{"exemplarCity":"Macassar"},"Manila":{"exemplarCity":"Manille"},"Muscat":{"exemplarCity":"Mascate"},"Nicosia":{"exemplarCity":"Nicosie"},"Novosibirsk":{"exemplarCity":"Novossibirsk"},"Oral":{"exemplarCity":"Ouralsk"},"Qostanay":{"exemplarCity":"Kostanaï"},"Qyzylorda":{"exemplarCity":"Kzyl Orda"},"Rangoon":{"exemplarCity":"Rangoun"},"Riyadh":{"exemplarCity":"Riyad"},"Saigon":{"exemplarCity":"Hô-Chi-Minh-Ville"},"Sakhalin":{"exemplarCity":"Sakhaline"},"Samarkand":{"exemplarCity":"Samarcande"},"Seoul":{"exemplarCity":"Séoul"},"Singapore":{"exemplarCity":"Singapour"},"Tashkent":{"exemplarCity":"Tachkent"},"Tbilisi":{"exemplarCity":"Tbilissi"},"Tehran":{"exemplarCity":"Téhéran"},"Ulaanbaatar":{"exemplarCity":"Oulan-Bator"},"Urumqi":{"exemplarCity":"Ürümqi"},"Yakutsk":{"exemplarCity":"Iakoutsk"},"Yekaterinburg":{"exemplarCity":"Ekaterinbourg"},"Yerevan":{"exemplarCity":"Erevan"}},"Indian":{"Comoro":{"exemplarCity":"Comores"},"Mahe":{"exemplarCity":"Mahé"},"Mauritius":{"exemplarCity":"Maurice"},"Reunion":{"exemplarCity":"La Réunion"}},"Australia":{"Adelaide":{"exemplarCity":"Adélaïde"}},"Pacific":{"Easter":{"exemplarCity":"Île de Pâques"},"Efate":{"exemplarCity":"Éfaté"},"Enderbury":{"exemplarCity":"Enderbury"},"Fiji":{"exemplarCity":"Fidji"},"Galapagos":{"exemplarCity":"Galápagos"},"Honolulu":{"exemplarCity":"Honolulu"},"Kanton":{"exemplarCity":"Canton"},"Marquesas":{"exemplarCity":"Marquises"},"Noumea":{"exemplarCity":"Nouméa"},"Palau":{"exemplarCity":"Palaos"},"Ponape":{"exemplarCity":"Pohnpei"},"Truk":{"exemplarCity":"Chuuk"}},"Antarctica":{"DumontDUrville":{"exemplarCity":"Dumont-d’Urville"},"Syowa":{"exemplarCity":"Showa"}},"Etc":{"UTC":{"long":{"standard":"temps universel coordonné"},"short":{"standard":"UTC"}},"Unknown":{"exemplarCity":"ville inconnue"}}},"metazone":{"Acre":{"long":{"generic":"heure de l’Acre","standard":"heure normale de l’Acre","daylight":"heure d’été de l’Acre"}},"Afghanistan":{"long":{"standard":"heure de l’Afghanistan"}},"Africa_Central":{"long":{"standard":"heure normale d’Afrique centrale"}},"Africa_Eastern":{"long":{"standard":"heure normale d’Afrique de l’Est"}},"Africa_Southern":{"long":{"standard":"heure normale d’Afrique méridionale"}},"Africa_Western":{"long":{"generic":"heure d’Afrique de l’Ouest","standard":"heure normale d’Afrique de l’Ouest","daylight":"heure d’été d’Afrique de l’Ouest"}},"Alaska":{"long":{"generic":"heure de l’Alaska","standard":"heure normale de l’Alaska","daylight":"heure d’été de l’Alaska"}},"Almaty":{"long":{"generic":"heure d’Alma Ata","standard":"heure normale d’Alma Ata","daylight":"heure d’été d’Alma Ata"}},"Amazon":{"long":{"generic":"heure de l’Amazonie","standard":"heure normale de l’Amazonie","daylight":"heure d’été de l’Amazonie"}},"America_Central":{"long":{"generic":"heure du centre nord-américain","standard":"heure normale du centre nord-américain","daylight":"heure d’été du centre nord-américain"}},"America_Eastern":{"long":{"generic":"heure de l’Est nord-américain","standard":"heure normale de l’Est nord-américain","daylight":"heure d’été de l’Est nord-américain"}},"America_Mountain":{"long":{"generic":"heure des Rocheuses","standard":"heure normale des Rocheuses","daylight":"heure d’été des Rocheuses"}},"America_Pacific":{"long":{"generic":"heure du Pacifique nord-américain","standard":"heure normale du Pacifique nord-américain","daylight":"heure d’été du Pacifique nord-américain"}},"Anadyr":{"long":{"generic":"heure d’Anadyr","standard":"heure normale d’Anadyr","daylight":"heure d’été d’Anadyr"}},"Apia":{"long":{"generic":"heure d’Apia","standard":"heure normale d’Apia","daylight":"heure d’été d’Apia"}},"Aqtau":{"long":{"generic":"heure d’Aktaou","standard":"heure normale d’Aktaou","daylight":"heure d’été d’Aktaou"}},"Aqtobe":{"long":{"generic":"heure d’Aqtöbe","standard":"heure normale d’Aqtöbe","daylight":"heure d’été d’Aqtöbe"}},"Arabian":{"long":{"generic":"heure de l’Arabie","standard":"heure normale de l’Arabie","daylight":"heure d’été de l’Arabie"}},"Argentina":{"long":{"generic":"heure de l’Argentine","standard":"heure normale d’Argentine","daylight":"heure d’été de l’Argentine"}},"Argentina_Western":{"long":{"generic":"heure de l’Ouest argentin","standard":"heure normale de l’Ouest argentin","daylight":"heure d’été de l’Ouest argentin"}},"Armenia":{"long":{"generic":"heure de l’Arménie","standard":"heure normale de l’Arménie","daylight":"heure d’été d’Arménie"}},"Atlantic":{"long":{"generic":"heure de l’Atlantique","standard":"heure normale de l’Atlantique","daylight":"heure d’été de l’Atlantique"}},"Australia_Central":{"long":{"generic":"heure du centre de l’Australie","standard":"heure normale du centre de l’Australie","daylight":"heure d’été du centre de l’Australie"}},"Australia_CentralWestern":{"long":{"generic":"heure du centre-ouest de l’Australie","standard":"heure normale du centre-ouest de l’Australie","daylight":"heure d’été du centre-ouest de l’Australie"}},"Australia_Eastern":{"long":{"generic":"heure de l’Est de l’Australie","standard":"heure normale de l’Est de l’Australie","daylight":"heure d’été de l’Est de l’Australie"}},"Australia_Western":{"long":{"generic":"heure de l’Ouest de l’Australie","standard":"heure normale de l’Ouest de l’Australie","daylight":"heure d’été de l’Ouest de l’Australie"}},"Azerbaijan":{"long":{"generic":"heure de l’Azerbaïdjan","standard":"heure normale de l’Azerbaïdjan","daylight":"heure d’été d’Azerbaïdjan"}},"Azores":{"long":{"generic":"heure des Açores","standard":"heure normale des Açores","daylight":"heure d’été des Açores"}},"Bangladesh":{"long":{"generic":"heure du Bangladesh","standard":"heure normale du Bangladesh","daylight":"heure d’été du Bangladesh"}},"Bhutan":{"long":{"standard":"heure du Bhoutan"}},"Bolivia":{"long":{"standard":"heure de Bolivie"}},"Brasilia":{"long":{"generic":"heure de Brasilia","standard":"heure normale de Brasilia","daylight":"heure d’été de Brasilia"}},"Brunei":{"long":{"standard":"heure du Brunei"}},"Cape_Verde":{"long":{"generic":"heure du Cap-Vert","standard":"heure normale du Cap-Vert","daylight":"heure d’été du Cap-Vert"}},"Chamorro":{"long":{"standard":"heure des Chamorro"}},"Chatham":{"long":{"generic":"heure des îles Chatham","standard":"heure normale des îles Chatham","daylight":"heure d’été des îles Chatham"}},"Chile":{"long":{"generic":"heure du Chili","standard":"heure normale du Chili","daylight":"heure d’été du Chili"}},"China":{"long":{"generic":"heure de la Chine","standard":"heure normale de la Chine","daylight":"heure d’été de Chine"}},"Choibalsan":{"long":{"generic":"heure de Choibalsan","standard":"heure normale de Choibalsan","daylight":"heure d’été de Choibalsan"}},"Christmas":{"long":{"standard":"heure de l’île Christmas"}},"Cocos":{"long":{"standard":"heure des îles Cocos"}},"Colombia":{"long":{"generic":"heure de Colombie","standard":"heure normale de Colombie","daylight":"heure d’été de Colombie"}},"Cook":{"long":{"generic":"heure des îles Cook","standard":"heure normale des îles Cook","daylight":"heure d’été des îles Cook"}},"Cuba":{"long":{"generic":"heure de Cuba","standard":"heure normale de Cuba","daylight":"heure d’été de Cuba"}},"Davis":{"long":{"standard":"heure de Davis"}},"DumontDUrville":{"long":{"standard":"heure de Dumont-d’Urville"}},"East_Timor":{"long":{"standard":"heure du Timor oriental"}},"Easter":{"long":{"generic":"heure de l’île de Pâques","standard":"heure normale de l’île de Pâques","daylight":"heure d’été de l’île de Pâques"}},"Ecuador":{"long":{"standard":"heure de l’Équateur"}},"Europe_Central":{"long":{"generic":"heure d’Europe centrale","standard":"heure normale d’Europe centrale","daylight":"heure d’été d’Europe centrale"}},"Europe_Eastern":{"long":{"generic":"heure d’Europe de l’Est","standard":"heure normale d’Europe de l’Est","daylight":"heure d’été d’Europe de l’Est"}},"Europe_Further_Eastern":{"long":{"standard":"heure de Kaliningrad"}},"Europe_Western":{"long":{"generic":"heure d’Europe de l’Ouest","standard":"heure normale d’Europe de l’Ouest","daylight":"heure d’été d’Europe de l’Ouest"}},"Falkland":{"long":{"generic":"heure des îles Malouines","standard":"heure normale des îles Malouines","daylight":"heure d’été des îles Malouines"}},"Fiji":{"long":{"generic":"heure des îles Fidji","standard":"heure normale des îles Fidji","daylight":"heure d’été des îles Fidji"}},"French_Guiana":{"long":{"standard":"heure de la Guyane française"}},"French_Southern":{"long":{"standard":"heure des Terres australes et antarctiques françaises"}},"Galapagos":{"long":{"standard":"heure des îles Galápagos"}},"Gambier":{"long":{"standard":"heure des îles Gambier"}},"Georgia":{"long":{"generic":"heure de la Géorgie","standard":"heure normale de la Géorgie","daylight":"heure d’été de Géorgie"}},"Gilbert_Islands":{"long":{"standard":"heure des îles Gilbert"}},"GMT":{"long":{"standard":"heure moyenne de Greenwich"}},"Greenland_Eastern":{"long":{"generic":"heure de l’Est du Groenland","standard":"heure normale de l’Est du Groenland","daylight":"heure d’été de l’Est du Groenland"}},"Greenland_Western":{"long":{"generic":"heure de l’Ouest du Groenland","standard":"heure normale de l’Ouest du Groenland","daylight":"heure d’été de l’Ouest du Groenland"}},"Guam":{"long":{"standard":"heure de Guam"}},"Gulf":{"long":{"standard":"heure du Golfe"}},"Guyana":{"long":{"standard":"heure du Guyana"}},"Hawaii_Aleutian":{"long":{"generic":"heure d’Hawaï - Aléoutiennes","standard":"heure normale d’Hawaï - Aléoutiennes","daylight":"heure d’été d’Hawaï - Aléoutiennes"}},"Hong_Kong":{"long":{"generic":"heure de Hong Kong","standard":"heure normale de Hong Kong","daylight":"heure d’été de Hong Kong"}},"Hovd":{"long":{"generic":"heure de Hovd","standard":"heure normale de Hovd","daylight":"heure d’été de Hovd"}},"India":{"long":{"standard":"heure de l’Inde"}},"Indian_Ocean":{"long":{"standard":"heure de l’Océan Indien"}},"Indochina":{"long":{"standard":"heure d’Indochine"}},"Indonesia_Central":{"long":{"standard":"heure du Centre indonésien"}},"Indonesia_Eastern":{"long":{"standard":"heure de l’Est indonésien"}},"Indonesia_Western":{"long":{"standard":"heure de l’Ouest indonésien"}},"Iran":{"long":{"generic":"heure de l’Iran","standard":"heure normale d’Iran","daylight":"heure d’été d’Iran"}},"Irkutsk":{"long":{"generic":"heure d’Irkoutsk","standard":"heure normale d’Irkoutsk","daylight":"heure d’été d’Irkoutsk"}},"Israel":{"long":{"generic":"heure d’Israël","standard":"heure normale d’Israël","daylight":"heure d’été d’Israël"}},"Japan":{"long":{"generic":"heure du Japon","standard":"heure normale du Japon","daylight":"heure d’été du Japon"}},"Kamchatka":{"long":{"generic":"heure de Petropavlovsk-Kamchatski","standard":"heure normale de Petropavlovsk-Kamchatski","daylight":"heure d’été de Petropavlovsk-Kamchatski"}},"Kazakhstan_Eastern":{"long":{"standard":"heure de l’Est du Kazakhstan"}},"Kazakhstan_Western":{"long":{"standard":"heure de l’Ouest du Kazakhstan"}},"Korea":{"long":{"generic":"heure de la Corée","standard":"heure normale de la Corée","daylight":"heure d’été de Corée"}},"Kosrae":{"long":{"standard":"heure de Kosrae"}},"Krasnoyarsk":{"long":{"generic":"heure de Krasnoïarsk","standard":"heure normale de Krasnoïarsk","daylight":"heure d’été de Krasnoïarsk"}},"Kyrgystan":{"long":{"standard":"heure du Kirghizistan"}},"Line_Islands":{"long":{"standard":"heure des îles de la Ligne"}},"Lord_Howe":{"long":{"generic":"heure de Lord Howe","standard":"heure normale de Lord Howe","daylight":"heure d’été de Lord Howe"}},"Magadan":{"long":{"generic":"heure de Magadan","standard":"heure normale de Magadan","daylight":"heure d’été de Magadan"}},"Malaysia":{"long":{"standard":"heure de la Malaisie"}},"Maldives":{"long":{"standard":"heure des Maldives"}},"Marquesas":{"long":{"standard":"heure des îles Marquises"}},"Marshall_Islands":{"long":{"standard":"heure des îles Marshall"}},"Mauritius":{"long":{"generic":"heure de Maurice","standard":"heure normale de Maurice","daylight":"heure d’été de Maurice"}},"Mawson":{"long":{"standard":"heure de Mawson"}},"Mexico_Pacific":{"long":{"generic":"heure du Pacifique mexicain","standard":"heure normale du Pacifique mexicain","daylight":"heure d’été du Pacifique mexicain"}},"Mongolia":{"long":{"generic":"heure d’Oulan-Bator","standard":"heure normale d’Oulan-Bator","daylight":"heure d’été d’Oulan-Bator"}},"Moscow":{"long":{"generic":"heure de Moscou","standard":"heure normale de Moscou","daylight":"heure d’été de Moscou"}},"Myanmar":{"long":{"standard":"heure du Myanmar"}},"Nauru":{"long":{"standard":"heure de Nauru"}},"Nepal":{"long":{"standard":"heure du Népal"}},"New_Caledonia":{"long":{"generic":"heure de la Nouvelle-Calédonie","standard":"heure normale de la Nouvelle-Calédonie","daylight":"heure d’été de Nouvelle-Calédonie"}},"New_Zealand":{"long":{"generic":"heure de la Nouvelle-Zélande","standard":"heure normale de la Nouvelle-Zélande","daylight":"heure d’été de la Nouvelle-Zélande"}},"Newfoundland":{"long":{"generic":"heure de Terre-Neuve","standard":"heure normale de Terre-Neuve","daylight":"heure d’été de Terre-Neuve"}},"Niue":{"long":{"standard":"heure de Niue"}},"Norfolk":{"long":{"generic":"heure de l’île Norfolk","standard":"heure normale de l’île Norfolk","daylight":"heure d’été de l’île Norfolk"}},"Noronha":{"long":{"generic":"heure de Fernando de Noronha","standard":"heure normale de Fernando de Noronha","daylight":"heure d’été de Fernando de Noronha"}},"North_Mariana":{"long":{"standard":"heure des îles Mariannes du Nord"}},"Novosibirsk":{"long":{"generic":"heure de Novossibirsk","standard":"heure normale de Novossibirsk","daylight":"heure d’été de Novossibirsk"}},"Omsk":{"long":{"generic":"heure de Omsk","standard":"heure normale de Omsk","daylight":"heure d’été de Omsk"}},"Pakistan":{"long":{"generic":"heure du Pakistan","standard":"heure normale du Pakistan","daylight":"heure d’été du Pakistan"}},"Palau":{"long":{"standard":"heure des Palaos"}},"Papua_New_Guinea":{"long":{"standard":"heure de la Papouasie-Nouvelle-Guinée"}},"Paraguay":{"long":{"generic":"heure du Paraguay","standard":"heure normale du Paraguay","daylight":"heure d’été du Paraguay"}},"Peru":{"long":{"generic":"heure du Pérou","standard":"heure normale du Pérou","daylight":"heure d’été du Pérou"}},"Philippines":{"long":{"generic":"heure des Philippines","standard":"heure normale des Philippines","daylight":"heure d’été des Philippines"}},"Phoenix_Islands":{"long":{"standard":"heure des îles Phoenix"}},"Pierre_Miquelon":{"long":{"generic":"heure de Saint-Pierre-et-Miquelon","standard":"heure normale de Saint-Pierre-et-Miquelon","daylight":"heure d’été de Saint-Pierre-et-Miquelon"}},"Pitcairn":{"long":{"standard":"heure des îles Pitcairn"}},"Ponape":{"long":{"standard":"heure de l’île de Pohnpei"}},"Pyongyang":{"long":{"standard":"heure de Pyongyang"}},"Reunion":{"long":{"standard":"heure de La Réunion"}},"Rothera":{"long":{"standard":"heure de Rothera"}},"Sakhalin":{"long":{"generic":"heure de Sakhaline","standard":"heure normale de Sakhaline","daylight":"heure d’été de Sakhaline"}},"Samara":{"long":{"generic":"heure de Samara","standard":"heure normale de Samara","daylight":"heure d’été de Samara"}},"Samoa":{"long":{"generic":"heure des Samoa","standard":"heure normale des Samoa","daylight":"heure d’été des Samoa"}},"Seychelles":{"long":{"standard":"heure des Seychelles"}},"Singapore":{"long":{"standard":"heure de Singapour"}},"Solomon":{"long":{"standard":"heure des îles Salomon"}},"South_Georgia":{"long":{"standard":"heure de Géorgie du Sud"}},"Suriname":{"long":{"standard":"heure du Suriname"}},"Syowa":{"long":{"standard":"heure de Syowa"}},"Tahiti":{"long":{"standard":"heure de Tahiti"}},"Taipei":{"long":{"generic":"heure de Taipei","standard":"heure normale de Taipei","daylight":"heure d’été de Taipei"}},"Tajikistan":{"long":{"standard":"heure du Tadjikistan"}},"Tokelau":{"long":{"standard":"heure de Tokelau"}},"Tonga":{"long":{"generic":"heure des Tonga","standard":"heure normale des Tonga","daylight":"heure d’été de Tonga"}},"Truk":{"long":{"standard":"heure de Chuuk"}},"Turkmenistan":{"long":{"generic":"heure du Turkménistan","standard":"heure normale du Turkménistan","daylight":"heure d’été du Turkménistan"}},"Tuvalu":{"long":{"standard":"heure des Tuvalu"}},"Uruguay":{"long":{"generic":"heure de l’Uruguay","standard":"heure normale de l’Uruguay","daylight":"heure d’été de l’Uruguay"}},"Uzbekistan":{"long":{"generic":"heure de l’Ouzbékistan","standard":"heure normale de l’Ouzbékistan","daylight":"heure d’été de l’Ouzbékistan"}},"Vanuatu":{"long":{"generic":"heure du Vanuatu","standard":"heure normale du Vanuatu","daylight":"heure d’été de Vanuatu"}},"Venezuela":{"long":{"standard":"heure du Venezuela"}},"Vladivostok":{"long":{"generic":"heure de Vladivostok","standard":"heure normale de Vladivostok","daylight":"heure d’été de Vladivostok"}},"Volgograd":{"long":{"generic":"heure de Volgograd","standard":"heure normale de Volgograd","daylight":"heure d’été de Volgograd"}},"Vostok":{"long":{"standard":"heure de Vostok"}},"Wake":{"long":{"standard":"heure de l’île Wake"}},"Wallis":{"long":{"standard":"heure de Wallis-et-Futuna"}},"Yakutsk":{"long":{"generic":"heure de Iakoutsk","standard":"heure normale de Iakoutsk","daylight":"heure d’été de Iakoutsk"}},"Yekaterinburg":{"long":{"generic":"heure d’Ekaterinbourg","standard":"heure normale d’Ekaterinbourg","daylight":"heure d’été d’Ekaterinbourg"}},"Yukon":{"long":{"standard":"heure normale du Yukon"}}}}}}}`),yu={main:Cl},gu=Object.freeze(Object.defineProperty({__proto__:null,default:yu,main:Cl},Symbol.toStringTag,{value:"Module"})),Sl=JSON.parse('{"ar":{"numbers":{"defaultNumberingSystem":"arab","defaultNumberingSystem-alt-latn":"latn","otherNumberingSystems":{"native":"arab"},"minimumGroupingDigits":"1","symbols-numberSystem-arab":{"decimal":"٫","group":"٬","list":"؛","percentSign":"٪؜","plusSign":"؜+","minusSign":"؜-","approximatelySign":"~","exponential":"أس","superscriptingExponent":"×","perMille":"؉","infinity":"∞","nan":"ليس رقم","timeSeparator":":"},"symbols-numberSystem-latn":{"decimal":".","group":",","list":";","percentSign":"‎%‎","plusSign":"‎+","minusSign":"‎-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"ليس رقمًا","timeSeparator":":"},"decimalFormats-numberSystem-arab":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-zero":"0 ألف","1000-count-one":"0 ألف","1000-count-two":"0 ألف","1000-count-few":"0 آلاف","1000-count-many":"0 ألف","1000-count-other":"0 ألف","10000-count-zero":"00 ألف","10000-count-one":"00 ألف","10000-count-two":"00 ألف","10000-count-few":"00 ألف","10000-count-many":"00 ألف","10000-count-other":"00 ألف","100000-count-zero":"000 ألف","100000-count-one":"000 ألف","100000-count-two":"000 ألف","100000-count-few":"000 ألف","100000-count-many":"000 ألف","100000-count-other":"000 ألف","1000000-count-zero":"0 مليون","1000000-count-one":"0 مليون","1000000-count-two":"0 مليون","1000000-count-few":"0 ملايين","1000000-count-many":"0 مليون","1000000-count-other":"0 مليون","10000000-count-zero":"00 مليون","10000000-count-one":"00 مليون","10000000-count-two":"00 مليون","10000000-count-few":"00 ملايين","10000000-count-many":"00 مليون","10000000-count-other":"00 مليون","100000000-count-zero":"000 مليون","100000000-count-one":"000 مليون","100000000-count-two":"000 مليون","100000000-count-few":"000 مليون","100000000-count-many":"000 مليون","100000000-count-other":"000 مليون","1000000000-count-zero":"0 مليار","1000000000-count-one":"0 مليار","1000000000-count-two":"0 مليار","1000000000-count-few":"0 مليار","1000000000-count-many":"0 مليار","1000000000-count-other":"0 مليار","10000000000-count-zero":"00 مليار","10000000000-count-one":"00 مليار","10000000000-count-two":"00 مليار","10000000000-count-few":"00 مليار","10000000000-count-many":"00 مليار","10000000000-count-other":"00 مليار","100000000000-count-zero":"000 مليار","100000000000-count-one":"000 مليار","100000000000-count-two":"000 مليار","100000000000-count-few":"000 مليار","100000000000-count-many":"000 مليار","100000000000-count-other":"000 مليار","1000000000000-count-zero":"0 ترليون","1000000000000-count-one":"0 ترليون","1000000000000-count-two":"0 ترليون","1000000000000-count-few":"0 ترليون","1000000000000-count-many":"0 ترليون","1000000000000-count-other":"0 ترليون","10000000000000-count-zero":"00 ترليون","10000000000000-count-one":"00 ترليون","10000000000000-count-two":"00 ترليون","10000000000000-count-few":"00 ترليون","10000000000000-count-many":"00 ترليون","10000000000000-count-other":"00 ترليون","100000000000000-count-zero":"000 ترليون","100000000000000-count-one":"000 ترليون","100000000000000-count-two":"000 ترليون","100000000000000-count-few":"000 ترليون","100000000000000-count-many":"000 ترليون","100000000000000-count-other":"000 ترليون"}},"short":{"decimalFormat":{"1000-count-zero":"0 ألف","1000-count-one":"0 ألف","1000-count-two":"0 ألف","1000-count-few":"0 آلاف","1000-count-many":"0 ألف","1000-count-other":"0 ألف","10000-count-zero":"00 ألف","10000-count-one":"00 ألف","10000-count-two":"00 ألف","10000-count-few":"00 ألف","10000-count-many":"00 ألف","10000-count-other":"00 ألف","100000-count-zero":"000 ألف","100000-count-one":"000 ألف","100000-count-two":"000 ألف","100000-count-few":"000 ألف","100000-count-many":"000 ألف","100000-count-other":"000 ألف","1000000-count-one":"0 مليون","1000000-count-other":"0 مليون","10000000-count-one":"00 مليون","10000000-count-other":"00 مليون","100000000-count-one":"000 مليون","100000000-count-other":"000 مليون","1000000000-count-one":"0 مليار","1000000000-count-other":"0 مليار","10000000000-count-one":"00 مليار","10000000000-count-other":"00 مليار","100000000000-count-one":"000 مليار","100000000000-count-other":"000 مليار","1000000000000-count-one":"0 ترليون","1000000000000-count-other":"0 ترليون","10000000000000-count-one":"00 ترليون","10000000000000-count-other":"00 ترليون","100000000000000-count-one":"000 ترليون","100000000000000-count-other":"000 ترليون"}}},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-zero":"0 ألف","1000-count-one":"0 ألف","1000-count-two":"0 ألف","1000-count-few":"0 آلاف","1000-count-many":"0 ألف","1000-count-other":"0 ألف","10000-count-zero":"00 ألف","10000-count-one":"00 ألف","10000-count-two":"00 ألف","10000-count-few":"00 ألف","10000-count-many":"00 ألف","10000-count-other":"00 ألف","100000-count-zero":"000 ألف","100000-count-one":"000 ألف","100000-count-two":"000 ألف","100000-count-few":"000 ألف","100000-count-many":"000 ألف","100000-count-other":"000 ألف","1000000-count-zero":"0 مليون","1000000-count-one":"0 مليون","1000000-count-two":"0 مليون","1000000-count-few":"0 ملايين","1000000-count-many":"0 مليون","1000000-count-other":"0 مليون","10000000-count-zero":"00 مليون","10000000-count-one":"00 مليون","10000000-count-two":"00 مليون","10000000-count-few":"00 ملايين","10000000-count-many":"00 مليون","10000000-count-other":"00 مليون","100000000-count-zero":"000 مليون","100000000-count-one":"000 مليون","100000000-count-two":"000 مليون","100000000-count-few":"000 مليون","100000000-count-many":"000 مليون","100000000-count-other":"000 مليون","1000000000-count-zero":"0 مليار","1000000000-count-one":"0 مليار","1000000000-count-two":"0 مليار","1000000000-count-few":"0 مليار","1000000000-count-many":"0 مليار","1000000000-count-other":"0 مليار","10000000000-count-zero":"00 مليار","10000000000-count-one":"00 مليار","10000000000-count-two":"00 مليار","10000000000-count-few":"00 مليار","10000000000-count-many":"00 مليار","10000000000-count-other":"00 مليار","100000000000-count-zero":"000 مليار","100000000000-count-one":"000 مليار","100000000000-count-two":"000 مليار","100000000000-count-few":"000 مليار","100000000000-count-many":"000 مليار","100000000000-count-other":"000 مليار","1000000000000-count-zero":"0 ترليون","1000000000000-count-one":"0 ترليون","1000000000000-count-two":"0 ترليون","1000000000000-count-few":"0 ترليون","1000000000000-count-many":"0 ترليون","1000000000000-count-other":"0 ترليون","10000000000000-count-zero":"00 ترليون","10000000000000-count-one":"00 ترليون","10000000000000-count-two":"00 ترليون","10000000000000-count-few":"00 ترليون","10000000000000-count-many":"00 ترليون","10000000000000-count-other":"00 ترليون","100000000000000-count-zero":"000 ترليون","100000000000000-count-one":"000 ترليون","100000000000000-count-two":"000 ترليون","100000000000000-count-few":"000 ترليون","100000000000000-count-many":"000 ترليون","100000000000000-count-other":"000 ترليون"}},"short":{"decimalFormat":{"1000-count-zero":"0 ألف","1000-count-one":"0 ألف","1000-count-two":"0 ألف","1000-count-few":"0 آلاف","1000-count-many":"0 ألف","1000-count-other":"0 ألف","10000-count-zero":"00 ألف","10000-count-one":"00 ألف","10000-count-two":"00 ألف","10000-count-few":"00 ألف","10000-count-many":"00 ألف","10000-count-other":"00 ألف","100000-count-zero":"000 ألف","100000-count-one":"000 ألف","100000-count-two":"000 ألف","100000-count-few":"000 ألف","100000-count-many":"000 ألف","100000-count-other":"000 ألف","1000000-count-one":"0 مليون","1000000-count-other":"0 مليون","10000000-count-one":"00 مليون","10000000-count-other":"00 مليون","100000000-count-one":"000 مليون","100000000-count-other":"000 مليون","1000000000-count-one":"0 مليار","1000000000-count-other":"0 مليار","10000000000-count-one":"00 مليار","10000000000-count-other":"00 مليار","100000000000-count-one":"000 مليار","100000000000-count-other":"000 مليار","1000000000000-count-one":"0 ترليون","1000000000000-count-other":"0 ترليون","10000000000000-count-one":"00 ترليون","10000000000000-count-other":"00 ترليون","100000000000000-count-one":"000 ترليون","100000000000000-count-other":"000 ترليون"}}},"scientificFormats-numberSystem-arab":{"standard":"#E0"},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-arab":{"standard":"#,##0%"},"percentFormats-numberSystem-latn":{"standard":"#,##0%"},"currencyFormats-numberSystem-arab":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"‏#,##0.00 ¤","standard-noCurrency":"#,##0.00","accounting":"‏#,##0.00 ¤","accounting-noCurrency":"#,##0.00","unitPattern-count-zero":"{0} {1}","unitPattern-count-one":"{0} {1}","unitPattern-count-two":"{0} {1}","unitPattern-count-few":"{0} {1}","unitPattern-count-many":"{0} {1}","unitPattern-count-other":"{0} {1}"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"‏#,##0.00 ¤;‏-#,##0.00 ¤","standard-noCurrency":"#,##0.00","accounting":"؜#,##0.00¤;(؜#,##0.00¤)","accounting-alphaNextToNumber":"؜#,##0.00 ¤;(؜#,##0.00 ¤)","accounting-noCurrency":"#,##0.00;(#,##0.00)","short":{"standard":{"1000-count-zero":"0 ألف ¤","1000-count-one":"0 ألف ¤","1000-count-two":"0 ألف ¤","1000-count-few":"0 ألف ¤","1000-count-many":"0 ألف ¤","1000-count-other":"0 ألف ¤","10000-count-zero":"00 ألف ¤","10000-count-one":"00 ألف ¤","10000-count-two":"00 ألف ¤","10000-count-few":"00 ألف ¤","10000-count-many":"00 ألف ¤","10000-count-other":"00 ألف ¤","100000-count-zero":"000 ألف ¤","100000-count-one":"000 ألف ¤","100000-count-two":"000 ألف ¤","100000-count-few":"000 ألف ¤","100000-count-many":"000 ألف ¤","100000-count-other":"000 ألف ¤","1000000-count-zero":"0 مليون ¤","1000000-count-one":"0 مليون ¤","1000000-count-two":"0 مليون ¤","1000000-count-few":"0 مليون ¤","1000000-count-many":"0 مليون ¤","1000000-count-other":"0 مليون ¤","10000000-count-zero":"00 مليون ¤","10000000-count-one":"00 مليون ¤","10000000-count-two":"00 مليون ¤","10000000-count-few":"00 مليون ¤","10000000-count-many":"00 مليون ¤","10000000-count-other":"00 مليون ¤","100000000-count-zero":"000 مليون ¤","100000000-count-one":"000 مليون ¤","100000000-count-two":"000 مليون ¤","100000000-count-few":"000 مليون ¤","100000000-count-many":"000 مليون ¤","100000000-count-other":"000 مليون ¤","1000000000-count-zero":"0 مليار ¤","1000000000-count-one":"0 مليار ¤","1000000000-count-two":"0 مليار ¤","1000000000-count-few":"0 مليار ¤","1000000000-count-many":"0 مليار ¤","1000000000-count-other":"0 مليار ¤","10000000000-count-zero":"00 مليار ¤","10000000000-count-one":"00 مليار ¤","10000000000-count-two":"00 مليار ¤","10000000000-count-few":"00 مليار ¤","10000000000-count-many":"00 مليار ¤","10000000000-count-other":"00 مليار ¤","100000000000-count-zero":"000 مليار ¤","100000000000-count-one":"000 مليار ¤","100000000000-count-two":"000 مليار ¤","100000000000-count-few":"000 مليار ¤","100000000000-count-many":"000 مليار ¤","100000000000-count-other":"000 مليار ¤","1000000000000-count-zero":"0 ترليون ¤","1000000000000-count-one":"0 ترليون ¤","1000000000000-count-two":"0 ترليون ¤","1000000000000-count-few":"0 ترليون ¤","1000000000000-count-many":"0 ترليون ¤","1000000000000-count-other":"0 ترليون ¤","10000000000000-count-zero":"00 ترليون ¤","10000000000000-count-one":"00 ترليون ¤","10000000000000-count-two":"00 ترليون ¤","10000000000000-count-few":"00 ترليون ¤","10000000000000-count-many":"00 ترليون ¤","10000000000000-count-other":"00 ترليون ¤","100000000000000-count-zero":"000 ترليون ¤","100000000000000-count-one":"000 ترليون ¤","100000000000000-count-two":"000 ترليون ¤","100000000000000-count-few":"000 ترليون ¤","100000000000000-count-many":"000 ترليون ¤","100000000000000-count-other":"000 ترليون ¤"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-zero":"{0} {1}","unitPattern-count-one":"{0} {1}","unitPattern-count-two":"{0} {1}","unitPattern-count-few":"{0} {1}","unitPattern-count-many":"{0} {1}","unitPattern-count-other":"{0} {1}"},"miscPatterns-numberSystem-arab":{"approximately":"~{0}","atLeast":"+{0}","atMost":"≤{0}","range":"{0}–{1}"},"miscPatterns-numberSystem-latn":{"approximately":"~{0}","atLeast":"+{0}","atMost":"≤{0}","range":"{0}–{1}"},"minimalPairs":{"pluralMinimalPairs-count-zero":"{0} ولد حضر","pluralMinimalPairs-count-one":"ولد واحد حضر","pluralMinimalPairs-count-two":"ولدان حضرا","pluralMinimalPairs-count-few":"{0} أولاد حضروا","pluralMinimalPairs-count-many":"{0} ولدًا حضروا","pluralMinimalPairs-count-other":"{0} ولد حضروا","other":"اتجه إلى المنعطف الـ {0} يمينًا.","feminine":"{0} واحدة","masculine":"{0} واحد"},"currencies":{"ADP":{"displayName":"بيستا أندوري"},"AED":{"displayName":"درهم إماراتي","symbol":"د.إ.‏"},"AFA":{"displayName":"أفغاني - 1927-2002"},"AFN":{"displayName":"أفغاني","displayName-count-zero":"أفغاني أفغانستاني","displayName-count-one":"أفغاني أفغانستاني","displayName-count-two":"أفغاني أفغانستاني","displayName-count-few":"أفغاني أفغانستاني","displayName-count-many":"أفغاني أفغانستاني","displayName-count-other":"أفغاني أفغانستاني","symbol-alt-narrow":"؋"},"ALL":{"displayName":"ليك ألباني"},"AMD":{"displayName":"درام أرميني","symbol-alt-narrow":"֏"},"ANG":{"displayName":"غيلدر أنتيلي هولندي"},"AOA":{"displayName":"كوانزا أنغولي","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"كوانزا أنجولي - 1977-1990"},"AON":{"displayName":"كوانزا أنجولي جديدة - 1990-2000"},"AOR":{"displayName":"كوانزا أنجولي معدلة - 1995 - 1999"},"ARA":{"displayName":"استرال أرجنتيني"},"ARP":{"displayName":"بيزو أرجنتيني - 1983-1985"},"ARS":{"displayName":"بيزو أرجنتيني","symbol-alt-narrow":"AR$"},"ATS":{"displayName":"شلن نمساوي"},"AUD":{"displayName":"دولار أسترالي","symbol":"AU$","symbol-alt-narrow":"AU$"},"AWG":{"displayName":"فلورن أروبي"},"AZM":{"displayName":"مانات أذريبجاني"},"AZN":{"displayName":"مانات أذربيجان","displayName-count-zero":"مانت أذربيجاني","displayName-count-one":"مانت أذربيجاني","displayName-count-two":"مانت أذربيجاني","displayName-count-few":"مانت أذربيجاني","displayName-count-many":"مانت أذربيجاني","displayName-count-other":"مانت أذربيجاني","symbol-alt-narrow":"₼"},"BAD":{"displayName":"دينار البوسنة والهرسك"},"BAM":{"displayName":"مارك البوسنة والهرسك قابل للتحويل","symbol-alt-narrow":"KM"},"BBD":{"displayName":"دولار بربادوسي","symbol-alt-narrow":"BB$"},"BDT":{"displayName":"تاكا بنغلاديشي","symbol-alt-narrow":"৳"},"BEC":{"displayName":"فرنك بلجيكي قابل للتحويل"},"BEF":{"displayName":"فرنك بلجيكي"},"BEL":{"displayName":"فرنك بلجيكي مالي"},"BGN":{"displayName":"ليف بلغاري"},"BHD":{"displayName":"دينار بحريني","symbol":"د.ب.‏"},"BIF":{"displayName":"فرنك بروندي"},"BMD":{"displayName":"دولار برمودي","symbol-alt-narrow":"BM$"},"BND":{"displayName":"دولار بروناي","symbol-alt-narrow":"BN$"},"BOB":{"displayName":"بوليفيانو بوليفي","symbol-alt-narrow":"Bs"},"BOP":{"displayName":"بيزو بوليفي"},"BOV":{"displayName":"مفدول بوليفي"},"BRB":{"displayName":"نوفو كروزايرو برازيلي - 1967-1986"},"BRC":{"displayName":"كروزادو برازيلي"},"BRE":{"displayName":"كروزايرو برازيلي - 1990-1993"},"BRL":{"displayName":"ريال برازيلي","symbol":"R$","symbol-alt-narrow":"R$"},"BSD":{"displayName":"دولار باهامي","symbol-alt-narrow":"BS$"},"BTN":{"displayName":"نولتوم بوتاني"},"BUK":{"displayName":"كيات بورمي"},"BWP":{"displayName":"بولا بتسواني","symbol-alt-narrow":"P"},"BYB":{"displayName":"روبل بيلاروسي جديد - 1994-1999"},"BYN":{"displayName":"روبل بيلاروسي","symbol-alt-narrow":"р."},"BYR":{"displayName":"روبل بيلاروسي (٢٠٠٠–٢٠١٦)"},"BZD":{"displayName":"دولار بليزي","displayName-count-zero":"دولار بليزي","displayName-count-one":"دولار بليزي","displayName-count-two":"دولاران بليزيان","displayName-count-few":"دولار بليزي","displayName-count-many":"دولار بليزي","displayName-count-other":"دولار بليزي","symbol-alt-narrow":"BZ$"},"CAD":{"displayName":"دولار كندي","symbol":"CA$","symbol-alt-narrow":"CA$"},"CDF":{"displayName":"فرنك كونغولي"},"CHF":{"displayName":"فرنك سويسري"},"CLP":{"displayName":"بيزو تشيلي","symbol-alt-narrow":"CL$"},"CNH":{"displayName":"يوان صيني (في الخارج)"},"CNY":{"displayName":"يوان صيني","symbol":"CN¥","symbol-alt-narrow":"CN¥"},"COP":{"displayName":"بيزو كولومبي","symbol-alt-narrow":"CO$"},"CRC":{"displayName":"كولن كوستاريكي","symbol-alt-narrow":"₡"},"CSD":{"displayName":"دينار صربي قديم"},"CSK":{"displayName":"كرونة تشيكوسلوفاكيا"},"CUC":{"displayName":"بيزو كوبي قابل للتحويل","symbol-alt-narrow":"$"},"CUP":{"displayName":"بيزو كوبي","symbol-alt-narrow":"CU$"},"CVE":{"displayName":"اسكودو الرأس الأخضر"},"CYP":{"displayName":"جنيه قبرصي"},"CZK":{"displayName":"كرونة تشيكية","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"أوستمارك ألماني شرقي"},"DEM":{"displayName":"مارك ألماني"},"DJF":{"displayName":"فرنك جيبوتي"},"DKK":{"displayName":"كرونة دنماركية","symbol-alt-narrow":"kr"},"DOP":{"displayName":"بيزو الدومنيكان","symbol-alt-narrow":"DO$"},"DZD":{"displayName":"دينار جزائري","displayName-count-zero":"دينار جزائري","displayName-count-one":"دينار جزائري","displayName-count-two":"ديناران جزائريان","displayName-count-few":"دينارات جزائرية","displayName-count-many":"دينارًا جزائريًا","displayName-count-other":"دينار جزائري","symbol":"د.ج.‏"},"EEK":{"displayName":"كرونة استونية"},"EGP":{"displayName":"جنيه مصري","displayName-count-zero":"جنيه مصري","displayName-count-one":"جنيه مصري","displayName-count-two":"جنيهان مصريان","displayName-count-few":"جنيهات مصرية","displayName-count-many":"جنيهًا مصريًا","displayName-count-other":"جنيه مصري","symbol":"ج.م.‏","symbol-alt-narrow":"E£"},"ERN":{"displayName":"ناكفا أريتري"},"ESP":{"displayName":"بيزيتا إسباني","symbol-alt-narrow":"₧"},"ETB":{"displayName":"بير أثيوبي"},"EUR":{"displayName":"يورو","symbol":"€","symbol-alt-narrow":"€"},"FIM":{"displayName":"ماركا فنلندي"},"FJD":{"displayName":"دولار فيجي","symbol-alt-narrow":"FJ$"},"FKP":{"displayName":"جنيه جزر فوكلاند","symbol-alt-narrow":"£"},"FRF":{"displayName":"فرنك فرنسي"},"GBP":{"displayName":"جنيه إسترليني","symbol":"UK£","symbol-alt-narrow":"UK£"},"GEL":{"displayName":"لارى جورجي","displayName-count-zero":"لاري جورجي","displayName-count-one":"لاري جورجي","displayName-count-two":"لاري جورجي","displayName-count-few":"لاري جورجي","displayName-count-many":"لاري جورجي","displayName-count-other":"لاري جورجي","symbol-alt-narrow":"₾"},"GHC":{"displayName":"سيدي غاني"},"GHS":{"displayName":"سيدي غانا","symbol-alt-narrow":"GH₵"},"GIP":{"displayName":"جنيه جبل طارق","symbol-alt-narrow":"£"},"GMD":{"displayName":"دلاسي غامبي"},"GNF":{"displayName":"فرنك غينيا","symbol-alt-narrow":"FG"},"GNS":{"displayName":"سيلي غينيا"},"GQE":{"displayName":"اكويل جونينا غينيا الاستوائيّة"},"GRD":{"displayName":"دراخما يوناني"},"GTQ":{"displayName":"كوتزال غواتيمالا","symbol-alt-narrow":"Q"},"GWE":{"displayName":"اسكود برتغالي غينيا"},"GWP":{"displayName":"بيزو غينيا بيساو"},"GYD":{"displayName":"دولار غيانا","symbol-alt-narrow":"GY$"},"HKD":{"displayName":"دولار هونغ كونغ","symbol":"HK$","symbol-alt-narrow":"HK$"},"HNL":{"displayName":"ليمبيرا هنداروس","displayName-count-zero":"ليمبيرا هندوراس","displayName-count-one":"ليمبيرا هندوراس","displayName-count-two":"ليمبيرا هندوراس","displayName-count-few":"ليمبيرا هندوراس","displayName-count-many":"ليمبيرا هندوراس","displayName-count-other":"ليمبيرا هندوراس","symbol-alt-narrow":"L"},"HRD":{"displayName":"دينار كرواتي"},"HRK":{"displayName":"كونا كرواتي","symbol-alt-narrow":"kn"},"HTG":{"displayName":"جوردى هايتي"},"HUF":{"displayName":"فورينت هنغاري","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"روبية إندونيسية","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"جنيه إيرلندي"},"ILP":{"displayName":"جنيه إسرائيلي"},"ILS":{"displayName":"شيكل إسرائيلي جديد","symbol":"₪","symbol-alt-narrow":"₪"},"INR":{"displayName":"روبية هندي","symbol":"₹","symbol-alt-narrow":"₹"},"IQD":{"displayName":"دينار عراقي","symbol":"د.ع.‏"},"IRR":{"displayName":"ريال إيراني","symbol":"ر.إ."},"ISK":{"displayName":"كرونة أيسلندية","symbol-alt-narrow":"kr"},"ITL":{"displayName":"ليرة إيطالية"},"JMD":{"displayName":"دولار جامايكي","symbol-alt-narrow":"JM$"},"JOD":{"displayName":"دينار أردني","symbol":"د.أ.‏"},"JPY":{"displayName":"ين ياباني","symbol":"JP¥","symbol-alt-narrow":"JP¥"},"KES":{"displayName":"شلن كينيي"},"KGS":{"displayName":"سوم قيرغستاني","symbol-alt-narrow":"⃀"},"KHR":{"displayName":"رييال كمبودي","symbol-alt-narrow":"៛"},"KMF":{"displayName":"فرنك جزر القمر","symbol-alt-narrow":"CF"},"KPW":{"displayName":"وون كوريا الشمالية","symbol-alt-narrow":"₩"},"KRW":{"displayName":"وون كوريا الجنوبية","symbol":"₩","symbol-alt-narrow":"₩"},"KWD":{"displayName":"دينار كويتي","symbol":"د.ك.‏"},"KYD":{"displayName":"دولار جزر كيمن","symbol-alt-narrow":"KY$"},"KZT":{"displayName":"تينغ كازاخستاني","symbol-alt-narrow":"₸"},"LAK":{"displayName":"كيب لاوسي","symbol-alt-narrow":"₭"},"LBP":{"displayName":"جنيه لبناني","symbol":"ل.ل.‏","symbol-alt-narrow":"L£"},"LKR":{"displayName":"روبية سريلانكية","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"دولار ليبيري","displayName-count-zero":"دولار ليبيري","displayName-count-one":"دولار ليبيري","displayName-count-two":"دولاران ليبيريان","displayName-count-few":"دولارات ليبيرية","displayName-count-many":"دولارًا ليبيريًا","displayName-count-other":"دولار ليبيري","symbol-alt-narrow":"$LR"},"LSL":{"displayName":"لوتي ليسوتو"},"LTL":{"displayName":"ليتا ليتوانية","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"تالوناس ليتواني"},"LUC":{"displayName":"فرنك لوكسمبرج قابل للتحويل"},"LUF":{"displayName":"فرنك لوكسمبرج"},"LUL":{"displayName":"فرنك لوكسمبرج المالي"},"LVL":{"displayName":"لاتس لاتفيا","displayName-count-zero":"لاتس لاتفي","displayName-count-one":"لاتس لاتفي","displayName-count-two":"لاتس لاتفي","displayName-count-few":"لاتس لاتفي","displayName-count-many":"لاتس لاتفي","displayName-count-other":"لاتس لاتفي","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"روبل لاتفيا"},"LYD":{"displayName":"دينار ليبي","displayName-count-zero":"دينار ليبي","displayName-count-one":"دينار ليبي","displayName-count-two":"ديناران ليبيان","displayName-count-few":"دينارات ليبية","displayName-count-many":"دينارًا ليبيًا","displayName-count-other":"دينار ليبي","symbol":"د.ل.‏"},"MAD":{"displayName":"درهم مغربي","displayName-count-zero":"درهم مغربي","displayName-count-one":"درهم مغربي","displayName-count-two":"درهمان مغربيان","displayName-count-few":"دراهم مغربية","displayName-count-many":"درهمًا مغربيًا","displayName-count-other":"درهم مغربي","symbol":"د.م.‏"},"MAF":{"displayName":"فرنك مغربي"},"MDL":{"displayName":"ليو مولدوفي"},"MGA":{"displayName":"أرياري مدغشقر","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"فرنك مدغشقر"},"MKD":{"displayName":"دينار مقدوني","displayName-count-zero":"دينار مقدوني","displayName-count-one":"دينار مقدوني","displayName-count-two":"ديناران مقدونيان","displayName-count-few":"دينارات مقدونية","displayName-count-many":"دينارًا مقدونيًا","displayName-count-other":"دينار مقدوني"},"MLF":{"displayName":"فرنك مالي"},"MMK":{"displayName":"كيات ميانمار","symbol-alt-narrow":"K"},"MNT":{"displayName":"توغروغ منغولي","symbol-alt-narrow":"₮"},"MOP":{"displayName":"باتاكا ماكاوي"},"MRO":{"displayName":"أوقية موريتانية - 1973-2017"},"MRU":{"displayName":"أوقية موريتانية","symbol":"أ.م."},"MTL":{"displayName":"ليرة مالطية"},"MTP":{"displayName":"جنيه مالطي"},"MUR":{"displayName":"روبية موريشيوسية","symbol-alt-narrow":"Rs"},"MVR":{"displayName":"روفيه جزر المالديف"},"MWK":{"displayName":"كواشا مالاوي"},"MXN":{"displayName":"بيزو مكسيكي","symbol":"MX$","symbol-alt-narrow":"MX$"},"MXP":{"displayName":"بيزو فضي مكسيكي - 1861-1992"},"MYR":{"displayName":"رينغيت ماليزي","symbol-alt-narrow":"RM"},"MZE":{"displayName":"اسكود موزمبيقي"},"MZN":{"displayName":"متكال موزمبيقي"},"NAD":{"displayName":"دولار ناميبي","symbol-alt-narrow":"$"},"NGN":{"displayName":"نايرا نيجيري","symbol-alt-narrow":"₦"},"NIC":{"displayName":"كوردوبة نيكاراجوا"},"NIO":{"displayName":"قرطبة نيكاراغوا","symbol-alt-narrow":"C$"},"NLG":{"displayName":"جلدر هولندي"},"NOK":{"displayName":"كرونة نرويجية","symbol-alt-narrow":"kr"},"NPR":{"displayName":"روبية نيبالي","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"دولار نيوزيلندي","symbol":"NZ$","symbol-alt-narrow":"NZ$"},"OMR":{"displayName":"ريال عماني","symbol":"ر.ع.‏"},"PAB":{"displayName":"بالبوا بنمي"},"PEN":{"displayName":"سول بيروفي"},"PGK":{"displayName":"كينا بابوا غينيا الجديدة"},"PHP":{"displayName":"بيزو فلبيني","symbol":"PHP","symbol-alt-narrow":"₱"},"PKR":{"displayName":"روبية باكستاني","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"زلوتي بولندي","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"زلوتي بولندي - 1950-1995"},"PTE":{"displayName":"اسكود برتغالي"},"PYG":{"displayName":"غواراني باراغواي","symbol-alt-narrow":"₲"},"QAR":{"displayName":"ريال قطري","symbol":"ر.ق.‏"},"RHD":{"displayName":"دولار روديسي"},"ROL":{"displayName":"ليو روماني قديم"},"RON":{"displayName":"ليو روماني","symbol-alt-narrow":"lei"},"RSD":{"displayName":"دينار صربي","displayName-count-zero":"دينار صربي","displayName-count-one":"دينار صربي","displayName-count-two":"ديناران صربيان","displayName-count-few":"دينارات صربية","displayName-count-many":"دينارًا صربيًا","displayName-count-other":"دينار صربي"},"RUB":{"displayName":"روبل روسي","symbol-alt-narrow":"₽"},"RUR":{"displayName":"روبل روسي - 1991-1998"},"RWF":{"displayName":"فرنك رواندي","symbol-alt-narrow":"RF"},"SAR":{"displayName":"ريال سعودي","symbol":"ر.س.‏"},"SBD":{"displayName":"دولار جزر سليمان","symbol-alt-narrow":"SB$"},"SCR":{"displayName":"روبية سيشيلية"},"SDD":{"displayName":"دينار سوداني","symbol":"د.س.‏"},"SDG":{"displayName":"جنيه سوداني","displayName-count-zero":"جنيه سوداني","displayName-count-one":"جنيه سوداني","displayName-count-two":"جنيه سوداني","displayName-count-few":"جنيهات سودانية","displayName-count-many":"جنيهًا سودانيًا","displayName-count-other":"جنيه سوداني","symbol":"ج.س."},"SDP":{"displayName":"جنيه سوداني قديم"},"SEK":{"displayName":"كرونة سويدية","symbol-alt-narrow":"kr"},"SGD":{"displayName":"دولار سنغافوري","symbol-alt-narrow":"$"},"SHP":{"displayName":"جنيه سانت هيلين","symbol-alt-narrow":"£"},"SIT":{"displayName":"تولار سلوفيني"},"SKK":{"displayName":"كرونة سلوفاكية"},"SLE":{"displayName":"ليون سيراليوني"},"SLL":{"displayName":"ليون سيراليوني - 1964-2022"},"SOS":{"displayName":"شلن صومالي"},"SRD":{"displayName":"دولار سورينامي","symbol-alt-narrow":"SR$"},"SRG":{"displayName":"جلدر سورينامي"},"SSP":{"displayName":"جنيه جنوب السودان","displayName-count-zero":"جنيه جنوب السودان","displayName-count-one":"جنيه جنوب السودان","displayName-count-two":"جنيهان جنوب السودان","displayName-count-few":"جنيهات جنوب السودان","displayName-count-many":"جنيهًا جنوب السودان","displayName-count-other":"جنيه جنوب السودان","symbol-alt-narrow":"£"},"STD":{"displayName":"دوبرا ساو تومي وبرينسيبي - 1977-2017"},"STN":{"displayName":"دوبرا ساو تومي وبرينسيبي","symbol-alt-narrow":"Db"},"SUR":{"displayName":"روبل سوفيتي"},"SVC":{"displayName":"كولون سلفادوري"},"SYP":{"displayName":"ليرة سورية","symbol":"ل.س.‏","symbol-alt-narrow":"£"},"SZL":{"displayName":"ليلانجيني سوازيلندي"},"THB":{"displayName":"باخت تايلاندي","symbol":"฿","symbol-alt-narrow":"฿"},"TJR":{"displayName":"روبل طاجيكستاني"},"TJS":{"displayName":"سوموني طاجيكستاني"},"TMM":{"displayName":"مانات تركمنستاني"},"TMT":{"displayName":"مانات تركمانستان"},"TND":{"displayName":"دينار تونسي","displayName-count-zero":"دينار تونسي","displayName-count-one":"دينار تونسي","displayName-count-two":"ديناران تونسيان","displayName-count-few":"دينارات تونسية","displayName-count-many":"دينارًا تونسيًا","displayName-count-other":"دينار تونسي","symbol":"د.ت.‏"},"TOP":{"displayName":"بانغا تونغا","symbol-alt-narrow":"T$"},"TPE":{"displayName":"اسكود تيموري"},"TRL":{"displayName":"ليرة تركي"},"TRY":{"displayName":"ليرة تركية","symbol-alt-narrow":"₺","symbol-alt-variant":"TL"},"TTD":{"displayName":"دولار ترينداد وتوباغو","symbol-alt-narrow":"TT$"},"TWD":{"displayName":"دولار تايواني","symbol":"NT$","symbol-alt-narrow":"NT$"},"TZS":{"displayName":"شلن تنزاني"},"UAH":{"displayName":"هريفنيا أوكراني","symbol-alt-narrow":"₴"},"UGS":{"displayName":"شلن أوغندي - 1966-1987"},"UGX":{"displayName":"شلن أوغندي"},"USD":{"displayName":"دولار أمريكي","symbol":"US$","symbol-alt-narrow":"US$"},"USN":{"displayName":"دولار أمريكي (اليوم التالي)‏"},"USS":{"displayName":"دولار أمريكي (نفس اليوم)‏"},"UYP":{"displayName":"بيزو أوروجواي - 1975-1993"},"UYU":{"displayName":"بيزو اوروغواي","symbol-alt-narrow":"UY$"},"UZS":{"displayName":"سوم أوزبكستاني"},"VEB":{"displayName":"بوليفار فنزويلي - 1871-2008"},"VEF":{"displayName":"بوليفار فنزويلي - 2008–2018","symbol-alt-narrow":"Bs"},"VES":{"displayName":"بوليفار فنزويلي"},"VND":{"displayName":"دونج فيتنامي","symbol":"₫","symbol-alt-narrow":"₫"},"VUV":{"displayName":"فاتو فانواتو"},"WST":{"displayName":"تالا ساموا"},"XAF":{"displayName":"فرنك وسط أفريقي","symbol":"FCFA"},"XAG":{"displayName":"فضة"},"XAU":{"displayName":"ذهب"},"XBA":{"displayName":"الوحدة الأوروبية المركبة"},"XBB":{"displayName":"الوحدة المالية الأوروبية"},"XBC":{"displayName":"الوحدة الحسابية الأوروبية"},"XBD":{"displayName":"(XBD)وحدة الحساب الأوروبية"},"XCD":{"displayName":"دولار شرق الكاريبي","symbol":"EC$","symbol-alt-narrow":"$"},"XCG":{"symbol":"Cg."},"XDR":{"displayName":"حقوق السحب الخاصة"},"XEU":{"displayName":"وحدة النقد الأوروبية"},"XFO":{"displayName":"فرنك فرنسي ذهبي"},"XFU":{"displayName":"(UIC)فرنك فرنسي"},"XOF":{"displayName":"فرنك غرب أفريقي","symbol":"F CFA"},"XPD":{"displayName":"بالاديوم"},"XPF":{"displayName":"فرنك سي إف بي","symbol":"CFPF"},"XPT":{"displayName":"البلاتين"},"XTS":{"displayName":"كود اختبار العملة"},"XXX":{"displayName":"عملة غير معروفة","displayName-count-zero":"(عملة غير معروفة)","displayName-count-one":"(عملة غير معروفة)","displayName-count-two":"(عملة غير معروفة)","displayName-count-few":"(عملة غير معروفة)","displayName-count-many":"(عملة غير معروفة)","displayName-count-other":"(عملة غير معروفة)","symbol":"¤"},"YDD":{"displayName":"دينار يمني"},"YER":{"displayName":"ريال يمني","symbol":"ر.ي.‏"},"YUD":{"displayName":"دينار يوغسلافي"},"YUN":{"displayName":"دينار يوغسلافي قابل للتحويل"},"ZAL":{"displayName":"راند جنوب أفريقيا -مالي"},"ZAR":{"displayName":"راند جنوب أفريقيا","symbol-alt-narrow":"R"},"ZMK":{"displayName":"كواشا زامبي - 1968-2012"},"ZMW":{"displayName":"كواشا زامبي","symbol-alt-narrow":"ZK"},"ZRN":{"displayName":"زائير زائيري جديد"},"ZRZ":{"displayName":"زائير زائيري"},"ZWD":{"displayName":"دولار زمبابوي"},"ZWL":{"displayName":"دولار زمبابوي 2009"}}},"dates":{"calendars":{"islamic":{"months":{"format":{"abbreviated":{"1":"محرم","2":"صفر","3":"ربيع الأول","4":"ربيع الآخر","5":"جمادى الأولى","6":"جمادى الآخرة","7":"رجب","8":"شعبان","9":"رمضان","10":"شوال","11":"ذو القعدة","12":"ذو الحجة"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","10":"١٠","11":"١١","12":"١٢"},"wide":{"1":"محرم","2":"صفر","3":"ربيع الأول","4":"ربيع الآخر","5":"جمادى الأولى","6":"جمادى الآخرة","7":"رجب","8":"شعبان","9":"رمضان","10":"شوال","11":"ذو القعدة","12":"ذو الحجة"}},"stand-alone":{"abbreviated":{"1":"محرم","2":"صفر","3":"ربيع الأول","4":"ربيع الآخر","5":"جمادى الأولى","6":"جمادى الآخرة","7":"رجب","8":"شعبان","9":"رمضان","10":"شوال","11":"ذو القعدة","12":"ذو الحجة"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","10":"١٠","11":"١١","12":"١٢"},"wide":{"1":"محرم","2":"صفر","3":"ربيع الأول","4":"ربيع الآخر","5":"جمادى الأولى","6":"جمادى الآخرة","7":"رجب","8":"شعبان","9":"رمضان","10":"شوال","11":"ذو القعدة","12":"ذو الحجة"}}},"days":{"format":{"abbreviated":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"},"narrow":{"sun":"ح","mon":"ن","tue":"ث","wed":"ر","thu":"خ","fri":"ج","sat":"س"},"short":{"sun":"أحد","mon":"إثنين","tue":"ثلاثاء","wed":"أربعاء","thu":"خميس","fri":"جمعة","sat":"سبت"},"wide":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"}},"stand-alone":{"abbreviated":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"},"narrow":{"sun":"ح","mon":"ن","tue":"ث","wed":"ر","thu":"خ","fri":"ج","sat":"س"},"short":{"sun":"أحد","mon":"إثنين","tue":"ثلاثاء","wed":"أربعاء","thu":"خميس","fri":"جمعة","sat":"سبت"},"wide":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"}}},"quarters":{"format":{"abbreviated":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤"},"wide":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"}},"stand-alone":{"abbreviated":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤"},"wide":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"}}},"dayPeriods":{"format":{"abbreviated":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"ص","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"في المساء","night2":"ليلاً"},"narrow":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"wide":{"am":"ص","pm":"م","morning1":"في الصباح","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"في المساء","night2":"ليلاً"}},"stand-alone":{"abbreviated":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"ص","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"narrow":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"wide":{"am":"صباحًا","pm":"مساءً","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"}}},"eras":{"eraNames":{"0":"هـ"},"eraAbbr":{"0":"هـ"},"eraNarrow":{"0":"هـ"}},"dateFormats":{"full":"EEEE، d MMMM y G","long":"d MMMM y G","medium":"d MMM y G","short":"d‏/M‏/y GGGGG"},"dateSkeletons":{"full":"GyMMMMEEEEd","long":"GyMMMMd","medium":"GyMMMd","short":"GGGGGyMd"},"timeFormats":{"full":"h:mm:ss a zzzz","long":"h:mm:ss a z","medium":"h:mm:ss a","short":"h:mm a"},"timeSkeletons":{"full":"ahmmsszzzz","long":"ahmmssz","medium":"ahmmss","short":"ahmm"},"dateTimeFormats":{"full":"{1}، {0}","long":"{1}، {0}","medium":"{1}، {0}","short":"{1}, {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E، d","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"d‏/M‏/y G","GyMMM":"MMM y G","GyMMMd":"d MMM y G","GyMMMEd":"E، d MMM y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","M":"L","Md":"d‏/M","MEd":"E، d‏/M","MMM":"LLL","MMMd":"d MMM","MMMEd":"E، d MMM","MMMMd":"d MMMM","ms":"mm:ss","y":"y G","yyyy":"y G","yyyyM":"M‏/y G","yyyyMd":"d‏/M‏/y G","yyyyMEd":"E، d‏/M‏/y G","yyyyMMM":"MMM y G","yyyyMMMd":"d MMM y G","yyyyMMMEd":"E، d MMM y G","yyyyMMMM":"MMMM y G","yyyyQQQ":"QQQ y G","yyyyQQQQ":"QQQQ y G"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"y G – y G","y":"y–y G"},"GyM":{"G":"MM-y GGGG – MM-y GGGG","M":"MM-y – MM-y GGGG","y":"MM-y – MM-y GGGG"},"GyMd":{"d":"dd-MM-y – dd-MM-y GGGG","G":"dd-MM-y GGGG – dd-MM-y GGGG","M":"dd-MM-y – dd-MM-y GGGG","y":"dd-MM-y – dd-MM-y GGGG"},"GyMEd":{"d":"E, dd-MM-y – E, dd-MM-y GGGG","G":"E, dd-MM-y GGGG – E, dd-MM-y GGGG","M":"E, dd-MM-y – E, dd-MM-y GGGG","y":"E, dd-MM-y – E,dd-MM-y GGGG"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"d–d MMM y G","G":"d MMM y G – d MMM y G","M":"d MMM – d MMM y G","y":"d MMM y – d MMM y G"},"GyMMMEd":{"d":"E, d MMM – E, d MMM y G","G":"E, d MMM y G – E, d MMM y G","M":"E, d MMM – E, d MMM y G","y":"E, d MMM y – E, d MMM y G"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"M–M"},"Md":{"d":"d‏/M – d‏/M","M":"d‏/M – d‏/M"},"MEd":{"d":"E، d‏/M – E، d‏/M","M":"E، d‏/M – E، d‏/M"},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d–d MMM","M":"d MMM – d MMM"},"MMMEd":{"d":"E، d – E، d MMM","M":"E، d MMM – E، d MMM"},"MMMM":{"M":"LLLL–LLLL"},"y":{"y":"y–y G"},"yM":{"M":"M‏/y – M‏/y G","y":"M‏/y – M‏/y G"},"yMd":{"d":"d‏/M‏/y – d‏/M‏/y G","M":"d‏/M‏/y – d‏/M‏/y G","y":"d‏/M‏/y – d‏/M‏/y G"},"yMEd":{"d":"E، dd‏/MM‏/y – E، dd‏/MM‏/y G","M":"E، d‏/M‏/y – E، d‏/M‏/y G","y":"E، d‏/M‏/y – E، d‏/M‏/y G"},"yMMM":{"M":"MMM – MMM y G","y":"MMM، y – MMM y G"},"yMMMd":{"d":"d–d MMM y G","M":"d MMM – d MMM y G","y":"d MMM y – d MMM y G"},"yMMMEd":{"d":"E، d – E، d MMM y G","M":"E، d MMM – E، d MMM y G","y":"E، d MMM y – E، d MMM y G"},"yMMMM":{"M":"MMMM – MMMM y G","y":"MMMM y – MMMM y G"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} في {0}","long":"{1} في {0}","medium":"{1}، {0}","short":"{1}, {0}"}}},"gregorian":{"months":{"format":{"abbreviated":{"1":"يناير","2":"فبراير","3":"مارس","4":"أبريل","5":"مايو","6":"يونيو","7":"يوليو","8":"أغسطس","9":"سبتمبر","10":"أكتوبر","11":"نوفمبر","12":"ديسمبر"},"narrow":{"1":"ي","2":"ف","3":"م","4":"أ","5":"و","6":"ن","7":"ل","8":"غ","9":"س","10":"ك","11":"ب","12":"د"},"wide":{"1":"يناير","2":"فبراير","3":"مارس","4":"أبريل","5":"مايو","6":"يونيو","7":"يوليو","8":"أغسطس","9":"سبتمبر","10":"أكتوبر","11":"نوفمبر","12":"ديسمبر"}},"stand-alone":{"abbreviated":{"1":"يناير","2":"فبراير","3":"مارس","4":"أبريل","5":"مايو","6":"يونيو","7":"يوليو","8":"أغسطس","9":"سبتمبر","10":"أكتوبر","11":"نوفمبر","12":"ديسمبر"},"narrow":{"1":"ي","2":"ف","3":"م","4":"أ","5":"و","6":"ن","7":"ل","8":"غ","9":"س","10":"ك","11":"ب","12":"د"},"wide":{"1":"يناير","2":"فبراير","3":"مارس","4":"أبريل","5":"مايو","6":"يونيو","7":"يوليو","8":"أغسطس","9":"سبتمبر","10":"أكتوبر","11":"نوفمبر","12":"ديسمبر"}}},"days":{"format":{"abbreviated":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"},"narrow":{"sun":"ح","mon":"ن","tue":"ث","wed":"ر","thu":"خ","fri":"ج","sat":"س"},"short":{"sun":"أحد","mon":"إثنين","tue":"ثلاثاء","wed":"أربعاء","thu":"خميس","fri":"جمعة","sat":"سبت"},"wide":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"}},"stand-alone":{"abbreviated":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"},"narrow":{"sun":"ح","mon":"ن","tue":"ث","wed":"ر","thu":"خ","fri":"ج","sat":"س"},"short":{"sun":"أحد","mon":"إثنين","tue":"ثلاثاء","wed":"أربعاء","thu":"خميس","fri":"جمعة","sat":"سبت"},"wide":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"}}},"quarters":{"format":{"abbreviated":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤"},"wide":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"}},"stand-alone":{"abbreviated":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"},"narrow":{"1":"١","2":"٢","3":"٣","4":"٤"},"wide":{"1":"الربع الأول","2":"الربع الثاني","3":"الربع الثالث","4":"الربع الرابع"}}},"dayPeriods":{"format":{"abbreviated":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"ص","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"في المساء","night2":"ليلاً"},"narrow":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"wide":{"am":"ص","pm":"م","morning1":"في الصباح","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"في المساء","night2":"ليلاً"}},"stand-alone":{"abbreviated":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"ص","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"narrow":{"am":"ص","pm":"م","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"},"wide":{"am":"صباحًا","pm":"مساءً","morning1":"فجرًا","morning2":"صباحًا","afternoon1":"ظهرًا","afternoon2":"بعد الظهر","evening1":"مساءً","night1":"منتصف الليل","night2":"ليلاً"}}},"eras":{"eraNames":{"0":"قبل الميلاد","1":"ميلادي","0-alt-variant":"قبل الحقبة الحالية","1-alt-variant":"بعد الميلاد"},"eraAbbr":{"0":"ق.م","1":"م","0-alt-variant":"ق. م","1-alt-variant":"ب.م"},"eraNarrow":{"0":"ق.م","1":"م","0-alt-variant":"ق. م","1-alt-variant":"ب.م"}},"dateFormats":{"full":"EEEE، d MMMM y","long":"d MMMM y","medium":"dd‏/MM‏/y","short":"d‏/M‏/y"},"dateSkeletons":{"full":"yMMMMEEEEd","long":"yMMMMd","medium":"yMMdd","short":"yMd"},"timeFormats":{"full":"h:mm:ss a zzzz","long":"h:mm:ss a z","medium":"h:mm:ss a","short":"h:mm a"},"timeSkeletons":{"full":"ahmmsszzzz","long":"ahmmssz","medium":"ahmmss","short":"ahmm"},"dateTimeFormats":{"full":"{1}، {0}","long":"{1}، {0}","medium":"{1}، {0}","short":"{1}، {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E، d","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMd":"dd-MM-y GGGGG","GyMMM":"MMM y G","GyMMMd":"d MMM y G","GyMMMEd":"E، d MMM y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"d‏/M","MEd":"E، d‏/M","MMdd":"dd‏/MM","MMM":"LLL","MMMd":"d MMM","MMMEd":"E، d MMM","MMMMd":"d MMMM","MMMMEd":"E، d MMMM","MMMMW-count-zero":"الأسبوع W من MMMM","MMMMW-count-one":"الأسبوع W من MMMM","MMMMW-count-two":"الأسبوع W من MMMM","MMMMW-count-few":"الأسبوع W من MMMM","MMMMW-count-many":"الأسبوع W من MMMM","MMMMW-count-other":"الأسبوع W من MMMM","ms":"mm:ss","y":"y","yM":"M‏/y","yMd":"d‏/M‏/y","yMEd":"E، d‏/M‏/y","yMM":"MM‏/y","yMMM":"MMM y","yMMMd":"d MMM y","yMMMEd":"E، d MMM y","yMMMM":"MMMM y","yQQQ":"QQQ y","yQQQQ":"QQQQ y","yw-count-zero":"الأسبوع w من سنة Y","yw-count-one":"الأسبوع w من سنة Y","yw-count-two":"الأسبوع w من سنة Y","yw-count-few":"الأسبوع w من سنة Y","yw-count-many":"الأسبوع w من سنة Y","yw-count-other":"الأسبوع w من سنة Y"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"y G – y G","y":"y – y G"},"GyM":{"G":"MM-y GGGG – MM-y GGGG","M":"MM-y – MM-y GGGG","y":"MM-y – MM-y GGGG"},"GyMd":{"d":"d-MM-y – d-MM-y GGGG","G":"dd-MM-y GGGG – dd-MM-y GGGG","M":"dd-MM-y – dd-MM-y GGGG","y":"dd-MM-y – dd-MM-y GGGG"},"GyMEd":{"d":"E, dd-MM-y – E, dd-MM-y GGGG","G":"E, dd-MM-y GGGG – E, dd-MM-y GGGG","M":"E, dd-MM-y – E, dd-MM-y GGGG","y":"E, dd-MM-y – E, dd-MM-y GGGG"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"d–d MMM y G","G":"d MMM y G – d MMM y G","M":"d MMM – d MMM y G","y":"d MMM y – d MMM y G"},"GyMMMEd":{"d":"E, d MMM – E, d MMM y G","G":"E, d MMM y G – E, d MMM y G","M":"E, d MMM – E, d MMM y G","y":"E, d MMM y – E, d MMM y G"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"M–M"},"Md":{"d":"d‏/M – d‏/M","M":"d‏/M – d‏/M"},"MEd":{"d":"E، d‏/M – E، d‏/M","M":"E، d‏/M – E، d‏/M"},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d–d MMM","M":"d MMM – d MMM"},"MMMEd":{"d":"E، d – E، d MMM","M":"E، d MMM – E، d MMM"},"MMMM":{"M":"LLLL–LLLL"},"y":{"y":"y–y"},"yM":{"M":"M‏/y – M‏/y","y":"M‏/y – M‏/y"},"yMd":{"d":"d‏/M‏/y – d‏/M‏/y","M":"d‏/M‏/y – d‏/M‏/y","y":"d‏/M‏/y – d‏/M‏/y"},"yMEd":{"d":"E، dd‏/MM‏/y – E، dd‏/MM‏/y","M":"E، d‏/M‏/y – E، d‏/M‏/y","y":"E، d‏/M‏/y – E، d‏/M‏/y"},"yMMM":{"M":"MMM – MMM، y","y":"MMM، y – MMM، y"},"yMMMd":{"d":"d–d MMM، y","M":"d MMM – d MMM، y","y":"d MMM، y – d MMM، y"},"yMMMEd":{"d":"E، d – E، d MMM، y","M":"E، d MMM – E، d MMM، y","y":"E، d MMM، y – E، d MMM، y"},"yMMMM":{"M":"MMMM – MMMM، y","y":"MMMM، y – MMMM، y"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} في {0}","long":"{1} في {0}","medium":"{1}، {0}","short":"{1}، {0}"}}}},"timeZoneNames":{"hourFormat":"+HH:mm;-HH:mm","gmtFormat":"غرينتش{0}","gmtZeroFormat":"غرينتش","regionFormat":"توقيت {0}","regionFormat-type-daylight":"توقيت {0} الصيفي","regionFormat-type-standard":"توقيت {0} الرسمي","fallbackFormat":"{1} ({0})","zone":{"America":{"Adak":{"exemplarCity":"أداك"},"Anchorage":{"exemplarCity":"أنشوراج"},"Anguilla":{"exemplarCity":"أنغويلا"},"Antigua":{"exemplarCity":"أنتيغوا"},"Araguaina":{"exemplarCity":"أروجوانيا"},"Argentina":{"Rio_Gallegos":{"exemplarCity":"ريو جالييوس"},"San_Juan":{"exemplarCity":"سان خوان"},"Ushuaia":{"exemplarCity":"أشوا"},"La_Rioja":{"exemplarCity":"لا ريوجا"},"San_Luis":{"exemplarCity":"سان لويس"},"Salta":{"exemplarCity":"سالطا"},"Tucuman":{"exemplarCity":"تاكمان"}},"Aruba":{"exemplarCity":"أروبا"},"Asuncion":{"exemplarCity":"أسونسيون"},"Bahia":{"exemplarCity":"باهيا"},"Bahia_Banderas":{"exemplarCity":"باهيا بانديراس"},"Barbados":{"exemplarCity":"بربادوس"},"Belem":{"exemplarCity":"بلم"},"Belize":{"exemplarCity":"بليز"},"Blanc-Sablon":{"exemplarCity":"بلانك-سابلون"},"Boa_Vista":{"exemplarCity":"باو فيستا"},"Bogota":{"exemplarCity":"بوغوتا"},"Boise":{"exemplarCity":"بويس"},"Buenos_Aires":{"exemplarCity":"بوينوس أيرس"},"Cambridge_Bay":{"exemplarCity":"كامبرديج باي"},"Campo_Grande":{"exemplarCity":"كومبو جراند"},"Cancun":{"exemplarCity":"كانكون"},"Caracas":{"exemplarCity":"كاراكاس"},"Catamarca":{"exemplarCity":"كاتاماركا"},"Cayenne":{"exemplarCity":"كايين"},"Cayman":{"exemplarCity":"كايمان"},"Chicago":{"exemplarCity":"شيكاغو"},"Chihuahua":{"exemplarCity":"تشيواوا"},"Ciudad_Juarez":{"exemplarCity":"سيوداد خواريز"},"Coral_Harbour":{"exemplarCity":"كورال هاربر"},"Cordoba":{"exemplarCity":"كوردوبا"},"Costa_Rica":{"exemplarCity":"كوستاريكا"},"Creston":{"exemplarCity":"كريستون"},"Cuiaba":{"exemplarCity":"كيابا"},"Curacao":{"exemplarCity":"كوراساو"},"Danmarkshavn":{"exemplarCity":"دانمرك شافن"},"Dawson":{"exemplarCity":"داوسان"},"Dawson_Creek":{"exemplarCity":"داوسن كريك"},"Denver":{"exemplarCity":"دنفر"},"Detroit":{"exemplarCity":"ديترويت"},"Dominica":{"exemplarCity":"دومينيكا"},"Edmonton":{"exemplarCity":"ايدمونتون"},"Eirunepe":{"exemplarCity":"ايرونبي"},"El_Salvador":{"exemplarCity":"السلفادور"},"Fort_Nelson":{"exemplarCity":"فورت نيلسون"},"Fortaleza":{"exemplarCity":"فورتاليزا"},"Glace_Bay":{"exemplarCity":"جلاس باي"},"Godthab":{"exemplarCity":"غودثاب"},"Goose_Bay":{"exemplarCity":"جوس باي"},"Grand_Turk":{"exemplarCity":"غراند ترك"},"Grenada":{"exemplarCity":"غرينادا"},"Guadeloupe":{"exemplarCity":"غوادلوب"},"Guatemala":{"exemplarCity":"غواتيمالا"},"Guayaquil":{"exemplarCity":"غواياكويل"},"Guyana":{"exemplarCity":"غيانا"},"Halifax":{"exemplarCity":"هاليفاكس"},"Havana":{"exemplarCity":"هافانا"},"Hermosillo":{"exemplarCity":"هيرموسيلو"},"Indiana":{"Vincennes":{"exemplarCity":"فينسينس"},"Petersburg":{"exemplarCity":"بيترسبرغ"},"Tell_City":{"exemplarCity":"مدينة تل، إنديانا"},"Knox":{"exemplarCity":"كونكس"},"Winamac":{"exemplarCity":"ويناماك"},"Marengo":{"exemplarCity":"مارنجو"},"Vevay":{"exemplarCity":"فيفاي"}},"Indianapolis":{"exemplarCity":"إنديانابوليس"},"Inuvik":{"exemplarCity":"اينوفيك"},"Iqaluit":{"exemplarCity":"اكويلت"},"Jamaica":{"exemplarCity":"جامايكا"},"Jujuy":{"exemplarCity":"جوجو"},"Juneau":{"exemplarCity":"جوني"},"Kentucky":{"Monticello":{"exemplarCity":"مونتيسيلو"}},"Kralendijk":{"exemplarCity":"كرالنديك"},"La_Paz":{"exemplarCity":"لا باز"},"Lima":{"exemplarCity":"ليما"},"Los_Angeles":{"exemplarCity":"لوس انجلوس"},"Louisville":{"exemplarCity":"لويس فيل"},"Lower_Princes":{"exemplarCity":"حي الأمير السفلي"},"Maceio":{"exemplarCity":"ماشيو"},"Managua":{"exemplarCity":"ماناغوا"},"Manaus":{"exemplarCity":"ماناوس"},"Marigot":{"exemplarCity":"ماريغوت"},"Martinique":{"exemplarCity":"المارتينيك"},"Matamoros":{"exemplarCity":"ماتاموروس"},"Mazatlan":{"exemplarCity":"مازاتلان"},"Mendoza":{"exemplarCity":"ميندوزا"},"Menominee":{"exemplarCity":"مينوميني"},"Merida":{"exemplarCity":"ميريدا"},"Metlakatla":{"exemplarCity":"ميتلاكاتلا"},"Mexico_City":{"exemplarCity":"مكسيكو سيتي"},"Miquelon":{"exemplarCity":"مكويلون"},"Moncton":{"exemplarCity":"وينكتون"},"Monterrey":{"exemplarCity":"مونتيري"},"Montevideo":{"exemplarCity":"مونتفيديو"},"Montserrat":{"exemplarCity":"مونتسيرات"},"Nassau":{"exemplarCity":"ناسو"},"New_York":{"exemplarCity":"نيويورك"},"Nome":{"exemplarCity":"نوم"},"Noronha":{"exemplarCity":"نوروناه"},"North_Dakota":{"Beulah":{"exemplarCity":"بيولا، داكوتا الشمالية"},"New_Salem":{"exemplarCity":"نيو ساليم"},"Center":{"exemplarCity":"سنتر"}},"Ojinaga":{"exemplarCity":"أوجيناجا"},"Panama":{"exemplarCity":"بنما"},"Paramaribo":{"exemplarCity":"باراماريبو"},"Phoenix":{"exemplarCity":"فينكس"},"Port-au-Prince":{"exemplarCity":"بورت أو برنس"},"Port_of_Spain":{"exemplarCity":"بورت أوف سبين"},"Porto_Velho":{"exemplarCity":"بورتو فيلو"},"Puerto_Rico":{"exemplarCity":"بورتوريكو"},"Punta_Arenas":{"exemplarCity":"بونتا أريناز"},"Rankin_Inlet":{"exemplarCity":"رانكن انلت"},"Recife":{"exemplarCity":"ريسيف"},"Regina":{"exemplarCity":"ريجينا"},"Resolute":{"exemplarCity":"ريزولوت"},"Rio_Branco":{"exemplarCity":"ريوبرانكو"},"Santarem":{"exemplarCity":"سانتاريم"},"Santiago":{"exemplarCity":"سانتياغو"},"Santo_Domingo":{"exemplarCity":"سانتو دومينغو"},"Sao_Paulo":{"exemplarCity":"ساو باولو"},"Scoresbysund":{"exemplarCity":"سكورسبيسند"},"Sitka":{"exemplarCity":"سيتكا"},"St_Barthelemy":{"exemplarCity":"سانت بارتيليمي"},"St_Johns":{"exemplarCity":"سانت جونس"},"St_Kitts":{"exemplarCity":"سانت كيتس"},"St_Lucia":{"exemplarCity":"سانت لوشيا"},"St_Thomas":{"exemplarCity":"سانت توماس"},"St_Vincent":{"exemplarCity":"سانت فنسنت"},"Swift_Current":{"exemplarCity":"سوفت كارنت"},"Tegucigalpa":{"exemplarCity":"تيغوسيغالبا"},"Thule":{"exemplarCity":"ثيل"},"Tijuana":{"exemplarCity":"تيخوانا"},"Toronto":{"exemplarCity":"تورونتو"},"Tortola":{"exemplarCity":"تورتولا"},"Vancouver":{"exemplarCity":"فانكوفر"},"Whitehorse":{"exemplarCity":"وايت هورس"},"Winnipeg":{"exemplarCity":"وينيبيج"},"Yakutat":{"exemplarCity":"ياكوتات"}},"Atlantic":{"Azores":{"exemplarCity":"أزورس"},"Bermuda":{"exemplarCity":"برمودا"},"Canary":{"exemplarCity":"كناري"},"Cape_Verde":{"exemplarCity":"الرأس الأخضر"},"Faeroe":{"exemplarCity":"فارو"},"Madeira":{"exemplarCity":"ماديرا"},"Reykjavik":{"exemplarCity":"ريكيافيك"},"South_Georgia":{"exemplarCity":"جورجيا الجنوبية"},"St_Helena":{"exemplarCity":"سانت هيلينا"},"Stanley":{"exemplarCity":"استانلي"}},"Europe":{"Amsterdam":{"exemplarCity":"أمستردام"},"Andorra":{"exemplarCity":"أندورا"},"Astrakhan":{"exemplarCity":"أستراخان"},"Athens":{"exemplarCity":"أثينا"},"Belgrade":{"exemplarCity":"بلغراد"},"Berlin":{"exemplarCity":"برلين"},"Bratislava":{"exemplarCity":"براتيسلافا"},"Brussels":{"exemplarCity":"بروكسل"},"Bucharest":{"exemplarCity":"بوخارست"},"Budapest":{"exemplarCity":"بودابست"},"Busingen":{"exemplarCity":"بوسنغن"},"Chisinau":{"exemplarCity":"تشيسيناو"},"Copenhagen":{"exemplarCity":"كوبنهاغن"},"Dublin":{"long":{"daylight":"توقيت أيرلندا الرسمي"},"exemplarCity":"دبلن"},"Gibraltar":{"exemplarCity":"جبل طارق"},"Guernsey":{"exemplarCity":"غيرنزي"},"Helsinki":{"exemplarCity":"هلسنكي"},"Isle_of_Man":{"exemplarCity":"جزيرة مان"},"Istanbul":{"exemplarCity":"إسطنبول"},"Jersey":{"exemplarCity":"جيرسي"},"Kaliningrad":{"exemplarCity":"كالينجراد"},"Kiev":{"exemplarCity":"كييف"},"Kirov":{"exemplarCity":"كيروف"},"Lisbon":{"exemplarCity":"لشبونة"},"Ljubljana":{"exemplarCity":"ليوبليانا"},"London":{"long":{"daylight":"توقيت بريطانيا الصيفي"},"exemplarCity":"لندن"},"Luxembourg":{"exemplarCity":"لوكسمبورغ"},"Madrid":{"exemplarCity":"مدريد"},"Malta":{"exemplarCity":"مالطة"},"Mariehamn":{"exemplarCity":"ماريهامن"},"Minsk":{"exemplarCity":"مينسك"},"Monaco":{"exemplarCity":"موناكو"},"Moscow":{"exemplarCity":"موسكو"},"Oslo":{"exemplarCity":"أوسلو"},"Paris":{"exemplarCity":"باريس"},"Podgorica":{"exemplarCity":"بودغوريكا"},"Prague":{"exemplarCity":"براغ"},"Riga":{"exemplarCity":"ريغا"},"Rome":{"exemplarCity":"روما"},"Samara":{"exemplarCity":"سمراء"},"San_Marino":{"exemplarCity":"سان مارينو"},"Sarajevo":{"exemplarCity":"سراييفو"},"Saratov":{"exemplarCity":"ساراتوف"},"Simferopol":{"exemplarCity":"سيمفروبول"},"Skopje":{"exemplarCity":"سكوبي"},"Sofia":{"exemplarCity":"صوفيا"},"Stockholm":{"exemplarCity":"ستوكهولم"},"Tallinn":{"exemplarCity":"تالين"},"Tirane":{"exemplarCity":"تيرانا"},"Ulyanovsk":{"exemplarCity":"أوليانوفسك"},"Vaduz":{"exemplarCity":"فادوز"},"Vatican":{"exemplarCity":"الفاتيكان"},"Vienna":{"exemplarCity":"فيينا"},"Vilnius":{"exemplarCity":"فيلنيوس"},"Volgograd":{"exemplarCity":"فولوجراد"},"Warsaw":{"exemplarCity":"وارسو"},"Zagreb":{"exemplarCity":"زغرب"},"Zurich":{"exemplarCity":"زيورخ"}},"Africa":{"Abidjan":{"exemplarCity":"أبيدجان"},"Accra":{"exemplarCity":"أكرا"},"Addis_Ababa":{"exemplarCity":"أديس أبابا"},"Algiers":{"exemplarCity":"الجزائر"},"Asmera":{"exemplarCity":"أسمرة"},"Bamako":{"exemplarCity":"باماكو"},"Bangui":{"exemplarCity":"بانغوي"},"Banjul":{"exemplarCity":"بانجول"},"Bissau":{"exemplarCity":"بيساو"},"Blantyre":{"exemplarCity":"بلانتاير"},"Brazzaville":{"exemplarCity":"برازافيل"},"Bujumbura":{"exemplarCity":"بوجومبورا"},"Cairo":{"exemplarCity":"القاهرة"},"Casablanca":{"exemplarCity":"الدار البيضاء"},"Ceuta":{"exemplarCity":"سيتا"},"Conakry":{"exemplarCity":"كوناكري"},"Dakar":{"exemplarCity":"داكار"},"Dar_es_Salaam":{"exemplarCity":"دار السلام"},"Djibouti":{"exemplarCity":"جيبوتي"},"Douala":{"exemplarCity":"دوالا"},"El_Aaiun":{"exemplarCity":"العيون"},"Freetown":{"exemplarCity":"فري تاون"},"Gaborone":{"exemplarCity":"غابورون"},"Harare":{"exemplarCity":"هراري"},"Johannesburg":{"exemplarCity":"جوهانسبرغ"},"Juba":{"exemplarCity":"جوبا"},"Kampala":{"exemplarCity":"كامبالا"},"Khartoum":{"exemplarCity":"الخرطوم"},"Kigali":{"exemplarCity":"كيغالي"},"Kinshasa":{"exemplarCity":"كينشاسا"},"Lagos":{"exemplarCity":"لاغوس"},"Libreville":{"exemplarCity":"ليبرفيل"},"Lome":{"exemplarCity":"لومي"},"Luanda":{"exemplarCity":"لواندا"},"Lubumbashi":{"exemplarCity":"لومبباشا"},"Lusaka":{"exemplarCity":"لوساكا"},"Malabo":{"exemplarCity":"مالابو"},"Maputo":{"exemplarCity":"مابوتو"},"Maseru":{"exemplarCity":"ماسيرو"},"Mbabane":{"exemplarCity":"مباباني"},"Mogadishu":{"exemplarCity":"مقديشيو"},"Monrovia":{"exemplarCity":"مونروفيا"},"Nairobi":{"exemplarCity":"نيروبي"},"Ndjamena":{"exemplarCity":"نجامينا"},"Niamey":{"exemplarCity":"نيامي"},"Nouakchott":{"exemplarCity":"نواكشوط"},"Ouagadougou":{"exemplarCity":"واغادوغو"},"Porto-Novo":{"exemplarCity":"بورتو نوفو"},"Sao_Tome":{"exemplarCity":"ساو تومي"},"Tripoli":{"exemplarCity":"طرابلس"},"Tunis":{"exemplarCity":"تونس"},"Windhoek":{"exemplarCity":"ويندهوك"}},"Asia":{"Aden":{"exemplarCity":"عدن"},"Almaty":{"exemplarCity":"ألماتي"},"Amman":{"exemplarCity":"عمّان"},"Anadyr":{"exemplarCity":"أندير"},"Aqtau":{"exemplarCity":"أكتاو"},"Aqtobe":{"exemplarCity":"أكتوب"},"Ashgabat":{"exemplarCity":"عشق آباد"},"Atyrau":{"exemplarCity":"أتيراو"},"Baghdad":{"exemplarCity":"بغداد"},"Bahrain":{"exemplarCity":"البحرين"},"Baku":{"exemplarCity":"باكو"},"Bangkok":{"exemplarCity":"بانكوك"},"Barnaul":{"exemplarCity":"بارناول"},"Beirut":{"exemplarCity":"بيروت"},"Bishkek":{"exemplarCity":"بشكيك"},"Brunei":{"exemplarCity":"بروناي"},"Calcutta":{"exemplarCity":"كالكتا"},"Chita":{"exemplarCity":"تشيتا"},"Choibalsan":{"exemplarCity":"تشوبالسان"},"Colombo":{"exemplarCity":"كولومبو"},"Damascus":{"exemplarCity":"دمشق"},"Dhaka":{"exemplarCity":"دكا"},"Dili":{"exemplarCity":"ديلي"},"Dubai":{"exemplarCity":"دبي"},"Dushanbe":{"exemplarCity":"دوشانبي"},"Famagusta":{"exemplarCity":"فاماغوستا"},"Gaza":{"exemplarCity":"غزة"},"Hebron":{"exemplarCity":"هيبرون (مدينة الخليل)"},"Hong_Kong":{"exemplarCity":"هونغ كونغ"},"Hovd":{"exemplarCity":"هوفد"},"Irkutsk":{"exemplarCity":"ايركيتسك"},"Jakarta":{"exemplarCity":"جاكرتا"},"Jayapura":{"exemplarCity":"جايابيورا"},"Jerusalem":{"exemplarCity":"القدس"},"Kabul":{"exemplarCity":"كابول"},"Kamchatka":{"exemplarCity":"كامتشاتكا"},"Karachi":{"exemplarCity":"كراتشي"},"Katmandu":{"exemplarCity":"كاتماندو"},"Khandyga":{"exemplarCity":"خانديجا"},"Krasnoyarsk":{"exemplarCity":"كراسنويارسك"},"Kuala_Lumpur":{"exemplarCity":"كوالا لامبور"},"Kuching":{"exemplarCity":"كيشينج"},"Kuwait":{"exemplarCity":"الكويت"},"Macau":{"exemplarCity":"ماكاو"},"Magadan":{"exemplarCity":"مجادن"},"Makassar":{"exemplarCity":"ماكسار"},"Manila":{"exemplarCity":"مانيلا"},"Muscat":{"exemplarCity":"مسقط"},"Nicosia":{"exemplarCity":"نيقوسيا"},"Novokuznetsk":{"exemplarCity":"نوفوكوزنتسك"},"Novosibirsk":{"exemplarCity":"نوفوسبيرسك"},"Omsk":{"exemplarCity":"أومسك"},"Oral":{"exemplarCity":"أورال"},"Phnom_Penh":{"exemplarCity":"بنوم بنه"},"Pontianak":{"exemplarCity":"بونتيانك"},"Pyongyang":{"exemplarCity":"بيونغ يانغ"},"Qatar":{"exemplarCity":"قطر"},"Qostanay":{"exemplarCity":"قوستاناي"},"Qyzylorda":{"exemplarCity":"كيزيلوردا"},"Rangoon":{"exemplarCity":"رانغون"},"Riyadh":{"exemplarCity":"الرياض"},"Saigon":{"exemplarCity":"مدينة هو تشي منة"},"Sakhalin":{"exemplarCity":"سكالين"},"Samarkand":{"exemplarCity":"سمرقند"},"Seoul":{"exemplarCity":"سول"},"Shanghai":{"exemplarCity":"شنغهاي"},"Singapore":{"exemplarCity":"سنغافورة"},"Srednekolymsk":{"exemplarCity":"سريدنكوليمسك"},"Taipei":{"exemplarCity":"تايبيه"},"Tashkent":{"exemplarCity":"طشقند"},"Tbilisi":{"exemplarCity":"تبليسي"},"Tehran":{"exemplarCity":"طهران"},"Thimphu":{"exemplarCity":"تيمفو"},"Tokyo":{"exemplarCity":"طوكيو"},"Tomsk":{"exemplarCity":"تومسك"},"Ulaanbaatar":{"exemplarCity":"آلانباتار"},"Urumqi":{"exemplarCity":"أرومكي"},"Ust-Nera":{"exemplarCity":"أوست نيرا"},"Vientiane":{"exemplarCity":"فيانتيان"},"Vladivostok":{"exemplarCity":"فلاديفوستك"},"Yakutsk":{"exemplarCity":"ياكتسك"},"Yekaterinburg":{"exemplarCity":"يكاترنبيرج"},"Yerevan":{"exemplarCity":"يريفان"}},"Indian":{"Antananarivo":{"exemplarCity":"أنتاناناريفو"},"Chagos":{"exemplarCity":"تشاغوس"},"Christmas":{"exemplarCity":"كريسماس"},"Cocos":{"exemplarCity":"كوكوس"},"Comoro":{"exemplarCity":"جزر القمر"},"Kerguelen":{"exemplarCity":"كيرغويلين"},"Mahe":{"exemplarCity":"ماهي"},"Maldives":{"exemplarCity":"المالديف"},"Mauritius":{"exemplarCity":"موريشيوس"},"Mayotte":{"exemplarCity":"مايوت"},"Reunion":{"exemplarCity":"ريونيون"}},"Australia":{"Adelaide":{"exemplarCity":"أديليد"},"Brisbane":{"exemplarCity":"برسيبان"},"Broken_Hill":{"exemplarCity":"بروكن هيل"},"Darwin":{"exemplarCity":"دارون"},"Eucla":{"exemplarCity":"أوكلا"},"Hobart":{"exemplarCity":"هوبارت"},"Lindeman":{"exemplarCity":"ليندمان"},"Lord_Howe":{"exemplarCity":"لورد هاو"},"Melbourne":{"exemplarCity":"ميلبورن"},"Perth":{"exemplarCity":"برثا"},"Sydney":{"exemplarCity":"سيدني"}},"Pacific":{"Apia":{"exemplarCity":"أبيا"},"Auckland":{"exemplarCity":"أوكلاند"},"Bougainville":{"exemplarCity":"بوغانفيل"},"Chatham":{"exemplarCity":"تشاثام"},"Easter":{"exemplarCity":"استر"},"Efate":{"exemplarCity":"إيفات"},"Enderbury":{"exemplarCity":"اندربيرج"},"Fakaofo":{"exemplarCity":"فاكاوفو"},"Fiji":{"exemplarCity":"فيجي"},"Funafuti":{"exemplarCity":"فونافوتي"},"Galapagos":{"exemplarCity":"جلاباجوس"},"Gambier":{"exemplarCity":"جامبير"},"Guadalcanal":{"exemplarCity":"غوادالكانال"},"Guam":{"exemplarCity":"غوام"},"Honolulu":{"exemplarCity":"هونولولو"},"Kanton":{"exemplarCity":"كانتون"},"Kiritimati":{"exemplarCity":"كيريتي ماتي"},"Kosrae":{"exemplarCity":"كوسرا"},"Kwajalein":{"exemplarCity":"كواجالين"},"Majuro":{"exemplarCity":"ماجورو"},"Marquesas":{"exemplarCity":"ماركيساس"},"Midway":{"exemplarCity":"ميدواي"},"Nauru":{"exemplarCity":"ناورو"},"Niue":{"exemplarCity":"نيوي"},"Norfolk":{"exemplarCity":"نورفولك"},"Noumea":{"exemplarCity":"نوميا"},"Pago_Pago":{"exemplarCity":"باغو باغو"},"Palau":{"exemplarCity":"بالاو"},"Pitcairn":{"exemplarCity":"بيتكيرن"},"Ponape":{"exemplarCity":"باناب"},"Port_Moresby":{"exemplarCity":"بور مورسبي"},"Rarotonga":{"exemplarCity":"راروتونغا"},"Saipan":{"exemplarCity":"سايبان"},"Tahiti":{"exemplarCity":"تاهيتي"},"Tarawa":{"exemplarCity":"تاراوا"},"Tongatapu":{"exemplarCity":"تونغاتابو"},"Truk":{"exemplarCity":"ترك"},"Wake":{"exemplarCity":"واك"},"Wallis":{"exemplarCity":"واليس"}},"Arctic":{"Longyearbyen":{"exemplarCity":"لونجيربين"}},"Antarctica":{"Casey":{"exemplarCity":"كاساي"},"Davis":{"exemplarCity":"دافيز"},"DumontDUrville":{"exemplarCity":"دي مونت دو روفيل"},"Macquarie":{"exemplarCity":"ماكواري"},"Mawson":{"exemplarCity":"ماوسون"},"McMurdo":{"exemplarCity":"ماك موردو"},"Palmer":{"exemplarCity":"بالمير"},"Rothera":{"exemplarCity":"روثيرا"},"Syowa":{"exemplarCity":"سايووا"},"Troll":{"exemplarCity":"ترول"},"Vostok":{"exemplarCity":"فوستوك"}},"Etc":{"UTC":{"long":{"standard":"التوقيت العالمي المنسق"},"short":{"standard":"UTC"}},"Unknown":{"exemplarCity":"مدينة غير معروفة"}}},"metazone":{"Afghanistan":{"long":{"standard":"توقيت أفغانستان"}},"Africa_Central":{"long":{"standard":"توقيت وسط أفريقيا"}},"Africa_Eastern":{"long":{"standard":"توقيت شرق أفريقيا"}},"Africa_Southern":{"long":{"standard":"توقيت جنوب أفريقيا"}},"Africa_Western":{"long":{"generic":"توقيت غرب أفريقيا","standard":"توقيت غرب أفريقيا الرسمي","daylight":"توقيت غرب أفريقيا الصيفي"}},"Alaska":{"long":{"generic":"توقيت ألاسكا","standard":"التوقيت الرسمي لألاسكا","daylight":"توقيت ألاسكا الصيفي"}},"Amazon":{"long":{"generic":"توقيت الأمازون","standard":"توقيت الأمازون الرسمي","daylight":"توقيت الأمازون الصيفي"}},"America_Central":{"long":{"generic":"التوقيت المركزي لأمريكا الشمالية","standard":"التوقيت الرسمي المركزي لأمريكا الشمالية","daylight":"التوقيت الصيفي المركزي لأمريكا الشمالية"}},"America_Eastern":{"long":{"generic":"التوقيت الشرقي لأمريكا الشمالية","standard":"التوقيت الرسمي الشرقي لأمريكا الشمالية","daylight":"التوقيت الصيفي الشرقي لأمريكا الشمالية"}},"America_Mountain":{"long":{"generic":"التوقيت الجبلي لأمريكا الشمالية","standard":"التوقيت الجبلي الرسمي لأمريكا الشمالية","daylight":"التوقيت الجبلي الصيفي لأمريكا الشمالية"}},"America_Pacific":{"long":{"generic":"توقيت المحيط الهادي","standard":"توقيت المحيط الهادي الرسمي","daylight":"توقيت المحيط الهادي الصيفي"}},"Anadyr":{"long":{"generic":"توقيت أنادير","standard":"توقيت أنادير الرسمي","daylight":"التوقيت الصيفي لأنادير"}},"Apia":{"long":{"generic":"توقيت آبيا","standard":"التوقيت الرسمي لآبيا","daylight":"التوقيت الصيفي لأبيا"}},"Arabian":{"long":{"generic":"التوقيت العربي","standard":"التوقيت العربي الرسمي","daylight":"التوقيت العربي الصيفي"}},"Argentina":{"long":{"generic":"توقيت الأرجنتين","standard":"توقيت الأرجنتين الرسمي","daylight":"توقيت الأرجنتين الصيفي"}},"Argentina_Western":{"long":{"generic":"توقيت غرب الأرجنتين","standard":"توقيت غرب الأرجنتين الرسمي","daylight":"توقيت غرب الأرجنتين الصيفي"}},"Armenia":{"long":{"generic":"توقيت أرمينيا","standard":"توقيت أرمينيا الرسمي","daylight":"توقيت أرمينيا الصيفي"}},"Atlantic":{"long":{"generic":"توقيت الأطلسي","standard":"التوقيت الرسمي الأطلسي","daylight":"التوقيت الصيفي الأطلسي"}},"Australia_Central":{"long":{"generic":"توقيت وسط أستراليا","standard":"توقيت وسط أستراليا الرسمي","daylight":"توقيت وسط أستراليا الصيفي"}},"Australia_CentralWestern":{"long":{"generic":"توقيت غرب وسط أستراليا","standard":"توقيت غرب وسط أستراليا الرسمي","daylight":"توقيت غرب وسط أستراليا الصيفي"}},"Australia_Eastern":{"long":{"generic":"توقيت شرق أستراليا","standard":"توقيت شرق أستراليا الرسمي","daylight":"توقيت شرق أستراليا الصيفي"}},"Australia_Western":{"long":{"generic":"توقيت غرب أستراليا","standard":"توقيت غرب أستراليا الرسمي","daylight":"توقيت غرب أستراليا الصيفي"}},"Azerbaijan":{"long":{"generic":"توقيت أذربيجان","standard":"توقيت أذربيجان الرسمي","daylight":"توقيت أذربيجان الصيفي"}},"Azores":{"long":{"generic":"توقيت أزورس","standard":"توقيت أزورس الرسمي","daylight":"توقيت أزورس الصيفي"}},"Bangladesh":{"long":{"generic":"توقيت بنغلاديش","standard":"توقيت بنغلاديش الرسمي","daylight":"توقيت بنغلاديش الصيفي"}},"Bhutan":{"long":{"standard":"توقيت بوتان"}},"Bolivia":{"long":{"standard":"توقيت بوليفيا"}},"Brasilia":{"long":{"generic":"توقيت برازيليا","standard":"توقيت برازيليا الرسمي","daylight":"توقيت برازيليا الصيفي"}},"Brunei":{"long":{"standard":"توقيت بروناي"}},"Cape_Verde":{"long":{"generic":"توقيت الرأس الأخضر","standard":"توقيت الرأس الأخضر الرسمي","daylight":"توقيت الرأس الأخضر الصيفي"}},"Chamorro":{"long":{"standard":"توقيت تشامورو"}},"Chatham":{"long":{"generic":"توقيت تشاتام","standard":"توقيت تشاتام الرسمي","daylight":"توقيت تشاتام الصيفي"}},"Chile":{"long":{"generic":"توقيت تشيلي","standard":"توقيت تشيلي الرسمي","daylight":"توقيت تشيلي الصيفي"}},"China":{"long":{"generic":"توقيت الصين","standard":"توقيت الصين الرسمي","daylight":"توقيت الصين الصيفي"}},"Choibalsan":{"long":{"generic":"توقيت شويبالسان","standard":"توقيت شويبالسان الرسمي","daylight":"التوقيت الصيفي لشويبالسان"}},"Christmas":{"long":{"standard":"توقيت جزر الكريسماس"}},"Cocos":{"long":{"standard":"توقيت جزر كوكوس"}},"Colombia":{"long":{"generic":"توقيت كولومبيا","standard":"توقيت كولومبيا الرسمي","daylight":"توقيت كولومبيا الصيفي"}},"Cook":{"long":{"generic":"توقيت جزر كووك","standard":"توقيت جزر كوك الرسمي","daylight":"توقيت جزر كوك الصيفي"}},"Cuba":{"long":{"generic":"توقيت كوبا","standard":"توقيت كوبا الرسمي","daylight":"توقيت كوبا الصيفي"}},"Davis":{"long":{"standard":"توقيت دافيز"}},"DumontDUrville":{"long":{"standard":"توقيت دي مونت دو روفيل"}},"East_Timor":{"long":{"standard":"توقيت تيمور الشرقية"}},"Easter":{"long":{"generic":"توقيت جزيرة استر","standard":"توقيت جزيرة استر الرسمي","daylight":"توقيت جزيرة استر الصيفي"}},"Ecuador":{"long":{"standard":"توقيت الإكوادور"}},"Europe_Central":{"long":{"generic":"توقيت وسط أوروبا","standard":"توقيت وسط أوروبا الرسمي","daylight":"توقيت وسط أوروبا الصيفي"}},"Europe_Eastern":{"long":{"generic":"توقيت شرق أوروبا","standard":"توقيت شرق أوروبا الرسمي","daylight":"توقيت شرق أوروبا الصيفي"}},"Europe_Further_Eastern":{"long":{"standard":"التوقيت الأوروبي (أكثر شرقًا)"}},"Europe_Western":{"long":{"generic":"توقيت غرب أوروبا","standard":"توقيت غرب أوروبا الرسمي","daylight":"توقيت غرب أوروبا الصيفي"}},"Falkland":{"long":{"generic":"توقيت جزر فوكلاند","standard":"توقيت جزر فوكلاند الرسمي","daylight":"توقيت جزر فوكلاند الصيفي"}},"Fiji":{"long":{"generic":"توقيت فيجي","standard":"توقيت فيجي الرسمي","daylight":"توقيت فيجي الصيفي"}},"French_Guiana":{"long":{"standard":"توقيت غويانا الفرنسية"}},"French_Southern":{"long":{"standard":"توقيت المقاطعات الفرنسية الجنوبية والأنتارتيكية"}},"Galapagos":{"long":{"standard":"توقيت غلاباغوس"}},"Gambier":{"long":{"standard":"توقيت جامبير"}},"Georgia":{"long":{"generic":"توقيت جورجيا","standard":"توقيت جورجيا الرسمي","daylight":"توقيت جورجيا الصيفي"}},"Gilbert_Islands":{"long":{"standard":"توقيت جزر جيلبرت"}},"GMT":{"long":{"standard":"توقيت غرينتش"}},"Greenland_Eastern":{"long":{"generic":"توقيت شرق غرينلاند","standard":"توقيت شرق غرينلاند الرسمي","daylight":"توقيت شرق غرينلاند الصيفي"}},"Greenland_Western":{"long":{"generic":"توقيت غرب غرينلاند","standard":"توقيت غرب غرينلاند الرسمي","daylight":"توقيت غرب غرينلاند الصيفي"}},"Guam":{"long":{"standard":"توقيت غوام"}},"Gulf":{"long":{"standard":"توقيت الخليج"},"short":{"standard":"GST"}},"Guyana":{"long":{"standard":"توقيت غيانا"}},"Hawaii_Aleutian":{"long":{"generic":"توقيت هاواي ألوتيان","standard":"توقيت هاواي ألوتيان الرسمي","daylight":"توقيت هاواي ألوتيان الصيفي"}},"Hong_Kong":{"long":{"generic":"توقيت هونغ كونغ","standard":"توقيت هونغ كونغ الرسمي","daylight":"توقيت هونغ كونغ الصيفي"}},"Hovd":{"long":{"generic":"توقيت هوفد","standard":"توقيت هوفد الرسمي","daylight":"توقيت هوفد الصيفي"}},"India":{"long":{"standard":"توقيت الهند"}},"Indian_Ocean":{"long":{"standard":"توقيت المحيط الهندي"}},"Indochina":{"long":{"standard":"توقيت الهند الصينية"}},"Indonesia_Central":{"long":{"standard":"توقيت وسط إندونيسيا"}},"Indonesia_Eastern":{"long":{"standard":"توقيت شرق إندونيسيا"}},"Indonesia_Western":{"long":{"standard":"توقيت غرب إندونيسيا"}},"Iran":{"long":{"generic":"توقيت إيران","standard":"توقيت إيران الرسمي","daylight":"توقيت إيران الصيفي"}},"Irkutsk":{"long":{"generic":"توقيت إركوتسك","standard":"توقيت إركوتسك الرسمي","daylight":"توقيت إركوتسك الصيفي"}},"Israel":{"long":{"generic":"توقيت إسرائيل","standard":"توقيت إسرائيل الرسمي","daylight":"توقيت إسرائيل الصيفي"}},"Japan":{"long":{"generic":"توقيت اليابان","standard":"توقيت اليابان الرسمي","daylight":"توقيت اليابان الصيفي"}},"Kamchatka":{"long":{"generic":"توقيت كامشاتكا","standard":"توقيت بيتروبافلوفسك-كامتشاتسكي","daylight":"توقيت بيتروبافلوفسك-كامتشاتسكي الصيفي"}},"Kazakhstan_Eastern":{"long":{"standard":"توقيت شرق كازاخستان"}},"Kazakhstan_Western":{"long":{"standard":"توقيت غرب كازاخستان"}},"Korea":{"long":{"generic":"توقيت كوريا","standard":"توقيت كوريا الرسمي","daylight":"توقيت كوريا الصيفي"}},"Kosrae":{"long":{"standard":"توقيت كوسرا"}},"Krasnoyarsk":{"long":{"generic":"توقيت كراسنويارسك","standard":"توقيت كراسنويارسك الرسمي","daylight":"التوقيت الصيفي لكراسنويارسك"}},"Kyrgystan":{"long":{"standard":"توقيت قيرغيزستان"}},"Line_Islands":{"long":{"standard":"توقيت جزر لاين"}},"Lord_Howe":{"long":{"generic":"توقيت لورد هاو","standard":"توقيت لورد هاو الرسمي","daylight":"التوقيت الصيفي للورد هاو"}},"Magadan":{"long":{"generic":"توقيت ماغادان","standard":"توقيت ماغادان الرسمي","daylight":"توقيت ماغادان الصيفي"}},"Malaysia":{"long":{"standard":"توقيت ماليزيا"}},"Maldives":{"long":{"standard":"توقيت جزر المالديف"}},"Marquesas":{"long":{"standard":"توقيت ماركيساس"}},"Marshall_Islands":{"long":{"standard":"توقيت جزر مارشال"}},"Mauritius":{"long":{"generic":"توقيت موريشيوس","standard":"توقيت موريشيوس الرسمي","daylight":"توقيت موريشيوس الصيفي"}},"Mawson":{"long":{"standard":"توقيت ماوسون"}},"Mexico_Pacific":{"long":{"generic":"توقيت المحيط الهادي للمكسيك","standard":"توقيت المحيط الهادي الرسمي للمكسيك","daylight":"توقيت المحيط الهادي الصيفي للمكسيك"}},"Mongolia":{"long":{"generic":"توقيت أولان باتور","standard":"توقيت أولان باتور الرسمي","daylight":"توقيت أولان باتور الصيفي"}},"Moscow":{"long":{"generic":"توقيت موسكو","standard":"توقيت موسكو الرسمي","daylight":"توقيت موسكو الصيفي"}},"Myanmar":{"long":{"standard":"توقيت ميانمار"}},"Nauru":{"long":{"standard":"توقيت ناورو"}},"Nepal":{"long":{"standard":"توقيت نيبال"}},"New_Caledonia":{"long":{"generic":"توقيت كاليدونيا الجديدة","standard":"توقيت كاليدونيا الجديدة الرسمي","daylight":"توقيت كاليدونيا الجديدة الصيفي"}},"New_Zealand":{"long":{"generic":"توقيت نيوزيلندا","standard":"توقيت نيوزيلندا الرسمي","daylight":"توقيت نيوزيلندا الصيفي"}},"Newfoundland":{"long":{"generic":"توقيت نيوفاوندلاند","standard":"توقيت نيوفاوندلاند الرسمي","daylight":"توقيت نيوفاوندلاند الصيفي"}},"Niue":{"long":{"standard":"توقيت نيوي"}},"Norfolk":{"long":{"generic":"توقيت جزيرة نورفولك","standard":"توقيت جزيرة نورفولك الرسمي","daylight":"توقيت جزيرة نورفولك الصيفي"}},"Noronha":{"long":{"generic":"توقيت فيرناندو دي نورونها","standard":"توقيت فرناندو دي نورونها الرسمي","daylight":"توقيت فرناندو دي نورونها الصيفي"}},"North_Mariana":{"long":{"standard":"توقيت جزر ماريانا الشمالية"}},"Novosibirsk":{"long":{"generic":"توقيت نوفوسيبيرسك","standard":"توقيت نوفوسيبيرسك الرسمي","daylight":"توقيت نوفوسيبيرسك الصيفي"}},"Omsk":{"long":{"generic":"توقيت أومسك","standard":"توقيت أومسك الرسمي","daylight":"توقيت أومسك الصيفي"}},"Pakistan":{"long":{"generic":"توقيت باكستان","standard":"توقيت باكستان الرسمي","daylight":"توقيت باكستان الصيفي"}},"Palau":{"long":{"standard":"توقيت بالاو"}},"Papua_New_Guinea":{"long":{"standard":"توقيت بابوا غينيا الجديدة"}},"Paraguay":{"long":{"generic":"توقيت باراغواي","standard":"توقيت باراغواي الرسمي","daylight":"توقيت باراغواي الصيفي"}},"Peru":{"long":{"generic":"توقيت بيرو","standard":"توقيت بيرو الرسمي","daylight":"توقيت بيرو الصيفي"}},"Philippines":{"long":{"generic":"توقيت الفيلبين","standard":"توقيت الفيلبين الرسمي","daylight":"توقيت الفيلبين الصيفي"}},"Phoenix_Islands":{"long":{"standard":"توقيت جزر فينكس"}},"Pierre_Miquelon":{"long":{"generic":"توقيت سانت بيير وميكولون","standard":"توقيت سانت بيير وميكولون الرسمي","daylight":"توقيت سانت بيير وميكولون الصيفي"}},"Pitcairn":{"long":{"standard":"توقيت بيتكيرن"}},"Ponape":{"long":{"standard":"توقيت بونابي"}},"Pyongyang":{"long":{"standard":"توقيت بيونغ يانغ"}},"Reunion":{"long":{"standard":"توقيت روينيون"}},"Rothera":{"long":{"standard":"توقيت روثيرا"}},"Sakhalin":{"long":{"generic":"توقيت ساخالين","standard":"توقيت ساخالين الرسمي","daylight":"توقيت ساخالين الصيفي"}},"Samara":{"long":{"generic":"توقيت سامارا","standard":"توقيت سمارا","daylight":"توقيت سمارا الصيفي"}},"Samoa":{"long":{"generic":"توقيت ساموا","standard":"توقيت ساموا الرسمي","daylight":"توقيت ساموا الصيفي"}},"Seychelles":{"long":{"standard":"توقيت سيشل"}},"Singapore":{"long":{"standard":"توقيت سنغافورة"}},"Solomon":{"long":{"standard":"توقيت جزر سليمان"}},"South_Georgia":{"long":{"standard":"توقيت جنوب جورجيا"}},"Suriname":{"long":{"standard":"توقيت سورينام"}},"Syowa":{"long":{"standard":"توقيت سايووا"}},"Tahiti":{"long":{"standard":"توقيت تاهيتي"}},"Taipei":{"long":{"generic":"توقيت تايبيه","standard":"توقيت تايبيه الرسمي","daylight":"توقيت تايبيه الصيفي"}},"Tajikistan":{"long":{"standard":"توقيت طاجكستان"}},"Tokelau":{"long":{"standard":"توقيت توكيلاو"}},"Tonga":{"long":{"generic":"توقيت تونغا","standard":"توقيت تونغا الرسمي","daylight":"توقيت تونغا الصيفي"}},"Truk":{"long":{"standard":"توقيت شوك"}},"Turkmenistan":{"long":{"generic":"توقيت تركمانستان","standard":"توقيت تركمانستان الرسمي","daylight":"توقيت تركمانستان الصيفي"}},"Tuvalu":{"long":{"standard":"توقيت توفالو"}},"Uruguay":{"long":{"generic":"توقيت أوروغواي","standard":"توقيت أوروغواي الرسمي","daylight":"توقيت أوروغواي الصيفي"}},"Uzbekistan":{"long":{"generic":"توقيت أوزبكستان","standard":"توقيت أوزبكستان الرسمي","daylight":"توقيت أوزبكستان الصيفي"}},"Vanuatu":{"long":{"generic":"توقيت فانواتو","standard":"توقيت فانواتو الرسمي","daylight":"توقيت فانواتو الصيفي"}},"Venezuela":{"long":{"standard":"توقيت فنزويلا"}},"Vladivostok":{"long":{"generic":"توقيت فلاديفوستوك","standard":"توقيت فلاديفوستوك الرسمي","daylight":"توقيت فلاديفوستوك الصيفي"}},"Volgograd":{"long":{"generic":"توقيت فولغوغراد","standard":"توقيت فولغوغراد الرسمي","daylight":"توقيت فولغوغراد الصيفي"}},"Vostok":{"long":{"standard":"توقيت فوستوك"}},"Wake":{"long":{"standard":"توقيت جزيرة ويك"}},"Wallis":{"long":{"standard":"توقيت واليس و فوتونا"}},"Yakutsk":{"long":{"generic":"توقيت ياكوتسك","standard":"توقيت ياكوتسك الرسمي","daylight":"توقيت ياكوتسك الصيفي"}},"Yekaterinburg":{"long":{"generic":"توقيت يكاترينبورغ","standard":"توقيت يكاترينبورغ الرسمي","daylight":"توقيت يكاترينبورغ الصيفي"}},"Yukon":{"long":{"standard":"توقيت يوكون"}}}}}}}'),fu={main:Sl},Mu=Object.freeze(Object.defineProperty({__proto__:null,default:fu,main:Sl},Symbol.toStringTag,{value:"Module"})),Nl=JSON.parse('{"zh":{"numbers":{"defaultNumberingSystem":"latn","otherNumberingSystems":{"native":"hanidec","traditional":"hans","finance":"hansfin"},"minimumGroupingDigits":"1","symbols-numberSystem-hanidec":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"symbols-numberSystem-latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"decimalFormats-numberSystem-hanidec":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-other":"0","10000-count-other":"0万","100000-count-other":"00万","1000000-count-other":"000万","10000000-count-other":"0000万","100000000-count-other":"0亿","1000000000-count-other":"00亿","10000000000-count-other":"000亿","100000000000-count-other":"0000亿","1000000000000-count-other":"0万亿","10000000000000-count-other":"00万亿","100000000000000-count-other":"000万亿"}},"short":{"decimalFormat":{"1000-count-other":"0","10000-count-other":"0万","100000-count-other":"00万","1000000-count-other":"000万","10000000-count-other":"0000万","100000000-count-other":"0亿","1000000000-count-other":"00亿","10000000000-count-other":"000亿","100000000000-count-other":"0000亿","1000000000000-count-other":"0万亿","10000000000000-count-other":"00万亿","100000000000000-count-other":"000万亿"}}},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-other":"0","10000-count-other":"0万","100000-count-other":"00万","1000000-count-other":"000万","10000000-count-other":"0000万","100000000-count-other":"0亿","1000000000-count-other":"00亿","10000000000-count-other":"000亿","100000000000-count-other":"0000亿","1000000000000-count-other":"0万亿","10000000000000-count-other":"00万亿","100000000000000-count-other":"000万亿"}},"short":{"decimalFormat":{"1000-count-other":"0","10000-count-other":"0万","100000-count-other":"00万","1000000-count-other":"000万","10000000-count-other":"0000万","100000000-count-other":"0亿","1000000000-count-other":"00亿","10000000000-count-other":"000亿","100000000000-count-other":"0000亿","1000000000000-count-other":"0万亿","10000000000000-count-other":"00万亿","100000000000000-count-other":"000万亿"}}},"scientificFormats-numberSystem-hanidec":{"standard":"#E0"},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-hanidec":{"standard":"#,##0%"},"percentFormats-numberSystem-latn":{"standard":"#,##0%"},"currencyFormats-numberSystem-hanidec":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"¤#,##0.00","standard-noCurrency":"#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","accounting-alphaNextToNumber":"¤ #,##0.00;(¤ #,##0.00)","accounting-noCurrency":"#,##0.00;(#,##0.00)","short":{"standard":{"1000-count-other":"0","10000-count-other":"¤0万","100000-count-other":"¤00万","1000000-count-other":"¤000万","10000000-count-other":"¤0000万","100000000-count-other":"¤0亿","1000000000-count-other":"¤00亿","10000000000-count-other":"¤000亿","100000000000-count-other":"¤0000亿","1000000000000-count-other":"¤0万亿","10000000000000-count-other":"¤00万亿","100000000000000-count-other":"¤000万亿"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-other":"{0} {1}"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[[:^S:]&[:^Z:]]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"¤#,##0.00","standard-noCurrency":"#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","accounting-alphaNextToNumber":"¤ #,##0.00;(¤ #,##0.00)","accounting-noCurrency":"#,##0.00;(#,##0.00)","short":{"standard":{"1000-count-other":"0","10000-count-other":"¤0万","100000-count-other":"¤00万","1000000-count-other":"¤000万","10000000-count-other":"¤0000万","100000000-count-other":"¤0亿","1000000000-count-other":"¤00亿","10000000000-count-other":"¤000亿","100000000000-count-other":"¤0000亿","1000000000000-count-other":"¤0万亿","10000000000000-count-other":"¤00万亿","100000000000000-count-other":"¤000万亿"}},"currencyPatternAppendISO":"{0} ¤¤","unitPattern-count-other":"{0}{1}"},"miscPatterns-numberSystem-hanidec":{"approximately":"~{0}","atLeast":"{0}+","atMost":"≤{0}","range":"{0}-{1}"},"miscPatterns-numberSystem-latn":{"approximately":"~{0}","atLeast":"{0}+","atMost":"≤{0}","range":"{0}-{1}"},"minimalPairs":{"pluralMinimalPairs-count-other":"{0} 天","other":"在第 {0} 个路口右转。"},"currencies":{"ADP":{"displayName":"安道尔比塞塔"},"AED":{"displayName":"阿联酋迪拉姆"},"AFA":{"displayName":"阿富汗尼 (1927–2002)"},"AFN":{"displayName":"阿富汗尼","symbol-alt-narrow":"؋"},"ALK":{"displayName":"阿尔巴尼亚列克(1946–1965)"},"ALL":{"displayName":"阿尔巴尼亚列克"},"AMD":{"displayName":"亚美尼亚德拉姆","symbol-alt-narrow":"֏"},"ANG":{"displayName":"荷属安的列斯盾"},"AOA":{"displayName":"安哥拉宽扎","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"安哥拉宽扎 (1977–1990)"},"AON":{"displayName":"安哥拉新宽扎 (1990–2000)"},"AOR":{"displayName":"安哥拉重新调整宽扎 (1995–1999)"},"ARA":{"displayName":"阿根廷奥斯特拉尔"},"ARL":{"displayName":"阿根廷法定比索 (1970–1983)"},"ARM":{"displayName":"阿根廷比索 (1881–1970)"},"ARP":{"displayName":"阿根廷比索 (1983–1985)"},"ARS":{"displayName":"阿根廷比索","symbol-alt-narrow":"$"},"ATS":{"displayName":"奥地利先令"},"AUD":{"displayName":"澳大利亚元","symbol":"AU$","symbol-alt-narrow":"$"},"AWG":{"displayName":"阿鲁巴弗罗林"},"AZM":{"displayName":"阿塞拜疆马纳特 (1993–2006)"},"AZN":{"displayName":"阿塞拜疆马纳特","symbol-alt-narrow":"₼"},"BAD":{"displayName":"波士尼亚-赫塞哥维纳第纳尔 (1992–1994)"},"BAM":{"displayName":"波斯尼亚-黑塞哥维那可兑换马克","symbol-alt-narrow":"KM"},"BAN":{"displayName":"波士尼亚-赫塞哥维纳新第纳尔 (1994–1997)"},"BBD":{"displayName":"巴巴多斯元","symbol-alt-narrow":"$"},"BDT":{"displayName":"孟加拉塔卡","symbol-alt-narrow":"৳"},"BEC":{"displayName":"比利时法郎（可兑换）"},"BEF":{"displayName":"比利时法郎"},"BEL":{"displayName":"比利时法郎（金融）"},"BGL":{"displayName":"保加利亚硬列弗"},"BGM":{"displayName":"保加利亚社会党列弗"},"BGN":{"displayName":"保加利亚列弗"},"BGO":{"displayName":"保加利亚列弗 (1879–1952)"},"BHD":{"displayName":"巴林第纳尔"},"BIF":{"displayName":"布隆迪法郎"},"BMD":{"displayName":"百慕大元","symbol-alt-narrow":"$"},"BND":{"displayName":"文莱元","symbol-alt-narrow":"$"},"BOB":{"displayName":"玻利维亚诺","symbol-alt-narrow":"Bs"},"BOL":{"displayName":"玻利维亚诺 (1863–1963)"},"BOP":{"displayName":"玻利维亚比索"},"BOV":{"displayName":"玻利维亚 Mvdol（资金）"},"BRB":{"displayName":"巴西新克鲁赛罗 (1967–1986)"},"BRC":{"displayName":"巴西克鲁扎多 (1986–1989)"},"BRE":{"displayName":"巴西克鲁塞罗 (1990–1993)"},"BRL":{"displayName":"巴西雷亚尔","symbol":"R$","symbol-alt-narrow":"R$"},"BRN":{"displayName":"巴西新克鲁扎多 (1989–1990)"},"BRR":{"displayName":"巴西克鲁塞罗 (1993–1994)"},"BRZ":{"displayName":"巴西克鲁塞罗 (1942–1967)"},"BSD":{"displayName":"巴哈马元","symbol-alt-narrow":"$"},"BTN":{"displayName":"不丹努尔特鲁姆"},"BUK":{"displayName":"缅元"},"BWP":{"displayName":"博茨瓦纳普拉","symbol-alt-narrow":"P"},"BYB":{"displayName":"白俄罗斯新卢布 (1994–1999)"},"BYN":{"displayName":"白俄罗斯卢布","symbol-alt-narrow":"р."},"BYR":{"displayName":"白俄罗斯卢布 (2000–2016)"},"BZD":{"displayName":"伯利兹元","symbol-alt-narrow":"$"},"CAD":{"displayName":"加拿大元","symbol":"CA$","symbol-alt-narrow":"$"},"CDF":{"displayName":"刚果法郎"},"CHE":{"displayName":"欧元 (WIR)"},"CHF":{"displayName":"瑞士法郎"},"CHW":{"displayName":"法郎 (WIR)"},"CLE":{"displayName":"智利埃斯库多"},"CLF":{"displayName":"智利（资金）"},"CLP":{"displayName":"智利比索","symbol-alt-narrow":"$"},"CNH":{"displayName":"人民币（离岸）"},"CNX":{"displayName":"中国人民银行元"},"CNY":{"displayName":"人民币","symbol":"¥","symbol-alt-narrow":"¥"},"COP":{"displayName":"哥伦比亚比索","symbol-alt-narrow":"$"},"COU":{"displayName":"哥伦比亚币"},"CRC":{"displayName":"哥斯达黎加科朗","symbol-alt-narrow":"₡"},"CSD":{"displayName":"旧塞尔维亚第纳尔"},"CSK":{"displayName":"捷克硬克朗"},"CUC":{"displayName":"古巴可兑换比索","symbol-alt-narrow":"$"},"CUP":{"displayName":"古巴比索","symbol-alt-narrow":"$"},"CVE":{"displayName":"佛得角埃斯库多"},"CYP":{"displayName":"塞浦路斯镑"},"CZK":{"displayName":"捷克克朗","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"东德马克"},"DEM":{"displayName":"德国马克"},"DJF":{"displayName":"吉布提法郎"},"DKK":{"displayName":"丹麦克朗","symbol-alt-narrow":"kr"},"DOP":{"displayName":"多米尼加比索","symbol-alt-narrow":"$"},"DZD":{"displayName":"阿尔及利亚第纳尔"},"ECS":{"displayName":"厄瓜多尔苏克雷"},"ECV":{"displayName":"厄瓜多尔 (UVC)"},"EEK":{"displayName":"爱沙尼亚克朗"},"EGP":{"displayName":"埃及镑","symbol-alt-narrow":"E£"},"ERN":{"displayName":"厄立特里亚纳克法"},"ESA":{"displayName":"西班牙比塞塔（帐户 A）"},"ESB":{"displayName":"西班牙比塞塔（兑换帐户）"},"ESP":{"displayName":"西班牙比塞塔","symbol-alt-narrow":"₧"},"ETB":{"displayName":"埃塞俄比亚比尔"},"EUR":{"displayName":"欧元","symbol":"€","symbol-alt-narrow":"€"},"FIM":{"displayName":"芬兰马克"},"FJD":{"displayName":"斐济元","symbol-alt-narrow":"$"},"FKP":{"displayName":"福克兰群岛镑","symbol-alt-narrow":"£"},"FRF":{"displayName":"法国法郎"},"GBP":{"displayName":"英镑","symbol":"£","symbol-alt-narrow":"£"},"GEK":{"displayName":"格鲁吉亚库蓬拉瑞特"},"GEL":{"displayName":"格鲁吉亚拉里","symbol-alt-narrow":"₾"},"GHC":{"displayName":"加纳塞第"},"GHS":{"displayName":"加纳塞地","symbol-alt-narrow":"GH₵"},"GIP":{"displayName":"直布罗陀镑","symbol-alt-narrow":"£"},"GMD":{"displayName":"冈比亚达拉西"},"GNF":{"displayName":"几内亚法郎","symbol-alt-narrow":"FG"},"GNS":{"displayName":"几内亚西里"},"GQE":{"displayName":"赤道几内亚埃奎勒"},"GRD":{"displayName":"希腊德拉克马"},"GTQ":{"displayName":"危地马拉格查尔","symbol-alt-narrow":"Q"},"GWE":{"displayName":"葡萄牙几内亚埃斯库多"},"GWP":{"displayName":"几内亚比绍比索"},"GYD":{"displayName":"圭亚那元","symbol-alt-narrow":"$"},"HKD":{"displayName":"港元","symbol":"HK$","symbol-alt-narrow":"$"},"HNL":{"displayName":"洪都拉斯伦皮拉","symbol-alt-narrow":"L"},"HRD":{"displayName":"克罗地亚第纳尔"},"HRK":{"displayName":"克罗地亚库纳","symbol-alt-narrow":"kn"},"HTG":{"displayName":"海地古德"},"HUF":{"displayName":"匈牙利福林","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"印度尼西亚盾","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"爱尔兰镑"},"ILP":{"displayName":"以色列镑"},"ILR":{"displayName":"以色列谢克尔(1980–1985)","symbol":"ILS"},"ILS":{"displayName":"以色列新谢克尔","symbol":"₪","symbol-alt-narrow":"₪"},"INR":{"displayName":"印度卢比","symbol":"₹","symbol-alt-narrow":"₹"},"IQD":{"displayName":"伊拉克第纳尔"},"IRR":{"displayName":"伊朗里亚尔"},"ISJ":{"displayName":"冰岛克朗(1918–1981)"},"ISK":{"displayName":"冰岛克朗","symbol-alt-narrow":"kr"},"ITL":{"displayName":"意大利里拉"},"JMD":{"displayName":"牙买加元","symbol-alt-narrow":"$"},"JOD":{"displayName":"约旦第纳尔"},"JPY":{"displayName":"日元","symbol":"JP¥","symbol-alt-narrow":"¥"},"KES":{"displayName":"肯尼亚先令"},"KGS":{"displayName":"吉尔吉斯斯坦索姆","symbol-alt-narrow":"⃀"},"KHR":{"displayName":"柬埔寨瑞尔","symbol-alt-narrow":"៛"},"KMF":{"displayName":"科摩罗法郎","symbol-alt-narrow":"CF"},"KPW":{"displayName":"朝鲜元","symbol-alt-narrow":"₩"},"KRH":{"displayName":"韩元 (1953–1962)"},"KRO":{"displayName":"韩元 (1945–1953)"},"KRW":{"displayName":"韩元","symbol":"￦","symbol-alt-narrow":"₩"},"KWD":{"displayName":"科威特第纳尔"},"KYD":{"displayName":"开曼元","symbol-alt-narrow":"$"},"KZT":{"displayName":"哈萨克斯坦坚戈","symbol-alt-narrow":"₸"},"LAK":{"displayName":"老挝基普","symbol-alt-narrow":"₭"},"LBP":{"displayName":"黎巴嫩镑","symbol-alt-narrow":"L£"},"LKR":{"displayName":"斯里兰卡卢比","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"利比里亚元","symbol-alt-narrow":"$"},"LSL":{"displayName":"莱索托洛蒂"},"LTL":{"displayName":"立陶宛立特","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"立陶宛塔咯呐司"},"LUC":{"displayName":"卢森堡可兑换法郎"},"LUF":{"displayName":"卢森堡法郎"},"LUL":{"displayName":"卢森堡金融法郎"},"LVL":{"displayName":"拉脱维亚拉特","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"拉脱维亚卢布"},"LYD":{"displayName":"利比亚第纳尔"},"MAD":{"displayName":"摩洛哥迪拉姆"},"MAF":{"displayName":"摩洛哥法郎"},"MCF":{"displayName":"摩纳哥法郎"},"MDC":{"displayName":"摩尔多瓦库邦"},"MDL":{"displayName":"摩尔多瓦列伊"},"MGA":{"displayName":"马达加斯加阿里亚里","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"马达加斯加法郎"},"MKD":{"displayName":"马其顿第纳尔"},"MKN":{"displayName":"马其顿第纳尔 (1992–1993)"},"MLF":{"displayName":"马里法郎"},"MMK":{"displayName":"缅甸元","symbol-alt-narrow":"K"},"MNT":{"displayName":"蒙古图格里克","symbol-alt-narrow":"₮"},"MOP":{"displayName":"澳门币","displayName-count-other":"澳门元"},"MRO":{"displayName":"毛里塔尼亚乌吉亚 (1973–2017)"},"MRU":{"displayName":"毛里塔尼亚乌吉亚"},"MTL":{"displayName":"马耳他里拉"},"MTP":{"displayName":"马耳他镑"},"MUR":{"displayName":"毛里求斯卢比","symbol-alt-narrow":"Rs"},"MVP":{"displayName":"马尔代夫卢比(1947–1981)"},"MVR":{"displayName":"马尔代夫卢菲亚"},"MWK":{"displayName":"马拉维克瓦查"},"MXN":{"displayName":"墨西哥比索","symbol":"MX$","symbol-alt-narrow":"$"},"MXP":{"displayName":"墨西哥银比索 (1861–1992)"},"MXV":{"displayName":"墨西哥（资金）"},"MYR":{"displayName":"马来西亚林吉特","symbol-alt-narrow":"RM"},"MZE":{"displayName":"莫桑比克埃斯库多"},"MZM":{"displayName":"旧莫桑比克美提卡"},"MZN":{"displayName":"莫桑比克美提卡"},"NAD":{"displayName":"纳米比亚元","symbol-alt-narrow":"$"},"NGN":{"displayName":"尼日利亚奈拉","symbol-alt-narrow":"₦"},"NIC":{"displayName":"尼加拉瓜科多巴 (1988–1991)"},"NIO":{"displayName":"尼加拉瓜科多巴","displayName-count-other":"尼加拉瓜金科多巴","symbol-alt-narrow":"C$"},"NLG":{"displayName":"荷兰盾"},"NOK":{"displayName":"挪威克朗","symbol-alt-narrow":"kr"},"NPR":{"displayName":"尼泊尔卢比","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"新西兰元","symbol":"NZ$","symbol-alt-narrow":"$"},"OMR":{"displayName":"阿曼里亚尔"},"PAB":{"displayName":"巴拿马巴波亚"},"PEI":{"displayName":"秘鲁印第"},"PEN":{"displayName":"秘鲁索尔"},"PES":{"displayName":"秘鲁索尔 (1863–1965)"},"PGK":{"displayName":"巴布亚新几内亚基那"},"PHP":{"displayName":"菲律宾比索","symbol":"PHP","symbol-alt-narrow":"₱"},"PKR":{"displayName":"巴基斯坦卢比","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"波兰兹罗提","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"波兰兹罗提 (1950–1995)"},"PTE":{"displayName":"葡萄牙埃斯库多"},"PYG":{"displayName":"巴拉圭瓜拉尼","symbol-alt-narrow":"₲"},"QAR":{"displayName":"卡塔尔里亚尔"},"RHD":{"displayName":"罗得西亚元"},"ROL":{"displayName":"旧罗马尼亚列伊"},"RON":{"displayName":"罗马尼亚列伊","symbol-alt-narrow":"lei"},"RSD":{"displayName":"塞尔维亚第纳尔"},"RUB":{"displayName":"俄罗斯卢布","symbol-alt-narrow":"₽"},"RUR":{"displayName":"俄国卢布 (1991–1998)","symbol-alt-narrow":"р."},"RWF":{"displayName":"卢旺达法郎","symbol-alt-narrow":"RF"},"SAR":{"displayName":"沙特里亚尔"},"SBD":{"displayName":"所罗门群岛元","symbol-alt-narrow":"$"},"SCR":{"displayName":"塞舌尔卢比"},"SDD":{"displayName":"苏丹第纳尔 (1992–2007)"},"SDG":{"displayName":"苏丹镑"},"SDP":{"displayName":"苏丹镑 (1957–1998)"},"SEK":{"displayName":"瑞典克朗","symbol-alt-narrow":"kr"},"SGD":{"displayName":"新加坡元","symbol-alt-narrow":"$"},"SHP":{"displayName":"圣赫勒拿群岛磅","symbol-alt-narrow":"£"},"SIT":{"displayName":"斯洛文尼亚托拉尔"},"SKK":{"displayName":"斯洛伐克克朗"},"SLE":{"displayName":"塞拉利昂新利昂"},"SLL":{"displayName":"塞拉利昂利昂"},"SOS":{"displayName":"索马里先令"},"SRD":{"displayName":"苏里南元","symbol-alt-narrow":"$"},"SRG":{"displayName":"苏里南盾"},"SSP":{"displayName":"南苏丹镑","symbol-alt-narrow":"£"},"STD":{"displayName":"圣多美和普林西比多布拉 (1977–2017)"},"STN":{"displayName":"圣多美和普林西比多布拉","symbol-alt-narrow":"Db"},"SUR":{"displayName":"苏联卢布"},"SVC":{"displayName":"萨尔瓦多科朗"},"SYP":{"displayName":"叙利亚镑","symbol-alt-narrow":"£"},"SZL":{"displayName":"斯威士兰里兰吉尼"},"THB":{"displayName":"泰铢","symbol-alt-narrow":"฿"},"TJR":{"displayName":"塔吉克斯坦卢布"},"TJS":{"displayName":"塔吉克斯坦索莫尼"},"TMM":{"displayName":"土库曼斯坦马纳特 (1993–2009)"},"TMT":{"displayName":"土库曼斯坦马纳特"},"TND":{"displayName":"突尼斯第纳尔"},"TOP":{"displayName":"汤加潘加","symbol-alt-narrow":"T$"},"TPE":{"displayName":"帝汶埃斯库多"},"TRL":{"displayName":"土耳其里拉 (1922–2005)"},"TRY":{"displayName":"土耳其里拉","symbol-alt-narrow":"₺","symbol-alt-variant":"TL"},"TTD":{"displayName":"特立尼达和多巴哥元","symbol-alt-narrow":"$"},"TWD":{"displayName":"新台币","symbol":"NT$","symbol-alt-narrow":"NT$"},"TZS":{"displayName":"坦桑尼亚先令"},"UAH":{"displayName":"乌克兰格里夫纳","symbol-alt-narrow":"₴"},"UAK":{"displayName":"乌克兰币"},"UGS":{"displayName":"乌干达先令 (1966–1987)"},"UGX":{"displayName":"乌干达先令"},"USD":{"displayName":"美元","symbol":"US$","symbol-alt-narrow":"$"},"USN":{"displayName":"美元（次日）"},"USS":{"displayName":"美元（当日）"},"UYI":{"displayName":"乌拉圭比索（索引单位）"},"UYP":{"displayName":"乌拉圭比索 (1975–1993)"},"UYU":{"displayName":"乌拉圭比索","symbol-alt-narrow":"$"},"UYW":{"displayName":"乌拉圭票面工资指数单位"},"UZS":{"displayName":"乌兹别克斯坦苏姆"},"VEB":{"displayName":"委内瑞拉玻利瓦尔 (1871–2008)"},"VED":{"displayName":"委内瑞拉主权币"},"VEF":{"displayName":"委内瑞拉玻利瓦尔 (2008–2018)","symbol-alt-narrow":"Bs"},"VES":{"displayName":"委内瑞拉玻利瓦尔"},"VND":{"displayName":"越南盾","symbol":"₫","symbol-alt-narrow":"₫"},"VNN":{"displayName":"越南盾 (1978–1985)"},"VUV":{"displayName":"瓦努阿图瓦图"},"WST":{"displayName":"萨摩亚塔拉"},"XAF":{"displayName":"中非法郎","symbol":"FCFA"},"XAG":{"displayName":"银"},"XAU":{"displayName":"黄金"},"XBA":{"displayName":"欧洲复合单位"},"XBB":{"displayName":"欧洲货币联盟"},"XBC":{"displayName":"欧洲计算单位 (XBC)"},"XBD":{"displayName":"欧洲计算单位 (XBD)"},"XCD":{"displayName":"东加勒比元","symbol":"EC$","symbol-alt-narrow":"$"},"XCG":{"symbol":"Cg."},"XDR":{"displayName":"特别提款权"},"XEU":{"displayName":"欧洲货币单位"},"XFO":{"displayName":"法国金法郎"},"XFU":{"displayName":"法国法郎 (UIC)"},"XOF":{"displayName":"西非法郎","symbol":"F CFA"},"XPD":{"displayName":"钯"},"XPF":{"displayName":"太平洋法郎","symbol":"CFPF"},"XPT":{"displayName":"铂"},"XRE":{"displayName":"RINET 基金"},"XSU":{"displayName":"苏克雷"},"XTS":{"displayName":"测试货币代码"},"XUA":{"displayName":"非洲开发银行记账单位"},"XXX":{"displayName":"未知货币","displayName-count-other":"（未知货币）","symbol":"XXX"},"YDD":{"displayName":"也门第纳尔"},"YER":{"displayName":"也门里亚尔"},"YUD":{"displayName":"南斯拉夫硬第纳尔 (1966–1990)"},"YUM":{"displayName":"南斯拉夫新第纳尔 (1994–2002)"},"YUN":{"displayName":"南斯拉夫可兑换第纳尔 (1990–1992)"},"YUR":{"displayName":"南斯拉夫改良第纳尔 (1992–1993)"},"ZAL":{"displayName":"南非兰特 (金融)"},"ZAR":{"displayName":"南非兰特","symbol-alt-narrow":"R"},"ZMK":{"displayName":"赞比亚克瓦查 (1968–2012)"},"ZMW":{"displayName":"赞比亚克瓦查","symbol-alt-narrow":"ZK"},"ZRN":{"displayName":"新扎伊尔 (1993–1998)"},"ZRZ":{"displayName":"扎伊尔 (1971–1993)"},"ZWD":{"displayName":"津巴布韦元 (1980–2008)"},"ZWL":{"displayName":"津巴布韦元 (2009)"},"ZWR":{"displayName":"津巴布韦元 (2008)"}}},"dates":{"calendars":{"islamic":{"months":{"format":{"abbreviated":{"1":"1月","2":"2月","3":"3月","4":"4月","5":"5月","6":"6月","7":"7月","8":"8月","9":"9月","10":"10月","11":"11月","12":"12月"},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"一月","2":"二月","3":"三月","4":"四月","5":"五月","6":"六月","7":"七月","8":"八月","9":"九月","10":"十月","11":"十一月","12":"十二月"}},"stand-alone":{"abbreviated":{"1":"1月","2":"2月","3":"3月","4":"4月","5":"5月","6":"6月","7":"7月","8":"8月","9":"9月","10":"10月","11":"11月","12":"12月"},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"一月","2":"二月","3":"三月","4":"四月","5":"五月","6":"六月","7":"七月","8":"八月","9":"九月","10":"十月","11":"十一月","12":"十二月"}}},"days":{"format":{"abbreviated":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"narrow":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"},"short":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"wide":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}},"stand-alone":{"abbreviated":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"narrow":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"},"short":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"wide":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}}},"quarters":{"format":{"abbreviated":{"1":"1季度","2":"2季度","3":"3季度","4":"4季度"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"第一季度","2":"第二季度","3":"第三季度","4":"第四季度"}},"stand-alone":{"abbreviated":{"1":"1季度","2":"2季度","3":"3季度","4":"4季度"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"第一季度","2":"第二季度","3":"第三季度","4":"第四季度"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"narrow":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"wide":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"清晨","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"}},"stand-alone":{"abbreviated":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"narrow":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"wide":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"}}},"eras":{"eraNames":{"0":"伊斯兰历"},"eraAbbr":{"0":"伊斯兰历"},"eraNarrow":{"0":"伊斯兰历"}},"dateFormats":{"full":"Gy年M月d日EEEE","long":"Gy年M月d日","medium":"Gy年M月d日","short":"Gy/M/d"},"dateSkeletons":{"full":"GyMEEEEd","long":"GyMd","medium":"GyMd","short":"GyMd"},"timeFormats":{"full":"zzzz HH:mm:ss","long":"z HH:mm:ss","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}","availableFormats":{"Bh":"Bh时","Bhm":"Bh:mm","Bhms":"Bh:mm:ss","d":"d日","E":"ccc","EBhm":"EB h:mm","EBhms":"EB h:mm:ss","Ed":"d日E","Ehm":"Ea h:mm","EHm":"E HH:mm","Ehms":"Ea h:mm:ss","EHms":"E HH:mm:ss","Gy":"Gy年","GyMd":"Gy/M/d","GyMEEEEd":"Gy年M月d日EEEE","GyMMM":"Gy年M月","GyMMMd":"Gy年M月d日","GyMMMEd":"Gy年M月d日E","h":"ah时","H":"H时","hm":"ah:mm","Hm":"HH:mm","hms":"ah:mm:ss","Hms":"HH:mm:ss","M":"M月","Md":"M-d","MEd":"M-dE","MMM":"LLL","MMMd":"M月d日","MMMEd":"M月d日E","MMMMd":"M月d日","ms":"mm:ss","y":"Gy年","yyyy":"Gy年","yyyyM":"Gy年M月","yyyyMd":"G y/M/d","yyyyMEd":"G y/M/dE","yyyyMMM":"Gy年M月","yyyyMMMd":"Gy年M月d日","yyyyMMMEd":"Gy年MM月d日E","yyyyMMMM":"Gy年M月","yyyyQQQ":"Gy年第Q季度","yyyyQQQQ":"Gy年第Q季度"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"Bh时至Bh时","h":"Bh时至h时"},"Bhm":{"B":"Bh:mm至Bh:mm","h":"Bh:mm至h:mm","m":"Bh:mm至h:mm"},"d":{"d":"d至d日"},"Gy":{"G":"Gy年 – Gy年","y":"Gy年–y年"},"GyM":{"G":"GGGGGy-MM – GGGGGy-MM","M":"GGGGGy-MM – y-MM","y":"GGGGGy-MM – y-MM"},"GyMd":{"d":"GGGGGy-MM-dd – y-MM-dd","G":"GGGGGy-MM-dd – GGGGGy-MM-dd","M":"GGGGGy-MM-dd – y-MM-dd","y":"GGGGGy-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGGy-MM-ddE – y-MM-ddE","G":"GGGGGy-MM-ddE – GGGGGy-MM-ddE","M":"GGGGGy-MM-ddE – y-MM-ddE","y":"GGGGGy-MM-ddE – y-MM-ddE"},"GyMMM":{"G":"Gy年MMM – Gy年MMM","M":"Gy年MMM–MMM","y":"Gy年MMM – y年MMM"},"GyMMMd":{"d":"Gy年MMMd日–d日","G":"Gy年MMMd日 – Gy年MMMd日","M":"Gy年MMMd日 – MMMd日","y":"Gy年MMMd日 – y年MMMd日"},"GyMMMEd":{"d":"Gy年MMMd日E – MMMd日E","G":"Gy年MMMd日E – Gy年MMMd日E","M":"Gy年MMMd日E – MMMd日E","y":"Gy年MMMd日E – y年MMMd日E"},"h":{"a":"ah时至ah时","h":"ah时至h时"},"H":{"H":"HH–HH"},"hm":{"a":"ah:mm至ah:mm","h":"ah:mm至h:mm","m":"ah:mm至h:mm"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"v ah:mm至ah:mm","h":"v ah:mm至h:mm","m":"v ah:mm至h:mm"},"Hmv":{"H":"v HH:mm – HH:mm","m":"v HH:mm – HH:mm"},"hv":{"a":"v ah时至ah时","h":"v ah时至h时"},"Hv":{"H":"HH–HH v"},"M":{"M":"M–M月"},"Md":{"d":"M/d – M/d","M":"M/d – M/d"},"MEd":{"d":"M/dE至M/dE","M":"M/dE至M/dE"},"MMM":{"M":"M月至M月"},"MMMd":{"d":"M月d日至d日","M":"M月d日至M月d日"},"MMMEd":{"d":"M月d日E至d日E","M":"M月d日E至M月d日E"},"y":{"y":"Gy–y年"},"yM":{"M":"Gy年M月至M月","y":"Gy年M月至y年M月"},"yMd":{"d":"Gy/M/d – y/M/d","M":"Gy/M/d – y/M/d","y":"Gy/M/d – y/M/d"},"yMEd":{"d":"Gy/M/dE至y/M/dE","M":"Gy/M/dE至y/M/dE","y":"Gy/M/dE至y/M/dE"},"yMMM":{"M":"Gy年M月至M月","y":"Gy年M月至y年M月"},"yMMMd":{"d":"Gy年M月d日至d日","M":"Gy年M月d日至M月d日","y":"Gy年M月d日至y年M月d日"},"yMMMEd":{"d":"Gy年M月d日E至d日E","M":"Gy年M月d日E至M月d日E","y":"Gy年M月d日E至y年M月d日E"},"yMMMM":{"M":"Gy年M月至M月","y":"Gy年M月至y年M月"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"}}},"gregorian":{"months":{"format":{"abbreviated":{"1":"1月","2":"2月","3":"3月","4":"4月","5":"5月","6":"6月","7":"7月","8":"8月","9":"9月","10":"10月","11":"11月","12":"12月"},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"一月","2":"二月","3":"三月","4":"四月","5":"五月","6":"六月","7":"七月","8":"八月","9":"九月","10":"十月","11":"十一月","12":"十二月"}},"stand-alone":{"abbreviated":{"1":"1月","2":"2月","3":"3月","4":"4月","5":"5月","6":"6月","7":"7月","8":"8月","9":"9月","10":"10月","11":"11月","12":"12月"},"narrow":{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12"},"wide":{"1":"一月","2":"二月","3":"三月","4":"四月","5":"五月","6":"六月","7":"七月","8":"八月","9":"九月","10":"十月","11":"十一月","12":"十二月"}}},"days":{"format":{"abbreviated":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"narrow":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"},"short":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"wide":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}},"stand-alone":{"abbreviated":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"narrow":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"},"short":{"sun":"周日","mon":"周一","tue":"周二","wed":"周三","thu":"周四","fri":"周五","sat":"周六"},"wide":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}}},"quarters":{"format":{"abbreviated":{"1":"1季度","2":"2季度","3":"3季度","4":"4季度"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"第一季度","2":"第二季度","3":"第三季度","4":"第四季度"}},"stand-alone":{"abbreviated":{"1":"1季度","2":"2季度","3":"3季度","4":"4季度"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"第一季度","2":"第二季度","3":"第三季度","4":"第四季度"}}},"dayPeriods":{"format":{"abbreviated":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"narrow":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"wide":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"清晨","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"}},"stand-alone":{"abbreviated":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"narrow":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"},"wide":{"midnight":"午夜","am":"上午","pm":"下午","morning1":"早上","morning2":"上午","afternoon1":"中午","afternoon2":"下午","evening1":"晚上","night1":"凌晨"}}},"eras":{"eraNames":{"0":"公元前","1":"公元","0-alt-variant":"公元前","1-alt-variant":"公元"},"eraAbbr":{"0":"公元前","1":"公元","0-alt-variant":"公元前","1-alt-variant":"公元"},"eraNarrow":{"0":"公元前","1":"公元","0-alt-variant":"公元前","1-alt-variant":"公元"}},"dateFormats":{"full":"y年M月d日EEEE","long":"y年M月d日","medium":"y年M月d日","short":"y/M/d"},"dateSkeletons":{"full":"yMEEEEd","long":"yMd","medium":"yMd","short":"yMd"},"timeFormats":{"full":"zzzz HH:mm:ss","long":"z HH:mm:ss","medium":"HH:mm:ss","short":"HH:mm"},"timeSkeletons":{"full":"HHmmsszzzz","long":"HHmmssz","medium":"HHmmss","short":"HHmm"},"dateTimeFormats":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}","availableFormats":{"Bh":"Bh时","Bhm":"Bh:mm","Bhms":"Bh:mm:ss","d":"d日","E":"ccc","EBhm":"EBh:mm","EBhms":"EBh:mm:ss","Ed":"d日E","Ehm":"Eah:mm","EHm":"EHH:mm","Ehms":"Eah:mm:ss","EHms":"EHH:mm:ss","Gy":"Gy年","GyMd":"GGGGG y-MM-dd","GyMMM":"Gy年M月","GyMMMd":"Gy年M月d日","GyMMMEd":"Gy年M月d日E","h":"ah时","H":"H时","hm":"ah:mm","Hm":"HH:mm","hms":"ah:mm:ss","Hms":"HH:mm:ss","hmsv":"v ah:mm:ss","Hmsv":"v HH:mm:ss","hmv":"v ah:mm","Hmv":"v HH:mm","M":"M月","Md":"M/d","MEd":"M/dE","MMdd":"MM/dd","MMM":"LLL","MMMd":"M月d日","MMMEd":"M月d日E","MMMMd":"M月d日","MMMMW-count-other":"MMMM第W周","ms":"mm:ss","y":"y年","yM":"y/M","yMd":"y/M/d","yMEd":"y/M/dE","yMEEEEd":"y年M月d日EEEE","yMM":"y年M月","yMMM":"y年M月","yMMMd":"y年M月d日","yMMMEd":"y年M月d日E","yMMMM":"y年M月","yQQQ":"y年第Q季度","yQQQQ":"y年第Q季度","yw-count-other":"Y年第w周"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{1}{0}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"Bh时至Bh时","h":"Bh时至h时"},"Bhm":{"B":"Bh:mm至Bh:mm","h":"Bh:mm至h:mm","m":"Bh:mm至h:mm"},"d":{"d":"d–d日"},"Gy":{"G":"Gy年 – Gy年","y":"Gy年–y年"},"GyM":{"G":"GGGGGy-MM – GGGGGy-MM","M":"GGGGGy-MM – y-MM","y":"GGGGGy-MM – y-MM"},"GyMd":{"d":"GGGGGy-MM-dd – y-MM-dd","G":"GGGGGy-MM-dd – GGGGGy-MM-dd","M":"GGGGGy-MM-dd – y-MM-dd","y":"GGGGGy-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGGy-MM-ddE – y-MM-ddE","G":"GGGGGy-MM-ddE – GGGGGy-MM-ddE","M":"GGGGGy-MM-ddE – y-MM-ddE","y":"GGGGGy-MM-ddE – y-MM-ddE"},"GyMMM":{"G":"Gy年MMM – Gy年MMM","M":"Gy年MMM–MMM","y":"Gy年MMM – y年MMM"},"GyMMMd":{"d":"Gy年MMMd–d日","G":"Gy年MMMd日 – Gy年MMMd日","M":"Gy年MMMd日 – MMMd日","y":"Gy年MMMd日 – y年MMMd日"},"GyMMMEd":{"d":"Gy年MMMd日E – MMMd日E","G":"Gy年MMMd日E – Gy年MMMd日E","M":"Gy年MMMd日E – MMMd日E","y":"Gy年MMMd日E – y年MMMd日E"},"h":{"a":"ah时至ah时","h":"ah时至h时"},"H":{"H":"HH–HH"},"hm":{"a":"ah:mm至ah:mm","h":"ah:mm至h:mm","m":"ah:mm至h:mm"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"vah:mm至ah:mm","h":"vah:mm至h:mm","m":"vah:mm至h:mm"},"Hmv":{"H":"v HH:mm–HH:mm","m":"v HH:mm–HH:mm"},"hv":{"a":"vah时至ah时","h":"vah时至h时"},"Hv":{"H":"v HH–HH"},"M":{"M":"M–M月"},"Md":{"d":"M/d – M/d","M":"M/d – M/d"},"MEd":{"d":"M/dE至M/dE","M":"M/dE至M/dE"},"MMM":{"M":"MMM – MMM"},"MMMd":{"d":"M月d日至d日","M":"M月d日至M月d日"},"MMMEd":{"d":"M月d日E至d日E","M":"M月d日E至M月d日E"},"y":{"y":"y–y年"},"yM":{"M":"y年M月至M月","y":"y年M月至y年M月"},"yMd":{"d":"y/M/d – y/M/d","M":"y/M/d – y/M/d","y":"y/M/d – y/M/d"},"yMEd":{"d":"y/M/dE至y/M/dE","M":"y/M/dE至y/M/dE","y":"y/M/dE至y/M/dE"},"yMMM":{"M":"y年M月至M月","y":"y年M月至y年M月"},"yMMMd":{"d":"y年M月d日至d日","M":"y年M月d日至M月d日","y":"y年M月d日至y年M月d日"},"yMMMEd":{"d":"y年M月d日E至d日E","M":"y年M月d日E至M月d日E","y":"y年M月d日E至y年M月d日E"},"yMMMM":{"M":"y年M月至M月","y":"y年M月至y年M月"}}},"dateTimeFormats-atTime":{"standard":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"}}}},"timeZoneNames":{"hourFormat":"+HH:mm;-HH:mm","gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","regionFormat":"{0}时间","regionFormat-type-daylight":"{0}夏令时间","regionFormat-type-standard":"{0}标准时间","fallbackFormat":"{1}（{0}）","zone":{"America":{"Adak":{"exemplarCity":"埃达克"},"Anchorage":{"exemplarCity":"安克雷奇"},"Anguilla":{"exemplarCity":"安圭拉"},"Antigua":{"exemplarCity":"安提瓜"},"Araguaina":{"exemplarCity":"阿拉瓜伊纳"},"Argentina":{"Rio_Gallegos":{"exemplarCity":"里奥加耶戈斯"},"San_Juan":{"exemplarCity":"圣胡安"},"Ushuaia":{"exemplarCity":"乌斯怀亚"},"La_Rioja":{"exemplarCity":"拉里奥哈"},"San_Luis":{"exemplarCity":"圣路易斯"},"Salta":{"exemplarCity":"萨尔塔"},"Tucuman":{"exemplarCity":"图库曼"}},"Aruba":{"exemplarCity":"阿鲁巴"},"Asuncion":{"exemplarCity":"亚松森"},"Bahia":{"exemplarCity":"巴伊亚"},"Bahia_Banderas":{"exemplarCity":"巴伊亚班德拉斯"},"Barbados":{"exemplarCity":"巴巴多斯"},"Belem":{"exemplarCity":"贝伦"},"Belize":{"exemplarCity":"伯利兹"},"Blanc-Sablon":{"exemplarCity":"布兰克萨布隆"},"Boa_Vista":{"exemplarCity":"博阿维斯塔"},"Bogota":{"exemplarCity":"波哥大"},"Boise":{"exemplarCity":"博伊西"},"Buenos_Aires":{"exemplarCity":"布宜诺斯艾利斯"},"Cambridge_Bay":{"exemplarCity":"剑桥湾"},"Campo_Grande":{"exemplarCity":"大坎普"},"Cancun":{"exemplarCity":"坎昆"},"Caracas":{"exemplarCity":"加拉加斯"},"Catamarca":{"exemplarCity":"卡塔马卡"},"Cayenne":{"exemplarCity":"卡宴"},"Cayman":{"exemplarCity":"开曼"},"Chicago":{"exemplarCity":"芝加哥"},"Chihuahua":{"exemplarCity":"奇瓦瓦"},"Ciudad_Juarez":{"exemplarCity":"华雷斯城"},"Coral_Harbour":{"exemplarCity":"阿蒂科肯"},"Cordoba":{"exemplarCity":"科尔多瓦"},"Costa_Rica":{"exemplarCity":"哥斯达黎加"},"Creston":{"exemplarCity":"克雷斯顿"},"Cuiaba":{"exemplarCity":"库亚巴"},"Curacao":{"exemplarCity":"库拉索"},"Danmarkshavn":{"exemplarCity":"丹马沙文"},"Dawson":{"exemplarCity":"道森"},"Dawson_Creek":{"exemplarCity":"道森克里克"},"Denver":{"exemplarCity":"丹佛"},"Detroit":{"exemplarCity":"底特律"},"Dominica":{"exemplarCity":"多米尼加"},"Edmonton":{"exemplarCity":"埃德蒙顿"},"Eirunepe":{"exemplarCity":"依伦尼贝"},"El_Salvador":{"exemplarCity":"萨尔瓦多"},"Fort_Nelson":{"exemplarCity":"纳尔逊堡"},"Fortaleza":{"exemplarCity":"福塔雷萨"},"Glace_Bay":{"exemplarCity":"格莱斯贝"},"Godthab":{"exemplarCity":"努克"},"Goose_Bay":{"exemplarCity":"古斯湾"},"Grand_Turk":{"exemplarCity":"大特克"},"Grenada":{"exemplarCity":"格林纳达"},"Guadeloupe":{"exemplarCity":"瓜德罗普"},"Guatemala":{"exemplarCity":"危地马拉"},"Guayaquil":{"exemplarCity":"瓜亚基尔"},"Guyana":{"exemplarCity":"圭亚那"},"Halifax":{"exemplarCity":"哈利法克斯"},"Havana":{"exemplarCity":"哈瓦那"},"Hermosillo":{"exemplarCity":"埃莫西约"},"Indiana":{"Vincennes":{"exemplarCity":"印第安纳州温森斯"},"Petersburg":{"exemplarCity":"印第安纳州彼得斯堡"},"Tell_City":{"exemplarCity":"印第安纳州特尔城"},"Knox":{"exemplarCity":"印第安纳州诺克斯"},"Winamac":{"exemplarCity":"印第安纳州威纳马克"},"Marengo":{"exemplarCity":"印第安纳州马伦戈"},"Vevay":{"exemplarCity":"印第安纳州维维市"}},"Indianapolis":{"exemplarCity":"印第安纳波利斯"},"Inuvik":{"exemplarCity":"伊努维克"},"Iqaluit":{"exemplarCity":"伊魁特"},"Jamaica":{"exemplarCity":"牙买加"},"Jujuy":{"exemplarCity":"胡胡伊"},"Juneau":{"exemplarCity":"朱诺"},"Kentucky":{"Monticello":{"exemplarCity":"肯塔基州蒙蒂塞洛"}},"Kralendijk":{"exemplarCity":"克拉伦代克"},"La_Paz":{"exemplarCity":"拉巴斯"},"Lima":{"exemplarCity":"利马"},"Los_Angeles":{"exemplarCity":"洛杉矶"},"Louisville":{"exemplarCity":"路易斯维尔"},"Lower_Princes":{"exemplarCity":"下太子区"},"Maceio":{"exemplarCity":"马塞约"},"Managua":{"exemplarCity":"马那瓜"},"Manaus":{"exemplarCity":"马瑙斯"},"Marigot":{"exemplarCity":"马里戈特"},"Martinique":{"exemplarCity":"马提尼克"},"Matamoros":{"exemplarCity":"马塔莫罗斯"},"Mazatlan":{"exemplarCity":"马萨特兰"},"Mendoza":{"exemplarCity":"门多萨"},"Menominee":{"exemplarCity":"梅诺米尼"},"Merida":{"exemplarCity":"梅里达"},"Metlakatla":{"exemplarCity":"梅特拉卡特拉"},"Mexico_City":{"exemplarCity":"墨西哥城"},"Miquelon":{"exemplarCity":"密克隆"},"Moncton":{"exemplarCity":"蒙克顿"},"Monterrey":{"exemplarCity":"蒙特雷"},"Montevideo":{"exemplarCity":"蒙得维的亚"},"Montserrat":{"exemplarCity":"蒙特塞拉特"},"Nassau":{"exemplarCity":"拿骚"},"New_York":{"exemplarCity":"纽约"},"Nome":{"exemplarCity":"诺姆"},"Noronha":{"exemplarCity":"洛罗尼亚"},"North_Dakota":{"Beulah":{"exemplarCity":"北达科他州比尤拉"},"New_Salem":{"exemplarCity":"北达科他州新塞勒姆"},"Center":{"exemplarCity":"北达科他州申特"}},"Ojinaga":{"exemplarCity":"奥希纳加"},"Panama":{"exemplarCity":"巴拿马"},"Paramaribo":{"exemplarCity":"帕拉马里博"},"Phoenix":{"exemplarCity":"凤凰城"},"Port-au-Prince":{"exemplarCity":"太子港"},"Port_of_Spain":{"exemplarCity":"西班牙港"},"Porto_Velho":{"exemplarCity":"波多韦柳"},"Puerto_Rico":{"exemplarCity":"波多黎各"},"Punta_Arenas":{"exemplarCity":"蓬塔阿雷纳斯"},"Rankin_Inlet":{"exemplarCity":"兰今湾"},"Recife":{"exemplarCity":"累西腓"},"Regina":{"exemplarCity":"里贾纳"},"Resolute":{"exemplarCity":"雷索卢特"},"Rio_Branco":{"exemplarCity":"里奥布郎库"},"Santarem":{"exemplarCity":"圣塔伦"},"Santiago":{"exemplarCity":"圣地亚哥"},"Santo_Domingo":{"exemplarCity":"圣多明各"},"Sao_Paulo":{"exemplarCity":"圣保罗"},"Scoresbysund":{"exemplarCity":"斯科列斯比桑德"},"Sitka":{"exemplarCity":"锡特卡"},"St_Barthelemy":{"exemplarCity":"圣巴泰勒米岛"},"St_Johns":{"exemplarCity":"圣约翰斯"},"St_Kitts":{"exemplarCity":"圣基茨"},"St_Lucia":{"exemplarCity":"圣卢西亚"},"St_Thomas":{"exemplarCity":"圣托马斯"},"St_Vincent":{"exemplarCity":"圣文森特"},"Swift_Current":{"exemplarCity":"斯威夫特卡伦特"},"Tegucigalpa":{"exemplarCity":"特古西加尔巴"},"Thule":{"exemplarCity":"图勒"},"Tijuana":{"exemplarCity":"蒂华纳"},"Toronto":{"exemplarCity":"多伦多"},"Tortola":{"exemplarCity":"托尔托拉"},"Vancouver":{"exemplarCity":"温哥华"},"Whitehorse":{"exemplarCity":"怀特霍斯"},"Winnipeg":{"exemplarCity":"温尼伯"},"Yakutat":{"exemplarCity":"亚库塔特"}},"Atlantic":{"Azores":{"exemplarCity":"亚速尔群岛"},"Bermuda":{"exemplarCity":"百慕大"},"Canary":{"exemplarCity":"加那利"},"Cape_Verde":{"exemplarCity":"佛得角"},"Faeroe":{"exemplarCity":"法罗"},"Madeira":{"exemplarCity":"马德拉"},"Reykjavik":{"exemplarCity":"雷克雅未克"},"South_Georgia":{"exemplarCity":"南乔治亚"},"St_Helena":{"exemplarCity":"圣赫勒拿"},"Stanley":{"exemplarCity":"斯坦利"}},"Europe":{"Amsterdam":{"exemplarCity":"阿姆斯特丹"},"Andorra":{"exemplarCity":"安道尔"},"Astrakhan":{"exemplarCity":"阿斯特拉罕"},"Athens":{"exemplarCity":"雅典"},"Belgrade":{"exemplarCity":"贝尔格莱德"},"Berlin":{"exemplarCity":"柏林"},"Bratislava":{"exemplarCity":"布拉迪斯拉发"},"Brussels":{"exemplarCity":"布鲁塞尔"},"Bucharest":{"exemplarCity":"布加勒斯特"},"Budapest":{"exemplarCity":"布达佩斯"},"Busingen":{"exemplarCity":"布辛根"},"Chisinau":{"exemplarCity":"基希讷乌"},"Copenhagen":{"exemplarCity":"哥本哈根"},"Dublin":{"long":{"daylight":"爱尔兰标准时间"},"exemplarCity":"都柏林"},"Gibraltar":{"exemplarCity":"直布罗陀"},"Guernsey":{"exemplarCity":"根西岛"},"Helsinki":{"exemplarCity":"赫尔辛基"},"Isle_of_Man":{"exemplarCity":"马恩岛"},"Istanbul":{"exemplarCity":"伊斯坦布尔"},"Jersey":{"exemplarCity":"泽西岛"},"Kaliningrad":{"exemplarCity":"加里宁格勒"},"Kiev":{"exemplarCity":"基辅"},"Kirov":{"exemplarCity":"基洛夫"},"Lisbon":{"exemplarCity":"里斯本"},"Ljubljana":{"exemplarCity":"卢布尔雅那"},"London":{"long":{"daylight":"英国夏令时间"},"exemplarCity":"伦敦"},"Luxembourg":{"exemplarCity":"卢森堡"},"Madrid":{"exemplarCity":"马德里"},"Malta":{"exemplarCity":"马耳他"},"Mariehamn":{"exemplarCity":"玛丽港"},"Minsk":{"exemplarCity":"明斯克"},"Monaco":{"exemplarCity":"摩纳哥"},"Moscow":{"exemplarCity":"莫斯科"},"Oslo":{"exemplarCity":"奥斯陆"},"Paris":{"exemplarCity":"巴黎"},"Podgorica":{"exemplarCity":"波德戈里察"},"Prague":{"exemplarCity":"布拉格"},"Riga":{"exemplarCity":"里加"},"Rome":{"exemplarCity":"罗马"},"Samara":{"exemplarCity":"萨马拉"},"San_Marino":{"exemplarCity":"圣马力诺"},"Sarajevo":{"exemplarCity":"萨拉热窝"},"Saratov":{"exemplarCity":"萨拉托夫"},"Simferopol":{"exemplarCity":"辛菲罗波尔"},"Skopje":{"exemplarCity":"斯科普里"},"Sofia":{"exemplarCity":"索非亚"},"Stockholm":{"exemplarCity":"斯德哥尔摩"},"Tallinn":{"exemplarCity":"塔林"},"Tirane":{"exemplarCity":"地拉那"},"Ulyanovsk":{"exemplarCity":"乌里扬诺夫斯克"},"Vaduz":{"exemplarCity":"瓦杜兹"},"Vatican":{"exemplarCity":"梵蒂冈"},"Vienna":{"exemplarCity":"维也纳"},"Vilnius":{"exemplarCity":"维尔纽斯"},"Volgograd":{"exemplarCity":"伏尔加格勒"},"Warsaw":{"exemplarCity":"华沙"},"Zagreb":{"exemplarCity":"萨格勒布"},"Zurich":{"exemplarCity":"苏黎世"}},"Africa":{"Abidjan":{"exemplarCity":"阿比让"},"Accra":{"exemplarCity":"阿克拉"},"Addis_Ababa":{"exemplarCity":"亚的斯亚贝巴"},"Algiers":{"exemplarCity":"阿尔及尔"},"Asmera":{"exemplarCity":"阿斯马拉"},"Bamako":{"exemplarCity":"巴马科"},"Bangui":{"exemplarCity":"班吉"},"Banjul":{"exemplarCity":"班珠尔"},"Bissau":{"exemplarCity":"比绍"},"Blantyre":{"exemplarCity":"布兰太尔"},"Brazzaville":{"exemplarCity":"布拉柴维尔"},"Bujumbura":{"exemplarCity":"布琼布拉"},"Cairo":{"exemplarCity":"开罗"},"Casablanca":{"exemplarCity":"卡萨布兰卡"},"Ceuta":{"exemplarCity":"休达"},"Conakry":{"exemplarCity":"科纳克里"},"Dakar":{"exemplarCity":"达喀尔"},"Dar_es_Salaam":{"exemplarCity":"达累斯萨拉姆"},"Djibouti":{"exemplarCity":"吉布提"},"Douala":{"exemplarCity":"杜阿拉"},"El_Aaiun":{"exemplarCity":"阿尤恩"},"Freetown":{"exemplarCity":"弗里敦"},"Gaborone":{"exemplarCity":"哈博罗内"},"Harare":{"exemplarCity":"哈拉雷"},"Johannesburg":{"exemplarCity":"约翰内斯堡"},"Juba":{"exemplarCity":"朱巴"},"Kampala":{"exemplarCity":"坎帕拉"},"Khartoum":{"exemplarCity":"喀土穆"},"Kigali":{"exemplarCity":"基加利"},"Kinshasa":{"exemplarCity":"金沙萨"},"Lagos":{"exemplarCity":"拉各斯"},"Libreville":{"exemplarCity":"利伯维尔"},"Lome":{"exemplarCity":"洛美"},"Luanda":{"exemplarCity":"罗安达"},"Lubumbashi":{"exemplarCity":"卢本巴希"},"Lusaka":{"exemplarCity":"卢萨卡"},"Malabo":{"exemplarCity":"马拉博"},"Maputo":{"exemplarCity":"马普托"},"Maseru":{"exemplarCity":"马塞卢"},"Mbabane":{"exemplarCity":"姆巴巴纳"},"Mogadishu":{"exemplarCity":"摩加迪沙"},"Monrovia":{"exemplarCity":"蒙罗维亚"},"Nairobi":{"exemplarCity":"内罗毕"},"Ndjamena":{"exemplarCity":"恩贾梅纳"},"Niamey":{"exemplarCity":"尼亚美"},"Nouakchott":{"exemplarCity":"努瓦克肖特"},"Ouagadougou":{"exemplarCity":"瓦加杜古"},"Porto-Novo":{"exemplarCity":"波多诺伏"},"Sao_Tome":{"exemplarCity":"圣多美"},"Tripoli":{"exemplarCity":"的黎波里"},"Tunis":{"exemplarCity":"突尼斯"},"Windhoek":{"exemplarCity":"温得和克"}},"Asia":{"Aden":{"exemplarCity":"亚丁"},"Almaty":{"exemplarCity":"阿拉木图"},"Amman":{"exemplarCity":"安曼"},"Anadyr":{"exemplarCity":"阿纳德尔"},"Aqtau":{"exemplarCity":"阿克套"},"Aqtobe":{"exemplarCity":"阿克托别"},"Ashgabat":{"exemplarCity":"阿什哈巴德"},"Atyrau":{"exemplarCity":"阿特劳"},"Baghdad":{"exemplarCity":"巴格达"},"Bahrain":{"exemplarCity":"巴林"},"Baku":{"exemplarCity":"巴库"},"Bangkok":{"exemplarCity":"曼谷"},"Barnaul":{"exemplarCity":"巴尔瑙尔"},"Beirut":{"exemplarCity":"贝鲁特"},"Bishkek":{"exemplarCity":"比什凯克"},"Brunei":{"exemplarCity":"文莱"},"Calcutta":{"exemplarCity":"加尔各答"},"Chita":{"exemplarCity":"赤塔"},"Choibalsan":{"exemplarCity":"乔巴山"},"Colombo":{"exemplarCity":"科伦坡"},"Damascus":{"exemplarCity":"大马士革"},"Dhaka":{"exemplarCity":"达卡"},"Dili":{"exemplarCity":"帝力"},"Dubai":{"exemplarCity":"迪拜"},"Dushanbe":{"exemplarCity":"杜尚别"},"Famagusta":{"exemplarCity":"法马古斯塔"},"Gaza":{"exemplarCity":"加沙"},"Hebron":{"exemplarCity":"希伯伦"},"Hong_Kong":{"exemplarCity":"香港"},"Hovd":{"exemplarCity":"科布多"},"Irkutsk":{"exemplarCity":"伊尔库茨克"},"Jakarta":{"exemplarCity":"雅加达"},"Jayapura":{"exemplarCity":"查亚普拉"},"Jerusalem":{"exemplarCity":"耶路撒冷"},"Kabul":{"exemplarCity":"喀布尔"},"Kamchatka":{"exemplarCity":"堪察加"},"Karachi":{"exemplarCity":"卡拉奇"},"Katmandu":{"exemplarCity":"加德满都"},"Khandyga":{"exemplarCity":"汉德加"},"Krasnoyarsk":{"exemplarCity":"克拉斯诺亚尔斯克"},"Kuala_Lumpur":{"exemplarCity":"吉隆坡"},"Kuching":{"exemplarCity":"古晋"},"Kuwait":{"exemplarCity":"科威特"},"Macau":{"exemplarCity":"澳门"},"Magadan":{"exemplarCity":"马加丹"},"Makassar":{"exemplarCity":"望加锡"},"Manila":{"exemplarCity":"马尼拉"},"Muscat":{"exemplarCity":"马斯喀特"},"Nicosia":{"exemplarCity":"尼科西亚"},"Novokuznetsk":{"exemplarCity":"新库兹涅茨克"},"Novosibirsk":{"exemplarCity":"新西伯利亚"},"Omsk":{"exemplarCity":"鄂木斯克"},"Oral":{"exemplarCity":"乌拉尔"},"Phnom_Penh":{"exemplarCity":"金边"},"Pontianak":{"exemplarCity":"坤甸"},"Pyongyang":{"exemplarCity":"平壤"},"Qatar":{"exemplarCity":"卡塔尔"},"Qostanay":{"exemplarCity":"库斯塔奈"},"Qyzylorda":{"exemplarCity":"克孜洛尔达"},"Rangoon":{"exemplarCity":"仰光"},"Riyadh":{"exemplarCity":"利雅得"},"Saigon":{"exemplarCity":"胡志明市"},"Sakhalin":{"exemplarCity":"萨哈林"},"Samarkand":{"exemplarCity":"撒马尔罕"},"Seoul":{"exemplarCity":"首尔"},"Shanghai":{"exemplarCity":"上海"},"Singapore":{"exemplarCity":"新加坡"},"Srednekolymsk":{"exemplarCity":"中科雷姆斯克"},"Taipei":{"exemplarCity":"台北"},"Tashkent":{"exemplarCity":"塔什干"},"Tbilisi":{"exemplarCity":"第比利斯"},"Tehran":{"exemplarCity":"德黑兰"},"Thimphu":{"exemplarCity":"廷布"},"Tokyo":{"exemplarCity":"东京"},"Tomsk":{"exemplarCity":"托木斯克"},"Ulaanbaatar":{"exemplarCity":"乌兰巴托"},"Urumqi":{"exemplarCity":"乌鲁木齐"},"Ust-Nera":{"exemplarCity":"乌斯内拉"},"Vientiane":{"exemplarCity":"万象"},"Vladivostok":{"exemplarCity":"符拉迪沃斯托克"},"Yakutsk":{"exemplarCity":"雅库茨克"},"Yekaterinburg":{"exemplarCity":"叶卡捷琳堡"},"Yerevan":{"exemplarCity":"埃里温"}},"Indian":{"Antananarivo":{"exemplarCity":"安塔那那利佛"},"Chagos":{"exemplarCity":"查戈斯"},"Christmas":{"exemplarCity":"圣诞岛"},"Cocos":{"exemplarCity":"可可斯"},"Comoro":{"exemplarCity":"科摩罗"},"Kerguelen":{"exemplarCity":"凯尔盖朗"},"Mahe":{"exemplarCity":"马埃岛"},"Maldives":{"exemplarCity":"马尔代夫"},"Mauritius":{"exemplarCity":"毛里求斯"},"Mayotte":{"exemplarCity":"马约特"},"Reunion":{"exemplarCity":"留尼汪"}},"Australia":{"Adelaide":{"exemplarCity":"阿德莱德"},"Brisbane":{"exemplarCity":"布里斯班"},"Broken_Hill":{"exemplarCity":"布罗肯希尔"},"Darwin":{"exemplarCity":"达尔文"},"Eucla":{"exemplarCity":"尤克拉"},"Hobart":{"exemplarCity":"霍巴特"},"Lindeman":{"exemplarCity":"林德曼"},"Lord_Howe":{"exemplarCity":"豪勋爵岛"},"Melbourne":{"exemplarCity":"墨尔本"},"Perth":{"exemplarCity":"珀斯"},"Sydney":{"exemplarCity":"悉尼"}},"Pacific":{"Apia":{"exemplarCity":"阿皮亚"},"Auckland":{"exemplarCity":"奥克兰"},"Bougainville":{"exemplarCity":"布干维尔"},"Chatham":{"exemplarCity":"查塔姆"},"Easter":{"exemplarCity":"复活节岛"},"Efate":{"exemplarCity":"埃法特"},"Enderbury":{"exemplarCity":"恩德伯里"},"Fakaofo":{"exemplarCity":"法考福"},"Fiji":{"exemplarCity":"斐济"},"Funafuti":{"exemplarCity":"富纳富提"},"Galapagos":{"exemplarCity":"加拉帕戈斯"},"Gambier":{"exemplarCity":"甘比尔"},"Guadalcanal":{"exemplarCity":"瓜达尔卡纳尔"},"Guam":{"exemplarCity":"关岛"},"Honolulu":{"exemplarCity":"檀香山"},"Kanton":{"exemplarCity":"坎顿岛"},"Kiritimati":{"exemplarCity":"基里地马地岛"},"Kosrae":{"exemplarCity":"库赛埃"},"Kwajalein":{"exemplarCity":"夸贾林"},"Majuro":{"exemplarCity":"马朱罗"},"Marquesas":{"exemplarCity":"马克萨斯"},"Midway":{"exemplarCity":"中途岛"},"Nauru":{"exemplarCity":"瑙鲁"},"Niue":{"exemplarCity":"纽埃"},"Norfolk":{"exemplarCity":"诺福克"},"Noumea":{"exemplarCity":"努美阿"},"Pago_Pago":{"exemplarCity":"帕果帕果"},"Palau":{"exemplarCity":"帕劳"},"Pitcairn":{"exemplarCity":"皮特凯恩"},"Ponape":{"exemplarCity":"波纳佩岛"},"Port_Moresby":{"exemplarCity":"莫尔兹比港"},"Rarotonga":{"exemplarCity":"拉罗汤加"},"Saipan":{"exemplarCity":"塞班"},"Tahiti":{"exemplarCity":"塔希提"},"Tarawa":{"exemplarCity":"塔拉瓦"},"Tongatapu":{"exemplarCity":"东加塔布"},"Truk":{"exemplarCity":"特鲁克群岛"},"Wake":{"exemplarCity":"威克"},"Wallis":{"exemplarCity":"瓦利斯"}},"Arctic":{"Longyearbyen":{"exemplarCity":"朗伊尔城"}},"Antarctica":{"Casey":{"exemplarCity":"卡塞"},"Davis":{"exemplarCity":"戴维斯"},"DumontDUrville":{"exemplarCity":"迪蒙·迪维尔"},"Macquarie":{"exemplarCity":"麦格理"},"Mawson":{"exemplarCity":"莫森"},"McMurdo":{"exemplarCity":"麦克默多"},"Palmer":{"exemplarCity":"帕尔默"},"Rothera":{"exemplarCity":"罗瑟拉"},"Syowa":{"exemplarCity":"昭和"},"Troll":{"exemplarCity":"特罗尔"},"Vostok":{"exemplarCity":"沃斯托克"}},"Etc":{"UTC":{"long":{"standard":"协调世界时"},"short":{"standard":"UTC"}},"Unknown":{"exemplarCity":"未知城市"}}},"metazone":{"Acre":{"long":{"generic":"阿克里时间","standard":"阿克里标准时间","daylight":"阿克里夏令时间"}},"Afghanistan":{"long":{"standard":"阿富汗时间"}},"Africa_Central":{"long":{"standard":"中部非洲时间"}},"Africa_Eastern":{"long":{"standard":"东部非洲时间"}},"Africa_Southern":{"long":{"standard":"南非标准时间"}},"Africa_Western":{"long":{"generic":"西部非洲时间","standard":"西部非洲标准时间","daylight":"西部非洲夏令时间"}},"Alaska":{"long":{"generic":"阿拉斯加时间","standard":"阿拉斯加标准时间","daylight":"阿拉斯加夏令时间"}},"Almaty":{"long":{"generic":"阿拉木图时间","standard":"阿拉木图标准时间","daylight":"阿拉木图夏令时间"}},"Amazon":{"long":{"generic":"亚马逊时间","standard":"亚马逊标准时间","daylight":"亚马逊夏令时间"}},"America_Central":{"long":{"generic":"北美中部时间","standard":"北美中部标准时间","daylight":"北美中部夏令时间"}},"America_Eastern":{"long":{"generic":"北美东部时间","standard":"北美东部标准时间","daylight":"北美东部夏令时间"}},"America_Mountain":{"long":{"generic":"北美山区时间","standard":"北美山区标准时间","daylight":"北美山区夏令时间"}},"America_Pacific":{"long":{"generic":"北美太平洋时间","standard":"北美太平洋标准时间","daylight":"北美太平洋夏令时间"}},"Anadyr":{"long":{"generic":"阿纳德尔时间","standard":"阿纳德尔标准时间","daylight":"阿纳德尔夏令时间"}},"Apia":{"long":{"generic":"阿皮亚时间","standard":"阿皮亚标准时间","daylight":"阿皮亚夏令时间"}},"Aqtau":{"long":{"generic":"阿克套时间","standard":"阿克套标准时间","daylight":"阿克套夏令时间"}},"Aqtobe":{"long":{"generic":"阿克托别时间","standard":"阿克托别标准时间","daylight":"阿克托别夏令时间"}},"Arabian":{"long":{"generic":"阿拉伯时间","standard":"阿拉伯标准时间","daylight":"阿拉伯夏令时间"}},"Argentina":{"long":{"generic":"阿根廷时间","standard":"阿根廷标准时间","daylight":"阿根廷夏令时间"}},"Argentina_Western":{"long":{"generic":"阿根廷西部时间","standard":"阿根廷西部标准时间","daylight":"阿根廷西部夏令时间"}},"Armenia":{"long":{"generic":"亚美尼亚时间","standard":"亚美尼亚标准时间","daylight":"亚美尼亚夏令时间"}},"Atlantic":{"long":{"generic":"大西洋时间","standard":"大西洋标准时间","daylight":"大西洋夏令时间"}},"Australia_Central":{"long":{"generic":"澳大利亚中部时间","standard":"澳大利亚中部标准时间","daylight":"澳大利亚中部夏令时间"}},"Australia_CentralWestern":{"long":{"generic":"澳大利亚中西部时间","standard":"澳大利亚中西部标准时间","daylight":"澳大利亚中西部夏令时间"}},"Australia_Eastern":{"long":{"generic":"澳大利亚东部时间","standard":"澳大利亚东部标准时间","daylight":"澳大利亚东部夏令时间"}},"Australia_Western":{"long":{"generic":"澳大利亚西部时间","standard":"澳大利亚西部标准时间","daylight":"澳大利亚西部夏令时间"}},"Azerbaijan":{"long":{"generic":"阿塞拜疆时间","standard":"阿塞拜疆标准时间","daylight":"阿塞拜疆夏令时间"}},"Azores":{"long":{"generic":"亚速尔群岛时间","standard":"亚速尔群岛标准时间","daylight":"亚速尔群岛夏令时间"}},"Bangladesh":{"long":{"generic":"孟加拉时间","standard":"孟加拉标准时间","daylight":"孟加拉夏令时间"}},"Bhutan":{"long":{"standard":"不丹时间"}},"Bolivia":{"long":{"standard":"玻利维亚标准时间"}},"Brasilia":{"long":{"generic":"巴西利亚时间","standard":"巴西利亚标准时间","daylight":"巴西利亚夏令时间"}},"Brunei":{"long":{"standard":"文莱达鲁萨兰时间"}},"Cape_Verde":{"long":{"generic":"佛得角时间","standard":"佛得角标准时间","daylight":"佛得角夏令时间"}},"Casey":{"long":{"standard":"凯西时间"}},"Chamorro":{"long":{"standard":"查莫罗时间"}},"Chatham":{"long":{"generic":"查塔姆时间","standard":"查塔姆标准时间","daylight":"查塔姆夏令时间"}},"Chile":{"long":{"generic":"智利时间","standard":"智利标准时间","daylight":"智利夏令时间"}},"China":{"long":{"generic":"中国时间","standard":"中国标准时间","daylight":"中国夏令时间"}},"Choibalsan":{"long":{"generic":"乔巴山时间","standard":"乔巴山标准时间","daylight":"乔巴山夏令时间"}},"Christmas":{"long":{"standard":"圣诞岛时间"}},"Cocos":{"long":{"standard":"科科斯群岛时间"}},"Colombia":{"long":{"generic":"哥伦比亚时间","standard":"哥伦比亚标准时间","daylight":"哥伦比亚夏令时间"}},"Cook":{"long":{"generic":"库克群岛时间","standard":"库克群岛标准时间","daylight":"库克群岛仲夏时间"}},"Cuba":{"long":{"generic":"古巴时间","standard":"古巴标准时间","daylight":"古巴夏令时间"}},"Davis":{"long":{"standard":"戴维斯时间"}},"DumontDUrville":{"long":{"standard":"迪蒙·迪维尔时间"}},"East_Timor":{"long":{"standard":"东帝汶时间"}},"Easter":{"long":{"generic":"复活节岛时间","standard":"复活节岛标准时间","daylight":"复活节岛夏令时间"}},"Ecuador":{"long":{"standard":"厄瓜多尔标准时间"}},"Europe_Central":{"long":{"generic":"中欧时间","standard":"中欧标准时间","daylight":"中欧夏令时间"}},"Europe_Eastern":{"long":{"generic":"东欧时间","standard":"东欧标准时间","daylight":"东欧夏令时间"}},"Europe_Further_Eastern":{"long":{"standard":"欧洲极东时间"}},"Europe_Western":{"long":{"generic":"西欧时间","standard":"西欧标准时间","daylight":"西欧夏令时间"}},"Falkland":{"long":{"generic":"福克兰群岛时间","standard":"福克兰群岛标准时间","daylight":"福克兰群岛夏令时间"}},"Fiji":{"long":{"generic":"斐济时间","standard":"斐济标准时间","daylight":"斐济夏令时间"}},"French_Guiana":{"long":{"standard":"法属圭亚那标准时间"}},"French_Southern":{"long":{"standard":"法属南方和南极领地时间"}},"Galapagos":{"long":{"standard":"加拉帕戈斯时间"}},"Gambier":{"long":{"standard":"甘比尔时间"}},"Georgia":{"long":{"generic":"格鲁吉亚时间","standard":"格鲁吉亚标准时间","daylight":"格鲁吉亚夏令时间"}},"Gilbert_Islands":{"long":{"standard":"吉尔伯特群岛时间"}},"GMT":{"long":{"standard":"格林尼治标准时间"}},"Greenland_Eastern":{"long":{"generic":"格陵兰岛东部时间","standard":"格陵兰岛东部标准时间","daylight":"格陵兰岛东部夏令时间"}},"Greenland_Western":{"long":{"generic":"格陵兰岛西部时间","standard":"格陵兰岛西部标准时间","daylight":"格陵兰岛西部夏令时间"}},"Guam":{"long":{"standard":"关岛时间"}},"Gulf":{"long":{"standard":"海湾标准时间"}},"Guyana":{"long":{"standard":"圭亚那时间"}},"Hawaii_Aleutian":{"long":{"generic":"夏威夷-阿留申时间","standard":"夏威夷-阿留申标准时间","daylight":"夏威夷-阿留申夏令时间"}},"Hong_Kong":{"long":{"generic":"香港时间","standard":"香港标准时间","daylight":"香港夏令时间"}},"Hovd":{"long":{"generic":"科布多时间","standard":"科布多标准时间","daylight":"科布多夏令时间"}},"India":{"long":{"standard":"印度时间"}},"Indian_Ocean":{"long":{"standard":"印度洋时间"}},"Indochina":{"long":{"standard":"中南半岛时间"}},"Indonesia_Central":{"long":{"standard":"印度尼西亚中部时间"}},"Indonesia_Eastern":{"long":{"standard":"印度尼西亚东部时间"}},"Indonesia_Western":{"long":{"standard":"印度尼西亚西部时间"}},"Iran":{"long":{"generic":"伊朗时间","standard":"伊朗标准时间","daylight":"伊朗夏令时间"}},"Irkutsk":{"long":{"generic":"伊尔库茨克时间","standard":"伊尔库茨克标准时间","daylight":"伊尔库茨克夏令时间"}},"Israel":{"long":{"generic":"以色列时间","standard":"以色列标准时间","daylight":"以色列夏令时间"}},"Japan":{"long":{"generic":"日本时间","standard":"日本标准时间","daylight":"日本夏令时间"}},"Kamchatka":{"long":{"generic":"彼得罗巴甫洛夫斯克-堪察加时间","standard":"彼得罗巴甫洛夫斯克-堪察加标准时间","daylight":"彼得罗巴甫洛夫斯克-堪察加夏令时间"}},"Kazakhstan_Eastern":{"long":{"standard":"哈萨克斯坦东部时间"}},"Kazakhstan_Western":{"long":{"standard":"哈萨克斯坦西部时间"}},"Korea":{"long":{"generic":"韩国时间","standard":"韩国标准时间","daylight":"韩国夏令时间"}},"Kosrae":{"long":{"standard":"科斯雷时间"}},"Krasnoyarsk":{"long":{"generic":"克拉斯诺亚尔斯克时间","standard":"克拉斯诺亚尔斯克标准时间","daylight":"克拉斯诺亚尔斯克夏令时间"}},"Kyrgystan":{"long":{"standard":"吉尔吉斯斯坦时间"}},"Lanka":{"long":{"standard":"兰卡时间"}},"Line_Islands":{"long":{"standard":"莱恩群岛时间"}},"Lord_Howe":{"long":{"generic":"豪勋爵岛时间","standard":"豪勋爵岛标准时间","daylight":"豪勋爵岛夏令时间"}},"Macau":{"long":{"generic":"澳门时间","standard":"澳门标准时间","daylight":"澳门夏令时间"}},"Magadan":{"long":{"generic":"马加丹时间","standard":"马加丹标准时间","daylight":"马加丹夏令时间"}},"Malaysia":{"long":{"standard":"马来西亚时间"}},"Maldives":{"long":{"standard":"马尔代夫时间"}},"Marquesas":{"long":{"standard":"马克萨斯群岛时间"}},"Marshall_Islands":{"long":{"standard":"马绍尔群岛时间"}},"Mauritius":{"long":{"generic":"毛里求斯时间","standard":"毛里求斯标准时间","daylight":"毛里求斯夏令时间"}},"Mawson":{"long":{"standard":"莫森时间"}},"Mexico_Pacific":{"long":{"generic":"墨西哥太平洋时间","standard":"墨西哥太平洋标准时间","daylight":"墨西哥太平洋夏令时间"}},"Mongolia":{"long":{"generic":"乌兰巴托时间","standard":"乌兰巴托标准时间","daylight":"乌兰巴托夏令时间"}},"Moscow":{"long":{"generic":"莫斯科时间","standard":"莫斯科标准时间","daylight":"莫斯科夏令时间"}},"Myanmar":{"long":{"standard":"缅甸时间"}},"Nauru":{"long":{"standard":"瑙鲁时间"}},"Nepal":{"long":{"standard":"尼泊尔时间"}},"New_Caledonia":{"long":{"generic":"新喀里多尼亚时间","standard":"新喀里多尼亚标准时间","daylight":"新喀里多尼亚夏令时间"}},"New_Zealand":{"long":{"generic":"新西兰时间","standard":"新西兰标准时间","daylight":"新西兰夏令时间"}},"Newfoundland":{"long":{"generic":"纽芬兰时间","standard":"纽芬兰标准时间","daylight":"纽芬兰夏令时间"}},"Niue":{"long":{"standard":"纽埃时间"}},"Norfolk":{"long":{"generic":"诺福克岛时间","standard":"诺福克岛标准时间","daylight":"诺福克岛夏令时间"}},"Noronha":{"long":{"generic":"费尔南多-迪诺罗尼亚岛时间","standard":"费尔南多-迪诺罗尼亚岛标准时间","daylight":"费尔南多-迪诺罗尼亚岛夏令时间"}},"North_Mariana":{"long":{"standard":"北马里亚纳群岛时间"}},"Novosibirsk":{"long":{"generic":"新西伯利亚时间","standard":"新西伯利亚标准时间","daylight":"新西伯利亚夏令时间"}},"Omsk":{"long":{"generic":"鄂木斯克时间","standard":"鄂木斯克标准时间","daylight":"鄂木斯克夏令时间"}},"Pakistan":{"long":{"generic":"巴基斯坦时间","standard":"巴基斯坦标准时间","daylight":"巴基斯坦夏令时间"}},"Palau":{"long":{"standard":"帕劳时间"}},"Papua_New_Guinea":{"long":{"standard":"巴布亚新几内亚时间"}},"Paraguay":{"long":{"generic":"巴拉圭时间","standard":"巴拉圭标准时间","daylight":"巴拉圭夏令时间"}},"Peru":{"long":{"generic":"秘鲁时间","standard":"秘鲁标准时间","daylight":"秘鲁夏令时间"}},"Philippines":{"long":{"generic":"菲律宾时间","standard":"菲律宾标准时间","daylight":"菲律宾夏令时间"}},"Phoenix_Islands":{"long":{"standard":"菲尼克斯群岛时间"}},"Pierre_Miquelon":{"long":{"generic":"圣皮埃尔和密克隆群岛时间","standard":"圣皮埃尔和密克隆群岛标准时间","daylight":"圣皮埃尔和密克隆群岛夏令时间"}},"Pitcairn":{"long":{"standard":"皮特凯恩时间"}},"Ponape":{"long":{"standard":"波纳佩时间"}},"Pyongyang":{"long":{"standard":"平壤时间"}},"Qyzylorda":{"long":{"generic":"克孜洛尔达时间","standard":"克孜洛尔达标准时间","daylight":"克孜洛尔达夏令时间"}},"Reunion":{"long":{"standard":"留尼汪时间"}},"Rothera":{"long":{"standard":"罗瑟拉时间"}},"Sakhalin":{"long":{"generic":"库页岛时间","standard":"库页岛标准时间","daylight":"库页岛夏令时间"}},"Samara":{"long":{"generic":"萨马拉时间","standard":"萨马拉标准时间","daylight":"萨马拉夏令时间"}},"Samoa":{"long":{"generic":"萨摩亚时间","standard":"萨摩亚标准时间","daylight":"萨摩亚夏令时间"}},"Seychelles":{"long":{"standard":"塞舌尔时间"}},"Singapore":{"long":{"standard":"新加坡标准时间"}},"Solomon":{"long":{"standard":"所罗门群岛时间"}},"South_Georgia":{"long":{"standard":"南乔治亚岛时间"}},"Suriname":{"long":{"standard":"苏里南时间"}},"Syowa":{"long":{"standard":"昭和时间"}},"Tahiti":{"long":{"standard":"塔希提岛时间"}},"Taipei":{"long":{"generic":"台北时间","standard":"台北标准时间","daylight":"台北夏令时间"}},"Tajikistan":{"long":{"standard":"塔吉克斯坦时间"}},"Tokelau":{"long":{"standard":"托克劳时间"}},"Tonga":{"long":{"generic":"汤加时间","standard":"汤加标准时间","daylight":"汤加夏令时间"}},"Truk":{"long":{"standard":"楚克时间"}},"Turkmenistan":{"long":{"generic":"土库曼斯坦时间","standard":"土库曼斯坦标准时间","daylight":"土库曼斯坦夏令时间"}},"Tuvalu":{"long":{"standard":"图瓦卢时间"}},"Uruguay":{"long":{"generic":"乌拉圭时间","standard":"乌拉圭标准时间","daylight":"乌拉圭夏令时间"}},"Uzbekistan":{"long":{"generic":"乌兹别克斯坦时间","standard":"乌兹别克斯坦标准时间","daylight":"乌兹别克斯坦夏令时间"}},"Vanuatu":{"long":{"generic":"瓦努阿图时间","standard":"瓦努阿图标准时间","daylight":"瓦努阿图夏令时间"}},"Venezuela":{"long":{"standard":"委内瑞拉时间"}},"Vladivostok":{"long":{"generic":"海参崴时间","standard":"海参崴标准时间","daylight":"海参崴夏令时间"}},"Volgograd":{"long":{"generic":"伏尔加格勒时间","standard":"伏尔加格勒标准时间","daylight":"伏尔加格勒夏令时间"}},"Vostok":{"long":{"standard":"沃斯托克时间"}},"Wake":{"long":{"standard":"威克岛时间"}},"Wallis":{"long":{"standard":"瓦利斯和富图纳时间"}},"Yakutsk":{"long":{"generic":"雅库茨克时间","standard":"雅库茨克标准时间","daylight":"雅库茨克夏令时间"}},"Yekaterinburg":{"long":{"generic":"叶卡捷琳堡时间","standard":"叶卡捷琳堡标准时间","daylight":"叶卡捷琳堡夏令时间"}},"Yukon":{"long":{"standard":"育空时间"}}}}}}}'),bu={main:Nl},Cu=Object.freeze(Object.defineProperty({__proto__:null,default:bu,main:Nl},Symbol.toStringTag,{value:"Module"})),wl={numberingSystems:{adlm:{_digits:"𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙",_type:"numeric"},ahom:{_digits:"𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹",_type:"numeric"},arab:{_digits:"٠١٢٣٤٥٦٧٨٩",_type:"numeric"},arabext:{_digits:"۰۱۲۳۴۵۶۷۸۹",_type:"numeric"},armn:{_rules:"armenian-upper",_type:"algorithmic"},armnlow:{_rules:"armenian-lower",_type:"algorithmic"},bali:{_digits:"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙",_type:"numeric"},beng:{_digits:"০১২৩৪৫৬৭৮৯",_type:"numeric"},bhks:{_digits:"𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙",_type:"numeric"},brah:{_digits:"𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯",_type:"numeric"},cakm:{_digits:"𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿",_type:"numeric"},cham:{_digits:"꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙",_type:"numeric"},cyrl:{_rules:"cyrillic-lower",_type:"algorithmic"},deva:{_digits:"०१२३४५६७८९",_type:"numeric"},diak:{_digits:"𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙",_type:"numeric"},ethi:{_rules:"ethiopic",_type:"algorithmic"},fullwide:{_digits:"０１２３４５６７８９",_type:"numeric"},geor:{_rules:"georgian",_type:"algorithmic"},gong:{_digits:"𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩",_type:"numeric"},gonm:{_digits:"𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙",_type:"numeric"},grek:{_rules:"greek-upper",_type:"algorithmic"},greklow:{_rules:"greek-lower",_type:"algorithmic"},gujr:{_digits:"૦૧૨૩૪૫૬૭૮૯",_type:"numeric"},guru:{_digits:"੦੧੨੩੪੫੬੭੮੯",_type:"numeric"},hanidays:{_rules:"zh/SpelloutRules/spellout-numbering-days",_type:"algorithmic"},hanidec:{_digits:"〇一二三四五六七八九",_type:"numeric"},hans:{_rules:"zh/SpelloutRules/spellout-cardinal",_type:"algorithmic"},hansfin:{_rules:"zh/SpelloutRules/spellout-cardinal-financial",_type:"algorithmic"},hant:{_rules:"zh_Hant/SpelloutRules/spellout-cardinal",_type:"algorithmic"},hantfin:{_rules:"zh_Hant/SpelloutRules/spellout-cardinal-financial",_type:"algorithmic"},hebr:{_rules:"hebrew",_type:"algorithmic"},hmng:{_digits:"𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙",_type:"numeric"},hmnp:{_digits:"𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉",_type:"numeric"},java:{_digits:"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙",_type:"numeric"},jpan:{_rules:"ja/SpelloutRules/spellout-cardinal",_type:"algorithmic"},jpanfin:{_rules:"ja/SpelloutRules/spellout-cardinal-financial",_type:"algorithmic"},jpanyear:{_rules:"ja/SpelloutRules/spellout-numbering-year-latn",_type:"algorithmic"},kali:{_digits:"꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉",_type:"numeric"},kawi:{_digits:"𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙",_type:"numeric"},khmr:{_digits:"០១២៣៤៥៦៧៨៩",_type:"numeric"},knda:{_digits:"೦೧೨೩೪೫೬೭೮೯",_type:"numeric"},lana:{_digits:"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉",_type:"numeric"},lanatham:{_digits:"᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙",_type:"numeric"},laoo:{_digits:"໐໑໒໓໔໕໖໗໘໙",_type:"numeric"},latn:{_digits:"0123456789",_type:"numeric"},lepc:{_digits:"᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉",_type:"numeric"},limb:{_digits:"᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏",_type:"numeric"},mathbold:{_digits:"𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",_type:"numeric"},mathdbl:{_digits:"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",_type:"numeric"},mathmono:{_digits:"𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿",_type:"numeric"},mathsanb:{_digits:"𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",_type:"numeric"},mathsans:{_digits:"𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫",_type:"numeric"},mlym:{_digits:"൦൧൨൩൪൫൬൭൮൯",_type:"numeric"},modi:{_digits:"𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙",_type:"numeric"},mong:{_digits:"᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙",_type:"numeric"},mroo:{_digits:"𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩",_type:"numeric"},mtei:{_digits:"꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹",_type:"numeric"},mymr:{_digits:"၀၁၂၃၄၅၆၇၈၉",_type:"numeric"},mymrshan:{_digits:"႐႑႒႓႔႕႖႗႘႙",_type:"numeric"},mymrtlng:{_digits:"꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹",_type:"numeric"},nagm:{_digits:"𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹",_type:"numeric"},newa:{_digits:"𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙",_type:"numeric"},nkoo:{_digits:"߀߁߂߃߄߅߆߇߈߉",_type:"numeric"},olck:{_digits:"᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙",_type:"numeric"},orya:{_digits:"୦୧୨୩୪୫୬୭୮୯",_type:"numeric"},osma:{_digits:"𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩",_type:"numeric"},rohg:{_digits:"𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹",_type:"numeric"},roman:{_rules:"roman-upper",_type:"algorithmic"},romanlow:{_rules:"roman-lower",_type:"algorithmic"},saur:{_digits:"꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙",_type:"numeric"},segment:{_digits:"🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹",_type:"numeric"},shrd:{_digits:"𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙",_type:"numeric"},sind:{_digits:"𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹",_type:"numeric"},sinh:{_digits:"෦෧෨෩෪෫෬෭෮෯",_type:"numeric"},sora:{_digits:"𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹",_type:"numeric"},sund:{_digits:"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹",_type:"numeric"},takr:{_digits:"𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉",_type:"numeric"},talu:{_digits:"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙",_type:"numeric"},taml:{_rules:"tamil",_type:"algorithmic"},tamldec:{_digits:"௦௧௨௩௪௫௬௭௮௯",_type:"numeric"},telu:{_digits:"౦౧౨౩౪౫౬౭౮౯",_type:"numeric"},thai:{_digits:"๐๑๒๓๔๕๖๗๘๙",_type:"numeric"},tibt:{_digits:"༠༡༢༣༤༥༦༧༨༩",_type:"numeric"},tirh:{_digits:"𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙",_type:"numeric"},tnsa:{_digits:"𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉",_type:"numeric"},vaii:{_digits:"꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩",_type:"numeric"},wara:{_digits:"𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩",_type:"numeric"},wcho:{_digits:"𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹",_type:"numeric"}}},Su={supplemental:wl},$a=Object.freeze(Object.defineProperty({__proto__:null,default:Su,supplemental:wl},Symbol.toStringTag,{value:"Module"})),xl=JSON.parse('{"currencyData":{"fractions":{"ADP":{"_rounding":"0","_digits":"0"},"AFN":{"_rounding":"0","_digits":"0"},"ALL":{"_rounding":"0","_digits":"0"},"AMD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"BHD":{"_rounding":"0","_digits":"3"},"BIF":{"_rounding":"0","_digits":"0"},"BYN":{"_rounding":"0","_digits":"2"},"BYR":{"_rounding":"0","_digits":"0"},"CAD":{"_rounding":"0","_digits":"2","_cashRounding":"5"},"CHF":{"_rounding":"0","_digits":"2","_cashRounding":"5"},"CLF":{"_rounding":"0","_digits":"4"},"CLP":{"_rounding":"0","_digits":"0"},"COP":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"CRC":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"CZK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"DEFAULT":{"_rounding":"0","_digits":"2"},"DJF":{"_rounding":"0","_digits":"0"},"DKK":{"_rounding":"0","_digits":"2","_cashRounding":"50"},"ESP":{"_rounding":"0","_digits":"0"},"GNF":{"_rounding":"0","_digits":"0"},"GYD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"HUF":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"IDR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"IQD":{"_rounding":"0","_digits":"0"},"IRR":{"_rounding":"0","_digits":"0"},"ISK":{"_rounding":"0","_digits":"0"},"ITL":{"_rounding":"0","_digits":"0"},"JOD":{"_rounding":"0","_digits":"3"},"JPY":{"_rounding":"0","_digits":"0"},"KMF":{"_rounding":"0","_digits":"0"},"KPW":{"_rounding":"0","_digits":"0"},"KRW":{"_rounding":"0","_digits":"0"},"KWD":{"_rounding":"0","_digits":"3"},"LAK":{"_rounding":"0","_digits":"0"},"LBP":{"_rounding":"0","_digits":"0"},"LUF":{"_rounding":"0","_digits":"0"},"LYD":{"_rounding":"0","_digits":"3"},"MGA":{"_rounding":"0","_digits":"0"},"MGF":{"_rounding":"0","_digits":"0"},"MMK":{"_rounding":"0","_digits":"0"},"MNT":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"MRO":{"_rounding":"0","_digits":"0"},"MUR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"NOK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"OMR":{"_rounding":"0","_digits":"3"},"PKR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"PYG":{"_rounding":"0","_digits":"0"},"RSD":{"_rounding":"0","_digits":"0"},"RWF":{"_rounding":"0","_digits":"0"},"SEK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"SLE":{"_rounding":"0","_digits":"2"},"SLL":{"_rounding":"0","_digits":"0"},"SOS":{"_rounding":"0","_digits":"0"},"STD":{"_rounding":"0","_digits":"0"},"SYP":{"_rounding":"0","_digits":"0"},"TMM":{"_rounding":"0","_digits":"0"},"TND":{"_rounding":"0","_digits":"3"},"TRL":{"_rounding":"0","_digits":"0"},"TWD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"TZS":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"UGX":{"_rounding":"0","_digits":"0"},"UYI":{"_rounding":"0","_digits":"0"},"UYW":{"_rounding":"0","_digits":"4"},"UZS":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"VEF":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"VND":{"_rounding":"0","_digits":"0"},"VUV":{"_rounding":"0","_digits":"0"},"XAF":{"_rounding":"0","_digits":"0"},"XOF":{"_rounding":"0","_digits":"0"},"XPF":{"_rounding":"0","_digits":"0"},"YER":{"_rounding":"0","_digits":"0"},"ZMK":{"_rounding":"0","_digits":"0"},"ZWD":{"_rounding":"0","_digits":"0"}},"region":{"AC":[{"SHP":{"_from":"1976-01-01"}}],"AD":[{"ADP":{"_from":"1936-01-01","_to":"2001-12-31"}},{"ESP":{"_from":"1873-01-01","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"AE":[{"AED":{"_from":"1973-05-19"}}],"AF":[{"AFA":{"_from":"1927-03-14","_to":"2002-12-31"}},{"AFN":{"_from":"2002-10-07"}}],"AG":[{"XCD":{"_from":"1965-10-06"}}],"AI":[{"XCD":{"_from":"1965-10-06"}}],"AL":[{"ALK":{"_from":"1946-11-01","_to":"1965-08-16"}},{"ALL":{"_from":"1965-08-16"}}],"AM":[{"AMD":{"_from":"1993-11-22"}},{"RUR":{"_from":"1991-12-25","_to":"1993-11-22"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"AO":[{"AOA":{"_from":"1999-12-13"}},{"AOK":{"_from":"1977-01-08","_to":"1991-03-01"}},{"AON":{"_from":"1990-09-25","_to":"2000-02-01"}},{"AOR":{"_from":"1995-07-01","_to":"2000-02-01"}}],"AQ":[{"XXX":{"_tender":"false"}}],"AR":[{"ARA":{"_from":"1985-06-14","_to":"1992-01-01"}},{"ARL":{"_from":"1970-01-01","_to":"1983-06-01"}},{"ARM":{"_from":"1881-11-05","_to":"1970-01-01"}},{"ARP":{"_from":"1983-06-01","_to":"1985-06-14"}},{"ARS":{"_from":"1992-01-01"}}],"AS":[{"USD":{"_from":"1904-07-16"}}],"AT":[{"ATS":{"_from":"1947-12-04","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"AU":[{"AUD":{"_from":"1966-02-14"}}],"AW":[{"ANG":{"_from":"1940-05-10","_to":"1986-01-01"}},{"AWG":{"_from":"1986-01-01"}}],"AX":[{"EUR":{"_from":"1999-01-01"}}],"AZ":[{"AZM":{"_from":"1993-11-22","_to":"2006-12-31"}},{"AZN":{"_from":"2006-01-01"}},{"RUR":{"_from":"1991-12-25","_to":"1994-01-01"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"BA":[{"BAD":{"_from":"1992-07-01","_to":"1994-08-15"}},{"BAM":{"_from":"1995-01-01"}},{"BAN":{"_from":"1994-08-15","_to":"1997-07-01"}},{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUN":{"_from":"1990-01-01","_to":"1992-07-01"}},{"YUR":{"_from":"1992-07-01","_to":"1993-10-01"}}],"BB":[{"BBD":{"_from":"1973-12-03"}},{"XCD":{"_from":"1965-10-06","_to":"1973-12-03"}}],"BD":[{"BDT":{"_from":"1972-01-01"}},{"INR":{"_from":"1835-08-17","_to":"1948-04-01"}},{"PKR":{"_from":"1948-04-01","_to":"1972-01-01"}}],"BE":[{"BEC":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"BEF":{"_from":"1831-02-07","_to":"2002-02-28"}},{"BEL":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"EUR":{"_from":"1999-01-01"}},{"NLG":{"_from":"1816-12-15","_to":"1831-02-07"}}],"BF":[{"XOF":{"_from":"1984-08-04"}}],"BG":[{"BGL":{"_from":"1962-01-01","_to":"1999-07-05"}},{"BGM":{"_from":"1952-05-12","_to":"1962-01-01"}},{"BGN":{"_from":"1999-07-05"}},{"BGO":{"_from":"1879-07-08","_to":"1952-05-12"}}],"BH":[{"BHD":{"_from":"1965-10-16"}}],"BI":[{"BIF":{"_from":"1964-05-19"}}],"BJ":[{"XOF":{"_from":"1975-11-30"}}],"BL":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"BM":[{"BMD":{"_from":"1970-02-06"}}],"BN":[{"BND":{"_from":"1967-06-12"}},{"MYR":{"_from":"1963-09-16","_to":"1967-06-12"}}],"BO":[{"BOB":{"_from":"1987-01-01"}},{"BOL":{"_from":"1863-06-23","_to":"1963-01-01"}},{"BOP":{"_from":"1963-01-01","_to":"1986-12-31"}},{"BOV":{"_tender":"false"}}],"BQ":[{"ANG":{"_from":"2010-10-10","_to":"2011-01-01"}},{"USD":{"_from":"2011-01-01"}}],"BR":[{"BRB":{"_from":"1967-02-13","_to":"1986-02-28"}},{"BRC":{"_from":"1986-02-28","_to":"1989-01-15"}},{"BRE":{"_from":"1990-03-16","_to":"1993-08-01"}},{"BRL":{"_from":"1994-07-01"}},{"BRN":{"_from":"1989-01-15","_to":"1990-03-16"}},{"BRR":{"_from":"1993-08-01","_to":"1994-07-01"}},{"BRZ":{"_from":"1942-11-01","_to":"1967-02-13"}}],"BS":[{"BSD":{"_from":"1966-05-25"}}],"BT":[{"BTN":{"_from":"1974-04-16"}},{"INR":{"_from":"1907-01-01"}}],"BU":[{"BUK":{"_from":"1952-07-01","_to":"1989-06-18"}}],"BV":[{"NOK":{"_from":"1905-06-07"}}],"BW":[{"BWP":{"_from":"1976-08-23"}},{"ZAR":{"_from":"1961-02-14","_to":"1976-08-23"}}],"BY":[{"BYB":{"_from":"1994-08-01","_to":"2000-12-31"}},{"BYN":{"_from":"2016-07-01"}},{"BYR":{"_from":"2000-01-01","_to":"2017-01-01"}},{"RUR":{"_from":"1991-12-25","_to":"1994-11-08"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"BZ":[{"BZD":{"_from":"1974-01-01"}}],"CA":[{"CAD":{"_from":"1858-01-01"}}],"CC":[{"AUD":{"_from":"1966-02-14"}}],"CD":[{"CDF":{"_from":"1998-07-01"}},{"ZRN":{"_from":"1993-11-01","_to":"1998-07-01"}},{"ZRZ":{"_from":"1971-10-27","_to":"1993-11-01"}}],"CF":[{"XAF":{"_from":"1993-01-01"}}],"CG":[{"XAF":{"_from":"1993-01-01"}}],"CH":[{"CHE":{"_tender":"false"}},{"CHF":{"_from":"1799-03-17"}},{"CHW":{"_tender":"false"}}],"CI":[{"XOF":{"_from":"1958-12-04"}}],"CK":[{"NZD":{"_from":"1967-07-10"}}],"CL":[{"CLE":{"_from":"1960-01-01","_to":"1975-09-29"}},{"CLF":{"_tender":"false"}},{"CLP":{"_from":"1975-09-29"}}],"CM":[{"XAF":{"_from":"1973-04-01"}}],"CN":[{"CNH":{"_tender":"false","_from":"2010-07-19"}},{"CNX":{"_tender":"false","_from":"1979-01-01","_to":"1998-12-31"}},{"CNY":{"_from":"1953-03-01"}}],"CO":[{"COP":{"_from":"1905-01-01"}},{"COU":{"_tender":"false"}}],"CP":[{"XXX":{"_tender":"false"}}],"CR":[{"CRC":{"_from":"1896-10-26"}}],"CS":[{"CSD":{"_from":"2002-05-15","_to":"2006-06-03"}},{"EUR":{"_from":"2003-02-04","_to":"2006-06-03"}},{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}}],"CU":[{"CUC":{"_from":"1994-01-01","_to":"2021-01-01"}},{"CUP":{"_from":"1859-01-01"}},{"USD":{"_from":"1899-01-01","_to":"1959-01-01"}}],"CV":[{"CVE":{"_from":"1914-01-01"}},{"PTE":{"_from":"1911-05-22","_to":"1975-07-05"}}],"CW":[{"ANG":{"_from":"2010-10-10","_to":"2025-06-30","_to-tz":"America/Curacao"}},{"XCG":{"_tz":"America/Curacao","_from":"2025-03-31"}}],"CX":[{"AUD":{"_from":"1966-02-14"}}],"CY":[{"CYP":{"_from":"1914-09-10","_to":"2008-01-31"}},{"EUR":{"_from":"2008-01-01"}}],"CZ":[{"CSK":{"_from":"1953-06-01","_to":"1993-03-01"}},{"CZK":{"_from":"1993-01-01"}}],"DD":[{"DDM":{"_from":"1948-07-20","_to":"1990-10-02"}}],"DE":[{"DEM":{"_from":"1948-06-20","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"DG":[{"USD":{"_from":"1965-11-08"}}],"DJ":[{"DJF":{"_from":"1977-06-27"}}],"DK":[{"DKK":{"_from":"1873-05-27"}}],"DM":[{"XCD":{"_from":"1965-10-06"}}],"DO":[{"DOP":{"_from":"1947-10-01"}},{"USD":{"_from":"1905-06-21","_to":"1947-10-01"}}],"DZ":[{"DZD":{"_from":"1964-04-01"}}],"EA":[{"EUR":{"_from":"1999-01-01"}}],"EC":[{"ECS":{"_from":"1884-04-01","_to":"2000-10-02"}},{"ECV":{"_tender":"false","_from":"1993-05-23","_to":"2000-01-09"}},{"USD":{"_from":"2000-10-02"}}],"EE":[{"EEK":{"_from":"1992-06-21","_to":"2010-12-31"}},{"EUR":{"_from":"2011-01-01"}},{"SUR":{"_from":"1961-01-01","_to":"1992-06-20"}}],"EG":[{"EGP":{"_from":"1885-11-14"}}],"EH":[{"MAD":{"_from":"1976-02-26"}}],"ER":[{"ERN":{"_from":"1997-11-08"}},{"ETB":{"_from":"1993-05-24","_to":"1997-11-08"}}],"ES":[{"ESA":{"_tender":"false","_from":"1978-01-01","_to":"1981-12-31"}},{"ESB":{"_tender":"false","_from":"1975-01-01","_to":"1994-12-31"}},{"ESP":{"_from":"1868-10-19","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"ET":[{"ETB":{"_from":"1976-09-15"}}],"EU":[{"EUR":{"_from":"1999-01-01"}},{"XEU":{"_tender":"false","_from":"1979-01-01","_to":"1998-12-31"}}],"FI":[{"EUR":{"_from":"1999-01-01"}},{"FIM":{"_from":"1963-01-01","_to":"2002-02-28"}}],"FJ":[{"FJD":{"_from":"1969-01-13"}}],"FK":[{"FKP":{"_from":"1901-01-01"}}],"FM":[{"JPY":{"_from":"1914-10-03","_to":"1944-01-01"}},{"USD":{"_from":"1944-01-01"}}],"FO":[{"DKK":{"_from":"1948-01-01"}}],"FR":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"GA":[{"XAF":{"_from":"1993-01-01"}}],"GB":[{"GBP":{"_from":"1694-07-27"}}],"GD":[{"XCD":{"_from":"1967-02-27"}}],"GE":[{"GEK":{"_from":"1993-04-05","_to":"1995-09-25"}},{"GEL":{"_from":"1995-09-23"}},{"RUR":{"_from":"1991-12-25","_to":"1993-06-11"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"GF":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"GG":[{"GBP":{"_from":"1830-01-01"}}],"GH":[{"GHC":{"_from":"1979-03-09","_to":"2007-12-31"}},{"GHS":{"_from":"2007-07-03"}}],"GI":[{"GIP":{"_from":"1713-01-01"}}],"GL":[{"DKK":{"_from":"1873-05-27"}}],"GM":[{"GMD":{"_from":"1971-07-01"}}],"GN":[{"GNF":{"_from":"1986-01-06"}},{"GNS":{"_from":"1972-10-02","_to":"1986-01-06"}}],"GP":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"GQ":[{"GQE":{"_from":"1975-07-07","_to":"1986-06-01"}},{"XAF":{"_from":"1993-01-01"}}],"GR":[{"EUR":{"_from":"2001-01-01"}},{"GRD":{"_from":"1954-05-01","_to":"2002-02-28"}}],"GS":[{"GBP":{"_from":"1908-01-01"}}],"GT":[{"GTQ":{"_from":"1925-05-27"}}],"GU":[{"USD":{"_from":"1944-08-21"}}],"GW":[{"GWE":{"_from":"1914-01-01","_to":"1976-02-28"}},{"GWP":{"_from":"1976-02-28","_to":"1997-03-31"}},{"XOF":{"_from":"1997-03-31"}}],"GY":[{"GYD":{"_from":"1966-05-26"}}],"HK":[{"HKD":{"_from":"1895-02-02"}}],"HM":[{"AUD":{"_from":"1967-02-16"}}],"HN":[{"HNL":{"_from":"1926-04-03"}}],"HR":[{"EUR":{"_tz":"Europe/Zagreb","_from":"2023-01-01"}},{"HRD":{"_from":"1991-12-23","_to":"1995-01-01"}},{"HRK":{"_from":"1994-05-30","_to":"2023-01-14","_to-tz":"Europe/Zagreb"}},{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUN":{"_from":"1990-01-01","_to":"1991-12-23"}}],"HT":[{"HTG":{"_from":"1872-08-26"}},{"USD":{"_from":"1915-01-01"}}],"HU":[{"HUF":{"_from":"1946-07-23"}}],"IC":[{"EUR":{"_from":"1999-01-01"}}],"ID":[{"IDR":{"_from":"1965-12-13"}}],"IE":[{"EUR":{"_from":"1999-01-01"}},{"GBP":{"_from":"1800-01-01","_to":"1922-01-01"}},{"IEP":{"_from":"1922-01-01","_to":"2002-02-09"}}],"IL":[{"ILP":{"_from":"1948-08-16","_to":"1980-02-22"}},{"ILR":{"_from":"1980-02-22","_to":"1985-09-04"}},{"ILS":{"_from":"1985-09-04"}}],"IM":[{"GBP":{"_from":"1840-01-03"}}],"IN":[{"INR":{"_from":"1835-08-17"}}],"IO":[{"USD":{"_from":"1965-11-08"}}],"IQ":[{"EGP":{"_from":"1920-11-11","_to":"1931-04-19"}},{"INR":{"_from":"1920-11-11","_to":"1931-04-19"}},{"IQD":{"_from":"1931-04-19"}}],"IR":[{"IRR":{"_from":"1932-05-13"}}],"IS":[{"DKK":{"_from":"1873-05-27","_to":"1918-12-01"}},{"ISJ":{"_from":"1918-12-01","_to":"1981-01-01"}},{"ISK":{"_from":"1981-01-01"}}],"IT":[{"EUR":{"_from":"1999-01-01"}},{"ITL":{"_from":"1862-08-24","_to":"2002-02-28"}}],"JE":[{"GBP":{"_from":"1837-01-01"}}],"JM":[{"JMD":{"_from":"1969-09-08"}}],"JO":[{"JOD":{"_from":"1950-07-01"}}],"JP":[{"JPY":{"_from":"1871-06-01"}}],"KE":[{"KES":{"_from":"1966-09-14"}}],"KG":[{"KGS":{"_from":"1993-05-10"}},{"RUR":{"_from":"1991-12-25","_to":"1993-05-10"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"KH":[{"KHR":{"_from":"1980-03-20"}}],"KI":[{"AUD":{"_from":"1966-02-14"}}],"KM":[{"KMF":{"_from":"1975-07-06"}}],"KN":[{"XCD":{"_from":"1965-10-06"}}],"KP":[{"KPW":{"_from":"1959-04-17"}}],"KR":[{"KRH":{"_from":"1953-02-15","_to":"1962-06-10"}},{"KRO":{"_from":"1945-08-15","_to":"1953-02-15"}},{"KRW":{"_from":"1962-06-10"}}],"KW":[{"KWD":{"_from":"1961-04-01"}}],"KY":[{"JMD":{"_from":"1969-09-08","_to":"1971-01-01"}},{"KYD":{"_from":"1971-01-01"}}],"KZ":[{"KZT":{"_from":"1993-11-05"}}],"LA":[{"LAK":{"_from":"1979-12-10"}}],"LB":[{"LBP":{"_from":"1948-02-02"}}],"LC":[{"XCD":{"_from":"1965-10-06"}}],"LI":[{"CHF":{"_from":"1921-02-01"}}],"LK":[{"LKR":{"_from":"1978-05-22"}}],"LR":[{"LRD":{"_from":"1944-01-01"}}],"LS":[{"LSL":{"_from":"1980-01-22"}},{"ZAR":{"_from":"1961-02-14"}}],"LT":[{"EUR":{"_from":"2015-01-01"}},{"LTL":{"_from":"1993-06-25","_to":"2014-12-31"}},{"LTT":{"_from":"1992-10-01","_to":"1993-06-25"}},{"SUR":{"_from":"1961-01-01","_to":"1992-10-01"}}],"LU":[{"EUR":{"_from":"1999-01-01"}},{"LUC":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"LUF":{"_from":"1944-09-04","_to":"2002-02-28"}},{"LUL":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}}],"LV":[{"EUR":{"_from":"2014-01-01"}},{"LVL":{"_from":"1993-06-28","_to":"2013-12-31"}},{"LVR":{"_from":"1992-05-07","_to":"1993-10-17"}},{"SUR":{"_from":"1961-01-01","_to":"1992-07-20"}}],"LY":[{"LYD":{"_from":"1971-09-01"}}],"MA":[{"MAD":{"_from":"1959-10-17"}},{"MAF":{"_from":"1881-01-01","_to":"1959-10-17"}}],"MC":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"MCF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"MD":[{"MDC":{"_from":"1992-06-01","_to":"1993-11-29"}},{"MDL":{"_from":"1993-11-29"}}],"ME":[{"DEM":{"_from":"1999-10-02","_to":"2002-05-15"}},{"EUR":{"_from":"2002-01-01"}},{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}}],"MF":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"MG":[{"MGA":{"_from":"1983-11-01"}},{"MGF":{"_from":"1963-07-01","_to":"2004-12-31"}}],"MH":[{"USD":{"_from":"1944-01-01"}}],"MK":[{"MKD":{"_from":"1993-05-20"}},{"MKN":{"_from":"1992-04-26","_to":"1993-05-20"}}],"ML":[{"MLF":{"_from":"1962-07-02","_to":"1984-08-31"}},{"XOF":{"_from":"1958-11-24","_to":"1962-07-02"}},{"XOF":{"_from":"1984-06-01"}}],"MM":[{"BUK":{"_from":"1952-07-01","_to":"1989-06-18"}},{"MMK":{"_from":"1989-06-18"}}],"MN":[{"MNT":{"_from":"1915-03-01"}}],"MO":[{"MOP":{"_from":"1901-01-01"}}],"MP":[{"USD":{"_from":"1944-01-01"}}],"MQ":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}}],"MR":[{"MRO":{"_from":"1973-06-29","_to":"2018-06-30"}},{"MRU":{"_from":"2018-01-01"}},{"XOF":{"_from":"1958-11-28","_to":"1973-06-29"}}],"MS":[{"XCD":{"_from":"1967-02-27"}}],"MT":[{"EUR":{"_from":"2008-01-01"}},{"MTL":{"_from":"1968-06-07","_to":"2008-01-31"}},{"MTP":{"_from":"1914-08-13","_to":"1968-06-07"}}],"MU":[{"MUR":{"_from":"1934-04-01"}}],"MV":[{"MVP":{"_from":"1947-01-01","_to":"1981-07-01"}},{"MVR":{"_from":"1981-07-01"}}],"MW":[{"MWK":{"_from":"1971-02-15"}}],"MX":[{"MXN":{"_from":"1993-01-01"}},{"MXP":{"_from":"1822-01-01","_to":"1992-12-31"}},{"MXV":{"_tender":"false"}}],"MY":[{"MYR":{"_from":"1963-09-16"}}],"MZ":[{"MZE":{"_from":"1975-06-25","_to":"1980-06-16"}},{"MZM":{"_from":"1980-06-16","_to":"2006-12-31"}},{"MZN":{"_from":"2006-07-01"}}],"NA":[{"NAD":{"_from":"1993-01-01"}},{"ZAR":{"_from":"1961-02-14"}}],"NC":[{"XPF":{"_from":"1985-01-01"}}],"NE":[{"XOF":{"_from":"1958-12-19"}}],"NF":[{"AUD":{"_from":"1966-02-14"}}],"NG":[{"NGN":{"_from":"1973-01-01"}}],"NI":[{"NIC":{"_from":"1988-02-15","_to":"1991-04-30"}},{"NIO":{"_from":"1991-04-30"}}],"NL":[{"EUR":{"_from":"1999-01-01"}},{"NLG":{"_from":"1813-01-01","_to":"2002-02-28"}}],"NO":[{"NOK":{"_from":"1905-06-07"}},{"SEK":{"_from":"1873-05-27","_to":"1905-06-07"}}],"NP":[{"INR":{"_from":"1870-01-01","_to":"1966-10-17"}},{"NPR":{"_from":"1933-01-01"}}],"NR":[{"AUD":{"_from":"1966-02-14"}}],"NU":[{"NZD":{"_from":"1967-07-10"}}],"NZ":[{"NZD":{"_from":"1967-07-10"}}],"OM":[{"OMR":{"_from":"1972-11-11"}}],"PA":[{"PAB":{"_from":"1903-11-04"}},{"USD":{"_from":"1903-11-18"}}],"PE":[{"PEI":{"_from":"1985-02-01","_to":"1991-07-01"}},{"PEN":{"_from":"1991-07-01"}},{"PES":{"_from":"1863-02-14","_to":"1985-02-01"}}],"PF":[{"XPF":{"_from":"1945-12-26"}}],"PG":[{"AUD":{"_from":"1966-02-14","_to":"1975-09-16"}},{"PGK":{"_from":"1975-09-16"}}],"PH":[{"PHP":{"_from":"1946-07-04"}}],"PK":[{"INR":{"_from":"1835-08-17","_to":"1947-08-15"}},{"PKR":{"_from":"1948-04-01"}}],"PL":[{"PLN":{"_from":"1995-01-01"}},{"PLZ":{"_from":"1950-10-28","_to":"1994-12-31"}}],"PM":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1972-12-21","_to":"2002-02-17"}}],"PN":[{"NZD":{"_from":"1969-01-13"}}],"PR":[{"ESP":{"_from":"1800-01-01","_to":"1898-12-10"}},{"USD":{"_from":"1898-12-10"}}],"PS":[{"ILP":{"_from":"1967-06-01","_to":"1980-02-22"}},{"ILS":{"_from":"1985-09-04"}},{"JOD":{"_from":"1950-07-01","_to":"1967-06-01"}},{"JOD":{"_from":"1996-02-12"}}],"PT":[{"EUR":{"_from":"1999-01-01"}},{"PTE":{"_from":"1911-05-22","_to":"2002-02-28"}}],"PW":[{"USD":{"_from":"1944-01-01"}}],"PY":[{"PYG":{"_from":"1943-11-01"}}],"QA":[{"QAR":{"_from":"1973-05-19"}}],"RE":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1975-01-01","_to":"2002-02-17"}}],"RO":[{"ROL":{"_from":"1952-01-28","_to":"2006-12-31"}},{"RON":{"_from":"2005-07-01"}}],"RS":[{"CSD":{"_from":"2002-05-15","_to":"2006-10-25"}},{"RSD":{"_from":"2006-10-25"}},{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}}],"RU":[{"RUB":{"_from":"1999-01-01"}},{"RUR":{"_from":"1991-12-25","_to":"1998-12-31"}}],"RW":[{"RWF":{"_from":"1964-05-19"}}],"SA":[{"SAR":{"_from":"1952-10-22"}}],"SB":[{"AUD":{"_from":"1966-02-14","_to":"1978-06-30"}},{"SBD":{"_from":"1977-10-24"}}],"SC":[{"SCR":{"_from":"1903-11-01"}}],"SD":[{"EGP":{"_from":"1889-01-19","_to":"1958-01-01"}},{"GBP":{"_from":"1889-01-19","_to":"1958-01-01"}},{"SDD":{"_from":"1992-06-08","_to":"2007-06-30"}},{"SDG":{"_from":"2007-01-10"}},{"SDP":{"_from":"1957-04-08","_to":"1998-06-01"}}],"SE":[{"SEK":{"_from":"1873-05-27"}}],"SG":[{"MYR":{"_from":"1963-09-16","_to":"1967-06-12"}},{"SGD":{"_from":"1967-06-12"}}],"SH":[{"SHP":{"_from":"1917-02-15"}}],"SI":[{"EUR":{"_from":"2007-01-01"}},{"SIT":{"_from":"1992-10-07","_to":"2007-01-14"}}],"SJ":[{"NOK":{"_from":"1905-06-07"}}],"SK":[{"CSK":{"_from":"1953-06-01","_to":"1992-12-31"}},{"EUR":{"_from":"2009-01-01"}},{"SKK":{"_from":"1992-12-31","_to":"2009-01-01"}}],"SL":[{"GBP":{"_from":"1808-11-30","_to":"1966-02-04"}},{"SLE":{"_tz":"Africa/Freetown","_from":"2022-07-01"}},{"SLL":{"_from":"1964-08-04","_to":"2023-12-31","_to-tz":"Africa/Freetown"}}],"SM":[{"EUR":{"_from":"1999-01-01"}},{"ITL":{"_from":"1865-12-23","_to":"2001-02-28"}}],"SN":[{"XOF":{"_from":"1959-04-04"}}],"SO":[{"SOS":{"_from":"1960-07-01"}}],"SR":[{"NLG":{"_from":"1815-11-20","_to":"1940-05-10"}},{"SRD":{"_from":"2004-01-01"}},{"SRG":{"_from":"1940-05-10","_to":"2003-12-31"}}],"SS":[{"SDG":{"_from":"2007-01-10","_to":"2011-09-01"}},{"SSP":{"_from":"2011-07-18"}}],"ST":[{"STD":{"_from":"1977-09-08","_to":"2017-12-31"}},{"STN":{"_from":"2018-01-01"}}],"SU":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"SV":[{"SVC":{"_from":"1919-11-11","_to":"2001-01-01"}},{"USD":{"_from":"2001-01-01"}}],"SX":[{"ANG":{"_from":"2010-10-10","_to":"2025-06-30","_to-tz":"America/Lower_Princes"}},{"XCG":{"_tz":"America/Lower_Princes","_from":"2025-03-31"}}],"SY":[{"SYP":{"_from":"1948-01-01"}}],"SZ":[{"SZL":{"_from":"1974-09-06"}}],"TA":[{"GBP":{"_from":"1938-01-12"}}],"TC":[{"USD":{"_from":"1969-09-08"}}],"TD":[{"XAF":{"_from":"1993-01-01"}}],"TF":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1959-01-01","_to":"2002-02-17"}}],"TG":[{"XOF":{"_from":"1958-11-28"}}],"TH":[{"THB":{"_from":"1928-04-15"}}],"TJ":[{"RUR":{"_from":"1991-12-25","_to":"1995-05-10"}},{"TJR":{"_from":"1995-05-10","_to":"2000-10-25"}},{"TJS":{"_from":"2000-10-26"}}],"TK":[{"NZD":{"_from":"1967-07-10"}}],"TL":[{"IDR":{"_from":"1975-12-07","_to":"2002-05-20"}},{"TPE":{"_from":"1959-01-02","_to":"2002-05-20"}},{"USD":{"_from":"1999-10-20"}}],"TM":[{"RUR":{"_from":"1991-12-25","_to":"1993-11-01"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"TMM":{"_from":"1993-11-01","_to":"2009-01-01"}},{"TMT":{"_from":"2009-01-01"}}],"TN":[{"TND":{"_from":"1958-11-01"}}],"TO":[{"TOP":{"_from":"1966-02-14"}}],"TP":[{"IDR":{"_from":"1975-12-07","_to":"2002-05-20"}},{"TPE":{"_from":"1959-01-02","_to":"2002-05-20"}}],"TR":[{"TRL":{"_from":"1922-11-01","_to":"2005-12-31"}},{"TRY":{"_from":"2005-01-01"}}],"TT":[{"TTD":{"_from":"1964-01-01"}}],"TV":[{"AUD":{"_from":"1966-02-14"}}],"TW":[{"TWD":{"_from":"1949-06-15"}}],"TZ":[{"TZS":{"_from":"1966-06-14"}}],"UA":[{"RUR":{"_from":"1991-12-25","_to":"1992-11-13"}},{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"UAH":{"_from":"1996-09-02"}},{"UAK":{"_from":"1992-11-13","_to":"1993-10-17"}}],"UG":[{"UGS":{"_from":"1966-08-15","_to":"1987-05-15"}},{"UGX":{"_from":"1987-05-15"}}],"UM":[{"USD":{"_from":"1944-01-01"}}],"US":[{"USD":{"_from":"1792-01-01"}},{"USN":{"_tender":"false"}},{"USS":{"_tender":"false","_to":"2014-03-01"}}],"UY":[{"UYI":{"_tender":"false"}},{"UYP":{"_from":"1975-07-01","_to":"1993-03-01"}},{"UYU":{"_from":"1993-03-01"}},{"UYW":{"_tender":"false"}}],"UZ":[{"UZS":{"_from":"1994-07-01"}}],"VA":[{"EUR":{"_from":"1999-01-01"}},{"ITL":{"_from":"1870-10-19","_to":"2002-02-28"}}],"VC":[{"XCD":{"_from":"1965-10-06"}}],"VE":[{"VEB":{"_from":"1871-05-11","_to":"2008-06-30"}},{"VED":{"_tender":"false"}},{"VEF":{"_from":"2008-01-01","_to":"2018-08-20"}},{"VES":{"_from":"2018-08-20"}}],"VG":[{"GBP":{"_from":"1833-01-01","_to":"1959-01-01"}},{"USD":{"_from":"1833-01-01"}}],"VI":[{"USD":{"_from":"1837-01-01"}}],"VN":[{"VND":{"_from":"1985-09-14"}},{"VNN":{"_from":"1978-05-03","_to":"1985-09-14"}}],"VU":[{"VUV":{"_from":"1981-01-01"}}],"WF":[{"XPF":{"_from":"1961-07-30"}}],"WS":[{"WST":{"_from":"1967-07-10"}}],"XK":[{"DEM":{"_from":"1999-09-01","_to":"2002-03-09"}},{"EUR":{"_from":"2002-01-01"}},{"YUM":{"_from":"1994-01-24","_to":"1999-09-30"}}],"YD":[{"YDD":{"_from":"1965-04-01","_to":"1996-01-01"}}],"YE":[{"YER":{"_from":"1990-05-22"}}],"YT":[{"EUR":{"_from":"1999-01-01"}},{"FRF":{"_from":"1976-02-23","_to":"2002-02-17"}},{"KMF":{"_from":"1975-01-01","_to":"1976-02-23"}}],"YU":[{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}},{"YUN":{"_from":"1990-01-01","_to":"1992-07-24"}}],"ZA":[{"ZAL":{"_tender":"false","_from":"1985-09-01","_to":"1995-03-13"}},{"ZAR":{"_from":"1961-02-14"}}],"ZM":[{"ZMK":{"_from":"1968-01-16","_to":"2013-01-01"}},{"ZMW":{"_from":"2013-01-01"}}],"ZR":[{"ZRN":{"_from":"1993-11-01","_to":"1998-07-31"}},{"ZRZ":{"_from":"1971-10-27","_to":"1993-11-01"}}],"ZW":[{"RHD":{"_from":"1970-02-17","_to":"1980-04-18"}},{"USD":{"_from":"2009-04-12"}},{"ZWD":{"_from":"1980-04-18","_to":"2008-08-01"}},{"ZWL":{"_from":"2009-02-02","_to":"2009-04-12"}},{"ZWR":{"_from":"2008-08-01","_to":"2009-02-02"}}],"ZZ":[{"XAG":{"_tender":"false"}},{"XAU":{"_tender":"false"}},{"XBA":{"_tender":"false"}},{"XBB":{"_tender":"false"}},{"XBC":{"_tender":"false"}},{"XBD":{"_tender":"false"}},{"XDR":{"_tender":"false"}},{"XFO":{"_tender":"false","_from":"1930-01-01","_to":"2003-04-01"}},{"XFU":{"_tender":"false","_to":"2013-11-30"}},{"XPD":{"_tender":"false"}},{"XPT":{"_tender":"false"}},{"XRE":{"_tender":"false","_to":"1999-11-30"}},{"XSU":{"_tender":"false"}},{"XTS":{"_tender":"false"}},{"XUA":{"_tender":"false"}},{"XXX":{"_tender":"false"}}]}}}'),Nu={supplemental:xl},Xa=Object.freeze(Object.defineProperty({__proto__:null,default:Nu,supplemental:xl},Symbol.toStringTag,{value:"Module"}));ms.load({...tu,...ru,...ou,...su,...uu});const ma=({locale:r,children:e,columns:a,aggregates:t,parentContainerHeight:n="97vh",gridContentWrapper:i,dataSource:l,enableRtl:d,gridLines:u,height:m,width:c,allowKeyboard:g=!0,toolbar:b=[],displayAsCheckbox:S=!0,editSettings:_,isSingleClickEdit:Z=!1,enableStickyHeader:C,enableHtmlSanitizer:w,rowHeight:R,distinctShipCountryDataSource:k=l instanceof Array?[...l]:l,cascadingData:z=l instanceof Array?[...l]:l,showPerformanceMetrics:E,initialShowSpinner:X=!1,showAggregates:Ne=!1,customBindingAggregates:K=!1,isCustomBinding:O=!1,isPreventAutoHeight:xe=!1,enableContextMenu:J=!1,pdfOrientation:Re="Portrait",pdfPageSize:Le="A4",pdfRange:se="All",useCustomColumnWidths:De=!1,enableExcelExportDemo:Fe=!1,isStrictMode:He=!1,formRef:ha,formStateRef:na,enableDarkMode:Be=!1,builtInThemes:$e="material",...M})=>{var Kn,jn,qn,Zn,$n,Xn;const f=y.useRef(null),[pa,Da]=y.useState(X),[ra,Ta]=y.useState("All"),[Ra,Ga]=y.useState(0),{excelExport:Na,isExporting:ka}=zd({gridRef:f}),[Ge,Fa]=y.useState(O&&!("result"in l)&&Array.isArray(l)?{result:[],count:0}:l),[ia,T]=y.useState(!1),v=!!O,A=s=>typeof s=="object"&&s!==null&&"result"in s,j=y.useCallback(async s=>Array.isArray(Ge)?Ge:Ge instanceof Ve?(await Ge.executeQuery(new Wa)).result:A(Ge)?Ge.result:Ge,[Ge]);y.useMemo(()=>{switch(r){case"de":Ka(pu,$a,Xa);break;case"fr":Ka(gu,$a,Xa);break;case"zh":Ka(Cu,$a,Xa);break;case"ar":Ka(Mu,$a,Xa);break;default:Ka(cu,$a,Xa);break}},[r]);const re=y.useRef(0),P=y.useRef(0),N=y.useRef(0),ee=()=>{var s,p,h,G;pa?(p=(s=f.current)==null?void 0:s.hideSpinner)==null||p.call(s):(G=(h=f.current)==null?void 0:h.showSpinner)==null||G.call(h),Da(!pa)};y.useEffect(()=>{console.log("Grid DOM Ready => ",f.current)},[(Kn=f.current)==null?void 0:Kn.currentViewData]);const be=y.useCallback(s=>o.jsxs("div",{children:[s.data[s.column.field],"-template"]}),[]),Y=y.useCallback(s=>o.jsx(Ze,{defaultValue:s.data[s.column.field],dataSource:k,fields:{text:s.column.field,value:s.column.field}}),[k]),ie=y.useCallback(()=>o.jsx("div",{children:"Order ID-template"}),[]),Xe=y.useCallback(s=>{const{field:p,data:h}=s;return h[p]+"-1"},[]),Ye=y.useCallback(()=>"Order ID-1",[]);E&&(re.current=performance.now());const ve=y.useCallback(s=>o.jsx("span",{children:Object.entries(s).map(([p,h])=>p.includes("-")?"":o.jsxs(o.Fragment,{children:[o.jsxs("span",{style:{marginRight:"8px"},children:[p,": ",h!=null?String(h):"-"]},p),o.jsx("br",{})]}))}),[]),oa=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:["Sum: ",s.Sum]}),[]),_e=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:[s.Sum,"-",s.Custom]}),[]),Ke=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:["Max: ",s.Max]}),[]),wa=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:["Min: ",s.Min]}),[]),Oa=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:["Average: ",s.Average]}),[]),we=y.useCallback(s=>J?ve(s):o.jsxs("span",{children:["Count: ",s.Count]}),[]),la=y.useCallback((s,p)=>s.result.length,[]),ya=y.useCallback(s=>J?ve(s):o.jsxs("span",{style:{color:"red",fontWeight:900},children:["Custom: ",s.Custom]}),[]),sa=s=>{console.log("Native React Grid actionComplete triggered => ",s)},da=s=>{var p;console.log("Native React Grid actionBegin triggered => ",s),E&&(re.current=performance.now()),((p=f.current.editSettings)==null?void 0:p.mode)==="PopupTemplate"&&(s.action==="Add"||s.action==="Edit")&&(ha.current.validate()?s.data=na.current.values:s.action!=="Delete"&&(s.cancel=!0))},Dl=s=>{s.item.id=="grid_console"&&console.log("Context Menu Clicked")},Tl=s=>{var p;return console.log(s),((p=s.column)==null?void 0:p.field)==="Freight"?new Promise(h=>setTimeout(()=>h(s),2e3)):s},on=y.useCallback(s=>{if(!s.isComplex)return new nr(s.field,s.operator,s.value,s.ignoreCase,s.ignoreAccent,s.matchCase);let p=null;const h=s.predicates||[],G=s.condition||"and";for(let D=0;D<h.length;D++){const L=on(s.predicates[D]);p===null?p=L:p=G.toLowerCase()==="or"?p.or(L):p.and(L)}return p||new nr("","","")},[]),Qe=y.useRef(null),Pn=y.useCallback(s=>o.jsx(Ze,{dataSource:new Ve(Oe.distinct(Ge,"ShipCountry",!1)),fields:{value:"ShipCountry"},defaultValue:s.defaultValue,onChange:async p=>{var G,D,L,B;s.onChange(p.value);const h=await new Ve(z).executeQuery(new Wa().where("ShipCountry","equal",p.value));(B=Qe.current)==null||B.call(Qe,(L=(D=(G=h.result)==null?void 0:G[0])==null?void 0:D.Complex)==null?void 0:L.ShipName)}}),[]),Bn=y.useCallback(async s=>{var h,G,D,L,B,I,ae,ye,Je,ga,H,U,ea,je;(L=(D=(G=(h=f.current)==null?void 0:h.editInlineRowFormRef)==null?void 0:G.current)==null?void 0:D.formRef)!=null&&L.current?(ae=(I=(B=f.current)==null?void 0:B.editInlineRowFormRef.current)==null?void 0:I.editCellRefs.current)==null||ae.ShipCountry.setValue(s.value):(ga=(Je=(ye=f.current)==null?void 0:ye.addInlineRowFormRef.current)==null?void 0:Je.editCellRefs.current)==null||ga.ShipCountry.setValue(s.value);const p=await new Ve(z).executeQuery(new Wa().where("ShipCountry","equal",s.value));(je=Qe.current)==null||je.call(Qe,(ea=(U=(H=p.result)==null?void 0:H[0])==null?void 0:U.Complex)==null?void 0:ea.ShipName)},[]),In=y.useCallback(s=>(Qe.current=s.onChange,o.jsx(Ze,{disabled:!0,dataSource:new Ve(Oe.distinct(z,"ShipName",!1)),fields:{value:"ShipName"},defaultValue:s.defaultValue,onChange:p=>{var h;(h=Qe.current)==null||h.call(Qe,p.value)}})),[z]),zn=y.useCallback(s=>o.jsx(ke,{value:us(s.column.field,s.data),onChange:p=>{s.onChange(p.value)}}),[]),Rl=y.useMemo(()=>M.filterSettings,[M.filterSettings]),at=y.useMemo(()=>M.resizeSettings,[M.resizeSettings]),xa=y.useMemo(()=>M.reorderSettings,[M.reorderSettings]),Gl=y.useMemo(()=>({enabled:J,items:["Edit","Delete","Save","Cancel","SortAscending","SortDescending","ClearSort","FirstPage","PrevPage","LastPage","NextPage","SelectRow","ClearRowSelection","ClearSelection",{target:".sf-grid-content-row",id:"grid_console",text:"Console Log"},"Sum","Average","Min","Max","Count","TrueCount","FalseCount","Custom","UnpinRow","PinToBottom","PinToTop","UnpinColumn","PinToLeft","PinToRight"]}),[J]),kl=y.useMemo(()=>M.sortSettings,[M.sortSettings]),Fl=y.useMemo(()=>M.searchSettings,[M.searchSettings]),_l=y.useMemo(()=>M.selectionSettings,[M.selectionSettings]),Pl=y.useMemo(()=>M.pageSettings,[M.pageSettings]),Bl=y.useMemo(()=>M.textWrapSettings,[M.textWrapSettings]),Ln=(s,p,h,G,D)=>{if(typeof s=="number"&&typeof p=="number"&&(D==="Ascending"||D==="Descending"))return s-p;if(s instanceof Date&&p instanceof Date){const B=s.getTime(),I=p.getTime();if(!isNaN(B)&&!isNaN(I)&&D==="Ascending"||!isNaN(B)&&!isNaN(I)&&D==="Descending")return B-I}return new Intl.Collator(void 0,{sensitivity:"variant",usage:"sort"}).compare(String(s),String(p))},Hn=y.useRef(!1),_a=y.useRef(!1),Ua=y.useMemo(()=>e||!Array.isArray(a)||!a.length?void 0:a.map(p=>({...p})).map(p=>{const h={...p};return h.type===Jt.Checkbox&&(_a.current=!0),h.templateId==="OrderID"&&(h.template=be,h.headerTemplate=ie),h.valueAccessorId==="OrderID"&&(h.valueAccessor=Xe),h.headerValueAccessorId==="OrderID"&&(h.headerValueAccessor=Ye),h.templateId==="ShipCountry"&&(h.template=Y),h.editTemplateId==="ShipCountry"&&(h.editTemplate=Pn,h.edit=h.edit??{params:{onChange:Bn}}),h.editTemplateId==="ShipName"&&(h.editTemplate=In),h.editTemplateId==="ShipCity"&&(h.editTemplate=zn),(h.field==="OrderID"||h.headerText==="Order ID")&&(h.type=h.type??"number",h.filter=h.filter??{filterBarType:va.NumericTextBox},h.validationRules=h.validationRules??{required:!0},h.isPrimaryKey=h.isPrimaryKey??!1,Hn.current=h.isPrimaryKey,h.contextMenuItems=h.contextMenuItems??["Delete"]),(h.field==="OrderDate"||h.headerText==="Order Date")&&(h.type=h.type??"datetime",h.filter=h.filter??{filterBarType:va.DatePicker},h.validationRules=h.validationRules??{required:!0}),(h.field==="Freight"||h.headerText==="Freight")&&(h.validationRules=h.validationRules??{required:!0,min:1,max:1e3},h.edit=h.edit??{type:ze.NumericTextBox,params:{decimals:0,validateOnType:!0,format:"N",clearButton:!0,spinButton:!1}},h.sortComparer=h.sortComparer??Ln),(h.field==="Salary"||h.headerText==="Salary")&&(h.edit=h.edit??{type:ze.NumericTextBox}),(h.field==="ShipCountry"||h.headerText==="Ship Country")&&(h.disableHtmlEncode=h.disableHtmlEncode??!0,h.type=h.type??"string",h.validationRules=h.validationRules??{required:!0}),(h.field==="IsActive"||h.headerText==="IsActive")&&(h.type=h.type??"boolean",h.displayAsCheckBox=h.displayAsCheckBox??S),h.headerText==="Command Actions"&&(h.getCommandItems=h.getCommandItems??(G=>[o.jsx(it,{type:ot.Edit},"Edit"),o.jsx(it,{type:ot.Delete},"Delete"),o.jsx(it,{type:ot.Update},"Update"),o.jsx(it,{type:ot.Cancel},"Cancel")])),h}),[e,a,S,be,ie,Xe,Ye,Y,Pn,In,zn,Bn,Ln]),ln=y.useMemo(()=>{if(De)return Ua??(Array.isArray(a)?a:void 0)},[De,Ua,a]),Il=y.useCallback(()=>Ua??(Array.isArray(a)?a:[]),[Ua,a]),{pdfExport:Vn}=rd({gridRef:f,getColumns:b.includes("PdfExport")?Il:void 0,getAllData:b.includes("PdfExport")?j:void 0}),On=y.useCallback(async s=>{var p,h,G;if(((p=s.column)==null?void 0:p.field)==="Freight"&&typeof s.value=="number"){s.numberFormat="$#,##0.00";const D=new Ee;D.backColor="#E6F4EA",D.hAlign="Right",s.style=D}if(((h=s.column)==null?void 0:h.field)==="OrderDate"&&s.value){const D=new Ee;D.hAlign="Center",s.style=D}if(((G=s.column)==null?void 0:G.field)==="CustomerID"&&s.value!=null){const D=String(s.value),L=`https://example.com/customers/${encodeURIComponent(D)}`;s.hyperLink={target:L,displayText:D}}},[]),zl=y.useCallback(s=>{var p,h,G,D;if(b.includes("PdfExport")&&((h=(p=s.item)==null?void 0:p.id)!=null&&h.includes("_pdfexport"))){const L={range:se,fileName:`GridPdfExport_${new Date().toISOString().split("T")[0]}.pdf`,pageOrientation:Re,pageSize:Le,header:{fromTop:10,height:30,contents:[{type:"Text",value:"Grid PDF Export",position:{x:0,y:5},style:{fontSize:14,bold:!0}}]},footer:{fromBottom:10,height:20,contents:[{type:"PageNumber",format:"Page {$current} of {$total}",position:{x:0,y:0},style:{fontSize:10,hAlign:"Center"}}]},...ln?{columns:ln}:{},onAfterPdfExport:B=>{var I;B.success?(console.log("PDF export completed successfully"),B.promise&&B.promise.then(ae=>{console.log("Blob data available:",ae.blobData)}).catch(ae=>{console.error("Failed to get blob:",ae)})):console.error("PDF export failed:",(I=B.error)==null?void 0:I.message)}};Vn(L)}if((D=(G=s.item)==null?void 0:G.id)!=null&&D.includes("_excelexport")){const B={data:Array.isArray(l)?l:[],fileName:"GridExport",range:ra,...ra==="Custom"&&{customRange:{startRow:0,endRow:4}},onExcelCellCustomize:On,onAfterExcelExport:I=>{var ae;I.success?(console.log("Excel export completed successfully"),I.promise&&I.promise.then(ye=>{console.log("Blob data available:",ye.blobData)}).catch(ye=>{console.error("Failed to get blob:",ye)})):console.error("Excel export failed:",(ae=I.error)==null?void 0:ae.message)}};Na(B)}M.onToolbarItemClick?M.onToolbarItemClick(s):console.log("ToolbarClick triggered:",s)},[b.includes("PdfExport"),Vn,se,Re,Le,ln,M.onToolbarItemClick,l,Na,ra,On]),tt=y.useMemo(()=>_??{},[_]),ua=M.clipboardSettings,sn=(ua==null?void 0:ua.enabled)!==!1,Ll=sn&&(ua==null?void 0:ua.allowPaste)!==!1,Hl=sn&&(ua==null?void 0:ua.allowCut)!==!1,Pa=y.useCallback(()=>{var G,D,L,B,I,ae;if(!f.current)return!1;const s=((D=(G=f.current).getSelectedRowIndexes)==null?void 0:D.call(G))??[],p=((B=(L=f.current.cellSelectionModule)==null?void 0:L.getSelectedCellsData)==null?void 0:B.call(L))??[],h=(ae=(I=f.current.focusModule)==null?void 0:I.getFocusedCell)==null?void 0:ae.call(I);return s.length>0||p.length>0||!!h&&h.rowIndex>=0&&h.colIndex>=0},[]),Vl=y.useCallback(async()=>{var s;if(!Pa()){console.log("Select a row or cell first.");return}await((s=f.current)==null?void 0:s.copyToClipboard(!0))},[Pa]),Ol=y.useCallback(async()=>{var s;if(!Pa()){console.log("Select a row or cell first.");return}await((s=f.current)==null?void 0:s.cutToClipboard())},[Pa]),Ul=y.useCallback(()=>{var s;if(!Pa()){console.log("Select a row or cell first.");return}(s=f.current)==null||s.pasteFromClipboard("10248	VINET	5.00	true")},[Pa]),Wl=y.useCallback(s=>(console.log("rowClass => ",s),s.rowIndex===2&&s.rowType===rr.Content?"rowClass2":s.rowIndex===0&&s.rowType===rr.Aggregate?"aggregateRowClass0":""),[]),Un=y.useCallback(s=>{if(s.cellType===dn.Content){if(console.log("dataCellClass => ",s),s.rowIndex===3&&s.column.field==="OrderDate")return"cellClass3"}else if(s.cellType===dn.Header){if(console.log("headerCellClass => ",s),s.rowIndex===0&&s.column.field==="Freight")return"headerCellClass0"}else if(s.cellType===dn.Aggregate&&(console.log("aggregateCellClass => ",s),s.rowIndex===1&&s.column.field==="Freight"))return"aggregateCellClass1";return""},[]),Wn=s=>{var G,D,L,B,I,ae,ye,Je,ga;Ga(H=>H+1);const p=new Ve(!("result"in l)&&Array.isArray(l)?l:fa),h=new Wa;if((G=s.where)!=null&&G.length){const H=s.where[0],U=on(H);h.where(U)}if((D=s.search)!=null&&D.length){const{fields:H,value:U}=s.search[0];h.search(U,H)}if((L=s.sort)!=null&&L.length||(B=s.groups)!=null&&B.length&&s.isInitialLoad)if(s.isInitialLoad&&((I=s.groups)!=null&&I.length)){const H=[];for(let U=s.sort.length-1;U>-1;U--)(H==null?void 0:H.find(je=>je.field===s.sort[U].field))||((ae=s.groups)!=null&&ae.length&&((ye=s.groups)!=null&&ye.includes(s.sort[U].field))?H.push({field:s.sort[U].field,direction:s.sort[U].direction}):h.sortBy(s.sort[U].field,s.sort[U].direction));H.length&&H.forEach(U=>{h.sortBy(U.field,U.direction)})}else s.sort.forEach(H=>{h.sortBy(H.field,H.direction)});if((Je=s.aggregates)!=null&&Je.length)for(let H=0;H<s.aggregates.length;H++){const U=s.aggregates[H];h.aggregate(U.type,U.field)}if(s.groups&&((ga=s.groups)!=null&&ga.length))for(let H=0;H<s.groups.length;H++){const U=s.groups[parseInt(H.toString(),10)];h.group(U)}if(s.take&&s.skip){const H=s.skip/s.take+1,U=s.take;h.page(H,U)}else s.skip===0&&s.take&&h.page(1,s.take);s.select&&h.select(s.select),s.requiresCounts&&h.requiresCount(),console.log("onDataRequest => ",s,h),p.executeQuery(h).then(H=>{if(s.requestType==="filterChoiceRequest"){const U={result:Oe.distinct(H.result,s.select[0],!0),count:H.count};if(s.distinctCounts){const ea=new Wa;if(s.distinct){const je=s.distinct[0],rt=on(je);ea.where(rt)}s.select&&ea.select(s.select),console.log("onDataRequest Filter Distinct => ",s,h),p.executeQuery(ea).then(je=>{U.distinctCount=Oe.distinct(je.result,s.select[0],!0).length,s.dataSource(U)})}else s.dataSource(U)}else s.requestType==="getData"?s.dataSource(H):Fa(H)})},Kl=y.useMemo(()=>{var L;if(!O)return;const h=((L=t??(!e&&K&&[{columns:[{field:"Freight",type:"Sum",format:{format:"C2"},footerTemplate:oa}]},{columns:[{field:"ShipCountry",type:"Count",footerTemplate:we}]}]||!e&&Ne&&[{columns:[{field:"Freight",type:["Sum","Custom"],customAggregate:la,footerTemplate:_e,format:{format:"C2"}},{field:"Salary",type:"Max",footerTemplate:Ke,format:{format:"C2"}},{field:"Cost",type:"Min",footerTemplate:wa,format:{format:"C2"}},{field:"ShipCountry",type:"Count",footerTemplate:we}]},{columns:[{field:"Freight",type:"Average",footerTemplate:Oa,format:{format:"C2"},cellClass:Un},{field:"Salary",type:"Count",format:"C2"},{field:"Cost",type:"Sum",footerTemplate:oa,format:{format:"C2"}},{field:"ShipCountry",type:"Custom",customAggregate:la,footerTemplate:ya}]}]||[]))==null?void 0:L.reduce((B,I)=>{var ae;return(ae=I.columns)==null||ae.forEach(ye=>{Array.isArray(ye.type)?ye.type.forEach(Je=>{B.push({type:Je.toLowerCase(),field:ye.field})}):B.push({type:ye.type.toLowerCase(),field:ye.field})}),B},[]))??[],G=(a==null?void 0:a.reduce((B,I)=>(I.groupCaptionAggregateType&&B.push(...Array.isArray(I.groupCaptionAggregateType)?I.groupCaptionAggregateType.map(ae=>({type:ae.toLowerCase(),field:I.field})):[{type:I.groupCaptionAggregateType.toLowerCase(),field:I.field}]),B),[]))??[],D=h==null?void 0:h.concat(G);return D!=null&&D.length?D:void 0},[O,t,a,ia]);y.useEffect(()=>{var s,p,h,G,D,L,B,I,ae,ye,Je,ga,H,U,ea,je,rt,Yn;O&&ia&&Wn({skip:((s=M==null?void 0:M.pageSettings)==null?void 0:s.currentPage)*((p=M==null?void 0:M.pageSettings)==null?void 0:p.pageSize)||0,take:((h=M==null?void 0:M.pageSettings)==null?void 0:h.pageSize)??(((G=M.virtualizationSettings)==null?void 0:G.scrollMode)===Aa.Auto||!((D=M.virtualizationSettings)!=null&&D.scrollMode)?12:50),groups:(L=M==null?void 0:M.groupSettings)==null?void 0:L.columns,where:[],search:[],sort:(B=M==null?void 0:M.sortSettings)!=null&&B.enabled&&((ae=(I=M==null?void 0:M.sortSettings)==null?void 0:I.columns)!=null&&ae.length)&&(!((ye=M==null?void 0:M.groupSettings)!=null&&ye.enabled)||!((Je=M==null?void 0:M.groupSettings)!=null&&Je.columns))?(ga=M==null?void 0:M.sortSettings)==null?void 0:ga.columns:(((H=M==null?void 0:M.sortSettings)==null?void 0:H.columns)??[]).concat((U=M==null?void 0:M.groupSettings)!=null&&U.enabled&&((ea=M==null?void 0:M.groupSettings)!=null&&ea.columns)?(rt=(je=M==null?void 0:M.groupSettings)==null?void 0:je.columns)==null?void 0:rt.map(Qn=>{var Jn,er,ar;return{field:Qn,direction:((ar=(er=(Jn=M==null?void 0:M.sortSettings)==null?void 0:Jn.columns)==null?void 0:er.find(ql=>ql.field===Qn))==null?void 0:ar.direction)??"Ascending"}}):[]),aggregates:Kl??[],...((Yn=M.virtualizationSettings)==null?void 0:Yn.scrollMode)!==Aa.Infinite?{requiresCounts:!0}:{},isInitialLoad:!0})},[ia]);const jl=y.useMemo(()=>Fe?b.includes("ExcelExport")?b:[...b,"ExcelExport"]:b,[Fe,b]);y.useEffect(()=>{Be?document.body.classList.add("dark","sf-dark-mode"):document.body.classList.remove("dark","sf-dark-mode")},[Be]),nn($e,M.enableDevMode);const nt=()=>o.jsx(wn,{locale:r,dir:d?"rtl":"ltr",ripple:!0,children:o.jsxs(Ja,{ref:f,...M,className:"custom-grid-class",dataSource:Ge,allowKeyboard:g,virtualizationSettings:M.virtualizationSettings,rowClass:Wl,toolbar:jl,query:M.query,loadingIndicatorSettings:M.loadingIndicatorSettings,enableHover:M.enableHover,gridLines:u,showColumnChooser:!0,pageSettings:Pl,sortSettings:kl,filterSettings:Rl,resizeSettings:at,reorderSettings:xa,onColumnReorderStart:s=>{console.log("onColumnReorderStart => ",s)},onColumnDrag:s=>{console.log("onColumnDrag => ",s)},onColumnReorderEnd:s=>{console.log("onColumnReorderEnd => ",s)},onRowDrag:s=>{console.log("onRowDrag => ",s)},selectionSettings:_l,searchSettings:Fl,contextMenuSettings:Gl,onContextMenuClick:Dl,onContextMenuOpen:Tl,textWrapSettings:Bl,rowHeight:R,enableHtmlSanitizer:w,enableStickyHeader:C,onDataChangeCancel:s=>console.log(s),height:m,width:c,editSettings:tt,onError:s=>console.log("actionFailure => ",s),onGridRenderStart:()=>{console.log("load triggered!"),E&&(re.current=performance.now())},onPageChangeStart:da,onFilterStart:da,onSortStart:da,onRowAddStart:da,onDataChangeStart:da,onRefreshStart:da,onPageChange:sa,onFilter:sa,onSort:sa,onFormRender:sa,onDataChangeComplete:sa,onRefresh:sa,onDataRequest:v?Wn:void 0,onDataChangeRequest:v?s=>{setTimeout(()=>{if(console.log("onDataChangeRequest => ",s),s.action==="Add"&&(!("result"in l)&&Array.isArray(l)?l.unshift(s.data):fa.unshift(s.data)),s.action==="Edit"){if(!("result"in l)&&Array.isArray(l)){for(var p=0;p<l.length;p++)if(l[p].OrderID==s.data.OrderID){l[p]=s.data;break}}else for(var p=0;p<fa.length;p++)if(fa[p].OrderID==s.data.OrderID){fa[p]=s.data;break}}if(s.action=="Delete"){if(!("result"in l)&&Array.isArray(l)){for(var h=0;h<s.data.length;h++)for(var p=0;p<l.length;p++)if(l[p].OrderID==s.data[h].OrderID){l.splice(p,1);break}}else for(var h=0;h<s.data.length;h++)for(var p=0;p<fa.length;p++)if(fa[p].OrderID==s.data[h].OrderID){fa.splice(p,1);break}}s.saveDataChanges()},0)}:void 0,onDataLoad:()=>{if(E){P.current=performance.now(),N.current=parseInt((P.current-re.current).toFixed(0));const s=document.getElementById("performanceTime");s&&(s.innerHTML=`Time Taken for Initial Load: <b>${N.current}ms</b>`),re.current=0,P.current=0,N.current=0}},onRowSelect:s=>{console.log("RowSelected row",s)},onRowDeselect:s=>{console.log("RowDeSelected row",s)},onCellSelecting:s=>{console.log("cellSelecting ",s)},onCellSelect:s=>{console.log("cellSelect ",s)},onCellDeselecting:s=>{console.log("cellDeselecting ",s)},onCellDeselect:s=>{console.log("cellDeselect ",s)},onRowEditStart:s=>{console.log("BeginEdit triggered:",s)},onPinnedRowsChanged:s=>{console.log("PinnedRowsChanged triggered:",s)},onToolbarItemClick:zl,onMouseUp:s=>{var G,D;const p=s.target,h=(G=f.current)==null?void 0:G.getRowInfo(p);Z&&h.cell&&!h.cell.closest("form")&&p.closest(".sf-grid")===((D=f.current)==null?void 0:D.element)&&requestAnimationFrame(()=>{var L,B,I,ae,ye;(I=(B=(L=f.current)==null?void 0:L.getSelectedRowIndexes)==null?void 0:B.call(L))!=null&&I.length||(ae=f.current)==null||ae.selectRow(h.rowIndex),(ye=f.current)==null||ye.editRecord()})},aggregates:e?void 0:t,columns:e?void 0:Ua,children:[e,!e&&Ne&&o.jsxs(or,{children:[o.jsxs(lt,{children:[o.jsx(aa,{field:"Freight",type:["Sum","Custom"],customAggregate:la,footerTemplate:_e,format:{format:"C2"}}),o.jsx(aa,{field:"Salary",type:"Max",footerTemplate:Ke,format:{format:"C2"}}),o.jsx(aa,{field:"Cost",type:"Min",footerTemplate:wa,format:{format:"C2"}}),o.jsx(aa,{field:"ShipCountry",type:"Count",footerTemplate:we})]}),o.jsxs(lt,{children:[o.jsx(aa,{field:"Freight",type:"Average",footerTemplate:Oa,format:{format:"C2"},cellClass:Un}),o.jsx(aa,{field:"Salary",type:"Count",format:"C2"}),o.jsx(aa,{field:"Cost",type:"Sum",footerTemplate:oa,format:{format:"C2"}}),o.jsx(aa,{field:"ShipCountry",type:"Custom",customAggregate:la,footerTemplate:ya})]})]}),!e&&K&&o.jsxs(or,{children:[o.jsx(lt,{children:o.jsx(aa,{field:"Freight",type:"Sum",format:{format:"C2"},footerTemplate:oa})}),o.jsx(lt,{children:o.jsx(aa,{field:"ShipCountry",type:"Count",footerTemplate:we})})]})]})});return o.jsxs("div",{style:{height:n,isolation:"isolate"},className:Be?"dark sf-dark-mode":"",children:[Fe&&o.jsx("div",{style:{marginBottom:16},children:o.jsxs("div",{style:{marginBottom:8,display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[o.jsx("label",{style:{fontWeight:600},children:"Export Range:"}),["All","CurrentPage","Custom"].map(s=>o.jsxs("label",{style:{cursor:"pointer"},children:[o.jsx("input",{type:"radio",name:"exportRange",value:s,checked:ra===s,onChange:()=>Ta(s),style:{marginRight:4}}),s==="Custom"?"Custom (rows 1–5)":s]},s)),ka&&o.jsx("span",{style:{color:"#1976d2",fontWeight:500},children:"Exporting…"})]})}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx(x,{onClick:()=>T(!0),className:"e-primary",style:{marginRight:"10px"},children:"Render Grid"}),o.jsx(x,{onClick:()=>T(!1),className:"e-primary",style:{marginRight:"10px"},children:"Destroy Grid"}),o.jsx(x,{onClick:ee,className:"e-primary",style:{marginRight:"10px"},children:pa?"Hide Spinner":"Show Spinner"}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.findClearActive())},className:"e-primary",style:{marginRight:"10px"},children:"Clear Active Find"}),((jn=M.filterSettings)==null?void 0:jn.enabled)&&(((qn=M.modules)==null?void 0:qn.GridAllModules)||((Zn=M.modules)==null?void 0:Zn.FilterModule))&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.filterByColumn("CustomerID","startsWith","An")},className:"e-primary",style:{marginRight:"10px"},children:"Filter"}),o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.clearFilter([])},className:"e-primary",style:{marginRight:"10px"},children:"Clear"})]}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.getRowsObject())},className:"e-primary",style:{marginRight:"10px"},children:"getRowsObject"}),o.jsx(x,{onClick:()=>console.log("Get Selected Records => ",f.current.getSelectedRecords()),className:"e-primary",style:{marginRight:"10px"},children:"Get Selected Records"}),sn&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:Vl,className:"e-primary",style:{marginRight:"10px"},children:"Programmatic Copy"}),Hl&&o.jsx(x,{onClick:Ol,className:"e-primary",style:{marginRight:"10px"},children:"Programmatic Cut"}),Ll&&o.jsx(x,{onClick:Ul,className:"e-primary",style:{marginRight:"10px"},children:"Programmatic Paste"})]}),Hn.current&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{var s;if((s=f.current)!=null&&s.currentViewData&&f.current.currentViewData.length>0){const p=[...f.current.currentViewData];p[0]={...p[0],ShipCountry:`Updated Country ${Math.random()<.5?"A":"B"}`,Freight:Math.round(Math.random()*1e3)/100,ShipName:`Updated Ship ${Math.random()<.5?"A":"B"}`,IsActive:Math.random()>.5},f.current.setRowData(p[0].OrderID,p[0]),console.log("setRowData method called with updated data, if we perform data actions updated data will remove")}},className:"e-primary",style:{marginRight:"10px"},children:"Test setRowData"}),o.jsx(x,{onClick:()=>{var s;if((s=f.current)!=null&&s.currentViewData&&f.current.currentViewData.length>0){const p=[...f.current.currentViewData];p[0]={...p[0],ShipCountry:`Updated Country ${Math.random()<.5?"A":"B"}`,Freight:Math.round(Math.random()*1e3)/100,ShipName:`Updated Ship ${Math.random()<.5?"A":"B"}`,IsActive:Math.random()>.5},f.current.setCellValue(p[0].OrderID,"Freight",p[0].Freight),console.log("setCellValue method called with updated data, if we perform data actions updated data will remove")}},className:"e-primary",style:{marginRight:"10px"},children:"Test setCellValue"}),o.jsx(x,{onClick:()=>{var s;if((s=f.current)!=null&&s.currentViewData&&f.current.currentViewData.length>0){const p=[...f.current.currentViewData];p[0]={...p[0],ShipCountry:`Updated Country ${Math.random()<.5?"A":"B"}`,Freight:Math.round(Math.random()*1e3)/100,ShipName:`Updated Ship ${Math.random()<.5?"A":"B"}`,IsActive:Math.random()>.5},f.current.setRowData(p[0].OrderID,p[0],!0),console.log("setRowData method called with updated data, if we perform data actions updated data will not remove")}},className:"e-primary",style:{marginRight:"10px"},children:"Test setRowData with Data Update"}),o.jsx(x,{onClick:()=>{var s;if((s=f.current)!=null&&s.currentViewData&&f.current.currentViewData.length>0){const p=[...f.current.currentViewData];p[0]={...p[0],ShipCountry:`Updated Country ${Math.random()<.5?"A":"B"}`,Freight:Math.round(Math.random()*1e3)/100,ShipName:`Updated Ship ${Math.random()<.5?"A":"B"}`,IsActive:Math.random()>.5},f.current.setCellValue(p[0].OrderID,"Freight",p[0].Freight,!0),console.log("setCellValue method called with updated data, if we perform data actions updated data will not remove")}},className:"e-primary",style:{marginRight:"10px"},children:"Test setCellValue with Data Update"})]}),tt.allowEdit&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.editRecord()},className:"e-primary",style:{marginRight:"10px"},children:"Start Edit"}),o.jsx(x,{onClick:()=>{var p;const s=[...f.current.currentViewData];s[1]={...s[1],ShipCountry:`Updated Country ${Math.random()<.5?"A":"B"}`,Freight:Math.round(Math.random()*1e3)/100,ShipName:`Updated Ship ${Math.random()<.5?"A":"B"}`,IsActive:Math.random()>.5},(p=f.current)==null||p.updateRecord(1,s[1])},className:"e-primary",style:{marginRight:"10px"},children:"Test updateRecord"})]}),tt.allowAdd&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.addRecord()},className:"e-primary",style:{marginRight:"10px"},children:"Add Record"}),o.jsx(x,{onClick:()=>{var G,D,L,B;const s=(L=(D=(G=f.current)==null?void 0:G.dataSource)==null?void 0:D.dataSource)==null?void 0:L.json,p={...s==null?void 0:s[s.length-1]},h={...p,OrderID:p.OrderID+1,IsActive:Math.random()>.5,Freight:Math.round(Math.random()*1e3)/100,Salary:Math.round(Math.random()*1e3)/100,Cost:Math.round(Math.random()*1e3)/100,OrderDate:new Date(Date.now()-Math.random()*365*24*60*60*1e3)};(B=f.current)==null||B.addRecord(h,1)},className:"e-primary",style:{marginRight:"10px"},children:"Test addRecord"})]}),tt.allowDelete&&o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.deleteRecord()},className:"e-primary",style:{marginRight:"10px"},children:"Delete Record"}),(($n=f.current)==null?void 0:$n.isEdit)&&o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.cancelDataChanges()},className:"e-primary",style:{marginRight:"10px"},children:"Cancel Edit"}),o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.selectRowByRange(2,4)},className:"e-primary",style:{marginRight:"10px"},children:"Select Row Range"}),o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.selectRow(2,!0)},className:"e-primary",style:{marginRight:"10px"},children:"Select Row with Toggle"}),o.jsx(x,{onClick:()=>{var s;return(s=f.current)==null?void 0:s.refresh()},className:"e-primary",style:{marginRight:"10px"},children:"Refresh"}),o.jsx(x,{onClick:()=>console.log("GridRef => ",f),className:"e-primary",style:{marginRight:"10px"},children:"Get GridRef"}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.getRows())},className:"e-primary",style:{marginRight:"10px"},children:"getRows"}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.getRowByIndex(2))},className:"e-primary",style:{marginRight:"10px"},children:"getRowByIndex"}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.getRowObjectFromUID("grid-row-20005"))},className:"e-primary",style:{marginRight:"10px"},children:"getRowObjectFromUID"}),o.jsx(x,{onClick:()=>{var s;return console.log((s=f.current)==null?void 0:s.cachedRowObjects)},className:"e-primary",style:{marginRight:"10px"},children:"cachedRowObjects"}),_a.current&&o.jsx(x,{onClick:()=>console.log("Get Selected Records => ",f.current.getSelectedRecords()),className:"e-primary",style:{marginRight:"10px"},children:"Get Selected Records"}),_a.current&&o.jsx(x,{onClick:()=>{var s,p;return(p=(s=f.current)==null?void 0:s.selectionModule)==null?void 0:p.selectRows([0,11])},className:"e-primary",style:{marginRight:"10px"},children:"Selected Rows"}),_a.current&&o.jsx(x,{onClick:()=>{var s;return(s=f.current.selectionModule)==null?void 0:s.selectRowByRange(0,11)},className:"e-primary",style:{marginRight:"10px"},children:"Selected Rows By Range"}),_a.current&&o.jsx(x,{onClick:()=>f.current.refresh(),className:"e-primary",style:{marginRight:"10px"},children:"Refresh"}),_a.current&&o.jsx(x,{onClick:()=>f.current.clearSelection(),className:"e-primary",style:{marginRight:"10px"},children:"Clear Selection"}),((Xn=M.selectionSettings)==null?void 0:Xn.type)==="Cell"&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{var p,h,G;const s=(p=f.current)==null?void 0:p.currentViewData;s&&s.length>=3&&((G=(h=f.current)==null?void 0:h.cellSelectionModule)==null||G.selectCell(s[2].OrderID,"CustomerID"))},className:"e-primary",style:{marginRight:"10px"},children:"Select Cell (Row 2, CustomerID)"}),o.jsx(x,{onClick:()=>{var p,h,G;const s=(p=f.current)==null?void 0:p.currentViewData;s&&s.length>=2&&((G=(h=f.current)==null?void 0:h.cellSelectionModule)==null||G.selectCellsByRange({rowKey:s[0].OrderID,fieldName:"CustomerID"},{rowKey:s[4].OrderID,fieldName:"Freight"}))},className:"e-primary",style:{marginRight:"10px"},children:"Select Range"}),o.jsx(x,{onClick:()=>{var s,p;return(p=(s=f.current)==null?void 0:s.cellSelectionModule)==null?void 0:p.clearCellSelection()},className:"e-primary",style:{marginRight:"10px"},children:"Clear All Cells"}),o.jsx(x,{onClick:()=>{var p,h,G;const s=(p=f.current)==null?void 0:p.currentViewData;s&&s.length>=2&&((G=(h=f.current)==null?void 0:h.cellSelectionModule)==null||G.clearCellSelection([{rowKey:s[0].OrderID,fieldNames:["CustomerID","Freight"]},{rowKey:s[1].OrderID,fieldNames:["ShipCountry"]}]),console.log("Cleared specific cells"))},className:"e-primary",style:{marginRight:"10px"},children:"Clear Specific Cells"}),o.jsx(x,{onClick:()=>{var s;return console.log("Selected Cells:",(s=f.current)==null?void 0:s.getSelectedCellsData())},className:"e-primary",style:{marginRight:"10px"},children:"Get Selected Cells"})]}),J&&o.jsxs(o.Fragment,{children:[o.jsx(x,{onClick:()=>{f.current.showContextMenu({target:f.current.getHeaderTable().rows[0].cells[1]})},className:"e-primary",children:"Header Menu"}),o.jsx(x,{onClick:()=>{f.current.showContextMenu({target:f.current.getRowByIndex(2).querySelectorAll("td")[2]})},className:"e-primary",children:"Content Menu"}),o.jsx(x,{onClick:()=>{f.current.showContextMenu({target:f.current.getContentTable().querySelector(".sf-grid-edit-form")})},className:"e-primary",children:"Edit Form Menu"}),o.jsx(x,{onClick:()=>{f.current.showContextMenu({target:f.current.pagerRef.element})},className:"e-primary",children:"Pager Menu"})]}),(at==null?void 0:at.enabled)&&o.jsx(x,{onClick:()=>{var s;(s=f.current)==null||s.autoFitColumns([{field:"OrderID",autoFit:ir.All},{field:"OrderDate",autoFit:ir.All}])},children:"Auto Fit Columns"}),(xa==null?void 0:xa.enabled)&&o.jsx(x,{onClick:()=>{var s;(s=f.current)==null||s.reorderColumnByIndex(1,3)},children:"reorderColumnByIndex(1, 3)"}),(xa==null?void 0:xa.enabled)&&o.jsx(x,{onClick:()=>{var s;(s=f.current)==null||s.reorderColumns(["OrderID","CustomerID"],3)},children:"Reorder Columns"})]}),o.jsx("br",{}),ia&&o.jsxs(o.Fragment,{children:[v&&o.jsxs("p",{"aria-live":"polite",style:{margin:"0 0 10px"},children:["onDataRequest calls: ",Ra]}),E&&o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[o.jsx("h4",{style:{margin:0},children:"Performance Metrics"}),o.jsx("p",{id:"performanceTime",style:{margin:0}})]}),i?i(He?o.jsx(y.StrictMode,{children:nt()}):nt()):He?o.jsx(y.StrictMode,{children:nt()}):nt()]}),o.jsxs(o.Fragment,{children:[o.jsx("br",{}),o.jsx("button",{children:"dummy focus navigate"})]})]})};try{ma.displayName="GridBaseTest",ma.__docgenInfo={description:"",displayName:"GridBaseTest",props:{parentContainerHeight:{defaultValue:{value:"97vh"},description:"",name:"parentContainerHeight",required:!1,type:{name:"Height<string | number>"}},gridContentWrapper:{defaultValue:null,description:"",name:"gridContentWrapper",required:!1,type:{name:"(content: ReactNode) => ReactNode"}},dataSource:{defaultValue:null,description:`Supplies the data to be displayed in the grid.

The data source can be provided as:
* An array of JavaScript objects
* A \`DataManager\` instance for local/remote data operations
* A \`DataResponse\` object with processed data

The grid will automatically bind to this data and render rows based on the provided records.`,name:"dataSource",required:!1,type:{name:"DataManager | DataResult | DynamicDataItem[]"}},displayAsCheckbox:{defaultValue:{value:"true"},description:"",name:"displayAsCheckbox",required:!1,type:{name:"boolean"}},isSingleClickEdit:{defaultValue:{value:"false"},description:"",name:"isSingleClickEdit",required:!1,type:{name:"boolean"}},distinctShipCountryDataSource:{defaultValue:{value:"dataSource instanceof Array ? [...dataSource as DynamicDataItem[]] : dataSource"},description:"",name:"distinctShipCountryDataSource",required:!1,type:{name:"Object[]"}},cascadingData:{defaultValue:{value:"dataSource instanceof Array ? [...dataSource as DynamicDataItem[]] : dataSource"},description:"",name:"cascadingData",required:!1,type:{name:"DynamicDataItem[]"}},showPerformanceMetrics:{defaultValue:null,description:"",name:"showPerformanceMetrics",required:!0,type:{name:"boolean"}},initialShowSpinner:{defaultValue:{value:"false"},description:"",name:"initialShowSpinner",required:!1,type:{name:"boolean"}},showAggregates:{defaultValue:{value:"false"},description:"",name:"showAggregates",required:!1,type:{name:"boolean"}},customBindingAggregates:{defaultValue:{value:"false"},description:"",name:"customBindingAggregates",required:!1,type:{name:"boolean"}},isCustomBinding:{defaultValue:{value:"false"},description:"",name:"isCustomBinding",required:!1,type:{name:"boolean"}},isPreventAutoHeight:{defaultValue:{value:"false"},description:"",name:"isPreventAutoHeight",required:!1,type:{name:"boolean"}},enableContextMenu:{defaultValue:{value:"false"},description:"",name:"enableContextMenu",required:!1,type:{name:"boolean"}},pdfOrientation:{defaultValue:{value:"Portrait"},description:"",name:"pdfOrientation",required:!1,type:{name:"enum",value:[{value:'"Portrait"'},{value:'"Landscape"'}]}},pdfPageSize:{defaultValue:{value:"A4"},description:"",name:"pdfPageSize",required:!1,type:{name:"enum",value:[{value:'"A4"'},{value:'"A3"'},{value:'"A5"'},{value:'"Letter"'},{value:'"Legal"'},{value:'"Tabloid"'}]}},pdfRange:{defaultValue:{value:"All"},description:"",name:"pdfRange",required:!1,type:{name:"enum",value:[{value:'"All"'},{value:'"CurrentPage"'},{value:'"Custom"'}]}},useCustomColumnWidths:{defaultValue:{value:"false"},description:"",name:"useCustomColumnWidths",required:!1,type:{name:"boolean"}},enableExcelExportDemo:{defaultValue:{value:"false"},description:"",name:"enableExcelExportDemo",required:!1,type:{name:"boolean"}},builtInThemes:{defaultValue:{value:"material"},description:"",name:"builtInThemes",required:!1,type:{name:"enum",value:[{value:'"bootstrap"'},{value:'"tailwind"'},{value:'"material"'}]}},enableDarkMode:{defaultValue:{value:"false"},description:"",name:"enableDarkMode",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:{value:"false"},description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},onUndoStart:{defaultValue:null,description:`Fires before a Grid-level undo request is applied.
@event onUndoStart`,name:"onUndoStart",required:!1,type:{name:"(event: UndoStartEvent) => void"}},onUndoComplete:{defaultValue:null,description:`Fires after a Grid-level undo request completes.
@event onUndoComplete`,name:"onUndoComplete",required:!1,type:{name:"(event: UndoCompleteEvent) => void"}},onRedoStart:{defaultValue:null,description:`Fires before a Grid-level redo request is applied.
@event onRedoStart`,name:"onRedoStart",required:!1,type:{name:"(event: RedoStartEvent) => void"}},onRedoComplete:{defaultValue:null,description:`Fires after a Grid-level redo request completes.
@event onRedoComplete`,name:"onRedoComplete",required:!1,type:{name:"(event: RedoCompleteEvent) => void"}},sideBar:{defaultValue:{value:"undefined"},description:"Configures the optional grid sidebar and its tool panels.",name:"sideBar",required:!1,type:{name:"SideBar<unknown>"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
Provides a distinct ID for the grid instance, enabling targeted interactions, styling, or accessibility features.
Used to differentiate multiple grid instances within the same application or DOM.
@example \`\`\`tsx
<Grid
  id="employee-grid"
  dataSource={employees}
  columns={columns}
/>
\`\`\``,name:"id",required:!1,type:{name:"string"}},isChildrenGrid:{defaultValue:{value:"false"},description:`Indicates whether the grid is a child grid within a master-detail relationship.
When true, the grid is treated as a detail grid and may inherit certain behaviors or styles from its parent.
@private
@example \`\`\`tsx
<Grid
  isChildrenGrid={true}
  dataSource={detailData}
  columns={detailColumns}
/>
\`\`\``,name:"isChildrenGrid",required:!1,type:{name:"boolean"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

An array of ColumnProps objects that specify how each column in the grid should be configured.
This includes properties like \`field\`, \`headerText\`, \`width\`, \`format\`, and more.
The order of columns in the array determines their display order in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={[
    { field: 'id', headerText: 'ID', width: 100, textAlign: 'Right' },
    { field: 'name', headerText: 'Employee Name', width: 200 },
    { field: 'role', headerText: 'Role', width: 150 },
    {
      field: 'salary',
      headerText: 'Salary',
      width: 150,
      format: 'C2',
      textAlign: 'Right'
    }
  ]}
/>
\`\`\``,name:"columns",required:!1,type:{name:"ColumnProps<unknown>[]"}},height:{defaultValue:{value:"'auto'"},description:`Sets the height of the grid component.

Controls the vertical size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '500px', '100%').
* \`auto\` to adjust to content.

When a fixed height is set, scrollbars appear automatically when content exceeds the height.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
/>
\`\`\``,name:"height",required:!1,type:{name:"string | number"}},defaultExpandedRows:{defaultValue:{value:"[]"},description:`Specifies row indices that should be expanded by default when the grid loads.
Applies only when the master-detail feature enabled using \`isMasterDetail={true}\` in the grid props.
Rows at these indices automatically display their detail templates on initial render.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  isMasterDetail={true}
  defaultExpandedRows={[2, 4]}
  detailRowTemplate={(params) => (
    <div>Detail content for row {params.rowIndex}</div>
  )}
/>
\`\`\``,name:"defaultExpandedRows",required:!1,type:{name:"number[]"}},width:{defaultValue:{value:"'auto'"},description:`Sets the width of the grid component.

Controls the horizontal size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '800px', '100%').
* \`auto\` to adjust to parent container.

When a fixed width is set, horizontal scrollbars appear automatically when content exceeds the width.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  width={900}
/>
\`\`\``,name:"width",required:!1,type:{name:"string | number"}},gridLines:{defaultValue:{value:"'Default'"},description:'Configures the visibility of grid lines between cells.\n\nDetermines which grid lines are displayed in the grid. Available options are:\n* `Default`: Shows horizontal lines only.\n* `None`: Displays no grid lines.\n* `Both`: Shows both horizontal and vertical grid lines.\n* `Horizontal`: Shows horizontal lines only.\n* `Vertical`: Shows vertical lines only.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  gridLines="Both"\n/>\n```',name:"gridLines",required:!1,type:{name:"string"}},enableAutoSpan:{defaultValue:{value:"false"},description:"Enables automatic row and column span behavior for grid cells.\nWhen set to true, adjacent cells with matching values automatically merge using both row and column spanning.\nWhen set to false, automatic spanning is disabled and only explicit numeric span values are applied.\nCells must have `rowSpan={true}` or `colSpan={true}` to participate in automatic spanning.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  enableAutoSpan={true}\n/>\n```",name:"enableAutoSpan",required:!1,type:{name:"boolean"}},enableHover:{defaultValue:{value:"true"},description:`Controls whether hover effect is applied to grid rows.

By default, rows are visually highlighted on pointer hover.
When set to false, rows retain a static appearance regardless of pointer hover movement.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHover={true}
/>
\`\`\``,name:"enableHover",required:!1,type:{name:"boolean"}},enableDevMode:{defaultValue:{value:"true"},description:`Enables development-specific diagnostics for the grid component.
When set to true, the grid outputs additional console warnings, validation messages,
and debugging information to assist in identifying configuration issues and improving integration.
When set to false, these development diagnostics are suppressed to reduce console noise
and minimize runtime overhead.
This is a non-reactive property and applies only during initial render.
@example \`\`\`tsx
const isDev: boolean = process.env.NODE_ENV === 'development';
<Grid
  dataSource={data}
  columns={columns}
  enableDevMode={isDev ? true : false}
/>
\`\`\``,name:"enableDevMode",required:!1,type:{name:"boolean"}},rowNumberSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures the display of sequential row numbers in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  rowNumberSettings={{ enabled: true }}
/>
\`\`\``,name:"rowNumberSettings",required:!1,type:{name:"RowNumberSettings"}},allowKeyboard:{defaultValue:{value:"true"},description:`Controls whether keyboard navigation is enabled for the Data Grid.

By default, navigation and interaction with grid elements can be performed using keyboard shortcuts and arrow keys.
When set to false, the grid's default focus navigation behavior is disabled.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  allowKeyboard={true}
/>
\`\`\``,name:"allowKeyboard",required:!1,type:{name:"boolean"}},enableCellTextSelection:{defaultValue:{value:"false"},description:`Controls whether native browser text selection is allowed inside grid cells.

By default, text selection inside grid content cells, header cells, summary cells,
and group caption cells is disabled by applying the \`sf-disableuserselect\` utility class.
When set to true, that class is not applied, allowing users to select and copy
partial text directly from grid cells.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableCellTextSelection={true}
/>
\`\`\``,name:"enableCellTextSelection",required:!1,type:{name:"boolean"}},clipMode:{defaultValue:{value:"ClipMode.Ellipsis | 'Ellipsis'"},description:"Defines the cell content's overflow mode. The available modes are:\n* `Clip` -  Truncates the cell content when it overflows its area.\n* `Ellipsis` -  Displays ellipsis when the cell content overflows its area.\n* `EllipsisWithTooltip` - Applies an ellipsis to overflowing cell content and displays a tooltip on hover for enhanced readability.",name:"clipMode",required:!1,type:{name:"string"}},enableGridChart:{defaultValue:{value:"false"},description:"Enables chart options in the context menu.",name:"enableGridChart",required:!1,type:{name:"boolean"}},autoFit:{defaultValue:{value:"null"},description:"Defines the default auto-fit scope applied to columns that omit a per-column `autoFit` value.\nDetermines which cells the auto-fit measurement considers: `AutoFitMode.Header` (header only), `AutoFitMode.Content` (content only), or `AutoFitMode.All` (widest of both).\n@example ```tsx\n<Grid autoFit={AutoFitMode.All} />\n```",name:"autoFit",required:!1,type:{name:"enum",value:[{value:'"All"'},{value:'"Header"'},{value:'"Content"'}]}},enableAltRow:{defaultValue:{value:"true"},description:`Determines whether the \`sf-alt-row\` CSS class is added to alternate rows in the Data Grid.

When set to true, the grid adds the \`sf-alt-row\` class to alternate row elements.
This supports alternating row styles, which can improve readability in data-dense layouts.
The grid does not apply any default styling for this class. Styling must be defined externally.

When set to false, the grid does not add the \`sf-alt-row\` class to any row.
@example \`\`\`tsx
<GridComponent
  dataSource={employees}
  columns={columns}
  enableAltRow={true}
/>

// External CSS
.sf-alt-row {
  background-color: #f5f5f5;
}
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},dragAndDropSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures row drag-and-drop between grid instances.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  dragAndDropSettings={{
    enabled: true,
    targetID: 'destination-grid'
  }}
/>
\`\`\``,name:"dragAndDropSettings",required:!1,type:{name:"DragAndDropSettings"}},enableRtl:{defaultValue:{value:"false"},description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.
@private
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableRtl={true}
/>
\`\`\``,name:"enableRtl",required:!1,type:{name:"boolean"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: false }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
Used to customize the selection experience for user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  selectionSettings={{
    enabled: true,
    type: 'Row',
    mode: 'Multiple'
  }}
/>
\`\`\``,name:"selectionSettings",required:!1,type:{name:"SelectionSettings"}},autoFillSettings:{defaultValue:{value:"undefined"},description:`Enables cell fill (autofill) behavior when selection and editing are active.
Allows dragging selected cells to fill adjacent cells with repeated or sequential values.
@example \`\`\`tsx
<Grid
  dataSource={data}
  columns={columns}
  editSettings={{ allowEdit: true }}
  selectionSettings={{ type: 'Cell' }}
  autoFillSettings={{ isEnabled: true }}
/>
\`\`\``,name:"autoFillSettings",required:!1,type:{name:"AutoFillSettings"}},onCellFillStart:{defaultValue:null,description:`Fires when a cell fill operation begins.
@event onCellFillStart
@param args - Fill start event arguments
@returns`,name:"onCellFillStart",required:!1,type:{name:"(args: CellFillStartedEvent) => void"}},onCellFillComplete:{defaultValue:null,description:`Fires when a cell fill operation completes.
@event onCellFillComplete
@param args - Fill complete event arguments
@returns`,name:"onCellFillComplete",required:!1,type:{name:"(args: CellFillCompletedEvent<unknown>) => void"}},clipboardSettings:{defaultValue:{value:"{ enabled: true }"},description:`Configures clipboard copy and paste functionality for the grid.
Enables or disables copy/paste operations on selected cells or rows.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  clipboardSettings={{ enabled: true }}
/>
\`\`\``,name:"clipboardSettings",required:!1,type:{name:"ClipboardSettings"}},modules:{defaultValue:{value:"{}"},description:`Defines the feature modules to be injected into the Grid.
Injecting modules enables optional functionality and improves tree-shaking by
including only the required features in the application bundle.

To enable clipboard operations such as copy, paste, cut, and copy with headers,
inject the \`ClipboardModule\`.
@example \`\`\`tsx
import { Grid, ClipboardModule } from '@syncfusion/react-grid';

<Grid
  dataSource={employees}
  columns={columns}
  modules={{ ClipboardModule }}
/>
\`\`\``,name:"modules",required:!1,type:{name:"GridModules<unknown>"}},statusBarSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures the optional status bar feature for displaying summary information.
The status bar displays row counts, selection metrics, and custom panels.
When enabled, the status bar is rendered between the aggregate footer and pager.
The feature is disabled by default and requires the \`StatusBarModule\` to be injected through \`modules\`.
@example \`\`\`tsx
import { Grid, StatusBarModule } from '@syncfusion/react-grid';

<Grid
  dataSource={employees}
  columns={columns}
  modules={{ StatusBarModule }}
  statusBarSettings={{
    enabled: true,
    items: [
      { type: 'TotalAndFilteredRowCount', position: 'Left' },
      { type: 'SelectedRowCount', position: 'Center' },
      { type: 'SelectionAggregates', position: 'Right' }
    ]
  }}
/>
\`\`\``,name:"statusBarSettings",required:!1,type:{name:"StatusBarSettings<unknown>"}},formulaSettings:{defaultValue:{value:"{ enabled: false }"},description:"Configures spreadsheet-style formula processing for explicitly enabled columns.",name:"formulaSettings",required:!1,type:{name:"FormulaSettings"}},isRowSelectable:{defaultValue:null,description:`Callback to determine whether a row is selectable and how its checkbox renders.
@template T - Row data type
@param rowData - The data object for the row being evaluated
@returns true (row selectable) or false (row non-selectable with disabled checkbox shown),
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  isRowSelectable={(row) => row.status !== 'Rejected'}
/>
\`\`\``,name:"isRowSelectable",required:!1,type:{name:"IsRowSelectable<unknown>"}},sortSettings:{defaultValue:{value:"{ columns: [], allowUnsort: true, enabled: false, mode: 'Multiple' }"},description:`Specifies the sorting configuration for the grid, includes options to enable/disable sorting and controlling how data is ordered.
Used to customize sorting behavior for data presentation and user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  sortSettings={{
    enabled: true,
    columns: [
      { field: 'salary', direction: 'Descending' },
      { field: 'name', direction: 'Ascending' }
    ],
    allowUnsort: true
  }}
/>
\`\`\``,name:"sortSettings",required:!1,type:{name:"SortSettings"}},groupSettings:{defaultValue:{value:"{ enabled: false, columns: [], defaultExpanded: false, captionFormat: 'compact', showDropArea: false, showGroupedColumn: false, showUngroupButton: false }"},description:`Specifies the grouping configuration for the grid, enabling hierarchical data organization by column values.
Controls group expansion, drag-drop UI, caption formatting, and visibility of grouped columns.
Used to organize data into collapsible groups for improved readability and analysis.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  groupSettings={{
    enabled: true,
    columns: ['ShipCountry', 'CustomerID'],
    defaultExpanded: true,
    showDropArea: true,
    captionFormat: 'verbose'
  }}
/>
\`\`\``,name:"groupSettings",required:!1,type:{name:"GroupSettings"}},isTreeMode:{defaultValue:{value:"false"},description:`Enable tree mode for hierarchical data display.
When enabled, uses individual tree props for configuration instead of treeDataSettings object.
Provides a simplified root-level API for tree grid functionality.
@example \`\`\`tsx
<Grid
  dataSource={employeeData}
  isTreeMode={true}
  treeColumnIndex={1}
  treeDataIdMapping="id"
  treeDataParentIdField="managerId"
/>
\`\`\``,name:"isTreeMode",required:!1,type:{name:"boolean"}},treeColumnIndex:{defaultValue:{value:"0"},description:"Column index where tree expand/collapse UI should render.\nSpecifies which column displays the expand/collapse buttons and indentation.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeColumnIndex={1} />\n```",name:"treeColumnIndex",required:!1,type:{name:"number"}},treeDataChildrenField:{defaultValue:{value:"null"},description:'Field name containing children array for nested tree data mode.\nExpects an array field at the specified field name containing child objects.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataChildrenField="teams" />\n```',name:"treeDataChildrenField",required:!1,type:{name:"string"}},treeDataIdMapping:{defaultValue:{value:"null"},description:'Unique identifier field name for parent ID tree mode.\nUsed in conjunction with `treeDataParentIdField` to establish parent-child relationships.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataIdMapping="id" treeDataParentIdField="managerId" />\n```',name:"treeDataIdMapping",required:!1,type:{name:"string"}},treeDataParentIdField:{defaultValue:{value:"null"},description:'Parent identifier field name for parent ID tree mode.\nReferences the parent node using the value from `treeDataIdMapping` field.\nRoot nodes have null or undefined values in this field.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataIdMapping="id" treeDataParentIdField="managerId" />\n```',name:"treeDataParentIdField",required:!1,type:{name:"string"}},excludeChildrenWithFiltering:{defaultValue:{value:"false"},description:`Excludes child nodes from filtered tree results when a parent row matches the active filter.
Useful when filtering a tree should keep only matching parent rows and hide descendant rows unless they individually match.
Used when \`isTreeMode\` is enabled.
@example \`\`\`tsx
<Grid
  isTreeMode={true}
  treeDataChildrenField="children"
  excludeChildrenWithFiltering={true}
/>
\`\`\``,name:"excludeChildrenWithFiltering",required:!1,type:{name:"boolean"}},cascadeDelete:{defaultValue:{value:"true"},description:'Removes every descendant record together with a deleted parent record.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid\n  isTreeMode={true}\n  treeDataChildrenField="children"\n  cascadeDelete={false}\n/>\n```',name:"cascadeDelete",required:!1,type:{name:"boolean"}},filterSettings:{defaultValue:{value:"{ enabled: false, columns: [], type: 'FilterBar', mode: 'Immediate', immediateModeDelay: 1500, ignoreAccent: false, operators: null, caseSensitive: false }"},description:`Specifies the filtering configuration for the grid, controlling the filter UI and behavior.
Includes options to enable/disable filtering, set the filter UI type, define custom operators, and configure case or accent sensitivity.
Used to tailor the filtering experience to match application requirements and data types.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  filterSettings={{
    enabled: true,
    type: 'FilterBar',
    ignoreAccent: true,
    caseSensitive: false
  }}
/>
\`\`\``,name:"filterSettings",required:!1,type:{name:"FilterSettings"}},searchSettings:{defaultValue:{value:"{ enabled: false, fields: [], value: undefined, operator: 'contains', caseSensitive: true, ignoreAccent: false }"},description:`Specifies the search configuration for the grid, controlling how data is searched.
Defines settings for enabling the search bar, specifying searchable fields, initial search terms, operators, and case/accent sensitivity.
Used to customize the search experience for filtering grid data.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  searchSettings={{
    enabled: true,
    fields: ['name', 'role'],
    caseSensitive: true,
    operator: 'contains',
    key: 'dev'
  }}
/>
\`\`\``,name:"searchSettings",required:!1,type:{name:"SearchSettings"}},findSettings:{defaultValue:{value:"{ enabled: true, caseSensitive: false, currentPageOnly: false, searchDetail: true }"},description:"Configures Find matching independently of row-filter Search.\nControls Find availability, case sensitivity, page scope, and detail-grid participation.\n@example ```tsx\n<Grid findSettings={{ enabled: false, caseSensitive: true, currentPageOnly: true }} />\n```",name:"findSettings",required:!1,type:{name:"FindSettings"}},resizeSettings:{defaultValue:{value:"{ enabled: false, mode: ResizeMode.Auto, throttle: 150, resizeKeyboardStep: 10 }"},description:"Configures the column resize feature at grid scope.\nControls the resize handle rendering, drag and keyboard resize interactions, distribution mode, keyboard step, and throttle interval.\n@example ```tsx\n<Grid resizeSettings={{ enabled: false, mode: ResizeMode.Normal }} />\n```",name:"resizeSettings",required:!1,type:{name:"ResizeSettings"}},reorderSettings:{defaultValue:{value:"{ enabled: false }"},description:"Configures the column reorder feature at grid scope.\n@example ```tsx\n<Grid reorderSettings={{ enabled: true }} />\n```",name:"reorderSettings",required:!1,type:{name:"ReorderSettings"}},pageSettings:{defaultValue:{value:"{ enabled: false, currentPage: 1, pageSize: 12, pageCount: 8 }"},description:`Specifies the pagination configuration for the grid, controlling how data is divided and navigated.
Includes options to enable/disable pagination, set the number of records per page, define the number of navigation links, and select the initial page.
Used to tailor the pagination UI and behavior for efficient data handling.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  pageSettings={{
    enabled: true,
    pageSize: 10,
    pageCount: 5,
  }}
/>
\`\`\``,name:"pageSettings",required:!1,type:{name:"PageSettings"}},enableHtmlSanitizer:{defaultValue:{value:"false"},description:`Controls HTML sanitization for grid content.

When set to true, the grid will sanitize any suspected untrusted HTML content before rendering it.
This helps prevent cross-site scripting (XSS) attacks by removing or neutralizing potentially malicious scripts and HTML.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHtmlSanitizer={true}
/>
\`\`\``,name:"enableHtmlSanitizer",required:!1,type:{name:"boolean"}},enableStickyHeader:{defaultValue:{value:"false"},description:`Makes the grid header remain visible during scrolling.

When enabled, column headers will "sticky" to the top of the viewport and remain visible even when the user scrolls down through the grid data.
This improves usability by keeping column headers in view at all times.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
  enableStickyHeader={true}
/>
\`\`\``,name:"enableStickyHeader",required:!1,type:{name:"boolean"}},textWrapSettings:{defaultValue:{value:"{ enabled: false, wrapMode: 'Both' }"},description:`Specifies the text wrapping configuration for the grid, controlling how text is displayed.
Defines the wrap mode to determine which grid sections (header, content, or both) apply text wrapping.
Used to customize text display for readability and layout optimization.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  textWrapSettings={{
    enabled: true,
    wrapMode: 'Content'
  }}
/>
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"null | 50"},description:"Specifies the height for all rows in the grid.\n\n* When a numeric value is provided, all rows will have a fixed height in pixels.\n* If `rowHeight` is `undefined` and row DOM virtualization is enabled, the height defaults to the `theme` property based value (e.g., `Theme.Material` = 50).\n* When `null` (default), row height is automatically calculated based on content and applied styles for grids without row DOM virtualization.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  rowHeight={40}\n/>\n```",name:"rowHeight",required:!1,type:{name:"number"}},adaptiveSettings:{defaultValue:{value:"undefined"},description:"Configures the adaptive behavior of the grid, such as enabling it and choosing the row rendering mode.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  adaptiveSettings={{ enabled: true, rowRenderingMode: RowRenderingMode.Vertical }}\n/>\n```",name:"adaptiveSettings",required:!1,type:{name:"AdaptiveSettings"}},getRowHeight:{defaultValue:null,description:`Gets the height of a specific row dynamically at runtime.
Accepts a callback function that returns the height in pixels based on row information, allowing row-specific height customization.
This property enables dynamic row sizing based on content, data values, or other custom logic.
@param props - Partial row information used to calculate the row height, including row index, data, and column configuration.
@returns number - Height of the row in pixels.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  getRowHeight={(props) => props.data?.OrderID === 10248 ? 60 : 40}
/>
\`\`\``,name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material"},description:`Specifies the theme configuration for the Data Grid component.
Used internally to determine default values for theme-dependent properties (e.g., row height in virtualization).

The theme property defines static default values and calculations used during grid initialization and rendering,
such as the default \`rowHeight\` value when row DOM virtualization is enabled.

Grid styling and visual appearance are controlled by importing the corresponding theme CSS files,
not by the \`theme\` property alone. The \`theme\` property must be coordinated with the appropriate CSS import.
@example \`\`\`tsx
// Import Material theme CSS for styling
import '@syncfusion/react-grids/styles/material.css';

// Specify theme for internal default calculations
<Grid theme={Theme.Material} />
\`\`\``,name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:`{\r
enabled: true,\r
type: VirtualDomType.Both,\r
viewPortBuffer: { rows: 5, columns: 5 },\r
scrollMode: ScrollMode.Auto,\r
preventMaxRenderedRows: false\r
}`},description:`Configures virtualization behavior for grid rendering.
Includes options for enabling virtualization, defining DOM type, and customizing buffer and scroll settings.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  virtualizationSettings={{
    enabled: true,
    type: VirtualDomType.Row,
    viewPortBuffer: { rows: 10, columns: 5 }
  }}
/>
\`\`\``,name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

Allows rendering of child elements within the grid component structure.
@private`,name:"children",required:!1,type:{name:"ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>> | ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>>[] | ReactNode"}},valueFormatterService:{defaultValue:null,description:`Service for value formatting
@private`,name:"valueFormatterService",required:!1,type:{name:"IValueFormatter"}},serviceLocator:{defaultValue:null,description:`Service locator for dependency injection
@private`,name:"serviceLocator",required:!1,type:{name:"ServiceLocator"}},localeObj:{defaultValue:null,description:`Localization object
@private`,name:"localeObj",required:!1,type:{name:"IL10n"}},locale:{defaultValue:{value:"'en-US'"},description:`Sets the localization language for the grid.

Determines the language used for all text in the grid interface, including built-in messages, button labels, and other UI text.
The grid must have the corresponding locale definitions loaded to use a specific locale.
@private`,name:"locale",required:!1,type:{name:"string"}},query:{defaultValue:{value:"new Query()"},description:`Defines a query to execute against the data source.

Allows you to apply a predefined \`Query\` object to the data source, which can include filtering, sorting, paging, and other data operations.
This is especially useful when working with remote data sources or when you need complex data operations.
@example \`\`\`tsx
import { Query } from '@company/data';

const GridExample: React.FC = () => {
  // Create a query to filter and sort data
  const query = new Query()
    .where('salary', 'greaterThan', 50000)
    .sortBy('name', 'ascending');

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      query={query}
    />
  );
};
\`\`\``,name:"query",required:!1,type:{name:"Query"}},emptyRecordTemplate:{defaultValue:{value:"null"},description:`Template for displaying content when the grid has no records.

Customizes what is displayed when the grid has no data to show. This can be provided as a string, React element, or a function that returns content.
It provides better user experience by explaining why the grid is empty or suggesting actions to take.
@example \`\`\`tsx
const GridExample: React.FC = () => {
  // Custom template as a React element
  const emptyTemplate = (
    <div className="empty-grid-message">
      <img src="/assets/empty-state.svg" alt="No data" />
      <h3>No employees found</h3>
      <p>Try adjusting your search or filters, or add a new employee.</p>
      <button className="btn btn-primary">Add Employee</button>
    </div>
  );

  return (
    <Grid
      dataSource={[]}
      columns={columns}
      emptyRecordTemplate={emptyTemplate}
    />
  );
};
\`\`\``,name:"emptyRecordTemplate",required:!1,type:{name:"string | ComponentType<void> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},rowTemplate:{defaultValue:{value:"null"},description:`Specifies a custom template for rendering rows in the grid.

Allows complete customization of row rendering by providing a template that replaces the default row structure.
This can be a string template, React element, or function that returns the row content.
@example \`\`\`tsx
const CustomRowTemplate = (props: Employee) => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="custom-row">
          <h4>{props.name}</h4>
          <p>Role: {props.role} | Salary: {props.salary}</p>
        </div>
      </td>
    </tr>
  );
};

<Grid
  dataSource={employees}
  columns={columns}
  rowTemplate={CustomRowTemplate}
/>
\`\`\``,name:"rowTemplate",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentType<unknown>"}},fullWidthRow:{defaultValue:{value:"null"},description:`Defines a callback that renders a content row as a Full Width Row spanning the entire grid width.
Return a ReactNode to render the row full-width; return null to use the default
column-based row rendering for that row. Evaluated only for content (body) rows with data.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  fullWidthRow={(args) =>
    (args.data as Order).IsSummary
      ? <OrderSummaryCard data={args.data as Order} />
      : null
  }
/>
\`\`\``,name:"fullWidthRow",required:!1,type:{name:"(args: FullWidthRowArgs<unknown>) => ReactNode"}},aggregates:{defaultValue:{value:"null"},description:`Configures summary rows with aggregate functions.

The aggregates property allows you to add summary rows to the grid, such as totals, averages, or counts.
Each aggregate row can contain multiple aggregations that apply functions like \`sum\`, \`average\`, \`min\`, \`max\`, or \`count\` to specific columns.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  aggregates={[
    {
      columns: [
        {
          field: 'salary',
          type: 'Sum',
          format: 'C2',
          footerTemplate: 'Total Salary: \${Sum}'
        },
        {
          field: 'id',
          type: 'Count',
          footerTemplate: 'Total Employees: \${Count}'
        }
      ]
    }
  ]}
/>
\`\`\``,name:"aggregates",required:!1,type:{name:"AggregateRowProps[]"}},editSettings:{defaultValue:{value:"{ allowAdd: false, allowEdit: false, allowDelete: false, mode: 'Normal', editOnDoubleClick: true, confirmOnEdit: true, confirmOnDelete: false, newRowPosition: 'Top' }"},description:`Configures the editing behavior of the Data Grid.

The editSettings property enables and controls editing functionality.
It defines which editing operations are permitted, such as adding, editing, and deleting rows,
and specifies the editing mode to be used.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true,
    mode: 'Inline',
    confirmOnDelete: true
  }}
/>
\`\`\``,name:"editSettings",required:!1,type:{name:"EditSettings<unknown>"}},isMasterDetail:{defaultValue:{value:"false"},description:`Enable master-detail (expandable rows) feature for this grid.
When enabled, all data rows become expandable master rows.
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailRowHeight={400}
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={getDetailData(params.row.id)}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"isMasterDetail",required:!1,type:{name:"boolean"}},detailRowHeight:{defaultValue:{value:"300"},description:'Defines the height of the detail row.\nBy default, the detail row height is set to "300px".\nA custom height can be applied when the master‑detail feature is enabled `isMasterDetail={true}` in the grid props.\n@example ```tsx\n<Grid isMasterDetail detailRowHeight={400} />\n```',name:"detailRowHeight",required:!1,type:{name:"number"}},detailRowTemplate:{defaultValue:null,description:`Template for rendering the content of a detail row.
Invoked for each expanded master row, providing its row data.
Commonly used to render a nested Grid or other custom components.
@example \`\`\`tsx
<Grid
  isMasterDetail
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={detailData[params.row.id]}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"detailRowTemplate",required:!1,type:{name:"{DetailRowTemplate<T>}"}},detailCellRendererParams:{defaultValue:{value:"undefined"},description:`Configuration and callbacks for auto-rendering nested detail grids.
Enables hierarchical data display with callback-driven data binding.
When provided with \`isMasterDetail={true}\`, automatically renders nested grids
for expanded rows based on the specified \`childDataPath\`.
@optional
@template T - The row data type
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailCellRendererParams={{
    detailGridOptions: {
      columns: childColumns,
      height: 250,
    },
    getDetailRowData: (params) => {
      // Provide child data via callback
      params.successCallback(params.data.orderLines);
    },
    onDetailGridCreate: (context) => {
      console.log(\`Detail grid created at depth \${context.nestingDepth}\`);
    },
  }}
  childDataPath="orderLines"
  maxNestingDepth={3}
/>
\`\`\`
@remarks - Requires \`isMasterDetail={true}\` to be enabled
- Works in conjunction with \`childDataPath\` and \`maxNestingDepth\` props
- Supports both synchronous and asynchronous data binding via callback
- Cannot be used simultaneously with \`detailRowTemplate\` (this takes precedence)`,name:"detailCellRendererParams",required:!1,type:{name:"DetailCellRendererParams<unknown, unknown>"}},childDataPath:{defaultValue:{value:"undefined"},description:'Path to child data in the parent row object.\nSpecifies which property contains the array of child rows for nested detail grids.\nUsed in conjunction with `detailCellRendererParams` for auto-rendering.\n@optional\n@example ```tsx\n// String notation (for simple property access)\nchildDataPath="orderLines"\n\n// Dot notation for nested properties\nchildDataPath="metadata.children"\n```\n@remarks - Accepts string notation for property path (e.g., "address.details")\n- If specified without `detailCellRendererParams`, child data is displayed in default format\n- Used by `getDetailRowData` callback to extract and identify child data\n- Ignored if `detailRowTemplate` is specified (uses old API)',name:"childDataPath",required:!1,type:{name:"string"}},maxNestingDepth:{defaultValue:{value:"3"},description:`Maximum nesting depth for recursive detail grids.
Prevents infinite recursion when child grids also have nested children.
Once \`nestingDepth >= maxNestingDepth\`, detail grids cannot have further nested grids.
@optional
@example \`\`\`tsx
// Allow: Master → Level1 → Level2 (3 levels total)
maxNestingDepth={2}

// Allow: Master → Level1 → Level2 → Level3 (4 levels total)
maxNestingDepth={3}
\`\`\`
@remarks - Must be a positive integer (> 0)
- Default is 3, suitable for most hierarchical data structures
- Prevents memory issues with deeply nested data
- Check \`canNestDeeper\` from \`useDetailGrid\` hook to enforce limit
- Depth counting starts at 0 for first-level detail grids`,name:"maxNestingDepth",required:!1,type:{name:"number"}},currentNestingDepth:{defaultValue:{value:"0"},description:`Current nesting level in grid hierarchy (internal use).
Automatically set by recursive DetailCellRenderer rendering.
Used to track depth and enforce maxNestingDepth limit in nested grids.
Level 0 = Master grid, Level 1 = First detail grid, Level 2 = Second detail grid, etc.
@optional
@internal
@remarks - This prop is for internal use only and should not be set by end users
- Automatically incremented by DetailCellRenderer for each nesting level
- Used by DetailCellRenderer to prevent exceeding maxNestingDepth
- Should not be modified directly in user code`,name:"currentNestingDepth",required:!1,type:{name:"number"}},onRowExpand:{defaultValue:null,description:`Fires when a master row is expanded.
@private
@event onRowExpand
\`\`\`tsx
<Grid
isMasterDetail
onRowExpand={(args) => {
console.log('Row expanded:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowExpand",required:!1,type:{name:"(event: RowExpandEvent<unknown>) => void"}},onRowCollapse:{defaultValue:null,description:`Fires when a master row is collapsed.
@private
@event onRowCollapse
\`\`\`tsx
<Grid
isMasterDetail
onRowCollapse={(args) => {
console.log('Row collapsed:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowCollapse",required:!1,type:{name:"(event: RowCollapseEvent<unknown>) => void"}},toolbar:{defaultValue:{value:"[]"},description:`Configures the grid toolbar with predefined or custom items.

The toolbar property allows you to add a toolbar to the grid with both predefined actions (add, edit, delete, update, cancel, search)
and custom items. Custom items can include text, template content, and click handlers.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true
  }}
/>
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},showColumnChooser:{defaultValue:{value:"false"},description:`Determines whether the column chooser functionality is enabled.
When set to false (default), the column chooser button will be disabled in the toolbar (but still visible if included in toolbar array).
When set to true, the column chooser button will be enabled and the dialog can be opened.

This property controls the enabled/disabled state of the column chooser feature, not its visibility.
To show the column chooser button, you must include 'ColumnChooser' in the toolbar array.
@example \`\`\`tsx
// Column Chooser button is visible but disabled (default behavior)
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
/>

// Column Chooser button is visible and enabled
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
  showColumnChooser={true}
/>
\`\`\``,name:"showColumnChooser",required:!1,type:{name:"boolean"}},columnChooserSettings:{defaultValue:{value:"{ enableSearch: true, operator: 'startsWith', ignoreAccent: false, sortDirection: 'None', selectedColumns: [] }"},description:`Defines the configuration for the Column Chooser dialog,
controlling both its behavior and appearance. Enables customization of:

- Search with customizable operators
- Diacritics‑insensitive search
- Column ordering and sorting
- Custom templates for header, footer, and column items
@example \`\`\`tsx
<Grid
  dataSource={data}
  toolbar={['ColumnChooser']}
  showColumnChooser={true}
  columnChooserSettings={{
    enableSearch: true,
    operator: 'contains',
    ignoreAccent: true,
    sortDirection: 'Ascending',
    selectedColumns: ['OrderID', 'CustomerName']
  }}
/>
\`\`\``,name:"columnChooserSettings",required:!1,type:{name:"ColumnChooserSettings"}},columnMenuSettings:{defaultValue:null,description:"Settings for the inline column menu displayed inside header cells.\nWhen `enabled` is true, a small per-column menu trigger will render in the header cell.",name:"columnMenuSettings",required:!1,type:{name:"ColumnMenuSettings"}},onColumnMenuOpen:{defaultValue:null,description:`Fires when the column menu is opened for a specific header column.
Provides the menu items and the target column for customization or cancellation.
@event onColumnMenuOpen
@param event - Event payload containing the column and available actions.
@returns The updated event or a Promise resolving to it.`,name:"onColumnMenuOpen",required:!1,type:{name:"(event: ColumnMenuOpenEvent) => void | ColumnMenuOpenEvent | Promise<ColumnMenuOpenEvent>"}},onColumnMenuClose:{defaultValue:null,description:`Fires when the column menu is closed.
Useful for resetting UI state after the menu finishes interacting.
@event onColumnMenuClose
@param event - Event payload containing the closed column.
@returns`,name:"onColumnMenuClose",required:!1,type:{name:"(event: ColumnMenuCloseEvent) => void"}},onColumnMenuClick:{defaultValue:null,description:`Fires when a column menu item is selected.
Provides the item identifier and the target column for custom logic.
@event onColumnMenuClick
@param event - Event payload containing the clicked item and column.
@returns`,name:"onColumnMenuClick",required:!1,type:{name:"(event: ColumnMenuClickEvent) => void"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
Accepts a static class name or a callback function that returns a class name based on row context.

The callback receives a \`RowClassProps\` object with the following properties:
* \`rowType\` – Identifies the structural role of the row: \`Header\`, \`Content\`, or \`Aggregate\`. Useful for styling header, data, or summary rows.
* \`rowIndex\` – The zero-based index of the row.
* \`data\` – The full data object for the row, enabling conditional styling based on field values.
@param props - Optional event payload containing row type, row index, and complete row data.
@returns A CSS class name to apply to the row.
@example const GridComponent = () => {
  const handleRowClass = (props?: RowClassProps): string => {
    if (props?.rowType === RowType.Header) return 'Header-row';
    if (props?.rowType === RowType.Aggregate) return 'summary-row';
    return '';
  };

  return (
    <Grid
      dataSource={data}
      rowClass={handleRowClass}
    />
  );
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorSettings:{defaultValue:{value:`{\r
  indicatorType: LoadingIndicatorType.Spinner,\r
  params: {\r
    visible: true,\r
    thickness: '3px',\r
    animationDuration: '1s',\r
    overlay: true,\r
    size: '36px',\r
    color: Color.Primary\r
  }\r
}`},description:`Configures loading indicator settings for the Data Grid component.
Applies spinner or skeleton customization during data operations.
@example \`\`\`tsx
<Grid loadingIndicatorSettings={{
  indicatorType: LoadingIndicatorType.Spinner,
  params: { size: '48px', color: '#0078D4' }
}} />
\`\`\``,name:"loadingIndicatorSettings",required:!1,type:{name:"LoadingIndicatorSettings"}},contextMenuSettings:{defaultValue:{value:"{ enabled: false, items: [], menuSettings: {} }"},description:`Configures the context menu settings for the Data Grid component.
Enables and customizes the context menu that appears on right‑click interactions.
Provides options to:

- Enable or disable the context menu
- Define default or custom menu items
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  contextMenuSettings={{
    enabled: true,
    items: ['Edit', 'Delete', 'SortAscending', 'SortDescending']
  }}
/>
\`\`\``,name:"contextMenuSettings",required:!1,type:{name:"ContextMenuSettings"}},onContextMenuOpen:{defaultValue:null,description:`Fires when the context menu is about to be opened or displayed on the grid.
Allows customization, validation, or cancellation of the context menu before it appears.
Provides access to the target element, menu items, and associated row/column data.

Supports both synchronous and asynchronous menu item loading:
- **Synchronous**: Return the modified ContextMenuOpenEvent object.
- **Asynchronous**: Return a Promise that resolves to the modified ContextMenuOpenEvent object.
@event onContextMenuOpen
@param event - Event arguments containing menu configuration, target element, and row/column context.
@returns The modified event object or a Promise resolving to the modified event object.
@example \`\`\`tsx
// Synchronous example
const handleContextMenuOpen = (event: ContextMenuOpenEvent) => {
  // Customize menu items based on context
  if (event.data?.role === 'Admin') {
    // Show additional menu items for admin users
  }
  return event; // Return the modified event
};

// Asynchronous example
const handleContextMenuOpen = (args: ContextMenuOpenEvent) => {
  return new Promise<ContextMenuOpenEvent>((res) => setTimeout(() => res(args), 2000));
}

return (
  <Grid
    dataSource={employees}
    columns={columns}
    contextMenuSettings={{ enabled: true }}
    onContextMenuOpen={handleContextMenuOpen}
  />
);
\`\`\``,name:"onContextMenuOpen",required:!1,type:{name:"(event: ContextMenuOpenEvent<unknown>) => ContextMenuOpenEvent<unknown> | Promise<ContextMenuOpenEvent<unknown>>"}},onContextMenuClose:{defaultValue:null,description:`Fires when the context menu is closed or hidden on the grid.
Suitable for cleanup operations or resetting UI state after the context menu interaction completes.
Triggered when the user dismisses the menu through selection, clicking outside, or pressing Escape.
@event onContextMenuClose
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClose = () => {
    // Perform cleanup or reset UI state
    console.log('Context menu closed');
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClose={handleContextMenuClose}
    />
  );
};
\`\`\``,name:"onContextMenuClose",required:!1,type:{name:"() => void"}},onContextMenuClick:{defaultValue:null,description:`Fires when a context menu item is selected or clicked by the user.
Handles the action associated with the selected menu item, such as \`Edit\`, \`Delete\`, \`Sort\`, etc.
Provides context about the selected item, target row/column, and triggering element.
@event onContextMenuClick
@param event - Event arguments containing selected item details and grid context.
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClick = (event: ContextMenuClickEvent) => {
    // Handle the selected context menu action
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClick={handleContextMenuClick}
    />
  );
};
\`\`\``,name:"onContextMenuClick",required:!1,type:{name:"(event: ContextMenuClickEvent) => void"}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing. and component mount.
This event is triggered during the React render phase, before the component is mounted to the DOM.
Useful for initial configurations or showing loading indicators.
Do not perform state updates in this callback, as they will trigger React warnings
about updating unmounted components. Use \`onGridRenderComplete\` instead for state updates.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRenderStart = () => {
    // Safe: Logging only - no state updates
    console.log('Grid render starting');
  };

  const handleGridRenderComplete = () => {
    // Safe: State updates after mount (use this callback for state updates)
    setGridReady(true);
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRenderStart}
      onGridRenderComplete={handleGridRenderComplete}
    />
  );
};
\`\`\``,name:"onGridRenderStart",required:!1,type:{name:"() => void"}},onGridInit:{defaultValue:null,description:`Fires after the grid is fully initialized and rendered in the DOM.
Ideal for DOM-related operations or interacting with the grid.
@private
@event onGridInit`,name:"onGridInit",required:!1,type:{name:"() => void"}},onDataLoadStart:{defaultValue:null,description:`Fires after data is received but before binding to the grid.
Allows data modification or filtering before rendering.
@private
@event onDataLoadStart`,name:"onDataLoadStart",required:!1,type:{name:"(event: DataLoadStartEvent | ReturnType) => void"}},onDataLoad:{defaultValue:null,description:`Fires after data is successfully bound to the grid.
Suitable for actions requiring fully loaded data.
@event onDataLoad
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataLoaded = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onDataLoad={handleDataLoaded}
      />
    </div>
  );
};
\`\`\``,name:"onDataLoad",required:!1,type:{name:"() => void"}},onGridRenderComplete:{defaultValue:null,description:`Fired when the grid is fully loaded and ready for user interaction.
Suitable for actions requiring only on grid initially fully loaded data.
@event onGridRenderComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridReady = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onGridRenderComplete={handleGridReady}
      />
    </div>
  );
};
\`\`\``,name:"onGridRenderComplete",required:!1,type:{name:"() => void"}},onHeaderCellRender:{defaultValue:null,description:`Fires for each header cell during grid rendering.
Enables customization of header cell appearance or content.
@private
@event onHeaderCellRender`,name:"onHeaderCellRender",required:!1,type:{name:"(event: HeaderCellRenderEvent) => void"}},onAggregateCellRender:{defaultValue:null,description:`Fires for each aggregate cell during grid rendering.
Allows customization of aggregate cell appearance or content.
@private
@event onAggregateCellRender`,name:"onAggregateCellRender",required:!1,type:{name:"(event: AggregateCellRenderEvent<unknown>) => void"}},onCellRender:{defaultValue:null,description:`Fires for each data cell during grid rendering.
Enables customization of data cell appearance or content.
@private
@event onCellRender`,name:"onCellRender",required:!1,type:{name:"(event: CellRenderEvent<unknown>) => void"}},onRowRender:{defaultValue:null,description:`Fires for each row when bound with data.
Allows customization of row appearance or behavior.
@private
@event onRowRender`,name:"onRowRender",required:!1,type:{name:"(event: RowRenderEvent<unknown>) => void"}},onAggregateRowRender:{defaultValue:null,description:`Fires for each aggregate row when bound with data.
Enables customization of aggregate row appearance or behavior.
@private
@event onAggregateRowRender`,name:"onAggregateRowRender",required:!1,type:{name:"(event: AggregateRowRenderEvent<unknown>) => void"}},onError:{defaultValue:null,description:`Fires when grid operations like sorting or filtering fail.
Provides error details for handling and user feedback.
@event onError
@example \`\`\`tsx
const GridComponent = () => {
  const handleActionFailure = (event: Error) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onError={handleActionFailure}
    />
  );
};
\`\`\``,name:"onError",required:!1,type:{name:"(event: Error) => void"}},onRefreshStart:{defaultValue:null,description:`Fires when grid refresh.
@private`,name:"onRefreshStart",required:!1,type:{name:"(event: Object) => void"}},onRefresh:{defaultValue:null,description:`Fired when the grid data is refreshed or updated.
@event onRefresh
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRefresh = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onRefresh={handleGridRefresh}
    />
  );
};
\`\`\``,name:"onRefresh",required:!1,type:{name:"() => void"}},onDataRequest:{defaultValue:null,description:`Fires when grid data state changes due to sorting or paging.
Monitors and responds to changes in grid state.
@event onDataRequest
@example \`\`\`tsx
const GridComponent = () => {
  const [currentState, setCurrentState] = useState({});
  const handleDataStateRequest = (event: DataRequestEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={data}
      onDataRequest={handleDataStateRequest}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onDataRequest",required:!1,type:{name:"(event: DataRequestEvent) => void"}},onDataChangeRequest:{defaultValue:null,description:`Fires when the grid's data source is changed.
Monitors and responds to updates in the grid's data source.
@event onDataChangeRequest
@example \`\`\`tsx
const GridComponent = () => {
  const [currentData, setCurrentData] = useState([]);
  const handleDataChangeRequest = (event: DataChangeRequestEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={currentData}
      onDataChangeRequest={handleDataChangeRequest}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onDataChangeRequest",required:!1,type:{name:"(event: DataChangeRequestEvent<unknown>) => void"}},onGridDestroy:{defaultValue:null,description:`Fires when the grid component is destroyed.
@private
@event onGridDestroy`,name:"onGridDestroy",required:!1,type:{name:"() => void"}},onFilterStart:{defaultValue:null,description:`Fires when a filtering operation begins on the grid.
Allows customization or cancellation of filter behavior.
@private
@event onFilterStart`,name:"onFilterStart",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilter:{defaultValue:null,description:`Fires after a filtering operation completes on the grid.
Provides filter state details for post-filter actions.
@event onFilter
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterEnd = (event: FilterEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilter={handleFilterEnd}
      filterSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilterDialogBeforeOpen:{defaultValue:null,description:`Fires before the filter Dialog is displayed or opened.
Allows customization or cancellation before the filter interface appears.
@private
@event onFilterDialogBeforeOpen`,name:"onFilterDialogBeforeOpen",required:!1,type:{name:"(event: FilterDialogBeforeOpenEvent) => void"}},onFilterDialogAfterOpen:{defaultValue:null,description:`Fires after the filter Dialog is fully displayed and ready for interaction.
Suitable for initializing custom filter components or DOM manipulation.
@event onFilterDialogAfterOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterDialogOpen = (event: FilterDialogAfterOpenEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilterDialogAfterOpen={handleFilterUIOpen}
      filterSettings={{ enabled: true,  }}
    />
  );
};
\`\`\``,name:"onFilterDialogAfterOpen",required:!1,type:{name:"(event: FilterDialogAfterOpenEvent) => void"}},onColumnChooserBeforeOpen:{defaultValue:null,description:`Fires before the Column Chooser dialog is displayed or opened.
Allows customization of column visibility or cancellation before the dialog appears.
@event onColumnChooserBeforeOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserBeforeOpen = (event: ColumnChooserBeforeOpenEvent) => {
    // handle your action here
    if (someCondition) {
      event.cancel = true; // prevent dialog from opening
    }
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserBeforeOpen={handleColumnChooserBeforeOpen}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserBeforeOpen",required:!1,type:{name:"(event: ColumnChooserBeforeOpenEvent) => void"}},onColumnChooserApply:{defaultValue:null,description:`Fires when column changes are applied in the Column Chooser dialog.
Triggered when the user clicks OK/Apply button with the final column visibility configuration.
Used to track which columns were shown/hidden and perform post-apply actions.
@event onColumnChooserApply
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserApply = (event: ColumnChooserApplyEvent) => {
    // handle column visibility changes
    console.log('Columns:', event.selectedColumns);
    console.log('Visibility:', event.columnVisibility);
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserApply={handleColumnChooserApply}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserApply",required:!1,type:{name:"(event: ColumnChooserApplyEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
Allows customization or cancellation of sort behavior.
@private
@event onSortStart`,name:"onSortStart",required:!1,type:{name:"(event: SortEvent) => void"}},onSort:{defaultValue:null,description:`Fires after a sorting operation completes on the grid.
Provides sort state details for post-sort actions.
@event onSort
@example \`\`\`tsx
const GridComponent = () => {
  const handleSortEnd = (event: SortEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onSort={handleSortEnd}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onSort",required:!1,type:{name:"(event: SortEvent) => void"}},onGroupStart:{defaultValue:null,description:`Fires when a grouping operation begins on the grid.
Allows customization or cancellation of group behavior.
@private
@event onGroupStart`,name:"onGroupStart",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onGroup:{defaultValue:null,description:`Fires when a grouping operation occurs on the grid.
Triggered by add/remove column, expand/collapse, or reorder group operations.
Provides current grouped columns and operation type for custom handling.
@event onGroup
@example \`\`\`tsx
const GridComponent = () => {
  const handleGroup = (args: OnGroupArgs) => {
    console.log(\`Operation: \${args.operation}, Columns: \${args.columns.join(', ')}\`);
  };
  const [groupSettings] = useState<GroupSettings>({ enabled: true, showDropArea: true });

  return (
    <Grid
      dataSource={orderData}
      onGroup={handleGroup}
      groupSettings={groupSettings}
    />
  );
};
\`\`\``,name:"onGroup",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},shouldExpandGroup:{defaultValue:null,description:`Fires before a group is expanded or collapsed.
Allows validation or cancellation of group expand/collapse behavior.
@event shouldExpandGroup`,name:"shouldExpandGroup",required:!1,type:{name:"(event: ShouldExpandGroupEvent) => boolean"}},onSearchStart:{defaultValue:null,description:`Fires when a searching operation begins on the grid.
Allows customization or addition of search conditions.
@private
@event onSearchStart`,name:"onSearchStart",required:!1,type:{name:"(event: SearchEvent) => void"}},onSearch:{defaultValue:null,description:`Fires after a searching operation completes on the grid.
Provides search result details for post-search actions.
@event onSearch
@example \`\`\`tsx
const GridComponent = () => {
  const handleSearchEnd = (event: SearchEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={productData}
        onSearch={handleSearchEnd}
        toolbar={['Search']}
        searchSettings={{ enabled: true }}
      />
    </div>
  );
};
\`\`\``,name:"onSearch",required:!1,type:{name:"(event: SearchEvent) => void"}},onColumnResizeStart:{defaultValue:null,description:`Fires when a column resize interaction begins.
Triggered on pointer-down of the resize handle, keyboard focus activation, or the start of a programmatic resize/auto-fit.
@event onColumnResizeStart
@param event - Event arguments containing the target column, current width, and a cancelable flag.
@returns
@example \`\`\`tsx
const handleResizeStart = (event: ColumnResizeStartEvent) => {
  if (event.column.field === 'id') {
    event.cancel = true;
  }
};

return <Grid onColumnResizeStart={handleResizeStart} />;
\`\`\``,name:"onColumnResizeStart",required:!1,type:{name:"(event: ColumnResizeStartEvent) => void"}},onColumnResize:{defaultValue:null,description:`Fires as the column width changes during an active resize interaction.
Triggered continuously while the user drags the resize handle, steps with the keyboard, or when a programmatic resize/auto-fit updates a column.
@event onColumnResize
@param event - Event arguments containing the target column and the new width in pixels.
@returns
@example \`\`\`tsx
const handleResize = (event: ColumnResizeEvent) => {
  console.log(event.column.field, event.width);
};

return <Grid onColumnResize={handleResize} />;
\`\`\``,name:"onColumnResize",required:!1,type:{name:"(event: ColumnResizeEvent) => void"}},onColumnResizeEnd:{defaultValue:null,description:`Fires when a column resize interaction ends.
Triggered on pointer-up of the resize handle, end of a keyboard resize step, or completion of a programmatic resize/auto-fit on each updated column.
@event onColumnResizeEnd
@param event - Event arguments containing the target column and the final width in pixels.
@returns
@example \`\`\`tsx
const handleResizeEnd = (event: ColumnResizeEndEvent) => {
  console.log('Final width:', event.column.field, event.width);
};

return <Grid onColumnResizeEnd={handleResizeEnd} />;
\`\`\``,name:"onColumnResizeEnd",required:!1,type:{name:"(event: ColumnResizeEndEvent) => void"}},onColumnReorderStart:{defaultValue:null,description:`Fires when a column reorder interaction begins.
@event onColumnReorderStart
@param event - Event arguments containing the targeted column, \`fromIndex\`, initial \`toIndex\`, and a cancelable flag.
@returns
@example \`\`\`tsx
const handleReorderStart = (event: ColumnReorderStartEvent) => {
  if (event.column.field === 'OrderID') {
    event.cancel = true;
  }
};

return <Grid onColumnReorderStart={handleReorderStart} />;
\`\`\``,name:"onColumnReorderStart",required:!1,type:{name:"(event: ColumnReorderStartEvent<unknown>) => void"}},onColumnDrag:{defaultValue:null,description:"Fires while a column reorder drag is in progress.\n@event onColumnDrag\n@param event - Event arguments containing the targeted column, `fromIndex`, and current `toIndex`.\n@returns\n@example ```tsx\nconst handleColumnDrag = (event: ColumnReorderEvent) => {\n  console.log('Dragging', event.column.field, 'from', event.fromIndex, 'to', event.toIndex);\n};\n\nreturn <Grid onColumnDrag={handleColumnDrag} />;\n```",name:"onColumnDrag",required:!1,type:{name:"(event: ColumnReorderEvent<unknown>) => void"}},onColumnReorderEnd:{defaultValue:null,description:"Fires when a column reorder interaction ends.\n@event onColumnReorderEnd\n@param event - Event arguments containing the targeted column, `fromIndex`, final `toIndex`, and a cancelable flag.\n@returns\n@example ```tsx\nconst handleReorderEnd = (event: ColumnReorderEndEvent) => {\n  console.log('Reordered', event.column.field, 'from', event.fromIndex, 'to', event.toIndex);\n};\n\nreturn <Grid onColumnReorderEnd={handleReorderEnd} />;\n```",name:"onColumnReorderEnd",required:!1,type:{name:"(event: ColumnReorderEndEvent<unknown>) => void"}},onRowDoubleClick:{defaultValue:null,description:`Fires when a grid row is clicked.
Provides details about the clicked row for custom actions.
@event onRowDoubleClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDoubleClick = (event: RecordDoubleClickEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={customerData}
        onRowDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
};
\`\`\``,name:"onRowDoubleClick",required:!1,type:{name:"(event: RecordDoubleClickEvent<unknown>) => void"}},onToolbarItemClick:{defaultValue:null,description:`Fires when a toolbar item is clicked.
Enables custom actions for toolbar buttons.
@event onToolbarItemClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleToolbarClick = (event: ClickEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onToolbarItemClick={handleToolbarClick}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print']}
    >
      <Toolbar />
    </Grid>
  );
};
\`\`\``,name:"onToolbarItemClick",required:!1,type:{name:"(event: ToolbarClickEvent) => void"}},onCellFocus:{defaultValue:null,description:`Fires when a grid cell gains focus.
Provides details about the focused cell.
@event onCellFocus
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellFocused = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onCellFocus={handleCellFocused}
    />
  );
};
\`\`\``,name:"onCellFocus",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellClick:{defaultValue:null,description:`Fires when a grid cell is clicked.
Provides details about the clicked cell.
@event onCellClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellClick = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={orderData}
        onCellClick={handleCellClick}
      />
    </div>
  );
};
\`\`\``,name:"onCellClick",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellFocusStart:{defaultValue:null,description:`Fires before a grid cell gains focus.
Allows validation or modification of focus behavior.
@private
@event onCellFocusStart`,name:"onCellFocusStart",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onRowSelecting:{defaultValue:null,description:`Fires before a row is selected.
Allows validation or cancellation of row selection.
@private
@event onRowSelecting`,name:"onRowSelecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowSelect:{defaultValue:null,description:`Fires after a row is successfully selected.
Provides details about the selected row.
@event onRowSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowSelected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div className="app-container">
      <Grid
        dataSource={customerData}
        onRowSelect={handleRowSelected}
      />
    </div>
  );
};
\`\`\``,name:"onRowSelect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onRowDragStart:{defaultValue:null,description:`Fires when a data row drag operation starts.
@event onRowDragStart
@param args - Dragged rows and source index.
@returns`,name:"onRowDragStart",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDrag:{defaultValue:null,description:`Fires while a data row drag operation is in progress.
@event onRowDrag
@param args - Dragged rows and current target index.
@returns`,name:"onRowDrag",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDrop:{defaultValue:null,description:`Fires when a data row drag operation ends.
@event onRowDrop
@param args - Dragged rows and final target index.
@returns`,name:"onRowDrop",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDeselecting:{defaultValue:null,description:`Fires before a row is deselected.
Allows validation or cancellation of row deselection.
@private
@event onRowDeselecting`,name:"onRowDeselecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowDeselect:{defaultValue:null,description:`Fires after a row is successfully deselected.
Provides details about the deselected row.
@event onRowDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDeselected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onRowDeselect={handleRowDeselected}
      />
    </div>
  );
};
\`\`\``,name:"onRowDeselect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onCellSelecting:{defaultValue:null,description:`Fires before cells are selected in the grid.
Allows validation or cancellation of cell selection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellSelecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelecting = (event: CellSelectingEvent) => {
    // Prevent selection of specific cells
    if (event.cells.some(cell => cell.rowIndex === 0)) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelecting={handleCellSelecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelecting",required:!1,type:{name:"(event: CellSelectingEvent<unknown>) => void"}},onCellSelect:{defaultValue:null,description:`Fires after cells are successfully selected in the grid.
Provides details about the selected cells including data and positions.
Only fires when selectionSettings.type is 'Cell'.
@event onCellSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelect = (event: CellSelectEvent) => {
    console.log('Selected cells:', event.cells);
    console.log('Cell data:', event.data);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelect={handleCellSelect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelect",required:!1,type:{name:"(event: CellSelectEvent<unknown>) => void"}},onCellDeselecting:{defaultValue:null,description:`Fires before cells are deselected in the grid.
Allows validation or cancellation of cell deselection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellDeselecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselecting = (event: CellDeselectingEvent) => {
    // Prevent deselection of specific cells
    if (event.cells.length > 5) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselecting={handleCellDeselecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselecting",required:!1,type:{name:"(event: CellDeselectingEvent<unknown>) => void"}},onCellDeselect:{defaultValue:null,description:`Fires after cells are successfully deselected in the grid.
Provides details about the deselected cells.
Only fires when selectionSettings.type is 'Cell'.
@event onCellDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselect = (event: CellDeselectEvent) => {
    console.log('Deselected cells:', event.cells);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselect={handleCellDeselect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselect",required:!1,type:{name:"(event: CellDeselectEvent<unknown>) => void"}},onPageChangeStart:{defaultValue:null,description:`Event triggered before the paging operation start.
@private
@event onPageChangeStart`,name:"onPageChangeStart",required:!1,type:{name:"(event: PageEvent) => void"}},onPageChange:{defaultValue:null,description:`Event triggered after a paging operation is completed on the grid.
@event onPageChange
@example \`\`\`tsx
const GridComponent = () => {
  const handlePageChangeEnd = (event: PageEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onPageChange={handlePageChangeEnd}
      />
    </div>
  );
};
\`\`\``,name:"onPageChange",required:!1,type:{name:"(event: PageEvent) => void"}},onRowEditStart:{defaultValue:null,description:`Fires when editing begins on a grid record.
Allows validation or field modification before editing.
@event onRowEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowEdit = (event: EditEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowEdit}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowEditStart",required:!1,type:{name:"(event: RowEditEvent<unknown>) => void"}},onCellEditStart:{defaultValue:null,description:`Fires when cell editing begins in \`Cell\` edit mode.
Provides an opportunity to validate the target cell or cancel the edit
before the editor is presented.
@event onCellEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellEdit = (event: CellEditEvent) => {
    // Prevent editing for specific cells
    if (event.field === 'id') {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellEditStart={handleCellEdit}
      editSettings={{ mode: 'Cell', allowEdit: true }}
    />
  );
};
\`\`\``,name:"onCellEditStart",required:!1,type:{name:"(event: CellEditEvent<unknown>) => void"}},onRowAddStart:{defaultValue:null,description:`Fires when the process of adding a new row starts.
@event onRowAddStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowAdd = (event: RowAddEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowadd}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowAddStart",required:!1,type:{name:"(event: RowAddEvent<unknown>) => void"}},onFormRender:{defaultValue:null,description:`Fires when the edit or add form is fully loaded and ready for user input.
@event onFormRender
@example \`\`\`tsx
const GridComponent = () => {
  const handleFormReady = (event: FormRenderEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onFormRender={handleFormReady}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onFormRender",required:!1,type:{name:"(event: FormRenderEvent<unknown>) => void"}},onDataChangeStart:{defaultValue:null,description:`Fires when a create, update, or delete operation is started.
@event onDataChangeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeStart = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeStart={handleDataChangeStart}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeStart",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeComplete:{defaultValue:null,description:`Fires when a create, update, or delete operation is completed.
@event onDataChangeComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeComplete = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeComplete={handleDataChangeComplete}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeComplete",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeCancel:{defaultValue:null,description:`Fires when a CRUD operation is cancelled.
@event onDataChangeCancel
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeCancel = (event: FormCancelEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeCancel={handleDataChangeCancel}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}},onDeleteDialogOpen:{defaultValue:null,description:`Fires when the bulk‑delete confirmation dialog opens with cross‑page selection enabled.
Allows customization of dialog options, such as disabling specific choices or setting the default selection.

Use Cases:
- Disable "Delete Current Page": Prevents partial deletion when records are selected across multiple pages.
- Preselect "Delete All Selected Records": Ensures this option is the default, reducing errors and maintaining consistency.
@event onDeleteDialogOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleDeleteDialogOpen = (eventArgs: DeleteDialogEventArgs) => {
    // Customize dialog options
    if (eventArgs.totalSelectedCount > 100) {
      eventArgs.customizations = {
        pageOptionDisabled: true,
        defaultOption: 'all'
      };
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onDeleteDialogOpen={handleDeleteDialogOpen}
      editSettings={{ allowDelete: true }}
      selectionSettings={{ mode: 'Multiple', persistSelection: true }}
    />
  );
};
\`\`\``,name:"onDeleteDialogOpen",required:!1,type:{name:"(eventArgs: DeleteDialogEventArgs) => void"}},onClipboardCopy:{defaultValue:null,description:`Fires when data is copied to the clipboard from the Grid.
Triggered after the copy operation completes, providing details about the copied content,
selected rows/cells, and allowing cancellation of the operation.

Use Cases:
- Audit copying operations for sensitive data
- Modify clipboard content before writing (via beforeClipboardCopy alternative event if available)
- Track user interactions with grid data
- Prevent copying from specific rows or in certain conditions
@event onClipboardCopy
@param args - Event arguments containing copied data, selection info, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardCopy = (args: ClipboardCopyEvent) => {
  console.log('Data copied to clipboard');
  console.log('Selection type:', args.selectionType);
  console.log('Selected rows:', args.selectedRowIndexes);
  console.log('Copied text:', args.clipboardText);
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    selectionSettings={{ mode: 'Multiple', type: 'Row' }}
    clipboardSettings={{ enabled: true }}
    onClipboardCopy={handleClipboardCopy}
  />
);
\`\`\``,name:"onClipboardCopy",required:!1,type:{name:"(args: ClipboardCopyEvent) => void"}},onClipboardCut:{defaultValue:null,description:`Fires when data is cut from the grid using Ctrl+X.
Triggered when cut operation completes, providing details about the cut content,
selected rows/cells, and allowing cancellation of the operation.

Use Cases:
- Audit cutting operations for sensitive data
- Track user interactions with grid data
- Prevent cutting from primary key columns
- Prevent cutting from specific rows in certain conditions
- Log or transform cut operations before data is cleared
@event onClipboardCut
@param args - Event arguments containing cut data, selection info, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardCut = (args: ClipboardCutEvent) => {
  console.log('Data cut from grid');
  console.log('Selection type:', args.selectionType);
  console.log('Selected rows:', args.selectedRowIndexes);
  console.log('Cut text:', args.clipboardText);

  // Prevent cutting primary key columns
  if (args.selectedCells?.some(cell => cell.fieldName === 'id')) {
    args.cancel = true;
  }
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    editSettings={{ allowEdit: true }}
    selectionSettings={{ mode: 'Multiple', type: 'Cell' }}
    clipboardSettings={{ enabled: true }}
    onClipboardCut={handleClipboardCut}
  />
);
\`\`\``,name:"onClipboardCut",required:!1,type:{name:"(args: ClipboardCutEvent) => void"}},onClipboardPaste:{defaultValue:null,description:`Fires when data is pasted from the clipboard into the Grid.
Triggered after paste operation completes, providing details about the pasted data,
target location, and allowing cancellation of the operation.

Use Cases:
- Validate pasted data before applying to grid
- Log paste operations for compliance or audit purposes
- Prevent pasting into read-only rows or columns
- Transform or filter pasted content
@event onClipboardPaste
@param args - Event arguments containing pasted data, target location, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardPaste = (args: ClipboardPasteEvent) => {
  console.log('Data pasted from clipboard');
  console.log('Target row index:', args.startRowIndex);
  console.log('Pasted matrix:', args.pasteMatrix);

  // Prevent pasting into read-only rows
  if (args.startRowIndex >= readOnlyRowStart) {
    args.cancel = true;
  }
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    editSettings={{ allowEdit: true }}
    clipboardSettings={{ enabled: true }}
    onClipboardPaste={handleClipboardPaste}
  />
);
\`\`\``,name:"onClipboardPaste",required:!1,type:{name:"(args: ClipboardPasteEvent) => void"}},isRowPinned:{defaultValue:{value:"undefined"},description:"Callback that determines whether a row should be pinned and to which position.\n\nInvoked for each data row during rendering to determine its pinning bucket.\nReturning `'top'` places the row in the top-pinned section,\nreturning `'bottom'` places it in the bottom-pinned section,\nand returning `null` or `undefined` places it in the regular scrollable section.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  isRowPinned={(row) => row.isPinned ? 'top' : null}\n/>\n```",name:"isRowPinned",required:!1,type:{name:'(row: unknown) => "top" | "bottom"'}},isRowPinnable:{defaultValue:{value:"undefined"},description:`Callback that determines whether a row is eligible for pinning.

Invoked for each row to determine if pinning actions (such as context menu options)
should be available for that row. Returning \`false\` disables pinning for the row.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  isRowPinnable={(row) => row.allowPin !== false}
/>
\`\`\``,name:"isRowPinnable",required:!1,type:{name:"(row: unknown) => boolean"}},pinningSettings:{defaultValue:{value:"undefined"},description:`Global configuration settings for pinning behavior across both rows and columns.

Controls whether pinning is enabled, which dimensions (\`type\`) are eligible,
and which sides are permitted (top/bottom for rows, left/right for columns).
Follows the same composition pattern as \`virtualizationSettings\`.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  pinningSettings={{ enabled: true, type: PinScope.Both }}
  isRowPinned={(row) => row.isPinned ? 'top' : null}
/>
\`\`\``,name:"pinningSettings",required:!1,type:{name:"PinningSettings"}},onPinnedRowsChanged:{defaultValue:null,description:`Fires when a row changes its pinning state due to user interaction or programmatic update.
Provides the affected row, its previous pin bucket, its current pin bucket, and the action performed.
@event onPinnedRowsChanged
@example \`\`\`tsx
const GridComponent = () => {
  const handlePinnedRowsChanged = (event: RowPinningEvent) => {
    console.log('Row:', event.rowData);
    console.log('Pin bucket:', event.previousPinBucket, '->', event.currentPinBucket);
  };

  return (
    <Grid
      dataSource={employees}
      onPinnedRowsChanged={handlePinnedRowsChanged}
    />
  );
};
\`\`\``,name:"onPinnedRowsChanged",required:!1,type:{name:"(event: RowPinningEvent<unknown>) => void"}},pivotSettings:{defaultValue:{value:"undefined"},description:`Configures client-side relational pivoting for the Grid.
Defines report fields, aggregate values, member filters, result totals,
expansion defaults, generated-column limits and execution behavior.
Requires \`PivotModule\` in the \`modules\` property.
@example \`\`\`tsx
<Grid
  dataSource={salesData}
  modules={{ PivotModule }}
  pivotSettings={{
    enabled: true,
    rows: ['country'],
    columns: ['year'],
    values: [{ field: 'sales', type: 'Sum' }]
  }}
/>
\`\`\``,name:"pivotSettings",required:!1,type:{name:"PivotSettings<unknown>"}},customizePivotColumn:{defaultValue:null,description:`Returns presentation overrides for generated pivot value columns on the UI thread.
Pure callbacks may run repeatedly. User presentation adjustments take precedence.
Templates receive generated pivot rows, not source records. Omitted callbacks preserve defaults.`,name:"customizePivotColumn",required:!1,type:{name:'(context: PivotColumnContext<unknown>) => Partial<Pick<ColumnProps<PivotResultRow>, "width" | "headerText" | "headerTemplate" | "template" | ... 8 more ... | "allowResize">>'}},customizePivotColumnGroup:{defaultValue:null,description:`Returns presentation overrides for generated pivot group headers on the UI thread.
Custom header templates retain the built-in expand/collapse control.
Pure callbacks may run repeatedly; exceptions propagate to the React error boundary.`,name:"customizePivotColumnGroup",required:!1,type:{name:'(context: PivotColumnGroupContext<unknown>) => Partial<Pick<ColumnProps<PivotResultRow>, "headerText" | "headerTemplate" | "headerTextAlign" | "customAttributes">>'}},onPivotChange:{defaultValue:null,description:`Fires after interactive pivot configuration changes are applied.
Triggered when report fields, member filters, sorting, totals or other
pivot settings change through the integrated pivot controls.
@event onPivotChange
@param event - Event arguments containing the applied pivot settings.
@returns
@example \`\`\`tsx
<Grid
  onPivotChange={(event) => {
    console.log('Pivot settings:', event.settings);
  }}
/>
\`\`\``,name:"onPivotChange",required:!1,type:{name:"(event: PivotChangeEvent<unknown>) => void"}},onPivotError:{defaultValue:null,description:`Fires when pivot calculation or configuration validation fails.
Triggered when the pivot report contains invalid fields or settings,
unsupported data-source or scroll-mode combinations, exceeds the column limit,
or encounters a calculation failure.
@event onPivotError
@param event - Event arguments containing the error code and message.
@returns
@example \`\`\`tsx
<Grid
  onPivotError={(event) => {
    console.error(event.code, event.message);
  }}
/>
\`\`\``,name:"onPivotError",required:!1,type:{name:"(event: PivotErrorEvent) => void"}},changeHighlightSettings:{defaultValue:{value:"{ flashDuration: 500, fadeDuration: 3000, allowFilteredChangeHighlight: false }"},description:`Configures shared timing and filtered-result highlighting for cell changes.
Controls background and template animation durations, and whether data updates
that add rows to an unchanged filtered result highlight the active filter fields.`,name:"changeHighlightSettings",required:!1,type:{name:"ChangeHighlightSettings"}},onCellChangeHighlightStart:{defaultValue:null,description:`Fires immediately before a cell change highlight presentation begins.
This event is cancelable; set \`args.cancel = true\` to skip the presentation for that cell.
The underlying data update always occurs; only the visual highlight/animation is affected by cancellation.
@event onCellChangeHighlightStart
@param args - Event arguments with row key, field, row data, and cancelable flag.
@returns
@example \`\`\`tsx
<Grid
  onCellChangeHighlightStart={(args) => {
    if (args.field === 'sensitive_field') {
      args.cancel = true; // Skip highlighting for this cell
    }
  }}
/>
\`\`\``,name:"onCellChangeHighlightStart",required:!1,type:{name:"(args: CellChangeHighlightStartEventArgs<unknown>) => void"}},onCellChangeHighlightComplete:{defaultValue:null,description:"Fires after a cell change highlight presentation completes.\nThis event is informational only and not cancelable, following the Grid's before/complete event pattern.\nIt is not fired if the presentation was canceled via `onCellChangeHighlightStart`.\n@event onCellChangeHighlightComplete\n@param args - Event arguments with row key, field, row data, and previous/current values.\n@returns\n@example ```tsx\n<Grid\n  onCellChangeHighlightComplete={(args) => {\n    console.log(`Cell ${args.field} changed from ${args.previousValue} to ${args.currentValue}`);\n  }}\n/>\n```",name:"onCellChangeHighlightComplete",required:!1,type:{name:"(args: CellChangeHighlightCompleteEventArgs<unknown>) => void"}},formRef:{defaultValue:null,description:"",name:"formRef",required:!1,type:{name:"RefObject<IFormValidator>"}},formStateRef:{defaultValue:null,description:"",name:"formStateRef",required:!1,type:{name:"RefObject<FormState>"}}}}}catch{}function wu(){var P;nn("material");const r=y.useRef(null),e=ys.slice(0,100),[a,t]=y.useState(e),[n,i]=y.useState(!0),[l,d]=y.useState(!0),[u,m]=y.useState(!0),[c,g]=y.useState(!0),[b,S]=y.useState("Both"),[_,Z]=y.useState(!1),[C,w]=y.useState(!0),[R,k]=y.useState(!0),[z,E]=y.useState(!1),[X,Ne]=y.useState("Default"),[K,O]=y.useState(!0),[xe,J]=y.useState("Single"),[Re,Le]=y.useState(null),[se,De]=y.useState(null),[Fe,He]=y.useState(!1),[ha,na]=y.useState(!1),[Be,$e]=y.useState(!1),[M,f]=y.useState({...(P=r.current)==null?void 0:P.pageSettings,enabled:l}),[pa,Da]=y.useState(1),ra=new Ve({url:"https://services.odata.org/V4/Northwind/Northwind.svc/Orders",adaptor:new En}),Ta=N=>{t(N.value==="localData"?e:ra)},Ra=N=>{S(N.value)},Ga=N=>{Ne(N.value)},Na=N=>{J(N.value)},ka=N=>{N.key==="Enter"&&Le(N.target.value)},Ge=(()=>{const N=document.getElementById("column").value;r.current&&r.current.sortByColumn(N,se,Fe)}),Fa=(()=>{const N=document.getElementById("field").value,ee=document.getElementById("operator").value,be=document.getElementById("value").value,Y=document.getElementById("predicate").value;r.current&&r.current.filterByColumn(N,ee,be,Y,ha)}),ia=(()=>{const N=parseInt(document.getElementById("rowIndex").value,10);r.current&&r.current.selectRow(N,Be)}),T=(()=>{const N={currentPage:parseInt(document.getElementById("currentPage").value||"1",10),pageCount:parseInt(document.getElementById("pageCount").value||"8",10),pageSize:parseInt(document.getElementById("pageSize").value||"12",10)};var ee={...r.current.pageSettings,...N};f(ee)}),v=(()=>{const N=parseInt(document.getElementById("pageNumber").value,10);Da(N),r.current&&r.current.goToPage(pa)}),A=(()=>{const N=document.getElementById("searchTxt").value;r.current&&r.current.search(N)}),j=(N=>{const ee=document.createElement("span");ee.innerHTML=N;const be=document.getElementById("EventLog");be.insertBefore(ee,be.firstChild)}),re=(()=>{document.getElementById("EventLog").innerHTML=""});return o.jsxs("div",{children:[o.jsx("link",{href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",rel:"stylesheet"}),o.jsxs("div",{className:"col-lg-10 control-section",children:[o.jsx(Ja,{ref:r,dataSource:a,sortSettings:{enabled:n},filterSettings:{enabled:u},textWrapSettings:{wrapMode:b,enabled:c},enableRtl:z,enableHover:C,gridLines:X,selectionSettings:{mode:xe},rowHeight:Re,pageSettings:M,height:250,onGridInit:()=>{j("Grid <b>create</b> event called<br/>")},onRowRender:()=>{j("Grid <b>rowDataBound</b> event called<br/>")},onCellRender:()=>{j("Grid <b>queryCellInfo</b> event called<br/>")},onHeaderCellRender:()=>{j("Grid <b>headerCellInfo</b> event called<br/>")},onDataLoad:()=>{j("Grid <b>dataBound</b> event called<br/>")},onRowSelecting:()=>{j("Grid <b>rowSelecting</b> event called<br/>")},onRowSelect:()=>{j("Grid <b>rowSelected</b> event called<br/>")},onRowDeselecting:()=>{j("Grid <b>rowDeSelecting</b> event called<br/>")},onRowDeselect:()=>{j("Grid <b>rowDeSelected</b> event called<br/>")},children:o.jsxs(et,{children:[o.jsx(W,{field:"OrderID",headerText:"Order ID",width:120,textAlign:"Right"}),o.jsx(W,{field:"CustomerID",headerText:"Customer ID",width:150}),o.jsx(W,{field:"OrderDate",headerText:"Order Date",width:150,format:"yMd"}),o.jsx(W,{field:"Freight",headerText:"Freight",width:100,format:"C2"}),o.jsx(W,{field:"ShipCountry",headerText:"Ship Country",width:140}),o.jsx(W,{field:"ShipAddress",headerText:"Ship Address",width:140,disableHtmlEncode:_})]})}),o.jsx("h3",{children:o.jsx("b",{children:"Methods"})}),o.jsx("div",{id:"Properties",style:{width:"100%",height:280,overflow:"scroll"},className:"container",children:o.jsx("table",{style:{width:"100%"},children:o.jsxs("tbody",{children:[o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Sort Column"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Field name"}),o.jsx(ke,{id:"column",placeholder:"Enter field name",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Direction"}),o.jsx(Ze,{width:200,dataSource:["Ascending","Descending"],fields:{text:"text",value:"value"},value:se,onChange:N=>De(N.value)})]}),o.jsx("div",{className:"control",children:o.jsx(Ie,{label:"isMultiSort",defaultChecked:Fe,onChange:N=>He(N.value)})}),o.jsx(x,{id:"sort",className:"methodbtn",onClick:Ge,children:"Apply Sort"}),o.jsx(x,{id:"clearSort",className:"methodbtn",onClick:()=>r.current.clearSort(),children:"Clear Sorting"})]})]})}),o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Filter By Column"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Field name"}),o.jsx(ke,{id:"field",placeholder:"Enter field name",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Field Operator"}),o.jsx(ke,{id:"operator",placeholder:"Enter field operator",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Filter Value"}),o.jsx(ke,{id:"value",placeholder:"Enter filter value",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Predicate"}),o.jsx(ke,{id:"predicate",placeholder:"Enter predicate",width:200})]}),o.jsx("div",{className:"control",children:o.jsx(Ie,{label:"Match case",defaultChecked:ha,onChange:N=>na(N.value)})}),o.jsx("br",{}),o.jsx(x,{id:"filter",className:"methodbtn",onClick:Fa,children:"Apply Filter"}),o.jsx(x,{id:"clearFilter",className:"methodbtn",onClick:()=>r.current.clearFilter(),children:"Clear Filtering"})]})]})}),o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Select row"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Row Index"}),o.jsx(ke,{id:"rowIndex",placeholder:"Enter row index",width:200})]}),o.jsx("div",{className:"control",children:o.jsx(Ie,{label:"isToggle",defaultChecked:Be,onChange:N=>$e(N.value)})}),o.jsx(x,{id:"selectRow",className:"methodbtn",onClick:ia,children:"Apply Selection"}),o.jsx(x,{id:"clearSelect",className:"methodbtn",onClick:()=>r.current.clearRowSelection(),children:"Clear Selection"})]})]})}),o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Page Settings"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Current page"}),o.jsx(ke,{id:"currentPage",placeholder:"Enter current page",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Page count"}),o.jsx(ke,{id:"pageCount",placeholder:"Enter page count",width:200})]}),o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Page size"}),o.jsx(ke,{id:"pageSize",placeholder:"Enter page size",width:200})]}),o.jsx("br",{}),o.jsx(x,{id:"pageSettings",className:"methodbtn",onClick:T,children:"Page Settings"})]})]})}),o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Goto Page"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Page number"}),o.jsx(ke,{id:"pageNumber",placeholder:"Enter page number",width:200})]}),o.jsx(x,{id:"page",className:"methodbtn",onClick:v,children:"Goto Page"})]})]})}),o.jsx("tr",{children:o.jsxs("td",{className:"e-method",children:[o.jsx("h4",{children:o.jsx("b",{children:"Search"})}),o.jsxs("div",{className:"method-controls",children:[o.jsxs("div",{className:"control",children:[o.jsx("h5",{children:"Search the text"}),o.jsx(ke,{id:"searchTxt",placeholder:"Enter the search text",width:200})]}),o.jsx(x,{id:"search",className:"methodbtn",onClick:A,children:"Search"})]})]})}),o.jsx("tr",{children:o.jsx("td",{className:"e-method",children:o.jsxs("div",{className:"method-controls",children:[o.jsx(x,{id:"refresh",className:"methodbtn",onClick:()=>{r.current.refresh()},children:"Refresh"}),o.jsx(x,{id:"showSpinner",className:"methodbtn",onClick:()=>{r.current.showSpinner()},children:"Show spinner"}),o.jsx(x,{id:"hideSpinner",className:"methodbtn",onClick:()=>{r.current.hideSpinner()},children:"Hide spinner"})]})})})]})})})]}),o.jsxs("div",{className:"col-lg-2 property-section",children:[o.jsxs("div",{style:{height:500,overflow:"scroll"},children:[o.jsx("span",{style:{marginRight:15,fontSize:16},children:"Data source"}),o.jsx(Ze,{width:200,dataSource:["Local Data","Remote Data"],fields:{text:"text",value:"value"},value:a,placeholder:"Select the datasource",onChange:Ta}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable sorting",defaultChecked:n,onChange:N=>i(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable paging",defaultChecked:l,onChange:N=>d(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable filtering",defaultChecked:u,onChange:N=>m(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable textwrap",defaultChecked:c,onChange:N=>g(N.value)}),o.jsx("br",{}),o.jsx("p",{children:"Text wrap settings"}),o.jsx("span",{style:{marginRight:15},children:"Wrap Mode"}),o.jsx(Ze,{width:200,dataSource:[he.Header,he.Content,he.Both],fields:{text:"text",value:"value"},value:b,onChange:Ra}),o.jsx("br",{}),o.jsx(Ie,{label:"Disable Html Encode",defaultChecked:_,onChange:N=>Z(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable hover",defaultChecked:C,onChange:N=>w(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable altRow",defaultChecked:R,onChange:N=>k(N.value)}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable rtl",defaultChecked:z,onChange:N=>E(N.value)}),o.jsx("br",{}),o.jsx("span",{style:{marginRight:15},children:"Grid lines"}),o.jsx(Ze,{width:200,dataSource:["Default","None","Both","Horizontal","Vertical"],fields:{text:"text",value:"value"},value:X,onChange:Ga}),o.jsx("br",{}),o.jsx(Ie,{label:"Enable selection",defaultChecked:K,onChange:N=>O(N.value)}),o.jsx("br",{}),o.jsx("p",{children:"Selection settings"}),o.jsx("span",{style:{marginRight:15},children:"Type"}),o.jsx(Ze,{width:200,dataSource:["Single","Multiple"],fields:{text:"text",value:"value"},value:xe,onChange:Na}),o.jsx("br",{}),o.jsx("span",{style:{marginRight:15},children:"Row height"}),o.jsx(ke,{placeholder:"Enter row height",width:200,onKeyDown:ka})]}),o.jsxs("div",{children:[o.jsx("h3",{children:o.jsx("b",{children:"Event"})}),o.jsxs("table",{id:"property",title:"Event Trace",style:{width:"100%"},children:[o.jsx("tr",{children:o.jsx("td",{children:o.jsx("div",{className:"eventarea",style:{height:140,overflow:"auto"},children:o.jsx("span",{className:"EventLog",id:"EventLog",style:{wordBreak:"normal"}})})})}),o.jsx("tr",{children:o.jsx("td",{children:o.jsx("div",{className:"evtbtn",style:{paddingBottom:5},children:o.jsx(x,{id:"clear",className:"button",onClick:re,children:"Clear"})})})})]})]})]})]})}const Mr=()=>o.jsxs("div",{style:{padding:"15px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",borderRadius:"8px 8px 0 0"},children:[o.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:"Advanced Column Manager"}),o.jsx("p",{style:{margin:"8px 0 0 0",fontSize:"12px",opacity:.9,fontStyle:"italic"},children:"Customize your grid view with powerful options"})]}),xu=r=>{console.log("Column Chooser Before Open Event:",r)},vu=r=>{r.columnVisibility.set("CustomerName",!0),console.log("Column Chooser Apply Event:",r),console.log("Column Visibility:",r.columnVisibility),console.log("Selected Columns:",r.selectedColumns)},un=({visibleCount:r,totalCount:e,hiddenColumns:a,onApply:t,onClose:n})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"12px 15px",borderTop:"2px solid #e0e0e0",background:"linear-gradient(to bottom, #f9f9f9, #ffffff)"},children:[o.jsxs("div",{style:{fontSize:"12px"},children:[o.jsxs("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx("span",{style:{display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:r>0?"#4caf50":"#ff9800"}}),o.jsx("span",{style:{fontWeight:"bold",color:"#333"},children:r}),o.jsx("span",{style:{color:"#666"},children:"of"}),o.jsx("span",{style:{fontWeight:"bold",color:"#333"},children:e}),o.jsx("span",{style:{color:"#666"},children:"columns visible"})]}),a.length>0&&o.jsxs("div",{style:{padding:"8px",background:"#fff3cd",borderRadius:"4px",color:"#856404",fontSize:"11px"},children:[o.jsx("strong",{children:"Hidden:"})," ",a.slice(0,3).join(", "),a.length>3&&` +${a.length-3} more`]})]}),o.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[o.jsx(x,{onClick:t,className:"e-primary",children:"Apply"}),o.jsx(x,{onClick:n,children:"Close"})]}),o.jsx("div",{style:{fontSize:"10px",color:"#999",fontStyle:"italic",textAlign:"center"},children:"Custom footer replaces default OK/Cancel buttons"})]}),Eu=({columns:r,showColumns:e,hideColumns:a,searchValue:t,onToggle:n,columnVisibility:i})=>o.jsxs("div",{style:{padding:"15px",minHeight:"300px"},children:[o.jsxs("div",{style:{marginBottom:"15px"},children:[o.jsxs("h4",{style:{margin:"0 0 10px 0",color:"#667eea"},children:["Available Columns (",r.length,")"]}),t&&o.jsxs("div",{style:{padding:"8px 12px",background:"#e3f2fd",borderRadius:"4px",fontSize:"12px",color:"#1976d2",marginBottom:"12px"},children:["Searching for: ",o.jsxs("strong",{children:['"',t,'"']})]})]}),o.jsx("div",{style:{maxHeight:"250px",overflowY:"auto",border:"1px solid #e0e0e0",borderRadius:"4px"},children:r.map((l,d)=>o.jsxs("div",{style:{padding:"12px 15px",borderBottom:d<r.length-1?"1px solid #f0f0f0":"none",display:"flex",alignItems:"center",gap:"12px",background:(i==null?void 0:i.get(l.field||l.uid))??l.visible?"#f0f7ff":"white",transition:"all 0.2s ease"},children:[o.jsx("input",{type:"checkbox",checked:(i==null?void 0:i.get(l.field||l.uid))??l.visible,style:{width:"18px",height:"18px",cursor:"pointer"},onChange:u=>n==null?void 0:n(l.field||l.uid||String(d),u.target.checked)}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontWeight:l.visible?"bold":"normal",color:l.visible?"#1976d2":"#333",marginBottom:"2px"},children:l.headerText||l.field}),o.jsxs("div",{style:{fontSize:"11px",color:"#999"},children:["Field: ",l.field]})]}),l.visible&&o.jsx("span",{style:{color:"#4caf50",fontSize:"12px",fontWeight:"bold"},children:"Visible"})]},l.field||d))}),o.jsxs("div",{style:{marginTop:"15px",padding:"10px",background:"#f5f5f5",borderRadius:"4px",fontSize:"12px",color:"#666"},children:[o.jsx("div",{style:{marginBottom:"5px"},children:o.jsx("strong",{children:"Summary:"})}),o.jsxs("div",{children:["Visible: ",e.length," | Hidden: ",a.length]})]})]}),Sn=({columns:r,dataSource:e,builtInThemes:a,height:t,pageSettings:n,editSettings:i,modules:l,toolbar:d,showColumnChooser:u,enableSearching:m,searchOperator:c,ignoreAccent:g,sortDirection:b,useCustomOrder:S,templateMode:_,columnChooserMode:Z,columnChooserDelay:C,showEmployee:w})=>{nn(a);const R=y.useRef(null),k=m??!0,z=c??"contains",E=g??!0,X=b??"None",Ne=S??!1,K=_??"default",O=Z??"deferred",xe=C??1500,J=w??!1,Re=y.useMemo(()=>({mode:O,immediateModeDelay:xe,enableSearch:k,operator:z,ignoreAccent:E,sortDirection:X,...Ne&&{selectedColumns:["CustomerName","OrderID","Freight","ShipCountry"]},...K==="header"&&{headerTemplate:Mr},...K==="footer"&&{footerTemplate:un},...K==="both"&&{headerTemplate:Mr,footerTemplate:un},...K==="full"&&{template:Eu,footerTemplate:un}}),[O,xe,k,z,E,X,Ne,K]),Le=y.useMemo(()=>r.map(se=>se.field==="Employee"&&!r.some(De=>De.field==="Employee"&&De.visible!==void 0)?{...se,visible:J}:se),[r,J]);return o.jsx(wn,{ripple:!0,children:o.jsx(Ja,{ref:R,dataSource:e,columns:Le,height:t,pageSettings:n,showColumnChooser:u,toolbar:d,columnChooserSettings:Re,editSettings:i,onColumnChooserBeforeOpen:xu,onColumnChooserApply:vu,modules:l})})};try{Sn.displayName="ColumnChooserAdvancedFeatures",Sn.__docgenInfo={description:"",displayName:"ColumnChooserAdvancedFeatures",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnProps<unknown>[]"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"any"}},builtInThemes:{defaultValue:null,description:"",name:"builtInThemes",required:!0,type:{name:"enum",value:[{value:'"bootstrap"'},{value:'"tailwind"'},{value:'"material"'}]}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},pageSettings:{defaultValue:null,description:"",name:"pageSettings",required:!0,type:{name:"PageSettings"}},editSettings:{defaultValue:null,description:"",name:"editSettings",required:!0,type:{name:"EditSettings<unknown>"}},modules:{defaultValue:null,description:"",name:"modules",required:!0,type:{name:"GridModules<unknown>"}},toolbar:{defaultValue:null,description:"",name:"toolbar",required:!0,type:{name:"(string | ToolbarItemProps)[]"}},showColumnChooser:{defaultValue:null,description:"",name:"showColumnChooser",required:!0,type:{name:"boolean"}},enableSearching:{defaultValue:null,description:"",name:"enableSearching",required:!1,type:{name:"boolean"}},searchOperator:{defaultValue:null,description:"",name:"searchOperator",required:!1,type:{name:"enum",value:[{value:'"startsWith"'},{value:'"endsWith"'},{value:'"contains"'},{value:'"equal"'},{value:'"notEqual"'}]}},ignoreAccent:{defaultValue:null,description:"",name:"ignoreAccent",required:!1,type:{name:"boolean"}},sortDirection:{defaultValue:null,description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Ascending"'},{value:'"Descending"'}]}},useCustomOrder:{defaultValue:null,description:"",name:"useCustomOrder",required:!1,type:{name:"boolean"}},templateMode:{defaultValue:null,description:"",name:"templateMode",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"default"'},{value:'"header"'},{value:'"footer"'},{value:'"full"'}]}},columnChooserMode:{defaultValue:null,description:"",name:"columnChooserMode",required:!1,type:{name:"enum",value:[{value:'"deferred"'},{value:'"immediate"'}]}},columnChooserDelay:{defaultValue:null,description:"",name:"columnChooserDelay",required:!1,type:{name:"number"}},showEmployee:{defaultValue:null,description:"",name:"showEmployee",required:!1,type:{name:"boolean"}}}}}catch{}const Nn=r=>{const{data:e}=r,a=n=>`$${Number(n??0).toFixed(2)}`,t=Number(e.Freight??0)+Number(e.Salary??0)+Number(e.Cost??0);return o.jsxs("div",{className:"full-width-summary-card",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",padding:"10px 14px",borderLeft:`4px solid ${e.IsActive?"#1f9d55":"#d97706"}`,borderRadius:"6px",backgroundColor:"rgba(0, 120, 212, 0.06)"},children:[o.jsxs("span",{style:{fontWeight:600,fontSize:"14px"},children:["Order summary #",e.OrderID]}),o.jsxs("span",{style:{color:"#555",fontSize:"13px"},children:[e.CustomerName??e.CustomerID,e.ShipCity?`, ${e.ShipCity}`:"",e.ShipCountry?` — ${e.ShipCountry}`:""]}),o.jsxs("span",{style:{marginLeft:"auto",display:"flex",gap:"16px",fontSize:"13px"},children:[o.jsxs("span",{children:[o.jsx("strong",{children:"Freight:"})," ",a(e.Freight)]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Salary:"})," ",a(e.Salary)]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Cost:"})," ",a(e.Cost)]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Total:"})," ",a(t)]})]}),o.jsx("span",{style:{fontSize:"12px",fontWeight:600,padding:"2px 10px",borderRadius:"12px",color:e.IsActive?"#1f9d55":"#b45309",backgroundColor:e.IsActive?"#dcfce7":"#fef3c7"},children:e.IsActive?"Active":"Inactive"})]})};try{Nn.displayName="FullWidthRowSummary",Nn.__docgenInfo={description:"Full width row summary card rendered by the Grid `fullWidthRow` callback.\n\nThe grid renders the returned element inside a single spanning cell that\ncarries the `sf-cell`/`sf-templatecell` classes, so this card inherits the\nstandard cell padding and row borders while laying its own content out\nacross the full grid width.",displayName:"FullWidthRowSummary",props:{data:{defaultValue:null,description:"The data item of the row rendering as a full width row.",name:"data",required:!0,type:{name:"DynamicDataItem"}},rowIndex:{defaultValue:null,description:"The data-view index of the row.",name:"rowIndex",required:!0,type:{name:"number"}}}}}catch{}const F=Jo(100),Au=fs(1e3),Va=[...F],br=y.createRef(),mn=y.createRef(),Du=()=>r=>o.jsxs("div",{children:[r.data[r.column.field],"-template"]}),Tu=()=>()=>o.jsx("div",{children:"Order ID-template"}),Ru=()=>r=>{const{field:e,data:a}=r;return a[e]+"-1"},Gu=()=>()=>"Order ID-1",ku=r=>e=>o.jsx(Ze,{defaultValue:e.data[e.column.field],dataSource:r,fields:{text:e.column.field,value:e.column.field}}),Ca=(r,e)=>{const a=r.data;return a?a[e]:void 0},Fu=r=>{const e=Number(Ca(r,"PerformanceRating")??0),a=e>=4?"#1f9d55":e>=3.5?"#d97706":"#dc2626",t=e>=4?"#dcfce7":e>=3.5?"#fef3c7":"#fee2e2";return o.jsx("span",{style:{color:a,backgroundColor:t,fontWeight:600,padding:"2px 8px",borderRadius:"12px",display:"inline-block",minWidth:"32px",textAlign:"center"},title:`Performance Rating: ${e}`,children:e.toFixed(1)})},_u=r=>{const e=Number(Ca(r,"Salary")??0),a=Number(Ca(r,"Bonus")??0),t=e+a;return o.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[o.jsx("strong",{style:{color:"#0f766e"},children:e.toLocaleString("en-US",{style:"currency",currency:"USD"})}),o.jsxs("small",{style:{color:"#64748b"},children:["+ Bonus: ",t.toLocaleString("en-US",{style:"currency",currency:"USD"})]})]})},Pu=r=>{const e=String(Ca(r,"Email")??"");return o.jsx("a",{href:`mailto:${e}`,style:{color:"#2563eb",textDecoration:"none"},title:e,children:e.length>24?`${e.slice(0,22)}…`:e})},Bu=r=>{const e=String(Ca(r,"Country")??""),t={USA:"🇺🇸",Canada:"🇨🇦",UK:"🇬🇧",Germany:"🇩🇪",Australia:"🇦🇺",France:"🇫🇷",Brazil:"🇧🇷",India:"🇮🇳",Italy:"🇮🇹",Spain:"🇪🇸"}[e]||"🌍";return o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[o.jsxs("span",{children:[" ",e]}),o.jsxs("span",{style:{fontSize:"1.05em"},children:["(",t,") "]})]})},Iu=r=>{const e=String(Ca(r,"Gender")??""),a=e.toLowerCase()==="female",t=a?"👩":"👨",n=a?"#db2777":"#2563eb";return o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,color:n,fontWeight:600},children:[o.jsx("span",{style:{fontSize:"1.05em"},children:t}),o.jsx("span",{children:e})]})},zu=r=>{const e=String(Ca(r,"MaritalStatus")??""),a=e.toLowerCase();let t="👤",n="#475569";return a==="single"?(t="🙋",n="#0ea5e9"):a==="married"?(t="💍",n="#16a34a"):a==="divorced"&&(t="💔",n="#dc2626"),o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,color:n,fontWeight:600},children:[o.jsx("span",{style:{fontSize:"1.05em"},children:t}),o.jsx("span",{children:e})]})},Lu=r=>{const e=String(Ca(r,"MobileNumber")??""),a=e.replace(/\D/g,"");return o.jsxs("a",{href:`tel:${a}`,style:{color:"#7c3aed",textDecoration:"none",fontFamily:"monospace",fontWeight:600},children:["📞 ",e]})},Hu=gs,Vu=[{field:"EmployeeID",headerText:"S.No",width:100,isPrimaryKey:!0,minWidth:void 0},{headerText:"Employee Details",textAlign:"Center",minWidth:void 0,columns:[{field:"EmployeeCode",headerText:"Employee ID",width:140,minWidth:void 0},{headerText:"Employee Info",textAlign:"Center",minWidth:void 0,columns:[{field:"FirstName",headerText:"First Name",width:150,minWidth:void 0},{field:"LastName",headerText:"Last Name",width:150,minWidth:void 0}]},{headerText:"Basic Info",textAlign:"Center",minWidth:void 0,columns:[{field:"Gender",headerText:"Gender (template)",width:140,minWidth:void 0,template:Iu},{field:"DateOfBirth",headerText:"DOB",width:150,minWidth:void 0,format:"yMd"},{field:"MaritalStatus",headerText:"Marital Status (template)",width:180,minWidth:void 0,template:zu}]}]},{headerText:"Employment Details",textAlign:"Center",minWidth:void 0,columns:[{headerText:"Job Details",textAlign:"Center",minWidth:void 0,columns:[{field:"Title",headerText:"Job Title",width:180,minWidth:void 0},{field:"Department",headerText:"Department",width:150,minWidth:void 0},{field:"Manager",headerText:"Manager",width:180,minWidth:void 0}]},{headerText:"Employment Info",textAlign:"Center",minWidth:void 0,columns:[{field:"EmploymentType",headerText:"Type",width:150,minWidth:void 0},{field:"HireDate",headerText:"Hire Date",width:150,minWidth:void 0}]}]},{headerText:"Contact Details",textAlign:"Center",minWidth:void 0,columns:[{headerText:"Communication Info",textAlign:"Center",minWidth:void 0,columns:[{field:"HomePhone",headerText:"Home Phone",width:180,minWidth:void 0},{field:"Email",headerText:"Email (template)",width:220,minWidth:void 0,template:Pu},{field:"MobileNumber",headerText:"Mobile (template)",width:180,minWidth:void 0,template:Lu}]},{field:"Extension",headerText:"Extension",width:120,minWidth:void 0}]},{headerText:"Address Details",textAlign:"Center",minWidth:void 0,columns:[{headerText:"Location Info",textAlign:"Center",minWidth:void 0,columns:[{field:"Address",headerText:"Address",width:150,minWidth:void 0},{field:"City",headerText:"City",width:150,minWidth:void 0},{field:"Region",headerText:"Region",width:120,minWidth:void 0}]},{headerText:"Postal Info",textAlign:"Center",minWidth:void 0,columns:[{field:"PostalCode",headerText:"Postal Code",width:150,minWidth:void 0},{field:"Country",headerText:"Country",width:150,minWidth:void 0,template:Bu}]}]},{headerText:"Compensation",textAlign:"Center",minWidth:void 0,columns:[{field:"PerformanceRating",headerText:"Performance Rating (template)",width:200,minWidth:void 0,textAlign:"Center",template:Fu},{headerText:"Salary Info",textAlign:"Center",minWidth:void 0,columns:[{field:"Salary",headerText:"Salary (template)",width:180,minWidth:void 0,template:_u},{field:"Bonus",headerText:"Bonus",width:150,minWidth:void 0}]}]},{headerText:"Emergency Details",textAlign:"Center",minWidth:void 0,columns:[{field:"EmergencyContact",headerText:"Contact Person",width:180,minWidth:void 0},{headerText:"Emergency Contact",textAlign:"Center",minWidth:void 0,columns:[{field:"EmergencyPhone",headerText:"Emergency Phone",width:180,minWidth:void 0},{field:"ReportsTo",headerText:"Reports To",width:120,minWidth:void 0}]}]}],ta={allowEdit:!1,allowAdd:!1,allowDelete:!1,mode:"Normal",editOnDoubleClick:!0},We=(r={})=>({...ta,...r}),Ou=We({allowEdit:!0,allowAdd:!0,allowDelete:!0}),V=(r={})=>{const e=r.distinctShipCountryDataSource??Oe.distinct(F,"ShipCountry",!0),a=r.useOrderIdTemplate?Du():void 0,t=r.orderDateEditType??ze.DatePicker,n=r.activeEditType??ze.CheckBox,i=r.shipCountryEditType??ze.DropDownList,l=r.defaultFreightValue??120,d=r.useOrderIdTemplate?Tu():void 0,u=r.useOrderIdValueAccessor?Ru():void 0,m=r.useOrderIdHeaderValueAccessor?Gu():void 0,c=r.useShipCountryTemplate?ku(e):void 0,g=[{field:"OrderID",headerText:"Order ID",width:r.orderIdWidth??"180",textAlign:r.orderIdTextAlign??"Right",visible:r.orderIdVisible??!0,type:"number",filter:{filterBarType:va.NumericTextBox,type:r.orderIDFilterType??"CheckBox"},validationRules:{required:!0},isPrimaryKey:(r==null?void 0:r.isPrimaryKey)??!1,template:a,headerTemplate:d,valueAccessor:u,headerValueAccessor:m,templateSettings:{ariaLabel:r.enableAriaLabel?"enableAriaLabel "+r.enableAriaLabel.toString():""}},{field:"OrderDate",headerText:"Order Date",width:r.orderDateWidth??"200",minWidth:100,maxWidth:300,visible:r.orderDateVisible??!0,format:r.orderDateFormat??"dd/MM/yyyy hh:mm a",clipMode:r.orderDateEllipsisClipMode,type:Jt.DateTime,filter:{filterBarType:va.DatePicker,type:r.orderDateFilterType??"Menu"},validationRules:{required:[!0,"custom required validation"]},textAlign:"Right",edit:{type:t}},{field:"ShippedDate",headerText:"Shipped Date",width:r.orderDateWidth??"130",visible:r.orderDateVisible??!0,format:r.orderDateFormat??"M/d/yyyy",clipMode:r.orderDateEllipsisClipMode,type:"date",filter:{filterBarType:va.DatePicker},validationRules:{required:!0},textAlign:"Right",edit:{type:t}},{field:"Freight",headerText:"Freight",width:r.freightWidth??"120",minWidth:100,maxWidth:300,visible:r.freightVisible??!0,format:r.freightFormat??"C2",textAlign:"Right",validationRules:{required:!0,min:1,max:1e3},filter:{filterBarType:va.NumericTextBox,type:r.frightFilterType??"Menu"},defaultValue:l},{field:"CustomerID",headerText:"Customer ID",width:200,validationRules:{required:!0},visible:r.customerIDVisible??!0,filter:{filterBarType:va.TextBox,type:r.customerIDFilterType??"Menu"}},{field:"Salary",headerText:"Salary",visible:r.salaryVisible??!0,format:{format:"C2"},validationRules:{required:!0}},{field:"Cost",headerText:"Cost",visible:r.costVisible??!0,format:{format:"C2"}},{field:"ShipCountry",headerText:"<b>Ship Country</b>",width:r.shipCountryWidth??"130",minWidth:100,maxWidth:300,visible:r.shipCountryVisible??!0,textAlign:"Right",type:"string",validationRules:{required:!0},template:c,disableHtmlEncode:r.disableHtmlEncode??!0,edit:{type:i},filter:{type:r.shipCountryFilterType??"CheckBox"}},{field:"IsActive",headerText:"IsActive",textAlign:"Center",visible:r.isActiveVisible??!0,type:"boolean",edit:{type:n}},{field:"Complex.ShipCity",headerText:"ShipCity",width:"150",minWidth:100,maxWidth:300,visible:r.shipCityVisible??!0},{field:"ShipName",headerText:"Ship Name",width:r.shipNameWidth??"130",minWidth:100,maxWidth:300,textAlign:"Right",visible:r.shipNameVisible??!0,type:"string"},{headerText:"Command Actions",width:300,visible:r.commandActionsVisible??!1}];return r.checkBoxSelection&&g.unshift({type:Jt.Checkbox,width:50}),r.enablePinningColumn&&g.unshift({type:Jt.Pin,width:40}),g},mm={title:"Grid/GridBase",component:ma,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},tags:["autodocs"],argTypes:{dataSource:{control:"select",options:["local","remote"],description:"Data source type for the grid",mapping:{local:F,remote:new Ve({url:"https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$count=true&$skip=0&$top=12",adaptor:new En})}},builtInThemes:{control:"select",options:["bootstrap","tailwind","material"],description:"Grid Built-in Themes"},allowKeyboard:{control:"boolean",description:"Enable grid focus navigation"},isCustomBinding:{control:"boolean",description:"Enable custom-binding callbacks for the grid story"},enableHover:{control:"boolean",description:"Enable hover effect on rows"},enableRtl:{control:"boolean",description:"Enable right-to-left mode"},displayAsCheckbox:{control:"boolean",description:"Display checkboxes for boolean type column"},gridLines:{control:"select",options:["Default","None","Both","Horizontal","Vertical"],description:"Grid lines visibility"},locale:{control:"select",options:["en","de","fr","ar","zh"],description:"Grid lines visibility"},height:{control:"text",description:"Height of the grid"},width:{control:"text",description:"Width of the grid"},toolbar:{control:"multi-select",options:["Add","Edit","Delete","Update","Cancel","Search","PdfExport","ColumnChooser","Print","ExcelExport"],description:"Toolbar options supports provided for the grid"},pdfOrientation:{control:"radio",options:["Portrait","Landscape"],description:"PDF page orientation for export"},pdfPageSize:{control:"select",options:["A4","A3","A5","Letter","Legal","Tabloid"],description:"PDF page size for export"},pdfRange:{control:"radio",options:["All","CurrentPage","Custom"],description:"PDF export data range"},useCustomColumnWidths:{control:"boolean",description:"Use custom column widths for PDF export"},editSettings:{control:"object",description:"Grid editing configuration"},resizeSettings:{control:"object",description:"Grid resize configuration"},enableStickyHeader:{control:"boolean",description:"Enable sticky header"},enableHtmlSanitizer:{control:"boolean",description:"Enable html sanitizer"},rowHeight:{control:"text",description:"Height of the grid"},showPerformanceMetrics:{control:"boolean",description:"Show performance metrics"},initialShowSpinner:{control:"boolean",description:"Initially show spinner"},pinningSettings:{control:"object",description:"Unified pinning configuration for rows (top/bottom) and columns (left/right)."},isRowPinned:{control:!1,description:"Callback used to determine whether each row is pinned top or bottom."}}},Ue={args:{dataSource:F,virtualizationSettings:{scrollMode:Aa.Virtual},searchSettings:{enabled:!0},distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,enableRtl:!1,gridLines:"Default",height:"81vh",selectionSettings:{mode:"Multiple"},textWrapSettings:{enabled:!0,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,shipNameWidth:"130",salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["ColumnChooser"],resizeSettings:{enabled:!0}}},mt={args:{dataSource:F,virtualizationSettings:{scrollMode:Aa.Virtual},searchSettings:{enabled:!0},resizeSettings:{enabled:!0},distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,enableRtl:!1,gridLines:"Default",height:"81vh",clipboardSettings:{allowPaste:!0,allowCut:!0},selectionSettings:{mode:"Multiple",type:An.Row},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},modules:{GridAllModules:Sa},textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,shipNameWidth:"130",orderIDFilterType:"CheckBox",shipCountryFilterType:"CheckBox",orderDateFilterType:"Menu",frightFilterType:"Menu",customerIDFilterType:"Menu",isPrimaryKey:!0}),showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["Add","Edit","Delete","Update","Cancel"]}},ct={args:{dataSource:F.slice(0,10),enableHover:!0,resizeSettings:{enabled:!0},enableRtl:!1,gridLines:"Horizontal",height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},rowHeight:50,width:"100%",virtualizationSettings:{type:hs.Column},sortSettings:{enabled:!1},filterSettings:{enabled:!1},pageSettings:{enabled:!1},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Left",orderDateVisible:!0,freightVisible:!1,shipCountryVisible:!1,isPrimaryKey:!0,shipNameVisible:!1,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1}},ht={args:{dataSource:F.slice(0,20),enableHover:!0,enableRtl:!1,gridLines:"Both",height:"81vh",width:"100%",columns:V({orderIdVisible:!0,orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,isPrimaryKey:!0}),showColumnChooser:!0,toolbar:["ColumnChooser"],pageSettings:{enabled:!0,pageSize:10},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Menu"},groupSettings:{enabled:!0,showDropArea:!0},aggregates:[{columns:[{field:"Freight",type:"Sum"}]}],reorderSettings:{enabled:!0},columnChooserSettings:{enableReorder:!0},sideBar:{enabled:!0,toolPanels:["columns","filters"],defaultToolPanel:"columns",position:"right"},modules:{GridAllModules:Sa},showPerformanceMetrics:!1,initialShowSpinner:!1}},pt={args:{dataSource:F.slice(0,20),distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,resizeSettings:{enabled:!0},enableRtl:!1,gridLines:"Both",height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},rowHeight:50,width:"100%",pageSettings:{enabled:!1},sortSettings:{enabled:!0},filterSettings:{enabled:!1},editSettings:ta,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Center",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0,useShipCountryTemplate:!0}),showPerformanceMetrics:!0,initialShowSpinner:!1}},yt={args:{dataSource:F.slice(0,20),enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},rowHeight:50,width:"100%",pageSettings:{enabled:!1},sortSettings:{enabled:!0},filterSettings:{enabled:!1},editSettings:ta,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0}),showPerformanceMetrics:!0,initialShowSpinner:!1}},gt={args:{dataSource:F.slice(0,20),enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},rowHeight:50,width:"100%",pageSettings:{enabled:!1},sortSettings:{enabled:!0},filterSettings:{enabled:!0},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Center",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,isPrimaryKey:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1}},ft={args:{dataSource:F.slice(0,30),enableHover:!0,enableRtl:!0,gridLines:"Default",resizeSettings:{enabled:!0},height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},rowHeight:50,width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,isPrimaryKey:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1}},Mt={args:{pageSettings:{enabled:!0,pageSize:12},resizeSettings:{enabled:!0},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},dataSource:new Ve({url:"https://services.odata.org/V4/Northwind/Northwind.svc/Orders",adaptor:new En}),isPreventAutoHeight:!0,virtualizationSettings:{scrollMode:Aa.Virtual},enableHover:!0,enableRtl:!1,gridLines:"Default",height:"68vh",selectionSettings:{mode:"Multiple"},rowHeight:50,width:"100%",sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0,checkBoxSelection:!0}),showPerformanceMetrics:!0,initialShowSpinner:!0}},bt={parameters:{docs:{description:{story:"Custom data binding with `onDataRequest`. Set `pageSettings.enableCache` in the controls to enable the Grid-owned paging cache."}}},args:{dataSource:F,resizeSettings:{enabled:!0},loadingIndicatorSettings:{indicatorType:cs.Shimmer},pageSettings:{enabled:!0,enableCache:!0},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableHover:!0,enableRtl:!1,gridLines:"Default",height:"70vh",selectionSettings:{mode:"Single"},rowHeight:50,width:"100%",searchSettings:{enabled:!0},sortSettings:{enabled:!0},groupSettings:{enabled:!0,showDropArea:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:Ou,isCustomBinding:!0,enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!1,shipNameWidth:"130",salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0}),showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["Add","Edit","Cancel","Update","Delete","Search"],customBindingAggregates:!0}},Ct={args:{dataSource:F,enableHover:!0,resizeSettings:{enabled:!0},enableRtl:!1,gridLines:"Both",height:"81vh",selectionSettings:{mode:"Single"},textWrapSettings:{enabled:!0,wrapMode:he.Both},rowHeight:50,width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!1,salaryVisible:!0,costVisible:!0,isPrimaryKey:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0}},St={args:{dataSource:F,height:500,columns:[{field:"OrderID",headerText:"Order ID",width:100,isPrimaryKey:!0,textAlign:"Right"},{field:"CustomerName",headerText:"Customer Name",width:150},{field:"Freight",headerText:"Freight",width:100,format:"C2"},{field:"ShipCity",headerText:"Ship City",width:100,type:"number"}],modules:{GridAllModules:Sa},selectionSettings:{type:An.Row,mode:ca.Multiple,enableToggle:!0},filterSettings:{enabled:!0},showPerformanceMetrics:!1,initialShowSpinner:!1,pageSettings:{enabled:!0},statusBarSettings:{enabled:!0,items:[{type:"TotalRowCount",position:"Left",key:"totalRows",statusPanelParams:{}},{type:"FilteredRowCount",position:"Left",key:"filteredRows"},{type:"TotalAndFilteredRowCount",position:"Center",key:"combinedRows"},{type:"SelectedRowCount",position:"Right",key:"selectedRows"},{type:"Custom",position:"Right",key:"customSummary",statusPanelParams:{label:"Orders loaded"}}]}}},Nt={args:{dataSource:F,height:500,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,freightVisible:!0,shipNameVisible:!1,salaryVisible:!0,costVisible:!0,isPrimaryKey:!0,shipCityVisible:!0,shipCountryVisible:!1,isActiveVisible:!1,customerIDVisible:!1,commandActionsVisible:!1}),modules:{GridAllModules:Sa},selectionSettings:{type:An.Cell,mode:ca.Multiple,enableToggle:!0},showPerformanceMetrics:!0,initialShowSpinner:!1,statusBarSettings:{enabled:!0,items:[{type:"TotalRowCount",position:"Left",key:"totalRows"},{type:"SelectionAggregates",position:"Right",key:"aggregates",statusPanelParams:{aggregateFunctions:["Sum","Average","Count","Min","Max"]}}]}}},wt={args:{dataSource:F,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"75vh",selectionSettings:{enableToggle:!0,mode:ca.Multiple},toolbar:["Add","Edit","Search","Cancel","Update","Delete"],textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},searchSettings:{enabled:!0},editSettings:We({mode:"Normal",allowEdit:!0,allowAdd:!0,allowDelete:!0}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},clipboardSettings:{allowRowCopy:!0},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!1,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0}},xt={args:{dataSource:F,distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Default",height:"81vh",selectionSettings:{mode:"Multiple",enableToggle:!0},textWrapSettings:{enabled:!0,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:We({allowEdit:!0,allowDelete:!0}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0,checkBoxSelection:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["Delete","Search"]}},vt={args:{dataSource:F,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"68vh",selectionSettings:{enableToggle:!0,mode:ca.Multiple},toolbar:["Add"],textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!0,isPrimaryKey:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0}},Et={args:{dataSource:F,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"68vh",selectionSettings:{enableToggle:!0,mode:ca.Multiple},toolbar:["Add","Edit","Search","Cancel","Update","Delete"],textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({mode:"Popup",allowAdd:!0,allowEdit:!0,allowDelete:!0}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!1,salaryVisible:!1,costVisible:!1,isActiveVisible:!1,shipCityVisible:!1,commandActionsVisible:!1,shipNameWidth:"130",isPrimaryKey:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0}},At={args:{dataSource:F,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"68vh",selectionSettings:{enableToggle:!0,mode:ca.Multiple},toolbar:["Add","Edit","Search","Cancel","Update","Delete"],textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({mode:"PopupTemplate",allowAdd:!0,allowEdit:!0,allowDelete:!0,popupTemplate:r=>{const[e,a]=y.useState(null),t={OrderID:{required:[!0,"Order ID is required"],number:[!0,"Order ID must be a number"]},OrderDate:{required:[!0,"Order Date is required"],date:[!0,"Please enter a valid date"]},Freight:{required:[!0,"Freight is required"],number:[!0,"Freight must be a number"],range:[[1,1e3],"Freight must be between 1 and 1000"]},CustomerID:{required:[!0,"Customer ID is required"],minLength:[3,"Customer ID must be at least 3 characters"]},ShipCountry:{required:[!0,"Ship Country is required"]}},n=[{name:"OrderID",placeholder:"Enter Order ID",label:"Order ID"},{name:"OrderDate",placeholder:"Enter Order Date",label:"Order Date"},{name:"Freight",placeholder:"Enter Freight",label:"Freight"},{name:"CustomerID",placeholder:"Enter Customer ID",label:"Customer ID"},{name:"ShipCountry",placeholder:"Enter Ship Country",label:"Ship Country"}];return o.jsx("div",{className:"form-container",children:o.jsx($o,{ref:br,initialValues:r.data,rules:t,onFormStateChange:i=>{mn&&(mn.current=i),a(i)},validateOnChange:!0,autoComplete:"off",children:n.map(i=>o.jsx(Xo,{name:i.name,children:o.jsxs("div",{className:"form-field",children:[o.jsxs("label",{className:"sf-form-label",htmlFor:i.name,children:[" ",i.label," "]}),o.jsx("div",{className:"sf-input-container",children:i.name==="Freight"?o.jsx(Yo,{name:i.name,format:"n",value:Number(e==null?void 0:e.values[i.name])||null,className:e!=null&&e.errors[i.name]?"sf-error":void 0,onChange:l=>{l&&(e==null||e.onChange(i.name,{value:l.value}))},onBlur:()=>e==null?void 0:e.onBlur(i.name)}):i.name==="OrderDate"?o.jsx(Qo,{name:i.name,value:(e==null?void 0:e.values[i.name])||"",className:e!=null&&e.errors[i.name]?"sf-error":void 0,onChange:l=>{e==null||e.onChange(i.name,{value:l.value||""})},onBlur:()=>e==null?void 0:e.onBlur(i.name)}):i.name==="ShipCountry"?o.jsx(Ze,{dataSource:["USA","UK"],name:i.name,value:(e==null?void 0:e.values[i.name])||"",className:e!=null&&e.errors[i.name]?"sf-error":void 0,onChange:l=>{e==null||e.onChange(i.name,{value:l.value||""})},onBlur:()=>e==null?void 0:e.onBlur(i.name),popupSettings:{zIndex:1e10}}):o.jsx(ke,{name:i.name,value:(e==null?void 0:e.values[i.name])??"",className:e!=null&&e.errors[i.name]?"sf-error":void 0,onChange:l=>{e==null||e.onChange(i.name,{value:l.value||""})},onBlur:()=>e==null?void 0:e.onBlur(i.name),disabled:!r.isAdd&&i.name==="OrderID"})}),(e==null?void 0:e.errors[i.name])&&o.jsx("div",{className:"sf-form-error",children:e.errors[i.name]})]})},i.name))})})},popupSettings:{className:"custom-popup-template-grid"}}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!1,salaryVisible:!1,costVisible:!1,isActiveVisible:!1,shipCityVisible:!1,commandActionsVisible:!1,shipNameWidth:"130",isPrimaryKey:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0,formRef:br,formStateRef:mn}},Dt={args:{dataSource:F.slice(0,50),enableHover:!1,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Default",height:"73vh",selectionSettings:{mode:"Multiple",type:"Cell",cellSelectionType:"BoxWithBorder"},textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},autoFillSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!1,allowDelete:!0,mode:"Normal"},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"120",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0}),showPerformanceMetrics:!1,initialShowSpinner:!1,toolbar:["ColumnChooser"]}},Tt={args:{dataSource:F,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",height:"68vh",selectionSettings:{enableToggle:!0,mode:ca.Multiple},toolbar:["Add"],enableContextMenu:!0,textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({mode:"Normal"}),modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},enableStickyHeader:!0,enableHtmlSanitizer:!1,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0}),cascadingData:Va,showPerformanceMetrics:!0,initialShowSpinner:!1,showAggregates:!0}},Rt={args:{...Ue.args,columns:V({isPrimaryKey:!0}),editSettings:We({allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"}),toolbar:[],resizeSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},textWrapSettings:{enabled:!1},columnMenuSettings:{enabled:!0},getRowHeight:void 0,groupSettings:{enabled:!0,showDropArea:!0},dragAndDropSettings:{enabled:!0},rowNumberSettings:{enabled:!0}}},Gt={args:{enableExcelExportDemo:!0,dataSource:F,enableHover:!1,resizeSettings:{enabled:!0},enableRtl:!1,gridLines:"Default",height:"73vh",width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!1},filterSettings:{enabled:!1},editSettings:ta,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},isCustomBinding:!1,enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"120",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!1,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!1,shipCityVisible:!1,commandActionsVisible:!1,isPrimaryKey:!0}),showPerformanceMetrics:!1,initialShowSpinner:!1}},kt={args:{...Ue.args},render:()=>o.jsx("div",{id:"feature-matrix",children:o.jsx(wu,{})})},Uu=({printRange:r,printTitle:e,columns:a,builtInThemes:t="material",height:n,width:i,enableRtl:l,gridLines:d})=>{const u=y.useRef(null),{print:m}=Vs({gridRef:u});nn(t);const c=g=>{var b,S;(S=(b=g.item)==null?void 0:b.id)!=null&&S.includes("_print")&&m({range:r,title:e})};return o.jsx(Ja,{ref:u,dataSource:F,columns:a??V({orderIdVisible:!0,orderDateVisible:!0,freightVisible:!0}),height:n,width:i,enableRtl:l,gridLines:d,toolbar:["Search","Print"],pageSettings:{enabled:!0,pageSize:10},sortSettings:{enabled:!0},filterSettings:{enabled:!0},onToolbarItemClick:c})},Wu=V({orderIdVisible:!0,orderIdWidth:"120",orderDateVisible:!0,orderDateWidth:"200",freightVisible:!0,freightWidth:"120",shipCountryVisible:!0,shipCountryWidth:"150",isActiveVisible:!0,isPrimaryKey:!0,shipNameVisible:!1,salaryVisible:!1,costVisible:!1,shipCityVisible:!1,commandActionsVisible:!1}).filter(r=>["OrderID","CustomerID","Freight","OrderDate","ShipCountry","IsActive"].includes(r.field??"")).map(r=>r.field==="CustomerID"?{...r,field:"CustomerName",headerText:"Customer Name",width:"180"}:r),Ku=({editScenario:r,columns:e,dataSource:a,editSettings:t,modules:n,pageSettings:i,height:l,...d})=>{const u=m=>{r==="lockCustomer"&&m.data.OrderID===10248&&m.field==="CustomerName"&&(m.cancel=!0),r==="lockHighFreight"&&m.field==="Freight"&&Number(m.data.Freight)>100&&(m.cancel=!0)};return o.jsx(ma,{...d,dataSource:a,columns:e,editSettings:t,modules:n,pageSettings:i,height:l,onCellEditStart:r==="allowAll"?void 0:u,showPerformanceMetrics:!1,initialShowSpinner:!1})},Ft={args:{...Ue.args,dataSource:F,columns:V({orderIdVisible:!0,orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,isPrimaryKey:!0}),modules:{GroupModule:te,FilterModule:$,ColumnChooserModule:ce,AggregateModule:ue,ContextMenuModule:oe,ResizeModule:Me,AutoFitModule:fe},dragAndDropSettings:{enabled:!0},enableContextMenu:!0,filterSettings:{enabled:!0,type:"Excel"},pageSettings:{enabled:!0},groupSettings:{enabled:!0,showDropArea:!0},showColumnChooser:!0,toolbar:["ColumnChooser"],sortSettings:{enabled:!0},textWrapSettings:{enabled:!1,wrapMode:he.Both},columnMenuSettings:{enabled:!0,showFilter:!0},editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"},aggregates:[{columns:[{field:"Freight",type:"Sum"}]}],showPerformanceMetrics:!1,initialShowSpinner:!1},argTypes:{columns:{control:"object",description:"Reusable columns used by the column menu and chooser."},columnMenuSettings:{control:"object"},editSettings:{control:"object"},groupSettings:{control:"object"},filterSettings:{control:"object"},sortSettings:{control:"object"}}},_t={args:{...Ue.args,columns:V({orderIdVisible:!0,orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,isPrimaryKey:!0}),enableSearching:!0,searchOperator:"contains",builtInThemes:"material",height:"600px",pageSettings:{enabled:!0,pageSize:10},modules:{ColumnChooserModule:ce,FilterModule:$,PagerModule:q,GroupModule:te,ToolbarModule:le,SearchModule:me},toolbar:["ColumnChooser","Search"],showColumnChooser:!0,ignoreAccent:!0,sortDirection:"None",useCustomOrder:!1,templateMode:"full",columnChooserMode:"deferred",columnChooserDelay:1500,showEmployee:!1},render:r=>{const e=r;return o.jsx(Sn,{columns:e.columns,dataSource:e.dataSource,builtInThemes:e.builtInThemes,height:e.height,pageSettings:e.pageSettings,editSettings:e.editSettings,modules:e.modules,toolbar:e.toolbar,showColumnChooser:e.showColumnChooser,enableSearching:e.enableSearching,searchOperator:e.searchOperator,ignoreAccent:e.ignoreAccent,sortDirection:e.sortDirection,useCustomOrder:e.useCustomOrder,templateMode:e.templateMode,columnChooserMode:e.columnChooserMode,columnChooserDelay:e.columnChooserDelay,showEmployee:e.showEmployee})},argTypes:{columns:{control:"object",description:"Reusable column definitions passed to the advanced Column Chooser sample."},dataSource:{control:"object"},builtInThemes:{control:"select",options:["bootstrap","tailwind","material"]},height:{control:"text"},pageSettings:{control:"object"},editSettings:{control:"object"},modules:{control:"object"},toolbar:{control:"object"},showColumnChooser:{control:"boolean"},enableSearching:{control:"boolean"},searchOperator:{control:"select",options:["startsWith","endsWith","contains","equal","notEqual"]},ignoreAccent:{control:"boolean"},sortDirection:{control:"select",options:["None","Ascending","Descending"]},useCustomOrder:{control:"boolean"},templateMode:{control:"select",options:["default","header","footer","both","full"]},columnChooserMode:{control:"radio",options:["deferred","immediate"]},columnChooserDelay:{control:{type:"number",min:0,step:100}},showEmployee:{control:"boolean"}}},Pt={args:{...Ue.args,columns:V({orderIdVisible:!0,orderDateVisible:!0,freightVisible:!0}),builtInThemes:"material",printRange:"CurrentPage",printTitle:"Grid Print Export",height:"600px"},render:r=>o.jsx(Uu,{...r}),argTypes:{columns:{control:"object",description:"Reusable Grid column definitions used by the print sample."},builtInThemes:{control:"select",options:["bootstrap","tailwind","material"]},enableRtl:{control:"boolean"},gridLines:{control:"select",options:["Default","None","Both","Horizontal","Vertical"]},height:{control:"text"},width:{control:"text"},printRange:{control:"select",options:["All","CurrentPage","Custom"]},printTitle:{control:"text"}}},Bt={args:{...Ue.args,editScenario:"lockCustomer",columns:Wu,dataSource:F.slice(0,15),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Cell"},modules:{EditModule:ne,PagerModule:q},pageSettings:{enabled:!0,pageSize:10},height:450,textWrapSettings:{enabled:!1,wrapMode:he.Both}},render:r=>o.jsx(Ku,{...r}),argTypes:{columns:{control:"object",description:"Reusable Basic Grid columns used by the cell-edit sample."},dataSource:{control:"object"},editSettings:{control:"object"},modules:{control:"object"},pageSettings:{control:"object"},height:{control:"text"},editScenario:{control:"select",options:["allowAll","lockCustomer","lockHighFreight"]}}},It={args:{...Ue.args,dataSource:F.slice(0,50),columns:V({orderIdVisible:!0,orderDateVisible:!1,shipNameVisible:!1}),modules:{PagerModule:q,GroupModule:te,ReorderModule:Tn},dragAndDropSettings:{enabled:!0},textWrapSettings:{enabled:!1,wrapMode:he.Both},selectionSettings:{mode:"Multiple",persistSelection:!0},groupSettings:{enabled:!0,showDropArea:!0},pageSettings:{enabled:!0,pageSize:10},showPerformanceMetrics:!1,initialShowSpinner:!1}},zt={args:{dataSource:F,toolbar:["PdfExport"],pageSettings:{enabled:!0},resizeSettings:{enabled:!0},modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se,ResizeModule:Me,AutoFitModule:fe},height:"79vh",rowHeight:50,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,isActiveVisible:!1,shipCityVisible:!1,isPrimaryKey:!0}),filterSettings:{enabled:!1},pdfOrientation:"Landscape",pdfPageSize:"A4",pdfRange:"All",useCustomColumnWidths:!1},parameters:{docs:{description:{story:"PDF Export - Minimal working sample demonstrating PDF export functionality with Pure React Grid"}}}},Lt={args:{dataSource:Au,enableHover:!0,enableRtl:!1,resizeSettings:{enabled:!0},gridLines:"Both",width:"100%",height:"600",sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({allowEdit:!0,allowAdd:!0,allowDelete:!0}),enableAutoSpan:!0,columns:[{field:"S_NO",headerText:"S No",width:"120",isPrimaryKey:!0,textAlign:"Right"},{field:"OrderID_A",headerText:"Order ID",width:"160",textAlign:"Right",colSpan:!0,rowSpan:!0},{field:"Customer_A",headerText:"Customer_A",width:"160",colSpan:!0,rowSpan:!0},{field:"Customer_B",headerText:"Customer_B",width:"160",colSpan:!0,rowSpan:!0},{field:"OrderID_B",headerText:"OrderID_B OrderID_B OrderID_B OrderID_B OrderID_B",width:"160",colSpan:!0,rowSpan:!0},{field:"Status_A",headerText:"Status_A",width:"160",colSpan:!0,rowSpan:!0},{field:"Status_B",headerText:"Status_B",width:"160",colSpan:!0,rowSpan:!0},{field:"Category_A",headerText:"Category_A",width:"160",colSpan:!0,rowSpan:!0},{field:"Category_B",headerText:"Category_B",width:"160",colSpan:!0,rowSpan:!0},{field:"Quantity_A",headerText:"Quantity_A",width:"160",colSpan:!0,rowSpan:!0},{field:"Quantity_B",headerText:"Quantity_B",width:"160",colSpan:!0,rowSpan:!0},{field:"UnitPrice_A",headerText:"UnitPrice_A",width:"160",colSpan:!0,rowSpan:!0},{field:"ProductName_A",headerText:"ProductName_A",width:"160",colSpan:!0,rowSpan:!0},{field:"UnitPrice_B",headerText:"UnitPrice_B",width:"160",colSpan:!0,rowSpan:!0},{field:"ShipCountry_A",headerText:"ShipCountry_A",width:"160",colSpan:!0,rowSpan:!0},{field:"TotalAmount_A",headerText:"TotalAmount_A",width:"160",colSpan:!0,rowSpan:!0},{field:"TotalAmount_B",headerText:"TotalAmount_B",width:"160",colSpan:!0,rowSpan:!0},{field:"ShipCountry_B",headerText:"ShipCountry_B",width:"160",colSpan:!0,rowSpan:!0},{field:"ShipName_A",headerText:"ShipName_A",width:"160",colSpan:!0,rowSpan:!0},{field:"Warehouse_A",headerText:"Warehouse_A",width:"160",colSpan:!0,rowSpan:!0},{field:"ShipCity_A",headerText:"ShipCity_A",width:"160",colSpan:!0,rowSpan:!0},{field:"ShipCity_B",headerText:"ShipCity_B",width:"160",colSpan:!0,rowSpan:!0},{field:"Warehouse_B",headerText:"Warehouse_B",width:"160",colSpan:!0,rowSpan:!0},{field:"PaymentMethod_A",headerText:"PaymentMethod_A",width:"160",colSpan:!0,rowSpan:!0},{field:"SalesPerson_A",headerText:"SalesPerson_A",width:"160",colSpan:!0,rowSpan:!0},{field:"IsPriority",headerText:"IsGift",width:"160",textAlign:"Right",colSpan:!0,rowSpan:!0},{field:"IsGift",headerText:"IsGift IsGift IsGift IsGift IsGift IsGift",width:"160",textAlign:"Right",colSpan:!0,rowSpan:!0},{field:"Remarks",headerText:"Remarks",width:"160",colSpan:!0,rowSpan:!0}],modules:{GridAllModules:Sa},showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["Add","Edit","Delete","Update","Cancel","ColumnChooser"]},parameters:{docs:{description:{story:"Spanning - Demonstrates a Row and Column spanning"}}}},Ht={args:{dataSource:Hu,enableHover:!0,enableRtl:!1,gridLines:"Both",rowHeight:60,selectionSettings:{enableToggle:!0,mode:ca.Multiple},textWrapSettings:{enabled:!1,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0,pageSize:8,pageCount:4},sortSettings:{enabled:!0},groupSettings:{enabled:!0,showDropArea:!0},filterSettings:{enabled:!0,type:"Excel"},modules:{GridAllModules:Sa},editSettings:We({allowEdit:!0,allowAdd:!0,allowDelete:!0}),columns:Vu,reorderSettings:{enabled:!0},showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["Add","Edit","Delete","Update","Cancel","ColumnChooser"]},parameters:{docs:{description:{story:"Stacked Header - Demonstrates a multi-level stacked-header layout built entirely from a programmatic ColumnProps[] (including nested 'columns' groups) rather than from JSX. Mirrors the layout of the static 'Spanning Sample' but is configured dynamically inside the story."}}}},Vt={args:{dataSource:F,resizeSettings:{enabled:!0},modules:{GridAllModules:Sa},virtualizationSettings:{scrollMode:Aa.Virtual},searchSettings:{enabled:!0},distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,enableRtl:!1,gridLines:"Default",height:"81vh",selectionSettings:{mode:"Multiple"},textWrapSettings:{enabled:!0,wrapMode:he.Both},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,shipNameWidth:"130",salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["ColumnChooser"]}},Ot={args:{dataSource:F,selectionSettings:{enableToggle:!0,mode:ca.Multiple},width:"100%",sortSettings:{enabled:!0},groupSettings:{enabled:!0,showDropArea:!0},filterSettings:{enabled:!0,type:"Excel"},editSettings:We({allowEdit:!0,allowAdd:!0,allowDelete:!0}),columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,isActiveVisible:!1,shipCityVisible:!1,isPrimaryKey:!0}),reorderSettings:{enabled:!0},contextMenuSettings:{enabled:!0},enableContextMenu:!0,showPerformanceMetrics:!0,initialShowSpinner:!1,pageSettings:{pageSize:7,currentPage:1,enabled:!0},dragAndDropSettings:{enabled:!0},onRowDragStart:function(r){console.log("onRowDragStart => ",r)},onRowDrag:function(r){console.log("onRowDrag => ",r)},onRowDrop:function(r){console.log("onRowDrop => ",r)},modules:{PagerModule:q,FilterModule:$,GroupModule:te,AggregateModule:ue,ReorderModule:Tn,ContextMenuModule:oe,EditModule:ne},showAggregates:!0},parameters:{docs:{description:{story:"Row drag and drop - Demonstrates the ability to reorder rows within the grid."}}}},Ut={args:{dataSource:F,modules:{GridAllModules:Sa},virtualizationSettings:{scrollMode:Aa.Virtual},searchSettings:{enabled:!0},distinctShipCountryDataSource:Oe.distinct(F,"ShipCountry",!0),enableHover:!0,enableRtl:!1,gridLines:"Default",height:"81vh",selectionSettings:{mode:"Multiple"},width:"100%",pageSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},editSettings:ta,reorderSettings:{enabled:!0},enableStickyHeader:!0,enableHtmlSanitizer:!0,columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!0,shipNameWidth:"130",salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),showPerformanceMetrics:!0,initialShowSpinner:!1,toolbar:["ColumnChooser"],resizeSettings:{enabled:!0}}},Ea=Jo(30);var Cr,Sr;const vl=new Set([(Cr=Ea[1])==null?void 0:Cr.OrderID,(Sr=Ea[15])==null?void 0:Sr.OrderID]);var Nr;const El=new Set([(Nr=Ea[1])==null?void 0:Nr.OrderID]);var wr,xr,vr;const Al=new Set([(wr=Ea[27])==null?void 0:wr.OrderID,(xr=Ea[28])==null?void 0:xr.OrderID,(vr=Ea[29])==null?void 0:vr.OrderID]),Wt={args:{...Ue.args,dataSource:Ea,height:550,showPerformanceMetrics:!1,initialShowSpinner:!1,pinningSettings:{enabled:!0,type:Dn.Row,allowTopPin:!0,allowBottomPin:!0},pageSettings:{enabled:!1},filterSettings:{enabled:!0},selectionSettings:{mode:"Multiple",persistSelection:!0},dragAndDropSettings:{enabled:!0},editSettings:We({allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"}),toolbar:["Add","Edit","Delete","Update","Cancel"],isRowPinned:r=>vl.has(r.OrderID)?"top":Al.has(r.OrderID)?"bottom":null,isRowPinnable:r=>!El.has(r.OrderID),enableContextMenu:!0,columns:V({orderIdVisible:!0,orderIdWidth:"120",orderIdTextAlign:"Right",orderDateVisible:!1,freightVisible:!0,shipCountryVisible:!0,shipNameVisible:!1,salaryVisible:!1,costVisible:!1,isActiveVisible:!1,shipCityVisible:!0,commandActionsVisible:!1,isPrimaryKey:!0,enablePinningColumn:!0}),modules:{PagerModule:q,FilterModule:$,PinningModule:rn,EditModule:ne,ContextMenuModule:oe}},parameters:{docs:{description:{story:"Row Pinning Sample — first rows are pinned to top and bottom via args. Column definitions can be adjusted through Storybook args."}}}},Kt=r=>r.field==="OrderID"||r.field==="CustomerName"||r.field==="Freight"?cn.Left:"",jt={args:{dataSource:F,height:500,showPerformanceMetrics:!1,initialShowSpinner:!1,pinningSettings:{enabled:!0,type:Dn.Column},resizeSettings:{enabled:!1},pageSettings:{enabled:!0},selectionSettings:{mode:"Multiple"},filterSettings:{enabled:!0},sortSettings:{enabled:!0},enableContextMenu:!0,groupSettings:{enabled:!0,showDropArea:!0},aggregates:[{columns:[{field:"Freight",type:"Sum"}]}]},render:r=>o.jsx(ma,{...r,modules:{PagerModule:q,FilterModule:$,PinningModule:rn,ContextMenuModule:oe,AggregateModule:ue,GroupModule:te,ResizeModule:Me,AutoFitModule:fe},children:o.jsxs(et,{children:[o.jsx(W,{field:"OrderID",headerText:"Order ID",width:"140",isPrimaryKey:!0,pinDirection:Kt}),o.jsx(W,{field:"Cost",headerText:"Cost",width:"140",format:"C2",pinDirection:Kt}),o.jsx(W,{field:"CustomerID",headerText:"Customer ID",width:"150",pinDirection:Kt}),o.jsx(W,{field:"CustomerName",headerText:"Customer Name",width:"180",pinDirection:Kt}),o.jsx(W,{field:"Freight",headerText:"Freight",width:"140",format:"C2"}),o.jsx(W,{field:"IsActive",headerText:"Active",width:"120"}),o.jsx(W,{field:"OrderDate",headerText:"Order Date",width:"180"}),o.jsx(W,{field:"Salary",headerText:"Salary",width:"140",format:"C2"}),o.jsx(W,{field:"ShipAddress",headerText:"Ship Address",width:"180"}),o.jsx(W,{field:"ShipCity",headerText:"Ship City",width:"140",pinDirection:"Right"}),o.jsx(W,{field:"ShipCountry",headerText:"Ship Country",width:"150"}),o.jsx(W,{field:"ShipName",headerText:"Ship Name",width:"220"}),o.jsx(W,{field:"ShippedDate",headerText:"Shipped Date",width:"180",pinDirection:"Right"})]})}),parameters:{docs:{description:{story:"Demonstrates left and right column pinning during horizontal scrolling."}}}},qt={args:{dataSource:F,height:"100%",showPerformanceMetrics:!1,initialShowSpinner:!1,pinningSettings:{enabled:!0,type:Dn.Both,allowTopPin:!0,allowBottomPin:!0},columns:V({orderIdVisible:!0,orderIdWidth:"140",shipNameVisible:!0,shipNameWidth:"220",isPrimaryKey:!0}).map(r=>r.field==="OrderID"?{...r,pinDirection:cn.Left}:r.field==="ShipName"?{...r,pinDirection:cn.Right}:r),pageSettings:{enabled:!0,pageSize:30},selectionSettings:{mode:"Multiple",persistSelection:!0},filterSettings:{enabled:!0},enableContextMenu:!0,isRowPinned:r=>vl.has(r.OrderID)?"top":Al.has(r.OrderID)?"bottom":null,isRowPinnable:r=>!El.has(r.OrderID),modules:{PagerModule:q,FilterModule:$,PinningModule:rn,ContextMenuModule:oe,AggregateModule:ue},showAggregates:!0},parameters:{docs:{description:{story:"Demonstrates row pinning and left/right column pinning together."}}}},ju=Ms(),Zt={args:{dataSource:ju,height:550,showPerformanceMetrics:!1,initialShowSpinner:!1,toolbar:["Add","Edit","Delete","Update","Cancel"],editSettings:{allowEdit:!0,allowDelete:!0,mode:"Cell"},sortSettings:{enabled:!0},pageSettings:{enabled:!0,pageSize:8,pageCount:4},filterSettings:{enabled:!0,type:"CheckBox"},enableHover:!1,selectionSettings:{type:"Multiple",mode:"Cell"},formulaSettings:{enabled:!0}},render:r=>o.jsx(ma,{...r,modules:{FormulaModule:_n,EditModule:ne,PagerModule:q,ToolbarModule:le,FilterModule:$},children:o.jsxs(et,{children:[o.jsx(W,{field:"OrderID",headerText:"Order ID",isPrimaryKey:!0,width:"80"}),o.jsx(W,{field:"ProductName",headerText:"Product Name",width:"120"}),o.jsx(W,{field:"Quantity",headerText:"Quantity",width:"80",textAlign:"Right"}),o.jsx(W,{field:"PricePerUnit",headerText:"Price / Unit",width:"120",format:"C2",textAlign:"Right"}),o.jsx(W,{field:"GrossAmount",headerText:"Gross Amount",width:"120",format:"C2",allowFormula:!0,textAlign:"Right"})]})}),parameters:{docs:{description:{story:"Demonstrates formula cell functionality within the grid."}}}},$t={args:{dataSource:F,adaptiveSettings:{enabled:!0,dialogTarget:".sf-mobile-content"},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"CheckBox"},searchSettings:{enabled:!0},groupSettings:{enabled:!0,showDropArea:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Popup",confirmOnDelete:!0},toolbar:["Add","Edit","Delete","Update","Cancel","Search","ColumnChooser"],selectionSettings:{mode:"Multiple",persistSelection:!0},pageSettings:{enabled:!0,pageSize:5},modules:{FilterModule:$,EditModule:ne,ToolbarModule:le,ColumnChooserModule:ce,PagerModule:q,ClipboardModule:pe,GroupModule:te,SearchModule:me},width:"100%",height:"100%"},render:r=>o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .sf-mobile-layout {
          position: relative;
          width: 360px;
          height: 640px;
          margin: auto;
          border-width: 60px 16px;
          border-style: solid;
          border-color: rgb(244, 244, 244);
          border-image: none;
          border-radius: 36px;
          box-shadow: rgb(144, 144, 144) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 0px 10px;
        }

        .sf-mobile-layout .sf-mobile-content {
          position: relative;
          overflow: hidden;
          height: 100%;
          background: white;
        }
      `}),o.jsx(ma,{...r,gridContentWrapper:e=>o.jsx("div",{className:"sf-mobile-layout",children:o.jsx("div",{className:"sf-mobile-content",children:e})}),children:o.jsxs(et,{children:[o.jsx(W,{field:"OrderID",headerText:"Order ID",isPrimaryKey:!0,width:"110"}),o.jsx(W,{field:"CustomerName",headerText:"Customer",width:"160"}),o.jsx(W,{field:"ShipCountry",headerText:"Ship Country",width:"140"}),o.jsx(W,{field:"Freight",headerText:"Freight",format:"C2",width:"110"})]})})]}),parameters:{docs:{description:{story:"Adaptive dialogs (CheckBox filter, Popup edit form, Delete confirmation, and Column Chooser) render full-screen inside the mobile layout via adaptiveSettings.dialogTarget. The toolbar shows icons only and hides the editing items for a cleaner mobile UI."}}}},Xt={args:{dataSource:F,adaptiveSettings:{enabled:!0,rowRenderingMode:"Vertical",dialogTarget:".sf-mobile-content"},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"CheckBox"},searchSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Popup",confirmOnDelete:!0},toolbar:["Add","Edit","Delete","Update","Cancel","Search","ColumnChooser"],modules:{ToolbarModule:le,PagerModule:q,ColumnChooserModule:ce,SearchModule:me,ClipboardModule:pe,FilterModule:$,EditModule:ne},selectionSettings:{mode:"Multiple",persistSelection:!0},pageSettings:{enabled:!0,pageSize:5},width:"100%",height:"100%"},render:r=>o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .sf-mobile-layout {
          position: relative;
          width: 360px;
          height: 640px;
          margin: auto;
          border-width: 60px 16px;
          border-style: solid;
          border-color: rgb(244, 244, 244);
          border-image: none;
          border-radius: 36px;
          box-shadow: rgb(144, 144, 144) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 0px 10px;
        }

        .sf-mobile-layout .sf-mobile-content {
          position: relative;
          overflow: hidden;
          height: 100%;
          background: white;
        }
      `}),o.jsx(ma,{...r,gridContentWrapper:e=>o.jsx("div",{className:"sf-mobile-layout",children:o.jsx("div",{className:"sf-mobile-content",children:e})}),children:o.jsxs(et,{children:[o.jsx(W,{field:"OrderID",headerText:"Order ID",width:"110"}),o.jsx(W,{field:"CustomerName",headerText:"Customer",width:"160"}),o.jsx(W,{field:"ShipCountry",headerText:"Ship Country",width:"140"}),o.jsx(W,{field:"Freight",headerText:"Freight",format:"C2",width:"110"})]})})]}),parameters:{docs:{description:{story:"Vertical row rendering: header hidden, each record stacked with field label on the left and value on the right. The grid and its toolbar render inside the mobile layout, the action buttons stay outside it, and the full-screen adaptive dialogs open inside the layout via adaptiveSettings.dialogTarget."}}}},Yt={args:{dataSource:F.slice(0,40).map((r,e)=>({...r,IsSummary:e%6===5})),enableHover:!0,height:"81vh",width:"100%",pageSettings:{enabled:!0,pageSize:12},sortSettings:{enabled:!0},filterSettings:{enabled:!0},enableStickyHeader:!0,modules:{ClipboardModule:pe,FilterModule:$,EditModule:ne,PagerModule:q,GroupModule:te,ToolbarModule:le,ContextMenuModule:oe,ColumnChooserModule:ce,SearchModule:me,CommandColumnModule:Ce,AggregateModule:ue,AutoFillModule:Se},columns:V({orderIdVisible:!0,orderIdWidth:"180",orderDateVisible:!0,freightVisible:!0,shipCountryVisible:!0,isPrimaryKey:!0,shipNameVisible:!0,salaryVisible:!0,costVisible:!0,isActiveVisible:!0,shipCityVisible:!0,commandActionsVisible:!1}),fullWidthRow:r=>r.data.IsSummary?o.jsx(Nn,{data:r.data,rowIndex:r.rowIndex}):null,showPerformanceMetrics:!1,initialShowSpinner:!1},parameters:{docs:{description:{story:"Demonstrates the fullWidthRow callback: rows flagged as summary rows render as full-width rows spanning the grid width, while other rows keep column-based rendering. Works with filtering and paging."}}}},Qt={args:{dataSource:F,height:465,showPerformanceMetrics:!1,initialShowSpinner:!1,toolbar:["Find"],findSettings:{enabled:!0,currentPageOnly:!1,caseSensitive:!1,searchDetail:!0},searchSettings:{enabled:!0},columns:V({orderIdVisible:!0,orderIdWidth:"180",orderIdTextAlign:"Right",orderDateVisible:!1,isActiveVisible:!1,shipCityVisible:!1,isPrimaryKey:!0})},render:r=>o.jsx(ma,{...r,modules:{ToolbarModule:le,SearchModule:me,FindModule:bs,FormulaModule:_n}}),parameters:{docs:{description:{story:"Demonstrates Find matching, highlighting, and match navigation in the grid."}}}};var Er,Ar,Dr;Ue.parameters={...Ue.parameters,docs:{...(Er=Ue.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    // scrollMode: ScrollMode.Virtual,
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // enableCache: false
    },
    searchSettings: {
      enabled: true
    },
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true) as DynamicDataItem[],
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '81vh',
    selectionSettings: {
      mode: 'Multiple'
    },
    // enableToggle: true,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    // rowHeight: 50,
    // getRowHeight: () => {
    //   return 100;
    // },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      shipNameWidth: '130',
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['ColumnChooser'],
    resizeSettings: {
      enabled: true
    }
  }
}`,...(Dr=(Ar=Ue.parameters)==null?void 0:Ar.docs)==null?void 0:Dr.source}}};var Tr,Rr,Gr;mt.parameters={...mt.parameters,docs:{...(Tr=mt.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    searchSettings: {
      enabled: true
    },
    resizeSettings: {
      enabled: true
    },
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true) as DynamicDataItem[],
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '81vh',
    clipboardSettings: {
      allowPaste: true,
      allowCut: true
    },
    selectionSettings: {
      mode: 'Multiple',
      type: SelectionType.Row
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    modules: {
      GridAllModules
    },
    // modules: {
    //   ClipboardModule,
    //   FilterModule,
    //   EditModule,
    //   PagerModule,
    //   GroupModule,
    //   ToolbarModule,
    //   ContextMenuModule,
    //   ColumnChooserModule,
    //   SearchModule,
    //   CommandColumnModule,
    //   AggregateModule,
    //   AutoFillModule,
    //   ResizeModule,
    //   AutoFitModule
    // },
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    // rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      shipNameWidth: '130',
      orderIDFilterType: "CheckBox",
      shipCountryFilterType: "CheckBox",
      orderDateFilterType: "Menu",
      frightFilterType: "Menu",
      customerIDFilterType: "Menu",
      isPrimaryKey: true
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
  }
}`,...(Gr=(Rr=mt.parameters)==null?void 0:Rr.docs)==null?void 0:Gr.source}}};var kr,Fr,_r;ct.parameters={...ct.parameters,docs:{...(kr=ct.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 10),
    enableHover: true,
    resizeSettings: {
      enabled: true
    },
    enableRtl: false,
    gridLines: 'Horizontal',
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    rowHeight: 50,
    width: '100%',
    virtualizationSettings: {
      type: VirtualDomType.Column
    },
    sortSettings: {
      enabled: false
    },
    filterSettings: {
      enabled: false
    },
    pageSettings: {
      enabled: false
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Left',
      orderDateVisible: true,
      freightVisible: false,
      shipCountryVisible: false,
      isPrimaryKey: true,
      shipNameVisible: false,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false
  }
}`,...(_r=(Fr=ct.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var Pr,Br,Ir;ht.parameters={...ht.parameters,docs:{...(Pr=ht.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 20),
    enableHover: true,
    enableRtl: false,
    gridLines: 'Both',
    height: '81vh',
    width: '100%',
    columns: createGridColumns({
      orderIdVisible: true,
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      isPrimaryKey: true
    }),
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    pageSettings: {
      enabled: true,
      pageSize: 10
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Menu'
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    aggregates: [{
      columns: [{
        field: 'Freight',
        type: 'Sum'
      }]
    }],
    reorderSettings: {
      enabled: true
    },
    columnChooserSettings: {
      enableReorder: true
    },
    sideBar: {
      enabled: true,
      toolPanels: ['columns', 'filters'],
      defaultToolPanel: 'columns',
      position: 'right'
    },
    modules: {
      GridAllModules
    },
    showPerformanceMetrics: false,
    initialShowSpinner: false
  }
}`,...(Ir=(Br=ht.parameters)==null?void 0:Br.docs)==null?void 0:Ir.source}}};var zr,Lr,Hr;pt.parameters={...pt.parameters,docs:{...(zr=pt.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 20),
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true) as DynamicDataItem[],
    enableHover: true,
    resizeSettings: {
      enabled: true
    },
    enableRtl: false,
    gridLines: 'Both',
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: false
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: false
    },
    editSettings: defaultEditSettings,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Center',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true,
      useShipCountryTemplate: true
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false
  }
}`,...(Hr=(Lr=pt.parameters)==null?void 0:Lr.docs)==null?void 0:Hr.source}}};var Vr,Or,Ur;yt.parameters={...yt.parameters,docs:{...(Vr=yt.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 20),
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: false
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: false
    },
    editSettings: defaultEditSettings,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false
  }
}`,...(Ur=(Or=yt.parameters)==null?void 0:Or.docs)==null?void 0:Ur.source}}};var Wr,Kr,jr;gt.parameters={...gt.parameters,docs:{...(Wr=gt.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 20),
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: false
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Center',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      isPrimaryKey: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false
  }
}`,...(jr=(Kr=gt.parameters)==null?void 0:Kr.docs)==null?void 0:jr.source}}};var qr,Zr,$r;ft.parameters={...ft.parameters,docs:{...(qr=ft.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 30),
    enableHover: true,
    enableRtl: true,
    gridLines: 'Default',
    resizeSettings: {
      enabled: true
    },
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      isPrimaryKey: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false
  }
}`,...($r=(Zr=ft.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var Xr,Yr,Qr;Mt.parameters={...Mt.parameters,docs:{...(Xr=Mt.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
  args: {
    // dataSource: new DataManager({
    //   url: 'https://services.syncfusion.com/js/production/api/Orders',
    //   adaptor: new WebApiAdaptor()
    // }),
    pageSettings: {
      enabled: true,
      pageSize: 12
    },
    resizeSettings: {
      enabled: true
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    dataSource: new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
      adaptor: new ODataV4Adaptor()
    }),
    // children: <></>, // no column remote data(no column checkbox not possible on current implementation strategy)
    isPreventAutoHeight: true,
    // enable dom virtualization, height: auto not support/compatible
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    // virtualizationSettings: {type: VirtualDomType.Column, scrollMode: ScrollMode.Virtual},  // remote data virtual scroll request
    // virtualizationSettings: {type: VirtualDomType.Column},
    // pageSettings: {pageSize: 50},
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '68vh',
    selectionSettings: {
      mode: 'Multiple'
    },
    // textWrapSettings: { enabled: true, wrapMode: WrapMode.Both },
    rowHeight: 50,
    width: '100%',
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true,
      checkBoxSelection: true
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: true
  }
}`,...(Qr=(Yr=Mt.parameters)==null?void 0:Yr.docs)==null?void 0:Qr.source}}};var Jr,ei,ai;bt.parameters={...bt.parameters,docs:{...(Jr=bt.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        // \`pageSettings.enableCache\` (opsx-20261012-custom-binding-paging-cache):
        // with \`enableCache: true\` the Grid caches each custom-binding page
        // response keyed by (skip, take, query context). Revisiting a previously
        // loaded page with unchanged filters/sorts does NOT raise \`onDataRequest\`
        // again. Toggle the pageSettings.enableCache control in the args table
        // below the story to switch the caching behavior on and off; sorting,
        // searching, filtering or grouping changes the query context and
        // clears the cache.
        story: 'Custom data binding with \`onDataRequest\`. Set \`pageSettings.enableCache\` in the controls to enable the Grid-owned paging cache.'
      }
    }
  },
  args: {
    // dataSource: {
    //   result: CustomBindingData.slice(0, 12),
    //   count: CustomBindingData.length,
    //   // result: [],
    //   // count: 0,
    //   aggregates: {
    //     'Freight - sum': 555,
    //     'ShipCountry - count': 666
    //   } as any
    // },
    dataSource: data,
    resizeSettings: {
      enabled: true
    },
    loadingIndicatorSettings: {
      indicatorType: LoadingIndicatorType.Shimmer
    },
    pageSettings: {
      enabled: true,
      enableCache: true
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '70vh',
    selectionSettings: {
      mode: 'Single'
    },
    // textWrapSettings: { enabled: true, wrapMode: WrapMode.Both },
    rowHeight: 50,
    width: '100%',
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: editableEditSettings,
    isCustomBinding: true,
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: false,
      shipNameWidth: '130',
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['Add', 'Edit', 'Cancel', 'Update', 'Delete', 'Search'],
    customBindingAggregates: true
  }
}`,...(ai=(ei=bt.parameters)==null?void 0:ei.docs)==null?void 0:ai.source}}};var ti,ni,ri;Ct.parameters={...Ct.parameters,docs:{...(ti=Ct.parameters)==null?void 0:ti.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    resizeSettings: {
      enabled: true
    },
    enableRtl: false,
    gridLines: 'Both',
    height: '81vh',
    selectionSettings: {
      mode: 'Single'
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    rowHeight: 50,
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: false,
      salaryVisible: true,
      costVisible: true,
      isPrimaryKey: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true
  }
}`,...(ri=(ni=Ct.parameters)==null?void 0:ni.docs)==null?void 0:ri.source}}};var ii,oi,li;St.parameters={...St.parameters,docs:{...(ii=St.parameters)==null?void 0:ii.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    height: 500,
    columns: [{
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100,
      isPrimaryKey: true,
      textAlign: 'Right'
    }, {
      field: 'CustomerName',
      headerText: 'Customer Name',
      width: 150
    }, {
      field: 'Freight',
      headerText: 'Freight',
      width: 100,
      format: 'C2'
    }, {
      field: 'ShipCity',
      headerText: 'Ship City',
      width: 100,
      type: 'number'
    }],
    modules: {
      GridAllModules
    },
    selectionSettings: {
      type: SelectionType.Row,
      mode: SelectionMode.Multiple,
      enableToggle: true
    },
    filterSettings: {
      enabled: true
    },
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    pageSettings: {
      enabled: true
    },
    statusBarSettings: {
      "enabled": true,
      "items": [{
        "type": "TotalRowCount",
        "position": "Left",
        "key": "totalRows",
        "statusPanelParams": {}
      }, {
        "type": "FilteredRowCount",
        "position": "Left",
        "key": "filteredRows"
      }, {
        "type": "TotalAndFilteredRowCount",
        "position": "Center",
        "key": "combinedRows"
      }, {
        "type": "SelectedRowCount",
        "position": "Right",
        "key": "selectedRows"
      }, {
        "type": "Custom",
        "position": "Right",
        "key": "customSummary",
        "statusPanelParams": {
          "label": "Orders loaded"
        }
      }]
    }
  }
}`,...(li=(oi=St.parameters)==null?void 0:oi.docs)==null?void 0:li.source}}};var si,di,ui;Nt.parameters={...Nt.parameters,docs:{...(si=Nt.parameters)==null?void 0:si.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    height: 500,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      freightVisible: true,
      shipNameVisible: false,
      salaryVisible: true,
      costVisible: true,
      isPrimaryKey: true,
      shipCityVisible: true,
      shipCountryVisible: false,
      isActiveVisible: false,
      customerIDVisible: false,
      commandActionsVisible: false
    }),
    modules: {
      GridAllModules
    },
    selectionSettings: {
      type: SelectionType.Cell,
      mode: SelectionMode.Multiple,
      enableToggle: true
    },
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    statusBarSettings: {
      enabled: true,
      items: [{
        type: 'TotalRowCount',
        position: 'Left',
        key: 'totalRows'
      }, {
        type: 'SelectionAggregates',
        position: 'Right',
        key: 'aggregates',
        statusPanelParams: {
          aggregateFunctions: ['Sum', 'Average', 'Count', 'Min', 'Max']
        }
      }]
    }
  }
}`,...(ui=(di=Nt.parameters)==null?void 0:di.docs)==null?void 0:ui.source}}};var mi,ci,hi;wt.parameters={...wt.parameters,docs:{...(mi=wt.parameters)==null?void 0:mi.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '75vh',
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    toolbar: ['Add', 'Edit', 'Search', 'Cancel', 'Update', 'Delete'],
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    searchSettings: {
      enabled: true
    },
    editSettings: createEditSettings({
      mode: 'Normal',
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }),
    // modules: { GridAllModules },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    clipboardSettings: {
      allowRowCopy: true
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: false,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true
  }
}`,...(hi=(ci=wt.parameters)==null?void 0:ci.docs)==null?void 0:hi.source}}};var pi,yi,gi;xt.parameters={...xt.parameters,docs:{...(pi=xt.parameters)==null?void 0:pi.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true),
    // pageSettings: {currentPage: 9},
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Default',
    height: '81vh',
    selectionSettings: {
      mode: 'Multiple',
      enableToggle: true
    },
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: createEditSettings({
      allowEdit: true,
      allowDelete: true
    }),
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true,
      checkBoxSelection: true
    }),
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['Delete', 'Search']
  }
}`,...(gi=(yi=xt.parameters)==null?void 0:yi.docs)==null?void 0:gi.source}}};var fi,Mi,bi;vt.parameters={...vt.parameters,docs:{...(fi=vt.parameters)==null?void 0:fi.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    // virtualizationSettings: {enabled: false},
    height: '68vh',
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    toolbar: ['Add'],
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal'
    }),
    // modules: { GridAllModules },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: true,
      isPrimaryKey: true
    }),
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true
  }
}`,...(bi=(Mi=vt.parameters)==null?void 0:Mi.docs)==null?void 0:bi.source}}};var Ci,Si,Ni;Et.parameters={...Et.parameters,docs:{...(Ci=Et.parameters)==null?void 0:Ci.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '68vh',
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    toolbar: ['Add', 'Edit', 'Search', 'Cancel', 'Update', 'Delete'],
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      mode: 'Popup',
      allowAdd: true,
      allowEdit: true,
      allowDelete: true
    }),
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: false,
      salaryVisible: false,
      costVisible: false,
      isActiveVisible: false,
      shipCityVisible: false,
      commandActionsVisible: false,
      shipNameWidth: '130',
      isPrimaryKey: true
    }),
    // _freightEditType: EditType.NumericTextBox,
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true
  }
}`,...(Ni=(Si=Et.parameters)==null?void 0:Si.docs)==null?void 0:Ni.source}}};var wi,xi,vi;At.parameters={...At.parameters,docs:{...(wi=At.parameters)==null?void 0:wi.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '68vh',
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    toolbar: ['Add', 'Edit', 'Search', 'Cancel', 'Update', 'Delete'],
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      mode: 'PopupTemplate',
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      popupTemplate: (props: PopupTemplateProps<DynamicDataItem>) => {
        const [formState, setFormState] = useState<FormState | null>(null);
        const validationRules: ValidationRules = {
          OrderID: {
            required: [true, 'Order ID is required'],
            number: [true, 'Order ID must be a number']
          },
          OrderDate: {
            required: [true, 'Order Date is required'],
            date: [true, 'Please enter a valid date']
          },
          Freight: {
            required: [true, 'Freight is required'],
            number: [true, 'Freight must be a number'],
            range: [[1, 1000], 'Freight must be between 1 and 1000']
          },
          CustomerID: {
            required: [true, 'Customer ID is required'],
            minLength: [3, 'Customer ID must be at least 3 characters']
          },
          ShipCountry: {
            required: [true, 'Ship Country is required']
          }
        };
        const fields = [{
          name: 'OrderID',
          placeholder: 'Enter Order ID',
          label: 'Order ID'
        }, {
          name: 'OrderDate',
          placeholder: 'Enter Order Date',
          label: 'Order Date'
        }, {
          name: 'Freight',
          placeholder: 'Enter Freight',
          label: 'Freight'
        }, {
          name: 'CustomerID',
          placeholder: 'Enter Customer ID',
          label: 'Customer ID'
        }, {
          name: 'ShipCountry',
          placeholder: 'Enter Ship Country',
          label: 'Ship Country'
        }];
        return <div className="form-container">\r
            <Form ref={formRef} initialValues={props.data as unknown as FormInitialValues} rules={validationRules} onFormStateChange={args => {
            formStateRef && (formStateRef.current = args);
            setFormState(args);
          }} validateOnChange={true} autoComplete='off'>\r
              {fields.map(field => <FormField key={field.name} name={field.name}>\r
                  <div className="form-field">\r
                    <label className="sf-form-label" htmlFor={field.name}> {field.label} </label>\r
                    <div className="sf-input-container">\r
                      {field.name === 'Freight' ? <NumericTextBox name={field.name} format='n' value={Number(formState?.values[field.name]) || null} className={formState?.errors[field.name] ? 'sf-error' : undefined} onChange={(args: NumericChangeEvent) => {
                    if (args) {
                      formState?.onChange(field.name, {
                        value: args.value
                      });
                    }
                  }} onBlur={() => formState?.onBlur(field.name)} /> : field.name === 'OrderDate' ? <DatePicker name={field.name} value={(formState?.values[field.name] || '') as Date} className={formState?.errors[field.name] ? 'sf-error' : undefined} onChange={(args: {
                    value?: Date | null;
                  }) => {
                    formState?.onChange(field.name, {
                      value: args.value as unknown as string | number | Date | null || ''
                    });
                  }} onBlur={() => formState?.onBlur(field.name)} /> : field.name === 'ShipCountry' ? <DropDownList dataSource={['USA', 'UK']} name={field.name} value={(formState?.values[field.name] || '') as string} className={formState?.errors[field.name] ? 'sf-error' : undefined} onChange={(args: DDLChangeEvent) => {
                    formState?.onChange(field.name, {
                      value: args.value as FormValueType || ''
                    });
                  }} onBlur={() => formState?.onBlur(field.name)} popupSettings={{
                    zIndex: 10000000000
                  }} /> : <TextBox name={field.name} value={(formState?.values[field.name] ?? '') as string} className={formState?.errors[field.name] ? 'sf-error' : undefined} onChange={(args: TextBoxChangeEvent) => {
                    formState?.onChange(field.name, {
                      value: args.value || ''
                    });
                  }} onBlur={() => formState?.onBlur(field.name)} disabled={!props.isAdd && field.name === 'OrderID'} />}\r
                    </div>\r
                    {formState?.errors[field.name] && <div className="sf-form-error">{formState.errors[field.name]}</div>}\r
                  </div>\r
                </FormField>)}\r
            </Form>\r
          </div>;
      },
      popupSettings: {
        className: 'custom-popup-template-grid'
      }
    }),
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: false,
      salaryVisible: false,
      costVisible: false,
      isActiveVisible: false,
      shipCityVisible: false,
      commandActionsVisible: false,
      shipNameWidth: '130',
      isPrimaryKey: true
    }),
    // _freightEditType: EditType.NumericTextBox,
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true,
    formRef: formRef,
    formStateRef: formStateRef
  }
}`,...(vi=(xi=At.parameters)==null?void 0:xi.docs)==null?void 0:vi.source}}};var Ei,Ai,Di;Dt.parameters={...Dt.parameters,docs:{...(Ei=Dt.parameters)==null?void 0:Ei.docs,source:{originalSource:`{
  args: {
    dataSource: data.slice(0, 50),
    enableHover: false,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Default',
    height: '73vh',
    selectionSettings: {
      mode: 'Multiple',
      type: 'Cell',
      cellSelectionType: 'BoxWithBorder'
    },
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    autoFillSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: false,
      allowDelete: true,
      mode: 'Normal'
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '120',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    toolbar: ['ColumnChooser']
  }
}`,...(Di=(Ai=Dt.parameters)==null?void 0:Ai.docs)==null?void 0:Di.source}}};var Ti,Ri,Gi;Tt.parameters={...Tt.parameters,docs:{...(Ti=Tt.parameters)==null?void 0:Ti.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    height: '68vh',
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    toolbar: ['Add'],
    enableContextMenu: true,
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      mode: 'Normal'
    }),
    // modules: { GridAllModules },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: false,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    cascadingData: cascadingData,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    showAggregates: true
  }
}`,...(Gi=(Ri=Tt.parameters)==null?void 0:Ri.docs)==null?void 0:Gi.source}}};var ki,Fi,_i;Rt.parameters={...Rt.parameters,docs:{...(ki=Rt.parameters)==null?void 0:ki.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: (() => {
      const columns = createGridColumns({
        // commandActionsVisible: true,
        isPrimaryKey: true
        // checkBoxSelection: true
      });
      // const commandColumns = columns.pop();
      // if (commandColumns) {
      //   columns.unshift(commandColumns);
      // }
      return columns;
    })(),
    // enableRtl: true,
    editSettings: createEditSettings({
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    }),
    toolbar: [],
    resizeSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    textWrapSettings: {
      enabled: false
    },
    columnMenuSettings: {
      enabled: true
    },
    getRowHeight: undefined,
    groupSettings: {
      enabled: true,
      showDropArea: true
      // type: GroupType.MultipleColumns
      // type: GroupType.SingleColumn
    },
    dragAndDropSettings: {
      enabled: true
    },
    rowNumberSettings: {
      enabled: true
    }
  }
}`,...(_i=(Fi=Rt.parameters)==null?void 0:Fi.docs)==null?void 0:_i.source}}};var Pi,Bi,Ii;Gt.parameters={...Gt.parameters,docs:{...(Pi=Gt.parameters)==null?void 0:Pi.docs,source:{originalSource:`{
  args: {
    enableExcelExportDemo: true,
    dataSource: data,
    enableHover: false,
    resizeSettings: {
      enabled: true
    },
    enableRtl: false,
    gridLines: 'Default',
    height: '73vh',
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: false
    },
    filterSettings: {
      enabled: false
    },
    editSettings: defaultEditSettings,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    // groupSettings: {enabled: true, columns: ['ShipName'], captionFormat: 'verbose'},
    isCustomBinding: false,
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '120',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: false,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: false,
      shipCityVisible: false,
      commandActionsVisible: false,
      isPrimaryKey: true
    }),
    showPerformanceMetrics: false,
    initialShowSpinner: false
  }
}`,...(Ii=(Bi=Gt.parameters)==null?void 0:Bi.docs)==null?void 0:Ii.source}}};var zi,Li,Hi;kt.parameters={...kt.parameters,docs:{...(zi=kt.parameters)==null?void 0:zi.docs,source:{originalSource:`{
  args: {
    // Reusing props from Default story
    ...Default.args
  },
  render: () => {
    return <div id="feature-matrix"><App /></div>;
  }
}`,...(Hi=(Li=kt.parameters)==null?void 0:Li.docs)==null?void 0:Hi.source}}};var Vi,Oi,Ui;Ft.parameters={...Ft.parameters,docs:{...(Vi=Ft.parameters)==null?void 0:Vi.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dataSource: data,
    columns: createGridColumns({
      orderIdVisible: true,
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      isPrimaryKey: true
    }),
    modules: {
      GroupModule,
      FilterModule,
      ColumnChooserModule,
      AggregateModule,
      ContextMenuModule,
      ResizeModule,
      AutoFitModule
    },
    dragAndDropSettings: {
      enabled: true
    },
    enableContextMenu: true,
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    pageSettings: {
      enabled: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    sortSettings: {
      enabled: true
    },
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    columnMenuSettings: {
      enabled: true,
      showFilter: true
    },
    editSettings: {
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal'
    },
    aggregates: [{
      columns: [{
        field: 'Freight',
        type: 'Sum'
      }]
    }],
    showPerformanceMetrics: false,
    initialShowSpinner: false
  },
  argTypes: {
    columns: {
      control: 'object',
      description: 'Reusable columns used by the column menu and chooser.'
    },
    columnMenuSettings: {
      control: 'object'
    },
    editSettings: {
      control: 'object'
    },
    groupSettings: {
      control: 'object'
    },
    filterSettings: {
      control: 'object'
    },
    sortSettings: {
      control: 'object'
    }
  }
}`,...(Ui=(Oi=Ft.parameters)==null?void 0:Oi.docs)==null?void 0:Ui.source}}};var Wi,Ki,ji;_t.parameters={..._t.parameters,docs:{...(Wi=_t.parameters)==null?void 0:Wi.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: createGridColumns({
      orderIdVisible: true,
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      isPrimaryKey: true
    }),
    enableSearching: true,
    searchOperator: 'contains',
    builtInThemes: 'material',
    height: '600px',
    pageSettings: {
      enabled: true,
      pageSize: 10
    },
    modules: {
      ColumnChooserModule,
      FilterModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      SearchModule
    },
    toolbar: ['ColumnChooser', 'Search'],
    showColumnChooser: true,
    ignoreAccent: true,
    sortDirection: 'None',
    useCustomOrder: false,
    templateMode: 'full',
    columnChooserMode: 'deferred',
    columnChooserDelay: 1500,
    showEmployee: false
  },
  render: (args: unknown) => {
    const chooserArgs = args as ColumnChooserAdvancedArgs;
    return <ColumnChooserAdvancedFeatures columns={chooserArgs.columns} dataSource={chooserArgs.dataSource as DynamicDataItem[]} builtInThemes={chooserArgs.builtInThemes} height={chooserArgs.height} pageSettings={chooserArgs.pageSettings} editSettings={chooserArgs.editSettings} modules={chooserArgs.modules} toolbar={chooserArgs.toolbar} showColumnChooser={chooserArgs.showColumnChooser} enableSearching={chooserArgs.enableSearching} searchOperator={chooserArgs.searchOperator} ignoreAccent={chooserArgs.ignoreAccent} sortDirection={chooserArgs.sortDirection} useCustomOrder={chooserArgs.useCustomOrder} templateMode={chooserArgs.templateMode} columnChooserMode={chooserArgs.columnChooserMode} columnChooserDelay={chooserArgs.columnChooserDelay} showEmployee={chooserArgs.showEmployee} />;
  },
  argTypes: {
    columns: {
      control: 'object',
      description: 'Reusable column definitions passed to the advanced Column Chooser sample.'
    },
    dataSource: {
      control: 'object'
    },
    builtInThemes: {
      control: 'select',
      options: ['bootstrap', 'tailwind', 'material']
    },
    height: {
      control: 'text'
    },
    pageSettings: {
      control: 'object'
    },
    editSettings: {
      control: 'object'
    },
    modules: {
      control: 'object'
    },
    toolbar: {
      control: 'object'
    },
    showColumnChooser: {
      control: 'boolean'
    },
    enableSearching: {
      control: 'boolean'
    },
    searchOperator: {
      control: 'select',
      options: ['startsWith', 'endsWith', 'contains', 'equal', 'notEqual']
    },
    ignoreAccent: {
      control: 'boolean'
    },
    sortDirection: {
      control: 'select',
      options: ['None', 'Ascending', 'Descending']
    },
    useCustomOrder: {
      control: 'boolean'
    },
    templateMode: {
      control: 'select',
      options: ['default', 'header', 'footer', 'both', 'full']
    },
    columnChooserMode: {
      control: 'radio',
      options: ['deferred', 'immediate']
    },
    columnChooserDelay: {
      control: {
        type: 'number',
        min: 0,
        step: 100
      }
    },
    showEmployee: {
      control: 'boolean'
    }
  }
} as unknown as Story`,...(ji=(Ki=_t.parameters)==null?void 0:Ki.docs)==null?void 0:ji.source}}};var qi,Zi,$i;Pt.parameters={...Pt.parameters,docs:{...(qi=Pt.parameters)==null?void 0:qi.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: createGridColumns({
      orderIdVisible: true,
      orderDateVisible: true,
      freightVisible: true
    }),
    builtInThemes: 'material',
    printRange: 'CurrentPage',
    printTitle: 'Grid Print Export',
    height: '600px'
  },
  render: (args: unknown) => <PrintGrid {...args as PrintStoryArgs} />,
  argTypes: {
    columns: {
      control: 'object',
      description: 'Reusable Grid column definitions used by the print sample.'
    },
    builtInThemes: {
      control: 'select',
      options: ['bootstrap', 'tailwind', 'material']
    },
    enableRtl: {
      control: 'boolean'
    },
    gridLines: {
      control: 'select',
      options: ['Default', 'None', 'Both', 'Horizontal', 'Vertical']
    },
    height: {
      control: 'text'
    },
    width: {
      control: 'text'
    },
    printRange: {
      control: 'select',
      options: ['All', 'CurrentPage', 'Custom']
    },
    printTitle: {
      control: 'text'
    }
  }
} as unknown as Story`,...($i=(Zi=Pt.parameters)==null?void 0:Zi.docs)==null?void 0:$i.source}}};var Xi,Yi,Qi;Bt.parameters={...Bt.parameters,docs:{...(Xi=Bt.parameters)==null?void 0:Xi.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    editScenario: 'lockCustomer',
    columns: cellEditColumns,
    dataSource: data.slice(0, 15),
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Cell'
    },
    modules: {
      EditModule,
      PagerModule
    },
    pageSettings: {
      enabled: true,
      pageSize: 10
    },
    height: 450,
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    }
  },
  render: (args: unknown) => <CellEditGrid {...args as CellEditStoryArgs} />,
  argTypes: {
    columns: {
      control: 'object',
      description: 'Reusable Basic Grid columns used by the cell-edit sample.'
    },
    dataSource: {
      control: 'object'
    },
    editSettings: {
      control: 'object'
    },
    modules: {
      control: 'object'
    },
    pageSettings: {
      control: 'object'
    },
    height: {
      control: 'text'
    },
    editScenario: {
      control: 'select',
      options: ['allowAll', 'lockCustomer', 'lockHighFreight']
    }
  }
} as unknown as Story`,...(Qi=(Yi=Bt.parameters)==null?void 0:Yi.docs)==null?void 0:Qi.source}}};var Ji,eo,ao;It.parameters={...It.parameters,docs:{...(Ji=It.parameters)==null?void 0:Ji.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dataSource: data.slice(0, 50),
    columns: createGridColumns({
      orderIdVisible: true,
      orderDateVisible: false,
      shipNameVisible: false
    }),
    modules: {
      PagerModule,
      GroupModule,
      ReorderModule
    },
    dragAndDropSettings: {
      enabled: true
    },
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    selectionSettings: {
      mode: 'Multiple',
      persistSelection: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 10
    },
    showPerformanceMetrics: false,
    initialShowSpinner: false
  }
}`,...(ao=(eo=It.parameters)==null?void 0:eo.docs)==null?void 0:ao.source}}};var to,no,ro;zt.parameters={...zt.parameters,docs:{...(to=zt.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {
    // ...Default.args,
    dataSource: data,
    toolbar: ['PdfExport'],
    pageSettings: {
      enabled: true
    },
    resizeSettings: {
      enabled: true
    },
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule,
      ResizeModule,
      AutoFitModule
    },
    height: '79vh',
    rowHeight: 50,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      isActiveVisible: false,
      shipCityVisible: false,
      isPrimaryKey: true
    }),
    filterSettings: {
      enabled: false
    },
    pdfOrientation: 'Landscape',
    pdfPageSize: 'A4',
    pdfRange: 'All',
    useCustomColumnWidths: false
  } as PdfExportStoryArgs,
  parameters: {
    docs: {
      description: {
        story: \`PDF Export - Minimal working sample demonstrating PDF export functionality with Pure React Grid\`
      }
    }
  }
}`,...(ro=(no=zt.parameters)==null?void 0:no.docs)==null?void 0:ro.source}}};var io,oo,lo;Lt.parameters={...Lt.parameters,docs:{...(io=Lt.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    dataSource: spanData,
    enableHover: true,
    enableRtl: false,
    resizeSettings: {
      enabled: true
    },
    gridLines: 'Both',
    width: '100%',
    height: '600',
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }),
    enableAutoSpan: true,
    columns: [{
      field: 'S_NO',
      headerText: 'S No',
      width: '120',
      isPrimaryKey: true,
      textAlign: 'Right'
    }, {
      field: 'OrderID_A',
      headerText: 'Order ID',
      width: '160',
      textAlign: 'Right',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Customer_A',
      headerText: 'Customer_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Customer_B',
      headerText: 'Customer_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'OrderID_B',
      headerText: 'OrderID_B OrderID_B OrderID_B OrderID_B OrderID_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Status_A',
      headerText: 'Status_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Status_B',
      headerText: 'Status_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Category_A',
      headerText: 'Category_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Category_B',
      headerText: 'Category_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Quantity_A',
      headerText: 'Quantity_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Quantity_B',
      headerText: 'Quantity_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'UnitPrice_A',
      headerText: 'UnitPrice_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ProductName_A',
      headerText: 'ProductName_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'UnitPrice_B',
      headerText: 'UnitPrice_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ShipCountry_A',
      headerText: 'ShipCountry_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'TotalAmount_A',
      headerText: 'TotalAmount_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'TotalAmount_B',
      headerText: 'TotalAmount_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ShipCountry_B',
      headerText: 'ShipCountry_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ShipName_A',
      headerText: 'ShipName_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Warehouse_A',
      headerText: 'Warehouse_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ShipCity_A',
      headerText: 'ShipCity_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'ShipCity_B',
      headerText: 'ShipCity_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Warehouse_B',
      headerText: 'Warehouse_B',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'PaymentMethod_A',
      headerText: 'PaymentMethod_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'SalesPerson_A',
      headerText: 'SalesPerson_A',
      width: '160',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'IsPriority',
      headerText: 'IsGift',
      width: '160',
      textAlign: 'Right',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'IsGift',
      headerText: 'IsGift IsGift IsGift IsGift IsGift IsGift',
      width: '160',
      textAlign: 'Right',
      colSpan: true,
      rowSpan: true
    }, {
      field: 'Remarks',
      headerText: 'Remarks',
      width: '160',
      colSpan: true,
      rowSpan: true
    }],
    modules: {
      GridAllModules
    },
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser']
  },
  parameters: {
    docs: {
      description: {
        story: \`Spanning - Demonstrates a Row and Column spanning\`
      }
    }
  }
}`,...(lo=(oo=Lt.parameters)==null?void 0:oo.docs)==null?void 0:lo.source}}};var so,uo,mo;Ht.parameters={...Ht.parameters,docs:{...(so=Ht.parameters)==null?void 0:so.docs,source:{originalSource:`{
  args: {
    dataSource: stackedDataSource as any,
    enableHover: true,
    enableRtl: false,
    gridLines: 'Both',
    rowHeight: 60,
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    textWrapSettings: {
      enabled: false,
      wrapMode: WrapMode.Both
    },
    width: '100%',
    pageSettings: {
      enabled: true,
      pageSize: 8,
      pageCount: 4
    },
    sortSettings: {
      enabled: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    modules: {
      GridAllModules
    },
    // filterSettings: { enabled: true },
    editSettings: createEditSettings({
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }),
    columns: stackedColumns,
    reorderSettings: {
      enabled: true
    },
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser']
  },
  parameters: {
    docs: {
      description: {
        story: \`Stacked Header - Demonstrates a multi-level stacked-header layout built entirely from a programmatic ColumnProps[] (including nested 'columns' groups) rather than from JSX. Mirrors the layout of the static 'Spanning Sample' but is configured dynamically inside the story.\`
      }
    }
  }
}`,...(mo=(uo=Ht.parameters)==null?void 0:uo.docs)==null?void 0:mo.source}}};var co,ho,po;Vt.parameters={...Vt.parameters,docs:{...(co=Vt.parameters)==null?void 0:co.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    resizeSettings: {
      enabled: true
    },
    // scrollMode: ScrollMode.Virtual,
    modules: {
      GridAllModules
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // enableCache: false
    },
    searchSettings: {
      enabled: true
    },
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true) as DynamicDataItem[],
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '81vh',
    selectionSettings: {
      mode: 'Multiple'
    },
    // enableToggle: true,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    },
    // rowHeight: 50,
    // getRowHeight: () => {
    //   return 100;
    // },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      shipNameWidth: '130',
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['ColumnChooser']
  }
}`,...(po=(ho=Vt.parameters)==null?void 0:ho.docs)==null?void 0:po.source}}};var yo,go,fo;Ot.parameters={...Ot.parameters,docs:{...(yo=Ot.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  args: {
    dataSource: data as any,
    selectionSettings: {
      enableToggle: true,
      mode: SelectionMode.Multiple
    },
    width: '100%',
    sortSettings: {
      enabled: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    editSettings: createEditSettings({
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }),
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      isActiveVisible: false,
      shipCityVisible: false,
      isPrimaryKey: true
    }),
    reorderSettings: {
      enabled: true
    },
    contextMenuSettings: {
      enabled: true
    },
    enableContextMenu: true,
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    pageSettings: {
      pageSize: 7,
      currentPage: 1,
      enabled: true
    },
    dragAndDropSettings: {
      enabled: true
    },
    onRowDragStart: function (args) {
      console.log('onRowDragStart => ', args);
    },
    onRowDrag: function (args) {
      console.log('onRowDrag => ', args);
    },
    onRowDrop: function (args) {
      console.log('onRowDrop => ', args);
    },
    modules: {
      PagerModule,
      FilterModule,
      GroupModule,
      AggregateModule,
      ReorderModule,
      ContextMenuModule,
      EditModule
    },
    showAggregates: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Row drag and drop - Demonstrates the ability to reorder rows within the grid.\`
      }
    }
  }
}`,...(fo=(go=Ot.parameters)==null?void 0:go.docs)==null?void 0:fo.source}}};var Mo,bo,Co;Ut.parameters={...Ut.parameters,docs:{...(Mo=Ut.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    // scrollMode: ScrollMode.Virtual,
    modules: {
      GridAllModules
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // enableCache: false
    },
    searchSettings: {
      enabled: true
    },
    distinctShipCountryDataSource: DataUtil.distinct(data, 'ShipCountry', true) as DynamicDataItem[],
    enableHover: true,
    enableRtl: false,
    gridLines: 'Default',
    height: '81vh',
    selectionSettings: {
      mode: 'Multiple'
    },
    // enableToggle: true,
    // textWrapSettings: { enabled: true, wrapMode: WrapMode.Both },
    // rowHeight: 50,
    // getRowHeight: () => {
    //   return 100;
    // },
    width: '100%',
    pageSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    editSettings: defaultEditSettings,
    reorderSettings: {
      enabled: true
    },
    enableStickyHeader: true,
    enableHtmlSanitizer: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: true,
      shipNameWidth: '130',
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    showPerformanceMetrics: true,
    initialShowSpinner: false,
    toolbar: ['ColumnChooser'],
    resizeSettings: {
      enabled: true
    }
  }
}`,...(Co=(bo=Ut.parameters)==null?void 0:bo.docs)==null?void 0:Co.source}}};var So,No,wo;Wt.parameters={...Wt.parameters,docs:{...(So=Wt.parameters)==null?void 0:So.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dataSource: ROW_PINNING_DATA,
    height: 550,
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    pinningSettings: {
      enabled: true,
      type: PinScope.Row,
      allowTopPin: true,
      allowBottomPin: true
    },
    pageSettings: {
      enabled: false
    },
    filterSettings: {
      enabled: true
    },
    selectionSettings: {
      mode: 'Multiple',
      persistSelection: true
    },
    dragAndDropSettings: {
      enabled: true
    },
    editSettings: createEditSettings({
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    }),
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    isRowPinned: (row: DynamicDataItem) => {
      if (TOP_PINNED_IDS.has(row.OrderID)) {
        return 'top';
      }
      if (BOTTOM_PINNED_IDS.has(row.OrderID)) {
        return 'bottom';
      }
      return null;
    },
    isRowPinnable: (row: DynamicDataItem) => {
      if (TOP_PINNED_IDS1.has(row.OrderID)) {
        return false;
      }
      return true;
    },
    enableContextMenu: true,
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '120',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      freightVisible: true,
      shipCountryVisible: true,
      shipNameVisible: false,
      salaryVisible: false,
      costVisible: false,
      isActiveVisible: false,
      shipCityVisible: true,
      commandActionsVisible: false,
      isPrimaryKey: true,
      enablePinningColumn: true
    }),
    modules: {
      PagerModule,
      FilterModule,
      PinningModule,
      EditModule,
      ContextMenuModule
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`Row Pinning Sample — first rows are pinned to top and bottom via args. \` + \`Column definitions can be adjusted through Storybook args.\`
      }
    }
  }
}`,...(wo=(No=Wt.parameters)==null?void 0:No.docs)==null?void 0:wo.source}}};var xo,vo,Eo;jt.parameters={...jt.parameters,docs:{...(xo=jt.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    height: 500,
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    pinningSettings: {
      enabled: true,
      type: PinScope.Column
    },
    resizeSettings: {
      enabled: false
    },
    // autoFit: AutoFitMode.All,
    pageSettings: {
      enabled: true
    },
    selectionSettings: {
      mode: 'Multiple'
    },
    filterSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    enableContextMenu: true,
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    aggregates: [{
      columns: [{
        field: 'Freight',
        type: 'Sum'
      }]
    }]
  },
  render: args => <GridBaseTest {...args} modules={{
    PagerModule,
    FilterModule,
    PinningModule,
    ContextMenuModule,
    AggregateModule,
    GroupModule,
    ResizeModule,
    AutoFitModule
  }}>\r
      <Columns>\r
        <Column field="OrderID" headerText="Order ID" width="140" isPrimaryKey={true} pinDirection={isOrderIdPinned} />\r
        <Column field="Cost" headerText="Cost" width="140" format="C2" pinDirection={isOrderIdPinned} />\r
        <Column field="CustomerID" headerText="Customer ID" width="150" pinDirection={isOrderIdPinned} />\r
        <Column field="CustomerName" headerText="Customer Name" width="180" pinDirection={isOrderIdPinned} />\r
        <Column field="Freight" headerText="Freight" width="140" format="C2" />\r
        <Column field="IsActive" headerText="Active" width="120" />\r
        <Column field="OrderDate" headerText="Order Date" width="180" />\r
        <Column field="Salary" headerText="Salary" width="140" format="C2" />\r
        <Column field="ShipAddress" headerText="Ship Address" width="180" />\r
        <Column field="ShipCity" headerText="Ship City" width="140" pinDirection="Right" />\r
        <Column field="ShipCountry" headerText="Ship Country" width="150" />\r
        <Column field="ShipName" headerText="Ship Name" width="220" />\r
        <Column field="ShippedDate" headerText="Shipped Date" width="180" pinDirection="Right" />\r
      </Columns>\r
    </GridBaseTest>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates left and right column pinning during horizontal scrolling.'
      }
    }
  }
} as unknown as Story`,...(Eo=(vo=jt.parameters)==null?void 0:vo.docs)==null?void 0:Eo.source}}};var Ao,Do,To;qt.parameters={...qt.parameters,docs:{...(Ao=qt.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    height: '100%',
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    pinningSettings: {
      enabled: true,
      type: PinScope.Both,
      allowTopPin: true,
      allowBottomPin: true
    },
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '140',
      shipNameVisible: true,
      shipNameWidth: '220',
      isPrimaryKey: true
    }).map(column => column.field === 'OrderID' ? {
      ...column,
      pinDirection: ColumnPinDirection.Left
    } : column.field === 'ShipName' ? {
      ...column,
      pinDirection: ColumnPinDirection.Right
    } : column),
    pageSettings: {
      enabled: true,
      pageSize: 30
    },
    selectionSettings: {
      mode: 'Multiple',
      persistSelection: true
    },
    filterSettings: {
      enabled: true
    },
    enableContextMenu: true,
    isRowPinned: (row: DynamicDataItem) => {
      if (TOP_PINNED_IDS.has(row.OrderID)) {
        return 'top';
      }
      if (BOTTOM_PINNED_IDS.has(row.OrderID)) {
        return 'bottom';
      }
      return null;
    },
    isRowPinnable: (row: DynamicDataItem) => !TOP_PINNED_IDS1.has(row.OrderID),
    modules: {
      PagerModule,
      FilterModule,
      PinningModule,
      ContextMenuModule,
      AggregateModule
    },
    showAggregates: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates row pinning and left/right column pinning together.'
      }
    }
  }
} as unknown as Story`,...(To=(Do=qt.parameters)==null?void 0:Do.docs)==null?void 0:To.source}}};var Ro,Go,ko;Zt.parameters={...Zt.parameters,docs:{...(Ro=Zt.parameters)==null?void 0:Ro.docs,source:{originalSource:`{
  args: {
    dataSource: FormulaDataSource,
    height: 550,
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
      allowEdit: true,
      allowDelete: true,
      mode: 'Cell'
    },
    sortSettings: {
      enabled: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 8,
      pageCount: 4
    },
    filterSettings: {
      enabled: true,
      type: 'CheckBox'
    },
    enableHover: false,
    selectionSettings: {
      type: 'Multiple',
      mode: 'Cell'
    },
    formulaSettings: {
      enabled: true
      // customFunctions: {
      //     CUSTOMSUM: (params: CustomFormulaArgs) => {
      //     console.log('CUSTOMSUM called with values:', params.values);
      //     let total = 0;
      //     for (const value of params.values) {
      //     total += Number(value);
      //     }
      //     return total;
      // }}, 
    }
  },
  render: args => <GridBaseTest {...args} modules={{
    FormulaModule,
    EditModule,
    PagerModule,
    ToolbarModule,
    FilterModule
  }}>\r
      <Columns>\r
        <Column field="OrderID" headerText="Order ID" isPrimaryKey={true} width="80" />\r
        <Column field="ProductName" headerText="Product Name" width="120" />\r
        <Column field="Quantity" headerText="Quantity" width="80" textAlign="Right" />\r
        <Column field="PricePerUnit" headerText="Price / Unit" width="120" format="C2" textAlign="Right" />\r
        <Column field="GrossAmount" headerText="Gross Amount" width="120" format="C2" allowFormula={true} textAlign="Right" />\r
        {/* <Column field="TaxAmount" headerText="Custom Tax" width="150" format="C2" allowFormula={true} textAlign="Right" /> */}\r
        {/* <Column field="TotalAmount" headerText="Total" width="140" format="C2" allowFormula={true} textAlign="Right" /> */}\r
      </Columns>\r
    </GridBaseTest>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates formula cell functionality within the grid.'
      }
    }
  }
} as unknown as Story`,...(ko=(Go=Zt.parameters)==null?void 0:Go.docs)==null?void 0:ko.source}}};var Fo,_o,Po;$t.parameters={...$t.parameters,docs:{...(Fo=$t.parameters)==null?void 0:Fo.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    adaptiveSettings: {
      enabled: true,
      dialogTarget: '.sf-mobile-content'
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'CheckBox'
    },
    searchSettings: {
      enabled: true
    },
    groupSettings: {
      enabled: true,
      showDropArea: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Popup',
      confirmOnDelete: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'],
    selectionSettings: {
      mode: 'Multiple',
      persistSelection: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 5
    },
    modules: {
      FilterModule,
      EditModule,
      ToolbarModule,
      ColumnChooserModule,
      PagerModule,
      ClipboardModule,
      GroupModule,
      SearchModule
    },
    width: '100%',
    height: '100%'
  },
  render: args => <>\r
      <style>{\`
        .sf-mobile-layout {
          position: relative;
          width: 360px;
          height: 640px;
          margin: auto;
          border-width: 60px 16px;
          border-style: solid;
          border-color: rgb(244, 244, 244);
          border-image: none;
          border-radius: 36px;
          box-shadow: rgb(144, 144, 144) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 0px 10px;
        }

        .sf-mobile-layout .sf-mobile-content {
          position: relative;
          overflow: hidden;
          height: 100%;
          background: white;
        }
      \`}</style>\r
      <GridBaseTest {...args} gridContentWrapper={content => <div className="sf-mobile-layout">\r
            <div className="sf-mobile-content">{content}</div>\r
          </div>}>\r
        <Columns>\r
          <Column field="OrderID" headerText="Order ID" isPrimaryKey={true} width="110" />\r
          <Column field="CustomerName" headerText="Customer" width="160" />\r
          <Column field="ShipCountry" headerText="Ship Country" width="140" />\r
          <Column field="Freight" headerText="Freight" format="C2" width="110" />\r
        </Columns>\r
      </GridBaseTest>\r
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Adaptive dialogs (CheckBox filter, Popup edit form, Delete confirmation, and Column Chooser) render full-screen inside the mobile layout via adaptiveSettings.dialogTarget. The toolbar shows icons only and hides the editing items for a cleaner mobile UI.'
      }
    }
  }
} as unknown as Story`,...(Po=(_o=$t.parameters)==null?void 0:_o.docs)==null?void 0:Po.source}}};var Bo,Io,zo;Xt.parameters={...Xt.parameters,docs:{...(Bo=Xt.parameters)==null?void 0:Bo.docs,source:{originalSource:`{
  args: {
    dataSource: data,
    adaptiveSettings: {
      enabled: true,
      rowRenderingMode: 'Vertical',
      dialogTarget: '.sf-mobile-content'
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'CheckBox'
    },
    searchSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Popup',
      confirmOnDelete: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'],
    modules: {
      ToolbarModule,
      PagerModule,
      ColumnChooserModule,
      SearchModule,
      ClipboardModule,
      FilterModule,
      EditModule
    },
    selectionSettings: {
      mode: 'Multiple',
      persistSelection: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 5
    },
    width: '100%',
    height: '100%'
  },
  render: args => <>\r
      <style>{\`
        .sf-mobile-layout {
          position: relative;
          width: 360px;
          height: 640px;
          margin: auto;
          border-width: 60px 16px;
          border-style: solid;
          border-color: rgb(244, 244, 244);
          border-image: none;
          border-radius: 36px;
          box-shadow: rgb(144, 144, 144) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px 0px 10px;
        }

        .sf-mobile-layout .sf-mobile-content {
          position: relative;
          overflow: hidden;
          height: 100%;
          background: white;
        }
      \`}</style>\r
      <GridBaseTest {...args} gridContentWrapper={content => <div className="sf-mobile-layout">\r
            <div className="sf-mobile-content">{content}</div>\r
          </div>}>\r
        <Columns>\r
          <Column field="OrderID" headerText="Order ID" width="110" />\r
          <Column field="CustomerName" headerText="Customer" width="160" />\r
          <Column field="ShipCountry" headerText="Ship Country" width="140" />\r
          <Column field="Freight" headerText="Freight" format="C2" width="110" />\r
        </Columns>\r
      </GridBaseTest>\r
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical row rendering: header hidden, each record stacked with field label on the left and value on the right. The grid and its toolbar render inside the mobile layout, the action buttons stay outside it, and the full-screen adaptive dialogs open inside the layout via adaptiveSettings.dialogTarget.'
      }
    }
  }
} as unknown as Story`,...(zo=(Io=Xt.parameters)==null?void 0:Io.docs)==null?void 0:zo.source}}};var Lo,Ho,Vo;Yt.parameters={...Yt.parameters,docs:{...(Lo=Yt.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
  args: {
    dataSource: (data.slice(0, 40) as DynamicDataItem[]).map((item: DynamicDataItem, index: number) => ({
      ...item,
      IsSummary: index % 6 === 5
    })),
    enableHover: true,
    height: '81vh',
    width: '100%',
    pageSettings: {
      enabled: true,
      pageSize: 12
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    enableStickyHeader: true,
    modules: {
      ClipboardModule,
      FilterModule,
      EditModule,
      PagerModule,
      GroupModule,
      ToolbarModule,
      ContextMenuModule,
      ColumnChooserModule,
      SearchModule,
      CommandColumnModule,
      AggregateModule,
      AutoFillModule
    },
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderDateVisible: true,
      freightVisible: true,
      shipCountryVisible: true,
      isPrimaryKey: true,
      shipNameVisible: true,
      salaryVisible: true,
      costVisible: true,
      isActiveVisible: true,
      shipCityVisible: true,
      commandActionsVisible: false
    }),
    fullWidthRow: (args: {
      data: DynamicDataItem;
      rowIndex: number;
    }) => args.data.IsSummary ? <FullWidthRowSummary data={args.data} rowIndex={args.rowIndex} /> : null,
    showPerformanceMetrics: false,
    initialShowSpinner: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the fullWidthRow callback: rows flagged as summary rows render as full-width rows spanning the grid width, while other rows keep column-based rendering. Works with filtering and paging.'
      }
    }
  }
} as unknown as Story`,...(Vo=(Ho=Yt.parameters)==null?void 0:Ho.docs)==null?void 0:Vo.source}}};var Oo,Uo,Wo;Qt.parameters={...Qt.parameters,docs:{...(Oo=Qt.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
  args: {
    dataSource: data as any,
    height: 465,
    showPerformanceMetrics: false,
    initialShowSpinner: false,
    toolbar: ['Find'],
    findSettings: {
      enabled: true,
      currentPageOnly: false,
      caseSensitive: false,
      searchDetail: true
    },
    searchSettings: {
      enabled: true
    },
    columns: createGridColumns({
      orderIdVisible: true,
      orderIdWidth: '180',
      orderIdTextAlign: 'Right',
      orderDateVisible: false,
      isActiveVisible: false,
      shipCityVisible: false,
      isPrimaryKey: true
    })
  },
  render: args => <GridBaseTest {...args} modules={{
    ToolbarModule,
    SearchModule,
    FindModule,
    FormulaModule
  }}>\r
    </GridBaseTest>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates Find matching, highlighting, and match navigation in the grid.'
      }
    }
  }
} as unknown as Story`,...(Wo=(Uo=Qt.parameters)==null?void 0:Uo.docs)==null?void 0:Wo.source}}};const cm=["Default","ExcelFilter","MinimalGrid","Sidebar","TemplatedColumns","CustomAccessors","FullyCustomized","RTLMode","RemoteData","CustomBinding","Aggregates","BasicStatusBar","StatusBarAggregates","NormalEditingWithToolbar","CheckBoxSelection","CommandColumnEditing","PopupEditing","PopupTemplateEditing","CellSelection","ContextMenu","Grouping","ExcelExport","AllFeature","ColumnMenuSample","ColumnChooserAdvanced","PrintSupport","CellEditMode","RowReOrdering","PdfExport","Spanning","stackedHeader","ColumnResize","rowDragAndDrop","ColumnReorder","rowPinningSample","columnPinningSample","rowAndColumnPinningSample","formulaCellSample","adaptiveSample","adaptiveVerticalSample","FullWidthRows","findFeatureSample"];export{Ct as Aggregates,kt as AllFeature,St as BasicStatusBar,Bt as CellEditMode,Dt as CellSelection,xt as CheckBoxSelection,_t as ColumnChooserAdvanced,Ft as ColumnMenuSample,Ut as ColumnReorder,Vt as ColumnResize,vt as CommandColumnEditing,Tt as ContextMenu,yt as CustomAccessors,bt as CustomBinding,Ue as Default,Gt as ExcelExport,mt as ExcelFilter,Yt as FullWidthRows,gt as FullyCustomized,Rt as Grouping,ct as MinimalGrid,wt as NormalEditingWithToolbar,zt as PdfExport,Et as PopupEditing,At as PopupTemplateEditing,Pt as PrintSupport,ft as RTLMode,Mt as RemoteData,It as RowReOrdering,ht as Sidebar,Lt as Spanning,Nt as StatusBarAggregates,pt as TemplatedColumns,cm as __namedExportsOrder,$t as adaptiveSample,Xt as adaptiveVerticalSample,jt as columnPinningSample,mm as default,Qt as findFeatureSample,Zt as formulaCellSample,qt as rowAndColumnPinningSample,Ot as rowDragAndDrop,Wt as rowPinningSample,Ht as stackedHeader};
