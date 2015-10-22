/*Distributed under the MIT License (MIT)

Copyright (c) 2015 Juan M. Merlos

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

//http://test-panatrans.herokuapp.com/v1/stops/

var DATA_STOPS = 
[
    {
      "id": 683,
      "name": "12 de Octubre",
      "lat": "9.009771",
      "lon": "-79.506211"
    },
    {
      "id": 221,
      "name": "12 de Octubre R",
      "lat": "9.009792",
      "lon": "-79.505509"
    },
    {
      "id": 535,
      "name": "24 de Diciembre I",
      "lat": "9.103177",
      "lon": "-79.36642"
    },
    {
      "id": 675,
      "name": "24 de Diciembre Interna",
      "lat": "9.094935",
      "lon": "-79.359977"
    },
    {
      "id": 534,
      "name": "24 de Diciembre R",
      "lat": "9.102854",
      "lon": "-79.367364"
    },
    {
      "id": 414,
      "name": "4 de Julio",
      "lat": "8.959775",
      "lon": "-79.542749"
    },
    {
      "id": 141,
      "name": "Abarrotería Griselda",
      "lat": "9.124666",
      "lon": "-79.550119"
    },
    {
      "id": 211,
      "name": "Abastos I",
      "lat": "8.966148",
      "lon": "-79.546624"
    },
    {
      "id": 210,
      "name": "Abastos R",
      "lat": "8.965701",
      "lon": "-79.546619"
    },
    {
      "id": 181,
      "name": "Aeropuerto I",
      "lat": "9.071421",
      "lon": "-79.389047"
    },
    {
      "id": 180,
      "name": "Aeropuerto R",
      "lat": "9.070876",
      "lon": "-79.388318"
    },
    {
      "id": 486,
      "name": "Agua Bendita Abajo I",
      "lat": "9.169038",
      "lon": "-79.618322"
    },
    {
      "id": 844,
      "name": "Agua Bendita Abajo R",
      "lat": "9.168987",
      "lon": "-79.618172"
    },
    {
      "id": 845,
      "name": "Agua Bendita I",
      "lat": "9.171426",
      "lon": "-79.616831"
    },
    {
      "id": 485,
      "name": "Agua Bendita R",
      "lat": "9.171299",
      "lon": "-79.616396"
    },
    {
      "id": 812,
      "name": "Agua Buena I",
      "lat": "9.122383",
      "lon": "-79.599595"
    },
    {
      "id": 828,
      "name": "Aguan Nueva R",
      "lat": "9.122087",
      "lon": "-79.599091"
    },
    {
      "id": 459,
      "name": "Albrook",
      "lat": "8.974218",
      "lon": "-79.551637"
    },
    {
      "id": 704,
      "name": "Alcalde Díaz I",
      "lat": "9.110148",
      "lon": "-79.555811"
    },
    {
      "id": 674,
      "name": "Altos 24 de Diciembre",
      "lat": "9.092403",
      "lon": "-79.359891"
    },
    {
      "id": 140,
      "name": "Altos Alcalde Díaz",
      "lat": "9.124571",
      "lon": "-79.551669"
    },
    {
      "id": 252,
      "name": "Altos de Cerro Viento",
      "lat": "9.06081",
      "lon": "-79.448254"
    },
    {
      "id": 552,
      "name": "Altos de Tatare I",
      "lat": "9.097896",
      "lon": "-79.291221"
    },
    {
      "id": 551,
      "name": "Altos de Tatare R",
      "lat": "9.097547",
      "lon": "-79.291055"
    },
    {
      "id": 433,
      "name": "ANAM",
      "lat": "8.974408",
      "lon": "-79.558746"
    },
    {
      "id": 821,
      "name": "?ANAM Chilibre I",
      "lat": "9.13358",
      "lon": "-79.61365"
    },
    {
      "id": 849,
      "name": "ANAM Chilibre R",
      "lat": "9.133707",
      "lon": "-79.612663"
    },
    {
      "id": 658,
      "name": "Ancla",
      "lat": "8.990103",
      "lon": "-79.51134"
    },
    {
      "id": 269,
      "name": "Antigua Estación Don Bosco",
      "lat": "9.0475",
      "lon": "-79.410868"
    },
    {
      "id": 685,
      "name": "Antigua Pepsi I",
      "lat": "9.004494",
      "lon": "-79.513271"
    },
    {
      "id": 618,
      "name": "Antigua Pepsi R",
      "lat": "9.004261",
      "lon": "-79.512123"
    },
    {
      "id": 56,
      "name": "Antiguo Depósito I",
      "lat": "8.996578",
      "lon": "-79.533613"
    },
    {
      "id": 55,
      "name": "Antiguo Depósito R",
      "lat": "8.996885",
      "lon": "-79.533269"
    },
    {
      "id": 8,
      "name": "Aquilino de la Guardia",
      "lat": "8.974719",
      "lon": "-79.521081"
    },
    {
      "id": 390,
      "name": "Aquilino de la Guardia I",
      "lat": "8.975808",
      "lon": "-79.521891"
    },
    {
      "id": 31,
      "name": "Aquilino de la Guardia R",
      "lat": "8.974719",
      "lon": "-79.521081"
    },
    {
      "id": 162,
      "name": "Artec",
      "lat": "9.032216",
      "lon": "-79.511847"
    },
    {
      "id": 575,
      "name": "Artec R",
      "lat": "9.031366",
      "lon": "-79.511597"
    },
    {
      "id": 426,
      "name": "Artes y oficios",
      "lat": "8.987747",
      "lon": "-79.533052"
    },
    {
      "id": 35,
      "name": "Atlapa I",
      "lat": "8.988167",
      "lon": "-79.501488"
    },
    {
      "id": 778,
      "name": "Atlapa R",
      "lat": "8.987687",
      "lon": "-79.501898"
    },
    {
      "id": 746,
      "name": "Automotor R",
      "lat": "9.034773",
      "lon": "-79.488487"
    },
    {
      "id": 860,
      "name": "Ave BC Norte",
      "lat": "9.012961",
      "lon": "-79.515975"
    },
    {
      "id": 436,
      "name": "Ave. Canfield",
      "lat": "8.988417",
      "lon": "-79.555996"
    },
    {
      "id": 442,
      "name": "Ave. Muir",
      "lat": "9.005818",
      "lon": "-79.576162"
    },
    {
      "id": 13,
      "name": "Avenida 4a Sur",
      "lat": "8.978346",
      "lon": "-79.52938"
    },
    {
      "id": 647,
      "name": "Avenida 71/2 A Sur I",
      "lat": "9.009072",
      "lon": "-79.487565"
    },
    {
      "id": 646,
      "name": "Avenida 71/2 A Sur R",
      "lat": "9.008372",
      "lon": "-79.487286"
    },
    {
      "id": 399,
      "name": "Avenida B",
      "lat": "8.956639",
      "lon": "-79.53864"
    },
    {
      "id": 563,
      "name": "Avenida de los Mártires",
      "lat": "8.957468",
      "lon": "-79.543843"
    },
    {
      "id": 740,
      "name": "Avenida Francisco Paredes I",
      "lat": "9.134618",
      "lon": "-79.550575"
    },
    {
      "id": 451,
      "name": "Avenida Francisco Paredes R",
      "lat": "9.134899",
      "lon": "-79.550296"
    },
    {
      "id": 268,
      "name": "Avenida Primera I",
      "lat": "9.047551",
      "lon": "-79.410231"
    },
    {
      "id": 797,
      "name": "Avenida Primera R",
      "lat": "9.047386",
      "lon": "-79.410124"
    },
    {
      "id": 454,
      "name": "Avenida Rayitos",
      "lat": "9.138521",
      "lon": "-79.550908"
    },
    {
      "id": 214,
      "name": "Avenida Samuel Lewis",
      "lat": "8.989637",
      "lon": "-79.51613"
    },
    {
      "id": 175,
      "name": "Balmoral",
      "lat": "9.059137",
      "lon": "-79.432579"
    },
    {
      "id": 632,
      "name": "Banco General R",
      "lat": "9.021596",
      "lon": "-79.486213"
    },
    {
      "id": 115,
      "name": "Banco Nacional de Panamá Milla 8 I",
      "lat": "9.06632",
      "lon": "-79.517369"
    },
    {
      "id": 696,
      "name": "Banco Nacional de Panamá Milla 8 R",
      "lat": "9.066611",
      "lon": "-79.51708"
    },
    {
      "id": 770,
      "name": "Banco Nacional de Veranillo I",
      "lat": "9.034386",
      "lon": "-79.499924"
    },
    {
      "id": 671,
      "name": "Barriada 24 de Diciembre",
      "lat": "9.094374",
      "lon": "-79.361565"
    },
    {
      "id": 611,
      "name": "Barriada de San Antonio I",
      "lat": "9.052123",
      "lon": "-79.445175"
    },
    {
      "id": 173,
      "name": "Barriada San Antonio R",
      "lat": "9.051667",
      "lon": "-79.444923"
    },
    {
      "id": 299,
      "name": "Belén",
      "lat": "9.082805",
      "lon": "-79.39748"
    },
    {
      "id": 472,
      "name": "Bella Vista I",
      "lat": "8.974165",
      "lon": "-79.534364"
    },
    {
      "id": 275,
      "name": "Bello Horizonte I",
      "lat": "9.053103",
      "lon": "-79.41014"
    },
    {
      "id": 71,
      "name": "Bethania I",
      "lat": "9.002334",
      "lon": "-79.52336"
    },
    {
      "id": 72,
      "name": "Bethania R",
      "lat": "9.002413",
      "lon": "-79.523006"
    },
    {
      "id": 766,
      "name": "Biblioteca Omar Torrijos I",
      "lat": "9.041284",
      "lon": "-79.492961"
    },
    {
      "id": 750,
      "name": "Biblioteca Omar Torrijos R",
      "lat": "9.041548",
      "lon": "-79.492682"
    },
    {
      "id": 36,
      "name": "BNP via porras",
      "lat": "8.994093",
      "lon": "-79.501198"
    },
    {
      "id": 145,
      "name": "Bomberos Alcalde Díaz",
      "lat": "9.118681",
      "lon": "-79.555207"
    },
    {
      "id": 184,
      "name": "Bomberos de Tocumen I",
      "lat": "9.080792",
      "lon": "-79.384879"
    },
    {
      "id": 502,
      "name": "Bomberos de Tocumen R",
      "lat": "9.080808",
      "lon": "-79.385367"
    },
    {
      "id": 515,
      "name": "Boulevard",
      "lat": "8.964643",
      "lon": "-79.534943"
    },
    {
      "id": 402,
      "name": "Boulevard Pacífica",
      "lat": "8.977269",
      "lon": "-79.509002"
    },
    {
      "id": 614,
      "name": "Brisas de Golf I",
      "lat": "9.048986",
      "lon": "-79.460635"
    },
    {
      "id": 609,
      "name": "Brisas del Golf R",
      "lat": "9.048287",
      "lon": "-79.460474"
    },
    {
      "id": 255,
      "name": "Brisas Occidente",
      "lat": "9.070892",
      "lon": "-79.45769"
    },
    {
      "id": 707,
      "name": "Buenos Aires I",
      "lat": "9.176457",
      "lon": "-79.61616"
    },
    {
      "id": 848,
      "name": "Buenos Aires R",
      "lat": "9.176521",
      "lon": "-79.615538"
    },
    {
      "id": 496,
      "name": "Buen Paisaje I",
      "lat": "9.18887",
      "lon": "-79.617727"
    },
    {
      "id": 497,
      "name": "Buen Paisaje R",
      "lat": "9.189347",
      "lon": "-79.616933"
    },
    {
      "id": 883,
      "name": "Caja de Ahorros Santa Librada I",
      "lat": "9.074292",
      "lon": "-79.50457"
    },
    {
      "id": 315,
      "name": "Caja de Ahorros Santa Librada R",
      "lat": "9.074224",
      "lon": "-79.504452"
    },
    {
      "id": 440,
      "name": "Caja Seguro Social Clayton",
      "lat": "9.005451",
      "lon": "-79.566872"
    },
    {
      "id": 663,
      "name": "Caja Seguro Social San Francisco",
      "lat": "8.996615",
      "lon": "-79.510712"
    },
    {
      "id": 867,
      "name": "Calle 100 Oeste",
      "lat": "9.024929",
      "lon": "-79.504645"
    },
    {
      "id": 395,
      "name": "Calle 12",
      "lat": "8.957565",
      "lon": "-79.540496"
    },
    {
      "id": 445,
      "name": "Calle 134 Este",
      "lat": "9.051614",
      "lon": "-79.434981"
    },
    {
      "id": 176,
      "name": "Calle 139 Este I",
      "lat": "9.059952",
      "lon": "-79.427848"
    },
    {
      "id": 604,
      "name": "Calle 139 Este R",
      "lat": "9.060821",
      "lon": "-79.426517"
    },
    {
      "id": 298,
      "name": "Calle 140 Oeste",
      "lat": "9.062522",
      "lon": "-79.43002"
    },
    {
      "id": 605,
      "name": "Calle 149 Este",
      "lat": "9.062177",
      "lon": "-79.42081"
    },
    {
      "id": 603,
      "name": "Calle 149 Este A",
      "lat": "9.063322",
      "lon": "-79.420381"
    },
    {
      "id": 784,
      "name": "Calle 1C I",
      "lat": "9.059031",
      "lon": "-79.419662"
    },
    {
      "id": 279,
      "name": "Calle 1C R",
      "lat": "9.059232",
      "lon": "-79.41942"
    },
    {
      "id": 422,
      "name": "Calle 21 Oeste",
      "lat": "8.951019",
      "lon": "-79.543624"
    },
    {
      "id": 865,
      "name": "Calle 23",
      "lat": "9.02334",
      "lon": "-79.505396"
    },
    {
      "id": 26,
      "name": "Calle 26 Este",
      "lat": "8.962773",
      "lon": "-79.535136"
    },
    {
      "id": 4,
      "name": "Calle 26 Este",
      "lat": "8.962773",
      "lon": "-79.535136"
    },
    {
      "id": 569,
      "name": "Calle 27 Este",
      "lat": "8.9645",
      "lon": "-79.537432"
    },
    {
      "id": 21,
      "name": "Calle 28 Calidonia",
      "lat": "8.966251",
      "lon": "-79.539086"
    },
    {
      "id": 131,
      "name": "Calle 2da",
      "lat": "9.118157",
      "lon": "-79.544148"
    },
    {
      "id": 258,
      "name": "Calle 2 Occidente",
      "lat": "9.06979",
      "lon": "-79.461021"
    },
    {
      "id": 9,
      "name": "Calle 32 Este",
      "lat": "8.966448",
      "lon": "-79.532867"
    },
    {
      "id": 27,
      "name": "Calle 32 Este",
      "lat": "8.966448",
      "lon": "-79.532867"
    },
    {
      "id": 781,
      "name": "Calle 39 Este",
      "lat": "8.971627",
      "lon": "-79.529901"
    },
    {
      "id": 785,
      "name": "Calle 3B I",
      "lat": "9.056721",
      "lon": "-79.418128"
    },
    {
      "id": 278,
      "name": "Calle 3B R",
      "lat": "9.056827",
      "lon": "-79.417977"
    },
    {
      "id": 6,
      "name": "Calle 41 Este",
      "lat": "8.972305",
      "lon": "-79.528568"
    },
    {
      "id": 28,
      "name": "Calle 41 Este",
      "lat": "8.972305",
      "lon": "-79.528568"
    },
    {
      "id": 11,
      "name": "Calle 45 Este",
      "lat": "8.97585",
      "lon": "-79.531596"
    },
    {
      "id": 695,
      "name": "Calle 4 Ciudad Bolívar I",
      "lat": "9.121361",
      "lon": "-79.54483"
    },
    {
      "id": 132,
      "name": "Calle 4 Ciudad Bolívar R",
      "lat": "9.121276",
      "lon": "-79.544621"
    },
    {
      "id": 786,
      "name": "Calle 4 I",
      "lat": "9.054459",
      "lon": "-79.41801"
    },
    {
      "id": 610,
      "name": "Calle 4 R",
      "lat": "9.054766",
      "lon": "-79.41721"
    },
    {
      "id": 788,
      "name": "Calle 5C I",
      "lat": "9.050576",
      "lon": "-79.41714"
    },
    {
      "id": 273,
      "name": "Calle 5C R",
      "lat": "9.050698",
      "lon": "-79.416717"
    },
    {
      "id": 384,
      "name": "Calle 63 Oeste",
      "lat": "9.000111",
      "lon": "-79.526079"
    },
    {
      "id": 70,
      "name": "Calle 64 Oeste I",
      "lat": "8.999985",
      "lon": "-79.525191"
    },
    {
      "id": 69,
      "name": "Calle 64 Oeste R",
      "lat": "8.998798",
      "lon": "-79.525421"
    },
    {
      "id": 80,
      "name": "Calle 66 Oeste",
      "lat": "9.004747",
      "lon": "-79.526972"
    },
    {
      "id": 789,
      "name": "Calle 6 I",
      "lat": "9.051074",
      "lon": "-79.414061"
    },
    {
      "id": 272,
      "name": "Calle 6 R",
      "lat": "9.05127",
      "lon": "-79.414405"
    },
    {
      "id": 271,
      "name": "Calle 7",
      "lat": "9.049887",
      "lon": "-79.411948"
    },
    {
      "id": 334,
      "name": "Calle 72 Oeste",
      "lat": "9.009146",
      "lon": "-79.530314"
    },
    {
      "id": 448,
      "name": "Calle 74 Oeste",
      "lat": "9.012077",
      "lon": "-79.521657"
    },
    {
      "id": 447,
      "name": "Calle 76B Oeste",
      "lat": "9.017953",
      "lon": "-79.522478"
    },
    {
      "id": 665,
      "name": "Calle 78 B Este",
      "lat": "8.996091",
      "lon": "-79.49927"
    },
    {
      "id": 667,
      "name": "Calle 78 B Este R",
      "lat": "8.995916",
      "lon": "-79.498744"
    },
    {
      "id": 652,
      "name": "Calle 79 Este",
      "lat": "8.998978",
      "lon": "-79.497414"
    },
    {
      "id": 742,
      "name": "Calle 7 Ciudad Bolívar I",
      "lat": "9.12358",
      "lon": "-79.544604"
    },
    {
      "id": 133,
      "name": "Calle 7 Ciudad Bolívar R",
      "lat": "9.123559",
      "lon": "-79.544304"
    },
    {
      "id": 134,
      "name": "Calle 7ma Alcalde Díaz",
      "lat": "9.123612",
      "lon": "-79.545699"
    },
    {
      "id": 874,
      "name": "Calle 81 A Oeste",
      "lat": "9.013236",
      "lon": "-79.509966"
    },
    {
      "id": 580,
      "name": "Calle 81 Oeste I",
      "lat": "9.024945",
      "lon": "-79.510342"
    },
    {
      "id": 579,
      "name": "Calle 81 Oeste R",
      "lat": "9.024235",
      "lon": "-79.51046"
    },
    {
      "id": 863,
      "name": "Calle 82 D Este",
      "lat": "9.018884",
      "lon": "-79.513496"
    },
    {
      "id": 855,
      "name": "Calle 84 Este",
      "lat": "9.00682",
      "lon": "-79.502236"
    },
    {
      "id": 864,
      "name": "Calle 85 C Oeste",
      "lat": "9.020516",
      "lon": "-79.507515"
    },
    {
      "id": 873,
      "name": "Calle 85 Oeste",
      "lat": "9.015832",
      "lon": "-79.505251"
    },
    {
      "id": 638,
      "name": "Calle 89 C Este",
      "lat": "9.005029",
      "lon": "-79.495182"
    },
    {
      "id": 872,
      "name": "Calle 90 Oeste",
      "lat": "9.018015",
      "lon": "-79.502757"
    },
    {
      "id": 222,
      "name": "Calle 92 Este-I",
      "lat": "9.014579",
      "lon": "-79.49931"
    },
    {
      "id": 223,
      "name": "Calle 92 Este-R",
      "lat": "9.014741",
      "lon": "-79.498745"
    },
    {
      "id": 648,
      "name": "Calle 95 C Este I",
      "lat": "9.008288",
      "lon": "-79.491481"
    },
    {
      "id": 649,
      "name": "Calle 95 C Este R",
      "lat": "9.007959",
      "lon": "-79.491405"
    },
    {
      "id": 362,
      "name": "Calle Antón",
      "lat": "8.979265",
      "lon": "-79.569615"
    },
    {
      "id": 819,
      "name": "Calle A San José I",
      "lat": "9.14019",
      "lon": "-79.615517"
    },
    {
      "id": 851,
      "name": "Calle A San José R",
      "lat": "9.14037",
      "lon": "-79.614862"
    },
    {
      "id": 885,
      "name": "Calle C10 I",
      "lat": "9.075177",
      "lon": "-79.499318"
    },
    {
      "id": 312,
      "name": "Calle C-10 R",
      "lat": "9.075219",
      "lon": "-79.498605"
    },
    {
      "id": 305,
      "name": "Calle C-5",
      "lat": "9.077349",
      "lon": "-79.491346"
    },
    {
      "id": 267,
      "name": "Calle Circunvalación I",
      "lat": "9.045644",
      "lon": "-79.413198"
    },
    {
      "id": 798,
      "name": "Calle Circunvalación R",
      "lat": "9.045779",
      "lon": "-79.4133"
    },
    {
      "id": 879,
      "name": "Calle C Santa Librada I",
      "lat": "9.076358",
      "lon": "-79.503808"
    },
    {
      "id": 328,
      "name": "Calle C Santa Librada R",
      "lat": "9.076459",
      "lon": "-79.503712"
    },
    {
      "id": 407,
      "name": "Calle Ernestina Sucre Tapia",
      "lat": "8.98973",
      "lon": "-79.521009"
    },
    {
      "id": 799,
      "name": "Calle Escandinavos I",
      "lat": "9.047924",
      "lon": "-79.410593"
    },
    {
      "id": 270,
      "name": "Calle Escandinavos R",
      "lat": "9.047874",
      "lon": "-79.410682"
    },
    {
      "id": 428,
      "name": "Calle Eusebio A. Morales",
      "lat": "8.985912",
      "lon": "-79.527668"
    },
    {
      "id": 435,
      "name": "Calle Evans",
      "lat": "8.982259",
      "lon": "-79.557916"
    },
    {
      "id": 561,
      "name": "Calle Gabilán",
      "lat": "8.950935",
      "lon": "-79.55285"
    },
    {
      "id": 507,
      "name": "Calle Gelabert I",
      "lat": "9.093781",
      "lon": "-79.377213"
    },
    {
      "id": 190,
      "name": "Calle Gelabert R",
      "lat": "9.093638",
      "lon": "-79.377009"
    },
    {
      "id": 429,
      "name": "Calle Guatemala",
      "lat": "8.986318",
      "lon": "-79.524986"
    },
    {
      "id": 430,
      "name": "Calle José de Fábrega",
      "lat": "8.982974",
      "lon": "-79.531872"
    },
    {
      "id": 146,
      "name": "Calle José S. Guevara",
      "lat": "9.116239",
      "lon": "-79.554851"
    },
    {
      "id": 882,
      "name": "Calle Las Peras I",
      "lat": "9.076904",
      "lon": "-79.507424"
    },
    {
      "id": 326,
      "name": "Calle Las Peras R",
      "lat": "9.076983",
      "lon": "-79.507295"
    },
    {
      "id": 144,
      "name": "Calle Las Tablas",
      "lat": "9.120752",
      "lon": "-79.557141"
    },
    {
      "id": 452,
      "name": "Calle Los Rayitos",
      "lat": "9.137158",
      "lon": "-79.550272"
    },
    {
      "id": 584,
      "name": "Calle M",
      "lat": "8.963006",
      "lon": "-79.540662"
    },
    {
      "id": 137,
      "name": "Calle Nata",
      "lat": "9.132944",
      "lon": "-79.54895"
    },
    {
      "id": 801,
      "name": "Calle N I",
      "lat": "9.050576",
      "lon": "-79.41346"
    },
    {
      "id": 800,
      "name": "Calle N R",
      "lat": "9.050078",
      "lon": "-79.412913"
    },
    {
      "id": 764,
      "name": "Calle O I",
      "lat": "9.04283",
      "lon": "-79.494399"
    },
    {
      "id": 457,
      "name": "Calle Ola",
      "lat": "9.12547",
      "lon": "-79.555183"
    },
    {
      "id": 757,
      "name": "Calle O R",
      "lat": "9.043013",
      "lon": "-79.494833"
    },
    {
      "id": 331,
      "name": "Calle Plutón",
      "lat": "9.042592",
      "lon": "-79.423371"
    },
    {
      "id": 265,
      "name": "Calle Radial B I",
      "lat": "9.048647",
      "lon": "-79.43641"
    },
    {
      "id": 465,
      "name": "Calle Radial B R",
      "lat": "9.049124",
      "lon": "-79.436833"
    },
    {
      "id": 467,
      "name": "Calle Radial J I",
      "lat": "9.044653",
      "lon": "-79.429951"
    },
    {
      "id": 263,
      "name": "Calle Radial J R",
      "lat": "9.044791",
      "lon": "-79.429854"
    },
    {
      "id": 261,
      "name": "Calle Radial M I",
      "lat": "9.042226",
      "lon": "-79.427483"
    },
    {
      "id": 262,
      "name": "Calle Radial N",
      "lat": "9.044483",
      "lon": "-79.426593"
    },
    {
      "id": 260,
      "name": "Calle Radial R I",
      "lat": "9.041209",
      "lon": "-79.423422"
    },
    {
      "id": 505,
      "name": "Calle Van Der Hans I",
      "lat": "9.08984",
      "lon": "-79.381076"
    },
    {
      "id": 188,
      "name": "Calle Van Der Hans R",
      "lat": "9.089744",
      "lon": "-79.380856"
    },
    {
      "id": 373,
      "name": "Calle Van Hook I",
      "lat": "8.940739",
      "lon": "-79.551573"
    },
    {
      "id": 460,
      "name": "Calle Van Hook R",
      "lat": "8.940866",
      "lon": "-79.552732"
    },
    {
      "id": 771,
      "name": "Calle Z I",
      "lat": "9.048626",
      "lon": "-79.502295"
    },
    {
      "id": 760,
      "name": "Calle Z I",
      "lat": "9.047281",
      "lon": "-79.50045"
    },
    {
      "id": 752,
      "name": "Calle Z R",
      "lat": "9.048859",
      "lon": "-79.502048"
    },
    {
      "id": 254,
      "name": "Camino Real",
      "lat": "9.068566",
      "lon": "-79.446618"
    },
    {
      "id": 257,
      "name": "Camino Real (Bethanía)",
      "lat": "9.009114",
      "lon": "-79.527417"
    },
    {
      "id": 476,
      "name": "Camping Resort I",
      "lat": "9.136821",
      "lon": "-79.621021"
    },
    {
      "id": 475,
      "name": "Camping Resort R",
      "lat": "9.137023",
      "lon": "-79.620747"
    },
    {
      "id": 235,
      "name": "Campo Limbergh I",
      "lat": "9.032604",
      "lon": "-79.474404"
    },
    {
      "id": 234,
      "name": "Campo Limbergh R",
      "lat": "9.032781",
      "lon": "-79.473853"
    },
    {
      "id": 113,
      "name": "Campo Verde",
      "lat": "9.065509",
      "lon": "-79.515207"
    },
    {
      "id": 114,
      "name": "Campo Verde (Pozuelo)",
      "lat": "9.06536",
      "lon": "-79.515696"
    },
    {
      "id": 711,
      "name": "Cancha Chilibre I",
      "lat": "9.18627",
      "lon": "-79.613698"
    },
    {
      "id": 708,
      "name": "Cancha Chilibre R",
      "lat": "9.186609",
      "lon": "-79.613725"
    },
    {
      "id": 600,
      "name": "Cardoze & Lindo",
      "lat": "9.035689",
      "lon": "-79.48293"
    },
    {
      "id": 597,
      "name": "Carvajal",
      "lat": "9.066431",
      "lon": "-79.412511"
    },
    {
      "id": 370,
      "name": "C. Ascanio Villalaz",
      "lat": "8.959476",
      "lon": "-79.557291"
    },
    {
      "id": 333,
      "name": "Castilla de Oro",
      "lat": "9.01468",
      "lon": "-79.524338"
    },
    {
      "id": 795,
      "name": "Ceciliio Castillero I",
      "lat": "9.043371",
      "lon": "-79.416019"
    },
    {
      "id": 266,
      "name": "Cecilio Castillero R",
      "lat": "9.043615",
      "lon": "-79.416153"
    },
    {
      "id": 420,
      "name": "Cementerio Amador",
      "lat": "8.952284",
      "lon": "-79.545452"
    },
    {
      "id": 577,
      "name": "Cemento Panama I",
      "lat": "9.019287",
      "lon": "-79.517198"
    },
    {
      "id": 578,
      "name": "Cemento Panamá R",
      "lat": "9.020018",
      "lon": "-79.516329"
    },
    {
      "id": 418,
      "name": "Central T Chorrillo",
      "lat": "8.952696",
      "lon": "-79.541113"
    },
    {
      "id": 437,
      "name": "Centro Comercial Country",
      "lat": "8.995283",
      "lon": "-79.558462"
    },
    {
      "id": 805,
      "name": "Centro Comercial El Lago I",
      "lat": "9.074541",
      "lon": "-79.524643"
    },
    {
      "id": 806,
      "name": "Centro Comercial El Lago R",
      "lat": "9.074976",
      "lon": "-79.52445"
    },
    {
      "id": 103,
      "name": "Centro Comercial Los Andes",
      "lat": "9.048902",
      "lon": "-79.508126"
    },
    {
      "id": 104,
      "name": "Centro Comercial Los Andes I",
      "lat": "9.048822",
      "lon": "-79.508507"
    },
    {
      "id": 443,
      "name": "Centro Deportivo Clayton",
      "lat": "9.002734",
      "lon": "-79.581829"
    },
    {
      "id": 147,
      "name": "Centro de Salud Alcalde Díaz",
      "lat": "9.112463",
      "lon": "-79.555666"
    },
    {
      "id": 307,
      "name": "Centro de Salud de Torrijos-Carter",
      "lat": "9.080495",
      "lon": "-79.491727"
    },
    {
      "id": 862,
      "name": "Centro de Salud Roux",
      "lat": "9.016468",
      "lon": "-79.515588"
    },
    {
      "id": 887,
      "name": "Centro de Salud Santa Librada I",
      "lat": "9.072348",
      "lon": "-79.505396"
    },
    {
      "id": 316,
      "name": "Centro de Salud Santa Librada I",
      "lat": "9.072332",
      "lon": "-79.505619"
    },
    {
      "id": 888,
      "name": "Centro de Salud Santa Librada I",
      "lat": "9.072348",
      "lon": "-79.505396"
    },
    {
      "id": 635,
      "name": "Centro de Visitantes",
      "lat": "9.003752",
      "lon": "-79.493616"
    },
    {
      "id": 636,
      "name": "Centro de Visitantes",
      "lat": "9.003752",
      "lon": "-79.493616"
    },
    {
      "id": 634,
      "name": "Centro de Visitantes",
      "lat": "9.003752",
      "lon": "-79.493616"
    },
    {
      "id": 343,
      "name": "Cerro Batea I",
      "lat": "9.063618",
      "lon": "-79.495729"
    },
    {
      "id": 726,
      "name": "Cerro Batea R",
      "lat": "9.063465",
      "lon": "-79.495504"
    },
    {
      "id": 253,
      "name": "Cerro Viento",
      "lat": "9.064275",
      "lon": "-79.447031"
    },
    {
      "id": 613,
      "name": "Cerro Viento I",
      "lat": "9.050438",
      "lon": "-79.455024"
    },
    {
      "id": 608,
      "name": "Cerro Viento R",
      "lat": "9.049633",
      "lon": "-79.454606"
    },
    {
      "id": 59,
      "name": "Cervecería Nacional I",
      "lat": "8.989494",
      "lon": "-79.533467"
    },
    {
      "id": 60,
      "name": "Cervecería Nacional R",
      "lat": "8.989771",
      "lon": "-79.533353"
    },
    {
      "id": 491,
      "name": "Chagres I",
      "lat": "9.201283",
      "lon": "-79.625731"
    },
    {
      "id": 498,
      "name": "Chagres R",
      "lat": "9.20133",
      "lon": "-79.625564"
    },
    {
      "id": 480,
      "name": "Chilibre Centro I",
      "lat": "9.153621",
      "lon": "-79.622684"
    },
    {
      "id": 842,
      "name": "Chilibre Centro Interno I",
      "lat": "9.152763",
      "lon": "-79.61881"
    },
    {
      "id": 709,
      "name": "Chilibre Centro Interno R",
      "lat": "9.152541",
      "lon": "-79.617941"
    },
    {
      "id": 479,
      "name": "Chilibre Centro R",
      "lat": "9.153579",
      "lon": "-79.621396"
    },
    {
      "id": 490,
      "name": "Chilibrillo I",
      "lat": "9.186127",
      "lon": "-79.616375"
    },
    {
      "id": 489,
      "name": "Chilibrillo R",
      "lat": "9.186392",
      "lon": "-79.615946"
    },
    {
      "id": 686,
      "name": "Chivo I",
      "lat": "9.072518",
      "lon": "-79.523651"
    },
    {
      "id": 469,
      "name": "Chivo R",
      "lat": "9.072836",
      "lon": "-79.523356"
    },
    {
      "id": 516,
      "name": "Circunvalación Vía Brasil I",
      "lat": "8.983486",
      "lon": "-79.512354"
    },
    {
      "id": 403,
      "name": "Circunvalación Vía Israel R",
      "lat": "8.983688",
      "lon": "-79.512382"
    },
    {
      "id": 372,
      "name": "City Bank",
      "lat": "8.954134",
      "lon": "-79.557419"
    },
    {
      "id": 237,
      "name": "Ciuada deportiva Irving Saladino",
      "lat": "9.03513",
      "lon": "-79.472421"
    },
    {
      "id": 456,
      "name": "Ciudad Bolívar I",
      "lat": "9.131973",
      "lon": "-79.548729"
    },
    {
      "id": 136,
      "name": "Ciudad Bolívar R",
      "lat": "9.130752",
      "lon": "-79.547582"
    },
    {
      "id": 444,
      "name": "Ciudad del Saber",
      "lat": "8.999598",
      "lon": "-79.585304"
    },
    {
      "id": 364,
      "name": "Clayton Externa",
      "lat": "8.99311",
      "lon": "-79.581034"
    },
    {
      "id": 357,
      "name": "Clayton Externa R",
      "lat": "8.993446",
      "lon": "-79.581591"
    },
    {
      "id": 574,
      "name": "Club de las Montañas R",
      "lat": "9.031027",
      "lon": "-79.515781"
    },
    {
      "id": 332,
      "name": "Club X",
      "lat": "9.016031",
      "lon": "-79.520762"
    },
    {
      "id": 168,
      "name": "Coca Cola I",
      "lat": "9.033615",
      "lon": "-79.48742"
    },
    {
      "id": 169,
      "name": "Coca Cola R",
      "lat": "9.034632",
      "lon": "-79.485318"
    },
    {
      "id": 637,
      "name": "Coco Bay",
      "lat": "9.002481",
      "lon": "-79.495729"
    },
    {
      "id": 439,
      "name": "Colegio Javier",
      "lat": "9.00383",
      "lon": "-79.562816"
    },
    {
      "id": 207,
      "name": "Colegio Nacional",
      "lat": "8.959535",
      "lon": "-79.542603"
    },
    {
      "id": 774,
      "name": "Colegio Richard",
      "lat": "8.981541",
      "lon": "-79.514623"
    },
    {
      "id": 672,
      "name": "Colinas 24 de Diciembre",
      "lat": "9.092393",
      "lon": "-79.361361"
    },
    {
      "id": 556,
      "name": "Colinas de Pacora I",
      "lat": "9.088812",
      "lon": "-79.287472"
    },
    {
      "id": 555,
      "name": "Colinas de Pacora R",
      "lat": "9.088748",
      "lon": "-79.288416"
    },
    {
      "id": 280,
      "name": "Colonias del Prado",
      "lat": "9.062034",
      "lon": "-79.416084"
    },
    {
      "id": 431,
      "name": "Complejo Hospitalario Dr. Armulfo Arias Madrid",
      "lat": "8.981308",
      "lon": "-79.534259"
    },
    {
      "id": 466,
      "name": "Concepción I",
      "lat": "9.046496",
      "lon": "-79.434441"
    },
    {
      "id": 264,
      "name": "Concepción R",
      "lat": "9.046634",
      "lon": "-79.434232"
    },
    {
      "id": 156,
      "name": "Condado del Rey I",
      "lat": "9.024683",
      "lon": "-79.524268"
    },
    {
      "id": 155,
      "name": "Condado del Rey R",
      "lat": "9.024272",
      "lon": "-79.524442"
    },
    {
      "id": 368,
      "name": "Corozal ",
      "lat": "8.983265",
      "lon": "-79.572556"
    },
    {
      "id": 367,
      "name": "Corozal R",
      "lat": "8.984381",
      "lon": "-79.573489"
    },
    {
      "id": 142,
      "name": "Corregiduría Alcalde Díaz",
      "lat": "9.123866",
      "lon": "-79.556959"
    },
    {
      "id": 725,
      "name": "Corregiduría de Mano de Piedra I",
      "lat": "9.059322",
      "lon": "-79.491996"
    },
    {
      "id": 337,
      "name": "Corregiduría de Mano de Piedra R",
      "lat": "9.059216",
      "lon": "-79.492291"
    },
    {
      "id": 769,
      "name": "Corregiduría de Veranillo I",
      "lat": "9.036123",
      "lon": "-79.498765"
    },
    {
      "id": 759,
      "name": "Corregiduría de Veranillo R",
      "lat": "9.035435",
      "lon": "-79.49883"
    },
    {
      "id": 508,
      "name": "Corregiduría Tocumen I",
      "lat": "9.09681",
      "lon": "-79.375582"
    },
    {
      "id": 191,
      "name": "Corregiduría Tocumen R",
      "lat": "9.096726",
      "lon": "-79.375368"
    },
    {
      "id": 381,
      "name": "Crowne Plaza",
      "lat": "8.982484",
      "lon": "-79.528757"
    },
    {
      "id": 554,
      "name": "Cruce de Pacora I",
      "lat": "9.098241",
      "lon": "-79.287257"
    },
    {
      "id": 553,
      "name": "Cruce de Pacora R",
      "lat": "9.09788",
      "lon": "-79.287279"
    },
    {
      "id": 884,
      "name": "Cruce de Santa Librada I",
      "lat": "9.074647",
      "lon": "-79.507617"
    },
    {
      "id": 321,
      "name": "Cruce de Santa Librada R",
      "lat": "9.074578",
      "lon": "-79.507461"
    },
    {
      "id": 509,
      "name": "Cruce de Tocumen I",
      "lat": "9.097785",
      "lon": "-79.370754"
    },
    {
      "id": 192,
      "name": "Cruce de Tocumen R",
      "lat": "9.097504",
      "lon": "-79.370958"
    },
    {
      "id": 109,
      "name": "Cruce San Isidro I",
      "lat": "9.063804",
      "lon": "-79.511769"
    },
    {
      "id": 18,
      "name": "Cruce Vista Hermosa",
      "lat": "8.994342",
      "lon": "-79.51936"
    },
    {
      "id": 94,
      "name": "del Hospital",
      "lat": "9.031478",
      "lon": "-79.508281"
    },
    {
      "id": 682,
      "name": "Depósitos de Panamá I",
      "lat": "9.00797",
      "lon": "-79.508057"
    },
    {
      "id": 619,
      "name": "Depósitos de Panamá R",
      "lat": "9.006952",
      "lon": "-79.5087"
    },
    {
      "id": 616,
      "name": "Desc. Después USMA R",
      "lat": "9.031069",
      "lon": "-79.509666"
    },
    {
      "id": 369,
      "name": "Diablo",
      "lat": "8.97327",
      "lon": "-79.565343"
    },
    {
      "id": 461,
      "name": "Diablo R",
      "lat": "8.973227",
      "lon": "-79.565628"
    },
    {
      "id": 701,
      "name": "Domo I",
      "lat": "8.98152",
      "lon": "-79.546788"
    },
    {
      "id": 606,
      "name": "Don Bosco I",
      "lat": "9.061478",
      "lon": "-79.423074"
    },
    {
      "id": 840,
      "name": "Don Bosco Norte I",
      "lat": "9.133299",
      "lon": "-79.617223"
    },
    {
      "id": 839,
      "name": "Don Bosco Norte R",
      "lat": "9.133559",
      "lon": "-79.616976"
    },
    {
      "id": 678,
      "name": "Don Bosco R",
      "lat": "9.062177",
      "lon": "-79.422441"
    },
    {
      "id": 83,
      "name": "Edificio Bolívar I",
      "lat": "9.013197",
      "lon": "-79.517738"
    },
    {
      "id": 84,
      "name": "Edificio Carnaval",
      "lat": "9.016142",
      "lon": "-79.517981"
    },
    {
      "id": 82,
      "name": "Edificio Cosmopolitan",
      "lat": "9.012076",
      "lon": "-79.517385"
    },
    {
      "id": 215,
      "name": "Edificio Inteligente",
      "lat": "8.984333",
      "lon": "-79.516549"
    },
    {
      "id": 668,
      "name": "El Balboa I",
      "lat": "9.024224",
      "lon": "-79.486921"
    },
    {
      "id": 230,
      "name": "El Balboa R",
      "lat": "9.023991",
      "lon": "-79.486481"
    },
    {
      "id": 196,
      "name": "El Brillante I",
      "lat": "9.086709",
      "lon": "-79.366077"
    },
    {
      "id": 512,
      "name": "El Brillante R",
      "lat": "9.086762",
      "lon": "-79.3665"
    },
    {
      "id": 410,
      "name": "El Carmen",
      "lat": "8.99261",
      "lon": "-79.523028"
    },
    {
      "id": 203,
      "name": "El Coloso I",
      "lat": "9.079002",
      "lon": "-79.35987"
    },
    {
      "id": 204,
      "name": "El Coloso R",
      "lat": "9.078557",
      "lon": "-79.359698"
    },
    {
      "id": 171,
      "name": "El Crisol I",
      "lat": "9.043713",
      "lon": "-79.472095"
    },
    {
      "id": 587,
      "name": "El Crisol R",
      "lat": "9.043286",
      "lon": "-79.47204"
    },
    {
      "id": 653,
      "name": "El Domo R",
      "lat": "8.981053",
      "lon": "-79.545457"
    },
    {
      "id": 48,
      "name": "El Dorado I",
      "lat": "9.009789",
      "lon": "-79.534533"
    },
    {
      "id": 49,
      "name": "El Dorado R",
      "lat": "9.009607",
      "lon": "-79.534058"
    },
    {
      "id": 531,
      "name": "El Encanto I",
      "lat": "9.103469",
      "lon": "-79.379348"
    },
    {
      "id": 530,
      "name": "El Encanto R",
      "lat": "9.103241",
      "lon": "-79.378774"
    },
    {
      "id": 12,
      "name": "El Geriátrico",
      "lat": "8.977883",
      "lon": "-79.531055"
    },
    {
      "id": 831,
      "name": "El Grandioso I",
      "lat": "9.123442",
      "lon": "-79.605753"
    },
    {
      "id": 832,
      "name": "El Grandioso R",
      "lat": "9.123093",
      "lon": "-79.605968"
    },
    {
      "id": 43,
      "name": "El Ingenio I",
      "lat": "9.006107",
      "lon": "-79.520593"
    },
    {
      "id": 41,
      "name": "El Ingenio R",
      "lat": "9.005754",
      "lon": "-79.520143"
    },
    {
      "id": 562,
      "name": "El Límite I",
      "lat": "8.951602",
      "lon": "-79.548032"
    },
    {
      "id": 861,
      "name": "El Mirador I",
      "lat": "9.075648",
      "lon": "-79.491271"
    },
    {
      "id": 304,
      "name": "El Mirador R",
      "lat": "9.07568",
      "lon": "-79.491159"
    },
    {
      "id": 541,
      "name": "El Molino I",
      "lat": "9.100762",
      "lon": "-79.331015"
    },
    {
      "id": 542,
      "name": "El Molino R",
      "lat": "9.100259",
      "lon": "-79.331262"
    },
    {
      "id": 408,
      "name": "El Paical",
      "lat": "8.99608",
      "lon": "-79.53058"
    },
    {
      "id": 688,
      "name": "El Palmar I",
      "lat": "9.085824",
      "lon": "-79.52908"
    },
    {
      "id": 121,
      "name": "El Palmar R",
      "lat": "9.08557",
      "lon": "-79.528125"
    },
    {
      "id": 814,
      "name": "El Pedernal I",
      "lat": "9.124947",
      "lon": "-79.609836"
    },
    {
      "id": 830,
      "name": "El Pedernal R",
      "lat": "9.124597",
      "lon": "-79.609916"
    },
    {
      "id": 246,
      "name": "El Pinate I",
      "lat": "9.045824",
      "lon": "-79.445776"
    },
    {
      "id": 627,
      "name": "El Pinate R",
      "lat": "9.046306",
      "lon": "-79.445175"
    },
    {
      "id": 732,
      "name": "El Pueblito I",
      "lat": "9.06979",
      "lon": "-79.506066"
    },
    {
      "id": 319,
      "name": "El Pueblito R",
      "lat": "9.069334",
      "lon": "-79.505782"
    },
    {
      "id": 803,
      "name": "El Rocío I",
      "lat": "9.083017",
      "lon": "-79.52783"
    },
    {
      "id": 804,
      "name": "El Rocío R",
      "lat": "9.083388",
      "lon": "-79.527444"
    },
    {
      "id": 843,
      "name": "El Sucre I",
      "lat": "9.157349",
      "lon": "-79.617941"
    },
    {
      "id": 710,
      "name": "El Sucre R",
      "lat": "9.15718",
      "lon": "-79.616718"
    },
    {
      "id": 330,
      "name": "El Valle",
      "lat": "9.075076",
      "lon": "-79.514306"
    },
    {
      "id": 329,
      "name": "El Valle San Isidro I",
      "lat": "9.067914",
      "lon": "-79.507086"
    },
    {
      "id": 731,
      "name": "El Valle San Isidro R",
      "lat": "9.06801",
      "lon": "-79.506581"
    },
    {
      "id": 438,
      "name": "Embajada Estados Unidos",
      "lat": "8.998923",
      "lon": "-79.559216"
    },
    {
      "id": 677,
      "name": "Entrada 24 de Diciembre",
      "lat": "9.100783",
      "lon": "-79.359097"
    },
    {
      "id": 148,
      "name": "Entrada Alcalde Díaz",
      "lat": "9.11037",
      "lon": "-79.555559"
    },
    {
      "id": 763,
      "name": "Entrada Calle O I",
      "lat": "9.041729",
      "lon": "-79.496834"
    },
    {
      "id": 756,
      "name": "Entrada Calle O R",
      "lat": "9.042121",
      "lon": "-79.495976"
    },
    {
      "id": 700,
      "name": "Entrada Ciudad Bolívar",
      "lat": "9.109512",
      "lon": "-79.542947"
    },
    {
      "id": 838,
      "name": "Entrada Ciudad Bolívar R",
      "lat": "9.10911",
      "lon": "-79.542807"
    },
    {
      "id": 358,
      "name": "Entrada Ciudad del Saber",
      "lat": "8.999747",
      "lon": "-79.58583"
    },
    {
      "id": 359,
      "name": "Entrada Ciudad del Saber R",
      "lat": "8.999662",
      "lon": "-79.586023"
    },
    {
      "id": 44,
      "name": "Entrada Club X",
      "lat": "9.007657",
      "lon": "-79.520585"
    },
    {
      "id": 642,
      "name": "Entrada Costa del Este I",
      "lat": "9.015112",
      "lon": "-79.485612"
    },
    {
      "id": 641,
      "name": "Entrada Costa del Este R",
      "lat": "9.015006",
      "lon": "-79.484882"
    },
    {
      "id": 656,
      "name": "Entrada Curundú",
      "lat": "8.971707",
      "lon": "-79.546509"
    },
    {
      "id": 351,
      "name": "Entrada de Calle M",
      "lat": "9.038714",
      "lon": "-79.493227"
    },
    {
      "id": 773,
      "name": "Entrada del Valle de San Isidro I",
      "lat": "9.070976",
      "lon": "-79.506726"
    },
    {
      "id": 318,
      "name": "Entrada del Valle de San Isidro R",
      "lat": "9.071257",
      "lon": "-79.506437"
    },
    {
      "id": 338,
      "name": "Entrada de Mano de Piedra I",
      "lat": "9.062183",
      "lon": "-79.492468"
    },
    {
      "id": 249,
      "name": "Entrada de San Antonio",
      "lat": "9.053172",
      "lon": "-79.44407"
    },
    {
      "id": 112,
      "name": "Entrada de San Isidro (Policlínica) I",
      "lat": "9.064916",
      "lon": "-79.510417"
    },
    {
      "id": 111,
      "name": "Entrada de San Isidro (Policlínica) R",
      "lat": "9.064614",
      "lon": "-79.510208"
    },
    {
      "id": 453,
      "name": "Entrada El Amanecer",
      "lat": "9.138408",
      "lon": "-79.552101"
    },
    {
      "id": 730,
      "name": "Entrada el Pueblito I",
      "lat": "9.069112",
      "lon": "-79.503137"
    },
    {
      "id": 347,
      "name": "Entrada El Pueblito R",
      "lat": "9.06917",
      "lon": "-79.503588"
    },
    {
      "id": 720,
      "name": "Entrada Mano de Piedra R",
      "lat": "9.062744",
      "lon": "-79.492854"
    },
    {
      "id": 858,
      "name": "Entrada Pueblo Nuevo",
      "lat": "9.007196",
      "lon": "-79.519204"
    },
    {
      "id": 744,
      "name": "Entrada Rooselvet R",
      "lat": "9.03144",
      "lon": "-79.491427"
    },
    {
      "id": 697,
      "name": "Entrada Tinajitas",
      "lat": "9.062797",
      "lon": "-79.510213"
    },
    {
      "id": 822,
      "name": "?Esclava de Cristo Rey",
      "lat": "9.132351",
      "lon": "-79.615324"
    },
    {
      "id": 361,
      "name": "Esclusas de Miraflores",
      "lat": "8.9975",
      "lon": "-79.590624"
    },
    {
      "id": 386,
      "name": "Escritor Ricardo Miró",
      "lat": "8.99946",
      "lon": "-79.523232"
    },
    {
      "id": 676,
      "name": "Escuela 24 de Diciembre",
      "lat": "9.09805",
      "lon": "-79.35958"
    },
    {
      "id": 761,
      "name": "Escuela Carlos A. Mendoza I",
      "lat": "9.045124",
      "lon": "-79.499248"
    },
    {
      "id": 754,
      "name": "Escuela Carlos A. Mendoza R",
      "lat": "9.046136",
      "lon": "-79.499044"
    },
    {
      "id": 748,
      "name": "Escuela Estado de Israel R",
      "lat": "9.038529",
      "lon": "-79.492264"
    },
    {
      "id": 691,
      "name": "Escuela Francisco Beckman",
      "lat": "9.09877",
      "lon": "-79.532245"
    },
    {
      "id": 124,
      "name": "Escuela Francisco Beckman R",
      "lat": "9.098908",
      "lon": "-79.531934"
    },
    {
      "id": 396,
      "name": "Escuela José de Malambo",
      "lat": "8.953716",
      "lon": "-79.540753"
    },
    {
      "id": 633,
      "name": "Escuela José Dolores Moscote",
      "lat": "9.01971",
      "lon": "-79.486706"
    },
    {
      "id": 416,
      "name": "Escuela Justo Arosemena",
      "lat": "8.954995",
      "lon": "-79.542912"
    },
    {
      "id": 81,
      "name": "Escuela Manuel E. Amador I",
      "lat": "9.008552",
      "lon": "-79.518835"
    },
    {
      "id": 576,
      "name": "Escuela Manuel E. Amador R",
      "lat": "9.008086",
      "lon": "-79.5187"
    },
    {
      "id": 130,
      "name": "Escuela Melchor Lasso I",
      "lat": "9.11643",
      "lon": "-79.544824"
    },
    {
      "id": 738,
      "name": "Escuela Melchor Lasso R",
      "lat": "9.116504",
      "lon": "-79.544395"
    },
    {
      "id": 388,
      "name": "Escuela Profesional",
      "lat": "8.98287",
      "lon": "-79.514206"
    },
    {
      "id": 226,
      "name": "Escuela República de Haití I",
      "lat": "9.018762",
      "lon": "-79.492795"
    },
    {
      "id": 225,
      "name": "Escuela República de Haití R",
      "lat": "9.018598",
      "lon": "-79.492672"
    },
    {
      "id": 506,
      "name": "Escuela Ricardo J. Alfaro I",
      "lat": "9.091694",
      "lon": "-79.379252"
    },
    {
      "id": 189,
      "name": "Escuela Ricardo J. Alfaro R",
      "lat": "9.091513",
      "lon": "-79.379069"
    },
    {
      "id": 481,
      "name": "Escuela Rooselvet I",
      "lat": "9.162111",
      "lon": "-79.620634"
    },
    {
      "id": 482,
      "name": "Escuela Rooselvet R",
      "lat": "9.162111",
      "lon": "-79.620264"
    },
    {
      "id": 95,
      "name": "Escuela Rubiano I",
      "lat": "9.036394",
      "lon": "-79.506699"
    },
    {
      "id": 468,
      "name": "Escuela Rubiano R",
      "lat": "9.03607",
      "lon": "-79.505981"
    },
    {
      "id": 820,
      "name": "Escuela Rural Don Bosco I",
      "lat": "9.135783",
      "lon": "-79.613543"
    },
    {
      "id": 850,
      "name": "Escuela Rural Don Bosco R",
      "lat": "9.13591",
      "lon": "-79.612985"
    },
    {
      "id": 889,
      "name": "Escuela Santa Librada I",
      "lat": "9.073593",
      "lon": "-79.502794"
    },
    {
      "id": 314,
      "name": "Escuela Santa Librada R",
      "lat": "9.07345",
      "lon": "-79.503164"
    },
    {
      "id": 323,
      "name": "Escuela Santiago de la Guardia I",
      "lat": "9.073482",
      "lon": "-79.511399"
    },
    {
      "id": 772,
      "name": "Escuela Santiago de la Guardia R",
      "lat": "9.073832",
      "lon": "-79.511173"
    },
    {
      "id": 643,
      "name": "Escuela Sara Sotillo",
      "lat": "9.012547",
      "lon": "-79.486063"
    },
    {
      "id": 342,
      "name": "Escuela Torrijos Carter I",
      "lat": "9.069059",
      "lon": "-79.492591"
    },
    {
      "id": 728,
      "name": "Escuela Torrijos Carter R",
      "lat": "9.068767",
      "lon": "-79.492328"
    },
    {
      "id": 2,
      "name": "Estación 5 de Mayo",
      "lat": "8.962299",
      "lon": "-79.539685"
    },
    {
      "id": 3,
      "name": "Estación de Marañón",
      "lat": "8.961659",
      "lon": "-79.538676"
    },
    {
      "id": 425,
      "name": "Estación de Metro Iglesia del Carmen",
      "lat": "8.982366",
      "lon": "-79.527271"
    },
    {
      "id": 16,
      "name": "Estación de Metro Vía Argentina",
      "lat": "8.989367",
      "lon": "-79.522235"
    },
    {
      "id": 174,
      "name": "Estación de Parador",
      "lat": "9.060042",
      "lon": "-79.429398"
    },
    {
      "id": 292,
      "name": "Estación de Pedregal",
      "lat": "9.067536",
      "lon": "-79.420541"
    },
    {
      "id": 350,
      "name": "Estación de Veranillo",
      "lat": "9.049455",
      "lon": "-79.505011"
    },
    {
      "id": 458,
      "name": "Estación La Cabima",
      "lat": "9.110105",
      "lon": "-79.538522"
    },
    {
      "id": 205,
      "name": "Estación La Siesta",
      "lat": "9.080501",
      "lon": "-79.354779"
    },
    {
      "id": 336,
      "name": "Estación Mano de Piedra",
      "lat": "9.05558",
      "lon": "-79.489986"
    },
    {
      "id": 348,
      "name": "Estación Ruta Interna Samaria",
      "lat": "9.04833",
      "lon": "-79.499959"
    },
    {
      "id": 308,
      "name": "Estación Santa Librada",
      "lat": "9.080231",
      "lon": "-79.493315"
    },
    {
      "id": 306,
      "name": "Estación Torrijos-Carter",
      "lat": "9.078381",
      "lon": "-79.492007"
    },
    {
      "id": 679,
      "name": "Estadio Rommel Fernandez I",
      "lat": "9.036643",
      "lon": "-79.471257"
    },
    {
      "id": 238,
      "name": "Estadio Rommel Fernández R",
      "lat": "9.036669",
      "lon": "-79.470125"
    },
    {
      "id": 91,
      "name": "Estrella Azul I",
      "lat": "9.023527",
      "lon": "-79.512616"
    },
    {
      "id": 90,
      "name": "Estrella Azul R",
      "lat": "9.023146",
      "lon": "-79.512885"
    },
    {
      "id": 150,
      "name": "Fábrica de Baldosas I",
      "lat": "9.11473",
      "lon": "-79.567516"
    },
    {
      "id": 807,
      "name": "Fábrica de Baldosas R",
      "lat": "9.114089",
      "lon": "-79.567709"
    },
    {
      "id": 749,
      "name": "FarmaNet R",
      "lat": "9.038719",
      "lon": "-79.493036"
    },
    {
      "id": 392,
      "name": "Federico Boyd",
      "lat": "8.976767",
      "lon": "-79.526873"
    },
    {
      "id": 544,
      "name": "Felipillo I",
      "lat": "9.100614",
      "lon": "-79.32837"
    },
    {
      "id": 543,
      "name": "Felipillo R",
      "lat": "9.100004",
      "lon": "-79.32697"
    },
    {
      "id": 335,
      "name": "FEMSA",
      "lat": "9.006971",
      "lon": "-79.531255"
    },
    {
      "id": 374,
      "name": "Figali-I",
      "lat": "8.93622",
      "lon": "-79.545328"
    },
    {
      "id": 375,
      "name": "Figali R",
      "lat": "8.940604",
      "lon": "-79.546574"
    },
    {
      "id": 19,
      "name": "Furniture City I",
      "lat": "8.995582",
      "lon": "-79.519574"
    },
    {
      "id": 570,
      "name": "Furniture City R",
      "lat": "8.995884",
      "lon": "-79.519429"
    },
    {
      "id": 387,
      "name": "Galerías Obarrio",
      "lat": "8.991215",
      "lon": "-79.520271"
    },
    {
      "id": 651,
      "name": "Gimnasio Panamá Viejo I",
      "lat": "9.006634",
      "lon": "-79.493616"
    },
    {
      "id": 650,
      "name": "Gimnasio Panamá Viejo R",
      "lat": "9.006253",
      "lon": "-79.493337"
    },
    {
      "id": 690,
      "name": "Gonzalillo I",
      "lat": "9.094188",
      "lon": "-79.532524"
    },
    {
      "id": 123,
      "name": "Gonzalillo R",
      "lat": "9.094575",
      "lon": "-79.53203"
    },
    {
      "id": 92,
      "name": "Gran Estación",
      "lat": "9.028293",
      "lon": "-79.507037"
    },
    {
      "id": 669,
      "name": "Graphic Shop",
      "lat": "8.996562",
      "lon": "-79.503416"
    },
    {
      "id": 661,
      "name": "Grill 50",
      "lat": "8.993595",
      "lon": "-79.516511"
    },
    {
      "id": 818,
      "name": "Grupo Orbe I",
      "lat": "9.142944",
      "lon": "-79.616482"
    },
    {
      "id": 716,
      "name": "Grupo ORBE R",
      "lat": "9.142944",
      "lon": "-79.61556"
    },
    {
      "id": 657,
      "name": "Grupo Sílaba",
      "lat": "8.987878",
      "lon": "-79.512584"
    },
    {
      "id": 886,
      "name": "Guandú I",
      "lat": "9.075537",
      "lon": "-79.498347"
    },
    {
      "id": 311,
      "name": "Guandú R",
      "lat": "9.076321",
      "lon": "-79.497038"
    },
    {
      "id": 599,
      "name": "Harinas del Itsmo I",
      "lat": "9.065912",
      "lon": "-79.414281"
    },
    {
      "id": 598,
      "name": "Harinas del Itsmo R",
      "lat": "9.065329",
      "lon": "-79.414678"
    },
    {
      "id": 525,
      "name": "Hospital 24 de Diciembre I",
      "lat": "9.094527",
      "lon": "-79.393939"
    },
    {
      "id": 524,
      "name": "Hospital 24 de Diciembre R",
      "lat": "9.094533",
      "lon": "-79.393682"
    },
    {
      "id": 219,
      "name": "Hospital América I",
      "lat": "9.00138",
      "lon": "-79.516819"
    },
    {
      "id": 218,
      "name": "Hospital América R",
      "lat": "9.002285",
      "lon": "-79.516001"
    },
    {
      "id": 5,
      "name": "Hospital del Niño",
      "lat": "8.968546",
      "lon": "-79.532081"
    },
    {
      "id": 10,
      "name": "Hospital Nacional",
      "lat": "8.972333",
      "lon": "-79.532956"
    },
    {
      "id": 400,
      "name": "Hospital Punta Pacífica",
      "lat": "8.982258",
      "lon": "-79.510716"
    },
    {
      "id": 1,
      "name": "Hospital Santo Tomás",
      "lat": "8.969822",
      "lon": "-79.534385"
    },
    {
      "id": 216,
      "name": "HSBC",
      "lat": "8.980593",
      "lon": "-79.522846"
    },
    {
      "id": 405,
      "name": "IDAAN",
      "lat": "8.989931",
      "lon": "-79.516248"
    },
    {
      "id": 582,
      "name": "IFARHU",
      "lat": "8.979782",
      "lon": "-79.529225"
    },
    {
      "id": 143,
      "name": "Iglesia Alcalde Díaz",
      "lat": "9.121687",
      "lon": "-79.557989"
    },
    {
      "id": 713,
      "name": "Iglesia Chilibre I",
      "lat": "9.184464",
      "lon": "-79.611783"
    },
    {
      "id": 712,
      "name": "Iglesia Chilibre R",
      "lat": "9.18565",
      "lon": "-79.610453"
    },
    {
      "id": 380,
      "name": "Iglesia del Carmen",
      "lat": "8.980715",
      "lon": "-79.527646"
    },
    {
      "id": 251,
      "name": "Iglesia San Antonio",
      "lat": "9.058395",
      "lon": "-79.447809"
    },
    {
      "id": 23,
      "name": "IJA del Casino",
      "lat": "8.972293",
      "lon": "-79.536299"
    },
    {
      "id": 178,
      "name": "Inadeh I",
      "lat": "9.069712",
      "lon": "-79.398951"
    },
    {
      "id": 177,
      "name": "Inadeh R",
      "lat": "9.069504",
      "lon": "-79.399846"
    },
    {
      "id": 521,
      "name": "Industrial I",
      "lat": "9.083997",
      "lon": "-79.39822"
    },
    {
      "id": 520,
      "name": "Industrial R",
      "lat": "9.084235",
      "lon": "-79.397925"
    },
    {
      "id": 105,
      "name": "Industrias de Buena Voluntad I",
      "lat": "9.050819",
      "lon": "-79.509612"
    },
    {
      "id": 106,
      "name": "Industrias de Buena Voluntad R",
      "lat": "9.053189",
      "lon": "-79.509388"
    },
    {
      "id": 85,
      "name": "Instituto Comercial I",
      "lat": "9.016715",
      "lon": "-79.517595"
    },
    {
      "id": 86,
      "name": "Instituto Comercial R",
      "lat": "9.016962",
      "lon": "-79.517288"
    },
    {
      "id": 34,
      "name": "Instituto Justo Arosemena I",
      "lat": "8.987695",
      "lon": "-79.505138"
    },
    {
      "id": 777,
      "name": "Instituto Justo Arosemena R",
      "lat": "8.987179",
      "lon": "-79.506018"
    },
    {
      "id": 415,
      "name": "Instituto Nacional",
      "lat": "8.957818",
      "lon": "-79.54205"
    },
    {
      "id": 79,
      "name": "IPHE",
      "lat": "9.006746",
      "lon": "-79.527867"
    },
    {
      "id": 379,
      "name": "Isla Flamenco",
      "lat": "8.910833",
      "lon": "-79.522515"
    },
    {
      "id": 378,
      "name": "Isla Perico R",
      "lat": "8.915041",
      "lon": "-79.527221"
    },
    {
      "id": 780,
      "name": "Jimmy I",
      "lat": "8.991163",
      "lon": "-79.498615"
    },
    {
      "id": 779,
      "name": "Jimmy R",
      "lat": "8.992011",
      "lon": "-79.49839"
    },
    {
      "id": 248,
      "name": "J. J. Vallarino I",
      "lat": "9.055137",
      "lon": "-79.434519"
    },
    {
      "id": 625,
      "name": "J. J. Vallarino R",
      "lat": "9.054575",
      "lon": "-79.434478"
    },
    {
      "id": 247,
      "name": "Juan Díaz I",
      "lat": "9.048208",
      "lon": "-79.439151"
    },
    {
      "id": 626,
      "name": "Juan Díaz R",
      "lat": "9.048271",
      "lon": "-79.43973"
    },
    {
      "id": 129,
      "name": "Judith I",
      "lat": "9.113035",
      "lon": "-79.543532"
    },
    {
      "id": 128,
      "name": "Judith R",
      "lat": "9.113368",
      "lon": "-79.543301"
    },
    {
      "id": 670,
      "name": "Junta Comunal 24 de Diciembre",
      "lat": "9.098664",
      "lon": "-79.361029"
    },
    {
      "id": 417,
      "name": "Junta Comunal El Chorrillo",
      "lat": "8.953674",
      "lon": "-79.542543"
    },
    {
      "id": 833,
      "name": "?Junto Villa Nueva I",
      "lat": "9.125985",
      "lon": "-79.585615"
    },
    {
      "id": 834,
      "name": "Junto Villa Nueva R",
      "lat": "9.126303",
      "lon": "-79.585851"
    },
    {
      "id": 33,
      "name": "Kyocera I",
      "lat": "8.98713",
      "lon": "-79.509265"
    },
    {
      "id": 776,
      "name": "Kyocera R",
      "lat": "8.986861",
      "lon": "-79.509103"
    },
    {
      "id": 195,
      "name": "La Bajada I",
      "lat": "9.091143",
      "lon": "-79.365814"
    },
    {
      "id": 194,
      "name": "La Bajada R",
      "lat": "9.091264",
      "lon": "-79.366028"
    },
    {
      "id": 693,
      "name": "La Cabima I",
      "lat": "9.107584",
      "lon": "-79.536788"
    },
    {
      "id": 125,
      "name": "La Cabima R",
      "lat": "9.107696",
      "lon": "-79.536526"
    },
    {
      "id": 152,
      "name": "La Cantera I",
      "lat": "9.12732",
      "lon": "-79.581297"
    },
    {
      "id": 826,
      "name": "La Cantera R",
      "lat": "9.126737",
      "lon": "-79.581281"
    },
    {
      "id": 536,
      "name": "La Casa del Zink I",
      "lat": "9.102891",
      "lon": "-79.363614"
    },
    {
      "id": 802,
      "name": "La Casa del Zink R",
      "lat": "9.102552",
      "lon": "-79.363743"
    },
    {
      "id": 499,
      "name": "La Cuchilla de Calidonia",
      "lat": "8.968082",
      "lon": "-79.539353"
    },
    {
      "id": 533,
      "name": "La Doña I",
      "lat": "9.103432",
      "lon": "-79.370078"
    },
    {
      "id": 532,
      "name": "La Doña R",
      "lat": "9.10287",
      "lon": "-79.370105"
    },
    {
      "id": 529,
      "name": "La Fonda I",
      "lat": "9.102091",
      "lon": "-79.384321"
    },
    {
      "id": 528,
      "name": "La Fonda R",
      "lat": "9.101869",
      "lon": "-79.384337"
    },
    {
      "id": 346,
      "name": "La Fula I",
      "lat": "9.067395",
      "lon": "-79.501711"
    },
    {
      "id": 729,
      "name": "La Fula R",
      "lat": "9.067401",
      "lon": "-79.502108"
    },
    {
      "id": 510,
      "name": "La Garceta I",
      "lat": "9.094935",
      "lon": "-79.367884"
    },
    {
      "id": 193,
      "name": "La Garceta R",
      "lat": "9.094686",
      "lon": "-79.368059"
    },
    {
      "id": 868,
      "name": "La Italiana",
      "lat": "9.025464",
      "lon": "-79.501078"
    },
    {
      "id": 57,
      "name": "La Loceria I",
      "lat": "8.993667",
      "lon": "-79.534195"
    },
    {
      "id": 58,
      "name": "La Loceria R",
      "lat": "8.993971",
      "lon": "-79.53379"
    },
    {
      "id": 523,
      "name": "La Loma I",
      "lat": "9.089903",
      "lon": "-79.395822"
    },
    {
      "id": 815,
      "name": "La Loma Norte I",
      "lat": "9.128792",
      "lon": "-79.611976"
    },
    {
      "id": 816,
      "name": "La Loma Norte R",
      "lat": "9.128135",
      "lon": "-79.612148"
    },
    {
      "id": 522,
      "name": "La Loma R",
      "lat": "9.089368",
      "lon": "-79.395779"
    },
    {
      "id": 501,
      "name": "La Morada I",
      "lat": "9.077471",
      "lon": "-79.386821"
    },
    {
      "id": 183,
      "name": "La Morada R",
      "lat": "9.077179",
      "lon": "-79.386499"
    },
    {
      "id": 722,
      "name": "La Paz I",
      "lat": "9.064752",
      "lon": "-79.488342"
    },
    {
      "id": 340,
      "name": "La Paz R",
      "lat": "9.06437",
      "lon": "-79.488627"
    },
    {
      "id": 753,
      "name": "La Pesa R",
      "lat": "9.047598",
      "lon": "-79.500579"
    },
    {
      "id": 875,
      "name": "La Prensa",
      "lat": "9.011111",
      "lon": "-79.510052"
    },
    {
      "id": 518,
      "name": "Las Américas I",
      "lat": "9.072433",
      "lon": "-79.403472"
    },
    {
      "id": 517,
      "name": "Las Américas R",
      "lat": "9.072242",
      "lon": "-79.402463"
    },
    {
      "id": 256,
      "name": "Las Arcadas",
      "lat": "9.070325",
      "lon": "-79.454096"
    },
    {
      "id": 589,
      "name": "Las Colinas I",
      "lat": "9.030873",
      "lon": "-79.502102"
    },
    {
      "id": 163,
      "name": "Las Colinas R",
      "lat": "9.030577",
      "lon": "-79.502403"
    },
    {
      "id": 511,
      "name": "La Siesta Vieja I",
      "lat": "9.082434",
      "lon": "-79.366522"
    },
    {
      "id": 197,
      "name": "La Siesta Vieja R",
      "lat": "9.082429",
      "lon": "-79.366844"
    },
    {
      "id": 689,
      "name": "Las Lajas I",
      "lat": "9.088028",
      "lon": "-79.531767"
    },
    {
      "id": 122,
      "name": "Las Lajas R",
      "lat": "9.088102",
      "lon": "-79.531472"
    },
    {
      "id": 287,
      "name": "Las Mañanas",
      "lat": "9.079722",
      "lon": "-79.407517"
    },
    {
      "id": 232,
      "name": "Las Marcasas I",
      "lat": "9.027509",
      "lon": "-79.481363"
    },
    {
      "id": 231,
      "name": "Las Marcasas R",
      "lat": "9.027191",
      "lon": "-79.481009"
    },
    {
      "id": 538,
      "name": "Las Paredes I",
      "lat": "9.102589",
      "lon": "-79.359693"
    },
    {
      "id": 537,
      "name": "Las Paredes R",
      "lat": "9.102314",
      "lon": "-79.359655"
    },
    {
      "id": 301,
      "name": "Las Trancas",
      "lat": "9.085125",
      "lon": "-79.391906"
    },
    {
      "id": 483,
      "name": "Las Vegas I",
      "lat": "9.165044",
      "lon": "-79.620034"
    },
    {
      "id": 853,
      "name": "Las Vegas Interno I",
      "lat": "9.165696",
      "lon": "-79.615796"
    },
    {
      "id": 714,
      "name": "Las Vegas Interno R",
      "lat": "9.16523",
      "lon": "-79.615173"
    },
    {
      "id": 484,
      "name": "Las Vegas R",
      "lat": "9.164647",
      "lon": "-79.619443"
    },
    {
      "id": 813,
      "name": "La Unión I",
      "lat": "9.122362",
      "lon": "-79.602782"
    },
    {
      "id": 829,
      "name": "La Unión R",
      "lat": "9.121822",
      "lon": "-79.602621"
    },
    {
      "id": 159,
      "name": "La Universidad Santa María la Antigua USMA I",
      "lat": "9.028635",
      "lon": "-79.519676"
    },
    {
      "id": 160,
      "name": "La Universidad Santa María la Antigua USMA R",
      "lat": "9.029191",
      "lon": "-79.519064"
    },
    {
      "id": 719,
      "name": "La Vilca I",
      "lat": "9.063115",
      "lon": "-79.497449"
    },
    {
      "id": 344,
      "name": "La Vilca R",
      "lat": "9.063004",
      "lon": "-79.497585"
    },
    {
      "id": 503,
      "name": "Leones I",
      "lat": "9.0828",
      "lon": "-79.384444"
    },
    {
      "id": 185,
      "name": "Leones R",
      "lat": "9.082903",
      "lon": "-79.384678"
    },
    {
      "id": 694,
      "name": "Linda Vista Alcalde Díaz",
      "lat": "9.125445",
      "lon": "-79.553075"
    },
    {
      "id": 161,
      "name": "Linda Vista I",
      "lat": "9.031259",
      "lon": "-79.516892"
    },
    {
      "id": 67,
      "name": "Loma la Pava",
      "lat": "8.993183",
      "lon": "-79.529992"
    },
    {
      "id": 66,
      "name": "Loma la Pava R",
      "lat": "8.993093",
      "lon": "-79.529762"
    },
    {
      "id": 54,
      "name": "Los Ángeles I",
      "lat": "8.998416",
      "lon": "-79.53351"
    },
    {
      "id": 277,
      "name": "Los Caobos",
      "lat": "9.057516",
      "lon": "-79.412956"
    },
    {
      "id": 157,
      "name": "Los Libertadores I",
      "lat": "9.025986",
      "lon": "-79.52169"
    },
    {
      "id": 158,
      "name": "Los Libertadores R",
      "lat": "9.026092",
      "lon": "-79.520792"
    },
    {
      "id": 289,
      "name": "Los Nogales",
      "lat": "9.077169",
      "lon": "-79.411497"
    },
    {
      "id": 288,
      "name": "Los Nogales 2",
      "lat": "9.0783",
      "lon": "-79.41054"
    },
    {
      "id": 345,
      "name": "Los Pinos I",
      "lat": "9.065557",
      "lon": "-79.501587"
    },
    {
      "id": 718,
      "name": "Los Pinos R",
      "lat": "9.065403",
      "lon": "-79.501812"
    },
    {
      "id": 612,
      "name": "Los Pueblos I",
      "lat": "9.050904",
      "lon": "-79.450089"
    },
    {
      "id": 172,
      "name": "Los Pueblos R",
      "lat": "9.050451",
      "lon": "-79.450237"
    },
    {
      "id": 787,
      "name": "Los Sauces I",
      "lat": "9.052552",
      "lon": "-79.418074"
    },
    {
      "id": 274,
      "name": "Los Sauces R",
      "lat": "9.052636",
      "lon": "-79.417913"
    },
    {
      "id": 93,
      "name": "Machetazo San Miguelito",
      "lat": "9.029618",
      "lon": "-79.506909"
    },
    {
      "id": 493,
      "name": "Madden I",
      "lat": "9.198693",
      "lon": "-79.624143"
    },
    {
      "id": 492,
      "name": "Madden R",
      "lat": "9.199037",
      "lon": "-79.623671"
    },
    {
      "id": 286,
      "name": "Mañanitas",
      "lat": "9.079733",
      "lon": "-79.403719"
    },
    {
      "id": 519,
      "name": "Mañanitas I",
      "lat": "9.079399",
      "lon": "-79.400167"
    },
    {
      "id": 302,
      "name": "Mañanitas Interna",
      "lat": "9.086142",
      "lon": "-79.389047"
    },
    {
      "id": 285,
      "name": "Mañanitas R",
      "lat": "9.079802",
      "lon": "-79.399754"
    },
    {
      "id": 382,
      "name": "Manuel Espinoza Batista",
      "lat": "8.985652",
      "lon": "-79.531276"
    },
    {
      "id": 37,
      "name": "Marbella (el pio pio)",
      "lat": "8.997702",
      "lon": "-79.519846"
    },
    {
      "id": 38,
      "name": "Marbella (super 99)",
      "lat": "8.99826",
      "lon": "-79.520022"
    },
    {
      "id": 852,
      "name": "María Eugenia I",
      "lat": "9.149151",
      "lon": "-79.618757"
    },
    {
      "id": 717,
      "name": "Maria Eugenia R",
      "lat": "9.149315",
      "lon": "-79.618236"
    },
    {
      "id": 662,
      "name": "Marianela",
      "lat": "8.995619",
      "lon": "-79.51399"
    },
    {
      "id": 383,
      "name": "Markez-W-I",
      "lat": "9.000191",
      "lon": "-79.531972"
    },
    {
      "id": 25,
      "name": "Martín Sosa I",
      "lat": "8.977241",
      "lon": "-79.534884"
    },
    {
      "id": 471,
      "name": "Martín Sosa R",
      "lat": "8.977366",
      "lon": "-79.53446"
    },
    {
      "id": 127,
      "name": "Meconsa I",
      "lat": "9.109798",
      "lon": "-79.541885"
    },
    {
      "id": 126,
      "name": "Meconsa R",
      "lat": "9.109894",
      "lon": "-79.541541"
    },
    {
      "id": 583,
      "name": "Medisalud",
      "lat": "8.977991",
      "lon": "-79.532744"
    },
    {
      "id": 366,
      "name": "Meduca-I",
      "lat": "8.985662",
      "lon": "-79.574535"
    },
    {
      "id": 365,
      "name": "Meduca-R",
      "lat": "8.985273",
      "lon": "-79.574536"
    },
    {
      "id": 393,
      "name": "Melchi",
      "lat": "8.958688",
      "lon": "-79.539559"
    },
    {
      "id": 20,
      "name": "Mercadito Calidonia",
      "lat": "8.963864",
      "lon": "-79.539746"
    },
    {
      "id": 394,
      "name": "Mercado de Mariscos",
      "lat": "8.958206",
      "lon": "-79.538999"
    },
    {
      "id": 206,
      "name": "Metro Bus Patio 24 de Diciembre",
      "lat": "9.10197",
      "lon": "-79.358089"
    },
    {
      "id": 117,
      "name": "Milla 8 I",
      "lat": "9.068603",
      "lon": "-79.518989"
    },
    {
      "id": 116,
      "name": "Milla 8 R",
      "lat": "9.068751",
      "lon": "-79.51856"
    },
    {
      "id": 758,
      "name": "Ministerio de Salud MINSA Veranillo R",
      "lat": "9.032807",
      "lon": "-79.499989"
    },
    {
      "id": 164,
      "name": "Ministerio de Salud Veranillo MINSA I",
      "lat": "9.031779",
      "lon": "-79.500192"
    },
    {
      "id": 462,
      "name": "Miraflores I",
      "lat": "9.003392",
      "lon": "-79.589242"
    },
    {
      "id": 463,
      "name": "Miraflores R",
      "lat": "9.003683",
      "lon": "-79.589317"
    },
    {
      "id": 227,
      "name": "Monte Oscuro",
      "lat": "9.020129",
      "lon": "-79.49166"
    },
    {
      "id": 412,
      "name": "Monumento a Einstein",
      "lat": "8.988454",
      "lon": "-79.529007"
    },
    {
      "id": 654,
      "name": "MOP I",
      "lat": "8.97372",
      "lon": "-79.54726"
    },
    {
      "id": 504,
      "name": "Morelo I",
      "lat": "9.08646",
      "lon": "-79.384782"
    },
    {
      "id": 186,
      "name": "Morelo R",
      "lat": "9.086725",
      "lon": "-79.384407"
    },
    {
      "id": 666,
      "name": "Motores Japoneses",
      "lat": "8.993876",
      "lon": "-79.499393"
    },
    {
      "id": 99,
      "name": "Moya",
      "lat": "9.042216",
      "lon": "-79.508067"
    },
    {
      "id": 455,
      "name": "M/S Rayitos",
      "lat": "9.140158",
      "lon": "-79.55245"
    },
    {
      "id": 585,
      "name": "Multiláminas I",
      "lat": "8.996928",
      "lon": "-79.527213"
    },
    {
      "id": 68,
      "name": "Multiláminas R",
      "lat": "8.996684",
      "lon": "-79.527159"
    },
    {
      "id": 32,
      "name": "Multiplaza",
      "lat": "8.986875",
      "lon": "-79.51267"
    },
    {
      "id": 775,
      "name": "Multiplaza I",
      "lat": "8.985923",
      "lon": "-79.51215"
    },
    {
      "id": 376,
      "name": "Museo Frank Gehry",
      "lat": "8.933485",
      "lon": "-79.545139"
    },
    {
      "id": 297,
      "name": "Nazareno I",
      "lat": "9.065133",
      "lon": "-79.431678"
    },
    {
      "id": 734,
      "name": "Nazareno R",
      "lat": "9.063851",
      "lon": "-79.431152"
    },
    {
      "id": 594,
      "name": "Nueva California I",
      "lat": "9.055238",
      "lon": "-79.438233"
    },
    {
      "id": 593,
      "name": "Nueva California R",
      "lat": "9.054835",
      "lon": "-79.437944"
    },
    {
      "id": 546,
      "name": "Nueva Esperanza I",
      "lat": "9.10002",
      "lon": "-79.32189"
    },
    {
      "id": 151,
      "name": "Nueva Esperanza Norte I",
      "lat": "9.121313",
      "lon": "-79.57405"
    },
    {
      "id": 837,
      "name": "Nueva Esperanza Norte R",
      "lat": "9.120635",
      "lon": "-79.574018"
    },
    {
      "id": 545,
      "name": "Nueva Esperanza R",
      "lat": "9.099687",
      "lon": "-79.322287"
    },
    {
      "id": 540,
      "name": "Nuevo Tocumen I",
      "lat": "9.102224",
      "lon": "-79.34957"
    },
    {
      "id": 539,
      "name": "Nuevo Tocumen R",
      "lat": "9.101122",
      "lon": "-79.348626"
    },
    {
      "id": 17,
      "name": "Obarrio",
      "lat": "8.992779",
      "lon": "-79.520368"
    },
    {
      "id": 107,
      "name": "Ojo de Agua I",
      "lat": "9.055789",
      "lon": "-79.5095"
    },
    {
      "id": 108,
      "name": "Ojo de Agua R",
      "lat": "9.05581",
      "lon": "-79.50913"
    },
    {
      "id": 557,
      "name": "Pacora I",
      "lat": "9.087032",
      "lon": "-79.286335"
    },
    {
      "id": 558,
      "name": "Pacora R",
      "lat": "9.086841",
      "lon": "-79.287493"
    },
    {
      "id": 389,
      "name": "Paitilla I",
      "lat": "8.976109",
      "lon": "-79.516652"
    },
    {
      "id": 464,
      "name": "Paitilla R",
      "lat": "8.976073",
      "lon": "-79.51605"
    },
    {
      "id": 706,
      "name": "Panatro I",
      "lat": "9.118241",
      "lon": "-79.570917"
    },
    {
      "id": 825,
      "name": "Panatro R",
      "lat": "9.117712",
      "lon": "-79.571078"
    },
    {
      "id": 96,
      "name": "Pan de Azúcar I",
      "lat": "9.038153",
      "lon": "-79.507971"
    },
    {
      "id": 97,
      "name": "Pan de Azúcar R",
      "lat": "9.039212",
      "lon": "-79.508024"
    },
    {
      "id": 182,
      "name": "Pantanal I",
      "lat": "9.074171",
      "lon": "-79.388999"
    },
    {
      "id": 500,
      "name": "Pantanal R",
      "lat": "9.074049",
      "lon": "-79.388822"
    },
    {
      "id": 355,
      "name": "PARADA 5",
      "lat": "9.035408",
      "lon": "-79.492006"
    },
    {
      "id": 356,
      "name": "PARADA 6",
      "lat": "9.037739",
      "lon": "-79.492465"
    },
    {
      "id": 276,
      "name": "Parada de Santa Rita",
      "lat": "9.055068",
      "lon": "-79.411401"
    },
    {
      "id": 673,
      "name": "Parque 24 de Diciembre",
      "lat": "9.090327",
      "lon": "-79.360632"
    },
    {
      "id": 421,
      "name": "Parque Amelia Denis",
      "lat": "8.951077",
      "lon": "-79.546253"
    },
    {
      "id": 411,
      "name": "Parque Andrés Bello",
      "lat": "8.989079",
      "lon": "-79.526005"
    },
    {
      "id": 747,
      "name": "Parque Automotor R",
      "lat": "9.038529",
      "lon": "-79.489882"
    },
    {
      "id": 782,
      "name": "Parque de Alicante",
      "lat": "9.079129",
      "lon": "-79.409437"
    },
    {
      "id": 423,
      "name": "Parque de los Aburridos",
      "lat": "8.951507",
      "lon": "-79.542258"
    },
    {
      "id": 397,
      "name": "Parque de Santa Ana",
      "lat": "8.953613",
      "lon": "-79.538718"
    },
    {
      "id": 664,
      "name": "Parque Omar",
      "lat": "8.997283",
      "lon": "-79.506834"
    },
    {
      "id": 560,
      "name": "Parque Pacora I",
      "lat": "9.084638",
      "lon": "-79.286592"
    },
    {
      "id": 559,
      "name": "Parque Pacora R",
      "lat": "9.084468",
      "lon": "-79.287343"
    },
    {
      "id": 291,
      "name": "Parque Real",
      "lat": "9.071713",
      "lon": "-79.414265"
    },
    {
      "id": 7,
      "name": "Parque Urracá",
      "lat": "8.975188",
      "lon": "-79.52731"
    },
    {
      "id": 419,
      "name": "Patio Pinel",
      "lat": "8.952177",
      "lon": "-79.543191"
    },
    {
      "id": 385,
      "name": "Pato Brinks",
      "lat": "9.000836",
      "lon": "-79.529058"
    },
    {
      "id": 24,
      "name": "Perejil",
      "lat": "8.973019",
      "lon": "-79.53637"
    },
    {
      "id": 854,
      "name": "Pesqueros",
      "lat": "9.005395",
      "lon": "-79.497607"
    },
    {
      "id": 208,
      "name": "Piquera de Buses Balboa y Diablo",
      "lat": "8.961698",
      "lon": "-79.541168"
    },
    {
      "id": 209,
      "name": "Plaza 5 de Mayo",
      "lat": "8.96055",
      "lon": "-79.540443"
    },
    {
      "id": 859,
      "name": "Plaza Ágora",
      "lat": "9.010301",
      "lon": "-79.516704"
    },
    {
      "id": 680,
      "name": "Plaza Carolina I",
      "lat": "9.029798",
      "lon": "-79.477673"
    },
    {
      "id": 233,
      "name": "Plaza Carolina R",
      "lat": "9.029506",
      "lon": "-79.477227"
    },
    {
      "id": 15,
      "name": "Plaza Concordia",
      "lat": "8.984402",
      "lon": "-79.525864"
    },
    {
      "id": 592,
      "name": "Plaza Conquistador I",
      "lat": "9.041718",
      "lon": "-79.475055"
    },
    {
      "id": 170,
      "name": "Plaza Conquistador R",
      "lat": "9.039991",
      "lon": "-79.476809"
    },
    {
      "id": 40,
      "name": "Plaza Córdoba I",
      "lat": "9.002467",
      "lon": "-79.520236"
    },
    {
      "id": 39,
      "name": "Plaza Córdoba R",
      "lat": "9.001658",
      "lon": "-79.520017"
    },
    {
      "id": 50,
      "name": "Plaza Mirage I",
      "lat": "9.006622",
      "lon": "-79.533766"
    },
    {
      "id": 51,
      "name": "Plaza Mirage R",
      "lat": "9.004981",
      "lon": "-79.533033"
    },
    {
      "id": 217,
      "name": "Plaza New York",
      "lat": "8.982119",
      "lon": "-79.520245"
    },
    {
      "id": 339,
      "name": "Policía Mano de Piedra I",
      "lat": "9.063316",
      "lon": "-79.490263"
    },
    {
      "id": 721,
      "name": "Policía Mano de Piedra R",
      "lat": "9.063565",
      "lon": "-79.490413"
    },
    {
      "id": 213,
      "name": "Policía Nacional I",
      "lat": "8.966085",
      "lon": "-79.55137"
    },
    {
      "id": 212,
      "name": "Policía Nacional R",
      "lat": "8.96563",
      "lon": "-79.549224"
    },
    {
      "id": 733,
      "name": "Policlínica Generoso Guardia I",
      "lat": "9.071935",
      "lon": "-79.505283"
    },
    {
      "id": 317,
      "name": "Policlinica Generoso Guardia R",
      "lat": "9.071495",
      "lon": "-79.505385"
    },
    {
      "id": 239,
      "name": "Policlínica Juan Díaz I",
      "lat": "9.037202",
      "lon": "-79.469516"
    },
    {
      "id": 622,
      "name": "Policlínica Juan Díaz R",
      "lat": "9.037183",
      "lon": "-79.467051"
    },
    {
      "id": 767,
      "name": "Policlínica María Valdés I",
      "lat": "9.038052",
      "lon": "-79.49501"
    },
    {
      "id": 352,
      "name": "Policlínica María Valdés R",
      "lat": "9.037951",
      "lon": "-79.494683"
    },
    {
      "id": 22,
      "name": "Porras",
      "lat": "8.970087",
      "lon": "-79.53685"
    },
    {
      "id": 846,
      "name": "Potabilizadora I",
      "lat": "9.196623",
      "lon": "-79.622147"
    },
    {
      "id": 847,
      "name": "Potabilizadora R",
      "lat": "9.195394",
      "lon": "-79.620345"
    },
    {
      "id": 52,
      "name": "Power Club",
      "lat": "9.002898",
      "lon": "-79.533225"
    },
    {
      "id": 823,
      "name": "?Puente Don Bosco I",
      "lat": "9.131255",
      "lon": "-79.615018"
    },
    {
      "id": 824,
      "name": "?Puente Don Bosco R",
      "lat": "9.131308",
      "lon": "-79.614776"
    },
    {
      "id": 474,
      "name": "?Puente Roque I",
      "lat": "9.128919",
      "lon": "-79.61586"
    },
    {
      "id": 473,
      "name": "?Puente Roque R",
      "lat": "9.128538",
      "lon": "-79.614744"
    },
    {
      "id": 527,
      "name": "Punta del Este I",
      "lat": "9.09983",
      "lon": "-79.389004"
    },
    {
      "id": 526,
      "name": "Punta del Este R",
      "lat": "9.099681",
      "lon": "-79.388731"
    },
    {
      "id": 783,
      "name": "Punta Pacífica",
      "lat": "8.971558",
      "lon": "-79.506254"
    },
    {
      "id": 811,
      "name": "Quebrada Ancha I",
      "lat": "9.125402",
      "lon": "-79.576421"
    },
    {
      "id": 836,
      "name": "Quebrada Ancha R",
      "lat": "9.125106",
      "lon": "-79.576732"
    },
    {
      "id": 73,
      "name": "Raenco",
      "lat": "9.004559",
      "lon": "-79.521719"
    },
    {
      "id": 74,
      "name": "Raenco (Pueblo Nuevo)",
      "lat": "9.004494",
      "lon": "-79.521493"
    },
    {
      "id": 294,
      "name": "Rana de Oro I",
      "lat": "9.071374",
      "lon": "-79.426571"
    },
    {
      "id": 735,
      "name": "Rana de Oro R",
      "lat": "9.071093",
      "lon": "-79.426185"
    },
    {
      "id": 870,
      "name": "Refricentro Makaddesh",
      "lat": "9.023869",
      "lon": "-79.497226"
    },
    {
      "id": 660,
      "name": "Rey Calle 50",
      "lat": "8.993081",
      "lon": "-79.50354"
    },
    {
      "id": 391,
      "name": "Rhinos",
      "lat": "8.97851",
      "lon": "-79.52713"
    },
    {
      "id": 98,
      "name": "Rodapán I",
      "lat": "9.040888",
      "lon": "-79.50858"
    },
    {
      "id": 167,
      "name": "Rooselvet I",
      "lat": "9.030868",
      "lon": "-79.491486"
    },
    {
      "id": 586,
      "name": "Rooselvet R",
      "lat": "9.030513",
      "lon": "-79.491309"
    },
    {
      "id": 353,
      "name": "ruta interna de Moya",
      "lat": "9.037509",
      "lon": "-79.495844"
    },
    {
      "id": 434,
      "name": "Saint Mary",
      "lat": "8.979354",
      "lon": "-79.559224"
    },
    {
      "id": 765,
      "name": "Salida Calle O I",
      "lat": "9.042385",
      "lon": "-79.492886"
    },
    {
      "id": 751,
      "name": "Salida Calle O R",
      "lat": "9.043074",
      "lon": "-79.492334"
    },
    {
      "id": 139,
      "name": "Salida El Amanecer",
      "lat": "9.138654",
      "lon": "-79.552689"
    },
    {
      "id": 398,
      "name": "Salsipuedes",
      "lat": "8.955078",
      "lon": "-79.538037"
    },
    {
      "id": 250,
      "name": "San Antonio",
      "lat": "9.056",
      "lon": "-79.445652"
    },
    {
      "id": 514,
      "name": "San Antonio I",
      "lat": "9.088494",
      "lon": "-79.382658"
    },
    {
      "id": 187,
      "name": "San Antonio R",
      "lat": "9.088436",
      "lon": "-79.382164"
    },
    {
      "id": 602,
      "name": "San Cristobal Norte I",
      "lat": "9.045368",
      "lon": "-79.468698"
    },
    {
      "id": 601,
      "name": "San Cristobal Norte R",
      "lat": "9.04478",
      "lon": "-79.468403"
    },
    {
      "id": 241,
      "name": "San Cristobal Sur I",
      "lat": "9.038571",
      "lon": "-79.464895"
    },
    {
      "id": 240,
      "name": "San Cristobal Sur R",
      "lat": "9.038248",
      "lon": "-79.464396"
    },
    {
      "id": 244,
      "name": "San Fernando I",
      "lat": "9.041946",
      "lon": "-79.457084"
    },
    {
      "id": 630,
      "name": "San Fernando R",
      "lat": "9.041993",
      "lon": "-79.457626"
    },
    {
      "id": 639,
      "name": "San Gerando de Mayela R",
      "lat": "9.016637",
      "lon": "-79.483852"
    },
    {
      "id": 640,
      "name": "San Gerardo de Mayela I",
      "lat": "9.016913",
      "lon": "-79.484947"
    },
    {
      "id": 110,
      "name": "San Isidro R",
      "lat": "9.064116",
      "lon": "-79.511592"
    },
    {
      "id": 737,
      "name": "San Joaquín I",
      "lat": "9.070028",
      "lon": "-79.42347"
    },
    {
      "id": 293,
      "name": "San Joaquín R",
      "lat": "9.069859",
      "lon": "-79.423884"
    },
    {
      "id": 100,
      "name": "San José I (Interamericana)",
      "lat": "9.043925",
      "lon": "-79.507804"
    },
    {
      "id": 101,
      "name": "San José (Interamericana) R",
      "lat": "9.044743",
      "lon": "-79.507064"
    },
    {
      "id": 548,
      "name": "San Juan I",
      "lat": "9.098728",
      "lon": "-79.303651"
    },
    {
      "id": 547,
      "name": "San Juan R",
      "lat": "9.09841",
      "lon": "-79.303286"
    },
    {
      "id": 615,
      "name": "San Pedro Norte I",
      "lat": "9.047874",
      "lon": "-79.463832"
    },
    {
      "id": 607,
      "name": "San Pedro Norte R",
      "lat": "9.047217",
      "lon": "-79.463232"
    },
    {
      "id": 243,
      "name": "San Pedro Sur I",
      "lat": "9.040611",
      "lon": "-79.459801"
    },
    {
      "id": 242,
      "name": "San Pedro Sur R",
      "lat": "9.040801",
      "lon": "-79.458683"
    },
    {
      "id": 699,
      "name": "San Roque I",
      "lat": "9.109941",
      "lon": "-79.550967"
    },
    {
      "id": 808,
      "name": "San Roque R",
      "lat": "9.109279",
      "lon": "-79.550757"
    },
    {
      "id": 401,
      "name": "San Sebastián I",
      "lat": "8.981239",
      "lon": "-79.510798"
    },
    {
      "id": 236,
      "name": "Santa Clara",
      "lat": "9.034452",
      "lon": "-79.473113"
    },
    {
      "id": 224,
      "name": "Santa Elena I",
      "lat": "9.017538",
      "lon": "-79.494525"
    },
    {
      "id": 621,
      "name": "Santa Elena R",
      "lat": "9.016977",
      "lon": "-79.494978"
    },
    {
      "id": 623,
      "name": "Santa Inés I",
      "lat": "9.045257",
      "lon": "-79.449091"
    },
    {
      "id": 628,
      "name": "Santa Inés R",
      "lat": "9.045606",
      "lon": "-79.449697"
    },
    {
      "id": 891,
      "name": "Santa Librada 2 Etapa I",
      "lat": "9.075347",
      "lon": "-79.509108"
    },
    {
      "id": 322,
      "name": "Santa Librada 2 Etapa R",
      "lat": "9.075272",
      "lon": "-79.50921"
    },
    {
      "id": 880,
      "name": "Santa Librada 3 Etapa I",
      "lat": "9.078069",
      "lon": "-79.511485"
    },
    {
      "id": 324,
      "name": "Santa Librada 3 Etapa R",
      "lat": "9.077979",
      "lon": "-79.511645"
    },
    {
      "id": 890,
      "name": "Santa Librada 4 Etapa I",
      "lat": "9.074393",
      "lon": "-79.501115"
    },
    {
      "id": 313,
      "name": "Santa Librada 4 Etapa R",
      "lat": "9.07434",
      "lon": "-79.500997"
    },
    {
      "id": 878,
      "name": "Santa Librada 5 Etapa I",
      "lat": "9.077751",
      "lon": "-79.505825"
    },
    {
      "id": 327,
      "name": "Santa Librada 5 Etapa R",
      "lat": "9.078075",
      "lon": "-79.506077"
    },
    {
      "id": 881,
      "name": "Santa Librada 7 Etapa I",
      "lat": "9.079367",
      "lon": "-79.509725"
    },
    {
      "id": 325,
      "name": "Santa Librada 7 Etapa R",
      "lat": "9.079568",
      "lon": "-79.509645"
    },
    {
      "id": 45,
      "name": "Santa María I",
      "lat": "9.021146",
      "lon": "-79.529563"
    },
    {
      "id": 573,
      "name": "Santa María R",
      "lat": "9.020706",
      "lon": "-79.529021"
    },
    {
      "id": 310,
      "name": "Santa Marta I",
      "lat": "9.078165",
      "lon": "-79.496223"
    },
    {
      "id": 877,
      "name": "Santa Marta R",
      "lat": "9.078101",
      "lon": "-79.496132"
    },
    {
      "id": 290,
      "name": "Santa Mónica",
      "lat": "9.073545",
      "lon": "-79.413482"
    },
    {
      "id": 739,
      "name": "Santa Teresa I",
      "lat": "9.126864",
      "lon": "-79.545704"
    },
    {
      "id": 135,
      "name": "Santa Teresa R",
      "lat": "9.127002",
      "lon": "-79.545457"
    },
    {
      "id": 363,
      "name": "San Vicente",
      "lat": "8.979305",
      "lon": "-79.569138"
    },
    {
      "id": 154,
      "name": "San Vicente I",
      "lat": "9.122747",
      "lon": "-79.596147"
    },
    {
      "id": 827,
      "name": "San Vicente R",
      "lat": "9.122468",
      "lon": "-79.595143"
    },
    {
      "id": 655,
      "name": "SERTV I",
      "lat": "8.970414",
      "lon": "-79.548032"
    },
    {
      "id": 166,
      "name": "Severino Hernández I",
      "lat": "9.029374",
      "lon": "-79.496319"
    },
    {
      "id": 165,
      "name": "Severino Hernández R",
      "lat": "9.029125",
      "lon": "-79.496727"
    },
    {
      "id": 377,
      "name": "Smithsonian",
      "lat": "8.915764",
      "lon": "-79.5316"
    },
    {
      "id": 857,
      "name": "Sport Gym",
      "lat": "9.00905",
      "lon": "-79.508057"
    },
    {
      "id": 631,
      "name": "Star Contact I",
      "lat": "9.039774",
      "lon": "-79.461901"
    },
    {
      "id": 624,
      "name": "Star Contact R",
      "lat": "9.039037",
      "lon": "-79.462491"
    },
    {
      "id": 75,
      "name": "Subestación de Bethania",
      "lat": "9.005225",
      "lon": "-79.522407"
    },
    {
      "id": 762,
      "name": "SUNTRACS I",
      "lat": "9.04372",
      "lon": "-79.498637"
    },
    {
      "id": 755,
      "name": "SUNTRACS R",
      "lat": "9.043991",
      "lon": "-79.498379"
    },
    {
      "id": 77,
      "name": "Super 99 Bethania",
      "lat": "9.011371",
      "lon": "-79.525325"
    },
    {
      "id": 53,
      "name": "Super 99 de Pribanco",
      "lat": "9.0007",
      "lon": "-79.533007"
    },
    {
      "id": 681,
      "name": "Súper 99 Río Abajo I",
      "lat": "9.013459",
      "lon": "-79.501126"
    },
    {
      "id": 620,
      "name": "Súper 99 Rio Abajo R",
      "lat": "9.012653",
      "lon": "-79.501437"
    },
    {
      "id": 588,
      "name": "Súper 99 San Miguelito",
      "lat": "9.030349",
      "lon": "-79.50531"
    },
    {
      "id": 869,
      "name": "Sur Rica",
      "lat": "9.025639",
      "lon": "-79.49765"
    },
    {
      "id": 659,
      "name": "Tapas y Vinos",
      "lat": "8.992075",
      "lon": "-79.508604"
    },
    {
      "id": 550,
      "name": "Tatare I",
      "lat": "9.098283",
      "lon": "-79.296972"
    },
    {
      "id": 549,
      "name": "Tatare R",
      "lat": "9.09788",
      "lon": "-79.29672"
    },
    {
      "id": 876,
      "name": "T de Torrijos-Carter I",
      "lat": "9.071983",
      "lon": "-79.489517"
    },
    {
      "id": 303,
      "name": "T de Torrijos-Carter R",
      "lat": "9.07202",
      "lon": "-79.48934"
    },
    {
      "id": 724,
      "name": "T de Urracá R",
      "lat": "9.071342",
      "lon": "-79.489303"
    },
    {
      "id": 450,
      "name": "T de Valle de Urracá I",
      "lat": "9.071402",
      "lon": "-79.48895"
    },
    {
      "id": 371,
      "name": "Teatro Balboa I",
      "lat": "8.955801",
      "lon": "-79.558634"
    },
    {
      "id": 703,
      "name": "Tecnasa I",
      "lat": "8.978107",
      "lon": "-79.540071"
    },
    {
      "id": 702,
      "name": "Tecnasa R",
      "lat": "8.97673",
      "lon": "-79.539685"
    },
    {
      "id": 817,
      "name": "Templo Chilibre I",
      "lat": "9.14591",
      "lon": "-79.617405"
    },
    {
      "id": 841,
      "name": "Templo Chilibre R",
      "lat": "9.145973",
      "lon": "-79.616804"
    },
    {
      "id": 796,
      "name": "Teremar R",
      "lat": "9.049569",
      "lon": "-79.408177"
    },
    {
      "id": 281,
      "name": "Terremar I",
      "lat": "9.049686",
      "lon": "-79.408032"
    },
    {
      "id": 199,
      "name": "Tocumen i",
      "lat": "9.077362",
      "lon": "-79.364613"
    },
    {
      "id": 200,
      "name": "Tocumen R",
      "lat": "9.077079",
      "lon": "-79.363893"
    },
    {
      "id": 871,
      "name": "Top Aire",
      "lat": "9.020468",
      "lon": "-79.499635"
    },
    {
      "id": 513,
      "name": "Torremolino I",
      "lat": "9.06961",
      "lon": "-79.392947"
    },
    {
      "id": 179,
      "name": "Torremolino R",
      "lat": "9.069318",
      "lon": "-79.393001"
    },
    {
      "id": 715,
      "name": "Torres de Chilibre R",
      "lat": "9.174551",
      "lon": "-79.609509"
    },
    {
      "id": 228,
      "name": "Torres Vía España I",
      "lat": "9.021528",
      "lon": "-79.490115"
    },
    {
      "id": 229,
      "name": "Torres Vía España R",
      "lat": "9.021692",
      "lon": "-79.489638"
    },
    {
      "id": 449,
      "name": "Tortimasa I",
      "lat": "9.065886",
      "lon": "-79.493905"
    },
    {
      "id": 727,
      "name": "Tortimasa R",
      "lat": "9.065552",
      "lon": "-79.49353"
    },
    {
      "id": 478,
      "name": "Tropigas I",
      "lat": "9.144559",
      "lon": "-79.622061"
    },
    {
      "id": 477,
      "name": "Tropigas R",
      "lat": "9.144575",
      "lon": "-79.621605"
    },
    {
      "id": 432,
      "name": "UDELAS",
      "lat": "8.97189",
      "lon": "-79.562706"
    },
    {
      "id": 120,
      "name": "ULAPS",
      "lat": "9.079611",
      "lon": "-79.526494"
    },
    {
      "id": 687,
      "name": "ULAPS I",
      "lat": "9.079643",
      "lon": "-79.526902"
    },
    {
      "id": 65,
      "name": "Universidad de Panamá I",
      "lat": "8.984646",
      "lon": "-79.535249"
    },
    {
      "id": 427,
      "name": "Universidad Interamericana",
      "lat": "8.984235",
      "lon": "-79.528908"
    },
    {
      "id": 684,
      "name": "Universidad Latinoamericana de Ciencia y Tecnología ULACIT I",
      "lat": "9.006698",
      "lon": "-79.509773"
    },
    {
      "id": 220,
      "name": "Universidad Latinoamericana de Ciencia y Tecnología ULACIT R",
      "lat": "9.005077",
      "lon": "-79.510798"
    },
    {
      "id": 424,
      "name": "Universidad Nacional R",
      "lat": "8.984301",
      "lon": "-79.535183"
    },
    {
      "id": 596,
      "name": "Universidad Tecnológica de Panamá UTP I",
      "lat": "9.068836",
      "lon": "-79.407002"
    },
    {
      "id": 595,
      "name": "Universidad Tecnológica de Panamá UTP R",
      "lat": "9.068449",
      "lon": "-79.407061"
    },
    {
      "id": 46,
      "name": "Universidad Tecnológica I",
      "lat": "9.020108",
      "lon": "-79.531805"
    },
    {
      "id": 572,
      "name": "Universidad Tecnológica R",
      "lat": "9.019498",
      "lon": "-79.531671"
    },
    {
      "id": 723,
      "name": "Valle de Urracá I",
      "lat": "9.067999",
      "lon": "-79.48772"
    },
    {
      "id": 341,
      "name": "Valle de Urracá R",
      "lat": "9.068026",
      "lon": "-79.488101"
    },
    {
      "id": 768,
      "name": "Veranillo Circunvalación I",
      "lat": "9.037596",
      "lon": "-79.49706"
    },
    {
      "id": 354,
      "name": "Veranillo Circunvalación R",
      "lat": "9.037368",
      "lon": "-79.496636"
    },
    {
      "id": 283,
      "name": "Vereda 0 R",
      "lat": "9.043652",
      "lon": "-79.409899"
    },
    {
      "id": 282,
      "name": "Vereda 1 I",
      "lat": "9.044436",
      "lon": "-79.40859"
    },
    {
      "id": 791,
      "name": "Vereda O I",
      "lat": "9.042852",
      "lon": "-79.409652"
    },
    {
      "id": 790,
      "name": "Vereda O I",
      "lat": "9.042852",
      "lon": "-79.409652"
    },
    {
      "id": 792,
      "name": "Vereda O I",
      "lat": "9.042852",
      "lon": "-79.409652"
    },
    {
      "id": 259,
      "name": "Versalles I",
      "lat": "9.041575",
      "lon": "-79.419887"
    },
    {
      "id": 794,
      "name": "Versalles R",
      "lat": "9.041808",
      "lon": "-79.419817"
    },
    {
      "id": 413,
      "name": "Vía Argentina",
      "lat": "8.987628",
      "lon": "-79.530628"
    },
    {
      "id": 404,
      "name": "Vía Brasil",
      "lat": "8.984952",
      "lon": "-79.513596"
    },
    {
      "id": 409,
      "name": "Vía Grecia",
      "lat": "8.99435",
      "lon": "-79.525739"
    },
    {
      "id": 63,
      "name": "Viejo Veranillo I",
      "lat": "8.981221",
      "lon": "-79.536772"
    },
    {
      "id": 62,
      "name": "Viejo Veranillo R",
      "lat": "8.980558",
      "lon": "-79.536621"
    },
    {
      "id": 590,
      "name": "Vila Lucre I",
      "lat": "9.037596",
      "lon": "-79.48102"
    },
    {
      "id": 300,
      "name": "Villa Belén",
      "lat": "9.083621",
      "lon": "-79.394787"
    },
    {
      "id": 741,
      "name": "Villa Bolivariana I",
      "lat": "9.136053",
      "lon": "-79.552919"
    },
    {
      "id": 138,
      "name": "Villa Bolivariana R",
      "lat": "9.136069",
      "lon": "-79.552549"
    },
    {
      "id": 446,
      "name": "Villa Cáceres",
      "lat": "9.02087",
      "lon": "-79.524255"
    },
    {
      "id": 284,
      "name": "Villa de Don Bosco I",
      "lat": "9.04158",
      "lon": "-79.407586"
    },
    {
      "id": 581,
      "name": "villa de la fuente",
      "lat": "8.94536",
      "lon": "-79.554255"
    },
    {
      "id": 644,
      "name": "Villa del Rey I",
      "lat": "9.011286",
      "lon": "-79.486395"
    },
    {
      "id": 793,
      "name": "Villa Don Bosco R",
      "lat": "9.041771",
      "lon": "-79.406916"
    },
    {
      "id": 692,
      "name": "Villa Flora I",
      "lat": "9.103696",
      "lon": "-79.534868"
    },
    {
      "id": 470,
      "name": "Villa Flora R",
      "lat": "9.103707",
      "lon": "-79.533913"
    },
    {
      "id": 743,
      "name": "Villa Gabriela R",
      "lat": "9.027965",
      "lon": "-79.488434"
    },
    {
      "id": 705,
      "name": "Villa Grecia I",
      "lat": "9.112823",
      "lon": "-79.562806"
    },
    {
      "id": 810,
      "name": "Villa Grecia R",
      "lat": "9.112505",
      "lon": "-79.562602"
    },
    {
      "id": 745,
      "name": "Villa Guadalupe R",
      "lat": "9.032298",
      "lon": "-79.491797"
    },
    {
      "id": 698,
      "name": "Villa Las Cumbres I",
      "lat": "9.109147",
      "lon": "-79.547995"
    },
    {
      "id": 809,
      "name": "Villa Las Cumbres R",
      "lat": "9.108622",
      "lon": "-79.547238"
    },
    {
      "id": 47,
      "name": "Villa las Fuentes I",
      "lat": "9.014913",
      "lon": "-79.535286"
    },
    {
      "id": 571,
      "name": "Villa Las Fuentes R",
      "lat": "9.014847",
      "lon": "-79.534718"
    },
    {
      "id": 488,
      "name": "Villa Linda I",
      "lat": "9.1801",
      "lon": "-79.616053"
    },
    {
      "id": 487,
      "name": "Villa Linda R",
      "lat": "9.1801",
      "lon": "-79.615045"
    },
    {
      "id": 736,
      "name": "Villa Lobos I",
      "lat": "9.069864",
      "lon": "-79.42913"
    },
    {
      "id": 295,
      "name": "Villa Lobos R",
      "lat": "9.070208",
      "lon": "-79.42818"
    },
    {
      "id": 591,
      "name": "Villa Lucre R",
      "lat": "9.03731",
      "lon": "-79.480548"
    },
    {
      "id": 153,
      "name": "Villa Nueva I",
      "lat": "9.124993",
      "lon": "-79.588141"
    },
    {
      "id": 835,
      "name": "Villa Nueva R",
      "lat": "9.124767",
      "lon": "-79.587954"
    },
    {
      "id": 645,
      "name": "Villa Rey R",
      "lat": "9.010735",
      "lon": "-79.485805"
    },
    {
      "id": 866,
      "name": "Villa Rica",
      "lat": "9.025289",
      "lon": "-79.50347"
    },
    {
      "id": 494,
      "name": "Villa Unida I",
      "lat": "9.194007",
      "lon": "-79.61991"
    },
    {
      "id": 495,
      "name": "Villa Unida R",
      "lat": "9.193911",
      "lon": "-79.619207"
    },
    {
      "id": 245,
      "name": "Villa Venus I",
      "lat": "9.044937",
      "lon": "-79.451166"
    },
    {
      "id": 629,
      "name": "Villa Venus R",
      "lat": "9.044981",
      "lon": "-79.452825"
    },
    {
      "id": 118,
      "name": "Villa Zaita I",
      "lat": "9.077232",
      "lon": "-79.525829"
    },
    {
      "id": 119,
      "name": "Villa Zaita R",
      "lat": "9.077455",
      "lon": "-79.525563"
    },
    {
      "id": 856,
      "name": "Waikiki",
      "lat": "9.007885",
      "lon": "-79.505503"
    },
    {
      "id": 76,
      "name": "Yuyin Luzcando",
      "lat": "9.007625",
      "lon": "-79.522817"
    },
    {
      "id": 441,
      "name": "Zona Azúl",
      "lat": "9.005905",
      "lon": "-79.572972"
    }
  ]