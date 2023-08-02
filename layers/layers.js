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
var lyr_SoPaulo1880Pauliceia_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1880",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1880 [Pauliceia]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1880Pauliceia_2, 0]);
var lyr_SoPaulo1890Pauliceia_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1890",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1890 [Pauliceia]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1890Pauliceia_3, 0]);
var lyr_SoPaulo1905Pauliceia_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1905",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1905 [Pauliceia]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1905Pauliceia_4, 0]);
var lyr_SoPaulo1924Pauliceia_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1924",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1924 [Pauliceia]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1924Pauliceia_5, 0]);
var lyr_SoPaulo1930Pauliceia_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1930_1_5000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1930 [Pauliceia]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1930Pauliceia_6, 0]);
var lyr_SoPaulo1930GeoSampa_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://raster.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "SaraBrasil_1930",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1930 [GeoSampa]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1930GeoSampa_7, 0]);
var format_OcorrenciasGeradas_8 = new ol.format.GeoJSON();
var features_OcorrenciasGeradas_8 = format_OcorrenciasGeradas_8.readFeatures(json_OcorrenciasGeradas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcorrenciasGeradas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrenciasGeradas_8.addFeatures(features_OcorrenciasGeradas_8);
var lyr_OcorrenciasGeradas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcorrenciasGeradas_8, 
                style: style_OcorrenciasGeradas_8,
                interactive: true,
    title: 'Ocorrencias [Geradas]<br />\
    <img src="styles/legend/OcorrenciasGeradas_8_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/OcorrenciasGeradas_8_1.png" /> Pontos localizados<br />'
        });
var format_OcorrenciasRedistribuidas_9 = new ol.format.GeoJSON();
var features_OcorrenciasRedistribuidas_9 = format_OcorrenciasRedistribuidas_9.readFeatures(json_OcorrenciasRedistribuidas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcorrenciasRedistribuidas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrenciasRedistribuidas_9.addFeatures(features_OcorrenciasRedistribuidas_9);
var lyr_OcorrenciasRedistribuidas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcorrenciasRedistribuidas_9, 
                style: style_OcorrenciasRedistribuidas_9,
                interactive: true,
    title: 'Ocorrencias [Redistribuidas]<br />\
    <img src="styles/legend/OcorrenciasRedistribuidas_9_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/OcorrenciasRedistribuidas_9_1.png" /> Pontos localizados<br />'
        });
var format_Casosdepolcia_10 = new ol.format.GeoJSON();
var features_Casosdepolcia_10 = format_Casosdepolcia_10.readFeatures(json_Casosdepolcia_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casosdepolcia_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casosdepolcia_10.addFeatures(features_Casosdepolcia_10);
var lyr_Casosdepolcia_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casosdepolcia_10,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Casosdepolcia_10,
                interactive: true,
    title: 'Casos de polícia<br />\
    <img src="styles/legend/Casosdepolcia_10_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Casosdepolcia_10_1.png" /> Pontos localizados<br />'
        });
var format_CompraseVendeseEmpregados_11 = new ol.format.GeoJSON();
var features_CompraseVendeseEmpregados_11 = format_CompraseVendeseEmpregados_11.readFeatures(json_CompraseVendeseEmpregados_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompraseVendeseEmpregados_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompraseVendeseEmpregados_11.addFeatures(features_CompraseVendeseEmpregados_11);
var lyr_CompraseVendeseEmpregados_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompraseVendeseEmpregados_11,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_CompraseVendeseEmpregados_11,
                interactive: true,
                title: '<img src="styles/legend/CompraseVendeseEmpregados_11.png" /> Compra-se/Vende-se/Empregados'
            });
var format_Profissionaisliberais_12 = new ol.format.GeoJSON();
var features_Profissionaisliberais_12 = format_Profissionaisliberais_12.readFeatures(json_Profissionaisliberais_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profissionaisliberais_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profissionaisliberais_12.addFeatures(features_Profissionaisliberais_12);
var lyr_Profissionaisliberais_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Profissionaisliberais_12,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Profissionaisliberais_12,
                interactive: true,
                title: '<img src="styles/legend/Profissionaisliberais_12.png" /> Profissionais liberais'
            });
