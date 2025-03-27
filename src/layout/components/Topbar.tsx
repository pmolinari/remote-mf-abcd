import { Topbar as BrickTopbar } from "@norma/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const pageTitle = {
  name: "Titulo un poco mas largo para que parezca real",
  element: "h1",
  //  capitalization: titleCapitalization,
  id: "unId",
};

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <BrickTopbar
      title={pageTitle}
      breadcrumb={[
        {
          text: "Home",
          onClick: () => navigate("/"),
        },
        {
          text: "Feedback",
          onClick: () => navigate("/feedback"),
        },
        {
          text: "Current section",
          onClick: () => navigate("/"),
        },
      ]}
      //  buttonList={args.showButton && buttonList}
      //  dropdownList={args.showDropdown && dropdownList}
      //  callSideInfo={args.callSideInfo && (() => alert('CallSideInfo...!'))}
      //  breadcrumbsQuantity={args.breadcrumbsQuantity}
    />
  );
};

export default React.memo(Topbar);
