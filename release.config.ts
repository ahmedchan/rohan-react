const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: 'docs',
            scope: 'README',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['dist/*.js', 'dist/*.js.map', 'dist/*.ts', 'dist/*.ts.map'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
   //  [
   //    '@semantic-release/npm',
   //    {
   //      pkgRoot: 'dist',
   //    },
   //  ],
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};

export default config 