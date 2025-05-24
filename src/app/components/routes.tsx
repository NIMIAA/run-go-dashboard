import {
  Squares2X2Icon,
  UserIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  InformationCircleIcon,
  PresentationChartBarIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

import {
  Squares2X2Icon as SolidSquares2X2Icon,
  UserIcon as SolidUserIcon,
  CurrencyDollarIcon as SolidCurrencyDollar,
  Cog6ToothIcon as SolidCog6ToothIcon,
  UserGroupIcon as SolidUserGroupIcon,
  InformationCircleIcon as SolidInformationCircleIcon,
  PresentationChartBarIcon as SolidPresentationChartBarIcon,
  BriefcaseIcon as SolidBriefcaseIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    path: "/dashboard",
    label: "Dashboard",
    defaultIcon: <Squares2X2Icon className="size-6" />,
    activeicon: <SolidSquares2X2Icon className="size-6" />,
  },
  {
    path: "/dashboard/drivers",
    label: "Driver Management",
    defaultIcon: <BriefcaseIcon className="size-6" />,
    activeicon: <SolidBriefcaseIcon className="size-6" />,
  },
  {
    path: "/dashboard/analytics",
    label: "Report and Analytics",
    defaultIcon: <PresentationChartBarIcon className="size-6" />,
    activeicon: <SolidPresentationChartBarIcon className="size-6" />,
  },
  {
    path: "/dashboard/transactions",
    label: "Transaction and Wallet",
    defaultIcon: <CurrencyDollarIcon className="size-6" />,
    activeicon: <SolidCurrencyDollar className="size-6" />,
  },
  {
    path: "/dashboard/admins",
    label: "Admin Management",
    defaultIcon: <UserGroupIcon className="size-6" />,
    activeicon: <SolidUserGroupIcon className="size-6" />,
  },
  // {
  //   path: "/dashboard/disputes",
  //   label: "Disput Management",
  //   defaultIcon: <InformationCircleIcon className="size-6" />,
  //   activeicon: <SolidInformationCircleIcon className="size-6" />,
  // },
  // {
  //   path: "/dashboard/account",
  //   label: "Account",
  //   defaultIcon: <UserIcon className="size-6" />,
  //   activeicon: <SolidUserIcon className="size-6" />,
  // },
  // {
  //   path: "/dashboard/settings",
  //   label: "Settings",
  //   defaultIcon: <Cog6ToothIcon className="size-6" />,
  //   activeicon: <SolidCog6ToothIcon className="size-6" />,
  // },
];
