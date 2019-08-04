module.exports = {
    HomePage: (req, res) => {
        let query="SELECT * FROM Region INNER JOIN Ville ON Ville.IdRegion = Region.IdRegion WHERE Ville.ChefLieuRegion is TRUE";

        // execute query
        conn.query(query, (err,result)=>{
            if(err) res.redirect("/");
            res.render("index.ejs", {
                regions: result
            });
        });
    }
};