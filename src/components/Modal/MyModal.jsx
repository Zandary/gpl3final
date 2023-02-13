import { Form, Modal, ListGroup, Collapse } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./MyModal.css";

const MyModal = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  let data = [
    {
      id_pharma: "0",
      pharma: "MIARO Galerie ARO",
      location: "Ampefiloha",
      tel1: "020 22 621 18",
      tel2: "032 05 224 32",
    },
    {
      id_pharma: "1",
      pharma: "METROPOLE",
      location: "7, rue Ratsimilaho - Antaninarenina",
      tel1: "020 22 200 25",
      tel2: "032 07 101 71",
    },
    {
      id_pharma: "2",
      pharma: "Ocean Indien",
      location: "Analakely avenue de l'independance",
      tel1: "032 11 224 70",
      tel2: "034 05 224 70",
    },
    {
      id_pharma: "3",
      pharma: "Gisele",
      location: "Ambodivonikely Anosivavaka Ambohimanarina",
      tel1: "020 23 617 59",
      tel2: "",
    },
    {
      id_pharma: "4",
      pharma: "Andravoahangy",
      location: "Andravoahangy (Près Epi d'Or)",
      tel1: "020 22 245 12",
      tel2: "",
    },
    {
      id_pharma: "5",
      pharma: "Mamy",
      location: "67 Ha Nord Est",
      tel1: "020 22 318 21",
      tel2: "033 74 154 87",
    },
    {
      id_pharma: "6",
      pharma: "Toky",
      location: "Andrefan'Ambohijanahary",
      tel1: "020 22 264 41",
      tel2: "032 04 090 54",
    },
    {
      id_pharma: "7",
      pharma: "TANA",
      location: "Antsahavola",
      tel1: "020 22 207 17",
      tel2: "033 05 207 17",
    },
    {
      id_pharma: "8",
      pharma: "ANALAKELY",
      location: "En face TAHALA RARIHASINA",
      tel1: "020 22 236 81",
      tel2: "033 90 338 34",
    },
    {
      id_pharma: "9",
      pharma: "MAHASOAVA",
      location: "Près BNI Antsakaviro",
      tel1: "020 22 329 85",
      tel2: "",
    },
    {
      id_pharma: "10",
      pharma: "MANJAKARAY",
      location: "Lot II D Ter Manjakaray",
      tel1: "020 22 456 78",
      tel2: "032 12 456 78",
    },
    {
      id_pharma: "11",
      pharma: "ANKADIFOTSY",
      location: "ANKADIFOTSY",
      tel1: "034 22 222 07",
      tel2: "020 22 222 07",
    },
    {
      id_pharma: "12",
      pharma: "VOLAHANTA",
      location: "Anosibe près du rond point vers Soanierana",
      tel1: "020 22 355 09",
      tel2: "034 24 334 86",
    },
    {
      id_pharma: "13",
      pharma: "IARIVO",
      location: "Analakely en face Institut d'hygiène sociale",
      tel1: "020 22 224 26",
      tel2: "020 22 699 19",
    },
    {
      id_pharma: "14",
      pharma: "AMBANIDIA",
      location: "Lot VC 44 bis Ambanidia",
      tel1: "020 22 255 50",
      tel2: "",
    },
    {
      id_pharma: "15",
      pharma: "MAHAVOKY",
      location: "Mahavoky Andravoahangy",
      tel1: "020 22 255 51",
      tel2: "",
    },
    {
      id_pharma: "16",
      pharma: "67HA",
      location: "67 Ha En face Eglise Luthérienne",
      tel1: "020 22 253 61",
      tel2: "",
    },
    {
      id_pharma: "17",
      pharma: "NOUVELLE",
      location: "Rue Indira Gandhi Tsaralalana",
      tel1: "020 22 370 03",
      tel2: "034 22 370 03",
    },
    {
      id_pharma: "18",
      pharma: "SOANDRY",
      location: "Behoririka près de Luxor",
      tel1: "020 22 228 37",
      tel2: "033 11 650 36",
    },
    {
      id_pharma: "19",
      pharma: "HANITRA",
      location: "Ankorahotra",
      tel1: "020 22 312 81",
      tel2: "020 22 350 80",
    },
    {
      id_pharma: "20",
      pharma: "AMBODIVONA",
      location: "Ambodivona",
      tel1: "034 07 228 98",
      tel2: "",
    },
    {
      id_pharma: "21",
      pharma: "DE LA PERGOLA",
      location: "Antaninarenina",
      tel1: "020 22 237 17",
      tel2: "034 19 733 95",
    },
    {
      id_pharma: "22",
      pharma: "HERIZO",
      location: "Antanimena face Eglise Catholique",
      tel1: "020 22 697 22",
      tel2: "",
    },
    {
      id_pharma: "23",
      pharma: "ITOKIANA",
      location: "Manakambahiny",
      tel1: "020 22 322 64",
      tel2: "034 84 322 64",
    },
    {
      id_pharma: "24",
      pharma: "ANJA",
      location: "Analamahitsy",
      tel1: "020 26 406 55",
      tel2: "034 51 149 73",
    },
    {
      id_pharma: "25",
      pharma: "TSARA",
      location: "Andavamamba (route pavée)",
      tel1: "020 22 347 12",
      tel2: "034 21 111 14",
    },
    {
      id_pharma: "26",
      pharma: "AICHA",
      location: "Près CENAM 67ha",
      tel1: "020 22 620 02",
      tel2: "",
    },
    {
      id_pharma: "27",
      pharma: "RAKOTOARIVONY",
      location: "Analakely en face lycée Rabearivelo",
      tel1: "033 31 222 05",
      tel2: "034 45 222 05",
    },
    {
      id_pharma: "28",
      pharma: "SANTE",
      location: "Behoririka 1ère à droite après Station Shell",
      tel1: "020 22 540  32",
      tel2: "032 05 540 32",
    },
    {
      id_pharma: "29",
      pharma: "H",
      location: "Andrefan'Ambohijanahary",
      tel1: "032 05 111 65",
      tel2: "034 14 011 65",
    },
    {
      id_pharma: "30",
      pharma: "NY AINA",
      location: "Andravoahangy Ambony",
      tel1: "020 22 229 95",
      tel2: "",
    },
    {
      id_pharma: "31",
      pharma: "ISORAKA",
      location: "ISORAKA",
      tel1: "020 22 285 04",
      tel2: "020 22 694 12",
    },
    {
      id_pharma: "32",
      pharma: "MAHAMASINA",
      location: "MAHAMASINA",
      tel1: "020 22 545 58",
      tel2: "034 07 545 58",
    },
    {
      id_pharma: "33",
      pharma: "CAPITALE",
      location: "Rond point Ankazomanga",
      tel1: "020 23 610 00",
      tel2: "032 12 610 00",
    },
    {
      id_pharma: "34",
      pharma: "AMPANDRANA",
      location: "Ampandrana",
      tel1: "020 22 258 99",
      tel2: "034 19 341 82",
    },
    {
      id_pharma: "35",
      pharma: "RABARISOA",
      location: "Andravoahangy (près BOA ex imm SOLOPRIX)",
      tel1: "020 22 229 86",
      tel2: "034 07 229 86",
    },
    {
      id_pharma: "36",
      pharma: "Andoharanofotsy",
      location: "Andoharanofotsy",
      tel1: "033 11 311 04",
      tel2: "020 22 079 84",
    },
    {
      id_pharma: "37",
      pharma: "Grazia",
      location: "Anosimasina Itaosy",
      tel1: "034 67 733 62",
      tel2: "",
    },
    {
      id_pharma: "38",
      pharma: "Anosizato",
      location: "Anosizato",
      tel1: "020 22 631 43",
      tel2: "020 22 686 53",
    },
    {
      id_pharma: "39",
      pharma: "Avarandrano",
      location: "Avarandrano Analamahitsy",
      tel1: "020 22 423 65",
      tel2: "",
    },
    {
      id_pharma: "40",
      pharma: "La Colombe",
      location: "Itaosy",
      tel1: "034 60 396 61",
      tel2: "",
    },
    {
      id_pharma: "41",
      pharma: "De Soanierana",
      location: "Soanierana",
      tel1: "032 87 675 02",
      tel2: "",
    },
    {
      id_pharma: "42",
      pharma: "De Tanjombato",
      location: "Tanjombato",
      tel1: "020 22 570 35",
      tel2: "",
    },
    {
      id_pharma: "43",
      pharma: "D'Ankazotokana",
      location: "Ankazotokana Lalana Marc Rabibisoa",
      tel1: "020 22 354 42",
      tel2: "",
    },
    {
      id_pharma: "44",
      pharma: "D'Ankaraobato",
      location: "Ankaraobato",
      tel1: "",
      tel2: "",
    },
    {
      id_pharma: "45",
      pharma: "D'Amboditsiry",
      location: "Lot II B 48 bis Amboditsiry",
      tel1: "020 22 528 21",
      tel2: "",
    },
    {
      id_pharma: "46",
      pharma: "D'Amboditsiry",
      location: "Lot IP N 40 Ter Itaosy Ambanilalana",
      tel1: "020 26 278 23",
      tel2: "",
    },
    {
      id_pharma: "46",
      pharma: "D'Andohatapenaka",
      location: "Andohatapenaka",
      tel1: "020 22 670 70",
      tel2: "",
    },
    {
      id_pharma: "47",
      pharma: "HASIN'NY AINA",
      location: "Logt 135 Cité Mandroseza",
      tel1: "22 311 00",
      tel2: "",
    },
    {
      id_pharma: "48",
      pharma: "HORIZON",
      location: "Immeuble Ivandry",
      tel1: "034 14 034 14",
      tel2: "032 11 034 14",
    },
    {
      id_pharma: "49",
      pharma: "HORIZON",
      location: "Immeuble Ivandry",
      tel1: "034 14 034 14",
      tel2: "032 11 034 14",
    },
    {
      id_pharma: "50",
      pharma: "DU FIRAISANA VI",
      location: "Antanety atsimo Ambohimanarina",
      tel1: "22 339 94",
      tel2: "",
    },
    {
      id_pharma: "51",
      pharma: "CROIX DU SUD SARL",
      location: "Soarano Lot IV S 63 rue Ampanjaka Toera",
      tel1: "22 220 59",
      tel2: "",
    },
    {
      id_pharma: "52",
      pharma: "Du CENTRE",
      location: "Galerie commerciale SMART, zone Galilée Tanjombato",
      tel1: "22 575 83",
      tel2: "034 14 649 49",
    },
    {
      id_pharma: "53",
      pharma: "de la DIGUE",
      location: "Score Digue, PK 8,5, route d'Ivato",
      tel1: "22 006 78",
      tel2: "",
    },
    {
      id_pharma: "54",
      pharma: "SANDRY",
      location: "Lot IPS 17 Andranonahoatra 102-Itaosy",
      tel1: "22 339 79",
      tel2: "",
    },
    {
      id_pharma: "55",
      pharma: "MAHASOA",
      location: "Lot III M 15 ter Andrefan'Ambohijanahary",
      tel1: "22 622 50",
      tel2: "",
    },
    {
      id_pharma: "56",
      pharma: "PRINCIPALE",
      location: "Route des Hydrocarbures Ivandry",
      tel1: "22 439 15",
      tel2: "032 05 533 93",
    },
    {
      id_pharma: "57",
      pharma: "d'IVATO",
      location: "Lot K 009 -IVATO (105",
      tel1: "22 442 95",
      tel2: "",
    },
    {
      id_pharma: "58",
      pharma: "MIRARISOA",
      location: "Lot IV H 53 J Anosisoa Ambohimanarina",
      tel1: "24 154 59",
      tel2: "23 684 50",
    },
    {
      id_pharma: "59",
      pharma: "FANOMEZANTSOA",
      location: "Lot près II D 4 Ambondrona",
      tel1: "22 286 85",
      tel2: "033 02 207 53",
    },
    {
      id_pharma: "60",
      pharma: "HASIMBOLA SARL",
      location: "Galerie ZOOM - Ankorondrano",
      tel1: "22 259 50",
      tel2: "034 20 259 50",
    },
    {
      id_pharma: "61",
      pharma: "SAKAIZA",
      location: "Lot IVP 52 ter Antohomadinika",
      tel1: "22 281 75",
      tel2: "",
    },
    {
      id_pharma: "62",
      pharma: "MAHAVONJY",
      location: "Bloc commercial n°5 Ampefiloha",
      tel1: "22 291 31",
      tel2: "",
    },
    {
      id_pharma: "63",
      pharma: "RAKOTOARIMANANA",
      location: "Lot près II E 34 ZJ ter Ambohidahy Mahazo",
      tel1: "22 700 07",
      tel2: "",
    },
    {
      id_pharma: "64",
      pharma: "SOARY",
      location: "Lot II E 2 VJ Iadiambola Ampasapito",
      tel1: "22 410 58",
      tel2: "",
    },
    {
      id_pharma: "65",
      pharma: "RAKOTONDRAZAKA",
      location: "Andravoahangy",
      tel1: "22 222 25",
      tel2: "",
    },
    {
      id_pharma: "66",
      pharma: "AMPEFILOHA",
      location: "Logt n° 433 Ampefiloha",
      tel1: "22 249 57",
      tel2: "",
    },
    {
      id_pharma: "67",
      pharma: "PATTY",
      location: "Lot 30 A B bis Ampitatafika",
      tel1: "033 11 080 59",
      tel2: "",
    },
    {
      id_pharma: "68",
      pharma: "HAVANA",
      location: "Lot AFA 135 67 Ha Centre Ouest",
      tel1: "22 625 86",
      tel2: "",
    },
    {
      id_pharma: "69",
      pharma: "ANOSIBE",
      location: "Lot III X 378A Anosibe Ouest",
      tel1: "22 347 82",
      tel2: "",
    },
    {
      id_pharma: "70",
      pharma: "RANAIVOSON",
      location: "Lot IF 160 Talatamaty",
      tel1: "22 486 70",
      tel2: "033 12 074 15",
    },
    {
      id_pharma: "71",
      pharma: "VONJY",
      location: "Lot 142 BAZ Anosizato Ouest",
      tel1: "22 344 94",
      tel2: "",
    },
    {
      id_pharma: "72",
      pharma: "AMBODIFILAO",
      location: "75 bis rue Rabezavana Ambodifilao",
      tel1: "22 224 50",
      tel2: "",
    },
    {
      id_pharma: "73",
      pharma: "AMPANDRANA",
      location: "Lot II V 80 bis Ampandrana",
      tel1: "22 258 99",
      tel2: "",
    },
    {
      id_pharma: "74",
      pharma: "ANALAKELY",
      location: "3, rue Refotaka Analakely",
      tel1: "22 236 81",
      tel2: "032 07 236 34",
    },
    {
      id_pharma: "75",
      pharma: "LEADER PRICE",
      location: "Enceinte Leader Price Tanjombato",
      tel1: "22 631 01",
      tel2: "",
    },
    {
      id_pharma: "76",
      pharma: "HARY SOA",
      location: "Lot II V 46 Besarety",
      tel1: "22 379 17",
      tel2: "",
    },
    {
      id_pharma: "77",
      pharma: "AMBOHIBAO",
      location: "Lot AD-12 bis Ambohibao",
      tel1: "22 444 33",
      tel2: "",
    },
    {
      id_pharma: "78",
      pharma: "PROGRES",
      location: "72, Avenue du 26 juin 1960 Analakely",
      tel1: "22 207 06",
      tel2: "034 17 821 36",
    },
    {
      id_pharma: "79",
      pharma: "TSARAMASAY",
      location: "Lot IV T 151 Antanimena",
      tel1: "22 359 36",
      tel2: "032 07 029 04",
    },
    {
      id_pharma: "80",
      pharma: "de la RN7",
      location: "Lot IB 459 Andoharanofotsy",
      tel1: "22 475 09",
      tel2: "",
    },
    {
      id_pharma: "81",
      pharma: "RASOLONJATOVO",
      location: "Anosy en face HJRA",
      tel1: "",
      tel2: "",
    },
    {
      id_pharma: "82",
      pharma: "TSARA",
      location: "Lot273-A Andavamamba",
      tel1: "22 347 12",
      tel2: "",
    },
    {
      id_pharma: "83",
      pharma: "MAHEFASOA",
      location: "Lot II N 111 bis - Analamahitsy",
      tel1: "22 720 61",
      tel2: "",
    },
    {
      id_pharma: "84",
      pharma: "RALISON",
      location: "Lot IV R 24 bis Antanimena",
      tel1: "22 226 14",
      tel2: "",
    },
    {
      id_pharma: "85",
      pharma: "AVARADRANO",
      location: "Lot II N 87 bis -103-Analamahitsy",
      tel1: "24 798 43",
      tel2: "22 423 65",
    },
    {
      id_pharma: "86",
      pharma: "RAZAFIMANDIMBY",
      location: "Lot II D ter Manjakaray",
      tel1: "22 402 86",
      tel2: "24 304 44",
    },
    {
      id_pharma: "87",
      pharma: "RAZAFIMANDRANTO",
      location: "56, Avenue du 26 juin 1960, Analakely",
      tel1: "22 234 04",
      tel2: "22 228 90",
    },
    {
      id_pharma: "88",
      pharma: "PROVIDENCE",
      location: "Andohan'Analakely",
      tel1: "22 547 19",
      tel2: "033 07 484 06",
    },
    {
      id_pharma: "89",
      pharma: "de la RN2",
      location: "Lot II E 43 KA Mahazo",
      tel1: "034 20 300 30",
      tel2: "",
    },
    {
      id_pharma: "90",
      pharma: "AMBODIVONA",
      location: "Ambodivona",
      tel1: "22 228 98",
      tel2: "",
    },
    {
      id_pharma: "91",
      pharma: "TALATAMATY",
      location: "Lot 203 F III Ambohitravao",
      tel1: "26 547 19",
      tel2: "033 07 484 06",
    },
    {
      id_pharma: "92",
      pharma: "ATSIMONDRANO",
      location: "Lot III A4 Tanjombao",
      tel1: "24 105 13",
      tel2: "032 46 142 19",
    },
    {
      id_pharma: "93",
      pharma: "AÏCHA",
      location: "Zone commerciale Antetezana Afovoany - près CENAM 67 ha",
      tel1: "22 620 02",
      tel2: "032 04 202 22",
    },
    {
      id_pharma: "94",
      pharma: "SOLEIL",
      location: "Lot IAB 40 bis Andrononobe, route d'Ambohitraharaba",
      tel1: "22 430 68",
      tel2: "",
    },
    {
      id_pharma: "95",
      pharma: "de la CITE",
      location: "Lot IAH 43 Itaosy",
      tel1: "24 221 66",
      tel2: "",
    },
    {
      id_pharma: "96",
      pharma: "AMBATOBE",
      location: "Centre Commercial LA-DEE-DA Lot II N 19 DA Ambatobe ",
      tel1: "22 413 16",
      tel2: "",
    },
    {
      id_pharma: "97",
      pharma: "METEO",
      location: "Lot II E 21 Bis Ampasampito",
      tel1: "034 63 058 38",
      tel2: "033 01 081 04",
    },
    {
      id_pharma: "98",
      pharma: "de la Croix Verte DABARIA ",
      location: "Lot VS65 Ambolonkandrina",
      tel1: "24 286 51",
      tel2: "032 07 929 42",
    },
    {
      id_pharma: "99",
      pharma: "du ROI",
      location: "Centre Commercial Tana Water Front ",
      tel1: "033 03 403 55",
      tel2: "",
    },
    {
      id_pharma: "100",
      pharma: "ANTANIMENA",
      location: "Immeuble SANTA Lot IVG 204",
      tel1: "22 200 00",
      tel2: "",
    },
    {
      id_pharma: "101",
      pharma: "M-PHARMACIE",
      location: "Lot IF 12 Bis Ambalavao Isotry ",
      tel1: "22 665 22",
      tel2: "034 02 652 55",
    },
    {
      id_pharma: "102",
      pharma: "ANDRY",
      location: "Lot II N 56 Bis Analamahitsy",
      tel1: "034 12 550 16",
      tel2: "",
    },
    {
      id_pharma: "103",
      pharma: "FANEVA",
      location: "Lot II F 4 Bis Fitroafana Mandrosoa Ivato",
      tel1: "032 49 249 07",
      tel2: "22 580 40",
    },
    {
      id_pharma: "104",
      pharma: "GRACE",
      location: "Près lot C 38 bis Andranomena, enceinte Point Pacom",
      tel1: "22 066 51",
      tel2: "034 02 387 14",
    },
    {
      id_pharma: "105",
      pharma: "HERY",
      location: "Lot AD 79 Ankadikely Ilafy",
      tel1: "",
      tel2: "",
    },
    {
      id_pharma: "106",
      pharma: "SABOTSY NAMEHANA",
      location: "Lot A 81 Sabotsinamehana",
      tel1: "032 40 803 25",
      tel2: "",
    },
    {
      id_pharma: "107",
      pharma: "FITIAVANA",
      location: "Lot AK 21 bis Ankadikely ilafy",
      tel1: "034 16 935 55",
      tel2: "",
    },
  ];

  useEffect(() => {
    setSearchResults(
      data.filter(
        (item) =>
          (item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.pharma.toLowerCase().includes(searchQuery.toLowerCase())) &&
          searchQuery !== ""
      )
    );
  }, [searchQuery]);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rechercher une pharmacie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Entrez le lieu où vous êtes maintenant ou le nom d'une pharmacie que
            vous connaissez
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Pharmacie Pergola"
                className="text-center"
                autoFocus
                value={searchQuery}
                onChange={function (e) {
                  setSearchQuery(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <ListGroup>
            {searchResults.map((result, index) => (
              <ListGroup.Item key={index}>
                <p
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  h-75
                  className="zeroMargin sansSelect"
                >
                  {result.pharma}
                </p>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="sansSelect">
                    <p>{result.location}</p>
                    <p>{result.tel1 + " " + result.tel2}</p>
                  </div>
                </Collapse>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
