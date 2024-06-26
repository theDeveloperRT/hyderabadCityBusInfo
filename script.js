let suggesionsArray = []

// Sources and Destination Routes

let secRoutes_UP = [
  "1",
  "1B",
  "1C",
  "1D",
  "1HD",
  "1J",
  "1K",
  "1L",
  "1M/D",
  "1P",
  "1V",
  "1X",
  "1Z",
  "1D/299",
  "1Z/251",
  "2",
  "2C",
  "2J",
  "2K",
  "2U",
  "2Z",
  "5K",
  "5M",
  "5K/92A",
  "5K/188",
  "7Z",
  "7Z/251",
  "8A",
  "8AK",
  "8C",
  "8UA",
  "8A/178G",
  "10",
  "10F",
  "10H",
  "10HA",
  "10HL",
  "10J",
  "10K",
  "10KJ",
  "10KM",
  "10KL",
  "10Y",
  "10YF",
  "10W",
  "10KM/224G",
  "14P",
  "14X",
  "15D",
  "15H",
  "15IG",
  "15H/242RG",
  "16A",
  "16AK",
  "16C",
  "16CD",
  "16D",
  "16H",
  "16P",
  "16C/281",
  "16D/24B",
  "16NY",
  "17DH",
  "17DS",
  "17DV",
  "17H",
  "17CS",
  "17HN",
  "17S",
  "17V",
  "18",
  "18B",
  "18C",
  "18V",
  "20P",
  "21W",
  "22",
  "22D",
  "22K",
  "23B",
  "23BK",
  "23GS",
  "23T",
  "24",
  "24B",
  "24B/16D",
  "24B/281",
  "24BA",
  "24BJ",
  "24E",
  "24J",
  "24L/281",
  "25A",
  "25AJ",
  "25M",
  "25MS",
  "25P",
  "25S",
  "25S/227",
  "25S/229",
  "26M",
  "26N",
  "29B",
  "29B/272G",
  "29B/272I",
  "29S",
  "30",
  "38EX",
  "38X",
  "38T",
  "40",
  "44X",
  "46",
  "47L",
  "47Y",
  "47YM",
  "49",
  "49A",
  "49M",
  "49M/92A",
  "49MT",
  "50B",
  "86A",
  "86C",
  "86J",
  "86K",
  "90B",
  "90DL",
  "90L/251",
  "102B/203N",
  "107JD",
  "107JS",
  "107VR",
  "107VL",
  "107VS",
  "171",
  "171R",
  "203AR",
  "211",
  "211B",
  "211CD",
  "211D",
  "211DY",
  "211K",
  "211M",
  "211/242",
  "212",
  "212/702",
  "212T",
  "219",
  "219N",
  "226",
  "227",
  "229",
  "229B",
  "229P",
  "230A",
  "230P",
  "233",
  "241T",
  "242",
  "242A",
  "242B",
  "242G",
  "242GA",
  "242RG",
  "242/211",
  "245A",
  "250",
  "250C",
  "250D",
  "250S",
  "250/281",
  "272",
  "280",
  "280B",
  "280N",
  "280/488",
  "281",
  "281/16C",
  "281/24B",
  "281/250",
  "283C",
  "290KP",
  "290UA",
  "290UF",
  "290U/205",
  "290U/463",
  "498",
  "498U",
  "568",
]

let secRoutes_DN = [
  "14X",
  "16D/24B",
  "24B/16D",
  "38EX",
  "38X",
  "92A/5K",
  "92A/49M",
  "178G/8A",
  "203N/102B",
  "227/25S",
  "242/17H",
  "251/1Z",
]

let ECILX_UP = [
  "3KJ",
  "3V",
  "3K/90L",
  "3K/95",
  "3K/102",
  "3K/102B",
  "3K/252",
  "3KN/95",
  "16A/5K",
  "16A/10H",
  "16A/20",
  "16A/47L",
  "16A/49M",
  "16A/219",
  "16C/5K",
  "16C/10H",
  "16C/47L",
  "16C/49M",
  "16R/20",
  "17/219",
  "17H/29B",
  "17H/219",
  "24S",
  "24SS",
  "24S/273",
  "90BE",
  "147",
  "250/10K",
  "250/49",
  "250/49M",
  "250/49MT",
  "250/219",
  "250E"
]

let ECILX_DN = [
  "3C",
  "5K/16A",
  "5K/16C",
  "10H/16A",
  "10H/16C",
  "10H/18C",
  "16A",
  "16AK",
  "16C",
  "16H",
  "24E",
  "24J",
  "29B/17H",
  "47L/16A",
  "47L/16C",
  "49/250",
  "49M/16A",
  "49M/16C",
  "49M/250",
  "49MT/250",
  "90L/3K",
  "95/3K",
  "102B/3K",
  "203N/3K",
  "219/16A",
  "219/17",
  "219/17H",
  "219/250",
  "250",
]

let AFZ_UP = [
  "1/25S",
  "1/25S/229",
  "1P/25S",
  "2/25S",
  "3",
  "3C",
  "3D",
  "3DN",
  "3H",
  "3HN",
  "3K",
  "3KN",
  "3L",
  "3M",
  "3N",
  "3T",
  "3Y",
  "3K/242",
  "3K/281",
  "8/37",
  "65/116GA",
  "65M/123",
  "71A",
  "71K",
  "72/277D",
  "72H",
  "72J",
  "72V",
  "218A",
  "251M",
  "532",
]

let AFZ_DN = [
  "1",
  "1B",
  "1P",
  "2",
  "16A/20",
  "37/8",
  "49A",
  "86A",
  "116GA/65",
  "123/65M",
  "242/3K",
]

let MP_UP = [
  "5R",
  "5/5R",
  "5K/16A",
  "5K/16AD",
  "5K/16C",
  "5K/16CD",
  "5K/16D",
  "5K/229",
  "19F",
  "19K",
  "19KJ",
  "19KM",
  "19M",
  "19MP",
  "19S",
  "19YF",
  "49M/16A",
  "49M/16C",
  "49M/16CD",
  "49M/16D",
  "49M/229",
  "49M/250",
  "49M/250C",
  "49M/250D",
  "92K",
  "120",
  "123",
  "156/299",
  "188",
  "188/251",
  "189M",
  "189M/171M",
  "189M/272G",
  "216M",
  "288",
  "288A",
  "288D",
  "300",
  "300L",
  "447R",
  "505",
  "593",
]

let MP_DN = [
  "5K",
  "5M",
  "16A/5K",
  "16A/49M",
  "16AD/5K",
  "16C/5K",
  "16C/49M",
  "16CD/5K",
  "16CD/49M",
  "16D/5K",
  "16D/49M",
  "49M",
  "92A",
  "92R",
  "113IM",
  "113M",
  "156L",
  "156V",
  "229/5K",
  "229/49M",
  "250/49M",
  "250C/49M",
  "250D/49M",
]

// KG UP Manual
let KG_DN = [
  "3",
  "3H",
  "3HN",
  "3K",
  "3KN",
  "8/37",
  "15H",
  "17H",
  "17HN",
  "17S",
  "20/15H",
  "117",
]

// AMBD_UP Manual
let AMBD_DN = [
  "3D",
  "3DN",
  "5K/16AD",
  "5K/16CD",
  "5K/16D",
  "15D",
  "16CD",
  "16D",
  "24BA",
  "49M/16CD",
  "49M/16D",
  "49M/250D",
  "250D",
]

let MDCL_UP = [
  "229/5K",
  "229/18C",
  "229/49M",
  "229/90L",
  "229/219",
  "229/279",
  "229/290",
  "229/290U",
  "231",
]

let MDCL_DN = [
  "1/25S/229",
  "1D/229",
  "1Z/229",
  "5K/229",
  "18C/229",
  "25S/229",
  "49M/229",
  "90L/229",
  "219/229",
  "229",
  "279/229",
  "290/229",
  "290U/229",
]

let PTCR_UP = [
  "218/102B",
  "218/203A",
  "218/203N",
  "219/16A",
  "219/17",
  "219/17H",
  "219/18C",
  "219/224G",
  "219/229",
  "219/250",
  "219/272G",
  "219I/272G",
  "219/280",
]

let PTCR_DN = [
  "10HA",
  "16A/219",
  "17/219",
  "17H/219",
  "18C/219",
  "102B/218",
  "203A/218",
  "203N/218",
  "217",
  "217C",
  "218",
  "218A",
  "218C",
  "218D",
  "219",
  "222A",
  "226",
  "229/219",
  "250/219",
  "280/219",
]

let ARGR_DN = ["1Z", "3K/95", "3KN/95", "5K/92A", "7Z", "49M/92A"];

let CBS_UP = [
  "9F",
  "9K",
  "9X",
  "9K/230P",
  "9X/230P",
  "9K/272G",
  "9X/272G",
  "9X/283D",
  "116/220K",
  "185G",
  "217C",
  "218C",
]
// CBS_DN Manual

let CHRM_UP = [
  "9XM",
  "9YF",
  "9X/283D",
  "9XM/230P",
  "65MG",
  "66G",
  "85V",
  "85/253L",
  "253",
]
// CHRM_DN Manual

// GDMS_UP Manual
let GDMS_DN = [
  "9K/272G",
  "9X/272G",
  "9X/283D",
  "10KM/224G",
  "24S/273",
  "25S/227",
  "29B/272G",
  "83J/272G",
  "102/9K",
  "189M/272G",
  "195WP",
  "219/224G",
  "219I/224G",
  "219/272G",
  "219I/272G",
  "224G",
]

// GTKS_UP Manual
let GTKS_DN = [
  "3K/281",
  "16C/281",
  "20/280",
  "24B/281",
  "24L/281",
  "30/280",
  "219/280",
  "250/281",
  "280",
  "280J",
  "281",
  "281/16C",
  "281/24B",
  "281/250",
]

let KOTI_UP = [
  "45F",
  "94R",
  "95K",
  "116N",
  "216",
  "217",
  "218",
  "218L",
  "218/224MN",
  "222A",
]

let KOTIWC_UP = [
  "102",
  "102/253L",
  "102B",
  "102M",
  "103",
  "104A",
  "104R",
  "201G",
  "201M",
  "202B",
  "203A",
  "203AK",
  "203N",
  "205A",
  "253W",
  "277D",
  "277N",
  "412",
]

let UPL_UP = [
  "18J",
  "113IM",
  "113K",
  "113KM",
  "113KL",
  "113M",
  "113M/288",
  "113W",
  "115",
  "117",
]

let BRBD_DN = [
  "9F",
  "9YF",
  "10F",
  "10YF",
  "19F",
  "19YF",
  "45F",
  "113F",
  "158FL",
  "158HF",
  "158VF",
]

let screen1 = document.querySelector(".screen1");
let screen1_2 = document.querySelector(".screen1_2");

let screen1_2heading = document.querySelector("#screen1_2heading");
let updateItem = document.querySelector(".updateItem");
let contactFormContainer = document.querySelector(".contactFormContainer");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input1Label = document.querySelector("#input1Label");
let input2Label = document.querySelector("#input2Label");

let inputContainer = document.querySelector(".inputContainer");
let suggesionsUL = document.querySelector("#suggesionsUL");
let downArrow = document.querySelector(".downArrow");

let routeListItem = document.querySelector(".routeListItem");
let outputContent = document.querySelector(".outputContent");

let navigateOption1 = document.querySelector("#navigateOption1");
let navigateOption2 = document.querySelector("#navigateOption2");
let navigateOption3 = document.querySelector("#navigateOption3");
let navigateOption4 = document.querySelector("#navigateOption4");
let moreOption = document.querySelector("#moreOption");

let sideScreen = document.querySelector(".sideScreen");
let sideScreenContainer = document.querySelector(".sideScreenContainer");

// Alternate Route Handles
let mainOutlineALT = document.querySelector("#mainOutlineALT");
let ALT_3points = document.querySelector("#ALT_3points");
let ALT_4points = document.querySelector("#ALT_4points");

// Alternate Route Text Handles 3 Points
let firstHeadALT = document.querySelector("#firstHeadALT");
let firstRouteALT = document.querySelector("#firstRouteALT");

let secondHeadALT = document.querySelector("#secondHeadALT");
let secondRouteALT = document.querySelector("#secondRouteALT");

let thirdHeadALT = document.querySelector("#thirdHeadALT");
let thirdRouteALT = document.querySelector("#thirdRouteALT");

// Alternate Route Text Handles 4 Points
let firstHeadALT4point = document.querySelector("#firstHeadALT4point");
let firstRouteALT4point = document.querySelector("#firstRouteALT4point");

let secondHeadALT4point = document.querySelector("#secondHeadALT4point");
let secondRouteALT4point = document.querySelector("#secondRouteALT4point");

let thirdHeadALT4point = document.querySelector("#thirdHeadALT4point");
let thirdRouteALT4point = document.querySelector("#thirdRouteALT4point");

