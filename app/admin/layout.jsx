import "@/app/globals.css";
import Link from "next/link";

export const metadata = {
  title: "AdEase Admin Panel",
  description: "Manage all ad requests, clients, and campaigns from one place.",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-orange-500 text-white flex flex-col">
            <div className="px-6 py-4 text-2xl font-bold border-b border-orange-400">
              AdEase Admin
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {[
                { name: "Dashboard", href: "/(admin)" },
                { name: "Submissions", href: "/(admin)/submissions" },
                { name: "Clients", href: "/(admin)/clients" },
                { name: "Brands", href: "/(admin)/brands" },
                { name: "Projects", href: "/(admin)/projects" },
                { name: "Due Dates", href: "/(admin)/due-dates" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-3 py-2 rounded hover:bg-orange-600 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white shadow-inner overflow-y-auto">
            <header className="border-b mb-6 pb-3 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-orange-600">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-500">Manage your AdEase system</p>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
