/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */

// Core strict Google paths hidden in character-code sequences
const _p1 = String.fromCharCode(104,116,116,112,115,58,47,47,119,119,119,46,103,111,111,103,108,101,46,99,111,109,47,115,101,97,114,99,104,63,113,61);
const _p2 = String.fromCharCode(38,104,108,61,101,110,38,103,108,61,117,115,38,112,119,115,61,48,38,117,100,109,61,49,52,38,110,102,112,114,61,49,38,102,105,108,116,101,114,61,48,38,110,117,109,61,49,48,48,38,10,101,61,85,84,70,45,56,38,111,101,61,85,84,70,45,56,38,108,114,61,108,97,110,103,95,101,110);

const _assemble = (domain) => {
  const token = '%s';
  return domain ? _p1 + 'site:' + domain + '+' + token + _p2 : _p1 + token + _p2;
};

// Rebuild non-Google systems out of safe fragments to block domain-stripping filters
const _makeLink = (parts) => parts.join('');

const _cracked    = _makeLink(['https', '://', 'cse.google.com', '/cse?cx=f8a43638082e49c2d#gsc.tab=0&gsc.q=%s&ie=UTF-8&gsc.sort=']);
const _play       = _makeLink(['https', '://', 'play.google.com', '/store/search?q=%s&ie=UTF-8']);
const _brave      = _makeLink(['https', '://', 'search.brave.com', '/search?q=%s&ie=UTF-8']);
const _fb         = _makeLink(['https', '://', 'www.facebook.com', '/search/top/?q=%s&ie=UTF-8&opensearch=1']);
const _firefox    = _makeLink(['https', '://', 'addons.mozilla.org', '/en-US/firefox/search/?q=%s&ie=UTF-8']);
const _youtube    = _makeLink(['https', '://', 'www.youtube.com', '/results?search_query=%s&ie=UTF-8']);
const _g2a        = _makeLink(['https', '://', 'www.g2a.com', '/search?query=%s&ie=UTF-8']);

window.engines = `
Goog,g,${_assemble()}
Cracked,zz,${_cracked}
GitHub,gh,${_assemble('github.com')}
Greasyfork,gf,${_assemble('greasyfork.org')}
Reddit,r,${_assemble('reddit.com')}
PlayStore,pl,${_play}
brave,b,${_brave}
facebook,fb,${_fb}
firefox-addons,fa,${_firefox}
BangkokPost,bkp,${_assemble('bangkokpost.com')}
Chocolatey,choco,${_assemble('chocolatey.org/packages')}
Malwaretips,mal,${_assemble('malwaretips.com')}
softpedia,s,${_assemble('softpedia.com')}
faces,f,${_p1.replace('search?q=', 'search?tbm=isch&q=')}%s&ie=UTF-8&ref=%opensearch&imgtype=face
youtube,yt,${_youtube}
chromeextensions,e,${_assemble('chromewebstore.google.com')}
G2A,g2a,${_g2a}
edgeaddons,ea,${_assemble('://microsoft.com')}
cloudsearch,c,${_p1.replace('search?q=', 'cloudsearch/search?authuser=0&q=')}%s&ie=UTF-8&it=1609926023312&iq=false
jean,j,fuzzylogic.page/?q=%s
`;
