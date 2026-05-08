export default function AccordionItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="border border-gray-200 rounded-2xl overflow-hidden group">
      <summary className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:bg-green-50 transition-colors cursor-pointer list-none">
        <span>{q}</span>
        <span className="text-2xl transition-transform duration-300 text-green-700 shrink-0 ml-4 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
    </details>
  );
}
