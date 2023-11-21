export const getGlobalData = () => {
  const siteName = process.env.SITE_NAME
    ? decodeURI(process.env.SITE_NAME)
    : 'Размытые лица';
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Автор - Nyxaris';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Размытые лица';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Все права защищены.';

  return {
    siteName,
    name,
    blogTitle,
    footerText,
  };
};
