import {
  Squares2X2Icon,
  UserIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  Squares2X2Icon as SolidSquares2X2Icon,
  UserIcon as SolidUserIcon,
  CurrencyDollarIcon as SolidCurrencyDollar,
  Cog6ToothIcon as SolidCog6ToothIcon,
} from "@heroicons/react/24/solid";
export const routes = [
  {
    path: "/dashboard",
    label: "dashbaord",
    defaultIcon: <Squares2X2Icon className="size-6" />,
    activeicon: <SolidSquares2X2Icon className="size-6" />,
  },

  {
    path: "/dashboard/profile",
    label: "profile",
    defaultIcon: <UserIcon className="size-6" />,
    activeicon: <SolidUserIcon className="size-6" />,
  },

  {
    path: "/dashboard/revenue",
    label: "revenue",
    defaultIcon: <CurrencyDollarIcon className="size-6" />,
    activeicon: <SolidCurrencyDollar className="size-6" />,
  },

  {
    path: "/dashboard/settings",
    label: "settings",
    defaultIcon: <Cog6ToothIcon className="size-6" />,
    activeicon: <SolidCog6ToothIcon className="size-6" />,
  },
];
