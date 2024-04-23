sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("expressionbinding.controller.View1", {
            onInit: function () {

            },
            onSubmitData: function (eve) {
                debugger
                const Actors = this.getView().getModel().setProperty("/Actors/1")
                console.log(Actors);
            }
        });
    });
