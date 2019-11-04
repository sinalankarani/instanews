# Instanews App

## A one-page, responsive website that allows a user to filter top news story categories via the New York Times API.

---

- ## HTML

- Most of the html is contained in the body, including header and logo, as well as a select form, which will retrieve the latest news of various cagegories from the New York Times API.

- Custom drop-down menu: A custom select box is used with a selectric preset along with some custom css.

- Assigned id and class for the select elements. 

- Pre-loader : Shows a loader while the articles are loading.

---

- ## CSS / Sass

- style.scss is the main file, which imports everything else.

- _main.scss : Various styles for the site, which include different kinds of displays, hover states, text-decoration, etc.

- _reset.scss : (Eric Meyer reset) A reset stylesheet to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

- _variables.scss : Reusable variables throughout the stylesheet such as margins, font-size, and other css values.

- _fonts.scss : Imported fonts.

- CSS - Font Awesome : A popular icon collection.

- The website is made using the Mobile First strategy to create a mobile friendly website, and then created media queries at minimum width of 600px (tablet) and 1000px (desktop) to ensure the responsiveness of the website on different devices.

---

- ## JavaScript

- In JavaScript, I'm using the jQuery library to extract the current news articles from the NYT API.

- There are also functions in place that limit the number of articles at 12, as well as prohibit articles with no picture from being posted.

- A few additional jQuery lines are added in the always function at the bottom which help the functionality of the loader gif.

---
- ## Gulp & other Gulp relevant dependencies

I am using Gulp to compile SASS, and to concatenate and minify the Stylesheets and JS.

Examples: 

- gulpfile.js is used to gererate the concatenated and minified CSS and Javascript files.

- Main stylesheet file(/sass/style.scss) is optimized with gulp-autoprefixer and gulp-cssnano.

- gulp-autoprefixer : It takes the CSS file and rewrite properties with adding prefixes for every last 2 versions of browsers.

- gulp-cssnano : It creates the smallest possible CSS.