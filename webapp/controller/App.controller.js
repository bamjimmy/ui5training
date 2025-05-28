sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  function (Controller) {
    "use strict";

    return Controller.extend("sap.ui5training.controller.App", {

      onInit: function () {
        // Initialization code can go here
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      },

      onAfterRendering: function () {
        // Code to execute after the view has been rendered
      },

      onExit: function () {
        // Cleanup code can go here
      }

    });
  });