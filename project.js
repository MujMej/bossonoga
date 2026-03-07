// BOSSONOGA - Product Data
// Ručno izrađena prirodna kozmetika iz Bosne i Hercegovine

const products = {
    // ========================================
    // KUPKE ZA TIJELO (Bath Bombs)
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
                'Citrus': 'Vesela citrusna kombinacija narandže, mandarine i grejpa.',
                'Kantarion': 'Biljna kupka inspirisana tradicionalnom njegom kože i tijela.',
                'Lipa + Jasmin': 'Nježna cvjetna kombinacija za miran i elegantan ritual kupanja.',
                'Ruža + Hibiskus + Šipak': 'Bogata cvjetno-voćna nota za posebno spa iskustvo.',
                'Limun + Zeleni čaj': 'Čista, svježa i lagana kombinacija za jutarnje ili dnevno kupanje.'
            },
            limited: true,
            icon: 'fa-spa',
            image: 'images/products/bathbomb-main.jpg',
            variantImages: {
                'Lavanda': 'images/products/bathbomb-lavanda.jpg',
                'Pepermint': 'images/products/bathbomb-pepermint.jpg',
                'Citrus': 'images/products/bathbomb-citrus.jpg',
                'Kantarion': 'images/products/bathbomb-kantarion.jpg',
                'Lipa + Jasmin': 'images/products/bathbomb-lipa-jasmin.jpg',
                'Ruža + Hibiskus + Šipak': 'images/products/bathbomb-ruza-hibiskus-sipak.jpg',
                'Limun + Zeleni čaj': 'images/products/bathbomb-limun-zeleni-caj.jpg'
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
                'Citrus': 'Vesela citrusna kombinacija narandže, mandarine i grejpa.',
                'Kantarion': 'Biljna kupka inspirisana tradicionalnom njegom kože i tijela.',
                'Lipa + Jasmin': 'Nježna cvjetna kombinacija za miran i elegantan ritual kupanja.',
                'Ruža + Hibiskus + Šipak': 'Bogata cvjetno-voćna nota za posebno spa iskustvo.',
                'Limun + Zeleni čaj': 'Čista, svježa i lagana kombinacija za jutarnje ili dnevno kupanje.'
            },
            limited: true,
            icon: 'fa-circle-notch',
            image: 'images/products/krofna-main.jpg',
            variantImages: {
                'Lavanda': 'images/products/krofna-lavanda.jpg',
                'Pepermint': 'images/products/krofna-pepermint.jpg',
                'Citrus': 'images/products/krofna-citrus.jpg',
                'Kantarion': 'images/products/krofna-kantarion.jpg',
                'Lipa + Jasmin': 'images/products/krofna-lipa-jasmin.jpg',
                'Ruža + Hibiskus + Šipak': 'images/products/krofna-ruza-hibiskus-sipak.jpg',
                'Limun + Zeleni čaj': 'images/products/krofna-limun-zeleni-caj.jpg'
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
            details: 'Mali praktični balzam za njegu usana, ruku, suhih dijelova laktova, pete i drugih osjetljivih zona kože.',
            limited: true,
            icon: 'fa-vial',
            image: 'images/products/balzam-mini.jpg'
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
            image: 'images/products/balzam-main.jpg'
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
                'Kamilica + Neven',
                'Ruža + Hibiskus + Jasmin',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/products/refill-main.jpg',
            variantImages: {
                'Lavanda': 'images/products/refill-lavanda.jpg',
                'Pepermint': 'images/products/refill-pepermint.jpg',
                'Citrus': 'images/products/refill-citrus.jpg',
                'Kamilica + Neven': 'images/products/refill-kamilica-neven.jpg',
                'Ruža + Hibiskus + Jasmin': 'images/products/refill-ruza-hibiskus-jasmin.jpg',
                'Vanila + Kokos': 'images/products/refill-vanila-kokos.jpg'
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
                'Kamilica + Neven',
                'Ruža + Hibiskus + Jasmin',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/products/refill-main.jpg',
            variantImages: {
                'Lavanda': 'images/products/refill-lavanda.jpg',
                'Pepermint': 'images/products/refill-pepermint.jpg',
                'Citrus': 'images/products/refill-citrus.jpg',
                'Kamilica + Neven': 'images/products/refill-kamilica-neven.jpg',
                'Ruža + Hibiskus + Jasmin': 'images/products/refill-ruza-hibiskus-jasmin.jpg',
                'Vanila + Kokos': 'images/products/refill-vanila-kokos.jpg'
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
                'Kamilica + Neven',
                'Ruža + Hibiskus + Jasmin',
                'Vanila + Kokos'
            ],
            mixOption: true,
            limited: true,
            icon: 'fa-leaf',
            image: 'images/products/refill-main.jpg',
            variantImages: {
                'Lavanda': 'images/products/refill-lavanda.jpg',
                'Pepermint': 'images/products/refill-pepermint.jpg',
                'Citrus': 'images/products/refill-citrus.jpg',
                'Kamilica + Neven': 'images/products/refill-kamilica-neven.jpg',
                'Ruža + Hibiskus + Jasmin': 'images/products/refill-ruza-hibiskus-jasmin.jpg',
                'Vanila + Kokos': 'images/products/refill-vanila-kokos.jpg'
            }
        }
    ],

    // ========================================
    // PILINGE
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
            shortDescription: 'Citrusno-biljni piling sa toplim i energičnim karakterom.',
            details: 'Piling inspirisan kombinacijom narandže i ružmarina, idealan za ritual njege i masaže kože.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/products/piling-narandza-ruzmarin.jpg'
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
            image: 'images/products/piling-paculi-zalfija.jpg'
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
            image: 'images/products/piling-hibiskus-ruza-jasmin.jpg'
        },
        {
            id: 'scrub-orange',
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
            image: 'images/products/piling-citrus.jpg'
        },
        {
            id: 'scrub-limun-djumbir',
            name: 'Piling - Limun + Đumbir',
            price: 7,
            size: '100g',
            sizeOptions: [
                { label: '100g', price: 7 },
                { label: '300g', price: 21 }
            ],
            category: 'scrubs',
            description: 'Prirodni piling za njegu, masažu i uklanjanje mrtve kože.',
            shortDescription: 'Topao i osvježavajući piling sa limunskom svježinom.',
            details: 'Kombinacija limuna i đumbira za dinamičan i intenzivniji doživljaj njege.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/products/piling-limun-djumbir.jpg'
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
            image: 'images/products/piling-pepermint.jpg'
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
            image: 'images/products/piling-vanila-kokos.jpg'
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
            details: 'Lavanda daje ovom pilingu mekan i opuštajući karakter, idealan za sporiji večernji self-care ritual.',
            limited: true,
            icon: 'fa-prescription-bottle',
            image: 'images/products/piling-lavanda.jpg'
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
            image: 'images/products/piling-commercial.jpg'
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
            size: '10g',
            category: 'footBaths',
            description: 'Šumeća kupka za stopala sa biljnim notama, namijenjena ritualu njege i osvježenja.',
            shortDescription: 'Pojedinačna kupka za stopala za kućni ritual njege.',
            variants: ['Pepermint', 'Lavanda', 'Citrus'],
            limited: true,
            icon: 'fa-spa',
            image: 'images/products/footbath-single.jpg',
            variantImages: {
                'Pepermint': 'images/products/footbath-pepermint.jpg',
                'Lavanda': 'images/products/footbath-lavanda.jpg',
                'Citrus': 'images/products/footbath-citrus.jpg'
            }
        },
        {
            id: 'foot-package-9',
            name: 'Kupke za Stopala - Paket 9 (8+1 GRATIS)',
            price: 16,
            size: '9 x 10g',
            category: 'footBaths',
            description: 'Paket od 9 kupki za stopala. Platite 8, dobijete 9.',
            shortDescription: 'Paket 9 komada za poklon ili ličnu rutinu njege.',
            variants: ['Pepermint', 'Lavanda', 'Citrus', 'Mix'],
            limited: true,
            icon: 'fa-box',
            package: true,
            image: 'images/products/footbath-pack9.jpg'
        },
        {
            id: 'foot-package-16',
            name: 'Kupke za Stopala - Paket 16 (15+1 GRATIS)',
            price: 30,
            size: '16 x 10g',
            category: 'footBaths',
            description: 'Paket od 16 kupki za stopala. Platite 15, dobijete 16.',
            shortDescription: 'Veći paket za redovnu njegu ili poklon set.',
            variants: ['Pepermint', 'Lavanda', 'Citrus', 'Mix'],
            limited: true,
            icon: 'fa-box',
            package: true,
            image: 'images/products/footbath-pack16.jpg'
        }
    ],

    // ========================================
    // POKLON PAKETI
    // ========================================
    packages: [
        {
            id: 'pkg-alfa',
            name: 'Poklon Paket ALFA',
            price: 15,
            category: 'packages',
            description: 'Paket sadrži: 2x Kupka Bathbomb + 1x Balzam Mini + 1x Kupka za stopala GRATIS',
            contents: '2x Kupka Bathbomb, 1x Balzam Mini, 1x Kupka za stopala gratis',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-alfa.jpg'
        },
        {
            id: 'pkg-beta',
            name: 'Poklon Paket BETA',
            price: 20,
            category: 'packages',
            description: 'Paket sadrži: 5x Kupka za stopala + 1x Kupka Bathbomb + 1x Balzam Mini + 1x Kupka za stopala GRATIS',
            contents: '5x Kupka za stopala, 1x Kupka Bathbomb, 1x Balzam Mini, 1x Kupka za stopala gratis',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-beta.jpg'
        },
        {
            id: 'pkg-gama',
            name: 'Poklon Paket GAMA',
            price: 25,
            category: 'packages',
            description: 'Paket sadrži: 2x Kupka Bathbomb + 100g Refill kupka + 1x Balzam Mini + 1x Kupka za stopala GRATIS',
            contents: '2x Kupka Bathbomb, 100g Refill kupka, 1x Balzam Mini, 1x Kupka za stopala gratis',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-gama.jpg'
        },
        {
            id: 'pkg-delta',
            name: 'Poklon Paket DELTA',
            price: 30,
            category: 'packages',
            description: 'Paket sadrži: 100g Piling po izboru + Washcloth + 1x Kupka Krofna + 2x Kupka za stopala + 1x Balzam Mini',
            contents: '100g Piling, Washcloth, 1x Kupka Krofna, 2x Kupka za stopala, 1x Balzam Mini',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-delta.jpg'
        },
        {
            id: 'pkg-epsilon',
            name: 'Poklon Paket EPSILON',
            price: 35,
            category: 'packages',
            description: 'Paket sadrži: 300g Piling + 1x Kupka Krofna + 1x Balzam Mini',
            contents: '300g Piling, 1x Kupka Krofna, 1x Balzam Mini',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-epsilon.jpg'
        },
        {
            id: 'pkg-zeta',
            name: 'Poklon Paket ZETA',
            price: 40,
            category: 'packages',
            description: 'Paket sadrži: 300g Piling + Washcloth + 1x Kupka Krofna + 1x Balzam Mini',
            contents: '300g Piling, Washcloth, 1x Kupka Krofna, 1x Balzam Mini',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-zeta.jpg'
        },
        {
            id: 'pkg-eta',
            name: 'Poklon Paket ETA',
            price: 45,
            category: 'packages',
            description: 'Paket sadrži: 300g Piling + Washcloth + 2x Kupka Bathbomb + 1x Kupka Krofna',
            contents: '300g Piling, Washcloth, 2x Kupka Bathbomb, 1x Kupka Krofna',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-eta.jpg'
        },
        {
            id: 'pkg-teta',
            name: 'Poklon Paket TETA',
            price: 50,
            category: 'packages',
            description: 'Paket sadrži: 2x 100g Piling + 2x Kupka Krofna + 4x Kupke za stopala + 1x Washcloth + 1x Balzam Mini',
            contents: '2x 100g Piling, 2x Kupka Krofna, 4x Kupke za stopala, 1x Washcloth, 1x Balzam Mini',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-teta.jpg'
        },
        {
            id: 'pkg-kapa',
            name: 'Poklon Paket KAPA',
            price: 70,
            category: 'packages',
            description: 'Paket sadrži: 2x 100g Piling + 1x Balzam 55g + 1x Washcloth + 1x Ceker + 2x Kupka Bathbomb',
            contents: '2x 100g Piling, 1x Balzam 55g, 1x Washcloth, 1x Ceker, 2x Kupka Bathbomb',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-kapa.jpg'
        },
        {
            id: 'pkg-lambda',
            name: 'Poklon Paket LAMBDA',
            price: 75,
            category: 'packages',
            description: 'Paket sadrži: 300g Piling + 1x Kupka Krofna + 1x Ceker + 1x Balzam 55g + 1x Kupka Bathbomb + 1x Washcloth',
            contents: '300g Piling, 1x Kupka Krofna, 1x Ceker, 1x Balzam 55g, 1x Kupka Bathbomb, 1x Washcloth',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-lambda.jpg'
        },
        {
            id: 'pkg-xi',
            name: 'Poklon Paket XI',
            price: 80,
            category: 'packages',
            description: 'Paket sadrži: 300g Piling + 3x Kupka Bathbomb + 1x Balzam 55g + 1x Kupka Krofna + 1x Ceker',
            contents: '300g Piling, 3x Kupka Bathbomb, 1x Balzam 55g, 1x Kupka Krofna, 1x Ceker',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-xi.jpg'
        },
        {
            id: 'pkg-pi',
            name: 'Poklon Paket PI',
            price: 100,
            category: 'packages',
            description: 'Paket sadrži: 2x 300g Piling + 4x Kupke za stopala + 1x Ceker + 1x Washcloth + 1x Balzam Mini + 1x Balzam 55g + 1x Kupka Bathbomb',
            contents: '2x 300g Piling, 4x Kupke za stopala, 1x Ceker, 1x Washcloth, 1x Balzam Mini, 1x Balzam 55g, 1x Kupka Bathbomb',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-pi.jpg'
        },
        {
            id: 'pkg-sigma',
            name: 'Poklon Paket SIGMA',
            price: 100,
            category: 'packages',
            description: 'Paket sadrži: 5x Kupka Bathbomb + 1x Balzam Mini + 1x Balzam 55g + 1x Washcloth + 200g Refill kupka + 3x 100g Piling + 1x Kupka Krofna',
            contents: '5x Kupka Bathbomb, 1x Balzam Mini, 1x Balzam 55g, 1x Washcloth, 200g Refill kupka, 3x 100g Piling, 1x Kupka Krofna',
            icon: 'fa-gift',
            limited: true,
            image: 'images/products/package-sigma.jpg'
        },
        {
            id: 'pkg-custom',
            name: 'Prilagođeni Paket (100+ KM)',
            price: 100,
            category: 'packages',
            description: 'Za pakete preko 100 KM birate proizvode po želji i kreirate svoj Bossonoga paket.',
            contents: 'Prilagođeno prema vašim željama',
            icon: 'fa-star',
            limited: false,
            custom: true,
            image: 'images/products/package-custom.jpg'
        }
    ],

    // ========================================
    // DJEČIJA LINIJA
    // ========================================
    kidsLine: [
        {
            id: 'kids-duck',
            name: '🦆 Kupka sa Patkicom',
            price: 5,
            category: 'kidsLine',
            description: 'Vesela kupka za djecu sa skrivenom patkicom. Šarena, razigrana i pažljivo osmišljena za male rituale kupanja.',
            shortDescription: 'Šarena dječija kupka sa patkicom kao iznenađenjem.',
            details: 'Kupka za djecu sa nježnijim karakterom i zabavnim elementom iznenađenja. Patkice i dječija linija mogu se kasnije proširivati kroz igrice, nagrade i kolekcionarske serije.',
            variants: ['Žuta', 'Plava', 'Roze', 'Zelena', 'Ljubičasta'],
            limited: true,
            icon: 'fa-duck',
            loyalty: 'Skupi više patkica različitih boja i prati naredna Bossonoga iznenađenja.',
            image: 'images/products/kids-patkice.jpg',
            variantImages: {
                'Žuta': 'images/products/kids-patkica-zuta.jpg',
                'Plava': 'images/products/kids-patkica-plava.jpg',
                'Roze': 'images/products/kids-patkica-roze.jpg',
                'Zelena': 'images/products/kids-patkica-zelena.jpg',
                'Ljubičasta': 'images/products/kids-patkica-ljubicasta.jpg'
            }
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
            image: 'images/products/ceker-bossonoga.jpg'
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
            image: 'images/products/ceker-sacu.jpg'
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
            image: 'images/products/ceker-odmori.jpg'
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
            image: 'images/products/ceker-patkica.jpg'
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
            image: 'images/products/ceker-baba.jpg'
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
            image: 'images/products/washcloth-rucni-rad.jpg'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
