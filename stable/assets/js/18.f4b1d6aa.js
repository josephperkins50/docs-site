(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{305:function(e,t,a){e.exports=a.p+"assets/img/rest-api-components.4b31db8f.svg"},306:function(e,t,a){e.exports=a.p+"assets/img/rest-api-components-sample.26442f16.svg"},448:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"onboarding-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Onboarding Overview")]),e._v(" "),s("h2",{attrs:{id:"overview-of-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview of APIs")]),e._v(" "),s("p",[e._v("Before identifying the API you want to expose in the API Mediation Layer, it is useful to consider the structure of APIs. An application programming interface (API) is a set of rules that allow programs to talk to each other. A developer creates an API on a server and allows a client to talk to the API. Representational State Transfer (REST) determines the look of an API and is a set of rules that developers follow when creating an API. One of these rules states that a user should be able to get a piece of data (resource) through URL endpoints using HTTP. These resources are usually represented in the form of JSON or XML documents. The preferred documentation type in Zowe is in the JSON format.")]),e._v(" "),s("p",[e._v("A REST API service can provide one or more REST APIs and usually provides the latest version of each API. A REST service is hosted on a web server which can host one or more services, often referred to as "),s("em",[e._v("applications")]),e._v(". A web server that hosts multiple services  or applications is referred to as a "),s("em",[e._v("web application server")]),e._v(". Examples of "),s("em",[e._v("web application servers")]),e._v(" are "),s("a",{attrs:{href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Tomcat"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://developer.ibm.com/wasdev/websphere-liberty/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSphere Liberty"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Definitions used in this procedure follow the "),s("a",{attrs:{href:"https://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI specification"),s("OutboundLink")],1),e._v(".\nEach API has its own title, description, and version (versioned using "),s("a",{attrs:{href:"https://semver.org/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning 2.0.0"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("The following diagram shows the relations between various types of services, their APIs, REST API endpoints, and the API gateway:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(305),alt:"REST API Components"}})]),e._v(" "),s("h2",{attrs:{id:"sample-rest-api-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-rest-api-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample REST API Service")]),e._v(" "),s("p",[e._v("In microservice architecture, a web server usually provides a single service. A typical example of a single service implementation is a Spring Boot web application.")]),e._v(" "),s("p",[e._v("To demonstrate the concepts that apply to REST API services, we use the following example of a Spring Boot REST API service: https://github.com/swagger-api/swagger-samples/tree/master/java/java-spring-boot. This example is used in the REST API onboarding guide: "),s("strong",[e._v("REST API without code changes required")]),e._v(".")]),e._v(" "),s("p",[e._v("You can build this service using instructions in the source code of the Spring Boot REST API service example (https://github.com/swagger-api/swagger-samples/blob/master/java/java-spring-boot/README.md).")]),e._v(" "),s("p",[e._v("The Sample REST API Service has a base URL. When you start this service on your computer, the "),s("em",[e._v("service base URL")]),e._v(" is: "),s("code",[e._v("http://localhost:8080")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If a service is deployed to a web application server, the base URL of the service (application) has the following format: "),s("code",[e._v("https://application-server-hostname:port/application-name")]),e._v(".")]),e._v(" "),s("p",[e._v("This sample service provides one API that has the base path "),s("code",[e._v("/v2")]),e._v(", which is represented in the base URL of the API as "),s("code",[e._v("http://localhost:8080/v2")]),e._v(". In this base URL, "),s("code",[e._v("/v2")]),e._v(" is a qualifier of the base path that was chosen by the developer of this API. Each API has a base path depending on the particular implementation of the service.")]),e._v(" "),s("p",[e._v("This sample API has only one single endpoint:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("/pets/{id}")]),e._v(" - "),s("em",[e._v("Find pet by ID")]),e._v(".")])]),e._v(" "),s("p",[e._v("This endpoint in the sample service returns information about a pet when the "),s("code",[e._v("{id}")]),e._v(" is between 0 and 10. If "),s("code",[e._v("{id}")]),e._v(" is greater than 0 or a non-integer then it returns an error. These are conditions set in the sample service.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" Access http://localhost:8080/v2/pets/1 to see what this REST API endpoint does. You should get the following response:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"category"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cats"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cat 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"photoUrls"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"url1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"url2"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"available"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag1"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tag2"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" The onboarding guides demonstrate how to add the Sample REST API Service to the API Mediation Layer to make the service available through the "),s("code",[e._v("petstore")]),e._v(" service ID.")]),e._v(" "),s("p",[e._v("The following diagram shows the relations between the Sample REST API Service and its corresponding API, REST API endpoint, and API gateway:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(306),alt:"Sample REST API Components"}})]),e._v(" "),s("p",[e._v("This sample service provides a Swagger document in JSON format at the following URL:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:8080/v2/swagger.json\n")])])]),s("p",[e._v("The Swagger document is used by the API Catalog to display the API documentation.")]),e._v(" "),s("h2",{attrs:{id:"api-service-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-service-types","aria-hidden":"true"}},[e._v("#")]),e._v(" API Service Types")]),e._v(" "),s("p",[e._v("The process of onboarding depends on the method that is used to develop the API service.")]),e._v(" "),s("p",[e._v("While any REST API service can be added to the API Mediation Layer, this documentation focuses on following types of REST APIs:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Services that can be updated to support the API Mediation Layer natively by updating the service code:")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-a-spring-boot-rest-api-service.html"}},[e._v("Java REST APIs with Spring Boot")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-an-existing-java-jersey-rest-api-service.html"}},[e._v("Java Jersey REST APIs")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-an-existing-java-rest-api-service-without-spring-boot-with-zowe-api-mediation-layer.html"}},[e._v("Java REST APIs without Spring Boot")])],1)])]),e._v(" "),s("li",[s("p",[s("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-an-existing-rest-api-service-without-code-changes.html"}},[e._v("REST APIs without code changes required")])],1)])]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" When developing a new service, we recommend that you update the code to support the API Mediation Layer natively. Use the previously listed onboarding guides for services that can be updated to support the API Mediation Layer natively. The benefit of supporting the API Mediation Layer natively is that it requires less configuration for the system administrator. Such service can be moved to different systems, can be listened to on a different port, or additional instances can be started without the need to change  configuration of the API Mediation Layer.")])])},[],!1,null,null,null);t.default=r.exports}}]);