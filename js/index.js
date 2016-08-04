"use strict";!function(){var t={columns:["name","price","amount","total"],getType:function(t){return Object.prototype.toString.call(t).toLowerCase().replace(/\[|\]|object|\s/g,"")},getRealVal:function(t){for(var e=t.split(";"),n=0,o=null,i=0,r=e.length;i<r;i++)o=parseFloat(e[i]),isNaN(o)&&(o=0),n+=o;return n},addRows:function(t){for(var e=0;e<t;e++)this.contenterGrid.addRow(1,{name:"",price:0,amount:"0;0;0",total:0},null,!0)},initBtnEvent:function(){var t=this;document.getElementById("clear").onclick=function(){window.confirm("该操作，会导致本页面数据丢失！确定进行清空？")&&(localStorage.clear(),location.reload())},document.getElementById("add").onclick=function(){t.addRows(1),document.body.scrollTop=document.body.scrollHeight},document.getElementById("review").onclick=function(){for(var e=JSON.parse(JSON.stringify(t.contenterGrid.data)),n=null,o=0,i=e.length-1;i>=0;i--)if(n=e[i],n.columns[0]){o+=parseFloat(n.columns[3]),n.values={};for(var r=0;r<t.columns.length;r++)n.values[t.columns[r]]=n.columns[r]}else e.splice(i,1);e.push({id:-1,values:{name:"总计",price:"",amount:"",total:o}}),localStorage.setItem("grid_data",JSON.stringify(e)),window.open("review.html")}},initScroll:function(){var t=this,e=function(){document.body.scrollTop+window.innerHeight+100>document.body.scrollHeight&&t.addRows(10),i()},n=null,o=null,i=function(){n=setTimeout(e,500)};window.onscroll=function(){clearTimeout(o),o=setTimeout(function(){clearTimeout(n),n=null},3e3),n||i()}},init:function(){var t=this;this.contenter=document.getElementById("gridContent"),EditableGrid.prototype.modelChanged=function(e,n,o,i,r){var a=this.getColumnName(n),l=this.getValueAt(e,n),d=null;"price"==a&&(d=this.getValueAt(e,this.getColumnIndex("amount")),l=parseFloat(l),d=t.getRealVal(d)),"amount"==a&&(d=this.getValueAt(e,this.getColumnIndex("price")),l=t.getRealVal(l),d=parseFloat(d)),null!=d&&"number"==t.getType(d)&&this.setValueAt(e,this.getColumnIndex("total"),d*l)},this.initGridHeader(),this.initGridContener(),this.initBtnEvent()},createAmountValidator:function(){return function(t){return!/[^\d;]/.test(t)}},initGridHeader:function(){var t=this.headerGrid=new EditableGrid("gridHeader");t.load(gridHeaderData),t.renderGrid("gridHeader","grid")},initGridContener:function(){var t=this.contenterGrid=new EditableGrid("gridContenter");t.load(gridContenterData),t.renderGrid("gridContenter","grid"),t.addCellValidator("amount",{isValid:this.createAmountValidator()})}};return localStorage&&localStorage.setItem||!window.confirm("你当前的浏览器版本太旧，为了正常使用本页面上面的功能，前往下载新版本浏览器？")?void(window.onload=function(){t.init()}):void window.open("https://www.baidu.com/link?url=sQQ6307l78EBFEQIRpIwI75rbIDo1a1vraCuTC-NQ3Zh2EClIAQ48aeGWaIcOVhD-hU4D3zh5LbldJjgarCxGijMMVVviKyz9-uT45zRoMK&amp;wd=&amp;eqid=eaa8b4250004784b0000000657a07bb6")}();