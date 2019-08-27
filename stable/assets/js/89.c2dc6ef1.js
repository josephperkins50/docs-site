(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{409:function(e,t,a){"use strict";a.r(t);var n=a(15),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installing-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing plug-ins")]),e._v(" "),a("p",[e._v("Use commands in the plugins command group to install and manage plug-ins for Zowe CLI.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v(" Plug-ins can gain control of your CLI application\nlegitimately during the execution of every command. Install third-party\nplug-ins at your own risk. We make no warranties regarding\nthe use of third-party plug-ins.")]),e._v(" "),a("p",[e._v("You can install the following plug-ins:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("IBM CICS Plug-in for Zowe CLI")])]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("@brightside/cics@lts-incremental")]),e._v(" in your command syntax to install, update, and validate the plug-in.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("IBM Db2 Database for Zowe CLI")])]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("@brightside/db2@lts-incremental")]),e._v(" in your command syntax to install, update, and validate the plug-in.")])])]),e._v(" "),a("h2",{attrs:{id:"setting-the-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting the registry")]),e._v(" "),a("p",[e._v("If you installed Zowe CLI from the bundle distributed with the Zowe PAX media, proceed to the "),a("a",{attrs:{href:"#installing-plug-ins"}},[e._v("Install step")]),e._v(".")]),e._v(" "),a("p",[e._v("If you installed Zowe CLI from an online registry, confirm that NPM is set to target the registry by issuing the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])]),a("h2",{attrs:{id:"meeting-the-software-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meeting-the-software-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Meeting the software requirements")]),e._v(" "),a("p",[e._v("Ensure that you meet the software requirements for a plug-in before you install\nthe plug-in to Zowe CLI. For information related to each plug-in,\nsee "),a("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for Zowe CLI plug-ins")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"installing-plug-ins-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing plug-ins")]),e._v(" "),a("p",[e._v("Issue an "),a("code",[e._v("install")]),e._v("command to install plug-ins to Zowe CLI. The\n"),a("code",[e._v("install")]),e._v(" command contains the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install [plugin...] [--registry <registry>]\n")])])]),a("ul",[a("li",[a("p",[a("strong",[a("code",[e._v("[plugin...]")])]),a("br"),e._v("\n(Optional) Specifies the name of a plug-in, an npm package, or a\npointer to a (local or remote) URL. When you do not specify a\nplug-in version, the command installs the latest plug-in version and\nspecifies the prefix that is stored in npm save-prefix. For more\ninformation, see "),a("a",{attrs:{href:"https://docs.npmjs.com/misc/config#save-prefix",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm save prefix"),a("OutboundLink")],1),e._v(". For more\ninformation about npm semantic versioning, see "),a("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm semver"),a("OutboundLink")],1),e._v(". Optionally, you can\nspecify a specific version of a plug-in to install. For example, "),a("code",[e._v("zowe plugins install pluginName@^1.0.0")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" You can install multiple plug-ins with one command. For\nexample, issue "),a("code",[e._v("zowe plugins install plugin1 plugin2 plugin3")])])]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("[--registry <registry>]")])]),a("br"),e._v("\n(Optional) Specifies a registry URL from which to install a plug-in\nwhen you do not use "),a("code",[e._v("npm config set")]),e._v(" to set the registry initially.")])])]),e._v(" "),a("p",[a("strong",[e._v("Examples: Install plug-ins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The following example illustrates the syntax to use to install a\nplug-in that is distributed with the zowe-cli-bundle.zip.\nIf you are using zowe-cli-bundle.zip, issue the following command for each plug-in .tgz file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install ./zowe-cli-cics.tgz \n")])])])]),e._v(" "),a("li",[a("p",[e._v('The following example illustrates the syntax to use to install a\nplug-in that is named "my-plugin" from a specified registry:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install @brightside/my-plugin@lts-incremental\n")])])])]),e._v(" "),a("li",[a("p",[e._v('The following example illustrates the syntax to use to install a\nspecific version of "my-plugins"')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' zowe plugins install @brightside/my-plugin@"^1.2.3"\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"validating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating plug-ins")]),e._v(" "),a("p",[e._v("Issue the plug-in validation command to run tests against all plug-ins (or against a plug-in that you specify) to verify that the plug-ins integrate properly with Zowe CLI. The tests confirm that the plug-in does not conflict with existing command groups in the base application. The command response provides you with details or error messages about how the plug-ins integrate with Zowe CLI.")]),e._v(" "),a("p",[e._v("Perform validation after you install the plug-ins to help ensure that it integrates with Zowe CLI.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("validate")]),e._v(" command has the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate [plugin]\n")])])]),a("ul",[a("li",[a("strong",[a("code",[e._v("[plugin]")])]),a("br"),e._v("\n(Optional) Specifies the name of the plug-in that you want to\nvalidate. If you do not specify a plug-in name, the command\nvalidates all installed plug-ins. The name of the plug-in is not\nalways the same as the name of the NPM package.")])]),e._v(" "),a("p",[a("strong",[e._v("Examples: Validate plug-ins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The following example illustrates the syntax to use to validate a\nspecified installed plug-in:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate @brightside/my-plugin\n")])])])]),e._v(" "),a("li",[a("p",[e._v("The following example illustrates the syntax to use to validate all\ninstalled plug-ins:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"updating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating plug-ins")]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("update")]),e._v(" command to install the latest version or a specific\nversion of a plug-in that you installed previously. The "),a("code",[e._v("update")]),e._v(" command\nhas the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins update [plugin...] [--registry <registry>]\n")])])]),a("ul",[a("li",[a("p",[a("strong",[a("code",[e._v("[plugin...]")])])]),e._v(" "),a("p",[e._v("Specifies the name of an installed plug-in that you want to update.\nThe name of the plug-in is not always the same as the name of the\nNPM package. You can use npm semantic versioning to specify a\nplug-in version to which to update. For more information,\nsee "),a("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm semver"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("[--registry <registry>]")])])]),e._v(" "),a("p",[e._v("(Optional) Specifies a registry URL that is different from the\nregistry URL of the original installation.")])])]),e._v(" "),a("p",[a("strong",[e._v("Examples: Update plug-ins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The following example illustrates the syntax to use to update an\ninstalled plug-in to the latest version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins update @brightside/my-plugin@lts-incremental\n")])])])]),e._v(" "),a("li",[a("p",[e._v("The following example illustrates the syntax to use to update a\nplug-in to a specific version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('zowe plugins update @brightside/my-plugin@"^1.2.3"\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"uninstalling-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Uninstalling plug-ins")]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("uninstall")]),e._v(" command to uninstall plug-ins from a base\napplication. After the uninstall process completes successfully,\nthe product no longer contains the plug-in\nconfiguration.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" The command is equivalent to using "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/uninstall",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm uninstall"),a("OutboundLink")],1),e._v(" to uninstall a package.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("uninstall")]),e._v(" command contains the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins uninstall [plugin]\n")])])]),a("ul",[a("li",[a("strong",[a("code",[e._v("[plugin]")])]),a("br"),e._v("\nSpecifies the plug-in name to uninstall.")])]),e._v(" "),a("p",[a("strong",[e._v("Example: Uninstall plug-ins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The following example illustrates the syntax to use to uninstall a plug-in:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins uninstall @brightside/my-plugin\n")])])])])])])},[],!1,null,null,null);t.default=s.exports}}]);