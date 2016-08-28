# Pagespeed Optimization Project

Pagespeed optimization of index.html and pizza.html

### INSTRUCTIONS

The project is being hosted on [this page](http://sunnyanna.github.io/pagespeed_optimization/).

To check the pagespeed, go to [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights).

To check the frame-rate and time to resize pizzas, open [pizza.html](http://sunnyanna.github.io/pagespeed_optimization/dist/views/pizza.html) in Chrome and use dev tools.

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
- `npm install load-grunt-tasks --save-dev` (required to run the plugins)
- `brew install ImageMagick` (required for grunt-responsive-images)
- `npm install grunt-responsive-images --save-dev`
- `npm install grunt-cssnano --save-dev`
- `npm install grunt-minify-html --save-dev`
- `npm install grunt-contrib-uglify --save-dev`
- `npm install grunt-pagespeed --save-dev`

Run the plugins:
- Resize/compress the images: `grunt responsive_images`
- Compress html file: `grunt minifyHtml`
- Compress css file: `grunt cssnano`
- Compress Javascript file: `grunt uglify`
- Check pagespeed of the html file: `grunt pagespeed`
