Snap.svg Elliptic Arc Plugin
============================

A Snap.svg plugin for drawing Elliptic Arcs using polar coordinates.

Install
-------

Include `SEP.js` in your project that is using Snap.svg.

Available Functions
-------------------

`arc(centerX, centerY, radiusX, radiusY, orientation, startDegree, stopDegree)`

Usage
-----

`centerX` - x-coordinate of the ellipese center point
`centerY` - y-coordinate of the ellipse center point
`radiusX` - x-radius of the ellipse (distance from center to the horizontal edge of the desired ellipse)
`radiusX` - y-radius of the ellipse (distance from center to the vertial edge of the desired ellipse)
`orientation` - degrees to rotates the ellipse described by the above parameters
`startDegree` - degree to begin drawing the path on the above described and rotated ellipse  
`startDegree` - degree to stop drawing the path on the above described and rotated ellipse  


Example
-------

In the console:

`Snap(200,200)
  .attr({'style':'stroke:black;stroke-width:4px;fill:none'})
  .arc(100, 100, 120, 80, -40, 45, 135);`

Or select an SVG element using Snap.svg and call the `arc()` function as above