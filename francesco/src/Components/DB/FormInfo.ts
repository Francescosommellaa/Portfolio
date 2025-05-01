const FormInfo: { number: string; label: string, type: string, name: string, placeholder: string, id: string }[] = [
    {
        id: "name",
        number: "o1",
        label: "Nome Completo *",
        type: "text",
        name: "name",
        placeholder: "Mario Rossi",
    },
    {
        id: "phone",
        number: "o2",
        label: "Numero di Telefono *",
        type: "phone",
        name: "phone",
        placeholder: "3783876455",
    },
    {
        id: "email",
        number: "o3",
        label: "Email *",
        type: "email",
        name: "email",
        placeholder: "fra@example.com",
    },
    {
        id: "message",
        number: "o4",
        label: "Messaggio",
        type: "textarea",
        name: "message",
        placeholder: "Ciao Fra, Vorrei il tuo aiuto per...",
    },
];

export default FormInfo;