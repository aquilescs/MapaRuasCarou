var wms_layers = [];


        var lyr_StamenTonerHybrid_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-hybrid/{z}/{x}/{y}.png'
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
var lyr_RasterSP1930_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://raster.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "SaraBrasil_1930",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Raster [SP 1930]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RasterSP1930_2, 0]);
var format_Ocorrenciassaleatorizar_3 = new ol.format.GeoJSON();
var features_Ocorrenciassaleatorizar_3 = format_Ocorrenciassaleatorizar_3.readFeatures(json_Ocorrenciassaleatorizar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocorrenciassaleatorizar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrenciassaleatorizar_3.addFeatures(features_Ocorrenciassaleatorizar_3);
var lyr_Ocorrenciassaleatorizar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocorrenciassaleatorizar_3, 
                style: style_Ocorrenciassaleatorizar_3,
                interactive: true,
    title: 'Ocorrencias [s/ aleatorizar]<br />\
    <img src="styles/legend/Ocorrenciassaleatorizar_3_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Ocorrenciassaleatorizar_3_1.png" /> Pontos localizados<br />'
        });
var format_Ocorrenciasaleatorizadas_4 = new ol.format.GeoJSON();
var features_Ocorrenciasaleatorizadas_4 = format_Ocorrenciasaleatorizadas_4.readFeatures(json_Ocorrenciasaleatorizadas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocorrenciasaleatorizadas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrenciasaleatorizadas_4.addFeatures(features_Ocorrenciasaleatorizadas_4);
var lyr_Ocorrenciasaleatorizadas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocorrenciasaleatorizadas_4, 
                style: style_Ocorrenciasaleatorizadas_4,
                interactive: true,
    title: 'Ocorrencias [aleatorizadas]<br />\
    <img src="styles/legend/Ocorrenciasaleatorizadas_4_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Ocorrenciasaleatorizadas_4_1.png" /> Pontos localizados<br />'
        });
var format_Casosdepolcia_5 = new ol.format.GeoJSON();
var features_Casosdepolcia_5 = format_Casosdepolcia_5.readFeatures(json_Casosdepolcia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casosdepolcia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casosdepolcia_5.addFeatures(features_Casosdepolcia_5);
var lyr_Casosdepolcia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casosdepolcia_5,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Casosdepolcia_5,
                interactive: true,
    title: 'Casos de polícia<br />\
    <img src="styles/legend/Casosdepolcia_5_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Casosdepolcia_5_1.png" /> Pontos localizados<br />'
        });
var format_CompraseVendeseEmpregados_6 = new ol.format.GeoJSON();
var features_CompraseVendeseEmpregados_6 = format_CompraseVendeseEmpregados_6.readFeatures(json_CompraseVendeseEmpregados_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompraseVendeseEmpregados_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompraseVendeseEmpregados_6.addFeatures(features_CompraseVendeseEmpregados_6);
var lyr_CompraseVendeseEmpregados_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompraseVendeseEmpregados_6,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_CompraseVendeseEmpregados_6,
                interactive: true,
                title: '<img src="styles/legend/CompraseVendeseEmpregados_6.png" /> Compra-se/Vende-se/Empregados'
            });
var format_Profissionaisliberais_7 = new ol.format.GeoJSON();
var features_Profissionaisliberais_7 = format_Profissionaisliberais_7.readFeatures(json_Profissionaisliberais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profissionaisliberais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profissionaisliberais_7.addFeatures(features_Profissionaisliberais_7);
var lyr_Profissionaisliberais_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Profissionaisliberais_7,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Profissionaisliberais_7,
                interactive: true,
                title: '<img src="styles/legend/Profissionaisliberais_7.png" /> Profissionais liberais'
            });
var format_Escolas_8 = new ol.format.GeoJSON();
var features_Escolas_8 = format_Escolas_8.readFeatures(json_Escolas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolas_8.addFeatures(features_Escolas_8);
var lyr_Escolas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolas_8,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Escolas_8,
                interactive: true,
                title: '<img src="styles/legend/Escolas_8.png" /> Escolas'
            });
