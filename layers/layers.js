var wms_layers = [];


        var lyr_StamenToner_0 = new ol.layer.Tile({
            'title': 'Stamen Toner',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
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

        var lyr_GooglecnNormal_2 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_MapaCalor_3 = new ol.format.GeoJSON();
var features_MapaCalor_3 = format_MapaCalor_3.readFeatures(json_MapaCalor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaCalor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaCalor_3.addFeatures(features_MapaCalor_3);
var lyr_MapaCalor_3 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_MapaCalor_3, 
                radius: 8 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa Calor'
            });
var format_Ocorrencias_4 = new ol.format.GeoJSON();
var features_Ocorrencias_4 = format_Ocorrencias_4.readFeatures(json_Ocorrencias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocorrencias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrencias_4.addFeatures(features_Ocorrencias_4);
var lyr_Ocorrencias_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocorrencias_4, 
                style: style_Ocorrencias_4,
                interactive: true,
    title: 'Ocorrencias<br />\
    <img src="styles/legend/Ocorrencias_4_0.png" /> casos de polícia<br />\
    <img src="styles/legend/Ocorrencias_4_1.png" /> escravizados vendidos ou buscados<br />\
    <img src="styles/legend/Ocorrencias_4_2.png" /> estabelecimentos - botequim<br />\
    <img src="styles/legend/Ocorrencias_4_3.png" /> <br />'
        });

lyr_StamenToner_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GooglecnNormal_2.setVisible(true);lyr_MapaCalor_3.setVisible(true);lyr_Ocorrencias_4.setVisible(true);
var layersList = [lyr_StamenToner_0,lyr_OSMStandard_1,lyr_GooglecnNormal_2,lyr_MapaCalor_3,lyr_Ocorrencias_4];
lyr_Ocorrencias_4.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'DÉCADA': 'DÉCADA', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Ocorrencias_4.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'DÉCADA': 'Hidden', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'TextEdit', 'CATEGORIA.II': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'Hidden', 'Latitude_2': 'Hidden', 'Longitude_2': 'Hidden', });
lyr_Ocorrencias_4.set('fieldLabels', {'RUA.ATUAL': 'inline label', 'INTERVALO': 'inline label', 'OCORRÊNCIA': 'inline label', 'CATEGORIA.I': 'inline label', 'CATEGORIA.II': 'inline label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', });
lyr_Ocorrencias_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});