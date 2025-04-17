import React from "react";
import Heading from "../components/typography/Heading";
import { BriefcaseIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import ActivityCard, {
  ActivityCardInterface,
} from "../components/dashboard/ActivityCard";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const activities: ActivityCardInterface[] = [
    {
      icon: <BriefcaseIcon className="size-6" />,
      label: "Active Drivers",
      value: "45 personnels",
      statistics: {
        increase: true,
        value: 3,
      },
    },

    {
      icon: <BanknotesIcon className="size-6" />,
      label: "Revenue",
      value: "₦450,000.0045",
      statistics: {
        increase: true,
        value: 12,
      },
    },

    {
      icon: <UserGroupIcon className="size-6" />,
      label: "Onboarded Admin",
      value: "12",
    },
    {
      icon: <CheckIcon className="size-6" />,
      label: "Successful transaction",
      value: "345",
      statistics: {
        increase: true,
        value: 3,
      },
    },
  ];
  return (
    <>
      <Heading>Activity Overview</Heading>

      <div className="mt-12 grid grid-cols-3  grid-rows-3 gap-y-4 gap-x-6">
        {activities.map((entry) => (
          <ActivityCard
            key={entry.label}
            icon={entry.icon}
            label={entry.label}
            value={entry.value}
            statistics={entry.statistics}
          />
        ))}
      </div>
    </>
  );
}
