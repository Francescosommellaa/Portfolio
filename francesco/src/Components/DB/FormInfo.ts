const FormInfo: { name: string, type: string, placeholder: string, id: string }[] = [
    {
        id: "name",
        name: "Nome Completo",
        type: "text",
        placeholder: "name*",
    },
    {
        id: "phone",
        name: "Cellulare",
        type: "phone",
        placeholder: "phone*",
    },
    {
        id: "email",
        name: "Email",
        type: "email",
        placeholder: "email*",
    },
    {
        id: "message",
        name: "Messaggio",
        type: "textarea",
        placeholder: "messaggio*",
    },
];

export default FormInfo;