// chatbot.js
const responses = {

  "CANADA": "Canada is located in North America. Its capital is Ottawa, and it has two official languages: English and French. The country is known for its vast natural landscapes, including the Rocky Mountains and the Great Lakes.",
    "UNITED STATES": "The United States, located in North America, has Washington D.C. as its capital. It is the third-largest country by both area and population and is known for its cultural diversity and influential economy.",
    "USA": "The United States, located in North America, has Washington D.C. as its capital. It is the third-largest country by both area and population and is known for its cultural diversity and influential economy.",
    "UNITED-STATES": "The United States, located in North America, has Washington D.C. as its capital. It is the third-largest country by both area and population and is known for its cultural diversity and influential economy.",
    "BRAZIL": "Brazil is the largest country in South America, with Brasília as its capital. It is known for the Amazon Rainforest, the Carnival festival, and its rich cultural heritage.",
    "INDIA": "India is located in South Asia and has New Delhi as its capital. It is the second-most populous country in the world, known for its diverse cultures, languages, and historical landmarks like the Taj Mahal.",
    "CHINA": "China, located in East Asia, has Beijing as its capital. It is the world's most populous country and has a long history, with landmarks like the Great Wall and the Forbidden City.",
    "AUSTRALIA": "Australia is a country and continent surrounded by the Indian and Pacific oceans, with Canberra as its capital. It is known for its unique wildlife, the Outback, and the Great Barrier Reef.",
    "UNITED KINGDOM": "The United Kingdom, located in Europe, has London as its capital. It consists of England, Scotland, Wales, and Northern Ireland, and is known for its rich history and cultural influence.",
    "GERMANY": "Germany is located in Central Europe, with Berlin as its capital. It is known for its economic strength, historical cities like Munich and Hamburg, and contributions to science and philosophy.",
    "FRANCE": "France is located in Western Europe, with Paris as its capital. It is known for its art, cuisine, fashion, and landmarks like the Eiffel Tower and the Louvre.",
    "JAPAN": "Japan is an island nation in East Asia, with Tokyo as its capital. It is known for its technological advancements, rich cultural traditions, and natural beauty, including Mount Fuji.",
    "RUSSIA": "Russia, the largest country in the world, spans Eastern Europe and northern Asia. Its capital is Moscow, and it is known for its vast landscapes, cultural heritage, and significant historical events.",
    "SOUTH AFRICA": "South Africa is located at the southern tip of Africa, with three capitals: Pretoria (administrative), Bloemfontein (judicial), and Cape Town (legislative). It is known for its diverse cultures and natural beauty.",
    "MEXICO": "Mexico is located in North America, with Mexico City as its capital. It is known for its rich history, from ancient civilizations like the Aztecs and Mayans to its vibrant modern culture.",
    "ITALY": "Italy is located in Southern Europe, with Rome as its capital. It is famous for its historical sites, art, and cuisine, including landmarks like the Colosseum and the Vatican.",
    "SPAIN": "Spain is located in Southwestern Europe, with Madrid as its capital. It is known for its diverse culture, rich history, and famous landmarks such as the Alhambra and Sagrada Familia.",
    "ARGENTINA": "Argentina is located in South America, with Buenos Aires as its capital. It is known for its tango music and dance, as well as its beef and wine production.",
    "EGYPT": "Egypt is located in North Africa, with Cairo as its capital. It is known for its ancient civilization, including the pyramids, the Sphinx, and the Nile River.",
    "NIGERIA": "Nigeria is located in West Africa, with Abuja as its capital. It is the most populous country in Africa and is known for its diverse cultures and significant oil production.",
    "TURKEY": "Turkey is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion in Southeastern Europe. Its capital is Ankara, and it is known for its rich history and cultural heritage, including sites like Hagia Sophia.",
    "SAUDI ARABIA": "Saudi Arabia is located in the Middle East, with Riyadh as its capital. It is known for being the birthplace of Islam and its vast oil reserves.",
    "SOUTH KOREA": "South Korea is located in East Asia, with Seoul as its capital. It is known for its advanced technology, pop culture (K-pop), and historical sites.",
    "THAILAND": "Thailand is located in Southeast Asia, with Bangkok as its capital. It is known for its tropical beaches, opulent royal palaces, and ancient ruins.",
    "KENYA": "Kenya is located in East Africa, with Nairobi as its capital. It is known for its diverse wildlife, national parks, and as a popular destination for safaris.",
    "INDONESIA": "Indonesia is an archipelago in Southeast Asia, with Jakarta as its capital. It is the largest island country in the world and is known for its diverse cultures and landscapes.",
    "VIETNAM": "Vietnam is located in Southeast Asia, with Hanoi as its capital. It is known for its history, including the Vietnam War, as well as its beautiful landscapes and cuisine.",
    "NORWAY": "Norway is located in Northern Europe, with Oslo as its capital. It is known for its stunning fjords, northern lights, and high standard of living.",
    "SWEDEN": "Sweden is located in Northern Europe, with Stockholm as its capital. It is known for its welfare state, innovation, and beautiful natural landscapes.",
    "GREECE": "Greece is located in Southern Europe, with Athens as its capital. It is known for its ancient history, including the Acropolis and Greek mythology.",
    "NEW ZEALAND": "New Zealand is an island nation in the southwestern Pacific Ocean, with Wellington as its capital. It is known for its stunning landscapes, Maori culture, and adventure tourism.",
    "PAKISTAN": "Pakistan is located in South Asia, with Islamabad as its capital. It is known for its diverse landscapes, from mountains in the north to deserts in the south, and its rich cultural heritage.",
    "PHILIPPINES": "The Philippines is an archipelago in Southeast Asia, with Manila as its capital. It is known for its beautiful beaches, diverse culture, and vibrant festivals.",
    "POLAND": "Poland is located in Central Europe, with Warsaw as its capital. It is known for its rich history, including medieval architecture and its role in World War II.",
    "PORTUGAL": "Portugal is located in Southwestern Europe, with Lisbon as its capital. It is known for its maritime history, beautiful coastline, and the production of port wine.",
    "IRAN": "Iran is located in the Middle East, with Tehran as its capital. It is known for its rich cultural heritage, including ancient sites like Persepolis, and its role in regional geopolitics.",
    "IRAQ": "Iraq is located in the Middle East, with Baghdad as its capital. It is known as the cradle of civilization, with ancient Mesopotamian sites like Babylon and Ur.",
    "ISRAEL": "Israel is located in the Middle East, with Jerusalem as its capital. It is known for its religious significance to Judaism, Christianity, and Islam, and historical sites like the Western Wall and the Dome of the Rock.",
    "MALAYSIA": "Malaysia is located in Southeast Asia, with Kuala Lumpur as its capital. It is known for its cultural diversity, modern cities, and natural beauty, including rainforests and beaches.",
    "SINGAPORE": "Singapore is a city-state in Southeast Asia. It is known for its global financial hub, cleanliness, and iconic landmarks like Marina Bay Sands and Gardens by the Bay.",
    "SWITZERLAND": "Switzerland is located in Central Europe, with Bern as its capital. It is known for its neutrality, high quality of life, and stunning alpine scenery.",
    "NETHERLANDS": "The Netherlands is located in Western Europe, with Amsterdam as its capital. It is known for its flat landscape, windmills, tulip fields, and a liberal social culture.",
    "BELGIUM": "Belgium is located in Western Europe, with Brussels as its capital. It is known for its medieval towns, Renaissance architecture, and as the headquarters of the European Union.",
    "DENMARK": "Denmark is located in Northern Europe, with Copenhagen as its capital. It is known for its high standard of living, modern design, and being one of the happiest countries in the world.",
    "FINLAND": "Finland is located in Northern Europe, with Helsinki as its capital. It is known for its education system, saunas, and being one of the happiest countries in the world.",
    "AUSTRIA": "Austria is located in Central Europe, with Vienna as its capital. It is known for its classical music heritage, alpine landscapes, and historic cities.",
    "CZECH REPUBLIC": "The Czech Republic is located in Central Europe, with Prague as its capital. It is known for its medieval architecture, beautiful castles, and rich history.",
    "HUNGARY": "Hungary is located in Central Europe, with Budapest as its capital. It is known for its thermal baths, rich cultural history, and the beautiful Danube River.",
    "ROMANIA": "Romania is located in Southeastern Europe, with Bucharest as its capital. It is known for its medieval castles, the Carpathian Mountains, and the legend of Dracula.",
    "BULGARIA": "Bulgaria is located in Southeastern Europe, with Sofia as its capital. It is known for its rich history, Orthodox churches, and beautiful Black Sea coastline.",
    "SERBIA": "Serbia is located in Southeastern Europe, with Belgrade as its capital. It is known for its history, vibrant nightlife, and significant role in the Balkans.",
    "CROATIA": "Croatia is located in Southeastern Europe, with Zagreb as its capital. It is known for its stunning Adriatic coastline, medieval cities, and beautiful islands.",
    "SLOVENIA": "Slovenia is located in Central Europe, with Ljubljana as its capital. It is known for its beautiful landscapes, including lakes, mountains, and caves.",
    "SLOVAKIA": "Slovakia is located in Central Europe, with Bratislava as its capital. It is known for its medieval castles, mountainous terrain, and rich folklore.",
    "UKRAINE": "Ukraine is located in Eastern Europe, with Kyiv as its capital. It is known for its rich history, fertile plains, and as one of the largest countries in Europe.",
    "BELARUS": "Belarus is located in Eastern Europe, with Minsk as its capital. It is known for its Soviet-era architecture, vast forests, and rich cultural heritage.",
    "LITHUANIA": "Lithuania is located in the Baltic region of Europe, with Vilnius as its capital. It is known for its medieval history, beautiful old towns, and unique culture.",
    "LATVIA": "Latvia is located in the Baltic region of Europe, with Riga as its capital. It is known for its Art Nouveau architecture, beautiful beaches, and rich cultural heritage.",
    "ESTONIA": "Estonia is located in the Baltic region of Europe, with Tallinn as its capital. It is known for its medieval history, digital advancements, and scenic landscapes.",
    "ICELAND": "Iceland is located in the North Atlantic Ocean, with Reykjavik as its capital. It is known for its stunning natural beauty, including volcanoes, geysers, and glaciers.",
    "LUXEMBOURG": "Luxembourg is a small country in Western Europe, with Luxembourg City as its capital. It is known for its wealth, high standard of living, and beautiful old town.",
    "MALTA": "Malta is an island nation in the Mediterranean Sea, with Valletta as its capital. It is known for its historical sites, beautiful coastline, and rich cultural heritage.",
    "CYPRUS": "Cyprus is an island nation in the Eastern Mediterranean, with Nicosia as its capital. It is known for its ancient history, beautiful beaches, and divided capital city.",
    "QATAR": "Qatar is located in the Middle East, with Doha as its capital. It is known for its wealth from natural gas and oil reserves, modern architecture, and hosting the 2022 FIFA World Cup.",
    "UAE": "The United Arab Emirates (UAE) is located in the Middle East, with Abu Dhabi as its capital. It is known for its rapid development, luxury shopping, and landmarks like the Burj Khalifa.",
    "OMAN": "Oman is located in the Middle East, with Muscat as its capital. It is known for its rich history, beautiful desert landscapes, and traditional culture.",
    "KUWAIT": "Kuwait is located in the Middle East, with Kuwait City as its capital. It is known for its oil wealth, modern architecture, and rich cultural heritage.",
    "JORDAN": "Jordan is located in the Middle East, with Amman as its capital. It is known for its ancient sites, including Petra, and its role in regional geopolitics.",
    "LEBANON": "Lebanon is located in the Middle East, with Beirut as its capital. It is known for its rich history, diverse culture, and beautiful Mediterranean coastline.",
    "SYRIA": "Syria is located in the Middle East, with Damascus as its capital. It is known for its ancient history, including sites like Palmyra, and its ongoing civil conflict.",
    "YEMEN": "Yemen is located in the Middle East, with Sana'a as its capital. It is known for its rich history, including ancient cities and its ongoing humanitarian crisis.",
    "AFGHANISTAN": "Afghanistan is located in South Asia, with Kabul as its capital. It is known for its rugged landscapes, complex history, and ongoing conflict.",
    "NEPAL": "Nepal is located in South Asia, with Kathmandu as its capital. It is known for being home to the Himalayas, including Mount Everest, and its rich cultural heritage.",
    "BHUTAN": "Bhutan is a small, landlocked country in South Asia, with Thimphu as its capital. It is known for its unique approach to development, focusing on Gross National Happiness, and its stunning landscapes.",
    "SRI LANKA": "Sri Lanka is an island nation in South Asia, with Colombo as its commercial capital and Sri Jayawardenepura Kotte as its legislative capital. It is known for its beautiful beaches, tea plantations, and rich history.",
    "BANGLADESH": "Bangladesh is located in South Asia, with Dhaka as its capital. It is known for its rich culture, rivers, and significant garment industry.",
    "MYANMAR": "Myanmar, also known as Burma, is located in Southeast Asia, with Naypyidaw as its capital. It is known for its diverse cultures, ancient temples, and ongoing political struggles.",
    "CAMBODIA": "Cambodia is located in Southeast Asia, with Phnom Penh as its capital. It is known for its rich history, including the ancient temples of Angkor Wat, and its vibrant culture.",
    "LAOS": "Laos is a landlocked country in Southeast Asia, with Vientiane as its capital. It is known for its mountainous terrain, Buddhist monasteries, and the Mekong River.",
    "MONGOLIA": "Mongolia is a landlocked country in East Asia, with Ulaanbaatar as its capital. It is known for its vast steppes, nomadic culture, and the Gobi Desert.",
    "UZBEKISTAN": "Uzbekistan is located in Central Asia, with Tashkent as its capital. It is known for its rich history, including Silk Road cities like Samarkand, and its beautiful Islamic architecture.",
    "KAZAKHSTAN": "Kazakhstan is located in Central Asia, with Nur-Sultan (formerly Astana) as its capital. It is known for its vast steppes, rich natural resources, and cultural diversity.",
    "TURKMENISTAN": "Turkmenistan is located in Central Asia, with Ashgabat as its capital. It is known for its vast deserts, the ancient city of Merv, and its unique political system.",
    "KYRGYZSTAN": "Kyrgyzstan is located in Central Asia, with Bishkek as its capital. It is known for its mountainous terrain, nomadic culture, and the ancient Silk Road.",
    "TAJIKISTAN": "Tajikistan is located in Central Asia, with Dushanbe as its capital. It is known for its rugged mountains, ancient history, and Persian cultural influences.",
    "GEORGIA": "Georgia is located at the intersection of Europe and Asia, with Tbilisi as its capital. It is known for its diverse landscapes, ancient history, and rich cultural heritage.",
    "ARMENIA": "Armenia is located in the South Caucasus region of Eurasia, with Yerevan as its capital. It is known for its ancient Christian heritage, including monasteries and churches, and its beautiful mountainous terrain.",
    "AZERBAIJAN": "Azerbaijan is located in the South Caucasus region of Eurasia, with Baku as its capital. It is known for its rich cultural heritage, including medieval architecture, and its oil reserves.",
    "MOZAMBIQUE": "Mozambique is located in Southeast Africa, with Maputo as its capital. It is known for its beautiful coastline, diverse culture, and rich natural resources.",
    "ZAMBIA": "Zambia is located in Southern Africa, with Lusaka as its capital. It is known for its stunning natural beauty, including Victoria Falls and diverse wildlife.",
    "ZIMBABWE": "Zimbabwe is located in Southern Africa, with Harare as its capital. It is known for its rich history, including the ancient city of Great Zimbabwe, and its beautiful landscapes.",
    "BOTSWANA": "Botswana is located in Southern Africa, with Gaborone as its capital. It is known for its wildlife, including the Okavango Delta, and its stable political environment.",
    "NAMIBIA": "Namibia is located in Southern Africa, with Windhoek as its capital. It is known for its stunning landscapes, including the Namib Desert and Etosha National Park.",
    "MALAWI": "Malawi is located in Southeast Africa, with Lilongwe as its capital. It is known for its beautiful Lake Malawi, diverse wildlife, and vibrant culture.",
    "MADAGASCAR": "Madagascar is an island nation off the southeastern coast of Africa, with Antananarivo as its capital. It is known for its unique wildlife, including lemurs, and its rich biodiversity.",
    "ANGOLA": "Angola is located in Central Africa, with Luanda as its capital. It is known for its oil and diamond resources, as well as its diverse cultures.",
    "GHANA": "Ghana is located in West Africa, with Accra as its capital. It is known for its rich history, including the Ashanti Kingdom, and its vibrant culture.",
    "IVORY COAST": "Ivory Coast, also known as Côte d'Ivoire, is located in West Africa, with Yamoussoukro as its political capital and Abidjan as its economic capital. It is known for its cocoa production and vibrant culture.",
    "SENEGAL": "Senegal is located in West Africa, with Dakar as its capital. It is known for its rich culture, beautiful coastlines, and historical significance as a center of the transatlantic slave trade.",
    "MALI": "Mali is located in West Africa, with Bamako as its capital. It is known for its rich history, including the ancient city of Timbuktu, and its diverse cultures.",
    "NIGER": "Niger is located in West Africa, with Niamey as its capital. It is known for its desert landscapes, including the Sahara, and its rich cultural heritage.",
    "CHAD": "Chad is located in Central Africa, with N'Djamena as its capital. It is known for its diverse landscapes, including the Sahara Desert and Lake Chad, as well as its rich cultural heritage.",
    "SUDAN": "Sudan is located in Northeast Africa, with Khartoum as its capital. It is known for its ancient history, including the Nubian pyramids, and its complex political situation.",
    "SOUTH SUDAN": "South Sudan is located in East-Central Africa, with Juba as its capital. It is known for its diverse cultures, oil reserves, and ongoing conflict since gaining independence in 2011.",
    "ETHIOPIA": "Ethiopia is located in the Horn of Africa, with Addis Ababa as its capital. It is known for its ancient history, being the only African country never colonized, and its rich cultural heritage.",
    "ERITREA": "Eritrea is located in the Horn of Africa, with Asmara as its capital. It is known for its diverse cultures, beautiful coastline along the Red Sea, and its long struggle for independence.",
    "SOMALIA": "Somalia is located in the Horn of Africa, with Mogadishu as its capital. It is known for its long coastline, complex history, and ongoing conflict.",
    "DJIBOUTI": "Djibouti is located in the Horn of Africa, with Djibouti City as its capital. It is known for its strategic location at the mouth of the Red Sea and its diverse cultural heritage.",
    "TANZANIA": "Tanzania is located in East Africa, with Dodoma as its capital. It is known for its wildlife, including the Serengeti and Mount Kilimanjaro, and its beautiful coastline.",
    "UGANDA": "Uganda is located in East Africa, with Kampala as its capital. It is known for its diverse wildlife, including mountain gorillas, and its rich cultural heritage.",
    "RWANDA": "Rwanda is located in East Africa, with Kigali as its capital. It is known for its stunning landscapes, including the Volcanoes National Park, and its recovery from the 1994 genocide.",
    "BURUNDI": "Burundi is located in East Africa, with Gitega as its capital. It is known for its rich cultural heritage, beautiful landscapes, and ongoing political challenges.",
    "DRC": "The Democratic Republic of the Congo (DRC) is located in Central Africa, with Kinshasa as its capital. It is known for its vast rainforests, rich mineral resources, and complex political situation.",
    "CONGO": "The Republic of the Congo, also known as Congo-Brazzaville, is located in Central Africa, with Brazzaville as its capital. It is known for its diverse cultures, rich natural resources, and beautiful landscapes.",
    "GABON": "Gabon is located in Central Africa, with Libreville as its capital. It is known for its vast rainforests, rich wildlife, and significant oil resources.",
    "EQUATORIAL GUINEA": "Equatorial Guinea is located in Central Africa, with Malabo as its capital. It is known for its oil wealth, diverse cultures, and beautiful coastline.",
    "CENTRAL AFRICAN REPUBLIC": "The Central African Republic (CAR) is located in Central Africa, with Bangui as its capital. It is known for its rich natural resources, diverse cultures, and ongoing conflict.",
    "CAMEROON": "Cameroon is located in Central Africa, with Yaoundé as its capital. It is known for its diverse cultures, beautiful landscapes, and rich natural resources.",
    "SIERRA LEONE": "Sierra Leone is located in West Africa, with Freetown as its capital. It is known for its beautiful beaches, rich history, and recovery from a civil war.",
    "LIBERIA": "Liberia is located in West Africa, with Monrovia as its capital. It is known for being Africa's first republic, founded by freed American slaves, and its complex history.",
    "GUINEA": "Guinea is located in West Africa, with Conakry as its capital. It is known for its rich natural resources, including bauxite, and its vibrant culture.",
    "GUINEA-BISSAU": "Guinea-Bissau is located in West Africa, with Bissau as its capital. It is known for its diverse cultures, beautiful coastline, and ongoing political challenges.",
    "GAMBIA": "The Gambia is a small country in West Africa, with Banjul as its capital. It is known for its beautiful beaches, rich culture, and the Gambia River.",
    "MAURITANIA": "Mauritania is located in West Africa, with Nouakchott as its capital. It is known for its vast deserts, including the Sahara, and its rich cultural heritage.",
    "TOGO": "Togo is located in West Africa, with Lomé as its capital. It is known for its diverse cultures, beautiful landscapes, and traditional music.",
    "BENIN": "Benin is located in West Africa, with Porto-Novo as its capital. It is known for its rich history, including the Kingdom of Dahomey, and its vibrant culture.",
    "BURKINA FASO": "Burkina Faso is located in West Africa, with Ouagadougou as its capital. It is known for its rich cultural heritage, diverse landscapes, and vibrant arts scene.",
    "ALGERIA": "Algeria is located in North Africa, with Algiers as its capital. It is known for its vast Sahara Desert, rich history, and diverse cultures.",
    "MOROCCO": "Morocco is located in North Africa, with Rabat as its capital. It is known for its rich history, beautiful landscapes, and diverse cultures.",
    "TUNISIA": "Tunisia is located in North Africa, with Tunis as its capital. It is known for its rich history, beautiful Mediterranean coastline, and ancient ruins like Carthage.",
    "LIBYA": "Libya is located in North Africa, with Tripoli as its capital. It is known for its vast deserts, rich history, and ongoing conflict since the 2011 revolution.",
    "WESTERN SAHARA": "Western Sahara is a disputed territory in North Africa, with Laayoune as its largest city. It is known for its vast deserts and the ongoing conflict over its status.",
    "VENEZUELA": "Venezuela is located in South America, with Caracas as its capital. It is known for its rich oil resources, beautiful landscapes, and ongoing economic and political challenges.",
    "COLOMBIA": "Colombia is located in South America, with Bogotá as its capital. It is known for its rich cultural heritage, beautiful landscapes, and diverse ecosystems.",
    "PERU": "Peru is located in South America, with Lima as its capital. It is known for its ancient Inca civilization, including Machu Picchu, and its diverse landscapes.",
    "CHILE": "Chile is located in South America, with Santiago as its capital. It is known for its long, narrow shape, beautiful landscapes, including the Andes and Patagonia, and its vibrant culture.",
    "ECUADOR": "Ecuador is located in South America, with Quito as its capital. It is known for its rich biodiversity, including the Galápagos Islands, and its diverse cultures.",
    "BOLIVIA": "Bolivia is located in South America, with Sucre as its constitutional capital and La Paz as its administrative capital. It is known for its diverse landscapes, including the Andes and Amazon rainforest, and its rich indigenous cultures.",
    "PARAGUAY": "Paraguay is located in South America, with Asunción as its capital. It is known for its rich cultural heritage, including the Guarani people, and its beautiful landscapes.",
    "URUGUAY": "Uruguay is located in South America, with Montevideo as its capital. It is known for its high quality of life, beautiful beaches, and vibrant culture.",
    "GUYANA": "Guyana is located in South America, with Georgetown as its capital. It is known for its rich natural resources, beautiful landscapes, and diverse cultures.",
    "SURINAME": "Suriname is located in South America, with Paramaribo as its capital. It is known for its diverse cultures, beautiful landscapes, and rich biodiversity.",
    "HAITI": "Haiti is located in the Caribbean, with Port-au-Prince as its capital. It is known for its rich culture, history as the first independent black republic, and ongoing challenges from natural disasters.",
    "DOMINICAN REPUBLIC": "The Dominican Republic is located in the Caribbean, with Santo Domingo as its capital. It is known for its beautiful beaches, vibrant culture, and rich history.",
    "CUBA": "Cuba is an island nation in the Caribbean, with Havana as its capital. It is known for its rich cultural heritage, including music and dance, and its complex political history.",
    "JAMAICA": "Jamaica is an island nation in the Caribbean, with Kingston as its capital. It is known for its rich culture, including reggae music, beautiful beaches, and vibrant lifestyle.",
    "PUERTO RICO": "Puerto Rico is a Caribbean island and U.S. territory, with San Juan as its capital. It is known for its beautiful beaches, vibrant culture, and rich history.",
    "TRINIDAD AND TOBAGO": "Trinidad and Tobago is a twin-island country in the Caribbean, with Port of Spain as its capital. It is known for its vibrant culture, including Carnival, and its beautiful beaches.",
    "BAHAMAS": "The Bahamas is an island nation in the Caribbean, with Nassau as its capital. It is known for its beautiful beaches, clear waters, and vibrant tourism industry.",
    "BARBADOS": "Barbados is an island nation in the Caribbean, with Bridgetown as its capital. It is known for its beautiful beaches, rich cultural heritage, and vibrant tourism industry.",
    "ST LUCIA": "Saint Lucia is an island nation in the Caribbean, with Castries as its capital. It is known for its stunning landscapes, including the Pitons, and its vibrant culture.",
    "ST VINCENT AND THE GRENADINES": "Saint Vincent and the Grenadines is an island nation in the Caribbean, with Kingstown as its capital. It is known for its beautiful islands, clear waters, and vibrant culture.",
    "GRENADA": "Grenada is an island nation in the Caribbean, with St. George's as its capital. It is known for its beautiful beaches, spice plantations, and vibrant culture.",
    "ANTIGUA AND BARBUDA": "Antigua and Barbuda is an island nation in the Caribbean, with St. John's as its capital. It is known for its beautiful beaches, clear waters, and vibrant tourism industry.",
    "DOMINICA": "Dominica is an island nation in the Caribbean, with Roseau as its capital. It is known for its natural beauty, including rainforests, rivers, and hot springs.",
    "ST KITTS AND NEVIS": "Saint Kitts and Nevis is an island nation in the Caribbean, with Basseterre as its capital. It is known for its beautiful beaches, rich history, and vibrant culture.",
    "BELIZE": "Belize is located in Central America, with Belmopan as its capital. It is known for its rich biodiversity, including coral reefs and rainforests, and its Mayan heritage.",
    "PANAMA": "Panama is located in Central America, with Panama City as its capital. It is known for the Panama Canal, rich biodiversity, and vibrant culture.",
    "COSTA RICA": "Costa Rica is located in Central America, with San José as its capital. It is known for its rich biodiversity, beautiful landscapes, and commitment to environmental sustainability.",
    "NICARAGUA": "Nicaragua is located in Central America, with Managua as its capital. It is known for its beautiful lakes, volcanoes, and rich cultural heritage.",
    "HONDURAS": "Honduras is located in Central America, with Tegucigalpa as its capital. It is known for its rich natural resources, beautiful beaches, and Mayan heritage.",
    "EL SALVADOR": "El Salvador is located in Central America, with San Salvador as its capital. It is known for its beautiful beaches, volcanoes, and rich cultural heritage.",
    "GUATEMALA": "Guatemala is located in Central America, with Guatemala City as its capital. It is known for its rich Mayan heritage, beautiful landscapes, and vibrant culture.",
    "GREENLAND": "Greenland is an autonomous territory of Denmark, located in the Arctic, with Nuuk as its capital. It is known for its stunning icy landscapes, unique Inuit culture, and rich natural resources.",
    "HONG KONG": "Hong Kong is a Special Administrative Region of China, known for its skyscrapers, vibrant economy, and unique blend of Eastern and Western cultures.",
    "MACAU": "Macau is a Special Administrative Region of China, known for its casinos, Portuguese colonial history, and vibrant culture.",
    "NEW CALEDONIA": "New Caledonia is a French overseas territory in the South Pacific, known for its beautiful beaches, rich biodiversity, and indigenous Kanak culture.",
    "FRENCH POLYNESIA": "French Polynesia is an overseas collectivity of France in the South Pacific, known for its stunning islands, clear waters, and rich cultural heritage.",
    "GUAM": "Guam is an unincorporated territory of the United States in the Western Pacific, known for its beautiful beaches, strategic military importance, and unique Chamorro culture.",
    "MAYOTTE": "Mayotte is a French overseas department in the Indian Ocean, known for its beautiful beaches, rich biodiversity, and unique blend of cultures.",
    "SAINT PIERRE AND MIQUELON": "Saint Pierre and Miquelon is a self-governing territorial overseas collectivity of France off the coast of Newfoundland, known for its French heritage and unique culture.",
    "WALLIS AND FUTUNA": "Wallis and Futuna is a French overseas collectivity in the South Pacific, known for its rich Polynesian culture and beautiful landscapes.",
    "WESTERN SAHARA": "Western Sahara is a disputed territory in North Africa, known for its vast deserts and the ongoing conflict over its status."

};