var format_Escolas_13 = new ol.format.GeoJSON();
var features_Escolas_13 = format_Escolas_13.readFeatures(json_Escolas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolas_13.addFeatures(features_Escolas_13);
var lyr_Escolas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolas_13,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Escolas_13,
                interactive: true,
                title: '<img src="styles/legend/Escolas_13.png" /> Escolas'
            });
var format_InstituiesPblicas_14 = new ol.format.GeoJSON();
var features_InstituiesPblicas_14 = format_InstituiesPblicas_14.readFeatures(json_InstituiesPblicas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstituiesPblicas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstituiesPblicas_14.addFeatures(features_InstituiesPblicas_14);
var lyr_InstituiesPblicas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InstituiesPblicas_14,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_InstituiesPblicas_14,
                interactive: true,
                title: '<img src="styles/legend/InstituiesPblicas_14.png" /> Instituições Públicas'
            });
var format_Fbricas_15 = new ol.format.GeoJSON();
var features_Fbricas_15 = format_Fbricas_15.readFeatures(json_Fbricas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fbricas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fbricas_15.addFeatures(features_Fbricas_15);
var lyr_Fbricas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fbricas_15,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Fbricas_15,
                interactive: true,
                title: '<img src="styles/legend/Fbricas_15.png" /> Fábricas'
            });
var format_Acidentesereuniesdetrabalho_16 = new ol.format.GeoJSON();
var features_Acidentesereuniesdetrabalho_16 = format_Acidentesereuniesdetrabalho_16.readFeatures(json_Acidentesereuniesdetrabalho_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentesereuniesdetrabalho_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesereuniesdetrabalho_16.addFeatures(features_Acidentesereuniesdetrabalho_16);
var lyr_Acidentesereuniesdetrabalho_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidentesereuniesdetrabalho_16,
maxResolution:3.3605359382714357,
 minResolution:0.028004466152261962,

                style: style_Acidentesereuniesdetrabalho_16,
                interactive: true,
    title: 'Acidentes e reuniões de trabalho<br />\
    <img src="styles/legend/Acidentesereuniesdetrabalho_16_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Acidentesereuniesdetrabalho_16_1.png" /> Pontos localizados<br />'
        });
var format_Meretrcios_17 = new ol.format.GeoJSON();
var features_Meretrcios_17 = format_Meretrcios_17.readFeatures(json_Meretrcios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meretrcios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meretrcios_17.addFeatures(features_Meretrcios_17);
var lyr_Meretrcios_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meretrcios_17,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Meretrcios_17,
                interactive: true,
                title: '<img src="styles/legend/Meretrcios_17.png" /> Meretrícios'
            });
var format_Armazens_18 = new ol.format.GeoJSON();
var features_Armazens_18 = format_Armazens_18.readFeatures(json_Armazens_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Armazens_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazens_18.addFeatures(features_Armazens_18);
var lyr_Armazens_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Armazens_18,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Armazens_18,
                interactive: true,
    title: 'Armazens<br />\
    <img src="styles/legend/Armazens_18_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Armazens_18_1.png" /> Pontos localizados<br />'
        });
var format_Botequins_19 = new ol.format.GeoJSON();
var features_Botequins_19 = format_Botequins_19.readFeatures(json_Botequins_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Botequins_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Botequins_19.addFeatures(features_Botequins_19);
var lyr_Botequins_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Botequins_19,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Botequins_19,
                interactive: true,
    title: 'Botequins<br />\
    <img src="styles/legend/Botequins_19_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/Botequins_19_1.png" /> Pontos localizados<br />'
        });
var format_Escravizados_20 = new ol.format.GeoJSON();
var features_Escravizados_20 = format_Escravizados_20.readFeatures(json_Escravizados_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escravizados_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escravizados_20.addFeatures(features_Escravizados_20);
var lyr_Escravizados_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escravizados_20,
maxResolution:4.480714584361914,
 minResolution:0.028004466152261962,

                style: style_Escravizados_20,
                interactive: true,
                title: '<img src="styles/legend/Escravizados_20.png" /> Escravizados'
            });
var format_MapadecalorCompontosredistribuidos_21 = new ol.format.GeoJSON();
var features_MapadecalorCompontosredistribuidos_21 = format_MapadecalorCompontosredistribuidos_21.readFeatures(json_MapadecalorCompontosredistribuidos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadecalorCompontosredistribuidos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadecalorCompontosredistribuidos_21.addFeatures(features_MapadecalorCompontosredistribuidos_21);
var lyr_MapadecalorCompontosredistribuidos_21 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_MapadecalorCompontosredistribuidos_21, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Mapa de calor [Com pontos redistribuidos]'
            });