let fourthHeadALT4point = document.querySelector("#fourthHeadALT4point");
let fourthRouteALT4point = document.querySelector("#fourthRouteALT4point");

// Alternate Other Route Handles
let otherRouteOutlineALT = document.querySelector("#otherRouteOutlineALT");
let OR_ALT_3points = document.querySelector("#OR_ALT_3points");
let OR_ALT_4points = document.querySelector("#OR_ALT_4points");

// Alternate Route Text Handles 3 Points
let firstHeadALT_OR = document.querySelector("#firstHeadALT_OR");
let firstRouteALT_OR = document.querySelector("#firstRouteALT_OR");

let secondHeadALT_OR = document.querySelector("#secondHeadALT_OR");
let secondRouteALT_OR = document.querySelector("#secondRouteALT_OR");

let thirdHeadALT_OR = document.querySelector("#thirdHeadALT_OR");
let thirdRouteALT_OR = document.querySelector("#thirdRouteALT_OR");

// Alternate Route Text Handles 4 Points
let firstHeadALT4point_OR = document.querySelector("#firstHeadALT4point_OR");
let firstRouteALT4point_OR = document.querySelector("#firstRouteALT4point_OR");

let secondHeadALT4point_OR = document.querySelector("#secondHeadALT4point_OR");
let secondRouteALT4point_OR = document.querySelector(
  "#secondRouteALT4point_OR"
);

let thirdHeadALT4point_OR = document.querySelector("#thirdHeadALT4point_OR");
let thirdRouteALT4point_OR = document.querySelector("#thirdRouteALT4point_OR");

let fourthHeadALT4point_OR = document.querySelector("#fourthHeadALT4point_OR");
let fourthRouteALT4point_OR = document.querySelector(
  "#fourthRouteALT4point_OR"
);

// Help Box Handles
let helpDesk = document.querySelector(".helpDesk");
let ALTdescriptiveRoute = document.querySelector("#ALTdescriptiveRoute");

