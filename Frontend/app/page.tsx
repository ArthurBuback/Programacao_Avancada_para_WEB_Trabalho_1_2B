'use client'
import React from "react";
import Link from "next/link";

const Home = ({ }) => {
    return (
        <main className="min-h-screen bg-cyan-500 flex items-center justify-center p-10">
            <div className="max-w-4xl h-full bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-cyan-500">DOSITIO</h1>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">O que é?</h2>
                    <p className="text-gray-600">
                         Utilizando de uma API, a aplicação permite a tuilização de uma lista que mostra todos os produtos pre-selecionados através da utilização do sistema de listas.
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Listagem de Produtos</h2>
                    <p className="list-disc list-inside text-gray-600">
                        <strong>A Respeito dos Produtos:</strong> O sistema de listas garante todas as informações a respeito dos produtos, com estas sendo: o nome, a quantidade e a categoria.
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Mas.... Como Funciona?</h2>
                    <p className="text-gray-600">
                        Ocorre uma integração com a API, que utiliza suas informações previamente armazenadas no Sistema de Banco de Dados.
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Por que não testa?</h2>
                    <p className="text-gray-600">
                        Ao pressionar em login, você iniciará o processo de teste da aplicação.
                    </p>
                </section>
                <div className='flex justify-end'>
                    <Link href="/login" className=' inline-block px-4 py-2 rounded font-bold mb-2 bg-cyan-500 text-white'>Login</Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
