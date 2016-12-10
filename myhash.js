/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
d)).finalize(c)}}});var t=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();
//crypto-js
























// md5
function safeAdd(r,d){var n=(65535&r)+(65535&d),t=(r>>16)+(d>>16)+(n>>16);return t<<16|65535&n}function bitRotateLeft(r,d){return r<<d|r>>>32-d}function md5cmn(r,d,n,t,m,f){return safeAdd(bitRotateLeft(safeAdd(safeAdd(d,r),safeAdd(t,f)),m),n)}function md5ff(r,d,n,t,m,f,i){return md5cmn(d&n|~d&t,r,d,m,f,i)}function md5gg(r,d,n,t,m,f,i){return md5cmn(d&t|n&~t,r,d,m,f,i)}function md5hh(r,d,n,t,m,f,i){return md5cmn(d^n^t,r,d,m,f,i)}function md5ii(r,d,n,t,m,f,i){return md5cmn(n^(d|~t),r,d,m,f,i)}function binlMD5(r,d){r[d>>5]|=128<<d%32,r[(d+64>>>9<<4)+14]=d;var n,t,m,f,i,e=1732584193,h=-271733879,g=-1732584194,u=271733878;for(n=0;n<r.length;n+=16)t=e,m=h,f=g,i=u,e=md5ff(e,h,g,u,r[n],7,-680876936),u=md5ff(u,e,h,g,r[n+1],12,-389564586),g=md5ff(g,u,e,h,r[n+2],17,606105819),h=md5ff(h,g,u,e,r[n+3],22,-1044525330),e=md5ff(e,h,g,u,r[n+4],7,-176418897),u=md5ff(u,e,h,g,r[n+5],12,1200080426),g=md5ff(g,u,e,h,r[n+6],17,-1473231341),h=md5ff(h,g,u,e,r[n+7],22,-45705983),e=md5ff(e,h,g,u,r[n+8],7,1770035416),u=md5ff(u,e,h,g,r[n+9],12,-1958414417),g=md5ff(g,u,e,h,r[n+10],17,-42063),h=md5ff(h,g,u,e,r[n+11],22,-1990404162),e=md5ff(e,h,g,u,r[n+12],7,1804603682),u=md5ff(u,e,h,g,r[n+13],12,-40341101),g=md5ff(g,u,e,h,r[n+14],17,-1502002290),h=md5ff(h,g,u,e,r[n+15],22,1236535329),e=md5gg(e,h,g,u,r[n+1],5,-165796510),u=md5gg(u,e,h,g,r[n+6],9,-1069501632),g=md5gg(g,u,e,h,r[n+11],14,643717713),h=md5gg(h,g,u,e,r[n],20,-373897302),e=md5gg(e,h,g,u,r[n+5],5,-701558691),u=md5gg(u,e,h,g,r[n+10],9,38016083),g=md5gg(g,u,e,h,r[n+15],14,-660478335),h=md5gg(h,g,u,e,r[n+4],20,-405537848),e=md5gg(e,h,g,u,r[n+9],5,568446438),u=md5gg(u,e,h,g,r[n+14],9,-1019803690),g=md5gg(g,u,e,h,r[n+3],14,-187363961),h=md5gg(h,g,u,e,r[n+8],20,1163531501),e=md5gg(e,h,g,u,r[n+13],5,-1444681467),u=md5gg(u,e,h,g,r[n+2],9,-51403784),g=md5gg(g,u,e,h,r[n+7],14,1735328473),h=md5gg(h,g,u,e,r[n+12],20,-1926607734),e=md5hh(e,h,g,u,r[n+5],4,-378558),u=md5hh(u,e,h,g,r[n+8],11,-2022574463),g=md5hh(g,u,e,h,r[n+11],16,1839030562),h=md5hh(h,g,u,e,r[n+14],23,-35309556),e=md5hh(e,h,g,u,r[n+1],4,-1530992060),u=md5hh(u,e,h,g,r[n+4],11,1272893353),g=md5hh(g,u,e,h,r[n+7],16,-155497632),h=md5hh(h,g,u,e,r[n+10],23,-1094730640),e=md5hh(e,h,g,u,r[n+13],4,681279174),u=md5hh(u,e,h,g,r[n],11,-358537222),g=md5hh(g,u,e,h,r[n+3],16,-722521979),h=md5hh(h,g,u,e,r[n+6],23,76029189),e=md5hh(e,h,g,u,r[n+9],4,-640364487),u=md5hh(u,e,h,g,r[n+12],11,-421815835),g=md5hh(g,u,e,h,r[n+15],16,530742520),h=md5hh(h,g,u,e,r[n+2],23,-995338651),e=md5ii(e,h,g,u,r[n],6,-198630844),u=md5ii(u,e,h,g,r[n+7],10,1126891415),g=md5ii(g,u,e,h,r[n+14],15,-1416354905),h=md5ii(h,g,u,e,r[n+5],21,-57434055),e=md5ii(e,h,g,u,r[n+12],6,1700485571),u=md5ii(u,e,h,g,r[n+3],10,-1894986606),g=md5ii(g,u,e,h,r[n+10],15,-1051523),h=md5ii(h,g,u,e,r[n+1],21,-2054922799),e=md5ii(e,h,g,u,r[n+8],6,1873313359),u=md5ii(u,e,h,g,r[n+15],10,-30611744),g=md5ii(g,u,e,h,r[n+6],15,-1560198380),h=md5ii(h,g,u,e,r[n+13],21,1309151649),e=md5ii(e,h,g,u,r[n+4],6,-145523070),u=md5ii(u,e,h,g,r[n+11],10,-1120210379),g=md5ii(g,u,e,h,r[n+2],15,718787259),h=md5ii(h,g,u,e,r[n+9],21,-343485551),e=safeAdd(e,t),h=safeAdd(h,m),g=safeAdd(g,f),u=safeAdd(u,i);return[e,h,g,u]}function binl2rstr(r){var d,n="",t=32*r.length;for(d=0;t>d;d+=8)n+=String.fromCharCode(r[d>>5]>>>d%32&255);return n}function rstr2binl(r){var d,n=[];for(n[(r.length>>2)-1]=void 0,d=0;d<n.length;d+=1)n[d]=0;var t=8*r.length;for(d=0;t>d;d+=8)n[d>>5]|=(255&r.charCodeAt(d/8))<<d%32;return n}function rstrMD5(r){return binl2rstr(binlMD5(rstr2binl(r),8*r.length))}function rstrHMACMD5(r,d){var n,t,m=rstr2binl(r),f=[],i=[];for(f[15]=i[15]=void 0,m.length>16&&(m=binlMD5(m,8*r.length)),n=0;16>n;n+=1)f[n]=909522486^m[n],i[n]=1549556828^m[n];return t=binlMD5(f.concat(rstr2binl(d)),512+8*d.length),binl2rstr(binlMD5(i.concat(t),640))}function rstr2hex(r){var d,n,t="0123456789abcdef",m="";for(n=0;n<r.length;n+=1)d=r.charCodeAt(n),m+=t.charAt(d>>>4&15)+t.charAt(15&d);return m}function str2rstrUTF8(r){return unescape(encodeURIComponent(r))}function rawMD5(r){return rstrMD5(str2rstrUTF8(r))}function hexMD5(r){return rstr2hex(rawMD5(r))}function rawHMACMD5(r,d){return rstrHMACMD5(str2rstrUTF8(r),str2rstrUTF8(d))}function hexHMACMD5(r,d){return rstr2hex(rawHMACMD5(r,d))}function md5(r,d,n){return d?n?rawHMACMD5(d,r):hexHMACMD5(d,r):n?rawMD5(r):hexMD5(r)}
// md5

