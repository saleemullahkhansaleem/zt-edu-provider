export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">TZ Education Provider</h3>
            <p className="text-sm mt-2">
              Empowering futures through quality education
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} TZ Education Provider. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
