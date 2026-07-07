import React from 'react';
import medicaps from '../images/medicaps.png';
import ken from '../images/ken.png';
import ups from '../images/ups.png';
import bips from '../images/bips.avif';

export default function Education() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-6">

            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-14">
                Education
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500">
                    <img src={medicaps} alt="medicaps" className="w-16 h-16 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">MCA</h3>
                    <p className="text-center text-gray-600 mb-3">
                        Masters of Computer Applications
                    </p>
                    <h4 className="text-center font-semibold text-blue-600">
                        Medi-Caps University, Indore (M.P.)
                    </h4>
                    <h4 className="text-center text-gray-500 mt-2">
                        2024 - 2026
                    </h4>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500">
                    <img src={bips} alt="bips" className="w-16 h-16 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">BCA</h3>
                    <p className="text-center text-gray-600 mb-3">
                        Bachelors of Computer Applications
                    </p>
                    <h4 className="text-center font-semibold text-green-600">
                        Bhartiya Institute of Professional Studies (BIPS), Ujjain (M.P.)
                    </h4>
                    <h4 className="text-center text-gray-500 mt-2">
                        2020 - 2023
                    </h4>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500">
                    <img src={ups} alt="ups" className="w-16 h-16 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">12th</h3>
                    <p className="text-center text-gray-600 mb-3">
                        Commerce
                    </p>
                    <h4 className="text-center font-semibold text-purple-600">
                        Ujjain Public School, Ujjain (M.P.)
                    </h4>
                    <h4 className="text-center text-gray-500 mt-2">
                        2018 - 2019
                    </h4>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500">
                    <img src={ken} alt="" className="w-16 h-16 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">10th</h3>
                    <h4 className="text-center font-semibold text-orange-600 mt-6">
                        Ken International School, Ujjain (M.P.)
                    </h4>
                    <h4 className="text-center text-gray-500 mt-2">
                        2017 - 2018
                    </h4>
                </div>

            </div>

        </section>
    );
}