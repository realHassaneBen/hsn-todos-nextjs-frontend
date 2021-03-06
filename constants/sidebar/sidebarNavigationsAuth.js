import {
    FaArrowLeft,
    FaChartPie,
    FaInbox,
    FaShoppingBag,
    FaUser,
} from "react-icons/fa";
import { v4 as uuid } from "uuid";

export const sidebarNavigationsAuth = [
    {
        id: uuid(),
        icon: FaChartPie,
        label: "Dashboard",
        slug: "dashboard",
        href: "/dashboard",
        hrefMethod: () => router.push("/dashboard"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaInbox,
        label: "Inbox",
        slug: "app-inbox",
        href: "/app/inbox",
        hrefMethod: () => router.push("/app/inbox"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaInbox,
        label: "Today",
        slug: "app-today",
        href: "/app/today",
        hrefMethod: () => router.push("/app/today"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaInbox,
        label: "Upcoming",
        slug: "app-upcoming",
        href: "/app/upcoming",
        hrefMethod: () => router.push("/app/upcoming"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaInbox,
        label: "Filters & Labels",
        slug: "app-filters-labels",
        href: "/app/inbox",
        hrefMethod: () => router.push("/app/filters-labels"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaUser,
        label: "Profile",
        slug: "profile",
        href: "/profile",
        hrefMethod: () => router.push("/profile"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
    {
        id: uuid(),
        icon: FaArrowLeft,
        label: "Sign Out",
        slug: "auth-logout",
        href: "/",
        hrefMethod: () => router.push("/"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
];
