exports.config = {
  bundles: [
    { components: ['ajonp-drinkpublic',] },
    { components: ['ajonp-firebase-app-script',] },
    { components: ['ajonp-firebase-auth-script',] },
    { components: ['ajonp-firebase-auth',] },
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core'},
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}'
    ],
    globIgnores: [
      'build/app/svg/*.js'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
