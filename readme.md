![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# A rating component built with Stencil
##Introduction
This is a basic rating web-component.  It allows for a max rating to be set as well as user input (if required).  If the user does select a rating then an event is fired, which can be handled in pure JS or by a framework of your choice. The component is fully customisable using a SVG polygon and can accept half-step ratings.

![Rating](https://raw.githubusercontent.com/alasdairmackenzie/am-rating/master/resources/4.5-out-of-10.png)

## Install

### Script tag

- Put the script tag `<script src='https://unpkg.com/am-rating@0.0.6/dist/am-rating.js'></script>` on your page
- Then you can use the element anywhere in your template or html.

### Node Modules
- Run `npm install am-rating --save`
- Put the script tag `<script src='node_modules/am-rating/dist/am-rating.js'></script>` on your page
- Then you can use the element anywhere in your template or html.

##How to use
To include the component on your page use the `<am-rating/>` tag.  To set values for the display, you can add the following properties.

**Properties for `<am-rating>`**

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
    <th>Default</th>
    <th>Type</th>
    <th>Possible values</th>
  </tr>
  <tr>
    <td>rating</td>
    <td>The rating to display</td>
    <td>0</td>
	<td>number</td>
	<td>0-max-rating</td>
  </tr>
  <tr>
    <td>max-rating</td>
    <td>The number of rating items to display</td>
    <td>0</td>
	<td>number</td>
	<td>number</td>
  </tr>
  <tr>
    <td>color-on</td>
    <td>The color of the off rating</td>
    <td>#000000</td>
    <td>string</td>
    <td>hex value or color name</td>
  </tr>
  <tr>
    <td>color-outline</td>
    <td>The color of the rating items outline</td>
    <td>#ffffff</td>
    <td>string</td>
    <td>hex value or color name (can be none)</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>The fill direction for the rating items</td>
    <td>#666666</td>
    <td>string</td>
    <td>ltr (left to right) or ttb (top to bottom)</td>
  </tr>
  <tr>
    <td>interactive**</td>
    <td>Allow the user to submit a rating</td>
    <td>false</td>
    <td>boolean</td>
    <td>true|false</td>
  </tr>
  <tr>
    <td>allow-half-ratings</td>
    <td>Allow the user to submit half ratings</td>
    <td>false</td>
    <td>boolean</td>
    <td>true|false</td>
  </tr>
   <tr>
    <td>svg-points</td>
    <td>Change the default shape</td>
    <td>A star shape***</td>
    <td>string</td>
    <td>Any string</td>
  </tr>
  <tr>
    <td>svg-view-box</td>
    <td>Change the default view box for the SVG</td>
    <td>0 0 100 100</td>
    <td>string</td>
    <td>Any valid view box configuration</td>
  </tr>
</table>

**If you set interactive to true, the user will be able to tap on the element and assign a new rating.  This will fire an event with the new rating.

***The item shape is an SVG polygon contained within a "0 0 100 100" viewbox. Use the svg-view-box property to change this.

**Events fired by `<am-rating>`**

<table>
  <tr>
    <th>Event</th>
    <th>Description</th>
    <th>Type</th>
    <th>Values</th>
  </tr>
  <tr>
    <td>ratingUpdated </td>
    <td>The new rating of the widget</td>
    <td>Object</td>
    <td>{ "detail" : { "reference" : &lt;string&gt, "rating" : &ltnumber&gt; } }</td>
  </tr>
 </table>

**Example:**

```html
<am-rating
  reference="rating-widget-1"
  rating="1.5"
  min-rating="0"
  max-rating="10"
  color-on="green"
  color-off="blue"
  color-outline="#666"
  direction="ltr"
  allow-half-ratings="true"
  interactive="true"
/>
```

```javascript
<script>
  window.addEventListener('ratingUpdated', (event) => {
    const reference = event.detail.reference;
    const rating = event.detail.rating;
  });
</script>

```

##Contribute
If you want to contribute then create a fork, make your changes and create a pull request.

**Quick Start**

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need any more help? Check out the Stencil docs [here](https://stenciljs.com/docs/my-first-component).