//ksort
function ksort (inputArr, sortFlags) {
  //  discuss at: http://locutus.io/php/ksort/
  // original by: GeekFG (http://geekfg.blogspot.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //      note 1: This function deviates from PHP in returning a copy of the array instead
  //      note 1: of acting by reference and returning true; this was necessary because
  //      note 1: IE does not allow deleting and re-adding of properties without caching
  //      note 1: of property position; you can set the ini of "locutus.sortByReference" to true to
  //      note 1: get the PHP behavior, but use this only if you are in an environment
  //      note 1: such as Firefox extensions where for-in iteration order is fixed and true
  //      note 1: property deletion is supported. Note that we intend to implement the PHP
  //      note 1: behavior by default if IE ever does allow it; only gives shallow copy since
  //      note 1: is by reference in PHP anyways
  //      note 1: Since JS objects' keys are always strings, and (the
  //      note 1: default) SORT_REGULAR flag distinguishes by key type,
  //      note 1: if the content is a numeric string, we treat the
  //      note 1: "original type" as numeric.
  //   example 1: var $data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
  //   example 1: ksort($data)
  //   example 1: var $result = $data
  //   returns 1: {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
  //   example 2: ini_set('locutus.sortByReference', true)
  //   example 2: var $data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'}
  //   example 2: ksort($data)
  //   example 2: var $result = $data
  //   returns 2: {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}

  //var i18nlgd = require('../i18n/i18n_loc_get_default')
  //var strnatcmp = require('../strings/strnatcmp')

  var tmpArr = {}
  var keys = []
  var sorter
  var i
  var k
  var sortByReference = false
  var populateArr = {}

  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}
  $locutus.php.locales = $locutus.php.locales || {}

  switch (sortFlags) {
    case 'SORT_STRING':
      // compare items as strings
      sorter = function (a, b) {
        return strnatcmp(b, a)
      }
      break
    case 'SORT_LOCALE_STRING':
      // compare items as strings, based on the current locale
      // (set with i18n_loc_set_default() as of PHP6)
      var loc = i18nlgd()
      sorter = $locutus.locales[loc].sorting
      break
    case 'SORT_NUMERIC':
      // compare items numerically
      sorter = function (a, b) {
        return ((a + 0) - (b + 0))
      }
      break
    default:
      // case 'SORT_REGULAR': // compare items normally (don't change types)
      sorter = function (a, b) {
        var aFloat = parseFloat(a)
        var bFloat = parseFloat(b)
        var aNumeric = aFloat + '' === a
        var bNumeric = bFloat + '' === b
        if (aNumeric && bNumeric) {
          return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0
        } else if (aNumeric && !bNumeric) {
          return 1
        } else if (!aNumeric && bNumeric) {
          return -1
        }
        return a > b ? 1 : a < b ? -1 : 0
      }
      break
  }

  // Make a list of key names
  for (k in inputArr) {
    if (inputArr.hasOwnProperty(k)) {
      keys.push(k)
    }
  }
  keys.sort(sorter)

  //var iniVal = (typeof require !== 'undefined' ? require('../info/ini_get')('locutus.sortByReference') : undefined) || 'on'
  sortByReference = false;//iniVal === 'on'
  populateArr = sortByReference ? inputArr : populateArr

  // Rebuild array with sorted key names
  for (i = 0; i < keys.length; i++) {
    k = keys[i]
    tmpArr[k] = inputArr[k]
    if (sortByReference) {
      delete inputArr[k]
    }
  }
  for (i in tmpArr) {
    if (tmpArr.hasOwnProperty(i)) {
      populateArr[i] = tmpArr[i]
    }
  }

  return sortByReference || populateArr
}
//ksort


