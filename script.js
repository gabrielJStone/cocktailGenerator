
// cocktail-making factory function
function cocktailFactory(spirit, flavor, type, drinkName, drinkImage = "", info, link) {
    return {
        spirit,
        flavor,
        type,
        drinkName,
        drinkImage,
        info,
        link
    }
};

// list of cocktail objects
const vodkaMartini = cocktailFactory('vodka', 'dry', 'classic', 'Vodka Martini', 'https://bevvyco.s3.amazonaws.com/img/drinks/hl/jhl/41189657fa633013e11a435b66394f08-lg.jpg?ts=1432631672000', "The Vodka Martini is, as the name would imply, simply a variation of the classic Dry Martini that uses vodka instead of gin. It makes for a very different drink, in which the aromas from the vermouth are more pronounced relative to those of the spirit, as vodka does not contain the botanicals found in gin. And, as a bonus, the Vodka Martini lets you order a sexy-looking Martini even if you can't stand the thought of drinking gin.", 'https://bevvy.co/cocktail/vodka-martini/jhl');
const ginMartini = cocktailFactory('gin', 'dry', 'classic', 'Gin Martini', 'https://bevvyco.s3.amazonaws.com/img/drinks/ea/oyea/martini-658d934505c3b22843de895c98ae4c76-lg.jpg?ts=1497449916000', "The Martini is a timeless classic cocktail, traditionally consisting of gin and dry vermouth, and commonly garnished with olives or a lemon twist. Since its introduction, the Martini has become one of the best known and most recognizable cocktails of all time. Such is the Martini's popularity that the cocktail's name is used to reference the glassware it's served in—the Martini glass, aka the cocktail glass. James Bond, Franklin D. Roosevelt, Ernest Hemingway, and other fictional and historical greats have been known to enjoy the Martini, and it has been associated with high society and good living for over a century.", 'https://bevvy.co/cocktail/martini/oyea');
const gibson = cocktailFactory('gin', 'dry', 'exotic', 'Gibson', 'https://bevvyco.s3.amazonaws.com/img/drinks/cq/wcq/gibson-47d7b654b091d531cab0742cff386314-lg.jpg?ts=1635893454000', "The Gibson is a Martini variation that combines gin and dry vermouth. The garnish is where things take a turn. Rather than employing a lemon twist or olive, like a traditional Martini, the Gibson opts for a cocktail onion. This gives a pickled, briny quality to the drink that differs from olive brine. So while the change is subtle, it's noticeable.", 'https://bevvy.co/cocktail/gibson/wcq');
const laMargherita = cocktailFactory('liqueur', 'acidic', 'exotic', 'La Margherita', 'https://bevvyco.s3.amazonaws.com/img/drinks/hy/vwhy/8ca2539b1d9cf28c5255ead0c69563c0-lg.jpg?ts=1459949420000', "Building on the classic margarita, La Margherita (also 'little Margaret', but in Italian) includes orange liqueur, as one would in a top shelf margarita, as well as a full ounce of Cannella Cinnamon Cordial, which adds a lovely brightness. Though many bitters will finish it off nicely, Seven Stills Prickly Pear Bitters keep the flavor profile consistent.", 'https://bevvy.co/cocktail/la-margherita/vwhy');
const highball = cocktailFactory('whiskey', 'dry', 'classic', 'Highball', 'https://bevvyco.s3.amazonaws.com/img/drinks/wa/nmwa/highball-4de45d79d99c54d28ae535e11a5526dc-lg.jpg?ts=1614703099000', "The Highball, while technically referring to an entire family of drinks made with a spirit and a non-alcoholic mixer served in a tall glass with ice, is a name often given to a simple combination of whiskey and soda water. This refreshing drink first became popular in the UK in the late 19th or early 20th century, and is often referred to as a Scotch and Soda, although you can make it with any whiskey you please.", 'https://bevvy.co/cocktail/highball/nmwa');
const oldPal = cocktailFactory('whiskey', 'acidic', 'classic', 'Old Pal', 'https://bevvyco.s3.amazonaws.com/img/drinks/ua/ayua/old-pal-cocktail-d384d84a010c5fa1d0caa9e4466bbd6d-lg.jpg?ts=1496111359000', "The Old Pal is a riff on the Boulevardier, itself a riff on the classic Negroni. It maintains the standard template of spirit, vermouth, and Campari, opting for rye whiskey and dry vermouth.", 'https://bevvy.co/cocktail/old-pal-cocktail/ayua');
const canellaSolo = cocktailFactory('liqueur', 'dry', 'exotic', 'Canella Solo', 'https://bevvyco.s3.amazonaws.com/img/drinks/hy/fwhy/5b3bfdd083ad10bec783d25195c0f6c4-lg.jpg?ts=1459949734000', "I always like to say that cinnamon and orange are lovers, and this simple drink will prove it to you.", 'https://bevvy.co/cocktail/cannella-solo/fwhy');
const elPresidente = cocktailFactory('rum', 'sweet', 'exotic', 'El Presidente Cocktail', 'https://bevvyco.s3.amazonaws.com/img/drinks/ca/cxca/37647ee70d68daedde9775867fbe468c-lg.jpg?ts=1461368876000', "El Presidente is a classic rum cocktail that originated in Havana, Cuba in the 1920s and was named for President Gerado Machado. The cocktail was traditionally made with Bacardi, the biggest name in Cuban rum at the time. Combining light rum with dry vermouth, orange curaçao, and grenadine, El Presidente is slightly sweet and dry, yet balanced. For the best results, try making your own grenadine, which is far superior to the fake-colored bottled stuff, and will really let this drink shine.", 'https://bevvy.co/cocktail/el-presidente-cocktail/cxca');
const ginSonic = cocktailFactory('gin', 'dry', 'exotic', 'Gin Sonic', 'https://bevvyco.s3.amazonaws.com/img/drinks/ry/ehry/gin-sonic-b150420676d0e8e2c4475f58c8a8035d-lg.jpg?ts=1586403918000', "The Gin and Sonic is a simple riff on the classic G&T, in which you complement the gin with equal measures of soda and tonic (soda + tonic = 'sonic'). The drink is a healthier version of the G&T, which can be too sweet for many people's taste preferences.", 'https://bevvy.co/cocktail/gin-sonic/ehry');
const bamboo = cocktailFactory('wine spirits', 'sweet', 'exotic', 'Bamboo Cocktail', 'https://bevvyco.s3.amazonaws.com/img/drinks/aa/ytaa/bamboo-cocktail-05bf0de6617ed7a6ecc5744cef9270d7-lg.jpg?ts=1496259621000', "The Bamboo cocktail is a beautifully delicate cocktail made with sherry wine. It was invented in Japan the 1890s by Louis Eppinger, a German bartender. Sherry cocktails are enjoying a revival, and the Bamboo cocktail is a great choice for anyone who wants a complex drink that is a little less alcoholic.", 'https://bevvy.co/cocktail/bamboo-cocktail/ytaa');
const fiveIslandFlamingo = cocktailFactory('rum', 'sweet', 'exotic', 'Five Island Flamingo', 'https://bevvyco.s3.amazonaws.com/img/drinks/ry/sdry/five-island-flamingo-7cee4c4999f211352af09e5730f3a2c4-lg.jpg?ts=1559567494000', "The Five Island Flamingo is an original cocktail that was created by Jim Meehan for Banks 5 Island Rum. It's a simple, refreshing drink inspired by Jamaica's favorite grapefruit soda: Ting.", 'https://bevvy.co/cocktail/five-island-flamingo/sdry');
const ginTonic = cocktailFactory('gin', 'dry', 'classic', 'Gin & Tonic', 'https://bevvyco.s3.amazonaws.com/img/drinks/cq/rcq/gin-and-tonic-9d69932bc51b3d60df0fa86efbb1631f-lg.jpg', "The Gin and Tonic is a classic mixed drink that was originally invented by the British, but has since spread to become a popular mainstay in bars all over the world. The Gin and Tonic cocktail is extraordinarily simple to make, almost impossible to screw up, and perfect for drinking on hot days. We recommend using a juniper-forward London Dry gin, but it can also be fun to experiment with more citrusy modern gins.", 'https://bevvy.co/cocktail/gin-and-tonic/rcq');
const gatekeeper = cocktailFactory('rum', 'dry', 'classic', 'Gatekeeper', 'https://bevvyco.s3.amazonaws.com/img/drinks/os/fos/gatekeeper-f542bc3a0efdea62564345fe28a01c84-lg.jpg', "The Gatekeeper is a simple, classic cocktail with notes of ginger, almonds, molasses and cacao nibs.", 'https://bevvy.co/cocktail/gatekeeper/fos');
const endeavor = cocktailFactory('rum', 'sweet', 'exotic', 'Endeavor Punch', 'https://bevvyco.s3.amazonaws.com/img/drinks/os/los/endeavor-punch-581fe9a3f9feaafd8737d9288831754e-lg.jpg', "Here\’s a punch recipe from the acclaimed drinks writer and historian David Wondrich. Composed of spirit, citrus, spice and water, the Endeavor Punch took the world by storm in the mid-1600s, and has proved that it\’s got some real staying power ever since.", 'https://bevvy.co/cocktail/endeavor-punch/los');
const daiquiri = cocktailFactory('rum', 'acidic', 'classic', 'Daiquiri', 'https://bevvyco.s3.amazonaws.com/img/drinks/bi/wbi/daiquiri-539bdd4daabf29f3d1f962e4ce6a1468-lg.jpg', "The classic Daiquiri is a delicious and wonderfully simple cocktail that consists of only three ingredients: white rum, lime juice, and sugar. That's it.As always, we recommend using fresh lime juice, as well as simple syrup to avoid getting clumps of granulated sugar in your Daiquiri. (And for some excellent rums to use, see our writeup for the best rums for a Daiquiri according to top bartenders.)", 'https://bevvy.co/cocktail/daiquiri/wbi');
const oldFashioned = cocktailFactory('whiskey', 'acidic', 'classic', 'Old Fashioned', 'https://bevvyco.s3.amazonaws.com/img/drinks/ua/zbua/old-fashioned-90daae7bc1889673d4851d62a9203764-lg.jpg', "The Old-Fashioned cocktail is a simple drink, consisting of bourbon whiskey or rye whiskey, sugar or simple syrup, Angostura bitters, and an orange twist, over ice.", 'https://bevvy.co/cocktail/old-fashioned/zbua');
const manhattan = cocktailFactory('whiskey', 'acidic', 'classic', 'Manhattan', 'https://bevvyco.s3.amazonaws.com/img/drinks/ea/hzea/manhattan-478096832994eb7d37d3881f65aff191-lg.jpg', "The Manhattan cocktail is simple, elegant and sophisticated. Included on the IBA (International Bartender Association) list of official cocktails, it's a true classic, right up there with other favorites like the Old Fashioned, Negroni and Martini.", 'https://bevvy.co/cocktail/manhattan/hzea');
const negroni = cocktailFactory('gin', 'acidic', 'classic', 'Negroni', 'https://bevvyco.s3.amazonaws.com/img/drinks/sp/msp/11fed516816ec54a4e0015cb29a538f2-lg.jpg', "The Negroni is a classic cocktail featuring Campari front-and-center, along with equal parts gin and sweet vermouth, resulting in a spirit-forward drink with a strongly bitter profile. It's typically either built in an Old-Fashioned glass on the rocks, or stirred and served up in a cocktail or coupe glass. A London dry gin typically balances the other flavors best, and be sure to use a good sweet vermouth like Carpano Antica or Noilly Prat.", 'https://bevvy.co/cocktail/negroni/msp');
const paloma = cocktailFactory('tequila', 'acidic', 'exotic', 'Paloma', 'https://bevvyco.s3.amazonaws.com/img/drinks/ua/meua/paloma-02f92586de62dbffb5ccedd0d4c6f3eb-lg.jpg', "Spanish for 'dove,' the Paloma is a Mexican favorite that is wonderful for the summer patio. Its refreshing taste is a wonderful example of sweet and tart flavors being combined with salt and powerful tequila. If unavailable, the grapefruit soda can be substituted with a combination of grapefruit juice and either club soda or sparkling water.", 'https://bevvy.co/cocktail/paloma/meua');
const espressoMartini = cocktailFactory('vodka', 'sweet', 'classic', 'Espresso Martini', 'https://bevvyco.s3.amazonaws.com/img/drinks/ri/qri/ab92fcc600fbef2731a1d482cca38646-lg.jpg', "The Espresso Martini isn't technically a Martini at all, but we love it regardless. A simple combination of vodka, coffee liqueur (like Kahlua), and cold-brew espresso, this cocktail packs as much of a caffeine kick as it does a boozy one. The Espresso Martini is a versatile drink that can be served with brunch, after dinner, or to fuel a night out.", 'https://bevvy.co/cocktail/espresso-martini/qri');
const blueLagoon = cocktailFactory('tequila', 'sweet', 'exotic', 'Blue Lagoon Margarita', 'https://bevvyco.s3.amazonaws.com/img/drinks/ya/pwya/blue-lagoon-margarita-d5c365335ec1ec5b86dd52dc0375060b-lg.jpg?ts=1496356134000', "A Blue Lagoon Margarita is a cocktail typically served in a Margarita Glass. It is a mixed drink with 5 ingredients.", 'https://bevvy.co/cocktail/blue-lagoon-margarita/pwya');
const refinedMargarita = cocktailFactory('tequila', 'acidic', 'exotic', 'Refined Margarita', 'https://bevvyco.s3.amazonaws.com/img/drinks/hy/fphy/refined-margarita-9c1e1dd3f13e4ac78a30d3c8a9d08a91-lg.jpg', "The traditional Margarita calls for orange liqueur, but actual orange juice is one way to add that sweet, citrus-y element to the mix. Here, New York's Refinery Rooftop is employing fresh Clementines alongside tequila, lime and agave, plus a spicy kick of jalapeño. It's a juicy and refreshing way to spend your time, whether you're basking atop a rooftop or making drinks at home.", 'https://bevvy.co/cocktail/refined-margarita/fphy');
const greyhound = cocktailFactory('gin', 'acidic', 'classic', 'Greyhound', 'https://bevvyco.s3.amazonaws.com/img/drinks/qd/Oqd/21f692e58279b11c20da60597fcfa9c5-lg.jpg', "The Greyhound is a simple, two-ingredient cocktail with a tangy, citrusy flavor that is both refreshing and delicious. The origin of this tasty cocktail is rumored to date back to the 1930s at the Savoy Hotel, and the Greyhound recipe is included in Harry Craddock's Savoy Cocktail Book.", 'https://bevvy.co/cocktail/greyhound/whq');
const cosmopolitan = cocktailFactory('vodka', 'sweet', 'exotic', 'Cosmopolitan', 'https://bevvyco.s3.amazonaws.com/img/drinks/xa/lyxa/cosmopolitan-0dfeb825ad943edc1d1859fbed512546-lg.jpg?ts=1585866413000', "The Cosmpolitan Cocktail (or Cosmo as it's commonly known) is a relatively simple drink with a big reputation. It was the drink of choice on the hit HBO show 'Sex and the City,' where it was so frequently referenced by Carrie Bradshaw and her pals that the Cosmopolitan nearly had a persona of its own.", 'https://bevvy.co/cocktail/cosmopolitan/lyxa');
const aperolSpritz = cocktailFactory('wine spirits', 'sweet', 'classic', 'Aperol Spritz', 'https://bevvyco.s3.amazonaws.com/img/drinks/hy/oihy/aperol-spritz-ca2b620238aa6620e7e17e16e6873ef6-lg.jpg', "The Aperol Spritz is a classic Italian aperitivo cocktail made with prosecco, club soda, and (you guessed it) Aperol. Often regarded as Campari's less bitter cousin, Aperol is a wonderfully light amaro that's great for introducing people to the category, as its citrusy profile goes easy on the powerful flavors that can so often be a turn-off.", 'https://bevvy.co/cocktail/aperol-spritz/oihy');
const tequilaSunrise = cocktailFactory('tequila', 'sweet', 'exotic', 'Tequila Sunrise', 'https://images.immediate.co.uk/production/volatile/sites/30/2018/04/tequila-sunrise-18167a1.jpg?resize=960,872?quality=90&webp=true&resize=300,272', "The Tequila Sunrise is a 1970s-era cocktail comprised of tequila, grenadine, and orange juice. When served, the grenadine sinks to the bottom, creating a layered effect, which gives the drink its name.", 'https://bevvy.co/cocktail/tequila-sunrise/hbl');
const mojito = cocktailFactory('rum', 'sweet', 'classic', 'Mojito', 'https://bevvyco.s3.amazonaws.com/img/drinks/ep/uep/mojito-d61ce9105464b9c7598c3ca312edae8c-lg.jpg', "The Mojito is one of the most popular rum cocktails in the world. It is simple to make and a delightfully refreshing drink. With a crisp, sweet, citrusy and minty flavor, the Mojito cocktail is a classic for a reason.", 'https://bevvy.co/cocktail/mojito/uep');
const snowball = cocktailFactory('other', 'sweet', 'festive', 'Snowball', 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/11/960_SNOWBALL-768x961.jpg', "The snowball cocktail is typically enjoyed at Christmas. Advocat, lime, lemonade and ice make for a retro beverage of dreams.", 'https://www.deliciousmagazine.co.uk/recipes/snowball-cocktail/');
const mulledWine = cocktailFactory('wine spirits', 'acidic', 'festive', 'Mulled Wine', 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mulled_wine_46955_16x9.jpg', "This is such a cozy drink on a cool night, but be make sure you don't drive anywhere - this one sneaks up on you!", 'https://bevvy.co/cocktail/mulled-wine/hlsy');
const bucksFizz = cocktailFactory('wine spirits', 'sweet', 'festive', "Buck's Fizz", 'https://www.thespruceeats.com/thmb/j1ecdySvNLZchriPvXGZilPR6gw=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucks-fizz-cocktail-recipe-759611-hero-01-caa35ef806974bc298284fdbd306825b.jpg', "The Buck's fizz is a simple drink made of orange juice and Champagne. It's nearly identical to the popular mimosa. Both drinks are from the 1920s, though the Buck's fizz is believed to be a few years older.", 'https://www.thespruceeats.com/bucks-fizz-cocktail-recipe-759611');
const eggnog = cocktailFactory('other', 'sweet', 'festive', 'Eggnog', 'https://bevvyco.s3.amazonaws.com/img/drinks/gi/qgi/eggnog-08dda81c13655badf863137026cb3159-lg.jpg', "There are countless Egg Nog recipes out there, many with small differences, but they share one thing in common: They're almost all labor intensive, requiring you to separate eggs and form peaks and other things that you likely don't ant to deal with when you're thirsting for a good drink.", 'https://bevvy.co/cocktail/eggnog/qgi');
const baileysWhiteRussian = cocktailFactory('liqueur', 'sweet', 'festive', 'Baileys White Russian', 'https://recipesfromapantry.com/wp-content/uploads/2020/10/baileys-white-russian-eIMG_5529-scaled.jpg', "A White Russian is a simple vodka cocktail with a creamy, coffee flavor that makes for a great dessert drink. It is very similar to a Kahlua and Cream but stronger due to the addition of vodka.", 'https://bevvy.co/cocktail/white-russian/upl');
const christmasMartini = cocktailFactory('vodka', 'acidic', 'festive', 'Christmas Martini', 'https://sugarandcharm.com/wp-content/uploads/2021/11/holiday_martini_recipe-1.jpg', "This is the perfect cocktail for a festive Christmas brunch or holiday party. It’s easy to make and you can shake them up ahead of time too. It would pair perfectly with a Christmas dessert table or if you’re just relaxing and watching a Christmas movie.", 'https://sugarandcharm.com/christmas-martini');
const peppermintMartini = cocktailFactory('vodka', 'sweet', 'festive', 'Peppermint Martini', 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Peppermint-Martini-007.jpg', "Here’s a delightful signature winter cocktail: try the Peppermint Martini! This drink is creamy and minty fresh, a delicious combination of peppermint schnapps and chocolate liqueur.", 'https://www.acouplecooks.com/peppermint-martini/');
const vodkaSoda = cocktailFactory('vodka', 'acidic', 'classic', 'Vodka Soda', 'https://bevvyco.s3.amazonaws.com/img/drinks/ta/sjta/vodka-soda-dc7415d89f75a1affcc9b1e061799efb-lg.jpg', "The Vodka Soda is an extremely simple, low-calorie mixed drink that's great for those days you don't want anything fancy. It uses just two ingredients, vodka and (you guessed it) soda water, and you can optionally garnish it with a lime or lemon wedge for an extra bit of citrus. A favorite of nightclub-goers, dieters, and lazy bartenders everywhere, the Vodka Soda isn't so much classic as it is obvious—but that doesn't mean it isn't exactly what the doctor ordered from time to time.", 'https://bevvy.co/cocktail/vodka-soda/sjta');
const ginGin = cocktailFactory('gin', 'acidic', 'classic', 'Gin-Gin Mule', 'https://bevvyco.s3.amazonaws.com/img/drinks/Of/SOf/7876eee0afa30370ea501becf08b14cb-lg.jpg', "The Gin Gin Mule is quite simply a Moscow Mule with gin instead of vodka. It's a nice little twist on the classic Moscow Mule recipe that is as refreshing and as delicious as the original.", 'https://bevvy.co/cocktail/gin-gin-mule/vxwa');
const bitterSweet = cocktailFactory('gin', 'acidic', 'exotic', 'Bitter Sweet', 'https://bevvyco.s3.amazonaws.com/img/drinks/sy/ujsy/8d886ec6fccc6fc4b9187b0c03f61d41-lg.jpg', "A Bitter Sweet is a cocktail typically served in a Coupe Glass. It is a mixed drink with 5 ingredients. Follow the cocktail recipe below to learn how to make a Bitter Sweet.", 'https://bevvy.co/cocktail/bitter-sweet/ujsy');
const summerGintonica = cocktailFactory('gin', 'dry', 'exotic', 'Summer Gintonica', 'https://bevvyco.s3.amazonaws.com/img/drinks/ry/uhry/summer-gintonica-4a97326288a25a5b75014cb6e97846d8-lg.jpg', "The easy-drinking Summer Gintonica is a simple riff on the classic Gin & Tonic. It starts with a base of Monkey 47, a unique gin that features 47 different botanicals. From there, fresh lemon juice provides an acidic kick while Fever-Tree Mediterranean Tonic adds a delicate floral note, plus some effervescence. Mix this up during summer and enjoy on your nearest patio.", 'https://bevvy.co/cocktail/summer-gintonica/uhry');
const tomCollins = cocktailFactory('gin', 'acidic', 'exotic', 'Tom Collins', 'https://bevvyco.s3.amazonaws.com/img/drinks/dl/rdl/tom-collins-bd095340b9818de7bff8dd9fa89fece0-lg.jpg', "The Tom Collins is a classic summer highball that's perfect for the golf course or a backyard barbecue, made from gin, lemon juice, simple syrup, and club soda. The Tom Collins is served in, you guessed it, a Collins glass, which is narrower than a typical highball. A nice side effect of this glassware is that when you tilt the drink all the way back to get those last few drops, the ice is a lot less likely to spill down the front of your shirt. But hey, come July, that might not be so bad!", 'https://bevvy.co/cocktail/tom-collins/rdl');
const georgiaGin = cocktailFactory('gin', 'sweet', 'exotic', 'Georgia Gin', 'https://oasis.ca/wp-content/uploads/2022/05/Georgia-gin-cocktail-oasis-gin-orange-e1652214283563.jpg', "This fruity blend is perfect for summer cocktail parties. It’s flavored with peach schnapps and orange juice, creating a bright beverage that tastes like sunshine in a glass.", 'https://www.distillery209.com/cocktails/georgia-gin');
const aviation = cocktailFactory('gin', 'acidic', 'classic', 'Aviation', 'https://www.thespruceeats.com/thmb/CGvXxGpbduB1WPXmubzNSG4Akr4=/3983x2987/smart/filters:no_upscale()/aviation-cocktail-recipe-760055-hero-01-af5233300c184476b02891de2c685b2a.jpg', "The Aviation cocktail is a gin-based cocktail that is spirit-forward with citrus notes and a hint of lavender. It's considered by some to be a variation on the Gin Sour, and is similar to the Blue Moon cocktail, the Moonlight cocktail, and the Casino cocktail. The Aviation cocktail was invented by Hugo Ensslin, a bartender at the Hotel Wallick in New York in the early 1900's, and first appeared in his 1916 book Recipes for Mixed Drinks. The crème de violette gives the Aviation a pale, sky-blue color (hence the name).", 'https://bevvy.co/cocktail/aviation-cocktail/zvh');
const sweetBird = cocktailFactory('whiskey', 'sweet', 'exotic', 'Go On, Sweet Bird', 'https://bevvyco.s3.amazonaws.com/img/drinks/ry/gdry/go-on-sweet-bird-ef5d795f11749b2f871e361790ee84f3-lg.jpg', "Scotch whisky is often considered a heavy, winter drink. But it doesn't have to be. Scotch is a versatile spirit that can be enjoyed all year round. Proving that is this cocktail, the Go On, Sweet Bird. It starts with a base of Craigellachie 13 Year Old, a delightful single malt that tastes great in a glass by itself. But here we're mixing it with Martini Riserva Speciale Bitter, pineapple gum syrup, and fresh lime.", 'https://bevvy.co/cocktail/go-on-sweet-bird/gdry');
const peguClub = cocktailFactory('gin', 'sweet', 'exotic', 'Pegu Club', 'https://www.thespruceeats.com/thmb/lioibJuhBEFjY2KpMp-f3UMrwWk=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pegu-club-cocktail-760109-Hero-01-alt-f97b6bec7871469d954275dfe9618fc1.jpg', "This gin sour has a long history. It was first mentioned in a 1930s cookbook, which traced its origins back to the legendary Pegu Club in Burma. The drink quickly became popular, as all good cocktails do, and is now a favorite of connoisseurs around the world. This is a breezy blend of aromatic and fruity flavors. As you’d expect from a cocktail from Burma, it’s bursting with exotic taste.", 'https://www.thespruceeats.com/pegu-club-cocktail-760109');
const sidecar = cocktailFactory('rum', 'sweet', 'classic', 'Rum Sidecar', 'https://bevvyco.s3.amazonaws.com/img/drinks/ta/lnta/rum-sidecar-99d58cd1326e22e5e8366a29380a2653-lg.jpg', "Jason Alexander, owner of Tacoma’s Devil’s Reef, suggested this recipe when asked to share his thoughts on a rummy Sidecar and plays perfectly into a French theme. This recipe would also work quite well with other moderately-aged dry rums like Mount Gay Eclipse or the new Bacardi Cuatro.", 'https://bevvy.co/cocktail/rum-sidecar/lnta');
const mimosa = cocktailFactory('wine spirits', 'sweet', 'festive', "Mimosa", 'https://www.tasteofhome.com/wp-content/uploads/2018/11/shutterstock_433800829_mimosa-e1542131971126.jpg', "Mix a classic mimosa cocktail with orange juice and champagne – or use prosecco if you prefer a different sort of bubbly. It's an easy fix when entertaining", 'https://www.bbcgoodfood.com/recipes/mimosa');
const seaBreeze = cocktailFactory('vodka', 'acidic', 'exotic', 'Sea Breeze', 'https://www.thespruceeats.com/thmb/jCagW_ZKLeltJJl605wkrVjAgRQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sea-breeze-cocktail-recipe-760599-hero-01-74eceed1b89e4c2c9df8ac33aceef19c.jpg', "The sea breeze is a popular cocktail and part of a collection of vodka and fruit juice drinks. This recipe adds a hint of tart grapefruit juice to the Cape Codder (aka vodka cranberry). It's a delicious, spiked fruit punch that's a refreshing delight on hot summer days. After one taste, you'll quickly realize why it has long been a favorite bar drink.", 'https://www.thespruceeats.com/sea-breeze-cocktail-recipe-760599');
const perfectStorm = cocktailFactory('rum', 'acidic', 'exotic', 'Perfect Storm', 'https://www.liquor.com/thmb/AE0oIcp5JbeLhIGDgAMe3e48l8A=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/perfect-storm-720x720-primary-429ea3c5c6fa4dc2bbae9f312a9fa438.jpg', "This slightly spicy, slightly sweet rum highball is a consummate summer classic, and is closely related to its vodka equivalent, the Moscow Mule. It’s a straightforward mix of rum (or vodka in the Moscow Mule case), ginger beer and lime juice. This simple template allows plenty of tweaks and variations, as with the Perfect Storm.", 'https://www.liquor.com/recipes/the-perfect-storm/');
const whiskeySour = cocktailFactory('whiskey', 'acidic', 'classic', 'Whisky Sour', 'https://cdn.shopify.com/s/files/1/0078/7038/2195/articles/TBC_recipe_image_4_2048x2048.png?v=1647427906', "Few drinks in the cocktail canon are as quick to satisfy as a silky sour. But like most classic cocktails, the Whiskey Sour has spawned countless variations, from tried-and-true riffs like the red wine-topped New York Sour to versions incorporating other fruits, juices and sweeteners. Add a flourish to any component, and you have a personal spin on this classic refreshment.", 'https://www.bbcgoodfood.com/recipes/whiskey-sour');
const spikedPumpkinPie = cocktailFactory('rum', 'sweet', 'festive', 'Spiked Pumpkin Pie Punch', 'https://www.thisolemom.com/wp-content/uploads/2019/08/Pumpkin-Pie-Boozy-Punch-1024x679.jpg', "This is the ultimate Thanksgiving or Halloween Punch! With apple cider, real pumpkin, and cream soda, you\’ll never believe how tasty this fun Pumpkin Cocktail is. Such a unique and fun holiday drink recipe for the fall. Try this pumpkin punch with or without alcohol.", 'https://www.thecookierookie.com/pumpkin-pie-punch/');
const christmasMarg = cocktailFactory('tequila', 'acidic', 'festive', 'Christmas Margarita', 'https://www.acouplecooks.com/wp-content/uploads/2020/11/Christmas-Margarita-004.jpg', "Looking for a Christmas cocktail that’s fun and a little…unexpected? It’s not often that tequila features in holiday cocktails. But this one is absolutely stellar: try the Christmas Margarita! Why not bring everyone’s favorite drink to your holiday festivities? This one keeps all the character of a classic margarita and adds cranberry juice for a vibrant color and sweet tart nuance. With a garnish of fresh cranberries and rosemary, it’s holiday perfection. We created this drink especially for a virtual holiday party with our friend Sierra: it could not be more festive!", 'https://www.acouplecooks.com/christmas-margarita/');
const limoncelloMartini = cocktailFactory('liqueur', 'acidic', 'festive', 'Limoncello Lemon Drop Martini', 'https://cf.ltkcdn.net/cocktails/images/std/279352-800x533-lemon-drop-martini.webp', "A deliciously balanced, dangerously boozy limoncello cocktail recipe: the Limoncello Lemon Drop. This cocktail is the slightly more grown up version of what you drank in the early 2000s, with all the familiar flavors of that old school favorite.", 'https://basilandbubbly.com/limoncello-lemon-drop/');
const pinaColada = cocktailFactory('rum', 'sweet', 'exotic', 'Piña Colada', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?resize=960,872?quality=90&webp=true&resize=300,272', "The Piña Colada is one of the most popular tropical rum cocktails, and sadly one that has been bastardized by poolside bars the world over. This is a classic Piña Colada recipe that doesn't use any kind of pre-made mix, instead opting for coconut cream and fresh pineapple juice. Be sure to use a proper coconut cream, as the alternative, coconut milk, is usually too thin. However, it will do in a pinch, and you can add a bit of condensed milk if you want to thicken it up a bit.", 'https://bevvy.co/cocktail/pina-colada/ijua');
const bicicletta = cocktailFactory('wine spirits', 'acidic', 'exotic', 'Bicicletta', 'https://www.liquor.com/thmb/k2akXe5jOV3HmHzDEy6_pf6qQ38=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__06__19131829__bicicletta-720x720-recipe-c5718944909543c1b3b08c28b894dc5b.jpg', "The Bicicletta is similar to the Aperol Spritz, which contains Aperol, prosecco and sparkling water. The Bicicletta provides more of a bitter bite due to the Campari, and it receives its effervescence solely from the club soda. If you like one of the two drinks, you’re nearly assured to enjoy the other.", 'https://www.liquor.com/recipes/bicicletta/');
const sangria = cocktailFactory('wine spirits', 'acidic', 'classic', 'Sangria', 'https://images.immediate.co.uk/production/volatile/sites/2/2021/04/classic-sangria-7c52739.jpg?resize=960,872?quality=90&webp=true&resize=300,272', "Channel sunny holiday vibes with this classic Spanish tipple, made in ten minutes with red wine, brandy, lemonade and plenty of fruit.", 'https://www.olivemagazine.com/recipes/cocktails-and-drinks/classic-sangria/');
//const example = cocktailFactory('vodka', 'acidic', 'classic', 'Vodka Soda', '', "", '');
//const example = cocktailFactory('vodka', 'acidic', 'classic', 'Vodka Soda', '', "", '');

// array containing all cocktail objects
let allDrinks = [vodkaMartini, ginMartini, gibson, laMargherita, highball, oldPal, canellaSolo, elPresidente, ginSonic, bamboo, fiveIslandFlamingo, 
    ginTonic, gatekeeper, endeavor, daiquiri, oldFashioned, manhattan, negroni, paloma, espressoMartini, blueLagoon, refinedMargarita, greyhound,
cosmopolitan, aperolSpritz, tequilaSunrise, mojito, snowball, mulledWine, bucksFizz, eggnog, baileysWhiteRussian, christmasMartini, peppermintMartini, 
vodkaSoda, ginGin, bitterSweet, summerGintonica, tomCollins, georgiaGin, aviation, sweetBird, peguClub, sidecar, mimosa, seaBreeze, perfectStorm,
whiskeySour, spikedPumpkinPie, christmasMarg, limoncelloMartini, pinaColada, bicicletta, sangria];

let spiritArr = [];
let modArr = [];
let typeArr = [];


// stores spirit button value
function storeVarSpirit(el) {
  let spirit = el.getAttribute('value'); 
  spiritArr.shift();
  spiritArr.push(spirit.toLowerCase())
  console.log(`${spiritArr}`)
  document.getElementById("chosenSpirit").innerHTML = `Your chosen spirit: ${spiritArr}`;
};

// stores modifier button value
function storeVarModifier(el) {
  let modifier = el.getAttribute('value'); 
  modArr.shift();
  modArr.push(modifier.toLowerCase())
  console.log(`${modArr}`)
  document.getElementById("chosenMod").innerHTML = `Your chosen modifier: ${modArr}`;
}; 

// stores type button value
function storeVarType(el) {
  let type = el.getAttribute('value'); 
  typeArr.shift();
  typeArr.push(type.toLowerCase())
  console.log(`${typeArr}`)
  document.getElementById("chosenType").innerHTML = `Your chosen type: ${typeArr}`;
}; 

function scrollToLocation(x) {
  const element = document.getElementById(x);
  element.scrollIntoView({behavior: "smooth"});
}

// displays final cocktail details
function revealCocktail() {
  document.getElementById("result_p").innerHTML = `We recommend this:`;
  document.getElementById("title_anchor").innerHTML = choiceName;
  document.getElementById("result_img").src = choiceImage;
  document.getElementById("result_img").alt = choiceName;
  document.getElementById("result_figcap").innerHTML = choiceInfo;
  
};

// returns message if none found
function noCocktail() {
  document.getElementById("result_p").innerHTML = "Hmmm... we don't have a cocktail to match those preferences! Try another combination.";
  //document.getElementById("result_heading").innerHTML = '';
  document.getElementById("title_anchor").innerHTML = '';
  document.getElementById("result_img").src = '';
  document.getElementById("result_img").alt = '';
  document.getElementById("result_figcap").innerHTML = '';
  document.getElementById("result_figcap").style.visibility = 'hidden';
  document.getElementById("readMore").style.visibility = 'hidden';
  document.getElementById("result_figure").style.marginBottom = '0px';
  document.getElementById("result_section").style.display = 'contents';
  scrollToLocation('results');
};
  
// style appears function
  function styleAppear(x) {
    if (x === true) {
      document.getElementById("result_figcap").style.visibility = 'hidden';
      document.getElementById("readMore").style.visibility = 'hidden';
      document.getElementById("title_anchor").style.visibility = 'hidden';
      document.getElementById("result_section").style.display = 'contents';
    } else if (x === false || x === undefined) {
      document.getElementById("result_figure").style.marginBottom = '10px';
      document.getElementById("result_figcap").style.marginBottom = '10px';
      document.getElementById("result_figcap").style.visibility = 'visible';
      document.getElementById("readMore").style.visibility = 'visible';
      document.getElementById("title_anchor").style.visibility = 'visible';
      document.getElementById("result_section").style.display = 'contents';
    } else {
      document.getElementById("result_figcap").style.visibility = 'hidden';
      document.getElementById("readMore").style.visibility = 'hidden';
      document.getElementById("title_anchor").style.visibility = 'hidden';
    }
  }
  

// random function
function randomSelect(x) {
  let r = (Math.floor(Math.random() * (x.length)));
  if (r < 0) {
    r += 1;
  }
  return x[r];
};

let storedLink;



// selection function
function selectionProcess() {
    let choice = '';
    let noOptions;
    if (noOptions = allDrinks.find(element => element.spirit === spiritArr[0] && element.flavor === modArr[0] && element.type === typeArr[0]) === undefined) {
      const noOptionsString = "Hmmm... we don't have a cocktail to match those preferences! Try another combination."
      console.log(noOptionsString)
      noCocktail();
      //return noOptionsString;
    } else {
      let finalList = allDrinks.filter(element => element.spirit === spiritArr[0] && element.flavor === modArr[0] && element.type === typeArr[0]);
      finalResult = randomSelect(finalList)
      choiceName = finalResult.drinkName
      choiceImage = finalResult.drinkImage
      choiceInfo = finalResult.info
      console.log(choiceName)
      revealCocktail(choiceName, choiceImage, choiceInfo)
      styleAppear()
      function getLink() {
          storedLink = this.finalResult.link;
      }
      getLink();
      return choiceName;
    }
  };

