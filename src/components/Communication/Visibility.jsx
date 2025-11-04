import React, { useState } from "react";

const Visibility = () => {
    const [settings, setSettings] = useState({
        leads: "visible to users",
        contacts: "visible to users only if I'm an owner or collaborator",
        properties: "visible to users only if I'm an owner",
    });

    const handleChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
    };

    const handleSave = () => {
        alert("Settings saved!");
    };

    const options = [
        "visible to users",
        "visible to users only if I'm an owner or collaborator",
        "visible to users only if I'm an owner",
    ];

    return (
        <div className="p-6w-full mt-8 border p-5 border-gray-300 rounded-lg shadow-sm bg-white ">
            <p className="text-gray-600 text-sm mb-6">
                Changes to visibility settings will be applied to all past emails as well as all future emails once they are saved.
                Any emails in which manual visibility settings were applied will remain the same.
            </p>

            {/* Leads */}
            <div className="flex flex-col md:flex-row md:items-center  mb-4 border-b-1 border-gray-300 p-2">
                <label className="font-medium text-gray-700 mb-2 md:mb-0 md:w-1/2">
                    My email conversations on Leads are
                </label>
                <select
                    value={settings.leads}
                    onChange={(e) => handleChange("leads", e.target.value)}
                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            {/* Contacts */}
            <div className="flex flex-col md:flex-row md:items-center  mb-4 border-b-1 border-gray-300 p-2">
                <label className="font-medium text-gray-700 mb-2 md:mb-0 md:w-1/2">
                    My email conversations on Contacts are
                </label>
                <select
                    value={settings.contacts}
                    onChange={(e) => handleChange("contacts", e.target.value)}
                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            {/* Properties */}
            <div className="flex flex-col md:flex-row md:items-center mb-6 border-b-1 border-gray-300 p-2">
                <label className="font-medium text-gray-700 mb-2 md:mb-0 md:w-1/2">
                    My email conversations on Properties are
                </label>
                <select
                    value={settings.properties}
                    onChange={(e) => handleChange("properties", e.target.value)}
                    className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            {/* Save button */}
            <div className="flex justify-start">
                <button
                    onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Visibility;
