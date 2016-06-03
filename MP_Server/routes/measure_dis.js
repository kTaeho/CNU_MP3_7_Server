

var measure=module.exports={
	calcDistance : function(dest_lat,dest_lng,source_lat,source_lng){
		       		var theta;	
			        if(dest_lng>source_lng) theta=dest_lng - source_lng;
				else theta=source_lng-dest_lng;
				var dis=Math.sin(deg2rad(dest_lat))*Math.sin(deg2rad(source_lat))+Math.cos(deg2rad(dest_lat))*Math.cos(deg2rad(source_lat))*Math.cos(deg2rad(theta));
				console.log(Math.PI);
				dis=Math.acos(dis);
				dis=rad2deg(dis);
				dis=dis*60*1.1515;
				dis=dis*1.609344;
				var result=Number(dis*1000).toFixed(2);
				console.log(result);
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
