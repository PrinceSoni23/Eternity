'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConnectCRM() {
const router = useRouter();
const searchParams = useSearchParams();
const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

useEffect(() => {
const code = searchParams.get('code');
const platform = searchParams.get('platform');
const state = searchParams.get('state');

if (code && platform) {
  fetch('/api/oauth/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, platform, state }),
  })
    .then((res) => res.json())
    .then(() => {
      router.push('/dashboard');
    })
    .catch((err) => {
      console.error('OAuth callback error:', err);
    });
}
}, [searchParams, router]);

const handleConnect = async (platform: string) => {
const res = await fetch(`/api/oauth/initiate?platform=${platform}`);
const data = await res.json();
if (data.oauthUrl) {
window.location.href = data.oauthUrl;
} else {
alert('Failed to initiate OAuth');
}
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files) {
const filesArray = Array.from(e.target.files);
setSelectedFiles(filesArray);
}
};

const handleUpload = () => {
if (!selectedFiles.length) {
alert('No files selected');
return;
}
alert(`${selectedFiles.length} file(s) ready to be uploaded`);
};

return (
<div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
<div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
{/* LEFT — Upload */}
<div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">
Upload Call Recordings
</h2>
<p className="text-sm text-gray-500 mb-6">
Upload one or more audio files to get started with processing.
</p>

      <label className="block w-full cursor-pointer">
        <div className="w-full border-2 border-dashed border-indigo-300 hover:border-indigo-400 rounded-lg p-6 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition">
          <input
            type="file"
            accept="audio/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="text-sm font-medium">Click or drag audio files here</span>
        </div>
      </label>

      {selectedFiles.length > 0 && (
        <div className="mt-4 max-h-40 overflow-y-auto text-sm text-gray-700">
          <ul className="list-disc ml-5 space-y-1">
            {selectedFiles.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition"
      >
        Upload Files
      </button>
    </div>

    {/* RIGHT — CRM Connect */}
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Connect Your CRM
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Authorize your CRM or call service to let us fetch call recordings directly.
      </p>

      <div className="grid grid-cols-1 gap-4">
        <CRMButton label=" HubSpot" color="bg-orange-500" onClick={() => handleConnect('hubspot')} />
        <CRMButton label=" Zoho" color="bg-green-600" onClick={() => handleConnect('zoho')} />
        <CRMButton label=" Salesforce" color="bg-blue-700" onClick={() => handleConnect('salesforce')} />
        <CRMButton label="Twilio" color="bg-red-600" onClick={() => handleConnect('twilio')} />
      </div>
    </div>
  </div>
</div>
);
}

// Reusable Button Component
function CRMButton({
label,
color,
onClick,
}: {
label: string;
color: string;
onClick: () => void;
}) {
return (
<button
onClick={onClick}
className={`w-full ${color} hover:brightness-110 text-white py-2 px-4 rounded-lg font-medium transition`}
>
{label}
</button>
);
}