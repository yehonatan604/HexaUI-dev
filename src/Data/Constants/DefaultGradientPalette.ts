import { TColorPalette } from "../Types/TColorPalette";

const defaultGradientPalette: TColorPalette = {
    primary: "from-blue-400 via-blue-600 via-blue-800 via-green-500 via-green-800 to-cyan-400",
    secondary: "from-purple-400 via-purple-600 via-purple-800 via-red-500 via-red-800 to-purple-800",
    standrad: "from-stone-800 via-stone-600 via-stone-500 via-netural-300 via-netural-200 to-zinc-500",
    info: "from-zinc-400 via-zinc-600 via-zinc-800 via-stone-500 via-yellow-stone to-slate-600",
    select: "from-lime-400 via-lime-600 via-lime-800 via-green-500 via-green-800 to-green-400",
    cancel: "from-rose-400 via-rose-600 via-rose-800 via-red-500 via-red-800 to-lime-600",
    approve: "from-indigo-400 via-indigo-600 via-indigo-800 via-yellow-500 via-yellow-800 to-blue-400",
    success: "from-green-400 via-green-600 via-green-800 via-violet-500 via-violet-800 to-lime-400",
    warning: "from-amber-400 via-amber-600 via-amber-800 via-orange-500 via-yellow-800 to-rose-400",
    failure: "from-red-400 via-red-600 via-zinc-200 via-zinc-100 to-red-700",
}

export default defaultGradientPalette;