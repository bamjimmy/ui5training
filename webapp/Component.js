
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",

],
    function (UIComponent, Device) {
        "use strict";

        return UIComponent.extend("sap.ui5training.Component", {

metadata: {
            manifest: "json"
        },
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // additional initialization can be done here
                // e.g., routing, models, etc.
            },
            getContentDensityClass: function () {
                if(!this._sContentDensityClass) {
                    if(Device.support.touch) {
                        this._sConentDensityClass = "sapUiSizeCozy";
                    } else {
                        this._sContentDensityClass = "sapUiSizeCompact";
                    }
                }
                // return "sapUiSizeCompact" or "sapUiSizeCozy" based on the device
                return this._sContentDensityClass;
            }


        });
    }
);