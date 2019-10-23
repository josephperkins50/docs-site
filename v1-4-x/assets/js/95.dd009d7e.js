(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{410:function(e,o,t){"use strict";t.r(o);var r=t(15),n=Object(r.a)({},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-node-js-on-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-z-os","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Node.js on z/OS")]),e._v(" "),t("p",[e._v("Installing Zowe requires Node.js version 6.14.4.1 or later to be installed on the z/OS host where you install the Zowe Application Server.")]),e._v(" "),t("h2",{attrs:{id:"how-to-obtain-ibm-sdk-for-node-js-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-obtain-ibm-sdk-for-node-js-z-os","aria-hidden":"true"}},[e._v("#")]),e._v(" How to obtain IBM SDK for Node.js - z/OS")]),e._v(" "),t("p",[e._v("You can obtain IBM SDK for Node.js - z/OS for free in one of the following ways:")]),e._v(" "),t("ul",[t("li",[e._v("Order the SMP/E version through your IBM representative for production use")]),e._v(" "),t("li",[e._v("Use the pax evaluation for non-production deployments")])]),e._v(" "),t("p",[t("strong",[e._v("Known issue:")]),e._v(" There is a known issue with node v8.16.1 and Zowe desktop encoding. See "),t("a",{attrs:{href:"https://github.com/ibmruntimes/node/issues/142",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ibmruntimes/node/issues/142"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("p",[t("strong",[e._v("Workaround:")]),e._v(" Use node v8.16.0 which is available at "),t("a",{attrs:{href:"https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos"),t("OutboundLink")],1),e._v(". Download the "),t("code",[e._v("ibm-trial-node-v8.16.0-os390-s390x.pax.Z")]),e._v(" file.")]),e._v(" "),t("h2",{attrs:{id:"hardware-and-software-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-and-software-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware and software requirements")]),e._v(" "),t("p",[t("strong",[e._v("Hardware:")])]),e._v(" "),t("p",[e._v("IBM zEnterprise® 196 (z196) or newer")]),e._v(" "),t("p",[t("strong",[e._v("Software:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Node.js version 6 (see "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSTRRS_6.0.0/com.ibm.nodejs.zos.v6.doc/plan.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center"),t("OutboundLink")],1),e._v(" for all prerequisites):")]),e._v(" "),t("ul",[t("li",[e._v("z/OS V2R2 with PTF UI46658 or z/OS V2R3")])])]),e._v(" "),t("li",[t("p",[e._v("Node.js v8 (see "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSTRRS_8.0.0/com.ibm.nodejs.zos.v8.doc/smpe.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center"),t("OutboundLink")],1),e._v(" for all prerequisites):")]),e._v(" "),t("ul",[t("li",[e._v("z/OS 2.2: PTFs UI62788, UI46658, UI62416 (APARs PH10606, PI79959, PH10740)")]),e._v(" "),t("li",[e._v("z/OS 2.3: PTFs UI61308, UI61376 and UI61747 (APARs PH07107, PH08353 and PH09543)")])])]),e._v(" "),t("li",[t("p",[e._v("z/OS UNIX System Services enabled")])]),e._v(" "),t("li",[t("p",[e._v("Integrated Cryptographic Service Facility (ICSF) configured and started.")])])]),e._v(" "),t("h2",{attrs:{id:"installing-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Node.js")]),e._v(" "),t("p",[e._v("The following section summarizes the required configuration steps for "),t("strong",[e._v("installing the pax evaluation version of Node.js - z/OS")]),e._v(" to run Zowe.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Download the pax.Z file from the "),t("a",{attrs:{href:"https://developer.ibm.com/node/sdk/ztp/#downloads-ztp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" section to a z/OS machine.")])]),e._v(" "),t("li",[t("p",[e._v("Extract the pax.Z file inside an installation directory of your choice. For example:")]),e._v(" "),t("p",[t("code",[e._v("pax -rf <path_to_pax.Z_file> -x pax")])])]),e._v(" "),t("li",[t("p",[e._v("Add the full path of your installation directory to your PATH environment variable:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export PATH=<installation_directory>/bin/:$PATH\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the following command from the command line to verify the installation.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node --version\n")])])]),t("p",[e._v("If Node.js is installed, the version of Node.js is displayed.")])]),e._v(" "),t("li",[t("p",[e._v("After you install Node.js, set the "),t("em",[e._v("NODE_HOME")]),e._v(" environment variable to the directory where Node.js is installed. For example, "),t("code",[e._v("NODE_HOME=/proj/mvd/node/installs/node-v6.14.4-os390-s390x")]),e._v(".")])])]),e._v(" "),t("p",[e._v("To troubleshoot or read more information, see the "),t("a",{attrs:{href:"https://developer.ibm.com/node/sdk/ztp/#documentation-ztp",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation for IBM SDK for Node.js - z/OS"),t("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);o.default=n.exports}}]);