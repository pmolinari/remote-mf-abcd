import { FeedBackLayout } from "@norma/core";
import { Illustrations } from "@norma/icons";
import { useNavigate } from "react-router-dom";

const PageC = () => {
  const navigate = useNavigate();
  return (
    <FeedBackLayout
      mainTitle="Ahora estamos en la página page-c"
      description="Esta es la descripción de un feedback remoto."
      errorCode="Todo está en orden."
      typeIcon={<Illustrations size="sm" type="SeguroHogar" />}
      btnList={[
        {
          onClick: () => navigate(0),
          text: "Volver a cargar",
          // variant: "primary",
        },
        {
          onClick: () => navigate("/"),
          text: "Volver al inicio",
          variant: "secondary",
        },
      ]}
    />
  );
};
export default PageC;
