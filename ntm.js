var isLocal = location.hostname.includes('local');
var isDev = location.hostname.includes('dev');
var isTest = location.hostname.includes('test');
var isStage = location.hostname.includes('stg');
var isReal = !isLocal && !isDev && !isTest && !isStage;

var src = isReal
  ? 'https://ntm.pstatic.net/scripts/ntm_c73883600174.js'
  : isStage
  ? 'https://ntm.pstatic.net/scripts/ntm_c73883600174_stage.js'
  : 'https://ntm-cdn.navercorp.com/scripts/ntm_c73883600174_dev.js';

(function (t, n) {
  n = n || 'ntm';
  (window['ntm_' + t] = n),
    (window[n] = window[n] || []),
    window[n].push({ 'ntm.start': +new Date() });
  (t = document.getElementsByTagName('script')[0]),
    (n = document.createElement('script'));
  (n.async = !0), (n.src = src), t.parentNode.insertBefore(n, t);
})('c73883600174', 'ntm');
