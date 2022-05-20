

module.exports = {
  extends: [ 'jammy/vue' ],
  rules: {
    complexity: [ 'error', { max: 20 } ],
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [ 0, 'error', 'windows' ],
  },
};


