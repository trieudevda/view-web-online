export const PATHS: Record<string, string> = {
  ADMIN: 'admin',
  DASHBOARD: 'dashboard',
  // ABOUT: `/about`,
  // CONTACT: `/contact`,
  // BLOG: `/blog`,
  // BLOG_DETAIL: `/blog/:slug`,
};
export const PATHCONST = {
  ADMIN: {
    INDEX: `/${PATHS.ADMIN}`,
    DASHBOARD: {
      INDEX: `/${PATHS.ADMIN}/${PATHS.DASHBOARD}`,
      DETAIL: (slug: string) => `/DETAIL/${slug}`,
    },
    PRODUCT: {
      INDEX: `/${PATHS.ADMIN}/product`,
      CREATE: `/${PATHS.ADMIN}/product/create`,
      UPDATE: (slug: string) => `/${PATHS.ADMIN}/product/update/${slug}`,
      DELETE: (slug: string) => `/${PATHS.ADMIN}/product/delete/${slug}`,
      DETAIL: (slug: string) => `/${PATHS.ADMIN}/product/detail/${slug}`,
    }
  },
};
