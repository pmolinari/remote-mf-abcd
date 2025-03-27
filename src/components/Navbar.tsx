import React from "react";
import { Menu, Navbar as BrickNavbar, useWindowSize } from "@norma/core";

const LogoGalicia = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_40865_192324)">
        <path
          d="M16 0C7.16099 0 0 7.161 0 16C0 24.839 7.16099 32 16 32C24.839 32 31.9999 24.839 31.9999 16C32.0236 7.161 24.8626 0 16 0ZM21.6248 10.8951C21.6011 10.8951 21.5775 10.8951 21.5539 10.8715C21.483 10.8242 21.1994 10.6824 20.6322 10.4934C19.9232 10.2807 18.7178 10.0207 16.8508 9.97341C16.9453 11.9823 17.2998 13.1403 17.5125 13.6366L17.5362 13.7075C17.6543 13.9911 17.9852 14.6292 18.5051 14.7947C18.5524 14.7947 18.576 14.842 18.5997 14.8892C18.5997 14.9129 18.5997 14.9365 18.5997 14.9601L16.4017 29.9675C16.4017 30.0384 16.3308 30.0857 16.2836 30.0857C16.2127 30.0857 16.1654 30.0384 16.1654 29.9675L13.9438 14.9601C13.9438 14.9365 13.9438 14.9129 13.9438 14.8892C13.9438 14.842 13.9911 14.8183 14.0384 14.7947C14.5583 14.6529 14.8892 13.9911 15.0074 13.7075C15.2201 13.1876 15.5982 12.0295 15.6927 9.97341C13.8257 10.0207 12.5967 10.2807 11.9114 10.4934C11.2732 10.6824 10.9896 10.8715 10.9896 10.8715C10.966 10.8715 10.966 10.8951 10.9424 10.8951H10.9187C10.0916 10.8951 9.42982 10.2334 9.42982 9.4062C9.42982 8.57903 10.0916 7.91728 10.9187 7.91728H10.9424C10.966 7.91728 10.966 7.91728 10.9896 7.94092C10.9896 7.94092 11.2732 8.10635 11.9114 8.31906C12.6204 8.53176 13.8493 8.79173 15.74 8.839C15.6927 6.97194 15.4328 5.74298 15.2201 5.05761C15.0546 4.4904 14.8892 4.2068 14.8419 4.15953C14.8183 4.13589 14.8183 4.08863 14.8419 4.06499C14.8419 3.68685 15.0074 3.33235 15.2673 3.04874C15.5509 2.76514 15.9291 2.62334 16.3072 2.62334C16.5199 2.62334 16.7562 2.67061 16.969 2.76514C17.4653 2.97784 17.7725 3.49778 17.7725 4.08863C17.7725 4.11226 17.7725 4.15953 17.7489 4.18316C17.7489 4.18316 17.5834 4.46677 17.3944 5.08124C17.1817 5.76662 16.9217 6.99557 16.8744 8.86263C18.7651 8.81536 19.9941 8.55539 20.6794 8.34269C21.2466 8.17725 21.5302 8.01182 21.6011 7.96455C21.6248 7.94092 21.6484 7.94092 21.672 7.94092C22.4992 7.94092 23.161 8.60266 23.161 9.42984C23.1137 10.2334 22.452 10.8951 21.6248 10.8951Z"
          fill="#FA6400"
        />
      </g>
      <defs>
        <clipPath id="clip0_40865_192324">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Navbar = () => {
  // const [userData, setUserData] = React.useState<any>({
  //   image: {
  //     url: "https://placebeard.it/200x200",
  //     alt: "Marcelo picture",
  //   },
  //   profileName: "marcelo",
  //   businessName: "Yacimientos Petroliferos Fiscales",
  //   nameInitials: "YPF",
  //   id: "1",
  // });
  // const [usersOwners] = React.useState([
  //   {
  //     image: {
  //       url: "https://placebeard.it/200x200",
  //       alt: "Marcelo picture",
  //     },
  //     profileName: "marcelo",
  //     businessName: "Yacimientos Petroliferos Fiscales",
  //     nameInitials: "YP",
  //     id: "1",
  //   },
  //   {
  //     image: {
  //       url: "https://placebeard.it/200x200",
  //       alt: "Marcelo picture",
  //     },
  //     profileName: "marcelo",
  //     businessName: "Grido S.A.",
  //     nameInitials: "GR",
  //     id: "2",
  //   },
  // ]);
  const [, setOpenSearch] = React.useState(false);
  const [overlay, setOverlay] = React.useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);

  const navbarRef = React.useRef<any>(null);

  const { isDown } = useWindowSize();
  const md = isDown("md");

  // eslint-disable
  const handleClickItemMenu = (item: any) => {
    //console.log(`Redireccionar a /${item}`);
    alert(item);
    md && setDisplayMenu(false);
  };

  const navItems = [
    [
      {
        idModule: "01",
        modules: [],
        description: "Inicio",
        extensions: { icon: { value: "home" } },
        onClick: () => handleClickItemMenu("inicio"),
      },
      {
        idModule: "02",
        modules: [],
        description: "Cuentas",
        extensions: { icon: { value: "circleMoney" } },
        onClick: () => handleClickItemMenu("cuentas"),
      },
      {
        idModule: "03",
        description: "Transferencias",
        extensions: { icon: { value: "transfer" } },
        modules: [
          {
            idModule: "0301",
            modules: [],
            description: "Personales",
            // extensions: { icon: { value: 'userLaptop' } },
            onClick: () => handleClickItemMenu("transferencias/personales"),
          },
          {
            idModule: "0302",
            modules: [],
            description: "Profesionales",
            // extensions: { icon: { value: 'office' } },
            onClick: () => handleClickItemMenu("transferencias/profesionales"),
          },
          {
            idModule: "0303",
            modules: [],
            description: "Privadas",
            // extensions: { icon: { value: 'userLaptop' } },
            onClick: () => handleClickItemMenu("transferencias/privadas"),
          },
          {
            idModule: "0304",
            modules: [],
            description: "Compartidas",
            // extensions: { icon: { value: 'office' } },
            onClick: () => handleClickItemMenu("transferencias/compartidas"),
          },
        ],
      },
      {
        idModule: "04",
        description: "Pagos",
        extensions: { icon: { value: "docMoney" } },
        onClick: () => handleClickItemMenu("pagos"),
      },
      {
        idModule: "05",
        modules: [],
        description: "Pagos 2",
        extensions: { icon: { value: "analyticsGraphs" } },
        onClick: () => handleClickItemMenu("pagos2"),
      },
      {
        idModule: "06",
        modules: [],
        description: "Cobros",
        extensions: { icon: { value: "moneyIn" } },
        onClick: () => handleClickItemMenu("cobros"),
      },
      {
        idModule: "07",
        modules: [],
        description: "Sueldos",
        extensions: { icon: { value: "moneyOut" } },
        onClick: () => handleClickItemMenu("sueldos"),
      },
      {
        idModule: "08",
        modules: [],
        description: "Cheques",
        extensions: { icon: { value: "checks" } },
        onClick: () => handleClickItemMenu("cheques"),
      },
      {
        idModule: "09",
        modules: [],
        description: "Tarjetas",
        extensions: { icon: { value: "card" } },
        onClick: () => handleClickItemMenu("tarjetas"),
      },
      {
        idModule: "10",
        modules: [],
        description: "Financiaciones",
        extensions: { icon: { value: "agreement" } },
        onClick: () => handleClickItemMenu("financiaciones"),
      },
      {
        idModule: "11",
        modules: [],
        description: "Inversiones",
        extensions: { icon: { value: "investment" } },
        onClick: () => handleClickItemMenu("inversiones"),
      },
      {
        idModule: "12",
        modules: [],
        description: "Comercio Exterior",
        extensions: { icon: { value: "globe" } },
        onClick: () => handleClickItemMenu("comex"),
      },
    ],
    [
      {
        idModule: "14",
        modules: [],
        description: "Operaciones",
        extensions: { icon: { value: "docCheck" } },
        onClick: () => handleClickItemMenu("operaciones"),
      },
      {
        idModule: "15",
        modules: [],
        description: "Administrar empresa",
        extensions: { icon: { value: "setting" } },
        onClick: () => handleClickItemMenu("admin"),
      },
      {
        idModule: "13",
        modules: [],
        description: "Ayuda",
        extensions: { icon: { value: "circleQuestion" } },
        onClick: () => handleClickItemMenu("Ayuda"),
      },
    ],
  ];

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        navbarRef &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setOverlay(false);
        setOpenSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setDisplayMenu(!md);
  }, [md]);

  const logoProps = {
    handlerClick: () => alert("Redireccionar a /home"),
    element: <LogoGalicia />,
  };

  return (
    <BrickNavbar
      ref={navbarRef}
      //   offsetTop={args.offsetTop}
      logo={logoProps}
      menu={
        <Menu
          navItems={navItems}
          open
          isLoading={false}
          fixed
          offSetTop={65}
          backDropOffSetTop={65}
        />
      }
      displayMenu={displayMenu}
      isMenuOpened={(status: any) => setDisplayMenu(status)}
      backdropBlured={overlay}
    />
  );
};

export default Navbar;
