exports.config = {
  namespace: 'am-rating',
  generateDistribution: true,
  bundles: [
    { components: ['am-rating'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
