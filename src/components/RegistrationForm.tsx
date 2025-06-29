"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';

type ApiResponse = {
  message?: string;
  error?: string;
};

export default function RegistroForm() {
  

  const [children, setChildren] = useState([{ name: "", age: "" }]);
  const [parentInfo, setParentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

       const { i18n, ready } = useTranslation();
        const [isReady, setIsReady] = useState(false);
      
        useEffect(() => {
          if (ready) {
            setIsReady(true);
          }
        }, [ready]);
      
        if (!isReady) {
          return <div>Loading...</div>;
        }
  

  // Helper for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!parentInfo.name.trim()) return "El nombre del padre o madre es obligatorio.";
    if (!parentInfo.email.trim()) return "El correo es obligatorio.";
    if (!emailRegex.test(parentInfo.email.trim())) return "El correo no es válido.";
    if (!parentInfo.phone.trim()) return "El teléfono es obligatorio.";
    if (!parentInfo.address.trim()) return "La dirección es obligatoria.";

    if (children.length === 0) return "Debe agregar al menos un niño.";
    for (let i = 0; i < children.length; i++) {
      if (!children[i].name.trim()) return `El nombre del niño ${i + 1} es obligatorio.`;
      if (!children[i].age.trim()) return `La edad del niño ${i + 1} es obligatoria.`;
      if (isNaN(Number(children[i].age)) || Number(children[i].age) <= 0)
        return `La edad del niño ${i + 1} debe ser un número válido mayor que 0.`;
    }
    return null;
  };

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
    setApiResponse(null);
    setValidationError(null);

    // Client-side validation
    const error = validateForm();
    if (error) {
      setValidationError(error);
      return;
    }

    const payload = {
      parent: parentInfo,
      children,
    };

    setLoading(true);

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
      setLoading(false);

      if (!response.ok) {
        throw new Error(result?.error || "Unknown error from server.");
      }

      // Optionally clear the form here on success:
      // setParentInfo({ name: "", email: "", phone: "", address: "", message: "" });
      // setChildren([{ name: "", age: "" }]);
    } catch (error) {
      setLoading(false);
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
      <h2 className="text-2xl font-semibold mb-6 text-center">{i18n.t('Registration')}</h2>

      {/* Validation error display */}
      {validationError && (
        <div className="max-w-5xl mx-auto mb-4 p-4 rounded shadow text-center font-semibold bg-red-100 text-red-700">
          {validationError}
        </div>
      )}

      {/* Show loader if loading, otherwise show form */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <span className="text-lg font-semibold">{i18n.t('Sending information')}...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Parent Info */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">
                {i18n.t('Father or Mother Information')}
              </h3>
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder={i18n.t('Father or Mother Name')}
                value={parentInfo.name}
                onChange={(e) => handleParentChange("name", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder={i18n.t('Email')}
                type="email"
                value={parentInfo.email}
                onChange={(e) => handleParentChange("email", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder={i18n.t('Phone number')}
                value={parentInfo.phone}
                onChange={(e) => handleParentChange("phone", e.target.value)}
                required
              />
              <input
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder={i18n.t('Address')}
                value={parentInfo.address}
                onChange={(e) => handleParentChange("address", e.target.value)}
                required
              />
              <textarea
                className="border p-2 rounded w-full text-white bg-[#b53639]"
                placeholder={i18n.t('Message')}
                rows={3}
                value={parentInfo.message}
                onChange={(e) => handleParentChange("message", e.target.value)}
              />
            </div>

            {/* Children Info */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">
                {i18n.t('Child/Children Information')}
              </h3>
              {children.map((child, index) => (
                <div key={index} className="rounded relative">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-full space-y-2">
                      <input
                        className="border p-2 rounded w-full text-white bg-[#b53639]"
                        placeholder={i18n.t('childNamePlaceholder', { num: index + 1 })}
                        value={child.name}
                        onChange={(e) =>
                          handleChildChange(index, "name", e.target.value)
                        }
                        required
                      />
                      <input
                        className="border p-2 rounded w-full text-white bg-[#b53639]"
                        placeholder={i18n.t('childAgePlaceholder', { num: index + 1 })}                        value={child.age}
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
                        title="Remove child"
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
                + {i18n.t('Add child')}
              </button>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <button
              type="submit"
              className="text-white bg-[#b53639] px-20 md:px-6 py-2 rounded font-bold"
              disabled={loading}
            >
             {i18n.t('Submit')}
            </button>
          </div>
        </form>
      )}

      {/* Show API response below the form when not loading and response exists */}
      {!loading && apiResponse && (
        <div className={`max-w-5xl mx-auto mt-8 p-4 rounded shadow text-center font-semibold ${
          apiResponse.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {apiResponse.error || apiResponse.message}
        </div>
      )}

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-5 md:gap-20">
        <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-5">
          <Image
            src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-10.png"
            alt="Phone number"
            width={30}
            height={20}
          />
          <div className="font-bold">
            <p className="textl-lg md:text-2xl">(714) 227-5173</p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-5">
          <Image
            src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-11.png"
            alt="Email"
            width={40}
            height={20}
          />
          <div className="font-bold">
            <p className="textl-lg md:text-2xl">gammy.ruiz@usw.salvationarmy.org</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
        <div className="flex flex-row items-center justify-center gap-5">
                            <a href="https://www.facebook.com/SalvationArmyUSA/?locale=es_LA" target="_blank"><Image
                              src={
                                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-12.png"
                              }
                              alt="Email"
                              className="mb-4"
                              width={40}
                              height={20}
                            /></a>
                            <a href="https://www.instagram.com/salvationarmyus/?hl=es" target="_blank"><Image
                              src={
                                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-13.png"
                              }
                              alt="Email"
                              className="mb-4"
                              width={40}
                              height={20}
                            /></a>
                           <a href="https://www.linkedin.com/company/salvationarmyus/" target="_blank"> <Image
                              src={
                                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-14.png"
                              }
                              alt="Email"
                              className="mb-4"
                              width={40}
                              height={20}
                            /></a>
                          </div>
          <div className="font-bold">
            <p className="text-2xl hidden md:block">Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}
