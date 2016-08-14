import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import Store from "../imports/ui/Store.jsx";
import Home from "../imports/ui/Home.js";

//console.log(Store);

Meteor.startup(() => {
    render(<Store />, document.getElementById("App"));
});
