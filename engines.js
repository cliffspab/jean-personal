/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */
window.engines = `
Goog,g,https://www.google.com/search?q=%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
Cracked,zz,https://cse.google.com/cse?cx=f8a43638082e49c2d#gsc.tab=0&gsc.q=%s&ie=UTF-8&gsc.sort=
GitHub,gh,https://www.google.com/search?q=site:github.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
Greasyfork,gf,https://www.google.com/search?q=site:greasyfork.org+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
Reddit,r,https://www.google.com/search?q=site:reddit.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
PlayStore,pl,https://play.google.com/store/search?q=%s&ie=UTF-8
brave,b,https://search.brave.com/search?q=%s&source=web
facebook,fb,https://www.facebook.com/search/top/?q=%s&ie=UTF-8&opensearch=1
firefox-addons,fa,https://addons.mozilla.org/en-US/firefox/search/?q=%s&ie=UTF-8
BangkokPost,bkp,https://www.google.com/search?q=site:bangkokpost.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
Chocolatey,choco,https://www.google.com/search?q=site:chocolatey.org/packages+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
Malwaretips,mal,https://www.google.com/search?q=site:malwaretips.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
softpedia,s,https://www.google.com/search?q=site:softpedia.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
faces,f,https://www.google.com/search?tbm=isch&q=%s&hl=en&gl=us&ie=UTF-8&ref=%opensearch&imgtype=face&lr=lang_en
youtube,yt,https://www.youtube.com/results?search_query=%s&hl=en&gl=us
chromeextensions,e,https://www.google.com/search?q=site:chromewebstore.google.com+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
G2A,g2a,https://www.g2a.com/search?query=%s&ie=UTF-8
edgeaddons,ea,https://www.google.com/search?q=site:microsoftedge.microsoft.com/addons/search+%s&hl=en&gl=us&pws=0&udm=14&nfpr=1&filter=0&num=100&ie=UTF-8&oe=UTF-8&lr=lang_en
cloudsearch,c,https://cloudsearch.google.com/cloudsearch/search?authuser=0&q=%s&ie=UTF-8&it=1609926023312&iq=false
jean,j,fuzzylogic.page/?q=%s
`;
