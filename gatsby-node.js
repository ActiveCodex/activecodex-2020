const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        // const slug = createFilePath({
        //     node,
        //     getNode,
        //     baseBath: 'content/blog'
        // });
        const slug = node.frontmatter.path || createFilePath({
            node,
            getNode
        });

        createNodeField({
            node,
            value: slug,
            name: 'slug'
        });
    };
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const templateFile = path.resolve('src/templates/blogPost.js');
    const templateFile1 = path.resolve('src/templates/projectPost.js');

    return graphql(`
		{
			blog: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {fields: frontmatter___date, order: DESC}) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							path
						}
					}
				}
			}
			project: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___date, order: DESC}) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							path
						}
					}
				}
			}
		}
		`).then(({ data }) => {
        data.blog.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path || node.fields.slug,
                component: templateFile,
                context: {
                    slug: node.frontmatter.path || node.fields.slug,
                }
            })
        })
        data.project.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path || node.fields.slug,
                component: templateFile1,
                context: {
                    slug: node.frontmatter.path || node.fields.slug,
                }
            })
        })
    }
    )

}

// // https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '@sections': path.resolve(__dirname, 'src/components/sections'),
//       },
//     },
//   });
// };