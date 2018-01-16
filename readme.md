![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# A rating component built with Stencil
##Introduction
This is a basic rating web-component.

##Install

###Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/am-rating@0.0.1/dist/am-rating.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

###Node Modules
- Run `npm install am-rating --save`
- Put a script tag similar to this `<script src='node_modules/am-rating/dist/am-rating.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


##How to use
To include the component on your page use the `<am-rating/>` tag.  To set values for the display, you can assign the following attributes.

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
    <th>Default</th>
    <th>Type</th>
    <th>Values</th>
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
    <td>The color of the on rating</td>
    <td>#000000</td>
    <td>string</td>
    <td>hex value or color name</td>
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
    <td>#000000</td>
    <td>string</td>
    <td>hex value or color name (can be none)</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>The fill direction for the rating items</td>
    <td>#000000</td>
    <td>string</td>
    <td>ltr (left to right) or ttb (top to bottom)</td>
  </tr>
</table>


**Example:**

```html
 <am-rating
  rating="3.5"
  max-rating="5"
  color-on="#333"
  color-off="#eee"
  color-outline="#666"
  direction="ltr"
/>
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
