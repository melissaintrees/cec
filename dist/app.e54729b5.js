parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uDkg":[function(require,module,exports) {

},{}],"mGBe":[function(require,module,exports) {
"use strict";require("../css/style.css"),$(document).ready(function(){function e(e){!function(e){var t={lat:e[0].location.coordinates[0],lng:e[0].location.coordinates[1]};console.log(t);var a=new google.maps.Map(document.getElementById("map"),{zoom:15,center:t});new google.maps.Marker({position:t,map:a})}(e);var t=0,a=0;console.log(e);for(var n=0;n<e.length;n++){var s=e[n].results;if(s.includes("Pass")){t++;var o=$("<tr>"),l=$("<td>"),i=$("<td>"),r=$("<td>"),c=$("<td>");l.text(moment(e[n].inspection_date).format("MM-DD-YYYY")),i.text(e[n].results),r.text(e[n].inspection_type),"Pass"===e[n].results?c.text("Two Clean Thumbs Up!"):c.text("One Clean Thumb Up!");var d=$("#passTableBody");o.append(l,i,r,c),d.append(o),$("#rName").text(e[n].aka_name)}else if(s.includes("Fail")){a++,console.log(a);var m=$("<tr>"),p=$("#failTableBody");l=$("<td>"),i=$("<td>"),r=$("<td>"),c=$('<td class="tst">');l.text(moment(e[n].inspection_date).format("MM-DD-YYYY")),i.text(e[n].results),r.text(e[n].inspection_type),c.text(e[n].violations),m.append(l,i,r,c),p.append(m)}else console.log("There has been an error with this restaurant")}$("#totalPass").text(t),$("#totalFail").text(a),$(".resultsDiv").show()}$(".modal").modal(),$("#modal2").modal("open"),$(".parallax").parallax(),$(".resultsDiv").hide(),$("#submitBtn").on("click",function(){var t=$("#rest-search-input").val().trim();t,function(t){""==t?Materialize.toast("Please enter a Restaurant Name!",4e3):($("#passTableBody").empty(),$("#failTableBody").empty(),$("#rest-search-input").val(""),function(t){var a=moment().format("YYYY-MM-DDThh:mm:ss"),n='?$where=inspection_date between "2016-01-01T12:00:00" and "'+a+'" and starts_with(dba_name, upper("'+t+'"))';console.log(n);var s="https://data.cityofchicago.org/resource/cwig-ma7x.json"+n;$.getJSON(s,function(t){!function(t){if(0==t.length)Materialize.toast("No Restaurants by that name were found in that area!",4e3);else{for(var a=[],n=[],s=0;s<t.length;s++)a.includes(t[s].license_)||(a.push(t[s].license_),n.push({license:t[s].license_,address:t[s].address,name:t[s].dba_name,latitude:t[s].latitude,longitude:t[s].longitude,zip:t[s].zip}));1==a.length?e(t):a.length>1&&($("#multipleLocationsModal").html(""),function(t,a){for(var n=$("#multipleLocationsModal"),s=0;s<t.length;s++){var o=$("<a>");o.text(t[s].address),o.addClass("collection-item collection-item2 multipleResults"),o.attr("data-license",t[s].license),n.append(o),$("#modal1").modal("open")}$(".multipleResults").on("click",function(){for(var t=$(this).attr("data-license"),n=[],s=0;s<a.length;s++)t==a[s].license_&&n.push(a[s]);$("#modal1").modal("close"),e(n)})}(n,t))}}(t)})}(t))}(t)})});
},{"../css/style.css":"uDkg"}]},{},["mGBe"], null)
//# sourceMappingURL=/app.e54729b5.js.map