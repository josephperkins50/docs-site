(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{313:function(e,t,r){e.exports=r.p+"assets/img/SampleMicroservesLook.14044143.png"},424:function(e,t,r){"use strict";r.r(t);var s=r(15),i=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"provide-liberty-api-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provide-liberty-api-sample","aria-hidden":"true"}},[e._v("#")]),e._v(" Provide Liberty API Sample")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Github Sample Repo:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("rest-api-jzos sample"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("This sample is a boilerplate for creating Rest API's using a liberty. For more information, visit "),s("router-link",{attrs:{to:"/extend/extend-api/libertyAPI.html"}},[e._v("Creating a RestAPI with Swagger documentation using Liberty")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-install","aria-hidden":"true"}},[e._v("#")]),e._v(" To Install")]),e._v(" "),s("p",[e._v("After creating or obtaining the REST API war file:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Stop the Zowe server.")]),e._v(" "),s("ul",[s("li",[e._v("Navigate to "),s("code",[e._v("<zowe_base>/scripts/")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("./zowe-stop.sh")])])])]),e._v(" "),s("li",[s("p",[e._v("Push the war file up to the dropins folder using SCP, SFTP, or on Windows with Putty SCP (PSCP).")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("EX")]),e._v(":\n"),s("code",[e._v("scp /path/to/warfile <usrID>@<serverLocation>:<zowe_base>/explorer-server/wlp/usr/servers/Atlas/dropins/")])])])])]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[e._v("Use the USS, IDZ, or IBM Explorer for z/OS to confirm that your files have transferred.")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("Restart the Zowe server.")]),e._v(" "),s("ul",[s("li",[e._v("Navigate to "),s("code",[e._v("<zowe_base>/scripts/")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("./zowe-start.sh")])])])])]),e._v(" "),s("h2",{attrs:{id:"verify-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-install","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify Install")]),e._v(" "),s("ol",[s("li",[e._v("Check the Browser to see if the REST APIs have been added.\n"),s("ul",[s("li",[s("em",[e._v("EX")]),e._v(": "),s("code",[e._v("<base>:<yourport>/ibm/api/explorer/#/")])])])])]),e._v(" "),s("img",{attrs:{src:r(313),alt:"view",align:"center/"}}),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[e._v("Make sure to set file transfer mode to binary before the transfer.\nAfter transferring the WAR file, check the permission on the file by running\nls -la\nIf the read permission is not set, turn on the read permission by running,\nchmod +r javazos-sample.war")])])])},[],!1,null,null,null);t.default=i.exports}}]);