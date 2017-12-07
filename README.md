# Travel Site

> A website project from the Udemy course - [Git a Web Developer Job: Mastering the Modern Workflow by Brad Schiff](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/)

## Live Demo

 To see the website in action, go to [https://lucasweng.github.io/travel-site/](https://lucasweng.github.io/travel-site/)

 or

 To run that demo on your own computer, please follow the instructions in [Getting Started](https://github.com/lucasweng/travel-site#getting-started)


## Features

* Mobile-first performance:

  * Lazy loading images and icon sprites for faster page load time

  * Responsive images for resolution switching to save bandwidth

* Responsive web design:

  * Responsive images for different cropping situations

* Support for legacy browsers:

  * Use picturefill as a responsive image polyfill

  * Test browser support for SVGs and flexbox with gulp-modernizr

  * Convert SVGs to PNGs with gulp-svg2png

* Reveal page contents on scroll

* Smooth page scroll to an anchor on the same page

## Getting Started

### Clone or download this repository

```sh
git clone https://github.com/lucasweng/travel-site.git
```

### Install dependencies

```sh
npm install
```

### Start the website

```sh
gulp watch
```
It will open a new tab in your browser and run the website. Should it not open, visit [http://localhost:3000](http://localhost:3000)

### See the website locally with other devices

The previous command will run Browsersync, and you will find the following in the terminal:

```sh
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.10:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.10:3001
 -------------------------------------
[Browsersync] Serving files from: app
```

You can view the website in synchronised action across all your devices with the External URL.

## Built with

### Front-end

* [jquery](https://api.jquery.com/)
* [jquery-smooth-scroll](https://github.com/kswedberg/jquery-smooth-scroll#smooth-scroll-plugin)
* [waypoints](http://imakewebthings.com/waypoints/)
* [lazysizes](https://github.com/aFarkas/lazysizes#lazysizes)
* [picturefill](https://github.com/scottjehl/picturefill#picturefill)
* [normalize.css](http://nicolasgallagher.com/about-normalize-css/)
* [gulp](https://gulpjs.com/)
* [gulp-modernizr](https://github.com/doctyper/gulp-modernizr#gulp-modernizr)
* [gulp-svg2png](https://github.com/akoenig/gulp-svg2png#gulp-svg2png-)
* [postcss](http://postcss.org/)
* [babel](http://babeljs.io/)
* [webpack](https://webpack.js.org/concepts/)


### Testing

* [browsersync](https://www.browsersync.io/)

## License

#### [MIT](./LICENSE)