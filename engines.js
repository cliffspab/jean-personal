/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */
window.engines = `
Goog,g,https://google.com/search?hl=en&safe=off&num=50&pws=0&q=%s&oq=test&sourceid=chrome&{google:prefetchSource}ie={inputEncoding}
Cracked,zz,https://cse.google.com/cse?cx=f8a43638082e49c2d#gsc.tab=0&gsc.q=%s&ie=UTF-8&gsc.sort=
GitHub,gh,https://google.com/search?hl=en&safe=off&num=50&pws=0&q=site:github.com+%s&ie=UTF-8
Greasyfork,gf,https://google.com/search?hl=en&safe=off&num=50&pws=0&q=site:greasyfork.org+%s&ie=UTF-8
Reddit,r,https://google.com/search?hl=en&safe=off&num=50&pws=0&q=site:reddit.com+%s&ie=UTF-8
PlayStore,pl,https://play.google.com/store/search?q=%s&ie=UTF-8
brave,b,https://search.brave.com/search?q=%s&ie=UTF-8
facebook,fb,https://www.facebook.com/search/top/?q=%s&ie=UTF-8&opensearch=1
firefox-addons,fa,https://addons.mozilla.org/en-US/firefox/search/?q=%s&ie=UTF-8
BangkokPost,bkp,https://www.google.com/search?hl=en&safe=off&num=50&pws=0&q=site:bangkokpost.com+%s&ie=UTF-8
Chocolatey,choco,https://www.google.com/search?hl=en&safe=off&num=50&pws=0&q=site:chocolatey.org/packages+%s&ie=UTF-8
Malwaretips,mal,https://www.google.com/search?hl=en&safe=off&num=50&pws=0&q=site:malwaretips.com+%s&ie=UTF-8
softpedia,s,https://www.google.com/search?hl=en&safe=off&num=50&pws=0&q=site:softpedia.com+%s&ie=UTF-8
faces,f,https://www.google.com/search?tbm=isch&q=%s&ie=UTF-8&ref=%opensearch&imgtype=face
youtube,yt,https://www.youtube.com/results?search_query=%s&ie=UTF-8
chromeextensions,e,https://www.google.com/search?gl=us&hl=en&safe=off&num=50&pws=0&q=site:chromewebstore.google.com+%s&ie=UTF-8
G2A,g2a,https://www.g2a.com/search?query=%s&ie=UTF-8
edgeaddons,ea,https://www.google.com/search?hl=en&safe=off&num=50&pws=0&q=site:microsoftedge.microsoft.com/addons/search+%s&ie=UTF-8
cloudsearch,c,https://cloudsearch.google.com/cloudsearch/search?authuser=0&q=%s&ie=UTF-8&it=1609926023312&iq=false
jean,j,fuzzylogic.page/?q=%s
`;
