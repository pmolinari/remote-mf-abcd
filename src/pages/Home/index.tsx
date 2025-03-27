import { Button, Flex } from "@norma/core";
import { useNavigate } from "react-router-dom";

const Btn = ({ children, ...props }: any) => (
  <Button variant={"secondary"} size={"small"} {...props}>
    {children}
  </Button>
);

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    console.log(path);
    navigate(path);
  };

  return (
    <Flex border="2px dashed red" p="8px" gap="8px">
      <h1>Remote Home</h1>
      <Button onClick={() => handleClick("/")}>Inicio</Button>
      <Button onClick={() => handleClick("page-a")}>PageA</Button>
      <Button onClick={() => handleClick("page-b")}>PageB</Button>
      <Button onClick={() => handleClick("page-c")}>PageC</Button>
    </Flex>
  );
};

export default Home;
