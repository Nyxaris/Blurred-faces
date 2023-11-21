export const getGlobalData = () => {
  const stName = process.env.ST_NAME
    ? decodeURI(process.env.ST_NAME)
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
    stName,
    name,
    blogTitle,
    footerText,
  };
};
