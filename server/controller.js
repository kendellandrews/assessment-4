const fortune = ["Great job on that thing you did.", "Really super." ,
"You have really really nice programming skills." ,
"You make an excellent human." , "You da best"];

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
      
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortune)
    },

    addFortune: (req, res) => {
        let {item} = req.body
        fortune.push(item)

        res.status(200).send(fortune)
    },

    deleteFortunes: (req, res) => {
        let index = req.params.id
        fortune.splice(index, 1)

        res.status(200).send(fortune)
    },

}
