var trktit = encodeURIComponent(document.title).substring(0, 200);
trktit = trktit.replace(/\%u00a0/g, '');
trktit = trktit.replace(/\%u2122/g, '');
trktit = trktit.replace(/\%u[0-9][0-9][0-9][0-9]/g, '');
var trklng = window.navigator.userLanguage || window.navigator.language;
var trkguid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
   var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
   return v.toString(16);
});
var link = 'http://rng-snp-003.com/Track/Capture.aspx?trk_user=36708&trk_sw=' + encodeURIComponent(screen.width).substring(0, 6) + '&trk_sh=' + encodeURIComponent(screen.height).substring(0, 6) + '&trk_ref=' + encodeURIComponent(document.referrer).substring(0, 1100) + '&trk_tit=' + trktit + '&trk_loc=' + encodeURIComponent(document.location).substring(0, 1000) + '&trk_agn=' + encodeURIComponent(navigator.appName).substring(0, 100) + '&trk_agv=' + encodeURIComponent(navigator.userAgent + '.lfcd' + screen.colorDepth + '.lflng' + trklng).substring(0, 1000) + '&trk_dom=' + encodeURIComponent(document.domain).substring(0, 200) + '&trk_guid=' + trkguid + '&trk_cookie=NA';
var preload = new Image();
preload.src = link;
