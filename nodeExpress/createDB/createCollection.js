//db = db.getSiblingDB('hikeSafeTest')
db = db.getSiblingDB('hikesafe')
db.createCollection('hike')
hikeCollection = db.getCollection('hike')
hikeCollection.remove({})
hikeCollection.insert(
{
    hikeId: 1,
    name: "Twin Falls",
    description: "This hike is all about the views. The route follows the Snoqualmie River and Cascade Mountain forests. And of course, there are fabulous views of Twin Falls. Along the way, lookout for salmonberries.",
    location: "WA",
    difficulty: "Easy"
})
hikeCollection.insert(
{
    hikeId: 2,
    name: "Wildside Trail",
    description: "This route is great for running if you prefer to do so. The scenery is absolutely breathtaking, but park visitors must stay on the official trails due to hazards from historical mining activities in this area.",
    location: "CA",
    difficulty: "Difficult"
})
hikeCollection.insert(
{
    hikeId: 3,
    name: "Bandera Mountain",
    description: "This one can be a little tough right at the end, but the view makes it 100% worth the challenge! Who doesn’t want gorgeous panoramic views of the Cascade Mountains? Also, be sure to bring extra water and some bug spray for this one!. ",
    location: "WA",
    difficulty: "Difficult"
})
db.createCollection('agency')
agencyCollection = db.getCollection('agency')
agencyCollection.remove({})
agencyCollection.insert(
{
	name: "TeamRescue",
    number: 1232343456,
    website: "www.teamrescue.com",
    address: "140 5th ave, Seattle WA",
    agencyId: "2",
	hikes: [1,2]
})
agencyCollection.insert(
{
	name: "911",
    number: 911,
    website: "www.911.gov",
    address: "",
    agencyId: "1",
	hikes: [1,2,3]
})
agencyCollection.insert(
{
	name: "Mountain Security",
    number: 1232343456,
    website: "www.msecurity.com",
    address: "2001 8th ave, Seattle WA",
    agencyId: "3",
	hikes: [1]
})
