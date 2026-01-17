import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 语言配置
const LOCALE_CONFIG = {
  'en': {
    path: '',
    title: 'Articles',
    description: 'Browse all articles about Pagetual, web automation, and browsing tips',
    browseText: 'Browse our collection of',
    articlesText: 'articles about web browsing, automation, and productivity tips.',
    publishedText: 'Published',
    locale: 'en-US'
  },
  'cn': {
    path: 'cn',
    title: '文章',
    description: '浏览所有关于东方永页机、网页自动化和浏览技巧的文章',
    browseText: '浏览我们的',
    articlesText: '篇关于网页浏览、自动化和效率提升的文章。',
    publishedText: '发布于',
    locale: 'zh-CN'
  }
};

// 解析 frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();
      // 移除引号
      value = value.replace(/^["']|["']$/g, '');
      frontmatter[key.trim()] = value;
    }
  }

  return frontmatter;
}

// 读取所有文章
function readArticles(articleDir, langCode) {
  if (!fs.existsSync(articleDir)) {
    console.log(`Directory not found: ${articleDir}`);
    return [];
  }

  const files = fs.readdirSync(articleDir);
  const articles = [];
  const config = LOCALE_CONFIG[langCode];
  const urlPrefix = config.path ? `/${config.path}/article/` : '/article/';

  for (const file of files) {
    if (!file.endsWith('.md') || file === 'README.md') continue;

    const filePath = path.join(articleDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);

    if (frontmatter && frontmatter.title) {
      articles.push({
        filename: file,
        url: `${urlPrefix}${file.replace('.md', '.html')}`,
        title: frontmatter.title,
        description: frontmatter.description || '',
        date: frontmatter.date || '',
        keywords: frontmatter.keywords || ''
      });
    }
  }

  // 按日期排序（最新的在前）
  articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return articles;
}

// 生成 Markdown 内容
function generateMarkdown(articles, langCode) {
  const config = LOCALE_CONFIG[langCode];

  let content = `---
title: "${config.title}"
description: "${config.description}"
---

# ${config.title}

${config.browseText} ${articles.length} ${config.articlesText}

---

`;

  for (const article of articles) {
    const date = new Date(article.date);
    const formattedDate = date.toLocaleDateString(config.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    content += `## [${article.title}](${article.url})

${article.description}

---

`;
  }

  return content;
}

// 处理单个语言
function processLocale(projectRoot, langCode) {
  const config = LOCALE_CONFIG[langCode];
  const articleDir = config.path
    ? path.join(projectRoot, 'docs', config.path, 'article')
    : path.join(projectRoot, 'docs', 'article');
  const outputFile = path.join(articleDir, 'README.md');

  console.log(`\n[${langCode.toUpperCase()}] Reading articles from:`, articleDir);

  const articles = readArticles(articleDir, langCode);

  if (articles.length === 0) {
    console.log(`[${langCode.toUpperCase()}] No articles found, skipping...`);
    return;
  }

  console.log(`[${langCode.toUpperCase()}] Found ${articles.length} articles`);

  const markdown = generateMarkdown(articles, langCode);

  fs.writeFileSync(outputFile, markdown, 'utf-8');
  console.log(`[${langCode.toUpperCase()}] Generated article list at:`, outputFile);
}

// 主函数
function main() {
  const projectRoot = path.resolve(__dirname, '..');

  console.log('=== Generating Article Lists ===');

  // 处理所有语言
  for (const langCode of Object.keys(LOCALE_CONFIG)) {
    processLocale(projectRoot, langCode);
  }

  console.log('\n=== Done! ===');
}

main();
