var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SoPaulo1930GeoSampa_1 = new ol.layer.Tile({
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
              wms_layers.push([lyr_SoPaulo1930GeoSampa_1, 0]);
var lyr_SoPaulo1924GeoSampa_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://raster.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "1924",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "São Paulo, 1924 [GeoSampa]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoPaulo1924GeoSampa_2, 0]);
var lyr_SoPaulo1905Pauliceia_3 = new ol.layer.Tile({
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
              wms_layers.push([lyr_SoPaulo1905Pauliceia_3, 0]);
var lyr_SoPaulo1890Pauliceia_4 = new ol.layer.Tile({
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
              wms_layers.push([lyr_SoPaulo1890Pauliceia_4, 0]);
var lyr_SoPaulo1880Pauliceia_5 = new ol.layer.Tile({
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
              wms_layers.push([lyr_SoPaulo1880Pauliceia_5, 0]);
var format_OcorrenciasGeradas_6 = new ol.format.GeoJSON();
var features_OcorrenciasGeradas_6 = format_OcorrenciasGeradas_6.readFeatures(json_OcorrenciasGeradas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcorrenciasGeradas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrenciasGeradas_6.addFeatures(features_OcorrenciasGeradas_6);
var lyr_OcorrenciasGeradas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcorrenciasGeradas_6, 
                style: style_OcorrenciasGeradas_6,
                interactive: true,
    title: 'Ocorrencias [Geradas]<br />\
    <img src="styles/legend/OcorrenciasGeradas_6_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/OcorrenciasGeradas_6_1.png" /> Pontos localizados<br />'
        });
var format_OcorrenciasRedistribuidas_7 = new ol.format.GeoJSON();
var features_OcorrenciasRedistribuidas_7 = format_OcorrenciasRedistribuidas_7.readFeatures(json_OcorrenciasRedistribuidas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcorrenciasRedistribuidas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrenciasRedistribuidas_7.addFeatures(features_OcorrenciasRedistribuidas_7);
var lyr_OcorrenciasRedistribuidas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcorrenciasRedistribuidas_7, 
                style: style_OcorrenciasRedistribuidas_7,
                interactive: true,
    title: 'Ocorrencias [Redistribuidas]<br />\
    <img src="styles/legend/OcorrenciasRedistribuidas_7_0.png" /> Pontos gerados<br />\
    <img src="styles/legend/OcorrenciasRedistribuidas_7_1.png" /> Pontos localizados<br />'
        });
var format_Fabricas_8 = new ol.format.GeoJSON();
var features_Fabricas_8 = format_Fabricas_8.readFeatures(json_Fabricas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fabricas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fabricas_8.addFeatures(features_Fabricas_8);
var lyr_Fabricas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fabricas_8,
maxResolution:16.802679691357177,
 
                style: style_Fabricas_8,
                interactive: true,
                title: '<img src="styles/legend/Fabricas_8.png" /> Fabricas'
            });
var format_CompraseVendese_9 = new ol.format.GeoJSON();
var features_CompraseVendese_9 = format_CompraseVendese_9.readFeatures(json_CompraseVendese_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompraseVendese_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompraseVendese_9.addFeatures(features_CompraseVendese_9);
var lyr_CompraseVendese_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompraseVendese_9,
maxResolution:16.802679691357177,
 
                style: style_CompraseVendese_9,
                interactive: true,
                title: '<img src="styles/legend/CompraseVendese_9.png" /> Compra-se / Vende-se'
            });
var format_Armazens_10 = new ol.format.GeoJSON();
var features_Armazens_10 = format_Armazens_10.readFeatures(json_Armazens_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Armazens_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazens_10.addFeatures(features_Armazens_10);
var lyr_Armazens_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Armazens_10,
maxResolution:16.802679691357177,
 
                style: style_Armazens_10,
                interactive: true,
                title: '<img src="styles/legend/Armazens_10.png" /> Armazens'
            });
var format_Escolas_11 = new ol.format.GeoJSON();
var features_Escolas_11 = format_Escolas_11.readFeatures(json_Escolas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolas_11.addFeatures(features_Escolas_11);
var lyr_Escolas_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolas_11,
maxResolution:16.802679691357177,
 
                style: style_Escolas_11,
                interactive: true,
                title: '<img src="styles/legend/Escolas_11.png" /> Escolas'
            });
var format_Botequins_12 = new ol.format.GeoJSON();
var features_Botequins_12 = format_Botequins_12.readFeatures(json_Botequins_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Botequins_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Botequins_12.addFeatures(features_Botequins_12);
var lyr_Botequins_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Botequins_12,
maxResolution:16.802679691357177,
 
                style: style_Botequins_12,
                interactive: true,
                title: '<img src="styles/legend/Botequins_12.png" /> Botequins'
            });
var format_InstPublicas_13 = new ol.format.GeoJSON();
var features_InstPublicas_13 = format_InstPublicas_13.readFeatures(json_InstPublicas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstPublicas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstPublicas_13.addFeatures(features_InstPublicas_13);
var lyr_InstPublicas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InstPublicas_13,
maxResolution:16.802679691357177,
 
                style: style_InstPublicas_13,
                interactive: true,
                title: '<img src="styles/legend/InstPublicas_13.png" /> Inst.Publicas'
            });
