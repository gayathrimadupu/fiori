sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Jsonmodel) {
        "use strict";

        return Controller.extend("elementbinding.controller.View1", {
            onInit: function () {

            },
            onSubmitData: function(){
                const Actors = this.getView().getModel().getProperty("/Actors/0")
                console.log(Actors);
             }
        });
    });
