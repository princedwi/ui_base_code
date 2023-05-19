export const getAdminRoutes = () => {
  return [{ url: "/admin/approvers", name: "Approvers" }];
};

export const getRoutes = () => {
  return [
    { url: "/", name: "Home" },
    { url: "/guarantee", name: "Guarantee" },
    { url: "/approvals", name: "Approvals" },
  ];
};