var format_Meretricios_14 = new ol.format.GeoJSON();
var features_Meretricios_14 = format_Meretricios_14.readFeatures(json_Meretricios_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meretricios_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meretricios_14.addFeatures(features_Meretricios_14);
var lyr_Meretricios_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meretricios_14,
maxResolution:16.802679691357177,
 
                style: style_Meretricios_14,
                interactive: true,
                title: '<img src="styles/legend/Meretricios_14.png" /> Meretricios'
            });
var format_CasosdePolcia_15 = new ol.format.GeoJSON();
var features_CasosdePolcia_15 = format_CasosdePolcia_15.readFeatures(json_CasosdePolcia_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasosdePolcia_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasosdePolcia_15.addFeatures(features_CasosdePolcia_15);
var lyr_CasosdePolcia_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasosdePolcia_15,
maxResolution:8.401339845678589,
 
                style: style_CasosdePolcia_15,
                interactive: true,
                title: '<img src="styles/legend/CasosdePolcia_15.png" /> Casos de Polícia'
            });
var format_AcidentesdeTrabalho_16 = new ol.format.GeoJSON();
var features_AcidentesdeTrabalho_16 = format_AcidentesdeTrabalho_16.readFeatures(json_AcidentesdeTrabalho_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcidentesdeTrabalho_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcidentesdeTrabalho_16.addFeatures(features_AcidentesdeTrabalho_16);
var lyr_AcidentesdeTrabalho_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcidentesdeTrabalho_16,
maxResolution:8.401339845678589,
 
                style: style_AcidentesdeTrabalho_16,
                interactive: true,
                title: '<img src="styles/legend/AcidentesdeTrabalho_16.png" /> Acidentes de Trabalho'
            });
var format_CasosdePolciaBrigas_17 = new ol.format.GeoJSON();
var features_CasosdePolciaBrigas_17 = format_CasosdePolciaBrigas_17.readFeatures(json_CasosdePolciaBrigas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasosdePolciaBrigas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasosdePolciaBrigas_17.addFeatures(features_CasosdePolciaBrigas_17);
var lyr_CasosdePolciaBrigas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasosdePolciaBrigas_17,
maxResolution:8.401339845678589,
 
                style: style_CasosdePolciaBrigas_17,
                interactive: true,
                title: '<img src="styles/legend/CasosdePolciaBrigas_17.png" /> Casos de Polícia [Brigas]'
            });
var format_ProfLiberais_18 = new ol.format.GeoJSON();
var features_ProfLiberais_18 = format_ProfLiberais_18.readFeatures(json_ProfLiberais_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfLiberais_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfLiberais_18.addFeatures(features_ProfLiberais_18);
var lyr_ProfLiberais_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProfLiberais_18,
maxResolution:8.401339845678589,
 
                style: style_ProfLiberais_18,
                interactive: true,
                title: '<img src="styles/legend/ProfLiberais_18.png" /> Prof.Liberais'
            });
var format_Annciosdeempregados_19 = new ol.format.GeoJSON();
var features_Annciosdeempregados_19 = format_Annciosdeempregados_19.readFeatures(json_Annciosdeempregados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annciosdeempregados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Annciosdeempregados_19.addFeatures(features_Annciosdeempregados_19);
var lyr_Annciosdeempregados_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Annciosdeempregados_19,
maxResolution:8.401339845678589,
 
                style: style_Annciosdeempregados_19,
                interactive: true,
                title: '<img src="styles/legend/Annciosdeempregados_19.png" /> Anúncios de empregados'
            });
var format_ReuniesdeTrabalho_20 = new ol.format.GeoJSON();
var features_ReuniesdeTrabalho_20 = format_ReuniesdeTrabalho_20.readFeatures(json_ReuniesdeTrabalho_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReuniesdeTrabalho_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReuniesdeTrabalho_20.addFeatures(features_ReuniesdeTrabalho_20);
var lyr_ReuniesdeTrabalho_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReuniesdeTrabalho_20,
maxResolution:8.401339845678589,
 
                style: style_ReuniesdeTrabalho_20,
                interactive: true,
                title: '<img src="styles/legend/ReuniesdeTrabalho_20.png" /> Reuniões de Trabalho'
            });
