import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Lottie from "lottie-react";
import animationData from "../../../lotties/setting_up_animation.json";
import { walsheim_bold, walsheim_light, walsheim_medium_bold } from "@/components/constants";


export default function CustomDialog() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center"
            >
                <h2 className={`text-2xl font-bold text-gray-900 ${walsheim_medium_bold.className}`}>ETERNITY LABS</h2>
                <p className={`text-gray-500 mt-2 ${walsheim_light.className}`}>CUSTOMIZING DASHBOARD FOR YOUR COMPANY</p>
                <div className="mt-4 flex justify-center">
                    <Lottie animationData={animationData} className="w-48 h-48" loop={true} />
                </div>
                <p className={`mt-4 text-gray-700 ${walsheim_light.className}`}>
                    Building the <span className={`${walsheim_bold.className}`}>caller</span>....
                </p>
                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    Close
                </button>
            </motion.div>
        </div>
        
        </Dialog>
    );
}
