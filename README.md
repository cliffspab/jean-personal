# Jean

🔎 Your personal custom search engine

## Why?

[Custom search engines](https://support.google.com/chrome/answer/95426) are great, but there isn't a good way to share them between browsers. With Jean, you can have one source of truth for your search engines that can be used in any browser – even on mobile web!

## Get Started

1. [Fork this repository](https://github.com/seanmcp/jean/fork)
2. Add your custom search engines to [`engines.js`](engines.js) in CSV format
3. [Configure the repo to deploy to GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
4. Visit your Jean site and search to your heart's content!
5. (Optional) Create a custom search engine that points to Jean
   - Search engine: Jean
   - Shortcut: `j`
   - URL: `<your-jean-site>/?q=%s`
   - Then use it with "j wk search engine"

## For extra privacy

If you do not want to share your search engines with the world, you can use Jean locally:

1. Clone your fork of this repository
2. Bookmark the absolute path to `index.html` on your local machine
3. Visit your local Jean site and search to your heart's content!
4. (Optional) Chrome and Firefox let you use local files for custom search engines, so you can use the steps above to create a shortcut

## License

[MIT](LICENSE)
