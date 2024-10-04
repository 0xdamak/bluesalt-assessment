"use client";

import { formatToLocaleString } from "@/helpers/formatToLocaleString";
import { months } from "@/helpers/months";
import { BarChart, DoughnutChart, LineChart } from "@/src/components/Charts";
import { InfoCard } from "@/src/components/InfoCard";
import { ListItem } from "@/src/components/ListItem";
import { clsx } from "clsx";
import {
  activities,
  contacts,
  countryVisits,
  infoCardData,
  notifications,
  trafficMetrics,
} from "@/utils/data";
import { calculatePercentage } from "@/helpers/calculatePercentage";

export default function Dashboard(): JSX.Element {
  return (
    <section className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full space-y-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-4">
          {infoCardData.map((data, index) => (
            <InfoCard
              key={data.title}
              {...data}
              className={clsx({
                "bg-[#E5ECF6]": index % 2 === 0,
                "bg-[#E3F5FF]": index % 2 !== 0,
              })}
            />
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-8">
          <div className="h-full rounded-2xl bg-[#F7F9FB] p-6 shadow-lg xl:col-span-6">
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h1 className="whitespace-nowrap text-sm font-semibold text-black">
                Total Users
              </h1>
              <h1 className="whitespace-nowrap text-sm font-normal text-black/40">
                Total Projects
              </h1>
              <h1 className="whitespace-nowrap text-sm font-normal text-black/40">
                Operating Status
              </h1>
              <span className="h-6 w-[1px] bg-[#1C1C1C33]" />
              <h1 className="relative ml-3 whitespace-nowrap text-sm font-normal text-black before:absolute before:-left-3 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-black">
                This year
              </h1>
              <h1 className="relative ml-3 whitespace-nowrap text-sm font-normal text-black before:absolute before:-left-3 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-[#A8C5DA]">
                Last year
              </h1>
            </div>
            <LineChart
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    usePointStyle: true,
                    boxWidth: 5,
                    callbacks: {
                      label: function (context) {
                        const { y: value } = context.parsed;
                        const label = formatToLocaleString(value);
                        return `Total: ${label}`;
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: { drawOnChartArea: false },
                    title: { display: false },
                  },
                  y: {
                    grace: "5%",
                    grid: { drawOnChartArea: false },
                    title: { display: false },
                    ticks: {
                      callback: function (value) {
                        return formatToLocaleString(+value);
                      },
                    },
                  },
                },
              }}
              datasetIdKey="total-users"
              data={{
                labels: months.short.slice(0, 7),
                datasets: [
                  {
                    label: "This year",
                    data: [
                      55000, 28000, 14000, 35000, 49700, 49000, 30000, 37000,
                      46000, 40000, 11000, 41000,
                    ],
                    borderColor: "rgba(28, 28, 28, 1)",
                    borderWidth: 1,
                    fill: "start",
                    backgroundColor: (context) => {
                      const ctx = context.chart.ctx;
                      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                      gradient.addColorStop(0, "rgba(0, 0, 0, 0.08)");
                      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                      return gradient;
                    },
                    tension: 0.3,
                  },
                  {
                    label: "Last year",
                    data: [
                      25000, 48000, 34000, 15000, 29700, 40000, 37000, 40000,
                      11000, 71000, 29000, 36000,
                    ],
                    borderColor: "rgba(168, 197, 218, 1)",
                    borderWidth: 2,
                    borderDash: [3],
                    tension: 0.3,
                  },
                ],
              }}
            />
          </div>
          <div className="rounded-2xl bg-[#F7F9FB] p-6 shadow-lg xl:col-span-2">
            <h1 className="mb-4 text-sm font-semibold text-black">
              Traffic by Website
            </h1>
            <ul className="w-full space-y-4">
              {trafficMetrics.map(({ name, value }) => (
                <li
                  key={name}
                  className="flex w-full items-center justify-between gap-4"
                >
                  <p className="w-16 shrink-0 text-sm">{name}</p>
                  <div className="h-[3px] w-full bg-black/10">
                    <div
                      style={{ width: `${value}%` }}
                      className="h-full bg-black"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="rounded-2xl bg-[#F7F9FB] p-6">
            <h1 className="mb-4 text-sm font-semibold text-black">
              Reports Generated
            </h1>
            <BarChart
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    usePointStyle: true,
                    boxWidth: 5,
                    callbacks: {
                      label: function (context) {
                        const { y: value } = context.parsed;
                        const label = formatToLocaleString(value);
                        return `Total: ${label}`;
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: { drawOnChartArea: false },
                    title: { display: false },
                  },
                  y: {
                    grace: "5%",
                    title: { display: false },
                    grid: { drawOnChartArea: false },
                    ticks: {
                      callback: function (value) {
                        return formatToLocaleString(+value);
                      },
                    },
                  },
                },
              }}
              datasetIdKey="page-visits"
              data={{
                labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
                datasets: [
                  {
                    label: "Declined",
                    data: [55, 70, 40, 50, 67, 59],
                    backgroundColor: [
                      "rgba(149, 164, 252, 1)",
                      "rgba(186, 237, 189, 1)",
                      "rgba(28, 28, 28, 1)",
                      "rgba(177, 227, 255, 1)",
                      "rgba(168, 197, 218, 1)",
                      "rgba(161, 227, 203, 1)",
                    ],
                    borderRadius: 8,
                  },
                ],
              }}
            />
          </div>
          <div className="rounded-2xl bg-[#F7F9FB] p-6">
            <h1 className="mb-4 text-sm font-semibold text-black">
              Traffic by Location
            </h1>
            <div className="grid grid-cols-2 items-center gap-8">
              <div>
                <DoughnutChart
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        usePointStyle: true,
                        boxWidth: 5,
                        callbacks: {
                          label: function (context) {
                            const value = context.parsed;
                            const label = formatToLocaleString(value);
                            return `Total: ${label}`;
                          },
                        },
                      },
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  }}
                  datasetIdKey="traffic-by-location"
                  data={{
                    labels: countryVisits.map(({ name }) => name),
                    datasets: [
                      {
                        label: "Traffic by location",
                        data: countryVisits.map(({ visits }) => visits),
                        backgroundColor: [
                          "rgba(28, 28, 28, 1)",
                          "rgba(161, 227, 203, 1)",
                          "rgba(177, 227, 255, 1)",
                          "rgba(168, 197, 218, 1)",
                        ],
                        borderRadius: 8,
                      },
                    ],
                  }}
                />
              </div>
              <ul>
                {countryVisits.map(({ name, visits }) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-4"
                  >
                    <h1
                      className={clsx(
                        "relative ml-3 whitespace-nowrap text-sm font-normal text-black before:absolute before:-left-3 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full",
                        {
                          "before:bg-black": name === "Nigeria",
                          "before:bg-[#A1E3CB]": name === "Ghana",
                          "before:bg-[#B1E3FF]": name === "Kenya",
                          "before:bg-[#A8C5DA]": name === "Benin Republic",
                        },
                      )}
                    >
                      {name}
                    </h1>
                    <p className="text-xs text-black">
                      {calculatePercentage(
                        visits,
                        countryVisits.map(({ visits }) => visits),
                      )}
                      %
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="rounded-2xl bg-[#F7F9FB] p-6">
            <h1 className="mb-4 text-sm font-semibold text-black">
              Marketing & SEO
            </h1>
            <BarChart
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    usePointStyle: true,
                    boxWidth: 5,
                    callbacks: {
                      label: function (context) {
                        const { y: value } = context.parsed;
                        const label = formatToLocaleString(value);
                        return `Total: ${label}`;
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: { drawOnChartArea: false },
                    title: { display: false },
                  },
                  y: {
                    grace: "5%",
                    title: { display: false },
                    ticks: {
                      callback: function (value) {
                        return formatToLocaleString(+value);
                      },
                    },
                  },
                },
              }}
              datasetIdKey="page-visits"
              data={{
                labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
                datasets: [
                  {
                    label: "Declined",
                    data: [55, 70, 40, 50, 67, 59],
                    backgroundColor: [
                      "rgba(149, 164, 252, 1)",
                      "rgba(186, 237, 189, 1)",
                      "rgba(28, 28, 28, 1)",
                      "rgba(177, 227, 255, 1)",
                      "rgba(168, 197, 218, 1)",
                      "rgba(161, 227, 203, 1)",
                    ],
                    borderRadius: 8,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-min w-full shrink-0 space-y-6 rounded-3xl bg-[#FFF8F8] p-6 lg:w-64">
        <div id="notifications">
          <h1 className="mb-4 text-sm text-black">Notifications</h1>
          <ul className="space-y-4">
            {notifications.map((item) => (
              <ListItem key={item.text} {...item} />
            ))}
          </ul>
        </div>
        <div id="activities">
          <h1 className="mb-4 text-sm text-black">Activities</h1>
          <ul className="space-y-4">
            {activities.map((item) => (
              <ListItem key={item.text} {...item} />
            ))}
          </ul>
        </div>
        <div id="contacts">
          <h1 className="mb-4 text-sm text-black">Contacts</h1>
          <ul className="space-y-4">
            {contacts.map((item) => (
              <ListItem key={item.text} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
