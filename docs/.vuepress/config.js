// load versions list
const ZOWE_VERSIONS = require('./versions.json')
// root base url for all versions
const ROOT_BASE_URL = '/docs-site'
// Due to VuePress limitation, publish url path cannot have dot (.) inside
// so we convert it to dash
const PUBLISH_TARGET_PATH = (process.env.PUBLISH_TARGET_PATH || 'latest').replace(/\./g, '-')

module.exports = {
  title: 'Zowe Docs',
  base: `${ROOT_BASE_URL}/${PUBLISH_TARGET_PATH}/`,
  dest: `.deploy/${PUBLISH_TARGET_PATH}/`,
  description: 'Home of Zowe documentation',
  ga: 'UA-123892882-1',
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'FFi0biHTX9XKglMxt3n2NZkB-knrnPxIrgBXpIZqlzc'
      }
    ]
  ],
  themeConfig: {
    docsDir: 'docs',
    // define Zowe versions
    versions: ZOWE_VERSIONS,
    // expose this to render versioning urls
    rootBaseUrl: ROOT_BASE_URL,
    repo: `https://github.com/zowe${ROOT_BASE_URL}`,
    editLinks: true,
    editLinkText: 'Propose content change in GitHub.',
    lastUpdated: 'Last Updated', // string | boolean
    sidebarDepth: 2,
    algolia: {
      apiKey: '59ff39ed48d0820010c7e09fc4b677bf',
      indexName: 'zowe',
      algoliaOptions: {
        facetFilters: [`version:${PUBLISH_TARGET_PATH}`],
      }
    },
    nav: [{
        text: 'Getting Started',
        items: [
          { text: 'Zowe overview', link: '/getting-started/overview.md' },
          { text: 'Release notes', link: '/getting-started/summaryofchanges.md' }
        ]
      },
      {
        text: 'User Guide',
        items: [
          { text: 'Installing Zowe', link: '/user-guide/installandconfig.md' },
          { text: 'Configuring Zowe', link: '/user-guide/mvd-configuration.md' },
          { text: 'Using Zowe', link: '/user-guide/using.md' },
          { text: 'Zowe CLI extensions and plug-ins', link: '/user-guide/cli-extending.md' }
        ]
      },
      {
        text: 'Extending',
        items: [
          { text: 'Developing JEE components', link: '/extend/extend-api/libertyAPI.md' },
          { text: 'Developing for API Mediation Layer', link: '/extend/extend-apiml/api-mediation-onboard-overview.md' },
          { text: 'Developing for Zowe CLI', link: '/extend/extend-cli/cli-devTutorials.md' },
          { text: 'Developing for Zowe Application Framework', link: '/extend/extend-desktop/mvd-extendingzlux.md' }
        ]
      },
      { text: 'Troubleshooting', link: '/troubleshoot/troubleshootinstall.md' },
      { text: 'Contributing', link: '/contributing.md', canHideFirst: true },
      // MODIFICATION_FROM_THEME versions dropdown placeholder, it will be converted when rendering
      { tags: ['versions'] },
      {
        text: 'Zowe.org',
        link: 'https://zowe.org',
        // MODIFICATION_FROM_THEME newly added to support image link
        image: 'assets/zowe-logo.png',
        imageWidth: 20,
        imageHeight: 20
      }
    ],
    sidebar: {
      '/getting-started/': [{
          title: 'What is Zowe?',
          collapsable: false,
          children: [
            'overview'
          ]
        },
        {
          title: 'Release notes',
          collapsable: false,
          children: ['summaryofchanges']
        },
      ],
      '/user-guide/': [{
          title: 'Installing Zowe',
          collapsable: true,
          children: [
            'installandconfig',
            'installroadmap',
            'systemrequirements',
            'gettingstarted',
            'install-zos',
            'cli-installcli',
            'uninstall'
          ]
        },
        {
          title: 'Configuring Zowe',
          collapsable: true,
          children: [
            'mvd-configuration',
            'cli-configuringcli'
          ]
        },
        {
          title: 'Using Zowe',
          collapsable: true,
          children: [
            'using',
            'mvd-using',
            'usingapis',
            'api-mediation-api-catalog',
            'cli-usingcli'
          ]
        },
        {
          title: 'Zowe CLI extensions and plug-ins',
          collapsable: true,
          children: [
            'cli-extending',
            'cli-installplugins',
            'cli-cicsplugin',
            'cli-db2plugin',
            'cli-vscodeplugin'
          ]
        }
      ],
      '/extend/': [{
          title: 'Developing JEE components',
          collapsable: true,
          children: [
            'extend-api/libertyAPI',
            'extend-api/liberty-api-sample'
          ]
        },
        {
          title: 'Developing for API Mediation Layer',
          collapsable: true,
          children: [
            'extend-apiml/api-mediation-onboard-overview',
            'extend-apiml/api-mediation-onboard-a-sprint-boot-rest-api-service',
            'extend-apiml/api-mediation-onboard-an-existing-java-rest-api-service-without-spring-boot-with-zowe-api-mediation-layer',
            'extend-apiml/api-mediation-onboard-an-existing-java-jersey-rest-api-service',
            'extend-apiml/api-mediation-onboard-an-existing-rest-api-service-without-code-changes'
          ]
        },
        {
          title: 'Developing for Zowe CLI',
          collapsable: true,
          children: [
            'extend-cli/cli-devTutorials',
            'extend-cli/cli-setting-up',
            'extend-cli/cli-installing-sample-plugin',
            'extend-cli/cli-extending-a-plugin',
            'extend-cli/cli-developing-a-plugin',
            'extend-cli/cli-implement-profiles'
          ]
        },
        {
          title: 'Developing for Zowe Application Framework',
          collapsable: true,
          children: [
            'extend-desktop/mvd-extendingzlux',
            'extend-desktop/mvd-creatingappplugins',
            'extend-desktop/mvd-plugindefandstruct',
            'extend-desktop/mvd-dataservices',
            'extend-desktop/mvd-desktopandwindowmgt',
            'extend-desktop/mvd-configdataservice',
            'extend-desktop/mvd-uribroker',
            'extend-desktop/mvd-apptoappcommunication',
            'extend-desktop/mvd-errorreportingui',
            'extend-desktop/mvd-logutility',
            'extend-desktop/zlux-example-server',
            'extend-desktop/zlux-workshop-user-browser',
            'extend-desktop/zlux-tutorials',
            'extend-desktop/starter-intro',
            'extend-desktop/zlux-workshop-starter-app.md',
            'extend-desktop/ui-intro',
            'extend-desktop/iframe-sample',
            'extend-desktop/react-sample',
            'extend-desktop/angular-sample',
            'extend-api/ReactJSUI'
          ]
        }
      ],
      '/troubleshoot/': ['troubleshootinstall'],
      '/contributing.html': ['contributing'],
      '/': ['about']
    }
  },
  pdf: [
    { text: 'Release notes', link: 'getting-started/summaryofchanges.md' },
    { text: 'Zowe overview', link: 'getting-started/overview.md', },
    {
      text: 'User Guide',
      items: [{
          text: 'Installing Zowe',
          items: [
            '/user-guide/installandconfig.md',
            'user-guide/installroadmap.md',
            'user-guide/systemrequirement,s.md',
            'user-guide/gettingstarted.md',
            'user-guide/install-zos.md',
            'user-guide/cli-installcli,.md',
            'user-guide/uninstall',
          ]
        },
        {
          text: 'Configuring Zowe',
          items: [
            'user-guide/mvd-configuration.md',
            'user-guide/cli-configuringcli'
          ]
        },
        {
          text: 'Using Zowe',
          items: [
            'user-guide/using.md',
            'user-guide/mvd-using.md',
            'user-guide/usingapis.md',
            'user-guide/api-mediation-api-catalog.md',
            'user-guide/cli-usingcli.md',
          ]
        },
        {
          text: 'Zowe CLI extensions and plug-ins',
          items: [
            'user-guide/cli-extending.md',
            'user-guide/cli-installplugins.md',
            'user-guide/cli-cicsplugin.md',
            'user-guide/cli-db2plugin.md',
            'user-guide/cli-vscodeplugin.md',
          ]
        }
      ]
    },
    {
      text: 'Extending',
      items: [{
          text: 'Developing JEE components',
          items: [
            'extend/extend-api/libertyAPI.md',
            'extend/extend-api/liberty-api-sample.md',
          ]
        },
        {
          text: 'Developing for API Mediation Layer',
          items: [
            'extend/extend-apiml/api-mediation-onboard-overview.md',
            'extend/extend-apiml/api-mediation-onboard-a-sprint-boot-rest-api-service.md',
            'extend/extend-apiml/api-mediation-onboard-an-existing-java-rest-api-service-without-spring-boot-with-zowe-api-mediation-layer.md',
            'extend/extend-apiml/api-mediation-onboard-an-existing-java-jersey-rest-api-service.md',
            'extend/extend-apiml/api-mediation-onboard-an-existing-rest-api-service-without-code-changes.md',
          ]
        },
        {
          text: 'Developing for Zowe CLI',
          items: [
            'extend/extend-cli/cli-devTutorials.md',
            'extend/extend-cli/cli-setting-up.md',
            'extend/extend-cli/cli-installing-sample-plugin.md',
            'extend/extend-cli/cli-extending-a-plugin.md',
            'extend/extend-cli/cli-developing-a-plugin.md',
            'extend/extend-cli/cli-implement-profiles.md',
          ]
        },
        {
          text: 'Developing for Zowe Application Framework',
          items: [
            'extend/extend-desktop/mvd-extendingzlux.md',
            'extend/extend-desktop/mvd-creatingappplugins.md',
            'extend/extend-desktop/mvd-plugindefandstruct.md',
            'extend/extend-desktop/mvd-dataservices.md',
            'extend/extend-desktop/mvd-desktopandwindowmgt.md',
            'extend/extend-desktop/mvd-configdataservice.md',
            'extend/extend-desktop/mvd-uribroker.md',
            'extend/extend-desktop/mvd-apptoappcommunication.md',
            'extend/extend-desktop/mvd-errorreportingui.md',
            'extend/extend-desktop/mvd-logutility.md',
            'extend/extend-desktop/zlux-example-server.md',
            'extend/extend-desktop/zlux-workshop-user-browser.md',
            'extend/extend-desktop/zlux-tutorials.md',
            'extend/extend-desktop/starter-intro.md',
            'extend/extend-desktop/zlux-workshop-starter-app.md.md',
            'extend/extend-desktop/ui-intro.md',
            'extend/extend-desktop/iframe-sample.md',
            'extend/extend-desktop/react-sample.md',
            'extend/extend-desktop/angular-sample.md',
            'extend/extend-api/ReactJSUI.md',
          ]
        }
      ]
    },
    { text: 'Troubleshooting', link: 'troubleshoot/troubleshootinstall.md' },
    { text: 'Contributing', link: 'contributing.md', },
    { text: 'Zowe.org', link: 'https://zowe.org', }
  ]
}
