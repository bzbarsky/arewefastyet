this.Modue={}; var Module={}; var arguments=["400","400"];
var ma=void 0,a=!0,c=null,f=!1;try{this.Module=Module}catch(na){this.Module=Module={}}var oa="object"===typeof process,ya="object"===typeof window,za="function"===typeof importScripts,Aa=!ya&&!oa&&!za;if(oa){Module.print=(function(a){});Module.printErr=(function(b){process.stderr.write(b+"\n")});var Pa=require("fs"),jb=require("path");Module.read=(function(b){var b=jb.normalize(b),d=Pa.readFileSync(b).toString();!d&&b!=jb.resolve(b)&&(b=path.join(__dirname,"..","src",b),d=Pa.readFileSync(b).toString());return d});Module.load=(function(b){kb(read(b))});Module.arguments||(Module.arguments=["400", "400"])}else{if(Aa){Module.print=(function(a){}),Module.printErr=printErr,Module.read="undefined"!=typeof read?read:(function(b){snarf(b)}),Module.arguments||("undefined"!=typeof scriptArgs?Module.arguments=["400","400"]:"undefined"!=typeof arguments&&(Module.arguments=["400","400"]))}else{if(ya){Module.print||(Module.print=(function(a){})),Module.printErr||(Module.printErr=(function(b){console.log(b)})),Module.read=(function(b){var d=new XMLHttpRequest;d.open("GET",b,f);d.send(c);return d.responseText}),Module.arguments||"undefined"!=typeof arguments&&(Module.arguments=["400","400"])}else{if(za){Module.load=importScripts}else{throw"Unknown runtime environment. Where are we?"}}}}function kb(b){eval.call(c,b)}"undefined"==!Module.load&&Module.read&&(Module.load=(function(b){kb(Module.read(b))}));Module.printErr||(Module.printErr=(function(){}));Module.print||(Module.print=Module.printErr);Module.arguments||(Module.arguments=["400","400"]);Module.print=Module.print;Module.G=Module.printErr;Module.preRun||(Module.preRun=[]);Module.postRun||(Module.postRun=[]);function lb(b){if(1==mb){return 1}var d={"%i1":1,"%i8":1,"%i16":2,"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+b];d||("*"==b[b.length-1]?d=mb:"i"==b[0]&&(b=parseInt(b.substr(1)),Pb(0==b%8),d=b/8));return d}function Qb(b){var d=o;o+=b;o=o+3>>2<<2;return d}function Rb(b){var d=q;q+=b;q=q+3>>2<<2;if(q>=Sb){for(;Sb<=q;){Sb=2*Sb+4095>>12<<12}var b=v,e=new ArrayBuffer(Sb);v=new Int8Array(e);Pc=new Int16Array(e);w=new Int32Array(e);Qc=new Uint8Array(e);Rc=new Uint16Array(e);B=new Uint32Array(e);Sc=new Float32Array(e);Tc=new Float64Array(e);v.set(b)}return d}var mb=4,Uc={},Kd;function Md(b){Module.print(b+":\n"+Error().stack);throw"Assertion: "+b}function Pb(b,d){b||Md("Assertion failed: "+d)}var Nd=this;function Od(b,d,e,h){function g(b,d){if("string"==d){if(b===c||b===ma||0===b){return 0}i||(i=o);var e=Qb(b.length+1);Pd(b,e);return e}return"array"==d?(i||(i=o),e=Qb(b.length),Qd(b,e),e):b}var i=0;try{var j=eval("_"+b)}catch(l){try{j=Nd.Module["_"+b]}catch(n){}}Pb(j,"Cannot call unknown function "+b+" (perhaps LLVM optimizations or closure removed it?)");var r=0,b=h?h.map((function(b){return g(b,e[r++])})):[],d=(function(b,d){if("string"==d){return Rd(b)}Pb("array"!=d);return b})(j.apply(c,b),d);i&&(o=i);return d}Module.ccall=Od;Module.cwrap=(function(b,d,e){return(function(){return Od(b,d,e,Array.prototype.slice.call(arguments))})});function Sd(b,d,e){e=e||"i8";"*"===e[e.length-1]&&(e="i32");switch(e){case"i1":v[b]=d;break;case"i8":v[b]=d;break;case"i16":Pc[b>>1]=d;break;case"i32":w[b>>2]=d;break;case"i64":w[b>>2]=d;break;case"float":Sc[b>>2]=d;break;case"double":Sc[b>>2]=d;break;default:Md("invalid type for setValue: "+e)}}Module.setValue=Sd;Module.getValue=(function(b,d){d=d||"i8";"*"===d[d.length-1]&&(d="i32");switch(d){case"i1":return v[b];case"i8":return v[b];case"i16":return Pc[b>>1];case"i32":return w[b>>2];case"i64":return w[b>>2];case"float":return Sc[b>>2];case"double":return Sc[b>>2];default:Md("invalid type for setValue: "+d)}return c});var Td=1,E=2;Module.ALLOC_NORMAL=0;Module.ALLOC_STACK=Td;Module.ALLOC_STATIC=E;function H(b,d,e){var h,g;"number"===typeof b?(h=a,g=b):(h=f,g=b.length);var i="string"===typeof d?d:c,e=[Ud,Qb,Rb][e===ma?E:e](Math.max(g,i?1:d.length));if(h){d=e;b=g;g=0;if(20<=b){for(b=d+b;d%4;){v[d++]=g}0>g&&(g+=256);d>>=2;i=b>>2;for(h=g|g<<8|g<<16|g<<24;d<i;){w[d++]=h}for(d<<=2;d<b;){v[d++]=g}}else{for(;b--;){v[d++]=g}}return e}h=0;for(var j;h<g;){var l=b[h];"function"===typeof l&&(l=Uc.F(l));j=i||d[h];0===j?h++:("i64"==j&&(j="i32"),Sd(e+h,l,j),h+=lb(j))}return e}Module.allocate=H;function Rd(b,d){for(var e="undefined"==typeof d,h="",g=0,i,j=String.fromCharCode(0);;){i=String.fromCharCode(Qc[b+g]);if(e&&i==j){break}h+=i;g+=1;if(!e&&g==d){break}}return h}Module.Pointer_stringify=Rd;Module.Array_stringify=(function(b){for(var d="",e=0;e<b.length;e++){d+=String.fromCharCode(b[e])}return d});var Vd,Wd=4096,v,Qc,Pc,Rc,w,B,Sc,Tc,o,Xd,q,Yd=Module.TOTAL_STACK||5242880,Sb=Module.TOTAL_MEMORY||104857600;Pb(!!Int32Array&&!!Float64Array&&!!(new Int32Array(1)).subarray&&!!(new Int32Array(1)).set,"Cannot fallback to non-typed array case: Code is too specialized");var Zd=new ArrayBuffer(Sb);v=new Int8Array(Zd);Pc=new Int16Array(Zd);w=new Int32Array(Zd);Qc=new Uint8Array(Zd);Rc=new Uint16Array(Zd);B=new Uint32Array(Zd);Sc=new Float32Array(Zd);Tc=new Float64Array(Zd);w[0]=255;Pb(255===Qc[0]&&0===Qc[3],"Typed arrays 2 must be run on a little-endian system");var gf=$d("(null)");q=gf.length;for(var hf=0;hf<gf.length;hf++){v[hf]=gf[hf]}Module.HEAP=ma;Module.HEAP8=v;Module.HEAP16=Pc;Module.HEAP32=w;Module.HEAPU8=Qc;Module.HEAPU16=Rc;Module.HEAPU32=B;Module.HEAPF32=Sc;Module.HEAPF64=Tc;Xd=(o=4*Math.ceil(q/4))+Yd;var jf=8*Math.ceil(Xd/8);v.subarray(jf);w.subarray(jf>>2);Sc.subarray(jf>>2);Tc.subarray(jf>>3);Xd=jf+8;q=Xd+4095>>12<<12;function kf(b){for(;0<b.length;){var d=b.shift(),e=d.i;"number"===typeof e&&(e=Vd[e]);e(d.w===ma?c:d.w)}}var lf=[],mf=[],nf=[];function of(b){for(var d=0;v[b+d];){d++}return d}Module.String_len=of;function $d(b,d,e){var h=[],g=0;e===ma&&(e=b.length);for(;g<e;){var i=b.charCodeAt(g);255<i&&(i&=255);h.push(i);g+=1}d||h.push(0);return h}Module.intArrayFromString=$d;Module.intArrayToString=(function(b){for(var d=[],e=0;e<b.length;e++){var h=b[e];255<h&&(h&=255);d.push(String.fromCharCode(h))}return d.join("")});function Pd(b,d,e){for(var h=0;h<b.length;){var g=b.charCodeAt(h);255<g&&(g&=255);v[d+h]=g;h+=1}e||(v[d+h]=0)}Module.writeStringToMemory=Pd;function Qd(b,d){for(var e=0;e<b.length;e++){v[d+e]=b[e]}}Module.writeArrayToMemory=Qd;var pf=[];function qf(b,d){return 0<=b?b:32>=d?2*Math.abs(1<<d-1)+b:Math.pow(2,d)+b}function rf(b,d){if(0>=b){return b}var e=32>=d?Math.abs(1<<d-1):Math.pow(2,d-1);if(b>=e&&(32>=d||b>e)){b=-2*e+b}return b}var sf=0;function tf(){sf++;Module.monitorRunDependencies&&Module.monitorRunDependencies(sf)}Module.addRunDependency=tf;Module.removeRunDependency=(function(){sf--;Module.monitorRunDependencies&&Module.monitorRunDependencies(sf);0==sf&&uf()});function Ud(b){var d,e,h,g,i,j,l,n,r,x,A,F,z,s,m,k,t,C,p,Vc=245>b;a:do{if(Vc){var K=11>b?16:b+11&-8,pa=K>>>3,qa=B[J>>2],Ba=qa>>>pa;if(0!=(Ba&3)){var ga=(Ba&1^1)+pa,$=ga<<1,D=($<<2)+J+40,S=($+2<<2)+J+40,nb=B[S>>2],Ca=nb+8,ha=B[Ca>>2];D==ha?w[J>>2]=qa&(1<<ga^-1):ha<B[J+16>>2]?L():(w[S>>2]=ha,w[ha+12>>2]=D);var Tb=ga<<3;w[nb+4>>2]=Tb|3;var Wc=nb+(Tb|4);w[Wc>>2]|=1;ra=Ca;p=331}else{if(K>B[J+8>>2]){if(0==Ba){var Qa=w[J+4>>2];if(0!=Qa){var Da=(Qa&-Qa)-1,Ra=Da>>>12&16,Xc=Da>>>Ra,Ub=Xc>>>5&8,Vb=Xc>>>Ub,Wb=Vb>>>2&4,Xb=Vb>>>Wb,P=Xb>>>1&2,Ea=Xb>>>P,sa=Ea>>>1&1,ob=B[J+((Ub|Ra|Wb|P|sa)+(Ea>>>sa)<<2)+304>>2],pb=ob,Q=ob;A=Q>>2;for(var W=(w[ob+4>>2]&-8)-K;;){var qb=w[pb+16>>2];if(0==qb){var Yb=w[pb+20>>2];if(0==Yb){break}var Sa=Yb}else{Sa=qb}var Yc=(w[Sa+4>>2]&-8)-K,Zb=Yc<W,rb=Zb?Yc:W,sb=Zb?Sa:Q,pb=Sa,Q=sb;A=Q>>2;W=rb}var aa=Q,tb=B[J+16>>2],Fa=aa<tb;do{if(!Fa){var Zc=aa+K,$b=Zc;if(aa<Zc){var ia=B[A+6],Ta=B[A+3],$c=Ta==Q;do{if($c){var ad=Q+20,Ua=w[ad>>2];if(0==Ua){var ac=Q+16,bc=w[ac>>2];if(0==bc){var N=0;x=N>>2;break}var Ga=ac,ba=bc}else{Ga=ad,ba=Ua,p=39}for(;;){var cc=ba+20,Va=w[cc>>2];if(0!=Va){Ga=cc,ba=Va}else{var bd=ba+16,ub=B[bd>>2];if(0==ub){break}Ga=bd;ba=ub}}Ga<tb?L():w[Ga>>2]=0;N=ba}else{var Wa=B[A+2];Wa<tb?L():(w[Wa+12>>2]=Ta,w[Ta+8>>2]=Wa);N=Ta}x=N>>2}while(0);var cd=0==ia;b:do{if(!cd){var dc=Q+28,vb=(w[dc>>2]<<2)+J+304,dd=Q==w[vb>>2];do{if(dd){w[vb>>2]=N;if(0!=N){break}w[J+4>>2]&=1<<w[dc>>2]^-1;break b}if(ia<B[J+16>>2]){L()}else{var wb=ia+16;w[wb>>2]==Q?w[wb>>2]=N:w[ia+20>>2]=N}if(0==N){break b}}while(0);if(N<B[J+16>>2]){L()}else{w[x+6]=ia;var Xa=B[A+4];0!=Xa&&(Xa<B[J+16>>2]?L():(w[x+4]=Xa,w[Xa+24>>2]=N));var ta=B[A+5];0!=ta&&(ta<B[J+16>>2]?L():(w[x+5]=ta,w[ta+24>>2]=N))}}}while(0);if(16>W){var Ha=W+K;w[A+1]=Ha|3;var ec=aa+(Ha+4);w[ec>>2]|=1}else{w[A+1]=K|3;w[aa+(K|4)>>2]=W|1;w[aa+W+K>>2]=W;var ed=B[J+8>>2];if(0!=ed){var ja=B[J+20>>2],Ia=ed>>>3,xb=Ia<<1,Ya=(xb<<2)+J+40,Ja=B[J>>2],Za=1<<Ia;if(0==(Ja&Za)){w[J>>2]=Ja|Za;var yb=Ya,fc=(xb+2<<2)+J+40}else{var gc=(xb+2<<2)+J+40,hc=B[gc>>2];hc<B[J+16>>2]?(L(),yb=Ya):yb=hc;fc=gc}w[fc>>2]=ja;w[yb+12>>2]=ja;w[ja+8>>2]=yb;w[ja+12>>2]=Ya}w[J+8>>2]=W;w[J+20>>2]=$b}var ic=Q+8;if(0==ic){u=K;C=u>>2;p=155;break a}ra=ic;p=331;break a}}}while(0);L()}u=K;C=u>>2;p=155}else{var R=2<<pa,Ka=Ba<<pa&(R|-R),ua=(Ka&-Ka)-1,jc=ua>>>12&16,kc=ua>>>jc,lc=kc>>>5&8,mc=kc>>>lc,zb=mc>>>2&4,nc=mc>>>zb,oc=nc>>>1&2,fd=nc>>>oc,pc=fd>>>1&1,La=(lc|jc|zb|oc|pc)+(fd>>>pc),$a=La<<1,ca=($a<<2)+J+40,qc=($a+2<<2)+J+40,ab=B[qc>>2],Ab=ab+8,bb=B[Ab>>2];ca==bb?w[J>>2]=qa&(1<<La^-1):bb<B[J+16>>2]?L():(w[qc>>2]=bb,w[bb+12>>2]=ca);var rc=La<<3,Ma=rc-K;w[ab+4>>2]=K|3;var Bb=ab,gd=Bb+K;w[Bb+(K|4)>>2]=Ma|1;w[Bb+rc>>2]=Ma;var sc=B[J+8>>2];if(0!=sc){var va=B[J+20>>2],Cb=sc>>>3,da=Cb<<1,Db=(da<<2)+J+40,tc=B[J>>2],uc=1<<Cb;if(0==(tc&uc)){w[J>>2]=tc|uc;var cb=Db,vc=(da+2<<2)+J+40}else{var wc=(da+2<<2)+J+40,Eb=B[wc>>2];Eb<B[J+16>>2]?(L(),cb=Db):cb=Eb;vc=wc}w[vc>>2]=va;w[cb+12>>2]=va;w[va+8>>2]=cb;w[va+12>>2]=Db}w[J+8>>2]=Ma;w[J+20>>2]=gd;ra=Ab;p=331}}else{u=K,C=u>>2,p=155}}}else{if(4294967231<b){var u=-1}else{var xc=b+11,I=xc&-8;t=I>>2;var Fb=B[J+4>>2];if(0!=Fb){var ka=-I,Gb=xc>>>8;if(0==Gb){var la=0}else{if(16777215<I){la=31}else{var yc=Gb+1048320>>>16&8,hd=Gb<<yc,Hb=hd+520192>>>16&4,zc=hd<<Hb,Ac=zc+245760>>>16&2,Bc=14-(Hb|yc|Ac)+(zc<<Ac>>>15),la=I>>>Bc+7&1|Bc<<1}}var Cc=B[J+(la<<2)+304>>2],Zi=0==Cc;b:do{if(Zi){var Dc=0,id=ka,jd=0}else{var $i=31==la?0:25-(la>>>1),Df=0,ae=ka,Ib=Cc;k=Ib>>2;for(var be=I<<$i,Ef=0;;){var Ff=w[k+1]&-8,ce=Ff-I;if(ce<ae){if(Ff==I){Dc=Ib;id=ce;jd=Ib;break b}var de=Ib,ee=ce}else{de=Df,ee=ae}var fe=B[k+5],ge=B[((be>>>31<<2)+16>>2)+k],Gf=0==fe|fe==ge?Ef:fe;if(0==ge){Dc=de;id=ee;jd=Gf;break b}Df=de;ae=ee;Ib=ge;k=Ib>>2;be<<=1;Ef=Gf}}}while(0);if(0==jd&0==Dc){var Hf=2<<la,he=Fb&(Hf|-Hf);if(0==he){u=I;C=u>>2;p=155;break}var If=(he&-he)-1,Jf=If>>>12&16,Kf=If>>>Jf,Lf=Kf>>>5&8,Mf=Kf>>>Lf,Nf=Mf>>>2&4,Of=Mf>>>Nf,Pf=Of>>>1&2,Qf=Of>>>Pf,Rf=Qf>>>1&1,ie=w[J+((Lf|Jf|Nf|Pf|Rf)+(Qf>>>Rf)<<2)+304>>2]}else{ie=jd}var aj=0==ie;b:do{if(aj){var T=id,X=Dc;m=X>>2}else{var Ec=ie;s=Ec>>2;for(var je=id,Sf=Dc;;){var Tf=(w[s+1]&-8)-I,Uf=Tf<je,Vf=Uf?Tf:je,Wf=Uf?Ec:Sf,Xf=B[s+4];if(0!=Xf){Ec=Xf}else{var Yf=B[s+5];if(0==Yf){T=Vf;X=Wf;m=X>>2;break b}Ec=Yf}s=Ec>>2;je=Vf;Sf=Wf}}}while(0);if(0!=X&&T<w[J+8>>2]-I){var Jb=X;z=Jb>>2;var ke=B[J+16>>2],bj=Jb<ke;do{if(!bj){var le=Jb+I,Zf=le;if(Jb<le){var Fc=B[m+6],kd=B[m+3],cj=kd==X;do{if(cj){var $f=X+20,ag=w[$f>>2];if(0==ag){var bg=X+16,cg=w[bg>>2];if(0==cg){var Y=0;F=Y>>2;break}var Gc=bg,Kb=cg}else{Gc=$f,Kb=ag,p=103}for(;;){var dg=Kb+20,eg=w[dg>>2];if(0!=eg){Gc=dg,Kb=eg}else{var fg=Kb+16,gg=B[fg>>2];if(0==gg){break}Gc=fg;Kb=gg}}Gc<ke?L():w[Gc>>2]=0;Y=Kb}else{var me=B[m+2];me<ke?L():(w[me+12>>2]=kd,w[kd+8>>2]=me);Y=kd}F=Y>>2}while(0);var dj=0==Fc;b:do{if(!dj){var hg=X+28,ig=(w[hg>>2]<<2)+J+304,ej=X==w[ig>>2];do{if(ej){w[ig>>2]=Y;if(0!=Y){break}w[J+4>>2]&=1<<w[hg>>2]^-1;break b}if(Fc<B[J+16>>2]){L()}else{var jg=Fc+16;w[jg>>2]==X?w[jg>>2]=Y:w[Fc+20>>2]=Y}if(0==Y){break b}}while(0);if(Y<B[J+16>>2]){L()}else{w[F+6]=Fc;var ld=B[m+4];0!=ld&&(ld<B[J+16>>2]?L():(w[F+4]=ld,w[ld+24>>2]=Y));var md=B[m+5];0!=md&&(md<B[J+16>>2]?L():(w[F+5]=md,w[md+24>>2]=Y))}}}while(0);var fj=16>T;b:do{if(fj){var kg=T+I;w[m+1]=kg|3;var lg=Jb+(kg+4);w[lg>>2]|=1}else{w[m+1]=I|3;w[((I|4)>>2)+z]=T|1;w[(T>>2)+z+t]=T;var mg=T>>>3;if(256>T){var ne=mg<<1,oe=(ne<<2)+J+40,ng=B[J>>2],og=1<<mg;if(0==(ng&og)){w[J>>2]=ng|og;var nd=oe,pg=(ne+2<<2)+J+40}else{var qg=(ne+2<<2)+J+40,rg=B[qg>>2];rg<B[J+16>>2]?(L(),nd=oe):nd=rg;pg=qg}w[pg>>2]=Zf;w[nd+12>>2]=Zf;w[z+(t+2)]=nd;w[z+(t+3)]=oe}else{var Na=le,pe=T>>>8;if(0==pe){var db=0}else{if(16777215<T){db=31}else{var sg=pe+1048320>>>16&8,tg=pe<<sg,ug=tg+520192>>>16&4,vg=tg<<ug,wg=vg+245760>>>16&2,xg=14-(ug|sg|wg)+(vg<<wg>>>15),db=T>>>xg+7&1|xg<<1}}var qe=(db<<2)+J+304;w[z+(t+7)]=db;var gj=Jb+(I+16);w[z+(t+5)]=0;w[gj>>2]=0;var yg=w[J+4>>2],zg=1<<db;if(0==(yg&zg)){w[J+4>>2]=yg|zg,w[qe>>2]=Na,w[z+(t+6)]=qe,w[z+(t+3)]=Na,w[z+(t+2)]=Na}else{for(var re=T<<(31==db?0:25-(db>>>1)),eb=w[qe>>2];;){if((w[eb+4>>2]&-8)==T){var Ag=eb+8,se=B[Ag>>2],Bg=B[J+16>>2],hj=eb<Bg;do{if(!hj&&se>=Bg){w[se+12>>2]=Na;w[Ag>>2]=Na;w[z+(t+2)]=se;w[z+(t+3)]=eb;w[z+(t+6)]=0;break b}}while(0);L();break b}var te=(re>>>31<<2)+eb+16,Cg=B[te>>2];if(0!=Cg){re<<=1,eb=Cg}else{if(te<B[J+16>>2]){L();break b}w[te>>2]=Na;w[z+(t+6)]=eb;w[z+(t+3)]=Na;w[z+(t+2)]=Na;break b}}}}}}while(0);var Dg=X+8;if(0==Dg){u=I;C=u>>2;p=155;break a}var ra=Dg;p=331;break a}}}while(0);L()}}u=I}C=u>>2;p=155}}while(0);a:do{if(155==p){var Hc=B[J+8>>2];if(u>Hc){var Eg=B[J+12>>2];if(u<Eg){var Fg=Eg-u;w[J+12>>2]=Fg;var ue=B[J+24>>2],Gg=ue;w[J+24>>2]=Gg+u;w[(Gg+4>>2)+C]=Fg|1;w[ue+4>>2]=u|3;ra=ue+8}else{if(0==w[M>>2]&&0==w[M>>2]){var od=vf();0!=(od-1&od)&&L();w[M+8>>2]=od;w[M+4>>2]=od;w[M+12>>2]=-1;w[M+16>>2]=2097152;w[M+20>>2]=0;w[J+440>>2]=0;w[M>>2]=Math.floor(Date.now()/1e3)&-16^1431655768}var ij=0==(w[J+440>>2]&4);b:do{if(ij){var Ig=w[J+24>>2],jj=0==Ig;c:do{if(jj){p=174}else{for(var Jg=Ig,Ic=J+444;;){var Kg=Ic,Lg=B[Kg>>2];if(Lg<=Jg){var Mg=Ic+4;if(Lg+w[Mg>>2]>Jg){break}}var Ng=B[Ic+8>>2];if(0==Ng){p=174;break c}Ic=Ng}if(0==Ic){p=174}else{var Og=w[M+8>>2],pd=u+47-w[J+12>>2]+Og&-Og;if(2147483647>pd){var ve=wf(pd),Pg=ve==w[Kg>>2]+w[Mg>>2],we=Pg?ve:-1,qd=Pg?pd:0,wa=pd,rd=ve;p=181}else{var sd=0;p=189}}}}while(0);if(174==p){var td=wf(0);if(-1==td){sd=0,p=189}else{var Qg=w[M+8>>2],Rg=u+(Qg+47)&-Qg,xe=td,Sg=w[M+4>>2],Tg=Sg-1,ud=0==(Tg&xe)?Rg:Rg-xe+(Tg+xe&-Sg);if(2147483647>ud){var Ug=wf(ud),Vg=Ug==td,kj=Vg?ud:0,we=Vg?td:-1,qd=kj,wa=ud,rd=Ug;p=181}else{sd=0,p=189}}}c:do{if(181==p){var lj=-wa;if(-1!=we){var G=qd;r=G>>2;var y=we;n=y>>2;p=194;break b}var mj=-1!=rd&2147483647>wa;do{if(mj){if(wa<u+48){var Wg=w[M+8>>2],ye=u+47-wa+Wg&-Wg;if(2147483647>ye){if(-1==wf(ye)){wf(lj);sd=qd;break c}vd=ye+wa}else{vd=wa}}else{var vd=wa}}else{vd=wa}}while(0);if(-1!=rd){G=vd;r=G>>2;y=rd;n=y>>2;p=194;break b}w[J+440>>2]|=4;var ze=qd;p=191;break b}}while(0);w[J+440>>2]|=4;ze=sd}else{ze=0}p=191}while(0);if(191==p){var Xg=w[M+8>>2],Yg=u+(Xg+47)&-Xg;if(2147483647>Yg){var wd=wf(Yg),Ae=wf(0);if(-1!=Ae&-1!=wd&wd<Ae){var Zg=Ae-wd,$g=Zg>u+40,nj=$g?Zg:ze,ah=$g?wd:-1;-1==ah?p=330:(G=nj,r=G>>2,y=ah,n=y>>2,p=194)}else{p=330}}else{p=330}}do{if(194==p){var Be=w[J+432>>2]+G;w[J+432>>2]=Be;Be>B[J+436>>2]&&(w[J+436>>2]=Be);var V=B[J+24>>2];l=V>>2;var oj=0==V;b:do{if(oj){var bh=B[J+16>>2];0==bh|y<bh&&(w[J+16>>2]=y);w[J+444>>2]=y;w[J+448>>2]=G;w[J+456>>2]=0;w[J+36>>2]=w[M>>2];w[J+32>>2]=-1;for(var Ce=0;;){var De=Ce<<1,ch=(De<<2)+J+40;w[J+(De+3<<2)+40>>2]=ch;w[J+(De+2<<2)+40>>2]=ch;var dh=Ce+1;if(32==dh){break}Ce=dh}var eh=y+8,Ee=0==(eh&7)?0:-eh&7,fh=G-40-Ee;w[J+24>>2]=y+Ee;w[J+12>>2]=fh;w[(Ee+4>>2)+n]=fh|1;w[(G-36>>2)+n]=40;w[J+28>>2]=w[M+16>>2]}else{var Jc=J+444;for(j=Jc>>2;0!=Jc;){var gh=B[j],hh=Jc+4,ih=B[hh>>2];if(y==gh+ih){if(0!=(w[j+3]&8)){break}var jh=V;if(!(jh>=gh&jh<y)){break}w[hh>>2]=ih+G;var kh=w[J+24>>2],lh=w[J+12>>2]+G,Fe=kh,mh=kh+8,Ge=0==(mh&7)?0:-mh&7,nh=lh-Ge;w[J+24>>2]=Fe+Ge;w[J+12>>2]=nh;w[Fe+(Ge+4)>>2]=nh|1;w[Fe+(lh+4)>>2]=40;w[J+28>>2]=w[M+16>>2];break b}Jc=w[j+2];j=Jc>>2}y<B[J+16>>2]&&(w[J+16>>2]=y);for(var pj=y+G,Lb=J+444;;){if(0==Lb){p=293;break}var oh=Lb;if(w[oh>>2]==pj){p=218;break}Lb=w[Lb+8>>2]}do{if(218==p&&0==(w[Lb+12>>2]&8)){w[oh>>2]=y;var ph=Lb+4;w[ph>>2]+=G;var qh=y+8,xd=0==(qh&7)?0:-qh&7,rh=y+(G+8),xa=0==(rh&7)?0:-rh&7;i=xa>>2;var He=y+xa+G,Ie=He,Je=xd+u;g=Je>>2;var sh=y+Je,yd=sh,zd=He-(y+xd)-u;w[(xd+4>>2)+n]=u|3;var qj=Ie==w[J+24>>2];c:do{if(qj){var th=w[J+12>>2]+zd;w[J+12>>2]=th;w[J+24>>2]=yd;w[n+(g+1)]=th|1}else{if(Ie==w[J+20>>2]){var Ad=w[J+8>>2]+zd;w[J+8>>2]=Ad;w[J+20>>2]=yd;w[n+(g+1)]=Ad|1;w[y+Ad+Je>>2]=Ad}else{var Ke=G+4,Bd=B[(Ke>>2)+n+i];if(1==(Bd&3)){var uh=Bd&-8,vh=Bd>>>3,rj=256>Bd;d:do{if(rj){var Kc=B[((xa|8)>>2)+n+r],Lc=B[n+(r+(i+3))];if(Kc==Lc){w[J>>2]&=1<<vh^-1}else{var wh=(vh<<3)+J+40;p=Kc==wh?233:Kc<B[J+16>>2]?236:233;do{if(233==p&&!(Lc!=wh&&Lc<B[J+16>>2])){w[Kc+12>>2]=Lc;w[Lc+8>>2]=Kc;break d}}while(0);L()}}else{var Le=He,Mc=B[((xa|24)>>2)+n+r],Cd=B[n+(r+(i+3))],sj=Cd==Le;do{if(sj){var xh=xa|16,yh=y+Ke+xh,zh=w[yh>>2];if(0==zh){var Ah=y+xh+G,Bh=w[Ah>>2];if(0==Bh){var Z=0;h=Z>>2;break}var Nc=Ah,Mb=Bh}else{Nc=yh,Mb=zh,p=243}for(;;){var Ch=Mb+20,Dh=w[Ch>>2];if(0!=Dh){Nc=Ch,Mb=Dh}else{var Eh=Mb+16,Fh=B[Eh>>2];if(0==Fh){break}Nc=Eh;Mb=Fh}}Nc<B[J+16>>2]?L():w[Nc>>2]=0;Z=Mb}else{var Me=B[((xa|8)>>2)+n+r];Me<B[J+16>>2]?L():(w[Me+12>>2]=Cd,w[Cd+8>>2]=Me);Z=Cd}h=Z>>2}while(0);if(0!=Mc){var Gh=y+(G+(xa+28)),Hh=(w[Gh>>2]<<2)+J+304,tj=Le==w[Hh>>2];do{if(tj){w[Hh>>2]=Z;if(0!=Z){break}w[J+4>>2]&=1<<w[Gh>>2]^-1;break d}if(Mc<B[J+16>>2]){L()}else{var Ih=Mc+16;w[Ih>>2]==Le?w[Ih>>2]=Z:w[Mc+20>>2]=Z}if(0==Z){break d}}while(0);if(Z<B[J+16>>2]){L()}else{w[h+6]=Mc;var Jh=xa|16,Dd=B[(Jh>>2)+n+r];0!=Dd&&(Dd<B[J+16>>2]?L():(w[h+4]=Dd,w[Dd+24>>2]=Z));var Ed=B[(Ke+Jh>>2)+n];0!=Ed&&(Ed<B[J+16>>2]?L():(w[h+5]=Ed,w[Ed+24>>2]=Z))}}}}while(0);var Kh=y+(uh|xa)+G,ea=uh+zd}else{Kh=Ie,ea=zd}var Lh=Kh+4;w[Lh>>2]&=-2;w[n+(g+1)]=ea|1;w[(ea>>2)+n+g]=ea;var Mh=ea>>>3;if(256>ea){var Ne=Mh<<1,Oe=(Ne<<2)+J+40,Nh=B[J>>2],Oh=1<<Mh;if(0==(Nh&Oh)){w[J>>2]=Nh|Oh;var Fd=Oe,Ph=(Ne+2<<2)+J+40}else{var Qh=(Ne+2<<2)+J+40,Rh=B[Qh>>2];Rh<B[J+16>>2]?(L(),Fd=Oe):Fd=Rh;Ph=Qh}w[Ph>>2]=yd;w[Fd+12>>2]=yd;w[n+(g+2)]=Fd;w[n+(g+3)]=Oe}else{var Oa=sh,Pe=ea>>>8;if(0==Pe){var fb=0}else{if(16777215<ea){fb=31}else{var Sh=Pe+1048320>>>16&8,Th=Pe<<Sh,Uh=Th+520192>>>16&4,Vh=Th<<Uh,Wh=Vh+245760>>>16&2,Xh=14-(Uh|Sh|Wh)+(Vh<<Wh>>>15),fb=ea>>>Xh+7&1|Xh<<1}}var Qe=(fb<<2)+J+304;w[n+(g+7)]=fb;w[n+(g+5)]=0;w[n+(g+4)]=0;var Yh=w[J+4>>2],Zh=1<<fb;if(0==(Yh&Zh)){w[J+4>>2]=Yh|Zh,w[Qe>>2]=Oa,w[n+(g+6)]=Qe,w[n+(g+3)]=Oa,w[n+(g+2)]=Oa}else{for(var Re=ea<<(31==fb?0:25-(fb>>>1)),gb=w[Qe>>2];;){if((w[gb+4>>2]&-8)==ea){var $h=gb+8,Se=B[$h>>2],ai=B[J+16>>2],uj=gb<ai;do{if(!uj&&Se>=ai){w[Se+12>>2]=Oa;w[$h>>2]=Oa;w[n+(g+2)]=Se;w[n+(g+3)]=gb;w[n+(g+6)]=0;break c}}while(0);L();break c}var Te=(Re>>>31<<2)+gb+16,bi=B[Te>>2];if(0!=bi){Re<<=1,gb=bi}else{if(Te<B[J+16>>2]){L();break c}w[Te>>2]=Oa;w[n+(g+6)]=gb;w[n+(g+3)]=Oa;w[n+(g+2)]=Oa;break c}}}}}}}while(0);ra=y+(xd|8);break a}}while(0);var Nb=V,Ue=J+444;for(e=Ue>>2;;){var Ve=B[e];if(Ve<=Nb){var ci=B[e+1];if(Ve+ci>Nb){var Gd=Ve,Hd=ci;break}}var di=B[e+2];if(0!=di){Ue=di,e=Ue>>2}else{Gd=0;Hd=4;break}}var ei=Gd+Hd,fi=Gd+(Hd-39),gi=Gd+(Hd-47)+(0==(fi&7)?0:-fi&7),Ob=gi<V+16?Nb:gi,hi=Ob+8;d=hi>>2;var vj=hi,ii=y+8,We=0==(ii&7)?0:-ii&7,ji=G-40-We;w[J+24>>2]=y+We;w[J+12>>2]=ji;w[(We+4>>2)+n]=ji|1;w[(G-36>>2)+n]=40;w[J+28>>2]=w[M+16>>2];w[Ob+4>>2]=27;w[d]=w[J+444>>2];w[d+1]=w[J+448>>2];w[d+2]=w[J+452>>2];w[d+3]=w[J+456>>2];w[J+444>>2]=y;w[J+448>>2]=G;w[J+456>>2]=0;w[J+452>>2]=vj;var ki=Ob+28;w[ki>>2]=7;var wj=Ob+32<ei;c:do{if(wj){for(var Xe=ki;;){var li=Xe+4;w[li>>2]=7;if(Xe+8>=ei){break c}Xe=li}}}while(0);if(Ob!=Nb){var fa=Ob-V,xj=Nb+fa,mi=Nb+(fa+4);w[mi>>2]&=-2;w[l+1]=fa|1;w[xj>>2]=fa;var ni=fa>>>3;if(256>fa){var Ye=ni<<1,Ze=(Ye<<2)+J+40,oi=B[J>>2],pi=1<<ni;if(0==(oi&pi)){w[J>>2]=oi|pi;var Id=Ze,qi=(Ye+2<<2)+J+40}else{var ri=(Ye+2<<2)+J+40,si=B[ri>>2];si<B[J+16>>2]?(L(),Id=Ze):Id=si;qi=ri}w[qi>>2]=V;w[Id+12>>2]=V;w[l+2]=Id;w[l+3]=Ze}else{var Jd=V,$e=fa>>>8;if(0==$e){var hb=0}else{if(16777215<fa){hb=31}else{var ti=$e+1048320>>>16&8,ui=$e<<ti,vi=ui+520192>>>16&4,wi=ui<<vi,xi=wi+245760>>>16&2,yi=14-(vi|ti|xi)+(wi<<xi>>>15),hb=fa>>>yi+7&1|yi<<1}}var af=(hb<<2)+J+304;w[l+7]=hb;w[l+5]=0;w[l+4]=0;var zi=w[J+4>>2],Ai=1<<hb;if(0==(zi&Ai)){w[J+4>>2]=zi|Ai,w[af>>2]=Jd,w[l+6]=af,w[l+3]=V,w[l+2]=V}else{for(var bf=fa<<(31==hb?0:25-(hb>>>1)),ib=w[af>>2];;){if((w[ib+4>>2]&-8)==fa){var Bi=ib+8,cf=B[Bi>>2],Ci=B[J+16>>2],yj=ib<Ci;do{if(!yj&&cf>=Ci){w[cf+12>>2]=Jd;w[Bi>>2]=Jd;w[l+2]=cf;w[l+3]=ib;w[l+6]=0;break b}}while(0);L();break b}var df=(bf>>>31<<2)+ib+16,Di=B[df>>2];if(0!=Di){bf<<=1,ib=Di}else{if(df<B[J+16>>2]){L();break b}w[df>>2]=Jd;w[l+6]=ib;w[l+3]=V;w[l+2]=V;break b}}}}}}}while(0);var Ei=B[J+12>>2];if(Ei>u){var Fi=Ei-u;w[J+12>>2]=Fi;var ef=B[J+24>>2],Gi=ef;w[J+24>>2]=Gi+u;w[(Gi+4>>2)+C]=Fi|1;w[ef+4>>2]=u|3;ra=ef+8;break a}}}while(0);w[xf>>2]=12;ra=0}}else{var Ld=Hc-u,Oc=B[J+20>>2];if(15<Ld){var ff=Oc;w[J+20>>2]=ff+u;w[J+8>>2]=Ld;w[(ff+4>>2)+C]=Ld|1;w[ff+Hc>>2]=Ld;w[Oc+4>>2]=u|3}else{w[J+8>>2]=0;w[J+20>>2]=0;w[Oc+4>>2]=Hc|3;var Hi=Oc+(Hc+4);w[Hi>>2]|=1}ra=Oc+8}}}while(0);return ra}Module._malloc=Ud;function yf(b){var d,e,h,g,i,j,l,n,r=b>>2,x,A=0==b;a:do{if(!A){var F=b-8,z=F,s=B[J+16>>2],m=F<s;b:do{if(!m){var k=B[b-4>>2],t=k&3;if(1!=t){var C=k&-8;n=C>>2;var p=b+(C-8),Vc=p,K=0==(k&1);c:do{if(K){var pa=B[F>>2];if(0==t){break a}var qa=-8-pa;l=qa>>2;var Ba=b+qa,ga=Ba,$=pa+C;if(Ba<s){break b}if(ga==w[J+20>>2]){j=b+(C-4)>>2;if(3!=(w[j]&3)){var D=ga;i=D>>2;var S=$;break}w[J+8>>2]=$;w[j]&=-2;w[r+(l+1)]=$|1;w[p>>2]=$;break a}var nb=pa>>>3;if(256>pa){var Ca=B[r+(l+2)],ha=B[r+(l+3)];if(Ca==ha){w[J>>2]&=1<<nb^-1}else{var Tb=(nb<<3)+J+40,Wc=Ca!=Tb&Ca<s;do{if(!Wc&&ha==Tb|ha>=s){w[Ca+12>>2]=ha;w[ha+8>>2]=Ca;D=ga;i=D>>2;S=$;break c}}while(0);L()}}else{var Qa=Ba,Da=B[r+(l+6)],Ra=B[r+(l+3)],Xc=Ra==Qa;do{if(Xc){var Ub=b+(qa+20),Vb=w[Ub>>2];if(0==Vb){var Wb=b+(qa+16),Xb=w[Wb>>2];if(0==Xb){var P=0;g=P>>2;break}var Ea=Wb,sa=Xb}else{Ea=Ub,sa=Vb,x=22}for(;;){var ob=sa+20,pb=w[ob>>2];if(0!=pb){Ea=ob,sa=pb}else{var Q=sa+16,W=B[Q>>2];if(0==W){break}Ea=Q;sa=W}}Ea<s?L():w[Ea>>2]=0;P=sa}else{var qb=B[r+(l+2)];qb<s?L():(w[qb+12>>2]=Ra,w[Ra+8>>2]=qb);P=Ra}g=P>>2}while(0);if(0!=Da){var Yb=b+(qa+28),Sa=(w[Yb>>2]<<2)+J+304,Yc=Qa==w[Sa>>2];do{if(Yc){w[Sa>>2]=P;if(0!=P){break}w[J+4>>2]&=1<<w[Yb>>2]^-1;D=ga;i=D>>2;S=$;break c}if(Da<B[J+16>>2]){L()}else{var Zb=Da+16;w[Zb>>2]==Qa?w[Zb>>2]=P:w[Da+20>>2]=P}if(0==P){D=ga;i=D>>2;S=$;break c}}while(0);if(P<B[J+16>>2]){L()}else{w[g+6]=Da;var rb=B[r+(l+4)];0!=rb&&(rb<B[J+16>>2]?L():(w[g+4]=rb,w[rb+24>>2]=P));var sb=B[r+(l+5)];0!=sb&&(sb<B[J+16>>2]?L():(w[g+5]=sb,w[sb+24>>2]=P))}}}D=ga;i=D>>2;S=$}else{D=z,i=D>>2,S=C}}while(0);var aa=D;if(aa<p){var tb=b+(C-4),Fa=B[tb>>2];if(0!=(Fa&1)){var Zc=0==(Fa&2);do{if(Zc){if(Vc==w[J+24>>2]){var $b=w[J+12>>2]+S;w[J+12>>2]=$b;w[J+24>>2]=D;w[i+1]=$b|1;D==w[J+20>>2]&&(w[J+20>>2]=0,w[J+8>>2]=0);if($b<=B[J+28>>2]){break a}if(0==w[M>>2]&&0==w[M>>2]){var ia=vf();0!=(ia-1&ia)&&L();w[M+8>>2]=ia;w[M+4>>2]=ia;w[M+12>>2]=-1;w[M+16>>2]=2097152;w[M+20>>2]=0;w[J+440>>2]=0;w[M>>2]=Math.floor(Date.now()/1e3)&-16^1431655768}var Ta=B[J+24>>2];if(0==Ta){break a}var $c=B[J+12>>2],ad=40<$c;do{if(ad){var Ua=B[M+8>>2],ac=(Math.floor(($c-41+Ua)/Ua)-1)*Ua,bc=Ta,N=J+444;for(h=N>>2;;){var Ga=B[h];if(Ga<=bc&&Ga+w[h+1]>bc){var ba=N;break}var cc=B[h+2];if(0==cc){ba=0;break}N=cc;h=N>>2}if(0==(w[ba+12>>2]&8)){var Va=wf(0);e=ba+4>>2;if(Va==w[ba>>2]+w[e]){var bd=wf(-(2147483646<ac?-2147483648-Ua:ac)),ub=wf(0);if(-1!=bd&ub<Va){var Wa=Va-ub;if(Va!=ub){w[e]-=Wa;w[J+432>>2]-=Wa;var cd=w[J+24>>2],dc=w[J+12>>2]-Wa,vb=cd,dd=cd+8,wb=0==(dd&7)?0:-dd&7,Xa=dc-wb;w[J+24>>2]=vb+wb;w[J+12>>2]=Xa;w[vb+(wb+4)>>2]=Xa|1;w[vb+(dc+4)>>2]=40;w[J+28>>2]=w[M+16>>2];break a}}}}}}while(0);if(B[J+12>>2]<=B[J+28>>2]){break a}w[J+28>>2]=-1;break a}if(Vc==w[J+20>>2]){var ta=w[J+8>>2]+S;w[J+8>>2]=ta;w[J+20>>2]=D;w[i+1]=ta|1;w[aa+ta>>2]=ta;break a}var Ha=(Fa&-8)+S,ec=Fa>>>3,ed=256>Fa;c:do{if(ed){var ja=B[r+n],Ia=B[((C|4)>>2)+r];if(ja==Ia){w[J>>2]&=1<<ec^-1}else{var xb=(ec<<3)+J+40;x=ja==xb?83:ja<B[J+16>>2]?86:83;do{if(83==x&&!(Ia!=xb&&Ia<B[J+16>>2])){w[ja+12>>2]=Ia;w[Ia+8>>2]=ja;break c}}while(0);L()}}else{var Ya=p,Ja=B[r+(n+4)],Za=B[((C|4)>>2)+r],yb=Za==Ya;do{if(yb){var fc=b+(C+12),gc=w[fc>>2];if(0==gc){var hc=b+(C+8),ic=w[hc>>2];if(0==ic){var R=0;d=R>>2;break}var Ka=hc,ua=ic}else{Ka=fc,ua=gc,x=93}for(;;){var jc=ua+20,kc=w[jc>>2];if(0!=kc){Ka=jc,ua=kc}else{var lc=ua+16,mc=B[lc>>2];if(0==mc){break}Ka=lc;ua=mc}}Ka<B[J+16>>2]?L():w[Ka>>2]=0;R=ua}else{var zb=B[r+n];zb<B[J+16>>2]?L():(w[zb+12>>2]=Za,w[Za+8>>2]=zb);R=Za}d=R>>2}while(0);if(0!=Ja){var nc=b+(C+20),oc=(w[nc>>2]<<2)+J+304,fd=Ya==w[oc>>2];do{if(fd){w[oc>>2]=R;if(0!=R){break}w[J+4>>2]&=1<<w[nc>>2]^-1;break c}if(Ja<B[J+16>>2]){L()}else{var pc=Ja+16;w[pc>>2]==Ya?w[pc>>2]=R:w[Ja+20>>2]=R}if(0==R){break c}}while(0);if(R<B[J+16>>2]){L()}else{w[d+6]=Ja;var La=B[r+(n+2)];0!=La&&(La<B[J+16>>2]?L():(w[d+4]=La,w[La+24>>2]=R));var $a=B[r+(n+3)];0!=$a&&($a<B[J+16>>2]?L():(w[d+5]=$a,w[$a+24>>2]=R))}}}}while(0);w[i+1]=Ha|1;w[aa+Ha>>2]=Ha;if(D!=w[J+20>>2]){var ca=Ha}else{w[J+8>>2]=Ha;break a}}else{w[tb>>2]=Fa&-2,w[i+1]=S|1,ca=w[aa+S>>2]=S}}while(0);var qc=ca>>>3;if(256>ca){var ab=qc<<1,Ab=(ab<<2)+J+40,bb=B[J>>2],rc=1<<qc;if(0==(bb&rc)){w[J>>2]=bb|rc;var Ma=Ab,Bb=(ab+2<<2)+J+40}else{var gd=(ab+2<<2)+J+40,sc=B[gd>>2];sc<B[J+16>>2]?(L(),Ma=Ab):Ma=sc;Bb=gd}w[Bb>>2]=D;w[Ma+12>>2]=D;w[i+2]=Ma;w[i+3]=Ab;break a}var va=D,Cb=ca>>>8;if(0==Cb){var da=0}else{if(16777215<ca){da=31}else{var Db=Cb+1048320>>>16&8,tc=Cb<<Db,uc=tc+520192>>>16&4,cb=tc<<uc,vc=cb+245760>>>16&2,wc=14-(uc|Db|vc)+(cb<<vc>>>15),da=ca>>>wc+7&1|wc<<1}}var Eb=(da<<2)+J+304;w[i+7]=da;w[i+5]=0;w[i+4]=0;var u=w[J+4>>2],xc=1<<da,I=0==(u&xc);c:do{if(I){w[J+4>>2]=u|xc,w[Eb>>2]=va,w[i+6]=Eb,w[i+3]=D,w[i+2]=D}else{for(var Fb=ca<<(31==da?0:25-(da>>>1)),ka=w[Eb>>2];;){if((w[ka+4>>2]&-8)==ca){var Gb=ka+8,la=B[Gb>>2],yc=B[J+16>>2],hd=ka<yc;do{if(!hd&&la>=yc){w[la+12>>2]=va;w[Gb>>2]=va;w[i+2]=la;w[i+3]=ka;w[i+6]=0;break c}}while(0);L();break c}var Hb=(Fb>>>31<<2)+ka+16,zc=B[Hb>>2];if(0!=zc){Fb<<=1,ka=zc}else{if(Hb<B[J+16>>2]){L();break c}w[Hb>>2]=va;w[i+6]=ka;w[i+3]=D;w[i+2]=D;break c}}}}while(0);var Ac=w[J+32>>2]-1;w[J+32>>2]=Ac;if(0!=Ac){break a}for(var Bc=J+452;;){var Cc=w[Bc>>2];if(0==Cc){break}Bc=Cc+8}w[J+32>>2]=-1;break a}}}}}while(0);L()}}while(0)}Module._free=yf;function zf(b,d){var e,h=1<b;a:do{if(h){var g=Af(w[d+4>>2]);if(2<b){var i=Af(w[d+8>>2]);if(0<i){for(var j=g/2&-1,l=1<g,n=0<g,r=j<g,x=0,A=0,F=0;;){var z;Bf||(Bf=[]);Bf.push(o);z=Bf.length-1;var s=o;e=s>>2;o+=4*g;o=o+3>>2<<2;b:do{if(l){for(var m=0;;){var k=Ud(11*m%1024+F);w[(m<<2>>2)+e]=k;0==k&&Cf(5726);if(10<m&1==m%4){var k=(m-10<<2)+s,t=w[k>>2];0!=t&&(yf(t),w[k>>2]=0)}m+=1;if(m>=j){break b}}}}while(0);b:do{if(r){for(k=j;;){m=k+1;t=Ud(m<<10);w[(k<<2>>2)+e]=t;0==t&&Cf(5736);11>k|1==k%4||(k=(k-10<<2)+s,t=w[k>>2],0!=t&&(yf(t),w[k>>2]=0));if(m==g){break b}k=m}}}while(0);s=B[e];b:do{if(n){m=1;for(k=s;;){0!=k&&yf(k);if(m==g){break b}k=B[(m<<2>>2)+e];m+=1}}}while(0);m=Ud(512);e=Ud(512);x=(s==m)+x;A=(s==e)+A;e=Bf[z];Bf.splice(z,1);o=e;F+=1;if(F==i){C=x;p=A;break a}}}else{p=C=0}}else{var C=0,p=0}}else{p=C=0}}while(0);g=(Kd=o,o+=8,w[Kd>>2]=C,w[Kd+4>>2]=p,Kd);h=w[Hg>>2];j=Ii(g);g=o;i=H(j,"i8",Td);j=1*j.length;0!=j&&-1==Ji(h,i,j)&&O[h]&&(O[h].error=a);o=g;return 0}Module._main=zf;function L(){throw"abort() at "+Error().stack}function Af(b){for(var d;(d=v[b])&&d in{32:0,9:0,10:0,11:0,12:0,13:0};){b++}if(!d||!(48<=d&&57>=d)){return 0}for(var e=b;(d=v[e])&&48<=d&&57>=d;){e++}return Math.floor(Number(Rd(b).substr(0,e-b)))}var Bf;function Cf(b){throw"Assertion failed: "+Rd(pf.u)+", at: "+[Rd(pf.t),b,Rd(pf.s)]}var Ki=13,Li=9,Mi=22,Ni=5,Oi=21,Pi=6;function U(b){xf||(xf=H([0],"i32",E));w[xf>>2]=b}var xf,Qi=0,Hg=0,Ri=0,Si=2,O=[c],Ti=a;function Ui(b,d){if("string"!==typeof b){return c}d===ma&&(d="/");b&&"/"==b[0]&&(d="");for(var e=(d+"/"+b).split("/").reverse(),h=[""];e.length;){var g=e.pop();""==g||"."==g||(".."==g?1<h.length&&h.pop():h.push(g))}return 1==h.length?"/":h.join("/")}function Vi(b,d,e){var h={B:f,h:f,error:0,name:c,path:c,object:c,n:f,p:c,o:c},b=Ui(b);if("/"==b){h.B=a,h.h=h.n=a,h.name="/",h.path=h.p="/",h.object=h.o=Wi}else{if(b!==c){for(var e=e||0,b=b.slice(1).split("/"),g=Wi,i=[""];b.length;){1==b.length&&g.c&&(h.n=a,h.p=1==i.length?"/":i.join("/"),h.o=g,h.name=b[0]);var j=b.shift();if(g.c){if(g.q){if(!g.a.hasOwnProperty(j)){h.error=2;break}}else{h.error=Ki;break}}else{h.error=20;break}g=g.a[j];if(g.link&&!(d&&0==b.length)){if(40<e){h.error=40;break}h=Ui(g.link,i.join("/"));h=Vi([h].concat(b).join("/"),d,e+1);break}i.push(j);0==b.length&&(h.h=a,h.path=i.join("/"),h.object=g)}}}return h}function Xi(b){Yi();b=Vi(b,ma);if(b.h){return b.object}U(b.error);return c}function zj(b,d,e,h,g){b||(b="/");"string"===typeof b&&(b=Xi(b));if(!b){throw U(Ki),Error("Parent path must exist.")}if(!b.c){throw U(20),Error("Parent must be a folder.")}if(!b.write&&!Ti){throw U(Ki),Error("Parent folder must be writeable.")}if(!d||"."==d||".."==d){throw U(2),Error("Name must not be empty.")}if(b.a.hasOwnProperty(d)){throw U(17),Error("Can't overwrite object.")}b.a[d]={q:h===ma?a:h,write:g===ma?f:g,timestamp:Date.now(),A:Si++};for(var i in e){e.hasOwnProperty(i)&&(b.a[d][i]=e[i])}return b.a[d]}function Aj(b,d,e,h){return zj(b,d,{c:a,b:f,a:{}},e,h)}function Bj(b,d,e,h){b=Xi(b);if(b===c){throw Error("Invalid parent.")}for(d=d.split("/").reverse();d.length;){var g=d.pop();g&&(b.a.hasOwnProperty(g)||Aj(b,g,e,h),b=b.a[g])}return b}function Cj(b,d,e,h,g){e.c=f;return zj(b,d,e,h,g)}function Dj(b,d,e,h){if(!e&&!h){throw Error("A device must have at least one callback defined.")}return Cj(b,d,{b:a,input:e,d:h},Boolean(e),Boolean(h))}function Yi(){Wi||(Wi={q:a,write:a,c:a,b:f,timestamp:Date.now(),A:1,a:{}})}function Ej(){var b,d,e;function h(b){b===c||10===b?(d.f(d.buffer.join("")),d.buffer=[]):d.buffer.push(String.fromCharCode(b))}Pb(!Fj,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Fj=a;Yi();b=b||Module.stdin;d=d||Module.stdout;e=e||Module.stderr;var g=a,i=a,j=a;b||(g=f,b=(function(){if(!b.g||!b.g.length){var d;"undefined"!=typeof window&&"function"==typeof window.prompt?(d=window.prompt("Input: "),d===c&&(d=String.fromCharCode(0))):"function"==typeof readline&&(d=readline());d||(d="");b.g=$d(d+"\n",a)}return b.g.shift()}));d||(i=f,d=h);d.f||(d.f=Module.print);d.buffer||(d.buffer=[]);e||(j=f,e=h);e.f||(e.f=Module.print);e.buffer||(e.buffer=[]);try{Aj("/","tmp",a,a)}catch(l){}var n=Aj("/","dev",a,a),r=Dj(n,"stdin",b),x=Dj(n,"stdout",c,d);e=Dj(n,"stderr",c,e);Dj(n,"tty",b,d);O[1]={path:"/dev/stdin",object:r,position:0,l:a,e:f,k:f,m:!g,error:f,j:f,r:[]};O[2]={path:"/dev/stdout",object:x,position:0,l:f,e:a,k:f,m:!i,error:f,j:f,r:[]};O[3]={path:"/dev/stderr",object:e,position:0,l:f,e:a,k:f,m:!j,error:f,j:f,r:[]};Qi=H([1],"void*",E);Hg=H([2],"void*",E);Ri=H([3],"void*",E);Bj("/","dev/shm/tmp",a,a);O[Qi]=O[1];O[Hg]=O[2];O[Ri]=O[3];H([H([0,0,0,0,Qi,0,0,0,Hg,0,0,0,Ri,0,0,0],"void*",E)],"void*",E)}var Fj,Wi;function Ji(b,d,e){var h=O[b];if(h){if(h.e){if(0>e){return U(Mi),-1}if(h.object.b){if(h.object.d){for(var g=0;g<e;g++){try{h.object.d(v[d+g])}catch(i){return U(Ni),-1}}h.object.timestamp=Date.now();return g}U(Pi);return-1}g=h.position;b=O[b];if(!b||b.object.b){U(Li),d=-1}else{if(b.e){if(b.object.c){U(Oi),d=-1}else{if(0>e||0>g){U(Mi),d=-1}else{for(var j=b.object.a;j.length<g;){j.push(0)}for(var l=0;l<e;l++){j[g+l]=Qc[d+l]}b.object.timestamp=Date.now();d=l}}}else{U(Ki),d=-1}}-1!=d&&(h.position+=d);return d}U(Ki);return-1}U(Li);return-1}function Ii(b){function d(d){var e;"double"===d?e=Sc[b+h>>2]:"i64"==d?e=[w[b+h>>2],w[b+(h+4)>>2]]:(d="i32",e=w[b+h>>2]);h+=Math.max(lb(d),mb);return e}for(var e=pf.v,h=0,g=[],i,j;;){var l=e;i=v[e];if(0===i){break}j=v[e+1];if(37==i){var n=f,r=f,x=f,A=f;a:for(;;){switch(j){case 43:n=a;break;case 45:r=a;break;case 35:x=a;break;case 48:if(A){break a}else{A=a;break};default:break a}e++;j=v[e+1]}var F=0;if(42==j){F=d("i32"),e++,j=v[e+1]}else{for(;48<=j&&57>=j;){F=10*F+(j-48),e++,j=v[e+1]}}var z=f;if(46==j){var s=0,z=a;e++;j=v[e+1];if(42==j){s=d("i32"),e++}else{for(;;){j=v[e+1];if(48>j||57<j){break}s=10*s+(j-48);e++}}j=v[e+1]}else{s=6}var m;switch(String.fromCharCode(j)){case"h":j=v[e+2];104==j?(e++,m=1):m=2;break;case"l":j=v[e+2];108==j?(e++,m=8):m=4;break;case"L":case"q":case"j":m=8;break;case"z":case"t":case"I":m=4;break;default:m=c}m&&e++;j=v[e+1];if(-1!="d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(j))){l=100==j||105==j;m=m||4;i=d("i"+8*m);var k;8==m&&(i=117==j?(i[0]>>>0)+4294967296*(i[1]>>>0):(i[0]>>>0)+4294967296*(i[1]|0));4>=m&&(i=(l?rf:qf)(i&Math.pow(256,m)-1,8*m));var t=Math.abs(i),l="";if(100==j||105==j){k=rf(i,8*m).toString(10)}else{if(117==j){k=qf(i,8*m).toString(10),i=Math.abs(i)}else{if(111==j){k=(x?"0":"")+t.toString(8)}else{if(120==j||88==j){l=x?"0x":"";if(0>i){i=-i;k=(t-1).toString(16);t=[];for(x=0;x<k.length;x++){t.push((15-parseInt(k[x],16)).toString(16))}for(k=t.join("");k.length<2*m;){k="f"+k}}else{k=t.toString(16)}88==j&&(l=l.toUpperCase(),k=k.toUpperCase())}else{112==j&&(0===t?k="(nil)":(l="0x",k=t.toString(16)))}}}}if(z){for(;k.length<s;){k="0"+k}}for(n&&(l=0>i?"-"+l:"+"+l);l.length+k.length<F;){r?k+=" ":A?k="0"+k:l=" "+l}k=l+k;k.split("").forEach((function(b){g.push(b.charCodeAt(0))}))}else{if(-1!="f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(j))){i=d("double");if(isNaN(i)){k="nan",A=f}else{if(isFinite(i)){z=f;m=Math.min(s,20);if(103==j||71==j){z=a,s=s||1,m=parseInt(i.toExponential(m).split("e")[1],10),s>m&&-4<=m?(j=(103==j?"f":"F").charCodeAt(0),s-=m+1):(j=(103==j?"e":"E").charCodeAt(0),s--),m=Math.min(s,20)}if(101==j||69==j){k=i.toExponential(m),/[eE][-+]\d$/.test(k)&&(k=k.slice(0,-1)+"0"+k.slice(-1))}else{if(102==j||70==j){k=i.toFixed(m)}}l=k.split("e");if(z&&!x){for(;1<l[0].length&&-1!=l[0].indexOf(".")&&("0"==l[0].slice(-1)||"."==l[0].slice(-1));){l[0]=l[0].slice(0,-1)}}else{for(x&&-1==k.indexOf(".")&&(l[0]+=".");s>m++;){l[0]+="0"}}k=l[0]+(1<l.length?"e"+l[1]:"");69==j&&(k=k.toUpperCase());n&&0<=i&&(k="+"+k)}else{k=(0>i?"-":"")+"inf",A=f}}for(;k.length<F;){k=r?k+" ":A&&("-"==k[0]||"+"==k[0])?k[0]+"0"+k.slice(1):(A?"0":" ")+k}97>j&&(k=k.toUpperCase());k.split("").forEach((function(b){g.push(b.charCodeAt(0))}))}else{if(115==j){n=d("i8*")||0;A=of(n);z&&(A=Math.min(of(n),s));if(!r){for(;A<F--;){g.push(32)}}for(x=0;x<A;x++){g.push(Qc[n++])}if(r){for(;A<F--;){g.push(32)}}}else{if(99==j){for(r&&g.push(d("i8"));0<--F;){g.push(32)}r||g.push(d("i8"))}else{if(110==j){r=d("i32*"),w[r>>2]=g.length}else{if(37==j){g.push(i)}else{for(x=l;x<e+2;x++){g.push(v[x])}}}}}}}e+=2}else{g.push(i),e+=1}}return g}function vf(){switch(8){case 8:return Wd;case 54:case 56:case 21:case 61:case 63:case 22:case 67:case 23:case 24:case 25:case 26:case 27:case 69:case 28:case 101:case 70:case 71:case 29:case 30:case 199:case 75:case 76:case 32:case 43:case 44:case 80:case 46:case 47:case 45:case 48:case 49:case 42:case 82:case 33:case 7:case 108:case 109:case 107:case 112:case 119:case 121:return 200809;case 13:case 104:case 94:case 95:case 34:case 35:case 77:case 81:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 94:case 95:case 110:case 111:case 113:case 114:case 115:case 116:case 117:case 118:case 120:case 40:case 16:case 79:case 19:return-1;case 92:case 93:case 5:case 72:case 6:case 74:case 92:case 93:case 96:case 97:case 98:case 99:case 102:case 103:case 105:return 1;case 38:case 66:case 50:case 51:case 4:return 1024;case 15:case 64:case 41:return 32;case 55:case 37:case 17:return 2147483647;case 18:case 1:return 47839;case 59:case 57:return 99;case 68:case 58:return 2048;case 0:return 2097152;case 3:return 65536;case 14:return 32768;case 73:return 32767;case 39:return 16384;case 60:return 1e3;case 106:return 700;case 52:return 256;case 62:return 255;case 2:return 100;case 65:return 64;case 36:return 20;case 100:return 16;case 20:return 6;case 53:return 4}U(Mi);return-1}function wf(b){Gj||(q=q+4095>>12<<12,Gj=a);var d=q;0!=b&&Rb(b);return d}var Gj;function Hj(){function b(){if(document.webkitFullScreenElement===e||document.mozFullScreenElement===e||document.fullScreenElement===e){e.D=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock,e.D()}}function d(){}var e=Module.canvas;document.addEventListener("fullscreenchange",b,f);document.addEventListener("mozfullscreenchange",b,f);document.addEventListener("webkitfullscreenchange",b,f);document.addEventListener("pointerlockchange",d,f);document.addEventListener("mozpointerlockchange",d,f);document.addEventListener("webkitpointerlockchange",d,f);e.C=e.requestFullScreen||e.mozRequestFullScreen||(e.webkitRequestFullScreen?(function(){e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}):c);e.C()}lf.unshift({i:(function(){!Module.noFSInit&&!Fj&&Ej()})});mf.push({i:(function(){Ti=f})});nf.push({i:(function(){Fj&&(O[2]&&0<O[2].object.d.buffer.length&&O[2].object.d(10),O[3]&&0<O[3].object.d.buffer.length&&O[3].object.d(10))})});Module.FS_createFolder=Aj;Module.FS_createPath=Bj;Module.FS_createDataFile=(function(b,d,e,h,g){if("string"===typeof e){for(var i=Array(e.length),j=0,l=e.length;j<l;++j){i[j]=e.charCodeAt(j)}e=i}return Cj(b,d,{b:f,a:e},h,g)});Module.FS_createLazyFile=(function(b,d,e,h,g){return Cj(b,d,{b:f,url:e},h,g)});Module.FS_createLink=(function(b,d,e,h,g){return Cj(b,d,{b:f,link:e},h,g)});Module.FS_createDevice=Dj;U(0);Module.requestFullScreen=(function(){Hj()});Module.z=(function(b){function d(){for(var b=0;3>b;b++){h.push(0)}}var e=b.length+1,h=[H($d("/bin/this.program"),"i8",E)];d();for(var g=0;g<e-1;g+=1){h.push(H($d(b[g]),"i8",E)),d()}h.push(0);h=H(h,"i32",E);return zf(e,h)});var M,J;M=H(24,"i32",E);J=H(468,["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"*",0,0,0,"i32",0,0,0,"*",0,0,0,"i32",0,0,0,"*",0,0,0,"i32",0,0,0],E);pf.t=H([47,116,109,112,47,101,109,115,99,114,105,112,116,101,110,95,116,101,109,112,47,115,114,99,46,99,112,112,0],"i8",E);pf.s=H([105,110,116,32,109,97,105,110,40,105,110,116,44,32,99,104,97,114,32,42,42,41,0],"i8",E);pf.u=H([97,108,108,111,99,97,116,105,111,110,115,91,105,93,0],"i8",E);pf.v=H([42,37,100,44,37,100,42,10,0],"i8",E);Vd=[0,0];Module.FUNCTION_TABLE=Vd;function uf(b){function d(){var d=0;Module._main&&(kf(mf),d=Module.z(b),Module.noExitRuntime||kf(nf));if(Module.postRun){for("function"==typeof Module.postRun&&(Module.postRun=[Module.postRun]);0<Module.postRun.length;){Module.postRun.pop()()}}return d}b=b||Module.arguments;if(Module.preRun){for("function"==typeof Module.preRun&&(Module.preRun=[Module.preRun]);0<Module.preRun.length;){if(Module.preRun.pop()(),0<sf){return 0}}}return Module.setStatus?(Module.setStatus("Running..."),setTimeout((function(){setTimeout((function(){Module.setStatus("")}),1);d()}),1),0):d()}Module.run=uf;kf(lf);Module.noInitialRun&&tf();0==sf&&uf()
