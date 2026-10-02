// Identidad de este agente. Este archivo (junto con el .env) es lo unico que
// cambia entre los dos backends: el resto del codigo es identico.

export const AGENTE = {
    nombre: 'Setsukū',
    autor: 'IA-A',          // como aparece en el historial
    postura: 'A FAVOR',
    archivo: 'debate_final_a.json'
};

export const RIVAL = {
    nombre: 'NOVA',
    autor: 'IA-B',
    postura: 'EN CONTRA'
};
