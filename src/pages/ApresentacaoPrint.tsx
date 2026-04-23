import { presentationSlides } from "./Apresentacao";

const ApresentacaoPrint = () => {
  return (
    <div style={{ background: "#fff", margin: 0, padding: 0 }}>
      <style>{`
        @page { size: 1280px 720px; margin: 0; }
        html, body, #root { margin: 0; padding: 0; background: #fff; }
        .slide-print {
          width: 1280px;
          height: 720px;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          position: relative;
        }
        .slide-print:last-child { page-break-after: auto; }
      `}</style>
      {presentationSlides.map((Slide, i) => (
        <div key={i} className="slide-print">
          <Slide />
        </div>
      ))}
    </div>
  );
};

export default ApresentacaoPrint;
