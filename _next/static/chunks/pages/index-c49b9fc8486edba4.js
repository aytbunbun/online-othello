(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7323)}])},7323:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var s=i(5893),a=i(24),r=i(7294),c=i(4110),t=i.n(c);let o=e=>(0,s.jsx)("div",{className:t().cell,onClick:e.onClick,children:0!==e.color&&(0,s.jsx)("div",{className:t().stone,style:{background:1===e.color?"#000":2===e.color?"#fff":"#fa0"}})});var l=i(8239);let _=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,s.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var d=i(1733),u=i(7251),x=i(2038),f=i.n(x);let m=e=>{let{user:n}=e,i=async()=>{confirm("Logout?")&&await (0,u.k)()};return(0,s.jsx)("div",{className:f().container,children:(0,s.jsxs)("div",{className:f().main,children:[(0,s.jsx)("img",{src:d.D.frourio_svg,height:36,alt:"frourio logo"}),(0,s.jsxs)("div",{className:f().userBtn,onClick:i,children:[n.photoURL?(0,s.jsx)("img",{className:f().userIcon,src:n.photoURL,height:24,alt:n.displayName}):(0,s.jsx)(_,{size:18,fill:"#555"}),(0,s.jsx)("span",{className:f().userName,children:n.displayName})]})]})})};var h=i(1290),g=i(3377),p=i(5371),v=i(2729),j=i.n(v);let N=()=>{let[e]=(0,a.KO)(p.L),[n,i]=(0,r.useState)(),c=async()=>{let e=await h.x.board.$get().catch(g.F);null!==e&&i(e)},t=async(e,n)=>{await h.x.board.$post({body:{x:e,y:n}}),await c()};return((0,r.useEffect)(()=>{let e=setInterval(c,500);return()=>{clearInterval(e)}},[]),n&&e)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{user:e}),(0,s.jsxs)("div",{className:j().container,children:[(0,s.jsx)("div",{style:{color:"#000",backgroundColor:"green",fontSize:60},children:"黒のターン"}),(0,s.jsx)("div",{className:j().board,children:n.map((e,n)=>e.map((e,i)=>(0,s.jsx)(o,{color:e,onClick:()=>t(i,n)},"".concat(i,"-").concat(n))))})]})]}):(0,s.jsx)(l.g,{visible:!0})};var w=N},7251:function(e,n,i){"use strict";i.d(n,{_:function(){return c},k:function(){return t}});var s=i(7908),a=i(328),r=i(3377);let c=async()=>{let e=new s.GH;e.addScope("read:user"),await (0,s.rh)((0,a.l)(),e).catch(r.F)},t=async()=>{await (0,a.l)().signOut()}},4110:function(e){e.exports={cell:"cell_cell__VTQkI",stone:"cell_stone__pDME7"}},2038:function(e){e.exports={container:"BasicHeader_container__5rTZS",main:"BasicHeader_main__yd6De",userBtn:"BasicHeader_userBtn__B7CLf",userIcon:"BasicHeader_userIcon__fjiOn",userName:"BasicHeader_userName__vjAjN"}},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);