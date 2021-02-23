![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# GO-CAM visualization Web Component

This web component allows to visualize GO-CAM from any website and create entity/activity views to highlight the flow of causal relationships.

## Usage

NPM package: https://www.npmjs.com/package/@geneontology/wc-gocam-viz

In any HTML page:
````
<html>


  <head>
    <script type="module" src="https://unpkg.com/@geneontology/wc-light-modal/dist/wc-light-modal/wc-light-modal.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/@geneontology/wc-light-modal/dist/wc-light-modal/wc-light-modal.js"></script>      
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  </head>
  

  <body>

    <!-- ACTUAL INTEGRATION OF THE GOCAM-VIZ COMPONENT -->
    <wc-gocam-viz 
      id="gocam-1"
      gocam-id="568b0f9600000284"
      show-go-cam-selector=true
      show-has-input=false
      show-has-output=false
      show-gene-product=true
      show-activity=false
      style="position: fixed; top: 50%; left: 10%; transform: translate(0%, -50%);"
    ></wc-gocam-viz>

    <!-- OPTIONAL: SPECIAL HANDLING OF EVENTS -->
    <script>

        /**
         * General Key listener, here to recenter the graph visualization
         */
        document.addEventListener('keydown', (key) => {
          key.preventDefault();
          if(key.code == 'Space') {
            let viz = document.getElementById("gocam-1");
            if(viz) { viz.resetView(); }
          }
        })

        /**
         * Listen to a mouse over event on an activity node
         */
        document.addEventListener('nodeOver', function hideMenu(e, v) {
          let payload = e.detail;
        });

        /**
         * Listen to a mouse out event from an activity node
         */
        document.addEventListener('nodeOut', function hideMenu(e, v) {
        });
        
    </script>


  </body>
</html>


````

This will render a GO-CAM model highlighting the flow of regulations between genes/activities

![GO-CAM example](Example.png)