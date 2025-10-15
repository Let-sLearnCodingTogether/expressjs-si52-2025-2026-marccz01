export const publicProfileson = (req, res) => {
    const username = req.params.username
    res.render('public-profileSon', {
        title : username,
        username : username, 
        bio : "Hiduplah Seperti Chinese Fine Shyt"
    })
}