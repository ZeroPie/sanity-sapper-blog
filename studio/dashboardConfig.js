export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eedd607ee3a433ee663944d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-cbhv822k',
                  apiId: '8707a858-af2d-487c-a740-4981424ffb10'
                },
                {
                  buildHookId: '5eedd6075de0e56574687060',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zyxnp6oq',
                  apiId: '3f726741-e200-40aa-9c8c-f98af40c66dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZeroPie/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zyxnp6oq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
