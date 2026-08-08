import { FiDollarSign, FiShoppingBag, FiBox, FiUsers } from "react-icons/fi";

const DashboardCards = ({ stats }) => {
    const cardData = [
        { title: "Total Revenue", value: stats?.revenue || "₹0", icon: FiDollarSign, change: "Updated live", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { title: "Total Orders", value: stats?.orders || "0", icon: FiShoppingBag, change: "Customer Orders", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
        { title: "Total Products", value: stats?.products || "0", icon: FiBox, change: "Catalog Items", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
        { title: "Registered Users", value: stats?.users || "0", icon: FiUsers, change: "Active Accounts", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cardData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className={`p-6 bg-[#0c0608] border ${stat.border} rounded-2xl shadow-xl flex flex-col justify-between`}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-rose-200/60">{stat.title}</span>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-serif text-white mb-1">{stat.value}</h3>
                            <p className="text-[11px] text-rose-200/50 tracking-wider">{stat.change}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardCards;