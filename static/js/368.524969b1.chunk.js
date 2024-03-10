"use strict";(self.webpackChunkonline_car_rental_test=self.webpackChunkonline_car_rental_test||[]).push([[368],{9368:function(n,e,i){i.d(e,{h:function(){return Z}});var t,o,r,l,s=i(3433),a=i(4942),c=i(1413),d=i(9439),p=i(2791),h=i(9434),f=i(168),x=i(7924),g=x.ZP.li(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  overflow: hidden;\n  position: relative;\n  .img {\n    width: 100%;\n    height: 268px;\n    object-fit: cover;\n    border-radius: 14px;\n    margin-bottom: 14px;\n  }\n  .wrapper-info {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n\n    // line-height: 24px;\n    line-height: 1.5;\n    color: #121417;\n  }\n  .nameAndPrice {\n    display: flex;\n    justify-content: space-between;\n  }\n  .price {\n    margin-right: 9px;\n  }\n  .blueFill {\n    color: #3470ff;\n  }\n  .descrList {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px 12px;\n    width: 270px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n    height: 40px;\n    overflow: hidden;\n    margin-bottom: 28px;\n    li {\n      position: relative;\n    }\n    li:not(:last-child)::after {\n      content: '|';\n      position: absolute;\n      right: -7px;\n    }\n  }\n  .btnLearnMore {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    gap: 0px;\n    border-radius: 12px;\n    padding: 12px 99px;\n    width: 274px;\n    height: 44px;\n    background: #3470ff;\n    outline: none;\n    border: none;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n\n    // line-height: 20px;\n    line-height: 1.42857;\n    color: #fff;\n    &:hover {\n      background: #0b44cd;\n    }\n  }\n  .btnAddFav {\n    border: none;\n    background: none;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n  }\n"]))),u=i(9700),m=i(7153),b=i(27),w=i(1686),j=i.n(w),v=i(184),y=function(n){var e=n.car,i=(0,h.I0)(),t=(0,h.v9)(u.$),o=t.some((function(n){return n.id===e.id}));return(0,v.jsxs)(g,{children:[(0,v.jsx)("img",{className:"img",src:e.img||"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",alt:e.description}),(0,v.jsxs)("div",{className:"wrapper-info",children:[(0,v.jsxs)("div",{className:"nameAndPrice",children:[(0,v.jsxs)("h3",{children:[e.make,e.model.length<9&&" ",(0,v.jsx)("span",{className:"blueFill",children:e.model.length<9&&e.model}),", ",e.year]}),(0,v.jsx)("h3",{className:"price",children:e.rentalPrice})]}),(0,v.jsxs)("ul",{className:"descrList",children:[(0,v.jsxs)("li",{children:[e.address.split(",")[1]," "]}),(0,v.jsx)("li",{children:e.address.split(",")[2]}),(0,v.jsx)("li",{children:e.rentalCompany}),(0,v.jsx)("li",{children:e.type}),(0,v.jsx)("li",{children:e.model}),(0,v.jsx)("li",{children:e.mileage}),(0,v.jsx)("li",{children:e.accessories[0]})]})]}),(0,v.jsx)("button",{className:"btnLearnMore",type:"button",onClick:function(){return n=e,void i((0,b.h7)(n));var n},children:"learn more"}),(0,v.jsx)("button",{className:"btnAddFav",type:"button",onClick:function(){return function(n){if(t.some((function(e){return e.id===n.id})))return i((0,m.Ni)(n)),void j().Notify.info("".concat(n.make," ").concat(n.model," removed from favorite list"));i((0,m.a3)(n)),j().Notify.success("".concat(n.make," ").concat(n.model," added to favorite list"))}(e)},children:o?(0,v.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,v.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},k=function(n){return n.modal.isOpenModal},M=function(n){return n.modal.modalData},C=x.ZP.div(o||(o=(0,f.Z)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(48, 58, 58, 0.285);\n  .modal {\n    position: relative;\n    width: 461px;\n    min-height: 300px;\n    border-radius: 24px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background: #fff;\n    padding: 40px;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n  }\n  .btnClose {\n    background: none;\n    outline: none;\n    border: none;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n  .img {\n    width: 100%;\n    border-radius: 14px;\n    margin-bottom: 14px;\n  }\n  .caption {\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 18px;\n\n    // line-height: 24px;\n    line-height: 1.33333;\n    color: #121417;\n  }\n  .blue {\n    color: #3470ff;\n  }\n  .blueAndBold {\n    color: #3470ff;\n    font-weight: bold;\n  }\n  .list-modal {\n    display: flex;\n    width: 300px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px 12px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n    margin-bottom: 14px;\n    li {\n      position: relative;\n    }\n    li:not(:last-child)::after {\n      content: '|';\n      position: absolute;\n      right: -7px;\n    }\n  }\n  .descr {\n    font-family: 'Manrope', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n\n    // line-height: 20px;\n    line-height: 1.42857;\n    color: #121417;\n    margin-bottom: 24px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n  }\n  .accessories {\n    font-family: 'Manrope', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n\n    // line-height: 18px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n    margin-bottom: 24px;\n  }\n  .subtitle {\n    display: block;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n\n    // line-height: 20px;\n    line-height: 1.42857;\n    color: #121417;\n    margin-bottom: 8px;\n  }\n  .conditions-list {\n    display: flex;\n    flex-direction: row;\n    gap: 4px 8px;\n    flex-wrap: wrap;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n\n    // line-height: 18px;\n    line-height: 1.5;\n    letter-spacing: -0.02em;\n    color: #363535;\n    margin-bottom: 24px;\n    li {\n      border-radius: 35px;\n      padding: 7px 14px;\n      background: #f9f9f9;\n    }\n  }\n  .btnRent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-radius: 12px;\n    background: #3470ff;\n    width: 168px;\n    height: 44px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n\n    // line-height: 20px;\n    line-height: 1.42857;\n    color: #fff;\n    &:hover {\n      background: #0b44cd;\n    }\n  }\n"]))),N=function(){var n=(0,h.I0)(),e=(0,h.v9)(M);(0,p.useEffect)((function(){var e=function(e){"Escape"===e.code&&n((0,b.Mr)())};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[n]);return(0,v.jsx)(C,{onClick:function(e){e.target===e.currentTarget&&n((0,b.Mr)())},children:(0,v.jsxs)("div",{className:"modal",children:[(0,v.jsx)("button",{className:"btnClose",onClick:function(){return n((0,b.Mr)())},children:(0,v.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M18 6L6 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,v.jsx)("path",{d:"M6 6L18 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,v.jsx)("img",{className:"img",src:e.img||"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",alt:e.make}),(0,v.jsxs)("h3",{className:"caption",children:[e.make," ",(0,v.jsx)("span",{className:"blue",children:e.model}),","," ",e.year]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("ul",{className:"list-modal",children:[(0,v.jsx)("li",{children:e.address.split(",")[1]}),(0,v.jsx)("li",{children:e.address.split(",")[2]}),(0,v.jsxs)("li",{children:["Id:",e.id]}),(0,v.jsxs)("li",{children:["Year:",e.year]}),(0,v.jsxs)("li",{children:["Type:",e.type]}),(0,v.jsxs)("li",{children:["Fuel Consumption:",e.fuelConsumption]}),(0,v.jsxs)("li",{children:["Engine Size:",e.engineSize]})]}),(0,v.jsx)("p",{className:"descr",children:e.description}),(0,v.jsxs)("p",{className:"accessories",children:[(0,v.jsx)("span",{className:"subtitle",children:"Accessories and functionalities:"}),e.accessories.concat(e.functionalities.slice(0,2)).join(" | ")]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{className:"subtitle",children:"Rental Conditions:"}),(0,v.jsxs)("ul",{className:"conditions-list",children:[(0,v.jsxs)("li",{children:["Minimum age:",(0,v.jsx)("span",{className:"blueAndBold",children:e.rentalConditions.split("\n")[0].split(":")[1]})]}),(0,v.jsx)("li",{children:"Valid driver\u2019s license"}),(0,v.jsx)("li",{children:"Security deposite required "}),(0,v.jsxs)("li",{children:["Mileage:",(0,v.jsxs)("span",{className:"blueAndBold",children:[" ",e.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),(0,v.jsxs)("li",{children:["Price:",(0,v.jsxs)("span",{className:"blueAndBold",children:[" ",e.rentalPrice]})]})]}),(0,v.jsx)("a",{className:"btnRent",href:"tel:+380730000000",children:"Rental car"})]})]})]})})},L=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  .list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    row-gap: 50px;\n    column-gap: 29px;\n  }\n\n  .form {\n    margin: 0 auto;\n    display: flex;\n    gap: 18px;\n    height: 74px;\n  }\n  .label {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.28571;\n    color: #8a8a89;\n    height: 74px;\n  }\n  .btnSearch {\n    margin-top: auto;\n    display: block;\n    height: 48px;\n  }\n  .inputsMillage {\n    display: flex;\n  }\n  .select-brand {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    gap: 32px;\n    border-radius: 14px;\n    padding: 14px 18px;\n    width: 224px;\n    height: 48px;\n    background: #f7f7fb;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n    border: none;\n    outline: none;\n\n    // line-height: 20px;\n    line-height: 1.11111;\n    color: #121417;\n    cursor: pointer;\n  }\n  .select-price {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    gap: 32px;\n    border-radius: 14px;\n    padding: 14px 18px;\n    width: 125px;\n    height: 48px;\n    background: #f7f7fb;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n    border: none;\n    outline: none;\n\n    // line-height: 20px;\n    line-height: 1.11111;\n    color: #121417;\n    cursor: pointer;\n  }\n  .inputMillageLeft {\n    border: none;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n    border-radius: 14px 0 0 14px;\n    width: 160px;\n    height: 48px;\n    background: #f7f7fb;\n    outline: none;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 18px;\n\n    // line-height: 20px;\n    line-height: 1.11111;\n    color: #121417;\n    padding-left: 24px;\n  }\n  .inputMillageRight {\n    border: none;\n    border-radius: 0 14px 14px 0;\n\n    width: 160px;\n    height: 48px;\n    background: #f7f7fb;\n    outline: none;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 500;\n    font-size: 18px;\n    padding-left: 24px;\n\n    // line-height: 20px;\n    line-height: 1.11111;\n    color: #121417;\n  }\n  .btnSearch {\n    border-radius: 12px;\n    padding: 14px 44px;\n    width: 136px;\n    height: 48px;\n    background: #3470ff;\n    border: none;\n    outline: none;\n    font-family: 'Manrope', sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n\n    // line-height: 20px;\n    line-height: 1.42857;\n    color: #fff;\n    &:hover {\n      background: #0b44cd;\n    }\n  }\n"]))),z=x.ZP.div(l||(l=(0,f.Z)(["\n  display: block;\n  margin: 20px auto;\n  font-family: 'Manrope', sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #121417;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n"]))),P=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],Z=function(n){var e=n.cars,i=(0,h.v9)(k),t=(0,p.useState)({make:"",maxPrice:"",minMileage:"",maxMileage:""}),o=(0,d.Z)(t,2),r=o[0],l=o[1],f=(0,p.useState)(e),x=(0,d.Z)(f,2),g=x[0],u=x[1],m=function(n,e){l((0,c.Z)((0,c.Z)({},r),{},(0,a.Z)({},n,e)))};return(0,v.jsxs)(L,{children:[(0,v.jsxs)("form",{className:"form",onSubmit:function(n){n.preventDefault();var i=e.filter((function(n){return(!r.make||n.make.toLowerCase()===r.make.toLowerCase())&&(!(r.maxPrice&&parseFloat(n.rentalPrice.slice(1))>parseFloat(r.maxPrice))&&(!(r.minMileage&&n.mileage<parseFloat(r.minMileage))&&!(r.maxMileage&&n.mileage>parseFloat(r.maxMileage))))}));u(i)},children:[(0,v.jsxs)("label",{className:"label",children:["Car brand",(0,v.jsxs)("select",{className:"select-brand",value:r.make,onChange:function(n){return m("make",n.target.value)},children:[(0,v.jsx)("option",{value:"",children:"Select a brand"}),P.map((function(n){return(0,v.jsx)("option",{value:n,children:n},n)}))]})]}),(0,v.jsxs)("label",{className:"label",children:["Price/ 1 hour",(0,v.jsxs)("select",{className:"select-price",value:r.maxPrice,onChange:function(n){return m("maxPrice",n.target.value)},children:[(0,v.jsx)("option",{value:"",children:"To $"}),(0,s.Z)(Array(10).keys()).map((function(n){return(0,v.jsx)("option",{value:10*(n+1),children:15*(n+1)},n+1)}))]})]}),(0,v.jsxs)("label",{className:"label",children:["\u0421ar mileage / km",(0,v.jsxs)("div",{className:"inputsMillage",children:[(0,v.jsx)("input",{className:"inputMillageLeft",type:"number",placeholder:"From",value:r.minMileage,onChange:function(n){return m("minMileage",n.target.value)}}),(0,v.jsx)("input",{className:"inputMillageRight",type:"number",placeholder:"To",value:r.maxMileage,onChange:function(n){return m("maxMileage",n.target.value)}})]})]}),(0,v.jsx)("button",{className:"btnSearch",type:"submit",children:"Search"})]}),g.length>0?(0,v.jsx)("ul",{className:"list",children:g.map((function(n){return(0,v.jsx)(y,{car:n},n.id)}))}):(0,v.jsx)(z,{children:"Unfortunately, nothing was found"}),i&&(0,v.jsx)(N,{})]})}},9700:function(n,e,i){i.d(e,{$:function(){return o},W:function(){return t}});var t=function(n){return n.cars.cars},o=function(n){return n.cars.favorites}}}]);
//# sourceMappingURL=368.524969b1.chunk.js.map