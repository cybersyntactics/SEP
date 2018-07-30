Snap.plugin(function(Snap, Element, Paper, global, Fragment) {

	Paper.prototype.arc = function(cx,cy,rx,ry,orient,start,stop) {
		return this.path(this.arc.describe(cx,cy,rx,ry,orient,start,stop));
	};

	Paper.prototype.arc.describe = function(cx,cy,rx,ry,orient,start,stop) {
		delta = stop - start;
		largeArc = 180 < Math.abs(delta) ? 1 : 0;
		sweepFlag = 0 < delta ? 0 : 1;

		start = ellipsePolarToCartesian(cx, cy, rx, ry, start);
		end = ellipsePolarToCartesian(cx, cy, rx, ry, stop);

		return "M" + start.x + "," + start.y + "A" + rx + "," + ry + "," + orient +"," + largeArc + "," + sweepFlag + "," + end.x + "," + end.y;

		function ellipsePolarToCartesian(cx, cy, rx, ry, theta) {
			theta = normalize(toRadians(theta));
			plusOrMinus = (0 <= theta && theta <= Math.PI/2 || 3/2*Math.PI < theta && theta <= 2*Math.PI)
							? 1
							: -1;
			return {
				x: cx + plusOrMinus * rx*ry / Math.sqrt(Math.pow(ry,2) + Math.pow(rx,2) * Math.pow(Math.tan(theta),2)),
				y: cy - plusOrMinus * rx*ry*Math.tan(theta) / Math.sqrt(Math.pow(ry,2) + Math.pow(rx,2) * Math.pow(Math.tan(theta),2))
			};

			function toRadians(degrees) {
				return Math.PI*degrees/180;
			}

			function normalize(angle) {
				return (angle + 4*Math.PI) % (2*Math.PI);
			}
		}
	}

});