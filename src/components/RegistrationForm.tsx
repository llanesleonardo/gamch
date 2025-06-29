"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegistroForm() {
  const [children, setChildren] = useState([{ name: "", age: "" }]);
  const [parentInfo, setParentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // New state for loading and API response
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleAddChild = () => {
    setChildren([...children, { name: "", age: "" }]);
  };

  const handleRemoveChild = (index: number) => {
    const updated = [...children];
    updated.splice(index, 1);
    setChildren(updated);
  };

  const handleChildChange = (
    index: number,
    field: "name" | "age",
    value: string
  ) => {
    const updated = [...children];
    updated[index][field] = value;
    setChildren(updated);
  };

  const handleParentChange = (field: string, value: string) => {
    setParentInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      parent: parentInfo,
      children,
    };

    setLoading(true); // Start loading
    setApiResponse(null); // Clear previous response

    try {
      const response = await fetch(
        `https://gamch-d9g9c7adfhhwc6aq.westus2-01.azurewebsites.net/api/mailchimpCreate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        console.error("Invalid JSON response:", text, jsonError);
        result = { error: "Received an invalid JSON response from the server." };
      }

      setApiResponse(result);
      setLoading(false); // Stop loading

      if (!response.ok) {
        throw new Error(result?.error || "Unknown error from server.");
      }

      // Optionally clear the form here if you want:
      // setParentInfo({ name: "", email: "", phone: "", address: "", message: "" });
      // setChildren([{ name: "", age: "" }]);

    } catch (error) {
      setLoading(false); // Stop loading
      if (error instanceof Error) {
        setApiResponse({ error: error.message });
        console.error("Error submitting form:", error.message);
      } else {
        setApiResponse({ error: "Error al enviar el formulario ❌" });
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <section className="bg-[#fffbf3] px-6 py-10" id="registration">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registro</h2>

      {/* Show loader if loading, otherwise show form */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <span className="text-lg font-semibold">Cargando...</span>
          {/* You can replace with a spinner component if you like */}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Parent Info */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">
                Información del Padre o Madre
              </h3>
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder="Nombre del padre o madre"
                value={parentInfo.name}
                onChange={(e) => handleParentChange("name", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder="Correo"
                type="email"
                value={parentInfo.email}
                onChange={(e) => handleParentChange("email", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder="Teléfono"
                value={parentInfo.phone}
                onChange={(e) => handleParentChange("phone", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder="Dirección"
                value={parentInfo.address}
                onChange={(e) => handleParentChange("address", e.target.value)}
                required
              />
              <textarea
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder="Mensaje"
                rows={3}
                value={parentInfo.message}
                onChange={(e) => handleParentChange("message", e.target.value)}
              />
            </div>

            {/* Children Info */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">
                Información del Niño o Niños
              </h3>

              {children.map((child, index) => (
                <div key={index} className="rounded relative">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-full space-y-2">
                      <input
                        className="border p-2 rounded w-full text-white bg-[#b53639]"
                        placeholder={`Nombre del niño ${index + 1}`}
                        value={child.name}
                        onChange={(e) =>
                          handleChildChange(index, "name", e.target.value)
                        }
                        required
                      />
                      <input
                        className="border p-2 rounded w-full text-white bg-[#b53639]"
                        placeholder={`Edad del niño ${index + 1}`}
                        value={child.age}
                        onChange={(e) =>
                          handleChildChange(index, "age", e.target.value)
                        }
                        required
                      />
                    </div>
                    {children.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveChild(index)}
                        className="text-red-600 hover:text-red-800 text-lg font-bold"
                        title="Eliminar este niño"
                      >
                        ❌
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddChild}
                className="text-[#b53639] underline font-medium hover:underline"
              >
                + Agregar otro niño
              </button>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <button
              type="submit"
              className="text-white bg-[#b53639] px-20 md:px-6 py-2 rounded font-bold"
              disabled={loading}
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      )}

      {/* Show API response below the form when not loading and response exists */}
      {!loading && apiResponse && (
        <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow text-black">
          <h4 className="font-semibold mb-2">Respuesta del servidor:</h4>
          <pre className="whitespace-pre-wrap break-all">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}

      {/* Contact Info */}
      {/* ... (rest of your contact info code remains unchanged) ... */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-5 md:gap-20">
        {/* ... */}
      </div>
    </section>
  );
}
