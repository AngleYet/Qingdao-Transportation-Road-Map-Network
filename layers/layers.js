ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([119.368527, 35.372644, 121.087484, 37.029567]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_qing_dao_1 = new ol.format.GeoJSON();
var features_qing_dao_1 = format_qing_dao_1.readFeatures(json_qing_dao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_qing_dao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qing_dao_1.addFeatures(features_qing_dao_1);
var lyr_qing_dao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qing_dao_1, 
                style: style_qing_dao_1,
                popuplayertitle: 'qing_dao',
                interactive: true,
    title: 'qing_dao<br />\
    <img src="styles/legend/qing_dao_1_0.png" /> 鳌山卫街道<br />\
    <img src="styles/legend/qing_dao_1_1.png" /> 八大关街道<br />\
    <img src="styles/legend/qing_dao_1_2.png" /> 八大湖街道<br />\
    <img src="styles/legend/qing_dao_1_3.png" /> 八大峡街道<br />\
    <img src="styles/legend/qing_dao_1_4.png" /> 白沙河街道<br />\
    <img src="styles/legend/qing_dao_1_5.png" /> 宝山镇<br />\
    <img src="styles/legend/qing_dao_1_6.png" /> 北安街道<br />\
    <img src="styles/legend/qing_dao_1_7.png" /> 北宅街道<br />\
    <img src="styles/legend/qing_dao_1_8.png" /> 滨海街道<br />\
    <img src="styles/legend/qing_dao_1_9.png" /> 沧口街道<br />\
    <img src="styles/legend/qing_dao_1_10.png" /> 藏马镇<br />\
    <img src="styles/legend/qing_dao_1_11.png" /> 潮海街道<br />\
    <img src="styles/legend/qing_dao_1_12.png" /> 城阳街道<br />\
    <img src="styles/legend/qing_dao_1_13.png" /> 城阳区<br />\
    <img src="styles/legend/qing_dao_1_14.png" /> 崔家集镇<br />\
    <img src="styles/legend/qing_dao_1_15.png" /> 大场镇<br />\
    <img src="styles/legend/qing_dao_1_16.png" /> 大村镇<br />\
    <img src="styles/legend/qing_dao_1_17.png" /> 大港街道<br />\
    <img src="styles/legend/qing_dao_1_18.png" /> 大信街道<br />\
    <img src="styles/legend/qing_dao_1_19.png" /> 大泽山镇<br />\
    <img src="styles/legend/qing_dao_1_20.png" /> 登州路街道<br />\
    <img src="styles/legend/qing_dao_1_21.png" /> 店埠镇<br />\
    <img src="styles/legend/qing_dao_1_22.png" /> 店子镇<br />\
    <img src="styles/legend/qing_dao_1_23.png" /> 东阁街道<br />\
    <img src="styles/legend/qing_dao_1_24.png" /> 段泊岚镇<br />\
    <img src="styles/legend/qing_dao_1_25.png" /> 敦化路街道<br />\
    <img src="styles/legend/qing_dao_1_26.png" /> 凤台街道<br />\
    <img src="styles/legend/qing_dao_1_27.png" /> 浮山路街道<br />\
    <img src="styles/legend/qing_dao_1_28.png" /> 浮山新区街道<br />\
    <img src="styles/legend/qing_dao_1_29.png" /> 阜安街道<br />\
    <img src="styles/legend/qing_dao_1_30.png" /> 阜新路街道<br />\
    <img src="styles/legend/qing_dao_1_31.png" /> 沽河街道<br />\
    <img src="styles/legend/qing_dao_1_32.png" /> 古岘镇<br />\
    <img src="styles/legend/qing_dao_1_33.png" /> 海伦路街道<br />\
    <img src="styles/legend/qing_dao_1_34.png" /> 海青镇<br />\
    <img src="styles/legend/qing_dao_1_35.png" /> 合肥路街道<br />\
    <img src="styles/legend/qing_dao_1_36.png" /> 河套街道<br />\
    <img src="styles/legend/qing_dao_1_37.png" /> 河头店镇<br />\
    <img src="styles/legend/qing_dao_1_38.png" /> 河西街道<br />\
    <img src="styles/legend/qing_dao_1_39.png" /> 红岛街道<br />\
    <img src="styles/legend/qing_dao_1_40.png" /> 红石崖街道<br />\
    <img src="styles/legend/qing_dao_1_41.png" /> 湖岛街道<br />\
    <img src="styles/legend/qing_dao_1_42.png" /> 虎山路街道<br />\
    <img src="styles/legend/qing_dao_1_43.png" /> 环秀街道<br />\
    <img src="styles/legend/qing_dao_1_44.png" /> 黄岛街道<br />\
    <img src="styles/legend/qing_dao_1_45.png" /> 即墨路街道<br />\
    <img src="styles/legend/qing_dao_1_46.png" /> 即墨区<br />\
    <img src="styles/legend/qing_dao_1_47.png" /> 棘洪滩街道<br />\
    <img src="styles/legend/qing_dao_1_48.png" /> 江苏路街道<br />\
    <img src="styles/legend/qing_dao_1_49.png" /> 姜山镇<br />\
    <img src="styles/legend/qing_dao_1_50.png" /> 胶北街道<br />\
    <img src="styles/legend/qing_dao_1_51.png" /> 胶东街道<br />\
    <img src="styles/legend/qing_dao_1_52.png" /> 胶莱街道<br />\
    <img src="styles/legend/qing_dao_1_53.png" /> 胶南街道<br />\
    <img src="styles/legend/qing_dao_1_54.png" /> 胶西街道<br />\
    <img src="styles/legend/qing_dao_1_55.png" /> 胶州市<br />\
    <img src="styles/legend/qing_dao_1_56.png" /> 金湖路街道<br />\
    <img src="styles/legend/qing_dao_1_57.png" /> 金家岭街道<br />\
    <img src="styles/legend/qing_dao_1_58.png" /> 金口镇<br />\
    <img src="styles/legend/qing_dao_1_59.png" /> 金门路街道<br />\
    <img src="styles/legend/qing_dao_1_60.png" /> 九龙街道<br />\
    <img src="styles/legend/qing_dao_1_61.png" /> 九水街道<br />\
    <img src="styles/legend/qing_dao_1_62.png" /> 旧店镇<br />\
    <img src="styles/legend/qing_dao_1_63.png" /> 开平路街道<br />\
    <img src="styles/legend/qing_dao_1_64.png" /> 莱西市<br />\
    <img src="styles/legend/qing_dao_1_65.png" /> 蓝村街道<br />\
    <img src="styles/legend/qing_dao_1_66.png" /> 琅琊镇<br />\
    <img src="styles/legend/qing_dao_1_67.png" /> 崂山区<br />\
    <img src="styles/legend/qing_dao_1_68.png" /> 李沧区<br />\
    <img src="styles/legend/qing_dao_1_69.png" /> 李村街道<br />\
    <img src="styles/legend/qing_dao_1_70.png" /> 李哥庄镇<br />\
    <img src="styles/legend/qing_dao_1_71.png" /> 李园街道<br />\
    <img src="styles/legend/qing_dao_1_72.png" /> 里岔镇<br />\
    <img src="styles/legend/qing_dao_1_73.png" /> 辽宁路街道<br />\
    <img src="styles/legend/qing_dao_1_74.png" /> 辽源路街道<br />\
    <img src="styles/legend/qing_dao_1_75.png" /> 蓼兰镇<br />\
    <img src="styles/legend/qing_dao_1_76.png" /> 灵山岛省级自然保护区<br />\
    <img src="styles/legend/qing_dao_1_77.png" /> 灵山街道<br />\
    <img src="styles/legend/qing_dao_1_78.png" /> 灵山卫街道<br />\
    <img src="styles/legend/qing_dao_1_79.png" /> 灵珠山街道<br />\
    <img src="styles/legend/qing_dao_1_80.png" /> 流亭街道<br />\
    <img src="styles/legend/qing_dao_1_81.png" /> 六汪镇<br />\
    <img src="styles/legend/qing_dao_1_82.png" /> 龙泉街道<br />\
    <img src="styles/legend/qing_dao_1_83.png" /> 龙山街道<br />\
    <img src="styles/legend/qing_dao_1_84.png" /> 楼山街道<br />\
    <img src="styles/legend/qing_dao_1_85.png" /> 洛阳路街道<br />\
    <img src="styles/legend/qing_dao_1_86.png" /> 马连庄镇<br />\
    <img src="styles/legend/qing_dao_1_87.png" /> 明村镇<br />\
    <img src="styles/legend/qing_dao_1_88.png" /> 南村镇<br />\
    <img src="styles/legend/qing_dao_1_89.png" /> 南墅镇<br />\
    <img src="styles/legend/qing_dao_1_90.png" /> 宁夏路街道<br />\
    <img src="styles/legend/qing_dao_1_91.png" /> 平度市<br />\
    <img src="styles/legend/qing_dao_1_92.png" /> 泊里镇<br />\
    <img src="styles/legend/qing_dao_1_93.png" /> 铺集镇<br />\
    <img src="styles/legend/qing_dao_1_94.png" /> 青岛市<br />\
    <img src="styles/legend/qing_dao_1_95.png" /> 青岛西海岸新区（黄岛区）<br />\
    <img src="styles/legend/qing_dao_1_96.png" /> 仁兆镇<br />\
    <img src="styles/legend/qing_dao_1_97.png" /> 日庄镇<br />\
    <img src="styles/legend/qing_dao_1_98.png" /> 三里河街道<br />\
    <img src="styles/legend/qing_dao_1_99.png" /> 沙子口街道<br />\
    <img src="styles/legend/qing_dao_1_100.png" /> 上马街道<br />\
    <img src="styles/legend/qing_dao_1_101.png" /> 世园街道<br />\
    <img src="styles/legend/qing_dao_1_102.png" /> 市北区<br />\
    <img src="styles/legend/qing_dao_1_103.png" /> 市南区<br />\
    <img src="styles/legend/qing_dao_1_104.png" /> 双山街道<br />\
    <img src="styles/legend/qing_dao_1_105.png" /> 水集街道<br />\
    <img src="styles/legend/qing_dao_1_106.png" /> 水清沟街道<br />\
    <img src="styles/legend/qing_dao_1_107.png" /> 四方街道<br />\
    <img src="styles/legend/qing_dao_1_108.png" /> 台东街道<br />\
    <img src="styles/legend/qing_dao_1_109.png" /> 田横镇<br />\
    <img src="styles/legend/qing_dao_1_110.png" /> 田庄镇<br />\
    <img src="styles/legend/qing_dao_1_111.png" /> 铁山街道<br />\
    <img src="styles/legend/qing_dao_1_112.png" /> 通济街道<br />\
    <img src="styles/legend/qing_dao_1_113.png" /> 同和街道<br />\
    <img src="styles/legend/qing_dao_1_114.png" /> 王哥庄街道<br />\
    <img src="styles/legend/qing_dao_1_115.png" /> 王台街道<br />\
    <img src="styles/legend/qing_dao_1_116.png" /> 望城街道<br />\
    <img src="styles/legend/qing_dao_1_117.png" /> 温泉街道<br />\
    <img src="styles/legend/qing_dao_1_118.png" /> 惜福镇街道<br />\
    <img src="styles/legend/qing_dao_1_119.png" /> 夏格庄镇<br />\
    <img src="styles/legend/qing_dao_1_120.png" /> 夏庄街道<br />\
    <img src="styles/legend/qing_dao_1_121.png" /> 香港中路街道<br />\
    <img src="styles/legend/qing_dao_1_122.png" /> 湘潭路街道<br />\
    <img src="styles/legend/qing_dao_1_123.png" /> 辛安街道<br />\
    <img src="styles/legend/qing_dao_1_124.png" /> 新河镇<br />\
    <img src="styles/legend/qing_dao_1_125.png" /> 兴城路街道<br />\
    <img src="styles/legend/qing_dao_1_126.png" /> 兴华路街道<br />\
    <img src="styles/legend/qing_dao_1_127.png" /> 兴隆路街道<br />\
    <img src="styles/legend/qing_dao_1_128.png" /> 薛家岛街道<br />\
    <img src="styles/legend/qing_dao_1_129.png" /> 延安路街道<br />\
    <img src="styles/legend/qing_dao_1_130.png" /> 洋河镇<br />\
    <img src="styles/legend/qing_dao_1_131.png" /> 移风店镇<br />\
    <img src="styles/legend/qing_dao_1_132.png" /> 隐珠街道<br />\
    <img src="styles/legend/qing_dao_1_133.png" /> 院上镇<br />\
    <img src="styles/legend/qing_dao_1_134.png" /> 云南路街道<br />\
    <img src="styles/legend/qing_dao_1_135.png" /> 云山镇<br />\
    <img src="styles/legend/qing_dao_1_136.png" /> 湛山街道<br />\
    <img src="styles/legend/qing_dao_1_137.png" /> 张家楼街道<br />\
    <img src="styles/legend/qing_dao_1_138.png" /> 长江路街道<br />\
    <img src="styles/legend/qing_dao_1_139.png" /> 振华路街道<br />\
    <img src="styles/legend/qing_dao_1_140.png" /> 镇江路街道<br />\
    <img src="styles/legend/qing_dao_1_141.png" /> 中韩街道<br />\
    <img src="styles/legend/qing_dao_1_142.png" /> 中山路街道<br />\
    <img src="styles/legend/qing_dao_1_143.png" /> 中云街道<br />\
    <img src="styles/legend/qing_dao_1_144.png" /> 珠海街道<br />\
    <img src="styles/legend/qing_dao_1_145.png" /> 珠海路街道<br />\
    <img src="styles/legend/qing_dao_1_146.png" /> <br />' });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_2, 
                style: style_road_2,
                popuplayertitle: 'road',
                interactive: true,
    title: 'road<br />\
    <img src="styles/legend/road_2_0.png" /> primary<br />\
    <img src="styles/legend/road_2_1.png" /> secondary<br />\
    <img src="styles/legend/road_2_2.png" /> trunk<br />\
    <img src="styles/legend/road_2_3.png" /> <br />' });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_qing_dao_1.setVisible(true);lyr_road_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_qing_dao_1,lyr_road_2];
