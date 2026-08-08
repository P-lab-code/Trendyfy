import AdminLayout from "../../components/Admin/AdminLayout";

const ManageUsers = () => {
    return (
        <AdminLayout>
            <div className="flex flex-col space-y-6">
                <div className="bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl">
                    <h1 className="text-2xl font-serif font-bold text-white">Manage Users</h1>
                    <p className="text-xs text-rose-200/60 uppercase tracking-wider">View registered platform users and account permissions</p>
                </div>
                <div className="bg-[#0c0608] border border-rose-500/20 p-8 rounded-2xl shadow-xl text-center">
                    <p className="text-xs text-rose-200/60 uppercase tracking-widest">
                        User management database viewer ready for connection.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageUsers;