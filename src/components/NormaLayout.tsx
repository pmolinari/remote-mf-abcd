import { Layout } from "@norma/core";

const NormaLayout = ({ children, ...props }: any) => {
  return <Layout {...props}>{children}</Layout>;
};

export default NormaLayout;
