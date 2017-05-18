const express = require('express');
const router = express.Router();
const { Games } = require('../db');
const { GameCards } = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {

    if (req.user) {

        var username = req.user.alias;

        console.log(username + ' joined the lobby');

        Games.all()
            .then(games => {
                res.render('gameLobby', { games });
            })

    } else {
        res.redirect('/');
    }

});

router.post('/', function(req, res, next) {

    var username = req.user.alias,
        gameid
    console.log('CREATING GAME')

    /*  Games.create(1)
    GameCards.newDeck(1).then(cards => {
            res.render('game', { cards });
            console.log('New Deck initalized');
        })
        .then(games => {
            var gameid = games.id;
            console.log('GAME CREATED by ' + username);
            res.redirect('game');
        })
        
*/
    Games.create(req.user.id)
        .then(game => {
            console.log('GAME CREATED by ' + username + ' with game id: ' + game.id);
            GameCards.newDeck(game.id).then(cards => {
                    res.render('game', { cards });
                    console.log('New Deck initalized');
                })
                .then(() => {
                    res.redirect('game')
                })

        })
});

module.exports = router;