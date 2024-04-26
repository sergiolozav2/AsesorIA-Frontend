import { useQuery } from "@tanstack/react-query";

export function useChats() {
  const query = useQuery({
    queryFn: chatsData,
    queryKey: ["chats"],
  });

  return query;
}

async function chatsData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    list: [
      {
        chatID: 1,
        jid: "59175034784@s.whatsapp.net",
        creadoEn: "2024-03-20T18:57:17.325Z",
        clienteID: 1,
        cliente: null,
        mensajes: [
          {
            self: false,
            message: "Hola, recuerdas mi perro que se perdio?",
            datetime: 1714081271,
          },
          {
            self: true,
            message: "Hola, el rosado",
            datetime: 1714081291,
          },
          {
            self: false,
            message: "Ese mismo!",
            datetime: 1714081401,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Holaaa!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Chauuu!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Chauuu!!",
            datetime: 1714081291,
          },
          {
            self: true,
            message: "Chauuu!!",
            datetime: 1714081291,
          },
        ],
        contactInfo: {
          senderID: 1,
          pushName: "Pedro Lopez",
          profilePicture:
            "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
        },
      },
      {
        chatID: 2,
        jid: "59175034784@s.whatsapp.net",
        creadoEn: "2024-03-20T18:57:17.325Z",
        clienteID: 1,
        cliente: null,
        mensajes: [
          {
            self: false,
            message: "Necesito información sobre las poleras de venta",
            datetime: 1714081271,
          },
          {
            self: true,
            message: "Hola, el rosado",
            datetime: 1714081291,
          },
          {
            self: false,
            message: "Ese mismo!",
            datetime: 1714081401,
          },
        ],
        contactInfo: {
          senderID: 2,
          pushName: "Martin Juan",
          profilePicture:
            "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
        },
      },
    ],
  };
}
