var map = L.map('map').setView([5.902107200912213, 43.30857649710357], 5);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});

// Charger le fichier Shapefile

var greath_somali = L.geoJSON(greath_somali, {
    onEachFeature: function(feature, layer) {
/*         var popupContent = '<strong>Great Somali:</strong> ' + feature.properties.greath_somali; */
/*  */
/*         if (feature.properties.additional_info) { */
/*             popupContent += '<br><strong>Additional Info:</strong> ' + feature.properties.additional_info */;
/*         } */
/*  */
/*         layer.bindPopup(popupContent); */
    },
    style: function(feature) {
        return {
            fillColor: '#317AC1',  // Couleur de remplissage
            weight: 2,             // Épaisseur des frontières
            opacity: 1,            // Opacité des frontières
            color: 'black',        // Couleur des frontières
            fillOpacity: 1         // Opacité de remplissage
        };
    }
}).addTo(map);



// Layer control 
var baseMaps = { 
    'OSM': osm,
    'Stadia': Stadia_AlidadeSatellite
};

var overlayMaps = { 
    'Greath Somali': greath_somali 
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// Ajouter la légende 
/* var legend = L.control({ position: 'bottomright' }); 
legend.onAdd = function (map) { 
    var div = L.DomUtil.create('div', 'info legend'); 
    var grades = [0, 10, 20, 50, 100, 200, 500, 1000]; 
    var labels = []; 
    
    for (var i = 0; i < grades.length; i++) { 
        div.innerHTML += 
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' + 
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'); 
        } 
          return div; 
};

legend.addTo(map);

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500 ? '#BD0026' : 
           d > 200 ? '#E31A1C' : 
           d > 100 ? '#FC4E2A' : 
           d > 50 ? '#FD8D3C' : 
           d > 20 ? '#FEB24C' : 
           d > 10 ? '#FED976' : '#FFEDA0'; 
} */