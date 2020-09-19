export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f663cdfa599950a7fb99f9c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p3fi2ne4',
                  apiId: 'afa9d9b2-8d74-4f23-b854-973ee0512bda'
                },
                {
                  buildHookId: '5f663cdfe79c64db02399931',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zh23dr9i',
                  apiId: '199f1035-6030-4561-ac77-41e7083c6398'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dnevesjunior/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zh23dr9i.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
