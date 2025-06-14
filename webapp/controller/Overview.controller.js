sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/syncStyleClass",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, syncStyleClass, JSONModel) {
        "use strict";

        return Controller.extend("sap.ui5training.controller.Overview", {
            onInit: function () {
  // Create a JSON model and set it to the view
    var oModel = new JSONModel();
    this.getView().setModel(oModel, "customer");    
            },


    onSave: function () {
  if (!this.pDialog) {
    this.pDialog = this.loadFragment({
      name: "sap.ui5training.view.Dialog"
    }).then(function (oDialog) {
      syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
      return oDialog;
    }.bind(this));
  }
  this.pDialog.then(function (oDialog) {
    oDialog.open();
  });
},

onCloseDialog: function () {
  this.byId("dialog").close();
},

onCustomerChange: function (oEvent) {
 debugger;
  //var oSelectedItem = oEvent.getParameter("listItem");
  //var oBindingContext = oSelectedItem.getBindingContext();
 var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
  this.byId("bookingTable").setBindingContext(oBindingContext);
  //var oBookingTable = this.byId("bookingTable");
   //oBookingTable.setBindingContext(oBindingContext);
}
        });
    });
