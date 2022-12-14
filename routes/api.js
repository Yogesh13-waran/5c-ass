const express = require('express');
const router = express.Router();
const https = require('https');


router.get('/github/userinfo/:user', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    } 
    console.log("done")
 https.get(options, function (apiResponse) {
       apiResponse.pipe(res)

    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})


// router.get('/github/repoinfo/:user/:reponame', async function (req, res) {
//     const user = req.params.user;
//     const reponame = req.params.reponame;
//     const options = {
//         hostname: 'api.github.com',
//         path: '/repos/' + user + '/' + reponame,
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
//         },
//         OAUth: "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"
//     }
//     https.get(options, function (apiResponse) {
//         apiResponse.pipe(res);
//     }).on('error', (e) => {
//         console.log(e);
//         res.status(500).send('Something wnent wrong!');
//     })
// })

// router.get('/github/commitinfo/:user/:reponame', async function (req, res) {
//     const user = req.params.user;
//     const reponame = req.params.reponame;
//     const options = {
//         hostname: 'api.github.com',
//         path: '/repos/' + user + '/' + reponame + '/commits',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
//         },
//         OAUth: "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"
//     }
//     https.get(options, function (apiResponse) {
//         apiResponse.pipe(res);
//     }).on('error', (e) => {
//         console.log(e);
//         res.status(500).send('Something wnent wrong!');
//     })
// })

module.exports = router;