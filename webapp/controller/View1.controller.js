sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel ) {
        "use strict";

        return Controller.extend("com.app.project1.controller.View1", {
            onInit: function () {
                // const oPersonp = {
                //  Name: "savithri",
                // }
                // const oPerson = {
                //     employee: {
                //         EmployeeName: "Gayathri",
                //         EmployeeAge: 24,
                //         ContractStarted: new Date(),
                //         Email: "gayathri@gmail.com"
                //     }

                // }
                // const oJsonModel = new JSONModel(oPerson);
                // this.getView().setModel(oJsonModel);

            },
            
        });
    });
