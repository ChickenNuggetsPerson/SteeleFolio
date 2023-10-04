import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function renderMd(req, res) {
    //const fileName = context.searchParams.fileName
    const fileContent = fs.readFileSync(`./src/app/programming/projects/${req.query.fileName}`, 'utf8');
    const { data, content } = matter(fileContent);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    res.status(200).json({ content: contentHtml })

}