lyr_StamenTonerHybrid_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_SoPaulo1880Pauliceia_2.setVisible(false);lyr_SoPaulo1890Pauliceia_3.setVisible(false);lyr_SoPaulo1905Pauliceia_4.setVisible(false);lyr_SoPaulo1924Pauliceia_5.setVisible(true);lyr_SoPaulo1930Pauliceia_6.setVisible(false);lyr_SoPaulo1930GeoSampa_7.setVisible(false);lyr_OcorrenciasGeradas_8.setVisible(false);lyr_OcorrenciasRedistribuidas_9.setVisible(true);lyr_Casosdepolcia_10.setVisible(false);lyr_CompraseVendeseEmpregados_11.setVisible(false);lyr_Profissionaisliberais_12.setVisible(false);lyr_Escolas_13.setVisible(false);lyr_InstituiesPblicas_14.setVisible(false);lyr_Fbricas_15.setVisible(false);lyr_Acidentesereuniesdetrabalho_16.setVisible(false);lyr_Meretrcios_17.setVisible(false);lyr_Armazens_18.setVisible(false);lyr_Botequins_19.setVisible(false);lyr_Escravizados_20.setVisible(false);lyr_MapadecalorCompontosredistribuidos_21.setVisible(false);
var layersList = [lyr_StamenTonerHybrid_0,lyr_OSMStandard_1,lyr_SoPaulo1880Pauliceia_2,lyr_SoPaulo1890Pauliceia_3,lyr_SoPaulo1905Pauliceia_4,lyr_SoPaulo1924Pauliceia_5,lyr_SoPaulo1930Pauliceia_6,lyr_SoPaulo1930GeoSampa_7,lyr_OcorrenciasGeradas_8,lyr_OcorrenciasRedistribuidas_9,lyr_Casosdepolcia_10,lyr_CompraseVendeseEmpregados_11,lyr_Profissionaisliberais_12,lyr_Escolas_13,lyr_InstituiesPblicas_14,lyr_Fbricas_15,lyr_Acidentesereuniesdetrabalho_16,lyr_Meretrcios_17,lyr_Armazens_18,lyr_Botequins_19,lyr_Escravizados_20,lyr_MapadecalorCompontosredistribuidos_21];
lyr_OcorrenciasGeradas_8.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', });
lyr_OcorrenciasRedistribuidas_9.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Casosdepolcia_10.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_CompraseVendeseEmpregados_11.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Profissionaisliberais_12.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Escolas_13.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_InstituiesPblicas_14.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Fbricas_15.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Acidentesereuniesdetrabalho_16.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Meretrcios_17.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Armazens_18.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Botequins_19.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Escravizados_20.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_OcorrenciasGeradas_8.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'TextEdit', 'PontoOriginal': 'Hidden', });
lyr_OcorrenciasRedistribuidas_9.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'Hidden', 'PontoOriginal': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_2': 'Hidden', });
lyr_Casosdepolcia_10.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_CompraseVendeseEmpregados_11.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Profissionaisliberais_12.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Escolas_13.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_InstituiesPblicas_14.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Fbricas_15.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Acidentesereuniesdetrabalho_16.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Meretrcios_17.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_Armazens_18.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Botequins_19.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', });
lyr_Escravizados_20.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'Hidden', 'CATEGORI_1': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Comple': 'TextEdit', 'Controle': 'Hidden', 'ControleGo': 'Hidden', 'ID': 'Hidden', 'End.Origin': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGe': 'Hidden', 'PontoOrigi': 'Hidden', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'Hidden', 'Longitude_': 'Hidden', });
lyr_OcorrenciasGeradas_8.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'EnderecoGerado': 'no label', });
lyr_OcorrenciasRedistribuidas_9.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'CATEGORIA': 'no label', });
lyr_Casosdepolcia_10.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_CompraseVendeseEmpregados_11.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Profissionaisliberais_12.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escolas_13.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_InstituiesPblicas_14.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Fbricas_15.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Acidentesereuniesdetrabalho_16.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Meretrcios_17.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Armazens_18.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Botequins_19.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escravizados_20.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'End.Origin': 'no label', 'CATEGORIA': 'no label', });
lyr_Escravizados_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});