var format_Escravizados_21 = new ol.format.GeoJSON();
var features_Escravizados_21 = format_Escravizados_21.readFeatures(json_Escravizados_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escravizados_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escravizados_21.addFeatures(features_Escravizados_21);
var lyr_Escravizados_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escravizados_21,
maxResolution:8.401339845678589,
 
                style: style_Escravizados_21,
                interactive: true,
                title: '<img src="styles/legend/Escravizados_21.png" /> Escravizados'
            });
var format_OcorrenciasMapadeCalor_22 = new ol.format.GeoJSON();
var features_OcorrenciasMapadeCalor_22 = format_OcorrenciasMapadeCalor_22.readFeatures(json_OcorrenciasMapadeCalor_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcorrenciasMapadeCalor_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrenciasMapadeCalor_22.addFeatures(features_OcorrenciasMapadeCalor_22);
var lyr_OcorrenciasMapadeCalor_22 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_OcorrenciasMapadeCalor_22, 
                radius: 20 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Ocorrencias [Mapa de Calor]'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SoPaulo1930GeoSampa_1.setVisible(true);lyr_SoPaulo1924GeoSampa_2.setVisible(true);lyr_SoPaulo1905Pauliceia_3.setVisible(false);lyr_SoPaulo1890Pauliceia_4.setVisible(false);lyr_SoPaulo1880Pauliceia_5.setVisible(false);lyr_OcorrenciasGeradas_6.setVisible(false);lyr_OcorrenciasRedistribuidas_7.setVisible(true);lyr_Fabricas_8.setVisible(false);lyr_CompraseVendese_9.setVisible(false);lyr_Armazens_10.setVisible(false);lyr_Escolas_11.setVisible(false);lyr_Botequins_12.setVisible(false);lyr_InstPublicas_13.setVisible(false);lyr_Meretricios_14.setVisible(false);lyr_CasosdePolcia_15.setVisible(false);lyr_AcidentesdeTrabalho_16.setVisible(false);lyr_CasosdePolciaBrigas_17.setVisible(false);lyr_ProfLiberais_18.setVisible(false);lyr_Annciosdeempregados_19.setVisible(false);lyr_ReuniesdeTrabalho_20.setVisible(false);lyr_Escravizados_21.setVisible(false);lyr_OcorrenciasMapadeCalor_22.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_SoPaulo1930GeoSampa_1,lyr_SoPaulo1924GeoSampa_2,lyr_SoPaulo1905Pauliceia_3,lyr_SoPaulo1890Pauliceia_4,lyr_SoPaulo1880Pauliceia_5,lyr_OcorrenciasGeradas_6,lyr_OcorrenciasRedistribuidas_7,lyr_Fabricas_8,lyr_CompraseVendese_9,lyr_Armazens_10,lyr_Escolas_11,lyr_Botequins_12,lyr_InstPublicas_13,lyr_Meretricios_14,lyr_CasosdePolcia_15,lyr_AcidentesdeTrabalho_16,lyr_CasosdePolciaBrigas_17,lyr_ProfLiberais_18,lyr_Annciosdeempregados_19,lyr_ReuniesdeTrabalho_20,lyr_Escravizados_21,lyr_OcorrenciasMapadeCalor_22];
lyr_OcorrenciasGeradas_6.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', });
lyr_OcorrenciasRedistribuidas_7.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.I': 'CATEGORIA.I', 'CATEGORIA.II': 'CATEGORIA.II', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Completo': 'End.Completo', 'Controle': 'Controle', 'ControleGoogle': 'ControleGoogle', 'ID': 'ID', 'End.Original': 'End.Original', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGerado': 'EnderecoGerado', 'PontoOriginal': 'PontoOriginal', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_2': 'Longitude_2', });
lyr_Fabricas_8.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_CompraseVendese_9.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Armazens_10.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Escolas_11.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Botequins_12.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_InstPublicas_13.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Meretricios_14.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_CasosdePolcia_15.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_AcidentesdeTrabalho_16.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_CasosdePolciaBrigas_17.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_ProfLiberais_18.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_Annciosdeempregados_19.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_ReuniesdeTrabalho_20.set('fieldAliases', {'OCORRÊNCIA': 'OCORRÊNCIA', 'FONTE': 'FONTE', 'Link': 'Link', 'End.Comple': 'End.Comple', 'ID': 'ID', 'End.Origin': 'End.Origin', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', });
lyr_Escravizados_21.set('fieldAliases', {'RUA': 'RUA', 'N.': 'N.', 'ANO': 'ANO', 'RUA.ATUAL': 'RUA.ATUAL', 'INTERVALO': 'INTERVALO', 'OCORRÊNCIA': 'OCORRÊNCIA', 'CATEGORIA.': 'CATEGORIA.', 'CATEGORI_1': 'CATEGORI_1', 'FONTE': 'FONTE', 'DATA': 'DATA', 'Link': 'Link', 'X': 'X', 'End.Comple': 'End.Comple', 'Controle': 'Controle', 'ControleGo': 'ControleGo', 'ID': 'ID', 'End.Origin': 'End.Origin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'EnderecoGe': 'EnderecoGe', 'PontoOrigi': 'PontoOrigi', 'CATEGORIA': 'CATEGORIA', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', });
lyr_OcorrenciasGeradas_6.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'TextEdit', 'PontoOriginal': 'Hidden', });
lyr_OcorrenciasRedistribuidas_7.set('fieldImages', {'RUA': 'Hidden', 'N.': 'Hidden', 'ANO': 'Hidden', 'RUA.ATUAL': 'Hidden', 'INTERVALO': 'Hidden', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.I': 'Hidden', 'CATEGORIA.II': 'Hidden', 'FONTE': 'TextEdit', 'DATA': 'Hidden', 'Link': 'TextEdit', 'X': 'Hidden', 'End.Completo': 'TextEdit', 'Controle': 'Hidden', 'ControleGoogle': 'Hidden', 'ID': 'Hidden', 'End.Original': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'EnderecoGerado': 'TextEdit', 'PontoOriginal': 'Hidden', 'CATEGORIA': '', 'Latitude_2': '', 'Longitude_2': '', });
lyr_Fabricas_8.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_CompraseVendese_9.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_Armazens_10.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_Escolas_11.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_Botequins_12.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_InstPublicas_13.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_Meretricios_14.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_CasosdePolcia_15.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_AcidentesdeTrabalho_16.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CasosdePolciaBrigas_17.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ProfLiberais_18.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_Annciosdeempregados_19.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_ReuniesdeTrabalho_20.set('fieldImages', {'OCORRÊNCIA': 'TextEdit', 'FONTE': 'TextEdit', 'Link': 'TextEdit', 'End.Comple': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_Escravizados_21.set('fieldImages', {'RUA': 'TextEdit', 'N.': 'TextEdit', 'ANO': 'TextEdit', 'RUA.ATUAL': 'TextEdit', 'INTERVALO': 'TextEdit', 'OCORRÊNCIA': 'TextEdit', 'CATEGORIA.': 'TextEdit', 'CATEGORI_1': 'TextEdit', 'FONTE': 'TextEdit', 'DATA': 'TextEdit', 'Link': 'TextEdit', 'X': 'TextEdit', 'End.Comple': 'TextEdit', 'Controle': 'TextEdit', 'ControleGo': 'TextEdit', 'ID': 'TextEdit', 'End.Origin': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'EnderecoGe': 'TextEdit', 'PontoOrigi': 'TextEdit', 'CATEGORIA': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_OcorrenciasGeradas_6.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'EnderecoGerado': 'no label', });
lyr_OcorrenciasRedistribuidas_7.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Completo': 'no label', 'End.Original': 'no label', 'EnderecoGerado': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_2': 'no label', });
lyr_Fabricas_8.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_CompraseVendese_9.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_Armazens_10.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_Escolas_11.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_Botequins_12.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_InstPublicas_13.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_Meretricios_14.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_CasosdePolcia_15.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_AcidentesdeTrabalho_16.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_CasosdePolciaBrigas_17.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_ProfLiberais_18.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_Annciosdeempregados_19.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_ReuniesdeTrabalho_20.set('fieldLabels', {'OCORRÊNCIA': 'no label', 'FONTE': 'no label', 'Link': 'no label', 'End.Comple': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', });
lyr_Escravizados_21.set('fieldLabels', {'RUA': 'no label', 'N.': 'no label', 'ANO': 'no label', 'RUA.ATUAL': 'no label', 'INTERVALO': 'no label', 'OCORRÊNCIA': 'no label', 'CATEGORIA.': 'no label', 'CATEGORI_1': 'no label', 'FONTE': 'no label', 'DATA': 'no label', 'Link': 'no label', 'X': 'no label', 'End.Comple': 'no label', 'Controle': 'no label', 'ControleGo': 'no label', 'ID': 'no label', 'End.Origin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'EnderecoGe': 'no label', 'PontoOrigi': 'no label', 'CATEGORIA': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', });
lyr_Escravizados_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
