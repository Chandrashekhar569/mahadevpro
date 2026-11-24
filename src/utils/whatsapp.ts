export const WHATSAPP_E164_NUMBER = '918726862336';
export const DEFAULT_WHATSAPP_MESSAGE = 'I want ID';

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_E164_NUMBER}?text=${encodeURIComponent(message)}`;
}
