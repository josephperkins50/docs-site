(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{497:function(e,t,a){"use strict";a.r(t);var i=a(3),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-zowe-certificates-in-a-key-ring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-zowe-certificates-in-a-key-ring"}},[e._v("#")]),e._v(" Configuring Zowe certificates in a key ring")]),e._v(" "),a("p",[e._v("Zowe is able to work with certificates held in a "),a("strong",[e._v("z/OS Keyring")]),e._v(".  For background on Zowe certificates, see "),a("router-link",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(". To configure Zowe certificates in a key ring, run the "),a("code",[e._v("ZWEKRING")]),e._v(" JCL that contains the security commands to create the key ring and manage the certificates that Zowe will use. The "),a("code",[e._v("ZWEKRING")]),e._v(" JCL is provided as part of the PDS sample library "),a("code",[e._v("SZWESAMP")]),e._v(" that is delivered with Zowe.")],1),e._v(" "),a("p",[e._v("Before you submit the JCL, you must "),a("a",{attrs:{href:"#customizing-the-zwekring-jcl"}},[e._v("customize it")]),e._v(" and review it with a system programmer who is familiar with z/OS certificates and key rings. The JCL member contains commands for three z/OS security managers: RACF, TopSecret, and ACF/2.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ZWEKRING")]),e._v(" JCL contains commands for the following scenarios:")]),e._v(" "),a("ul",[a("li",[e._v("Creation of a local CA which is used to sign a locally generated certificate, both of which are placed into the key ring.")]),e._v(" "),a("li",[e._v("("),a("strong",[e._v("Beta")]),e._v(") Importing an existing certificate already held in z/OS to the key ring for use by Zowe.")]),e._v(" "),a("li",[e._v("("),a("strong",[e._v("Beta")]),e._v(") Creation of a locally generated certificated and signing it with an existing certificate authority, and placing the certificate into the key ring.")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The scenarios marked "),a("strong",[e._v("Beta")]),e._v(" are provided for technical preview.  If you have any feedback on using key rings, create an issue in the Zowe community repo at "),a("a",{attrs:{href:"https://github.com/zowe/community",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/zowe/community"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("After you run the "),a("code",[e._v("ZWEKRING")]),e._v(" JCL, a key ring that contains the Zowe certificate is created.  In order for a Zowe instance to work with the keystore certificate, you also need to create a USS keystore directory.  This USS keystore directory does not contain any certificates, but is required for the Zowe "),a("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration.html"}},[e._v("instance.env")]),e._v(" file to configure the Zowe shell correctly so that the keystore certificate can be located by the Zowe runtime.")],1),e._v(" "),a("p",[e._v("To create the USS keystore directory after successfully running "),a("code",[e._v("ZWEKRING")]),e._v(" JCL member, run the script "),a("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.sh")]),e._v(". This script has an input parameter "),a("code",[e._v("-p")]),e._v(" which specifies the location of a configuration file controlling how and where the directory and its contents are created.  Copy the file "),a("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.env")]),e._v(" to a writeable location and review and edit its contents to match property values used in "),a("code",[e._v("ZWEKRING")]),e._v(" JCL member.  Then, run the script by using the following command:")]),e._v(" "),a("div",{staticClass:"language-.sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe-setup-certificates.sh -p <path to zowe-setup-keyring-certificates.env>\n")])])]),a("h2",{attrs:{id:"customizing-the-zwekring-jcl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-zwekring-jcl"}},[e._v("#")]),e._v(" Customizing the ZWEKRING JCL")]),e._v(" "),a("p",[e._v("To customize the "),a("code",[e._v("ZWEKRING")]),e._v(" JCL, edit the JCL variables at the beginning of the JCL and carefully review and edit all the security commands that are valid for your security manager. Review the information in this section when you customize the JCL.")]),e._v(" "),a("h3",{attrs:{id:"product-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-variable"}},[e._v("#")]),e._v(" "),a("code",[e._v("PRODUCT")]),e._v(" variable")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("PRODUCT")]),e._v(" variable specifies the z/OS security manager.  The default value is "),a("code",[e._v("RACF")]),e._v(". Change the value to "),a("code",[e._v("ACF2")]),e._v(" or "),a("code",[e._v("TSS")]),e._v(" if you are using Access Control Facility CA-ACF2 or CA Top Secret for z/OS as your z/OS security manager.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//         SET  PRODUCT=RACF         * RACF, ACF2, or TSS\n")])])]),a("h3",{attrs:{id:"hostname-and-ipaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-and-ipaddress"}},[e._v("#")]),e._v(" "),a("code",[e._v("HOSTNAME")]),e._v(" and "),a("code",[e._v("IPADDRESS")])]),e._v(" "),a("p",[e._v("The Zowe certificate is used on the northbound edge of the API Mediation Layer to encrypt data between web browser and other client applications such as the Zowe command line interface. These client applications will validate that the network TCP/IP address that they have accessed the encrypted data from matches the network address in the certificate.  If the address does not match, the browser will not continue as it will consider the site as unsecure.")]),e._v(" "),a("p",[e._v("To ensure that the browser is able to establish a secure connection, set the "),a("code",[e._v("HOSTNAME")]),e._v(" and "),a("code",[e._v("IPADDRESS")]),e._v(" in the "),a("code",[e._v("ZWEKRING")]),e._v(" JCL member to match the hostname and TCP/IP address of the Zowe API Mediation Layer.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//*      * Hostname of the system where Zowe is to run\n//         SET HOSTNAME=''\n//*      * IP address of the system where Zowe is to run\n//         SET IPADDRES=''\n//*      * Keyring for the Zowe userid\n")])])]),a("h3",{attrs:{id:"zowering-and-label-labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zowering-and-label-labels"}},[e._v("#")]),e._v(" "),a("code",[e._v("ZOWERING")]),e._v(" and "),a("code",[e._v("LABEL")]),e._v(" labels")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ZOWERING")]),e._v(" label is used for the name of the key ring created. The default value is "),a("code",[e._v("ZoweKeyring")]),e._v(".  The "),a("code",[e._v("LABEL")]),e._v(" label specifies the certificate name and defaults to "),a("code",[e._v("localhost")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//         SET ZOWERING='ZoweKeyring'\n//*      * Zowe's certificate label\n//         SET    LABEL='localhost'\n")])])]),a("ul",[a("li",[e._v("The value of the "),a("code",[e._v("ZOWERING")]),e._v(" label should match the value of the "),a("code",[e._v("ZOWE_KEYRING")]),e._v(" variable in the "),a("code",[e._v("zowe-setup-keyring-certificates.env")]),e._v(" file.")]),e._v(" "),a("li",[e._v("The value of the "),a("code",[e._v("LABEL")]),e._v(" label should match the value of the "),a("code",[e._v("KEYSTORE_ALIAS")]),e._v(" variable in the "),a("code",[e._v("zowe-setup-keyring-certificates.env")]),e._v(" file.")])]),e._v(" "),a("h3",{attrs:{id:"rootzfca-label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rootzfca-label"}},[e._v("#")]),e._v(" "),a("code",[e._v("ROOTZFCA")]),e._v(" label")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ROOTZFCA")]),e._v(" label connects the root CA of the z/OSMF certificate with the Zowe key ring.")]),e._v(" "),a("p",[a("strong",[e._v("When to set this label?")])]),e._v(" "),a("p",[e._v("The value of the parameter "),a("code",[e._v("VERIFY_CERTIFICATES")]),e._v(" in the "),a("code",[e._v("zowe-certificates.env")]),e._v(" file in the "),a("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" controls whether Zowe's servers validate the authenticity of any southbound certificates at runtime.  If the value is "),a("code",[e._v("true")]),e._v(", then the certificate must be signed by a recognized certificate authority (CA), and if the value is "),a("code",[e._v("false")]),e._v(" then self-signed certificates are allowed.  This section of the keystore configuration is only required if you are using "),a("code",[e._v("VERIFY_CERTIFICATES=true")]),e._v(".")]),e._v(" "),a("p",[e._v("When you set "),a("code",[e._v("VERIFY_CERTIFICATES=true")]),e._v(", then Zowe will validate the authenticity of the z/OSMF certificate, so the root CA of the z/OSMF certificate must be connected with the Zowe key ring. You can connect them by setting the label "),a("code",[e._v("ROOTZFCA")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//*      * Name/Label of the root CA of the z/OSMF certificate\n//         SET ROOTZFCA=\n")])])]),a("p",[e._v("If you are unsure of the root CA you can find it by listing the chain of the z/OSMF certificate using the following commands:")]),e._v(" "),a("ul",[a("li",[e._v("RACF"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RACDCERT ID(IZUSVR) LISTCHAIN(LABEL('DefaultzOSMFCert.IZUDFLT'))\t\n")])])])]),e._v(" "),a("li",[e._v("Top Secret"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TSS LIST(IZUSVR) LABLCERT('DefaultzOSMFCert.IZUDFLT') CHAIN\t\n")])])])]),e._v(" "),a("li",[e._v("ACF2"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET PROFILE(USER) DIVISION(CERTDATA)\t\nCHKCERT IZUSVR LABEL(DefaultzOSMFCert.IZUDFLT) CHAIN\t\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[e._v("#")]),e._v(" Results")]),e._v(" "),a("p",[e._v("When the "),a("code",[e._v("ZWEKRING")]),e._v(" JCL runs successfully, it will create a key ring named "),a("code",[e._v("ZoweKeyring")]),e._v(" owned by "),a("code",[e._v("ZWESVUSR")]),e._v(" containing the following:")]),e._v(" "),a("ul",[a("li",[e._v("The Zowe certificate (called "),a("code",[e._v("localhost")]),e._v(")")]),e._v(" "),a("li",[e._v("The local CA (called "),a("code",[e._v("ZoweCert")]),e._v(")")]),e._v(" "),a("li",[e._v("The certificate used to encrypt the JSON Web Token (JWT) required for single sign-on (called "),a("code",[e._v("jwtsecret")]),e._v(")")])]),e._v(" "),a("p",[e._v("When the "),a("code",[e._v("zowe-setup-certificates.sh")]),e._v(" script executes successfully, it will generate the USS "),a("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" that contains the file "),a("code",[e._v("zowe-certificates.env")]),e._v(". This file is used in the Zowe instance configuration step. See "),a("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("p",[e._v("The JCL member "),a("code",[e._v("ZWENOKYR")]),e._v(" provided in the PDS sample library "),a("code",[e._v("SZWESAMP")]),e._v(" contains the inverse commands contained in "),a("code",[e._v("ZWEKKRING")]),e._v(". This allows an environment to be cleaned up and have one or more certificates, key rings, and certificate authorities created by "),a("code",[e._v("ZWEKRING")]),e._v(" removed from the z/OS environment.  This is useful if you are creating a DevOps pipeline to install and configure and environment for Zowe using "),a("code",[e._v("ZWEKRING")]),e._v(" and want to clean that environment before rerunning the pipeline.")])])}),[],!1,null,null,null);t.default=o.exports}}]);