import BugIcon from "@/public/svgs/beetle.svg";
import BroadcastIcon from "@/public/svgs/broadcast.svg";
import UserIcon from "@/public/svgs/user.svg";

export const infoCardData = [
  {
    title: "Requests",
    value: 7265,
    rate: 11.02,
  },
  {
    title: "KYC",
    value: 3671,
    rate: 0.03,
  },
  {
    title: "Tasks",
    value: 156,
    rate: 15.03,
  },
  {
    title: "Customers",
    value: 2318,
    rate: 6.08,
  },
] as const;

export const notifications = [
  {
    icon: <BugIcon />,
    text: "You fixed a bug.",
    subText: "Just now",
  },
  {
    icon: <UserIcon />,
    text: "New user registered.",
    subText: "59 minutes ago",
  },
  {
    icon: <BugIcon />,
    text: "You fixed a bug.",
    subText: "12 hours ago",
  },
  {
    icon: <BroadcastIcon />,
    text: "Andi Lane subscribed to you.",
    subText: "Today, 11:59 AM",
  },
];

export const activities = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Changed the style.",
    subText: "Just now",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Released a new version.",
    subText: "59 minutes ago",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Submitted a bug.",
    subText: "12 hours ago",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Modified A data in Page X.",
    subText: "Today, 11:59 AM",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Deleted a page in Project X.",
    subText: "Feb 2, 2024",
  },
];

export const contacts = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Natali Craig",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Drew Cano",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Andi Lane",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Koray Okumus",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Kate Morrison",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__",
    text: "Melody Macy",
  },
];

export const trafficMetrics = [
  {
    name: "Google",
    value: 20,
  },
  {
    name: "YouTube",
    value: 50,
  },
  {
    name: "Instagram",
    value: 15,
  },
  {
    name: "Pinterest",
    value: 40,
  },
  {
    name: "Facebook",
    value: 70,
  },
  {
    name: "Twitter",
    value: 30,
  },
];

export const countryVisits = [
  { name: "Nigeria", visits: 2000 },
  { name: "Ghana", visits: 700 },
  { name: "Kenya", visits: 300 },
  { name: "Benin Republic", visits: 200 },
];
