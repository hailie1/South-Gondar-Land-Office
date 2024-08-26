ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20137").setExtent([328914.723505, 1298043.638885, 337991.388034, 1302966.015645]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_StructuralplanofQoratakebele_1 = new ol.format.GeoJSON();
var features_StructuralplanofQoratakebele_1 = format_StructuralplanofQoratakebele_1.readFeatures(json_StructuralplanofQoratakebele_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_StructuralplanofQoratakebele_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StructuralplanofQoratakebele_1.addFeatures(features_StructuralplanofQoratakebele_1);
var lyr_StructuralplanofQoratakebele_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StructuralplanofQoratakebele_1, 
                style: style_StructuralplanofQoratakebele_1,
                popuplayertitle: "Structural plan of Qorata kebele",
                interactive: true,
                title: '<img src="styles/legend/StructuralplanofQoratakebele_1.png" /> Structural plan of Qorata kebele'
            });
var format_Planboundary_2 = new ol.format.GeoJSON();
var features_Planboundary_2 = format_Planboundary_2.readFeatures(json_Planboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Planboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planboundary_2.addFeatures(features_Planboundary_2);
var lyr_Planboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planboundary_2, 
                style: style_Planboundary_2,
                popuplayertitle: "Plan boundary",
                interactive: true,
                title: '<img src="styles/legend/Planboundary_2.png" /> Plan boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_StructuralplanofQoratakebele_1.setVisible(true);lyr_Planboundary_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StructuralplanofQoratakebele_1,lyr_Planboundary_2];
lyr_StructuralplanofQoratakebele_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Land_use_t': 'Land_use_t', 'Area_Ha': 'Area_Ha', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Block_ID': 'Block_ID', 'Region': 'Region', 'Zone_': 'Zone_', 'Woreda': 'Woreda', 'Kebele': 'Kebele', 'Y_Coordina': 'Y_Coordina', 'X_Coordina': 'X_Coordina', });
lyr_Planboundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area_Ha': 'Area_Ha', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_StructuralplanofQoratakebele_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Land_use_t': 'TextEdit', 'Area_Ha': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Block_ID': 'TextEdit', 'Region': 'TextEdit', 'Zone_': 'TextEdit', 'Woreda': 'TextEdit', 'Kebele': 'TextEdit', 'Y_Coordina': 'TextEdit', 'X_Coordina': 'TextEdit', });
lyr_Planboundary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Area_Ha': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_StructuralplanofQoratakebele_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Land_use_t': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Block_ID': 'hidden field', 'Region': 'inline label - always visible', 'Zone_': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Kebele': 'inline label - always visible', 'Y_Coordina': 'hidden field', 'X_Coordina': 'inline label - always visible', });
lyr_Planboundary_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Area_Ha': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'inline label - always visible', });
lyr_Planboundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});