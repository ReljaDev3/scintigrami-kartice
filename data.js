// Automatski generisano iz PDF-a: Primeri opisivanja scintigrama
const CARDS = [
  {
    "id": 1,
    "img": "images/card-01.png",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O 4)",
    "mehanizam": "Pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "Velika zona u desnom tireoidnom režnju koja ne vezuje (nakuplja, akumulira) RF"
  },
  {
    "id": 2,
    "img": "images/card-02.png",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O4)",
    "mehanizam": "Pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "Velika zona u levom tireoidnom režnju koja intenzivno vezuje (nakuplja, akumulira) RF: hiperfunkcijski čvor u levom režnju"
  },
  {
    "id": 3,
    "img": "images/card-03.png",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O 4)",
    "mehanizam": "Pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "zona projekciji baze jezika koja intenzivno vezuje (nakuplja, akumulira) RF: ektopično funkcijsko tkivo tireoideje"
  },
  {
    "id": 4,
    "img": "images/card-04.png",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija novorođenčeta",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O 4)",
    "mehanizam": "pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "ne uočava se nakupljanje RF u tireoidnom regioonu vrata: ne prikazuje se funkcijsko tkivo štitaste žlezde"
  },
  {
    "id": 5,
    "img": "images/card-05.jpg",
    "naziv": "ventrikulografija - dinamska scintigrafija srčane funkcije",
    "radiofarmak": "eritrociti obeleženi 99m Tc",
    "mehanizam": "eritrociti se nalaze u vaskularnom prostoru srčanih šupljina",
    "nalaz": "dinamska kriva i vrednost EF (ejekcione frakcije 71%) ukazuju na normalnu srčanu funkciju"
  },
  {
    "id": 6,
    "img": "images/card-06.jpg",
    "naziv": "ventrikulografija - dinamska scintigrafija srčane funkcije",
    "radiofarmak": "eritrociti obeleženi 99m Tc",
    "mehanizam": "eritrociti se nalaze u vaskularnom prostoru srčanih šupljina",
    "nalaz": "dinamska kriva i vrednost EF (ejekcione frakcije 37%) ukazuju na izrazito smanjenu kontraktilnu moć miokarda"
  },
  {
    "id": 7,
    "img": "images/card-07.jpg",
    "naziv": "SPECT modalitet ventrikulografije - dinamske scintigrafija srčane funkcije",
    "radiofarmak": "eritrociti obeleženi 99m Tc",
    "mehanizam": "eritrociti se nalaze u vaskularnom prostoru srčanih šupljina",
    "nalaz": "dinamska kriva i vrednost EF (ejekcione frakcije 18 %) ukazuju na izrazito smanjenu kontraktilnu moć miokarda"
  },
  {
    "id": 8,
    "img": "images/card-08.png",
    "naziv": "SPECT modalitet perfuzione scintigrafije miokarda - statičke scintigrafija prokrvljenosti miokarda",
    "radiofarmak": "99m Tc MIBI (metoksiizobenzilizonitril)",
    "mehanizam": "MIBI je lipofilna supstanca koja se nakuplja u mitohondrijama vijabilnih miocita",
    "nalaz": "difuzno ravnomerna i intenzivna akumulacija MIBI u srčanom mišiću"
  },
  {
    "id": 9,
    "img": "images/card-09.png",
    "naziv": "SPECT modalitet perfuzione scintigrafije miokarda - statičke scintigrafija prokrvljenosti miokarda",
    "radiofarmak": "99m Tc MIBI (metoksiizobenzilizonitril)",
    "mehanizam": "MIBI je lipofilna supstanca koja se nakuplja u mitohondrijama vijabilnih miocita",
    "nalaz": "veliki perfuzioni defekt u donjem zidu leve komore (ne uočava se nakupljanje MIBI)"
  },
  {
    "id": 10,
    "img": "images/card-10.png",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O 4)",
    "mehanizam": "Pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "Brojne zone koje intenzivno vezuju RF u uvećanoj tireoideji; ostalo tkivo št. žlezde je potpuno suprimovane aktivnosti- brojni hiperfunkcijski čvorovi u tireoidej"
  },
  {
    "id": 11,
    "img": "images/card-11.jpg",
    "naziv": "Scintigrafija štitaste žlezde- statička scintigrafija",
    "radiofarmak": "natrijumpertehnetat (Na 99m Tc O 4)",
    "mehanizam": "Pertehnetatni jon se slično jodidnom jonu nakuplja aktivnim transportom u funkcijskom tireocitu",
    "nalaz": "ravnomerna i intenzivno nakupljanje RF u simetričnoj tireoideji- normalan scintigram tireoideje"
  },
  {
    "id": 12,
    "img": "images/card-12.png",
    "naziv": "Scintigrafija celog tela pomoću 99m Tc (V) DMSA statička scintigrafija kod bolesnika sa medulskim karcinomom tireoideje: ciljani scintigrami",
    "radiofarmak": "petavalentna DMSA (dimerkaptosukcinilna kiselina 99m Tc (V) DMSA)",
    "mehanizam": "petavalentna DMSA se vezuje za kalcitininske ćelije medulskog karcinoma tireoideje",
    "nalaz": "U kaudalnom delu lože desnog tireodnog režnja uočava se zona intenzivne akumulacije RF"
  },
  {
    "id": 13,
    "img": "images/card-13.jpg",
    "naziv": "18 FDG PET/CT statička scintigrafija kod bolesnika sa karcinomom tireoideje",
    "radiofarmak": "18 FDG (fluorodeoksiglukoza)",
    "mehanizam": "metaboločki aktivne ćelije je preuzimaju aktivnim transportom pomoću GLUT",
    "nalaz": "u loži levog tireoidnog režnja se prikazuje zona intenzivnog nakupljanja RF koji ukazuje na povećan metabolizam u tom tkivu"
  },
  {
    "id": 14,
    "img": "images/card-14.jpg",
    "naziv": "18 FDG PET/CT statička scintigrafija kod bolesnika sa malignim tumorom",
    "radiofarmak": "18 FDG (fluorodeoksiglukoza)",
    "mehanizam": "metaboločki aktivne ćelije je preuzimaju aktivnim transportom pomoću GLUT",
    "nalaz": "u gornjem medijastinumu s leve strane se prikazuje zona intenzivnog nakupljanja RF koji ukazuje na povećan metabolizam u tom tkivu"
  },
  {
    "id": 15,
    "img": "images/card-15.jpg",
    "naziv": "Scintigrafija celog tela pomoću Na 131 J statička scintigrafija kod bolesnika sa papilarnim karcinomom tireoideje: celo telo (whole body scan: WBS)",
    "radiofarmak": "Na 131 J (natrijum jodid obeležen jodom 131)",
    "mehanizam": "Jodidni jon se putem simportera aktivnim transportom prenosi u tireoicite",
    "nalaz": "A. u tireoidnom regionu vrata se prikazuju tri zone intenzivnog (povećanog) nakupljanja RF. B. brojne zone povećanog nakupljanja RF u plućima"
  },
  {
    "id": 16,
    "img": "images/card-16.png",
    "naziv": "Scintigrafija motiliteta jednjaka: dinamska scintigrafija kod bolesnika sa otežanim gutanjem ili sa gastroezofagealnim refluksom",
    "radiofarmak": "bolus hrane obeležene 99m Tc koloidom ili DTPA",
    "mehanizam": "RF ostaje u hrani koja se zadržava u lumenu jednjaka",
    "nalaz": "A. u distalnim partijama jednjaka dugo se zadržava RF. B. Dinamska kriva ukazuje da se RF dugo zadržava u donjim trećinama jednjaka"
  },
  {
    "id": 17,
    "img": "images/card-17.jpg",
    "naziv": "Scintigrafija intestinumskog krvarenja - Mekelov divertikulum: statička scintigrafija",
    "radiofarmak": "eritrociti obeleženi 99m Tc",
    "mehanizam": "RF usled krvarenja izlazi (ekstravazacija) iz vaskularnog prostora u kojem se nalaze eritrociti",
    "nalaz": "Paraumbilikalno desno zona povećanog nakupljanja RF istog intenziteta kao i želudac"
  },
  {
    "id": 18,
    "img": "images/card-18.jpg",
    "naziv": "SPECT modalitet kod hemangioma jetre: statička scintigrafija jetre",
    "radiofarmak": "eritrociti obeleženi 99m Tc",
    "mehanizam": "RF se zadržava u ograničenom vaskularnom prostoru hemangioma u jetri",
    "nalaz": "povećano nakupljanje RF u levom režnju jetre"
  },
  {
    "id": 19,
    "img": "images/card-19.jpg",
    "naziv": "Planarna hepatobilijarna scintigrafija: dinamska scintigrafija jetre",
    "radiofarmak": "99m Tc HIDA (derivati iminidisirćetne kiseline BrIDA, DISIDA....)",
    "mehanizam": "RF preuzimaju hepatociti aktivnim transportom i izlučuju ga putem žuči",
    "nalaz": "Homogeno nakupljanje RF u jetri uz brzo „ispiranje“ iz nje: normalan nalaz dinamske hepetaobilijarne scintigrafije"
  },
  {
    "id": 20,
    "img": "images/card-20.jpg",
    "naziv": "Planarna hepatobilijarna scintigrafija: dinamska scintigrafija jetre",
    "radiofarmak": "99m Tc HIDA (derivati iminidisirćetne kiseline BrIDA, DISIDA....)",
    "mehanizam": "RF preuzimaju hepatociti aktivnim transportom i izlučuju ga putem žuči",
    "nalaz": "Homogeno nakupljanje RF u jetri bez „ispiranja“ iz jetre: RF se i posle 60 minuta pa i 24 sata zadržava u jetri."
  },
  {
    "id": 21,
    "img": "images/card-21.jpg",
    "naziv": "Dinamska scintigrafija bubrega radiorenografija: dinamska scintigrafija bubrega",
    "radiofarmak": "99m Tc DTPA (dietiltriaminopentasirćetna kiselina, MAG 3...)",
    "mehanizam": "RF se filtrira u glomerulu nefrona",
    "nalaz": "Homogeno nakupljanje RF na zbirnom scintigramu bubrega; renogramska kriva ukazuje na adekvatnu akumulaciju, dobar parenhimski tranzit i brzu eliminaciju RF iz bubrega"
  },
  {
    "id": 22,
    "img": "images/card-22.jpg",
    "naziv": "Dinamska scintigrafija bubrega radiorenografija: dinamska scintigrafija bubrega; kriva vreme/aktivnost",
    "radiofarmak": "99m Tc DTPA (dietiltriaminopentasirćetna kiselina, MAG 3...)",
    "mehanizam": "RF se filtrira u glomerulu nefrona",
    "nalaz": "Dinamska kriva ukazuje na produžen parenhimski tranzit RF i pojavu eliminacije RF tek posle dejstva Lasiksa (diuretika): opstruktivna radiorenogramska kriva, eliminacija mokraće posle diurezne stimulacije nukazuje na funkcionalni tip opstrukcije"
  },
  {
    "id": 23,
    "img": "images/card-23.jpg",
    "naziv": "Statička scintigrafija bubrega:",
    "radiofarmak": "99m Tc DMSA (dimerkaptosukcinilna kiselina)",
    "mehanizam": "RF se nakuplja u proksimalnim konvolutima Henleove petlje",
    "nalaz": "Nehomogeno nakupljanje RF u oba bubrega; uočavaju se zone u kojima nema vezivanja RF (kortikalni defekti). Kaudalni polovi bubrega su spojeni: potkovičasti bubreg sa afunkcijsim korteksom"
  },
  {
    "id": 24,
    "img": "images/card-24.png",
    "naziv": "Statička scintigrafija skeleta",
    "radiofarmak": "99m Tc DPD (dikarboskipropandifosfonat)",
    "mehanizam": "RF se adsporpuje na neorganski deo matriksa, na hidroksiapatit",
    "nalaz": "Brojne zone intenzivne akumulacija RF u dugim i poljosnatim kostima skeleta"
  },
  {
    "id": 25,
    "img": "images/card-25.jpg",
    "naziv": "Statička scintigrafija paraštitastih žlezda:",
    "radiofarmak": "99m Tc MIBI (metoksiizobenzilizonitril)",
    "mehanizam": "RF se kao lipofilno jedinjenje nakuplja u mitohondirajama vijabilnih ćelija",
    "nalaz": "Zona intenzivne akumulacije RF kaudalno od lože desnog tireoidnog režnja: hiperfunkcijska paraštitasta žlezda"
  },
  {
    "id": 26,
    "img": "images/card-26.jpg",
    "naziv": "Statička scintigrafija medule nadbubrežnih žlezda:",
    "radiofarmak": "mI(123J)BG (metajodobenzilgvanidin)",
    "mehanizam": "RF se nakuplja aktivnom transportom u kateholaminskim granulama srži nadbubrega",
    "nalaz": "Zona intenzivne akumulacije RF u loži leve nadbubrežne žlezde: hiperfunkcijska srž leve nadbubrežne žlezde"
  },
  {
    "id": 27,
    "img": "images/card-27.jpg",
    "naziv": "Statička scintigrafija medule nadbubrežnih žlezda:",
    "radiofarmak": "mI(123J)BG (metajodobenzilgvanidin)",
    "mehanizam": "RF se nakuplja aktivnom transportom u kateholaminskim granulama srži nadbubrega",
    "nalaz": "Velika zona intenzivne akumulacije RF u desnom hemiabdomenu kod novorođenčeta: neuroblastom"
  },
  {
    "id": 28,
    "img": "images/card-28.jpg",
    "naziv": "Statička scintigrafija medule nadbubrežnih žlezda:",
    "radiofarmak": "mI(123J)BG (metajodobenzilgvanidin)",
    "mehanizam": "RF se nakuplja aktivnom transportom u kateholaminskim granulama srži nadbubrega",
    "nalaz": "Brojne zone intenzivne i patološke akumulacije RF skeletu novorođenčeta: metastaze neuroblastoma"
  },
  {
    "id": 29,
    "img": "images/card-29.jpg",
    "naziv": "18 FDG PET statička scintigrafija mozga; transverzalni, sagitalni i frontalni presek",
    "radiofarmak": "18 FDG (fluorodeoksiglukoza)",
    "mehanizam": "metaboločki aktivne ćelije je preuzimaju aktivnim transportom pomoću GLUT",
    "nalaz": "Zone hipomatabolizma (smanjenog nakupljanja RF) u parijetalnom režnju mozga"
  },
  {
    "id": 30,
    "img": "images/card-30.jpg",
    "naziv": "Perfuziona i ventilaciona scintigrafija pluća:",
    "radiofarmak": "99m Tc MAA (makroagregati albumina)/ 133 Xe",
    "mehanizam": "RF izaziva embolizaciju svakog 1000. krvnog suda u plučima/ inertni gas popunjava disajne puteve",
    "nalaz": "Ravnomerna i intenzivna akumulacija RF u oba plućna krila"
  },
  {
    "id": 31,
    "img": "images/card-31.png",
    "naziv": "Ventilaciona scintigrafija pluća:",
    "radiofarmak": "133 Xe, 81Kr 99m Tc DTPA aerosol",
    "mehanizam": "inertni gas popunjava disajne puteve",
    "nalaz": "Ravnomerna i intenzivna akumulacija RF u oba plućna krila uz ispiranje RF „wash-out“ iz pluća"
  },
  {
    "id": 32,
    "img": "images/card-32.jpg",
    "naziv": "Perfuziona scintigrafija pluća:",
    "radiofarmak": "99m Tc MAA (makroagregati albumina)/ 133 Xe",
    "mehanizam": "RF izaziva embolizaciju svakog 1000. krvnog suda u plučima/ inetrtni gas popunjava disajne puteve",
    "nalaz": "Brojni perfuzioni defekti u oba plučna krila"
  }
];
