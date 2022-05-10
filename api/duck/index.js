var qs = require('qs');

module.exports = async function (context, req) {
    //console.log(req);
    const parsedData = qs.parse(req.rawBody);
    const duck_id = req.query.duck_id ? req.query.duck_id : parsedData.duck_id;

    if (duck_id) {
        const redirect_url = '/duck/' + duck_id
        console.log("Redirecting to: " + redirect_url)
        context.res.status(302)
        context.res.header('Location', redirect_url);
    } else {
    context.res = {
        body: 'duck_id is not defined'
      };
    }
};
