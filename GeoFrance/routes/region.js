module.exports = {
    regionPage: (req, res) => {
        /*let regionId = req.params.IdRegion;
        console.log(regionId);*/
        let query = "SELECT Region.NomRegion FROM Region WHERE Region.IdRegion = 1";

        conn.query(query, (err, result) => {
            if (err) res.redirect("/");
            res.render("region.ejs", {
                info: result
            });
        });
    }
};