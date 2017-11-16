Journal.destroy_all
Post.destroy_all
happy = Journal.new({
    name: "A happy day",
    description: "Today, I feel happy, heres a photo to prove it",
    posts: [
        Post.create({
            title: "look at how happy I look",
            content: "tehee",
            photo_url: "http://fillmurray.com/200/200",
        }),
        Post.create({
            title:"This one is not so much",
            content: "whoa",
            photo_url:"http://fillmurray.com/200/200",
        }),
        Post.create({
            title:"I dont like today",
            content: "gross",
            photo_url: "http://fillmurray.com/200/200",
        })]
})
happy.save
sad = Journal.new({
     name: "A sad",
     description: " bohoo",
     posts: [
         Post.create({
             title: " look how sad I be",
             content: "tears",
             photo_url: "http://fillmurray.com/200/200",
         }), Post.create({
            title: " Oh the angst",
            content: "yup",
            photo_url: "http://fillmurray.com/200/200",
                emotion: [
                    Emotion.create!({
                        "anger": 0.037,
                        "contempt": 0.001,
                        "disgust": 0.015,
                        "neutral": 0.001,
                        "sadness": 0.0,
                    })
                   
            ]
        })]
})
sad.save