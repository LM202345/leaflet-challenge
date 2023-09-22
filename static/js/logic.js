

let myMap = L.map('map').setView([0, 0], 2);

//Add a basemap layer  (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(myMap);

// Load earthquake data from the USGS API using D3.json
let apigeojson = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
d3.json(apigeojson)
    .then((earthquakeData) => {
        // Function to assign colors according to depth
        function getColor(depth) {
            if (depth <= 10) return '#54F83E';
            if (depth >10 && depth <= 30) return '#CEFD39';
            if (depth >30 && depth <= 50) return '#FFCD3F';
            if (depth >50 && depth <= 70) return '#FF8205';
            if (depth >70 && depth <= 80) return '#F96345';
            return '#FF3300';
        }

        // Add markers with colors and sizes

        earthquakeData.features.forEach((earthquake) => {
            let coordinates = earthquake.geometry.coordinates;
            let magnitude = earthquake.properties.mag;
            let depth = coordinates[2];
            let location = earthquake.properties.place;

            let marker = L.circleMarker([coordinates[1], coordinates[0]], {
                color: '#000000',
                weight: 1,
                fillColor: getColor(depth),
                fillOpacity: 1,
                radius: magnitude * 5,
            }).addTo(myMap);

            //Add a popup with additional information
            marker.bindTooltip(`
                Magnitude: ${magnitude}<br>
                Depth: ${depth} km <br>
                Location: ${location}<br>
    `);
            marker.bindPopup(`
                Magnitude: ${magnitude}<br>
                Depth: ${depth} km <br>
                Location: ${location}<br>
            `);
            
        });

        // Create a legend
        let legend = L.control({ position: 'bottomright' });
        legend.onAdd = function (map) {
            let div = L.DomUtil.create('div', 'info legend');
            let depths = [-10, 10, 30, 50, 70, 80];
            div.innerHTML += '<b>Profundidad (km)</b><br>';
            for (let i = 0; i < depths.length; i++) {
                let from = depths[i];
                let to = depths[i + 1];
                div.innerHTML += `
                <i style="background:${getColor(from + 1)}">&nbsp&nbsp&nbsp&nbsp</i> 
                  &nbsp ${from} 
                  ${(to !== undefined && to !== from) ? '- ' + to : '+'}
                <br>
            `;
            }
            return div;
        };
        legend.addTo(myMap);
    });
