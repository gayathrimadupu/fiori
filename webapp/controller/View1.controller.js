sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Jsonmodel) {
        "use strict";

        return Controller.extend("bindings.controller.View1", {
            onInit: function (eve) {
                // debugger;
               const person = {
                Student: {
                    name: "Gayathri",
                    age: "24"
                },
                address: {
                    homeTown: "Mancherial",
                    state: "Telangana",
                    country: "India"
                },
            }
           const person2 = {
                Student: {
                    name: "Savithri",
                    age: "80"
                },
                address: {
                    homeTown: "Mncl",
                    state: "TG",
                    country: "Ind"
                },
            }
           const oMyJson = new Jsonmodel(person);
           const oMyJson2 = new Jsonmodel(person2)
          this.getView().setModel(oMyJson);    // last change give another model
          // this.getView().setModel(oMyJson2,"secondModel");   
        //    console.log(oMyJson);
        //   console.log(oMyJson2);


            }
        });
    });