let DetailedRoutesUP = [
  ["1"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  ["1/25S"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),
  ["1/25S/229"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
    getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
  ),
  ["1C"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
  ),
  ["1D"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
  ),
  ["1D/229"].concat(
    getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
    getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["1D/299"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
  ),
  ["1L"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
  ),
  ["1V"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),
  ["1X"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
    getStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
  ),
  ["1Z"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
  ),
  ["1Z/229"].concat(
    getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["1Z/251"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
  ),

  // 2 SERIES
  ["2"].concat(
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
  ),
  ["2U"].concat(
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
    getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROAD"),
    getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
  ),
  ["2/25S"].concat(
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),

  // 3 SERIES
  ["3"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
    SHD[526],
    getStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
  ),
  ["3C"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    SHD[181],
    SHD[708],
    getStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
  ),
  ["3D"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["3DN"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
    getStops(SHMB_KSR, "HB COLONY", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["3H"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
    SHD[43],
    "LIBRARY OU",
    "LADIES HOSTEL OU",
    "LAW COLLEGE OU",
    "ARTS COLLEGE OU",
    getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
  ),
  ["3HN"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
    SHD[43],
    "LIBRARY OU",
    "LADIES HOSTEL OU",
    "LAW COLLEGE OU",
    "ARTS COLLEGE OU",
    SHD[993],
    getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
    getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
  ),
  ["3K"].concat(getStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")),
  ["3K/242"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
  ),
  ["3KN"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
    getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
  ),
  ["3L"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "RAM THEATER - LALAPET"),
    SHD[780]
  ),
  ["3N"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
    SHD[1099],
    getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
    getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
    getStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
  ),
  ["3T"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
  ),

  // 5 SERIES
  ["5K"].concat(getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")),
  ["5K/16A"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["5K/16AD"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
    getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["5K/92A"].concat(
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
    getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
  ),
  ["5K/229"].concat(
    getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
    getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 8 SERIES
  ["8A"].concat(getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")),
  ["8UA"].concat(
    getStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROAD"),
    getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
  ),

  // 9 SERIES
  ["9K"].concat(
    SHD[220], SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
  ),
  ["9K/272G"].concat(
    SHD[220], SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),
  ["9X"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
  ),
  ["9X/272G"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),

  // 10 SERIES
  ["10J"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
  ),
  ["10KL"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
  ),
  ["10KM"].concat(
    getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
    SHD[536],
    SHD[36],
    SHD[892],
    getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
  ),

  // 14 SERIES
  ["14P"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    SHD[543],
    SHD[819],
    SHD[780]
  ),

  // 15 SERIES
  ["15H"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
  ),
  ["15D"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["15H/242RG"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
    SHD[719],
    SHD[917],
    getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA - NAGARAM'),
    SHD[128], "INDIRA GRUHAKALPA", SHD[842]
  ),
  // 16 SERIES
  ["16A"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16A/5K"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["16A/49M"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["16AD/5K"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["16H"].concat(
    SHD[898],
    SHD[23],
    SHD[622],
    getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
    "ANANDH BAGH", SHD[264], "TIRUMALA NAGAR",
    getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
  ),
  ["16A/219"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  // 17 SERIES
  ["17DH"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
  ),
  ["17DS"].concat(
    getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
    SHD[641],
    getStops(SHMB_KSR, "TARNAKA", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
  ),
  ["17H"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
  ),
  ["17HN"].concat(
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
    getStops(SHMB_KSR, 'HB COLONY', 'KUSHAIGUDA')
  ),
  ["17H/29B"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
  ),
  ["17/219"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["17H/219"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  ["17S"].concat(
    getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
    SHD[641],
    getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
  ),

  // 22 SERIES
  ["22"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'HAKEEMPET')
  ),
  ["22D"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
    "KOWKOOR", "JANAPRIYA - KOWKOOR", "MB DARGAH X ROADS", SHD[612]
  ),
  ["22K"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
    "KOWKOOR", "BHARATH NAGAR - KOWKOOR", "RAJIV GRUHA KALPA - KOWKOOR"
  ),

  // 24 SERIES
  ["24B"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
    getStops(KPHB_GTKS, 'LAL BAZAR', 'BALAJI NAGAR')
  ),
  ["24BA"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
    getStops(KPHB_GTKS, 'LAL BAZAR', 'AMBEDKAR NAGAR')
  ),
  ["24BJ"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
    getStops(KPHB_GTKS, 'LAL BAZAR', 'CHENNAPUR X ROADS'),
    "BJR NAGAR"
  ),

  // 25 SERIES
  ["25S"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
  ),
  ["25S/229"].concat(
    getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
    getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
    getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
  ),

  // 29 SERIES
  ["29B"].concat(getStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")),
  ["29B/17H"].concat(
    getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["29B/272G"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
  ),
  ["29B/272I"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
    "BAHUDURPALLY",
    SHD[407]
  ),

  // 38 SERIES
  ["38EX"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
  ),
  ["38X"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),
  ["38T"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    SHD[1027]
  ),

  // 40 SERIES
  ["40"].concat(
    getStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
    getStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
    "KING KOTI", SHD[3], SHD[110], SHD[506]
  ),

  // 49 SERIES
  ["49"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["49/250"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["49A"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
  ),
  ["49M"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
  ),
  ["49M/16A"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["49M/92A"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
    getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
  ),
  ["49M/229"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
    getStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["49M/250"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["49M/250D"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
    getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),

  // 72 SERIES
  ["72/277D"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
    getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
  ),
  ["72H"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
  ),
  ["72V"].concat(
    SHD[11], SHD[875], SHD[238], SHD[624],
    getStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),

  // 86 SERIES
  ["86A"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
  ),
  ["86C"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
  ),
  ["86K"].concat(
    getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
    getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
    getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
    SHD[506]
  ),


  // 90 SERIES
  ["90L"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
    SHD[754],
    SHD[433]
  ),
  ["90LK"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
  ),
  ["90DL"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
    getStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
  ),
  ["90LV"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[433]
  ),
  ["90L/229"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["90L/251"].concat(
    getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
    getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
    getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
  ),

  // 92 SERIES
  ["92A"].concat(getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), "MEHDIPATNAM"),
  ["92A/5K"].concat(
    getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
  ),
  ["92A/49M"].concat(
    getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),

  // 117 SERIES
  ["117"].concat(
    getStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
    getStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
    SHD[525]
  ),

  // 189 SERIES
  ["189M"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
    getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
    getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
  ),
  ["189M/272G"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
    getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
    SHD[1087],
    getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
  ),

  // 218 SERIES
  ["218"].concat(
    SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
  ),
  ["218A"].concat(
    getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
  ),
  ["218C"].concat(
    getStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
  ),
  ["218D"].concat(
    getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
    SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
  ),
  ["218L"].concat(
    SHD[507], SHD[4],
    getStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
  ),

  // 219 SERIES
  ["219"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/16A"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["219/17"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["219/17H"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["219/229"].concat(getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087], getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'), getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')),
  ["219/250"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
    SHD[1087],
    getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["219/272G"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
  ),

  // 229 SERIES
  ["229"].concat(
    getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/5K"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
  ),
  ["229/90L"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
  ),
  ["229/219"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
  ["229/279"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
  ),
  ["229/290"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["229/290U"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
  ),

  // 242 SERIES
  ["242"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
  ),
  ["242/17H"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242/3K"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
  ),
  ["242A"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
    "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
  ),
  ["242B"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
    SHD[147]
  ),
  ["242G"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
    SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
    "KEESARA X ROADS"
  ),
  ["242GA"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
    SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
    "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
  ),
  ["242RG"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA - NAGARAM'),
    SHD[128], "INDIRA GRUHAKALPA", SHD[842]
  ),


  // 250 SERIES
  ["250"].concat(SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250D"].concat(SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
    getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["250/49"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["250/49M"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),
  ["250D/49M"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),
  ["250/219"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
    SHD[1087],
    getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
  ),

  // 251 SERIES
  ["251/1Z"].concat(
    getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),

  // 272 SERIES
  ["272"].concat(
    getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
    "BOWRAMPET X ROADS",
    "BOWRAMPET"
  ),

  // 277 SERIES
  ["277D"].concat(
    getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
    getStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
  ),

  // 279 SERIES
  ["279"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "IBRAHIMPATNAM")
  ),
  ["279/229"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["279U"].concat(getStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

  // 290 SERIES
  ["290"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["290/229"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["290U"].concat(
    SHD[448],
    SHD[754],
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
  ),
  ["290U/229"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 299 SERIES
  ["299"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")),
  ["299D"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

  // 300 SERIES
  ["300"].concat(
    "MEHDIPATNAM",
    getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
  ),
  ["300/251"].concat(
    getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
    getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
    getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
  ),
  ["300L"].concat(
    "MEHDIPATNAM",
    getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "LB NAGAR X ROADS")
  ),
]

let DetailedRoutesDOWN = [
  ["1"].concat(
    getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1/25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  ["1/25S/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
  ),
  // ["1B"].concat(SC_RTC_DN),
  ["1C"].concat(
    "CITY BUS STATION",
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1D"].concat(
    getStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1D/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
    getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
  ),
  ["1D/299"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1L"].concat(
    getStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1X"].concat(
    "KACHEGUDA STATION",
    "KACHEGUDA X ROADS",
    getStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
  ),
  ["1V"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1Z"].concat(
    getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),
  ["1Z/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
  ),
  ["1Z/251"].concat(
    getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
    getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
  ),

  // 2 SERIES
  ["2"].concat(
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
  ),
  ["2U"].concat(
    getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
    getStops(MHRM_MDCL, "LAL DARWAJA X ROAD", "NAYAPUL"),
    getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
    SHD[708],
    getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
    SHD[1075], SHD[167],
    getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
  ),
  ["2/25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
    getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
    SHD[167], SHD[1075],
    getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
    SHD[708],
    getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
  ),

  // 3 SERIES

  ["3"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
    SHD[526],
    getStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
  ),
  ["3C"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
    SHD[708],
    SHD[181],
    getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
  ),
  ["3D"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, "NAGARAM", "AFZALGUNJ")
  ),
  ["3DN"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, "NAGARAM", "HB COLONY"),
    getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
  ),
  ["3H"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    SHD[993],
    "ARTS COLLEGE OU",
    "LAW COLLEGE OU",
    "LADIES HOSTEL OU",
    "LIBRARY OU",
    SHD[43],
    getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
  ),
  ["3HN"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
    getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
    "ARTS COLLEGE OU",
    "LAW COLLEGE OU",
    "LADIES HOSTEL OU",
    "LIBRARY OU",
    SHD[43],
    getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
  ),
  ["3K"].concat(getStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
  ["3K/242"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
  ),
  ["3KN"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
    getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
  ),
  ["3L"].concat(
    SHD[780],
    getStops(KSR_SHMB, "RAM THEATER - LALAPET", "AFZALGUNJ")
  ),
  ["3N"].concat(
    getStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
    getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
    getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FEVER HOSPITAL"),
    SHD[1099],
    getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
  ),
  ["3T"].concat(
    SHD[993],
    getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
  ),

  // 5 Series
  ["5K"].concat(getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")),
  ["5K/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["5K/16AD"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["5K/92A"].concat(
    getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
  ),
  ["5K/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
    getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
  ),

  // 8 SERIES
  ["8A"].concat(getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")),
  ["8UA"].concat(
    getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
    getStops(MHRM_MDCL, "LAL DARWAJA X ROAD", "SECUNDERABAD")
  ),

  // 9 SERIES
  ["9K"].concat(
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507], SHD[220]
  ),
  ["9K/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507], SHD[220]
  ),
  ["9X"].concat(
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'AFZALGUNJ'),
  ),
  ["9X/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'AFZALGUNJ'),
  ),
  // 10 SERIES
  ["10J"].concat(
    getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),
  ["10KL"].concat(
    getStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),
  ["10KM"].concat(
    getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
    SHD[926],
    SHD[536],
    SHD[335],
    getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
  ),

  // 14 SERIES
  ["14P"].concat(
    SHD[780],
    SHD[819],
    SHD[543],
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),

  // 15 SERIES
  ["15H"].concat(
    getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["15D"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["15H/242RG"].concat(
    SHD[842], "INDIRA GRUHAKALPA", SHD[128],
    getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "LALAPET"),
    SHD[917],
    SHD[719],
    getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),

  // 16 SERIES
  ["16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["16A/5K"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16A/49M"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),
  ["16AD/5K"].concat(
    getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
    getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["16H"].concat(
    getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
    "TIRUMALA NAGAR", SHD[264], "ANANDH BAGH",
    getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
    SHD[622],
    SHD[23],
    SHD[878],
    SHD[898]
  ),
  ["16A/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
    getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
  ),

  // 17 SERIES
  ["17DH"].concat(
    getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["17DS"].concat(
    getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
    SHD[993],
    SHD[641],
    getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
  ),
  ["17H"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["17HN"].concat(
    getStops(KSR_SHMB, 'KUSHAIGUDA', 'HB COLONY'),
    getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
    SHD[878],
    SHD[898]
  ),
  ["17H/29B"].concat(
    getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["17/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),
  ["17H/219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
  ),

  ["17S"].concat(
    getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
    SHD[993],
    SHD[641],
    getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
  ),

  // 22 SERIES
  ["22"].concat(
    getStops(SRPT_MNBD, 'HAKEEMPET', 'SECUNDERABAD')
  ),
  ["22D"].concat(
    SHD[612], "MB DARGAH X ROADS", "JANAPRIYA - KOWKOOR", "KOWKOOR",
    getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
  ),
  ["22K"].concat(
    "RAJIV GRUHA KALPA - KOWKOOR", "BHARATH NAGAR - KOWKOOR", "KOWKOOR",
    getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
  ),

  // 24 SERIES
  ["24B"].concat(
    getStops(GTKS_KPHB, 'BALAJI NAGAR', 'LAL BAZAR'),
    getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
  ),
  ["24BA"].concat(
    getStops(GTKS_KPHB, 'AMBEDKAR NAGAR', 'LAL BAZAR'),
    getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
  ),
  ["24BJ"].concat(
    "BJR NAGAR",
    getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'LAL BAZAR'),
    getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
  ),

  // 25 SERIES
  ["25S"].concat(
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
  ),
  ["25S/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
    getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
    getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
  ),

  // 29 SERIES
  ["29B"].concat(getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")),
  ["29B/17H"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
  ),
  ["29B/272G"].concat(
    getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
  ),
  ["29B/272I"].concat(
    SHD[407],
    "BAHUDURPALLY",
    getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
  ),

  // 38 SERIES
  ["38EX"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
    "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
    getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
  ),

  ["38X"].concat(
    getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),
  ["38T"].concat(
    SHD[1027],
    "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
    getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
  ),

  // 40 SERIES
  ["40"].concat(
    SHD[506], SHD[508], SHD[813],
    getStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
    getStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),

    SHD[898]
  ),

  // 49 SERIES
  ["49"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
    getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
    getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
  ),
  ["49A"].concat(
    getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M"].concat(
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
    getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
  ),
  ["49M/92A"].concat(
    getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
    getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
    getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
  ),
  ["49M/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
    getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
  ),
  ["49M/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),
  ["49M/250D"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
  ),

  // 72 SERIES
  ["72/277D"].concat(
    getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
    getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11],
  ),
  ["72H"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11],
  ),
  ["72V"].concat(
    getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
    getStops(TailsDOWN, 'GANESH TEMPLE (VANASTHALIPURAM)', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
    SHD[624], SHD[238], SHD[11]
  ),

  // 86 SERIES
  ["86A"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),
  ["86C"].concat(
    getStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),
  ["86K"].concat(
    SHD[506],
    getStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
    getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
    getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
  ),

  // 90 SERIES
  ["90L"].concat(
    SHD[433],
    SHD[754],
    getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS")
  ),
  ["90LK"].concat(
    getStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
    getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
  ),
  ["90DL"].concat(
    getStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
    SHD[898]
  ),
  ["90LV"].concat(
    SHD[433],
    SHD[754],
    getStops(DNGL_IBP, "SECUNDERABAD", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
    getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE (VANASTHALIPURAM)'),
    getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
  ),
  ["90L/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
  ),
  ["90L/251"].concat(
    getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
    getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
  ),

  // 92 SERIES
  ["92A"].concat("MEHDIPATNAM", getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")),
  ["92A/5K"].concat(
    getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
    getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
  ),
  ["92A/49M"].concat(
    getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
    getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
  ),

  // 117 SERIES
  ["117"].concat(
    SHD[525],
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'NACHARAM X ROADS'),
    getStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
  ),

  // 189 SERIES
  ["189M"].concat(
    getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
    getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
    getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
  ),
  ["189M/272G"].concat(
    getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
    SHD[1087],
    getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
    getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
  ),

  // 218 SERIES
  ["218"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507]
  ),
  ["218A"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
  ),
  ["218C"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION')
  ),
  ["218D"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[506],
    getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
  ),
  ["218L"].concat(
    getStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
    SHD[3], SHD[110], SHD[507]
  ),

  // 219 SERIES
  ["219"].concat(
    getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
    SHD[1087],
    getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
  ),
  ["219/16A"].concat(
    getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
    getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/17"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/17H"].concat(
    getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),
  ["219/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
  ["219/250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
    getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
    SHD[1087],
    getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
  ),
  ["219/272G"].concat(
    getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
    SHD[1087],
    getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
  ),

  // 229 SERIES
  ["229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')),
  ["229/5K"].concat(
    getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
    getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/90L"].concat(
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/219"].concat(getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087], getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'), getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')),
  ["229/279"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/290"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),
  ["229/290U"].concat(
    getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
    getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
  ),

  // 242 SERIES
  ["242"].concat(
    getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242/17H"].concat(
    SHD[898],
    getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
    getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
  ),
  ["242/3K"].concat(
    getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
  ),
  ["242A"].concat(
    "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
    getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242B"].concat(
    SHD[147],
    SHD[46],
    getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242G"].concat(
    "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
    getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242GA"].concat(
    "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", "KEESARAGUTTA KAMAN", "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
    getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),
  ["242RG"].concat(
    SHD[842], "INDIRA GRUHAKALPA", SHD[128],
    getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "TARNAKA"),
    getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
    SHD[878],
    SHD[898]
  ),

  // 250 SERIES
  ["250"].concat(
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
    SHD[878], SHD[898],
  ),
  ["250D"].concat(
    "AMBEDKAR NAGAR CIRCLE",
    getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
    getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
    getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
    getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
    SHD[878], SHD[898],
  ),
  ["250D/49M"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
    getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
    getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    "AMBEDKAR NAGAR CIRCLE"
  ),
  ["250/49"].concat(
    getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
    "LAKDI KA PUL (BJR CLG)",
    getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
    getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
    getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250/49M"].concat(
    getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),
  ["250/219"].concat(
    getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
    SHD[1087],
    getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
    SHD[898],
    getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
    getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
  ),

  // 251 SERIES
  ["251/1Z"].concat(
    getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
    getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
  ),

  // 272 SERIES
  ["272"].concat(
    "BOWRAMPET",
    "BOWRAMPET X ROADS",
    getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
  ),

  // 277 SERIES
  ["277D"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
    getStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
  ),

  // 279 SERIES
  ["279"].concat(
    getStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["279/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
  ),
  ["279U"].concat(getStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")),

  // 290 SERIES
  ["290"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
    getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
    getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["290/229"].concat(
    getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
    getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
    getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
    getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
    SHD[369],
    getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
  ),
  ["290U"].concat(
    getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
    getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
    SHD[754],
    SHD[448]
  ),
  ["290U/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
  ),

  // 299 SERIES
  ["299"].concat(getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")),
  ["299D"].concat(getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

  // 300 SERIES

  ["300"].concat(
    getStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
    getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
    "MEHDIPATNAM"
  ),
  ["300/251"].concat(
    getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
    getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
    getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
  ),
  ["300L"].concat(
    "LB NAGAR X ROADS",
    getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
    "MEHDIPATNAM"
  ),
]


let DetailedRoutesLDMRK_UP = DetailedRoutesUP;

let DetailedRoutesLDMRK_DOWN = DetailedRoutesDOWN;

let pos = 1;
let lengthUP = 110;
let lengthDOWN = 110;
let length = 110;
let feature = 1;

let input = 1;

function inputSearchFilter(ref) {
  if (feature == 3 || feature == 4 || feature == 5) {
    if (ref.id == "input1") {
      suggesionsUL.style.marginTop = "-90px";
      const filterValue = input1.value.toUpperCase();
      const filteredArray = suggesionsArray.filter((item) =>
        item.toUpperCase().includes(filterValue)
      );
      displayList(filteredArray);
      input = ref.id;
    } else if (ref.id == "input2") {
      suggesionsUL.style.marginTop = "-15px";
      const filterValue = input2.value.toUpperCase();
      const filteredArray = suggesionsArray.filter((item) =>
        item.toUpperCase().includes(filterValue)
      );
      displayList(filteredArray);
      input = ref.id;
    } else {
      alert("Error Occured");
    }
  } else {
    suggesionsUL.style.marginTop = "-20px";
    const filterValue = input1.value.toUpperCase();
    const filteredArray = suggesionsArray.filter((item) =>
      item.toUpperCase().includes(filterValue)
    );
    displayList(filteredArray);
  }
}

function displayList(filteredArray) {
  suggesionsUL.style.display = "flex";

  suggesionsUL.innerHTML = "";

  filteredArray.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.setAttribute("onclick", "selectOption(this.innerHTML)");
    suggesionsUL.appendChild(listItem);
  });
}

function selectOption(selected) {
  if (feature == 3 || feature == 4 || feature == 5) {
    if (input == "input1") {
      input1.value = selected;
      input2.value = "";
      outputContent.innerHTML = "";
    } else if (input == "input2") {
      input2.value = selected;
      createRouteListItem(input1.value, input2.value);
    } else {
      alert("Error Occured");
    }
    suggesionsUL.style.display = "none";
  } else {
    input1.value = selected;
    suggesionsUL.style.display = "none";
    createRouteListItem(input1.value, input2.value);
  }
}

function showStops(value) {
  value.children[1].classList.toggle("expand");

  if (value.children[1].id == "downArrowUP") {
    length = lengthUP;
  } else if (value.children[1].id == "downArrowDOWN") {
    length = lengthDOWN;
  } else {
    length = length;
  }

  if (value.children[1].classList[1] == 'expand') {
    value.children[1].style.transform = "rotate(180deg)";
    value.parentNode.parentNode.parentNode.style.height = length + "px";
    value.children[0].innerHTML = "Hide Stops";
  } else if (value.children[1].classList[1] == undefined) {
    value.children[1].style.transform = "rotate(0deg)";
    value.parentNode.parentNode.parentNode.style.height = "110px";
    value.children[0].innerHTML = "View Stops";
  }

}

function createRouteListItem(routeNoI, DestinationI) {
  let routeStartI,
    routeViaI,
    routeEndI,
    routeViaI_UP = "",
    routeViaI_DN = "";
  let Destination = DestinationI;
  let testarray = ["20P", "3L", "17D", "10H", "224G", "9X/272G", "219"];
  let routeFG = [];
  let routeRG = [];
  let ALTroute = [];

  if (feature == 1) {
    // SOURCES

    if (secRoutes_UP.includes(routeNoI)) {
      routeStartI = "SECUNDERABAD";
    } else if (ECILX_UP.includes(routeNoI)) {
      routeStartI = "ECIL X ROADS";
    } else if (AFZ_UP.includes(routeNoI)) {
      routeStartI = "AFZALGUNJ";
    } else if (MP_UP.includes(routeNoI)) {
      routeStartI = "MEHDIPATNAM";
    } else if (MDCL_UP.includes(routeNoI)) {
      routeStartI = "MEDCHAL";
    } else if (PTCR_UP.includes(routeNoI)) {
      routeStartI = "PATANCHERUVU";
    } else if (CBS_UP.includes(routeNoI)) {
      routeStartI = "CBS";
    } else if (CHRM_UP.includes(routeNoI)) {
      routeStartI = "CHARMINAR";
    } else if (KOTI_UP.includes(routeNoI)) {
      routeStartI = "KOTI";
    } else if (KOTIWC_UP.includes(routeNoI)) {
      routeStartI = "KOTI W.COLLEGE";
    } else if (UPL_UP.includes(routeNoI)) {
      routeStartI = "UPPAL";
    } else if (routeNoI == "195W") {
      routeStartI = "WAVEROCK";
      routeEndI = "BACHUPALLY";
    } else if (routeNoI == "29Q") {
      routeStartI = "BALANAGAR";
      routeEndI = "QUTHBULLAPUR";
    } else if (routeNoI == "203A/218") {
      routeStartI = "ADIBATLA";
    } else if (
      routeNoI == "92A" ||
      routeNoI == "95/3K" ||
      routeNoI == "92A/5K" ||
      routeNoI == "92A/49M" ||
      routeNoI == "1Z/229"
    ) {
      routeStartI = "ARAMGHAR";
    } else if (
      routeNoI == "16AD/5K" ||
      routeNoI == "16CD/5K" ||
      routeNoI == "16CD/49M" ||
      routeNoI == "16D/5K" ||
      routeNoI == "16D/49M" ||
      routeNoI == "250D/49M"
    ) {
      routeStartI = "AMBEDKAR NAGAR";
    } else if (routeNoI == "102B/3K" || routeNoI == "102B/218") {
      routeStartI = "BADANGPET";
    } else if (routeNoI == "3N/203N") {
      routeStartI = "BEL";
    } else if (routeNoI == "90L/3K" || routeNoI == "102/9K") {
      routeStartI = "BDL";
    } else if (routeNoI == "18/47U" || routeNoI == "113M/120") {
      routeStartI = "BODUPPAL";
    } else if (
      routeNoI == "6X" ||
      routeNoI == "18C/10H" ||
      routeNoI == "18C/30" ||
      routeNoI == "18C/219" ||
      routeNoI == "18C/229" ||
      routeNoI == "113F"
    ) {
      routeStartI = "CHENGICHERLA";
    } else if (routeNoI == "250C/49M") {
      routeStartI = "CHERLAPALLY";
    } else if (routeNoI == "288D/19K") {
      routeStartI = "CHILKOOR BALAJI TEMPLE";
    } else if (
      routeNoI == "1D/229" ||
      routeNoI == "90DN" ||
      routeNoI == "158" ||
      routeNoI == "158FL" ||
      routeNoI == "218D" ||
      routeNoI == "524" ||
      routeNoI == "555"
    ) {
      routeStartI = "DILSHUKNAGAR";
    } else if (
      routeNoI == "9K/102" ||
      routeNoI == "221G" ||
      routeNoI == "227/25S"
    ) {
      routeStartI = "GANDIMAISAMMA";
    } else if (
      routeNoI == "280/20" ||
      routeNoI == "280/30" ||
      routeNoI == "280/219"
    ) {
      routeStartI = "GHATKESAR";
    } else if (routeNoI == "178G/8A") {
      routeStartI = "GOUSE NAGAR";
    } else if (routeNoI == "116GA/65") {
      routeStartI = "GOWLI DHODDI";
    } else if (routeNoI == "22/90L") {
      routeStartI = "HAKEEMPET";
    } else if (
      routeNoI == "158HF" ||
      routeNoI == "290/229" ||
      routeNoI == "290U/229" ||
      routeNoI == "299" ||
      routeNoI == "299D"
    ) {
      routeStartI = "HAYATHNAGAR";
    } else if (routeNoI == "279U" || routeNoI == "279/229") {
      routeStartI = "IBRAHIMPATNAM";
    } else if (routeNoI == "219I/224G") {
      routeStartI = "ISNAPUR";
    } else if (
      routeNoI == "10KJ/18" ||
      routeNoI == "30/18C" ||
      routeNoI == "30/280"
    ) {
      routeStartI = "JAGATHGIRIGUTTA";
    } else if (
      routeNoI == "107JL" ||
      routeNoI == "279" ||
      routeNoI == "280J" ||
      routeNoI == "300/118W" ||
      routeNoI == "290U" ||
      routeNoI == "290"
    ) {
      routeStartI = "JBS";
    } else if (routeNoI == "29B/17H" || routeNoI == "183B") {
      routeStartI = "JEEDIMETLA";
    } else if (routeNoI == "10JP") {
      routeStartI = "JNTU COLLEGE";
    } else if (
      routeNoI == "83J" ||
      routeNoI == "83JA" ||
      routeNoI == "83J/272G"
    ) {
      routeStartI = "KACHEGUDA STATION";
    } else if (routeNoI == "242/3K" || routeNoI == "242/17H") {
      routeStartI = "KEESARAGUTTA";
    } else if (
      routeNoI == "10H/16A" ||
      routeNoI == "10H/16C" ||
      routeNoI == "10H/18C" ||
      routeNoI == "127K" ||
      routeNoI == "127KL"
    ) {
      routeStartI = "KONDAPUR";
    } else if (routeNoI == "10J/171" || routeNoI == "10K/250") {
      routeStartI = "KPHB 4TH PHASE";
    } else if (routeNoI == "19K/288D" || routeNoI == "185/102") {
      routeStartI = "KUKATPALLY";
    } else if (routeNoI == "15H/20" || routeNoI == "37/8") {
      routeStartI = "KUSHAIGUDA";
    } else if (
      routeNoI == "90L" ||
      routeNoI == "90LK" ||
      routeNoI == "90L/22" ||
      routeNoI == "90L/229" ||
      routeNoI == "100X" ||
      routeNoI == "156L" ||
      routeNoI == "300/126"
    ) {
      routeStartI = "LB NAGAR";
    } else if (routeNoI == "123/65M") {
      routeStartI = "MANCHIREVULA";
    } else if (routeNoI == "47L/16A" || routeNoI == "47L/16C") {
      routeStartI = "MANIKONDA";
    } else if (routeNoI == "277") {
      routeStartI = "MGBS";
    } else if (
      routeNoI == "218/277K" ||
      routeNoI == "224B" ||
      routeNoI == "224G" ||
      routeNoI == "224X"
    ) {
      routeStartI = "MIYAPUR";
    } else if (routeNoI == "221") {
      routeStartI = "MIYAPUR METRO STN.";
    } else if (routeNoI == "288/113M") {
      routeStartI = "MOINABAD";
    } else if (routeNoI == "11W") {
      routeStartI = "MYTHRIVANAM";
    } else if (
      routeNoI == "203N/3K" ||
      routeNoI == "203N/3N" ||
      routeNoI == "203N/102B" ||
      routeNoI == "203N/218"
    ) {
      routeStartI = "NADERGUL";
    } else if (routeNoI == "49/250") {
      routeStartI = "NAMPALLY";
    } else if (
      routeNoI == "90LV" ||
      routeNoI == "156V" ||
      routeNoI == "158VF"
    ) {
      routeStartI = "NGO'S COLONY";
    } else if (routeNoI == "224MN") {
      routeStartI = "NIZAMPET X ROADS";
    } else if (routeNoI == "92R") {
      routeStartI = "RAJENDRA NAGAR";
    } else if (routeNoI == "6KR") {
      routeStartI = "RAM NAGAR";
    } else if (routeNoI == "18R") {
      routeStartI = "RAMANTHAPUR CHURCH";
    } else if (routeNoI == "8R") {
      routeStartI = "RISALA BAZAR";
    } else if (routeNoI == "105") {
      routeStartI = "SAIDABAD COLONY";
    } else if (routeNoI == "19S/505") {
      routeStartI = "SANATH NAGAR";
    } else if (routeNoI == "20/15H" || routeNoI == "20/280") {
      routeStartI = "SECRETARIATE";
    } else if (routeNoI == "251/1Z") {
      routeStartI = "SHAMSHABAD";
    } else if (routeNoI == "183SS") {
      routeStartI = "SUCHITRA";
    } else if (routeNoI == "49MT/250") {
      routeStartI = "TALLAGADDA";
    } else if (routeNoI == "203U" || routeNoI == "300/251") {
      routeStartI = "UPPAL X ROADS";
    } else if (routeNoI == "18/10KJ") {
      routeStartI = "UPPAL DEPOT";
    } else if (routeNoI == "18VJ") {
      routeStartI = "VENKATREDDY NAGAR";
    } else if (
      routeNoI == "118W/300" ||
      routeNoI == "195W" ||
      routeNoI == "195WP"
    ) {
      routeStartI = "WAVEROCK";
    } else {
      routeStartI = routeStartI;
    }

    // DESTINATIONS

    if (secRoutes_DN.includes(routeNoI)) {
      routeEndI = "SECUNDERABAD";
    } else if (ECILX_DN.includes(routeNoI)) {
      routeEndI = "ECIL X ROADS";
    } else if (AFZ_DN.includes(routeNoI)) {
      routeEndI = "AFZALGUNJ";
    } else if (MP_DN.includes(routeNoI)) {
      routeEndI = "MEHDIPATNAM";
    } else if (KG_DN.includes(routeNoI)) {
      routeEndI = "KUSHAIGUDA";
    } else if (AMBD_DN.includes(routeNoI)) {
      routeEndI = "AMBEDKAR NAGAR";
    } else if (MDCL_DN.includes(routeNoI)) {
      routeEndI = "MEDCHAL";
    } else if (PTCR_DN.includes(routeNoI)) {
      routeEndI = "PATANCHERUVU";
    } else if (ARGR_DN.includes(routeNoI)) {
      routeEndI = "ARAMGHAR";
    } else if (GDMS_DN.includes(routeNoI)) {
      routeEndI = "GANDIMAISAMMA";
    } else if (GTKS_DN.includes(routeNoI)) {
      routeEndI = "GHATKESAR";
    } else if (BRBD_DN.includes(routeNoI)) {
      routeEndI = "BORABANDA";
    } else if (
      routeNoI == "203A" ||
      routeNoI == "203U" ||
      routeNoI == "218/203A"
    ) {
      routeEndI = "ADIBATLA";
    } else if (routeNoI == "230A") {
      routeEndI = "AIRFORCE ACADEMY";
    } else if (routeNoI == "288A") {
      routeEndI = "AMDAPUR";
    } else if (routeNoI == "205A" || routeNoI == "290UA") {
      routeEndI = "ANAJPUR";
    } else if (routeNoI == "242A" || routeNoI == "242GA") {
      routeEndI = "ANKIREDDY PALLY";
    } else if (routeNoI == "85/253L") {
      routeEndI = "ANNOJIGUDA";
    } else if (routeNoI == "18/47U") {
      routeEndI = "AOU UNIVERSITY";
    } else if (routeNoI == "83J" || routeNoI == "83JA" || routeNoI == "189M") {
      routeEndI = "APUROOPA COLONY";
    } else if (routeNoI == "3M") {
      routeEndI = "AS RAO NAGAR";
    } else if (routeNoI == "245A") {
      routeEndI = "AUSHAPUR";
    } else if (routeNoI == "195W") {
      routeEndI = "BACHUPALLY";
    } else if (
      routeNoI == "3K/102B" ||
      routeNoI == "90BE" ||
      routeNoI == "100X" ||
      routeNoI == "102B" ||
      routeNoI == "218/102B"
    ) {
      routeEndI = "BADANGPET";
    } else if (routeNoI == "227") {
      routeEndI = "BAHUDURPALLY";
    } else if (routeNoI == "24B" || routeNoI == "17DH" || routeNoI == "17DS") {
      routeEndI = "BALAJI NAGAR";
    } else if (routeNoI == "183B") {
      routeEndI = "BALANAGAR";
    } else if (routeNoI == "102M") {
      routeEndI = "BALAPUR";
    } else if (routeNoI == "90B") {
      routeEndI = "BANDLAGUDA DEPOT";
    } else if (routeNoI == "229B") {
      routeEndI = "BANK COLONY";
    } else if (routeNoI == "2C") {
      routeEndI = "BARKAS";
    } else if (
      routeNoI == "3K/90L" ||
      routeNoI == "3K/102" ||
      routeNoI == "9K/102" ||
      routeNoI == "22/90L" ||
      routeNoI == "185/102"
    ) {
      routeEndI = "BDL";
    } else if (routeNoI == "203N/3N") {
      routeEndI = "BEL";
    } else if (routeNoI == "23B") {
      routeEndI = "BHUDEVI NAGAR";
    } else if (routeNoI == "280/488") {
      routeEndI = "BIBI NAGAR";
    } else if (routeNoI == "212") {
      routeEndI = "BITS PILANI";
    } else if (routeNoI == "3Y" || routeNoI == "24BJ") {
      routeEndI = "BJR NAGAR";
    } else if (routeNoI == "18B" || routeNoI == "50B") {
      routeEndI = "BODUPPAL";
    } else if (routeNoI == "242B" || routeNoI == "280B") {
      routeEndI = "BOGARAM";
    } else if (routeNoI == "224B") {
      routeEndI = "BOLLARUM";
    } else if (routeNoI == "272") {
      routeEndI = "BOWRAMPET";
    } else if (routeNoI == "202B") {
      routeEndI = "BRAHMANAPALLY";
    } else if (
      routeNoI == "1C" ||
      routeNoI == "8R" ||
      routeNoI == "86C"
    ) {
      routeEndI = "CBS";
    } else if (routeNoI == "8A" || routeNoI == "8AK" || routeNoI == "8C") {
      routeEndI = "CHANDRAYANGUTTA";
    } else if (routeNoI == "272G/9XM") {
      routeEndI = "CHARMINAR";
    } else if (
      routeNoI == "10H/18C" ||
      routeNoI == "18C" ||
      routeNoI == "30/18C" ||
      routeNoI == "71A" ||
      routeNoI == "219/18C" ||
      routeNoI == "229/18C" ||
      routeNoI == "250S"
    ) {
      routeEndI = "CHENGICHERLA";
    } else if (routeNoI == "250E") {
      routeEndI = "CHENGICHERLA DEPOT";
    } else if (
      routeNoI == "17CS" ||
      routeNoI == "49M/250C" ||
      routeNoI == "250C"
    ) {
      routeEndI = "CHERLAPALLY";
    } else if (routeNoI == "593") {
      routeEndI = "CHEVELLA";
    } else if (routeNoI == "19K/288D" || routeNoI == "288D") {
      routeEndI = "CHILKOOR BALAJI TEMPLE";
    } else if (routeNoI == "555") {
      routeEndI = "CHOTUPPAL";
    } else if (routeNoI == "211M") {
      routeEndI = "CRPF";
    } else if (routeNoI == "568") {
      routeEndI = "DAMARAKUNTA";
    } else if (routeNoI == "290U/463") {
      routeEndI = "DESHMUKHI";
    } else if (routeNoI == "211DY") {
      routeEndI = "DEVARAYAMJAL";
    } else if (
      routeNoI == "1D" ||
      routeNoI == "90DL" ||
      routeNoI == "107JD" ||
      routeNoI == "107VR" ||
      routeNoI == "299D"
    ) {
      routeEndI = "DILSHUKNAGAR";
    } else if (routeNoI == "211/242" || routeNoI == "242/211") {
      routeEndI = "DONGALAMYSAMMA";
    } else if (routeNoI == "211CD") {
      routeEndI = "DRDO (YADGARPALLY)";
    } else if (
      routeNoI == "9K/230P" ||
      routeNoI == "9X/230P" ||
      routeNoI == "9XM/230P" ||
      routeNoI == "230P"
    ) {
      routeEndI = "DUNDIGAL";
    } else if (routeNoI == "6X") {
      routeEndI = "IRRUMANZIL";
    } else if (routeNoI == "158") {
      routeEndI = "ESI HOSPITAL";
    } else if (routeNoI == "221G") {
      routeEndI = "GACHIBOWLI";
    } else if (routeNoI == "171" || routeNoI == "189M/171M") {
      routeEndI = "GAJULARAMARAM";
    } else if (routeNoI == "44X") {
      routeEndI = "GANGAPUTRA COLONY";
    } else if (routeNoI == "65MG" || routeNoI == "66G") {
      routeEndI = "GOLCONDA";
    } else if (routeNoI == "25M") {
      routeEndI = "GOPAL NAGAR";
    } else if (routeNoI == "8A/178G") {
      routeEndI = "GOUSE NAGAR";
    } else if (routeNoI == "65/116GA" || routeNoI == "116N") {
      routeEndI = "GOWLI DHODDI";
    } else if (routeNoI == "201G") {
      routeEndI = "GOWRELLY";
    } else if (routeNoI == "22" || routeNoI == "90L/22") {
      routeEndI = "HAKIMPET";
    } else if (
      routeNoI == "1D/299" ||
      routeNoI == "72H" ||
      routeNoI == "156/299" ||
      routeNoI == "229/290" ||
      routeNoI == "229/290U" ||
      routeNoI == "290" ||
      routeNoI == "290U"
    ) {
      routeEndI = "HAYATHNAGAR";
    } else if (routeNoI == "3N") {
      routeEndI = "HEMA NAGAR";
    } else if (
      routeNoI == "72/277D" ||
      routeNoI == "229/279" ||
      routeNoI == "277" ||
      routeNoI == "277D" ||
      routeNoI == "279"
    ) {
      routeEndI = "IBRAHIMPATNAM";
    } else if (routeNoI == "224X") {
      routeEndI = "IDA BOLLARUM";
    } else if (routeNoI == "15IG") {
      routeEndI = "INDIRA NAGAR";
    } else if (routeNoI == "29B/272I" || routeNoI == "272IG/29B") {
      routeEndI = "INDIRAMMA COLONY";
    } else if (
      routeNoI == "10KJ" ||
      routeNoI == "18/10KJ" ||
      routeNoI == "18C/30" ||
      routeNoI == "19KJ" ||
      routeNoI == "30" ||
      routeNoI == "185G" ||
      routeNoI == "280/30"
    ) {
      routeEndI = "JAGATHGIRIGUTTA";
    } else if (routeNoI == "72J") {
      routeEndI = "JAIPURI COLONY";
    } else if (
      routeNoI == "18J" ||
      routeNoI == "18R" ||
      routeNoI == "18VJ" ||
      routeNoI == "90L" ||
      routeNoI == "90LV" ||
      routeNoI == "118W/300"
    ) {
      routeEndI = "JBS";
    } else if (
      routeNoI == "9K" ||
      routeNoI == "9X" ||
      routeNoI == "9XM" ||
      routeNoI == "17H/29B" ||
      routeNoI == "29B"
    ) {
      routeEndI = "JEEDIMETLA";
    } else if (
      routeNoI == "1J" ||
      routeNoI == "2J" ||
      routeNoI == "3KJ" ||
      routeNoI == "86J"
    ) {
      routeEndI = "JIYAGUDA";
    } else if (routeNoI == "10J" || routeNoI == "300/126") {
      routeEndI = "JNTU COLLEGE";
    } else if (routeNoI == "25AJ") {
      routeEndI = "JONNABANDA";
    } else if (routeNoI == "532") {
      routeEndI = "JP DARGAH";
    } else if (
      routeNoI == "1X" ||
      routeNoI == "90LK"
    ) {
      routeEndI = "KACHEGUDA STATION";
    } else if (routeNoI == "1K" || routeNoI == "2K" || routeNoI == "71K") {
      routeEndI = "KACHEGUDA DEPOT";
    } else if (routeNoI == "5K/188" || routeNoI == "6KR" || routeNoI == "188") {
      routeEndI = "KALI MANDIR";
    } else if (routeNoI == "290KP") {
      routeEndI = "KAVADIPALLY";
    } else if (
      routeNoI == "3K/242" ||
      routeNoI == "242" ||
      routeNoI == "242/17H"
    ) {
      routeEndI = "KEESARAGUTTA";
    } else if (routeNoI == "242G") {
      routeEndI = "KEESARA";
    } else if (routeNoI == "498") {
      routeEndI = "KESHAVAPUR";
    } else if (routeNoI == "211K") {
      routeEndI = "KESHAVARAM";
    } else if (routeNoI == "23BK") {
      routeEndI = "KISTAMMA ENCLAVE";
    } else if (routeNoI == "116/220K") {
      routeEndI = "KOLLURU";
    } else if (routeNoI == "211D") {
      routeEndI = "KOLTHUR";
    } else if (
      routeNoI == "10H" ||
      routeNoI == "16A/10H" ||
      routeNoI == "16C/10H" ||
      routeNoI == "18C/10H" ||
      routeNoI == "147"
    ) {
      routeEndI = "KONDAPUR";
    } else if (routeNoI == "203AK" || routeNoI == "218/277K") {
      routeEndI = "KONGARAKALAN";
    } else if (routeNoI == "40" || routeNoI == "115" || routeNoI == "127K" || routeNoI == "86K") {
      routeEndI = "KOTI";
    } else if (routeNoI == "299") {
      routeEndI = "KOTI W.COLLEGE";
    } else if (
      routeNoI == "10K" ||
      routeNoI == "19K" ||
      routeNoI == "19M" ||
      routeNoI == "113K" ||
      routeNoI == "250/10K"
    ) {
      routeEndI = "KPHB 4TH PHASE";
    } else if (routeNoI == "288D/19K") {
      routeEndI = "KUKATPALLY";
    } else if (
      routeNoI == "1L" ||
      routeNoI == "107JL" ||
      routeNoI == "107VL" ||
      routeNoI == "127KL" ||
      routeNoI == "229/90L" ||
      routeNoI == "300L"
    ) {
      routeEndI = "LB NAGAR";
    } else if (routeNoI == "102/253L") {
      routeEndI = "LEMOOR";
    } else if (
      routeNoI == "10HL" ||
      routeNoI == "10KL" ||
      routeNoI == "113KL" ||
      routeNoI == "216" ||
      routeNoI == "216M" ||
      routeNoI == "218L"
    ) {
      routeEndI = "LINGAMPALLY";
    } else if (routeNoI == "218/224MN" || routeNoI == "224MN") {
      routeEndI = "MALLAMPET";
    } else if (routeNoI == "412") {
      routeEndI = "MALL";
    } else if (routeNoI == "290U/205") {
      routeEndI = "MAJEEDPUR";
    } else if (routeNoI == "253" || routeNoI == "253W") {
      routeEndI = "MAHESHWARAM";
    } else if (
      routeNoI == "47YM" ||
      routeNoI == "65M/123" ||
      routeNoI == "113M/120" ||
      routeNoI == "221"
    ) {
      routeEndI = "MANCHIREVULA";
    } else if (
      routeNoI == "16A/47L" ||
      routeNoI == "16C/47L" ||
      routeNoI == "47L" ||
      routeNoI == "47Y"
    ) {
      routeEndI = "MANIKONDA";
    } else if (
      routeNoI == "10KM" ||
      routeNoI == "19KM" ||
      routeNoI == "113KM"
    ) {
      routeEndI = "MIYAPUR";
    } else if (routeNoI == "113M/288" || routeNoI == "288") {
      routeEndI = "MOINABAD";
    } else if (routeNoI == "251M") {
      routeEndI = "MUCHINTHAL";
    } else if (
      routeNoI == "3N/203N" ||
      routeNoI == "102B/203N" ||
      routeNoI == "203N" ||
      routeNoI == "218/203N" ||
      routeNoI == "277N"
    ) {
      routeEndI = "NADERGUL";
    } else if (routeNoI == "20P" || routeNoI == "49" || routeNoI == "250/49") {
      routeEndI = "NAMPALLY";
    } else if (routeNoI == "219N") {
      routeEndI = "NARENDAR COLONY";
    } else if (routeNoI == "123") {
      routeEndI = "NARSINGI";
    } else if (routeNoI == "26N") {
      routeEndI = "NEW BOWENPALLY";
    } else if (routeNoI == "1M/D") {
      routeEndI = "NEW MARUTHI NAGAR";
    } else if (routeNoI == "280N") {
      routeEndI = "NFC NAGAR";
    } else if (routeNoI == "1V" || routeNoI == "72V") {
      routeEndI = "NGO'S COLONY";
    } else if (routeNoI == "233") {
      routeEndI = "NUTHANAKAL";
    } else if (routeNoI == "26M") {
      routeEndI = "OLD BOWENPALLY";
    } else if (routeNoI == "120") {
      routeEndI = "OSMANSAGAR";
    } else if (routeNoI == "25P") {
      routeEndI = "PANCHASHEELA";
    } else if (routeNoI == "46") {
      routeEndI = "PATIGADDA";
    } else if (routeNoI == "524") {
      routeEndI = "POCHAMPALLY";
    } else if (routeNoI == "211") {
      routeEndI = "POTHAIPALLY";
    } else if (routeNoI == "10JP" || routeNoI == "19MP") {
      routeEndI = "PRAGATHI NAGAR";
    } else if (routeNoI == "3L" || routeNoI == "14P" || routeNoI == "16P") {
      routeEndI = "PRASHANTH NAGAR";
    } else if (routeNoI == "229P") {
      routeEndI = "PUDUR";
    } else if (routeNoI == "94R") {
      routeEndI = "RAJENDRA NAGAR";
    } else if (routeNoI == "22K" || routeNoI == "104A") {
      routeEndI = "RAJIV GRUHAKALPA";
    } else if (routeNoI == "290UF") {
      routeEndI = "RAMOJI FILM CITY";
    } else if (routeNoI == "203AR") {
      routeEndI = "RAVIRYALA";
    } else if (routeNoI == "447R") {
      routeEndI = "RAVULAPALLY";
    } else if (routeNoI == "103") {
      routeEndI = "RCI";
    } else if (
      routeNoI == "15H/242RG" ||
      routeNoI == "242RG"
    ) {
      routeEndI = "RG COLONY";
    } else if (routeNoI == "3K/252") {
      routeEndI = "RGI AIRPORT";
    } else if (routeNoI == "5R" || routeNoI == "5/5R") {
      routeEndI = "RISALA BAZAR";
    } else if (routeNoI == "104R") {
      routeEndI = "RN REDDY NAGAR";
    } else if (routeNoI == "10" || routeNoI == "19S") {
      routeEndI = "SANATH NAGAR";
    } else if (
      routeNoI == "1HD" ||
      routeNoI == "107JS" ||
      routeNoI == "107VS"
    ) {
      routeEndI = "SAROORNAGAR";
    } else if (
      routeNoI == "15H/20" ||
      routeNoI == "16R/20" ||
      routeNoI == "105" ||
      routeNoI == "280/20"
    ) {
      routeEndI = "SECRETARIATE";
    } else if (
      routeNoI == "10J/171" ||
      routeNoI == "24SS" ||
      routeNoI == "183SS"
    ) {
      routeEndI = "SHAHPUR NAGAR";
    } else if (
      routeNoI == "1Z/251" ||
      routeNoI == "7Z/251" ||
      routeNoI == "90L/251" ||
      routeNoI == "188/251" ||
      routeNoI == "300/251"
    ) {
      routeEndI = "SHAMSHABAD";
    } else if (routeNoI == "19S/505" || routeNoI == "505") {
      routeEndI = "SHANKARPALLY";
    } else if (routeNoI == "25MS") {
      routeEndI = "SHARAN NAGAR";
    } else if (routeNoI == "92K" || routeNoI == "95K" || routeNoI == "2Z") {
      routeEndI = "SRI RAM COLONY";
    } else if (routeNoI == "171R") {
      routeEndI = "SRI RAM NAGAR";
    } else if (routeNoI == "29S") {
      routeEndI = "SUBHASH NAGAR";
    } else if (
      routeNoI == "1/25S" ||
      routeNoI == "1P/25S" ||
      routeNoI == "2/25S" ||
      routeNoI == "23GS" ||
      routeNoI == "24S" ||
      routeNoI == "25S"
    ) {
      routeEndI = "SUCHITRA";
    } else if (routeNoI == "9X/283D" || routeNoI == "283C") {
      routeEndI = "SURARAM COLONY";
    } else if (routeNoI == "25A") {
      routeEndI = "SURYA NAGAR";
    } else if (routeNoI == "49MT" || routeNoI == "250/49MT") {
      routeEndI = "TALLAGADDA";
    } else if (routeNoI == "3T") {
      routeEndI = "TARNAKA";
    } else if (routeNoI == "23T") {
      routeEndI = "TELECOM NAGAR";
    } else if (routeNoI == "241T") {
      routeEndI = "THIMMAIPALLY";
    } else if (routeNoI == "38T") {
      routeEndI = "TUKARAMGATE";
    } else if (routeNoI == "212T") {
      routeEndI = "TURKAPALLY";
    } else if (routeNoI == "211B" || routeNoI == "498U") {
      routeEndI = "UDDHAMARRI";
    } else if (
      routeNoI == "18" ||
      routeNoI == "90DN" ||
      routeNoI == "279U" ||
      routeNoI == "288/113M" ||
      routeNoI == "300"
    ) {
      routeEndI = "UPPAL";
    } else if (routeNoI == "10KJ/18") {
      routeEndI = "UPPAL DEPOT";
    } else if (routeNoI == "2U" || routeNoI == "8UA") {
      routeEndI = "UPPUGUDA";
    } else if (routeNoI == "212/702") {
      routeEndI = "VARGAL TEMPLE";
    } else if (routeNoI == "85V") {
      routeEndI = "VENKATAPUR";
    } else if (routeNoI == "18V") {
      routeEndI = "VENKATREDDY NAGAR";
    } else if (routeNoI == "17DV" || routeNoI == "17V") {
      routeEndI = "VIKAS NAGAR";
    } else if (routeNoI == "3V") {
      routeEndI = "VST";
    } else if (
      routeNoI == "10W" ||
      routeNoI == "11W" ||
      routeNoI == "113W" ||
      routeNoI == "300/118W"
    ) {
      routeEndI = "WAVEROCK";
    } else if (routeNoI == "21W") {
      routeEndI = "WEST VENKATAPURAM";
    } else if (routeNoI == "16NY" || routeNoI == "24") {
      routeEndI = "YAPRAL";
    } else if (routeNoI == "10Y") {
      routeEndI = "YOUSUFGUDA";
    } else if (routeNoI == "22D") {
      routeEndI = "MB DARGAH";
    } else {
      routeEndI = routeEndI;
    }

    routeViaI = viaArray[suggesionsArray.indexOf(routeNoI)].split(",");

    for (let i = 0; i < routeViaI.length; i++) {
      if (i == routeViaI.length - 1) {
        routeViaI_UP += routeViaI[i];
      } else {
        routeViaI_UP += routeViaI[i] + ", ";
      }
    }

    for (let k = routeViaI.length - 1; k >= 0; k--) {
      if (k == 0) {
        routeViaI_DN += routeViaI[k];
      } else {
        routeViaI_DN += routeViaI[k] + ", ";
      }
    }

    outputContent.innerHTML = "";
    let i = 0;
    while (i < 2) {
      let routeListItem = document.createElement("div");
      routeListItem.setAttribute("class", "routeListItem");

      let header = document.createElement("div");
      header.setAttribute("class", "header");

      let left = document.createElement("div");
      left.setAttribute("class", "left");

      let right = document.createElement("div");
      right.setAttribute("class", "right");

      let downArrowContainer = document.createElement("div");
      downArrowContainer.setAttribute("id", "downArrowContainer");
      downArrowContainer.setAttribute("onclick", "showStops(this)");

      let content = document.createElement("div");
      content.setAttribute("class", "content");

      let routeNo = document.createElement("h2");
      let routeNo2 = document.createElement("h2");

      let routeStart = document.createElement("h2");
      let routeEnd = document.createElement("h2");

      let routeVia = document.createElement("p");
      let viewStops = document.createElement("p");

      let downArrow = document.createElement("img");
      downArrow.setAttribute("src", "down_Arrow.png");
      downArrow.setAttribute("class", "downArrow");

      viewStops.textContent = "View Stops";

      let doubleRouteNo = "";
      let routeNoUP = "";
      let routeNoDN = "";

      if (routeNoI.includes("/")) {
        left.appendChild(routeNo);
        left.appendChild(routeNo2);
        routeNo.setAttribute("class", "doubleRoute");
        doubleRouteNo = routeNoI.split("/");
        if (doubleRouteNo.length == 3) {
          routeNoUP = doubleRouteNo[0] + "/" + doubleRouteNo[1];
          routeNoDN = doubleRouteNo[2];
        } else if (doubleRouteNo.length == 2) {
          routeNoUP = doubleRouteNo[0];
          routeNoDN = doubleRouteNo[1];
        }
      } else {
        left.appendChild(routeNo);
        routeNoI = routeNoI;
      }

      // Append code was there

      if (i == 0) {
        downArrow.setAttribute("id", "downArrowUP");
        if (routeNoI.includes("/")) {
          routeNo.textContent = routeNoUP;
          routeNo2.textContent = routeNoDN;
        } else {
          routeNo.textContent = routeNoI;
        }
        routeStart.textContent = routeStartI;
        routeVia.textContent = routeViaI_UP;
        routeEnd.textContent = routeEndI;

        for (let index = 0; index < DetailedRoutesUP.length; index++) {
          if (DetailedRoutesUP[index][0] == routeNoI) {
            let indexF = index;
            let drUL = document.createElement("ul");
            for (let j = 1; j < DetailedRoutesUP[indexF].length; j++) {
              let drULLI = document.createElement("li");
              let stopName = document.createElement("h3");
              let landmarks = document.createElement("p");
              stopName.textContent = DetailedRoutesUP[indexF][j];
              landmarks.textContent = DetailedRoutesLDMRK_UP[indexF][j];
              drULLI.appendChild(stopName);
              drULLI.appendChild(landmarks);
              drUL.appendChild(drULLI);
            }
            content.innerHTML = "";
            content.appendChild(drUL);
            lengthUP = 120 + (DetailedRoutesUP[indexF].length - 1) * 55;
            break;
          } else {
            content.innerHTML = "";
            let h4C = document.createElement("h4");
            h4C.textContent = "Full Route Not Found";
            h4C.style.textAlign = "center";
            content.appendChild(h4C);
          }
        }

        routeListItem.appendChild(header);
        routeListItem.appendChild(content);
        header.appendChild(left);
        header.append(right);
        right.appendChild(routeStart);
        right.appendChild(routeVia);
        right.appendChild(routeEnd);
        right.appendChild(downArrowContainer);
        downArrowContainer.appendChild(viewStops);
        downArrowContainer.appendChild(downArrow);
        outputContent.appendChild(routeListItem);
      }
      if (i == 1) {
        if (routeNoI == "38EX" || routeNoI == "38X") {

        } else {
          routeListItem.appendChild(header);
          routeListItem.appendChild(content);
          header.appendChild(left);
          header.append(right);
          right.appendChild(routeStart);
          right.appendChild(routeVia);
          right.appendChild(routeEnd);
          right.appendChild(downArrowContainer);
          downArrowContainer.appendChild(viewStops);
          downArrowContainer.appendChild(downArrow);
          outputContent.appendChild(routeListItem);
        }

        downArrow.setAttribute("id", "downArrowDOWN");
        if (routeNoI.includes("/")) {
          routeNo.textContent = routeNoDN;
          routeNo2.textContent = routeNoUP;
        } else {
          routeNo.textContent = routeNoI;
        }
        routeStart.textContent = routeEndI;
        routeVia.textContent = routeViaI_DN;
        routeEnd.textContent = routeStartI;

        for (let index = 0; index < DetailedRoutesDOWN.length; index++) {
          if (DetailedRoutesDOWN[index][0] == routeNoI) {
            let indexF = index;
            let drUL = document.createElement("ul");

            for (let j = 1; j < DetailedRoutesDOWN[indexF].length; j++) {
              let drULLI = document.createElement("li");
              let stopName = document.createElement("h3");
              let landmarks = document.createElement("p");
              stopName.textContent = DetailedRoutesDOWN[indexF][j];
              landmarks.textContent = DetailedRoutesLDMRK_DOWN[indexF][j];
              drULLI.appendChild(stopName);
              drULLI.appendChild(landmarks);
              drUL.appendChild(drULLI);
            }
            content.innerHTML = "";
            content.appendChild(drUL);
            lengthDOWN = 120 + (DetailedRoutesDOWN[indexF].length - 1) * 55;
            break;
          } else {
            content.innerHTML = "";
            let h4C = document.createElement("h4");
            h4C.textContent = "Full Route Not Found";
            h4C.style.textAlign = "center";
            content.appendChild(h4C);
          }
        }


      }

      i++;
    }
  } else if (feature == 2) {
    Destination = routeNoI;

    routeFG = routesFGarray[SHD.indexOf(Destination)];
    routeRG = routesRGarray[SHD.indexOf(Destination)];

    outputContent.innerHTML = "";
    let busStopItem = document.createElement("div");
    busStopItem.setAttribute("class", "busStopItem");

    let header = document.createElement("div");
    header.setAttribute("class", "header");

    let faP = document.createElement("p");
    faP.textContent = "Frequently Available";
    let faRL = document.createElement("ul");
    let raP = document.createElement("p");
    raP.textContent = "Rarely Available";
    let raRL = document.createElement("ul");

    for (let i = 0; i < routeFG.length; i++) {
      let busRouteItem = document.createElement("li");
      busRouteItem.textContent = routeFG[i];
      faRL.appendChild(busRouteItem);
    }

    for (let i = 0; i < routeRG.length; i++) {
      let busRouteItem = document.createElement("li");
      busRouteItem.textContent = routeRG[i];
      raRL.appendChild(busRouteItem);
    }

    busStopItem.appendChild(header);
    header.appendChild(faP);
    header.appendChild(faRL);
    header.appendChild(raP);
    header.appendChild(raRL);
    outputContent.append(busStopItem);
  } else if (feature == 3) {
    Destination = DestinationI;

    if (arraysrc.includes(input1.value) && arraydst.includes(input2.value)) {
      var i = arraysrc.indexOf(input1.value);
      var j = arraydst.indexOf(input2.value);
      routeFG = array_FT_RG[i][j];
      routeRG = array_FT_OG[i][j];
    }

    outputContent.innerHTML = "";
    let busStopItem = document.createElement("div");
    busStopItem.setAttribute("class", "busStopItem");

    let header = document.createElement("div");
    header.setAttribute("class", "header");

    let faP = document.createElement("p");
    faP.textContent = "Frequent Buses";
    let faRL = document.createElement("ul");
    let raP = document.createElement("p");
    raP.textContent = "Rare Buses";
    let raRL = document.createElement("ul");

    for (let i = 0; i < routeFG.length; i++) {
      let busRouteItem = document.createElement("li");
      busRouteItem.textContent = routeFG[i];
      faRL.appendChild(busRouteItem);
    }

    for (let i = 0; i < routeRG.length; i++) {
      let busRouteItem = document.createElement("li");
      busRouteItem.textContent = routeRG[i];
      raRL.appendChild(busRouteItem);
    }

    busStopItem.appendChild(header);
    header.appendChild(faP);
    header.appendChild(faRL);
    header.appendChild(raP);
    header.appendChild(raRL);
    outputContent.append(busStopItem);
  } else if (feature == 4) {
    Destination = DestinationI;

    if (arraysrc.includes(input1.value) && arraydst.includes(input2.value)) {
      var i = arraysrc.indexOf(input1.value);
      var j = arraydst.indexOf(input2.value);
      routeFG = arrayfaresCO[i][j];
      routeRG = arrayfaresME[i][j];
    }

    outputContent.innerHTML = "";
    let busStopItem = document.createElement("div");
    busStopItem.setAttribute("class", "busStopItem");

    let header = document.createElement("div");
    header.setAttribute("class", "header");

    // Create table element
    var table = document.createElement("table");

    // Create header row
    var headerRow = document.createElement("tr");

    // Create header cells
    var headerCell1 = document.createElement("th");
    headerCell1.textContent = "Service Type";

    var headerCell2 = document.createElement("th");
    headerCell2.textContent = "Fare Amount";

    // Append header cells to header row
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);

    // Append header row to table
    table.appendChild(headerRow);

    // Create data rows
    for (var i = 0; i < 2; i++) {
      // Create row
      var row = document.createElement("tr");

      // Create cells
      var cell1 = document.createElement("td");

      var cell2 = document.createElement("td");

      var head = document.createElement("h3");
      head.setAttribute("class", "headTitle");
      head.textContent = routeNoI + " - " + DestinationI;

      // Append cells to row
      row.appendChild(cell1);
      row.appendChild(cell2);

      // Append row to table
      table.appendChild(row);

      if (i == 0) {
        cell1.textContent = "City Ordinary";
        cell2.textContent = routeFG + "/-";
      } else if (i == 1) {
        cell1.textContent = "Metro Express";
        cell2.textContent = routeRG + "/-";
      } else {
        alert("Error Occured");
      }
    }

    // Append table to the body of the document
    document.body.appendChild(table);

    busStopItem.appendChild(header);
    header.appendChild(head);
    header.appendChild(table);
    outputContent.append(busStopItem);
  } else if (feature == 5) {
    Destination = DestinationI;
    if (arraysrc.includes(input1.value) && arraydst.includes(input2.value)) {
      var i = arraysrc.indexOf(input1.value);
      var j = arraydst.indexOf(input2.value);
      routeFG = array_FT_RG[i][j];
      routeRG = array_FT_OG[i][j];
      if (routeFG[0] == "REDIRECT") {
        ALT = array_ALT_RT[i][j];
        if (ALT == "REDIRECT") {
          openHelpDesk(
            "Sorry",
            "We are working on this route, try again Later."
          );
        } else {
          console.log(ALT.length);
          if (ALT.length == 6) {
            fillAlternateRoute(
              1,
              ALT[0],
              ALT[1],
              ALT[2],
              ALT[3],
              ALT[4],
              ALT[5]
            )
          } else if (ALT.length == 8) {
            fillAlternateRoute(
              2,
              ALT[0],
              ALT[1],
              ALT[2],
              ALT[3],
              ALT[4],
              ALT[5],
              ALT[6],
              ALT[7]
            )
          }
        }
      } else {
        openHelpDesk("Sorry", "Direct Route is Available for you");
      }
    }
  }
}

function navigate(ref) {
  setLowOpacity();
  ref.style.opacity = "1";

  if (ref.children[1].innerText == "Routes") {
    inputContainer.style.height = "130px";
    input1Label.innerHTML = "Route No";
    input1.setAttribute("placeholder", "Enter Route No.");
    input1.value = "";
    input2.value = "";
    input2Label.style.display = "none";
    input2.style.display = "none";
    suggesionsArray = routesArray;

    closeSlideScreen();

    feature = 1;
    inputContainer.style.display = "flex";
    screen1_2.style.display = "none";
  } else if (ref.children[1].innerText == "Bus Stops") {
    inputContainer.style.height = "130px";
    input1Label.innerHTML = "Bus Stop Name";
    input1.setAttribute("placeholder", "Enter Bus Stop Name");
    input2Label.style.display = "none";
    input2.style.display = "none";
    input1.value = "";
    input2.value = "";
    suggesionsArray = SHD;

    closeSlideScreen();

    feature = 2;
    inputContainer.style.display = "flex";
    screen1_2.style.display = "none";
  } else if (ref.children[1].innerText == "From - To") {
    inputContainer.style.height = "200px";
    input1Label.innerHTML = "From";
    input1.setAttribute("placeholder", "Your Location");
    input2Label.innerHTML = "To";
    input2.setAttribute("placeholder", "Your Destination");
    input1.value = "";
    input2.value = "";
    input2Label.style.display = "block";
    input2.style.display = "block";
    suggesionsArray = SHD;

    closeSlideScreen();

    feature = 3;
    inputContainer.style.display = "flex";
    screen1_2.style.display = "none";
  } else if (ref.children[1].innerText == "Fare Chart") {
    inputContainer.style.height = "200px";
    input1Label.innerHTML = "From";
    input1.setAttribute("placeholder", "Your Location");
    input2Label.innerHTML = "To";
    input2.setAttribute("placeholder", "Your Destination");
    input1.value = "";
    input2.value = "";
    input2Label.style.display = "block";
    input2.style.display = "block";
    suggesionsArray = SHD;

    closeSlideScreen();
    navigateOption4.style.opacity = "1";

    feature = 4;
    inputContainer.style.display = "flex";
    screen1_2.style.display = "none";
  } else if (ref.children[1].innerText == "Alternate Route") {
    inputContainer.style.height = "200px";
    input1Label.innerHTML = "From";
    input1.setAttribute("placeholder", "Your Location");
    input2Label.innerHTML = "To";
    input2.setAttribute("placeholder", "Your Destination");
    input1.value = "";
    input2.value = "";
    input2Label.style.display = "block";
    input2.style.display = "block";
    suggesionsArray = SHD;

    closeSlideScreen();
    navigateOption4.style.opacity = "1";
    feature = 5;
    inputContainer.style.display = "flex";
    screen1_2.style.display = "none";
  } else if (ref.children[1].innerText == "Check for Updates") {
    inputContainer.style.display = "none";
    screen1_2.style.display = "block";
    screen1_2heading.innerHTML = "Updates";

    closeSlideScreen();
    navigateOption4.style.opacity = "1";
    contactFormContainer.style.display = "none";
    moreAppsContainer.style.display = "none";
    updateItem.style.display = "flex";
  } else if (ref.children[1].innerText == "Contact Us") {
    inputContainer.style.display = "none";
    screen1_2.style.display = "block";
    screen1_2heading.innerHTML = "Contact Us";
    contactFormContainer.style.display = "flex";
    moreAppsContainer.style.display = "none";
    updateItem.style.display = "none";
    closeSlideScreen();
    navigateOption4.style.opacity = "1";
  } else if (ref.children[1].innerText == "More Apps") {
    inputContainer.style.display = "none";
    screen1_2.style.display = "block";
    screen1_2heading.innerHTML = "More Apps";
    moreAppsContainer.style.display = "flex";
    contactFormContainer.style.display = "none";
    updateItem.style.display = "none";
    closeSlideScreen();
    navigateOption4.style.opacity = "1";
  } else if (ref.children[1].innerText == "More") {
    sideScreen.style.right = "0px";
    ref.children[1].innerHTML = "Close";
    sideScreenContainer.style.left = "0px";
    sideScreenContainer.style.transitionDelay = "0s";
  } else if (ref.children[1].innerText == "Close") {
    closeSlideScreen();
  }

  // console.log(ref.children[1].innerHTML)
}

function closeSlideScreen() {
  sideScreen.style.right = "-500px";
  sideScreenContainer.style.left = "-500px";
  sideScreenContainer.style.transitionDelay = "0.5s";
  moreOption.innerHTML = "More";
}

function setLowOpacity() {
  navigateOption1.style.opacity = "0.5";
  navigateOption2.style.opacity = "0.5";
  navigateOption3.style.opacity = "0.5";
  navigateOption4.style.opacity = "0.5";
}

function AlternateRouteBlocksManager(count, mode) {
  if (count == 1) {
    mainOutlineALT.style.display = "block";
    otherRouteOutlineALT.style.display = "none";
    if (mode == 3) {
      ALT_3points.style.display = "flex";
      ALT_4points.style.display = "none";
    } else if (mode == 4) {
      ALT_3points.style.display = "none";
      ALT_4points.style.display = "flex";
    }
  } else if (count == 2) {
    mainOutlineALT.style.display = "block";
    otherRouteOutlineALT.style.display = "block";
    if (mode == 3) {
      ALT_3points.style.display = "flex";
      ALT_4points.style.display = "none";

      OR_ALT_3points.style.display = "flex";
      OR_ALT_4points.style.display = "none";
    } else if (mode == 4) {
      ALT_3points.style.display = "none";
      ALT_4points.style.display = "flex";

      OR_ALT_3points.style.display = "none";
      OR_ALT_4points.style.display = "flex";
    } else if (mode == 34) {
      ALT_3points.style.display = "flex";
      ALT_4points.style.display = "none";

      OR_ALT_3points.style.display = "none";
      OR_ALT_4points.style.display = "flex";
    } else if (mode == 43) {
      ALT_3points.style.display = "none";
      ALT_4points.style.display = "flex";

      OR_ALT_3points.style.display = "flex";
      OR_ALT_4points.style.display = "none";
    }
  }
}

function fillAlternateRoute(mode, h1, s1, h2, s2, h3, s3, h4, s4) {

  if (mode == 1) {
    createALToutline(3);
    firstHeadALT.innerHTML = h1;
    firstRouteALT.innerHTML = s1;

    secondHeadALT.innerHTML = h2;
    secondRouteALT.innerHTML = s2;

    thirdHeadALT.innerHTML = h3;
    thirdRouteALT.innerHTML = s3;
  } else if (mode == 2) {

    firstHeadALT4point.innerHTML = h1;
    firstRouteALT4point.innerHTML = s1;

    secondHeadALT4point.innerHTML = h2;
    secondRouteALT4point.innerHTML = s2;

    thirdHeadALT4point.innerHTML = h3;
    thirdRouteALT4point.innerHTML = s3;

    fourthHeadALT4point.innerHTML = h4;
    fourthRouteALT4point.innerHTML = s4;
  }
}
function openHelpDesk(heading, text) {
  helpDesk.style.display = "flex";
  helpBoxHeading.innerHTML = heading;
  ALTdescriptiveRoute.innerHTML = text;
}

function closeHelpBox() {
  helpDesk.style.display = "none";
}

function getStops(a, s, d) {
  return a.slice(a.indexOf(s), a.indexOf(d) + 1);
}

function createALToutline(type, mode, h1, s1, h2, s2, h3, s3, h4, s4) {
  let mainOutlineALT = document.createElement("div");
  let routeType = document.createElement("h3");
  let ALT_3points = document.createElement("div");

  let altRouteItem = document.createElement("div");

  let roads = document.createElement("div");
  let road = document.createElement("div");

  let circles = document.createElement("div");
  let startingPointALT = document.createElement("div");
  let span1 = document.createElement("span");
  let exchangePointALT = document.createElement("div");
  let span2 = document.createElement("span");
  let endingPointALT = document.createElement("div");
  let span3 = document.createElement("span");
  let exchangePointALT2 = document.createElement("div");
  let span4 = document.createElement("span");

  let altRouteText = document.createElement("div");
  let ul = document.createElement("ul");
  let routeNumbersALT1 = document.createElement("li");
  let routeNumbersALT1P = document.createElement("p");
  let routeNumbersALT1P2 = document.createElement("p");
  let routeNumbersALT2 = document.createElement("li");
  let routeNumbersALT2P = document.createElement("p");
  let routeNumbersALT2P2 = document.createElement("p");
  let routeNumbersALT3 = document.createElement("li");
  let routeNumbersALT3P = document.createElement("p");
  let routeNumbersALT3P2 = document.createElement("p");
  let routeNumbersALT4 = document.createElement("li");
  let routeNumbersALT4P = document.createElement("p");
  let routeNumbersALT4P2 = document.createElement("p");

  let confALT = document.createElement("p");

  if (type == "BR") {
    routeType.textContent = "Best Route";
    if (mode == 3) {
      // CLASSES ASSIGNMENT
      mainOutlineALT.setAttribute("class", "routeListItem altRouteListItem");

      ALT_3points.classList.add("graphicsConatinerALT");

      altRouteItem.classList.add("altRouteItem");

      roads.classList.add("roads");
      road.classList.add("road");

      circles.classList.add("circles");
      startingPointALT.classList.add("circle", "startingPointALT");
      exchangePointALT.classList.add("circle", "exchangePointALT");
      endingPointALT.classList.add("circle", "endingPointALT");

      altRouteText.classList.add("altRouteText");
      routeNumbersALT1.classList.add("routeNumbersALT");
      routeNumbersALT2.classList.add("routeNumbersALT");
      routeNumbersALT2P2.classList.add("walkDescALT");
      routeNumbersALT3.classList.add("routeNumbersALT");

      confALT.classList.add("confALT");
      confALT.setAttribute("onclick", "openHelpDesk()");

      // SET CONTENT
      span1.textContent = "S";
      span2.textContent = "Ex";
      span3.textContent = "D";

      routeNumbersALT1P.textContent = h1;
      routeNumbersALT1P2.textContent = s1;

      routeNumbersALT2P.textContent = h2;
      routeNumbersALT2P2.textContent = s2;

      routeNumbersALT3P.textContent = h3;
      routeNumbersALT3P2.textContent = s3;
      // APPENDING
      startingPointALT.appendChild(span1);
      exchangePointALT.appendChild(span2);
      endingPointALT.appendChild(span3);

      circles.appendChild(startingPointALT);
      circles.appendChild(exchangePointALT);
      circles.appendChild(endingPointALT);

      roads.appendChild(road);

      altRouteItem.appendChild(roads);
      altRouteItem.appendChild(circles);

      routeNumbersALT1.appendChild(routeNumbersALT1P);
      routeNumbersALT1.appendChild(routeNumbersALT1P2);

      routeNumbersALT2.appendChild(routeNumbersALT2P);
      routeNumbersALT2.appendChild(routeNumbersALT2P2);

      routeNumbersALT3.appendChild(routeNumbersALT3P);
      routeNumbersALT3.appendChild(routeNumbersALT3P2);

      ul.appendChild(routeNumbersALT1);
      ul.appendChild(routeNumbersALT2);
      ul.appendChild(routeNumbersALT3);

      altRouteText.appendChild(ul);
      altRouteText.appendChild(confALT);

      ALT_3points.appendChild(altRouteItem);
      ALT_3points.appendChild(altRouteText);
      mainOutlineALT.appendChild(routeType);
      mainOutlineALT.appendChild(ALT_3points);
      outputContent.appendChild(mainOutlineALT);
    } else if (mode == 4) {
      // CLASSES ASSIGNMENT
      mainOutlineALT.setAttribute("class", "routeListItem altRouteListItem");

      ALT_3points.classList.add("graphicsConatinerALT", "graphicsConatinerALT4Points");

      altRouteItem.classList.add("altRouteItem");

      roads.classList.add("roads");
      road.classList.add("road");

      circles.classList.add("circles");
      startingPointALT.classList.add("circle", "startingPointALT");
      exchangePointALT.classList.add("circle", "exchangePointALT");
      exchangePointALT2.classList.add("circle", "exchangePointALT")
      endingPointALT.classList.add("circle", "endingPointALT");

      altRouteText.classList.add("altRouteText");
      routeNumbersALT1.classList.add("routeNumbersALT");
      routeNumbersALT2.classList.add("routeNumbersALT");
      routeNumbersALT2P2.classList.add("walkDescALT");
      routeNumbersALT3.classList.add("routeNumbersALT");
      routeNumbersALT4.classList.add("routeNumbersALT");

      confALT.classList.add("confALT");
      confALT.setAttribute("onclick", "openHelpDesk()");

      circles.setAttribute("id", "ALT_4pointsCircles");

      // SET CONTENT
      span1.textContent = "S";
      span2.textContent = "Ex";
      span3.textContent = "Ex";
      span4.textContent = "D";

      routeNumbersALT1P.textContent = h1;
      routeNumbersALT1P2.textContent = s1;

      routeNumbersALT2P.textContent = h2;
      routeNumbersALT2P2.textContent = s2;

      routeNumbersALT3P.textContent = h3;
      routeNumbersALT3P2.textContent = s3;

      routeNumbersALT4P.textContent = h4;
      routeNumbersALT4P2.textContent = s4;

      // APPENDING
      startingPointALT.appendChild(span1);
      exchangePointALT.appendChild(span2);
      exchangePointALT2.appendChild(span3);
      endingPointALT.appendChild(span4);

      circles.appendChild(startingPointALT);
      circles.appendChild(exchangePointALT);
      circles.appendChild(exchangePointALT2);
      circles.appendChild(endingPointALT);

      roads.appendChild(road);

      altRouteItem.appendChild(roads);
      altRouteItem.appendChild(circles);

      routeNumbersALT1.appendChild(routeNumbersALT1P);
      routeNumbersALT1.appendChild(routeNumbersALT1P2);

      routeNumbersALT2.appendChild(routeNumbersALT2P);
      routeNumbersALT2.appendChild(routeNumbersALT2P2);

      routeNumbersALT3.appendChild(routeNumbersALT3P);
      routeNumbersALT3.appendChild(routeNumbersALT3P2);

      routeNumbersALT4.appendChild(routeNumbersALT4P);
      routeNumbersALT4.appendChild(routeNumbersALT4P2);

      ul.appendChild(routeNumbersALT1);
      ul.appendChild(routeNumbersALT2);
      ul.appendChild(routeNumbersALT3);
      ul.appendChild(routeNumbersALT4);

      altRouteText.appendChild(ul);
      altRouteText.appendChild(confALT);

      ALT_3points.appendChild(altRouteItem);
      ALT_3points.appendChild(altRouteText);
      mainOutlineALT.appendChild(routeType);
      mainOutlineALT.appendChild(ALT_3points);
      outputContent.appendChild(mainOutlineALT);
    }

  } else if (type == "OR") {
    routeType.textContent = "Other Route";
    if (mode == 3) {
      // CLASSES ASSIGNMENT
      mainOutlineALT.setAttribute("class", "routeListItem altRouteListItem");

      ALT_3points.classList.add("graphicsConatinerALT");

      altRouteItem.classList.add("altRouteItem");

      roads.classList.add("roads");
      road.classList.add("road");

      circles.classList.add("circles");
      startingPointALT.classList.add("circle", "startingPointALT");
      exchangePointALT.classList.add("circle", "exchangePointALT");
      endingPointALT.classList.add("circle", "endingPointALT");

      altRouteText.classList.add("altRouteText");
      routeNumbersALT1.classList.add("routeNumbersALT");
      routeNumbersALT2.classList.add("routeNumbersALT");
      routeNumbersALT2P2.classList.add("walkDescALT");
      routeNumbersALT3.classList.add("routeNumbersALT");

      confALT.classList.add("confALT");
      confALT.setAttribute("onclick", "openHelpDesk()");
      // SET CONTENT
      span1.textContent = "S";
      span2.textContent = "Ex";
      span3.textContent = "D";

      routeNumbersALT1P.textContent = h1;
      routeNumbersALT1P2.textContent = s1;

      routeNumbersALT2P.textContent = h2;
      routeNumbersALT2P2.textContent = s2;

      routeNumbersALT3P.textContent = h3;
      routeNumbersALT3P2.textContent = s3;

      // APPENDING
      startingPointALT.appendChild(span1);
      exchangePointALT.appendChild(span2);
      endingPointALT.appendChild(span3);

      circles.appendChild(startingPointALT);
      circles.appendChild(exchangePointALT);
      circles.appendChild(endingPointALT);

      roads.appendChild(road);

      altRouteItem.appendChild(roads);
      altRouteItem.appendChild(circles);

      routeNumbersALT1.appendChild(routeNumbersALT1P);
      routeNumbersALT1.appendChild(routeNumbersALT1P2);

      routeNumbersALT2.appendChild(routeNumbersALT2P);
      routeNumbersALT2.appendChild(routeNumbersALT2P2);

      routeNumbersALT3.appendChild(routeNumbersALT3P);
      routeNumbersALT3.appendChild(routeNumbersALT3P2);

      ul.appendChild(routeNumbersALT1);
      ul.appendChild(routeNumbersALT2);
      ul.appendChild(routeNumbersALT3);

      altRouteText.appendChild(ul);
      altRouteText.appendChild(confALT);

      ALT_3points.appendChild(altRouteItem);
      ALT_3points.appendChild(altRouteText);
      mainOutlineALT.appendChild(routeType);
      mainOutlineALT.appendChild(ALT_3points);
      outputContent.appendChild(mainOutlineALT);
    } else if (mode == 4) {
      // CLASSES ASSIGNMENT
      mainOutlineALT.setAttribute("class", "routeListItem altRouteListItem");

      ALT_3points.classList.add("graphicsConatinerALT", "graphicsConatinerALT4Points");

      altRouteItem.classList.add("altRouteItem");

      roads.classList.add("roads");
      road.classList.add("road");

      circles.classList.add("circles");
      startingPointALT.classList.add("circle", "startingPointALT");
      exchangePointALT.classList.add("circle", "exchangePointALT");
      exchangePointALT2.classList.add("circle", "exchangePointALT")
      endingPointALT.classList.add("circle", "endingPointALT");

      altRouteText.classList.add("altRouteText");
      routeNumbersALT1.classList.add("routeNumbersALT");
      routeNumbersALT2.classList.add("routeNumbersALT");
      routeNumbersALT2P2.classList.add("walkDescALT");
      routeNumbersALT3.classList.add("routeNumbersALT");
      routeNumbersALT4.classList.add("routeNumbersALT");

      confALT.classList.add("confALT");
      confALT.setAttribute("onclick", "openHelpDesk()");

      circles.setAttribute("id", "ALT_4pointsCircles");

      // SET CONTENT
      span1.textContent = "S";
      span2.textContent = "Ex";
      span3.textContent = "Ex";
      span4.textContent = "D";

      routeNumbersALT1P.textContent = h1;
      routeNumbersALT1P2.textContent = s1;

      routeNumbersALT2P.textContent = h2;
      routeNumbersALT2P2.textContent = s2;

      routeNumbersALT3P.textContent = h3;
      routeNumbersALT3P2.textContent = s3;

      routeNumbersALT4P.textContent = h4;
      routeNumbersALT4P2.textContent = s4;

      // APPENDING
      startingPointALT.appendChild(span1);
      exchangePointALT.appendChild(span2);
      exchangePointALT2.appendChild(span3);
      endingPointALT.appendChild(span4);

      circles.appendChild(startingPointALT);
      circles.appendChild(exchangePointALT);
      circles.appendChild(exchangePointALT2);
      circles.appendChild(endingPointALT);

      roads.appendChild(road);

      altRouteItem.appendChild(roads);
      altRouteItem.appendChild(circles);

      routeNumbersALT1.appendChild(routeNumbersALT1P);
      routeNumbersALT1.appendChild(routeNumbersALT1P2);

      routeNumbersALT2.appendChild(routeNumbersALT2P);
      routeNumbersALT2.appendChild(routeNumbersALT2P2);

      routeNumbersALT3.appendChild(routeNumbersALT3P);
      routeNumbersALT3.appendChild(routeNumbersALT3P2);

      routeNumbersALT4.appendChild(routeNumbersALT4P);
      routeNumbersALT4.appendChild(routeNumbersALT4P2);

      ul.appendChild(routeNumbersALT1);
      ul.appendChild(routeNumbersALT2);
      ul.appendChild(routeNumbersALT3);
      ul.appendChild(routeNumbersALT4);

      altRouteText.appendChild(ul);
      altRouteText.appendChild(confALT);

      ALT_3points.appendChild(altRouteItem);
      ALT_3points.appendChild(altRouteText);
      mainOutlineALT.appendChild(routeType);
      mainOutlineALT.appendChild(ALT_3points);
      outputContent.appendChild(mainOutlineALT);
    }

  }
}



navigateOption1.click();

