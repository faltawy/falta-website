import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    description: 'Blog posts',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        thumbnail: { type: 'string', required: true },
        summary: { type: 'string' },
        tags: { type: 'list', of: { type: 'string' } },
        published: { type: 'boolean', default: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
        group: {
            type: 'string',
            resolve: (post) => {
                const [group] = post._raw.flattenedPath.split('/')
                return group
            }
        }
    },
}))

export default makeSource({ contentDirPath: 'blogs', documentTypes: [Post] })