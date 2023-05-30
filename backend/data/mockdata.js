const data = [
    {
        name: "NEWater Visitor Centre",
        type: "Educational",
        link: "https://www.pub.gov.sg/Pages/NEWaterVisitorCentre.aspx",
        description: "The NEWater Visitor Centre (NVC) is an education hub that promotes water sustainability in Singapore and shares how NEWater is produced. The Centre offers a fun-filled and enriching time for visitors of all ages, with interactive tours and educational workshops.",
        openingHours: "9am - 5:30pm (Every Tuesday to Sunday, including public holidays), closed on Mondays",
        address: "20 Koh Sek Lim Rd, Singapore 486593",
        mapLink: "https://goo.gl/maps/4WDnrro6AJx4ZvqWA",
        region: "East"
    },
    {
        name: "Sustainable Singapore Gallery",
        type: "Educational",
        link: "https://www.terra.sg/ssg",
        description: "Located on the second floor of the Marina Barrage, the Sustainable Singapore Gallery is a modern and interactive gallery that provides an overview of Singapore’s sustainable development. This 1,618 square-metre gallery is organised into six zones, labelled Zone A to Zone F, each providing information about a different aspect of sustainability in Singapore. ",
        openingHours: "9am - 6pm daily (except Tuesdays), including weekends & public holidays",
        address: "8 Marina Gardens Dr, Singapore 018951", 
        mapLink: "https://goo.gl/maps/kuLPtuknEcMQEkDCA",
        region: "Central"
    }, 
    {
        name: "Climate Changed Exhibition",
        type: "Educational",
        link: "https://www.science.edu.sg/whats-on/exhibitions/climate-changed",
        description: "Presented by Science Centre Singapore and supported by the Ministry of Sustainability and the Environment, the Climate Changed exhibition features two key zones – the Climate Action Show and Guilt Trip. Through multimedia displays, interactives, and immersive gameplay, visitors can learn about climate change and hopefully be more motivated to take urgent action to stem climate change and its impacts.",
        openingHours: "10am - 5pm (Every Tuesday to Sunday), closed on Mondays except for Public Holidays and the gazetted school holidays ",
        address: "15 Science Centre Rd, Singapore 609081", 
        mapLink: "https://goo.gl/maps/SyGi2CDfEHoxMdH97",
        region: "West"
    }, 
    {
        name: "The Starry Sand Beach",
        type: "Educational",
        link: "https://www.marinabaysands.com/museum/exhibitions/the-starry-sand-beach.html",
        description: "Acclaimed artist Hsin-Chien Huang and the documentary director Nina Barbier take us on a journey over the stars and deep into the ocean in this VR scientific fairy tale where ancient beings, memories and the growing impact of climate change comes to life.",
        openingHours: "10am - 7pm daily",
        eventPeriod: "22 Apr 2023 – 30 Aug 2023",
        address: "6 Bayfront Ave, Singapore 018974", 
        mapLink: "https://goo.gl/maps/2Qv9ssch5ykyXasW6",
        region: "Central"
    },
    {
        name: "Begonias and African Violets",
        type: "Educational",
        link: "https://www.nparks.gov.sg/sbg/education/adults-individuals/june-2023",
        description: "Begonias are adored for their foliage, colours and patterns, and African violets for their blooms of clustered rosettes. Growing begonias and African violets to beautify a household or workplace can be challenging. This workshop will introduce participants to the basic culture requirements of these attractive flowering plants.",
        openingHours: "9.30am - 12.30pm",
        eventPeriod: "17 June 2023",
        address: "Singapore Botanic Gardens, Cluny Rd, 1F, 259602", 
        mapLink: "https://goo.gl/maps/XGSsHQHDGA3a2c9R9",
        region: "Central"
    },
    {
        name: "Kausmo",
        type: "Dining",
        link: "https://www.kausmo.com",
        description: " In partnership with the Les Amis Group, Kausmo is a dining concept that sparks conversations about thoughtful and conscientious ways of living. The new venture promotes thoughtful living by challenging food norms that bring about unnecessary food wastage.",
        openingHours: "6.30pm - 10.30pm (Every Tuesday to Saturday), 2pm - 5pm (Sundays), closed on Mondays",
        address: "1 Scotts Rd, #03 - 07, Singapore 228208", 
        mapLink: "https://goo.gl/maps/Qyi2QnEnv7W2TZmG9",
        region: "Central"
    },
    {
        name: "Open Farm Community",
        type: "Dining",
        link: "https://www.openfarmcommunity.com/",
        description: "Open Farm Community (OFC) is Singapore's pioneering urban farm and restaurant concept; a timely reaction to the increasing disconnect between people and their food. Acting as the missing link in the modern fabric, OFC's vision is to strengthen the understanding and respect for food and its origins. Showcasing local and regional produce like never before, our team aspires to elevate the produce of our land with an international lens.",
        openingHours: "12pm - 3pm, 6 - 11pm (Every Monday to Friday), 11am - 4pm, 6pm - 11pm (Every Saturday to Sunday)",
        address: "130E Minden Rd, Singapore 248819", 
        mapLink: "https://goo.gl/maps/uYPPgtiMWszb4qdz5",
        region: "Central"
    },
    {
        name: "At Feast",
        type: "Dining",
        link: "https://www.comodempsey.sg/restaurant/at-feast",
        description: "AT feast offers a socially responsible dining concept helping families to be together while on a mission to bring cooking (and eating) back to the centre of family life, helping children develop a passion for food from a young age through, eating cooking and sharing food experiences together. The specially curated menu offers a sumptuous selection of family favourites with a focus on fresh, nutritious, organic, sustainable cooking, catering to a wide range of dietary requirements as well as fussy little eaters.",
        openingHours: "9am - 7pm (Every Tuesday - Thursday and Sunday), 9am - 8:30pm (Every Friday and Saturday), closed on Mondays",
        address: "16A Dempsey Rd, Singapore 247695", 
        mapLink: "https://goo.gl/maps/wMxhkqM9AW2HW2gJ8",
        region: "Central"
    },
    {
        name: "Poison Ivy",
        type: "Dining",
        link: "https://bollywoodfarms.com/poison-ivy-bistro/",
        description: "Poison Ivy Bistro takes farm-to-table food back to earth with its delicious, wholesome cooking style at cheap and cheerful prices! We also use our fresh produce for value-added farm products such as our famous Banana cake; tapioca and sweet potato chips, savoury sambals and kaya. Our à la carte menu is seasonal and changes often to bring you the freshest food.",
        openingHours: "10am - 4pm (Thursday and Friday), 7am - 6 pm (Weekend), closed from Monday to Wednesday",
        location: [1.4185622774032485, 103.71651679582273],
        address: "100 Neo Tiew Rd, Singapore 719026", 
        mapLink: "https://goo.gl/maps/h99QmPdmrwqZwkkm7",
        region: "West"
    },
    {
        name: "The Sapling",
        type: "Dining",
        link: "https://thesapling.shatec.sg/",
        description: (`Unveiling The Sapling’s Sustainability Plan

        The Sapling will be progressing towards responsible consumerism and wellness by:
        
        1. Reducing Single-Use Plastic. We are eschewing single-use plastics and other non-biodegradable materials in favour of eco-friendly alternatives for takeaway/delivery.
        2. Using Sustainable Source Ingredients. We support local produce and assess our suppliers based on sustainable practices.
        3. Creating Zero Food Waste Dishes. By repurposing our ingredients through an effective menu planning system, our dishes are created to use up all edible parts.
        4. Serving Wellness Cuisines. We care for your health and aim to provide balance, nutrient-dense foods with a focus on goodness of natural ingredients on your plate.
        
        
        Dine healthy and responsibly with us today at The Sapling!`),
        openingHours: "11am - 3pm (Monday to Thursday), 11am - 3pm and 6pm to 10pm (Saturday), closed on Friday and Sunday",
        address: "21 Bukit Batok Street 22, Shatec, Singapore 659589", 
        mapLink: "https://goo.gl/maps/Lo2fQ29a2EaQjhcL7",
        region: "West"
    },

  {
        name: "Aperia Mall Level 1 Lobby A",
        type: "Recycling",
        address: "12 Kallang Ave, Singapore 339511", 
        mapLink: "https://goo.gl/maps/QgR7Ma7zhUeznj6E8",
        region: "Central"
    },
    {
        name: "Ascent Level 1 Retail Lift Lobby",
        type: "Recycling",
        address: "2 Science Park Dr, Singapore Science Park 1, 118222", 
        mapLink: "https://goo.gl/maps/g4eWsCRsWjeaqdwz9",
        region: "Central"
    },
    {
        name: "Bedok Mall B2 Linkway to MRT",
        type: "Recycling",
        address: "311 New Upper Changi Rd, Singapore 467360", 
        mapLink: "https://goo.gl/maps/dNQy4TTfPesXcfdp8",
        region: "East"
    },
    {
        name: "Bishan Sport Centre Drop Off Lobby",
        type: "Recycling",
        address: "5 Bishan Street 14, Singapore 579783", 
        mapLink: "https://goo.gl/maps/mD7Cs2Tz2ZMdHCu3A",
        region: "Central"
    },
    {
        name: "Bugis+ L1 External Walkway, facing Bugis Street",
        type: "Recycling",
        address: "201 Victoria St, Singapore 188067", 
        mapLink: "https://goo.gl/maps/Yqi2bhqrKoaE1WHBA",
        region: "Central"
    },
    {
        name: "Woodlands Sports Centre Stadium Gate 3",
        type: "Recycling",
        address: "1 Woodlands Street 13, Singapore 738597", 
        mapLink: "https://goo.gl/maps/45apALzafaretPQx8",
        region: "North"

    }

]


module.exports = {
data
}