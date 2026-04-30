import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔝 HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              T
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              TeamTask
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all active:scale-95"
            >
              Sign up free
            </button>
          </div>
        </div>
      </header>

      {/* 🚀 HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Manage Teams & Tasks <span className="text-blue-600">with ease</span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create projects, assign tasks, and track progress in real-time. 
            Built for teams who want to collaborate efficiently with proper role-based access control.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center gap-3 mx-auto"
          >
            Get Started — It's Free
          </button>

          <p className="text-xs text-gray-500 mt-4">
            No credit card required • Cancel anytime
          </p>
        </div>
      </main>

      {/* 📌 FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Everything your team needs
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Powerful yet simple tools to keep your projects on track
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                📁
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Project Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your work into clean, structured projects with folders and milestones.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Smart Task Assignment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Assign tasks to the right team members with deadlines, priorities, and clear responsibilities.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                📊 
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Real-time Progress Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor task status, deadlines, and team performance with beautiful visual dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔻 FOOTER */}
      <footer className="bg-white border-t py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Ritick Roushan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}