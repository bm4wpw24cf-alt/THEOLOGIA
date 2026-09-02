import { hasAdminSessionCookie } from "@/lib/admin-auth";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authenticated = await hasAdminSessionCookie();

  return (
    <main className="mx-auto w-[min(1100px,92%)] py-12 sm:py-16">
      <header className="mb-10 border-b border-border pb-6">
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase">THEOLOGIA</p>
        <h1 className="mt-1 font-serif text-[2rem] text-ink">Admin</h1>
      </header>

      {authenticated ? <AdminDashboard /> : <AdminLogin />}
    </main>
  );
}
