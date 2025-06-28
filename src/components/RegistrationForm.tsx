"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegistroForm() {
  const [children, setChildren] = useState([{ name: "", age: "" }]);

  const handleAddChild = () => {
    setChildren([...children, { name: "", age: "" }]);
  };

  const handleRemoveChild = (index: number) => {
    const updated = [...children];
    updated.splice(index, 1); // remove 1 item at index
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", children);
  };

  return (
    <section className="bg-[#fffbf3] px-6 py-10" id="registration">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registro</h2>

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
              required
            />
            <input
              className="border p-2 rounded w-full text-white bg-[#b53639]"
              placeholder="Correo"
              type="email"
              required
            />
            <input
              className="border p-2 rounded w-full text-white bg-[#b53639]"
              placeholder="Teléfono"
              required
            />
            <input
              className="border p-2 rounded w-full text-white bg-[#b53639]"
              placeholder="Dirección"
              required
            />
            <textarea
              className="border p-2 rounded w-full text-white bg-[#b53639]"
              placeholder="Mensaje"
              rows={3}
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

        {/* Message and Submit */}
        <div className="space-y-4 text-center md:text-left">
          <button
            type="submit"
            className="text-white bg-[#b53639] px-20 md:px-6 py-2 rounded font-bold "
          >
            Enviar mensaje
          </button>
        </div>
      </form>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-5 md:gap-20">
        <div className="flex flex-row items-start justify-center gap-5">
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-10.png"
              }
              alt="Phone number"
              className="mb-4"
              width={30}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="textl-lg md:text-2xl">(662) 0000 000</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
          <div className="">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-11.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="textl-lg md:text-2xl">hola@email.com</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-12.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-13.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-14.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="text-2xl hidden md:block">Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}
