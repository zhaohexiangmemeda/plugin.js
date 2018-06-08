import { html as render, query } from '@pluginjs/dom'
import html from './index.html'
import fontPicker from '@pluginjs/font-picker'
import WebFont from 'webfontloader'
const activated = {
  google: ['Lora', 'PT Serif', 'Roboto'],
  custom: ['Verdana', 'Comic Sans MS'],
  system: ['System']
}
const data = {
  system: {
    title: 'System',
    icon: 'icon-desktop',
    fonts: {
      'Sans Serif': [
        'Arial',
        'Calibri',
        'Century',
        'Tahoma',
        'Trebuchet',
        'Verdana',
        'System Sans'
      ],
      Serif: ['Georgia', 'Palatino', 'Times'],
      Monospaced: ['Courier'],
      Chinese: ['简宋', '繁宋', '简黑', '繁黑', '简楷', '繁楷', '仿宋']
    },
    load($item, fontFamily) {
      const fonts = {
        Arial:
          '"Arial", "Helvetica Neue", "Helvetica", "Nimbus Sans L", "Liberation Sans", "Arimo", "sans-serif"',
        Calibri:
          '"Calibri", "Candara", "Gill Sans", "Gill Sans MT", "DejaVu Sans", "Verdana", "Geneva", "sans-serif"',
        Century:
          '"Century Gothic", "Apple Gothic", "AppleGothic", "URW Gothic L", "Avantgarde", "DejaVu Sans", "Tahoma", "sans-serif"',
        Tahoma:
          '"Tahoma", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Verdana", "Geneva", "sans-serif"',
        Trebuchet:
          '"Trebuchet MS", "Futura", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Tahoma", "sans-serif"',
        Verdana: '"Verdana", "Geneva", "DejaVu Sans", "sans-serif"',
        'System Sans':
          '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"',
        // Serif
        Georgia:
          '"Georgia", "Palatino", "Palatino Linotype", "Palatino LT STD", "URW Palladio L", "Book Antiqua", "DejaVu Serif", "serif"',
        Palatino:
          '"Palatino", "Palatino Linotype", "Palatino LT STD", "URW Palladio L", "Book Antiqua", "DejaVu Serif", "Georgia", "serif"',
        Times:
          '"Times New Roman", "TimesNewRoman", "DejaVu Serif", "Liberation Serif", "Tinos", "Times", "serif"',
        // Monospaced
        Courier:
          '"Courier New", "Courier", "Courier 10 Pitch", "Liberation Mono", "Nimbus Mono L", "Cousine", "monospace"',
        // 宋体 serif
        简宋:
          '"Songti SC", "STSong", "华文宋体", "宋体", "SimSun", "新宋体", "NSimSun", "AR PL New Sung", "AR PL SungtiL GB", "serif"',
        繁宋:
          '"LiSong Pro", "Apple LiSung", "新細明體", "PMingLiU", "MingLiU", "AR PL Mingti2L", "TW-Sung", "serif"',
        // 黑体 sans-serif
        简黑:
          '"Heiti SC", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", "SimHei", "黑体", "STHeiti Light", "STXihei", "华文细黑", "STHeiti", "华文黑体", "WenQuanYi Zen Hei", "sans-serif"',
        繁黑: '"Heiti TC", "Microsoft JhengHei", "微軟正黑體", "sans-serif"',
        // 楷体
        简楷:
          '"Kaiti SC", "KaiTi", "楷体", "STKaiti", "华文楷体", "Kai", "AR PL UKai CN", "serif"',
        繁楷:
          '"BiauKai", "DFKai-SB", "AR PL KaitiM", "AR PL KaitiM GB", "AR PL UKai HK", "AR PL UKai TW", "TW-Kai", "serif"',
        // 仿宋
        仿宋:
          '"FangSong", "Fang Song", "仿宋", "STFangSong", "华文仿宋", "serif"'
      }

      $item.style.fontFamily = fonts[fontFamily]
    }
  },
  google: {
    title: 'Google',
    icon: 'icon-google',
    fonts: {
      'sans-serif': [
        'ABeeZee',
        'Abel',
        'Aclonica',
        'Acme',
        'Actor',
        'Advent Pro',
        'Aldrich',
        'Alef',
        'Alegreya Sans',
        'Alegreya Sans SC',
        'Allerta',
        'Allerta Stencil',
        'Amaranth',
        'Amiko',
        'Anaheim',
        'Andika',
        'Antic',
        'Anton',
        'Archivo Black',
        'Archivo Narrow',
        'Arimo',
        'Armata',
        'Arsenal',
        'Arya',
        'Asap',
        'Assistant',
        'Asul',
        'Athiti',
        'Average Sans',
        'Basic',
        'Belleza',
        'BenchNine',
        'Biryani',
        'Bubbler One',
        'Cabin',
        'Cabin Condensed',
        'Cagliostro',
        'Cairo',
        'Cambay',
        'Candal',
        'Cantarell',
        'Cantora One',
        'Capriola',
        'Carme',
        'Carrois Gothic',
        'Carrois Gothic SC',
        'Catamaran',
        'Changa',
        'Chathura',
        'Chau Philomene One',
        'Chivo',
        'Coda Caption',
        'Convergence',
        'Cuprum',
        'Days One',
        'Denk One',
        'Dhurjati',
        'Didact Gothic',
        'Doppio One',
        'Dorsa',
        'Dosis',
        'Droid Sans',
        'Duru Sans',
        'Economica',
        'Ek Mukta',
        'El Messiri',
        'Electrolize',
        'Englebert',
        'Exo',
        'Exo 2',
        'Federo',
        'Fira Sans',
        'Fira Sans Condensed',
        'Fira Sans Extra Condensed',
        'Fjalla One',
        'Francois One',
        'Frank Ruhl Libre',
        'Fresca',
        'GFS Neohellenic',
        'Gafata',
        'Galdeano',
        'Geo',
        'Gidugu',
        'Gudea',
        'Hammersmith One',
        'Harmattan',
        'Heebo',
        'Hind',
        'Hind Guntur',
        'Hind Madurai',
        'Hind Siliguri',
        'Hind Vadodara',
        'Homenaje',
        'Imprima',
        'Inder',
        'Istok Web',
        'Jaldi',
        'Jockey One',
        'Josefin Sans',
        'Julius Sans One',
        'Jura',
        'Kanit',
        'Kantumruy',
        'Karla',
        'Khand',
        'Khula',
        'Kite One',
        'Krona One',
        'Lato',
        'Lekton',
        'Libre Franklin',
        'Mada',
        'Magra',
        'Mako',
        'Mallanna',
        'Mandali',
        'Marmelad',
        'Martel Sans',
        'Marvel',
        'Maven Pro',
        'Meera Inimai',
        'Merriweather Sans',
        'Metrophobic',
        'Michroma',
        'Miriam Libre',
        'Mitr',
        'Molengo',
        'Monda',
        'Montserrat',
        'Montserrat Alternates',
        'Montserrat Subrayada',
        'Mouse Memoirs',
        'Mukta Vaani',
        'Muli',
        'NTR',
        'News Cycle',
        'Nobile',
        'Noto Sans',
        'Numans',
        'Nunito',
        'Nunito Sans',
        'Open Sans',
        'Open Sans Condensed',
        'Orbitron',
        'Orienta',
        'Oswald',
        'Overpass',
        'Oxygen',
        'PT Sans',
        'PT Sans Caption',
        'PT Sans Narrow',
        'Padauk',
        'Palanquin',
        'Palanquin Dark',
        'Pathway Gothic One',
        'Pattaya',
        'Pavanam',
        'Paytone One',
        'Philosopher',
        'Play',
        'Pontano Sans',
        'Poppins',
        'Port Lligat Sans',
        'Pragati Narrow',
        'Prompt',
        'Proza Libre',
        'Puritan',
        'Quantico',
        'Quattrocento Sans',
        'Questrial',
        'Quicksand',
        'Rajdhani',
        'Raleway',
        'Ramabhadra',
        'Rambla',
        'Rationale',
        'Reem Kufi',
        'Roboto',
        'Roboto Condensed',
        'Ropa Sans',
        'Rosario',
        'Rubik',
        'Rubik Mono One',
        'Rubik One',
        'Ruda',
        'Ruluko',
        'Rum Raisin',
        'Russo One',
        'Sarala',
        'Sarpanch',
        'Scada',
        'Secular One',
        'Seymour One',
        'Shanti',
        'Share Tech',
        'Signika',
        'Signika Negative',
        'Sintony',
        'Six Caps',
        'Snippet',
        'Source Sans Pro',
        'Spinnaker',
        'Strait',
        'Syncopate',
        'Tauri',
        'Teko',
        'Telex',
        'Tenali Ramakrishna',
        'Tenor Sans',
        'Text Me One',
        'Timmana',
        'Titillium Web',
        'Ubuntu',
        'Ubuntu Condensed',
        'Varela',
        'Varela Round',
        'Viga',
        'Voltaire',
        'Wendy One',
        'Wire One',
        'Work Sans',
        'Yanone Kaffeesatz',
        'Yantramanav'
      ],
      serif: [
        'Abhaya Libre',
        'Adamina',
        'Alegreya',
        'Alegreya SC',
        'Alice',
        'Alike',
        'Alike Angular',
        'Almendra',
        'Almendra SC',
        'Amethysta',
        'Amiri',
        'Andada',
        'Antic Didone',
        'Antic Slab',
        'Arapey',
        'Arbutus Slab',
        'Aref Ruqaa',
        'Artifika',
        'Arvo',
        'Asar',
        'Average',
        'Balthazar',
        'Belgrano',
        'Bentham',
        'BioRhyme',
        'BioRhyme Expanded',
        'Bitter',
        'Brawler',
        'Bree Serif',
        'Buenard',
        'Cambo',
        'Cantata One',
        'Cardo',
        'Caudex',
        'Cinzel',
        'Copse',
        'Cormorant',
        'Cormorant Garamond',
        'Cormorant Infant',
        'Cormorant SC',
        'Cormorant Unicase',
        'Cormorant Upright',
        'Coustard',
        'Crete Round',
        'Crimson Text',
        'Cutive',
        'David Libre',
        'Della Respira',
        'Domine',
        'Donegal One',
        'Droid Serif',
        'EB Garamond',
        'Eczar',
        'Enriqueta',
        'Esteban',
        'Fanwood Text',
        'Fasthand',
        'Fauna One',
        'Fenix',
        'Fjord One',
        'GFS Didot',
        'Gabriela',
        'Gentium Basic',
        'Gentium Book Basic',
        'Gilda Display',
        'Glegoo',
        'Goudy Bookletter 1911',
        'Gurajada',
        'Habibi',
        'Halant',
        'Hanuman',
        'Headland One',
        'Holtwood One SC',
        'IM Fell DW Pica',
        'IM Fell DW Pica SC',
        'IM Fell Double Pica',
        'IM Fell Double Pica SC',
        'IM Fell English',
        'IM Fell English SC',
        'IM Fell French Canon',
        'IM Fell French Canon SC',
        'IM Fell Great Primer',
        'IM Fell Great Primer SC',
        'Inika',
        'Inknut Antiqua',
        'Italiana',
        'Jacques Francois',
        'Josefin Slab',
        'Judson',
        'Junge',
        'Kadwa',
        'Kameron',
        'Karma',
        'Kotta One',
        'Kreon',
        'Kurale',
        'Laila',
        'Ledger',
        'Libre Baskerville',
        'Linden Hill',
        'Lora',
        'Lusitana',
        'Lustria',
        'Maitree',
        'Marcellus',
        'Marcellus SC',
        'Marko One',
        'Martel',
        'Mate',
        'Mate SC',
        'Merriweather',
        'Montaga',
        'Neuton',
        'Nokora',
        'Noticia Text',
        'Noto Serif',
        'Old Standard TT',
        'Oranienbaum',
        'Ovo',
        'PT Serif',
        'PT Serif Caption',
        'Peddana',
        'Petrona',
        'Playfair Display',
        'Playfair Display SC',
        'Podkova',
        'Poly',
        'Port Lligat Slab',
        'Prata',
        'Pridi',
        'Prociono',
        'Quando',
        'Quattrocento',
        'Radley',
        'Ramaraja',
        'Rasa',
        'Rhodium Libre',
        'Roboto Slab',
        'Rokkitt',
        'Rosarivo',
        'Rozha One',
        'Rufina',
        'Sahitya',
        'Sanchez',
        'Scheherazade',
        'Scope One',
        'Slabo 13px',
        'Slabo 27px',
        'Sorts Mill Goudy',
        'Source Serif Pro',
        'Sree Krushnadevaraya',
        'Stoke',
        'Suez One',
        'Sumana',
        'Sura',
        'Suranna',
        'Suravaram',
        'Taviraj',
        'Tienne',
        'Tinos',
        'Trirong',
        'Trocchi',
        'Trykker',
        'Ultra',
        'Unna',
        'Vesper Libre',
        'Vidaloka',
        'Volkhov',
        'Vollkorn',
        'Yrsa'
      ],
      display: [
        'Abril Fatface',
        'Akronim',
        'Alfa Slab One',
        'Allan',
        'Almendra Display',
        'Amarante',
        'Amatica SC',
        'Angkor',
        'Arbutus',
        'Arima Madurai',
        'Asset',
        'Astloch',
        'Atma',
        'Atomic Age',
        'Aubrey',
        'Audiowide',
        'Autour One',
        'Averia Gruesa Libre',
        'Averia Libre',
        'Averia Sans Libre',
        'Averia Serif Libre',
        'Baloo',
        'Baloo Bhai',
        'Baloo Bhaina',
        'Baloo Chettan',
        'Baloo Da',
        'Baloo Paaji',
        'Baloo Tamma',
        'Baloo Thambi',
        'Bangers',
        'Battambang',
        'Baumans',
        'Bayon',
        'Bevan',
        'Bigelow Rules',
        'Bigshot One',
        'Black Ops One',
        'Bokor',
        'Boogaloo',
        'Bowlby One',
        'Bowlby One SC',
        'Bubblegum Sans',
        'Buda',
        'Bungee',
        'Bungee Hairline',
        'Bungee Inline',
        'Bungee Outline',
        'Bungee Shade',
        'Butcherman',
        'Cabin Sketch',
        'Caesar Dressing',
        'Carter One',
        'Ceviche One',
        'Changa One',
        'Chango',
        'Chela One',
        'Chelsea Market',
        'Chenla',
        'Cherry Cream Soda',
        'Cherry Swash',
        'Chewy',
        'Chicle',
        'Chonburi',
        'Cinzel Decorative',
        'Coda',
        'Codystar',
        'Coiny',
        'Combo',
        'Comfortaa',
        'Concert One',
        'Content',
        'Contrail One',
        'Corben',
        'Creepster',
        'Croissant One',
        'Crushed',
        'Dangrek',
        'Diplomata',
        'Diplomata SC',
        'Dynalight',
        'Eater',
        'Elsie',
        'Elsie Swash Caps',
        'Emblema One',
        'Emilys Candy',
        'Erica One',
        'Ewert',
        'Expletus Sans',
        'Farsan',
        'Fascinate',
        'Fascinate Inline',
        'Faster One',
        'Federant',
        'Finger Paint',
        'Flamenco',
        'Flavors',
        'Fontdiner Swanky',
        'Forum',
        'Freckle Face',
        'Fredericka the Great',
        'Fredoka One',
        'Freehand',
        'Frijole',
        'Fruktur',
        'Fugaz One',
        'Galada',
        'Galindo',
        'Geostar',
        'Geostar Fill',
        'Germania One',
        'Glass Antiqua',
        'Goblin One',
        'Gorditas',
        'Graduate',
        'Gravitas One',
        'Griffy',
        'Gruppo',
        'Hanalei',
        'Hanalei Fill',
        'Happy Monkey',
        'Henny Penny',
        'Iceberg',
        'Iceland',
        'Irish Grover',
        'Jacques Francois Shadow',
        'Jolly Lodger',
        'Jomhuria',
        'Joti One',
        'Katibeh',
        'Kavoon',
        'Kdam Thmor',
        'Keania One',
        'Kelly Slab',
        'Kenia',
        'Khmer',
        'Knewave',
        'Koulen',
        'Kranky',
        'Kumar One',
        'Kumar One Outline',
        'Lalezar',
        'Lancelot',
        'Lemon',
        'Lemonada',
        'Life Savers',
        'Lilita One',
        'Lily Script One',
        'Limelight',
        'Lobster',
        'Lobster Two',
        'Londrina Outline',
        'Londrina Shadow',
        'Londrina Sketch',
        'Londrina Solid',
        'Love Ya Like A Sister',
        'Luckiest Guy',
        'Macondo',
        'Macondo Swash Caps',
        'Maiden Orange',
        'Margarine',
        'McLaren',
        'MedievalSharp',
        'Medula One',
        'Megrim',
        'Metal',
        'Metal Mania',
        'Metamorphous',
        'Milonga',
        'Miltonian',
        'Miltonian Tattoo',
        'Miniver',
        'Mirza',
        'Modak',
        'Modern Antiqua',
        'Mogra',
        'Monofett',
        'Monoton',
        'Moul',
        'Moulpali',
        'Mountains of Christmas',
        'Mystery Quest',
        'New Rocker',
        'Nixie One',
        'Nosifer',
        'Nova Cut',
        'Nova Flat',
        'Nova Oval',
        'Nova Round',
        'Nova Script',
        'Nova Slim',
        'Nova Square',
        'Odor Mean Chey',
        'Offside',
        'Oldenburg',
        'Oleo Script',
        'Oleo Script Swash Caps',
        'Oregano',
        'Original Surfer',
        'Overlock',
        'Overlock SC',
        'Paprika',
        'Passero One',
        'Passion One',
        'Patua One',
        'Peralta',
        'Piedra',
        'Pirata One',
        'Plaster',
        'Playball',
        'Poiret One',
        'Poller One',
        'Pompiere',
        'Preahvihear',
        'Press Start 2P',
        'Prosto One',
        'Purple Purse',
        'Racing Sans One',
        'Rakkas',
        'Raleway Dots',
        'Rammetto One',
        'Ranchers',
        'Ranga',
        'Ravi Prakash',
        'Revalia',
        'Ribeye',
        'Ribeye Marrow',
        'Righteous',
        'Risque',
        'Ruslan Display',
        'Rye',
        'Sail',
        'Salsa',
        'Sancreek',
        'Sansita One',
        'Sarina',
        'Seaweed Script',
        'Sevillana',
        'Share',
        'Shojumaru',
        'Shrikhand',
        'Siemreap',
        'Sigmar One',
        'Simonetta',
        'Sirin Stencil',
        'Skranji',
        'Slackey',
        'Smokum',
        'Smythe',
        'Sniglet',
        'Snowburst One',
        'Sofadi One',
        'Sonsie One',
        'Special Elite',
        'Spicy Rice',
        'Spirax',
        'Squada One',
        'Stalinist One',
        'Stardos Stencil',
        'Stint Ultra Condensed',
        'Stint Ultra Expanded',
        'Supermercado One',
        'Suwannaphum',
        'Taprom',
        'Titan One',
        'Trade Winds',
        'Trochut',
        'Tulpen One',
        'Uncial Antiqua',
        'Underdog',
        'Unica One',
        'UnifrakturCook',
        'UnifrakturMaguntia',
        'Unkempt',
        'Unlock',
        'Vampiro One',
        'Vast Shadow',
        'Voces',
        'Wallpoet',
        'Warnes',
        'Wellfleet',
        'Yatra One',
        'Yeseva One'
      ],
      handwriting: [
        'Aguafina Script',
        'Aladin',
        'Alex Brush',
        'Allura',
        'Amatic SC',
        'Amita',
        'Annie Use Your Telescope',
        'Architects Daughter',
        'Arizonia',
        'Bad Script',
        'Berkshire Swash',
        'Bilbo',
        'Bilbo Swash Caps',
        'Bonbon',
        'Butterfly Kids',
        'Calligraffitti',
        'Caveat',
        'Caveat Brush',
        'Cedarville Cursive',
        'Clicker Script',
        'Coming Soon',
        'Condiment',
        'Cookie',
        'Courgette',
        'Covered By Your Grace',
        'Crafty Girls',
        'Damion',
        'Dancing Script',
        'Dawning of a New Day',
        'Dekko',
        'Delius',
        'Delius Swash Caps',
        'Delius Unicase',
        'Devonshire',
        'Dr Sugiyama',
        'Eagle Lake',
        'Engagement',
        'Euphoria Script',
        'Felipa',
        'Fondamento',
        'Give You Glory',
        'Gloria Hallelujah',
        'Gochi Hand',
        'Grand Hotel',
        'Great Vibes',
        'Handlee',
        'Herr Von Muellerhoff',
        'Homemade Apple',
        'Indie Flower',
        'Italianno',
        'Itim',
        'Jim Nightshade',
        'Julee',
        'Just Another Hand',
        'Just Me Again Down Here',
        'Kalam',
        'Kaushan Script',
        'Kavivanar',
        'Kristi',
        'La Belle Aurore',
        'Lakki Reddy',
        'Lateef',
        'League Script',
        'Leckerli One',
        'Loved by the King',
        'Lovers Quarrel',
        'Marck Script',
        'Meddon',
        'Meie Script',
        'Merienda',
        'Merienda One',
        'Miss Fajardose',
        'Molle',
        'Monsieur La Doulaise',
        'Montez',
        'Mr Bedfort',
        'Mr Dafoe',
        'Mr De Haviland',
        'Mrs Saint Delafield',
        'Mrs Sheppards',
        'Neucha',
        'Niconne',
        'Norican',
        'Nothing You Could Do',
        'Over the Rainbow',
        'Pacifico',
        'Parisienne',
        'Patrick Hand',
        'Patrick Hand SC',
        'Permanent Marker',
        'Petit Formal Script',
        'Pinyon Script',
        'Princess Sofia',
        'Quintessential',
        'Qwigley',
        'Rancho',
        'Redressed',
        'Reenie Beanie',
        'Rochester',
        'Rock Salt',
        'Romanesco',
        'Rouge Script',
        'Ruge Boogie',
        'Ruthie',
        'Sacramento',
        'Satisfy',
        'Schoolbell',
        'Shadows Into Light',
        'Shadows Into Light Two',
        'Short Stack',
        'Sofia',
        'Sriracha',
        'Stalemate',
        'Sue Ellen Francisco',
        'Sunshiney',
        'Swanky and Moo Moo',
        'Tangerine',
        'The Girl Next Door',
        'Tillana',
        'Vibur',
        'Waiting for the Sunrise',
        'Walter Turncoat',
        'Yellowtail',
        'Yesteryear',
        'Zeyada'
      ],
      monospace: [
        'Anonymous Pro',
        'Cousine',
        'Cutive Mono',
        'Droid Sans Mono',
        'Fira Mono',
        'Inconsolata',
        'Nova Mono',
        'Overpass Mono',
        'Oxygen Mono',
        'PT Mono',
        'Roboto Mono',
        'Share Tech Mono',
        'Source Code Pro',
        'Space Mono',
        'Ubuntu Mono',
        'VT323'
      ]
    },
    load($item, fontFamily, text) {
      WebFont.load({
        google: {
          families: [fontFamily],
          text
        }
      })

      $item.style.fontFamily = fontFamily
    }
  },
  custom: {
    title: 'Custom',
    icon: 'icon-upload',
    fonts: ['hello', 'world'],
    load() {
      console.log('custom load')
    }
  }
}

const element = query('.font-picker-locale', render(html, query('#locale')))
fontPicker.registerSources(data)
fontPicker.setActivated(activated)
fontPicker.of(element, {})
