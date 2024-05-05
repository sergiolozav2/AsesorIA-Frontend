export function getPhoneFromJid(jid: string) {
  return jid.split("@")[0];
}
