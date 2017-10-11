exports.config = {
  bundles: [
    { components: ['ajonp-drinkpublic'] }
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
