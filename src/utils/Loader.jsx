import { Loader2 } from "lucide-react";

const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-50">
    <Loader2 className="w-12 h-12 text-amber-900 animate-spin" />
    <p className="mt-4 text-lg text-gray-700 font-medium">Loading...</p>
  </div>
);

export default Loader;
