app.post(
      url + "/surprise/list",
      Validation.SurprisePackageApiValidation,
      (req: Request, res: Response) => {
        this.serviceCtrl.getAllSurprisePackage(req, res);
      }
    );

console.log("Change is made now for checking");
console.log("Changes happened lastime");

app.get(
      url + "/reference",
      (req: Request, res: Response) => {
        this.serviceCtrl.getReference(req, res);
      }
    );
