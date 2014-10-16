define(
[],
function() {
  var config = {
    mapServices:{
       vector: "http://gis.wirapids.org/arcgis/rest/services/VectorBasemapHybrid/MapServer",
       dynamic: "http://gis.wirapids.org/arcgis/rest/services/DynamicBasemap/MapServer",
       aerial: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/"
    },     
    helperServices: {
       geometry:"http://gis.wirapids.org/arcgis/rest/services/Utilities/Geometry/GeometryServer",
       print: "http://gis.wirapids.org/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map"
    },
	utilityLayerID:[-1],
	parcelLayerID: [27],
	csvUrl: "http://gis.wirapids.org/CityViewer/outputs/parcelInfo.csv",
	mailLink: "https://gis.wirapids.org/CityViewer/outputs/",
	identifyLayerAdditional:[]
	
};
  
  // could use a has() test to optionally populate some global
  // property so that the stuff defined is in some global identifier
  //
  // instead, just populate a global, will need to remove the next line when
  // when we remove support for loading modules with dojo.require
  // which will be when we move to Dojo 2.0
  commonConfig = config;
  // instead of using a global, this should probably be added to some namespace...
  // do the templates have a common namespace that they use?

  return config;  
});