/////////////////// my functions

function array_implode($glue, $separator, $array)
{
    if (!Array.isArray($array)) {
        return $array;
    }
    $string = Array();

    for (var $key in $array){
        if (target.hasOwnProperty($key)) {
            $val = $array[$key];
            if (Array.isArray($val)) {
                $val = $val.join(',');
                //$val = implode(',', $val);
            }
            $string.push(""+$key+$glue+$val);
            // print $string."\n\n";
            // $string[] = "{$key}{$glue}{$val}";
            // print $string."\n\n";
        }
    }
    return $string.join($separator);
    //return implode($separator, $string);

    // foreach ($array as $key => $val) {
    //     if (is_array($val)) {
    //         $val = implode(',', $val);
    //     }
    //     $string[] = "{$key}{$glue}{$val}";
    // }


}


function epoc()
{
  var epoc_seconds = Math.floor(((new Date).getTime())/1000);
  return epoc_seconds;
}

function dry_implode($p)
{
    $s = ''
    $implode = '';
    for (k in $p) // key
    {
        v = $p[k]; // val
        $implode += $s + k + '=' + v; // append the url way
        $s='&'; // always set the separator (dumb)
    }
    return $implode;
}

function build_auth_query_string($auth_key, $auth_secret, $request_method, $request_path, $query_params)
{
    
    $auth_version = '1.0';
    $params = {};
    $params['auth_key'] = $auth_key;
    $params['auth_timestamp'] = epoc();
    $params['auth_version'] = $auth_version;
    $params['body_md5'] = $query_params['body_md5'];

    $implode = dry_implode($params);

    // console.log('fn implode'+dry_implode($params));
    // console.log('implode'+$implode);

    // console.log(JSON.stringify($params));
    // console.log(JSON.stringify($query_params));
    // $params = $params.concat($query_params)
    // $params = array_merge($params, $query_params);
    //$params = ksort($params);
    // ksort($params);

//    $implode = "auth_key=" + $params['auth_key'] + '&' + $params['auth_timestamp'] + '&' + $params['auth_version'] + '&' + $params['body_md5'];

    $string_to_sign = $request_method+"\n"+$request_path+"\n"+$implode;

    // console.log('string_to_sign'+$string_to_sign+'\n\n');
    // console.log('signing:'+tob64($string_to_sign));

    //$auth_signature = hash_hmac('sha256', $string_to_sign, $auth_secret, false);
    // $auth_signature = myhmac($string_to_sign, $auth_secret);
    $auth_signature = "" + CryptoJS.HmacSHA256($string_to_sign, $auth_secret);

    $params['auth_signature'] = $auth_signature;
    
    $params2 = {};
    $params2['auth_key'] = $params['auth_key'];
    $params2['auth_signature'] = $params['auth_signature'];
    $params2['auth_timestamp'] = $params['auth_timestamp'];
    $params2['auth_version'] = $params['auth_version'];
    $params2['body_md5'] = $params['body_md5'];

    // console.log(JSON.stringify($params2));

    $auth_query_string = dry_implode($params2);

    return $auth_query_string;
}

