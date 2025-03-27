import { Layout, MainLayout } from "@norma/core";
import Topbar from "./components/Topbar";

const LayoutPage = ({ children }: any) => {
  console.log("LayoutPage rendered!");

  return (
    <Layout>
      <MainLayout h={"100vh"} width={"100vw"}>
        <MainLayout.Header>
          <Topbar />
        </MainLayout.Header>
        <MainLayout.Content>{children}</MainLayout.Content>
        <MainLayout.Footer>Footer</MainLayout.Footer>
      </MainLayout>
    </Layout>
  );
};

export default LayoutPage;
