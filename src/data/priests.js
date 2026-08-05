const priests = {
  'john-maruthoor': {
    name: 'Fr. John Maruthoor',
    documentName: 'Nidhin J Mathew',
    nativePlace: 'Kaithakodu',
    father: 'John Mathew',
    mother: 'Leelamma Mathew',
    bornOn: '04/05/1989',
    bloodGroup: 'A-',
    ordained:
      "04/02/2016 at St. Mary's Cathedral, Punnamoodu, Mavelikkara by Bishop Joshua Mar Ignathios",
    permanentAddress: "Archbishop's House, Mavelikkara",
    emergencyContact: '8848687023, 9645545462',
  },
  'thomas-naluthengumkal': {
    name: 'Fr. Thomas Naluthengumkal',
    documentName: 'Abhilash N.A',
    nativePlace: 'Alappuzha',
    father: 'Antony Thomas',
    mother: 'Aleyamma',
    bornOn: '16/01/1983',
    bloodGroup: 'B+',
    ordained:
      "31/12/2019 at St. Michael's Church, Thathampally by Arch Bishop Mar Joseph Perumthottam",
    permanentAddress: "Archbishop's House, P.O. Box 10, Springfield, 123456",
    emergencyContact: '0477-2233457, +918891488198',
  },
  'samuel-pazhavoorpadickal': {
    name: 'Fr. Samuel Pazhavoorpadickal',
    documentName: 'Lijo. P. Chacko',
    nativePlace: 'Puliyoor, Chengannur',
    father: 'P Y Chacko',
    mother: 'Lilly kutty Chacko',
    bornOn: '29/12/1986',
    bloodGroup: 'O+',
    ordained:
      '25/2/2014 at Bethlehem Malankara Syrian Catholic Church Puliyoor by Joshua Mar Ignathios',
    permanentAddress: "Amalagiri Catholic Bishop's House, Punnamoodu",
    emergencyContact: '9496848342',
  },
  'valiyaparambil-mathew': {
    name: 'Fr. Valiyaparambil Mathew',
    documentName: 'Melbin Kurien',
    nativePlace: 'Chennithala',
    father: 'Kurien Mathew',
    mother: 'Beena Kurien',
    bornOn: '20/10/1993',
    bloodGroup: 'A+',
    ordained:
      "05/04/2021 at St. Mary's Cathedral Punnamoode by His Grace Joshua Mar Ignathios",
    permanentAddress: 'Valiyaparambil, Chennithala P.O, Mavelikara',
    emergencyContact: '+91 8547916650',
  },
  'christy-john-oic': {
    name: 'Fr. Christy John OIC',
    documentName: 'Shibu K C',
    nativePlace: 'Murinjakal',
    father: 'Iype Kunjappy',
    mother: 'Kunjamma',
    bornOn: '15/12/1973',
    bloodGroup: 'B+',
    ordained:
      '24/11/2003 at Mount Bethany Ashram, Mylapra by Moran Mor Cyril Baselose Catholicos',
    permanentAddress:
      'Bethany Navajeevan Provincial Ashram, Bethany Hills, Nalanchira, Trivandrum 695015, Kerala',
    emergencyContact: '9188020081, 8547853357',
  },
  'nijo-kollentethekkethil': {
    name: 'Fr. Nijo Kollentethekkethil',
    documentName: 'Nijo Joy George',
    nativePlace: 'Peringanad, Adoor',
    father: 'George Joy',
    mother: 'Shiny George',
    bornOn: '24/11/1991',
    bloodGroup: 'A+',
    ordained:
      "27/12/2019 at St. Mary's Cathedral, Punnamood by Bishop H. E. Joshua Mar Ignathios",
    permanentAddress: 'Joys Bhavan, Peringanad PO., Adoor 691551',
    emergencyContact: '80780 90944',
  },
}

export function getPriest(slug) {
  return priests[slug] ?? null
}

export default priests
