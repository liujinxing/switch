(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/index.mdx":function(e,n,t){"use strict";t.r(n);var c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),a=t.n(i),r=t("./node_modules/@mdx-js/react/dist/index.es.js"),o=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=t("./node_modules/classnames/index.js"),h=t.n(b),p=t("./node_modules/sinoui-components/utils/colors.js");function d(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  opacity: ",";\n  z-index: -1;\n  transition: ",";\n  border-radius: 7px;\n  background-color: ",";\n\n  ",";\n  ",";\n"]);return d=function(){return e},e}function m(){var e=Object(l.a)(["\n  opacity: ",";\n"]);return m=function(){return e},e}function f(){var e=Object(l.a)(["\n  background-color: ",";\n  opacity: 0.5;\n"]);return f=function(){return e},e}"undefined"!==typeof SwitchTrackProps&&SwitchTrackProps&&SwitchTrackProps===Object(SwitchTrackProps)&&Object.isExtensible(SwitchTrackProps)&&Object.defineProperty(SwitchTrackProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchTrackProps",filename:"src\\SwitchTrack.tsx"}});var w=Object(u.css)(f(),(function(e){return Object(p.a)({color:e.color||"primary",theme:e.theme,disabled:e.disabled})})),j=Object(u.css)(m(),(function(e){return e.checked?.5:.12})),O=u.default.span(d(),(function(e){return"light"===e.theme.palette.type?.38:.3}),(function(e){return e.theme.transitions.create(["opacity","background-color"],{duration:e.theme.transitions.duration.shortest})}),(function(e){return"light"===e.theme.palette.type?e.theme.palette.black:e.theme.palette.white}),(function(e){return e.checked&&w}),(function(e){return e.disabled&&j})),g=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchTrack",filename:"src\\SwitchTrack.tsx"}});var v=t("./node_modules/@sinoui/ripple/dist/index.js"),k=t("./node_modules/color/index.js"),x=t.n(k);function _(){var e=Object(l.a)(["\n  display: flex;\n  align-items: inherit;\n  justify-content: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ",";\n  z-index: 1;\n  transition: ",";\n  padding: 9px;\n  border-radius: 50%;\n  -webkit-tap-highlight-color: transparent;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n\n  ",";\n  ",";\n  ",";\n\n  & .sinoui-switch__input {\n    top: 0;\n    left: -100%;\n    width: 300%;\n    cursor: inherit;\n    height: 100%;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    z-index: 1;\n    position: absolute;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  & .sinoui-switch__thumb {\n    width: 20px;\n    height: 20px;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .sinoui-switch__ripple {\n    width: 38px;\n    height: 38px;\n  }\n\n  & .sinoui-switch__ripple-layout {\n    left: 0;\n    top: 0;\n    width: 38px;\n    height: 38px;\n  }\n"]);return _=function(){return e},e}function C(){var e=Object(l.a)(["\n  background-color: ",";\n"]);return C=function(){return e},e}function y(){var e=Object(l.a)(["\n  color: ",";\n\n  &:hover {\n    background-color: transparent;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(l.a)(["\n  transform: translateX(50%);\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return S=function(){return e},e}"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src\\SwitchLabel.tsx"}});var N=function(e){var n=function(e){return Object(p.a)(e,e.theme.typography.button.color)}(e);return n&&"inherit"!==n&&"currentColor"!==n?x()(n).alpha(.12).rgb().string():null};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHoverBgColor",filename:"src\\SwitchLabel.tsx"}});var P=Object(u.css)(S(),(function(e){return Object(p.a)({color:e.color||"primary",theme:e.theme,disabled:e.disabled})}),(function(e){return N({color:e.color||"primary",theme:e.theme,disabled:e.disabled})})),E=Object(u.css)(y(),(function(e){return"light"===e.theme.palette.type?"#bdbdbd":"#424242"})),D=Object(u.css)(C(),(function(e){return e.checked?N({color:e.color||"primary",theme:e.theme,disabled:e.disabled}):"rgba(0, 0, 0, 0.08)"})),T=u.default.span(_(),(function(e){return"light"===e.theme.palette.type?" #fafafa":"#bdbdbd"}),(function(e){return e.theme.transitions.create(["left","transform"],{duration:e.theme.transitions.duration.shortest})}),(function(e){return e.focused&&D}),(function(e){return e.checked&&P}),(function(e){return e.disabled&&E}));function F(e){var n=e.inputClassName,t=e.checked,c=e.disabled,r=e.color,o=e.name,l=e.value,u=e.onChange,b=e.inputProps,p=e.inputRef,d=Object(i.useState)(!1),m=Object(s.a)(d,2),f=m[0],w=m[1],j=Object(i.useCallback)((function(){return w(!0)}),[]),O=Object(i.useCallback)((function(){return w(!1)}),[]),g=Object(i.useCallback)((function(e){u&&u(e),O()}),[O,u]),k=Object(v.useRipple)({center:!0,fixSize:!0,rippleClassName:"sinoui-switch__ripple",rippleLayoutClassName:"sinoui-switch__ripple-layout",disabled:c});return a.a.createElement(T,{ref:k,checked:t,disabled:c,color:r,className:h()("sinoui-switch__label",{"sinoui-switch--focused":f}),focused:f,"data-testid":"switchLabel"},a.a.createElement("input",Object.assign({type:"checkbox",name:o,checked:t,onChange:g,disabled:c,value:l,ref:p,onFocus:j,onBlur:O},b,{className:h()("sinoui-switch__input",n)})),a.a.createElement("span",{className:"sinoui-switch__thumb"}))}function L(){var e=Object(l.a)(["\n  width: 58px;\n  height: 38px;\n  display: inline-flex;\n  padding: 12px;\n  z-index: 0;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  vertical-align: middle;\n  cursor: ",";\n  -webkit-tap-highlight-color: transparent;\n"]);return L=function(){return e},e}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchLabel",filename:"src\\SwitchLabel.tsx"}});var V=u.default.span(L(),(function(e){return e.disabled?"default":"pointer"}));function z(e){var n=e.disabled,t=e.checked,c=e.color;return a.a.createElement(V,{className:h()("sinoui-switch",{"sinoui-switch--disabled":n,"sinoui-switch--checked":t}),disabled:n},a.a.createElement(F,e),a.a.createElement(g,{className:"sinoui-switch__track",disabled:n,checked:t,color:c}))}z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src\\Switch.tsx"}});var M=z;function R(){var e=Object(i.useState)(!1),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(i.useCallback)((function(e){c(e.target.checked)}),[]);return a.a.createElement(M,{checked:t,value:"switch1",onChange:r})}z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src\\index.ts"}}),R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Demo",filename:"docs\\Demo.tsx"}});var X=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function I(){var e=Object(i.useState)({switch3:!0}),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(i.useCallback)((function(e,n){var t=e.target.checked;c((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(t,!0).forEach((function(n){Object(X.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,Object(X.a)({},n,t))}))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{checked:t.switch1,value:"switch1",onChange:function(e){return r(e,"switch1")}}),a.a.createElement(z,{checked:t.switch2,value:"switch2",onChange:function(e){return r(e,"switch2")},color:"accent"}),a.a.createElement(z,{checked:t.switch3,value:"switch3",onChange:function(e){return r(e,"switch3")},color:"success"}),a.a.createElement(z,{checked:t.switch4,value:"switch4",onChange:function(e){return r(e,"switch4")},color:"error"}),a.a.createElement(z,{checked:t.switch5,value:"switch5",onChange:function(e){return r(e,"switch5")},color:"info"}),a.a.createElement(z,{checked:t.switch6,value:"switch6",onChange:function(e){return r(e,"switch6")},color:"warning"}))}I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchDemo",filename:"docs\\SwitchDemo.tsx"}}),t.d(n,"default",(function(){return H}));var J={},A="wrapper";function H(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)(A,Object.assign({},J,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"sinouiswitch"},"@sinoui/switch"),Object(r.b)("p",null,"\u5f00\u5173\u63a7\u4ef6\uff0c\u6b64\u7ec4\u4ef6\u4e3a\u53d7\u63a7\u7ec4\u4ef6\u3002"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@sinoui/switch"}),Object(r.b)("img",{alt:"npm version",src:"https://img.shields.io/npm/v/@sinoui/switch"})),"\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@sinoui/switch"}),Object(r.b)("img",{alt:"downloads",src:"https://img.shields.io/npm/dm/@sinoui/switch"}))),Object(r.b)("h2",{id:"\u4f9d\u8d56\u5b89\u88c5"},"\u4f9d\u8d56\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @sinoui/switch\n")),Object(r.b)("h2",{id:"\u5165\u95e8\u793a\u4f8b"},"\u5165\u95e8\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import Switch from '@sinoui/switch';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  const handleChange = useCallback((event) => {\n    setChecked(event.target.checked);\n  }, []);\n\n  return <Switch checked={checked} value=\"switch1\" onChange={handleChange} />;\n}\n")),Object(r.b)(o.c,{__position:0,__code:"<Demo />",__scope:{props:this?this.props:t,Playground:o.c,Demo:R,SwitchDemo:I,Switch:z},mdxType:"Playground"},Object(r.b)(R,{mdxType:"Demo"})),Object(r.b)("h2",{id:"\u989c\u8272\u5207\u6362"},"\u989c\u8272\u5207\u6362"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Switch"),"\u7ec4\u4ef6\u989c\u8272\u89c4\u8303\u4e0d\u4ec5\u652f\u6301",Object(r.b)("inlineCode",{parentName:"p"},"Material Designer"),"\u7684",Object(r.b)("inlineCode",{parentName:"p"},"primary"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"accent"),"\uff0c\n\u53c8\u652f\u6301",Object(r.b)("inlineCode",{parentName:"p"},"Bootstrap"),"\u7684",Object(r.b)("inlineCode",{parentName:"p"},"success"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"error"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"warning"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"info"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"danger"),"\u3002\n\u4f7f\u7528\u65f6\u53ef\u76f4\u63a5\u7ed9 Switch \u7ec4\u4ef6\u6307\u5b9a\u76f8\u5e94\u7684",Object(r.b)("inlineCode",{parentName:"p"},"color"),"\u5c5e\u6027\u5373\u53ef\u3002\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684\u8272\u7cfb\u4e4b\u5916\uff0cSwitch \u7684",Object(r.b)("inlineCode",{parentName:"p"},"color"),"\u5c5e\u6027\u53ef\u4ee5\u662f\u4efb\u610f\u989c\u8272\u503c\uff0c\u7ec4\u4ef6\u5728",Object(r.b)("inlineCode",{parentName:"p"},"checked"),"\u72b6\u6001\u4e0b\u4f1a\u5e94\u7528\u6307\u5b9a\u7684\u8272\u503c\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SwitchDemo.tsx")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React, { useState, useCallback } from \'react\';\nimport Switch from \'@sinoui/switch\';\n\nexport default function SwitchDemo() {\n  const [checked, setChecked] = useState<{ [name: string]: boolean }>({\n    switch3: true,\n  });\n   const handleChange = useCallback((event, name) => {\n    const value = event.target.checked;\n    setChecked((state) => ({ ...state, [name]: value }));\n  }, []);\n  return (\n    <>\n      <Switch\n        checked={checked.switch1}\n        value="switch1"\n        onChange={(event) => handleChange(event, \'switch1\')}\n      />\n      <Switch\n        checked={checked.switch2}\n        value="switch2"\n        onChange={(event) => handleChange(event, \'switch2\')}\n        color="accent"\n      />\n      <Switch\n        checked={checked.switch3}\n        value="switch3"\n        onChange={(event) => handleChange(event, \'switch3\')}\n        color="success"\n      />\n      <Switch\n        checked={checked.switch4}\n        value="switch4"\n        onChange={(event) => handleChange(event, \'switch4\')}\n        color="error"\n      />\n      <Switch\n        checked={checked.switch5}\n        value="switch5"\n        onChange={(event) => handleChange(event, \'switch5\')}\n        color="info"\n      />\n      <Switch\n        checked={checked.switch6}\n        value="switch6"\n        onChange={(event) => handleChange(event, \'switch6\')}\n        color="warning"\n      />\n  );\n}\n')),Object(r.b)(o.c,{__position:1,__code:"<SwitchDemo />",__scope:{props:this?this.props:t,Playground:o.c,Demo:R,SwitchDemo:I,Switch:z},mdxType:"Playground"},Object(r.b)(I,{mdxType:"SwitchDemo"})),Object(r.b)("h2",{id:"\u4e0d\u53ef\u7528\u72b6\u6001"},"\u4e0d\u53ef\u7528\u72b6\u6001"),Object(r.b)(o.c,{__position:2,__code:'<Switch disabled value="switch1" />\n<Switch disabled checked value="switch2" />',__scope:{props:this?this.props:t,Playground:o.c,Demo:R,SwitchDemo:I,Switch:z},mdxType:"Playground"},Object(r.b)(z,{disabled:!0,value:"switch1",mdxType:"Switch"}),Object(r.b)(z,{disabled:!0,checked:!0,value:"switch2",mdxType:"Switch"})),Object(r.b)("h2",{id:"\u4e0esinouisinoui-components-forms-\u96c6\u6210"},"\u4e0e@sinoui/sinoui-components-forms \u96c6\u6210"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://sinoui.github.io/sinoui-forms-library/sinoui-components-forms"}),"@sinoui/sinoui-components-forms"),"\u662f\u4ee5",Object(r.b)("inlineCode",{parentName:"p"},"sinoui-components"),"\u4e3a\u57fa\u7840\u7684\u8868\u5355\u63a7\u4ef6\u5e93\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"Switch"),"\u4e0e",Object(r.b)("inlineCode",{parentName:"p"},"@sinoui/sinoui-components-forms"),"\u7684\u96c6\u6210\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(r.b)("p",null,"\u9996\u5148\u5b9a\u4e49",Object(r.b)("inlineCode",{parentName:"p"},"SwitchField"),"\u7ec4\u4ef6\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useCallback } from 'react';\nimport { useFieldValue } from '@sinoui/rx-form-state';\nimport { Field } from '@sinoui/sinoui-components-forms';\nimport Switch from '@sinoui/switch';\n\nexport default function SwitchField(props) {\n  const { name, value, unCheckedValue } = props;\n  const fieldValue = useFieldValue(name);\n\n  const valueExtract = useCallback(\n    (event) => {\n      const { checked } = event.target;\n      return checked ? value : unCheckedValue;\n    },\n    [value, unCheckedValue],\n  );\n  return (\n    <Field\n      as={Switch}\n      checked={fieldValue === value}\n      valueExtract={valueExtract}\n      defaultValue=\"\"\n      {...props}\n    />\n  );\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Form, FormItem, Label } from '@sinoui/sinoui-components-forms';\nimport SwitchField from './SwitchField';\n\nfunction Demo() {\n  return (\n    <Form>\n      <FormItem>\n        <Label>\u663e\u793a\u519c\u5386</Label>\n        <SwitchField name=\"showLunar\" />\n      </FormItem>\n    </Form>\n  );\n}\n")),Object(r.b)("h2",{id:"\u81ea\u5b9a\u4e49\u6837\u5f0f"},"\u81ea\u5b9a\u4e49\u6837\u5f0f"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Switch"),"\u7ec4\u4ef6\u7684\u6837\u5f0f\u89c4\u8303\u662f\u53c2\u7167",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://material.io/components/selection-controls/#switches"}),"material designe | Switches"),"\u5b9e\u73b0\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"DOM\u7ed3\u6784")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<span class="sinoui-switch">\n  <span class="sinoui-switch__label">\n    <input class="sinoui-switch__input" />\n    <span class="sinoui-switch__thumb" />\n  </span>\n  <span class="sinoui-switch__track" />\n</span>\n')),Object(r.b)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u6837\u5f0f\uff0c\u4e0d\u5982\u6539\u53d8\u5706\u70b9\u7684\u5c3a\u5bf8\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9a\u4e49 css \u6587\u4ef6\u6307\u5b9a\u5176\u5bf9\u5e94\u989c\u8272\uff0c\u7136\u540e\u5c06 css \u6587\u4ef6\u5f15\u5165\u5230\u4f7f\u7528 Switch \u7ec4\u4ef6\u7684\u6587\u4ef6\u4e2d\u5373\u53ef\uff1a\n",Object(r.b)("inlineCode",{parentName:"p"},"Switch.css")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".sinoui-switch__thumb {\n  height: 16px;\n  width: 16px;\n}\n")))}H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\index.mdx"}}),H.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-index.b6a0f994786ed0721812.js.map