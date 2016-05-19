

var measure=module.exports={
	calcDistance : function(dest_lat,dest_lng,source_lat,source_lng){
		       		var theta=dest_lng - source_lng;
				var dis=Math.sin(deg2rad(dest_lat))*Math.sin(deg2rad(source_lat))+Math.cos(deg2rad(dest_lat))*Math.cos(deg2rad(source_lat))*Math.cos(deg2rad(theta));
				console.log(theta);
		     	}
	//function deg2rad(deg){
	//	return (deg*Math.PI/180);
	//}
	//function rad2deg(rad){
	//	return (rad*180/Math.PI);
	//}
};
function deg2rad(deg){
	return (deg*Math.PI/180);
}
function rad2deg(rad){
	return (rad*180/Math.PI);		
}
