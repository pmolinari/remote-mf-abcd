const DevelopmentTag = ({ position = "bottomLeft", children }: any) => {
  const positions: any = {
    topLeft: { top: "16px", left: "16px" },
    topRight: { top: "16px", right: "16px" },
    bottomLeft: { bottom: "16px", left: "16px" },
    bottomRight: { bottom: "16px", right: "16px" },
  };

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "black",
        color: "white",
        padding: "8px 12px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        ...positions[position],
      }}
    >
      {children}
    </div>
  );
};

export default DevelopmentTag;