lyr_qing_dao_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'website': 'website', 'name:fr': 'name:fr', 'official_name:en': 'official_name:en', 'wikipedia': 'wikipedia', 'name:zh-Latn-pinyin': 'name:zh-Latn-pinyin', 'wikidata': 'wikidata', 'type': 'type', 'source:population': 'source:population', 'postal_code': 'postal_code', 'population:date': 'population:date', 'population': 'population', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:zh': 'name:zh', 'name:uk': 'name:uk', 'name:th': 'name:th', 'name:ne': 'name:ne', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:cs': 'name:cs', 'name:ca': 'name:ca', 'name:ar': 'name:ar', 'name': 'name', 'division_code': 'division_code', 'alt_name_1': 'alt_name_1', 'alt_name:es': 'alt_name:es', 'alt_name:de': 'alt_name:de', 'alt_name:cs': 'alt_name:cs', 'alt_name': 'alt_name', 'admin_level': 'admin_level', });
lyr_road_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'fix_me': 'fix_me', 'horse': 'horse', 'cutting': 'cutting', 'construction': 'construction', 'old_name:en': 'old_name:en', 'old_name:de': 'old_name:de', 'trolley_wire': 'trolley_wire', 'embankment': 'embankment', 'alt_name': 'alt_name', 'junction': 'junction', 'motor_vehicle': 'motor_vehicle', 'int_name': 'int_name', 'foot': 'foot', 'bicycle': 'bicycle', 'lit': 'lit', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name:de': 'name:de', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'sidewalk': 'sidewalk', 'tunnel': 'tunnel', 'cycleway:left': 'cycleway:left', 'access': 'access', 'name:zh-Latn-pinyin': 'name:zh-Latn-pinyin', 'name:fr': 'name:fr', 'old_name': 'old_name', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'ref': 'ref', 'name:zh': 'name:zh', 'name:en': 'name:en', 'layer': 'layer', 'bridge': 'bridge', 'old_ref': 'old_ref', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', 'check_date': 'check_date', 'covered': 'covered', 'bridge:name': 'bridge:name', 'maxspeed': 'maxspeed', 'maxweight': 'maxweight', 'width': 'width', 'smoothness': 'smoothness', 'incline': 'incline', 'not:name': 'not:name', 'motorcycle': 'motorcycle', 'lane_markings': 'lane_markings', 'tunnel:name': 'tunnel:name', 'highway:CN': 'highway:CN', 'motorroad': 'motorroad', 'start_date': 'start_date', 'source:name': 'source:name', 'name:ja': 'name:ja', 'maxheight': 'maxheight', 'path': 'path', });
lyr_qing_dao_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'website': 'TextEdit', 'name:fr': 'TextEdit', 'official_name:en': 'TextEdit', 'wikipedia': 'TextEdit', 'name:zh-Latn-pinyin': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'source:population': 'TextEdit', 'postal_code': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:zh': 'TextEdit', 'name:uk': 'TextEdit', 'name:th': 'TextEdit', 'name:ne': 'TextEdit', 'name:ko': 'TextEdit', 'name:ja': 'TextEdit', 'name:es': 'TextEdit', 'name:en': 'TextEdit', 'name:de': 'TextEdit', 'name:cs': 'TextEdit', 'name:ca': 'TextEdit', 'name:ar': 'TextEdit', 'name': 'TextEdit', 'division_code': 'TextEdit', 'alt_name_1': 'TextEdit', 'alt_name:es': 'TextEdit', 'alt_name:de': 'TextEdit', 'alt_name:cs': 'TextEdit', 'alt_name': 'TextEdit', 'admin_level': 'TextEdit', });
lyr_road_2.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'fix_me': 'TextEdit', 'horse': 'TextEdit', 'cutting': 'TextEdit', 'construction': 'TextEdit', 'old_name:en': 'TextEdit', 'old_name:de': 'TextEdit', 'trolley_wire': 'TextEdit', 'embankment': 'TextEdit', 'alt_name': 'TextEdit', 'junction': 'TextEdit', 'motor_vehicle': 'TextEdit', 'int_name': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'lit': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'name:de': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'sidewalk': 'TextEdit', 'tunnel': 'TextEdit', 'cycleway:left': 'TextEdit', 'access': 'TextEdit', 'name:zh-Latn-pinyin': 'TextEdit', 'name:fr': 'TextEdit', 'old_name': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'ref': 'TextEdit', 'name:zh': 'TextEdit', 'name:en': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'old_ref': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'check_date': 'TextEdit', 'covered': 'TextEdit', 'bridge:name': 'TextEdit', 'maxspeed': 'TextEdit', 'maxweight': 'TextEdit', 'width': 'TextEdit', 'smoothness': 'TextEdit', 'incline': 'TextEdit', 'not:name': 'TextEdit', 'motorcycle': 'TextEdit', 'lane_markings': 'TextEdit', 'tunnel:name': 'TextEdit', 'highway:CN': 'TextEdit', 'motorroad': 'TextEdit', 'start_date': 'TextEdit', 'source:name': 'TextEdit', 'name:ja': 'TextEdit', 'maxheight': 'TextEdit', 'path': 'TextEdit', });
lyr_qing_dao_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'website': 'no label', 'name:fr': 'no label', 'official_name:en': 'no label', 'wikipedia': 'no label', 'name:zh-Latn-pinyin': 'no label', 'wikidata': 'no label', 'type': 'no label', 'source:population': 'no label', 'postal_code': 'no label', 'population:date': 'no label', 'population': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:zh': 'no label', 'name:uk': 'no label', 'name:th': 'no label', 'name:ne': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:cs': 'no label', 'name:ca': 'no label', 'name:ar': 'no label', 'name': 'inline label - visible with data', 'division_code': 'no label', 'alt_name_1': 'no label', 'alt_name:es': 'no label', 'alt_name:de': 'no label', 'alt_name:cs': 'no label', 'alt_name': 'no label', 'admin_level': 'no label', });
lyr_road_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'fix_me': 'no label', 'horse': 'no label', 'cutting': 'no label', 'construction': 'no label', 'old_name:en': 'no label', 'old_name:de': 'no label', 'trolley_wire': 'no label', 'embankment': 'no label', 'alt_name': 'no label', 'junction': 'no label', 'motor_vehicle': 'no label', 'int_name': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'lit': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name:de': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'sidewalk': 'no label', 'tunnel': 'no label', 'cycleway:left': 'no label', 'access': 'no label', 'name:zh-Latn-pinyin': 'no label', 'name:fr': 'no label', 'old_name': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'ref': 'no label', 'name:zh': 'no label', 'name:en': 'no label', 'layer': 'no label', 'bridge': 'no label', 'old_ref': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes': 'no label', 'check_date': 'no label', 'covered': 'no label', 'bridge:name': 'no label', 'maxspeed': 'no label', 'maxweight': 'no label', 'width': 'no label', 'smoothness': 'no label', 'incline': 'no label', 'not:name': 'no label', 'motorcycle': 'no label', 'lane_markings': 'no label', 'tunnel:name': 'no label', 'highway:CN': 'no label', 'motorroad': 'no label', 'start_date': 'no label', 'source:name': 'no label', 'name:ja': 'no label', 'maxheight': 'no label', 'path': 'inline label - visible with data', });
lyr_road_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});