export const getAbsolutePath = (pathname: string, category: string, id: string) => {
  if (pathname.includes(category)) {
    return `/pets/${category}/${id}`;
  }
  return `${category}/${id}`;
};