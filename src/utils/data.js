const DUMMY_Properties = [
	{
		id: 1,
		name: "Villa Green Coast",
		type: " Villa",
		city: "Vlorë",
		address: "Green Coast Palasë",
		longitude: 19.586724625007083,
		latitude: 40.16904495782896,
		manufacturer: "BALFIN Group",
		year: "02.06.2019 ",
		area: 200,
		floors: 2,
		entries: 2,
		rooms: 4,
		review: "3.7",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1MDc1ODk%3D/original/3b3caf57-6a58-4187-893e-79e871f58fe0.jpeg?im_w=1200",
		comments: [{comment: "Amazing building!!!"}, {comment: "Very overpriced"}]
	},
	{
		id: 2,
		name: "Luxury Adriatik",
		type: "Hotel",
		city: "Durrës",
		address: "Rruga Pavarësia",
		longitude: 19.491216661374196,
		latitude: 41.3056527624612,
		manufacturer: "Inetielle Home",
		year: "01.01.2017",
		area: 1032,
		floors: 5,
		entries: 3,
		rooms: 140,
		review: "4.4",
		image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/101097242.jpg?k=0c6af1938fb52f79168765eb79c9f62f1a326f89704d9f4daa30c1941fb74626&o=&hp=1",
		comments: [{comment: "One of the best Hotels I've stayed in!!!"}, {comment: "This one is next..."}]
	},
	{
		id: 3,
		name: "Villa Centro",
		type: " Villa",
		city: "Tiranë",
		address: "Rruga Mustafa Lleshi",
		longitude: 19.825654831667038,
		latitude: 41.324360317310926,
		manufacturer: "Enver Hoxha",
		year: "11.12.1999",
		area: 280,
		floors: 3,
		entries: 3,
		rooms: 5,
		review: "3",
		image: "https://a0.muscache.com/im/pictures/9f48e005-3179-44aa-b59f-45e4bca78c6b.jpg?im_w=1200",
		comments: [{comment: "It was fine!!!"}]
	},
	{
		id: 4,
		name: "National Arena View",
		type: "Apartment",
		city: "Tiranë",
		address: "Rruga Sheh Ahmet Pazari",
		longitude: 19.82599063116168,
		latitude: 41.31908225211922,
		manufacturer: "St. Mary and Anthony of Padua",
		year: "01.01.2015",
		area: 100,
		floors: 1,
		entries: 1,
		rooms: 1,
		review: "4.7",
		image: "https://a0.muscache.com/im/pictures/miso/Hosting-631089182093531225/original/07b333a6-1705-4c77-bee6-9e890f372f18.jpeg?im_w=1200",
		comments: [{comment: "The location is perfect for enjoying the best area of Tirana."}, {comment: "Feels like home."}]
	},
	{
		id: 5,
		name: "Oasis Rooftop Apartment",
		type: "Apartment",
		city: "Tiranë",
		address: "Rruga Islam Alla",
		longitude: 19.811414720052706,
		latitude: 41.327060935115796,
		manufacturer: "Private",
		year: "09.11.2017",
		area: 82,
		floors: 2,
		entries: 1,
		rooms: 2,
		review: "4.8",
		image: "https://a0.muscache.com/im/pictures/e9c76922-038e-4af8-99b3-e61f6a241382.jpg?im_w=720",
		comments: [{comment: "Pretty great, even better than I expected!!!"}, {comment: "Very comfortable place to stay, close to everything and more..."}]
	},
	{
		id: 6,
		name: "Ambasador 3",
		type: "Apartament Block/Residence",
		city: "Tiranë",
		address: "Rruga Dervish Hima",
		longitude: 19.82554662475557,
		latitude: 41.31875494768513,
		manufacturer: "RFZ Building",
		year: "03.20.2016",
		area: 32.300,
		floors: 20,
		entries: 6,
		rooms: 3,
		review: "5",
		image: "https://nmtester.com/breh/wp-content/uploads/2022/08/ambasador3-1-min.jpg",
		comments: [{comment: "That for sure is a huge building!!!"}]
	},
	{
		id: 7,
		name: "Marina Bay",
		type: "Resort",
		city: "Vlorë",
		address: "Rruga Aleksandër Moisiu",
		longitude: 19.484070798025414,
		latitude: 40.41537875061958,
		manufacturer: "Albajrak Group",
		year: "04.14.2018",
		area: 46.630,
		floors: 15,
		entries: 30,
		rooms: 1,
		review: "4",
		image: "http://photos.wikimapia.org/p/00/07/75/69/48_big.jpg",
		comments: [{comment: "The most luxurious resort I've ever been on."}, {comment: "DAMN...Spending my whole summmer there!"}]
	},
	{
		id: 8,
		name: "Apartament Lux",
		type: "Apartament",
		city: "Berat",
		address: "Rruga Emanuel Marinaj",
		longitude: 19.93979508285178,
		latitude: 40.714346961099984,
		manufacturer: "Llaci SHPK",
		year: "11.21.2012",
		area: 78,
		floors: 1,
		entries: 1,
		rooms: 2,
		review: "3",
		image: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
		comments: [{comment: "Very nice, clean and cozy!!!"}, {comment: "Great and huge architecture, would love to visit it..."}]
	},
	{
		id: 9,
		name: "Sun Kissed",
		type: "Condo",
		city: "Sarandë",
		address: "Rruga e Bistricës",
		longitude: 20.021784053440157,
		latitude: 39.84945824646539,
		manufacturer: "",
		year: "21.11.2008",
		area: 40,
		floors: 1,
		entries: 1,
		rooms: 1,
		review: "3.6",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-51335551/original/7e9db0e3-7c68-4ae6-bff4-79096526ab4f.jpeg?im_w=1200",
		comments: [{comment: "Great and huge architecture, would love to visit it..."}]
	},
	{
		id: 10,
		name: "Sky View Apartment",
		type: "Apartment",
		city: "Pogradec",
		address: "Rruga Abdyl Frashëri",
		longitude: 20.654034194555248,
		latitude: 40.90457779797341,
		manufacturer: "Private",
		year: "21.11.2000",
		area: 62,
		floors: 1,
		entries: 1,
		rooms: 2,
		review: "2.6",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1192796807502124586/original/936468aa-99b6-4e51-a894-cafdd0259458.jpeg?im_w=720",
		comments: [{comment: "Nothing out of the ordinary!!!"}, {comment: "Not close to anything and had a very weird smell time to time"}]
	},
	{
		id: 11,
		name: "Villa Green Coast",
		type: " Villa",
		city: "Vlorë",
		address: "Green Coast Palasë",
		longitude: 19.586724625007083,
		latitude: 40.16904495782896,
		manufacturer: "BALFIN Group",
		year: "02.06.2019 ",
		area: 200,
		floors: 2,
		entries: 2,
		rooms: 4,
		review: "2.4",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1MDc1ODk%3D/original/3b3caf57-6a58-4187-893e-79e871f58fe0.jpeg?im_w=1200",
		comments: [{comment: "Amazing building!!!"}, {comment: "Very overpriced"}]
	},
	{
		id: 12,
		name: "Villa Green Coast",
		type: " Villa",
		city: "Vlorë",
		address: "Green Coast Palasë",
		longitude: 19.586724625007083,
		latitude: 40.16904495782896,
		manufacturer: "BALFIN Group",
		year: "02.06.2019 ",
		area: 200,
		floors: 2,
		entries: 2,
		rooms: 4,
		review: "3.7",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1MDc1ODk%3D/original/3b3caf57-6a58-4187-893e-79e871f58fe0.jpeg?im_w=1200",
		comments: [{comment: "Amazing building!!!"}, {comment: "Very overpriced"}]
	},{
		id: 13,
		name: "Villa Green Coast",
		type: " Villa",
		city: "Vlorë",
		address: "Green Coast Palasë",
		longitude: 19.586724625007083,
		latitude: 40.16904495782896,
		manufacturer: "BALFIN Group",
		year: "02.06.2019 ",
		area: 200,
		floors: 2,
		entries: 2,
		rooms: 4,
		review: "5",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1MDc1ODk%3D/original/3b3caf57-6a58-4187-893e-79e871f58fe0.jpeg?im_w=1200",
		comments: [{comment: "Amazing building!!!"}, {comment: "Very overpriced"}]
	},{
		id: 14,
		name: "Villa Green Coast",
		type: " Villa",
		city: "Vlorë",
		address: "Green Coast Palasë",
		longitude: 19.586724625007083,
		latitude: 40.16904495782896,
		manufacturer: "BALFIN Group",
		year: "02.06.2019 ",
		area: 200,
		floors: 2,
		entries: 2,
		rooms: 4,
		review: "4.7",
		image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1MDc1ODk%3D/original/3b3caf57-6a58-4187-893e-79e871f58fe0.jpeg?im_w=1200",
		comments: [{comment: "Amazing building!!!"}, {comment: "Very overpriced"}]
	},
	{
		id: 15,
		name: "Oasis Rooftop Apartment",
		type: "Apartment",
		city: "Tiranë",
		address: "Rruga Islam Alla",
		longitude: 19.811414720052706,
		latitude: 41.327060935115796,
		manufacturer: "Private",
		year: "09.11.2017",
		area: 82,
		floors: 2,
		entries: 1,
		rooms: 2,
		review: "4.8",
		image: "https://a0.muscache.com/im/pictures/e9c76922-038e-4af8-99b3-e61f6a241382.jpg?im_w=720",
		comments: [{comment: "Pretty great, even better than I expected!!!"}, {comment: "Very comfortable place to stay, close to everything and more..."}]
	},
]

export default DUMMY_Properties;