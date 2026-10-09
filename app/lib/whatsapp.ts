// Destination for form submissions. International format, no spaces or symbols.
export const WHATSAPP_NUMBER = "917293402204";

/**
 * Builds a wa.me link with a pre-filled message.
 *
 * Values are URL-encoded individually, so `&`, `+` or `#` typed into a form
 * field can't truncate or corrupt the `?text=` query.
 */
export function whatsappUrl(lines: string[]) {
  const text = lines.map((line) => encodeURIComponent(line)).join("%0A");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}