var format_InstituiesPblicas_9 = new ol.format.GeoJSON();
var features_InstituiesPblicas_9 = format_InstituiesPblicas_9.readFeatures(json_InstituiesPblicas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstituiesPblicas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstituiesPblicas_9.addFeatures(features_InstituiesPblicas_9);
var lyr_InstituiesPblicas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InstituiesPblicas_9,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_InstituiesPblicas_9,
                interactive: true,
                title: '<img src="styles/legend/InstituiesPblicas_9.png" /> Instituições Públicas'
            });
var format_Fbricas_10 = new ol.format.GeoJSON();
var features_Fbricas_10 = format_Fbricas_10.readFeatures(json_Fbricas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fbricas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fbricas_10.addFeatures(features_Fbricas_10);
var lyr_Fbricas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fbricas_10,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Fbricas_10,
                interactive: true,
                title: '<img src="styles/legend/Fbricas_10.png" /> Fábricas'
            });
var format_Acidentesereuniesdetrabalho_11 = new ol.format.GeoJSON();
var features_Acidentesereuniesdetrabalho_11 = format_Acidentesereuniesdetrabalho_11.readFeatures(json_Acidentesereuniesdetrabalho_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentesereuniesdetrabalho_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesereuniesdetrabalho_11.addFeatures(features_Acidentesereuniesdetrabalho_11);
var lyr_Acidentesereuniesdetrabalho_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidentesereuniesdetrabalho_11,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Acidentesereuniesdetrabalho_11,
                interactive: true,
    title: 'Acidentes e reuniões de trabalho<br />\
    <img src="styles/legend/Acidentesereuniesdetrabalho_11_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Acidentesereuniesdetrabalho_11_1.png" /> Pontos localizados<br />'
        });
var format_Meretrcios_12 = new ol.format.GeoJSON();
var features_Meretrcios_12 = format_Meretrcios_12.readFeatures(json_Meretrcios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meretrcios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meretrcios_12.addFeatures(features_Meretrcios_12);
var lyr_Meretrcios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meretrcios_12,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Meretrcios_12,
                interactive: true,
                title: '<img src="styles/legend/Meretrcios_12.png" /> Meretrícios'
            });
var format_Armazens_13 = new ol.format.GeoJSON();
var features_Armazens_13 = format_Armazens_13.readFeatures(json_Armazens_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Armazens_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazens_13.addFeatures(features_Armazens_13);
var lyr_Armazens_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Armazens_13,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Armazens_13,
                interactive: true,
    title: 'Armazens<br />\
    <img src="styles/legend/Armazens_13_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Armazens_13_1.png" /> Pontos localizados<br />'
        });
var format_Botequins_14 = new ol.format.GeoJSON();
var features_Botequins_14 = format_Botequins_14.readFeatures(json_Botequins_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Botequins_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Botequins_14.addFeatures(features_Botequins_14);
var lyr_Botequins_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Botequins_14,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Botequins_14,
                interactive: true,
    title: 'Botequins<br />\
    <img src="styles/legend/Botequins_14_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Botequins_14_1.png" /> Pontos localizados<br />'
        });
var format_Escravizados_15 = new ol.format.GeoJSON();
var features_Escravizados_15 = format_Escravizados_15.readFeatures(json_Escravizados_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escravizados_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escravizados_15.addFeatures(features_Escravizados_15);
var lyr_Escravizados_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escravizados_15,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Escravizados_15,
                interactive: true,
                title: '<img src="styles/legend/Escravizados_15.png" /> Escravizados'
            });
var format_Mapadecalorsaleatorizar_16 = new ol.format.GeoJSON();
var features_Mapadecalorsaleatorizar_16 = format_Mapadecalorsaleatorizar_16.readFeatures(json_Mapadecalorsaleatorizar_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadecalorsaleatorizar_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadecalorsaleatorizar_16.addFeatures(features_Mapadecalorsaleatorizar_16);
var lyr_Mapadecalorsaleatorizar_16 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Mapadecalorsaleatorizar_16, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa de calor [s/ aleatorizar]'
            });
