Journal.destroy_all
Post.destroy_all
happy = Journal.create!({
    name: "A happy day",
    description: "Today, I feel happy, heres a photo to prove it",
})
 happyPost1 = Post.create!({
            title: "look at how happy I look",
            content: "tehee",
            photo_url: "http://fillmurray.com/200/200",
            journal: happy
        })
happyPost1Emotion = Emotion.create!({
        anger: 0.0,
        contempt: 0.0,
        disgust: 0.0,
        fear: 0.0,
        happiness: 0.87,
        neutral: 0.06,
        sadness: 0.0,
        suprise: 0.005,
        post: happyPost1
    })

HappyPost2= Post.create!({
            title:"This one is not so much",
            content: "whoa",
            photo_url:"http://fillmurray.com/200/200",
            journal: happy
})
happyPost2Emotion = Emotion.create!({
                anger: 0,
                contempt: 0,
                disgust: 0,
                fear: 0,
                happiness: 0,
                neutral: 0.986,
                sadness: 0.89,
                suprise: 0.005,
                post: HappyPost2
        })
happyPost = Post.create({
            title:"I dont like today",
            content: "gross",
            photo_url: "http://fillmurray.com/200/200",
            journal: happy
    })
 happyPostEmotion = Emotion.create!({
                    anger: 0.0,
                    contempt:0.0,
                    disgust: 0.0,
                    fear: 0.0,
                    happiness: 0.0,
                    neutral: 0.986,
                    sadness: 0.009,
                    suprise: 0.005,
                    post: happyPost
})
happy.save
sad = Journal.create!({
     name: "A sad",
     description: " bohoo",
    })
sadPost1 = Post.create!({
             title: " look how sdad I be",
             content: "tears",
             photo_url: "http://fillmurray.com/200/200",
             journal: sad
         })
sadPost1Emotion = Emotion.create!({
                    anger: 0,
                    contempt: 0,
                    disgust: 0,
                    fear: 0,
                    happiness: 0,
                    neutral: 0.986,
                    sadness: 0.89,
                    suprise: 0.005,
                    post: sadPost1
})
sadPost2 = Post.create!({
            title: " Oh the angst",
            content: "yup",
            photo_url: "http://fillmurray.com/200/200",
            journal: sad
 })
sadPost2Emotion = Emotion.create!({
            anger: 0.037,
            contempt: 0.001,
            disgust: 0.015,
            neutral: 0.001,
            sadness: 0.0, 
            happiness: 0.45,
            fear: 0.91,
            post: sadPost2                   
        }) 

# sadPost2.emotions.push(sadPost2Emotion)
# sadPost2.save
# sad.posts.push(sadPost1)
# sad.posts.push(sadPost2)       

sad.save


# ± |master → origin ✓| → rails g modeel Emotion anger:float contempt:float disgust:float sadness:float neutral:float neutral:float suprise:float
# ± |master → origin U:2 ?:3 ✗| → rails g migration AddEmotionsToPosts emotions:references