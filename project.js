// BOSSONOGA - Product Data
// Ručno izrađena prirodna kozmetika iz Bosne i Hercegovine

const products = {
    // ========================================
    // KUPKE ZA TIJELO
    // ========================================
    bathBombs: [
        {
            id: 'bb-bathbomb-50g',
            name: 'Kupka Bathbomb',
            price: 5,
            size: 'do 50g',
            category: 'bathBombs',
            description: 'Šumeće kupke sa ljekovitim biljem. Rastvoriti u toploj vodi i uživati u ritualu njege.',
            shortDescription: 'Šumeće kupke sa ljekovitim biljem za opuštanje i njegu tijela.',
            variants: [
                'Lavanda',
                'Pepermint',
                'Citrus',
                'Kantarion',
                'Lipa + Jasmin',
                'Ruža + Hibiskus + Šipak',
                'Limun + Zeleni čaj'
            ],
            variantDetails: {
                'Lavanda': 'Umirujuća kupka sa notama lavande za večernje opuštanje.',
                'Pepermint': 'Osvježavajuća kupka sa pepermint notom za osjećaj čistoće i lakoće.',
                'Citrus': 'Vesela citrusna kombinacija za razbuđivanje i osvježenje.',
                'Kantarion': 'Biljna kupka inspirisana tradicionalnom njegom kože i tijela.',
                'Lipa + Jasmin': 'Nježna cvjetna kombinacija za miran i elegantan ritual kupanja.',
                'Ruža + Hibiskus + Šipak': 'Bogata cvjetno-voćna nota za posebno spa iskustvo.',
                'Limun + Zeleni čaj': 'Čista i svježa kombinacija za lagan dnevni ritual kupanja.'
            },
            limited: true,
            icon: 'fa-spa',
            image: 'images/bathbomb-main.png',
            variantImages: {
                'Lavanda': 'images/bathbomb-lavanda.png',
                'Pepermint': 'images/bathbomb-pepermint.png',
                'Citrus': 'images/bathbomb-citrus.png',
                'Kantarion': 'images/bathbomb-kantarion.png',
                'Lipa + Jasmin': 'images/bathbomb-lipa-jasmin.png',
                'Ruža + Hibiskus + Šipak': 'images/bathbomb-ruza-hibiskus-sipak.png',
                'Limun + Zeleni čaj': 'images/bathbomb-limun-zeleni-caj.png'
            }
        },
        {
            id: 'bb-krofna-100g',
            name: 'Kupka Krofna',
            price: 10,
            size: 'do 100g',
            category: 'bathBombs',
            description: 'Bogata šumeća kupka sa ljekovitim biljem za punije iskustvo kupanja i opuštanja.',
            shortDescription: 'Veća šumeća kupka za bogatiji ritual njege i opuštanja.',
            variants: [
                'Lavanda',
                'Pepermint',
                'Citrus',
                'Kantarion',
                'Lipa + Jasmin',
                'Ruža + Hibiskus + Šipak',
                'Limun + Zeleni čaj'
            ],
            variantDetails: {
                'Lavanda': 'Umirujuća kupka sa notama lavande za večernje opuštanje.',
                'Pepermint': 'Osvježavajuća kupka sa pepermint notom za osjećaj čistoće i lakoće.',
                'Citrus': 'Vesela citrusna kombinacija za razbuđivanje i osvježenje.',
                'Kantarion': 'Biljna kupka inspirisana tradicionalnom njegom kože i tijela.',
                'Lipa + Jasmin': 'Nježna cvjetna kombinacija za miran i elegantan ritual kupanja.',
                'Ruža + Hibiskus + Šipak': 'Bogata cvjetno-voćna nota za posebno spa iskustvo.',
                'Limun + Zeleni čaj': 'Čista i svježa kombinacija za lagan dnevni ritual kupanja.'
            },
            limited: true,
            icon: 'fa-circle-notch',
            image: 'images/krofna-main.png',
            variantImages: {
                'Lavanda': 'images/krofna-lavanda.png',
                'Pepermint': 'images/krofna-pepermint.png',
                'Citrus': 'images/krofna-citrus.png',
                'Kantarion': 'images/krofna-kantarion.png',
                'Lipa + Jasmin': 'images/krofna-lipa-jasmin.png',
                'Ruža + Hibiskus + Šipak': 'images/krofna-hibiskus-ruza-sibak.png',
                'Limun + Zeleni čaj': 'images/krofna-limun-zeleni-caj.png'
            }
        }
    ],

    // ========================================
    // BALZAMI
    // ========================================
    balms: [
        {
            id: 'balm-mini-5g',
            name: 'Balzam Mini',
            price: 5,
            size: '5g',
            category: 'balms',
            description: 'Prirodni ručno rađeni balzam za suhu i oštećenu kožu. Namijenjen njezi svih dijelova tijela.',
            shortDescription: 'Prirodni balzam za suhu i osjetljivu kožu.',
            details: 'Mali praktični balzam za njegu usana, ruku, suhih dijelova laktova, peta i drugih osjetljivih zona kože.',
            limited: true,
            icon: 'fa-vial',
            image: 'images/balsam5g.png'
        },
        {
            id: 'balm-regular-55g',
            name: 'Balzam',
            price: 15,
            size: '55g',
            category: 'balms',
            description: 'Prirodni ručno rađeni balzam za suhu i oštećenu kožu. Namijenjen njezi svih dijelova tijela.',
            shortDescription: 'Bogata njega za suhu i oštećenu kožu cijelog tijela.',
            details: 'Veće pakovanje balzama za svakodnevnu njegu kože kojoj je potrebna dodatna zaštita, mekoća i obnova.',
            limited: true,
            icon: 'fa-vial',
            image: 'images/balsam55g.png'
        }
    ],

    // ========================================
    // REFILL KUPKE
    // ========================================
    refillBaths: [
        {
            id: 'refill-100g',
            name: 'Refill Kupka 100g',
            price: 10,
            size: '100g',
            category: 'refillBaths',
            description: 'Prhka mješavina za kupanje sa više soli i bilja. Idealna za lavor, veću količinu vode ili lično doziranje.',
            shortDescription: 'Prhka kupka sa više soli i bilja, uz drvenu kašičicu gratis.',
            details: 'Odličan izbor za one koji nemaju kadu, žele kupku za lavor ili vole sami dozirati količinu proizvoda. Dolazi u prirodnoj kesici sa drvenom kašičicom gratis.',
            variants: [
                'Lavanda',
                'Pepermint',
                'Citrus',
                'Hibiskus + Ruža + Jasmin',
                'Kamilica + Neven + Kantarion',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/refill-main.png',
            variantImages: {
                'Lavanda': 'images/refill-lavanda.png',
                'Pepermint': 'images/refill-pepermint.png',
                'Citrus': 'images/refill-citrus.png',
                'Hibiskus + Ruža + Jasmin': 'images/refill-hibiskus-ruza-jasmin.png',
                'Kamilica + Neven + Kantarion': 'images/refill-kamilica-neven-kantarion.png',
                'Vanila + Kokos': 'images/refill-vanila-kokos.png'
            }
        },
        {
            id: 'refill-200g',
            name: 'Refill Kupka 200g',
            price: 19,
            size: '200g',
            category: 'refillBaths',
            description: 'Prhka mješavina za kupanje sa više soli i bilja. Idealna za lavor, veću količinu vode ili lično doziranje.',
            shortDescription: 'Prhka kupka sa više soli i bilja, uz drvenu kašičicu gratis.',
            details: 'Veće pakovanje refill kupke za više korištenja, za lavor, stopala ili lične rituale kupanja bez kade.',
            variants: [
                'Lavanda',
                'Pepermint',
                'Citrus',
                'Hibiskus + Ruža + Jasmin',
                'Kamilica + Neven + Kantarion',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/refill-main.png',
            variantImages: {
                'Lavanda': 'images/refill-lavanda.png',
                'Pepermint': 'images/refill-pepermint.png',
                'Citrus': 'images/refill-citrus.png',
                'Hibiskus + Ruža + Jasmin': 'images/refill-hibiskus-ruza-jasmin.png',
                'Kamilica + Neven + Kantarion': 'images/refill-kamilica-neven-kantarion.png',
                'Vanila + Kokos': 'images/refill-vanila-kokos.png'
            }
        },
        {
            id: 'refill-300g',
            name: 'Refill Kupka 300g',
            price: 28,
            size: '300g',
            category: 'refillBaths',
            description: 'Prhka mješavina za kupanje sa više soli i bilja. Idealna za lavor, veću količinu vode ili lično doziranje.',
            shortDescription: 'Najveće refill pakovanje za više rituala kupanja.',
            details: 'Najveće refill pakovanje za one koji žele duže korištenje, češću upotrebu ili veću količinu proizvoda za kućne spa rituale.',
            variants: [
                'Lavanda',
                'Pepermint',
                'Citrus',
                'Hibiskus + Ruža + Jasmin',
                'Kamilica + Neven + Kantarion',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/refill-main.png',
            variantImages: {
                'Lavanda': 'images/refill-lavanda.png',
                'Pepermint': 'images/refill-pepermint.png',
                'Citrus': 'images/refill-citrus.png',
                'Hibiskus + Ruža + Jasmin': 'images/refill-hibiskus-ruza-jasmin.png',
                'Kamilica + Neven + Kantarion': 'images/refill-kamilica-neven-kantarion.png',
                'Vanila + Kokos': 'images/refill-vanila-kokos.png'
            }
        }
    ],

    // ========================================
    // PILINZI
    // M = Medium / manji
    // L = Large / veći
    // ========================================
    scrubs: [
        {
            id: 'scrub-narandza-ruzmarin',
            name: 'Piling - Narandža + Ružmarin',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Topla citrusno-biljna kombinacija za energičan ritual njege.',
            details: 'Piling inspirisan kombinacijom narandže i ružmarina, idealan za ritual njege i masaže kože.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-narandza-ruzmarinM.png',
            sizeImages: {
                '100g': 'images/piling-narandza-ruzmarinM.png',
                '300g': 'images/piling-narandza-ruzmarinL.png'
            }
        },
        {
            id: 'scrub-paculi-zalfija',
            name: 'Piling - Pačuli + Žalfija',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Biljni i aromatični piling sa dubljim, zemljanim tonovima.',
            details: 'Piling sa snažnijim aromatičnim karakterom za one koji vole kompleksnije i biljnije note.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-paculi-zalfijaM.png',
            sizeImages: {
                '100g': 'images/piling-paculi-zalfijaM.png',
                '300g': 'images/piling-paculi-zalfijaM.png'
            }
        },
        {
            id: 'scrub-hibiskus-ruza-jasmin',
            name: 'Piling - Hibiskus + Ruža + Jasmin',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Cvjetni piling za nježan i luksuzan osjećaj na koži.',
            details: 'Bogata cvjetna kombinacija za korisnike koji vole mekši, ženstveniji i elegantniji profil proizvoda.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-hibiskus-ruza-jasminM.png',
            sizeImages: {
                '100g': 'images/piling-hibiskus-ruza-jasminM.png',
                '300g': 'images/piling-hibiskus-ruža-jasminL.png'
            }
        },
        {
            id: 'scrub-citrus',
            name: 'Piling - Citrus',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Svjež i vedar citrus piling za osjećaj čistoće i energije.',
            details: 'Piling sa citrusnim karakterom, pogodan za osvježenje i rutinu njege tokom dana.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-citrusM.png',
            sizeImages: {
                '100g': 'images/piling-citrusM.png',
                '300g': 'images/piling-citrus.png'
            }
        },
        {
            id: 'scrub-limun-djumbir-zelenicaj',
            name: 'Piling - Limun + Đumbir + Zeleni čaj',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Osvježavajući piling sa citrusnom svježinom i toplom notom đumbira.',
            details: 'Kombinacija limuna, đumbira i zelenog čaja za dinamičan i svjež ritual njege.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-limun-djumbir-zelenicajM.png',
            sizeImages: {
                '100g': 'images/piling-limun-djumbir-zelenicajM.png',
                '300g': 'images/piling-limun-djumbir-zelenicajL.png'
            }
        },
        {
            id: 'scrub-pepermint',
            name: 'Piling - Pepermint',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Osvježavajući piling za osjećaj čistoće i hlađenja.',
            details: 'Lagani i osvježavajući piling za korisnike koji vole mentolaste i čiste note.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-pepermintM.png',
            sizeImages: {
                '100g': 'images/piling-pepermintM.png',
                '300g': 'images/piling-pepermintL.png'
            }
        },
        {
            id: 'scrub-vanila-kokos',
            name: 'Piling - Vanila + Kokos',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Topla i slatkasta kombinacija za nježan spa osjećaj.',
            details: 'Piling za one koji vole kremast, blag i udoban mirisni profil.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-vanila-kokosM.png',
            sizeImages: {
                '100g': 'images/piling-vanila-kokosM.png',
                '300g': 'images/piling-vanila-kokosL.png'
            }
        },
        {
            id: 'scrub-lavanda',
            name: 'Piling - Lavanda',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Umirujući piling za miran i nježan ritual njege.',
            details: 'Lavanda ovom pilingu daje mekan i opuštajući karakter, idealan za sporiji večernji self-care ritual.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/piling-lavandaM.png',
            sizeImages: {
                '100g': 'images/piling-lavandaM.png',
                '300g': 'images/piling-lavandaL.png'
            }
        },
        {
            id: 'scrub-commercial',
            name: 'Komercijalni Piling',
            price: 70,
            size: '1kg',
            sizeOptions: [
                { label: '1kg', price: 70 },
                { label: '5kg', price: 330 },
                { label: '10kg', price: 620 }
            ],
            category: 'scrubs',
            description: 'Profesionalni piling za spa centre, hotele, masaže i tretmane.',
            shortDescription: 'Veća pakovanja za profesionalnu i komercijalnu upotrebu.',
            details: 'Namijenjeno spa centrima, hotelima, beauty tretmanima i profesionalnoj njezi. Za veće količine i prilagođene dogovore može se poslati upit.',
            limited: false,
            commercial: true,
            icon: 'fa-briefcase',
            image: 'images/piling-main.png'
        }
    ],

    // ========================================
    // KUPKE ZA STOPALA
    // ========================================
    footBaths: [
        {
            id: 'foot-single',
            name: 'Kupka za Stopala',
            price: 2,
            size: '1 kom',
            category: 'footBaths',
            description: 'Šumeća kupka za stopala sa biljnim notama, namijenjena ritualu njege i osvježenja.',
            shortDescription: 'Pojedinačna kupka za stopala za kućni ritual njege.',
            limited: true,
            icon: 'fa-spa',
            image: 'images/footbath-pack9.png'
        },
        {
            id: 'foot-package-9',
            name: 'Kupke za Stopala - Paket 9 (8+1 GRATIS)',
            price: 16,
            size: '9 kom',
            category: 'footBaths',
            description: 'Paket od 9 kupki za stopala. Platite 8, dobijete 9.',
            shortDescription: 'Paket 9 komada za poklon ili ličnu rutinu njege.',
            limited: true,
            icon: 'fa-box',
            package: true,
            image: 'images/footbath-pack9.png'
        },
        {
            id: 'foot-package-16',
            name: 'Kupke za Stopala - Paket 16 (15+1 GRATIS)',
            price: 30,
            size: '16 kom',
            category: 'footBaths',
            description: 'Paket od 16 kupki za stopala. Platite 15, dobijete 16.',
            shortDescription: 'Veći paket za redovnu njegu ili poklon set.',
            limited: true,
            icon: 'fa-box',
            package: true,
            image: 'images/footbath-pack16.png'
        }
    ],

    // ========================================
    // POKLON PAKET PO ŽELJI
    // ========================================
    packages: [
        {
            id: 'pkg-custom',
            name: 'Poklon Paket po Želji',
            price: 35,
            category: 'packages',
            description: 'Odaberite proizvode koje želite, a mi ih spajamo u jedan Bossonoga poklon paket.',
            shortDescription: 'Minimalna vrijednost paketa je 35 KM, uz 1 feetbathbomb gratis.',
            details: 'Klijent bira proizvode koje želi u paketu, a Bossonoga ih pažljivo spaja u jedan poklon paket. Minimalna vrijednost paketa je 35 KM, a uz svaki paket dolazi 1 feetbathbomb gratis.',
            icon: 'fa-gift',
            limited: false,
            custom: true,
            image: 'images/bathbomb-main.png'
        }
    ],

    // ========================================
    // DJEČIJA LINIJA
    // ========================================
kidsLine: [
    {
        id: 'kids-duckbomb-single',
        name: '🦆 Duckbomb',
        price: 5,
        category: 'kidsLine',
        description: 'Nježna kupka za djecu.',
        shortDescription: 'Nježna kupka za djecu.',
        details: 'Nježna kupka za djecu na bazi macerata kamilice, bez boja. Pažljivo osmišljena za mali ritual kupanja i igru.',
        limited: true,
        icon: 'fa-duck',
        image: 'images/patkica.jpg'
    },
    {
        id: 'kids-duck-surprise',
        name: '🦆 Patka iznenađenja',
        price: 0,
        category: 'kidsLine',
        description: 'Patka iznenađenja.',
        shortDescription: 'U nekim patkicama krije se iznenađenje.',
        details: 'U nekim patkicama krije se iznenađenje — figurica patkice koja svijetli u mraku, do koje dolaziš kada se postojeća duckbomb otopi. Nagradna igra: ako skupiš 5 patkica i pošalješ sliku, uz sljedeću narudžbu dobijaš gumenu patkicu gratis.',
        limited: true,
        icon: 'fa-star',
        image: 'images/kids-patkice-real.png'
    },
    {
        id: 'kids-duckbomb-pack',
        name: '🦆 Paket 4 patkice',
        price: 20,
        category: 'kidsLine',
        description: 'Paket od 4 dječije kupke.',
        shortDescription: 'Paket 4 patkice za 20 KM.',
        details: 'Paket sadrži 4 duckbomb kupke za djecu. Idealan kao poklon, za braću i sestre ili za više veselih kupanja.',
        limited: true,
        package: true,
        icon: 'fa-gift',
        image: 'images/kids-patkice-paket.png'
    }
],
    // ========================================
    // CEKERI & OPREMA
    // ========================================
    accessories: [
        {
            id: 'acc-tote-bossonoga',
            name: 'Ceker BOSSONOGA - Retro',
            price: 20,
            category: 'accessories',
            description: 'Bossonoga ceker sa prepoznatljivim retro dizajnom.',
            shortDescription: 'Ceger za svakodnevnu upotrebu i Bossonoga vibe.',
            icon: 'fa-bag-shopping',
            limited: false,
            image: 'images/ceker-bossonoga.png'
        },
        {
            id: 'acc-tote-sacu',
            name: 'Ceker - "E\' o Saću"',
            price: 20,
            category: 'accessories',
            description: 'Ceker inspirisan prirodom, pčelama i domaćim motivima.',
            shortDescription: 'Veseli ceker sa prirodnim motivima.',
            icon: 'fa-bag-shopping',
            limited: false,
            image: 'images/ceker-sacu.jpg'
        },
        {
            id: 'acc-tote-odmori',
            name: 'Ceker - "Odmori"',
            price: 20,
            category: 'accessories',
            description: 'Ceker sa Bossonoga porukom mira, nježnosti i odmora.',
            shortDescription: 'Minimalistički ceker sa Bossonoga porukom.',
            icon: 'fa-bag-shopping',
            limited: false,
            image: 'images/ceker-odmori.jpg'
        },
        {
            id: 'acc-tote-patkica',
            name: 'Ceker - Bossonoga Patkica',
            price: 20,
            category: 'accessories',
            description: 'Šareni ceker inspirisan Bossonoga kids linijom.',
            shortDescription: 'Razigrani ceker za kids kolekciju.',
            icon: 'fa-bag-shopping',
            limited: false,
            image: 'images/ceker-patkica.jpg'
        },
        {
            id: 'acc-tote-baba',
            name: 'Ceker - Bakin Recept',
            price: 20,
            category: 'accessories',
            description: 'Ceker inspirisan domaćim pričama, receptima i toplinom ručnog rada.',
            shortDescription: 'Ceker sa domaćim i nostalgičnim karakterom.',
            icon: 'fa-bag-shopping',
            limited: false,
            image: 'images/ceker-baba.jpg'
        },
        {
            id: 'acc-washcloth',
            name: 'Washcloth',
            price: 5,
            category: 'accessories',
            description: 'Ručno izrađen washcloth za nježnu masažu i primjenu pilinga.',
            shortDescription: 'Praktičan dodatak za ritual njege i pilinga.',
            icon: 'fa-sponge',
            limited: true,
            image: 'images/washcloth-rucni-rad.jpg'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
