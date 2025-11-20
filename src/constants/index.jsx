import {
  Home,
  Headset,
  IdCard,
  Mail,
  Building,
  Building2,
  CirclePlus,
  UserRoundPen,
  CreditCard,
  CalendarRange,
  CalendarPlus2,
  UserRoundCheck,
  FileCheck2,
  FolderOpen,
  LayoutList,
  Calendar,
  CheckCircle,
} from "lucide-react";

export const navbarLinks = [
  {
    title: "Communication",
    links: [
      {
        label: "Inbox",
        icon: Mail,
        path: "/dashboard/inbox",
      },
    ],
  },
  {
    title: "Organization",
    links: [
      {
        label: "My Membership",
        icon: IdCard,
        path: "/dashboard/membership",
      },
      {
        label: "Resources", // NEW - Add Resources here
        icon: FolderOpen,
        path: "/dashboard/resources",
      },
      {
        label: "Create Organization",
        icon: Building,
        path: "/dashboard/create-organization",
      },
      {
        label: "Join Organization",
        icon: CirclePlus,
        path: "/dashboard/join-organization",
      },
      {
        label: "Jobs",
        icon: LayoutList,
        path: "/dashboard/jobs",
      },
    ],
  },

  {
    title: "Transactions",
    links: [
      {
        label: "All Transactions",
        icon: CreditCard,
        path: "/dashboard/transactions",
      },
      {
        label: "Invoices",
        icon: FileCheck2,
        path: "/dashboard/invoices",
      },
      {
        label: "Subscriptions",
        icon: UserRoundCheck,
        path: "/dashboard/membership-subscription",
      },
    ],
  },

  {
    title: "Event",
    links: [
      {
        label: "All Events",
        icon: CalendarRange,
        path: "/dashboard/all-events",
      },
      {
        label: "Booked Events",
        icon: CalendarPlus2,
        path: "/dashboard/booked-events",
      },
      {
        label: "Appointments",
        icon: Calendar,
        path: "/dashboard/all-appointments",
      },
      {
        label: "Attendance",
        icon: CheckCircle,
        path: "/dashboard/all-attendance",
      },
      {
        label: "Tasks",
        icon: CheckCircle,
        path: "/dashboard/all-tasks",
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        label: "Profile Settings",
        icon: UserRoundPen,
        path: "/dashboard/profile-settings",
      },
      {
        label: "Help & Support",
        icon: Headset,
        path: "/dashboard/help-support",
      },
    ],
  },
];

export const recentActivities = [
  {
    id: 1,
    type: "member_joined",
    description: "Jane Doe joined the organization",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "event_created",
    description: "New event 'Charity Run 2025' was created",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "feedback",
    description: "Feedback submitted for 'Health Seminar'",
    time: "3 days ago",
  },
  {
    id: 8,
    type: "member_joined",
    description: "Jane Doe joined the organization",
    time: "2 hours ago",
  },
  {
    id: 7,
    type: "event_created",
    description: "New event 'Charity Run 2025' was created",
    time: "1 day ago",
  },
  {
    id: 6,
    type: "feedback",
    description: "Feedback submitted for 'Health Seminar'",
    time: "3 days ago",
  },
  {
    id: 9,
    type: "feedback",
    description: "Feedback submitted for 'Health Seminar'",
    time: "3 days ago",
  },
];

export const members = [
  {
    id: "mem001",
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+2348012345678",
    role: "Member",
    status: "Active",
    joinedAt: "2024-08-12",
  },
  {
    id: "mem002",
    fullName: "John Smith",
    email: "john.smith@example.com",
    phone: "+2348098765432",
    role: "Admin",
    status: "Active",
    joinedAt: "2023-12-05",
  },
  {
    id: "mem003",
    fullName: "Fatima Ibrahim",
    email: "fatima.ibrahim@example.com",
    phone: "+2348034567890",
    role: "Moderator",
    status: "Pending",
    joinedAt: "2025-01-10",
  },
  {
    id: "mem004",
    fullName: "Chinedu Okoro",
    email: "chinedu.okoro@example.com",
    phone: "+2348022334455",
    role: "Member",
    status: "Inactive",
    joinedAt: "2023-06-20",
  },
  {
    id: "mem005",
    fullName: "Grace Eze",
    email: "grace.eze@example.com",
    phone: "+2348076543210",
    role: "Member",
    status: "Active",
    joinedAt: "2024-02-18",
  },
  {
    id: "mem006",
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+2348012345678",
    role: "Member",
    status: "Active",
    joinedAt: "2024-08-12",
  },
  {
    id: "mem007",
    fullName: "John Smith",
    email: "john.smith@example.com",
    phone: "+2348098765432",
    role: "Admin",
    status: "Active",
    joinedAt: "2023-12-05",
  },
  {
    id: "mem008",
    fullName: "Fatima Ibrahim",
    email: "fatima.ibrahim@example.com",
    phone: "+2348034567890",
    role: "Moderator",
    status: "Pending",
    joinedAt: "2025-01-10",
  },
  {
    id: "mem009",
    fullName: "Chinedu Okoro",
    email: "chinedu.okoro@example.com",
    phone: "+2348022334455",
    role: "Member",
    status: "Inactive",
    joinedAt: "2023-06-20",
  },
  {
    id: "mem0010",
    fullName: "Grace Eze",
    email: "grace.eze@example.com",
    phone: "+2348076543210",
    role: "Member",
    status: "Active",
    joinedAt: "2024-02-18",
  },
];
