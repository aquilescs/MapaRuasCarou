var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEORuasMestradoCarou170723copiar_2 = new ol.format.GeoJSON();
var features_GEORuasMestradoCarou170723copiar_2 = format_GEORuasMestradoCarou170723copiar_2.readFeatures(json_GEORuasMestradoCarou170723copiar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEORuasMestradoCarou170723copiar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEORuasMestradoCarou170723copiar_2.addFeatures(features_GEORuasMestradoCarou170723copiar_2);
var lyr_GEORuasMestradoCarou170723copiar_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_GEORuasMestradoCarou170723copiar_2, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '[GEO]RuasMestradoCarou - 17.07.23  copiar'
            });
var format_GEORuasMestradoCarou170723_3 = new ol.format.GeoJSON();
var features_GEORuasMestradoCarou170723_3 = format_GEORuasMestradoCarou170723_3.readFeatures(json_GEORuasMestradoCarou170723_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEORuasMestradoCarou170723_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEORuasMestradoCarou170723_3.addFeatures(features_GEORuasMestradoCarou170723_3);
var lyr_GEORuasMestradoCarou170723_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEORuasMestradoCarou170723_3, 
                style: style_GEORuasMestradoCarou170723_3,
                interactive: true,
    title: '[GEO]RuasMestradoCarou - 17.07.23<br />\
    <img src="styles/legend/GEORuasMestradoCarou170723_3_0.png" /> casos de polícia<br />\
    <img src="styles/legend/GEORuasMestradoCarou170723_3_1.png" /> escravizados vendidos ou buscados<br />\
    <img src="styles/legend/GEORuasMestradoCarou170723_3_2.png" /> estabelecimentos - botequim<br />\
    <img src="styles/legend/GEORuasMestradoCarou170723_3_3.png" /> <br />'
        });

lyr_ESRIGraydark_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GEORuasMestradoCarou170723copiar_2.setVisible(true);lyr_GEORuasMestradoCarou170723_3.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_OSMStandard_1,lyr_GEORuasMestradoCarou170723copiar_2,lyr_GEORuasMestradoCarou170723_3];
lyr_GEORuasMestradoCarou170723_3.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'DÉCADA': 'DÉCADA', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_GEORuasMestradoCarou170723_3.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'DÉCADA': 'Hidden', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'TextEdit', 'CATEGORIA.II': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'Hidden', 'Latitude_2': 'Hidden', 'Longitude_2': 'Hidden', });
lyr_GEORuasMestradoCarou170723_3.set('fieldLabels', {'RUA.ATUAL': 'inline label', 'INTERVALO': 'inline label', 'OCORRÊNCIA': 'inline label', 'CATEGORIA.I': 'inline label', 'CATEGORIA.II': 'inline label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', });
lyr_GEORuasMestradoCarou170723_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});