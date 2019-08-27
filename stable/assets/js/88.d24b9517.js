(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{411:function(e,t,o){"use strict";o.r(t);var n=o(15),i=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI")]),e._v(" "),o("p",[e._v("Install Zowe CLI on your computer. You can learn about new CLI features in the "),o("router-link",{attrs:{to:"/getting-started/summaryofchanges.html"}},[e._v("Release notes")]),e._v(" or read about overall CLI functionality in the "),o("router-link",{attrs:{to:"/getting-started/overview.html"}},[e._v("Zowe overview")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" If you are familiar with command-line tools and want to get started using Zowe CLI quickly, see "),o("router-link",{attrs:{to:"/getting-started/cli-getting-started.html"}},[e._v("Zowe CLI quick start")])],1),e._v(" "),o("h2",{attrs:{id:"methods-to-install-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#methods-to-install-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods to install Zowe CLI")]),e._v(" "),o("p",[e._v("Use one of the following methods to install Zowe CLI.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#installing-zowe-cli-from-a-local-package"}},[e._v("Installing Zowe CLI from a local package")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-zowe-cli-from-an-online-registry"}},[e._v("Installing Zowe CLI from an online registry")])])]),e._v(" "),o("p",[e._v("If you encounter problems when you attempt to install Zowe CLI, see "),o("router-link",{attrs:{to:"/troubleshoot/cli/troubleshoot-cli.html"}},[e._v("Troubleshooting Zowe CLI")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"installing-zowe-cli-from-a-local-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-a-local-package","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI from a local package")]),e._v(" "),o("p",[e._v("If you do not have internet access at your site, use the following method to install Zowe CLI from a local package.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Ensure that the following prerequisite software is installed on your computer:")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("Node.js V8.0 or later")]),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Node Package Manager V5.0 or later")])]),e._v(" "),o("p",[e._v("npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify that npm is installed.")])])])]),e._v(" "),o("li",[o("p",[e._v("Obtain the installation files. From the Zowe "),o("a",{attrs:{href:"https://zowe.org/#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),o("OutboundLink")],1),e._v(" website, click "),o("strong",[e._v("Zowe Command Line Interface")]),e._v(" to download the Zowe CLI installation package named "),o("code",[e._v("zowe-cli-package-*v*.*r*.*m*.zip")]),e._v(" to your computer.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")])]),e._v(" "),o("ul",[o("li",[o("em",[e._v("v")]),e._v(" indicates the version")]),e._v(" "),o("li",[o("em",[e._v("r")]),e._v(" indicates the release number")]),e._v(" "),o("li",[o("em",[e._v("m")]),e._v(" indicates the modification number")])])]),e._v(" "),o("li",[o("p",[e._v("Open a command line window such as Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation package (.zip file). Issue the following command to unzip the files:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("unzip zowe-cli-package-v.r.m.zip\n")])])]),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("unzip zowe-cli-package-1.0.1.zip\n")])])]),o("p",[e._v("By default, the unzip command extracts the contents of the zip file to the directory where you downloaded the .zip file. You can extract the contents of the zip file to your preferred location.")]),e._v(" "),o("p",[o("strong",[e._v("Optional:")]),e._v(" Double-click the Zowe CLI installation package to extract its contents into the directory where you downloaded the package. (Windows and Mac computers contain built-in software that lets you extract .zip files into a preferred location.)")])]),e._v(" "),o("li",[o("p",[e._v("Issue the following command against the extracted directory to install Zowe CLI on your computer:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g zowe-cli.tgz \n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" On Linux, you might need to prepend "),o("code",[e._v("sudo")]),e._v(" to your "),o("code",[e._v("npm")]),e._v(" commands so that you can issue the install and uninstall commands. For more information, see "),o("router-link",{attrs:{to:"/troubleshoot/cli/troubleshoot-cli.html"}},[e._v("Troubleshooting Zowe CLI")]),e._v(".")],1),e._v(" "),o("p",[e._v("Zowe CLI is installed on your computer. See "),o("router-link",{attrs:{to:"/user-guide/cli-installplugins.html"}},[e._v("Installing Plug-ins")]),e._v(" for information about the commands for installing plug-ins from the package.")],1)]),e._v(" "),o("li",[o("p",[e._v("(Optional) Create a "),o("code",[e._v("zosmf")]),e._v(" profile so that you can issue commands that communicate with z/OSMF. For information about how to create a profile, see "),o("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#creating-zowe-cli-profiles"}},[e._v("Creating Zowe CLI profiles")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" Profiles are a Zowe CLI feature that let you store configuration information for use on multiple commands. You can create a profile that contains your username, password, and connection details for a particular mainframe system, then reuse that profile to avoid typing it again on every command.")])])]),e._v(" "),o("p",[e._v("After you install and configure Zowe CLI, you can issue the "),o("code",[e._v("zowe --help")]),e._v(" command to view a list of available commands. For information about how to connect the CLI to the mainframe (using command-line options, user profiles, or environment variables), see "),o("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#defining-zowe-cli-connection-details"}},[e._v("Defining CLI connection details")]),e._v(". You can also "),o("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#testing-zowe-cli-connection-to-z-osmf"}},[e._v("test your connection to z/OSMF")]),e._v(" with or without a profile.")],1),e._v(" "),o("h3",{attrs:{id:"installing-zowe-cli-from-an-online-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-an-online-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI from an online registry")]),e._v(" "),o("p",[e._v("If your computer is connected to the Internet, you can use the following method to install Zowe CLI from an npm registry.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Ensure that the following required software is installed on your computer:")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("Node.js V8.0 or later")]),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Node Package Manager V5.0 or later")])]),e._v(" "),o("p",[e._v("npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify that npm is installed.")])])])]),e._v(" "),o("li",[o("p",[e._v("Issue the following command to set the registry to the Zowe CLI scoped package. In addition to setting the scoped registry, your default registry must be set to an npm registry that includes all of the dependencies for Zowe CLI, such as the global npm registry:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Issue the following command to install Zowe CLI from the registry:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g @brightside/core@lts-incremental\n")])])])]),e._v(" "),o("li",[o("p",[e._v("(Optional) To install all available plug-ins to Zowe CLI, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install @brightside/cics@lts-incremental\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" The IBM Db2 plug-in requires additional configuration. For more information about how to install multiple plug-ins, update to a specific version of a plug-in, and install from specific registries, see "),o("router-link",{attrs:{to:"/user-guide/cli-installplugins.html"}},[e._v("Installing plug-ins")]),e._v(".")],1)])]),e._v(" "),o("p",[e._v("After you install and configure Zowe CLI, you can issue the "),o("code",[e._v("zowe --help")]),e._v(" command to view a list of available commands. For information about how to connect the CLI to the mainframe (using command-line options, user profiles, or environment variables), see "),o("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#defining-zowe-cli-connection-details"}},[e._v("Defining CLI connection details")]),e._v(". You can also "),o("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#testing-zowe-cli-connection-to-z-osmf"}},[e._v("test your connection to z/OSMF")]),e._v(" with or without a profile.")],1)])},[],!1,null,null,null);t.default=i.exports}}]);