const defaultResponses = [
  "Sorry, I didn't understand that.",
  "Hmm, I'm not sure about that.",
  "I'm still learning. Could you rephrase?",
  "Can you try asking that in a different way?",
  "That’s a tough one for me.",
  "Let me think... Nope, still don't know.",
  "I'm not sure I can help with that.",
  "Can you ask something else?",
  "Let's try something different.",
  "I didn't quite get that. Could you say it again?",
  "I'm not sure what you're asking.",
  "I wish I had the answer to that.",
  "I'm not programmed to understand that yet.",
  "Oops, that one went over my head.",
  "I'm afraid I don't have the answer to that.",
  "Maybe try asking me something else?",
  "Sorry, I'm still learning how to respond to that.",
  "I'm not able to process that question.",
  "I'm sorry, I don't have an answer for that.",
  "Sorry, that doesn't compute.",
  "I don't understand. Can you rephrase?",
  "Hmm, that one stumped me.",
  "I'm not quite sure what you mean.",
  "I wish I could help, but I'm not sure.",
  "I don't have an answer for that, sorry.",
  "That’s a good question, but I don't know the answer.",
  "My circuits are a little scrambled by that one.",
  "I’m not sure what you mean. Can you try again?",
  "I’m still learning, and that one’s beyond me.",
  "That’s something I’ll need to learn more about.",
  "I’m not equipped to answer that just yet.",
  "Could you ask me something else?",
  "I wish I had more to say on that.",
  "That’s not something I can answer right now.",
  "I might need to research that one!",
  "I don't have enough information to respond.",
  "I’m not able to assist with that query.",
  "I don't have the knowledge to answer that.",
  "Sorry, I can’t provide a response for that.",
  "That's a bit outside of what I know.",
  "I’m still getting the hang of this. Can you ask me something else?",
  "I’m not able to give you an answer for that.",
  "I’m not sure I understand what you mean.",
  "I’m sorry, I don’t understand what you’re asking.",
  "I can’t quite grasp that. Can you try again?",
  "That’s something I’ll need to learn more about.",
  "I’m not able to answer that question yet.",
  "I don’t have the right information to answer that.",
  "I’m sorry, but I don’t understand what you’re saying.",
  "That’s beyond what I can handle at the moment.",
  "That one’s a bit beyond my capabilities.",
  "I’m still learning, so I don’t know the answer to that.",
  "That’s a tough one, and I’m not sure.",
  "I’m not sure what to say about that.",
  "I’m not equipped to answer that right now.",
  "I can’t help with that query.",
  "That’s something I’m not sure about.",
  "I’m not sure how to respond to that right now.",
  "That’s a question I don’t have an answer to.",
  "I’m sorry, but I don’t understand that.",
  "I’m not sure what you mean by that.",
  "I don’t have the answer to that right now.",
  "That’s a good question, but I’m not sure.",
  "I’m not able to process that request.",
  "I don’t have enough knowledge to answer that."
];


function getBotResponse(userInput) {
  const userMessage = userInput.toUpperCase().trim();

  // Check for exact matches
  if (responses[userMessage]) {
    return responses[userMessage];
  }

  // Check for patterns using regular expressions
  for (let pattern in responses) {
    const regex = new RegExp(pattern, 'i'); // 'i' for case-insensitive matching
    if (regex.test(userMessage)) {
      return responses[pattern];
    }
  }

  // Default response if no match is found
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
}




function appendMessage(message, isUser) {
  const messageClass = isUser ? "userText" : "botText";
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("p");
  messageElement.className = messageClass;
  messageElement.innerHTML = `<span>${message}</span>`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

document.getElementById("buttonInput").addEventListener("click", () => {
  const userInput = document.getElementById("textInput").value;
  appendMessage(`User: ${userInput}`, true);
  document.getElementById("textInput").value = ""; // Clear input field
  const botResponse = getBotResponse(userInput);
  appendMessage(`TerraGuide: ${botResponse}`, false);
});

document.getElementById("textInput").addEventListener("keypress", (e) => {
  if (e.which === 13) { // Enter key
    document.getElementById("buttonInput").click();
  }
});