function ddn_domain()
{
    return "https://api.pusherapp.com:443";
}


function create_url($domain, $s_url, $request_method, $query_params)
{
    $full_url = '';

    // Create the signed signature...
    $signed_query = build_auth_query_string(
        settings['auth_key'],
        settings['secret'],
        $request_method,
        $s_url,
        $query_params);

    $full_url = $domain+$s_url+'?'+$signed_query;

    return $full_url;
}




function trigger($channels, $event, $data)
{
    $socket_id = null;
    $debug = false;
    $already_encoded = false;


    if (typeof $channels == 'string') {
        //$this->log('->trigger received string channel "'.$channels.'". Converting to array.');
        $channels = Array($channels);
    }

    $query_params = Array();

    $s_url = settings['base_path']+'/events';

    $data_encoded = $already_encoded ? $data : JSON.stringify($data);

    // json_encode might return false on failure
    if (!$data_encoded) {
        console.log('Failed to perform json_encode on the the provided data: '+$data);
    }

    // $post_params = Array();
    // $post_params['name'] = $event;
    // $post_params['data'] = $data_encoded;
    // $post_params['channels'] = $channels;

    // if ($socket_id !== null) {
    //     $post_params['socket_id'] = $socket_id;
    // }

    // $post_value = JSON.stringify($post_params);
// print $post_value."\n\n\n";

    $query_params['body_md5'] = md5($data_encoded);

    //console.log("got md5 of: " + $query_params['body_md5']);

    $final_url = create_url(ddn_domain(), $s_url, 'POST', $query_params);


    var callback = function (error, response, body) {
      //   console.log(response);
      // if (!error && response.statusCode == 200) {
      //   console.log(body.id) // Print the shortened url.
      // }
    };

    var request = require('request');
    request(
    {
        url: $final_url,
        method: "POST",
        // json: true,
        headers: {
            "content-type": "application/json",
        },
        body: $data_encoded
    },
    callback);






    // console.log('chch');
    // console.log('');
    // console.log($ch);

    // $this->log('trigger POST: '.$post_value);

    // curl_setopt($ch, CURLOPT_POSTFIELDS, $post_value);

    // $response = $this->exec_curl($ch);

    // if ($response['status'] === 200 && $debug === false) {
    //     return true;
    // } elseif ($debug === true || $this->settings['debug'] === true) {
    //     return $response;
    // } else {
    //     return false;
    // }
}

function b64todata(b64)
{
    var body = new Buffer(b64, 'base64').toString('ascii');
    return body;
}

function tob64(data)
{
    var b64 = new Buffer(data).toString('base64')
    return b64;
}


//////////////


////// AUTH //////
$auth_key = "";
$secret = "";
$app_id = "";
////// AUTH //////

settings = {};

settings['auth_key'] = $auth_key;
settings['secret'] = $secret;
settings['app_id'] = $app_id;
settings['base_path'] = '/apps/'+settings['app_id'];


// Options for Pusher module itself
$options = {};
$options['encrypted'] = true;


// actual custom data
var payload = {"bell":0};

// Final go
var $data = {name:'my-event', data:JSON.stringify(payload), channels:['my-channel']};



trigger('my-channel', 'my-event', $data);

 
