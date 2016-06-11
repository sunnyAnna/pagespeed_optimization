# Pagespeed Optimization Project

Pagespeed optimization of index.html and pizza.html

### INSTRUCTIONS

The project is being hosted on [this page](http://sunnyanna.github.io/frontend-nanodegree-mobile-portfolio).

To check the pagespeed, go to [Google PageSpeed Insights.](https://developers.google.com/speed/pagespeed/insights).

To check the frame-rate and time to resize pizzas, open [pizza.html](http://sunnyanna.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html) in Chrome and use dev tools.

### GOALS

1. index.html achieves a PageSpeed score of at least 90 for Mobile and Desktop.
2. pizza.html renders with a consistent frame-rate at 60fps when scrolling the page.
3. Time to resize pizzas is less than 5 ms using the pizza size slider on the pizza.html page.

### CHANGES MADE

Changes included re-sequencing and manipulation of Javascript code for increased processing efficiency, and reduction of the size and amount of resources that needed to be downloaded.

### GRUNT

Grunt plugins were used for image resizing and minimizing files (JS files have not been minimized to preserve readability), as well as for pagespeed check on a local server.

Instructions for adding _node_modules_ and running Grunt for this project:

Download the plugins:
- `_npm install load-grunt-tasks --save-dev_` (required to run the plugins)
- `_brew install ImageMagick_` (required for grunt-responsive-images)
- `_npm install grunt-responsive-images --save-dev_`
- `_npm install grunt-cssnano --save-dev_`
- `_npm install grunt-minify-html --save-dev_`
- `_npm install grunt-contrib-uglify --save-dev_`
- `_npm install grunt-pagespeed --save-dev_`

Run the plugins:
- Resize/compress the images: `_grunt responsive_images_`
- Compress html file: `_grunt minifyHtml_`
- Compress css file: `_grunt cssnano_`
- Compress Javascript file: `_grunt uglify_`
- Check pagespeed of the html file: `_grunt pagespeed_`