var format_Mapadecaloraleatorizado_17 = new ol.format.GeoJSON();
var features_Mapadecaloraleatorizado_17 = format_Mapadecaloraleatorizado_17.readFeatures(json_Mapadecaloraleatorizado_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadecaloraleatorizado_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadecaloraleatorizado_17.addFeatures(features_Mapadecaloraleatorizado_17);
var lyr_Mapadecaloraleatorizado_17 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Mapadecaloraleatorizado_17, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa de calor [aleatorizado]'
            });

lyr_StamenTonerHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_RasterSP1930_2.setVisible(true);lyr_Ocorrenciassaleatorizar_3.setVisible(false);lyr_Ocorrenciasaleatorizadas_4.setVisible(true);lyr_Casosdepolcia_5.setVisible(true);lyr_CompraseVendeseEmpregados_6.setVisible(true);lyr_Profissionaisliberais_7.setVisible(true);lyr_Escolas_8.setVisible(true);lyr_InstituiesPblicas_9.setVisible(true);lyr_Fbricas_10.setVisible(true);lyr_Acidentesereuniesdetrabalho_11.setVisible(true);lyr_Meretrcios_12.setVisible(true);lyr_Armazens_13.setVisible(true);lyr_Botequins_14.setVisible(true);lyr_Escravizados_15.setVisible(true);lyr_Mapadecalorsaleatorizar_16.setVisible(false);lyr_Mapadecaloraleatorizado_17.setVisible(true);
var layersList = [lyr_StamenTonerHybrid_0,lyr_OSMStandard_1,lyr_RasterSP1930_2,lyr_Ocorrenciassaleatorizar_3,lyr_Ocorrenciasaleatorizadas_4,lyr_Casosdepolcia_5,lyr_CompraseVendeseEmpregados_6,lyr_Profissionaisliberais_7,lyr_Escolas_8,lyr_InstituiesPblicas_9,lyr_Fbricas_10,lyr_Acidentesereuniesdetrabalho_11,lyr_Meretrcios_12,lyr_Armazens_13,lyr_Botequins_14,lyr_Escravizados_15,lyr_Mapadecalorsaleatorizar_16,lyr_Mapadecaloraleatorizado_17];
lyr_Ocorrenciassaleatorizar_3.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', });
lyr_Ocorrenciasaleatorizadas_4.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Casosdepolcia_5.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_CompraseVendeseEmpregados_6.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Profissionaisliberais_7.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Escolas_8.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_InstituiesPblicas_9.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Fbricas_10.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Acidentesereuniesdetrabalho_11.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Meretrcios_12.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Armazens_13.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Botequins_14.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Escravizados_15.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Ocorrenciassaleatorizar_3.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'TextEdit', 'PontoOriginal': 'Hidden', });
lyr_Ocorrenciasaleatorizadas_4.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'Hidden', 'PontoOriginal': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_2': 'Hidden', });
lyr_Casosdepolcia_5.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_CompraseVendeseEmpregados_6.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Profissionaisliberais_7.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Escolas_8.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_InstituiesPblicas_9.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Fbricas_10.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Acidentesereuniesdetrabalho_11.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Meretrcios_12.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Armazens_13.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Botequins_14.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Escravizados_15.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Ocorrenciassaleatorizar_3.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'EnderecoGerado': 'no label', });
lyr_Ocorrenciasaleatorizadas_4.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'CATEGORIA': 'no label', });
lyr_Casosdepolcia_5.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_CompraseVendeseEmpregados_6.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Profissionaisliberais_7.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escolas_8.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_InstituiesPblicas_9.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Fbricas_10.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_Acidentesereuniesdetrabalho_11.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Meretrcios_12.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Armazens_13.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Botequins_14.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escravizados_15.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escravizados_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});