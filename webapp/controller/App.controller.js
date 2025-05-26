sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
],
  function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sap.ui5training.controller.App", {

      onSayHello: function () {
        MessageBox.information("Hello World");
      }

    });
  });