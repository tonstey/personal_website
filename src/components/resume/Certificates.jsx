import certificates from "../../data/certificates";

export default function CertificateComponent() {
  return (
    <>
      <div>
        {certificates && (
          <div className="h-full max-w-full p-6">
            <div className="relative rounded-2xl border-2 border-[#dcd3aa] bg-[#f3e0c7] p-6">
              I do not have any certificates sadge
            </div>
          </div>
        )}
      </div>
    </>
  );
}
