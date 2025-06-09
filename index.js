const map = L.map('map').setView([-23.422638, -51.953333], 13); // São Paulo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const polospatinete = [ 
        {nome: 'Hospital Universitario Regional', lat:-23.401262477520326, lng:-51.956334971464294},
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
    

    const polosbike = [
     {nome: 'Hospital Universitario Regional', lat:-23.401262477520330, lng:-51.956334971464284},
        {nome: 'Praça 7 De Setembro', lat:-23.422821164418053, lng:-51.953299297139914},
        {nome: 'Estação Terminal Intermodal', lat:-23.418473, lng:-51.938098},
        {nome: 'Vila Olimpica', lat:-23.41243379629831, lng:-51.9380194302094},
        {nome: 'Praça Rocha Pombo', lat:-23.421404364983943, lng:-51.928969416709585},
        {nome: 'Praça Farroupilha', lat:-23.401238275265484, lng:-51.92071718031649},
        {nome: 'Parque do Inga', lat:-23.425683400781892, lng:-51.93287028787328},
        {nome: 'Praça da Catedral', lat:-23.424571, lng:-51.938149},
        {nome: 'Bosque II', lat:-23.43024470693862, lng:-51.94142637262559},
        {nome: 'Praça Todos os Santos', lat:-23.43691020915539, lng:-51.93335911063106},
        {nome: 'Praça Salgado Filho', lat:-23.43356860021524, lng:-51.90812317623513},
        {nome: 'Estação Rodoviaria', lat:-23.425805433164545, lng:-51.910310576235204}
];

const patineteIcon = L.icon({
  iconUrl: 'images/patinete.png', // URL do ícone
  iconSize: [70, 70], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40] 
});

const bikeIcon = L.icon({
  iconUrl: 'images/bike.png', // URL do ícone
  iconSize: [70, 70], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40] 
});

polospatinete.forEach(polo=>{
        L.marker([polo.lat,polo.lng], {icon: patineteIcon})
        .addTo(map)
        .bindPopup(`<b>${polo.nome}</b>`), {icon: patineteIcon};
    });

  polosbike.forEach(polo2 => {
    L.marker([polo2.lat, polo2.lng], { icon: bikeIcon })
  .addTo(map)
  .bindPopup(`<b>${polo2.nome}</b>`);
  });