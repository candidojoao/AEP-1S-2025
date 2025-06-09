const map = L.map('map').setView([-23.422638, -51.953333], 13); // São Paulo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const polos = [ 
        {nome: 'Hospital Universitario Regional', lat:-23.401262477520326, alt:-51.956334971464294},
        {nome: 'Praça 7 De Setembro', lat:-23.422821164418053, alt:-51.953299297139914},
        {nome: 'Estação Terminal Intermodal', lat:-23.418473, alt:-51.938098},
        {nome: 'Vila Olimpica', lat:-23.41243379629831, alt:-51.9380194302094},
        {nome: 'Praça Rocha Pombo', lat:-23.421404364983943, alt:-51.928969416709585},
        {nome: 'Praça Farroupilha', lat:-23.401238275265484, alt:-51.92071718031649},
        {nome: 'Parque do Inga', lat:-23.425683400781892, alt:-51.93287028787328},
        {nome: 'Praça da Catedral', lat:-23.424571, alt:-51.938149},
        {nome: 'Bosque II', lat:-23.43024470693862, alt:-51.94142637262559},
        {nome: 'Praça Todos os Santos', lat:-23.43691020915539, alt:-51.93335911063106},
        {nome: 'Praça Salgado Filho', lat:-23.43356860021524, alt:-51.90812317623513},
        {nome: 'Estação Rodoviaria', lat:-23.425805433164545, alt:-51.910310576235204}
    ]
    polos.forEach(polo=>{
        L.marker([polo.lat,polo.alt]).addTo(map).bindPopup(`<b>${polo.nome}</b>`);
    });