import { useQuery } from "@tanstack/react-query";

export function useCreatedChannels() {
  const query = useQuery({
    queryFn: channelData,
    queryKey: ["channels"],
  });

  return query;
}

async function channelData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    list: [
      {
        wa_sesionID: "4d4d68f5-42ab-49a5-8865-99176f2769c5",
        creadoEn: "2024-03-20T18:29:15.848Z",
        creador: {
          usuarioID: 1,
          correo: "user@example.com",
          nombre: "Pedro",
        },
      },
      {
        wa_sesionID: "789ff366-5c7e-48b6-afff-e69f05ab29dc",
        creadoEn: "2024-03-20T23:30:20.085Z",
        creador: {
          usuarioID: 1,
          correo: "user@example.com",
          nombre: "Pedro",
        },
      },
    ],
  };
}
