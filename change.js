console.log("Change is made now for checking");

app.get(
    url + "/matri/:id",
    JwtToken.verify,
    (req,res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return badResponse(errors.array(), res);
      }
      this.serviceCtrl.getMatriById(req, res);
    }
  );

console.log("Changes happened lastime");

app.put(
    url + "/matri/:id",
    JwtToken.verify,
    (req,res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return badResponse(errors.array(), res);
      }
      this.serviceCtrl.deleteMatriPost(req, res);
    }
  );
