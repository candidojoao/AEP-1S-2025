const map = L.map('map').setView([-23.41847, -51.93809], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

const polos = [ 
    {nome: 'Hospital Universitario Regional', lat:-23.401262477520326, lng:-51.956334971464294, bikeQntd:5, patineteQntd:10},
    {nome: 'Praça 7 De Setembro', lat:-23.422821164418053, lng:-51.953299297139914},
    {nome: 'Estação Terminal Intermodal', lat:-23.418473, lng:-51.938098},
    {nome: 'Vila Olimpica', lat:-23.41243379629831, lng:-51.9380194302094},
    {nome: 'Praça Rocha Pombo', lat:-23.421404364983943, lng:-51.928969416709584},
    {nome: 'Praça Farroupilha', lat:-23.401238275265484, lng:-51.92071718031649},
    {nome: 'Parque do Inga', lat:-23.425683400781892, lng:-51.93287028787328},
    {nome: 'Praça da Catedral', lat:-23.424571, lng:-51.938149},
    {nome: 'Bosque II', lat:-23.43024470693862, lng:-51.94142637262559},
    {nome: 'Praça Todos os Santos', lat:-23.43691020915539, lng:-51.93335911063106},
    {nome: 'Praça Salgado Filho', lat:-23.43356860021524, lng:-51.90812317623513},
    {nome: 'Estação Rodoviaria', lat:-23.425805433164545, lng:-51.910310576235204}
];

const marker = L.icon({
  iconUrl: 'images/image.png', 
  iconSize: [45, 45], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40] 
});

polos.forEach(polo=>{
    L.marker([polo.lat,polo.lng], {icon: marker})
    .addTo(map)
    .bindPopup(`<b>${polo.nome}</b>`), {icon: marker};
});

